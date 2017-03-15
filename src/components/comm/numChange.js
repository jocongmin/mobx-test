import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";
export default class NumChange extends Component{
  constructor(props){
    super(props);
    this.state={
      value:0,
      newClass:this.props.newClass||''
    }
  }
  outData(){
    this.props.getData(this.state.value,this.props.id)
  }
  more(){
    let val=this.state.value+1;
    this.setState({
      value:val
    });
    this.outData();
  }
  less(){
    let val=this.state.value-1;
    if(val==-1){return}
    this.setState({
      value:val
    });
    this.outData();
  }
  render(){
    return(
      <div className={this.state.newClass+" num-sl flex"}>
        <span className="les" onClick={this.less.bind(this)}/>
        <span className="nums">{this.state.value}</span>
        <span className="mor" onClick={this.more.bind(this)}/>
      </div>
    )
  }
}
