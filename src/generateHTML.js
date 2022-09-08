const generateHTML = (team) => {

    // create the manager card
    const generateManager = (manager) => {
        return `
        <div class="col-4 mt-4 teamcard">
                <div class="card">
                    <div class="card-header bg-primary">
                        <h3>${manager.getName().toUpperCase()}</h3>
                        <h4>${manager.getRole()}</h4><i class="fa-sharp fa-solid fa-people-roof fa-xl"></i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${manager.getId()}</p>
                        <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
                    </div>
                </div>
        </div>
          `;
    };

    // create the engineer card
    const generateEngineer = (engineer) => {
        return `
        <div class="col-4 mt-4 teamcard">
            <div class="card">
                <div class="card-header bg-success">
                    <h3>${engineer.getName().toUpperCase()}</h3>
                    <h4>${engineer.getRole()}</h4><i class="fa-solid fa-computer fa-xl"></i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.getId()}</p>
                    <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                    <p class="github">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
                </div>
            </div>
        </div>
          `;
    };

    // create the intern card
    const generateIntern = (intern) => {
        return `
        <div class="col-4 mt-4 teamcard">
            <div class="card">
                <div class="card-header bg-danger">
                    <h3>${intern.getName().toUpperCase()}</h3>
                    <h4>${intern.getRole()}</h4><i class="fa-solid fa-graduation-cap fa-xl"></i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${intern.getId()}</p>
                    <p class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                    <p class="school">School: ${intern.getSchool()}</p>
                </div>
            </div>
        </div>
          `;
    };

    const html = [];
    html.push(
        team
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => generateManager(manager))
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => generateEngineer(engineer))
            .join("")
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => generateIntern(intern))
            .join("")
    );

    return html.join("")
};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="stylesheet.css">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico">
        <script src="https://kit.fontawesome.com/258cb34eee.js" crossorigin="anonymous"></script>
        <title>Your Team Profile</title>
    </head>
    
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <h1 class="mt-5 w-100 text-center" id="navbar-text">Your Team Profile</h1>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                ${generateHTML(team)}
                </div>
            </div>
        </main>
    </body>
    
    </html>
      `;
};
