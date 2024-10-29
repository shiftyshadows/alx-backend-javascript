export default function createIteratorObject(report) {
  const { allEmployees } = report;

  // Use a generator function to yield each employee in every department
  function* employeeIterator() {
    for (const department of Object.values(allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeIterator();
}
