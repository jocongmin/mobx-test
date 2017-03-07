import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {render} from "react-dom";
import Child from "./comm/child.js";
@inject(['newStore']) @observer
export default class New extends Component{
  constructor(props) {
    super(props);
    this.store=this.props.newStore;
    this.changeValue=this.store.changeValue.bind(this.store,event)
  }
  render(){
    return(
        <div>
          <input type='tel' name='val1' onKeyUp={this.changeValue}/>+
          <input type='tel' name='val2' onKeyUp={this.changeValue}/>=
          <span>{this.store.sum}</span>
          <Child/>
        </div>
      )
  }
}