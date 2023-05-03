import { LightningElement } from 'lwc';

export default class LightningComponent extends LightningElement {
    firstInput;
    secondInput;
    output;
    handleChange(event) {
        if (event.target.name === 'input1') {
            this.firstInput = parseInt(event.target.value);
        }
        if (event.target.name === 'input2') {
            this.secondInput = parseInt(event.target.value);
        }
    }
    handleClick(event) {
        if (event.target.name == 'addButton') {
            if ((this.firstInput == null) || (this.secondInput == null)) {
                alert('Enter the number');
            } else {
                this.output = this.firstInput + this.secondInput;
            }
        }
        if (event.target.name == 'subButton') {
            if ((this.firstInput == null) || (this.secondInput == null)) {
                alert('Enter the number');
            } else {
                if (this.firstInput > this.secondInput) {
                    this.output = this.firstInput - this.secondInput;
                } else {
                    this.output = this.secondInput - this.firstInput;
                }
            }
        }
        if (event.target.name == 'mulButton') {
            if ((this.firstInput == null) || (this.secondInput == null)) {
                alert('Enter the number');
            } else {
                this.output = this.firstInput * this.secondInput;
            }
        }
        if (event.target.name == 'divButton') {
            if ((this.firstInput == null) || (this.secondInput == null)) {
                alert('Enter the number');
            } else {
                this.output = this.firstInput / this.secondInput;
            }
        }
        if (event.target.name == 'clearButton') {
            if ((this.firstInput == null) || (this.secondInput == null)) {
                alert('Enter the number');
            } else {
                this.output = '';
                this.firstInput = '';
                this.secondInput = '';
            }

        }
    }
}