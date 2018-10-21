import Provider from '..'
import JSONLD from '../../../../base/json-ld'

/**
 * An initialized provider plugin instance
 */
export default interface ProviderInstance extends Provider {
  /**
   * The initialized class ready to be utilized
   */
  cls: (settings: JSONLD) => PouchDB.Database<JSONLD>
}
