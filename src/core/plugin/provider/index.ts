import JSONLD from '../../../base/json-ld'

/**
 * A Provider plugin for storing/retreiving other documents
 */
export default interface Provider<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/provider'
> extends JSONLD<T> {
  /**
   * @type of settings expected for the provider
   */
  settings: string
}
