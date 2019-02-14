const createTask = taskObject => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObject)
    });
  };


  const getallEmployees = () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json());
  };

  const deleteEmployee = employeeId => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
      method: "DELETE"
    });
  };

  const getOneEmployee = employeeId => fetch(`http://localhost:8088/employees/${employeeId}`).then(singleEmployee => singleEmployee.json());

  const editTask = (idParam, employeeObject) => {
    return fetch(`http://localhost:8088/employees/${idParam}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(employeeObject)
    })
  }