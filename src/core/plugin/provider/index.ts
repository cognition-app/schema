import JSONLD from '../../../base/json-ld'

/**
 * A Provider plugin for storing/retreiving other documents
 */
export default interface Provider extends JSONLD<
  'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/provider'
> {
  /**
   * @type of settings expected for the provider
   */
  settings: string
}
