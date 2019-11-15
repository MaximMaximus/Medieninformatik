//Todo: Implement this file as a module according to the revealing module pattern
var employeeDatabase = (function () {

    var employees = [];

    function createId() {
        var id = 0;
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                id++;
            }
        }
        return id;
    }

    function checkId(id, name) {
        var i = 0;
        for (i = 0; i < employees.length; i++) {
            if (employees[i].id === id && employees[i].name === name) {
                return i;
            }
        }
        return -1;
    }

    function createEmployee(name, email, room) {
        var id = createId();
        var newEmployee = new Employee(id, name, email, room);
        employees.push(newEmployee);
        return newEmployee;
    }

    function updateEmployee(id, name, email, room) {
        var arrayId = checkId(id, name);
        if (arrayId === -1) {
            console.log("Invalid ID (" + id + "). Cannot update Person.");
            return undefined;
        } else {
            var newEmployee = new Employee(id, name, email, room);
            employees[arrayId] = newEmployee;
            return newEmployee;
        }
    }

    function removeEmployee(id) {
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].id == id) {
                employees.splice(i, 1);
            }
        }
    }

    function sortArray() {
        employees.sort(function (a, b) {
            return a.id - b.id;
        });
    }

    // for debugging
    function print() {
        for (var i = 0; i < employees.length; i++) {
            console.log(employees[i].toString());
        }
    }

    return {
        createEmployee: createEmployee,
        updateEmployee: updateEmployee,
        removeEmployee: removeEmployee,
        sortArray: sortArray,
        print: print
    };

})();