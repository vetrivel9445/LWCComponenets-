import { LightningElement } from 'lwc';
import accountTemplate from './accountTemplate.html';
import contactTemplate from './contactTemplate.html';
import homeTemplate from './consultancy.html'
export default class Consultancy extends LightningElement {
    isAccBtn = false;
    isConBtn = false;
    handleClick(event) {
        //console.log(event.target.dataset);
        //console.log(this.template.querySelector("lightning-button").dataset.btn);
        if (event.target.name == 'acc') {
            this.isAccBtn = true;
            console.log('acc')
        }
        if (event.target.name == 'con') {
            this.isConBtn = true;
            console.log('con')
        }

    }
    handleAccSwitch() {
        this.isAccBtn = false;
        this.isConBtn = false;
    }
    handleConSwitch() {
        this.isAccBtn = false;
        this.isConBtn = false;
    }
    render() {
        if (this.isAccBtn == false && this.isConBtn == false) {
            return homeTemplate;
        }
        if (this.isAccBtn == true) {
            return accountTemplate;
        }
        if (this.isConBtn == true) {
            return contactTemplate;
        }
    }


}