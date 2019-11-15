/* Uncomment the following code, after object and module were created
to test whether the app is working as expected */

employeeDatabase.createEmployee("Lester Nygard", "nygard@fargo.com", "Bemidji Diner");
employeeDatabase.createEmployee("Lorne Malvo", "lorne@fargo.com", "Bemidji Diner");

console.log("Zwei Personen erstellt:");
employeeDatabase.print();

console.log("Lester geändert:");
var resultUpdateSuccess = employeeDatabase.updateEmployee(0, "Lester Nygard", "nygard@fargo.com", "Office");
console.log(resultUpdateSuccess.toString());

console.log("Versuch Lester mit falscher ID zu ändern:");
var resultUpdateFail = employeeDatabase.updateEmployee(1, "Lester Nygard", "nygard@fargo.com", "Office");
console.log(resultUpdateFail);

console.log("Erneute Ausgabe:")
employeeDatabase.print();