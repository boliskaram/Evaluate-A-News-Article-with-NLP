import { validateUrl} from "../js/checkURL"

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(validateUrl).toBeDefined()
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(validateUrl("test url invalid")).toBeFalsy()
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(validateUrl("https://jamesclear.com/five-step-creative-process")).toBeTruthy()
    })
})
