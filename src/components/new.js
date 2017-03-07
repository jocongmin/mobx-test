import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React from "react";
import {render} from "react-dom";

@inject(['newStore']) @observer
export default class New extends React.Component{
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
        </div>
      )
  }
}