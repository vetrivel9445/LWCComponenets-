import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {
    @track todoLst = [{
        id: 1,
        task: ' morning workout',
    }, {
        id: 2,
        task: 'Work start',
    }];
    filterLst = [];
    input;
    insertObj = {};
    isAddClick = false;
    insertLst = [];
    spliceNumb;

    handleChange(event) {
        this.input = event.target.value;
    }
    handleClick(event) { //add handler

        if (event.target.name === 'addButton') { //add handler
            this.insertObj = { id: this.todoLst.length + 1, task: this.input };
            //alert(this.insertObj);
            this.todoLst.push(this.insertObj);
            this.isAddClick = true;
            //alert(this.todoLst);
        }
        if (event.target.name === 'delete') { //delete handler
            //alert(this.todoLst);
            alert(event.target.value);
            if (event.target.value > 0) {
                this.spliceNumb = event.target.value - 1;
            } else {
                this.spliceNumb = 0;
            }
            this.todoLst.splice(this.spliceNumb, 1);
            /*
            this.todoLst.forEach(t => {
                //alert(t.task == event.target.value);

                if (t.task == event.target.value) {
                    //alert('if');
                    this.filterLst = this.todoLst.filter(function(td) {
                            return td.id !== t.id;
                        })
                        // alert('filterLst' + this.filterLst);
                        // alert('todoLst' + this.todoLst);
                }
            })
            this.todoLst = this.filterLst;
            //alert('final todoLst' + this.todoLst);*/
        }


    }

}