!function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+""+e+"."+g+".hot-update.js",n.appendChild(r)}function t(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,t=f.p+""+g+".hot-update.json";r.open("GET",t,!0),r.timeout=1e4,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+t+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+t+" failed."));else{try{var o=JSON.parse(r.responseText)}catch(e){return void n(e)}e(o)}}})}function o(e){var n=I[e];if(!n)return f;var r=function(r){return n.hot.active?(I[r]?I[r].parents.indexOf(e)<0&&I[r].parents.push(e):w=[e],n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),w=[]),O=!1,f(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}};for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&Object.defineProperty(r,o,t(o));return Object.defineProperty(r,"e",{enumerable:!0,value:function(e){function n(){k--,"prepare"===j&&(H[e]||l(e),0===k&&0===E&&p())}return"ready"===j&&d("prepare"),k++,f.e(e).then(n,function(e){throw n(),e})}}),r}function i(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:O,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:u,status:function(e){if(!e)return j;D.push(e)},addStatusHandler:function(e){D.push(e)},removeStatusHandler:function(e){var n=D.indexOf(e);n>=0&&D.splice(n,1)},data:x[e]};return O=!0,n}function d(e){j=e;for(var n=0;n<D.length;n++)D[n].call(null,e)}function s(e){return+e+""===e?+e:e}function a(e){if("idle"!==j)throw new Error("check() is only allowed in idle status");return v=e,d("check"),t().then(function(e){if(!e)return d("idle"),null;P={},H={},U=e.c,m=e.h,d("prepare");var n=new Promise(function(e,n){b={resolve:e,reject:n}});return y={},l(0),"prepare"===j&&0===k&&0===E&&p(),n})}function c(e,n){if(U[e]&&P[e]){P[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(y[r]=n[r]);0===--E&&0===k&&p()}}function l(e){U[e]?(P[e]=!0,E++,r(e)):H[e]=!0}function p(){d("ready");var e=b;if(b=null,e)if(v)u(v).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&n.push(s(r));e.resolve(n)}}function u(r){function t(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var i=t.pop(),d=i.id,s=i.chain;if(l=I[d],l&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:d};if(l.hot._main)return{type:"unaccepted",chain:s,moduleId:d};for(var a=0;a<l.parents.length;a++){var c=l.parents[a],p=I[c];if(p){if(p.hot._declinedDependencies[d])return{type:"declined",chain:s.concat([c]),moduleId:d,parentId:c};n.indexOf(c)>=0||(p.hot._acceptedDependencies[d]?(r[c]||(r[c]=[]),o(r[c],[d])):(delete r[c],n.push(c),t.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function o(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==j)throw new Error("apply() is only allowed in ready status");r=r||{};var i,a,c,l,p,u={},h=[],b={},v=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var O in y)if(Object.prototype.hasOwnProperty.call(y,O)){p=s(O);var _;_=y[O]?t(p):{type:"disposed",moduleId:O};var D=!1,E=!1,k=!1,H="";switch(_.chain&&(H="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":r.onDeclined&&r.onDeclined(_),r.ignoreDeclined||(D=new Error("Aborted because of self decline: "+_.moduleId+H));break;case"declined":r.onDeclined&&r.onDeclined(_),r.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+H));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(_),r.ignoreUnaccepted||(D=new Error("Aborted because "+p+" is not accepted"+H));break;case"accepted":r.onAccepted&&r.onAccepted(_),E=!0;break;case"disposed":r.onDisposed&&r.onDisposed(_),k=!0;break;default:throw new Error("Unexception type "+_.type)}if(D)return d("abort"),Promise.reject(D);if(E){b[p]=y[p],o(h,_.outdatedModules);for(p in _.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,p)&&(u[p]||(u[p]=[]),o(u[p],_.outdatedDependencies[p]))}k&&(o(h,[_.moduleId]),b[p]=v)}var P=[];for(a=0;a<h.length;a++)p=h[a],I[p]&&I[p].hot._selfAccepted&&P.push({module:p,errorHandler:I[p].hot._selfAccepted});d("dispose"),Object.keys(U).forEach(function(e){U[e]===!1&&n(e)});for(var A,M=h.slice();M.length>0;)if(p=M.pop(),l=I[p]){var q={},R=l.hot._disposeHandlers;for(c=0;c<R.length;c++)(i=R[c])(q);for(x[p]=q,l.hot.active=!1,delete I[p],c=0;c<l.children.length;c++){var B=I[l.children[c]];B&&(A=B.parents.indexOf(p),A>=0&&B.parents.splice(A,1))}}var L,S;for(p in u)if(Object.prototype.hasOwnProperty.call(u,p)&&(l=I[p]))for(S=u[p],c=0;c<S.length;c++)L=S[c],A=l.children.indexOf(L),A>=0&&l.children.splice(A,1);d("apply"),g=m;for(p in b)Object.prototype.hasOwnProperty.call(b,p)&&(e[p]=b[p]);var C=null;for(p in u)if(Object.prototype.hasOwnProperty.call(u,p)){l=I[p],S=u[p];var N=[];for(a=0;a<S.length;a++)L=S[a],i=l.hot._acceptedDependencies[L],N.indexOf(i)>=0||N.push(i);for(a=0;a<N.length;a++){i=N[a];try{i(S)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:p,dependencyId:S[a],error:e}),r.ignoreErrored||C||(C=e)}}}for(a=0;a<P.length;a++){var T=P[a];p=T.module,w=[p];try{f(p)}catch(e){if("function"==typeof T.errorHandler)try{T.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:n,orginalError:e}),r.ignoreErrored||C||(C=n),C||(C=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:p,error:e}),r.ignoreErrored||C||(C=e)}}return C?(d("fail"),Promise.reject(C)):(d("idle"),Promise.resolve(h))}function f(n){if(I[n])return I[n].exports;var r=I[n]={i:n,l:!1,exports:{},hot:i(n),parents:(_=w,w=[],_),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){c(e,n),h&&h(e,n)};var b,y,m,v=!0,g="870af612ac548400f06f",x={},O=!0,w=[],_=[],D=[],j="idle",E=0,k=0,H={},P={},U={},I={};return f.m=e,f.c=I,f.i=function(e){return e},f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.h=function(){return g},o(1)(f.s=1)}([function(e,n){throw new Error("Module build failed: ReferenceError: [BABEL] /Users/yunduo/Desktop/gitstore/boxbox/index.js: Using removed Babel 5 option: base.stage - Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets\n    at Logger.error (/Users/yunduo/Desktop/gitstore/boxbox/node_modules/babel-core/lib/transformation/file/logger.js:41:11)\n    at OptionManager.mergeOptions (/Users/yunduo/Desktop/gitstore/boxbox/node_modules/babel-core/lib/transformation/file/options/option-manager.js:220:20)\n    at OptionManager.init (/Users/yunduo/Desktop/gitstore/boxbox/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)\n    at File.initOptions (/Users/yunduo/Desktop/gitstore/boxbox/node_modules/babel-core/lib/transformation/file/index.js:216:65)\n    at new File (/Users/yunduo/Desktop/gitstore/boxbox/node_modules/babel-core/lib/transformation/file/index.js:139:24)\n    at Pipeline.transform (/Users/yunduo/Desktop/gitstore/boxbox/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/yunduo/Desktop/gitstore/boxbox/node_modules/.6.3.2@babel-loader/lib/index.js:46:20)\n    at Object.module.exports (/Users/yunduo/Desktop/gitstore/boxbox/node_modules/.6.3.2@babel-loader/lib/index.js:134:16)")},function(e,n,r){e.exports=r(0)}]);