import Registry from '..'
import Plugin from '../..'

/**
 * An initialized registry plugin instance
 */
export default interface RegistryInstance extends Registry {
  /**
   * The initialized class ready to be utilized
   */
  items: Plugin[]
}
