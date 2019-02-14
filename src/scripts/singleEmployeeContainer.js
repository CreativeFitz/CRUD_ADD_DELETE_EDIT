const singleEmployeeFormat = (individualEmployeeObject) => {
    return `<div class="employee" id="employee-${individualEmployeeObject.id}">
    <h4>${individualEmployeeObject.firstName} ${individualEmployeeObject.lastName}</h4>
    <ul>
        <li>Email: ${individualEmployeeObject.email}</li>
        <li>Phone Number: ${individualEmployeeObject.phoneNumber}</li>
        <li>Birthday: ${individualEmployeeObject.birthday}</li>
        <li>Department: ${individualEmployeeObject.department}</li>
    </ul>
    <button type=button class="employeeDelete-btn" id="deleteEmployee-${individualEmployeeObject.id}">Delete ${individualEmployeeObject.firstName} ${individualEmployeeObject.lastName}'s employee data</button>
    <button type=button class="employeeEdit-btn" id="editEmployee-${individualEmployeeObject.id}">Edit ${individualEmployeeObject.firstName}'s info</button>
    </div>
    `
}