import Provider from '..'
import JSONSchema from '../../../../base/json-schema'

/**
 * An initialized provider plugin instance
 */
export default interface ProviderInstance<
  Settings extends JSONSchema = JSONSchema,
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/provider'
> extends Provider<T> {
  /**
   * The initialized class ready to be utilized
   */
  cls: (settings: Settings) => PouchDB.Database
}
