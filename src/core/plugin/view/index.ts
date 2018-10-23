import JSONLD from '../../../base/json-ld'

/**
 * A View plugin for viewing and interacting with Documents
 */
export default interface View<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/view'
> extends JSONLD<T> {
  /**
   * @type of settings expected for the view
   */
  settings: string

  /**
   * Supported @type's of documents for the view
   */
  supportedDocs: string[]
}
