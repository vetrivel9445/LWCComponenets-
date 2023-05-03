import { LightningElement, api } from 'lwc';

export default class ChildActionProgress extends LightningElement {
    progress = 0;
    interval;
    maxValue = 100;
    @api isFinish = false;
    @api handleClick() {
        console.log('child handleClick');
        this.interval = setInterval(() => {
            if (this.progress >= 0 && this.progress < 100 && this.isFinish == false) {
                console.log('progress');
                this.progress = this.progress + 10;
            } else if (this.progress >= 100) {
                this.isFinish = true;
                this.dispatchEvent(new CustomEvent("finish"));
            }
        }, 2000)
    }
    @api handleFinish() {
        this.isFinish = false;
        clearInterval(this.interval);
        console.log('handleFinish from child');
        this.progress = 0;
    }
}