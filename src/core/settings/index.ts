import JSONLD from '../../base/json-ld'

/**
 * A Settings object
 * 
 * TODO: Provide a way to store settings in other databases
 */
export default interface Registry<T extends JSONLD = JSONLD> extends JSONLD<
  'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/settings'
> {
  /**
   * Name of the settings instance
   */
  name: string

  /**
   * Settings @type-specific definition
   */
  content: T
}
