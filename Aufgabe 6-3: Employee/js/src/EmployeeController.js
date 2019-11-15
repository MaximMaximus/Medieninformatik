var employeeController = (function() {
    
    function publicInit() {
        setClickHandlers();
    }
    
    function setClickHandlers() {
        var employeeAddButton = document.querySelector(".add-employee");
        employeeAddButton.addEventListener("click", addEmployee);
    }
    
    function addEmployee() {
        var employeeName = document.getElementById("employee_name_input").value;
        var employeeEMail = document.getElementById("employee_email_input").value;
        var employeeRoom = document.getElementById("employee_room_input").value;
        
        var employee = employeeDatabase.createEmployee(employeeName, employeeEMail, employeeRoom);
        employeeDatabase.sortArray();
        addEmployeeToView(employee);
        
    }
    
    function addEmployeeToView(employee) {
        if (typeof(employee) != undefined) {
            var employeeID = employee.id;
            var employeeEMail = employee.email;
            var employeeName = employee.name;
            var employeeRoom = employee.room;
        }
        node = Node.fromString("<li class='employee' data-id='" + employeeID + "'>\
        <img class='employee-picture' src='res/images/user.png' />\
        <span class='employee-id'>" + employeeID + "</span>\
        <input class='employee-name first-input' value='" + employeeName + "' placeholder='name'>\
        <input class='employee-email' value='" + employeeEMail + "' placeholder='email'>\
        <input class='employee-room' value='" + employeeRoom + "' placeholder='room'></li>");
        
        node.addEventListener("click", removeEmp);
        
        var employeesList = document.getElementById("employees");
        employeesList.appendChild(node);
        //employeeDatabase.print();
    }

    function removeEmp(event) {
        var employee = event.target.dataset.id;
        console.log("event test " + employee);
        employeeDatabase.removeEmployee(employee);
        var employeeList = document.getElementById("employees");
        employeeList.removeChild(event.target);
    }
    
    return {
        init: publicInit
    };
})();