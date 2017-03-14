import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";
export default class Loading extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="pullUp loading more">
        <span className="pullUpIcon" />
        <span className="pullUpLabel">数据加载中...</span>
      </div>
    )
  }
}
