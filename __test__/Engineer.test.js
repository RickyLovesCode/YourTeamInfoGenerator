const Engineer = require('../lib/Engineer');
//TEST ENGINEER OBJ 
test('create engineer obj', () => {
    const engineer = new Engineer();
    expect(typeof (engineer)).toBe('object');
});

//TEST ENGINEER NAME
test('Engineer name', () => {
    const name = 'ryan';

    const engineer = new Engineer(name)

    expect(engineer.getName()).toBe(name);

})

//TEST 'ROLE'npm 
test('role is engineer', () => {
    const testRole = 'Engineer';
    const engineer = new Engineer('jen', 2, 'jen@gmail', 'ymca');

    expect(engineer.getRole()).toBe(testRole);
})
//TEST 'GITHUB'
test('Engineer has github', () => {
    const testInfo = 'githubname';

    const engineer = new Engineer('ricky', 1, 'Ricky@gmail', testInfo);

    expect(engineer.github).toBe(testInfo);
})
