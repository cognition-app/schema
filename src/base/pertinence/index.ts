/**
 * Simple helper for allowing single values AND arrays of those values
 */
type orArray<T> = T | T[]

/**
 * String name of the day
 */
export enum NameOfDay {
  Sun = 'sun',
  Mon = 'mon',
  Tue = 'tue',
  Wed = 'wed',
  Thu = 'thu',
  Fri = 'fri',
  Sat = 'sat',
}

/**
 * String name of the month
 */
export enum NameOfMonth {
  Jan = 'jan',
  Feb = 'feb',
  Mar = 'mar',
  Apr = 'apr',
  May = 'may',
  Jun = 'jun',
  Jul = 'jul',
  Aug = 'aug',
  Sep = 'sep',
  Oct = 'oct',
  Nov = 'nov',
  Dec = 'dec',
}

/**
 * Recurring object, filters days, weeks, and months of a full year
 */
export interface Recurring {
  dayOfWeek?: orArray<'*' | number | NameOfDay>
  dayOfMonth?: orArray<'*' | number>
  dayOfYear?: orArray<'*' | number>
  weekOfMonth?: orArray<'*' | number>
  weekOfYear?: orArray<'*' | number>
  monthOfYear?: orArray<'*' | number | NameOfMonth>
}

/**
 * Pertinent object, defines a recurrance within a range
 */
export interface Pertinent {
  start: Date
  recurring: Recurring
  end: Date
}

/**
 * Pertinence object, a potential array of pertinent objects
 * 
 * TODO: Make pertinence work for specific times on specific days as well
 */
type Pertinence = orArray<Pertinent>
export default Pertinence
