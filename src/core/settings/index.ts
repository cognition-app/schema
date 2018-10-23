import JSONLD from '../../base/json-ld'

/**
 * A Settings object
 * 
 * TODO: Provide a way to store settings in other databases
 */
export default interface Registry<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/settings'
> extends JSONLD<T> {
  /**
   * Name of the settings instance
   */
  name: string

  /**
   * Settings @type-specific definition
   */
  content: T
}
