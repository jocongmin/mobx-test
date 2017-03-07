import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {render} from "react-dom";


@inject(['newStore']) @observer  //子组件也可以直接注入所需要的store，然后在组件中访问
export default class Child extends Component{
	constructor(props) {
		super(props);
		this.store=this.props.newStore;
	}
	render(){
		return(
				<div>
					<span>{this.store.childValue}</span>
					<button onClick={this.store.childEvent.bind(this.store)}>btn</button>
				</div>
			)
	}
}