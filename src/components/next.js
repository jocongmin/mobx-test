import {observer,inject} from "mobx-react";
import {observable,action,computed} from "mobx";

import React from "react";
import {render} from "react-dom";

@inject('store') @observer
export default class Next extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props.store,'sdflsj')
    console.dir(this.props,'sdlkfsjdfkj')
    const store=this.props.store.nextStore;
    this.store=store;
    this.todoSm=store.todoSm.bind(store,306); //you can send one data from here to store,and store can get the data
  }
  render(){
    return(
        <div>
          <div>{this.store.todoValue}</div>
          <div>dslkjfdsf</div>
          <span onClick={this.todoSm}>btn</span>
        </div>
      )
  }
}