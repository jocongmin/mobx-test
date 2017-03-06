import {observer} from "mobx-react";
import {observable,action,computed} from "mobx";

import React from "react";
import {render} from "react-dom";

@observer
export default class Next extends React.Component{
  constructor(props) {
    super(props);
    const store=this.props.store;
    this.store=store;
    this.todoSm=store.todoSm.bind(store,30); //you can send one data from here to store,and store can get the data
  }
  render(){
    return(
        <div>
          <div>{this.store.todoValue}</div>
          <span onClick={this.todoSm}>btn</span>
        </div>
      )
  }
}