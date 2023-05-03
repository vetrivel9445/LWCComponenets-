import { LightningElement, track } from 'lwc';

export default class Product extends LightningElement {
    isChange = false;
    isZero = false;
    @track product = {
        name: 'Tv',
        price: 50000,
        stock: 10,
    }
    handleChange(event) {
        //alert(event.target.value);
        //alert(event.target.value != null);
        //alert(event.target.value != '');

        if (parseInt(event.target.value) > 0) {
            this.isChange = true;
            this.isZero = false;
            this.product.stock = event.target.value;
        } else if (event.target.value === '') {
            this.isZero = true;
            this.isChange = false;
        }
    }
}