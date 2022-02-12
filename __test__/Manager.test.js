const Manager = require('../lib/Manager');


test('Manager name', () => {
    const name = 'ricky';

    const manager = new Manager(name)

    expect(manager.getName()).toBe(name);

})
