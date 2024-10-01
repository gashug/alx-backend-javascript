// Using ES6 Method Properties

export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Using spread syntax to clone the employeesList

    // ES6 Method Property Syntax
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
