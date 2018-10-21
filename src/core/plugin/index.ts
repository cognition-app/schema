import JSONLD from '../../base/json-ld'

/**
 * A cognition Plugin providing extra functionality
 */
export default interface Plugin<T extends JSONLD = JSONLD> extends JSONLD<
  'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin'
> {
  /**
   * Unique name of the plugin
   */
  name: string

  /**
   * Informative description of the plugin
   */
  description?: string

  /**
   * Entrypoint of the plugin relative to the package
   */
  main: string

  /**
   * Version of the plugin
   */
  version: string

  /**
   * Plugin @type-specific definition, type of plugin defined in here
   */
  cognition: T
}
