/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  arr.map(function(employee) {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(function(emp) {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("After adding new employee:", arr);
}

function removeAdmin() {
  let filteredArr = arr.filter(function(emp) {
    return emp.profession !== "admin";
  });
  arr = filteredArr;
  console.log("After removing admin:", arr);
}

function concatenateArray() {
  let newEmployees = [
    { id: 5, name: "ritik", age: "21", profession: "designer" },
    { id: 6, name: "sumit", age: "22", profession: "coder" },
    { id: 7, name: "ayush", age: "20", profession: "tester" }
  ];

  let combinedArr = arr.concat(newEmployees);
  console.log("After concatenating arrays:", combinedArr);
}
