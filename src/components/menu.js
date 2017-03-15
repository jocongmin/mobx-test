import {observer, inject} from "mobx-react";
import {observable, action, computed, autorun} from "mobx";

import React, {Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";
import Header from "./comm/header.js"
import SidMenu from "./menu/sidMenu.js"
import Item from "./menu/item.js"
import Loading from "./comm/loading.js"
import Footer from "./menu/footer.js"
import CartTc from "./menu/cartTc.js"
import SpecialTc from "./menu/specialTc.js"
import ProTc from "./menu/proTc.js"
@inject(['menuStore'])@observer
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.menuStore;
    }
    render() {
        return (
            <div className="menu-body">
                <Header/>
                <div className="outbox flex">
                    <SidMenu/>
                    <div className="pro-box flex1">
                        <ul className="items">
                            <Item/>
                        </ul>
                        <Loading/>
                    </div>
                </div>
                <Footer/>
                <CartTc/>
                <SpecialTc/>
                <ProTc/>
                <div className="mask unsee"/>
                <div className={this.store.specialTc || this.store.proTc
                    ? "mask"
                    : "mask unsee"}></div>
            </div>

        )
    }
}
