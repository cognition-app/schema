import JSONLD from "../../../../base/json-ld";

export default interface ViewProps<C extends JSONLD = JSONLD> {
  db: PouchDB.Database
  search: string
  settings?: C
}
