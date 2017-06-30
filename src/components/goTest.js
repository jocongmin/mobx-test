import {observer,inject} from "mobx-react";
import {observable,action,computed} from "mobx";

import React from "react";
import {render} from "react-dom";
import * as actions from "../actions/index.js";

@inject(['goTestStore']) @observer
export default class GoTest extends React.Component{
  constructor(props) {
    super(props);
    this.store=this.props.goTestStore;
    console.log(this.store.startData,'startData')
    console.log(actions,'klsdjflsdkjfl')
    this.changeStartData=this.store.changeStartData.bind(this.store,event);
  }
  render(){
    return <div>
         {this.props.goTestStore.StartData}
         <span onClick={()=>{
           actions.changeStartData()
         }}>btn</span>
    </div>
  }
}
