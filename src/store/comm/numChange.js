import {observer} from "mobx-react";
import {observable, action, computed, autorun} from "mobx";
export default class NumChange{
  @observable value;
  constructor(){
    this.value=0;
  }
  @action more(){
    this.value++;
  }
  @action less(){
    if(this.value==0){
      return;
    }
    this.value--;
  }
}
