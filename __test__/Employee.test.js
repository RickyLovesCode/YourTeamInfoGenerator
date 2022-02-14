const Employee = require('../lib/Employee');
//TEST EMPLOYEE OBJ
test('create employee obj', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
});


//TEST EMPLOYEE NAME
test('Employee name', () => {
    const name = 'richard';

    const employee = new Employee(name)

    expect(employee.getName()).toBe(name);

})

//TEST ID
test("Employee id", () => {
    const ID = '1';

    const employee = new Employee('jen', ID, 'jen@gmail')

    expect(employee.getId()).toEqual(ID);

})


//TEST 'ROLE'
test('role is employee', () => {
    const testRole = 'Employee';
    const employee = new Employee('jen', 2, 'jen@gmail',);

    expect(employee.getRole()).toBe(testRole);
})






