import { LightningElement, api, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
export default class ObjectInfo extends LightningElement {

    @api objectApiName;
    objectData;
    reportTypeInfoLst = [];
    @track totalFieldsLst = [];
    customFieldLst = [];
    picklistFieldLst = [];
    lengthOfTotalField;
    lengthOfCustomField;
    lengthOfpickLstField;
    lengthOfRecordType;

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    getAccountinfo(response) {
        if (response.data) {
            //console.log(response);
            this.objectData = response.data;
            for (let key in this.objectData.recordTypeInfos) {
                this.reportTypeInfoLst.push(key);
            }
            this.lengthOfRecordType = this.reportTypeInfoLst.length;
            for (let key in this.objectData.fields) {
                //console.log(key);
                this.totalFieldsLst.push(this.objectData.fields[key].apiName);
                if (this.objectData.fields[key].custom == true) {
                    //console.log(key);
                    this.customFieldLst.push(key);
                }
                if (this.objectData.fields[key].dataType == "Picklist") {
                    //console.log(key);
                    this.picklistFieldLst.push(key);
                }
            }
            this.lengthOfTotalField = this.totalFieldsLst.length;
            this.lengthOfCustomField = this.customFieldLst.length;
            this.lengthOfpickLstField = this.picklistFieldLst.length;

        }
    }
    handleClick() {
        /*
        console.log(this.objectData);
        console.log(this.reportTypeInfoLst);
        console.log(this.totalFieldsLst);
        console.log(this.customFieldLst);
        console.log(this.picklistFieldLst);
        //console.log( this.fields);*/
    }
}