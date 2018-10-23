import Provider from '..'
import JSONLD from '../../../../base/json-ld'

/**
 * An initialized provider plugin instance
 */
export default interface ProviderInstance<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/provider'
> extends Provider<T> {
  /**
   * The initialized class ready to be utilized
   */
  cls: (settings: JSONLD) => PouchDB.Database
}
