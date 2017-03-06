import {observer} from "mobx-react";
import {observable,action,computed} from "mobx";

import React from "react";
import {render} from "react-dom";


@observer 
export default class Test extends React.Component{
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
