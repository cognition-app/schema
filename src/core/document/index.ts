import JSONLD from '../../base/json-ld'
import Pertinence from '../../base/pertinence'

/**
 * A cognition Document
 */
export default interface Document<T extends JSONLD = JSONLD> extends JSONLD<
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
   * Document @type-specific definition
   */
  content: T
}
