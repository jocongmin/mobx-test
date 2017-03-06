import React from "react";
import {render} from "react-dom";
import Test from "./src/components/test.js";
import Next from "./src/components/next.js";
import store from "./src/store/store.js";





render(< Next store={store.nextStore}/>, document.getElementById('app'));