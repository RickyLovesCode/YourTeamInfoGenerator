const Employee = require('../lib/Employee');

test('create employee obj', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
});



