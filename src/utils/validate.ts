import { Validation } from '../../typings/rematch'

/**
 * Validate
 *
 * takes an array of arrays of validations and
 * throws if an error occurs
 */
/* istanbul ignore next */
const validate = (validations: Validation[]): void => {
  if (process.env.NODE_ENV !== 'production') {
    validations.forEach((validation: Validation) => {
      const condition = validation[0]
      const errorMessage = validation[1]
      if (condition) {
        throw new Error(errorMessage)
      }
    })
  }
}

export default validate
