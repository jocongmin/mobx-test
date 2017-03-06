import { observer } from "mobx-react";
import { observable, action, computed } from "mobx";
export default class NextStore {
    @observable todoValue;
    constructor() {
        this.todoValue=25;
    }
    @action todoSm(cs){
        this.todoValue=this.todoValue*cs;
        this.hotTest(this.todoValue);
    }
    @action hotTest(vs){
    	this.todoValue=465465*vs;
    }
}
