import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";
export default class SpecialTc extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="special-tc unsee">
        <div className="pro-name">
          <span className="name">水果收到了开发建设的</span>
          <span className="close" />
        </div>
        <li className="big">
          <span className="lab">规格</span>
          <span className="items">
            <span className="item on">大</span>
            <span className="item">中</span>
            <span className="item">小</span>
          </span>
        </li>
        <li className="number">
          <span className="lab">数量</span>
          <div className="num-sl un flex">
            <span className="les" />
            <span className="nums">0</span>
            <span className="mor" />
          </div>
        </li>
        <li className="pri">
          <span className="lab">价格</span>
          <span className="price">￥200.00</span>
        </li>
        <li className="btn">
          选好了
        </li>
      </div>
    )
  }
}
