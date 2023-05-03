import { LightningElement, api, track, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

export default class PicklistComponenet extends LightningElement {
    @api objectApiName;
    @track reportTypeOptions = [];
    pickLstData;
    recordTypeIds = [];
    @track pickListOptions = [];
    isNotEmpty = false;
    recordValue;
    objectData;
    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    async getObjectData({ data, error }) {
        if (data) {
            this.objectData = data.recordTypeInfos;
            for (const key in this.objectData) {
                console.log(this.objectData[key].recordTypeId);
                this.recordTypeIds.push(key);
                this.reportTypeOptions.push({ label: this.objectData[key].name, value: this.objectData[key].recordTypeId });
            }
        }
    }
    handleChange(event) {
        try {
            console.log(event.detail);
            this.recordValue = event.detail.value;
            console.log(this.recordValue);
            this.pickListOptions = [];
            this.isNotEmpty = false;
        } catch (error) {
            console.log(error.message);
        }
    }
    @wire(getPicklistValuesByRecordType, { objectApiName: '$objectApiName', recordTypeId: "$recordValue" })
    getPicklist({ data, error }) {
        console.log('2 nd Wire=1 ');
        if (data) {
            console.log('2 nd Wire=2 ');
            this.pickLstData = data;
            console.log(data.picklistFieldValues);
            //console.log(this.pickLstData.picklistFieldValues);
            for (let key in data.picklistFieldValues) {
                console.log(key);
                this.pickListOptions.push({ label: key, value: key });
            }
            this.isNotEmpty = true;
            console.log(JSON.stringify(this.pickListOptions));
        }

    }
}