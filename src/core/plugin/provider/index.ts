import JSONSchema from '../../../base/json-schema'

/**
 * A Provider plugin for storing/retreiving other documents
 */
export default interface Provider<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/provider'
> extends JSONSchema<T> {
  /**
   * $schema of settings expected for the provider
   */
  settings: string
}
