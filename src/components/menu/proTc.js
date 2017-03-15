import {observer, inject} from "mobx-react";
import {observable, action, computed, autorun} from "mobx";

import React, {Component} from "react";
import {Link} from "react-router";
import {render} from "react-dom";

@inject(['menuStore'])@observer
export default class ProTc extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.menuStore;
        this.showProTc = this.store.showProTc.bind(this.store, event)
    }
    render() {
        return (
            <div className={this.store.proTc
                ? 'pro-tc'
                : 'unsee'}>
                <img src={this.store.proTcImg} alt/>
                <span className="closei" onClick={this.showProTc}></span>
            </div>
        )
    }
}
