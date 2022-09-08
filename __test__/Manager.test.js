const Manager = require("../lib/Manager");

test('if manager object will be created', () => {
    const manager = new Manager('Chi Chiu Lam', '01', 'cclam@gmail.com', '101');
    expect(manager.name).toBe('Chi Chiu Lam');
    expect(manager.id).toBe('01');
    expect(manager.email).toBe('cclam@gmail.com');
    expect(manager.officeNumber).toBe('101');
});

test("if the manager's name will be created", () => {
    const manager = new Manager('Chi Chiu Lam', '01', 'cclam@gmail.com', '101');
    expect(manager.getName()).toBe('Chi Chiu Lam');
});

test("if manager's id will be created", () => {
    const manager = new Manager('Chi Chiu Lam', '01', 'cclam@gmail.com', '101');
    expect(manager.getId()).toBe('01');
});

test("if manager's email will be created", () => {
    const manager = new Manager('Chi Chiu Lam', '01', 'cclam@gmail.com', '101');
    expect(manager.getEmail()).toBe('cclam@gmail.com');
});

test("if manager's role will be created", () => {
    const manager = new Manager('Chi Chiu Lam', '01', 'cclam@gmail.com');
    expect(manager.getRole()).toBe("Manager");
});
