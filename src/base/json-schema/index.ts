/**
 * An explicit object which references the type that defines it.
 */
export default interface JSONSchema<T extends string = string> {
  /**
   * JSONSchema style $schema key holds global pointer to type specification
   */
  '$schema': T
}
