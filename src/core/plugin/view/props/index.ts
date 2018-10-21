import JSONLD from "../../../../base/json-ld";

export default interface ViewProps {
  db: PouchDB.Database
  search: string
  settings?: JSONLD
}
