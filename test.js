var ZSchema = require('z-schema')
var glob = require('glob')
var https = require('https')
var http = require('http')
var fs = require('fs')

function validateWithAutomaticDownloads(validator, data, schema, callback) {
  return new Promise(function (resolve, reject) {
    var lastResult

    function finish() {
      var err = validator.getLastErrors()
      if (err)
        reject(err)
      else
        resolve(lastResult)
    }

    function validate() {
      lastResult = validator.validate(data, schema)
      var missingReferences = validator.getMissingRemoteReferences()
      if (missingReferences.length > 0) {
        var finished = 0
        missingReferences.forEach(function (url) {
          var request
          if(/https:\/\/.+/.test(url)) {
            request = https.request
          } else if(/http:\/\/.+/.test(url)) {
            request = http.request
          } else {
            reject(new Error('Unknown protocol'))
          }
          console.log('fetching ' + url)
          var req = request(url, function (res) {
            var body = ""
            res.setEncoding('utf8')
            res.on("data", function (chunk) {
              body += chunk
            })
            res.on("end", function () {
              console.log('fetched ' + url)
              validator.setRemoteReference(url, JSON.parse(body))
              finished++
              if (finished === missingReferences.length) {
                validate()
              }
            })
          })
          req.end()
        })
      } else {
        finish()
      }
    }
    validate()
  })
}

function get_data_and_schema(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, 'utf-8', function (err, rawSchema) {
      if (err) {
        reject(err)
      } else {
        var schema = JSON.parse(rawSchema)
        var data = schema['examples']
        resolve({
          data: data,
          schema: schema,
        })
      }
    })
  })
}

function globPromise(arg, opts) {
  return new Promise(function(resolve, reject) {
    glob(arg, opts, function(err, files) {
      if(err) {
        reject()
      } else {
        resolve(files)
      }
    })
  })
}

var validator = new ZSchema()

process.argv
  .slice(2)
  .map(globPromise)
  .reduce(function(promise, filePromise) {
    return promise.then(function() {
      return filePromise
    }).then(function (files) {
      return files.reduce(function(promise, file) {
        return promise.then(function() {
          return get_data_and_schema(file)
        }).then(function(data_schema) {
          if (data_schema.data === undefined) {
            return Promise.reject(new Error('No examples defined'))
          }
          return data_schema.data.reduce(function(promise, example) {
            return promise.then(function() {
              return validateWithAutomaticDownloads(
                validator,
                example,
                data_schema.schema,
              )
            })
          }, Promise.resolve([]))
        }).then(function(res) {
          if (res)
            console.log('[ SUCCESS ] ' + file + ': ' + res)
          else
            console.log('[ FAIL ] ' + file + ': ' + res)
        }).catch(function (err) {
          console.error('[ ERROR ] ' + file + ':')
          console.error(err)
        })
      }, Promise.resolve([]))
    })
  }, Promise.resolve([]))
