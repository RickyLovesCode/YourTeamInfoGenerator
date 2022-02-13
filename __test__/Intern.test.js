const Intern = require('../lib/Intern');
//TEST INTERN OBJ
test('create intern obj', () => {
    const intern = new Intern();
    expect(typeof (intern)).toBe('object');
});


//TEST INTERN NAME
test('Intern name', () => {
    const name = 'gabby';

    const intern = new Intern(name)

    expect(intern.getName()).toBe(name);

})

//TEST ROLE
test('role is intern', () => {
    const testRole = 'Intern';
    const intern = new Intern('jen', 2, 'jen@gmail', 'ymca');

    expect(intern.getRole()).toBe(testRole);

})

//TEST 'SCHOOL'
test("intern's school is MSU", () => {
    const testInfo = 'schoolName';

    const intern = new Intern('ricky', 1, 'Ricky@gmail', testInfo);

    expect(intern.school).toBe(testInfo);
})