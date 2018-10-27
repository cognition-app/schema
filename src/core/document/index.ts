import JSONSchema from '../../base/json-schema'
import Pertinence from '../../base/pertinence'

/**
 * A cognition Document
 */
export default interface Document<T extends JSONSchema = JSONSchema> extends JSONSchema<
  'https://raw.githubusercontent.com/cognition-app/schema/master/dist/core/document'
> {
  /**
   * Name of the document
   */
  name: string

  /**
   * Tags categorizing the document
   */
  tags: string[]

  /**
   * (optional) Pertinence object for when the document is pertinent
   */
  pertinence?: Pertinence

  /**
   * Document $schema-specific definition
   */
  content: T
}
