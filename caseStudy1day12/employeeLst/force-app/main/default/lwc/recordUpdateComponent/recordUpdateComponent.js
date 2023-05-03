import { LightningElement, api, track, wire } from 'lwc';
import { createRecord, updateRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import ID_FIELD from '@salesforce/schema/Account.Id'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordUpdateComponent extends LightningElement {
    @api recordId;
    isGetData = false;
    object;
    objectData;
    recordTypeId;
    pickLstdata = [];
    @track pickLstOptions = [];
    dataToUpdate = {};
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT }) //to get recordTypeId
    getobjectData({ data, error }) {
        if (data) {
            this.object = this.objectApiName;
            this.objectData = data;
            this.recordTypeId = this.objectData.defaultRecordTypeId;
        }
    }
    handleChange(event) {
        if (event.target.name === 'Name') {
            let value = event.target.value;
            let nameF = NAME_FIELD.fieldApiName;
            this.dataToUpdate[nameF] = value;
        } else if (event.target.name === 'RecordId') {
            let value = event.target.value;
            let nameF = ID_FIELD.fieldApiName;
            this.dataToUpdate[nameF] = value;
        } else {
            let { name, value } = event.target;
            this.dataToUpdate[name] = value;
        }
    }
    @wire(getPicklistValues, { recordTypeId: "$recordTypeId", fieldApiName: INDUSTRY_FIELD })
    getPickLstData({ data, error }) {
        if (data) {
            this.isGetData = true;
            this.pickLstdata = data.values;
            this.pickLstOptions = this.pickLstdata.map(e => {
                return { label: e.label, value: e.value };
            })
        }
    }
    handleOption(event) {
        let value = event.detail.value;
        let { fieldApiName, objectApiName } = INDUSTRY_FIELD;
        this.dataToUpdate[fieldApiName] = value;
    }
    handleClick(event) {
        if (event.target.name == 'update') {
            updateRecord({ fields: this.dataToUpdate })
                .then(Response => {
                    console.log('Response' + Response);
                    console.log(Response);
                    this.dataToUpdate = {};
                    this.template.querySelector("lightning-input[data-int='id']").value = '';
                    this.template.querySelector("lightning-input[data-int1='name']").value = '';
                    this.template.querySelector("lightning-input[data-int2='revenue']").value = '';
                    this.template.querySelector('lightning-combobox').value = '';
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'RecordUpdated',
                        Message: 'Record Updated' + Response,
                        variant: 'success'
                    }))
                }).catch(error => {
                    console.log('error');
                    console.log(error);
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Error RecordUpdated',
                        Message: ' Error In Record Updated',
                        variant: 'error'
                    }))
                })
        } else if (event.target.name == 'clear') {
            this.template.querySelector("lightning-input[data-int='id']").value = '';
            this.template.querySelector("lightning-input[data-int1='name']").value = '';
            this.template.querySelector("lightning-input[data-int2='revenue']").value = '';
            this.template.querySelector('lightning-combobox').value = '';
        }
    }
}