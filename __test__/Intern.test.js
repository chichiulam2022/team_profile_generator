const Intern = require('../lib/Intern');

test('if intern object will be created', () => {
    const intern = new Intern('Chi Chiu Lam', '01', 'cclam@gmail.com', 'University of Toronto');
    expect(intern.name).toBe('Chi Chiu Lam');
    expect(intern.id).toBe('01');
    expect(intern.email).toBe('cclam@gmail.com');
    expect(intern.school).toBe('University of Toronto');
});

test("if intern's school will be created", () => {
    const intern = new Intern('Chi Chiu Lam', '01', 'cclam@gmail.com', 'University of Toronto');
    expect(intern.getSchool()).toBe('University of Toronto');
});

test("if intern's role will be created", () => {
    const intern = new Intern('Chi Chiu Lam', '01', 'cclam@gmail.com', 'University of Toronto');
    expect(intern.getRole()).toBe("Intern");
});