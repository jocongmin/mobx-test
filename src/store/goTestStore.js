import {observer} from "mobx-react";
import {observable, action, computed} from "mobx";
export default class GoTestStore {
    @observable startData;
    constructor() {
        this.startData = observable.box('ksdjfldksjflkjd');
    }
    @action 
    changeStartData(data){
        this.startData.set(data);
    }
    @computed
    get StartData(){
        return this.startData.get();
    }
}
