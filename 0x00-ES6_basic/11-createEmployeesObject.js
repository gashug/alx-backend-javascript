// Using ES6 Computed Property Names

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
