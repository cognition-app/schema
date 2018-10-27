import JSONSchema from '../../../base/json-schema'

/**
 * A View plugin for viewing and interacting with Documents
 */
export default interface View<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/view'
> extends JSONSchema<T> {
  /**
   * $schema of settings expected for the view
   */
  settings: string

  /**
   * Supported $schema's of documents for the view
   */
  supportedDocs: string[]
}
