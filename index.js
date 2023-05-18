//Disclaimer: the reference is constant, but you should not be modifying
//something that is meant to be constant. I don't like it.
const employee = {
    name: "",
    streetAddress:"",
}

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    var myemp = {
        name: employee.name,
        streetAddress: employee.streetAddress,
    }
    myemp[key] = value;
    return myemp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key)
{
    //console.log("toString(employee) = " + toString(employee));
    //console.log("employee.keys() = " + Object.keys(employee));
    //console.log("employee.values() = " + Object.values(employee));
    var myemp = {
        name: employee.name,
        streetAddress: employee.streetAddress,
    }
    delete myemp[key];
    //console.log("toString(myemp) = " + toString(myemp));
    //console.log("myemp.keys() = " + Object.keys(myemp));
    //console.log("myemp.values() = " + Object.values(myemp));
    return myemp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    //console.log("OLD toString(employee) = " + toString(employee));
    delete employee[key];
    //console.log("NEW toString(employee) = " + toString(employee));
    return employee;
}

function toString(employee)
{
    return "Employee name: " + employee.name + " and street address: " + employee.streetAddress;
}
