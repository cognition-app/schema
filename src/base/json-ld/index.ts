/**
 * An explicit object which references the type that defines it.
 */
export default interface JSONLD<T extends string = string> {
  /**
   * JSON-LD style @type key holds global pointer to type specification
   */
  '@type': T

  /**
   * JSONLD's should be extendable (and are verifiable by asserting @type)
   */
  [key: string]: unknown
}
