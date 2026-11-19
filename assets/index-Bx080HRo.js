var kg=Object.defineProperty;var zg=(i,t,e)=>t in i?kg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Gt=(i,t,e)=>zg(i,typeof t!="symbol"?t+"":t,e);import{i as Hg}from"./site-header-B9owv2G_.js";var Vg="1.3.4";function cm(i,t,e){return Math.max(i,Math.min(t,e))}function Gg(i,t,e){return(1-e)*i+e*t}function Wg(i,t,e,n){return Gg(i,t,1-Math.exp(-e*n))}function Xg(i,t){return(i%t+t)%t}var $g=class{constructor(){Gt(this,"isRunning",!1);Gt(this,"value",0);Gt(this,"from",0);Gt(this,"to",0);Gt(this,"currentTime",0);Gt(this,"lerp");Gt(this,"duration");Gt(this,"easing");Gt(this,"onUpdate")}advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const e=cm(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Wg(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Yg(i,t){let e;return function(...n){let r=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(r,n)},t)}}var qg=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){Gt(this,"width",0);Gt(this,"height",0);Gt(this,"scrollHeight",0);Gt(this,"scrollWidth",0);Gt(this,"debouncedResize");Gt(this,"wrapperResizeObserver");Gt(this,"contentResizeObserver");Gt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Gt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Gt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=Yg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},um=class{constructor(){Gt(this,"events",{})}emit(i,...t){let e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n]?.(...t)}on(i,t){return this.events[i]?.push(t)||(this.events[i]=[t]),()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},Qf=100/6,yr={passive:!1},Zg=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){Gt(this,"touchStart",{x:0,y:0});Gt(this,"lastDelta",{x:0,y:0});Gt(this,"window",{width:0,height:0});Gt(this,"emitter",new um);Gt(this,"onTouchStart",i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Gt(this,"onTouchMove",i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Gt(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Gt(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=n===1?Qf:n===2?this.window.width:1,s=n===1?Qf:n===2?this.window.height:1;t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});Gt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,yr),this.element.addEventListener("touchstart",this.onTouchStart,yr),this.element.addEventListener("touchmove",this.onTouchMove,yr),this.element.addEventListener("touchend",this.onTouchEnd,yr)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,yr),this.element.removeEventListener("touchstart",this.onTouchStart,yr),this.element.removeEventListener("touchmove",this.onTouchMove,yr),this.element.removeEventListener("touchend",this.onTouchEnd,yr)}},td=i=>Math.min(1,1.001-Math.pow(2,-10*i)),Kg=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h="vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:E=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:R=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:M=!1}={}){Gt(this,"_isScrolling",!1);Gt(this,"_isStopped",!1);Gt(this,"_isLocked",!1);Gt(this,"_preventNextNativeScrollEvent",!1);Gt(this,"_resetVelocityTimeout",null);Gt(this,"__rafID",null);Gt(this,"isTouching");Gt(this,"time",0);Gt(this,"userData",{});Gt(this,"lastVelocity",0);Gt(this,"velocity",0);Gt(this,"direction",0);Gt(this,"options");Gt(this,"targetScroll");Gt(this,"animatedScroll");Gt(this,"animate",new $g);Gt(this,"emitter",new um);Gt(this,"dimensions");Gt(this,"virtualScroll");Gt(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Gt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Gt(this,"onTransitionEnd",i=>{if(i.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",e=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(e)?this.stop():this.start()}});Gt(this,"onClick",i=>{const e=i.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(e){const n=e.getAttribute("href");if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,r)}}});Gt(this,"onPointerDown",i=>{i.button===1&&this.reset()});Gt(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof u=="function"&&u?.(p)||p.hasAttribute?.("data-lenis-prevent")||r&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const f=r&&this.options.syncTouch,g=r&&n.type==="touchend"&&Math.abs(h)>5;g&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Gt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Gt(this,"raf",i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Vg,(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=td:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:E,autoRaf:S,anchors:v,autoToggle:R,allowNestedScroll:b,__experimental__naiveDimensions:M},this.dimensions=new qg(i,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Zg(e,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,duration:r=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:d}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof i=="string"&&["top","left","start"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let h;if(typeof i=="string"?h=document.querySelector(i):i instanceof HTMLElement&&i?.nodeType&&(h=i),h){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const f=h.getBoundingClientRect();i=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const h=i-this.animatedScroll;h>this.limit/2?i=i-this.limit:h<-this.limit/2&&(i=i+this.limit)}}else i=cm(0,i,this.limit);if(i===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=i),typeof r=="number"&&typeof s!="function"?s=td:typeof s=="function"&&typeof r!="number"&&(r=1),this.animate.fromTo(this.animatedScroll,i,{duration:r,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(h,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now(),r=i._lenis??(i._lenis={});let s,o,a,l,c,u,d,h;const f=this.options.gestureOrientation;if(n-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(i);r.computedStyle=R;const b=R.overflowX,M=R.overflowY;if(s=["auto","overlay","scroll"].includes(b),o=["auto","overlay","scroll"].includes(M),r.hasOverflowX=s,r.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,h=i.clientHeight,a=c>d,l=u>h,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=c,r.scrollHeight=u,r.clientWidth=d,r.clientHeight=h}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,c=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,h=r.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let _;if(f==="horizontal")_="x";else if(f==="vertical")_="y";else{const R=t!==0,b=e!==0;R&&s&&a&&(_="x"),b&&o&&l&&(_="y")}if(!_)return!1;let g,p,m,E,S;if(_==="x")g=i.scrollLeft,p=c-d,m=t,E=s,S=a;else if(_==="y")g=i.scrollTop,p=u-h,m=e,E=o,S=l;else return!1;return(m>0?g<p:g>0)&&E&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Xg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function sr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function hm(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},go={duration:.5,overwrite:!1,delay:0},of,mn,Ue,Ei=1e8,Pe=1/Ei,ku=Math.PI*2,Jg=ku/4,jg=0,fm=Math.sqrt,Qg=Math.cos,t0=Math.sin,hn=function(t){return typeof t=="string"},Xe=function(t){return typeof t=="function"},pr=function(t){return typeof t=="number"},af=function(t){return typeof t>"u"},Yi=function(t){return typeof t=="object"},Yn=function(t){return t!==!1},lf=function(){return typeof window<"u"},qa=function(t){return Xe(t)||hn(t)},dm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,zu=/(?:-?\.?\d|\.)+/gi,pm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,no=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mm=/[+-]=-?[.\d]+/,_m=/[^,'"\[\]\s]+/gi,e0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,Bi,Hu,cf,mi={},rc={},gm,vm=function(t){return(rc=vo(t,mi))&&jn},uf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Pa=function(t,e){return!e&&console.warn(t)},xm=function(t,e){return t&&(mi[t]=e)&&rc&&(rc[t]=e)||mi},La=function(){return 0},n0={suppressEvents:!0,isStart:!0,kill:!1},zl={suppressEvents:!0,kill:!1},i0={suppressEvents:!0},hf={},Ir=[],Vu={},ym,ii={},Hc={},ed=30,Hl=[],ff="",df=function(t){var e=t[0],n,r;if(Yi(e)||Xe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Hl.length;r--&&!Hl[r].targetTest(e););n=Hl[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Wm(t[r],n)))||t.splice(r,1);return t},fs=function(t){return t._gsap||df(Ti(t))[0]._gsap},Sm=function(t,e,n){return(n=t[e])&&Xe(n)?t[e]():af(n)&&t.getAttribute&&t.getAttribute(e)||n},qn=function(t,e){return(t=t.split(",")).forEach(e)||t},$e=function(t){return Math.round(t*1e5)/1e5||0},en=function(t){return Math.round(t*1e7)/1e7||0},lo=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},r0=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},sc=function(){var t=Ir.length,e=Ir.slice(0),n,r;for(Vu={},Ir.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},pf=function(t){return!!(t._initted||t._startAt||t.add)},Mm=function(t,e,n,r){Ir.length&&!mn&&sc(),t.render(e,n,!!(mn&&e<0&&pf(t))),Ir.length&&!mn&&sc()},Em=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(_m).length<2?e:hn(t)?t.trim():t},Tm=function(t){return t},_i=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},s0=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},vo=function(t,e){for(var n in e)t[n]=e[n];return t},nd=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},oc=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},ha=function(t){var e=t.parent||ke,n=t.keyframes?s0(An(t.keyframes)):_i;if(Yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},o0=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},bm=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},bc=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},kr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ds=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},a0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Gu=function(t,e,n,r){return t._startAt&&(mn?t._startAt.revert(zl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},l0=function i(t){return!t||t._ts&&i(t.parent)},id=function(t){return t._repeat?xo(t._tTime,t=t.duration()+t._rDelay)*t:0},xo=function(t,e){var n=Math.floor(t=en(t/e));return t&&n===t?n-1:n},ac=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},wc=function(t){return t._end=en(t._start+(t._tDur/Math.abs(t._ts||t._rts||Pe)||0))},Ac=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=en(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),wc(t),n._dirty||ds(n,t)),t},wm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ac(t.rawTime(),e),(!e._dur||Wa(0,e.totalDuration(),n)-e._tTime>Pe)&&e.render(n,!0)),ds(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Pe}},Hi=function(t,e,n,r){return e.parent&&kr(e),e._start=en((pr(n)?n:n||t!==ke?vi(t,n,e):t._time)+e._delay),e._end=en(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),bm(t,e,"_first","_last",t._sort?"_start":0),Wu(e)||(t._recent=e),r||wm(t,e),t._ts<0&&Ac(t,t._tTime),t},Am=function(t,e){return(mi.ScrollTrigger||uf("scrollTrigger",e))&&mi.ScrollTrigger.create(e,t)},Cm=function(t,e,n,r,s){if(_f(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ym!==ai.frame)return Ir.push(t),t._lazy=[s,r],1},c0=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Wu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},u0=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&c0(t)&&!(!t._initted&&Wu(t))||(t._ts<0||t._dp._ts<0)&&!Wu(t))?0:1,a=t._rDelay,l=0,c,u,d;if(a&&t._repeat&&(l=Wa(0,t._tDur,e),u=xo(l,a),t._yoyo&&u&1&&(o=1-o),u!==xo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||mn||r||t._zTime===Pe||!e&&t._zTime){if(!t._initted&&Cm(t,e,r,n,l))return;for(d=t._zTime,t._zTime=e||(n?Pe:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Gu(t,e,n,!0),t._onUpdate&&!n&&ui(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ui(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&kr(t,1),!n&&!mn&&(ui(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},h0=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},yo=function(t,e,n,r){var s=t._repeat,o=en(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:en(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Ac(t,t._tTime=t._tDur*a),t.parent&&wc(t),n||ds(t.parent,t),t},rd=function(t){return t instanceof Vn?ds(t):yo(t,t._dur)},f0={_start:0,endTime:La,totalDuration:La},vi=function i(t,e,n){var r=t.labels,s=t._recent||f0,o=t.duration()>=Ei?s.endTime(!1):t._dur,a,l,c;return hn(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},fa=function(t,e,n){var r=pr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new tn(e[0],o,e[s+1])},Gr=function(t,e){return t||t===0?e(t):e},Wa=function(t,e,n){return n<t?t:n>e?e:n},En=function(t,e){return!hn(t)||!(e=e0.exec(t))?"":e[1]},d0=function(t,e,n){return Gr(n,function(r){return Wa(t,e,r)})},Xu=[].slice,Rm=function(t,e){return t&&Yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yi(t[0]))&&!t.nodeType&&t!==Bi},p0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return hn(r)&&!e||Rm(r,1)?(s=n).push.apply(s,Ti(r)):n.push(r)})||n},Ti=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):hn(t)&&!n&&(Hu||!So())?Xu.call((e||cf).querySelectorAll(t),0):An(t)?p0(t,n):Rm(t)?Xu.call(t,0):t?[t]:[]},$u=function(t){return t=Ti(t)[0]||Pa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ti(e,n.querySelectorAll?n:n===t?Pa("Invalid scope")||cf.createElement("div"):t)}},Pm=function(t){return t.sort(function(){return .5-Math.random()})},Lm=function(t){if(Xe(t))return t;var e=Yi(t)?t:{each:t},n=ps(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,d=r;return hn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(h,f,_){var g=(_||e).length,p=o[g],m,E,S,v,R,b,M,A,y;if(!p){if(y=e.grid==="auto"?0:(e.grid||[1,Ei])[1],!y){for(M=-Ei;M<(M=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=o[g]=[],m=l?Math.min(y,g)*u-.5:r%y,E=y===Ei?0:l?g*d/y-.5:r/y|0,M=0,A=Ei,b=0;b<g;b++)S=b%y-m,v=E-(b/y|0),p[b]=R=c?Math.abs(c==="y"?v:S):fm(S*S+v*v),R>M&&(M=R),R<A&&(A=R);r==="random"&&Pm(p),p.max=M-A,p.min=A,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=En(e.amount||e.each)||0,n=n&&g<0?Hm(n):n}return g=(p[h]-p.min)/p.max||0,en(p.b+(n?n(g):g)*p.v)+p.u}},Yu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=en(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(pr(n)?0:En(n))}},Dm=function(t,e){var n=An(t),r,s;return!n&&Yi(t)&&(r=n=t.radius||Ei,t.values?(t=Ti(t.values),(s=!pr(t[0]))&&(r*=r)):t=Yu(t.increment)),Gr(e,n?Xe(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ei,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-a,f=t[d].y-l,h=h*h+f*f):h=Math.abs(t[d]-a),h<c&&(c=h,u=d);return u=!r||c<=r?t[u]:o,s||u===o||pr(o)?u:u+En(o)}:Yu(t))},Um=function(t,e,n,r){return Gr(An(t)?!e:n===!0?!!(n=0):!r,function(){return An(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},m0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},_0=function(t,e){return function(n){return t(parseFloat(n))+(e||En(n))}},g0=function(t,e,n){return Nm(t,e,0,1,n)},Im=function(t,e,n){return Gr(n,function(r){return t[~~e(r)]})},v0=function i(t,e,n){var r=e-t;return An(t)?Im(t,i(0,t.length),e):Gr(n,function(s){return(r+(s-t)%r)%r+t})},x0=function i(t,e,n){var r=e-t,s=r*2;return An(t)?Im(t,i(0,t.length-1),e):Gr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Da=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?_m:zu),n+=t.substr(e,r-e)+Um(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Nm=function(t,e,n,r,s){var o=e-t,a=r-n;return Gr(s,function(l){return n+((l-t)/o*a||0)})},y0=function i(t,e,n,r){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=hn(t),a={},l,c,u,d,h;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(i(t[c-1],t[c]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else r||(t=vo(An(t)?[]:{},t));if(!u){for(l in e)mf.call(a,t,l,"get",e[l]);s=function(_){return xf(_,a)||(o?t.p:t)}}}return Gr(n,s)},sd=function(t,e,n){var r=t.labels,s=Ei,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ui=function(t,e,n){var r=t.vars,s=r[e],o=Ue,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ir.length&&sc(),a&&(Ue=a),u=l?s.apply(c,l):s.call(c),Ue=o,u},jo=function(t){return kr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&ui(t,"onInterrupt"),t},io,Fm=[],Om=function(t){if(t)if(t=!t.name&&t.default||t,lf()||t.headless){var e=t.name,n=Xe(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:La,render:xf,add:mf,kill:F0,modifier:N0,rawVars:0},o={targetTest:0,get:0,getSetter:vf,aliases:{},register:0};if(So(),t!==r){if(ii[e])return;_i(r,_i(oc(t,s),o)),vo(r.prototype,vo(s,oc(t,o))),ii[r.prop=e]=r,t.targetTest&&(Hl.push(r),hf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}xm(e,r),t.register&&t.register(jn,r,Zn)}else Fm.push(t)},Re=255,Qo={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},Vc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},Bm=function(t,e,n){var r=t?pr(t)?[t>>16,t>>8&Re,t&Re]:0:Qo.black,s,o,a,l,c,u,d,h,f,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qo[t])r=Qo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Re,r&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(zu),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Vc(l+1/3,s,o),r[1]=Vc(l,s,o),r[2]=Vc(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(pm),n&&r.length<4&&(r[3]=1),r}else r=t.match(zu)||Qo.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/Re,o=r[1]/Re,a=r[2]/Re,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},km=function(t){var e=[],n=[],r=-1;return t.split(Nr).forEach(function(s){var o=s.match(no)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},od=function(t,e,n){var r="",s=(t+r).match(Nr),o=e?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=Bm(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=km(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Nr,"1").split(no),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Nr),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Nr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qo)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),S0=/hsl[a]?\(/,zm=function(t){var e=t.join(" "),n;if(Nr.lastIndex=0,Nr.test(e))return n=S0.test(e),t[1]=od(t[1],n),t[0]=od(t[0],n,km(t[1])),!0},Ua,ai=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,d,h,f,_=function g(p){var m=i()-r,E=p===!0,S,v,R,b;if((m>t||m<0)&&(n+=m-e),r+=m,R=r-n,S=R-o,(S>0||E)&&(b=++d.frame,h=R-d.time*1e3,d.time=R=R/1e3,o+=S+(S>=s?4:s-S),v=1),E||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](R,h,b,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){gm&&(!Hu&&lf()&&(Bi=Hu=window,cf=Bi.document||{},mi.gsap=jn,(Bi.gsapVersions||(Bi.gsapVersions=[])).push(jn.version),vm(rc||Bi.GreenSockGlobals||!Bi.gsap&&Bi||{}),Fm.forEach(Om)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Ua=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ua=0,c=La},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,E){var S=m?function(v,R,b,M){p(v,R,b,M),d.remove(S)}:p;return d.remove(p),a[E?"unshift":"push"](S),So(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d})(),So=function(){return!Ua&&ai.wake()},_e={},M0=/^[\d.\-M][\d.\-,\s]/,E0=/["']/g,T0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(E0,"").trim():+c,r=l.substr(a+1).trim();return e},b0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},w0=function(t){var e=(t+"").split("("),n=_e[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[T0(e[1])]:b0(t).split(",").map(Em)):_e._CE&&M0.test(t)?_e._CE("",t):n},Hm=function(t){return function(e){return 1-t(1-e)}},Vm=function i(t,e){for(var n=t._first,r;n;)n instanceof Vn?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},ps=function(t,e){return t&&(Xe(t)?t:_e[t]||w0(t))||e},Cs=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return qn(t,function(a){_e[a]=mi[a]=s,_e[o=a.toLowerCase()]=n;for(var l in s)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=s[l]}),s},Gm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Gc=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/ku*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*t0((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Gm(a);return s=ku/s,l.config=function(c,u){return i(t,c,u)},l},Wc=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Gm(n);return r.config=function(s){return i(t,s)},r};qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Cs(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;Cs("Elastic",Gc("in"),Gc("out"),Gc());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Cs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Cs("Circ",function(i){return-(fm(1-i*i)-1)});Cs("Sine",function(i){return i===1?1:-Qg(i*Jg)+1});Cs("Back",Wc("in"),Wc("out"),Wc());_e.SteppedEase=_e.steps=mi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Pe;return function(a){return((r*Wa(0,o,a)|0)+s)*n}}};go.ease=_e["quad.out"];qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ff+=i+","+i+"Params,"});var Wm=function(t,e){this.id=jg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Sm,this.set=e?e.getSetter:vf},Ia=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,yo(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),Ua||ai.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,yo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(So(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ac(this,n),!s._dp||s.parent||wm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Mm(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+id(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+id(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?xo(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Pe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ac(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pe?0:this._rts,this.totalTime(Wa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),wc(this),a0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(So(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pe&&(this._tTime-=Pe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Hi(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ac(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=i0);var r=mn;return mn=n,pf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,rd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,rd(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(vi(this,n),Yn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Yn(r)),this._dur||(this._zTime=-Pe),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pe,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Pe)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=Xe(n)?n:Tm,a=function(){var c=r.then;r.then=null,Xe(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){jo(this)},i})();_i(Ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pe,_prom:0,_ps:!1,_rts:1});var Vn=(function(i){hm(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),ke&&Hi(n.parent||ke,sr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Am(sr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return fa(0,arguments,this),this},e.from=function(r,s,o){return fa(1,arguments,this),this},e.fromTo=function(r,s,o,a){return fa(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,ha(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(r,s,vi(this,o),1),this},e.call=function(r,s,o){return Hi(this,tn.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new tn(r,o,vi(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,ha(o).immediateRender=Yn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,ha(a).immediateRender=Yn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:en(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,_,g,p,m,E,S,v,R,b,M;if(this!==ke&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,S=this._ts,m=!S,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=en(u%p),u===l?(g=this._repeat,h=c):(R=en(u/p),g=~~R,g&&g===R&&(h=c,g--),h>c&&(h=c)),R=xo(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),b&&g&1&&(h=c-h,M=1),g!==R&&!this._lock){var A=b&&R&1,y=A===(b&&g&1);if(g<R&&(A=!A),a=A?0:u%c?c:u,this._lock=1,this.render(a||(M?0:en(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Vm(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=h0(this,en(a),en(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!R&&(ui(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!m){E=0,_&&(u+=this._zTime=-Pe);break}}f=_}else{f=this._last;for(var x=r<0?r:h;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||mn&&pf(f)),h!==this._time||!this._ts&&!m){E=0,_&&(u+=this._zTime=x?-Pe:Pe);break}}f=_}}if(E&&!s&&(this.pause(),E.render(h>=a?0:-Pe)._zTime=h>=a?1:-1,this._ts))return this._start=v,wc(this),this.render(r,s,o);this._onUpdate&&!s&&ui(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&kr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(ui(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(pr(s)||(s=vi(this,s,r)),!(r instanceof Ia)){if(An(r))return r.forEach(function(a){return o.add(a,s)}),this;if(hn(r))return this.addLabel(r,s);if(Xe(r))r=tn.delayedCall(0,r);else return this}return this!==r?Hi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return hn(r)?this.removeLabel(r):Xe(r)?this.killTweensOf(r):(r.parent===this&&bc(this,r),r===this._recent&&(this._recent=this._last),ds(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(ai.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=vi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=tn.delayedCall(0,s||La,o);return a.data="isPause",this._hasPause=1,Hi(this,a,vi(this,r))},e.removePause=function(r){var s=this._first;for(r=vi(this,r);s;)s._start===r&&s.data==="isPause"&&kr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Rr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Ti(r),l=this._first,c=pr(s),u;l;)l instanceof tn?r0(l._targets,a)&&(c?(!Rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=vi(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,_=tn.to(o,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pe,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&yo(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,_i({startAt:{time:vi(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),sd(this,vi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),sd(this,vi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pe)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ds(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ds(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ei,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Hi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;yo(o,o===ke&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ke._ts&&(Mm(ke,ac(r,ke)),ym=ai.frame),ai.frame>=ed){ed+=hi.autoSleep||120;var s=ke._first;if((!s||!s._ts)&&hi.autoSleep&&ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ai.sleep()}}},t})(Ia);_i(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var A0=function(t,e,n,r,s,o,a){var l=new Zn(this._pt,t,e,0,1,Km,null,s),c=0,u=0,d,h,f,_,g,p,m,E;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Da(r)),o&&(E=[n,r],o(E,t,e),n=E[0],r=E[1]),h=n.match(zc)||[];d=zc.exec(r);)_=d[0],g=r.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?lo(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=zc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(mm.test(r)||m)&&(l.e=0),this._pt=l,l},mf=function(t,e,n,r,s,o,a,l,c,u){Xe(r)&&(r=r(s||0,t,o));var d=t[e],h=n!=="get"?n:Xe(d)?c?t[e.indexOf("set")||!Xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Xe(d)?c?D0:qm:gf,_;if(hn(r)&&(~r.indexOf("random(")&&(r=Da(r)),r.charAt(1)==="="&&(_=lo(h,r)+(En(h)||0),(_||_===0)&&(r=_))),!u||h!==r||qu)return!isNaN(h*r)&&r!==""?(_=new Zn(this._pt,t,e,+h||0,r-(h||0),typeof d=="boolean"?I0:Zm,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!d&&!(e in t)&&uf(e,r),A0.call(this,t,e,h,r,f,l||hi.stringFilter,c))},C0=function(t,e,n,r,s){if(Xe(t)&&(t=da(t,s,e,n,r)),!Yi(t)||t.style&&t.nodeType||An(t)||dm(t))return hn(t)?da(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=da(t[a],s,e,n,r);return o},Xm=function(t,e,n,r,s,o){var a,l,c,u;if(ii[t]&&(a=new ii[t]).init(s,a.rawVars?e[t]:C0(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Zn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==io))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Rr,qu,_f=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,E=m&&m.data==="nested"?m.vars.targets:p,S=t._overwrite==="auto"&&!of,v=t.timeline,R,b,M,A,y,x,L,D,B,U,F,k,X;if(v&&(!h||!s)&&(s="none"),t._ease=ps(s,go.ease),t._yEase=d?Hm(ps(d===!0?s:d,go.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(D=p[0]?fs(p[0]).harness:0,k=D&&r[D.prop],R=oc(r,hf),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?zl:n0),g._lazy=0),o){if(kr(t._startAt=tn.set(p,_i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return ui(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!a&&!f)&&t._startAt.revert(zl),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),M=_i({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Yn(l),immediateRender:a,stagger:0,parent:m},R),k&&(M[D.prop]=k),kr(t._startAt=tn.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(zl):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Pe,Pe);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Yn(l)||l&&!_,b=0;b<p.length;b++){if(y=p[b],L=y._gsap||df(p)[b]._gsap,t._ptLookup[b]=U={},Vu[L.id]&&Ir.length&&sc(),F=E===p?b:E.indexOf(y),D&&(B=new D).init(y,k||R,t,F,E)!==!1&&(t._pt=A=new Zn(t._pt,y,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(z){U[z]=A}),B.priority&&(x=1)),!D||k)for(M in R)ii[M]&&(B=Xm(M,R,t,F,y,E))?B.priority&&(x=1):U[M]=A=mf.call(t,y,M,"get",R[M],F,E,0,r.stringFilter);t._op&&t._op[b]&&t.kill(y,t._op[b]),S&&t._pt&&(Rr=t,ke.killTweensOf(y,U,t.globalTime(e)),X=!t.parent,Rr=0),t._pt&&l&&(Vu[L.id]=1)}x&&Jm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,h&&e<=0&&v.render(Ei,!0,!0)},R0=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return qu=1,t.vars[e]="+=0",_f(t,a),qu=0,l?Pa(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=$e(n)+En(d.e)),d.b&&(d.b=u.s+En(d.b))},P0=function(t,e){var n=t[0]?fs(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=vo({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},L0=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(An(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},da=function(t,e,n,r,s){return Xe(t)?t.call(e,n,r,s):hn(t)&&~t.indexOf("random(")?Da(t):t},$m=ff+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ym={};qn($m+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Ym[i]=1});var tn=(function(i){hm(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ha(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,E=r.parent||ke,S=(An(n)||dm(n)?pr(n[0]):"length"in r)?[n]:Ti(n),v,R,b,M,A,y,x,L;if(a._targets=S.length?df(S):Pa("GSAP target "+n+" not found. https://gsap.com",!hi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||h||qa(c)||qa(u)){if(r=a.vars,v=a.timeline=new Vn({data:"nested",defaults:g||{},targets:E&&E.data==="nested"?E.vars.targets:S}),v.kill(),v.parent=v._dp=sr(a),v._start=0,h||qa(c)||qa(u)){if(M=S.length,x=h&&Lm(h),Yi(h))for(A in h)~$m.indexOf(A)&&(L||(L={}),L[A]=h[A]);for(R=0;R<M;R++)b=oc(r,Ym),b.stagger=0,m&&(b.yoyoEase=m),L&&vo(b,L),y=S[R],b.duration=+da(c,sr(a),R,y,S),b.delay=(+da(u,sr(a),R,y,S)||0)-a._delay,!h&&M===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),v.to(y,b,x?x(R,y,S):0),v._ease=_e.none;v.duration()?c=u=0:a.timeline=0}else if(_){ha(_i(v.vars.defaults,{ease:"none"})),v._ease=ps(_.ease||r.ease||"none");var D=0,B,U,F;if(An(_))_.forEach(function(k){return v.to(S,k,">")}),v.duration();else{b={};for(A in _)A==="ease"||A==="easeEach"||L0(A,_[A],b,_.easeEach);for(A in b)for(B=b[A].sort(function(k,X){return k.t-X.t}),D=0,R=0;R<B.length;R++)U=B[R],F={ease:U.e,duration:(U.t-(R?B[R-1].t:0))/100*c},F[A]=U.v,v.to(S,F,D),D+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!of&&(Rr=sr(a),ke.killTweensOf(S),Rr=0),Hi(E,sr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!_&&a._start===en(E._time)&&Yn(d)&&l0(sr(a))&&E.data!=="nested")&&(a._tTime=-Pe,a.render(Math.max(0,-u)||0)),p&&Am(sr(a),p),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Pe&&!u?l:r<Pe?0:r,h,f,_,g,p,m,E,S,v;if(!c)u0(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(h=en(d%g),d===l?(_=this._repeat,h=c):(p=en(d/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,h=c-h),p=xo(this._tTime,g),h===a&&!o&&this._initted&&_===p)return this._tTime=d,this;_!==p&&(S&&this._yEase&&Vm(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(en(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Cm(this,u?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(v||this._ease)(h/c),this._from&&(this.ratio=E=1-E),!a&&d&&!s&&!p&&(ui(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;S&&S.render(r<0?r:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Gu(this,r,s,o),ui(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ui(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Gu(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&kr(this,1),!s&&!(u&&!a)&&(d||a||m)&&(ui(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Ua||ai.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||_f(this,c),u=this._ease(c/this._dur),R0(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ac(this,0),this.parent||bm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?jo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Rr&&Rr.vars.overwrite!==!0)._first||jo(this),this.parent&&o!==this.timeline.totalDuration()&&yo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ti(r):a,c=this._ptLookup,u=this._pt,d,h,f,_,g,p,m;if((!s||s==="all")&&o0(a,l))return s==="all"&&(this._pt=0),jo(this);for(d=this._op=this._op||[],s!=="all"&&(hn(s)&&(g={},qn(s,function(E){return g[E]=1}),s=g),s=P0(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(d[m]=s,_=h,f={}):(f=d[m]=d[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&bc(this,p,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&jo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return fa(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return fa(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ke.killTweensOf(r,s,o)},t})(Ia);_i(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qn("staggerTo,staggerFrom,staggerFromTo",function(i){tn[i]=function(){var t=new Vn,e=Xu.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var gf=function(t,e,n){return t[e]=n},qm=function(t,e,n){return t[e](n)},D0=function(t,e,n,r){return t[e](r.fp,n)},U0=function(t,e,n){return t.setAttribute(e,n)},vf=function(t,e){return Xe(t[e])?qm:af(t[e])&&t.setAttribute?U0:gf},Zm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},I0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Km=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},xf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},N0=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},F0=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?bc(this,e,"_pt"):e.dep||(n=1),e=r;return!n},O0=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Jm=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Zn=(function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Zm,this.d=l||this,this.set=c||gf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=O0,this.m=n,this.mt=s,this.tween=r},i})();qn(ff+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return hf[i]=1});mi.TweenMax=mi.TweenLite=tn;mi.TimelineLite=mi.TimelineMax=Vn;ke=new Vn({sortChildren:!1,defaults:go,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hi.stringFilter=zm;var ms=[],Vl={},B0=[],ad=0,k0=0,Xc=function(t){return(Vl[t]||B0).map(function(e){return e()})},Zu=function(){var t=Date.now(),e=[];t-ad>2&&(Xc("matchMediaInit"),ms.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Bi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Xc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ad=t,Xc("matchMedia"))},jm=(function(){function i(e,n){this.selector=n&&$u(n),this.data=[],this._r=[],this.isReverted=!1,this.id=k0++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){Xe(n)&&(s=r,r=n,n=Xe);var o=this,a=function(){var c=Ue,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=$u(s)),Ue=o,d=r.apply(o,arguments),Xe(d)&&o._r.push(d),Ue=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===Xe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=Ue;Ue=null,n(this),Ue=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof tn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ms.length;o--;)ms[o].id===this.id&&ms.splice(o,1)},t.revert=function(n){this.kill(n||{})},i})(),z0=(function(){function i(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Yi(n)||(n={matches:n});var o=new jm(0,s||this.scope),a=o.conditions={},l,c,u;Ue&&!o.selector&&(o.selector=Ue.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Bi.matchMedia(n[c]),l&&(ms.indexOf(o)<0&&ms.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zu):l.addEventListener("change",Zu)));return u&&r(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),lc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Om(r)})},timeline:function(t){return new Vn(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,n,r){hn(t)&&(t=Ti(t)[0]);var s=fs(t||{}).get,o=n?Tm:Em;return n==="native"&&(n=""),t&&(e?o((ii[e]&&ii[e].get||s)(t,e,n,r)):function(a,l,c){return o((ii[a]&&ii[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ti(t),t.length>1){var r=t.map(function(u){return jn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}t=t[0]||{};var o=ii[e],a=fs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var d=new o;io._pt=0,d.init(t,n?u+n:u,io,0,[t]),d.render(1,d),io._pt&&xf(1,io)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=jn.to(t,_i((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ps(t.ease,go.ease)),nd(go,t||{})},config:function(t){return nd(hi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ii[a]&&!mi[a]&&Pa(e+" effect requires "+a+" plugin.")}),Hc[e]=function(a,l,c){return n(Ti(a),_i(l||{},s),c)},o&&(Vn.prototype[e]=function(a,l,c){return this.add(Hc[e](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){_e[t]=ps(e)},parseEase:function(t,e){return arguments.length?ps(t,e):_e},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Vn(t),r,s;for(n.smoothChildTiming=Yn(t.smoothChildTiming),ke.remove(n),n._dp=0,n._time=n._tTime=ke._time,r=ke._first;r;)s=r._next,(e||!(!r._dur&&r instanceof tn&&r.vars.onComplete===r._targets[0]))&&Hi(n,r,r._start-r._delay),r=s;return Hi(ke,n,0),n},context:function(t,e){return t?new jm(t,e):Ue},matchMedia:function(t){return new z0(t)},matchMediaRefresh:function(){return ms.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Zu()},addEventListener:function(t,e){var n=Vl[t]||(Vl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Vl[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:v0,wrapYoyo:x0,distribute:Lm,random:Um,snap:Dm,normalize:g0,getUnit:En,clamp:d0,splitColor:Bm,toArray:Ti,selector:$u,mapRange:Nm,pipe:m0,unitize:_0,interpolate:y0,shuffle:Pm},install:vm,effects:Hc,ticker:ai,updateRoot:Vn.updateRoot,plugins:ii,globalTimeline:ke,core:{PropTween:Zn,globals:xm,Tween:tn,Timeline:Vn,Animation:Ia,getCache:fs,_removeLinkedListItem:bc,reverting:function(){return mn},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return of=t}}};qn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return lc[i]=tn[i]});ai.add(Vn.updateRoot);io=lc.to({},{duration:0});var H0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},V0=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=H0(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},$c=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(hn(s)&&(l={},qn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}V0(a,s)}}}},jn=lc.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},$c("roundProps",Yu),$c("modifiers"),$c("snap",Dm))||lc;tn.version=Vn.version=jn.version="3.13.0";gm=1;lf()&&So();_e.Power0;_e.Power1;_e.Power2;_e.Power3;_e.Power4;_e.Linear;_e.Quad;_e.Cubic;_e.Quart;_e.Quint;_e.Strong;_e.Elastic;_e.Back;_e.SteppedEase;_e.Bounce;_e.Sine;_e.Expo;_e.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ld,Pr,co,yf,as,cd,Sf,G0=function(){return typeof window<"u"},mr={},Qr=180/Math.PI,uo=Math.PI/180,Us=Math.atan2,ud=1e8,Mf=/([A-Z])/g,W0=/(left|right|width|margin|padding|x)/i,X0=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ku=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Y0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},q0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Qm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},t_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Z0=function(t,e,n){return t.style[e]=n},K0=function(t,e,n){return t.style.setProperty(e,n)},J0=function(t,e,n){return t._gsap[e]=n},j0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Q0=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},tv=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ze="transform",Kn=ze+"Origin",ev=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in mr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Gi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=or(r,a)}):this.tfm[t]=o.x?o[t]:or(r,t),t===Kn&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Kn,e,"")),t=ze}(s||e)&&this.props.push(t,e,s[t])},e_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},nv=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Mf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Sf(),(!s||!s.isStart)&&!n[ze]&&(e_(n),r.zOrigin&&n[Kn]&&(n[Kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},n_=function(t,e){var n={target:t,props:[],revert:nv,save:ev};return t._gsap||jn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},i_,Ju=function(t,e){var n=Pr.createElementNS?Pr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Pr.createElement(t);return n&&n.style?n:Pr.createElement(t)},bi=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Mf,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Mo(e)||e,1)||""},hd="O,Moz,ms,Ms,Webkit".split(","),Mo=function(t,e,n){var r=e||as,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(hd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?hd[o]:"")+t},ju=function(){G0()&&window.document&&(ld=window,Pr=ld.document,co=Pr.documentElement,as=Ju("div")||{style:{}},Ju("div"),ze=Mo(ze),Kn=ze+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",i_=!!Mo("perspective"),Sf=jn.core.reverting,yf=1)},fd=function(t){var e=t.ownerSVGElement,n=Ju("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),co.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),co.removeChild(n),s},dd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},r_=function(t){var e,n;try{e=t.getBBox()}catch{e=fd(t),n=1}return e&&(e.width||e.height)||n||(e=fd(t)),e&&!e.width&&!e.x&&!e.y?{x:+dd(t,["x","cx","x1"])||0,y:+dd(t,["y","cy","y1"])||0,width:0,height:0}:e},s_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&r_(t))},ys=function(t,e){if(e){var n=t.style,r;e in mr&&e!==Kn&&(e=ze),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Mf,"-$1").toLowerCase())):n.removeAttribute(e)}},Lr=function(t,e,n,r,s,o){var a=new Zn(t._pt,e,n,0,1,o?t_:Qm);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},pd={deg:1,rad:1,turn:1},iv={grid:1,flex:1},zr=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=W0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",_,g,p,m;if(r===o||!s||pd[r]||pd[o])return s;if(o!=="px"&&!h&&(s=i(t,e,n,"px")),m=t.getCTM&&s_(t),(f||o==="%")&&(mr[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],$e(f?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(h?o:r),g=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Pr||!g.appendChild)&&(g=Pr.body),p=g._gsap,p&&f&&p.width&&l&&p.time===ai.time&&!p.uncache)return $e(s/p.width*d);if(f&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=d+r,_=t[u],E?t.style[e]=E:ys(t,e)}else(f||o==="%")&&!iv[bi(g,"display")]&&(a.position=bi(t,"position")),g===t&&(a.position="static"),g.appendChild(as),_=as[u],g.removeChild(as),a.position="absolute";return l&&f&&(p=fs(g),p.time=ai.time,p.width=g[u]),$e(h?_*s/d:_&&s?d/_*s:0)},or=function(t,e,n,r){var s;return yf||ju(),e in Gi&&e!=="transform"&&(e=Gi[e],~e.indexOf(",")&&(e=e.split(",")[0])),mr[e]&&e!=="transform"?(s=Fa(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:uc(bi(t,Kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=cc[e]&&cc[e](t,e,n)||bi(t,e)||Sm(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?zr(t,e,s,n)+n:s},rv=function(t,e,n,r){if(!n||n==="none"){var s=Mo(e,t,1),o=s&&bi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=bi(t,"borderTopColor"))}var a=new Zn(this._pt,t.style,e,0,1,Km),l=0,c=0,u,d,h,f,_,g,p,m,E,S,v,R;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=bi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=t.style[e],t.style[e]=r,r=bi(t,e)||r,g?t.style[e]=g:ys(t,e)),u=[n,r],zm(u),n=u[0],r=u[1],h=n.match(no)||[],R=r.match(no)||[],R.length){for(;d=no.exec(r);)p=d[0],E=r.substring(l,d.index),_?_=(_+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),p.charAt(1)==="="&&(p=lo(f,p)+v),m=parseFloat(p),S=p.substr((m+"").length),l=no.lastIndex-S.length,S||(S=S||hi.units[e]||v,l===r.length&&(r+=S,a.e+=S)),v!==S&&(f=zr(t,e,g,S)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?t_:Qm;return mm.test(r)&&(a.e=0),this._pt=a,a},md={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sv=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=md[n]||n,e[1]=md[r]||r,e.join(" ")},ov=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mr[a]&&(l=1,a=a==="transformOrigin"?Kn:ze),ys(n,a);l&&(ys(n,ze),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Fa(n,1),o.uncache=1,e_(r)))}},cc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Zn(t._pt,e,n,0,0,ov);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Na=[1,0,0,1,0,0],o_={},a_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_d=function(t){var e=bi(t,ze);return a_(e)?Na:e.substr(7).match(pm).map($e)},Ef=function(t,e){var n=t._gsap||fs(t),r=t.style,s=_d(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Na:s):(s===Na&&!t.offsetParent&&t!==co&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,co.appendChild(t)),s=_d(t),l?r.display=l:ys(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):co.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qu=function(t,e,n,r,s,o){var a=t._gsap,l=s||Ef(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],E=l[5],S=e.split(" "),v=parseFloat(S[0])||0,R=parseFloat(S[1])||0,b,M,A,y;n?l!==Na&&(M=f*p-_*g)&&(A=v*(p/M)+R*(-g/M)+(g*E-p*m)/M,y=v*(-_/M)+R*(f/M)-(f*E-_*m)/M,v=A,R=y):(b=r_(t),v=b.x+(~S[0].indexOf("%")?v/100*b.width:v),R=b.y+(~(S[1]||S[0]).indexOf("%")?R/100*b.height:R)),r||r!==!1&&a.smooth?(m=v-c,E=R-u,a.xOffset=d+(m*f+E*g)-m,a.yOffset=h+(m*_+E*p)-E):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[Kn]="0px 0px",o&&(Lr(o,a,"xOrigin",c,v),Lr(o,a,"yOrigin",u,R),Lr(o,a,"xOffset",d,a.xOffset),Lr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},Fa=function(t,e){var n=t._gsap||new Wm(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=bi(t,Kn)||"0",u,d,h,f,_,g,p,m,E,S,v,R,b,M,A,y,x,L,D,B,U,F,k,X,z,it,P,$,st,Rt,V,Q;return u=d=h=g=p=m=E=S=v=0,f=_=1,n.svg=!!(t.getCTM&&s_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),r.scale=r.rotate=r.translate="none"),M=Ef(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Qu(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,M)),R=n.xOrigin||0,b=n.yOrigin||0,M!==Na&&(L=M[0],D=M[1],B=M[2],U=M[3],u=F=M[4],d=k=M[5],M.length===6?(f=Math.sqrt(L*L+D*D),_=Math.sqrt(U*U+B*B),g=L||D?Us(D,L)*Qr:0,E=B||U?Us(B,U)*Qr+g:0,E&&(_*=Math.abs(Math.cos(E*uo))),n.svg&&(u-=R-(R*L+b*B),d-=b-(R*D+b*U))):(Q=M[6],Rt=M[7],P=M[8],$=M[9],st=M[10],V=M[11],u=M[12],d=M[13],h=M[14],A=Us(Q,st),p=A*Qr,A&&(y=Math.cos(-A),x=Math.sin(-A),X=F*y+P*x,z=k*y+$*x,it=Q*y+st*x,P=F*-x+P*y,$=k*-x+$*y,st=Q*-x+st*y,V=Rt*-x+V*y,F=X,k=z,Q=it),A=Us(-B,st),m=A*Qr,A&&(y=Math.cos(-A),x=Math.sin(-A),X=L*y-P*x,z=D*y-$*x,it=B*y-st*x,V=U*x+V*y,L=X,D=z,B=it),A=Us(D,L),g=A*Qr,A&&(y=Math.cos(A),x=Math.sin(A),X=L*y+D*x,z=F*y+k*x,D=D*y-L*x,k=k*y-F*x,L=X,F=z),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=$e(Math.sqrt(L*L+D*D+B*B)),_=$e(Math.sqrt(k*k+Q*Q)),A=Us(F,k),E=Math.abs(A)>2e-4?A*Qr:0,v=V?1/(V<0?-V:V):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!a_(bi(t,ze)),X&&t.setAttribute("transform",X))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(f*=-1,E+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=$e(f),n.scaleY=$e(_),n.rotation=$e(g)+a,n.rotationX=$e(p)+a,n.rotationY=$e(m)+a,n.skewX=E+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Kn]=uc(c)),n.xOffset=n.yOffset=0,n.force3D=hi.force3D,n.renderTransform=n.svg?lv:i_?l_:av,n.uncache=0,n},uc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yc=function(t,e,n){var r=En(e);return $e(parseFloat(e)+parseFloat(zr(t,"x",n+"px",r)))+r},av=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,l_(t,e)},Xr="0deg",Bo="0px",$r=") ",l_=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,E=n.target,S=n.zOrigin,v="",R=m==="auto"&&t&&t!==1||m===!0;if(S&&(d!==Xr||u!==Xr)){var b=parseFloat(u)*uo,M=Math.sin(b),A=Math.cos(b),y;b=parseFloat(d)*uo,y=Math.cos(b),o=Yc(E,o,M*y*-S),a=Yc(E,a,-Math.sin(b)*-S),l=Yc(E,l,A*y*-S+S)}p!==Bo&&(v+="perspective("+p+$r),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(R||o!==Bo||a!==Bo||l!==Bo)&&(v+=l!==Bo||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$r),c!==Xr&&(v+="rotate("+c+$r),u!==Xr&&(v+="rotateY("+u+$r),d!==Xr&&(v+="rotateX("+d+$r),(h!==Xr||f!==Xr)&&(v+="skew("+h+", "+f+$r),(_!==1||g!==1)&&(v+="scale("+_+", "+g+$r),E.style[ze]=v||"translate(0, 0)"},lv=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,E=n.forceCSS,S=parseFloat(o),v=parseFloat(a),R,b,M,A,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=uo,c*=uo,R=Math.cos(l)*d,b=Math.sin(l)*d,M=Math.sin(l-c)*-h,A=Math.cos(l-c)*h,c&&(u*=uo,y=Math.tan(c-u),y=Math.sqrt(1+y*y),M*=y,A*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),R*=y,b*=y)),R=$e(R),b=$e(b),M=$e(M),A=$e(A)):(R=d,A=h,b=M=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=zr(f,"x",o,"px"),v=zr(f,"y",a,"px")),(_||g||p||m)&&(S=$e(S+_-(_*R+g*M)+p),v=$e(v+g-(_*b+g*A)+m)),(r||s)&&(y=f.getBBox(),S=$e(S+r/100*y.width),v=$e(v+s/100*y.height)),y="matrix("+R+","+b+","+M+","+A+","+S+","+v+")",f.setAttribute("transform",y),E&&(f.style[ze]=y)},cv=function(t,e,n,r,s){var o=360,a=hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qr:1),c=l-r,u=r+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*ud)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*ud)%o-~~(c/o)*o)),t._pt=h=new Zn(t._pt,e,n,r,c,$0),h.e=u,h.u="deg",t._props.push(n),h},gd=function(t,e){for(var n in e)t[n]=e[n];return t},uv=function(t,e,n){var r=gd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,h,f,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=Fa(n,1),ys(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=Fa(n,1),o[ze]=c);for(l in mr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=En(c),_=En(u),d=f!==_?zr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new Zn(t._pt,a,l,d,h-d,Ku),t._pt.u=_||0,t._props.push(l));gd(a,r)};qn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});cc[t>1?"border"+i:i]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(_){return or(a,_,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,f,d)}});var c_={name:"css",register:ju,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,d,h,f,_,g,p,m,E,S,v,R,b,M,A;yf||ju(),this.styles=this.styles||n_(t),A=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(ii[g]&&Xm(g,e,n,r,t,s)))){if(f=typeof u,_=cc[g],f==="function"&&(u=u.call(n,r,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Da(u)),_)_(this,t,g,u,n)&&(M=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Nr.lastIndex=0,Nr.test(c)||(p=En(c),m=En(u)),m?p!==m&&(c=zr(t,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),A.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,t,s):l[g],hn(c)&&~c.indexOf("random(")&&(c=Da(c)),En(c+"")||c==="auto"||(c+=hi.units[g]||En(or(t,g))||""),(c+"").charAt(1)==="="&&(c=or(t,g))):c=or(t,g),h=parseFloat(c),E=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),d=parseFloat(u),g in Gi&&(g==="autoAlpha"&&(h===1&&or(t,"visibility")==="hidden"&&d&&(h=0),A.push("visibility",0,a.visibility),Lr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in mr,S){if(this.styles.save(g),f==="string"&&u.substring(0,6)==="var(--"&&(u=bi(t,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),v||(R=t._gsap,R.renderTransform&&!e.parseTransform||Fa(t,e.parseTransform),b=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new Zn(this._pt,a,ze,0,1,R.renderTransform,R,0,-1),v.dep=1),g==="scale")this._pt=new Zn(this._pt,R,"scaleY",R.scaleY,(E?lo(R.scaleY,E+d):d)-R.scaleY||0,Ku),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(Kn,0,a[Kn]),u=sv(u),R.svg?Qu(t,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Lr(this,R,"zOrigin",R.zOrigin,m),Lr(this,a,g,uc(c),uc(u)));continue}else if(g==="svgOrigin"){Qu(t,u,1,b,0,this);continue}else if(g in o_){cv(this,R,g,h,E?lo(h,E+u):u);continue}else if(g==="smoothOrigin"){Lr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){uv(this,u,t);continue}}else g in a||(g=Mo(g)||g);if(S||(d||d===0)&&(h||h===0)&&!X0.test(u)&&g in a)p=(c+"").substr((h+"").length),d||(d=0),m=En(u)||(g in hi.units?hi.units[g]:p),p!==m&&(h=zr(t,g,c,m)),this._pt=new Zn(this._pt,S?R:a,g,h,(E?lo(h,E+d):d)-h,!S&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?q0:Ku),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Y0);else if(g in a)rv.call(this,t,g,c,E?E+u:u);else if(g in t)this.add(t,g,c||t[g],E?E+u:u,r,s);else if(g!=="parseTransform"){uf(g,u);continue}S||(g in a?A.push(g,0,a[g]):typeof t[g]=="function"?A.push(g,2,t[g]()):A.push(g,1,c||t[g])),o.push(g)}}M&&Jm(this)},render:function(t,e){if(e.tween._time||!Sf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:or,aliases:Gi,getSetter:function(t,e,n){var r=Gi[e];return r&&r.indexOf(",")<0&&(e=r),e in mr&&e!==Kn&&(t._gsap.x||or(t,"x"))?n&&cd===n?e==="scale"?j0:J0:(cd=n||{})&&(e==="scale"?Q0:tv):t.style&&!af(t.style[e])?Z0:~e.indexOf("-")?K0:vf(t,e)},core:{_removeProperty:ys,_getMatrix:Ef}};jn.utils.checkPrefix=Mo;jn.core.getStyleSaver=n_;(function(i,t,e,n){var r=qn(i+","+t+","+e,function(s){mr[s]=1});qn(t,function(s){hi.units[s]="deg",o_[s]=1}),Gi[r[13]]=i+","+t,qn(n,function(s){var o=s.split(":");Gi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){hi.units[i]="px"});jn.registerPlugin(c_);var _n=jn.registerPlugin(c_)||jn;_n.core.Tween;function hv(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function fv(i,t,e){return t&&hv(i.prototype,t),i}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,Gl,li,Dr,Ur,ho,u_,ts,pa,h_,lr,Di,f_,d_=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},p_=1,ro=[],fe=[],$i=[],ma=Date.now,th=function(t,e){return e},dv=function(){var t=pa.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,fe),r.push.apply(r,$i),fe=n,$i=r,th=function(o,a){return e[o](a)}},Fr=function(t,e){return~$i.indexOf(t)&&$i[$i.indexOf(t)+1][e]},_a=function(t){return!!~h_.indexOf(t)},In=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},Dn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Za="scrollLeft",Ka="scrollTop",eh=function(){return lr&&lr.isPressed||fe.cache++},hc=function(t,e){var n=function r(s){if(s||s===0){p_&&(li.history.scrollRestoration="manual");var o=lr&&lr.isPressed;s=r.v=Math.round(s)||(lr&&lr.iOS?1:0),t(s),r.cacheID=fe.cache,o&&th("ss",s)}else(e||fe.cache!==r.cacheID||th("ref"))&&(r.cacheID=fe.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},Gn={s:Za,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:hc(function(i){return arguments.length?li.scrollTo(i,sn.sc()):li.pageXOffset||Dr[Za]||Ur[Za]||ho[Za]||0})},sn={s:Ka,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:hc(function(i){return arguments.length?li.scrollTo(Gn.sc(),i):li.pageYOffset||Dr[Ka]||Ur[Ka]||ho[Ka]||0})},$n=function(t,e){return(e&&e._ctx&&e._ctx.selector||pn.utils.toArray)(t)[0]||(typeof t=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},pv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Hr=function(t,e){var n=e.s,r=e.sc;_a(t)&&(t=Dr.scrollingElement||Ur);var s=fe.indexOf(t),o=r===sn.sc?1:2;!~s&&(s=fe.push(t)-1),fe[s+o]||In(t,"scroll",eh);var a=fe[s+o],l=a||(fe[s+o]=hc(Fr(t,n),!0)||(_a(t)?r:hc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=pn.getProperty(t,"scrollBehavior")==="smooth"),l},nh=function(t,e,n){var r=t,s=t,o=ma(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=ma();g||p-o>l?(s=r,r=_,a=o,o=p):n?r+=_:r=s+(_-s)/(p-a)*(o-a)},d=function(){s=r=n?0:r,a=o=0},h=function(_){var g=a,p=s,m=ma();return(_||_===0)&&_!==r&&u(_),o===a||m-a>c?0:(r+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:d,getVelocity:h}},ko=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},vd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},m_=function(){pa=pn.core.globals().ScrollTrigger,pa&&pa.core&&dv()},__=function(t){return pn=t||d_(),!Gl&&pn&&typeof document<"u"&&document.body&&(li=window,Dr=document,Ur=Dr.documentElement,ho=Dr.body,h_=[li,Dr,Ur,ho],pn.utils.clamp,f_=pn.core.context||function(){},ts="onpointerenter"in ho?"pointer":"mouse",u_=qe.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=qe.eventTypes=("ontouchstart"in Ur?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ur?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return p_=0},500),m_(),Gl=1),Gl};Gn.op=sn;fe.cache=0;var qe=(function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){Gl||__(pn)||console.warn("Please gsap.registerPlugin(Observer)"),pa||m_();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,E=n.onDrag,S=n.onPress,v=n.onRelease,R=n.onRight,b=n.onLeft,M=n.onUp,A=n.onDown,y=n.onChangeX,x=n.onChangeY,L=n.onChange,D=n.onToggleX,B=n.onToggleY,U=n.onHover,F=n.onHoverEnd,k=n.onMove,X=n.ignoreCheck,z=n.isNormalizer,it=n.onGestureStart,P=n.onGestureEnd,$=n.onWheel,st=n.onEnable,Rt=n.onDisable,V=n.onClick,Q=n.scrollSpeed,ut=n.capture,I=n.allowClicks,j=n.lockAxis,nt=n.onLockAxis;this.target=a=$n(a)||Ur,this.vars=n,f&&(f=pn.utils.toArray(f)),r=r||1e-9,s=s||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(ho).lineHeight)||22);var ht,Mt,mt,Ut,O,ee,kt,W=this,Pt=0,ne=0,Lt=n.passive||!u&&n.passive!==!1,C=Hr(a,Gn),T=Hr(a,sn),Z=C(),Y=T(),ot=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Di[0]==="pointerdown",rt=_a(a),Et=a.ownerDocument||Dr,vt=[0,0,0],wt=[0,0,0],Yt=0,dt=function(){return Yt=ma()},St=function(pt,Ft){return(W.event=pt)&&f&&pv(pt.target,f)||Ft&&ot&&pt.pointerType!=="touch"||X&&X(pt,Ft)},Wt=function(){W._vx.reset(),W._vy.reset(),Mt.pause(),d&&d(W)},Vt=function(){var pt=W.deltaX=vd(vt),Ft=W.deltaY=vd(wt),gt=Math.abs(pt)>=r,Ht=Math.abs(Ft)>=r;L&&(gt||Ht)&&L(W,pt,Ft,vt,wt),gt&&(R&&W.deltaX>0&&R(W),b&&W.deltaX<0&&b(W),y&&y(W),D&&W.deltaX<0!=Pt<0&&D(W),Pt=W.deltaX,vt[0]=vt[1]=vt[2]=0),Ht&&(A&&W.deltaY>0&&A(W),M&&W.deltaY<0&&M(W),x&&x(W),B&&W.deltaY<0!=ne<0&&B(W),ne=W.deltaY,wt[0]=wt[1]=wt[2]=0),(Ut||mt)&&(k&&k(W),mt&&(p&&mt===1&&p(W),E&&E(W),mt=0),Ut=!1),ee&&!(ee=!1)&&nt&&nt(W),O&&($(W),O=!1),ht=0},It=function(pt,Ft,gt){vt[gt]+=pt,wt[gt]+=Ft,W._vx.update(pt),W._vy.update(Ft),c?ht||(ht=requestAnimationFrame(Vt)):Vt()},ie=function(pt,Ft){j&&!kt&&(W.axis=kt=Math.abs(pt)>Math.abs(Ft)?"x":"y",ee=!0),kt!=="y"&&(vt[2]+=pt,W._vx.update(pt,!0)),kt!=="x"&&(wt[2]+=Ft,W._vy.update(Ft,!0)),c?ht||(ht=requestAnimationFrame(Vt)):Vt()},qt=function(pt){if(!St(pt,1)){pt=ko(pt,u);var Ft=pt.clientX,gt=pt.clientY,Ht=Ft-W.x,Bt=gt-W.y,$t=W.isDragging;W.x=Ft,W.y=gt,($t||(Ht||Bt)&&(Math.abs(W.startX-Ft)>=s||Math.abs(W.startY-gt)>=s))&&(mt=$t?2:1,$t||(W.isDragging=!0),ie(Ht,Bt))}},me=W.onPress=function(at){St(at,1)||at&&at.button||(W.axis=kt=null,Mt.pause(),W.isPressed=!0,at=ko(at),Pt=ne=0,W.startX=W.x=at.clientX,W.startY=W.y=at.clientY,W._vx.reset(),W._vy.reset(),In(z?a:Et,Di[1],qt,Lt,!0),W.deltaX=W.deltaY=0,S&&S(W))},N=W.onRelease=function(at){if(!St(at,1)){Dn(z?a:Et,Di[1],qt,!0);var pt=!isNaN(W.y-W.startY),Ft=W.isDragging,gt=Ft&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Ht=ko(at);!gt&&pt&&(W._vx.reset(),W._vy.reset(),u&&I&&pn.delayedCall(.08,function(){if(ma()-Yt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Et.createEvent){var Bt=Et.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,li,1,Ht.screenX,Ht.screenY,Ht.clientX,Ht.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(Bt)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,d&&Ft&&!z&&Mt.restart(!0),mt&&Vt(),m&&Ft&&m(W),v&&v(W,gt)}},Tt=function(pt){return pt.touches&&pt.touches.length>1&&(W.isGesturing=!0)&&it(pt,W.isDragging)},tt=function(){return(W.isGesturing=!1)||P(W)},lt=function(pt){if(!St(pt)){var Ft=C(),gt=T();It((Ft-Z)*Q,(gt-Y)*Q,1),Z=Ft,Y=gt,d&&Mt.restart(!0)}},bt=function(pt){if(!St(pt)){pt=ko(pt,u),$&&(O=!0);var Ft=(pt.deltaMode===1?l:pt.deltaMode===2?li.innerHeight:1)*_;It(pt.deltaX*Ft,pt.deltaY*Ft,0),d&&!z&&Mt.restart(!0)}},At=function(pt){if(!St(pt)){var Ft=pt.clientX,gt=pt.clientY,Ht=Ft-W.x,Bt=gt-W.y;W.x=Ft,W.y=gt,Ut=!0,d&&Mt.restart(!0),(Ht||Bt)&&ie(Ht,Bt)}},Kt=function(pt){W.event=pt,U(W)},et=function(pt){W.event=pt,F(W)},ct=function(pt){return St(pt)||ko(pt,u)&&V(W)};Mt=W._dc=pn.delayedCall(h||.25,Wt).pause(),W.deltaX=W.deltaY=0,W._vx=nh(0,50,!0),W._vy=nh(0,50,!0),W.scrollX=C,W.scrollY=T,W.isDragging=W.isGesturing=W.isPressed=!1,f_(this),W.enable=function(at){return W.isEnabled||(In(rt?Et:a,"scroll",eh),o.indexOf("scroll")>=0&&In(rt?Et:a,"scroll",lt,Lt,ut),o.indexOf("wheel")>=0&&In(a,"wheel",bt,Lt,ut),(o.indexOf("touch")>=0&&u_||o.indexOf("pointer")>=0)&&(In(a,Di[0],me,Lt,ut),In(Et,Di[2],N),In(Et,Di[3],N),I&&In(a,"click",dt,!0,!0),V&&In(a,"click",ct),it&&In(Et,"gesturestart",Tt),P&&In(Et,"gestureend",tt),U&&In(a,ts+"enter",Kt),F&&In(a,ts+"leave",et),k&&In(a,ts+"move",At)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Ut=mt=!1,W._vx.reset(),W._vy.reset(),Z=C(),Y=T(),at&&at.type&&me(at),st&&st(W)),W},W.disable=function(){W.isEnabled&&(ro.filter(function(at){return at!==W&&_a(at.target)}).length||Dn(rt?Et:a,"scroll",eh),W.isPressed&&(W._vx.reset(),W._vy.reset(),Dn(z?a:Et,Di[1],qt,!0)),Dn(rt?Et:a,"scroll",lt,ut),Dn(a,"wheel",bt,ut),Dn(a,Di[0],me,ut),Dn(Et,Di[2],N),Dn(Et,Di[3],N),Dn(a,"click",dt,!0),Dn(a,"click",ct),Dn(Et,"gesturestart",Tt),Dn(Et,"gestureend",tt),Dn(a,ts+"enter",Kt),Dn(a,ts+"leave",et),Dn(a,ts+"move",At),W.isEnabled=W.isPressed=W.isDragging=!1,Rt&&Rt(W))},W.kill=W.revert=function(){W.disable();var at=ro.indexOf(W);at>=0&&ro.splice(at,1),lr===W&&(lr=0)},ro.push(W),z&&_a(a)&&(lr=W),W.enable(g)},fv(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();qe.version="3.13.0";qe.create=function(i){return new qe(i)};qe.register=__;qe.getAll=function(){return ro.slice()};qe.getById=function(i){return ro.filter(function(t){return t.vars.id===i})[0]};d_()&&pn.registerPlugin(qe);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zt,Qs,he,De,si,be,Tf,fc,Oa,ga,ta,Ja,Sn,Cc,ih,kn,xd,yd,to,g_,qc,v_,Bn,rh,x_,y_,Ar,sh,bf,fo,wf,dc,oh,Zc,ja=1,Mn=Date.now,Kc=Mn(),Ai=0,ea=0,Sd=function(t,e,n){var r=ni(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},Md=function(t,e){return e&&(!ni(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},mv=function i(){return ea&&requestAnimationFrame(i)},Ed=function(){return Cc=1},Td=function(){return Cc=0},ki=function(t){return t},na=function(t){return Math.round(t*1e5)/1e5||0},S_=function(){return typeof window<"u"},M_=function(){return zt||S_()&&(zt=window.gsap)&&zt.registerPlugin&&zt},Ss=function(t){return!!~Tf.indexOf(t)},E_=function(t){return(t==="Height"?wf:he["inner"+t])||si["client"+t]||be["client"+t]},T_=function(t){return Fr(t,"getBoundingClientRect")||(Ss(t)?function(){return ql.width=he.innerWidth,ql.height=wf,ql}:function(){return ar(t)})},_v=function(t,e,n){var r=n.d,s=n.d2,o=n.a;return(o=Fr(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?E_(s):t["client"+s])||0}},gv=function(t,e){return!e||~$i.indexOf(t)?T_(t):function(){return ql}},Wi=function(t,e){var n=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+r)&&(o=Fr(t,n))?o()-T_(t)()[s]:Ss(t)?(si[n]||be[n])-E_(r):t[n]-t["offset"+r])},Qa=function(t,e){for(var n=0;n<to.length;n+=3)(!e||~e.indexOf(to[n+1]))&&t(to[n],to[n+1],to[n+2])},ni=function(t){return typeof t=="string"},Tn=function(t){return typeof t=="function"},ia=function(t){return typeof t=="number"},es=function(t){return typeof t=="object"},zo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Jc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Is=Math.abs,b_="left",w_="top",Af="right",Cf="bottom",_s="width",gs="height",va="Right",xa="Left",ya="Top",Sa="Bottom",Qe="padding",xi="margin",Eo="Width",Rf="Height",rn="px",yi=function(t){return he.getComputedStyle(t)},vv=function(t){var e=yi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},bd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ar=function(t,e){var n=e&&yi(t)[ih]!=="matrix(1, 0, 0, 1, 0, 0)"&&zt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},pc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},A_=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},xv=function(t){return function(e){return zt.utils.snap(A_(t),e)}},Pf=function(t){var e=zt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},yv=function(t){return function(e,n){return Pf(A_(t))(e,n.direction)}},tl=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},un=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},cn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},el=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},wd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nl={toggleActions:"play",anticipatePin:0},mc={top:0,left:0,center:.5,bottom:1,right:1},Wl=function(t,e){if(ni(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in mc?mc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},il=function(t,e,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,_=De.createElement("div"),g=Ss(n)||Fr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?be:n,E=t.indexOf("start")!==-1,S=E?c:u,v="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(v+=(r===sn?Af:Cf)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=E,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=v,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+r.op.d2],Xl(_,0,r,E),_},Xl=function(t,e,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Eo]=1,s["border"+a+Eo]=0,s[n.p]=e+"px",zt.set(t,s)},ue=[],ah={},Ba,Ad=function(){return Mn()-Ai>34&&(Ba||(Ba=requestAnimationFrame(hr)))},Ns=function(){(!Bn||!Bn.isPressed||Bn.startX>be.clientWidth)&&(fe.cache++,Bn?Ba||(Ba=requestAnimationFrame(hr)):hr(),Ai||Es("scrollStart"),Ai=Mn())},jc=function(){y_=he.innerWidth,x_=he.innerHeight},ra=function(t){fe.cache++,(t===!0||!Sn&&!v_&&!De.fullscreenElement&&!De.webkitFullscreenElement&&(!rh||y_!==he.innerWidth||Math.abs(he.innerHeight-x_)>he.innerHeight*.25))&&fc.restart(!0)},Ms={},Sv=[],C_=function i(){return cn(oe,"scrollEnd",i)||ls(!0)},Es=function(t){return Ms[t]&&Ms[t].map(function(e){return e()})||Sv},ei=[],R_=function(t){for(var e=0;e<ei.length;e+=5)(!t||ei[e+4]&&ei[e+4].query===t)&&(ei[e].style.cssText=ei[e+1],ei[e].getBBox&&ei[e].setAttribute("transform",ei[e+2]||""),ei[e+3].uncache=1)},Lf=function(t,e){var n;for(kn=0;kn<ue.length;kn++)n=ue[kn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));dc=!0,e&&R_(e),e||Es("revert")},P_=function(t,e){fe.cache++,(e||!zn)&&fe.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),ni(t)&&(he.history.scrollRestoration=bf=t)},zn,vs=0,Cd,Mv=function(){if(Cd!==vs){var t=Cd=vs;requestAnimationFrame(function(){return t===vs&&ls(!0)})}},L_=function(){be.appendChild(fo),wf=!Bn&&fo.offsetHeight||he.innerHeight,be.removeChild(fo)},Rd=function(t){return Oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ls=function(t,e){if(si=De.documentElement,be=De.body,Tf=[he,De,si,be],Ai&&!t&&!dc){un(oe,"scrollEnd",C_);return}L_(),zn=oe.isRefreshing=!0,fe.forEach(function(r){return Tn(r)&&++r.cacheID&&(r.rec=r())});var n=Es("refreshInit");g_&&oe.sort(),e||Lf(),fe.forEach(function(r){Tn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ue.slice(0).forEach(function(r){return r.refresh()}),dc=!1,ue.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),oh=1,Rd(!0),ue.forEach(function(r){var s=Wi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Rd(!1),oh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),fe.forEach(function(r){Tn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),P_(bf,1),fc.pause(),vs++,zn=2,hr(2),ue.forEach(function(r){return Tn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=oe.isRefreshing=!1,Es("refresh")},lh=0,$l=1,Ma,hr=function(t){if(t===2||!zn&&!dc){oe.isUpdating=!0,Ma&&Ma.update(0);var e=ue.length,n=Mn(),r=n-Kc>=50,s=e&&ue[0].scroll();if($l=lh>s?-1:1,zn||(lh=s),r&&(Ai&&!Cc&&n-Ai>200&&(Ai=0,Es("scrollEnd")),ta=Kc,Kc=n),$l<0){for(kn=e;kn-- >0;)ue[kn]&&ue[kn].update(0,r);$l=1}else for(kn=0;kn<e;kn++)ue[kn]&&ue[kn].update(0,r);oe.isUpdating=!1}Ba=0},ch=[b_,w_,Cf,Af,xi+Sa,xi+va,xi+ya,xi+xa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yl=ch.concat([_s,gs,"boxSizing","max"+Eo,"max"+Rf,"position",xi,Qe,Qe+ya,Qe+va,Qe+Sa,Qe+xa]),Ev=function(t,e,n){po(n);var r=t._gsap;if(r.spacerIsNative)po(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Qc=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=ch.length,o=e.style,a=t.style,l;s--;)l=ch[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Cf]=a[Af]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_s]=pc(t,Gn)+rn,o[gs]=pc(t,sn)+rn,o[Qe]=a[xi]=a[w_]=a[b_]="0",po(r),a[_s]=a["max"+Eo]=n[_s],a[gs]=a["max"+Rf]=n[gs],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Tv=/([A-Z])/g,po=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,o;for((t.t._gsap||zt.core.getCache(t.t)).uncache=1;r<n;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Tv,"-$1").toLowerCase())}},rl=function(t){for(var e=Yl.length,n=t.style,r=[],s=0;s<e;s++)r.push(Yl[s],n[Yl[s]]);return r.t=t,r},bv=function(t,e,n){for(var r=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},ql={left:0,top:0},Pd=function(t,e,n,r,s,o,a,l,c,u,d,h,f,_){Tn(t)&&(t=t(l)),ni(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Wl("0"+t.substr(3),n):0));var g=f?f.time():0,p,m,E;if(f&&f.seek(0),isNaN(t)||(t=+t),ia(t))f&&(t=zt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,t)),a&&Xl(a,n,r,!0);else{Tn(e)&&(e=e(l));var S=(t||"0").split(" "),v,R,b,M;E=$n(e,l)||be,v=ar(E)||{},(!v||!v.left&&!v.top)&&yi(E).display==="none"&&(M=E.style.display,E.style.display="block",v=ar(E),M?E.style.display=M:E.style.removeProperty("display")),R=Wl(S[0],v[r.d]),b=Wl(S[1]||"0",n),t=v[r.p]-c[r.p]-u+R+s-b,a&&Xl(a,b,r,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var A=t+n,y=o._isStart;p="scroll"+r.d2,Xl(o,A,r,y&&A>20||!y&&(d?Math.max(be[p],si[p]):o.parentNode[p])<=A+1),d&&(c=ar(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+rn))}return f&&E&&(p=ar(E),f.seek(h),m=ar(E),f._caScrollDist=p[r.p]-m[r.p],t=t/f._caScrollDist*h),f&&f.seek(g),f?t:Math.round(t)},wv=/(webkit|moz|length|cssText|inset)/i,Ld=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===be){t._stOrig=s.cssText,a=yi(t);for(o in a)!+o&&!wv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=t._stOrig;zt.core.getCache(t).uncache=1,e.appendChild(t)}},D_=function(t,e,n){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},sl=function(t,e,n){var r={};r[e.p]="+="+n,zt.set(t,r)},Dd=function(t,e){var n=Hr(t,e),r="_scroll"+e.p2,s=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,_={};c=c||n();var g=D_(n,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){fe.cache++,o.tween&&hr()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=zt.to(t,l),h};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(t,"wheel",n.wheelHandler),oe.isTouch&&un(t,"touchmove",n.wheelHandler),s},oe=(function(){function i(e,n){Qs||i.register(zt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),sh(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ea){this.update=this.refresh=this.kill=ki;return}n=bd(ni(n)||ia(n)||n.nodeType?{trigger:n}:n,nl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,E=s.onSnapComplete,S=s.once,v=s.snap,R=s.pinReparent,b=s.pinSpacer,M=s.containerAnimation,A=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Gn:sn,L=!d&&d!==0,D=$n(n.scroller||he),B=zt.core.getCache(D),U=Ss(D),F=("pinType"in n?n.pinType:Fr(D,"pinType")||U&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=L&&n.toggleActions.split(" "),z="markers"in n?n.markers:nl.markers,it=U?0:parseFloat(yi(D)["border"+x.p2+Eo])||0,P=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(P)},st=_v(D,U,x),Rt=gv(D,U),V=0,Q=0,ut=0,I=Hr(D,x),j,nt,ht,Mt,mt,Ut,O,ee,kt,W,Pt,ne,Lt,C,T,Z,Y,ot,rt,Et,vt,wt,Yt,dt,St,Wt,Vt,It,ie,qt,me,N,Tt,tt,lt,bt,At,Kt,et;if(P._startClamp=P._endClamp=!1,P._dir=x,p*=45,P.scroller=D,P.scroll=M?M.time.bind(M):I,Mt=I(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(g_=1,n.refreshPriority===-9999&&(Ma=P)),B.tweenScroll=B.tweenScroll||{top:Dd(D,sn),left:Dd(D,Gn)},P.tweenTo=j=B.tweenScroll[x.p],P.scrubDuration=function(gt){Tt=ia(gt)&&gt,Tt?N?N.duration(gt):N=zt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Tt,paused:!0,onComplete:function(){return m&&m(P)}}):(N&&N.progress(1).kill(),N=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),qt=0,l||(l=r.vars.id)),v&&((!es(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in be.style&&zt.set(U?[be,si]:D,{scrollBehavior:"auto"}),fe.forEach(function(gt){return Tn(gt)&&gt.target===(U?De.scrollingElement||si:D)&&(gt.smooth=!1)}),ht=Tn(v.snapTo)?v.snapTo:v.snapTo==="labels"?xv(r):v.snapTo==="labelsDirectional"?yv(r):v.directional!==!1?function(gt,Ht){return Pf(v.snapTo)(gt,Mn()-Q<500?0:Ht.direction)}:zt.utils.snap(v.snapTo),tt=v.duration||{min:.1,max:2},tt=es(tt)?ga(tt.min,tt.max):ga(tt,tt),lt=zt.delayedCall(v.delay||Tt/2||.1,function(){var gt=I(),Ht=Mn()-Q<500,Bt=j.tween;if((Ht||Math.abs(P.getVelocity())<10)&&!Bt&&!Cc&&V!==gt){var $t=(gt-Ut)/C,Ae=r&&!L?r.totalProgress():$t,re=Ht?0:(Ae-me)/(Mn()-ta)*1e3||0,Se=zt.utils.clamp(-$t,1-$t,Is(re/2)*re/.185),Ie=$t+(v.inertia===!1?0:Se),de,Me,ge=v,gn=ge.onStart,Ce=ge.onInterrupt,Ze=ge.onComplete;if(de=ht(Ie,P),ia(de)||(de=Ie),Me=Math.max(0,Math.round(Ut+de*C)),gt<=O&&gt>=Ut&&Me!==gt){if(Bt&&!Bt._initted&&Bt.data<=Is(Me-gt))return;v.inertia===!1&&(Se=de-$t),j(Me,{duration:tt(Is(Math.max(Is(Ie-Ae),Is(de-Ae))*.185/re/.05||0)),ease:v.ease||"power3",data:Is(Me-gt),onInterrupt:function(){return lt.restart(!0)&&Ce&&Ce(P)},onComplete:function(){P.update(),V=I(),r&&!L&&(N?N.resetTo("totalProgress",de,r._tTime/r._tDur):r.progress(de)),qt=me=r&&!L?r.totalProgress():P.progress,E&&E(P),Ze&&Ze(P)}},gt,Se*C,Me-gt-Se*C),gn&&gn(P,j.tween)}}else P.isActive&&V!==gt&&lt.restart(!0)}).pause()),l&&(ah[l]=P),h=P.trigger=$n(h||f!==!0&&f),et=h&&h._gsap&&h._gsap.stRevert,et&&(et=et(P)),f=f===!0?h:$n(f),ni(a)&&(a={targets:h,className:a}),f&&(_===!1||_===xi||(_=!_&&f.parentNode&&f.parentNode.style&&yi(f.parentNode).display==="flex"?!1:Qe),P.pin=f,nt=zt.core.getCache(f),nt.spacer?T=nt.pinState:(b&&(b=$n(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),nt.spacerIsNative=!!b,b&&(nt.spacerState=rl(b))),nt.spacer=ot=b||De.createElement("div"),ot.classList.add("pin-spacer"),l&&ot.classList.add("pin-spacer-"+l),nt.pinState=T=rl(f)),n.force3D!==!1&&zt.set(f,{force3D:!0}),P.spacer=ot=nt.spacer,ie=yi(f),dt=ie[_+x.os2],Et=zt.getProperty(f),vt=zt.quickSetter(f,x.a,rn),Qc(f,ot,ie),Y=rl(f)),z){ne=es(z)?bd(z,wd):wd,W=il("scroller-start",l,D,x,ne,0),Pt=il("scroller-end",l,D,x,ne,0,W),rt=W["offset"+x.op.d2];var ct=$n(Fr(D,"content")||D);ee=this.markerStart=il("start",l,ct,x,ne,rt,0,M),kt=this.markerEnd=il("end",l,ct,x,ne,rt,0,M),M&&(Kt=zt.quickSetter([ee,kt],x.a,rn)),!F&&!($i.length&&Fr(D,"fixedMarkers")===!0)&&(vv(U?be:D),zt.set([W,Pt],{force3D:!0}),Wt=zt.quickSetter(W,x.a,rn),It=zt.quickSetter(Pt,x.a,rn))}if(M){var at=M.vars.onUpdate,pt=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),at&&at.apply(M,pt||[])})}if(P.previous=function(){return ue[ue.indexOf(P)-1]},P.next=function(){return ue[ue.indexOf(P)+1]},P.revert=function(gt,Ht){if(!Ht)return P.kill(!0);var Bt=gt!==!1||!P.enabled,$t=Sn;Bt!==P.isReverted&&(Bt&&(bt=Math.max(I(),P.scroll.rec||0),ut=P.progress,At=r&&r.progress()),ee&&[ee,kt,W,Pt].forEach(function(Ae){return Ae.style.display=Bt?"none":"block"}),Bt&&(Sn=P,P.update(Bt)),f&&(!R||!P.isActive)&&(Bt?Ev(f,ot,T):Qc(f,ot,yi(f),St)),Bt||P.update(Bt),Sn=$t,P.isReverted=Bt)},P.refresh=function(gt,Ht,Bt,$t){if(!((Sn||!P.enabled)&&!Ht)){if(f&&gt&&Ai){un(i,"scrollEnd",C_);return}!zn&&$&&$(P),Sn=P,j.tween&&!Bt&&(j.tween.kill(),j.tween=0),N&&N.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ae=st(),re=Rt(),Se=M?M.duration():Wi(D,x),Ie=C<=.01||!C,de=0,Me=$t||0,ge=es(Bt)?Bt.end:n.end,gn=n.endTrigger||h,Ce=es(Bt)?Bt.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),Ze=P.pinnedContainer=n.pinnedContainer&&$n(n.pinnedContainer,P),w=h&&Math.max(0,ue.indexOf(P))||0,H=w,J,K,G,_t,xt,Ct,Nt,Zt,te,ft,yt,Jt,pe;for(z&&es(Bt)&&(Jt=zt.getProperty(W,x.p),pe=zt.getProperty(Pt,x.p));H-- >0;)Ct=ue[H],Ct.end||Ct.refresh(0,1)||(Sn=P),Nt=Ct.pin,Nt&&(Nt===h||Nt===f||Nt===Ze)&&!Ct.isReverted&&(ft||(ft=[]),ft.unshift(Ct),Ct.revert(!0,!0)),Ct!==ue[H]&&(w--,H--);for(Tn(Ce)&&(Ce=Ce(P)),Ce=Sd(Ce,"start",P),Ut=Pd(Ce,h,Ae,x,I(),ee,W,P,re,it,F,Se,M,P._startClamp&&"_startClamp")||(f?-.001:0),Tn(ge)&&(ge=ge(P)),ni(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(ni(Ce)?Ce.split(" ")[0]:"")+ge:(de=Wl(ge.substr(2),Ae),ge=ni(Ce)?Ce:(M?zt.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Ut):Ut)+de,gn=h)),ge=Sd(ge,"end",P),O=Math.max(Ut,Pd(ge||(gn?"100% 0":Se),gn,Ae,x,I()+de,kt,Pt,P,re,it,F,Se,M,P._endClamp&&"_endClamp"))||-.001,de=0,H=w;H--;)Ct=ue[H],Nt=Ct.pin,Nt&&Ct.start-Ct._pinPush<=Ut&&!M&&Ct.end>0&&(J=Ct.end-(P._startClamp?Math.max(0,Ct.start):Ct.start),(Nt===h&&Ct.start-Ct._pinPush<Ut||Nt===Ze)&&isNaN(Ce)&&(de+=J*(1-Ct.progress)),Nt===f&&(Me+=J));if(Ut+=de,O+=de,P._startClamp&&(P._startClamp+=de),P._endClamp&&!zn&&(P._endClamp=O||-.001,O=Math.min(O,Wi(D,x))),C=O-Ut||(Ut-=.01)&&.001,Ie&&(ut=zt.utils.clamp(0,1,zt.utils.normalize(Ut,O,bt))),P._pinPush=Me,ee&&de&&(J={},J[x.a]="+="+de,Ze&&(J[x.p]="-="+I()),zt.set([ee,kt],J)),f&&!(oh&&P.end>=Wi(D,x)))J=yi(f),_t=x===sn,G=I(),wt=parseFloat(Et(x.a))+Me,!Se&&O>1&&(yt=(U?De.scrollingElement||si:D).style,yt={style:yt,value:yt["overflow"+x.a.toUpperCase()]},U&&yi(be)["overflow"+x.a.toUpperCase()]!=="scroll"&&(yt.style["overflow"+x.a.toUpperCase()]="scroll")),Qc(f,ot,J),Y=rl(f),K=ar(f,!0),Zt=F&&Hr(D,_t?Gn:sn)(),_?(St=[_+x.os2,C+Me+rn],St.t=ot,H=_===Qe?pc(f,x)+C+Me:0,H&&(St.push(x.d,H+rn),ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=H+rn)),po(St),Ze&&ue.forEach(function(Ee){Ee.pin===Ze&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),F&&I(bt)):(H=pc(f,x),H&&ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=H+rn)),F&&(xt={top:K.top+(_t?G-Ut:Zt)+rn,left:K.left+(_t?Zt:G-Ut)+rn,boxSizing:"border-box",position:"fixed"},xt[_s]=xt["max"+Eo]=Math.ceil(K.width)+rn,xt[gs]=xt["max"+Rf]=Math.ceil(K.height)+rn,xt[xi]=xt[xi+ya]=xt[xi+va]=xt[xi+Sa]=xt[xi+xa]="0",xt[Qe]=J[Qe],xt[Qe+ya]=J[Qe+ya],xt[Qe+va]=J[Qe+va],xt[Qe+Sa]=J[Qe+Sa],xt[Qe+xa]=J[Qe+xa],Z=bv(T,xt,R),zn&&I(0)),r?(te=r._initted,qc(1),r.render(r.duration(),!0,!0),Yt=Et(x.a)-wt+C+Me,Vt=Math.abs(C-Yt)>1,F&&Vt&&Z.splice(Z.length-2,2),r.render(0,!0,!0),te||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),qc(0)):Yt=C,yt&&(yt.value?yt.style["overflow"+x.a.toUpperCase()]=yt.value:yt.style.removeProperty("overflow-"+x.a));else if(h&&I()&&!M)for(K=h.parentNode;K&&K!==be;)K._pinOffset&&(Ut-=K._pinOffset,O-=K._pinOffset),K=K.parentNode;ft&&ft.forEach(function(Ee){return Ee.revert(!1,!0)}),P.start=Ut,P.end=O,Mt=mt=zn?bt:I(),!M&&!zn&&(Mt<bt&&I(bt),P.scroll.rec=0),P.revert(!1,!0),Q=Mn(),lt&&(V=-1,lt.restart(!0)),Sn=0,r&&L&&(r._initted||At)&&r.progress()!==At&&r.progress(At||0,!0).render(r.time(),!0,!0),(Ie||ut!==P.progress||M||g||r&&!r._initted)&&(r&&!L&&(r._initted||ut||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Ut<-.001&&!ut?zt.utils.normalize(Ut,O,0):ut,!0),P.progress=Ie||(Mt-Ut)/C===ut?0:ut),f&&_&&(ot._pinOffset=Math.round(P.progress*Yt)),N&&N.invalidate(),isNaN(Jt)||(Jt-=zt.getProperty(W,x.p),pe-=zt.getProperty(Pt,x.p),sl(W,x,Jt),sl(ee,x,Jt-($t||0)),sl(Pt,x,pe),sl(kt,x,pe-($t||0))),Ie&&!zn&&P.update(),u&&!zn&&!Lt&&(Lt=!0,u(P),Lt=!1)}},P.getVelocity=function(){return(I()-mt)/(Mn()-ta)*1e3||0},P.endAnimation=function(){zo(P.callbackAnimation),r&&(N?N.progress(1):r.paused()?L||zo(r,P.direction<0,1):zo(r,r.reversed()))},P.labelToScroll=function(gt){return r&&r.labels&&(Ut||P.refresh()||Ut)+r.labels[gt]/r.duration()*C||0},P.getTrailing=function(gt){var Ht=ue.indexOf(P),Bt=P.direction>0?ue.slice(0,Ht).reverse():ue.slice(Ht+1);return(ni(gt)?Bt.filter(function($t){return $t.vars.preventOverlaps===gt}):Bt).filter(function($t){return P.direction>0?$t.end<=Ut:$t.start>=O})},P.update=function(gt,Ht,Bt){if(!(M&&!Bt&&!gt)){var $t=zn===!0?bt:P.scroll(),Ae=gt?0:($t-Ut)/C,re=Ae<0?0:Ae>1?1:Ae||0,Se=P.progress,Ie,de,Me,ge,gn,Ce,Ze,w;if(Ht&&(mt=Mt,Mt=M?I():$t,v&&(me=qt,qt=r&&!L?r.totalProgress():re)),p&&f&&!Sn&&!ja&&Ai&&(!re&&Ut<$t+($t-mt)/(Mn()-ta)*p?re=1e-4:re===1&&O>$t+($t-mt)/(Mn()-ta)*p&&(re=.9999)),re!==Se&&P.enabled){if(Ie=P.isActive=!!re&&re<1,de=!!Se&&Se<1,Ce=Ie!==de,gn=Ce||!!re!=!!Se,P.direction=re>Se?1:-1,P.progress=re,gn&&!Sn&&(Me=re&&!Se?0:re===1?1:Se===1?2:3,L&&(ge=!Ce&&X[Me+1]!=="none"&&X[Me+1]||X[Me],w=r&&(ge==="complete"||ge==="reset"||ge in r))),y&&(Ce||w)&&(w||d||!r)&&(Tn(y)?y(P):P.getTrailing(y).forEach(function(G){return G.endAnimation()})),L||(N&&!Sn&&!ja?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",re,r._tTime/r._tDur):(N.vars.totalProgress=re,N.invalidate().restart())):r&&r.totalProgress(re,!!(Sn&&(Q||gt)))),f){if(gt&&_&&(ot.style[_+x.os2]=dt),!F)vt(na(wt+Yt*re));else if(gn){if(Ze=!gt&&re>Se&&O+1>$t&&$t+1>=Wi(D,x),R)if(!gt&&(Ie||Ze)){var H=ar(f,!0),J=$t-Ut;Ld(f,be,H.top+(x===sn?J:0)+rn,H.left+(x===sn?0:J)+rn)}else Ld(f,ot);po(Ie||Ze?Z:Y),Vt&&re<1&&Ie||vt(wt+(re===1&&!Ze?Yt:0))}}v&&!j.tween&&!Sn&&!ja&&lt.restart(!0),a&&(Ce||S&&re&&(re<1||!Zc))&&Oa(a.targets).forEach(function(G){return G.classList[Ie||S?"add":"remove"](a.className)}),o&&!L&&!gt&&o(P),gn&&!Sn?(L&&(w&&(ge==="complete"?r.pause().totalProgress(1):ge==="reset"?r.restart(!0).pause():ge==="restart"?r.restart(!0):r[ge]()),o&&o(P)),(Ce||!Zc)&&(c&&Ce&&Jc(P,c),k[Me]&&Jc(P,k[Me]),S&&(re===1?P.kill(!1,1):k[Me]=0),Ce||(Me=re===1?1:3,k[Me]&&Jc(P,k[Me]))),A&&!Ie&&Math.abs(P.getVelocity())>(ia(A)?A:2500)&&(zo(P.callbackAnimation),N?N.progress(1):zo(r,ge==="reverse"?1:!re,1))):L&&o&&!Sn&&o(P)}if(It){var K=M?$t/M.duration()*(M._caScrollDist||0):$t;Wt(K+(W._isFlipped?1:0)),It(K)}Kt&&Kt(-$t/M.duration()*(M._caScrollDist||0))}},P.enable=function(gt,Ht){P.enabled||(P.enabled=!0,un(D,"resize",ra),U||un(D,"scroll",Ns),$&&un(i,"refreshInit",$),gt!==!1&&(P.progress=ut=0,Mt=mt=V=I()),Ht!==!1&&P.refresh())},P.getTween=function(gt){return gt&&j?j.tween:N},P.setPositions=function(gt,Ht,Bt,$t){if(M){var Ae=M.scrollTrigger,re=M.duration(),Se=Ae.end-Ae.start;gt=Ae.start+Se*gt/re,Ht=Ae.start+Se*Ht/re}P.refresh(!1,!1,{start:Md(gt,Bt&&!!P._startClamp),end:Md(Ht,Bt&&!!P._endClamp)},$t),P.update()},P.adjustPinSpacing=function(gt){if(St&&gt){var Ht=St.indexOf(x.d)+1;St[Ht]=parseFloat(St[Ht])+gt+rn,St[1]=parseFloat(St[1])+gt+rn,po(St)}},P.disable=function(gt,Ht){if(P.enabled&&(gt!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ht||N&&N.pause(),bt=0,nt&&(nt.uncache=1),$&&cn(i,"refreshInit",$),lt&&(lt.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!U)){for(var Bt=ue.length;Bt--;)if(ue[Bt].scroller===D&&ue[Bt]!==P)return;cn(D,"resize",ra),U||cn(D,"scroll",Ns)}},P.kill=function(gt,Ht){P.disable(gt,Ht),N&&!Ht&&N.kill(),l&&delete ah[l];var Bt=ue.indexOf(P);Bt>=0&&ue.splice(Bt,1),Bt===kn&&$l>0&&kn--,Bt=0,ue.forEach(function($t){return $t.scroller===P.scroller&&(Bt=1)}),Bt||zn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,gt&&r.revert({kill:!1}),Ht||r.kill()),ee&&[ee,kt,W,Pt].forEach(function($t){return $t.parentNode&&$t.parentNode.removeChild($t)}),Ma===P&&(Ma=0),f&&(nt&&(nt.uncache=1),Bt=0,ue.forEach(function($t){return $t.pin===f&&Bt++}),Bt||(nt.spacer=0)),n.onKill&&n.onKill(P)},ue.push(P),P.enable(!1,!1),et&&et(P),r&&r.add&&!C){var Ft=P.update;P.update=function(){P.update=Ft,fe.cache++,Ut||O||P.refresh()},zt.delayedCall(.01,P.update),C=.01,Ut=O=0}else P.refresh();f&&Mv()},i.register=function(n){return Qs||(zt=n||M_(),S_()&&window.document&&i.enable(),Qs=ea),Qs},i.defaults=function(n){if(n)for(var r in n)nl[r]=n[r];return nl},i.disable=function(n,r){ea=0,ue.forEach(function(o){return o[r?"kill":"disable"](n)}),cn(he,"wheel",Ns),cn(De,"scroll",Ns),clearInterval(Ja),cn(De,"touchcancel",ki),cn(be,"touchstart",ki),tl(cn,De,"pointerdown,touchstart,mousedown",Ed),tl(cn,De,"pointerup,touchend,mouseup",Td),fc.kill(),Qa(cn);for(var s=0;s<fe.length;s+=3)el(cn,fe[s],fe[s+1]),el(cn,fe[s],fe[s+2])},i.enable=function(){if(he=window,De=document,si=De.documentElement,be=De.body,zt&&(Oa=zt.utils.toArray,ga=zt.utils.clamp,sh=zt.core.context||ki,qc=zt.core.suppressOverwrites||ki,bf=he.history.scrollRestoration||"auto",lh=he.pageYOffset||0,zt.core.globals("ScrollTrigger",i),be)){ea=1,fo=document.createElement("div"),fo.style.height="100vh",fo.style.position="absolute",L_(),mv(),qe.register(zt),i.isTouch=qe.isTouch,Ar=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),rh=qe.isTouch===1,un(he,"wheel",Ns),Tf=[he,De,si,be],zt.matchMedia?(i.matchMedia=function(c){var u=zt.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},zt.addEventListener("matchMediaInit",function(){return Lf()}),zt.addEventListener("matchMediaRevert",function(){return R_()}),zt.addEventListener("matchMedia",function(){ls(0,1),Es("matchMedia")}),zt.matchMedia().add("(orientation: portrait)",function(){return jc(),jc})):console.warn("Requires GSAP 3.11.0 or later"),jc(),un(De,"scroll",Ns);var n=be.hasAttribute("style"),r=be.style,s=r.borderTopStyle,o=zt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=ar(be),sn.m=Math.round(a.top+sn.sc())||0,Gn.m=Math.round(a.left+Gn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(be.setAttribute("style",""),be.removeAttribute("style")),Ja=setInterval(Ad,250),zt.delayedCall(.5,function(){return ja=0}),un(De,"touchcancel",ki),un(be,"touchstart",ki),tl(un,De,"pointerdown,touchstart,mousedown",Ed),tl(un,De,"pointerup,touchend,mouseup",Td),ih=zt.utils.checkPrefix("transform"),Yl.push(ih),Qs=Mn(),fc=zt.delayedCall(.2,ls).pause(),to=[De,"visibilitychange",function(){var c=he.innerWidth,u=he.innerHeight;De.hidden?(xd=c,yd=u):(xd!==c||yd!==u)&&ra()},De,"DOMContentLoaded",ls,he,"load",ls,he,"resize",ra],Qa(un),ue.forEach(function(c){return c.enable(0,1)}),l=0;l<fe.length;l+=3)el(cn,fe[l],fe[l+1]),el(cn,fe[l],fe[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Zc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ja)||(Ja=r)&&setInterval(Ad,r),"ignoreMobileResize"in n&&(rh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Qa(cn)||Qa(un,n.autoRefreshEvents||"none"),v_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=$n(n),o=fe.indexOf(s),a=Ss(s);~o&&fe.splice(o,a?6:2),r&&(a?$i.unshift(he,r,be,r,si,r):$i.unshift(s,r))},i.clearMatchMedia=function(n){ue.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ni(n)?$n(n):n).getBoundingClientRect(),a=o[s?_s:gs]*r||0;return s?o.right-a>0&&o.left+a<he.innerWidth:o.bottom-a>0&&o.top+a<he.innerHeight},i.positionInViewport=function(n,r,s){ni(n)&&(n=$n(n));var o=n.getBoundingClientRect(),a=o[s?_s:gs],l=r==null?a/2:r in mc?mc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/he.innerWidth:(o.top+l)/he.innerHeight},i.killAll=function(n){if(ue.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ms.killAll||[];Ms={},r.forEach(function(s){return s()})}},i})();oe.version="3.13.0";oe.saveStyles=function(i){return i?Oa(i).forEach(function(t){if(t&&t.style){var e=ei.indexOf(t);e>=0&&ei.splice(e,5),ei.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),zt.core.getCache(t),sh())}}):ei};oe.revert=function(i,t){return Lf(!i,t)};oe.create=function(i,t){return new oe(i,t)};oe.refresh=function(i){return i?ra(!0):(Qs||oe.register())&&ls(!0)};oe.update=function(i){return++fe.cache&&hr(i===!0?2:0)};oe.clearScrollMemory=P_;oe.maxScroll=function(i,t){return Wi(i,t?Gn:sn)};oe.getScrollFunc=function(i,t){return Hr($n(i),t?Gn:sn)};oe.getById=function(i){return ah[i]};oe.getAll=function(){return ue.filter(function(i){return i.vars.id!=="ScrollSmoother"})};oe.isScrolling=function(){return!!Ai};oe.snapDirectional=Pf;oe.addEventListener=function(i,t){var e=Ms[i]||(Ms[i]=[]);~e.indexOf(t)||e.push(t)};oe.removeEventListener=function(i,t){var e=Ms[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};oe.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var d=[],h=[],f=zt.delayedCall(r,function(){u(d,h),d=[],h=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Tn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Tn(s)&&(s=s(),un(oe,"refresh",function(){return s=t.batchMax()})),Oa(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(oe.create(c))}),e};var Ud=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},tu=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===si&&i(be,e)},ol={auto:1,scroll:1},Av=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||zt.core.getCache(s),a=Mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==be&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ol[(l=yi(s)).overflowY]||ol[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ss(s)&&(ol[(l=yi(s)).overflowY]||ol[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},U_=function(t,e,n,r){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&Av,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&un(De,qe.eventTypes[0],Nd,!1,!0)},onDisable:function(){return cn(De,qe.eventTypes[0],Nd,!0)}})},Cv=/(input|label|select|textarea)/i,Id,Nd=function(t){var e=Cv.test(t.target.tagName);(e||Id)&&(t._gsapAllow=!0,Id=e)},Rv=function(t){es(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=$n(t.target)||si,u=zt.core.globals().ScrollSmoother,d=u&&u.get(),h=Ar&&(t.content&&$n(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Hr(c,sn),_=Hr(c,Gn),g=1,p=(qe.isTouch&&he.visualViewport?he.visualViewport.scale*he.visualViewport.width:he.outerWidth)/he.innerWidth,m=0,E=Tn(r)?function(){return r(a)}:function(){return r||2.8},S,v,R=U_(c,t.type,!0,s),b=function(){return v=!1},M=ki,A=ki,y=function(){l=Wi(c,sn),A=ga(Ar?1:0,l),n&&(M=ga(0,Wi(c,Gn))),S=vs},x=function(){h._gsap.y=na(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(v){requestAnimationFrame(b);var z=na(a.deltaY/2),it=A(f.v-z);if(h&&it!==f.v+f.offset){f.offset=it-f.v;var P=na((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",f.cacheID=fe.cache,hr()}return!0}f.offset&&x(),v=!0},D,B,U,F,k=function(){y(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return h&&zt.set(h,{y:"+=0"}),t.ignoreCheck=function(X){return Ar&&X.type==="touchmove"&&L()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){v=!1;var X=g;g=na((he.visualViewport&&he.visualViewport.scale||1)/p),D.pause(),X!==g&&tu(c,g>1.01?!0:n?!1:"x"),B=_(),U=f(),y(),S=vs},t.onRelease=t.onGestureStart=function(X,z){if(f.offset&&x(),!z)F.restart(!0);else{fe.cache++;var it=E(),P,$;n&&(P=_(),$=P+it*.05*-X.velocityX/.227,it*=Ud(_,P,$,Wi(c,Gn)),D.vars.scrollX=M($)),P=f(),$=P+it*.05*-X.velocityY/.227,it*=Ud(f,P,$,Wi(c,sn)),D.vars.scrollY=A($),D.invalidate().duration(it).play(.01),(Ar&&D.vars.scrollY>=l||P>=l-1)&&zt.to({},{onUpdate:k,duration:it})}o&&o(X)},t.onWheel=function(){D._ts&&D.pause(),Mn()-m>1e3&&(S=0,m=Mn())},t.onChange=function(X,z,it,P,$){if(vs!==S&&y(),z&&n&&_(M(P[2]===z?B+(X.startX-X.x):_()+z-P[1])),it){f.offset&&x();var st=$[2]===it,Rt=st?U+X.startY-X.y:f()+it-$[1],V=A(Rt);st&&Rt!==V&&(U+=V-Rt),f(V)}(it||z)&&hr()},t.onEnable=function(){tu(c,n?!1:"x"),oe.addEventListener("refresh",k),un(he,"resize",k),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),R.enable()},t.onDisable=function(){tu(c,!0),cn(he,"resize",k),oe.removeEventListener("refresh",k),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=Ar,Ar&&!f()&&f(1),Ar&&zt.ticker.add(ki),F=a._dc,D=zt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:D_(f,f(),function(){return D.pause()})},onUpdate:hr,onComplete:F.vars.onComplete}),a};oe.sort=function(i){if(Tn(i))return ue.sort(i);var t=he.pageYOffset||0;return oe.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+he.innerHeight}),ue.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};oe.observe=function(i){return new qe(i)};oe.normalizeScroll=function(i){if(typeof i>"u")return Bn;if(i===!0&&Bn)return Bn.enable();if(i===!1){Bn&&Bn.kill(),Bn=i;return}var t=i instanceof qe?i:Rv(i);return Bn&&Bn.target===t.target&&Bn.kill(),Ss(t.target)&&(Bn=t),t};oe.core={_getVelocityProp:nh,_inputObserver:U_,_scrollers:fe,_proxies:$i,bridge:{ss:function(){Ai||Es("scrollStart"),Ai=Mn()},ref:function(){return Sn}}};M_()&&zt.registerPlugin(oe);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="170",Pv=0,Fd=1,Lv=2,I_=1,Dv=2,ir=3,Vr=0,Jn=1,Vi=2,Or=0,xs=1,uh=2,Od=3,Bd=4,Uv=5,rs=100,Iv=101,Nv=102,Fv=103,Ov=104,Bv=200,kv=201,zv=202,Hv=203,hh=204,fh=205,Vv=206,Gv=207,Wv=208,Xv=209,$v=210,Yv=211,qv=212,Zv=213,Kv=214,dh=0,ph=1,mh=2,To=3,_h=4,gh=5,vh=6,xh=7,N_=0,Jv=1,jv=2,Br=0,Qv=1,tx=2,ex=3,nx=4,ix=5,rx=6,sx=7,F_=300,bo=301,wo=302,yh=303,Sh=304,Rc=306,Mh=1e3,cs=1001,Eh=1002,fi=1003,ox=1004,al=1005,Ii=1006,eu=1007,us=1008,_r=1009,O_=1010,B_=1011,ka=1012,Uf=1013,Ts=1014,Xi=1015,Xa=1016,If=1017,Nf=1018,Ao=1020,k_=35902,z_=1021,H_=1022,Ni=1023,V_=1024,G_=1025,mo=1026,Co=1027,Ff=1028,Of=1029,W_=1030,Bf=1031,kf=1033,Zl=33776,Kl=33777,Jl=33778,jl=33779,Th=35840,bh=35841,wh=35842,Ah=35843,Ch=36196,Rh=37492,Ph=37496,Lh=37808,Dh=37809,Uh=37810,Ih=37811,Nh=37812,Fh=37813,Oh=37814,Bh=37815,kh=37816,zh=37817,Hh=37818,Vh=37819,Gh=37820,Wh=37821,Ql=36492,Xh=36494,$h=36495,X_=36283,Yh=36284,qh=36285,Zh=36286,ax=3200,lx=3201,cx=0,ux=1,Cr="",ri="srgb",Po="srgb-linear",Pc="linear",we="srgb",Fs=7680,kd=519,hx=512,fx=513,dx=514,$_=515,px=516,mx=517,_x=518,gx=519,zd=35044,ll=35048,Hd="300 es",cr=2e3,_c=2001;class Lo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vd=1234567;const Ea=Math.PI/180,za=180/Math.PI;function Rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function dn(i,t,e){return Math.max(t,Math.min(e,i))}function zf(i,t){return(i%t+t)%t}function vx(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function xx(i,t,e){return i!==t?(e-i)/(t-i):0}function Ta(i,t,e){return(1-e)*i+e*t}function yx(i,t,e,n){return Ta(i,t,1-Math.exp(-e*n))}function Sx(i,t=1){return t-Math.abs(zf(i,t*2)-t)}function Mx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ex(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bx(i,t){return i+Math.random()*(t-i)}function wx(i){return i*(.5-Math.random())}function Ax(i){i!==void 0&&(Vd=i);let t=Vd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cx(i){return i*Ea}function Rx(i){return i*za}function Px(i){return(i&i-1)===0&&i!==0}function Lx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ux(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),h=o((t-n)/2),f=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function eo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ix={DEG2RAD:Ea,RAD2DEG:za,generateUUID:Rs,clamp:dn,euclideanModulo:zf,mapLinear:vx,inverseLerp:xx,lerp:Ta,damp:yx,pingpong:Sx,smoothstep:Mx,smootherstep:Ex,randInt:Tx,randFloat:bx,randFloatSpread:wx,seededRandom:Ax,degToRad:Cx,radToDeg:Rx,isPowerOfTwo:Px,ceilPowerOfTwo:Lx,floorPowerOfTwo:Dx,setQuaternionFromProperEuler:Ux,normalize:Nn,denormalize:eo};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,r,s,o,a,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=r[0],p=r[3],m=r[6],E=r[1],S=r[4],v=r[7],R=r[2],b=r[5],M=r[8];return s[0]=o*g+a*E+l*R,s[3]=o*p+a*S+l*b,s[6]=o*m+a*v+l*M,s[1]=c*g+u*E+d*R,s[4]=c*p+u*S+d*b,s[7]=c*m+u*v+d*M,s[2]=h*g+f*E+_*R,s[5]=h*p+f*S+_*b,s[8]=h*m+f*v+_*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,_=e*d+n*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(r*c-u*n)*g,t[2]=(a*n-r*o)*g,t[3]=h*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nu.makeScale(t,e)),this}rotate(t){return this.premultiply(nu.makeRotation(-t)),this}translate(t,e){return this.premultiply(nu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nu=new le;function Y_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nx(){const i=gc("canvas");return i.style.display="block",i}const Gd={};function sa(i){i in Gd||(Gd[i]=!0,console.warn(i))}function Fx(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ox(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bx(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xe={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=_o(i.r),i.g=_o(i.g),i.b=_o(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cr?Pc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Wd=[.64,.33,.3,.6,.15,.06],Xd=[.2126,.7152,.0722],$d=[.3127,.329],Yd=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qd=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[Po]:{primaries:Wd,whitePoint:$d,transfer:Pc,toXYZ:Yd,fromXYZ:qd,luminanceCoefficients:Xd,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:Wd,whitePoint:$d,transfer:we,toXYZ:Yd,fromXYZ:qd,luminanceCoefficients:Xd,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}});let Os;class kx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=gc("canvas")),Os.width=t.width,Os.height=t.height;const n=Os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fr(e[n]/255)*255):e[n]=fr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zx=0;class q_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hx=0;class Cn extends Lo{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=cs,r=cs,s=Ii,o=us,a=Ni,l=_r,c=Cn.DEFAULT_ANISOTROPY,u=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Rs(),this.name="",this.source=new q_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==F_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mh:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mh:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=F_;Cn.DEFAULT_ANISOTROPY=1;class Ye{constructor(t=0,e=0,n=0,r=1){Ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(f+1)/2,R=(m+1)/2,b=(u+h)/4,M=(d+g)/4,A=(_+p)/4;return S>v&&S>R?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=b/n,s=M/n):v>R?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=A/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=M/s,r=A/s),this.set(n,r,s,e),this}let E=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(d-g)/E,this.z=(h-u)/E,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vx extends Lo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new q_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends Vx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Z_ extends Cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gx extends Cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==h||c!==f||u!==_){let p=1-a;const m=l*h+c*f+u*_+d*g,E=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const R=Math.sqrt(S),b=Math.atan2(R,m*E);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}const v=a*E;if(l=l*p+h*v,c=c*p+f*v,u=u*p+_*v,d=d*p+g*v,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+u*d+l*f-c*h,t[e+1]=l*_+u*h+c*d-a*f,t[e+2]=c*_+u*f+a*h-l*d,t[e+3]=u*_-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),f=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ru.copy(this).projectOnVector(t),this.sub(ru)}reflect(t){return this.sub(ru.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new q,Zd=new Do;class Ps{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox)),cl.applyMatrix4(t.matrixWorld),this.union(cl)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),ul.subVectors(this.max,Ho),Bs.subVectors(t.a,Ho),ks.subVectors(t.b,Ho),zs.subVectors(t.c,Ho),Sr.subVectors(ks,Bs),Mr.subVectors(zs,ks),Yr.subVectors(Bs,zs);let e=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-Yr.z,Yr.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,Yr.z,0,-Yr.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-Yr.y,Yr.x,0];return!su(e,Bs,ks,zs,ul)||(e=[1,0,0,0,1,0,0,0,1],!su(e,Bs,ks,zs,ul))?!1:(hl.crossVectors(Sr,Mr),e=[hl.x,hl.y,hl.z],su(e,Bs,ks,zs,ul))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ji=[new q,new q,new q,new q,new q,new q,new q,new q],Ri=new q,cl=new Ps,Bs=new q,ks=new q,zs=new q,Sr=new q,Mr=new q,Yr=new q,Ho=new q,ul=new q,hl=new q,qr=new q;function su(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){qr.fromArray(i,s);const a=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=t.dot(qr),c=e.dot(qr),u=n.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Wx=new Ps,Vo=new q,ou=new q;class Ls{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wx.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const e=Vo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Vo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ou.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(ou)),this.expandByPoint(Vo.copy(t.center).sub(ou))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new q,au=new q,fl=new q,Er=new q,lu=new q,dl=new q,cu=new q;class Hf{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){au.copy(t).add(e).multiplyScalar(.5),fl.copy(e).sub(t).normalize(),Er.copy(this.origin).sub(au);const s=t.distanceTo(e)*.5,o=-this.direction.dot(fl),a=Er.dot(this.direction),l=-Er.dot(fl),c=Er.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(au).addScaledVector(fl,h),f}intersectSphere(t,e){ji.subVectors(t.center,this.origin);const n=ji.dot(this.direction),r=ji.dot(ji)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,n,r,s){lu.subVectors(e,t),dl.subVectors(n,t),cu.crossVectors(lu,dl);let o=this.direction.dot(cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Er.subVectors(this.origin,t);const l=a*this.direction.dot(dl.crossVectors(Er,dl));if(l<0)return null;const c=a*this.direction.dot(lu.cross(Er));if(c<0||l+c>o)return null;const u=-a*Er.dot(cu);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,n,r,s,o,a,l,c,u,d,h,f,_,g,p){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,d,h,f,_,g,p)}set(t,e,n,r,s,o,a,l,c,u,d,h,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Hs.setFromMatrixColumn(t,0).length(),s=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,_=a*u,g=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=h-g*c,e[9]=-a*l,e[2]=g-h*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,_=c*u,g=c*d;e[0]=h+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,_=c*u,g=c*d;e[0]=h-g*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,_=a*u,g=a*d;e[0]=l*u,e[4]=_*c-f,e[8]=h*c+g,e[1]=l*d,e[5]=g*c+h,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-h*d,e[8]=_*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+_,e[10]=h-g*d}else if(t.order==="XZY"){const h=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+g,e[5]=o*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*u,e[10]=g*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xx,t,$x)}lookAt(t,e,n){const r=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Tr.crossVectors(n,Qn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Tr.crossVectors(n,Qn)),Tr.normalize(),pl.crossVectors(Qn,Tr),r[0]=Tr.x,r[4]=pl.x,r[8]=Qn.x,r[1]=Tr.y,r[5]=pl.y,r[9]=Qn.y,r[2]=Tr.z,r[6]=pl.z,r[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],E=n[3],S=n[7],v=n[11],R=n[15],b=r[0],M=r[4],A=r[8],y=r[12],x=r[1],L=r[5],D=r[9],B=r[13],U=r[2],F=r[6],k=r[10],X=r[14],z=r[3],it=r[7],P=r[11],$=r[15];return s[0]=o*b+a*x+l*U+c*z,s[4]=o*M+a*L+l*F+c*it,s[8]=o*A+a*D+l*k+c*P,s[12]=o*y+a*B+l*X+c*$,s[1]=u*b+d*x+h*U+f*z,s[5]=u*M+d*L+h*F+f*it,s[9]=u*A+d*D+h*k+f*P,s[13]=u*y+d*B+h*X+f*$,s[2]=_*b+g*x+p*U+m*z,s[6]=_*M+g*L+p*F+m*it,s[10]=_*A+g*D+p*k+m*P,s[14]=_*y+g*B+p*X+m*$,s[3]=E*b+S*x+v*U+R*z,s[7]=E*M+S*L+v*F+R*it,s[11]=E*A+S*D+v*k+R*P,s[15]=E*y+S*B+v*X+R*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*f-n*l*f)+g*(+e*l*f-e*c*h+s*o*h-r*o*f+r*c*u-s*l*u)+p*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+m*(-r*a*u-e*l*d+e*a*h+r*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],E=d*p*c-g*h*c+g*l*f-a*p*f-d*l*m+a*h*m,S=_*h*c-u*p*c-_*l*f+o*p*f+u*l*m-o*h*m,v=u*g*c-_*d*c+_*a*f-o*g*f-u*a*m+o*d*m,R=_*d*l-u*g*l-_*a*h+o*g*h+u*a*p-o*d*p,b=e*E+n*S+r*v+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/b;return t[0]=E*M,t[1]=(g*h*s-d*p*s-g*r*f+n*p*f+d*r*m-n*h*m)*M,t[2]=(a*p*s-g*l*s+g*r*c-n*p*c-a*r*m+n*l*m)*M,t[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*f-n*l*f)*M,t[4]=S*M,t[5]=(u*p*s-_*h*s+_*r*f-e*p*f-u*r*m+e*h*m)*M,t[6]=(_*l*s-o*p*s-_*r*c+e*p*c+o*r*m-e*l*m)*M,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*f+e*l*f)*M,t[8]=v*M,t[9]=(_*d*s-u*g*s-_*n*f+e*g*f+u*n*m-e*d*m)*M,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*M,t[11]=(u*a*s-o*d*s-u*n*c+e*d*c+o*n*f-e*a*f)*M,t[12]=R*M,t[13]=(u*g*r-_*d*r+_*n*h-e*g*h-u*n*p+e*d*p)*M,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*p-e*a*p)*M,t[15]=(o*d*r-u*a*r+u*n*l-e*d*l-o*n*h+e*a*h)*M,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,_=s*d,g=o*u,p=o*d,m=a*d,E=l*c,S=l*u,v=l*d,R=n.x,b=n.y,M=n.z;return r[0]=(1-(g+m))*R,r[1]=(f+v)*R,r[2]=(_-S)*R,r[3]=0,r[4]=(f-v)*b,r[5]=(1-(h+m))*b,r[6]=(p+E)*b,r[7]=0,r[8]=(_+S)*M,r[9]=(p-E)*M,r[10]=(1-(h+g))*M,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Hs.set(r[0],r[1],r[2]).length();const o=Hs.set(r[4],r[5],r[6]).length(),a=Hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Pi.copy(this);const c=1/s,u=1/o,d=1/a;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=u,Pi.elements[5]*=u,Pi.elements[6]*=u,Pi.elements[8]*=d,Pi.elements[9]*=d,Pi.elements[10]*=d,e.setFromRotationMatrix(Pi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=cr){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),h=(n+r)/(n-r);let f,_;if(a===cr)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===_c)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=cr){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(o-s),h=(e+t)*c,f=(n+r)*u;let _,g;if(a===cr)_=(o+s)*d,g=-2*d;else if(a===_c)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hs=new q,Pi=new Le,Xx=new q(0,0,0),$x=new q(1,1,1),Tr=new q,pl=new q,Qn=new q,Kd=new Le,Jd=new Do;class qi{constructor(t=0,e=0,n=0,r=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yx=0;const jd=new q,Vs=new Do,Qi=new Le,ml=new q,Go=new q,qx=new q,Zx=new Do,Qd=new q(1,0,0),tp=new q(0,1,0),ep=new q(0,0,1),np={type:"added"},Kx={type:"removed"},Gs={type:"childadded",child:null},uu={type:"childremoved",child:null};class Rn extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new q,e=new qi,n=new Do,r=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new le}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Qd,t)}rotateY(t){return this.rotateOnAxis(tp,t)}rotateZ(t){return this.rotateOnAxis(ep,t)}translateOnAxis(t,e){return jd.copy(t).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qd,t)}translateY(t){return this.translateOnAxis(tp,t)}translateZ(t){return this.translateOnAxis(ep,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ml.copy(t):ml.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Go,ml,this.up):Qi.lookAt(ml,Go,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(np),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kx),uu.child=t,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(np),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Zx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new q(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new q,tr=new q,hu=new q,er=new q,Ws=new q,Xs=new q,ip=new q,fu=new q,du=new q,pu=new q,mu=new Ye,_u=new Ye,gu=new Ye;class Ui{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Li.subVectors(t,e),r.cross(Li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Li.subVectors(r,e),tr.subVectors(n,e),hu.subVectors(t,e);const o=Li.dot(Li),a=Li.dot(tr),l=Li.dot(hu),c=tr.dot(tr),u=tr.dot(hu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return mu.setScalar(0),_u.setScalar(0),gu.setScalar(0),mu.fromBufferAttribute(t,e),_u.fromBufferAttribute(t,n),gu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(mu,s.x),o.addScaledVector(_u,s.y),o.addScaledVector(gu,s.z),o}static isFrontFacing(t,e,n,r){return Li.subVectors(n,e),tr.subVectors(t,e),Li.cross(tr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Li.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ui.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ui.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ws.subVectors(r,n),Xs.subVectors(s,n),fu.subVectors(t,n);const l=Ws.dot(fu),c=Xs.dot(fu);if(l<=0&&c<=0)return e.copy(n);du.subVectors(t,r);const u=Ws.dot(du),d=Xs.dot(du);if(u>=0&&d<=u)return e.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ws,o);pu.subVectors(t,s);const f=Ws.dot(pu),_=Xs.dot(pu);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Xs,a);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return ip.subVectors(s,r),a=(d-u)/(d-u+(f-_)),e.copy(r).addScaledVector(ip,a);const m=1/(p+g+h);return o=g*m,a=h*m,e.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},_l={h:0,s:0,l:0};function vu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ye{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=xe.workingColorSpace){if(t=zf(t,1),e=dn(e,0,1),n=dn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=vu(o,s,t+1/3),this.g=vu(o,s,t),this.b=vu(o,s,t-1/3)}return xe.toWorkingColorSpace(this,r),this}setStyle(t,e=ri){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ri){const n=J_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return xe.fromWorkingColorSpace(yn.copy(this),t),Math.round(dn(yn.r*255,0,255))*65536+Math.round(dn(yn.g*255,0,255))*256+Math.round(dn(yn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,s=yn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=ri){xe.fromWorkingColorSpace(yn.copy(this),t);const e=yn.r,n=yn.g,r=yn.b;return t!==ri?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(br),this.setHSL(br.h+t,br.s+e,br.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(br),t.getHSL(_l);const n=Ta(br.h,_l.h,e),r=Ta(br.s,_l.s,e),s=Ta(br.l,_l.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new ye;ye.NAMES=J_;let Jx=0;class Uo extends Lo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Rs(),this.name="",this.blending=xs,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=fh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==Vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hh&&(n.blendSrc=this.blendSrc),this.blendDst!==fh&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vc extends Uo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new q,gl=new Xt;class bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zd,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gl.fromBufferAttribute(this,e),gl.applyMatrix3(t),this.setXY(e,gl.x,gl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=eo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=eo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=eo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=eo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=eo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),r=Nn(r,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zd&&(t.usage=this.usage),t}}class j_ extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Q_ extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fi extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jx=0;const gi=new Le,xu=new Rn,$s=new q,ti=new Ps,Wo=new Ps,ln=new q;class di extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Y_(t)?Q_:j_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return xu.lookAt(t),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fi(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ti.min,Wo.min),ti.expandByPoint(ln),ln.addVectors(ti.max,Wo.max),ti.expandByPoint(ln)):(ti.expandByPoint(Wo.min),ti.expandByPoint(Wo.max))}ti.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ln.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ln));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),ln.add($s)),r=Math.max(r,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new q,l[A]=new q;const c=new q,u=new q,d=new q,h=new Xt,f=new Xt,_=new Xt,g=new q,p=new q;function m(A,y,x){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),h.fromBufferAttribute(s,A),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),a[A].add(g),a[y].add(g),a[x].add(g),l[A].add(p),l[y].add(p),l[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,y=E.length;A<y;++A){const x=E[A],L=x.start,D=x.count;for(let B=L,U=L+D;B<U;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new q,v=new q,R=new q,b=new q;function M(A){R.fromBufferAttribute(r,A),b.copy(R);const y=a[A];S.copy(y),S.sub(R.multiplyScalar(R.dot(y))).normalize(),v.crossVectors(b,y);const L=v.dot(l[A])<0?-1:1;o.setXYZW(A,S.x,S.y,S.z,L)}for(let A=0,y=E.length;A<y;++A){const x=E[A],L=x.start,D=x.count;for(let B=L,U=L+D;B<U;B+=3)M(t.getX(B+0)),M(t.getX(B+1)),M(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new bn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new di,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rp=new Le,Zr=new Hf,vl=new Ls,sp=new q,xl=new q,yl=new q,Sl=new q,yu=new q,Ml=new q,op=new q,El=new q;class wi extends Rn{constructor(t=new di,e=new vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(yu.fromBufferAttribute(d,t),o?Ml.addScaledVector(yu,u):Ml.addScaledVector(yu.sub(e),u))}e.add(Ml)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(s),Zr.copy(t.ray).recast(t.near),!(vl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(vl,sp)===null||Zr.origin.distanceToSquared(sp)>(t.far-t.near)**2))&&(rp.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(rp),!(n.boundingBox!==null&&Zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],E=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=E,R=S;v<R;v+=3){const b=a.getX(v),M=a.getX(v+1),A=a.getX(v+2);r=Tl(this,m,t,n,c,u,d,b,M,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const E=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);r=Tl(this,o,t,n,c,u,d,E,S,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],E=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=E,R=S;v<R;v+=3){const b=v,M=v+1,A=v+2;r=Tl(this,m,t,n,c,u,d,b,M,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const E=p,S=p+1,v=p+2;r=Tl(this,o,t,n,c,u,d,E,S,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Qx(i,t,e,n,r,s,o,a){let l;if(t.side===Jn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Vr,a),l===null)return null;El.copy(a),El.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(El);return c<e.near||c>e.far?null:{distance:c,point:El.clone(),object:i}}function Tl(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,xl),i.getVertexPosition(l,yl),i.getVertexPosition(c,Sl);const u=Qx(i,t,e,n,xl,yl,Sl,op);if(u){const d=new q;Ui.getBarycoord(op,xl,yl,Sl,d),r&&(u.uv=Ui.getInterpolatedAttribute(r,a,l,c,d,new Xt)),s&&(u.uv1=Ui.getInterpolatedAttribute(s,a,l,c,d,new Xt)),o&&(u.normal=Ui.getInterpolatedAttribute(o,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};Ui.getNormal(xl,yl,Sl,h.normal),u.face=h,u.barycoord=d}return u}class $a extends di{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Fi(c,3)),this.setAttribute("normal",new Fi(u,3)),this.setAttribute("uv",new Fi(d,2));function _(g,p,m,E,S,v,R,b,M,A,y){const x=v/M,L=R/A,D=v/2,B=R/2,U=b/2,F=M+1,k=A+1;let X=0,z=0;const it=new q;for(let P=0;P<k;P++){const $=P*L-B;for(let st=0;st<F;st++){const Rt=st*x-D;it[g]=Rt*E,it[p]=$*S,it[m]=U,c.push(it.x,it.y,it.z),it[g]=0,it[p]=0,it[m]=b>0?1:-1,u.push(it.x,it.y,it.z),d.push(st/M),d.push(1-P/A),X+=1}}for(let P=0;P<A;P++)for(let $=0;$<M;$++){const st=h+$+F*P,Rt=h+$+F*(P+1),V=h+($+1)+F*(P+1),Q=h+($+1)+F*P;l.push(st,Rt,Q),l.push(Rt,V,Q),z+=6}a.addGroup(f,z,y),f+=z,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ro(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function On(i){const t={};for(let e=0;e<i.length;e++){const n=Ro(i[e]);for(const r in n)t[r]=n[r]}return t}function ty(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tg(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const ey={clone:Ro,merge:On};var ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends Uo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ny,this.fragmentShader=iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ro(t.uniforms),this.uniformsGroups=ty(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eg extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=cr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new q,ap=new Xt,lp=new Xt;class Si extends eg{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wr.x,wr.y).multiplyScalar(-t/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-t/wr.z)}getViewSize(t,e){return this.getViewBounds(t,ap,lp),e.subVectors(lp,ap)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ys=-90,qs=1;class ry extends Rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Si(Ys,qs,t,e);r.layers=this.layers,this.add(r);const s=new Si(Ys,qs,t,e);s.layers=this.layers,this.add(s);const o=new Si(Ys,qs,t,e);o.layers=this.layers,this.add(o);const a=new Si(Ys,qs,t,e);a.layers=this.layers,this.add(a);const l=new Si(Ys,qs,t,e);l.layers=this.layers,this.add(l);const c=new Si(Ys,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===cr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_c)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ng extends Cn{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:bo,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sy extends bs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ng(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $a(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:Ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Or});s.uniforms.tEquirect.value=e;const o=new wi(r,s),a=e.minFilter;return e.minFilter===us&&(e.minFilter=Ii),new ry(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Su=new q,oy=new q,ay=new le;class ns{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Su.subVectors(n,e).cross(oy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Su),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ay.getNormalMatrix(t),r=this.coplanarPoint(Su).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Ls,bl=new q;class ig{constructor(t=new ns,e=new ns,n=new ns,r=new ns,s=new ns,o=new ns){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cr){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],_=r[9],g=r[10],p=r[11],m=r[12],E=r[13],S=r[14],v=r[15];if(n[0].setComponents(l-s,h-c,p-f,v-m).normalize(),n[1].setComponents(l+s,h+c,p+f,v+m).normalize(),n[2].setComponents(l+o,h+u,p+_,v+E).normalize(),n[3].setComponents(l-o,h-u,p-_,v-E).normalize(),n[4].setComponents(l-a,h-d,p-g,v-S).normalize(),e===cr)n[5].setComponents(l+a,h+d,p+g,v+S).normalize();else if(e===_c)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(t){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(bl.x=r.normal.x>0?t.max.x:t.min.x,bl.y=r.normal.y>0?t.max.y:t.min.y,bl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(bl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rg(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ly(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ya extends di{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=t/a,h=e/l,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const E=m*h-o;for(let S=0;S<c;S++){const v=S*d-s;_.push(v,-E,0),g.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){const S=E+c*m,v=E+c*(m+1),R=E+1+c*(m+1),b=E+1+c*m;f.push(S,v,b),f.push(v,R,b)}this.setIndex(f),this.setAttribute("position",new Fi(_,3)),this.setAttribute("normal",new Fi(g,3)),this.setAttribute("uv",new Fi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.width,t.height,t.widthSegments,t.heightSegments)}}var cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,my=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,My=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ey=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,By=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ES=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,US=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$S=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_M=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:cy,alphahash_pars_fragment:uy,alphamap_fragment:hy,alphamap_pars_fragment:fy,alphatest_fragment:dy,alphatest_pars_fragment:py,aomap_fragment:my,aomap_pars_fragment:_y,batching_pars_vertex:gy,batching_vertex:vy,begin_vertex:xy,beginnormal_vertex:yy,bsdfs:Sy,iridescence_fragment:My,bumpmap_pars_fragment:Ey,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:wy,clipping_planes_vertex:Ay,color_fragment:Cy,color_pars_fragment:Ry,color_pars_vertex:Py,color_vertex:Ly,common:Dy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Ny,displacementmap_vertex:Fy,emissivemap_fragment:Oy,emissivemap_pars_fragment:By,colorspace_fragment:ky,colorspace_pars_fragment:zy,envmap_fragment:Hy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Gy,envmap_pars_vertex:Wy,envmap_physical_pars_fragment:eS,envmap_vertex:Xy,fog_vertex:$y,fog_pars_vertex:Yy,fog_fragment:qy,fog_pars_fragment:Zy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:Jy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Qy,lights_pars_begin:tS,lights_toon_fragment:nS,lights_toon_pars_fragment:iS,lights_phong_fragment:rS,lights_phong_pars_fragment:sS,lights_physical_fragment:oS,lights_physical_pars_fragment:aS,lights_fragment_begin:lS,lights_fragment_maps:cS,lights_fragment_end:uS,logdepthbuf_fragment:hS,logdepthbuf_pars_fragment:fS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:pS,map_fragment:mS,map_pars_fragment:_S,map_particle_fragment:gS,map_particle_pars_fragment:vS,metalnessmap_fragment:xS,metalnessmap_pars_fragment:yS,morphinstance_vertex:SS,morphcolor_vertex:MS,morphnormal_vertex:ES,morphtarget_pars_vertex:TS,morphtarget_vertex:bS,normal_fragment_begin:wS,normal_fragment_maps:AS,normal_pars_fragment:CS,normal_pars_vertex:RS,normal_vertex:PS,normalmap_pars_fragment:LS,clearcoat_normal_fragment_begin:DS,clearcoat_normal_fragment_maps:US,clearcoat_pars_fragment:IS,iridescence_pars_fragment:NS,opaque_fragment:FS,packing:OS,premultiplied_alpha_fragment:BS,project_vertex:kS,dithering_fragment:zS,dithering_pars_fragment:HS,roughnessmap_fragment:VS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:WS,shadowmap_pars_vertex:XS,shadowmap_vertex:$S,shadowmask_pars_fragment:YS,skinbase_vertex:qS,skinning_pars_vertex:ZS,skinning_vertex:KS,skinnormal_vertex:JS,specularmap_fragment:jS,specularmap_pars_fragment:QS,tonemapping_fragment:tM,tonemapping_pars_fragment:eM,transmission_fragment:nM,transmission_pars_fragment:iM,uv_pars_fragment:rM,uv_pars_vertex:sM,uv_vertex:oM,worldpos_vertex:aM,background_vert:lM,background_frag:cM,backgroundCube_vert:uM,backgroundCube_frag:hM,cube_vert:fM,cube_frag:dM,depth_vert:pM,depth_frag:mM,distanceRGBA_vert:_M,distanceRGBA_frag:gM,equirect_vert:vM,equirect_frag:xM,linedashed_vert:yM,linedashed_frag:SM,meshbasic_vert:MM,meshbasic_frag:EM,meshlambert_vert:TM,meshlambert_frag:bM,meshmatcap_vert:wM,meshmatcap_frag:AM,meshnormal_vert:CM,meshnormal_frag:RM,meshphong_vert:PM,meshphong_frag:LM,meshphysical_vert:DM,meshphysical_frag:UM,meshtoon_vert:IM,meshtoon_frag:NM,points_vert:FM,points_frag:OM,shadow_vert:BM,shadow_frag:kM,sprite_vert:zM,sprite_frag:HM},Dt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},zi={basic:{uniforms:On([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:On([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:On([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:On([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:On([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:On([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:On([Dt.points,Dt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:On([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:On([Dt.common,Dt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:On([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:On([Dt.sprite,Dt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:On([Dt.common,Dt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:On([Dt.lights,Dt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};zi.physical={uniforms:On([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const wl={r:0,b:0,g:0},Jr=new qi,VM=new Le;function GM(i,t,e,n,r,s,o){const a=new ye(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function g(E){let S=!1;const v=_(E);v===null?m(a,l):v&&v.isColor&&(m(v,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,S){const v=_(S);v&&(v.isCubeTexture||v.mapping===Rc)?(u===void 0&&(u=new wi(new $a(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Ro(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jr.copy(S.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(VM.makeRotationFromEuler(Jr)),u.material.toneMapped=xe.getTransfer(v.colorSpace)!==we,(d!==v||h!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new wi(new Ya(2,2),new gr({name:"BackgroundMaterial",uniforms:Ro(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=xe.getTransfer(v.colorSpace)!==we,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,S){E.getRGB(wl,tg(i)),n.buffers.color.setClear(wl.r,wl.g,wl.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:g,addToRenderList:p}}function WM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(x,L,D,B,U){let F=!1;const k=d(B,D,L);s!==k&&(s=k,c(s.object)),F=f(x,B,D,U),F&&_(x,B,D,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(x,L,D,B),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,L,D){const B=D.wireframe===!0;let U=n[x.id];U===void 0&&(U={},n[x.id]=U);let F=U[L.id];F===void 0&&(F={},U[L.id]=F);let k=F[B];return k===void 0&&(k=h(l()),F[B]=k),k}function h(x){const L=[],D=[],B=[];for(let U=0;U<e;U++)L[U]=0,D[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,L,D,B){const U=s.attributes,F=L.attributes;let k=0;const X=D.getAttributes();for(const z in X)if(X[z].location>=0){const P=U[z];let $=F[z];if($===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),P===void 0||P.attribute!==$||$&&P.data!==$.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function _(x,L,D,B){const U={},F=L.attributes;let k=0;const X=D.getAttributes();for(const z in X)if(X[z].location>=0){let P=F[z];P===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(P=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(P=x.instanceColor));const $={};$.attribute=P,P&&P.data&&($.data=P.data),U[z]=$,k++}s.attributes=U,s.attributesNum=k,s.index=B}function g(){const x=s.newAttributes;for(let L=0,D=x.length;L<D;L++)x[L]=0}function p(x){m(x,0)}function m(x,L){const D=s.newAttributes,B=s.enabledAttributes,U=s.attributeDivisors;D[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),U[x]!==L&&(i.vertexAttribDivisor(x,L),U[x]=L)}function E(){const x=s.newAttributes,L=s.enabledAttributes;for(let D=0,B=L.length;D<B;D++)L[D]!==x[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function S(x,L,D,B,U,F,k){k===!0?i.vertexAttribIPointer(x,L,D,U,F):i.vertexAttribPointer(x,L,D,B,U,F)}function v(x,L,D,B){g();const U=B.attributes,F=D.getAttributes(),k=L.defaultAttributeValues;for(const X in F){const z=F[X];if(z.location>=0){let it=U[X];if(it===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const P=it.normalized,$=it.itemSize,st=t.get(it);if(st===void 0)continue;const Rt=st.buffer,V=st.type,Q=st.bytesPerElement,ut=V===i.INT||V===i.UNSIGNED_INT||it.gpuType===Uf;if(it.isInterleavedBufferAttribute){const I=it.data,j=I.stride,nt=it.offset;if(I.isInstancedInterleavedBuffer){for(let ht=0;ht<z.locationSize;ht++)m(z.location+ht,I.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ht=0;ht<z.locationSize;ht++)p(z.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let ht=0;ht<z.locationSize;ht++)S(z.location+ht,$/z.locationSize,V,P,j*Q,(nt+$/z.locationSize*ht)*Q,ut)}else{if(it.isInstancedBufferAttribute){for(let I=0;I<z.locationSize;I++)m(z.location+I,it.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let I=0;I<z.locationSize;I++)p(z.location+I);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let I=0;I<z.locationSize;I++)S(z.location+I,$/z.locationSize,V,P,$*Q,$/z.locationSize*I*Q,ut)}}else if(k!==void 0){const P=k[X];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(z.location,P);break;case 3:i.vertexAttrib3fv(z.location,P);break;case 4:i.vertexAttrib4fv(z.location,P);break;default:i.vertexAttrib1fv(z.location,P)}}}}E()}function R(){A();for(const x in n){const L=n[x];for(const D in L){const B=L[D];for(const U in B)u(B[U].object),delete B[U];delete L[D]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const D in L){const B=L[D];for(const U in B)u(B[U].object),delete B[U];delete L[D]}delete n[x.id]}function M(x){for(const L in n){const D=n[L];if(D[x.id]===void 0)continue;const B=D[x.id];for(const U in B)u(B[U].object),delete B[U];delete D[x.id]}}function A(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function XM(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*h[g];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $M(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==Ni&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const A=M===Xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==_r&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Xi&&!A)}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:R,maxSamples:b}}function YM(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new ns,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,S=E*4;let v=m.clippingState||null;l.value=v,v=u(_,h,S,f);for(let R=0;R!==S;++R)v[R]=e[R];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=f;S!==g;++S,v+=4)o.copy(d[S]).applyMatrix4(E,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function qM(i){let t=new WeakMap;function e(o,a){return a===yh?o.mapping=bo:a===Sh&&(o.mapping=wo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yh||a===Sh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sy(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class sg extends eg{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const so=4,cp=[.125,.215,.35,.446,.526,.582],ss=20,Mu=new sg,up=new ye;let Eu=null,Tu=0,bu=0,wu=!1;const is=(1+Math.sqrt(5))/2,Zs=1/is,hp=[new q(-is,Zs,0),new q(is,Zs,0),new q(-Zs,0,is),new q(Zs,0,is),new q(0,is,-Zs),new q(0,is,Zs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class fp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eu,Tu,bu),this._renderer.xr.enabled=wu,t.scissorTest=!1,Al(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bo||t.mapping===wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Xa,format:Ni,colorSpace:Po,depthBuffer:!1},r=dp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZM(s)),this._blurMaterial=KM(s,t,e)}return r}_compileMaterial(t){const e=new wi(this._lodPlanes[0],t);this._renderer.compile(e,Mu)}_sceneToCubeUV(t,e,n,r){const a=new Si(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(up),u.toneMapping=Br,u.autoClear=!1;const f=new vc({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),_=new wi(new $a,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(up),g=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):E===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;Al(r,E*S,m>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===bo||t.mapping===wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Al(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Mu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hp[(r-s-1)%hp.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new wi(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ss-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):ss;p>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ss}`);const m=[];let E=0;for(let M=0;M<ss;++M){const A=M/g,y=Math.exp(-A*A/2);m.push(y),M===0?E+=y:M<p&&(E+=2*y)}for(let M=0;M<m.length;M++)m[M]=m[M]/E;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-n;const v=this._sizeLods[r],R=3*v*(r>S-so?r-S+so:0),b=4*(this._cubeSize-v);Al(e,R,b,3*v,2*v),l.setRenderTarget(e),l.render(d,Mu)}}function ZM(i){const t=[],e=[],n=[];let r=i;const s=i-so+1+cp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-so?l=cp[o-i+so-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,g=3,p=2,m=1,E=new Float32Array(g*_*f),S=new Float32Array(p*_*f),v=new Float32Array(m*_*f);for(let b=0;b<f;b++){const M=b%3*2/3-1,A=b>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];E.set(y,g*_*b),S.set(h,p*_*b);const x=[b,b,b,b,b,b];v.set(x,m*_*b)}const R=new di;R.setAttribute("position",new bn(E,g)),R.setAttribute("uv",new bn(S,p)),R.setAttribute("faceIndex",new bn(v,m)),t.push(R),r>so&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dp(i,t,e){const n=new bs(i,t,e);return n.texture.mapping=Rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Al(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function KM(i,t,e){const n=new Float32Array(ss),r=new q(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function pp(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function mp(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yh||l===Sh,u=l===bo||l===wo;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new fp(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(e===null&&(e=new fp(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&sa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function QM(i,t,e,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)t.update(h[_],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const E=f.array;g=f.version;for(let S=0,v=E.length;S<v;S+=3){const R=E[S+0],b=E[S+1],M=E[S+2];h.push(R,b,b,M,M,R)}}else if(_!==void 0){const E=_.array;g=_.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const R=S+0,b=S+1,M=S+2;h.push(R,b,b,M,M,R)}}else return;const p=new(Y_(h)?Q_:j_)(h,1);p.version=g;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function t1(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,_){_!==0&&(i.drawElementsInstanced(n,f,s,h*o,_),e.update(f,n,_))}function u(h,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,n,1)}function d(h,f,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,g,0,_);let m=0;for(let E=0;E<_;E++)m+=f[E]*g[E];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function e1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function n1(i,t,e){const n=new WeakMap,r=new Ye;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let y=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let v=a.attributes.position.count*S,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*R*4*d),M=new Z_(b,v,R,d);M.type=Xi,M.needsUpdate=!0;const A=S*4;for(let x=0;x<d;x++){const L=p[x],D=m[x],B=E[x],U=v*R*4*x;for(let F=0;F<L.count;F++){const k=F*A;f===!0&&(r.fromBufferAttribute(L,F),b[U+k+0]=r.x,b[U+k+1]=r.y,b[U+k+2]=r.z,b[U+k+3]=0),_===!0&&(r.fromBufferAttribute(D,F),b[U+k+4]=r.x,b[U+k+5]=r.y,b[U+k+6]=r.z,b[U+k+7]=0),g===!0&&(r.fromBufferAttribute(B,F),b[U+k+8]=r.x,b[U+k+9]=r.y,b[U+k+10]=r.z,b[U+k+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:M,size:new Xt(v,R)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function i1(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class og extends Cn{constructor(t,e,n,r,s,o,a,l,c,u=mo){if(u!==mo&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mo&&(n=Ts),n===void 0&&u===Co&&(n=Ao),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fi,this.minFilter=l!==void 0?l:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ag=new Cn,_p=new og(1,1),lg=new Z_,cg=new Gx,ug=new ng,gp=[],vp=[],xp=new Float32Array(16),yp=new Float32Array(9),Sp=new Float32Array(4);function Io(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=gp[r];if(s===void 0&&(s=new Float32Array(r),gp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lc(i,t){let e=vp[t];e===void 0&&(e=new Int32Array(t),vp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function r1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function o1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function a1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function l1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;Sp.set(n),i.uniformMatrix2fv(this.addr,!1,Sp),an(e,n)}}function c1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;yp.set(n),i.uniformMatrix3fv(this.addr,!1,yp),an(e,n)}}function u1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;xp.set(n),i.uniformMatrix4fv(this.addr,!1,xp),an(e,n)}}function h1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function d1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function p1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function m1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function g1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function v1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function x1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_p.compareFunction=$_,s=_p):s=ag,e.setTexture2D(t||s,r)}function y1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||cg,r)}function S1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ug,r)}function M1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||lg,r)}function E1(i){switch(i){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return h1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return _1;case 36295:return g1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return M1}}function T1(i,t){i.uniform1fv(this.addr,t)}function b1(i,t){const e=Io(t,this.size,2);i.uniform2fv(this.addr,e)}function w1(i,t){const e=Io(t,this.size,3);i.uniform3fv(this.addr,e)}function A1(i,t){const e=Io(t,this.size,4);i.uniform4fv(this.addr,e)}function C1(i,t){const e=Io(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R1(i,t){const e=Io(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P1(i,t){const e=Io(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L1(i,t){i.uniform1iv(this.addr,t)}function D1(i,t){i.uniform2iv(this.addr,t)}function U1(i,t){i.uniform3iv(this.addr,t)}function I1(i,t){i.uniform4iv(this.addr,t)}function N1(i,t){i.uniform1uiv(this.addr,t)}function F1(i,t){i.uniform2uiv(this.addr,t)}function O1(i,t){i.uniform3uiv(this.addr,t)}function B1(i,t){i.uniform4uiv(this.addr,t)}function k1(i,t,e){const n=this.cache,r=t.length,s=Lc(e,r);on(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ag,s[o])}function z1(i,t,e){const n=this.cache,r=t.length,s=Lc(e,r);on(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||cg,s[o])}function H1(i,t,e){const n=this.cache,r=t.length,s=Lc(e,r);on(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ug,s[o])}function V1(i,t,e){const n=this.cache,r=t.length,s=Lc(e,r);on(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||lg,s[o])}function G1(i){switch(i){case 5126:return T1;case 35664:return b1;case 35665:return w1;case 35666:return A1;case 35674:return C1;case 35675:return R1;case 35676:return P1;case 5124:case 35670:return L1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return I1;case 5125:return N1;case 36294:return F1;case 36295:return O1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}class W1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E1(e.type)}}class X1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G1(e.type)}}class $1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function Mp(i,t){i.seq.push(t),i.map[t.id]=t}function Y1(i,t,e){const n=i.name,r=n.length;for(Au.lastIndex=0;;){const s=Au.exec(n),o=Au.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Mp(e,c===void 0?new W1(a,i,t):new X1(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new $1(a),Mp(e,d)),e=d}}}class tc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Y1(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ep(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const q1=37297;let Z1=0;function K1(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Tp=new le;function J1(i){xe._getMatrix(Tp,xe.workingColorSpace,i);const t=`mat3( ${Tp.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case Pc:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bp(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+K1(i.getShaderSource(t),o)}else return r}function j1(i,t){const e=J1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q1(i,t){let e;switch(t){case Qv:e="Linear";break;case tx:e="Reinhard";break;case ex:e="Cineon";break;case nx:e="ACESFilmic";break;case rx:e="AgX";break;case sx:e="Neutral";break;case ix:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cl=new q;function tE(){xe.getLuminanceCoefficients(Cl);const i=Cl.x.toFixed(4),t=Cl.y.toFixed(4),e=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function nE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function oa(i){return i!==""}function wp(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ap(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(i){return i.replace(rE,oE)}const sE=new Map;function oE(i,t){let e=ce[t];if(e===void 0){const n=sE.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kh(e)}const aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(i){return i.replace(aE,lE)}function lE(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===I_?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dv?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ir&&(t="SHADOWMAP_TYPE_VSM"),t}function uE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bo:case wo:t="ENVMAP_TYPE_CUBE";break;case Rc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wo:t="ENVMAP_MODE_REFRACTION";break}return t}function fE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case N_:t="ENVMAP_BLENDING_MULTIPLY";break;case Jv:t="ENVMAP_BLENDING_MIX";break;case jv:t="ENVMAP_BLENDING_ADD";break}return t}function dE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pE(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=cE(e),c=uE(e),u=hE(e),d=fE(e),h=dE(e),f=eE(e),_=nE(s),g=r.createProgram();let p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(oa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(oa).join(`
`),m.length>0&&(m+=`
`)):(p=[Rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),m=[Rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Br?"#define TONE_MAPPING":"",e.toneMapping!==Br?ce.tonemapping_pars_fragment:"",e.toneMapping!==Br?Q1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,j1("linearToOutputTexel",e.outputColorSpace),tE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),o=Kh(o),o=wp(o,e),o=Ap(o,e),a=Kh(a),a=wp(a,e),a=Ap(a,e),o=Cp(o),a=Cp(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=E+p+o,v=E+m+a,R=Ep(r,r.VERTEX_SHADER,S),b=Ep(r,r.FRAGMENT_SHADER,v);r.attachShader(g,R),r.attachShader(g,b),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function M(L){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(R).trim(),U=r.getShaderInfoLog(b).trim();let F=!0,k=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,R,b);else{const X=bp(r,R,"vertex"),z=bp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+X+`
`+z)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(B===""||U==="")&&(k=!1);k&&(L.diagnostics={runnable:F,programLog:D,vertexShader:{log:B,prefix:p},fragmentShader:{log:U,prefix:m}})}r.deleteShader(R),r.deleteShader(b),A=new tc(r,g),y=iE(r,g)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let y;this.getAttributes=function(){return y===void 0&&M(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,q1)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z1++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=b,this}let mE=0;class _E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gE(t),e.set(t,n)),n}}class gE{constructor(t){this.id=mE++,this.code=t,this.usedTimes=0}}function vE(i,t,e,n,r,s,o){const a=new K_,l=new _E,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,x,L,D,B){const U=D.fog,F=B.geometry,k=y.isMeshStandardMaterial?D.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),z=X&&X.mapping===Rc?X.image.height:null,it=_[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const P=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$=P!==void 0?P.length:0;let st=0;F.morphAttributes.position!==void 0&&(st=1),F.morphAttributes.normal!==void 0&&(st=2),F.morphAttributes.color!==void 0&&(st=3);let Rt,V,Q,ut;if(it){const at=zi[it];Rt=at.vertexShader,V=at.fragmentShader}else Rt=y.vertexShader,V=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),ut=l.getFragmentShaderID(y);const I=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),nt=B.isInstancedMesh===!0,ht=B.isBatchedMesh===!0,Mt=!!y.map,mt=!!y.matcap,Ut=!!X,O=!!y.aoMap,ee=!!y.lightMap,kt=!!y.bumpMap,W=!!y.normalMap,Pt=!!y.displacementMap,ne=!!y.emissiveMap,Lt=!!y.metalnessMap,C=!!y.roughnessMap,T=y.anisotropy>0,Z=y.clearcoat>0,Y=y.dispersion>0,ot=y.iridescence>0,rt=y.sheen>0,Et=y.transmission>0,vt=T&&!!y.anisotropyMap,wt=Z&&!!y.clearcoatMap,Yt=Z&&!!y.clearcoatNormalMap,dt=Z&&!!y.clearcoatRoughnessMap,St=ot&&!!y.iridescenceMap,Wt=ot&&!!y.iridescenceThicknessMap,Vt=rt&&!!y.sheenColorMap,It=rt&&!!y.sheenRoughnessMap,ie=!!y.specularMap,qt=!!y.specularColorMap,me=!!y.specularIntensityMap,N=Et&&!!y.transmissionMap,Tt=Et&&!!y.thicknessMap,tt=!!y.gradientMap,lt=!!y.alphaMap,bt=y.alphaTest>0,At=!!y.alphaHash,Kt=!!y.extensions;let et=Br;y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(et=i.toneMapping);const ct={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Rt,fragmentShader:V,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ht,batchingColor:ht&&B._colorsTexture!==null,instancing:nt,instancingColor:nt&&B.instanceColor!==null,instancingMorph:nt&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:I===null?i.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Po,alphaToCoverage:!!y.alphaToCoverage,map:Mt,matcap:mt,envMap:Ut,envMapMode:Ut&&X.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:ee,bumpMap:kt,normalMap:W,displacementMap:h&&Pt,emissiveMap:ne,normalMapObjectSpace:W&&y.normalMapType===ux,normalMapTangentSpace:W&&y.normalMapType===cx,metalnessMap:Lt,roughnessMap:C,anisotropy:T,anisotropyMap:vt,clearcoat:Z,clearcoatMap:wt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:dt,dispersion:Y,iridescence:ot,iridescenceMap:St,iridescenceThicknessMap:Wt,sheen:rt,sheenColorMap:Vt,sheenRoughnessMap:It,specularMap:ie,specularColorMap:qt,specularIntensityMap:me,transmission:Et,transmissionMap:N,thicknessMap:Tt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===xs&&y.alphaToCoverage===!1,alphaMap:lt,alphaTest:bt,alphaHash:At,combine:y.combine,mapUv:Mt&&g(y.map.channel),aoMapUv:O&&g(y.aoMap.channel),lightMapUv:ee&&g(y.lightMap.channel),bumpMapUv:kt&&g(y.bumpMap.channel),normalMapUv:W&&g(y.normalMap.channel),displacementMapUv:Pt&&g(y.displacementMap.channel),emissiveMapUv:ne&&g(y.emissiveMap.channel),metalnessMapUv:Lt&&g(y.metalnessMap.channel),roughnessMapUv:C&&g(y.roughnessMap.channel),anisotropyMapUv:vt&&g(y.anisotropyMap.channel),clearcoatMapUv:wt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&g(y.sheenRoughnessMap.channel),specularMapUv:ie&&g(y.specularMap.channel),specularColorMapUv:qt&&g(y.specularColorMap.channel),specularIntensityMapUv:me&&g(y.specularIntensityMap.channel),transmissionMapUv:N&&g(y.transmissionMap.channel),thicknessMapUv:Tt&&g(y.thicknessMap.channel),alphaMapUv:lt&&g(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(W||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Mt||lt),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:j,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:st,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:Mt&&y.map.isVideoTexture===!0&&xe.getTransfer(y.map.colorSpace)===we,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&xe.getTransfer(y.emissiveMap.colorSpace)===we,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vi,flipSided:y.side===Jn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&y.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)x.push(L),x.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(E(x,y),S(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const x=_[y.type];let L;if(x){const D=zi[x];L=ey.clone(D.uniforms)}else L=y.uniforms;return L}function R(y,x){let L;for(let D=0,B=u.length;D<B;D++){const U=u[D];if(U.cacheKey===x){L=U,++L.usedTimes;break}}return L===void 0&&(L=new pE(i,x,y,s),u.push(L)),L}function b(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function M(y){l.remove(y)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:R,releaseProgram:b,releaseShaderCache:M,programs:u,dispose:A}}function xE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function yE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lp(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,h,f,_,g,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=g,m.group=p),t++,m}function a(d,h,f,_,g,p){const m=o(d,h,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):e.push(m)}function l(d,h,f,_,g,p){const m=o(d,h,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):e.unshift(m)}function c(d,h){e.length>1&&e.sort(d||yE),n.length>1&&n.sort(h||Pp),r.length>1&&r.sort(h||Pp)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function SE(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Lp,i.set(n,[o])):r>=s.length?(o=new Lp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ME(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new ye};break;case"SpotLight":e={position:new q,direction:new q,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function EE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let TE=0;function bE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wE(i){const t=new ME,e=EE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,s=new Le,o=new Le;function a(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,E=0,S=0,v=0,R=0,b=0,M=0;c.sort(bE);for(let y=0,x=c.length;y<x;y++){const L=c[y],D=L.color,B=L.intensity,U=L.distance,F=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=D.r*B,d+=D.g*B,h+=D.b*B;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],B);M++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,z=e.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=L.shadow.matrix,E++}n.directional[f]=k,f++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(D).multiplyScalar(B),k.distance=U,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[g]=k;const X=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,X.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[g]=X.matrix,L.castShadow){const z=e.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=F,v++}g++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(D).multiplyScalar(B),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=k,p++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const X=L.shadow,z=e.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=F,n.pointShadowMatrix[_]=L.shadow.matrix,S++}n.point[_]=k,_++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(B),k.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==E||A.numPointShadows!==S||A.numSpotShadows!==v||A.numSpotMaps!==R||A.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=M,A.directionalLength=f,A.pointLength=_,A.spotLength=g,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=E,A.numPointShadows=S,A.numSpotShadows=v,A.numSpotMaps=R,A.numLightProbes=M,n.version=TE++)}function l(c,u){let d=0,h=0,f=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const S=c[m];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Dp(i){const t=new wE(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AE(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Dp(i),t.set(r,[a])):s>=o.length?(a=new Dp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class CE extends Uo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class RE extends Uo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DE(i,t,e){let n=new ig;const r=new Xt,s=new Xt,o=new Ye,a=new CE({depthPacking:lx}),l=new RE,c={},u=e.maxTextureSize,d={[Vr]:Jn,[Jn]:Vr,[Vi]:Vi},h=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:PE,fragmentShader:LE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wi(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I_;let m=this.type;this.render=function(b,M,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Or),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=m!==ir&&this.type===ir,U=m===ir&&this.type!==ir;for(let F=0,k=b.length;F<k;F++){const X=b[F],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const it=z.getFrameExtents();if(r.multiply(it),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/it.x),r.x=s.x*it.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/it.y),r.y=s.y*it.y,z.mapSize.y=s.y)),z.map===null||B===!0||U===!0){const $=this.type!==ir?{minFilter:fi,magFilter:fi}:{};z.map!==null&&z.map.dispose(),z.map=new bs(r.x,r.y,$),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const P=z.getViewportCount();for(let $=0;$<P;$++){const st=z.getViewport($);o.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),D.viewport(o),z.updateMatrices(X,$),n=z.getFrustum(),v(M,A,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===ir&&E(z,A),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(y,x,L)};function E(b,M){const A=t.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bs(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,A,h,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,A,f,g,null)}function S(b,M,A,y){let x=null;const L=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)x=L;else if(x=A.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const D=x.uuid,B=M.uuid;let U=c[D];U===void 0&&(U={},c[D]=U);let F=U[B];F===void 0&&(F=x.clone(),U[B]=F,M.addEventListener("dispose",R)),x=F}if(x.visible=M.visible,x.wireframe=M.wireframe,y===ir?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:d[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=A}return x}function v(b,M,A,y,x){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===ir)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const B=t.update(b),U=b.material;if(Array.isArray(U)){const F=B.groups;for(let k=0,X=F.length;k<X;k++){const z=F[k],it=U[z.materialIndex];if(it&&it.visible){const P=S(b,it,y,x);b.onBeforeShadow(i,b,M,A,B,P,z),i.renderBufferDirect(A,null,B,P,b,z),b.onAfterShadow(i,b,M,A,B,P,z)}}}else if(U.visible){const F=S(b,U,y,x);b.onBeforeShadow(i,b,M,A,B,F,null),i.renderBufferDirect(A,null,B,F,b,null),b.onAfterShadow(i,b,M,A,B,F,null)}}const D=b.children;for(let B=0,U=D.length;B<U;B++)v(D[B],M,A,y,x)}function R(b){b.target.removeEventListener("dispose",R);for(const A in c){const y=c[A],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const UE={[dh]:ph,[mh]:vh,[_h]:xh,[To]:gh,[ph]:dh,[vh]:mh,[xh]:_h,[gh]:To};function IE(i,t){function e(){let N=!1;const Tt=new Ye;let tt=null;const lt=new Ye(0,0,0,0);return{setMask:function(bt){tt!==bt&&!N&&(i.colorMask(bt,bt,bt,bt),tt=bt)},setLocked:function(bt){N=bt},setClear:function(bt,At,Kt,et,ct){ct===!0&&(bt*=et,At*=et,Kt*=et),Tt.set(bt,At,Kt,et),lt.equals(Tt)===!1&&(i.clearColor(bt,At,Kt,et),lt.copy(Tt))},reset:function(){N=!1,tt=null,lt.set(-1,0,0,0)}}}function n(){let N=!1,Tt=!1,tt=null,lt=null,bt=null;return{setReversed:function(At){if(Tt!==At){const Kt=t.get("EXT_clip_control");Tt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const et=bt;bt=null,this.setClear(et)}Tt=At},getReversed:function(){return Tt},setTest:function(At){At?I(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(At){tt!==At&&!N&&(i.depthMask(At),tt=At)},setFunc:function(At){if(Tt&&(At=UE[At]),lt!==At){switch(At){case dh:i.depthFunc(i.NEVER);break;case ph:i.depthFunc(i.ALWAYS);break;case mh:i.depthFunc(i.LESS);break;case To:i.depthFunc(i.LEQUAL);break;case _h:i.depthFunc(i.EQUAL);break;case gh:i.depthFunc(i.GEQUAL);break;case vh:i.depthFunc(i.GREATER);break;case xh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=At}},setLocked:function(At){N=At},setClear:function(At){bt!==At&&(Tt&&(At=1-At),i.clearDepth(At),bt=At)},reset:function(){N=!1,tt=null,lt=null,bt=null,Tt=!1}}}function r(){let N=!1,Tt=null,tt=null,lt=null,bt=null,At=null,Kt=null,et=null,ct=null;return{setTest:function(at){N||(at?I(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(at){Tt!==at&&!N&&(i.stencilMask(at),Tt=at)},setFunc:function(at,pt,Ft){(tt!==at||lt!==pt||bt!==Ft)&&(i.stencilFunc(at,pt,Ft),tt=at,lt=pt,bt=Ft)},setOp:function(at,pt,Ft){(At!==at||Kt!==pt||et!==Ft)&&(i.stencilOp(at,pt,Ft),At=at,Kt=pt,et=Ft)},setLocked:function(at){N=at},setClear:function(at){ct!==at&&(i.clearStencil(at),ct=at)},reset:function(){N=!1,Tt=null,tt=null,lt=null,bt=null,At=null,Kt=null,et=null,ct=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],_=null,g=!1,p=null,m=null,E=null,S=null,v=null,R=null,b=null,M=new ye(0,0,0),A=0,y=!1,x=null,L=null,D=null,B=null,U=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=X>=2);let it=null,P={};const $=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),Rt=new Ye().fromArray($),V=new Ye().fromArray(st);function Q(N,Tt,tt,lt){const bt=new Uint8Array(4),At=i.createTexture();i.bindTexture(N,At),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<tt;Kt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(Tt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return At}const ut={};ut[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(i.DEPTH_TEST),o.setFunc(To),kt(!1),W(Fd),I(i.CULL_FACE),O(Or);function I(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function j(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function nt(N,Tt){return d[N]!==Tt?(i.bindFramebuffer(N,Tt),d[N]=Tt,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Tt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function ht(N,Tt){let tt=f,lt=!1;if(N){tt=h.get(Tt),tt===void 0&&(tt=[],h.set(Tt,tt));const bt=N.textures;if(tt.length!==bt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Kt=bt.length;At<Kt;At++)tt[At]=i.COLOR_ATTACHMENT0+At;tt.length=bt.length,lt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,lt=!0);lt&&i.drawBuffers(tt)}function Mt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const mt={[rs]:i.FUNC_ADD,[Iv]:i.FUNC_SUBTRACT,[Nv]:i.FUNC_REVERSE_SUBTRACT};mt[Fv]=i.MIN,mt[Ov]=i.MAX;const Ut={[Bv]:i.ZERO,[kv]:i.ONE,[zv]:i.SRC_COLOR,[hh]:i.SRC_ALPHA,[$v]:i.SRC_ALPHA_SATURATE,[Wv]:i.DST_COLOR,[Vv]:i.DST_ALPHA,[Hv]:i.ONE_MINUS_SRC_COLOR,[fh]:i.ONE_MINUS_SRC_ALPHA,[Xv]:i.ONE_MINUS_DST_COLOR,[Gv]:i.ONE_MINUS_DST_ALPHA,[Yv]:i.CONSTANT_COLOR,[qv]:i.ONE_MINUS_CONSTANT_COLOR,[Zv]:i.CONSTANT_ALPHA,[Kv]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,Tt,tt,lt,bt,At,Kt,et,ct,at){if(N===Or){g===!0&&(j(i.BLEND),g=!1);return}if(g===!1&&(I(i.BLEND),g=!0),N!==Uv){if(N!==p||at!==y){if((m!==rs||v!==rs)&&(i.blendEquation(i.FUNC_ADD),m=rs,v=rs),at)switch(N){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.ONE,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,S=null,R=null,b=null,M.set(0,0,0),A=0,p=N,y=at}return}bt=bt||Tt,At=At||tt,Kt=Kt||lt,(Tt!==m||bt!==v)&&(i.blendEquationSeparate(mt[Tt],mt[bt]),m=Tt,v=bt),(tt!==E||lt!==S||At!==R||Kt!==b)&&(i.blendFuncSeparate(Ut[tt],Ut[lt],Ut[At],Ut[Kt]),E=tt,S=lt,R=At,b=Kt),(et.equals(M)===!1||ct!==A)&&(i.blendColor(et.r,et.g,et.b,ct),M.copy(et),A=ct),p=N,y=!1}function ee(N,Tt){N.side===Vi?j(i.CULL_FACE):I(i.CULL_FACE);let tt=N.side===Jn;Tt&&(tt=!tt),kt(tt),N.blending===xs&&N.transparent===!1?O(Or):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const lt=N.stencilWrite;a.setTest(lt),lt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?I(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function W(N){N!==Pv?(I(i.CULL_FACE),N!==L&&(N===Fd?i.cullFace(i.BACK):N===Lv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),L=N}function Pt(N){N!==D&&(k&&i.lineWidth(N),D=N)}function ne(N,Tt,tt){N?(I(i.POLYGON_OFFSET_FILL),(B!==Tt||U!==tt)&&(i.polygonOffset(Tt,tt),B=Tt,U=tt)):j(i.POLYGON_OFFSET_FILL)}function Lt(N){N?I(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+F-1),it!==N&&(i.activeTexture(N),it=N)}function T(N,Tt,tt){tt===void 0&&(it===null?tt=i.TEXTURE0+F-1:tt=it);let lt=P[tt];lt===void 0&&(lt={type:void 0,texture:void 0},P[tt]=lt),(lt.type!==N||lt.texture!==Tt)&&(it!==tt&&(i.activeTexture(tt),it=tt),i.bindTexture(N,Tt||ut[N]),lt.type=N,lt.texture=Tt)}function Z(){const N=P[it];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){Rt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Rt.copy(N))}function It(N){V.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),V.copy(N))}function ie(N,Tt){let tt=c.get(Tt);tt===void 0&&(tt=new WeakMap,c.set(Tt,tt));let lt=tt.get(N);lt===void 0&&(lt=i.getUniformBlockIndex(Tt,N.name),tt.set(N,lt))}function qt(N,Tt){const lt=c.get(Tt).get(N);l.get(Tt)!==lt&&(i.uniformBlockBinding(Tt,lt,N.__bindingPointIndex),l.set(Tt,lt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,P={},d={},h=new WeakMap,f=[],_=null,g=!1,p=null,m=null,E=null,S=null,v=null,R=null,b=null,M=new ye(0,0,0),A=0,y=!1,x=null,L=null,D=null,B=null,U=null,Rt.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:I,disable:j,bindFramebuffer:nt,drawBuffers:ht,useProgram:Mt,setBlending:O,setMaterial:ee,setFlipSided:kt,setCullFace:W,setLineWidth:Pt,setPolygonOffset:ne,setScissorTest:Lt,activeTexture:C,bindTexture:T,unbindTexture:Z,compressedTexImage2D:Y,compressedTexImage3D:ot,texImage2D:St,texImage3D:Wt,updateUBOMapping:ie,uniformBlockBinding:qt,texStorage2D:Yt,texStorage3D:dt,texSubImage2D:rt,texSubImage3D:Et,compressedTexSubImage2D:vt,compressedTexSubImage3D:wt,scissor:Vt,viewport:It,reset:me}}function Up(i,t,e,n){const r=NE(n);switch(e){case z_:return i*t;case V_:return i*t;case G_:return i*t*2;case Ff:return i*t/r.components*r.byteLength;case Of:return i*t/r.components*r.byteLength;case W_:return i*t*2/r.components*r.byteLength;case Bf:return i*t*2/r.components*r.byteLength;case H_:return i*t*3/r.components*r.byteLength;case Ni:return i*t*4/r.components*r.byteLength;case kf:return i*t*4/r.components*r.byteLength;case Zl:case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jl:case jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bh:case Ah:return Math.max(i,16)*Math.max(t,8)/4;case Th:case wh:return Math.max(i,8)*Math.max(t,8)/2;case Ch:case Rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ph:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ql:case Xh:case $h:return Math.ceil(i/4)*Math.ceil(t/4)*16;case X_:case Yh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qh:case Zh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function NE(i){switch(i){case _r:case O_:return{byteLength:1,components:1};case ka:case B_:case Xa:return{byteLength:2,components:1};case If:case Nf:return{byteLength:2,components:4};case Ts:case Uf:case Xi:return{byteLength:4,components:1};case k_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function FE(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,T){return f?new OffscreenCanvas(C,T):gc("canvas")}function g(C,T,Z){let Y=1;const ot=Lt(C);if((ot.width>Z||ot.height>Z)&&(Y=Z/Math.max(ot.width,ot.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const rt=Math.floor(Y*ot.width),Et=Math.floor(Y*ot.height);d===void 0&&(d=_(rt,Et));const vt=T?_(rt,Et):d;return vt.width=rt,vt.height=Et,vt.getContext("2d").drawImage(C,0,0,rt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+rt+"x"+Et+")."),vt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,T,Z,Y,ot=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=T;if(T===i.RED&&(Z===i.FLOAT&&(rt=i.R32F),Z===i.HALF_FLOAT&&(rt=i.R16F),Z===i.UNSIGNED_BYTE&&(rt=i.R8)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.R8UI),Z===i.UNSIGNED_SHORT&&(rt=i.R16UI),Z===i.UNSIGNED_INT&&(rt=i.R32UI),Z===i.BYTE&&(rt=i.R8I),Z===i.SHORT&&(rt=i.R16I),Z===i.INT&&(rt=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(rt=i.RG32F),Z===i.HALF_FLOAT&&(rt=i.RG16F),Z===i.UNSIGNED_BYTE&&(rt=i.RG8)),T===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Z===i.UNSIGNED_INT&&(rt=i.RG32UI),Z===i.BYTE&&(rt=i.RG8I),Z===i.SHORT&&(rt=i.RG16I),Z===i.INT&&(rt=i.RG32I)),T===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Z===i.UNSIGNED_INT&&(rt=i.RGB32UI),Z===i.BYTE&&(rt=i.RGB8I),Z===i.SHORT&&(rt=i.RGB16I),Z===i.INT&&(rt=i.RGB32I)),T===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Z===i.BYTE&&(rt=i.RGBA8I),Z===i.SHORT&&(rt=i.RGBA16I),Z===i.INT&&(rt=i.RGBA32I)),T===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),T===i.RGBA){const Et=ot?Pc:xe.getTransfer(Y);Z===i.FLOAT&&(rt=i.RGBA32F),Z===i.HALF_FLOAT&&(rt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(rt=Et===we?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(C,T){let Z;return C?T===null||T===Ts||T===Ao?Z=i.DEPTH24_STENCIL8:T===Xi?Z=i.DEPTH32F_STENCIL8:T===ka&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ts||T===Ao?Z=i.DEPTH_COMPONENT24:T===Xi?Z=i.DEPTH_COMPONENT32F:T===ka&&(Z=i.DEPTH_COMPONENT16),Z}function R(C,T){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==fi&&C.minFilter!==Ii?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){const T=C.target;T.removeEventListener("dispose",b),A(T),T.isVideoTexture&&u.delete(T)}function M(C){const T=C.target;T.removeEventListener("dispose",M),x(T)}function A(C){const T=n.get(C);if(T.__webglInit===void 0)return;const Z=C.source,Y=h.get(Z);if(Y){const ot=Y[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(C),Object.keys(Y).length===0&&h.delete(Z)}n.remove(C)}function y(C){const T=n.get(C);i.deleteTexture(T.__webglTexture);const Z=C.source,Y=h.get(Z);delete Y[T.__cacheKey],o.memory.textures--}function x(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let ot=0;ot<T.__webglFramebuffer[Y].length;ot++)i.deleteFramebuffer(T.__webglFramebuffer[Y][ot]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=C.textures;for(let Y=0,ot=Z.length;Y<ot;Y++){const rt=n.get(Z[Y]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(Z[Y])}n.remove(C)}let L=0;function D(){L=0}function B(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function U(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function F(C,T){const Z=n.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(Z,C,T);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function k(C,T){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){V(Z,C,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function X(C,T){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){V(Z,C,T);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function z(C,T){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){Q(Z,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}const it={[Mh]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[Eh]:i.MIRRORED_REPEAT},P={[fi]:i.NEAREST,[ox]:i.NEAREST_MIPMAP_NEAREST,[al]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[eu]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},$={[hx]:i.NEVER,[gx]:i.ALWAYS,[fx]:i.LESS,[$_]:i.LEQUAL,[dx]:i.EQUAL,[_x]:i.GEQUAL,[px]:i.GREATER,[mx]:i.NOTEQUAL};function st(C,T){if(T.type===Xi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ii||T.magFilter===eu||T.magFilter===al||T.magFilter===us||T.minFilter===Ii||T.minFilter===eu||T.minFilter===al||T.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,it[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,it[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,it[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,P[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==al&&T.minFilter!==us||T.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Rt(C,T){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",b));const Y=T.source;let ot=h.get(Y);ot===void 0&&(ot={},h.set(Y,ot));const rt=U(T);if(rt!==C.__cacheKey){ot[rt]===void 0&&(ot[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ot[rt].usedTimes++;const Et=ot[C.__cacheKey];Et!==void 0&&(ot[C.__cacheKey].usedTimes--,Et.usedTimes===0&&y(T)),C.__cacheKey=rt,C.__webglTexture=ot[rt].texture}return Z}function V(C,T,Z){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);const ot=Rt(C,T),rt=T.source;e.bindTexture(Y,C.__webglTexture,i.TEXTURE0+Z);const Et=n.get(rt);if(rt.version!==Et.__version||ot===!0){e.activeTexture(i.TEXTURE0+Z);const vt=xe.getPrimaries(xe.workingColorSpace),wt=T.colorSpace===Cr?null:xe.getPrimaries(T.colorSpace),Yt=T.colorSpace===Cr||vt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let dt=g(T.image,!1,r.maxTextureSize);dt=ne(T,dt);const St=s.convert(T.format,T.colorSpace),Wt=s.convert(T.type);let Vt=S(T.internalFormat,St,Wt,T.colorSpace,T.isVideoTexture);st(Y,T);let It;const ie=T.mipmaps,qt=T.isVideoTexture!==!0,me=Et.__version===void 0||ot===!0,N=rt.dataReady,Tt=R(T,dt);if(T.isDepthTexture)Vt=v(T.format===Co,T.type),me&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Vt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,dt.width,dt.height,0,St,Wt,null));else if(T.isDataTexture)if(ie.length>0){qt&&me&&e.texStorage2D(i.TEXTURE_2D,Tt,Vt,ie[0].width,ie[0].height);for(let tt=0,lt=ie.length;tt<lt;tt++)It=ie[tt],qt?N&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,It.width,It.height,St,Wt,It.data):e.texImage2D(i.TEXTURE_2D,tt,Vt,It.width,It.height,0,St,Wt,It.data);T.generateMipmaps=!1}else qt?(me&&e.texStorage2D(i.TEXTURE_2D,Tt,Vt,dt.width,dt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,St,Wt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,dt.width,dt.height,0,St,Wt,dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Vt,ie[0].width,ie[0].height,dt.depth);for(let tt=0,lt=ie.length;tt<lt;tt++)if(It=ie[tt],T.format!==Ni)if(St!==null)if(qt){if(N)if(T.layerUpdates.size>0){const bt=Up(It.width,It.height,T.format,T.type);for(const At of T.layerUpdates){const Kt=It.data.subarray(At*bt/It.data.BYTES_PER_ELEMENT,(At+1)*bt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,At,It.width,It.height,1,St,Kt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,It.width,It.height,dt.depth,St,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Vt,It.width,It.height,dt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,It.width,It.height,dt.depth,St,Wt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Vt,It.width,It.height,dt.depth,0,St,Wt,It.data)}else{qt&&me&&e.texStorage2D(i.TEXTURE_2D,Tt,Vt,ie[0].width,ie[0].height);for(let tt=0,lt=ie.length;tt<lt;tt++)It=ie[tt],T.format!==Ni?St!==null?qt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,It.width,It.height,St,It.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Vt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,It.width,It.height,St,Wt,It.data):e.texImage2D(i.TEXTURE_2D,tt,Vt,It.width,It.height,0,St,Wt,It.data)}else if(T.isDataArrayTexture)if(qt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Vt,dt.width,dt.height,dt.depth),N)if(T.layerUpdates.size>0){const tt=Up(dt.width,dt.height,T.format,T.type);for(const lt of T.layerUpdates){const bt=dt.data.subarray(lt*tt/dt.data.BYTES_PER_ELEMENT,(lt+1)*tt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,dt.width,dt.height,1,St,Wt,bt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,St,Wt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,dt.width,dt.height,dt.depth,0,St,Wt,dt.data);else if(T.isData3DTexture)qt?(me&&e.texStorage3D(i.TEXTURE_3D,Tt,Vt,dt.width,dt.height,dt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,St,Wt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,dt.width,dt.height,dt.depth,0,St,Wt,dt.data);else if(T.isFramebufferTexture){if(me)if(qt)e.texStorage2D(i.TEXTURE_2D,Tt,Vt,dt.width,dt.height);else{let tt=dt.width,lt=dt.height;for(let bt=0;bt<Tt;bt++)e.texImage2D(i.TEXTURE_2D,bt,Vt,tt,lt,0,St,Wt,null),tt>>=1,lt>>=1}}else if(ie.length>0){if(qt&&me){const tt=Lt(ie[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Vt,tt.width,tt.height)}for(let tt=0,lt=ie.length;tt<lt;tt++)It=ie[tt],qt?N&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,St,Wt,It):e.texImage2D(i.TEXTURE_2D,tt,Vt,St,Wt,It);T.generateMipmaps=!1}else if(qt){if(me){const tt=Lt(dt);e.texStorage2D(i.TEXTURE_2D,Tt,Vt,tt.width,tt.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Wt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,St,Wt,dt);p(T)&&m(Y),Et.__version=rt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Q(C,T,Z){if(T.image.length!==6)return;const Y=Rt(C,T),ot=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Z);const rt=n.get(ot);if(ot.version!==rt.__version||Y===!0){e.activeTexture(i.TEXTURE0+Z);const Et=xe.getPrimaries(xe.workingColorSpace),vt=T.colorSpace===Cr?null:xe.getPrimaries(T.colorSpace),wt=T.colorSpace===Cr||Et===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Yt=T.isCompressedTexture||T.image[0].isCompressedTexture,dt=T.image[0]&&T.image[0].isDataTexture,St=[];for(let lt=0;lt<6;lt++)!Yt&&!dt?St[lt]=g(T.image[lt],!0,r.maxCubemapSize):St[lt]=dt?T.image[lt].image:T.image[lt],St[lt]=ne(T,St[lt]);const Wt=St[0],Vt=s.convert(T.format,T.colorSpace),It=s.convert(T.type),ie=S(T.internalFormat,Vt,It,T.colorSpace),qt=T.isVideoTexture!==!0,me=rt.__version===void 0||Y===!0,N=ot.dataReady;let Tt=R(T,Wt);st(i.TEXTURE_CUBE_MAP,T);let tt;if(Yt){qt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ie,Wt.width,Wt.height);for(let lt=0;lt<6;lt++){tt=St[lt].mipmaps;for(let bt=0;bt<tt.length;bt++){const At=tt[bt];T.format!==Ni?Vt!==null?qt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,At.width,At.height,Vt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,ie,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,At.width,At.height,Vt,It,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,ie,At.width,At.height,0,Vt,It,At.data)}}}else{if(tt=T.mipmaps,qt&&me){tt.length>0&&Tt++;const lt=Lt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ie,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(dt){qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,St[lt].width,St[lt].height,Vt,It,St[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ie,St[lt].width,St[lt].height,0,Vt,It,St[lt].data);for(let bt=0;bt<tt.length;bt++){const Kt=tt[bt].image[lt].image;qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,Kt.width,Kt.height,Vt,It,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,ie,Kt.width,Kt.height,0,Vt,It,Kt.data)}}else{qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Vt,It,St[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ie,Vt,It,St[lt]);for(let bt=0;bt<tt.length;bt++){const At=tt[bt];qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,Vt,It,At.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,ie,Vt,It,At.image[lt])}}}p(T)&&m(i.TEXTURE_CUBE_MAP),rt.__version=ot.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ut(C,T,Z,Y,ot,rt){const Et=s.convert(Z.format,Z.colorSpace),vt=s.convert(Z.type),wt=S(Z.internalFormat,Et,vt,Z.colorSpace),Yt=n.get(T),dt=n.get(Z);if(dt.__renderTarget=T,!Yt.__hasExternalTextures){const St=Math.max(1,T.width>>rt),Wt=Math.max(1,T.height>>rt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,rt,wt,St,Wt,T.depth,0,Et,vt,null):e.texImage2D(ot,rt,wt,St,Wt,0,Et,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),W(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ot,dt.__webglTexture,0,kt(T)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ot,dt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(C,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){const Y=T.depthTexture,ot=Y&&Y.isDepthTexture?Y.type:null,rt=v(T.stencilBuffer,ot),Et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=kt(T);W(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,rt,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,rt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,rt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,C)}else{const Y=T.textures;for(let ot=0;ot<Y.length;ot++){const rt=Y[ot],Et=s.convert(rt.format,rt.colorSpace),vt=s.convert(rt.type),wt=S(rt.internalFormat,Et,vt,rt.colorSpace),Yt=kt(T);Z&&W(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,wt,T.width,T.height):W(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,wt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,wt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(T.depthTexture);Y.__renderTarget=T,(!Y.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);const ot=Y.__webglTexture,rt=kt(T);if(T.depthTexture.format===mo)W(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(T.depthTexture.format===Co)W(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function nt(C){const T=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const ot=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",ot)};Y.addEventListener("dispose",ot),T.__depthDisposeCallback=ot}T.__boundDepthTexture=Y}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");j(T.__webglFramebuffer,C)}else if(Z){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),I(T.__webglDepthbuffer[Y],C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),I(T.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,T,Z){const Y=n.get(C);T!==void 0&&ut(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&nt(C)}function Mt(C){const T=C.texture,Z=n.get(C),Y=n.get(T);C.addEventListener("dispose",M);const ot=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Et=ot.length>1;if(Et||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,o.memory.textures++),rt){Z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[vt]=[];for(let wt=0;wt<T.mipmaps.length;wt++)Z.__webglFramebuffer[vt][wt]=i.createFramebuffer()}else Z.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)Z.__webglFramebuffer[vt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Et)for(let vt=0,wt=ot.length;vt<wt;vt++){const Yt=n.get(ot[vt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&W(C)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let vt=0;vt<ot.length;vt++){const wt=ot[vt];Z.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[vt]);const Yt=s.convert(wt.format,wt.colorSpace),dt=s.convert(wt.type),St=S(wt.internalFormat,Yt,dt,wt.colorSpace,C.isXRRenderTarget===!0),Wt=kt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),I(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),st(i.TEXTURE_CUBE_MAP,T);for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)ut(Z.__webglFramebuffer[vt][wt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt);else ut(Z.__webglFramebuffer[vt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);p(T)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let vt=0,wt=ot.length;vt<wt;vt++){const Yt=ot[vt],dt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),st(i.TEXTURE_2D,Yt),ut(Z.__webglFramebuffer,C,Yt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),p(Yt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Y.__webglTexture),st(vt,T),T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)ut(Z.__webglFramebuffer[wt],C,T,i.COLOR_ATTACHMENT0,vt,wt);else ut(Z.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,vt,0);p(T)&&m(vt),e.unbindTexture()}C.depthBuffer&&nt(C)}function mt(C){const T=C.textures;for(let Z=0,Y=T.length;Z<Y;Z++){const ot=T[Z];if(p(ot)){const rt=E(C),Et=n.get(ot).__webglTexture;e.bindTexture(rt,Et),m(rt),e.unbindTexture()}}}const Ut=[],O=[];function ee(C){if(C.samples>0){if(W(C)===!1){const T=C.textures,Z=C.width,Y=C.height;let ot=i.COLOR_BUFFER_BIT;const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(C),vt=T.length>1;if(vt)for(let wt=0;wt<T.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let wt=0;wt<T.length;wt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const Yt=n.get(T[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,Z,Y,0,0,Z,Y,ot,i.NEAREST),l===!0&&(Ut.length=0,O.length=0,Ut.push(i.COLOR_ATTACHMENT0+wt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ut.push(rt),O.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let wt=0;wt<T.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const Yt=n.get(T[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function W(C){const T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pt(C){const T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function ne(C,T){const Z=C.colorSpace,Y=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==Po&&Z!==Cr&&(xe.getTransfer(Z)===we?(Y!==Ni||ot!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function Lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=ht,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=W}function OE(i,t){function e(n,r=Cr){let s;const o=xe.getTransfer(r);if(n===_r)return i.UNSIGNED_BYTE;if(n===If)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===k_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===O_)return i.BYTE;if(n===B_)return i.SHORT;if(n===ka)return i.UNSIGNED_SHORT;if(n===Uf)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===Xi)return i.FLOAT;if(n===Xa)return i.HALF_FLOAT;if(n===z_)return i.ALPHA;if(n===H_)return i.RGB;if(n===Ni)return i.RGBA;if(n===V_)return i.LUMINANCE;if(n===G_)return i.LUMINANCE_ALPHA;if(n===mo)return i.DEPTH_COMPONENT;if(n===Co)return i.DEPTH_STENCIL;if(n===Ff)return i.RED;if(n===Of)return i.RED_INTEGER;if(n===W_)return i.RG;if(n===Bf)return i.RG_INTEGER;if(n===kf)return i.RGBA_INTEGER;if(n===Zl||n===Kl||n===Jl||n===jl)if(o===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Th||n===bh||n===wh||n===Ah)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Rh||n===Ph)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ch||n===Rh)return o===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ph)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lh||n===Dh||n===Uh||n===Ih||n===Nh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===Hh||n===Vh||n===Gh||n===Wh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ih)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wh)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===Xh||n===$h)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ql)return o===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===X_||n===Yh||n===qh||n===Zh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ao?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class BE extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class aa extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class Cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new aa;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Cn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gr({vertexShader:zE,fragmentShader:HE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wi(new Ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GE extends Lo{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const g=new VE,p=e.getContextAttributes();let m=null,E=null;const S=[],v=[],R=new Xt;let b=null;const M=new Si;M.viewport=new Ye;const A=new Si;A.viewport=new Ye;const y=[M,A],x=new BE;let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=S[V];return Q===void 0&&(Q=new Cu,S[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=S[V];return Q===void 0&&(Q=new Cu,S[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=S[V];return Q===void 0&&(Q=new Cu,S[V]=Q),Q.getHandSpace()};function B(V){const Q=v.indexOf(V.inputSource);if(Q===-1)return;const ut=S[Q];ut!==void 0&&(ut.update(V.inputSource,V.frame,c||o),ut.dispatchEvent({type:V.type,data:V.inputSource}))}function U(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",F);for(let V=0;V<S.length;V++){const Q=v[V];Q!==null&&(v[V]=null,S[V].disconnect(Q))}L=null,D=null,g.reset(),t.setRenderTarget(m),f=null,h=null,d=null,r=null,E=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",U),r.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new bs(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:_r,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ut=null,I=null;p.depth&&(I=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Co:mo,ut=p.stencil?Ao:Ts);const j={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:s};d=new XRWebGLBinding(r,e),h=d.createProjectionLayer(j),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new bs(h.textureWidth,h.textureHeight,{format:Ni,type:_r,depthTexture:new og(h.textureWidth,h.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Rt.setContext(r),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(V){for(let Q=0;Q<V.removed.length;Q++){const ut=V.removed[Q],I=v.indexOf(ut);I>=0&&(v[I]=null,S[I].disconnect(ut))}for(let Q=0;Q<V.added.length;Q++){const ut=V.added[Q];let I=v.indexOf(ut);if(I===-1){for(let nt=0;nt<S.length;nt++)if(nt>=v.length){v.push(ut),I=nt;break}else if(v[nt]===null){v[nt]=ut,I=nt;break}if(I===-1)break}const j=S[I];j&&j.connect(ut)}}const k=new q,X=new q;function z(V,Q,ut){k.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ut.matrixWorld);const I=k.distanceTo(X),j=Q.projectionMatrix.elements,nt=ut.projectionMatrix.elements,ht=j[14]/(j[10]-1),Mt=j[14]/(j[10]+1),mt=(j[9]+1)/j[5],Ut=(j[9]-1)/j[5],O=(j[8]-1)/j[0],ee=(nt[8]+1)/nt[0],kt=ht*O,W=ht*ee,Pt=I/(-O+ee),ne=Pt*-O;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ne),V.translateZ(Pt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),j[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Lt=ht+Pt,C=Mt+Pt,T=kt-ne,Z=W+(I-ne),Y=mt*Mt/C*Lt,ot=Ut*Mt/C*Lt;V.projectionMatrix.makePerspective(T,Z,Y,ot,Lt,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function it(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Q=V.near,ut=V.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),x.near=A.near=M.near=Q,x.far=A.far=M.far=ut,(L!==x.near||D!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,D=x.far),M.layers.mask=V.layers.mask|2,A.layers.mask=V.layers.mask|4,x.layers.mask=M.layers.mask|A.layers.mask;const I=V.parent,j=x.cameras;it(x,I);for(let nt=0;nt<j.length;nt++)it(j[nt],I);j.length===2?z(x,M,A):x.projectionMatrix.copy(M.projectionMatrix),P(V,x,I)};function P(V,Q,ut){ut===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ut.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=za*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let $=null;function st(V,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const ut=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let I=!1;ut.length!==x.cameras.length&&(x.cameras.length=0,I=!0);for(let nt=0;nt<ut.length;nt++){const ht=ut[nt];let Mt=null;if(f!==null)Mt=f.getViewport(ht);else{const Ut=d.getViewSubImage(h,ht);Mt=Ut.viewport,nt===0&&(t.setRenderTargetTextures(E,Ut.colorTexture,h.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(E))}let mt=y[nt];mt===void 0&&(mt=new Si,mt.layers.enable(nt),mt.viewport=new Ye,y[nt]=mt),mt.matrix.fromArray(ht.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ht.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),nt===0&&(x.matrix.copy(mt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),I===!0&&x.cameras.push(mt)}const j=r.enabledFeatures;if(j&&j.includes("depth-sensing")){const nt=d.getDepthInformation(ut[0]);nt&&nt.isValid&&nt.texture&&g.init(t,nt,r.renderState)}}for(let ut=0;ut<S.length;ut++){const I=v[ut],j=S[ut];I!==null&&j!==void 0&&j.update(I,Q,c||o)}$&&$(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Rt=new rg;Rt.setAnimationLoop(st),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}}const jr=new qi,WE=new Le;function XE(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,tg(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,E,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,E,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Jn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Jn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=t.get(m),S=E.envMap,v=E.envMapRotation;S&&(p.envMap.value=S,jr.copy(v),jr.x*=-1,jr.y*=-1,jr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),p.envMapRotation.value.setFromMatrix4(WE.makeRotationFromEuler(jr)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $E(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const v=S.program;n.uniformBlockBinding(E,v)}function c(E,S){let v=r[E.id];v===void 0&&(_(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",p));const R=S.program;n.updateUBOMapping(E,R);const b=t.render.frame;s[E.id]!==b&&(h(E),s[E.id]=b)}function u(E){const S=d();E.__bindingPointIndex=S;const v=i.createBuffer(),R=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const S=r[E.id],v=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,M=v.length;b<M;b++){const A=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,x=A.length;y<x;y++){const L=A[y];if(f(L,b,y,R)===!0){const D=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let F=0;F<B.length;F++){const k=B[F],X=g(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,D+U,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,v,R){const b=E.value,M=S+"_"+v;if(R[M]===void 0)return typeof b=="number"||typeof b=="boolean"?R[M]=b:R[M]=b.clone(),!0;{const A=R[M];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return R[M]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function _(E){const S=E.uniforms;let v=0;const R=16;for(let M=0,A=S.length;M<A;M++){const y=Array.isArray(S[M])?S[M]:[S[M]];for(let x=0,L=y.length;x<L;x++){const D=y[x],B=Array.isArray(D.value)?D.value:[D.value];for(let U=0,F=B.length;U<F;U++){const k=B[U],X=g(k),z=v%R,it=z%X.boundary,P=z+it;v+=it,P!==0&&R-P<X.storage&&(v+=R-P),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=X.storage}}}const b=v%R;return b>0&&(v+=R-b),E.__size=v,E.__cache={},this}function g(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class YE{constructor(t={}){const{canvas:e=Nx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=Br,this.toneMappingExposure=1;const v=this;let R=!1,b=0,M=0,A=null,y=-1,x=null;const L=new Ye,D=new Ye;let B=null;const U=new ye(0);let F=0,k=e.width,X=e.height,z=1,it=null,P=null;const $=new Ye(0,0,k,X),st=new Ye(0,0,k,X);let Rt=!1;const V=new ig;let Q=!1,ut=!1;const I=new Le,j=new Le,nt=new q,ht=new Ye,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Ut(){return A===null?z:1}let O=n;function ee(w,H){return e.getContext(w,H)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Df}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",At,!1),O===null){const H="webgl2";if(O=ee(H,w),O===null)throw ee(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,W,Pt,ne,Lt,C,T,Z,Y,ot,rt,Et,vt,wt,Yt,dt,St,Wt,Vt,It,ie,qt,me,N;function Tt(){kt=new jM(O),kt.init(),qt=new OE(O,kt),W=new $M(O,kt,t,qt),Pt=new IE(O,kt),W.reverseDepthBuffer&&h&&Pt.buffers.depth.setReversed(!0),ne=new e1(O),Lt=new xE,C=new FE(O,kt,Pt,Lt,W,qt,ne),T=new qM(v),Z=new JM(v),Y=new ly(O),me=new WM(O,Y),ot=new QM(O,Y,ne,me),rt=new i1(O,ot,Y,ne),Vt=new n1(O,W,C),dt=new YM(Lt),Et=new vE(v,T,Z,kt,W,me,dt),vt=new XE(v,Lt),wt=new SE,Yt=new AE(kt),Wt=new GM(v,T,Z,Pt,rt,f,l),St=new DE(v,rt,W),N=new $E(O,ne,W,Pt),It=new XM(O,kt,ne),ie=new t1(O,kt,ne),ne.programs=Et.programs,v.capabilities=W,v.extensions=kt,v.properties=Lt,v.renderLists=wt,v.shadowMap=St,v.state=Pt,v.info=ne}Tt();const tt=new GE(v,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(k,X,!1))},this.getSize=function(w){return w.set(k,X)},this.setSize=function(w,H,J=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,X=H,e.width=Math.floor(w*z),e.height=Math.floor(H*z),J===!0&&(e.style.width=w+"px",e.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(k*z,X*z).floor()},this.setDrawingBufferSize=function(w,H,J){k=w,X=H,z=J,e.width=Math.floor(w*J),e.height=Math.floor(H*J),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,H,J,K){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,H,J,K),Pt.viewport(L.copy($).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,H,J,K){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,H,J,K),Pt.scissor(D.copy(st).multiplyScalar(z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(w){Pt.setScissorTest(Rt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(w=!0,H=!0,J=!0){let K=0;if(w){let G=!1;if(A!==null){const _t=A.texture.format;G=_t===kf||_t===Bf||_t===Of}if(G){const _t=A.texture.type,xt=_t===_r||_t===Ts||_t===ka||_t===Ao||_t===If||_t===Nf,Ct=Wt.getClearColor(),Nt=Wt.getClearAlpha(),Zt=Ct.r,te=Ct.g,ft=Ct.b;xt?(_[0]=Zt,_[1]=te,_[2]=ft,_[3]=Nt,O.clearBufferuiv(O.COLOR,0,_)):(g[0]=Zt,g[1]=te,g[2]=ft,g[3]=Nt,O.clearBufferiv(O.COLOR,0,g))}else K|=O.COLOR_BUFFER_BIT}H&&(K|=O.DEPTH_BUFFER_BIT),J&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),wt.dispose(),Yt.dispose(),Lt.dispose(),T.dispose(),Z.dispose(),rt.dispose(),me.dispose(),N.dispose(),Et.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",gt),tt.removeEventListener("sessionend",Ht),Bt.stop()};function lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=ne.autoReset,H=St.enabled,J=St.autoUpdate,K=St.needsUpdate,G=St.type;Tt(),ne.autoReset=w,St.enabled=H,St.autoUpdate=J,St.needsUpdate=K,St.type=G}function At(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kt(w){const H=w.target;H.removeEventListener("dispose",Kt),et(H)}function et(w){ct(w),Lt.remove(w)}function ct(w){const H=Lt.get(w).programs;H!==void 0&&(H.forEach(function(J){Et.releaseProgram(J)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,J,K,G,_t){H===null&&(H=Mt);const xt=G.isMesh&&G.matrixWorld.determinant()<0,Ct=gn(w,H,J,K,G);Pt.setMaterial(K,xt);let Nt=J.index,Zt=1;if(K.wireframe===!0){if(Nt=ot.getWireframeAttribute(J),Nt===void 0)return;Zt=2}const te=J.drawRange,ft=J.attributes.position;let yt=te.start*Zt,Jt=(te.start+te.count)*Zt;_t!==null&&(yt=Math.max(yt,_t.start*Zt),Jt=Math.min(Jt,(_t.start+_t.count)*Zt)),Nt!==null?(yt=Math.max(yt,0),Jt=Math.min(Jt,Nt.count)):ft!=null&&(yt=Math.max(yt,0),Jt=Math.min(Jt,ft.count));const pe=Jt-yt;if(pe<0||pe===1/0)return;me.setup(G,K,Ct,J,Nt);let Ee,se=It;if(Nt!==null&&(Ee=Y.get(Nt),se=ie,se.setIndex(Ee)),G.isMesh)K.wireframe===!0?(Pt.setLineWidth(K.wireframeLinewidth*Ut()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(G.isLine){let Ot=K.linewidth;Ot===void 0&&(Ot=1),Pt.setLineWidth(Ot*Ut()),G.isLineSegments?se.setMode(O.LINES):G.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else G.isPoints?se.setMode(O.POINTS):G.isSprite&&se.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ot=G._multiDrawStarts,nn=G._multiDrawCounts,ve=G._multiDrawCount,Ne=Nt?Y.get(Nt).bytesPerElement:1,vn=Lt.get(K).currentProgram.getUniforms();for(let Fe=0;Fe<ve;Fe++)vn.setValue(O,"_gl_DrawID",Fe),se.render(Ot[Fe]/Ne,nn[Fe])}else if(G.isInstancedMesh)se.renderInstances(yt,pe,G.count);else if(J.isInstancedBufferGeometry){const Ot=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,nn=Math.min(J.instanceCount,Ot);se.renderInstances(yt,pe,nn)}else se.render(yt,pe)};function at(w,H,J){w.transparent===!0&&w.side===Vi&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,de(w,H,J),w.side=Vr,w.needsUpdate=!0,de(w,H,J),w.side=Vi):de(w,H,J)}this.compile=function(w,H,J=null){J===null&&(J=w),m=Yt.get(J),m.init(H),S.push(m),J.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),w!==J&&w.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const K=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _t=G.material;if(_t)if(Array.isArray(_t))for(let xt=0;xt<_t.length;xt++){const Ct=_t[xt];at(Ct,J,G),K.add(Ct)}else at(_t,J,G),K.add(_t)}),S.pop(),m=null,K},this.compileAsync=function(w,H,J=null){const K=this.compile(w,H,J);return new Promise(G=>{function _t(){if(K.forEach(function(xt){Lt.get(xt).currentProgram.isReady()&&K.delete(xt)}),K.size===0){G(w);return}setTimeout(_t,10)}kt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let pt=null;function Ft(w){pt&&pt(w)}function gt(){Bt.stop()}function Ht(){Bt.start()}const Bt=new rg;Bt.setAnimationLoop(Ft),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(w){pt=w,tt.setAnimationLoop(w),w===null?Bt.stop():Bt.start()},tt.addEventListener("sessionstart",gt),tt.addEventListener("sessionend",Ht),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(H),H=tt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,H,A),m=Yt.get(w,S.length),m.init(H),S.push(m),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),V.setFromProjectionMatrix(j),ut=this.localClippingEnabled,Q=dt.init(this.clippingPlanes,ut),p=wt.get(w,E.length),p.init(),E.push(p),tt.enabled===!0&&tt.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&$t(_t,H,-1/0,v.sortObjects)}$t(w,H,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(it,P),mt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,mt&&Wt.addToRenderList(p,w),this.info.render.frame++,Q===!0&&dt.beginShadows();const J=m.state.shadowsArray;St.render(J,w,H),Q===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=p.opaque,G=p.transmissive;if(m.setupLights(),H.isArrayCamera){const _t=H.cameras;if(G.length>0)for(let xt=0,Ct=_t.length;xt<Ct;xt++){const Nt=_t[xt];re(K,G,w,Nt)}mt&&Wt.render(w);for(let xt=0,Ct=_t.length;xt<Ct;xt++){const Nt=_t[xt];Ae(p,w,Nt,Nt.viewport)}}else G.length>0&&re(K,G,w,H),mt&&Wt.render(w),Ae(p,w,H);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,H),me.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(m=S[S.length-1],Q===!0&&dt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function $t(w,H,J,K){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){K&&ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);const xt=rt.update(w),Ct=w.material;Ct.visible&&p.push(w,xt,Ct,J,ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){const xt=rt.update(w),Ct=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ht.copy(w.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ht.copy(xt.boundingSphere.center)),ht.applyMatrix4(w.matrixWorld).applyMatrix4(j)),Array.isArray(Ct)){const Nt=xt.groups;for(let Zt=0,te=Nt.length;Zt<te;Zt++){const ft=Nt[Zt],yt=Ct[ft.materialIndex];yt&&yt.visible&&p.push(w,xt,yt,J,ht.z,ft)}}else Ct.visible&&p.push(w,xt,Ct,J,ht.z,null)}}const _t=w.children;for(let xt=0,Ct=_t.length;xt<Ct;xt++)$t(_t[xt],H,J,K)}function Ae(w,H,J,K){const G=w.opaque,_t=w.transmissive,xt=w.transparent;m.setupLightsView(J),Q===!0&&dt.setGlobalState(v.clippingPlanes,J),K&&Pt.viewport(L.copy(K)),G.length>0&&Se(G,H,J),_t.length>0&&Se(_t,H,J),xt.length>0&&Se(xt,H,J),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function re(w,H,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new bs(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Xa:_r,minFilter:us,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const _t=m.state.transmissionRenderTarget[K.id],xt=K.viewport||L;_t.setSize(xt.z,xt.w);const Ct=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(U),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),mt&&Wt.render(J);const Nt=v.toneMapping;v.toneMapping=Br;const Zt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),Q===!0&&dt.setGlobalState(v.clippingPlanes,K),Se(w,J,K),C.updateMultisampleRenderTarget(_t),C.updateRenderTargetMipmap(_t),kt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ft=0,yt=H.length;ft<yt;ft++){const Jt=H[ft],pe=Jt.object,Ee=Jt.geometry,se=Jt.material,Ot=Jt.group;if(se.side===Vi&&pe.layers.test(K.layers)){const nn=se.side;se.side=Jn,se.needsUpdate=!0,Ie(pe,J,K,Ee,se,Ot),se.side=nn,se.needsUpdate=!0,te=!0}}te===!0&&(C.updateMultisampleRenderTarget(_t),C.updateRenderTargetMipmap(_t))}v.setRenderTarget(Ct),v.setClearColor(U,F),Zt!==void 0&&(K.viewport=Zt),v.toneMapping=Nt}function Se(w,H,J){const K=H.isScene===!0?H.overrideMaterial:null;for(let G=0,_t=w.length;G<_t;G++){const xt=w[G],Ct=xt.object,Nt=xt.geometry,Zt=K===null?xt.material:K,te=xt.group;Ct.layers.test(J.layers)&&Ie(Ct,H,J,Nt,Zt,te)}}function Ie(w,H,J,K,G,_t){w.onBeforeRender(v,H,J,K,G,_t),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(v,H,J,K,w,_t),G.transparent===!0&&G.side===Vi&&G.forceSinglePass===!1?(G.side=Jn,G.needsUpdate=!0,v.renderBufferDirect(J,H,K,G,w,_t),G.side=Vr,G.needsUpdate=!0,v.renderBufferDirect(J,H,K,G,w,_t),G.side=Vi):v.renderBufferDirect(J,H,K,G,w,_t),w.onAfterRender(v,H,J,K,G,_t)}function de(w,H,J){H.isScene!==!0&&(H=Mt);const K=Lt.get(w),G=m.state.lights,_t=m.state.shadowsArray,xt=G.state.version,Ct=Et.getParameters(w,G.state,_t,H,J),Nt=Et.getProgramCacheKey(Ct);let Zt=K.programs;K.environment=w.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(w.isMeshStandardMaterial?Z:T).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Zt===void 0&&(w.addEventListener("dispose",Kt),Zt=new Map,K.programs=Zt);let te=Zt.get(Nt);if(te!==void 0){if(K.currentProgram===te&&K.lightsStateVersion===xt)return ge(w,Ct),te}else Ct.uniforms=Et.getUniforms(w),w.onBeforeCompile(Ct,v),te=Et.acquireProgram(Ct,Nt),Zt.set(Nt,te),K.uniforms=Ct.uniforms;const ft=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ft.clippingPlanes=dt.uniform),ge(w,Ct),K.needsLights=Ze(w),K.lightsStateVersion=xt,K.needsLights&&(ft.ambientLightColor.value=G.state.ambient,ft.lightProbe.value=G.state.probe,ft.directionalLights.value=G.state.directional,ft.directionalLightShadows.value=G.state.directionalShadow,ft.spotLights.value=G.state.spot,ft.spotLightShadows.value=G.state.spotShadow,ft.rectAreaLights.value=G.state.rectArea,ft.ltc_1.value=G.state.rectAreaLTC1,ft.ltc_2.value=G.state.rectAreaLTC2,ft.pointLights.value=G.state.point,ft.pointLightShadows.value=G.state.pointShadow,ft.hemisphereLights.value=G.state.hemi,ft.directionalShadowMap.value=G.state.directionalShadowMap,ft.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ft.spotShadowMap.value=G.state.spotShadowMap,ft.spotLightMatrix.value=G.state.spotLightMatrix,ft.spotLightMap.value=G.state.spotLightMap,ft.pointShadowMap.value=G.state.pointShadowMap,ft.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=te,K.uniformsList=null,te}function Me(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=tc.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function ge(w,H){const J=Lt.get(w);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function gn(w,H,J,K,G){H.isScene!==!0&&(H=Mt),C.resetTextureUnits();const _t=H.fog,xt=K.isMeshStandardMaterial?H.environment:null,Ct=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Po,Nt=(K.isMeshStandardMaterial?Z:T).get(K.envMap||xt),Zt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,te=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ft=!!J.morphAttributes.position,yt=!!J.morphAttributes.normal,Jt=!!J.morphAttributes.color;let pe=Br;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=v.toneMapping);const Ee=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,se=Ee!==void 0?Ee.length:0,Ot=Lt.get(K),nn=m.state.lights;if(Q===!0&&(ut===!0||w!==x)){const Ln=w===x&&K.id===y;dt.setState(K,w,Ln)}let ve=!1;K.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==nn.state.version||Ot.outputColorSpace!==Ct||G.isBatchedMesh&&Ot.batching===!1||!G.isBatchedMesh&&Ot.batching===!0||G.isBatchedMesh&&Ot.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ot.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ot.instancing===!1||!G.isInstancedMesh&&Ot.instancing===!0||G.isSkinnedMesh&&Ot.skinning===!1||!G.isSkinnedMesh&&Ot.skinning===!0||G.isInstancedMesh&&Ot.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ot.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ot.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ot.instancingMorph===!1&&G.morphTexture!==null||Ot.envMap!==Nt||K.fog===!0&&Ot.fog!==_t||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==Zt||Ot.vertexTangents!==te||Ot.morphTargets!==ft||Ot.morphNormals!==yt||Ot.morphColors!==Jt||Ot.toneMapping!==pe||Ot.morphTargetsCount!==se)&&(ve=!0):(ve=!0,Ot.__version=K.version);let Ne=Ot.currentProgram;ve===!0&&(Ne=de(K,H,G));let vn=!1,Fe=!1,Pn=!1;const Te=Ne.getUniforms(),Ve=Ot.uniforms;if(Pt.useProgram(Ne.program)&&(vn=!0,Fe=!0,Pn=!0),K.id!==y&&(y=K.id,Fe=!0),vn||x!==w){Pt.buffers.depth.getReversed()?(I.copy(w.projectionMatrix),Ox(I),Bx(I),Te.setValue(O,"projectionMatrix",I)):Te.setValue(O,"projectionMatrix",w.projectionMatrix),Te.setValue(O,"viewMatrix",w.matrixWorldInverse);const Qt=Te.map.cameraPosition;Qt!==void 0&&Qt.setValue(O,nt.setFromMatrixPosition(w.matrixWorld)),W.logarithmicDepthBuffer&&Te.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Te.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Fe=!0,Pn=!0)}if(G.isSkinnedMesh){Te.setOptional(O,G,"bindMatrix"),Te.setOptional(O,G,"bindMatrixInverse");const Ln=G.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Te.setValue(O,"boneTexture",Ln.boneTexture,C))}G.isBatchedMesh&&(Te.setOptional(O,G,"batchingTexture"),Te.setValue(O,"batchingTexture",G._matricesTexture,C),Te.setOptional(O,G,"batchingIdTexture"),Te.setValue(O,"batchingIdTexture",G._indirectTexture,C),Te.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Te.setValue(O,"batchingColorTexture",G._colorsTexture,C));const vr=J.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Vt.update(G,J,Ne),(Fe||Ot.receiveShadow!==G.receiveShadow)&&(Ot.receiveShadow=G.receiveShadow,Te.setValue(O,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ve.envMap.value=Nt,Ve.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(Ve.envMapIntensity.value=H.environmentIntensity),Fe&&(Te.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Ce(Ve,Pn),_t&&K.fog===!0&&vt.refreshFogUniforms(Ve,_t),vt.refreshMaterialUniforms(Ve,K,z,X,m.state.transmissionRenderTarget[w.id]),tc.upload(O,Me(Ot),Ve,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(tc.upload(O,Me(Ot),Ve,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Te.setValue(O,"center",G.center),Te.setValue(O,"modelViewMatrix",G.modelViewMatrix),Te.setValue(O,"normalMatrix",G.normalMatrix),Te.setValue(O,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ln=K.uniformsGroups;for(let Qt=0,Xn=Ln.length;Qt<Xn;Qt++){const Wr=Ln[Qt];N.update(Wr,Ne),N.bind(Wr,Ne)}}return Ne}function Ce(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Ze(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,H,J){Lt.get(w.texture).__webglTexture=H,Lt.get(w.depthTexture).__webglTexture=J;const K=Lt.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,H){const J=Lt.get(w);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,J=0){A=w,b=H,M=J;let K=!0,G=null,_t=!1,xt=!1;if(w){const Nt=Lt.get(w);if(Nt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Nt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Nt.__hasExternalTextures)C.rebindTextures(w,Lt.get(w.texture).__webglTexture,Lt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ft=w.depthTexture;if(Nt.__boundDepthTexture!==ft){if(ft!==null&&Lt.has(ft)&&(w.width!==ft.image.width||w.height!==ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Zt=w.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(xt=!0);const te=Lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[H])?G=te[H][J]:G=te[H],_t=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?G=Lt.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?G=te[J]:G=te,L.copy(w.viewport),D.copy(w.scissor),B=w.scissorTest}else L.copy($).multiplyScalar(z).floor(),D.copy(st).multiplyScalar(z).floor(),B=Rt;if(Pt.bindFramebuffer(O.FRAMEBUFFER,G)&&K&&Pt.drawBuffers(w,G),Pt.viewport(L),Pt.scissor(D),Pt.setScissorTest(B),_t){const Nt=Lt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Nt.__webglTexture,J)}else if(xt){const Nt=Lt.get(w.texture),Zt=H||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.__webglTexture,J||0,Zt)}y=-1},this.readRenderTargetPixels=function(w,H,J,K,G,_t,xt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Ct){Pt.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const Nt=w.texture,Zt=Nt.format,te=Nt.type;if(!W.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-K&&J>=0&&J<=w.height-G&&O.readPixels(H,J,K,G,qt.convert(Zt),qt.convert(te),_t)}finally{const Nt=A!==null?Lt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,H,J,K,G,_t,xt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Ct){const Nt=w.texture,Zt=Nt.format,te=Nt.type;if(!W.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=w.width-K&&J>=0&&J<=w.height-G){Pt.bindFramebuffer(O.FRAMEBUFFER,Ct);const ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.bufferData(O.PIXEL_PACK_BUFFER,_t.byteLength,O.STREAM_READ),O.readPixels(H,J,K,G,qt.convert(Zt),qt.convert(te),0);const yt=A!==null?Lt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,yt);const Jt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Fx(O,Jt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_t),O.deleteBuffer(ft),O.deleteSync(Jt),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,H=null,J=0){w.isTexture!==!0&&(sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-J),G=Math.floor(w.image.width*K),_t=Math.floor(w.image.height*K),xt=H!==null?H.x:0,Ct=H!==null?H.y:0;C.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,xt,Ct,G,_t),Pt.unbindTexture()},this.copyTextureToTexture=function(w,H,J=null,K=null,G=0){w.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],H=arguments[2],G=arguments[3]||0,J=null);let _t,xt,Ct,Nt,Zt,te,ft,yt,Jt;const pe=w.isCompressedTexture?w.mipmaps[G]:w.image;J!==null?(_t=J.max.x-J.min.x,xt=J.max.y-J.min.y,Ct=J.isBox3?J.max.z-J.min.z:1,Nt=J.min.x,Zt=J.min.y,te=J.isBox3?J.min.z:0):(_t=pe.width,xt=pe.height,Ct=pe.depth||1,Nt=0,Zt=0,te=0),K!==null?(ft=K.x,yt=K.y,Jt=K.z):(ft=0,yt=0,Jt=0);const Ee=qt.convert(H.format),se=qt.convert(H.type);let Ot;H.isData3DTexture?(C.setTexture3D(H,0),Ot=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(C.setTexture2DArray(H,0),Ot=O.TEXTURE_2D_ARRAY):(C.setTexture2D(H,0),Ot=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const nn=O.getParameter(O.UNPACK_ROW_LENGTH),ve=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ne=O.getParameter(O.UNPACK_SKIP_PIXELS),vn=O.getParameter(O.UNPACK_SKIP_ROWS),Fe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,te);const Pn=w.isDataArrayTexture||w.isData3DTexture,Te=H.isDataArrayTexture||H.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Ve=Lt.get(w),vr=Lt.get(H),Ln=Lt.get(Ve.__renderTarget),Qt=Lt.get(vr.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let Xn=0;Xn<Ct;Xn++)Pn&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.get(w).__webglTexture,G,te+Xn),w.isDepthTexture?(Te&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.get(H).__webglTexture,G,Jt+Xn),O.blitFramebuffer(Nt,Zt,_t,xt,ft,yt,_t,xt,O.DEPTH_BUFFER_BIT,O.NEAREST)):Te?O.copyTexSubImage3D(Ot,G,ft,yt,Jt+Xn,Nt,Zt,_t,xt):O.copyTexSubImage2D(Ot,G,ft,yt,Jt+Xn,Nt,Zt,_t,xt);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Te?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ot,G,ft,yt,Jt,_t,xt,Ct,Ee,se,pe.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Ot,G,ft,yt,Jt,_t,xt,Ct,Ee,pe.data):O.texSubImage3D(Ot,G,ft,yt,Jt,_t,xt,Ct,Ee,se,pe):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,ft,yt,_t,xt,Ee,se,pe.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,ft,yt,pe.width,pe.height,Ee,pe.data):O.texSubImage2D(O.TEXTURE_2D,G,ft,yt,_t,xt,Ee,se,pe);O.pixelStorei(O.UNPACK_ROW_LENGTH,nn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),O.pixelStorei(O.UNPACK_SKIP_ROWS,vn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fe),G===0&&H.generateMipmaps&&O.generateMipmap(Ot),Pt.unbindTexture()},this.copyTextureToTexture3D=function(w,H,J=null,K=null,G=0){return w.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,w=arguments[2],H=arguments[3],G=arguments[4]||0),sa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,H,J,K,G)},this.initRenderTarget=function(w){Lt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Pt.unbindTexture()},this.resetState=function(){b=0,M=0,A=null,Pt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class Ip extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qE extends Cn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=fi,u=fi,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Np extends bn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ks=new Le,Fp=new Le,Rl=[],Op=new Ps,ZE=new Le,Xo=new wi,$o=new Ls;class KE extends wi{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Np(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ZE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Op.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Op)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),$o.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union($o)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(n),t.ray.intersectsSphere($o)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ks),Fp.multiplyMatrices(n,Ks),Xo.matrixWorld=Fp,Xo.raycast(t,Rl);for(let o=0,a=Rl.length;o<a;o++){const l=Rl[o];l.instanceId=s,l.object=this,e.push(l)}Rl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Np(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new qE(new Float32Array(r*this.count),r,this.count,Ff,Xi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hg extends Uo{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xc=new q,yc=new q,Bp=new Le,Yo=new Hf,Pl=new Ls,Ru=new q,kp=new q;class zp extends Rn{constructor(t=new di,e=new hg){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)xc.fromBufferAttribute(e,r-1),yc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=xc.distanceTo(yc);t.setAttribute("lineDistance",new Fi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,t.ray.intersectsSphere(Pl)===!1)return;Bp.copy(r).invert(),Yo.copy(t.ray).applyMatrix4(Bp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,p=_-1;g<p;g+=c){const m=u.getX(g),E=u.getX(g+1),S=Ll(this,t,Yo,l,m,E);S&&e.push(S)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(f),m=Ll(this,t,Yo,l,g,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,p=_-1;g<p;g+=c){const m=Ll(this,t,Yo,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=Ll(this,t,Yo,l,_-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ll(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(xc.fromBufferAttribute(o,r),yc.fromBufferAttribute(o,s),e.distanceSqToSegment(xc,yc,Ru,kp)>n)return;Ru.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ru);if(!(l<t.near||l>t.far))return{distance:l,point:kp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class JE extends Uo{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hp=new Le,Jh=new Hf,Dl=new Ls,Ul=new q;class jE extends Rn{constructor(t=new di,e=new JE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,t.ray.intersectsSphere(Dl)===!1)return;Hp.copy(r).invert(),Jh.copy(t.ray).applyMatrix4(Hp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=h,g=f;_<g;_++){const p=c.getX(_);Ul.fromBufferAttribute(d,p),Vp(Ul,p,l,r,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=h,g=f;_<g;_++)Ul.fromBufferAttribute(d,_),Vp(Ul,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vp(i,t,e,n,r,s,o){const a=Jh.distanceSqToPoint(i);if(a<e){const l=new q;Jh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class QE extends Cn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Xt:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new q,r=[],s=[],o=[],a=new q,l=new Le;for(let f=0;f<=t;f++){const _=f/t;r[f]=this.getTangentAt(_,new q)}s[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(dn(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(dn(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gf extends Zi{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Xt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tT extends Gf{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wf(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Il=new q,Pu=new Wf,Lu=new Wf,Du=new Wf;class eT extends Zi{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new q){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Il.subVectors(r[0],r[1]).add(r[0]),c=Il);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Il.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Pu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,g,p),Lu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,g,p),Du.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Pu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Lu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Du.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Pu.calc(l),Lu.calc(l),Du.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new q().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gp(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function nT(i,t){const e=1-i;return e*e*t}function iT(i,t){return 2*(1-i)*i*t}function rT(i,t){return i*i*t}function ba(i,t,e,n){return nT(i,t)+iT(i,e)+rT(i,n)}function sT(i,t){const e=1-i;return e*e*e*t}function oT(i,t){const e=1-i;return 3*e*e*i*t}function aT(i,t){return 3*(1-i)*i*i*t}function lT(i,t){return i*i*i*t}function wa(i,t,e,n,r){return sT(i,t)+oT(i,e)+aT(i,n)+lT(i,r)}class fg extends Zi{constructor(t=new Xt,e=new Xt,n=new Xt,r=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Xt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(wa(t,r.x,s.x,o.x,a.x),wa(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cT extends Zi{constructor(t=new q,e=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new q){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(wa(t,r.x,s.x,o.x,a.x),wa(t,r.y,s.y,o.y,a.y),wa(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dg extends Zi{constructor(t=new Xt,e=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uT extends Zi{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pg extends Zi{constructor(t=new Xt,e=new Xt,n=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Xt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ba(t,r.x,s.x,o.x),ba(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hT extends Zi{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ba(t,r.x,s.x,o.x),ba(t,r.y,s.y,o.y),ba(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mg extends Zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Xt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Gp(a,l.x,c.x,u.x,d.x),Gp(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Xt().fromArray(r))}return this}}var Wp=Object.freeze({__proto__:null,ArcCurve:tT,CatmullRomCurve3:eT,CubicBezierCurve:fg,CubicBezierCurve3:cT,EllipseCurve:Gf,LineCurve:dg,LineCurve3:uT,QuadraticBezierCurve:pg,QuadraticBezierCurve3:hT,SplineCurve:mg});class fT extends Zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wp[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Wp[r.type]().fromJSON(r))}return this}}class Xp extends fT{constructor(t){super(),this.type="Path",this.currentPoint=new Xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new dg(this.currentPoint.clone(),new Xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new pg(this.currentPoint.clone(),new Xt(t,e),new Xt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new fg(this.currentPoint.clone(),new Xt(t,e),new Xt(n,r),new Xt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new mg(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new Gf(t,e,n,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _g extends Xp{constructor(t){super(t),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Xp().fromJSON(r))}return this}}const dT={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=gg(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,f;if(n&&(s=vT(i,t,s,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let _=e;_<r;_+=e)d=i[_],h=i[_+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Ha(s,o,e,a,l,f,0),o}};function gg(i,t,e,n,r){let s,o;if(r===RT(i,t,e,n)>0)for(s=t;s<e;s+=n)o=$p(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=$p(s,i[s],i[s+1],o);return o&&Dc(o,o.next)&&(Ga(o),o=o.next),o}function ws(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Dc(e,e.next)||He(e.prev,e,e.next)===0)){if(Ga(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ha(i,t,e,n,r,s,o){if(!i)return;!o&&s&&ET(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?mT(i,n,r,s):pT(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ga(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=_T(ws(i),t,e),Ha(i,t,e,n,r,s,2)):o===2&&gT(i,t,e,n,r,s):Ha(ws(i),t,e,n,r,s,1);break}}}function pT(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=d&&_.y<=f&&oo(r,a,s,l,o,c,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function mT(i,t,e,n){const r=i.prev,s=i,o=i.next;if(He(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,_=u<d?u<h?u:h:d<h?d:h,g=a>l?a>c?a:c:l>c?l:c,p=u>d?u>h?u:h:d>h?d:h,m=jh(f,_,t,e,n),E=jh(g,p,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=m&&v&&v.z<=E;){if(S.x>=f&&S.x<=g&&S.y>=_&&S.y<=p&&S!==r&&S!==o&&oo(a,u,l,d,c,h,S.x,S.y)&&He(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==o&&oo(a,u,l,d,c,h,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=g&&S.y>=_&&S.y<=p&&S!==r&&S!==o&&oo(a,u,l,d,c,h,S.x,S.y)&&He(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==o&&oo(a,u,l,d,c,h,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _T(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Dc(r,s)&&vg(r,n,n.next,s)&&Va(r,s)&&Va(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ga(n),Ga(n.next),n=i=s),n=n.next}while(n!==i);return ws(n)}function gT(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wT(o,a)){let l=xg(o,a);o=ws(o,o.next),l=ws(l,l.next),Ha(o,t,e,n,r,s,0),Ha(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function vT(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=gg(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(bT(c));for(r.sort(xT),s=0;s<r.length;s++)e=yT(r[s],e);return e}function xT(i,t){return i.x-t.x}function yT(i,t){const e=ST(i,t);if(!e)return t;const n=xg(e,i);return ws(n,n.next),ws(e,e.next)}function ST(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=s&&h>n&&(n=h,r=e.x<e.next.x?e:e.next,h===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&oo(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),Va(e,i)&&(d<u||d===u&&(e.x>r.x||e.x===r.x&&MT(r,e)))&&(r=e,u=d)),e=e.next;while(e!==a);return r}function MT(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function ET(i,t,e,n){let r=i;do r.z===0&&(r.z=jh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,TT(r)}function TT(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function jh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bT(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function oo(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function wT(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!AT(i,t)&&(Va(i,t)&&Va(t,i)&&CT(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Dc(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Dc(i,t){return i.x===t.x&&i.y===t.y}function vg(i,t,e,n){const r=Fl(He(i,t,e)),s=Fl(He(i,t,n)),o=Fl(He(e,n,i)),a=Fl(He(e,n,t));return!!(r!==s&&o!==a||r===0&&Nl(i,e,t)||s===0&&Nl(i,n,t)||o===0&&Nl(e,i,n)||a===0&&Nl(e,t,n))}function Nl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fl(i){return i>0?1:i<0?-1:0}function AT(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Va(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function CT(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xg(i,t){const e=new Qh(i.i,i.x,i.y),n=new Qh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $p(i,t,e,n){const r=new Qh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function RT(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Aa{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Aa.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Yp(t),qp(n,t);let o=t.length;e.forEach(Yp);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,qp(n,e[l]);const a=dT.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Yp(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xf extends di{constructor(t=new _g([new Xt(0,.5),new Xt(-.5,-.5),new Xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Fi(r,3)),this.setAttribute("normal",new Fi(s,3)),this.setAttribute("uv",new Fi(o,2));function c(u){const d=r.length/3,h=u.extractPoints(e);let f=h.shape;const _=h.holes;Aa.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=_.length;p<m;p++){const E=_[p];Aa.isClockWise(E)===!0&&(_[p]=E.reverse())}const g=Aa.triangulateShape(f,_);for(let p=0,m=_.length;p<m;p++){const E=_[p];f=f.concat(E)}for(let p=0,m=f.length;p<m;p++){const E=f[p];r.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let p=0,m=g.length;p<m;p++){const E=g[p],S=E[0]+d,v=E[1]+d,R=E[2]+d;n.push(S,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return PT(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];n.push(o)}return new Xf(n,t.curveSegments)}}function PT(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);const LT={solver:"CGA",run:2,slack:40,rows:[{name:"燃煤",bits:24,pick:0,gen:400,share:16.2},{name:"燃氣",bits:24,pick:18,gen:1088.1,share:44.2},{name:"再生能源",bits:24,pick:23,gen:775,share:31.5},{name:"燃油",bits:24,pick:0,gen:30.6,share:1.2},{name:"汽電共生",bits:24,pick:21,gen:121.6,share:4.9},{name:"核能",bits:1,pick:0,gen:0,share:0},{name:"抽蓄水力",bits:8,pick:6,gen:41,share:1.7},{name:"電池儲能",bits:8,pick:7,gen:7,share:.3}]},DT=[{k:"lead",big:{num:6,den:6},bigCap:"個需求量，CGA 的 H_obj 都最低",text:"177 位元、6 個需求量（2,524～3,250 億度），四個求解器各跑 50 次、取最好的一次比較：每個需求量都是 CGA 的 H_obj 最低，比第二名低 2.0%～3.6%。",pending:"",chart:{kind:"line",x:[2524,2650,2800,2950,3100,3250],xLabel:"需求量（億度）",yLabel:"H_obj（越低越好）",hi:"CGA",rows:[{id:"CGA",name:"CGA",color:"--solver-cga",y:[.6072,.6572,.7228,.7817,.8369,.8968]},{id:"Greedy",name:"Greedy",color:"--solver-greedy",y:[.6324,.6837,.7529,.8074,.8722,.9263]},{id:"SA",name:"SA",color:"--solver-sa",y:[.6225,.6817,.7412,.7994,.8703,.9283]},{id:"SQA",name:"SQA",color:"--solver-sqa",y:[.6254,.677,.743,.8012,.868,.915]}]},src:["multiD_ALL_20260419_224832.csv"]},{k:"slack",big:{num:0,den:null},bigCap:"個違規",text:"加上 bounded-slack 之後，四個求解器在 6 個需求量取最好的一次，都沒有違反任何限制，總發電量也都落在需求 ±50 億度以內。",pending:"",chart:null,src:["multiD_ALL_20260419_224832.csv"]},{k:"qaoa",big:null,bigCap:"",text:"24 位元縮小版（6 個需求量，數值縮小 100 倍）：QAOA（Qiskit Aer）在每個需求量都找到合法解，但 H_obj 比 CGA 高 1.6%～5.5%（5 個需求量）；需求量 2,800 億度時反而比 CGA 低 2.7%，平均高 2.4%。",pending:"",gapVsCGA:[3.3,3,5.5,3.8,-2.7,1.6],chart:{kind:"gap",cap:"QAOA 的 H_obj 比 CGA 高多少（%）",rows:[{name:"2,000",v:3.3},{name:"2,200",v:3},{name:"2,400",v:5.5},{name:"2,600",v:3.8},{name:"2,800",v:-2.7},{name:"3,000",v:1.6}]},src:["multiD_ALL_20260424_022244.csv"]}],UT="目前的量子演算法在這個規模，和古典方法還有差距。",IT={max:50,anchor:2524,strict:990,band:10113917,rows:[{id:"CGA",name:"CGA",color:"--solver-cga",dev:[-46.6,-49.9,-46.7,-43.3,-49.9,-49.8],D:[2524,2650,2800,2950,3100,3250]},{id:"Greedy",name:"Greedy",color:"--solver-greedy",dev:[.1,0,0,.1,0,0],D:[2524,2650,2800,2950,3100,3250]},{id:"SA",name:"SA",color:"--solver-sa",dev:[-.1,-.1,-.1,.1,-.1,0],D:[2524,2650,2800,2950,3100,3250]},{id:"SQA",name:"SQA",color:"--solver-sqa",dev:[.1,0,0,.1,.1,.1],D:[2524,2650,2800,2950,3100,3250]}]},No={dispatch:LT,findings:DT,summary:UT,slack:IT},NT={燃煤:"--e-coal",燃氣:"--e-gas",再生能源:"--e-wind",燃油:"--e-oil",汽電共生:"--e-cogen",核能:"--e-nuclear",抽蓄水力:"--e-hydro",電池儲能:"--e-solar"},os=No.dispatch.rows.map(i=>({name:i.name,share:i.share,tiles:i.bits,pick:i.pick,gen:i.gen,color:NT[i.name]||"--text-2"})),yg=No.dispatch.slack,FT=Math.max(...os.map(i=>i.share))||1,rr=177,OT=12,BT=rr*OT,Ge=4e3,tf=5,Zp=32,Js=15,Ol=.105,qo=.078,Uu=2.4,Iu=.175,Zo=.06,kT=.085,Bl=-.95,la=i=>i<0?0:i>1?1:i,ca=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ko=(i,t,e)=>ca(la((i-t)/(e-t))),ae=(i,t,e)=>i+(t-i)*e;function zT(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Oi(i){return new ye(getComputedStyle(document.documentElement).getPropertyValue(i).trim())}const HT=`
  attribute vec3 color;
  attribute float aSize;
  attribute float aAlpha;
  attribute float aRand;
  uniform float uTime, uPR, uTw, uVis;
  varying vec3 vColor;
  varying float vA;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float tw = 1.0 + uTw * 0.5 * sin(uTime * (1.3 + aRand * 2.6) + aRand * 47.0);
    // 點的範圍放大，外圈留給光暈
    gl_PointSize = aSize * 2.4 * uPR * (${tf.toFixed(1)} / -mv.z) * mix(1.0, tw, 0.6);
    vColor = color;
    vA = aAlpha * mix(1.0, tw, 0.8) * uVis;
  }`,VT=`
  uniform float uHalo;
  varying vec3 vColor;
  varying float vA;
  void main() {
    // 實心核心＋很淡的外圈光暈（只在粒子周圍，不會把背景染灰）
    float d = length(gl_PointCoord - 0.5);
    float core = smoothstep(0.22, 0.04, d);
    float halo = pow(1.0 - smoothstep(0.0, 0.5, d), 2.2) * uHalo;
    float a = (core + halo) * vA;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;function GT(i,{reduced:t=!1,light:e=!1}={}){const n=new YE({canvas:i,antialias:!1,alpha:!0,powerPreference:"high-performance"});let r=Math.min(window.devicePixelRatio||1,1.5);n.setPixelRatio(r);const s={bg:Oi("--bg"),accent:Oi("--accent"),quantum:Oi("--quantum"),text:Oi("--text"),text2:Oi("--text-2"),sBg:Oi("--stage-bg"),sAccent:Oi("--stage-accent"),sText:Oi("--stage-text"),sText2:Oi("--stage-text-2"),sQuantum:Oi("--stage-sqa")};n.setClearColor(0,0),n.autoClear=!1;const o=e?{acc:s.sAccent,dim:s.sText2,q:s.sQuantum,bg:s.sBg,line:s.sText}:{acc:s.accent,dim:s.text2,q:s.quantum,bg:s.bg,line:s.text},a=new Ip,l=new Si(Zp,1,.1,50);l.position.set(0,0,tf);const c=zT(177),u=new Float32Array(Ge*3),d=new Float32Array(Ge),h=Math.PI*(3-Math.sqrt(5));for(let et=0;et<Ge;et++){const ct=1-et/(Ge-1)*2,at=Math.sqrt(1-ct*ct),pt=h*et;u.set([Math.cos(pt)*at,ct,Math.sin(pt)*at],et*3),d[et]=c()}for(let et=Ge-1;et>0;et--){const ct=Math.floor(c()*(et+1));for(let at=0;at<3;at++){const pt=u[et*3+at];u[et*3+at]=u[ct*3+at],u[ct*3+at]=pt}}const f=new Int16Array(Ge),_=new Float32Array(Ge),g=new Float32Array(Ge),p=new Float32Array(Ge*3);for(let et=0;et<Ge;et++){if(et<BT){const pt=et%rr,Ft=Math.floor(et/rr),gt=Ft%4,Ht=Math.floor(Ft/4);f[et]=pt,_[et]=(gt-1.5)/3+(c()-.5)*.04,g[et]=(Ht-1)/2+(c()-.5)*.04}else f[et]=-1;const ct=c()*Math.PI*2,at=Math.sqrt(c())*.3;p.set([Math.cos(ct)*at,(c()-.5)*.06,Math.sin(ct)*at],et*3)}const m=[];for(let et=0;et<rr;et++){const ct=et%Js,at=Math.floor(et/Js);m.push({b0:c()<.5?0:1,gx:(ct-(Js-1)/2)*Ol,gy:((Math.ceil(rr/Js)-1)/2-at)*Ol,rest:.3+c()*.68,phi:0,rate:.6+c()*1.5,fin:c()<.45?1:0})}const E=m.map((et,ct)=>ct).sort((et,ct)=>m[ct].gy-m[et].gy||m[et].gx-m[ct].gx),S=os.map((et,ct)=>o.acc.clone().lerp(o.dim,ct/(os.length-1)));let v=0;os.forEach((et,ct)=>{const at=E.slice(v,v+et.tiles).sort((gt,Ht)=>m[gt].gx-m[Ht].gx);v+=et.tiles;const pt=(3.5-ct)*Iu,Ft=et.share/FT*Uu;at.forEach((gt,Ht)=>Object.assign(m[gt],{k:ct,d:Ht/et.tiles,bx:Bl+Zo/2+Math.floor(Ht/2)*Zo,by:pt+(Ht%2-.5)*Zo,rx:Bl+(Ht+.5)*Ft/et.tiles,rw:Ft/et.tiles,ry:pt}))}),E.slice(v).forEach((et,ct)=>Object.assign(m[et],{k:os.length,slack:!0,d:ct/yg,bx:m[et].gx,by:m[et].gy,rx:m[et].gx,rw:0,ry:m[et].gy}));const R=new di,b=new Float32Array(Ge*3),M=new Float32Array(Ge*3),A=new Float32Array(Ge),y=new Float32Array(Ge);R.setAttribute("position",new bn(b,3).setUsage(ll)),R.setAttribute("color",new bn(M,3).setUsage(ll)),R.setAttribute("aSize",new bn(A,1).setUsage(ll)),R.setAttribute("aAlpha",new bn(y,1).setUsage(ll)),R.setAttribute("aRand",new bn(d,1));const x=new gr({uniforms:{uTime:{value:0},uPR:{value:r},uTw:{value:t?0:1},uHalo:{value:e?0:.22},uVis:{value:1}},vertexShader:HT,fragmentShader:VT,transparent:!0,depthWrite:!1,blending:e?xs:uh}),L=new jE(R,x);L.frustumCulled=!1,a.add(L);const D=new Float32Array(Ge*3);for(let et=0;et<Ge;et++){const ct=d[et]<.2?o.q:o.acc;D.set([ct.r,ct.g,ct.b],et*3)}const B=new Float32Array(Ge*3);for(let et=0;et<Ge;et++){const ct=d[et]<.4?s.text:s.accent;B.set([ct.r,ct.g,ct.b],et*3)}const U=s.text.clone(),F=new ye,k=(()=>{const at=new _g;return at.moveTo(-.5+.11,-.5),at.lineTo(.5-.11,-.5),at.quadraticCurveTo(.5,-.5,.5,-.5+.11),at.lineTo(.5,.5-.11),at.quadraticCurveTo(.5,.5,.5-.11,.5),at.lineTo(-.5+.11,.5),at.quadraticCurveTo(-.5,.5,-.5,.5-.11),at.lineTo(-.5,-.5+.11),at.quadraticCurveTo(-.5,-.5,-.5+.11,-.5),new Xf(at,3)})(),X=new vc({transparent:!0,opacity:0,side:Vi,depthWrite:!1}),z=new KE(k,X,rr);z.frustumCulled=!1,z.visible=!1;const it=o.acc.clone(),P=o.bg.clone().lerp(o.dim,.42);for(let et=0;et<rr;et++)z.setColorAt(et,P);a.add(z);const $=new Rn,st=new aa,Rt=new hg({color:o.line,transparent:!0,opacity:.12,depthWrite:!1}),V=(et,ct)=>{const at=[];for(let Ft=0;Ft<=96;Ft++){const gt=Ft/96*Math.PI*2;at.push(new q(Math.cos(gt),0,Math.sin(gt)))}const pt=new zp(new di().setFromPoints(at),Rt);return pt.rotation.set(et,ct,0),pt};st.add(V(0,0),V(Math.PI/2,0),V(Math.PI/2,Math.PI/2));const Q=Rt.clone(),ut=new zp(new di().setFromPoints([new q(0,-1.18,0),new q(0,1.18,0)]),Q);a.add(st,ut);const I={x:0,y:0,on:!1},j=new Float32Array(Ge*3),nt=new Float32Array(Ge*3),ht={yaw:.4,pitch:-.25,spin:.4};let Mt=1,mt=1,Ut=1,O=1,ee=1,kt=1;const W={hero:null,ch3:null};function Pt(et){const ct=W[et]||{x0:Mt*.55,y0:80,x1:Mt-40,y1:mt-40},at=(ct.x0/Mt-.5)*ee,pt=(ct.x1/Mt-.5)*ee,Ft=(.5-ct.y1/mt)*O,gt=(.5-ct.y0/mt)*O;return{cx:(at+pt)/2,cy:(Ft+gt)/2,w:Math.max(.1,pt-at),h:Math.max(.1,gt-Ft)}}let ne=0;const Lt=new q,C=new Do,T=new qi,Z=new Le,Y={heroC:[0,0],R:1,poleC:[0,0],R2:1,gs:1,gc:[0,0],bs:1,bc:[0,0]};function ot(){const et=Pt("hero");Y.R=Math.min(O*.23,et.w*.42,et.h*.42),Y.heroC=[et.cx,et.cy];const ct=Pt("ch3");Y.R2=Math.min(O*.23,ct.h*.36,ct.w*.42),Y.poleC=[ct.cx,ct.cy],Y.gs=Math.min(ct.w*.94/(Js*Ol),ct.h*.9/(Math.ceil(rr/Js)*Ol)),Y.gc=[ct.cx,ct.cy];const at=Uu+.55,pt=8*Iu;Y.bs=Math.min(ct.w*.94/at,ct.h*.9/pt),Y.bc=[ct.cx-Y.bs*(Bl+Uu/2-.27),ct.cy]}let rt=!1;function Et(et,ct,at=1,pt=!1,Ft=null,gt=1){const Ht=e?la(gt):1;x.uniforms.uVis.value=at,rt&&(ct=0),ne+=ct;const Bt=!t;x.uniforms.uTime.value=ne;const $t=Ko(et,.12,.25),Ae=Ko(et,.3,.4),re=Bt?1-Ko(et,.44,.58):0,Se=Ko(et,.71,.79);x.uniforms.uTw.value=Bt?ae(1,0,Ae):0;const Ie=la((Ae-.6)/.4);if(tt.level===0&&!e&&(x.uniforms.uHalo.value=ae(.22,.04,$t)),Bt){ht.spin+=ct*.07;const ft=ht.spin+(I.on?I.x*.55:0),yt=-.25+(I.on?-I.y*.35:0),Jt=1-Math.pow(.04,ct);ht.yaw=ae(ht.yaw,ft,Jt),ht.pitch=ae(ht.pitch,yt,Jt)}C.setFromEuler(T.set(ht.pitch,ht.yaw,0));const de=Z.makeRotationFromQuaternion(C).elements,Me=ca($t);let ge=pt?Y.poleC:Y.heroC,gn=pt?Y.R2:Y.R;Ft&&(ge=[(Ft.cx/Mt-.5)*ee,(.5-Ft.cy/mt)*O],gn=Ft.r*kt);const Ce=Ft?Ft.a:1,Ze=[ae(ge[0],Y.poleC[0],Me),ae(ge[1],Y.poleC[1],Me)],w=ae(gn,Y.R2,Me);st.position.set(Ze[0],Ze[1],0),st.scale.setScalar(w),st.quaternion.copy(C),e&&Rt.color.copy(F.copy(U).lerp(o.line,Ht)),Rt.opacity=(e?ae(.22,.12,Ht):.12)*(1-$t)*at,st.visible=Rt.opacity>.003,ut.position.set(Y.poleC[0],Y.poleC[1],0),ut.scale.setScalar(Y.R2),Q.opacity=.16*$t*(1-Ae)*at,ut.visible=Q.opacity>.003;const H=I.x*(ee/2),J=I.y*(O/2),K=(1-$t)*(Ft?Ft.push?1:0:pt?0:1),G=.5*w,_t=22,xt=48,Ct=Math.pow(.86,ct*60),Nt=et>.41&&et<.62;for(const ft of m){if(!Nt)et<=.41&&(ft.phi=ft.rest);else if(!Bt)ft.phi=ft.rest+(et>=.5?ft.fin:0);else{const Ee=ft.phi%1<.28;(re>0||Ee)&&(ft.phi+=ct*(Ee?Math.max(ft.rate*re*2.2,2.4):ft.rate*re*2.2),re<=0&&Ee&&ft.phi%1>=.28&&(ft.phi=Math.floor(ft.phi)+.28))}const yt=Math.floor(ft.phi),Jt=ft.phi-yt,pe=Jt<.28?ca(Jt/.28):1;ft.ang=Math.PI*(yt-1+pe),ft.bit=ft.b0^Math.round(ft.ang/Math.PI)&1,ft.lift=Jt<.28&&re>0?Math.sin(pe*Math.PI):0}const Zt=o.acc,te=o.dim;for(let ft=0;ft<Ge;ft++){const yt=ft*3,Jt=u[yt],pe=u[yt+1],Ee=u[yt+2];let se=(de[0]*Jt+de[4]*pe+de[8]*Ee)*w+Ze[0],Ot=(de[1]*Jt+de[5]*pe+de[9]*Ee)*w+Ze[1],nn=(de[2]*Jt+de[6]*pe+de[10]*Ee)*w;if(Bt&&K>.01){if(I.on){const Qt=se-H,Xn=Ot-J,Wr=Qt*Qt+Xn*Xn;if(Wr<G*G){const Fo=Math.sqrt(Wr)+1e-4,Oo=(1-Fo/G)**2*_t;nt[yt]+=Qt/Fo*Oo*ct,nt[yt+1]+=Xn/Fo*Oo*ct,nt[yt+2]+=Oo*.4*ct}}for(let Qt=0;Qt<3;Qt++)nt[yt+Qt]=(nt[yt+Qt]-j[yt+Qt]*xt*ct)*Ct,j[yt+Qt]+=nt[yt+Qt]*ct}else if(j[yt]||j[yt+1]||j[yt+2])for(let Qt=0;Qt<3;Qt++)j[yt+Qt]*=.9,nt[yt+Qt]=0;se+=j[yt]*K,Ot+=j[yt+1]*K,nn+=j[yt+2]*K;const ve=f[ft],Ne=ca(la((et-.12-d[ft]*.04)/.13));let vn=D[yt],Fe=D[yt+1],Pn=D[yt+2],Te=2.1,Ve=.9;Ht<1&&(vn=ae(B[yt],vn,Ht),Fe=ae(B[yt+1],Fe,Ht),Pn=ae(B[yt+2],Pn,Ht));const vr=w>0?Math.max(-1,Math.min(1,nn/w)):0,Ln=1-Ne;if(Te*=1+.42*vr*Ln,Ve*=ae(1,(.3+.7*(vr*.5+.5))*Ce,Ln),ve<0)se=ae(se,se*1.6,Ne),Ot=ae(Ot,Ot*1.6,Ne),Ve=.9*(1-Ne);else{const Qt=m[ve],Xn=Qt.b0===0?1:-1,Wr=Y.poleC[0]+p[yt]*Y.R2,Fo=Y.poleC[1]+Xn*Y.R2*(1+p[yt+1]),Oo=p[yt+2]*Y.R2;se=ae(se,Wr,Ne),Ot=ae(Ot,Fo,Ne),nn=ae(nn,Oo,Ne);const Fc=Qt.b0?Zt:te;if(vn=ae(vn,Fc.r,Ne),Fe=ae(Fe,Fc.g,Ne),Pn=ae(Pn,Fc.b,Ne),Ve=ae(Ve,Qt.b0?.6:.32,Ne),Ae>0){const Lg=Math.cos(Qt.ang),Dg=Math.sin(Qt.ang),jf=_[ft]*qo,Oc=g[ft]*qo,Ug=Y.gc[0]+Y.gs*(Qt.gx+jf),Ig=Y.gc[1]+Y.gs*(Qt.gy+Oc*Lg),Ng=Y.gs*(Oc*Dg+Qt.lift*.05),xr=ca(la((Ae-.25*(1-d[ft]))/.75));se=ae(se,Ug,xr),Ot=ae(Ot,Ig,xr),nn=ae(nn,Ng,xr);const Bc=Qt.bit?Zt:te;vn=ae(vn,Bc.r,xr),Fe=ae(Fe,Bc.g,xr),Pn=ae(Pn,Bc.b,xr),Te=ae(Te,2.4,xr),Ve=ae(Ve,Qt.bit?.95:.38,xr)*(1-Ie);const Ci=Ko(et,.6+Qt.k*.005+Qt.d*.03,.68+Qt.k*.005+Qt.d*.03);if(Ci>0&&Qt.slack)Ve=ae(Ve,0,Ci);else if(Ci>0){const Fg=Y.bc[0]+Y.bs*(ae(Qt.bx,Qt.rx,Se)+jf/qo*ae(Zo*.8,Qt.rw,Se)),Og=Y.bc[1]+Y.bs*(ae(Qt.by,Qt.ry,Se)+Oc/qo*ae(Zo*.8,kT,Se)),Bg=Math.sin(Ci*Math.PI)*.25;se=ae(se,Fg,Ci),Ot=ae(Ot,Og,Ci),nn=ae(nn,Bg,Ci);const kc=S[Qt.k];vn=ae(vn,kc.r,Ci),Fe=ae(Fe,kc.g,Ci),Pn=ae(Pn,kc.b,Ci),Ve=ae(Ve,Qt.rw>5e-4?.9:.9*(1-Se),Ci)}}}b[yt]=se,b[yt+1]=Ot,b[yt+2]=nn,M[yt]=vn,M[yt+1]=Fe,M[yt+2]=Pn,A[ft]=Te,y[ft]=Ve}if(z.visible=Ie>.001&&at>.001,z.visible){X.opacity=Ie*at;const ft=qo*Y.gs;for(let yt=0;yt<rr;yt++){const Jt=m[yt];$.position.set(Y.gc[0]+Y.gs*Jt.gx,Y.gc[1]+Y.gs*Jt.gy,Y.gs*Jt.lift*.05),$.rotation.set(Jt.ang,0,0),$.scale.set(ft,ft,1),$.updateMatrix(),z.setMatrixAt(yt,$.matrix),z.setColorAt(yt,Jt.bit?it:P)}z.instanceMatrix.needsUpdate=!0,z.instanceColor.needsUpdate=!0}R.attributes.position.needsUpdate=!0,R.attributes.color.needsUpdate=!0,R.attributes.aSize.needsUpdate=!0,R.attributes.aAlpha.needsUpdate=!0}const vt=new Ip,wt=new sg(-.5,.5,.5,-.5,0,1);let Yt=null,dt=null;const St=new vc({toneMapped:!1,transparent:!0});vt.add(new wi(new Ya(1,1),St));const Wt=new ye,Vt=et=>{const ct=Math.max(0,et.left),at=Math.min(Mt,et.right),pt=Math.max(0,et.top),Ft=Math.min(mt,et.bottom);return at>ct&&Ft>pt?[ct,mt-Ft,at-ct,Ft-pt]:null};function It({panel:et=null,pv:ct=null,particles:at=!1}={}){n.setScissorTest(!1),n.setViewport(0,0,Mt,mt),n.setClearColor(0,0),n.clear();const pt=et&&Vt(et.rect);pt&&(n.setScissorTest(!0),n.setScissor(...pt),n.setClearColor(Wt.set(et.color),1),n.clear(),n.setClearColor(0,0));const Ft=ct&&Vt(ct.rect);Ft&&(dt!==ct.canvas&&(Yt?.dispose(),Yt=new QE(ct.canvas),Yt.colorSpace=ri,Yt.minFilter=Ii,Yt.generateMipmaps=!1,St.map=Yt,St.needsUpdate=!0,dt=ct.canvas),ct.dirty&&(Yt.needsUpdate=!0),n.setViewport(ct.rect.left,mt-ct.rect.bottom,ct.rect.width,ct.rect.height),n.setScissorTest(!0),n.setScissor(...Ft),n.render(vt,wt),n.setViewport(0,0,Mt,mt)),n.setScissorTest(!1),at&&n.render(a,l)}const ie=(et,ct)=>(Lt.set(et,ct,0).project(l),{x:(Lt.x*.5+.5)*Mt,y:(-Lt.y*.5+.5)*mt});function qt(){return[ie(Y.poleC[0]+Y.R2*.42,Y.poleC[1]+Y.R2*1.1),ie(Y.poleC[0]+Y.R2*.42,Y.poleC[1]-Y.R2*1.1)]}function me(){return os.map((et,ct)=>ie(Y.bc[0]+Y.bs*(Bl-.05),Y.bc[1]+Y.bs*((3.5-ct)*Iu)))}function N(et,ct,at){const pt=i.getBoundingClientRect();I.x=(et-pt.left)/pt.width*2-1,I.y=-((ct-pt.top)/pt.height*2-1),I.on=at}function Tt(){Mt=i.clientWidth||window.innerWidth,mt=i.clientHeight||window.innerHeight,Ut=Mt/mt,l.aspect=Ut,l.updateProjectionMatrix(),O=2*tf*Math.tan(Ix.degToRad(Zp/2)),ee=O*Ut,kt=ee/Mt,n.setSize(Mt,mt,!1),x.uniforms.uPR.value=r,ot()}const tt={level:0,count:Ge};function lt(){tt.level++,tt.level===1?x.uniforms.uHalo.value=0:tt.level===2?(tt.count=3e3,R.setDrawRange(0,3e3)):tt.level===3&&(tt.count=2e3,R.setDrawRange(0,2e3),r=1,n.setPixelRatio(1),Tt())}Tt();function bt(et,ct){W.hero=et,W.ch3=ct,ot()}const At=(et,ct)=>({cx:(et[0]/ee+.5)*Mt,cy:(.5-et[1]/O)*mt,r:ct/kt});function Kt(){return{hero:At(Y.heroC,Y.R),ch3:At(Y.poleC,Y.R2)}}return{update:Et,render:It,resize:Tt,setPointer:N,setRegions:bt,ballDefaults:Kt,polePoints:qt,labelPoints:me,degrade:lt,quality:tt,setPaused:et=>rt=et}}const WT=[{id:"CGA",name:"CGA",type:"GPU 退火（伺服器）",desc:"把完整的 177 位元 QUBO 送到 GPU 退火伺服器，大量退火後取能量最低的樣本。"},{id:"Greedy",name:"Greedy",type:"古典啟發式",desc:"每次只調整一種電源，直到任何單一調整都無法再降低能量。"},{id:"SA",name:"SA",type:"模擬退火",desc:"單一搜尋鏈；變差時依溫度以機率接受，溫度逐步下降。"},{id:"SQA",name:"SQA",type:"模擬量子退火",desc:"多個副本連成環，橫向場減弱後，副本收攏成同一個解。"}],js=(i,t,e)=>i<t?t:i>e?e:i,Kp=(i,t,e)=>i+(t-i)*e,Un=Math.random,XT=[[-.48,.34,1,.2],[.42,-.36,.78,.2],[.3,.46,.62,.16],[-.34,-.48,.58,.17],[.62,.12,.4,.13]];function nr(i,t){let e=.18*(i*i+t*t);for(const[n,r,s,o]of XT)e-=s*Math.exp(-((i-n)**2+(t-r)**2)/(2*o*o));return e}function $T(i,{reduced:t=!1}={}){const e=document.createElement("canvas"),n=e.getContext("2d"),r=getComputedStyle(document.documentElement),s=$=>r.getPropertyValue($).trim(),o={surface:s("--surface"),hair:s("--hair"),text:s("--text"),text2:s("--text-2"),accent:s("--accent"),quantum:s("--quantum")};let a=1,l=1,c=1,u=null,d="SA",h=null,f=0,_="";const g=[],p=$=>($*.5+.5)*a,m=$=>(-$*.5+.5)*l;function E(){u=document.createElement("canvas"),u.width=a*c,u.height=l*c;const $=u.getContext("2d");$.scale(c,c);const st=90,Rt=[];let V=1/0,Q=-1/0;for(let I=0;I<=st;I++){Rt.push([]);for(let j=0;j<=st;j++){const nt=nr(-1+2*j/st,1-2*I/st);Rt[I].push(nt),V=Math.min(V,nt),Q=Math.max(Q,nt)}}const ut=14;for(let I=1;I<ut;I++){const j=V+(Q-V)*I/ut,nt=1-I/ut;$.strokeStyle=o.text,$.globalAlpha=.05+.13*nt*nt,$.lineWidth=Math.max(1,Math.min(2,Math.min(a,l)/320)),$.beginPath();for(let ht=0;ht<st;ht++)for(let Mt=0;Mt<st;Mt++){const mt=Rt[ht][Mt],Ut=Rt[ht][Mt+1],O=Rt[ht+1][Mt+1],ee=Rt[ht+1][Mt],kt=(mt>j?8:0)|(Ut>j?4:0)|(O>j?2:0)|(ee>j?1:0);if(kt===0||kt===15)continue;const W=Mt/st*a,Pt=ht/st*l,ne=a/st,Lt=l/st,C={t:[W+ne*((j-mt)/(Ut-mt)),Pt],r:[W+ne,Pt+Lt*((j-Ut)/(O-Ut))],b:[W+ne*((j-ee)/(O-ee)),Pt+Lt],l:[W,Pt+Lt*((j-mt)/(ee-mt))]},T={1:["l","b"],2:["b","r"],3:["l","r"],4:["t","r"],5:["l","t","b","r"],6:["t","b"],7:["l","t"],8:["l","t"],9:["t","b"],10:["t","r","l","b"],11:["t","r"],12:["l","r"],13:["b","r"],14:["l","b"]}[kt];for(let Z=0;Z<T.length;Z+=2)$.moveTo(...C[T[Z]]),$.lineTo(...C[T[Z+1]])}$.stroke()}$.globalAlpha=1}const S=()=>[Un()*1.7-.85,Un()*1.7-.85];function v(){if(f=performance.now(),d==="Greedy"){const $=S();h={cur:$,path:[$],old:[],nextAt:0,holdUntil:0}}else if(d==="SA"){const[$,st]=S();h={u:$,v:st,trail:[[$,st]],rej:[],step:0,T:1}}else d==="SQA"?h={b:Array.from({length:4},S),step:0}:h={ch:Array.from({length:24},()=>{const[$,st]=S();return{u:$,v:st}}),T:1}}const R=5600;function b($){const st=$-f,Rt=st%R/R;if(st>R&&d!=="Greedy"){v();return}if(d==="Greedy"){if($<h.holdUntil)return;if($>=h.nextAt){const[V,Q]=h.cur;let ut=[V,Q],I=nr(V,Q);for(const j of[0,1])for(let nt=0;nt<=80;nt++){const ht=-1+nt/40,Mt=j?V:ht,mt=j?ht:Q,Ut=nr(Mt,mt);Ut<I-1e-6&&(I=Ut,ut=[Mt,mt])}if(ut[0]===V&&ut[1]===Q)h.old.push(h.path.slice()),h.old.length>4&&h.old.shift(),h.cur=S(),h.path=[h.cur],h.holdUntil=$+700;else{const j=Math.abs(ut[0]-V)>1e-9?[ut[0],Q]:ut;h.cur=j,h.path.push(j)}h.nextAt=$+420}_=`STEP ${h.path.length}  單一座標`}else if(d==="SA"){h.T=Math.pow(.01,Rt);for(let V=0;V<3;V++){const Q=Un()<.5,ut=(Un()<.5?-1:1)*(.02+Un()*.08),I=Q?js(h.u+ut,-1,1):h.u,j=Q?h.v:js(h.v+ut,-1,1),nt=nr(I,j)-nr(h.u,h.v);nt<0||Un()<Math.exp(-nt/(h.T*.3))?(h.u=I,h.v=j,h.trail.push([I,j]),h.trail.length>90&&h.trail.shift()):Un()<.3&&h.rej.push({u:I,v:j,l:1}),h.step++}_=`T ${h.T.toFixed(3)}  STEP ${h.step}`}else if(d==="SQA"){const V=Rt,Q=Kp(1,.02,V),ut=Kp(3,.01,V),I=h.b.length,j=-.5*Q*I*Math.log(Math.max(Math.tanh(ut/(I*Q)),1e-12)),nt=(ht,Mt)=>-Math.exp(-((ht[0]-Mt[0])**2+(ht[1]-Mt[1])**2)/.2);for(let ht=0;ht<2;ht++)for(let Mt=0;Mt<I;Mt++){const mt=h.b[Mt],Ut=h.b[(Mt+I-1)%I],O=h.b[(Mt+1)%I],ee=Un()<.5,kt=(Un()<.5?-1:1)*(.02+Un()*.08),W=ee?[js(mt[0]+kt,-1,1),mt[1]]:[mt[0],js(mt[1]+kt,-1,1)],Pt=(nr(W[0],W[1])-nr(mt[0],mt[1]))*4/I+j*(nt(W,Ut)+nt(W,O)-nt(mt,Ut)-nt(mt,O));(Pt<0||Un()<Math.exp(-Pt/Math.max(Q,1e-9)))&&(h.b[Mt]=W)}_=`Γ ${ut.toFixed(2)}  T ${Q.toFixed(2)}`}else{h.T=Math.pow(.01,Rt);for(const V of h.ch){const Q=Un()<.5,ut=(Un()<.5?-1:1)*(.02+Un()*.08),I=Q?js(V.u+ut,-1,1):V.u,j=Q?V.v:js(V.v+ut,-1,1),nt=nr(I,j)-nr(V.u,V.v);(nt<0||Un()<Math.exp(-nt/(h.T*.3)))&&(V.u=I,V.v=j)}_=`24 CHAINS  T ${h.T.toFixed(3)}`}}const M=()=>Math.max(1,Math.min(2,Math.min(a,l)/320)),A=($,st,Rt,V,Q)=>{n.globalAlpha=Q,n.fillStyle=V,n.beginPath(),n.arc(p($),m(st),Rt*M(),0,7),n.fill()},y=($,st,Rt,V,Q)=>{n.globalAlpha=Q,n.strokeStyle=V,n.lineWidth=M(),n.beginPath(),n.arc(p($),m(st),Rt*M(),0,7),n.stroke()},x=($,st,Rt,V=1)=>{$.length<2||(n.globalAlpha=Rt,n.strokeStyle=st,n.lineWidth=V*M(),n.beginPath(),$.forEach((Q,ut)=>ut?n.lineTo(p(Q[0]),m(Q[1])):n.moveTo(p(Q[0]),m(Q[1]))),n.stroke())};function L(){n.setTransform(c,0,0,c,0,0),n.clearRect(0,0,a,l),n.save(),n.beginPath(),n.roundRect(0,0,a,l,16),n.clip(),n.globalAlpha=1,n.fillStyle=o.surface,n.fillRect(0,0,a,l),u&&n.drawImage(u,0,0,a,l);const $=o.accent;d==="Greedy"?(h.old.forEach(st=>x(st,o.text2,.35)),x(h.path,$,.9,1.5),h.path.forEach(st=>A(st[0],st[1],2,$,.7)),A(h.cur[0],h.cur[1],4.5,$,1)):d==="SA"?(x(h.trail,$,.45,1.2),h.rej.forEach(st=>{y(st.u,st.v,3,o.text2,.5*st.l),st.l-=.04}),h.rej=h.rej.filter(st=>st.l>0),A(h.u,h.v,4.5,$,1)):d==="SQA"?(x([...h.b,h.b[0]],o.quantum,.55,1.2),h.b.forEach(st=>A(st[0],st[1],4,o.quantum,.95))):h.ch.forEach(st=>A(st.u,st.v,3,$,.55+.4*(1-h.T))),n.globalAlpha=1,n.restore()}let D=!1,B=!1,U=!0,F=0;function k($){if(!D||t&&!U)return!1;if(!t&&!B)b($);else if(B&&(f+=F?$-F:0,!U))return F=$,!1;return F=$,L(),g.forEach(st=>st(_)),U=!1,!0}const X=()=>{U=!0};function z(){const $=i.getBoundingClientRect();c=Math.min(window.devicePixelRatio||1,1.5),a=Math.max(1,Math.round($.width)),l=Math.max(1,Math.round($.height)),e.width=Math.round(a*c),e.height=Math.round(l*c),E(),X()}function it(){if(t){f=performance.now();for(let $=0,st=200;$<st;$++)b(f+$/st*R*.98)}}function P($){$===d&&h||(d=$,v(),it(),X())}return new IntersectionObserver(([$])=>{D=$.isIntersecting,X()}).observe(i),new ResizeObserver(z).observe(i),v(),{canvas:e,holder:i,tick:k,setSolver:P,get visible(){return D},onInfo:$=>g.push($),setPaused:$=>{B=$,X()}}}const YT="http://www.w3.org/2000/svg",fn=(i,t={},e)=>{const n=document.createElementNS(YT,i);for(const r in t)n.setAttribute(r,t[r]);return e&&e.appendChild(n),n},qT=i=>i<0?0:i>1?1:i,Jo=(i,t,e)=>qT((i-t)/(e-t)),ef=[["CGA","CGA"],["Greedy","Greedy"],["SA","SA"],["SQA","SQA"]],Nu=ef.length;function ZT(i,{sources:t,reduced:e=!1}){const n=getComputedStyle(document.documentElement);let r=1,s=1,o=[],a=[],l=0,c=1,u=!1,d=!1,h=0,f=0,_=0;function g(b,M,A,y,x,L,D={}){const B=fn("g",{class:"nd"+(D.hub?" hub":""),transform:`translate(${M-y/2},${A-x/2})`},b);D.key&&(B.dataset.k=D.key);const U=Math.min(8,x/2);fn("rect",{class:"sh",x:2,y:9,width:y-4,height:x,rx:U},B),fn("rect",{class:"side",y:4,width:y,height:x,rx:U},B);const F=X=>{const z=fn("g",X?{class:X}:{},B);fn("rect",{class:"face",width:y,height:x,rx:U},z),fn("path",{class:"edge-top",d:`M${U},0.5 H${y-U}`},z),D.color&&fn("circle",{cx:14,cy:x/2,r:3.5,fill:D.color},z);const it=fn("text",{x:D.color?26:y/2,y:D.sub?x/2-8:x/2,"text-anchor":D.color?"start":"middle",class:D.hub?"big":""},z);if(it.textContent=L,D.sub){const P=fn("text",{x:y/2,y:x/2+12,"text-anchor":"middle",class:"mono"},z);P.textContent=D.sub}return z};F("");const k=F("lit");return k.style.opacity=0,{cx:M,cy:A,w:y,h:x,on:k}}function p(b,M,A,y,x){let L;if(x){const k=A.cx+A.w/2,X=A.cy,z=y.cx-y.w/2,it=y.cy,P=(z-k)*.5;L=`M${k},${X} C${k+P},${X} ${z-P},${it} ${z},${it}`}else{const k=A.cx,X=A.cy+A.h/2,z=y.cx,it=y.cy-y.h/2,P=(it-X)*.5;L=`M${k},${X} C${k},${X+P} ${z},${it-P} ${z},${it}`}fn("path",{d:L,class:"edge"},b);const D=fn("path",{d:L,class:"edge-lit"},b);D.style.opacity=0;const B=D.getTotalLength(),U=[];for(let k=0;k<=64;k++){const X=D.getPointAtLength(B*k/64);U.push([X.x,X.y])}const F=[0,.5].map(k=>{const X=fn("circle",{r:5,class:"dot",opacity:0},M),z=fn("circle",{r:1.8,class:"dot",opacity:0},M);return{o:k+Math.random()*.2,halo:X,core:z}});return{lit:D,pts:U,dots:F,a:0}}function m(){i.textContent="";const b=i.getBoundingClientRect();r=Math.max(200,b.width),s=Math.max(200,b.height),i.setAttribute("viewBox",`0 0 ${r} ${s}`);const M=r>s*1.05,A=fn("g",{},i),y=fn("g",{},i),x=fn("g",{},i),L=t.map(k=>n.getPropertyValue(k.color).trim());let D,B,U,F;if(M){const P=[54,r*.43,r*.7,r-62],$=(V,Q)=>{const ut=fn("text",{x:V,y:10,"text-anchor":"middle",class:"colhd"},i);ut.textContent=Q};$(P[0],"[ SOURCES ]"),$(P[1],"[ QUBO ]"),$(P[2],"[ SOLVERS ]"),$(P[3],"[ DISPATCH ]");const st=40,Rt=s-st-8;D=t.map((V,Q)=>g(y,P[0],st+Rt*(Q+.5)/8,104,30,V.name,{color:L[Q]})),B=g(y,P[1],st+Rt/2,132,70,"QUBO",{hub:!0,sub:"177 BITS",key:"qubo"}),U=ef.map(([V],Q)=>g(y,P[2],st+Rt*(.16+.68*Q/(Nu-1)),126,32,V)),F=g(y,P[3],st+Rt/2,112,52,"發電配置",{hub:!0})}else{const k=Math.min(84,(r-24)/4),X=28,z=4;D=t.map((P,$)=>g(y,r*($%z+.5)/z,s*.05+Math.floor($/z)*38,k-6,X,P.name,{color:L[$]})),B=g(y,r/2,s*.42,132,60,"QUBO",{hub:!0,sub:"177 BITS",key:"qubo"});const it=Math.min(70,(r-16)/Nu-6);U=ef.map(([,P],$)=>g(y,r*($+.5)/Nu,s*.7,it,30,P)),F=g(y,r/2,s*.94,112,44,"發電配置",{hub:!0})}a=[],D.forEach(k=>a.push({...p(A,x,k,B,M),stage:0})),U.forEach(k=>a.push({...p(A,x,B,k,M),stage:1})),U.forEach(k=>a.push({...p(A,x,k,F,M),stage:2})),o={E:D,Q:B,S:U,D:F},E()}function E(){if(!o.E)return;o.E.forEach((M,A)=>M.on.style.opacity=Jo(l,A*.02,.12+A*.02)),o.Q.on.style.opacity=Jo(l,.32,.44),o.S.forEach((M,A)=>M.on.style.opacity=Jo(l,.56+A*.025,.66+A*.025)),o.D.on.style.opacity=Jo(l,.86,1);const b=[[.16,.34],[.46,.6],[.72,.86]];for(const M of a)M.a=Jo(l,...b[M.stage]),M.lit.style.opacity=M.a;i.style.opacity=c}function S(b){if(h=0,!d)return;const M=_?Math.min(.05,(b-_)/1e3):0;_=b,!u&&!e&&(f+=M);for(const A of a)for(const y of A.dots){const x=e?y.o:(f/2.4+y.o)%1,L=x*64,D=Math.min(63,Math.floor(L)),B=L-D,U=A.pts[D][0]+(A.pts[D+1][0]-A.pts[D][0])*B,F=A.pts[D][1]+(A.pts[D+1][1]-A.pts[D][1])*B,k=`translate(${U.toFixed(1)},${F.toFixed(1)})`;y.core.setAttribute("transform",k),y.halo.setAttribute("transform",k);const X=Math.sin(x*Math.PI);y.core.setAttribute("opacity",(A.a*X).toFixed(3)),y.halo.setAttribute("opacity",(A.a*X*.18).toFixed(3))}e||(h=requestAnimationFrame(S))}const v=()=>{!h&&d&&(_=0,h=requestAnimationFrame(S))};new IntersectionObserver(([b])=>{d=b.isIntersecting,v()}).observe(i);let R=0;return new ResizeObserver(()=>{cancelAnimationFrame(R),R=requestAnimationFrame(()=>{m(),v()})}).observe(i),{setLit(b){l=b,E(),e&&v()},setVis(b){c=b,i.style.opacity=b},setPaused(b){u=b}}}const KT="http://www.w3.org/2000/svg",We=(i,t={},e)=>{const n=document.createElementNS(KT,i);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return e&&e.appendChild(n),n};function JT(i,t){const e=()=>i.parentElement.clientWidth<560?"stack":"side";let n=e(),r=Jp(i,n,t),s=!1;return new ResizeObserver(()=>{const o=e();o!==n&&(n=o,r.destroy(),r=Jp(i,n,t),s&&r.finish())}).observe(i.parentElement),{play(){s||(s=!0,t.reduced?r.finish():r.tl.play(0))}}}function Jp(i,t,{sources:e,slack:n=0,onTip:r=()=>{}}){i.textContent="";const s=new AbortController,o=t==="side",a=o?760:400,l=o?50:34,c=o?45:22,u=0,d=o?78:70,h=o?370:392,f=o?110:96,_=o?28:24,g=e.length+(n?1:0),p=o?598:a/2,m=o?c+(g-1)*l/2:c+g*l+64+f,E=o?Math.max(c+g*l,m+f+_/2+72):m+f+_/2+72;i.setAttribute("viewBox",`0 0 ${a} ${E}`),i.setAttribute("preserveAspectRatio","xMidYMid meet"),i.classList.toggle("stack",!o);const S=Math.max(...e.map(I=>I.bits)),v=(h-d)/S,R=Math.max(2,v-1.2),b=e.reduce((I,j)=>I+(j.share||0),0)||1,M=.014,A=We("g",{class:"d-flows"},i),y=We("g",{class:"d-rows"},i),x=We("g",{class:"d-ring"},i),L=We("g",{class:"d-labels"},i);We("circle",{cx:p,cy:m,r:f,class:"d-track",fill:"none","stroke-width":_},x);let D=-Math.PI/2;const B=e.map(I=>{const j=D,nt=D+(I.share||0)/b*Math.PI*2;return D=nt,{a0:j,a1:nt,mid:(j+nt)/2}}),U=(I,j)=>[p+j*Math.cos(I),m+j*Math.sin(I)],F=e.map((I,j)=>{const nt=c+j*l,ht=`var(${I.color})`,Mt=We("g",{class:"d-row","data-i":j},y);We("rect",{x:u-4,y:nt-l/2+4,width:h+10,height:l-8,fill:"transparent"},Mt);const mt=We("text",{x:u,y:nt,class:"d-name","dominant-baseline":"central"},Mt);mt.textContent=I.name;const Ut=I.pick==null?-1:I.pick,O=[];for(let Lt=0;Lt<I.bits;Lt++)O.push(We("rect",{x:d+Lt*v,y:nt-R*1.4,width:R,height:R*2.8,rx:1,class:"d-cell"},Mt));const ee=O[Ut]||null,kt=d+Math.max(0,Ut)*v+R/2;let W=null,Pt=null,ne=null;if(ee&&I.share>0){const Lt=B[j].a0+M,C=Math.max(Lt+.001,B[j].a1-M),[T,Z]=U(Lt,f),[Y,ot]=U(C,f);W=We("path",{d:`M${T.toFixed(1)} ${Z.toFixed(1)}A${f} ${f} 0 ${C-Lt>Math.PI?1:0} 1 ${Y.toFixed(1)} ${ot.toFixed(1)}`,class:"d-arc","data-i":j,fill:"none","stroke-width":_,pathLength:1,style:`stroke:${ht}`},x);const[rt,Et]=U(B[j].mid,f-_/2),vt=o?[kt+150,nt]:[kt,nt+90],wt=o?[rt-120,Et]:[rt,Et-110];Pt=We("path",{d:`M${kt.toFixed(1)} ${nt}C${vt[0].toFixed(1)} ${vt[1].toFixed(1)} ${wt[0].toFixed(1)} ${wt[1].toFixed(1)} ${rt.toFixed(1)} ${Et.toFixed(1)}`,class:"d-flow",fill:"none",pathLength:1,style:`stroke:${ht}`},A),ne=We("circle",{r:4,cx:kt,cy:nt,class:"d-dot",style:`fill:${ht}`},A)}return{s:I,i:j,y:nt,row:Mt,cells:O,pick:ee,color:ht,arc:W,flow:Pt,dot:ne,cellX:kt}});if(n){const I=c+e.length*l,j=(h-d)/n,nt=Math.max(1.5,j-1),ht=We("g",{class:"d-row d-slack","data-i":"s"},y);We("rect",{x:u-4,y:I-l/2+4,width:h+10,height:l-8,fill:"transparent"},ht);const Mt=We("text",{x:u,y:I,class:"d-name","dominant-baseline":"central"},ht);Mt.textContent="鬆弛";for(let mt=0;mt<n;mt++)We("rect",{x:d+mt*j,y:I-R*1,width:nt,height:R*2,rx:1,class:"d-cell d-scell"},ht);F.slackRow=ht}const k=f+_/2+16,X=o?3:1/0,z=F.filter(I=>I.s.share>=X).map(I=>{const[j,nt]=U(B[I.i].mid,k);return{it:I,x:j,y:nt,right:j>=p}});for(const I of[!0,!1]){const j=z.filter(nt=>nt.right===I).sort((nt,ht)=>nt.y-ht.y);for(let nt=1;nt<j.length;nt++)j[nt].y-j[nt-1].y<22&&(j[nt].y=j[nt-1].y+22)}for(const I of z){const j=We("text",{x:I.x+(I.right?4:-4),y:I.y,class:"d-lab","data-i":I.it.i,"text-anchor":I.right?"start":"end","dominant-baseline":"central"},L),nt=We("tspan",{class:"d-lab-n"},j);nt.textContent=I.it.s.name+" ";const ht=We("tspan",{class:"d-lab-v"},j);ht.textContent=`${I.it.s.share.toFixed(1)}%`,I.it.label=j}const it=F.filter(I=>I.s.share!=null&&I.s.share<X),P=o?1:2,$=I=>P===1?p:p+(I%2?1:-1)*92;it.forEach((I,j)=>{const nt=I.s.share===0,ht=We("text",{x:$(j),y:m+k+26+Math.floor(j/P)*22,class:"d-lab"+(nt?" d-zero":""),"data-i":I.i,"text-anchor":"middle","dominant-baseline":"central"},L),Mt=We("tspan",{class:"d-lab-n"},ht);Mt.textContent=I.s.name+" ";const mt=We("tspan",{class:"d-lab-v"},ht);mt.textContent=nt?"0%":`${I.s.share.toFixed(1)}%`,I.label=ht});const st=m+k+26+Math.max(0,Math.ceil(it.length/P)-1)*22+16;st>E&&i.setAttribute("viewBox",`0 0 ${a} ${st}`);const Rt=I=>{i.classList.toggle("hl",I!=null),i.querySelectorAll("[data-i]").forEach(j=>j.classList.toggle("on",I!=null&&j.dataset.i===String(I))),F.forEach(j=>j.flow&&j.flow.classList.toggle("on",j.i===I))};i.addEventListener("pointermove",I=>{const j=I.target.closest&&I.target.closest("[data-i]");if(!j){Rt(null),r(null,I);return}if(j.dataset.i==="s"){Rt("s"),r(`鬆弛位元 ${n} 個：把限制寫進 QUBO 用的輔助位元，不對應任何電源`,I);return}const nt=F[+j.dataset.i];Rt(nt.i);const ht=nt.s;r(ht.share==null?`${ht.name}：${ht.bits} 格`:ht.share>0?`${ht.name} ${ht.gen.toLocaleString("zh-TW")} 億度，占 ${ht.share.toFixed(1)}%（${ht.bits} 格中的第 ${ht.pick+1} 格）`:`${ht.name} 占 0%（依政策設為零）`,I)},{signal:s.signal}),i.addEventListener("pointerleave",I=>{Rt(null),r(null,I)},{signal:s.signal});const V=_n.timeline({paused:!0});V.fromTo([...F.map(I=>I.row),...F.slackRow?[F.slackRow]:[]],{opacity:0},{opacity:1,duration:.4,stagger:.05,ease:"power2.out"},0),F.forEach((I,j)=>{I.pick&&(V.call(()=>{I.pick.classList.add("d-pick"),I.pick.style.fill=I.color},null,.5+j*.12),V.fromTo(I.pick,{scaleY:.4,transformOrigin:"50% 50%"},{scaleY:1,duration:.35,ease:"back.out(2)"},.5+j*.12))});const Q=.5+F.length*.12+.25;return F.forEach((I,j)=>{if(!I.flow)return;const nt=Q+j*.09,ht=I.flow.getTotalLength();V.fromTo(I.flow,{strokeDasharray:"1 1",strokeDashoffset:1,opacity:.55},{strokeDashoffset:0,duration:.8,ease:"power2.inOut"},nt);const Mt={p:0};V.fromTo(I.dot,{opacity:0},{opacity:1,duration:.1},nt),V.to(Mt,{p:1,duration:.8,ease:"power2.inOut",onUpdate:()=>{const mt=I.flow.getPointAtLength(Mt.p*ht);I.dot.setAttribute("cx",mt.x),I.dot.setAttribute("cy",mt.y)}},nt),V.to(I.dot,{opacity:0,duration:.2},nt+.75),V.fromTo(I.arc,{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:.5,ease:"power2.out"},nt+.7),V.to(I.flow,{opacity:.18,duration:.6},nt+.9),I.label&&V.fromTo(I.label,{opacity:0},{opacity:1,duration:.4},nt+.95)}),it.forEach(I=>V.fromTo(I.label,{opacity:0},{opacity:1,duration:.4},Q+F.length*.09+1)),V.progress(0).pause(),{tl:V,finish:()=>{F.forEach(I=>{I.pick&&(I.pick.classList.add("d-pick"),I.pick.style.fill=I.color)}),V.progress(1)},destroy:()=>{V.kill(),s.abort()}}}const jT="http://www.w3.org/2000/svg",Je=(i,t={},e)=>{const n=document.createElementNS(jT,i);for(const r in t)n.setAttribute(r,t[r]);return e&&e.appendChild(n),n};function QT(i,{objectives:t,tensions:e,steps:n,reduced:r=!1}){let s=null,o=!1,a="";const l=()=>i.parentElement.clientWidth>=560?"side":"stack",c=()=>{const d=l()+i.parentElement.clientWidth;d!==a&&(a=d,s?.tl.kill(),s=tb(i,l(),{objectives:t,tensions:e,steps:n}),o&&s.tl.progress(1))};let u=0;return new ResizeObserver(()=>{cancelAnimationFrame(u),u=requestAnimationFrame(c)}).observe(i.parentElement),c(),{play(){o||(o=!0,r?s.tl.progress(1):s.tl.play(0))},finish(){o=!0,s.tl.progress(1)}}}function tb(i,t,{objectives:e,tensions:n,steps:r}){i.textContent="";const s=t==="side",o=s?760:380,a=s?520:600;i.setAttribute("viewBox",`0 0 ${o} ${a}`);const l=Je("g",{},i),c=Je("g",{},i),u=Je("g",{},i);function d(M,A,y,x,L,D={}){const B=Je("g",{class:"nd"+(D.hub?" hub":"")+(D.key?" key":""),transform:`translate(${M-y/2},${A-x/2})`},c),U=Math.min(8,x/2);Je("rect",{class:"sh",x:2,y:9,width:y-4,height:x,rx:U},B),Je("rect",{class:"side",y:4,width:y,height:x,rx:U},B);const F=X=>{const z=Je("g",X?{class:X}:{},B);Je("rect",{class:"face",width:y,height:x,rx:U},z),Je("path",{class:"edge-top",d:`M${U},0.5 H${y-U}`},z);const it=Je("text",{x:y/2,y:D.sub?x/2-8:x/2,"text-anchor":"middle",class:D.hub||D.key?"big":""},z);if(it.textContent=L,D.sub){const P=Je("text",{x:y/2,y:x/2+11,"text-anchor":"middle",class:"subt"},z);P.textContent=D.sub}return z};F("");const k=F("lit");return k.style.opacity=0,{cx:M,cy:A,w:y,h:x,on:k,grp:B}}function h(M,A=""){return Je("path",{d:M,class:"edge "+A},l),Je("path",{d:M,class:"edge-lit "+A,pathLength:1},l)}const f=(M,A,y,x="middle")=>{const L=Je("text",{x:M,y:A,"text-anchor":x,class:"colhd"},i);L.textContent=y};let _,g,p,m=[],E=[],S=[];if(s){f(196,12,"[ OBJECTIVES ]"),f(372,12,"[ DISPATCH ]"),f(630,12,"[ WHY QUBO ]");const B=[118,268,418];_=e.map((F,k)=>d(196,B[k],108,52,F.name,{sub:F.sub})),g=d(372,268,136,64,"一份配置",{hub:!0,sub:"8 種電源各發多少"});const U=[118,268,418];p=r.map((F,k)=>d(630,U[k],248,60,F.text,{sub:F.sub,key:F.key})),m=n.map(F=>{const k=_[F.a],X=_[F.b],z=k.cx-k.w/2,it=k.cy,P=X.cx-X.w/2,$=X.cy,st=Math.min(z,P)-70,Rt=`M${z},${it} C${st},${it} ${st},${$} ${P},${$}`,V=h(Rt,"tn"),Q={x:st+17,y:(it+$)/2},ut=Je("text",{x:Q.x-16,y:Q.y-9,"text-anchor":"end",class:"tn-h"},u);ut.textContent=F.head;const I=Je("text",{x:Q.x-16,y:Q.y+11,"text-anchor":"end",class:"tn-t"},u);return I.textContent=F.tail,{lit:V,labs:[ut,I],...v(V)}}),E=_.map(F=>h(`M${F.cx+F.w/2},${F.cy} C${F.cx+F.w/2+40},${F.cy} ${g.cx-g.w/2-40},${g.cy} ${g.cx-g.w/2},${g.cy}`)),S=p.map((F,k)=>k===0?h(`M${g.cx+g.w/2},${g.cy} C${g.cx+g.w/2+60},${g.cy} ${F.cx-F.w/2-60},${F.cy} ${F.cx-F.w/2},${F.cy}`):h(`M${F.cx},${p[k-1].cy+p[k-1].h/2+4} V${F.cy-F.h/2}`,"dn"))}else{const x=[62,190,318];f(o/2,12,"[ OBJECTIVES ]"),_=e.map((U,F)=>d(x[F],148,100,50,U.name,{sub:U.sub})),g=d(o/2,278,160,58,"一份配置",{hub:!0,sub:"8 種電源各發多少"});const L=o-60,D=54,B=400;p=r.map((U,F)=>d(o/2,B+F*76,L,D,U.text,{sub:U.sub,key:U.key})),m=n.map(U=>{const F=_[U.a],k=_[U.b],X=F.cy-F.h/2,z=X-46,it=`M${F.cx},${X} C${F.cx},${z} ${k.cx},${z} ${k.cx},${X}`,P=h(it,"tn"),$=(F.cx+k.cx)/2,st=Je("text",{x:$,y:z-30,"text-anchor":"middle",class:"tn-h"},u);st.textContent=U.head;const Rt=Je("text",{x:$,y:z-12,"text-anchor":"middle",class:"tn-t"},u);return Rt.textContent=U.tail,{lit:P,labs:[st,Rt],...v(P)}}),E=_.map(U=>h(`M${U.cx},${U.cy+U.h/2} C${U.cx},${U.cy+U.h/2+40} ${g.cx},${g.cy-g.h/2-40} ${g.cx},${g.cy-g.h/2}`)),S=p.map((U,F)=>h(`M${U.cx},${F?p[F-1].cy+p[F-1].h/2+4:g.cy+g.h/2+4} V${U.cy-U.h/2}`,"dn"))}function v(M){const A=M.getTotalLength(),y=Je("g",{class:"tn-ar",opacity:0},u),x=()=>Je("path",{d:"M-5,-4 L3,0 L-5,4",class:"ar"},y),L=x(),D=x(),B={k:0},U=()=>{const F=A*(.06+.1*B.k);for(const[k,X,z]of[[L,A/2+F,1],[D,A/2-F,-1]]){const it=M.getPointAtLength(X),P=M.getPointAtLength(Math.min(A,Math.max(0,X+z*2))),$=Math.atan2(P.y-it.y,P.x-it.x)*180/Math.PI;k.setAttribute("transform",`translate(${it.x.toFixed(1)},${it.y.toFixed(1)}) rotate(${$.toFixed(1)})`)}};return U(),{ar:y,st:B,place:U}}const R=_n.timeline({paused:!0}),b=(M,A,y=.6)=>R.fromTo(M,{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:y,ease:"power2.inOut"},A);return _.forEach((M,A)=>R.fromTo(M.on,{opacity:0},{opacity:1,duration:.4,ease:"power2.out"},A*.15)),m.forEach((M,A)=>{const y=.45+A*.2;b(M.lit,y,.6),R.fromTo(M.labs,{opacity:0},{opacity:1,duration:.4},y+.4),R.fromTo(M.ar,{opacity:0},{opacity:1,duration:.2},y+.5),R.fromTo(M.st,{k:0},{k:1,duration:.42,ease:"sine.inOut",repeat:4,yoyo:!0,onUpdate:M.place},y+.55),R.to(M.st,{k:.55,duration:.3,ease:"sine.out",onUpdate:M.place},y+.55+.42*5)}),E.forEach((M,A)=>b(M,1+A*.08,.5)),R.fromTo(g.on,{opacity:0},{opacity:1,duration:.4},1.45),p.forEach((M,A)=>{const y=1.75+A*.5;b(S[A],y,.35),R.fromTo(M.on,{opacity:0},{opacity:1,duration:.35,ease:"power2.out"},y+.3)}),R.progress(0).pause(),{tl:R}}const ec={big:{nBits:177,onehotConfigs:509607936,sources:[{i:0,name:"再生能源",levels:24,lo:27.62,max:775},{i:1,name:"燃煤",levels:24,lo:400,max:905.2},{i:2,name:"燃油",levels:24,lo:30.57,max:242.21},{i:3,name:"燃氣",levels:24,lo:164.96,max:1344.47},{i:4,name:"汽電共生",levels:24,lo:34.38,max:129.96},{i:5,name:"抽蓄水力",levels:8,lo:28.89,max:43.03},{i:6,name:"核能",levels:1,lo:0,max:0},{i:7,name:"電池儲能",levels:8,lo:0,max:7.01}]}};_n.registerPlugin(oe);const Ki=window.matchMedia("(prefers-reduced-motion: reduce)").matches,jt=(i,t=document)=>t.querySelector(i),Wn=(i,t=document)=>[...t.querySelectorAll(i)],Sg=i=>i<0?0:i>1?1:i,Fu=(i,t,e)=>{const n=Sg((e-i)/(t-i));return n*n*(3-2*n)},Mg=i=>1-Math.pow(1-i,3),$f=os,eb={CGA:"--ps-cga",Greedy:"--ps-greedy",SA:"--ps-sa",SQA:"--ps-sqa"},nb={CGA:"CGA",Greedy:"Greedy",SA:"SA",SQA:"SQA"},nc={label:"需求量 2,524 億度，各跑 50 次取最佳",n:50,rows:[["CGA",.607249,0],["SA",.622546,0],["SQA",.625429,0],["Greedy",.632375,0]]},Sc=nc.rows.map(([i,t,e])=>({id:i,name:nb[i],color:eb[i],p:{v:t,nv:e}})),jp=jt("#hd"),ib=Hg({toTop:()=>Yf(0)});let wn=null;Ki||(wn=new Kg({lerp:.1,wheelMultiplier:.9,smoothWheel:!0}),wn.on("scroll",oe.update),_n.ticker.add(i=>wn.raf(i*1e3)),_n.ticker.lagSmoothing(0));const rb=()=>wn?wn.targetScroll:window.scrollY;function Yf(i,t=.9){wn?wn.scrollTo(i,{duration:t,easing:Mg}):window.scrollTo({top:i,behavior:"auto"})}const Ds=Wn(".ch").map((i,t)=>({sec:i,i:t,name:i.dataset.name,inner:jt(".inner",i)})),je=Object.fromEntries(Ds.map(i=>[i.sec.id,i])),Eg=()=>document.documentElement.scrollHeight-innerHeight,sb=i=>{if(i.sec.id!=="ch5"&&i.sec.id!=="ch6")return i.sec.getBoundingClientRect().top+window.scrollY;const t=i.sec.parentElement.getBoundingClientRect().top+window.scrollY;return i.sec.id==="ch5"?t:t+je.ch5.sec.offsetHeight},Uc=()=>Ds.map(i=>Math.min(Eg(),Math.round(sb(i))));function qf(){for(const[i,t]of[[je.ch5,"--st5"],[je.ch6,"--st6"]])i.sec.style.setProperty(t,`${Math.min(0,innerHeight-i.sec.offsetHeight)}px`)}const Tg=jt("#gl"),oi=GT(Tg,{reduced:Ki}),bg=ZT(jt("#flow"),{sources:$f,reduced:Ki}),hs=$T(jt("#pv"),{reduced:Ki}),Be={v1a:0,v3o:1,k1o:0,k23:0,p3:.1},Qp={l:0};function ob(){const i=t=>{const e=t.getBoundingClientRect(),n=t.closest(".ch").getBoundingClientRect().top,r=Math.max(e.top-n,72),s=Math.min(e.bottom-n,innerHeight-24);return{x0:e.left,y0:r+n,x1:e.right,y1:s+n}};oi.setRegions(i(jt("#pf1")),i(jt("#pf3")))}const tm=Sc.map(i=>i.p.v),ab=tm.length?Math.max(...tm):1;Math.max(0,...Sc.filter(i=>i.d).map(i=>i.d.n));jt("#cmp-tag").textContent=nc.label,jt("#cmp").innerHTML=Sc.map(i=>{const t=`${i.p.nv} 違規`;return`<div class="cbar" data-tip="${`${i.name}　需求量 2,524 億度跑 ${nc.n} 次，QUBO 能量最低的一次
H_obj ${i.p.v.toFixed(3)}，${t}`}"><span class="nm">${i.name}<small>${t}</small></span><span class="tr"><span class="fl" style="background:var(${i.color})" data-v="${i.p.v}"></span></span><span class="vl">${i.p.v.toFixed(3)}</span></div>`}).join(""),jt("#cmp").setAttribute("aria-label","需求量 2,524 億度、各跑 50 次取 QUBO 能量最低的一次，H_obj："+Sc.map(i=>`${i.name} ${i.p.v.toFixed(3)}（${i.p.nv} 違規）`).join("、")),jt("#cmp-note").textContent=`每種求解器各跑 ${nc.n} 次，取 QUBO 能量最低的一次，畫的是那一次的 H_obj；與海報圖 1 是同一批數據。差距很小，長條從 0 畫起。模擬台在展場現場示範。`;const em=Wn("#cmp .fl"),Ca=No.dispatch;jt("#disp-note").textContent=`每列的格數取自主實驗檔，另有 ${Ca.slack} 個鬆弛位元。亮起的格子是基準情境裡符合規定、分數最低的一次（${Ca.solver} 第 ${Ca.run} 次）解出來的配置。`;jt("#dispatch").setAttribute("aria-label",`發電配置（${Ca.solver} 第 ${Ca.run} 次）：`+$f.map(i=>`${i.name} ${i.share.toFixed(1)}%`).join("、"));const Hn=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ra=i=>Math.round(i).toLocaleString("en-US");function lb(i){const a=i.x,l=i.rows.flatMap(b=>b.y.filter(M=>M!=null)),c=Math.floor((Math.min(...l)-.005)*20)/20,u=Math.ceil((Math.max(...l)+.005)*20)/20,d=b=>38+(b-a[0])/(a[a.length-1]-a[0])*238,h=b=>10+(1-(b-c)/(u-c))*132,f=[];for(let b=Math.ceil(c*10-1e-9)/10;b<=u+1e-9;b+=.1)f.push(+b.toFixed(2));const _=f.map(b=>`<line class="lg-g" x1="38" x2="276" y1="${h(b).toFixed(1)}" y2="${h(b).toFixed(1)}"/><text class="lg-t" x="32" y="${(h(b)+4).toFixed(1)}" text-anchor="end">${b.toFixed(1)}</text>`).join(""),g=[a[0],a[a.length-1]].map((b,M)=>`<text class="lg-t" x="${d(b).toFixed(1)}" y="160" text-anchor="${M?"end":"start"}">${Ra(b)}</text>`).join(""),m=[...i.rows].sort((b,M)=>(b.id===i.hi)-(M.id===i.hi)).map(b=>{const M=b.y.map((U,F)=>U==null?null:[d(a[F]),h(U)]).filter(Boolean),A="M"+M.map(U=>U[0].toFixed(1)+","+U[1].toFixed(1)).join(" L"),y=b.id===i.hi,x=(U,F)=>Hn(`${b.name}　需求量 ${Ra(a[F])} 億度
H_obj ${U.toFixed(4)}`),L=y?b.y.map((U,F)=>U==null?"":`<circle class="lg-d" cx="${d(a[F]).toFixed(1)}" cy="${h(U).toFixed(1)}" r="3.2" style="fill:var(${b.color})" data-tip="${x(U,F)}"/>`).join(""):"",D=M[M.length-1],B=y?`<text class="lg-n" x="${(D[0]+7).toFixed(1)}" y="${(D[1]+4).toFixed(1)}" style="fill:var(${b.color})">${Hn(b.name)}</text>`:"";return`<g class="lg-s${y?" hi":""}"><path class="lg-l" d="${A}" pathLength="1" style="stroke:var(${b.color})"/>${L}${B}</g>`}).join(""),E=i.rows.find(b=>b.id===i.hi),S=i.rows.filter(b=>b.id!==i.hi),v=`<p class="lg-k"><span class="lg-sw hi" style="background:var(${E.color})"></span>${Hn(E.name)}<span class="lg-sw"></span>${S.map(b=>Hn(b.name)).join("、")}</p>`,R="各需求量的 H_obj："+i.rows.map(b=>`${b.name} `+b.y.map((M,A)=>`${Ra(a[A])}：${M}`).join("，")).join("；");return`<div class="fd-g lg" role="img" aria-label="${Hn(R)}"><p class="gcap">${Hn(i.yLabel)}，橫軸是${Hn(i.xLabel)}</p><svg class="lg-svg" viewBox="0 0 320 168" aria-hidden="true">${_}${g}${m}</svg>${v}</div>`}function cb(i){const t=Math.min(0,...i.rows.map(o=>o.v)),n=Math.max(0,...i.rows.map(o=>o.v))-t||1,r=-t/n*100,s=i.rows.map(o=>{const a=Math.abs(o.v)/n*100,l=o.v<0?r-a:r,c=`需求量 ${o.name} 億度：QAOA 的 H_obj 比 CGA ${o.v>=0?"高":"低"} ${Math.abs(o.v).toFixed(1)}%`;return`<div class="gr" data-tip="${Hn(c)}"><span class="gn">${Hn(o.name)}</span><span class="gt gz" style="--z:${r.toFixed(1)}%"><i class="${o.v<0?"neg":""}" style="left:${l.toFixed(1)}%;width:${a.toFixed(1)}%" data-w="1"></i></span><span class="gv">${o.v>0?"+":""}${o.v.toFixed(1)}%</span></div>`}).join("");return`<div class="fd-g" role="img" aria-label="${Hn(i.cap+"："+i.rows.map(o=>`${o.name} ${o.v}%`).join("、"))}"><p class="gcap">${Hn(i.cap)}，左欄是需求量（億度）</p>${s}</div>`}const ub=i=>i.kind==="line"?lb(i):i.kind==="gap"?cb(i):"";jt("#finds").innerHTML=No.findings.map(i=>{const t=i.big?`<p class="fd-n"><span class="cnt" data-to="${i.big.num}">${i.big.num}</span>${i.big.den!=null?`<span class="den">/${i.big.den}</span>`:""}</p><p class="fd-c">${Hn(i.bigCap)}</p>`:"";return`<li class="fd${i.chart?"":" no-g"}"><div class="fd-k">${t}</div><div class="fd-b"><p class="fd-t">${Hn(i.text)}</p></div>${i.chart?ub(i.chart):""}</li>`}).join("");jt("#cc-sum").textContent=No.summary;jt("#cc-src").textContent="數字取自 poster 圖 1、圖 2 用的實驗輸出：每個需求量、每個求解器各跑多次，取最好的一次（先比違規數）。H_obj 越低越好。";const hb=Wn("#finds .cnt"),nm=Wn("#finds .gt i"),im=Wn("#finds .lg-l"),rm=Wn("#finds .lg-d, #finds .lg-n"),Mi=No.slack;function fb(){const a=Mi.rows.length,l=28+a*26+32,c=p=>64+(p+70)/140*342,u=28+a*26,d=`<rect class="bs-band" x="${c(-50).toFixed(1)}" y="22" width="${(c(Mi.max)-c(-50)).toFixed(1)}" height="${u-28+6}"/>`,h=[-50,Mi.max].map(p=>`<line class="bs-edge" x1="${c(p).toFixed(1)}" x2="${c(p).toFixed(1)}" y1="22" y2="${u}"/><text class="bs-t bs-et" x="${c(p).toFixed(1)}" y="16" text-anchor="middle">${p>0?"+":"−"}${Mi.max}</text>`).join(""),f=`<line class="bs-mid" x1="${c(0)}" x2="${c(0)}" y1="22" y2="${u}"/><text class="bs-t bs-mt" x="${c(0)}" y="16" text-anchor="middle">需求</text>`,_=Mi.rows.map((p,m)=>{const E=28+m*26+13,S=p.dev.map((v,R)=>`<circle class="bs-d" cx="${c(Math.max(-70,Math.min(70,v))).toFixed(1)}" cy="${E}" r="4.2" style="fill:var(${p.color})" data-tip="${Hn(`${p.name}　需求量 ${Ra(p.D[R])} 億度
總發電量和需求差 ${v>=0?"+":"−"}${Math.abs(v).toFixed(1)} 億度`)}"/>`).join("");return`<text class="bs-n" x="54" y="${E+4}" text-anchor="end">${Hn(p.name)}</text><line class="bs-r" x1="64" x2="406" y1="${E}" y2="${E}"/>${S}`}).join(""),g=`<text class="bs-t" x="${470/2}" y="${l-8}" text-anchor="middle">總發電量 − 需求（億度）</text>`;return`<svg class="bs-svg" viewBox="0 0 420 ${l}">${d}${f}${h}${_}${g}</svg>`}const wg=jt("#bsfig");wg.innerHTML=fb();wg.setAttribute("aria-label",`需求線兩側 ±${Mi.max} 億度的允許帶；四個求解器在 ${Mi.rows[0].dev.length} 個需求量最好的一次，總發電量和需求的差：`+Mi.rows.map(i=>`${i.name} ${i.dev.join("、")}`).join("；")+"，全部在允許帶內。");jt("#bs-strict").textContent=Mi.strict.toLocaleString("en-US");jt("#bs-band").textContent=`約 ${Math.round(Mi.band/1e4).toLocaleString("en-US")} 萬`;jt("#bs-d").textContent=Ra(Mi.anchor);Wn(".bs-max").forEach(i=>i.textContent=Mi.max);const kl=jt("#bsfig .bs-band"),db=Wn("#bsfig .bs-edge, #bsfig .bs-et"),pb=Wn("#bsfig .bs-d");jt("#mo-oh").textContent=(ec.big.onehotConfigs/1e8).toFixed(1);const mb=QT(jt("#mofig"),{reduced:Ki,objectives:[{name:"成本",sub:"權重 w₁"},{name:"碳排",sub:"權重 w₂"},{name:"穩定",sub:"權重 w₃"}],tensions:[{a:0,b:1,head:"燃煤",tail:"便宜，碳排高"},{a:1,b:2,head:"再生能源",tail:"乾淨，不穩定"}],steps:[{text:"發電量一格一格",sub:"每種電源只能選某一格"},{text:"加上很多政策限制",sub:"混合整數規劃難以擴展"},{text:"寫成 QUBO",sub:"交給不同類型的求解器",key:!0}]}),ci=document.createElement("div");ci.className="qtip";ci.setAttribute("role","tooltip");ci.hidden=!0;document.body.appendChild(ci);const _b=(i,t)=>{if(!i){ci.hidden=!0;return}ci.textContent=i,ci.hidden=!1,ci.style.transform=`translate(${Math.round(t.clientX+14)}px,${Math.round(t.clientY-34)}px)`},gb=JT(jt("#dispatch"),{sources:$f.map(i=>({...i,bits:i.tiles})),slack:yg,reduced:Ki,onTip:_b});for(const i of[jt("#cmp"),jt("#finds"),jt("#bsfig")])i.addEventListener("pointermove",t=>{const e=t.target.closest("[data-tip]");if(!e){ci.hidden=!0;return}ci.textContent=e.dataset.tip,ci.hidden=!1,ci.style.transform=`translate(${Math.round(t.clientX+14)}px,${Math.round(t.clientY-34)}px)`}),i.addEventListener("pointerleave",()=>ci.hidden=!0);const As=jt("#sv-rows");As.innerHTML=WT.map(i=>`<tr class="row" data-id="${i.id}"><td><button type="button" class="sv-btn sv-name" aria-pressed="false" aria-controls="pv">${i.name}</button><span class="sv-type-m">${i.type}</span></td><td class="sv-type">${i.type}</td><td class="sv-desc">${i.desc}</td></tr>`).join("")+'<tr class="row-q"><td><span class="sv-name">QAOA</span><span class="sv-type-m">量子電路（模擬）</span></td><td class="sv-type">量子電路（模擬）</td><td class="sv-desc">另做 24 位元縮小版，用量子線路模擬求解，不和 177 位元結果直接比較。</td></tr>';const vb=jt("#pv-name"),xb=jt("#pv-info");hs.onInfo(i=>xb.textContent=i);function Ic(i){for(const t of Wn("tr.row",As)){const e=t.dataset.id===i;t.classList.toggle("on",e),jt(".sv-btn",t).setAttribute("aria-pressed",e?"true":"false")}vb.textContent=`[ ${i.toUpperCase()} ]`,hs.setSolver(i)}As.addEventListener("pointerover",i=>{const t=i.target.closest("tr.row");t&&i.pointerType==="mouse"&&Ic(t.dataset.id)});As.addEventListener("click",i=>{const t=i.target.closest("tr.row");t&&Ic(t.dataset.id)});As.addEventListener("focusin",i=>{const t=i.target.closest("tr.row");t&&Ic(t.dataset.id)});As.addEventListener("keydown",i=>{if(i.key!=="ArrowDown"&&i.key!=="ArrowUp")return;const t=Wn(".sv-btn",As),e=t.indexOf(document.activeElement);e<0||(i.preventDefault(),i.stopPropagation(),t[(e+(i.key==="ArrowDown"?1:t.length-1))%t.length].focus())});Ic("SA");const Ag=jt("#coef"),sm={v:0},dr=(()=>{const i=ec.big.nBits,t=i*Math.log10(2),e=Math.floor(t),n=+(10**(t-e)).toFixed(2),r=Object.entries(ec.big.sources.filter(s=>s.levels>1).reduce((s,o)=>(s[o.levels]=(s[o.levels]||0)+1,s),{})).sort((s,o)=>o[0]-s[0]).map(([s,o])=>`${s}<sup>${o}</sup>`).join(" × ");return{nb:i,e,coef:n,fac:r,oh:ec.big.onehotConfigs}})();jt("#numn").textContent=dr.nb;jt("#nume").textContent=dr.e;Ag.textContent=dr.coef.toFixed(2);jt("#numv").setAttribute("aria-label",`2 的 ${dr.nb} 次方，約等於 ${dr.coef} 乘以 10 的 ${dr.e} 次方`);jt("#ohcap").innerHTML=`每種電源各選一格的配置只有 ${dr.fac} ≈ ${(dr.oh/1e8).toFixed(1)} 億種（不含鬆弛變數），其他組合都違反「只選一格」，所以要靠懲罰項把它們的能量推高。`;function yb(i,t){const e=Wn(".txt .ln > span",t.sec),n=Wn(".txt .fx",t.sec);e.length&&(t.sec.id==="ch1"?i.fromTo(e,{yPercent:112},{yPercent:0,duration:.9,ease:"expo.out",stagger:.08},0):i.fromTo(e,{opacity:0,yPercent:30},{opacity:1,yPercent:0,duration:.8,ease:"power3.out",stagger:.08},0)),n.length&&i.fromTo(n,{opacity:0,y:14},{opacity:1,y:0,duration:.7,ease:"power3.out",stagger:.08},e.length?.3:0)}const Oe=1,Sb={ch1:i=>i.fromTo(Be,{v1a:0},{v1a:1,duration:1.2,ease:"power3.out"},Oe),motive:i=>i.call(()=>mb.play(),null,Oe-.4),ch2:i=>{i.fromTo(Qp,{l:0},{l:1,duration:2.4,ease:"none",onUpdate:()=>bg.setLit(Qp.l)},Oe);const t=+kl.getAttribute("x"),e=+kl.getAttribute("width"),n={k:0},r=()=>{kl.setAttribute("x",(t+e*(1-n.k)/2).toFixed(1)),kl.setAttribute("width",(e*n.k).toFixed(1))};r(),i.fromTo(n,{k:0},{k:1,duration:.9,ease:"power3.inOut",onUpdate:r,onStart:r},Oe+.3),i.fromTo(db,{opacity:0},{opacity:1,duration:.4},Oe+1),i.fromTo(pb,{opacity:0,y:-10},{opacity:1,y:0,duration:.45,ease:"power2.out",stagger:.04},Oe+1.2)},ch3:i=>{i.fromTo(Be,{p3:.1},{p3:.27,duration:1.3,ease:"power2.inOut"},Oe+.4),i.to(Be,{p3:.42,duration:1.3,ease:"power2.inOut"},Oe+2),i.to(Be,{p3:.59,duration:2.8,ease:"none"},Oe+3.4),i.fromTo("#numblk",{opacity:0,y:10},{opacity:1,y:0,duration:.6,ease:"power3.out"},Oe+6.5),i.fromTo(sm,{v:0},{v:dr.coef,duration:1.4,ease:"expo.out",onUpdate:()=>Ag.textContent=sm.v.toFixed(2)},Oe+6.5)},ch4:i=>i.call(()=>gb.play(),null,Oe-.4),ch5:i=>i.fromTo("#ch5 .sv-grid",{opacity:0,y:24},{opacity:1,y:0,duration:.8,ease:"power3.out"},Oe-.1),ch6:i=>{i.fromTo(".cmp-hd, .cmp-note",{opacity:0,y:12},{opacity:1,y:0,duration:.6,stagger:.12,ease:"power3.out"},Oe),i.fromTo("#cmp .cbar",{opacity:0},{opacity:1,duration:.3,stagger:.06},Oe+.1),em.length&&i.fromTo(em,{scaleX:0},{scaleX:(t,e)=>+e.dataset.v/ab,duration:1,stagger:.08,ease:"power3.out"},Oe+.2)},concl:i=>{i.fromTo("#finds .fd",{opacity:0,y:16},{opacity:1,y:0,duration:.6,stagger:.18,ease:"power3.out"},Oe-.5),hb.forEach((n,r)=>{const s={v:0},o=+n.dataset.to;o&&i.fromTo(s,{v:0},{v:o,duration:1.2,ease:"power2.out",onUpdate:()=>n.textContent=Math.round(s.v)},Oe-.3+r*.18)});const t=im.filter(n=>n.parentElement.classList.contains("hi")),e=im.filter(n=>!n.parentElement.classList.contains("hi"));t.length&&i.fromTo(t,{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:1.1,ease:"power2.inOut"},Oe-.6),e.length&&i.fromTo(e,{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:1.1,stagger:.1,ease:"power2.inOut"},Oe+.2),rm.length&&i.fromTo(rm,{opacity:0},{opacity:1,duration:.3,stagger:.05},Oe+.9),nm.length&&i.fromTo(nm,{scaleX:0},{scaleX:1,duration:.8,stagger:.06,ease:"power3.out"},Oe+.2),i.fromTo("#concl .cc-sum, #concl .cc-foot",{opacity:0,y:10},{opacity:1,y:0,duration:.6,stagger:.15,ease:"power3.out"},Oe+1)}},Mc=Ds.map(i=>{const t=_n.timeline({paused:!0});return yb(t,i),Sb[i.sec.id]?.(t),t.progress(0).pause(),{tl:t,count:0}});function nf(i){Mc.forEach((e,n)=>{n!==i&&e.tl.progress()<1&&e.count>0&&e.tl.progress(1)});const t=Mc[i];if(!t.inView){if(t.inView=!0,Ki){t.tl.progress(1),t.count++,_n.fromTo(Ds[i].inner,{opacity:0},{opacity:1,duration:.4});return}t.count>0||(t.tl.restart(),t.count++)}}function om(i){const t=Mc[i];t.inView=!1,t.count>0&&t.tl.progress()<1&&t.tl.progress(1)}Ds.forEach((i,t)=>{const e=i.sec.offsetHeight<innerHeight*.8;oe.create({trigger:i.sec,start:e?"top 85%":"top 60%",end:"bottom 40%",onEnter:()=>nf(t),onEnterBack:()=>nf(t),onLeave:()=>om(t),onLeaveBack:()=>om(t)})});const ic=new Map,am=i=>(ic.has(i)||ic.set(i,{i:1,o:0,out:!1,el:i.inner}),ic.get(i)),Ou=i=>_n.set(i.el,i.out?{opacity:i.i*(1-i.o),y:36*(1-i.i)-36*i.o,scale:1-.03*i.o}:{opacity:i.i,y:36*(1-i.i)});if(Ki){const i=(t,e)=>oe.create({trigger:t,start:"top 50%",end:"top 49%",onUpdate:n=>Be[e]=n.progress});i(je.motive.sec,"k1o"),i(je.ch3.sec,"k23"),oe.create({trigger:je.ch4.sec,start:"top 50%",onEnter:()=>Be.v3o=0,onLeaveBack:()=>Be.v3o=1}),Be.p3=.59}else{const i=(e,n,{inX:r,outX:s}={})=>{const o=am(e),a=am(n);o.out=!0,a.i=0;const l=_n.timeline({scrollTrigger:{trigger:n.sec,start:"top 100%",end:"top 50%",scrub:.6}});l.fromTo(a,{i:0},{i:1,ease:"none",onUpdate:()=>Ou(a)},0),r?.(l);const c=_n.timeline({scrollTrigger:{trigger:n.sec,start:"top 80%",end:"top 20%",scrub:.6}});c.fromTo(o,{o:0},{o:1,ease:"none",onUpdate:()=>Ou(o)},0),s?.(c)};i(je.ch1,je.motive,{outX:e=>e.fromTo(Be,{k1o:0},{k1o:1,ease:"none"},0)}),i(je.motive,je.ch2),i(je.ch2,je.ch3,{inX:e=>e.fromTo(Be,{k23:0},{k23:1,ease:"none"},0)}),i(je.ch3,je.ch4,{outX:e=>e.fromTo(Be,{v3o:1},{v3o:0,ease:"none"},0)}),i(je.ch4,je.ch5),ic.forEach(Ou);const t=(e,n,r,s)=>_n.timeline({scrollTrigger:{trigger:e.sec,start:"top bottom",end:"top top",scrub:.6}}).fromTo(n,{scale:1},{scale:.94,ease:"none"},0).fromTo(r,{opacity:0},{opacity:.6,ease:"none"},0).fromTo(s,{rotate:-3},{rotate:0,ease:"power2.out"},0);t(je.ch6,"#ch5-in","#ch5-dim","#card6"),t(je.concl,"#card6","#ch6-dim","#card8")}let rf=0,Ec=!1;function Mb(){if(!wn||window.__noSnap)return;const i=wn.targetScroll,t=wn.direction||0,e=innerHeight*.15;let n=null;for(const r of Uc()){const s=r-i;if(Math.abs(s)<=2)return;Math.abs(s)>=e||t>0&&s<0||t<0&&s>0||(n==null||Math.abs(s)<Math.abs(n-i))&&(n=r)}n!=null&&(Ec=!0,wn.scrollTo(n,{duration:.6,easing:Mg,onComplete:()=>Ec=!1}))}function Tc(){clearTimeout(rf),Ec&&wn&&(Ec=!1,wn.scrollTo(wn.animatedScroll,{immediate:!0}))}const lm=()=>{clearTimeout(rf),rf=setTimeout(Mb,150)};wn&&(window.addEventListener("wheel",()=>{Tc(),lm()},{capture:!0,passive:!0}),window.addEventListener("touchstart",Tc,{capture:!0,passive:!0}),window.addEventListener("touchend",lm,{passive:!0}));function Eb(i){Tc();const t=Uc(),e=rb();let n=i>0?t.findIndex(r=>r>e+4):t.length-1-[...t].reverse().findIndex(r=>r<e-4);(n<0||n>=t.length)&&(n=i>0?t.length-1:0),Yf(t[n])}window.addEventListener("keydown",i=>{if(i.key==="Escape"){pi.classList.contains("open")&&(Kf(!1),Zf.focus());return}if(i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey||i.target.closest?.("input, textarea, select, [contenteditable], #sv-rows"))return;const t={ArrowDown:1,PageDown:1,ArrowUp:-1,PageUp:-1}[i.key];t&&(i.preventDefault(),Eb(t))});const pi=jt("#toc"),Nc=jt("#toc-list"),Zf=jt("#toc-toggle"),Tb=jt("#toc-cur"),Cg=jt("#card6"),bb=jt("#card8"),ao=Ds.filter(i=>!i.sec.classList.contains("foot"));jt("#toc-total").textContent=String(ao.length).padStart(2,"0");Nc.innerHTML=ao.map((i,t)=>`<li><a href="#${i.sec.id}" data-i="${i.i}"><span class="no">${String(t+1).padStart(2,"0")}</span><span class="nm">${i.name}</span><span class="pg"><i></i></span></a></li>`).join("");const wb=Wn("a",Nc),Ab=Wn(".pg i",Nc);Nc.addEventListener("click",i=>{const t=i.target.closest("a");t&&(i.preventDefault(),Tc(),Yf(Uc()[+t.dataset.i],1.1),Kf(!1))});function Kf(i){pi.classList.toggle("open",i),Zf.setAttribute("aria-expanded",i?"true":"false")}Zf.addEventListener("click",()=>Kf(!pi.classList.contains("open")));const ur={moved:!1,startY:window.scrollY,timer:0,pending:!1},Jf=i=>{clearTimeout(ur.timer),ur.pending=!1,pi.classList.toggle("is-hidden",!i)},Rg=()=>pi.matches(":hover")||pi.contains(document.activeElement)||pi.classList.contains("open");function Pg(){ur.pending||(ur.pending=!0,ur.timer=setTimeout(()=>{ur.pending=!1,Rg()||pi.classList.add("is-hidden")},1200))}window.addEventListener("scroll",()=>{Math.abs(window.scrollY-ur.startY)<4||(ur.moved=!0,Rg()||Jf(!1))},{passive:!0});window.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse")return;const t=i.clientX>=innerWidth-96,e=pi.contains(i.target);t||e?Jf(!0):ur.moved&&!pi.classList.contains("is-hidden")&&Pg()},{passive:!0});pi.addEventListener("focusin",()=>Jf(!0));pi.addEventListener("focusout",()=>Pg());let sf=-1;function Cb(){const i=innerHeight;let t=0;ao.forEach((r,s)=>{r.sec.getBoundingClientRect().top<=i*.5&&(t=s)}),window.scrollY>=Eg()-2&&(t=ao.length-1),t!==sf&&(sf=t,wb.forEach((r,s)=>s===t?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")),Tb.textContent=String(t+1).padStart(2,"0"),pi.classList.toggle("on-light",ao[t].sec.classList.contains("light")));const e=ao[t].sec.getBoundingClientRect();Ab[t].style.transform=`scaleX(${Sg(-e.top/Math.max(1,e.height-i*.5)).toFixed(3)})`;const n=Cg.getBoundingClientRect();ib.setOverLight(n.top<jp.offsetHeight&&n.bottom>0&&bb.getBoundingClientRect().top>jp.offsetHeight)}const ua=jt("#pause");Ki&&(ua.hidden=!0);ua.addEventListener("click",()=>{const i=ua.getAttribute("aria-pressed")!=="true";ua.setAttribute("aria-pressed",i?"true":"false"),ua.textContent=i?"繼續動畫":"暫停動畫",oi.setPaused(i),hs.setPaused(i),bg.setPaused(i)});window.addEventListener("pointermove",i=>{i.pointerType!=="touch"&&oi.setPointer(i.clientX,i.clientY,!0)},{passive:!0});document.addEventListener("pointerleave",i=>oi.setPointer(i.clientX,i.clientY,!1));const Rb=()=>!Ki&&innerWidth>760&&window.matchMedia("(hover: hover)").matches;function Pb(i,t,e){const n={x:0,y:0,tx:0,ty:0,follow:!1};return t.addEventListener("pointermove",r=>{if(!Rb()||r.pointerType==="touch")return;const s=i.getBoundingClientRect(),o=Math.max(-1,Math.min(1,(r.clientX-(s.left+s.width/2))/(s.width/2))),a=Math.max(-1,Math.min(1,(r.clientY-(s.top+s.height/2))/(s.height/2)));_n.killTweensOf(n),n.follow=!0,n.ty=o*e,n.tx=-a*e}),t.addEventListener("pointerleave",()=>{n.follow=!1,_n.to(n,{x:0,y:0,tx:0,ty:0,duration:.6,ease:"power2.out",overwrite:!0})}),n.step=r=>{if(n.follow){const o=1-Math.pow(.0015,r);n.x+=(n.tx-n.x)*o,n.y+=(n.ty-n.y)*o}const s=Math.abs(n.x)+Math.abs(n.y)<.005?"":`perspective(1200px) rotateX(${n.x.toFixed(2)}deg) rotateY(${n.y.toFixed(2)}deg)`;s!==n.last&&(i.style.transform=s,n.last=s)},n}const Lb=[Pb(jt("#flow"),jt(".flow-wrap"),4)],Db=jt("#poles"),Ub=jt("#p0"),Ib=jt("#p1"),Nb=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();document.addEventListener("visibilitychange",()=>document.hidden?_n.ticker.sleep():_n.ticker.wake());const Fn={frames:0,acc:0,warm:2.5,last:0,history:[]};window.__site={fps:Fn,quality:oi.quality,lenis:wn,tops:Uc,chapters:Ds,SC:Be,timelines:Mc,scene:oi,get cur(){return sf}};_n.ticker.add((i,t)=>{Cb();const e=Math.min(.05,t/1e3),n=innerHeight;Lb.forEach(f=>f.step(e));const r=Be.v1a*Be.v3o*(Be.k23>.001?Be.k23:1-Be.k1o);let s=!1,o=0;if(r>.001&&!document.hidden){ob();const f=oi.ballDefaults(),_=Be.k23>.001?{...f.ch3,a:1}:{...f.hero,a:1};_.push=Be.k23<=.001&&Be.k1o<.05,o=Be.p3*Fu(.6,1,Be.k23);const g=_.cy+_.r>-40&&_.cy-_.r<n+40,p=je.ch3.sec.getBoundingClientRect();(g||o>.15&&p.bottom>0&&p.top<n)&&(oi.update(o,e,r,Be.k23>.5,_),s=!0)}const a=je.ch5.sec.getBoundingClientRect(),l=a.bottom>0&&a.top<n&&Cg.getBoundingClientRect().top>0,c=l&&hs.visible&&!document.hidden,u=c?hs.tick(performance.now()):!1;(s||l)&&oi.render({panel:l?{rect:a,color:Nb}:null,pv:c?{canvas:hs.canvas,rect:hs.holder.getBoundingClientRect(),dirty:u}:null,particles:s}),Tg.style.opacity=s||l?"1":"0";const d=0,h=s?r*Fu(.2,.25,o)*(1-Fu(.29,.33,o)):0;if(Db.style.opacity=h.toFixed(3),h>.001){const[f,_]=oi.polePoints();Ub.style.transform=`translate(${f.x.toFixed(1)}px,${(f.y+d).toFixed(1)}px) translate(0,-50%)`,Ib.style.transform=`translate(${_.x.toFixed(1)}px,${(_.y+d).toFixed(1)}px) translate(0,-50%)`}if(Fn.warm>0){Fn.warm-=t/1e3;return}Fn.frames++,Fn.acc+=t,Fn.acc>=1e3&&(Fn.last=Math.round(Fn.frames*1e3/Fn.acc),Fn.history.push(Fn.last),Fn.frames=0,Fn.acc=0,s&&Fn.last<50&&oi.quality.level<3&&(oi.degrade(),Fn.warm=1))});function Bu(){oi.resize(),qf(),oe.refresh()}window.addEventListener("resize",()=>{clearTimeout(Bu.t),Bu.t=setTimeout(Bu,150)});qf();document.fonts?.ready.then(()=>{qf(),oe.refresh()});nf(0);
