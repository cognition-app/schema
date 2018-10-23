import Registry from '..'
import Plugin from '../..'

/**
 * An initialized registry plugin instance
 */
export default interface RegistryInstance<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/registry/instance'
> extends Registry<T> {
  /**
   * The initialized class ready to be utilized
   */
  items: Plugin[]
}
