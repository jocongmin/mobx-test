import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";
export default class ProTc extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="pro-tc unsee">
        <img src="img/pro-img-demo.png" alt />
        <span className="closei" />
      </div>
    )
  }
}
