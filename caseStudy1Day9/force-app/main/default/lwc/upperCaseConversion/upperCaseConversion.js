import { LightningElement } from 'lwc';

export default class UpperCaseConversion extends LightningElement {
    Output;
    isChange = false;
    handleChange(event) {
        if (event.target.name == 'input1' && event.target.value != null) {
            this.isChange = true;
            this.Output = event.target.value.toUpperCase();

        }
    }
}