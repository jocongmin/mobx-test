import { observer } from "mobx-react";
import { observable, action, computed } from "mobx";
export default class TestStore {
    @observable testData = 'sfsdkfjsdkfj'; //注册一个mobx监听的数据
    constructor() {}
    @action changeData2() { //注册一个改变数据的行为

        this.testData = 'woshizhoucongmni';
    }
    @action changeData() {
        console.log('skldjfskldfj');
        var num = Math.random() * 1000;
        this.testData = num;
    }
}
