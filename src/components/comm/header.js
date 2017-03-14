import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";
export default class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <header className="fixed top-nav">
        <a className="back" />
        <span className="title">点单</span>
        <a className="home" />
      </header>
    )
  }
}
