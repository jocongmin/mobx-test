import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";

@inject(['menuStore']) @observer
export default class SidMenu extends Component{
  constructor(props){
    super(props);
    this.store=this.props.menuStore;
    this.changeProItems=this.store.changeProItems.bind(this.store,event);
  }
  menuItemRender(data,key){
    return(
      <li key={key} className={data.on?"item on":"item"} data-which={data.id} onClick={this.changeProItems}>
        {data.name}
      </li>
    )
  }
  render(){
    let items=this.store.menuItem;
    let that=this;
    let _html=items.map((item,key)=>{
      return that.menuItemRender(item,key)
    })
    return(
      <div className="menu-box">
        <ul className="items">
          {_html}
        </ul>
      </div>
    )
  }
}
