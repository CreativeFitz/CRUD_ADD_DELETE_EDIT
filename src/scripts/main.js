
printAllEmployees();

document.querySelector("#addEmployee-btn").addEventListener("click", ()=>{


const employeeToAdd = singleEmployee (
    document.querySelector("#firstName-input").value,
    document.querySelector("#lastName-input").value,
    document.querySelector("#emailAddress-input").value,
    document.querySelector("#phoneNumber-input").value,
    document.querySelector("#birthday-input").value,
    document.querySelector("#department-input").value
);

createTask(employeeToAdd).then(() => {
    printAllEmployees()
})
});

document.querySelector("#listOfEmployees-container").addEventListener("click", () => {
if (event.target.classList.contains("employeeDelete-btn")){
    const employeeID = event.target.id.split("-")[1];
    deleteEmployee(employeeID)
    .then(() => {
        printAllEmployees()
    })
}
else if(event.target.classList.contains("employeeEdit-btn")){
    getOneEmployee(employeID)
    .then((singleEmployeeInfo)=> {
        console.log(singleEmployeeInfo);
        document.querySelector(`#employee-${employee.id}`).innerHTML = buildEditForm(singleEmployeeInfo);
    })
}})