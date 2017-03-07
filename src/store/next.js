import { observer } from "mobx-react";
import { observable, action, computed ,autorun} from "mobx";
export default class NextStore {
    @observable todoValue;
    constructor() {
        this.todoValue=25;
    }
    @action todoSm(cs){
        this.todoValue=this.todoValue*cs;
    }
    @action hotTest(vs){
    	this.todoValue=465465*vs;
    }
    @computed get changeData(){  // @computed会监听相应数据的变化，然后计算对应的值，然后返回对应的值
        console.log(this.todoValue,'todovalue')
        this.fullValue=this.todoValue*2;
        return this.fullValue;
    }
}
