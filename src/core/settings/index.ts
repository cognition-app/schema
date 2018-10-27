import JSONSchema from '../../base/json-schema'

/**
 * A Settings object
 * 
 * TODO: Provide a way to store settings in other databases
 */
export default interface Registry<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/settings'
> extends JSONSchema<T> {
  /**
   * Name of the settings instance
   */
  name: string

  /**
   * Settings $schema-specific definition
   */
  content: T
}
