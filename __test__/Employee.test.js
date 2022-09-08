const Employee = require("../lib/Employee");

test('if employee object will be created', () => {
    const employee = new Employee('Chi Chiu Lam', '01', 'cclam@gmail.com');
    expect(employee.name).toBe('Chi Chiu Lam');
    expect(employee.id).toBe('01');
    expect(employee.email).toBe('cclam@gmail.com');
});

test("if the employee's name will be created", () => {
    const employee = new Employee('Chi Chiu Lam', '01', 'cclam@gmail.com');
    expect(employee.getName()).toBe('Chi Chiu Lam');
});

test("if employee's id will be created", () => {
    const employee = new Employee('Chi Chiu Lam', '01', 'cclam@gmail.com');
    expect(employee.getId()).toBe('01');
});

test("if employee's email will be created", () => {
    const employee = new Employee('Chi Chiu Lam', '01', 'cclam@gmail.com');
    expect(employee.getEmail()).toBe('cclam@gmail.com');
});

test("if employee's role will be created", () => {
    const employee = new Employee('Chi Chiu Lam', '01', 'cclam@gmail.com');
    expect(employee.getRole()).toBe("Employee");
});