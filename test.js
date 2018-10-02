import assert from 'assert'
import fetch from 'fetch-node'
import fs from 'fs'
import glob from 'glob'
import ZSchema from 'z-schema'

function validateWithDownload(validator, data, schema) {
  while(true) {
    const lastResult = validator.validate(data, schema)
    const missingReferences = validator.getMissingRemoteReferences()
    if (missingReferences.length === 0) {
      return lastResult
    } else {
      for(const url of missingReferences) {
        validator.setRemoteReference(
          JSON.parse(
            fetch(url)
          )
        )
      }
    }
  }
}

for(const arg of ["core/**/*.json", "base/**/*.json"]) {
  for(const file of glob.sync(arg)) {
    describe(file, function() {
      let validator, schema, examples

      before(function() {
        validator = new ZSchema()
        schema = JSON.parse(fs.readFileSync(file, 'utf8'))
        examples = schema['examples']
      })

      it('validates', function() {
        validator.validateSchema(schema)
      })

      it('examples validate', function() {
        if(examples !== undefined && examples.length >= 1) {
          for (const example of examples) {
            assert.equal(
              validateWithDownload(validator, example, schema),
              true
            )
          }
        } else {
          assert.fail('no examples defined')
        }
      })
    })
  }
}
