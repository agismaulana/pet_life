!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("preact/compat"));else if("function"==typeof define&&define.amd)define(["preact/compat"],n);else{var r="object"==typeof exports?n(require("preact/compat")):n(e.PreactCompat);for(var t in r)("object"==typeof exports?exports:e)[t]=r[t]}}(Depicter,(e=>(()=>{"use strict";var n={314:n=>{n.exports=e}},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,t),o.exports}t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{t.r(a),t.d(a,{dpcCounter:()=>ce});var e=t(314),n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},r={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],u={CSS:{},springs:{}};function i(e,n,r){return Math.min(Math.max(e,n),r)}function c(e,n){return e.indexOf(n)>-1}function s(e,n){return e.apply(null,n)}var f={arr:function(e){return Array.isArray(e)},obj:function(e){return c(Object.prototype.toString.call(e),"Object")},pth:function(e){return f.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||f.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return f.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return f.hex(e)||f.rgb(e)||f.hsl(e)},key:function(e){return!n.hasOwnProperty(e)&&!r.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function l(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map((function(e){return parseFloat(e)})):[]}function d(e,n){var r=l(e),t=i(f.und(r[0])?1:r[0],.1,100),a=i(f.und(r[1])?100:r[1],.1,100),o=i(f.und(r[2])?10:r[2],.1,100),c=i(f.und(r[3])?0:r[3],.1,100),s=Math.sqrt(a/t),d=o/(2*Math.sqrt(a*t)),p=d<1?s*Math.sqrt(1-d*d):0,v=d<1?(d*s-c)/p:-c+s;function h(e){var r=n?n*e/1e3:e;return r=d<1?Math.exp(-r*d*s)*(1*Math.cos(p*r)+v*Math.sin(p*r)):(1+v*r)*Math.exp(-r*s),0===e||1===e?e:1-r}return n?h:function(){var n=u.springs[e];if(n)return n;for(var r=1/6,t=0,a=0;;)if(1===h(t+=r)){if(++a>=16)break}else a=0;var o=t*r*1e3;return u.springs[e]=o,o}}function p(e){return void 0===e&&(e=10),function(n){return Math.ceil(i(n,1e-6,1)*e)*(1/e)}}var v,h,m=function(){var e=.1;function n(e,n){return 1-3*n+3*e}function r(e,n){return 3*n-6*e}function t(e){return 3*e}function a(e,a,o){return((n(a,o)*e+r(a,o))*e+t(a))*e}function o(e,a,o){return 3*n(a,o)*e*e+2*r(a,o)*e+t(a)}return function(n,r,t,u){if(0<=n&&n<=1&&0<=t&&t<=1){var i=new Float32Array(11);if(n!==r||t!==u)for(var c=0;c<11;++c)i[c]=a(c*e,n,t);return function(c){return n===r&&t===u||0===c||1===c?c:a(function(r){for(var u=0,c=1;10!==c&&i[c]<=r;++c)u+=e;--c;var s=u+(r-i[c])/(i[c+1]-i[c])*e,f=o(s,n,t);return f>=.001?function(e,n,r,t){for(var u=0;u<4;++u){var i=o(n,r,t);if(0===i)return n;n-=(a(n,r,t)-e)/i}return n}(r,s,n,t):0===f?s:function(e,n,r,t,o){var u,i,c=0;do{(u=a(i=n+(r-n)/2,t,o)-e)>0?r=i:n=i}while(Math.abs(u)>1e-7&&++c<10);return i}(r,u,u+e,n,t)}(c),r,u)}}}}(),g=(v={linear:function(){return function(e){return e}}},h={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,r=4;e<((n=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var r=i(e,1,10),t=i(n,.1,2);return function(e){return 0===e||1===e?e:-r*Math.pow(2,10*(e-1))*Math.sin((e-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,n){h[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(h).forEach((function(e){var n=h[e];v["easeIn"+e]=n,v["easeOut"+e]=function(e,r){return function(t){return 1-n(e,r)(1-t)}},v["easeInOut"+e]=function(e,r){return function(t){return t<.5?n(e,r)(2*t)/2:1-n(e,r)(-2*t+2)/2}},v["easeOutIn"+e]=function(e,r){return function(t){return t<.5?(1-n(e,r)(1-2*t))/2:(n(e,r)(2*t-1)+1)/2}}})),v);function y(e,n){if(f.fnc(e))return e;var r=e.split("(")[0],t=g[r],a=l(e);switch(r){case"spring":return d(e,n);case"cubicBezier":return s(m,a);case"steps":return s(p,a);default:return s(t,a)}}function b(e){try{return document.querySelectorAll(e)}catch(e){return}}function x(e,n){for(var r=e.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<r;o++)if(o in e){var u=e[o];n.call(t,u,o,e)&&a.push(u)}return a}function M(e){return e.reduce((function(e,n){return e.concat(f.arr(n)?M(n):n)}),[])}function w(e){return f.arr(e)?e:(f.str(e)&&(e=b(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function O(e,n){return e.some((function(e){return e===n}))}function D(e){var n={};for(var r in e)n[r]=e[r];return n}function k(e,n){var r=D(e);for(var t in e)r[t]=n.hasOwnProperty(t)?n[t]:e[t];return r}function C(e,n){var r=D(e);for(var t in n)r[t]=f.und(e[t])?n[t]:e[t];return r}function P(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function I(e,n){return f.fnc(e)?e(n.target,n.id,n.total):e}function S(e,n){return e.getAttribute(n)}function T(e,n,r){if(O([r,"deg","rad","turn"],P(n)))return n;var t=u.CSS[n+r];if(!f.und(t))return t;var a=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+r;var i=100/a.offsetWidth;o.removeChild(a);var c=i*parseFloat(n);return u.CSS[n+r]=c,c}function j(e,n,r){if(n in e.style){var t=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(t)||"0";return r?T(e,a,r):a}}function A(e,n){return f.dom(e)&&!f.inp(e)&&(!f.nil(S(e,n))||f.svg(e)&&e[n])?"attribute":f.dom(e)&&O(o,n)?"transform":f.dom(e)&&"transform"!==n&&j(e,n)?"css":null!=e[n]?"object":void 0}function N(e){if(f.dom(e)){for(var n,r=e.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;n=t.exec(r);)a.set(n[1],n[2]);return a}}function B(e,n,r,t){switch(A(e,n)){case"transform":return function(e,n,r,t){var a=c(n,"scale")?1:0+function(e){return c(e,"translate")||"perspective"===e?"px":c(e,"rotate")||c(e,"skew")?"deg":void 0}(n),o=N(e).get(n)||a;return r&&(r.transforms.list.set(n,o),r.transforms.last=n),t?T(e,o,t):o}(e,n,t,r);case"css":return j(e,n,r);case"attribute":return S(e,n);default:return e[n]||0}}function F(e,n){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var t=P(e)||0,a=parseFloat(n),o=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function E(e,n){if(f.col(e))return function(e){return f.rgb(e)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=e))?"rgba("+r[1]+",1)":n:f.hex(e)?function(e){var n=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,r,t){return n+n+r+r+t+t})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",1)"}(e):f.hsl(e)?function(e){var n,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(n-e)*r:r<.5?n:r<2/3?e+(n-e)*(2/3-r)*6:e}if(0==u)n=r=t=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;n=s(l,f,o+1/3),r=s(l,f,o),t=s(l,f,o-1/3)}return"rgba("+255*n+","+255*r+","+255*t+","+c+")"}(e):void 0;var n,r}(e);if(/\s/g.test(e))return e;var r=P(e),t=r?e.substr(0,e.length-r.length):e;return n?t+n:t}function L(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function q(e){for(var n,r=e.points,t=0,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(t+=L(n,o)),n=o}return t}function H(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*S(e,"r")}(e);case"rect":return function(e){return 2*S(e,"width")+2*S(e,"height")}(e);case"line":return function(e){return L({x:S(e,"x1"),y:S(e,"y1")},{x:S(e,"x2"),y:S(e,"y2")})}(e);case"polyline":return q(e);case"polygon":return function(e){var n=e.points;return q(e)+L(n.getItem(n.numberOfItems-1),n.getItem(0))}(e)}}function $(e,n){var r=n||{},t=r.el||function(e){for(var n=e.parentNode;f.svg(n)&&f.svg(n.parentNode);)n=n.parentNode;return n}(e),a=t.getBoundingClientRect(),o=S(t,"viewBox"),u=a.width,i=a.height,c=r.viewBox||(o?o.split(" "):[0,0,u,i]);return{el:t,viewBox:c,x:c[0]/1,y:c[1]/1,w:u,h:i,vW:c[2],vH:c[3]}}function V(e,n,r){function t(r){void 0===r&&(r=0);var t=n+r>=1?n+r:0;return e.el.getPointAtLength(t)}var a=$(e.el,e.svg),o=t(),u=t(-1),i=t(1),c=r?1:a.w/a.vW,s=r?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function R(e,n){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=E(f.pth(e)?e.totalLength:e,n)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:f.str(e)||n?t.split(r):[]}}function W(e){return x(e?M(f.arr(e)?e.map(w):w(e)):[],(function(e,n,r){return r.indexOf(e)===n}))}function G(e){var n=W(e);return n.map((function(e,r){return{target:e,id:r,total:n.length,transforms:{list:N(e)}}}))}function X(e,n){var r=D(n);if(/^spring/.test(r.easing)&&(r.duration=d(r.easing)),f.arr(e)){var t=e.length;2!==t||f.obj(e[0])?f.fnc(n.duration)||(r.duration=n.duration/t):e={value:e}}var a=f.arr(e)?e:[e];return a.map((function(e,r){var t=f.obj(e)&&!f.pth(e)?e:{value:e};return f.und(t.delay)&&(t.delay=r?0:n.delay),f.und(t.endDelay)&&(t.endDelay=r===a.length-1?n.endDelay:0),t})).map((function(e){return C(e,r)}))}var Y={css:function(e,n,r){return e.style[n]=r},attribute:function(e,n,r){return e.setAttribute(n,r)},object:function(e,n,r){return e[n]=r},transform:function(e,n,r,t,a){if(t.list.set(n,r),n===t.last||a){var o="";t.list.forEach((function(e,n){o+=n+"("+e+") "})),e.style.transform=o}}};function Z(e,n){G(e).forEach((function(e){for(var r in n){var t=I(n[r],e),a=e.target,o=P(t),u=B(a,r,o,e),i=F(E(t,o||P(u)),u),c=A(a,r);Y[c](a,r,i,e.transforms,!0)}}))}function _(e,n){return x(M(e.map((function(e){return n.map((function(n){return function(e,n){var r=A(e.target,n.name);if(r){var t=function(e,n){var r;return e.tweens.map((function(t){var a=function(e,n){var r={};for(var t in e){var a=I(e[t],n);f.arr(a)&&1===(a=a.map((function(e){return I(e,n)}))).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(t,n),o=a.value,u=f.arr(o)?o[1]:o,i=P(u),c=B(n.target,e.name,i,n),s=r?r.to.original:c,l=f.arr(o)?o[0]:s,d=P(l)||P(c),p=i||d;return f.und(u)&&(u=s),a.from=R(l,p),a.to=R(F(u,l),p),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=f.pth(o),a.isPathTargetInsideSVG=a.isPath&&f.svg(n.target),a.isColor=f.col(a.from.original),a.isColor&&(a.round=1),r=a,a}))}(n,e),a=t[t.length-1];return{type:r,property:n.name,animatable:e,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}(e,n)}))}))),(function(e){return!f.und(e)}))}function Q(e,n){var r=e.length,t=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,e.map((function(e){return t(e)+e.duration}))):n.duration,a.delay=r?Math.min.apply(Math,e.map((function(e){return t(e)+e.delay}))):n.delay,a.endDelay=r?a.duration-Math.max.apply(Math,e.map((function(e){return t(e)+e.duration-e.endDelay}))):n.endDelay,a}var z=0,J=[],K=function(){var e;function n(r){for(var t=J.length,a=0;a<t;){var o=J[a];o.paused?(J.splice(a,1),t--):(o.tick(r),a++)}e=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ee.suspendWhenDocumentHidden&&(U()?e=cancelAnimationFrame(e):(J.forEach((function(e){return e._onDocumentVisibility()})),K()))})),function(){e||U()&&ee.suspendWhenDocumentHidden||!(J.length>0)||(e=requestAnimationFrame(n))}}();function U(){return!!document&&document.hidden}function ee(e){void 0===e&&(e={});var t,a=0,o=0,u=0,c=0,s=null;function l(e){var n=window.Promise&&new Promise((function(e){return s=e}));return e.finished=n,n}var d=function(e){var t=k(n,e),a=k(r,e),o=function(e,n){var r=[],t=n.keyframes;for(var a in t&&(n=C(function(e){for(var n=x(M(e.map((function(e){return Object.keys(e)}))),(function(e){return f.key(e)})).reduce((function(e,n){return e.indexOf(n)<0&&e.push(n),e}),[]),r={},t=function(t){var a=n[t];r[a]=e.map((function(e){var n={};for(var r in e)f.key(r)?r==a&&(n.value=e[r]):n[r]=e[r];return n}))},a=0;a<n.length;a++)t(a);return r}(t),n)),n)f.key(a)&&r.push({name:a,tweens:X(n[a],e)});return r}(a,e),u=G(e.targets),i=_(u,o),c=Q(i,a),s=z;return z++,C(t,{id:s,children:[],animatables:u,animations:i,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(e);function p(){var e=d.direction;"alternate"!==e&&(d.direction="normal"!==e?"normal":"reverse"),d.reversed=!d.reversed,t.forEach((function(e){return e.reversed=d.reversed}))}function v(e){return d.reversed?d.duration-e:e}function h(){a=0,o=v(d.currentTime)*(1/ee.speed)}function m(e,n){n&&n.seek(e-n.timelineOffset)}function g(e){for(var n=0,r=d.animations,t=r.length;n<t;){var a=r[n],o=a.animatable,u=a.tweens,c=u.length-1,s=u[c];c&&(s=x(u,(function(n){return e<n.end}))[0]||s);for(var f=i(e-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),p=s.to.strings,v=s.round,h=[],m=s.to.numbers.length,g=void 0,y=0;y<m;y++){var b=void 0,M=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*M,s.isPathTargetInsideSVG):w+l*(M-w),v&&(s.isColor&&y>2||(b=Math.round(b*v)/v)),h.push(b)}var O=p.length;if(O){g=p[0];for(var D=0;D<O;D++){p[D];var k=p[D+1],C=h[D];isNaN(C)||(g+=k?C+k:C+" ")}}else g=h[0];Y[a.type](o.target,a.property,g,o.transforms),a.currentValue=g,n++}}function y(e){d[e]&&!d.passThrough&&d[e](d)}function b(e){var n=d.duration,r=d.delay,f=n-d.endDelay,h=v(e);d.progress=i(h/n*100,0,100),d.reversePlayback=h<d.currentTime,t&&function(e){if(d.reversePlayback)for(var n=c;n--;)m(e,t[n]);else for(var r=0;r<c;r++)m(e,t[r])}(h),!d.began&&d.currentTime>0&&(d.began=!0,y("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,y("loopBegin")),h<=r&&0!==d.currentTime&&g(0),(h>=f&&d.currentTime!==n||!n)&&g(n),h>r&&h<f?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,y("changeBegin")),y("change"),g(h)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,y("changeComplete")),d.currentTime=i(h,0,n),d.began&&y("update"),e>=n&&(o=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(a=u,y("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&p()):(d.paused=!0,d.completed||(d.completed=!0,y("loopComplete"),y("complete"),!d.passThrough&&"Promise"in window&&(s(),l(d)))))}return l(d),d.reset=function(){var e=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===e,d.remaining=d.loop,t=d.children;for(var n=c=t.length;n--;)d.children[n].reset();(d.reversed&&!0!==d.loop||"alternate"===e&&1===d.loop)&&d.remaining++,g(d.reversed?d.duration:0)},d._onDocumentVisibility=h,d.set=function(e,n){return Z(e,n),d},d.tick=function(e){u=e,a||(a=u),b((u+(o-a))*ee.speed)},d.seek=function(e){b(v(e))},d.pause=function(){d.paused=!0,h()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,J.push(d),h(),K())},d.reverse=function(){p(),d.completed=!d.reversed,h()},d.restart=function(){d.reset(),d.play()},d.remove=function(e){re(W(e),d)},d.reset(),d.autoplay&&d.play(),d}function ne(e,n){for(var r=n.length;r--;)O(e,n[r].animatable.target)&&n.splice(r,1)}function re(e,n){var r=n.animations,t=n.children;ne(e,r);for(var a=t.length;a--;){var o=t[a],u=o.animations;ne(e,u),u.length||o.children.length||t.splice(a,1)}r.length||t.length||n.pause()}ee.version="3.2.1",ee.speed=1,ee.suspendWhenDocumentHidden=!0,ee.running=J,ee.remove=function(e){for(var n=W(e),r=J.length;r--;)re(n,J[r])},ee.get=B,ee.set=Z,ee.convertPx=T,ee.path=function(e,n){var r=f.str(e)?b(e)[0]:e,t=n||100;return function(e){return{property:e,el:r,svg:$(r),totalLength:H(r)*(t/100)}}},ee.setDashoffset=function(e){var n=H(e);return e.setAttribute("stroke-dasharray",n),n},ee.stagger=function(e,n){void 0===n&&(n={});var r=n.direction||"normal",t=n.easing?y(n.easing):null,a=n.grid,o=n.axis,u=n.from||0,i="first"===u,c="center"===u,s="last"===u,l=f.arr(e),d=l?parseFloat(e[0]):parseFloat(e),p=l?parseFloat(e[1]):0,v=P(l?e[1]:e)||0,h=n.start||0+(l?d:0),m=[],g=0;return function(e,n,f){if(i&&(u=0),c&&(u=(f-1)/2),s&&(u=f-1),!m.length){for(var y=0;y<f;y++){if(a){var b=c?(a[0]-1)/2:u%a[0],x=c?(a[1]-1)/2:Math.floor(u/a[0]),M=b-y%a[0],w=x-Math.floor(y/a[0]),O=Math.sqrt(M*M+w*w);"x"===o&&(O=-M),"y"===o&&(O=-w),m.push(O)}else m.push(Math.abs(u-y));g=Math.max.apply(Math,m)}t&&(m=m.map((function(e){return t(e/g)*g}))),"reverse"===r&&(m=m.map((function(e){return o?e<0?-1*e:-e:Math.abs(g-e)})))}return h+(l?(p-d)/g:d)*(Math.round(100*m[n])/100)+v}},ee.timeline=function(e){void 0===e&&(e={});var n=ee(e);return n.duration=0,n.add=function(t,a){var o=J.indexOf(n),u=n.children;function i(e){e.passThrough=!0}o>-1&&J.splice(o,1);for(var c=0;c<u.length;c++)i(u[c]);var s=C(t,k(r,e));s.targets=s.targets||e.targets;var l=n.duration;s.autoplay=!1,s.direction=n.direction,s.timelineOffset=f.und(a)?l:F(a,l),i(n),n.seek(s.timelineOffset);var d=ee(s);i(d),u.push(d);var p=Q(u,e);return n.delay=p.delay,n.endDelay=p.endDelay,n.duration=p.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},ee.easing=y,ee.penner=g,ee.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};const te=ee,ae=e=>{const n=e.toString().match(/\.\d+/);return n?n[0].length-1:0},oe=(0,e.forwardRef)(((e,n)=>{const{className:r,prefix:t,suffix:a,align:o="center",children:u}=e;return Depicter.h("div",{className:`${r} dpc-counter dpc-placement-${o}`},t&&Depicter.h("span",{className:"dpc-counter-prefix"},t),Depicter.h("span",{className:"dpc-counter-number",ref:n},u),a&&Depicter.h("span",{className:"dpc-counter-suffix"},a))})),ue=(0,e.forwardRef)(((n,r)=>{const{className:t="dpc-counter",initialValue:a=0,targetValue:o=0,duration:u=2e3,separator:i,prefix:c,suffix:s,useGroup:f,easing:l="linear",align:d="center",delay:p=1,onAnimationInit:v}=n,h=(0,e.useRef)(null),m=Math.max(ae(a),ae(o),0),g=(0,e.useRef)(null),y=(0,e.useCallback)((e=>{const n=h.current,r=e.animatables[0].target.value,t=parseFloat(r.toFixed(m)),a=f&&i?((e,n=",")=>e.toLocaleString(void 0,{useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:3}).replace(/,/g,n))(t,i):`${t}`;n&&(n.innerHTML=`${a}`)}),[m,i,f]);(0,e.useEffect)((()=>(h.current&&(g.current=te({targets:{value:a},value:o,easing:l,duration:u,round:!1,delay:p,autoplay:!1,update:y}),v?.()),()=>{g.current&&te.remove(g.current)})),[p,u,l,a,v,o,y]);const b=(0,e.useCallback)((()=>{g.current?.play()}),[]),x=(0,e.useCallback)((()=>{g.current?.pause()}),[]),M=(0,e.useCallback)((()=>{g.current?.seek(0),g.current?.pause()}),[]);return(0,e.useImperativeHandle)(r,(()=>({play:b,pause:x,stop:M}))),Depicter.h(oe,{className:t,suffix:s,prefix:c,align:d,ref:h})}));function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},ie.apply(this,arguments)}const ce={component:n=>{const{composer:r,layer:t,...a}=n,o=(0,e.useRef)(null),u=(0,e.useCallback)((()=>{o.current&&o.current.play()}),[]),i=(0,e.useCallback)((()=>{o.current&&o.current.stop()}),[]);return(0,e.useEffect)((()=>(t.on("layerShow",u),t.on("layerHide",i),t.holder.on("readyAndActivated",u),t.holder.on("readyAndDeactivated",i),()=>{t.off("layerShow",u),t.off("layerHide",i),t.holder.off("readyAndActivated",u),t.holder.off("readyAndDeactivated",i)})),[t,u,i]),Depicter.h(ue,ie({},a,{ref:o}))},async:!1}})(),a})()));