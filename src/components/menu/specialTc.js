import {observer, inject} from "mobx-react";
import {observable, action, computed, autorun} from "mobx";

import React, {Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";
import NumChange from "../comm/numChange.js";
@inject(['menuStore'])@observer
export default class SpecialTc extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.menuStore;
        this.showSpecialTc = this.store.showSpecialTc.bind(this.store, event);
        this.state = {
            bigOn: {
                big: true,
                center: false,
                small: false
            }
        }
    }
    changeOn(s, e) {
        this.state.bigOn={
          big: false,
          center: false,
          small: false
        }
        let tar = e.currentTarget;
        let which = tar.dataset.which;
        this.state.bigOn[which] = true;
        this.forceUpdate();
    }
    getData(){

    }
    render() {
        return (
            <div className={this.store.specialTc
                ? "special-tc"
                : "special-tc unsee"}>
                <div className="pro-name">
                    <span className="name">水果收到了开发建设的</span>
                    <span className="close" onClick={this.showSpecialTc}/>
                </div>
                <li className="big">
                    <span className="lab">规格</span>
                    <span className="items">
                        <span data-which='big' onClick={this.changeOn.bind(this, event)} className={!this.state.bigOn.big
                            ? 'item'
                            : 'item on'}>大</span>
                        <span data-which='center' onClick={this.changeOn.bind(this, event)} className={!this.state.bigOn.center
                            ? 'item'
                            : 'item on'}>中</span>
                        <span data-which='small' onClick={this.changeOn.bind(this, event)} className={!this.state.bigOn.small
                            ? 'item'
                            : 'item on'}>小</span>
                    </span>
                </li>
                <li className="number">
                    <span className="lab">数量</span>
                    <NumChange getData={this.getData.bind(this)} newClass={'un'}/>
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
