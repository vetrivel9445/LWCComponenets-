import { LightningElement, track } from 'lwc';

export default class FetchAPI extends LightningElement {
    input;
    inputValue;
    isEmpty = false;
    url = "https://api.onlinewebtutorblog.com/employees";
    employee = [];
    @track output = [];
    handleChange(event) {
        this.input = event.target.value;
    }
    async handleClick(event) {
        console.log(event.target.name);
        if (event.target.name == 'btn1') {
            try {
                let response = await fetch(this.url, { method: 'GET' });
                const emp = await response.json();
                this.employee = emp.data;
                this.employee.forEach(emp => {
                    if (emp.name.match(this.input)) {
                        this.output.push(emp);
                        console.log(emp.name);
                    }
                });
            } catch (e) {
                console.log(e);
            }
        } else if (event.target.name == 'btn2') {
            this.output = [];
            this.inputValue = '';
        }

    }
}