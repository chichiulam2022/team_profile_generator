const Engineer = require('../lib/Engineer');

test('if engineer object will be created', () => {
    const engineer = new Engineer('Chi Chiu Lam', '01', 'cclam@gmail.com', 'chichiulam2020');
    expect(engineer.name).toBe('Chi Chiu Lam');
    expect(engineer.id).toBe('01');
    expect(engineer.email).toBe('cclam@gmail.com');
    expect(engineer.github).toBe('chichiulam2020')
});

test("if engineer's GitHub will be created", () => {
    const engineer = new Engineer('Chi Chiu Lam', '01', 'cclam@gmail.com', 'chichiulam2020');
    expect(engineer.getGithub()).toBe('chichiulam2020');
});

test("if engineer's role will be created", () => {
    const engineer = new Engineer('Chi Chiu Lam', '01', 'cclam@gmail.com', 'chichiulam2020');
    expect(engineer.getRole()).toBe("Engineer");
});