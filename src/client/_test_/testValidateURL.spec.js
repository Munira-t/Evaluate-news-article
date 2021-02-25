/* Import the js file to test. */
import 'babel-polyfill'
import isURL from '../js/validateURL.js'

/* udacity classroom instruction 2 of Evaluate a News Article with Natural Language Processing */
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe('Testing the isURL functionality', () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test('Testing the isURL() is defiend', () => {
    // Define the input for the function, if any, in the form of variables/array
    // Define the expected output, if any, in the form of variables/array
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(isURL()).toBeDefined()
  })

  /* Test if isURL() is a function. */
  test('Testing if isURL is a function', () => {
    expect(typeof isURL).toBe('function')
  })

  /* Test isURL() url validation. */
  test('Testing URL validation', async () => {
    /* Test Valid URL */
    expect(isURL('https://www.udacity.com/')).toBe(true)
    /* Test unvalid URL */
    expect(isURL('htrs$$stps://www.udacity.com/')).toBe(false)
  })
})