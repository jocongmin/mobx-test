import { observer } from "mobx-react";
import { observable, action, computed ,autorun} from "mobx";
export default class NewStore {
    @observable inputValue1;
    @observable inputValue2;
    @observable childValue;
    constructor() {
        this.inputValue1=0;
        this.inputValue2=0;
        this.fullValue=0;
        this.childValue=0;
    }
    @action changeValue(s,e){
        let tar=e.currentTarget;
        let val=Math.abs(tar.value);
        if(tar.name=='val1'){
            this.inputValue1=val;
        }else if(tar.name=='val2'){
            this.inputValue2=val;
        }
    }

    @computed get sum(){
        this.fullValue=this.inputValue1+this.inputValue2;
        console.log(this.fullValue)
        return this.fullValue;
    }
    @action childEvent(){
        this.childValue=this.childValue+3;
    }
}
