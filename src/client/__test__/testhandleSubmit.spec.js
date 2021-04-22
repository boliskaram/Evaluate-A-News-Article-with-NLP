
import { handleSubmit } from "../js/formHandler"
import "babel-polyfill"
test("test handleSubmit function", () => {
    expect(handleSubmit).toBeDefined()
})