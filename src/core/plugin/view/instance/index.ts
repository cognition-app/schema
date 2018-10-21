import View from '..'
import ViewProps from '../props'

/**
 * An initialized view plugin instance
 */
export default interface ViewInstance extends View {
  /**
   * The initialized class ready to be rendered
   */
  cls: (props: ViewProps) => JSX.Element
}
