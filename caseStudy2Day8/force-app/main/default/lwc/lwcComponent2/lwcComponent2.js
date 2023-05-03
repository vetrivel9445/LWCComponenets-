import { LightningElement } from 'lwc';

export default class LwcComponent2 extends LightningElement {
    Output = 'Welcome';
    isblue = false;
    isred = false;
    handleClick(event) {
        if (event.target.name === 'blueButton') {
            this.isblue = !this.isblue;

        }
        if (event.target.name === 'redButton') {
            this.isred = !this.isred;
        }
    }
}