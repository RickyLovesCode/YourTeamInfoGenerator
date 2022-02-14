const Manager = require('../lib/Manager');

//TEST MANAGER OBJ
test('create manager obj', () => {
    const manager = new Manager();
    expect(typeof (manager)).toBe('object');
});

//TEST MANAGER NAME
test('Manager name', () => {
    const name = 'ricky';

    const manager = new Manager(name)

    expect(manager.getName()).toBe(name);

})

//TEST 'ROLE'
test('role is manager', () => {
    const testRole = 'Manager';
    const manager = new Manager('jen', 2, 'jen@gmail', 'ymca');

    expect(manager.getRole()).toBe(testRole);
})

//TEST 'OFFICENUMBER'
test('manager has a office number', () => {
    const officeNumbers = '2720';

    const manager = new Manager('ricky', 2, 'Ricky@gmail', officeNumbers);

    expect(manager.officeNumber).toBe(officeNumbers);
})