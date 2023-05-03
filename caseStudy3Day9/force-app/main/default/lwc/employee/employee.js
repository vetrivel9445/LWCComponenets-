import { LightningElement } from 'lwc';

export default class Employee extends LightningElement {
    isEmpty = false;
    isNotEmpty = false;
    filterSalary = [];
    employee = [{
        name: 'john',
        salary: 50000,
        position: 'developer',
    }, {
        name: 'daniles',
        salary: 60000,
        position: 'production',
    }, {
        name: 'messy',
        salary: 40000,
        position: 'testing',
    }];
    handleChange(event) {
        this.filterSalary = this.employee.filter(a => a.salary == event.target.value);
        if (this.filterSalary.length > 0) {
            this.isNotEmpty = true;
            this.isEmpty = false;
        } else if (this.filterSalary.length > 0 && this.isEmpty == true) {
            this.isEmpty = false;
        } else {
            this.isEmpty = true;
        }
    }
}