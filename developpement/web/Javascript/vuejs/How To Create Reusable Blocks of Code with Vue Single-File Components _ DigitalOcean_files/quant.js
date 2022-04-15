/* Copyright (c) 2008-2020, Quantcast Corp. https://www.quantcast.com/legal/license */
!function(window){function RequireDependencyError(n){Error.apply(this),this.name="RequireDependencyError",this.message=n||""}RequireDependencyError.prototype=Error.prototype;var amd={},definitions={};amd.require=function(n,e){"function"==typeof n&&(e=n,n=[]);for(var t=[],r=0;r<n.length;r++){var o=n[r];if(!definitions.hasOwnProperty(o))throw new RequireDependencyError("No module named "+o+" has been defined");t[r]=definitions[o]}return e.apply({},t)};var array=Array.prototype,available=function(n,e){return"function"==typeof n[e]},map="map",forEach="forEach",reduce="reduce",indexOf="indexOf";with(available(array,map)||(array[map]=function(n,e){var t=[];e||(e=this);for(var r=0;r<this.length;r++)t[r]=n.call(e,this[r],r,this);return t}),available(array,forEach)||(array[forEach]=array[map]),available(array,reduce)||(array[reduce]=function(n,e){var t=0;for(void 0===e&&(e=this[t++]);t<this.length;t++)e=n.call(this,e,this[t],t,this);return e}),available(array,indexOf)||(array[indexOf]=function(n){for(var e=0;e<this.length;e++)if(this[e]==n)return e;return-1}),amd.define=function(n,e,t){definitions.hasOwnProperty(n)||(definitions[n]=amd.require(e,t))},amd)define("quant/now",[],function(){return function(){return(new Date).getTime()}}),define("quant/origin",["quant/now"],function(n){return function(e){for(var t=e.domain||"",r=new Date(0).toUTCString(),o=new Date(n()+864e5).toUTCString(),a=t.split("."),i="",u=2;u<=a.length;u++){i=a.slice(-u).join(".");var c="_dlt="+"1; path=/; domain="+i+"; expires="+o;if(e.cookie=c,/_dlt=1\b/.test(e.cookie))return e.cookie="_dlt="+"; path=/; domain="+i+"; expires="+r,i}return e.cookie="_dlt="+"; path=/; domain="+i+"; expires="+r,t}}),define("quant/windows",[],function(){return function(n,e){if(void 0===n)throw new Error("window many not be undefined");if(void 0===e)throw new Error("top may not be undefined");e=e.self,this.depth=0;var t=n.self;for(this.top=t;t!==e;){t=t.parent.self;try{t.location.href&&(this.url=t.location.href,this.top=t)}catch(n){}this.depth++}this.locate=function(t){for(var r=n;;){try{if(t in r.frames)return r}catch(n){}if(r===e)break;r=r.parent.self}}}}),define("quant/log",[],function(){function n(n,e){this.isDebug=/qcdbgc=1$/.test(window.location.toString());var t=function(){return(new Date).toString()},r=function(n,e){"undefined"!=typeof console&&console.log.apply(console,[n+" "+t()].concat([].slice.call(e)))};this.error=function(){r("ERROR",arguments)},this.debug=function(){this.isDebug&&r("DEBUG",arguments)}}return n}),define("quant/ready",[],function(){function n(){var n=!1,e=[];document.readyState in{complete:!0,interactive:!0}&&(n=!0);var t=function(){for(n=!0;e.length>0;)e.shift()()};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",t,!1),window.attachEvent("onload",t)),this.ready=function(t){n?t():e.push(t)}}return(new n).ready}),define("quant/promise",[],function(){function n(u){var c,f,s=[],l=e,d=function(n){return n},p=function(n,e,t,r){try{var a=n(r);o(a)?(a.then(e),a.catch(t)):e(a)}catch(n){t(n)}},h=function(n){c=n,l=t,s.forEach(function(e){e.push(n),p.apply(0,e)})},v=function(n){f=n,l=r,s.forEach(function(e){e[r](n)})},g=function(n,e,t){return function(r){p(n,e,t,r)}};try{u(h,v)}catch(n){v(n)}return{then:function(o){switch(l){case e:return new n(function(n,e){s.push([o,n,e])});case t:return a(o(c));case r:return i(f)}},catch:function(o){switch(l){case e:return new n(function(n,e){s.push([d,n,g(o,n,e)])});case t:return a(c);case r:return a(o(f))}}}}var e=0,t=1,r=2,o=function(n){return"object"==typeof n&&"then"in n&&"function"==typeof n.then},a=function(n){return o(n)?n:{then:function(e){return a(e(n))},catch:function(n){return this}}},i=function(n){return{then:function(n){return this},catch:function(e){return a(e(n))}}};return n.resolve=a,n.reject=i,n.all=function(n){return n.length?n.map(function(n){return n.then(function(n){return[n]})}).reduce(function(n,e){return n.then(function(n){return e.then(function(e){return n.concat(e)})})}):a([])},n}),define("quant/loader",["quant/ready","quant/promise"],function(n,e){function t(t,r){var o,a=[];n(function(){o=r.getElementsByTagName("head")[0]});var i=function(n){var e=new Image;return e.src=n,e};this.image=function(n){return new e(function(e,t){var r=i(n);a.push(r),r.onload=function(){e(r),a.shift(),delete r.onload,delete r.onerror},r.onerror=t})},this.beacon=function(n){var e=t.navigator;e&&e.sendBeacon?e.sendBeacon(n):i(n)};var u=function(n,e,t){var o=r.createElement("script");o.type="text/javascript",o.src=n;var a=function(){e(o),o.onreadystatechange=null,o.onload=null,o.onerror=null};return o.onload=a,o.onreadystatechange=function(){o.readyState in{loaded:1,complete:1}&&a()},o.onerror=t,o};this.script=function(t){return new e(function(e,r){n(function(){var n=u(t,e,r);o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n)})})}}return t}),define("quant/json",[],function(){var localJSON=window.JSON||{};return void 0!==localJSON.stringify&&'{"test":["1"]}'===localJSON.stringify({test:["1"]})||(localJSON.stringify=function(n){var e=typeof n;if("object"!==e||null===n)return"string"===e&&(n='"'+n+'"'),String(n);var t,r,o=[],a=n&&n.constructor===Array;for(t in n)r=n[t],"function"!==(e=typeof r)&&("string"===e?r='"'+r+'"':"object"===e&&null!==r&&(r=localJSON.stringify(r)),o.push((a?"":'"'+t+'":')+String(r)));return(a?"[":"{")+String(o)+(a?"]":"}")},localJSON.parse=localJSON.parse||function(string){return eval("("+string+")")}),localJSON}),define("quant/event",[],function(){function n(){this.add=function(n,e,t){n.addEventListener?n.addEventListener(e,t):"function"==typeof jQuery?jQuery(n).on(e,t):n.attachEvent&&n.attachEvent("on"+e,t)},this.remove=function(n,e,t){n.removeEventListener?n.removeEventListener(e,t):"function"==typeof jQuery?jQuery(n).off(e,t):n.detachEvent&&n.detachEvent("on"+e,t)},this.trigger=function(n,e,t){var r=n.ownerDocument;if(n.dispatchEvent&&r.createEvent){var o=r.createEvent("Event");if(o.initEvent(e,!0,!0),void 0!==t)for(var a in t)a in o||(o[a]=t[a]);n.dispatchEvent(o)}else"function"==typeof jQuery&&jQuery(n).trigger(e,t)}}return new n}),define("quant/consent/truste",["quant/json","quant/promise","quant/event","quant/now"],function(n,e,t,r){return function(o,a,i,u,c,f,s,l){var d,p={},h=function(n){var e=n.source[0];return"p"+n.consent[0]+("a"==e?"e":"i")};"object"==typeof u&&"function"==typeof u.callApi?(!0,d=function(n,t,r,o){var a=u.callApi(t,o,l,c,r);return n.cm=h(a),e.resolve(!0)}):d=function(u,f,s,d){return o.depth>0&&(t.add(a,"message",function(e){var t=e.data;if("string"==typeof t&&t.indexOf("PrivacyManagerAPI")>0)try{t=n.parse(t)}catch(n){return}else if(void 0!==t.PrivacyManagerAPI){var r=t.PrivacyManagerAPI;u.cm=h(r)}}),i.postMessage(n.stringify({PrivacyManagerAPI:{timestamp:r(),action:f,self:d,domain:l,authority:c,type:s}}),"*")),e.resolve(!0)},this.consent=function(n){return d(n,"getConsent",f,s)},this.parameters=p}}),define("quant/consent/uspapi",["quant/promise","quant/json","quant/event","quant/now"],function(n,e,t,r){return function(o,a,i,u){var c;if("function"==typeof a.__uspapi)c=function(e,t){return new n(function(n,e){a.__uspapi("getUSPData",t,function(t,r){t&&"string"==typeof t.uspString?n(t):e(t)})}).catch(function(n){return i.error("[USPAPI] unsuccessful: ",n),!0})};else{var f=(o.locate(u),{});t.add(a,"message",function(n){var t=n.data;if("string"==typeof t&&"{"==t[0])try{t=e.parse(t)}catch(n){return}if(t.hasOwnProperty("__uspapiReturn")){var r=t.__uspapiReturn,o=r.callId,a=f[o];if(void 0===a)return;r.success?a[0](r.returnValue):a[1](r.returnValue)}}),c=function(e,t){var a=o.locate(u);if(void 0===a)return n.resolve(void 0);var i=r();return new n(function(n,r){f[i]=[n,r],a.postMessage({__uspapiCall:{command:e,version:t,callId:i}})})}}this.consent=function(n){return c("getUSPData",1).then(function(e){return e&&"string"==typeof e.uspString&&(n.us_privacy=e.uspString),!0})}}}),define("quant/consent-manager",["quant/promise","quant/json"],function(n,e){return function(e){var t,r={},o=function(o){return void 0===t&&(t=n.all(e.map(function(n){return n.consent(r)})).then(function(n){return n.reduce(function(n,e){return n&&e},!0)})),t.then(function(n){if(n)return o()})};this.consent=o,this.wrap=function(n){return function(){var e=this,t=arguments;return o(function(){return n.apply(e,t)})}},this.parameters=r}}),define("quant/consent/tcf2.0",["quant/promise","quant/json","quant/event","quant/now"],function(n,e,t,r){function o(n,e){var t=e.gdprApplies,r=e.purpose,o=e.vendor,a=o&&o.consents&&o.consents[f],i=o&&o.legitimateInterests&&o.legitimateInterests[f],u=e.publisher?e.publisher.restrictions:{};return!t||n.map(function(n){var e=!!r.consents&&r.consents[n],t=!!r.legitimateInterests&&r.legitimateInterests[n],o=u&&u[n]?u[n][f]:null;return 0!==o&&(!(!a||!e||2===o||-1==l.indexOf(n)&&1!==o)||!(1===o||!i||!t||-1!=d.indexOf(n)||-1!=l.indexOf(n)&&2!==o))}).reduce(function(n,e){return n&&e},!0)}function a(a,f,l,d){var q,y;if("function"==typeof f.__tcfapi)y=function(e,t){return new n(function(n,r){f.__tcfapi(e,p,function(t,o){if(o){var a=t.eventStatus;e===h&&t.gdprApplies&&"useractioncomplete"!==a&&"tcloaded"!==a||n(t)}else r(t)},t)})};else{var m={},w={};t.add(f,"message",function(n){var t=n.data;if(void 0===t)return void l.error(i+"Recieved undefined message");if("string"==typeof t&&"{"==t[0])try{t=e.parse(t)}catch(n){return}if(t.hasOwnProperty(v)){var r=t[v],o=r.callId,a=m[o];if(void 0===a)return;var f=r.returnValue;r.success?w[o]===h&&f.gdprApplies&&"useractioncomplete"!==f.eventStatus&&"tcloaded"!==f.eventStatus||a[u](f):a[c](f)}}),y=function(t,o){var i=a.locate(d);if(void 0===i)return n.resolve({gdprApplies:!1});var u=r();return new n(function(n,r){m[u]=[n,r],w[u]=t;var a={};a[g]={command:t,parameter:o,version:p,callId:u},i.postMessage(e.stringify(a),"*")})}}this.consent=function(n){return void 0===q&&(q=y(h).then(function(e){return e.gdprApplies&&"false"!=e.gdprApplies?(n.gdpr=1,n.gdpr_consent=e.tcString):n.gdpr=n.gdpr||0,o(s,e)}).catch(function(e){return l.error("[TCF2.0] unsuccessful: ",e),n.gdpr=n.gdpr||0,!0})),q}}var i="[TCF2]: ",u=0,c=1,f=11,s=["1","3","7","8","9","10"],l=["1","3"],d=["1","3"],p=2,h="addEventListener",v="__tcfapiReturn",g="__tcfapiCall";return a.resolveConsent=o,a}),define("quant/qtrack",[],function(){function n(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])}function e(e,t,a){for(var i=0;i<r.length;i++){var u={qacct:r[i],labels:a?e:"_fp.event."+e,event:"refresh"};if(n(u,o),void 0!==t&&null!==t)for(var c in t)t.hasOwnProperty(c)&&("product_id"===c&&t[c].constructor===Array&&(t[c]=t[c].join(",")),u[f[c]||c]=t[c]);window._qevents.push(u)}}function t(t,f,s){if(t===i){if(-1!==r.indexOf(f))return;r.push(f);var l={qacct:f};n(o,s),n(l,o),window._qevents.push(l)}else t===u?-1!==a.indexOf(f)?e(f,s,!1):console.warn("Unsupported event by track, please use "+c+" for this event."):t===c&&e(f,s,!0)}var r,o,a=["PageView","ViewContent","Search","AddToWishlist","AddToCart","InitiateCheckout","AddPaymentInfo","Purchase","Lead","Register","StartTrial","Subscribe","SubmitApplication"],i="init",u="track",c="trackCustom",f={order_id:"orderid",value:"revenue"};return function(){if(window.qtrack||(window.qtrack=function(){window.qtrack.impl.apply(window.qtrack,arguments)}),!window.qtrack.impl&&(r=[],o={},window.qtrack.impl=t,window.qtrack&&window.qtrack.q))for(;window.qtrack.q.length>0;)t.apply(t,window.qtrack.q.shift())}}),define("quant/hashing",[],function(){function n(){function n(n){return unescape(encodeURIComponent(n))}function e(n,e){return e>>>n|e<<32-n}function t(n){return e(2,n)^e(13,n)^e(22,n)}function r(n){return e(6,n)^e(11,n)^e(25,n)}function o(n){return e(7,n)^e(18,n)^n>>>3}function a(n){return e(17,n)^e(19,n)^n>>>10}function i(n,e,t){return n&e^~n&t}function u(n,e,t){return n&e^n&t^e&t}this.FNV=function(n){var e,t,r,o;return e=2166136261,t=3386659096,r=c(e,n),o=c(t,n),Math.round(Math.abs(r*o)/65536).toString(16)};var c=function(n,e){var t;for(t=0;t<e.length;t++)n^=e.charCodeAt(t),n+=(n<<1)+(n<<4)+(n<<7)+(n<<8)+(n<<24);return n};this.SHA256=function(e){e=n(e);var c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],f=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];e+=String.fromCharCode(128);for(var s=e.length/4+2,l=Math.ceil(s/16),d=new Array(l),p=0;p<l;p++){d[p]=new Array(16);for(var h=0;h<16;h++)d[p][h]=e.charCodeAt(64*p+4*h+0)<<24|e.charCodeAt(64*p+4*h+1)<<16|e.charCodeAt(64*p+4*h+2)<<8|e.charCodeAt(64*p+4*h+3)<<0}var v=8*(e.length-1)/Math.pow(2,32),g=8*(e.length-1)>>>0;for(d[l-1][14]=Math.floor(v),d[l-1][15]=g,p=0;p<l;p++){for(var q=new Array(64),y=0;y<16;y++)q[y]=d[p][y];for(y=16;y<64;y++)q[y]=a(q[y-2])+q[y-7]+o(q[y-15])+q[y-16]>>>0;var m=f[0],w=f[1],_=f[2],b=f[3],E=f[4],S=f[5],O=f[6],j=f[7];for(y=0;y<64;y++){var P=j+r(E)+i(E,S,O)+c[y]+q[y],C=t(m)+u(m,w,_);j=O,O=S,S=E,E=b+P>>>0,b=_,_=w,w=m,m=P+C>>>0}f[0]=f[0]+m>>>0,f[1]=f[1]+w>>>0,f[2]=f[2]+_>>>0,f[3]=f[3]+b>>>0,f[4]=f[4]+E>>>0,f[5]=f[5]+S>>>0,f[6]=f[6]+O>>>0,f[7]=f[7]+j>>>0}for(j=0;j<f.length;j++)f[j]=("00000000"+f[j].toString(16)).slice(-8);return f.join("")}}return new n}),define("quant/normalize",["quant/hashing"],function(n){return function(e,t,r,o,a,i){var u,c={},f=null,s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,l=/^[A-Fa-f0-9]{64}$/,d=2,p={};for(u in t)p[u]=void 0!==t[u],t.hasOwnProperty(u)&&"string"==typeof t[u]&&("uid"!==u&&"uh"!==u?"qacct"!==u&&(t[u].length>0?c[u+e]=encodeURIComponent(t[u]):p[u]=!1):(i||(t[u].match(l)?(d=1,f=t[u].toLowerCase()):(t[u].match(s)&&(d=0,t[u]=t[u].toLowerCase()),""!==t[u]&&(f=n.SHA256(t[u])))),delete t[u]));for(u in r)r.hasOwnProperty(u)&&"string"==typeof r[u]&&!p[u]&&(c[u+e]=encodeURIComponent(r[u]));return c["rf"+e]=""+a,"string"==typeof f&&(t.uh=f,c["uh"+e]=encodeURIComponent(f)),c["uht"+e]=""+d,c["a"+e]=o,c}}),define("quant.js",["quant/origin","quant/windows","quant/log","quant/loader","quant/consent/truste","quant/consent/uspapi","quant/consent-manager","quant/consent/tcf2.0","quant/qtrack","quant/normalize","quant/hashing"],function(n,e,t,r,o,a,i,u,c,f,s){return void 0===window.__qc&&(window.__qc=function(c,l,d){if(c.__qc)return c.__qc;var p,h,v,g,q,y,m,w,_,b,E,S,O,j,P,C,A,x,I,k,D,R,T,M,N,z,U,L,J,B,V,F,Q,G,H,$,W,Z,K,X,Y,nn,en,tn,rn,on,an,un,cn=n(l),fn=new e(c,c.top),sn=new r(c,l),ln=new t(sn,"quantcount.com"),dn=new i([new o(fn,c,c.top,c.PrivacyManagerAPI,"truste.com","advertising","quantserve.com",cn),new a(fn,c,ln,"__uspapiLocator"),new u(fn,c,ln,"__tcfapiLocator")]),pn=["a","ce","cm","dst","enc","fpa","fpan","je","ns","ogl","rf","tzo","sr"],hn=["4dcfa7079941","127fdf7967f31","588ab9292a3f","32f92b0727e5","22f9aa38dfd3","a4abfe8f3e04","18b66bc1325c","958e70ea2f28","bdbf0cb4bbb","65118a0d557","40a1d9db1864","18ae3d985046","3b26460f55d"],vn=!1,gn=!1,qn=0,yn=[],mn=[],wn=[],_n=[],bn={},En=0,Sn=null,On={},jn={},Pn=null,Cn=[].slice;!function(){var n;n=l.createElement("script"),p="async"in n?1:n.readyState?2:3,n=null}();var An=function(n){try{return{init:b,hash:s.SHA256,push:E,rules:G,require:require,hasRules:$,defaults:X,__qc:function(){return!0}}[n].apply(null,Cn.call(arguments,1))}catch(n){return ln.error(n),!1}};return An.evts=0,An.v=2,An.SD=hn,An.qpixelsent=[],Q=function(n){var e,t=n?n.length||0:0;for(e=0;e<t;e++)if(!n[e])return!1;return!0},K=function(n){(n=n||c._qacct)&&(N(_n,n)||_n.push(n))},N=function(n,e){var t,r=n.length;for(t=0;t<r;t++)if(n[t]===e)return!0;return!1},L=function(n){return{}.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},J=function(n){var e,t,r;if("array"===(t=L(n)))return n.slice(0);if("object"===t){e={};for(r in n)n.hasOwnProperty(r)&&(e[r]=n[r]);return e}return"string"===t?""+n:n},E=function(n,e){P(n,e)},$=function(n){return N(wn,n)},X=function(n,e){var t;n&&(t=On[n],t&&(e=T(e,t)),e.qacct&&delete e.qacct,On[n]=e)},Y=function(n){var e,t,r,o,a,i;if(q(n)){a=n;for(o in a){if("string"==typeof a[o]){e=n.event||"load",t=n.media||"webpage","rule"!==e&&"load"!==e||"webpage"!==t&&"ad"!==t?P(n):(i=n.qacct||c._qacct,n.qacct=i,r=jn[i],r=r?T(r,n):n,jn[i]=r),K(n.qacct);break}"object"==typeof a[o]&&null!=a[o]&&Y(a[o])}}},T=function(n,e){var t={};return t.qacct=n.qacct||e.qacct,"load"===n.event||"load"===e.event?t.event="load":n.event&&e.event?t.event=n.event||e.event:t.event=null,t.media=null,"webpage"===n.media||"webpage"===e.media?t.media="webpage":"ad"===n.media||"ad"===e.media?t.media="ad":t.media=n.media||e.media,M(t,n,e),M(t,e,n),t.event||delete t.event,t.media||delete t.media,t},M=function(n,e,t){var r,o,a,i,u,c;for(r in e)e.hasOwnProperty(r)&&!n.hasOwnProperty(r)&&(o=e[r],a=t[r],i="",u=!!o&&"string"==typeof o,c=!!a&&"string"==typeof a,u&&(i=o),u&&c&&(i+=","),c&&(i+=a),n[r]=i)},nn=function(){var n,e,t=[];if(!(En>0)){U();for(n in jn)jn.hasOwnProperty(n)&&jn[n]&&(e=jn[n],t.push(e),delete jn[n]);1==t.length&&P(t[0]),t.length>1&&P(t)}},en=function(){var n,e,t,r=[];for(t=_n.slice(0),n=0;n<t.length;n++)e=t[n],$(e)||r.push(e);if(0===r.length)nn();else for(n=0;n<r.length;n++)e=r[n],wn.push(e),D(e)},R=function(n,e,t,r){var o;n=c.location.protocol+"//"+n,Sn=l.scripts&&l.scripts[0]||null;var a=Sn&&Sn.parentNode||l.head||l;if(o=l.createElement("script"),1===p)o.src=n,o.async=!0,o.onload=e,t&&(o.onerror=function(n){o.onerror=null,t(n)}),a.insertBefore(o,Sn);else if(2===p){var i=!1;o.onload=o.onreadystatechange=function(){i||"loaded"!=o.readyState&&"complete"!=o.readyState||(i=!0,o.onreadystatechange=null,e())},o.src=n,a.insertBefore(o,Sn)}else r&&r()},D=function(n){En++,R("rules.quantcount.com/rules-"+n+".js",function(){bn[n]=2===p?2:0,tn()},function(e){bn[n]=1,tn()},function(){bn[n]=4,tn()})},tn=function(){En-=En>0?1:0,nn()},G=function(){var n,e,t,r=!0,o=!1;if(arguments.length){for(t=function(n){r?Y(n):P(n,!0),o=!0},n=0;n<arguments.length;n++)e=Cn.call(arguments[n],0),e.splice(1,0,t),H.apply(null,e);r=!1,vn&&nn()}return o},H=function(n,e){var t,r,o,a,i,u,c,f=[],s=[],l=e||P;if((r=Cn.call(arguments,2))&&r.length){for(o=r[0]||Q,a=r[1],i=r[2],t=i.length,u=0;u<t;u++)f.push(!1),s.push(null);c={p:n,f:f,r:o,c:i,a:a,v:s},$(n)||wn.push(n),mn.push(c),W(c,l)}else wn.push(n),bn[n]=6},W=function(n,e){var t,r=n&&n.c?n.c.length:0;for(t=0;t<r;t++)!function(t){var r,o;try{r=n.c[t][0],o=n.c[t].slice(1),o.splice(0,0,function(r){n.f[t]=!0,n.v[t]=r,Z(n,e)}),r.apply(null,o)}catch(r){n.f[t]=!0,n.v[t]=!1,Z(n,e)}}(t)},Z=function(n,e){var t,r,o,a,i,u,c,f=n.a,s=n.f,l=n.v,d=n.r||Q;if(t=Q(s),t&&(t=t&&d(l)),t)for(i=0;i<f.length;i++)try{r=f[i][0],o=f[i].length>1?f[i].slice(1):[],o=o.concat(n.v),a=r.apply(null,o),u={qacct:n.p,event:"rule"};for(c in a)a.hasOwnProperty(c)&&"qacct"!==c&&(u[c]=a[c]);e(u)}catch(n){continue}},h=function(){return v(0)!==v(6)?1:0},v=function(n){var e=new Date(2e3,n,1,0,0,0,0),t=e.toGMTString();return e-new Date(t.substring(0,t.lastIndexOf(" ")-1))},g=function(n){return n.replace(/\./g,"%2E").replace(/,/g,"%2C")},q=function(n){return void 0!==n&&null!=n},y=function(){return Math.round(2147483647*Math.random())},m=function(n){var e,t,r,o="",a=l.cookie;return a?(e=a.indexOf(n+"="),t=e+n.length+1,e>-1&&(r=a.indexOf(";",t),r<0&&(r=a.length),o=a.substring(t,r)),o):o},j=function(n){return"P0-"+y()+"-"+n.getTime()},O=function(n,e,t){return["__qca=",n,"; expires=",e.toGMTString(),"; path=/; domain=",t].join("")},S=function(){var n,e,t,r,o,a,i,u,c,f=["","",""];if(1===qn)return f[0]=";fpan=u;fpa=",f;for(n=s.FNV(cn),r=0;r<hn.length;r++)if(hn[r]===n)return f[0]=";fpan=u;fpa=",f;return e=new Date,t=m("__qca"),t.length>0||Pn?(0===t.length&&(t=Pn,f[1]=O(Pn,new Date(e.getTime()+338688e5),cn)),f[0]=";fpan=0;fpa="+t):(Pn=j(e),f[1]=O(Pn,new Date(e.getTime()+338688e5),cn),f[0]=";fpan=1;fpa="+Pn),o=m("_pubcid"),a=m("_pubcid_optout"),i=o.length>0?o:m("_sharedID"),u=m("_pbjs_id_optout"),c=u.length>0||"1"===a,!c&&i.length>0?f[2]=";pbc="+i:f[2]=";pbc=",f},w=function(){var n=S()[1];n&&(l.cookie=n)},_=function(n){l.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain="+cn},V=function(n){var e,t;if(n&&"object"===L(n))for(t=0;t<pn.length;t++)e=pn[t],n.hasOwnProperty(e)&&n[e]&&delete n[e]},I=function(n,e,t){var r,o,a;return e&&"string"==typeof e.qacct?r=e.qacct:"string"==typeof c._qacct&&(r=c._qacct),r&&0!==r.length?(e=B(r,e),delete jn[r],a=On[r],o=bn[r],q(o)||(o=3),un(e,a,t,r)?null:f(n,e,a,r,o,F())):null},x=function(n){var e,t=[],r=[],o=[];for(e in n)n[e]&&n.hasOwnProperty(e)&&("uh"===e||"uht"===e?r.push(";"+e+"="+n[e]):t.push(e+"="+n[e]));return o.push(t.join(";")),o.push(r.join("")),o},k=function(){var n,e,t,r,o,a=l.getElementsByTagName("meta"),i="";for(n=0;n<a.length;n++){if(o=a[n],i.length>=1e3)return encodeURIComponent(i);q(o)&&q(o.attributes)&&q(o.attributes.property)&&q(o.attributes.property.value)&&q(o.content)&&(e=o.attributes.property.value,t=o.content,e.length>3&&"og:"===e.substring(0,3)&&(i.length>0&&(i+=","),r=t.length>80?80:t.length,i+=g(e.substring(3,e.length))+"."+g(t.substring(0,r))))}return encodeURIComponent(i)},F=function(){var n,e=!1;return q(c.external)&&(n=c.external,e="function"==typeof n.InPrivateFilteringEnabled&&!0===n.InPrivateFilteringEnabled()),e||"1"==d.doNotTrack||"yes"===d.doNotTrack||"1"==d.msDoNotTrack},P=function(n,e){var t,r,o,a,i,u,f,s,p,v,g,m,w=y(),_="",b="",E="",O="",j="",P="u",C="1",D=[];if(qn=0,q(An.qpixelsent)||(An.qpixelsent=[]),q(n)){if("object"===(v=L(n)))o=I("",n,e);else if("array"===v)for(i=0;i<n.length;i++)g=I("."+(i+1),n[i],e),o=0===i?g:T(o,g)}else"string"==typeof _qacct&&(o=I("",null,e));o&&(t=d.cookieEnabled?"1":"0",void 0!==d.javaEnabled&&(P=d.javaEnabled()?"1":"0"),q(c._qmeta)&&(b=";m="+encodeURIComponent(c._qmeta),c._qmeta=null),self.screen&&(_=screen.width+"x"+screen.height+"x"+screen.colorDepth),u=new Date,f=h(),m=S(),s=m[0],p=m[2],c.location&&c.location.href&&(E=encodeURIComponent(c.location.href)),l&&l.referrer&&(j=encodeURIComponent(l.referrer)),c.self===c.top&&(C="0"),o.url?O=E:o.url=E,o.ref||(o.ref=j||""),r=k(),a=x(o),D.push("/pixel;r="+w+";"+a[0]),D.push(a[1]),D.push(s+p),D.push(";ns="+C+";ce="+t+";qjs=1;qv=a98acd33-20220316110313"),D.push((o.ref?"":";ref=")+";d="+cn+";je="+P+";sr="+_+";dst="+f+";et="+u.getTime()+";tzo="+u.getTimezoneOffset()+(O?";ourl="+O:"")+b+";ogl="+r),yn.push(D),A())},C=function(n){dn.consent(function(){return!0}).then(function(n){return n||_("__qca"),n?"quantserve.com":"quantcount.com"}).then(function(e){var t=dn.parameters,r=function(){return function(){return"quantserve.com"===e?[n[1],n[2]].join(""):";uh=u;uht=u"}}();return sn.image(["//pixel.",e,n[0],r(),n[3],";cm=",t.cm,1===t.gdpr?";gdpr=1;gdpr_consent="+t.gdpr_consent:";gdpr=0",t.us_privacy?";us_privacy="+t.us_privacy:"",n[4]].join("")).then(function(n){n&&"number"==typeof n.width&&3===n.width?_("__qca"):"quantserve.com"===e&&w()})})},A=function(){for(;yn.length;)C(yn.shift())},rn=function(){var n,e,t=arguments;for(z([].slice.call(t)),e=0;e<t.length;e++)n=t[e],P(n);_n.length?en():nn()},z=function(n){var e,t=L(n);if("array"===t)for(e=0;e<n.length;e++)z(n[e]);else"object"===t&&K(n.qacct||c._qacct)},U=function(){var n;if(gn||c._qevents.length||c.ezt.length||"undefined"==typeof _qacct||(P({qacct:c._qacct}),gn=!0),!An.evts){for(n in c._qevents)c._qevents[n]!==c._qevents.push&&c._qevents.hasOwnProperty(n)&&P(c._qevents[n]);for(n in c.ezt)c.ezt[n]!==c.ezt.push&&c.ezt.hasOwnProperty(n)&&P(c.ezt[n]);c._qevents={push:rn},c.ezt.push=function(){var n,e=arguments;if(q(c.queueManager))for(n=0;n<e.length;n++)c.queueManager.push(e[n]);else rn.apply(this,arguments)},An.evts=1}},an=function(n){var e;n&&(e=J(n),z(n),c._qevents.push(e),n=null)},on=function(n){n.push=function(){return z([].slice.call(arguments)),en(),[].push.apply(n,arguments)}},un=function(n,e,t,r){e=e||{};var o=(n?n.media:e.media)||"webpage",a=(n?n.event:e.event)||"load";if("ad"===o&&(qn=1),"webpage"===o&&"load"===a){for(var i=0;i<An.qpixelsent.length;i++)if(An.qpixelsent[i]===r&&!t)return!0;An.qpixelsent.push(r)}return!1},B=function(n,e){var t=jn[n];return e?t&&(e=T(e,t)):e=t,V(e),e},b=function(){q(c._qevents)||(c._qevents=[]),q(c.ezt)||(c.ezt=[]),an(c._qoptions),an(c.qcdata),an(c.smarttagdata),An.evts||(on(c._qevents),on(c.ezt)),z(c.ezt),z(c._qevents),z({qacct:c._qacct}),c._qoptions=null,_n.length?en():nn(),vn=!0},c.quantserve=c.quantserve||b,An.quantserve=b,An}(window,window.document,window.navigator)),window.quantserve(),c(),window.__qc})}(window);