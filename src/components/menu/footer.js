import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";

@inject(['menuStore']) @observer
export default class Footer extends Component{
  constructor(props){
    super(props);
    this.store=this.props.menuStore;
    this.showCartTc=this.store.showCartTc.bind(this.store,event)
  }
  render(){
    return(
      <div className="fixed menufooter flex">
        <div className="flex2 flex">
          <span className="cart-icon" onClick={this.showCartTc}>
            <i className="num">5</i>
          </span>
          <div className="pris flex1">
            共计: <em>￥222.10</em>
          </div>
        </div>
        <a className="count flex1">
          去结算
        </a>
      </div>
    )
  }
}
