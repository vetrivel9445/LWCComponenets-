import { LightningElement } from 'lwc';

export default class EmployeeLst extends LightningElement {
    employeeLst = [];
    input = 0;
    index = 0;
    output;
    name;
    email;
    id;
    url = "https://api.onlinewebtutorblog.com/employees";
    handleChange(event) {
        console.log(event.target.value)
        this.input = event.target.value - 1;
    }
    async handleClick(event) {
        console.log(event.target.name);
        if (event.target.name == 'prvBtn' && this.index > 0 && this.index <= this.employeeLst.length - 1) {
            this.index = this.index - 1;
            console.log(this.index);
        } else if (event.target.name == 'nxtBtn' && this.index >= 0 && this.index < this.employeeLst.length - 1) {
            this.index = this.index + 1;
            console.log(this.index);
        } else if (event.target.name == 'srcBtn') {
            this.index = this.input;
        }
        let response = await fetch(this.url, { method: "GET" });
        let employee = await response.json();
        this.employeeLst = employee.data;
        this.output = this.employeeLst[this.index];
        //console.log(this.employeeLst);
        //console.log(this.output);
        //console.log(this.index);

        this.id = this.output.id;
        this.name = this.output.name;
        this.email = this.output.email;
        console.log(this.id);
        console.log(this.name);
        console.log(this.email);


    }
}