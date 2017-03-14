import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";
export default class CartTc extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="mask cart-mask unsee">
        <div className="cart-tc fixed">
          <div className="titbar clearfix">
            <span className="tit">购物车</span>
            <span className="clear">清空</span>
          </div>
          <ul className="items">
            <li className="item">
              <span className="name">
                香蕉盛开的福建省大家大家可否介绍的受到开发商独守空房
              </span>
              <span className="pri">
                ￥100.01
              </span>
              <div className="num-sl flex">
                <span className="les" />
                <span className="nums">1</span>
                <span className="mor" />
              </div>
            </li>
            <li className="item">
              <span className="name">
                香蕉盛开的福建省大家大家可否介绍的受到开发商独守空房
              </span>
              <span className="pri">
                ￥1054564650.01
              </span>
              <div className="num-sl flex">
                <span className="les" />
                <span className="nums">1</span>
                <span className="mor" />
              </div>
            </li>
            <li className="item">
              <span className="name">
                香蕉盛开的福建省大家大家可否介绍的受到开发商独守空房
              </span>
              <span className="pri">
                ￥1046540.01
              </span>
              <div className="num-sl flex">
                <span className="les" />
                <span className="nums">1</span>
                <span className="mor" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
