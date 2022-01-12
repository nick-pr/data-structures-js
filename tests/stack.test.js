const { Stack } = require('../stack')

describe('Stack', () => {
    it('should have a functional push method', () => {
        const stack = new Stack()
        stack.push('hello')
        expect(stack.items).toEqual({ 1: 'hello' })
        expect(stack.height).toBe(1)
    })
    it('should have a functional peek method. Returns top of stack.', () => {
        const stack = new Stack()
        stack.push('hello')
        stack.push('there')
        expect(stack.peek()).toBe('there')
        expect(stack.items).toEqual({ 1: 'hello', 2: 'there' })
    })
    it('should have a functional pop method. Returns popped.', () => {
        const stack = new Stack()
        stack.push('hello')
        const popped = stack.pop()
        expect(popped).toBe('hello')
        expect(stack.height).toBe(0)
    })
    it('should have a functional size method. Returns size.', () => {
        const stack = new Stack()
        stack.push('dog')
        expect(stack.size()).toBe(1)
    })
})
