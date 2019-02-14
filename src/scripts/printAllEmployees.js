const printAllEmployees = () => {
    document.querySelector("#listOfEmployees-container").innerHTML = "";
    getallEmployees()
    .then(allEmployees => {
        allEmployees.forEach(singleEmployee =>
        {document.querySelector("#listOfEmployees-container").innerHTML += singleEmployeeFormat(singleEmployee)
    })
})
}
