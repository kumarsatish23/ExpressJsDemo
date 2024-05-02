const employeeRepository = require('../repositories/employeeRepository');

class EmployeeService {
    async getAllEmployees() {
        return await employeeRepository.findAll();
    }

    async getEmployeeById(id) {
        return await employeeRepository.findById(id);
    }

    async createEmployee(data) {
        return await employeeRepository.create(data);
    }

    async updateEmployee(id, data) {
        return await employeeRepository.update(id, data);
    }

    async deleteEmployee(id) {
        return await employeeRepository.delete(id);
    }
}

module.exports = new EmployeeService();
