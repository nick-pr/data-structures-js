const { Queue } = require('../queue')

describe('Queue', () => {
    const queue = new Queue()
    it('have a functional enqueue method.', () => {
        queue.enqueue('hello')
        expect(queue.items).toEqual(['hello'])
    })
    it('have a functional dequeue method. Return item at front', () => {
        queue.enqueue('there')
        expect(queue.dequeue()).toBe('hello')
        expect(queue.items).toEqual(['there'])
    })
    it('have a functional peek method', () => {
        queue.enqueue('apples')
        expect(queue.peek()).toBe('there')
        expect(queue.items).toEqual(['there', 'apples'])
    })
})
