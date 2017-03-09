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
        <div className="act-fq-body">
            <header className="fixed top-nav">
                <a className="back"></a>
                <span className="title">发起一场活动</span>
                <a className="home"></a>
            </header>
            <div className="main">
                <div className="sub-pic">
                    <div className="box">
                        <div className="tmask">
                            <span className="ipt-box"><input type="file"/></span>
                        </div>
                        <img src="img/fq-act-banner.png" alt=""/>
                    </div>
                </div>
                <ul className="items">
                    <li className="item-tit flex">
                        <i className="icon"></i>
                        <input type="text" className="flex1"  placeholder="请输入活动标题"/>
                    </li>
                    <li className="item-time flex">
                        <i className="icon"></i>
                        <span className="flex1">
                            请选择活动时间
                            <input type="datetime-local"  placeholder="请选择活动时间"/>
                        </span>
                        <em className="iright"></em>
                    </li>
                    <li className="item-ph flex">
                        <i className="icon"></i>
                        <input type="tel" className="flex1"  placeholder="请输入联系方式"/>
                    </li>
                    <li className="item-room flex">
                        <i className="icon"></i>
                        <span className="flex1">
                            请选择包间
                            <select name="" id="" className="flex1">
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
                    <textarea className="area" name="" id="" cols="30" rows="5" placeholder="请填写活动说明"></textarea>
                </div>
                <p className="mark">
                    备注：每发起一场活动将消耗100积分。
                </p>
            </div>
            <div className="fixed fq-footer">
                发起(-<em>100</em>积分)
            </div>
            <div className="tip-tc">
                成功发起活动
            </div>
            <div className="tip-tc unsee">
                发起失败，请重新核对
            </div>
        </div>
      )
  }
}