import { LightningElement } from 'lwc';

export default class ViewModal extends LightningElement {
    isClick = false;
    handleClick(event) {
        if (event.target.name == 'modal') {
            this.isClick = true;
        }
        if (event.target.name == 'close') {
            this.isClick = false;
        }

    }
}