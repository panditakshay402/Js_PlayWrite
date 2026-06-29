// function showEmployees() {

//     let employees = [
//         {
//             name: "Akshay",
//             role: "Tester"
//         },
//         {
//             name: "Rahul",
//             role: "Developer"
//         },
//         {
//             name: "Priya",
//             role: "Manager"
//         }
//     ];


//     let div = document.getElementById("employeeDiv");
//     let table = document.createElement("table");
//     table.border = "5";
//     let headerRow = document.createElement("tr");
//     let th1 = document.createElement("th");
//     th1.innerText = "Name";
//     let th2 = document.createElement("th");
//     th2.innerText = "Role";

//     headerRow.appendChild(th1);
//     headerRow.appendChild(th2);

//     table.appendChild(headerRow);


//     employees.forEach(function (emp) {

//         let row = document.createElement("tr");

//         let td1 = document.createElement("td");
//         td1.innerText = emp.name;

//         let td2 = document.createElement("td");
//         td2.innerText = emp.role;

//         row.appendChild(td1);
//         row.appendChild(td2);

//         table.appendChild(row);
//     });

//     div.appendChild(table);
// }


const showEmployees = () => {

    let employees = [
        { name: "Akshay", role: "Developer" },
        { name: "Rahul", role: "Tester" },
        { name: "Priya", role: "Manager" }
    ];

    let div = document.getElementById("employeeDiv");
    let table = document.createElement("table");
    table.border = "5";


    let header = `
        <tr>
            <th>Name</th>
            <th>Role</th>
        </tr>
    `;


    let rows = "";

    employees.forEach(emp => {
        rows += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.role}</td>
            </tr>
        `;
    });


    table.innerHTML = header + rows;


    div.appendChild(table);
}