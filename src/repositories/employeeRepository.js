const Employee = require('../models/Employee');

class EmployeeRepository {
    async findAll() {
        return await Employee.find();
    }

    async findById(id) {
        return await Employee.findById(id);
    }

    async create(data) {
        return await Employee.create(data);
    }

    async update(id, data) {
        return await Employee.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Employee.findByIdAndDelete(id);
    }
}

module.exports = new EmployeeRepository();
