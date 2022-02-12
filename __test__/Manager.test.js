const manager = require('../lib/Manager');

test('create a manager obj', () => {
    const manager = new Manager('');

    expect(manager.name).toBe('Manager');

})
