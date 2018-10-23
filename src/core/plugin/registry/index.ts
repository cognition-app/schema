import JSONLD from '../../../base/json-ld'

/**
 * A Registry plugin, providing a list of other plugins to search through
 */
export default interface Registry<
  T extends string = 'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/plugin/registry'
> extends JSONLD<T> {
}
