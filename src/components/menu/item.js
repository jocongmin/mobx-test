import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";

import React,{Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";

import NumChange from "../comm/numChange.js"
@inject(['menuStore']) @observer
export default class Item extends Component{
  constructor(props){
    super(props);
    this.store=this.props.menuStore;
  }
  itemRender(data,key){
    return(
      <li className={data.have?'item':'item no'} key={key}>
        <div className="box flex">
          <div className="img-box">
            <img src={data.img_src} alt />
            <i className={data.deposit?"tip":"tip unsee"}>押金</i>
          </div>
          <div className="info flex1">
            <p className="tit">
              {data.title}
            </p>
            <div className="num-cg">
              <span className="stock">库存:<em>{data.reset}</em></span>
            <span className="pri">￥<em>{data.pri}</em></span>
            <NumChange key={key}/>
            </div>
          </div>
        </div>
      </li>
    )
  }
  render(){
    let items=this.store.itemsData;
    let that=this;
    let _html=items.map((item,key)=>{
      return that.itemRender(item,key);
    })
    return(
      <div className="item-box-div">{_html}</div>
    )
  }
}
