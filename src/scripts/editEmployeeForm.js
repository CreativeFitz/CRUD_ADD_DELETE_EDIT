const editEmployeeForm = (singleEmployeeParam) => {
    return `<div class="employee" id="employee-${singleEmployeeParam.id}">
    <h4>${singleEmployeeParam.firstName} ${singleEmployeeParam.lastName}</h4>
    <ul>
        <li>Email: ${singleEmployeeParam.email}</li>
        <li>Phone Number: ${singleEmployeeParam.phoneNumber}</li>
        <li>Birthday: ${singleEmployeeParam.birthday}</li>
        <li>Department: ${singleEmployeeParam.department}</li>
    </ul>
    <button type=button class="employeeDelete-btn" id="deleteEmployee-${singleEmployeeParam.id}">Delete ${singleEmployeeParam.firstName} ${singleEmployeeParam.lastName}'s employee data</button>
    <button type=button class="employeeEdit-btn" id="editEmployee-${singleEmployeeParam.id}">Edit ${singleEmployeeParam.firstName}'s info</button>
    </div>
    `
}