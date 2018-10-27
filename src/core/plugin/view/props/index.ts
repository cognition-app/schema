import JSONSchema from "../../../../base/json-schema";

export default interface ViewProps<C extends JSONSchema = JSONSchema> {
  db: PouchDB.Database
  search: string
  settings?: C
}
