import { LightningElement } from 'lwc';

export default class ActionProgress extends LightningElement {
    isFinish = false;
    handleClick(event) {
        if (event.target.name == 'start') {
            this.template.querySelector("c-child-action-progress").isFinish = false;
            console.log(event.target.name);
        }
        console.log('parent handleClick');
        this.template.querySelector("c-child-action-progress").handleClick();
        this.template.querySelector("lightning-button").disabled = true;
    }
    handleFinish() {
        console.log('form child to parent');
        this.template.querySelector("lightning-button").disabled = false;
        this.template.querySelector("c-child-action-progress").handleFinish();

    }
}