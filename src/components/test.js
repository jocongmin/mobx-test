import {observer} from "mobx-react";
import {observable,action} from "mobx";

import React from "react";
import {render} from "react-dom";


class TestStore{
   @observable testData='sfsdkfjsdkfj'; //注册一个mobx监听的数据
    constructor() {
    }
    @action changeData2(){  //注册一个改变数据的行为

      this.testData='woshizhoucongmni';
    }
    @action changeData(){
      console.log('skldjfskldfj');
      var num=Math.random()*1000;
      this.testData=num;
    }
}

@observer class Test extends React.Component{
  constructor(props) {
    super(props);
    this.store=this.props.store;
    this.changeData=this.store.changeData.bind(this.store);//bind store 才能使数据实时帅醒
  }
  componentWillMount() {
    this.props.store.changeData2();
  }
  render(){
    return <div>
          <span>{this.props.store.testData}</span>
          <button onClick={this.changeData}>btn</button>
    </div>
  }
}
let store=new TestStore();
render(< Test store={store}/>, document.getElementById('app'));