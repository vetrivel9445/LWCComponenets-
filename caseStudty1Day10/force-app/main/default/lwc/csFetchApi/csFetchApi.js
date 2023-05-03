import { LightningElement, track } from 'lwc';

export default class CsFetchApi extends LightningElement {
    input;
    isClick = false;
    employeeLst = [];
    @track outputLst = [];
    url = 'https://sfdev36-dev-ed.my.salesforce-sites.com/services/apexrest/employees';
    async connectedCallback() {
        let response = await fetch(this.url, { method: 'GET' });
        const Data = await response.json();
        console.log(Data.employee);
        (Data.employee).forEach(emp => {
            this.employeeLst.push(emp);
            console.log(emp);
        });
    }
    handleChange(event) {
        this.input = event.target.value;
    }
    handleClick(event) {
        console.log(this.input);
        if (event.target.name == 'srchBtn') {
            this.isClick = true;
            this.employeeLst.forEach(emp => {
                console.log(emp.Name);
                if (emp.Name.match(this.input)) {
                    this.outputLst.push(emp);
                }
            })
        } else if (event.target.name == 'clrBtn') {
            this.outputLst = [];
            this.isClick = false;
            this.template.querySelector('lightning-input').value = '';
        }
    }

}