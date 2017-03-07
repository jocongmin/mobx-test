import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React from "react";
import {render} from "react-dom";

@inject('nextStore') @observer
export default class Next extends React.Component{
  constructor(props) {
    super(props);
    const store=this.props.nextStore;
    this.store=store;
    this.todoSm=store.todoSm.bind(store,306); 
  }
  render(){
    return(
        <div>
          <div>{this.store.todoValue}</div>
          <div>{this.store.changeData}</div>
          <span onClick={this.todoSm}>btn</span>
        </div>
      )
  }
}