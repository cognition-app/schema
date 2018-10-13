import fs from 'fs'
import glob from 'glob'
import path from 'path'
import mkdirp from 'mkdirp'
import process from 'process'
import { compileFromFile } from 'json-schema-to-typescript'

const dist = 'dist'

async function main(args) {
  for(const arg of args) {
    for(const file of glob.sync(arg)) {
      const ts = await compileFromFile(file)
      const dir = path.join(
          dist,
          path.dirname(file),
      )
      mkdirp.sync(dir)
      fs.writeFileSync(
        path.join(
          dir,
          path.basename(file, '.json') + '.d.ts'
        ),
        ts
      )
    }
  }
}
main(
  process.argv.slice(process.argv.indexOf('--'))
).then(() => {})
