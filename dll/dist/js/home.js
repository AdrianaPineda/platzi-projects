!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!g[e]||!O[e])return;for(var t in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(y[t]=n[t]);0==--m&&0===b&&x()}(e,t),n&&n(e,t)};var t,r=!0,o="4f80e54227b6d09b47f0",c=1e4,a={},i=[],d=[];function l(e){var n=P[e];if(!n)return H;var r=function(r){return n.hot.active?(P[r]?-1===P[r].parents.indexOf(e)&&P[r].parents.push(e):(i=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),i=[]),H(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var c in H)Object.prototype.hasOwnProperty.call(H,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,o(c));return r.e=function(e){return"ready"===p&&f("prepare"),b++,H.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===p&&(w[e]||_(e),0===b&&0===m&&x())}},r.t=function(e,n){return 1&n&&(e=r(e)),H.t(e,-2&n)},r}function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:D,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:a[e]};return t=void 0,n}var u=[],p="idle";function f(e){p=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,y,v,m=0,b=0,w={},O={},g={};function E(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(n=c,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,c=H.p+""+o+".hot-update.json";r.open("GET",c,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+c+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return f("idle"),null;O={},w={},g=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});y={};return _(1),"prepare"===p&&0===b&&0===m&&x(),n});var n}function _(e){g[e]?(O[e]=!0,m++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function x(){f("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return D(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in y)Object.prototype.hasOwnProperty.call(y,t)&&n.push(E(t));e.resolve(n)}}function D(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,c,d,l;function s(e){for(var n=[e],t={},r=n.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,a=o.chain;if((d=P[c])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var i=0;i<d.parents.length;i++){var l=d.parents[i],s=P[l];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([l]),moduleId:c,parentId:l};-1===n.indexOf(l)&&(s.hot._acceptedDependencies[c]?(t[l]||(t[l]=[]),u(t[l],[c])):(delete t[l],n.push(l),r.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},m=[],b={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var O in y)if(Object.prototype.hasOwnProperty.call(y,O)){var j;l=E(O);var _=!1,x=!1,D=!1,I="";switch((j=y[O]?s(l):{type:"disposed",moduleId:O}).chain&&(I="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+j.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(j),x=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(_)return f("abort"),Promise.reject(_);if(x)for(l in b[l]=y[l],u(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,l)&&(h[l]||(h[l]=[]),u(h[l],j.outdatedDependencies[l]));D&&(u(m,[j.moduleId]),b[l]=w)}var S,k=[];for(r=0;r<m.length;r++)l=m[r],P[l]&&P[l].hot._selfAccepted&&b[l]!==w&&k.push({module:l,errorHandler:P[l].hot._selfAccepted});f("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete installedChunks[e]}(e)});for(var A,M,N=m.slice();N.length>0;)if(l=N.pop(),d=P[l]){var U={},q=d.hot._disposeHandlers;for(c=0;c<q.length;c++)(t=q[c])(U);for(a[l]=U,d.hot.active=!1,delete P[l],delete h[l],c=0;c<d.children.length;c++){var R=P[d.children[c]];R&&((S=R.parents.indexOf(l))>=0&&R.parents.splice(S,1))}}for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(d=P[l]))for(M=h[l],c=0;c<M.length;c++)A=M[c],(S=d.children.indexOf(A))>=0&&d.children.splice(S,1);for(l in f("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var T=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(d=P[l])){M=h[l];var C=[];for(r=0;r<M.length;r++)if(A=M[r],t=d.hot._acceptedDependencies[A]){if(-1!==C.indexOf(t))continue;C.push(t)}for(r=0;r<C.length;r++){t=C[r];try{t(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:M[r],error:e}),n.ignoreErrored||T||(T=e)}}}for(r=0;r<k.length;r++){var L=k[r];l=L.module,i=[l];try{H(l)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||T||(T=t),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(m)}))}var P={};function H(n){if(P[n])return P[n].exports;var t=P[n]={i:n,l:!1,exports:{},hot:s(n),parents:(d=i,i=[],d),children:[]};return e[n].call(t.exports,t,t.exports,l(n)),t.l=!0,t.exports}H.m=e,H.c=P,H.d=function(e,n,t){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(H.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)H.d(t,r,function(n){return e[n]}.bind(null,r));return t},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="",H.h=function(){return o},l(16)(H.s=16)}([function(e,n,t){e.exports=t(2)(0)},function(e,n,t){e.exports=t.p+"53e0ea3099b5bdbcd4b2626c7c38c706.png"},function(e,n){e.exports=modules},function(e,n,t){e.exports=t(2)(4)},function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t},function(e,n,t){var r=t(10),o=t(11),c=t(12);e.exports=function(e,n){return r(e)||o(e,n)||c()}},function(e){e.exports=JSON.parse('{"loaders":[{"name":"css-loader","id":"1"},{"name":"style-loader","id":"2"},{"name":"babel-loader","id":"3"}]}')},function(e,n,t){e.exports=t.p+"7a8923a28f2c8458d615a3f8743d8339.mp4"},function(e,n,t){"use strict";var r=t(4),o=t.n(r),c=t(5),a=t.n(c),i=t(0),d=t.n(i);var l=function(e){var n=e.name;return d.a.createElement("li",null,n)},s=t(6),u=t(1),p=t.n(u),f=t(7),h=t.n(f);t(13),t(14),t(15);n.a=function(){var e=Object(i.useState)([]),n=a()(e,2),t=n[0],r=n[1];return d.a.createElement("div",null,d.a.createElement("p",{className:"sass"},"Sass"),d.a.createElement("p",{className:"less"},"Less"),d.a.createElement("p",{className:"stylus"},"Stylus"),d.a.createElement("p",{className:"post-css"},"Postcss"),"My React.js app",d.a.createElement("video",{src:h.a,width:360,controls:!0,poster:p.a}),d.a.createElement("p",null,d.a.createElement("img",{src:p.a,width:40})),d.a.createElement("ul",null,t.map(function(e){return d.a.createElement(l,o()({},e,{key:e.id}))})),d.a.createElement("button",{onClick:function(){r(s.loaders)}},"Show what we have learned"))}},function(e,n,t){},function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},function(e,n){e.exports=function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return t}}},function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(9);var r=t(0),o=t.n(r),c=t(3),a=t(8);Object(c.render)(o.a.createElement(a.a,null),document.getElementById("container"))}]);