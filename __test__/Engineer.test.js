const Engineer = require('../lib/Engineer');

test('Engineer has github', () => {
    const testInfo = 'githubname';

    const engineer = new Engineer('ricky', 1, 'Ricky@gmail', testInfo);

    expect(engineer.github).toBe(testInfo);
})