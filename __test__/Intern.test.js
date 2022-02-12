const Intern = require('../lib/Intern');

test('role is intern', () => {
    const testRole = 'Intern';
    const intern = new Intern('jen', 2, 'jen@gmail', 'ymca');

    expect(intern.getRole()).toBe(testRole);

})