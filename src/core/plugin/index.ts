import JSONSchema from '../../base/json-schema'

/**
 * A cognition Plugin providing extra functionality
 */
export default interface Plugin<
  Content extends JSONSchema = JSONSchema,
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin',
> extends JSONSchema<T> {
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
   * Plugin $schema-specific definition, type of plugin defined in here
   */
  cognition: Content
}
