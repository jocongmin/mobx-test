import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {render} from "react-dom";
import Child from "./comm/child.js";
@inject(['formStore']) @observer
export default class Forms extends Component{
  constructor(props) {
    super(props);
    this.store=this.props.formStore;
    this.sendValue=this.store.getValue.bind(this.store,event);
    this.subForm=this.store.subForm.bind(this.store,event);
    this.hideTip=this.store.hideTip.bind(this.store,event);
  }
  render(){
    return(
        <div>
            <div className="sub-pic">
                <div className="box">
                    <div className="tmask">
                        <span className="ipt-box"><input onChange={this.sendValue} name='file' type="file"/></span>
                    </div>
                    <img src={this.store.file} alt=""/>
                </div>
            </div>
           <ul className="items">
                <li className="item-tit flex">
                    <i className="icon"></i>
                    <input onBlur={this.sendValue} name='title' type="text" className="flex1" placeholder="请输入活动标题"/>
                </li>
                <li className="item-time flex">
                    <i className="icon"></i>
                    <span className={this.store.time?'flex1 on':'flex1'}>
                        {this.store.time?this.store.time:'请选择活动时间'}
                        <input onBlur={this.sendValue} name='time' type="datetime-local" placeholder="请选择活动时间"/>
                    </span>
                    <em className="iright"></em>
                </li>
                <li className="item-ph flex">
                    <i className="icon"></i>
                    <input onBlur={this.sendValue} name='contact' type="tel" className="flex1" placeholder="请输入联系方式"/>
                </li>
                <li className="item-room flex">
                    <i className="icon"></i>
                    <span className={this.store.room?'flex1 on':'flex1'}>
                        {this.store.room?this.store.room:'请选择包间'}
                        <select onChange={this.sendValue} name="room" id="" className="flex1">
                        <option value="第一间">第一间</option>
                        <option value="第一间">第一间</option>
                        <option value="第一间">第一间</option>
                        <option value="第一间">第一间</option>
                        <option value="第一间">第一间</option>
                        <option value="第一间">第一间</option>
                    </select>
                    </span>
                    <em className="iright"></em>
                </li>
            </ul>
            <div className="act-explain">
                <div className="titbar">
                    <em>活动说明</em>
                </div>
                <textarea onBlur={this.sendValue} className="area" name="explain" id="" cols="30" rows="5" placeholder="请填写活动说明"></textarea>
            </div>
            <div onClick={this.subForm}>sub</div>
            <div onClick={this.hideTip} className={this.store.tip.state?'':'unsee'}>{this.store.tip.content}</div>
        </div>
      )
  }
}