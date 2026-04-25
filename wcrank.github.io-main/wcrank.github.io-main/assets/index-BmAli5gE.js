(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const sy=()=>{};var Gu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},iy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|d>>6,_=d&63;l||(_=64,o||(m=64)),r.push(t[f],t[p],t[m],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):iy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||p==null)throw new oy;const m=i<<2|c>>4;if(r.push(m),d!==64){const _=c<<4&240|d>>2;if(r.push(_),p!==64){const C=d<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ay=function(n){const e=Gh(n);return Kh.encodeByteArray(e,!0)},Zi=function(n){return ay(n).replace(/\./g,"")},Zh=function(n){try{return Kh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=()=>cy().__FIREBASE_DEFAULTS__,uy=()=>{if(typeof process>"u"||typeof Gu>"u")return;const n=Gu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zh(n[1]);return e&&JSON.parse(e)},ko=()=>{try{return sy()||ly()||uy()||dy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yh=n=>{var e,t;return(t=(e=ko())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hy=n=>{const e=Yh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xh=()=>{var n;return(n=ko())===null||n===void 0?void 0:n.config},Qh=n=>{var e;return(e=ko())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zi(JSON.stringify(t)),Zi(JSON.stringify(o)),""].join(".")}const hs={};function my(){const n={prod:[],emulator:[]};for(const e of Object.keys(hs))hs[e]?n.emulator.push(e):n.prod.push(e);return n}function gy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ku=!1;function ef(n,e){if(typeof window>"u"||typeof document>"u"||!Sr(window.location.host)||hs[n]===e||hs[n]||Ku)return;hs[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=my().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function d(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ku=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=gy(r),_=t("text"),C=document.getElementById(_)||document.createElement("span"),x=t("learnmore"),A=document.getElementById(x)||document.createElement("a"),D=t("preprendIcon"),O=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;c(B),f(A,x);const q=d();l(O,D),B.append(O,C,A,q),document.body.appendChild(B)}i?(C.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function vy(){var n;const e=(n=ko())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _y(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function by(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ey(){const n=qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Iy(){return!vy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ty(){try{return typeof indexedDB=="object"}catch{return!1}}function Ay(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="FirebaseError";class Gt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xy,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ky(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,c,r)}}function ky(n,e){return n.replace(Sy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Sy=/\{\$([^}]+)}/g;function Cy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Zu(i)&&Zu(o)){if(!Bn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Zu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ry(n,e){const t=new Py(n,e);return t.subscribe.bind(t)}class Py{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ny(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ra),s.error===void 0&&(s.error=Ra),s.complete===void 0&&(s.complete=Ra);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ny(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ra(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){return n&&n._delegate?n._delegate:n}class Un{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vy(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Oy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oy(n){return n===Dn?void 0:n}function Vy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const My={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Fy=ie.INFO,By={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Uy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=By[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=Fy,this._logHandler=Uy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?My[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const $y=(n,e)=>e.some(t=>n instanceof t);let Yu,Xu;function jy(){return Yu||(Yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zy(){return Xu||(Xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tf=new WeakMap,Xa=new WeakMap,nf=new WeakMap,Pa=new WeakMap,Fc=new WeakMap;function qy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(sn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&tf.set(t,n)}).catch(()=>{}),Fc.set(e,n),e}function Hy(n){if(Xa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Xa.set(n,e)}let Qa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wy(n){Qa=n(Qa)}function Gy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Na(this),e,...t);return nf.set(r,e.sort?e.sort():[e]),sn(r)}:zy().includes(n)?function(...e){return n.apply(Na(this),e),sn(tf.get(this))}:function(...e){return sn(n.apply(Na(this),e))}}function Ky(n){return typeof n=="function"?Gy(n):(n instanceof IDBTransaction&&Hy(n),$y(n,jy())?new Proxy(n,Qa):n)}function sn(n){if(n instanceof IDBRequest)return qy(n);if(Pa.has(n))return Pa.get(n);const e=Ky(n);return e!==n&&(Pa.set(n,e),Fc.set(e,n)),e}const Na=n=>Fc.get(n);function Zy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Yy=["get","getKey","getAll","getAllKeys","count"],Xy=["put","add","delete","clear"],Da=new Map;function Qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Xy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yy.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Da.set(e,i),i}Wy(n=>({...n,get:(e,t,r)=>Qu(e,t)||n.get(e,t,r),has:(e,t)=>!!Qu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Jy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ja="@firebase/app",Ju="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Mc("@firebase/app"),ev="@firebase/app-compat",tv="@firebase/analytics-compat",nv="@firebase/analytics",rv="@firebase/app-check-compat",sv="@firebase/app-check",iv="@firebase/auth",ov="@firebase/auth-compat",av="@firebase/database",cv="@firebase/data-connect",lv="@firebase/database-compat",uv="@firebase/functions",dv="@firebase/functions-compat",hv="@firebase/installations",fv="@firebase/installations-compat",pv="@firebase/messaging",mv="@firebase/messaging-compat",gv="@firebase/performance",yv="@firebase/performance-compat",vv="@firebase/remote-config",_v="@firebase/remote-config-compat",wv="@firebase/storage",bv="@firebase/storage-compat",Ev="@firebase/firestore",Iv="@firebase/ai",Tv="@firebase/firestore-compat",Av="firebase",xv="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="[DEFAULT]",kv={[Ja]:"fire-core",[ev]:"fire-core-compat",[nv]:"fire-analytics",[tv]:"fire-analytics-compat",[sv]:"fire-app-check",[rv]:"fire-app-check-compat",[iv]:"fire-auth",[ov]:"fire-auth-compat",[av]:"fire-rtdb",[cv]:"fire-data-connect",[lv]:"fire-rtdb-compat",[uv]:"fire-fn",[dv]:"fire-fn-compat",[hv]:"fire-iid",[fv]:"fire-iid-compat",[pv]:"fire-fcm",[mv]:"fire-fcm-compat",[gv]:"fire-perf",[yv]:"fire-perf-compat",[vv]:"fire-rc",[_v]:"fire-rc-compat",[wv]:"fire-gcs",[bv]:"fire-gcs-compat",[Ev]:"fire-fst",[Tv]:"fire-fst-compat",[Iv]:"fire-vertex","fire-js":"fire-js",[Av]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Map,Sv=new Map,tc=new Map;function ed(n,e){try{n.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yr(n){const e=n.name;if(tc.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,n);for(const t of Yi.values())ed(t,n);for(const t of Sv.values())ed(t,n);return!0}function Bc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ht(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new Ks("app","Firebase",Cv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=xv;function rf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ec,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(t||(t=Xh()),!t)throw on.create("no-options");const i=Yi.get(s);if(i){if(Bn(t,i.options)&&Bn(r,i.config))return i;throw on.create("duplicate-app",{appName:s})}const o=new Ly(s);for(const l of tc.values())o.addComponent(l);const c=new Rv(t,r,o);return Yi.set(s,c),c}function sf(n=ec){const e=Yi.get(n);if(!e&&n===ec&&Xh())return rf();if(!e)throw on.create("no-app",{appName:n});return e}function an(n,e,t){var r;let s=(r=kv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(c.join(" "));return}yr(new Un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="firebase-heartbeat-database",Nv=1,ws="firebase-heartbeat-store";let Oa=null;function of(){return Oa||(Oa=Zy(Pv,Nv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ws)}catch(t){console.warn(t)}}}}).catch(n=>{throw on.create("idb-open",{originalErrorMessage:n.message})})),Oa}async function Dv(n){try{const t=(await of()).transaction(ws),r=await t.objectStore(ws).get(af(n));return await t.done,r}catch(e){if(e instanceof Gt)$t.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(t.message)}}}async function td(n,e){try{const r=(await of()).transaction(ws,"readwrite");await r.objectStore(ws).put(e,af(n)),await r.done}catch(t){if(t instanceof Gt)$t.warn(t.message);else{const r=on.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$t.warn(r.message)}}}function af(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=1024,Vv=30;class Lv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Vv){const o=Bv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nd(),{heartbeatsToSend:r,unsentEntries:s}=Mv(this._heartbeatsCache.heartbeats),i=Zi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return $t.warn(t),""}}}function nd(){return new Date().toISOString().substring(0,10)}function Mv(n,e=Ov){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),rd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Fv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ty()?Ay().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Dv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return td(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return td(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rd(n){return Zi(JSON.stringify({version:2,heartbeats:n})).length}function Bv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(n){yr(new Un("platform-logger",e=>new Qy(e),"PRIVATE")),yr(new Un("heartbeat",e=>new Lv(e),"PRIVATE")),an(Ja,Ju,n),an(Ja,Ju,"esm2017"),an("fire-js","")}Uv("");var $v="firebase",jv="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an($v,jv,"app");var sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,cf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(T,b,k){for(var E=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)E[Re-2]=arguments[Re];return v.prototype[b].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,w){w||(w=0);var T=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)T[b]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(b=0;16>b;++b)T[b]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],b=I.g[2];var k=I.g[3],E=v+(k^w&(b^k))+T[0]+3614090360&4294967295;v=w+(E<<7&4294967295|E>>>25),E=k+(b^v&(w^b))+T[1]+3905402710&4294967295,k=v+(E<<12&4294967295|E>>>20),E=b+(w^k&(v^w))+T[2]+606105819&4294967295,b=k+(E<<17&4294967295|E>>>15),E=w+(v^b&(k^v))+T[3]+3250441966&4294967295,w=b+(E<<22&4294967295|E>>>10),E=v+(k^w&(b^k))+T[4]+4118548399&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(b^v&(w^b))+T[5]+1200080426&4294967295,k=v+(E<<12&4294967295|E>>>20),E=b+(w^k&(v^w))+T[6]+2821735955&4294967295,b=k+(E<<17&4294967295|E>>>15),E=w+(v^b&(k^v))+T[7]+4249261313&4294967295,w=b+(E<<22&4294967295|E>>>10),E=v+(k^w&(b^k))+T[8]+1770035416&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(b^v&(w^b))+T[9]+2336552879&4294967295,k=v+(E<<12&4294967295|E>>>20),E=b+(w^k&(v^w))+T[10]+4294925233&4294967295,b=k+(E<<17&4294967295|E>>>15),E=w+(v^b&(k^v))+T[11]+2304563134&4294967295,w=b+(E<<22&4294967295|E>>>10),E=v+(k^w&(b^k))+T[12]+1804603682&4294967295,v=w+(E<<7&4294967295|E>>>25),E=k+(b^v&(w^b))+T[13]+4254626195&4294967295,k=v+(E<<12&4294967295|E>>>20),E=b+(w^k&(v^w))+T[14]+2792965006&4294967295,b=k+(E<<17&4294967295|E>>>15),E=w+(v^b&(k^v))+T[15]+1236535329&4294967295,w=b+(E<<22&4294967295|E>>>10),E=v+(b^k&(w^b))+T[1]+4129170786&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^b&(v^w))+T[6]+3225465664&4294967295,k=v+(E<<9&4294967295|E>>>23),E=b+(v^w&(k^v))+T[11]+643717713&4294967295,b=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(b^k))+T[0]+3921069994&4294967295,w=b+(E<<20&4294967295|E>>>12),E=v+(b^k&(w^b))+T[5]+3593408605&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^b&(v^w))+T[10]+38016083&4294967295,k=v+(E<<9&4294967295|E>>>23),E=b+(v^w&(k^v))+T[15]+3634488961&4294967295,b=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(b^k))+T[4]+3889429448&4294967295,w=b+(E<<20&4294967295|E>>>12),E=v+(b^k&(w^b))+T[9]+568446438&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^b&(v^w))+T[14]+3275163606&4294967295,k=v+(E<<9&4294967295|E>>>23),E=b+(v^w&(k^v))+T[3]+4107603335&4294967295,b=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(b^k))+T[8]+1163531501&4294967295,w=b+(E<<20&4294967295|E>>>12),E=v+(b^k&(w^b))+T[13]+2850285829&4294967295,v=w+(E<<5&4294967295|E>>>27),E=k+(w^b&(v^w))+T[2]+4243563512&4294967295,k=v+(E<<9&4294967295|E>>>23),E=b+(v^w&(k^v))+T[7]+1735328473&4294967295,b=k+(E<<14&4294967295|E>>>18),E=w+(k^v&(b^k))+T[12]+2368359562&4294967295,w=b+(E<<20&4294967295|E>>>12),E=v+(w^b^k)+T[5]+4294588738&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^b)+T[8]+2272392833&4294967295,k=v+(E<<11&4294967295|E>>>21),E=b+(k^v^w)+T[11]+1839030562&4294967295,b=k+(E<<16&4294967295|E>>>16),E=w+(b^k^v)+T[14]+4259657740&4294967295,w=b+(E<<23&4294967295|E>>>9),E=v+(w^b^k)+T[1]+2763975236&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^b)+T[4]+1272893353&4294967295,k=v+(E<<11&4294967295|E>>>21),E=b+(k^v^w)+T[7]+4139469664&4294967295,b=k+(E<<16&4294967295|E>>>16),E=w+(b^k^v)+T[10]+3200236656&4294967295,w=b+(E<<23&4294967295|E>>>9),E=v+(w^b^k)+T[13]+681279174&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^b)+T[0]+3936430074&4294967295,k=v+(E<<11&4294967295|E>>>21),E=b+(k^v^w)+T[3]+3572445317&4294967295,b=k+(E<<16&4294967295|E>>>16),E=w+(b^k^v)+T[6]+76029189&4294967295,w=b+(E<<23&4294967295|E>>>9),E=v+(w^b^k)+T[9]+3654602809&4294967295,v=w+(E<<4&4294967295|E>>>28),E=k+(v^w^b)+T[12]+3873151461&4294967295,k=v+(E<<11&4294967295|E>>>21),E=b+(k^v^w)+T[15]+530742520&4294967295,b=k+(E<<16&4294967295|E>>>16),E=w+(b^k^v)+T[2]+3299628645&4294967295,w=b+(E<<23&4294967295|E>>>9),E=v+(b^(w|~k))+T[0]+4096336452&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~b))+T[7]+1126891415&4294967295,k=v+(E<<10&4294967295|E>>>22),E=b+(v^(k|~w))+T[14]+2878612391&4294967295,b=k+(E<<15&4294967295|E>>>17),E=w+(k^(b|~v))+T[5]+4237533241&4294967295,w=b+(E<<21&4294967295|E>>>11),E=v+(b^(w|~k))+T[12]+1700485571&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~b))+T[3]+2399980690&4294967295,k=v+(E<<10&4294967295|E>>>22),E=b+(v^(k|~w))+T[10]+4293915773&4294967295,b=k+(E<<15&4294967295|E>>>17),E=w+(k^(b|~v))+T[1]+2240044497&4294967295,w=b+(E<<21&4294967295|E>>>11),E=v+(b^(w|~k))+T[8]+1873313359&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~b))+T[15]+4264355552&4294967295,k=v+(E<<10&4294967295|E>>>22),E=b+(v^(k|~w))+T[6]+2734768916&4294967295,b=k+(E<<15&4294967295|E>>>17),E=w+(k^(b|~v))+T[13]+1309151649&4294967295,w=b+(E<<21&4294967295|E>>>11),E=v+(b^(w|~k))+T[4]+4149444226&4294967295,v=w+(E<<6&4294967295|E>>>26),E=k+(w^(v|~b))+T[11]+3174756917&4294967295,k=v+(E<<10&4294967295|E>>>22),E=b+(v^(k|~w))+T[2]+718787259&4294967295,b=k+(E<<15&4294967295|E>>>17),E=w+(k^(b|~v))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+k&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,T=this.B,b=this.h,k=0;k<v;){if(b==0)for(;k<=w;)s(this,I,k),k+=this.blockSize;if(typeof I=="string"){for(;k<v;)if(T[b++]=I.charCodeAt(k++),b==this.blockSize){s(this,T),b=0;break}}else for(;k<v;)if(T[b++]=I[k++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var T=0;32>T;T+=8)I[w++]=this.g[v]>>>T&255;return I};function i(I,v){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function o(I,v){this.h=v;for(var w=[],T=!0,b=I.length-1;0<=b;b--){var k=I[b]|0;T&&k==v||(w[b]=k,T=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return A(d(-I));for(var v=[],w=1,T=0;I>=w;T++)v[T]=I/w|0,w*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return A(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),T=p,b=0;b<I.length;b+=8){var k=Math.min(8,I.length-b),E=parseInt(I.substring(b,b+k),v);8>k?(k=d(Math.pow(v,k)),T=T.j(k).add(d(E))):(T=T.j(w),T=T.add(d(E)))}return T}var p=l(0),m=l(1),_=l(16777216);n=o.prototype,n.m=function(){if(x(this))return-A(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var T=this.i(w);I+=(0<=T?T:4294967296+T)*v,v*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(x(this))return"-"+A(this).toString(I);for(var v=d(Math.pow(I,6)),w=this,T="";;){var b=q(w,v).g;w=D(w,b.j(v));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,C(w))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function x(I){return I.h==-1}n.l=function(I){return I=D(this,I),x(I)?-1:C(I)?0:1};function A(I){for(var v=I.g.length,w=[],T=0;T<v;T++)w[T]=~I.g[T];return new o(w,~I.h).add(m)}n.abs=function(){return x(this)?A(this):this},n.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],T=0,b=0;b<=v;b++){var k=T+(this.i(b)&65535)+(I.i(b)&65535),E=(k>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);T=E>>>16,k&=65535,E&=65535,w[b]=E<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function D(I,v){return I.add(A(v))}n.j=function(I){if(C(this)||C(I))return p;if(x(this))return x(I)?A(this).j(A(I)):A(A(this).j(I));if(x(I))return A(this.j(A(I)));if(0>this.l(_)&&0>I.l(_))return d(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],T=0;T<2*v;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<I.g.length;b++){var k=this.i(T)>>>16,E=this.i(T)&65535,Re=I.i(b)>>>16,Je=I.i(b)&65535;w[2*T+2*b]+=E*Je,O(w,2*T+2*b),w[2*T+2*b+1]+=k*Je,O(w,2*T+2*b+1),w[2*T+2*b+1]+=E*Re,O(w,2*T+2*b+1),w[2*T+2*b+2]+=k*Re,O(w,2*T+2*b+2)}for(T=0;T<v;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=v;T<2*v;T++)w[T]=0;return new o(w,0)};function O(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function B(I,v){this.g=I,this.h=v}function q(I,v){if(C(v))throw Error("division by zero");if(C(I))return new B(p,p);if(x(I))return v=q(A(I),v),new B(A(v.g),A(v.h));if(x(v))return v=q(I,A(v)),new B(A(v.g),v.h);if(30<I.g.length){if(x(I)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=v;0>=T.l(I);)w=he(w),T=he(T);var b=se(w,1),k=se(T,1);for(T=se(T,2),w=se(w,2);!C(T);){var E=k.add(T);0>=E.l(I)&&(b=b.add(w),k=E),T=se(T,1),w=se(w,1)}return v=D(I,b.j(v)),new B(b,v)}for(b=p;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=d(w),E=k.j(v);x(E)||0<E.l(I);)w-=T,k=d(w),E=k.j(v);C(k)&&(k=m),b=b.add(k),I=D(I,E)}return new B(b,I)}n.A=function(I){return q(this,I).h},n.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)&I.i(T);return new o(w,this.h&I.h)},n.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)|I.i(T);return new o(w,this.h|I.h)},n.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)^I.i(T);return new o(w,this.h^I.h)};function he(I){for(var v=I.g.length+1,w=[],T=0;T<v;T++)w[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(w,I.h)}function se(I,v){var w=v>>5;v%=32;for(var T=I.g.length-w,b=[],k=0;k<T;k++)b[k]=0<v?I.i(k+w)>>>v|I.i(k+w+1)<<32-v:I.i(k+w);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,cn=o}).apply(typeof sd<"u"?sd:typeof self<"u"?self:typeof window<"u"?window:{});var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lf,rs,uf,Li,nc,df,hf,ff;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,h){return a==Array.prototype||a==Object.prototype||(a[u]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Si=="object"&&Si];for(var u=0;u<a.length;++u){var h=a[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in h))break e;h=h[S]}a=a[a.length-1],g=h[a],u=u(g),u!=g&&u!=null&&e(h,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var h=0,g=!1,S={next:function(){if(!g&&h<a.length){var R=h++;return{value:u(R,a[R]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function d(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,h){return a.call.apply(a.bind,arguments)}function p(a,u,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function m(a,u,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,u){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function h(){}h.prototype=u.prototype,a.aa=u.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,S,R){for(var L=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)L[fe-2]=arguments[fe];return u.prototype[S].apply(g,L)}}function x(a){const u=a.length;if(0<u){const h=Array(u);for(let g=0;g<u;g++)h[g]=a[g];return h}return[]}function A(a,u){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(l(g)){const S=a.length||0,R=g.length||0;a.length=S+R;for(let L=0;L<R;L++)a[S+L]=g[L]}else a.push(g)}}class D{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function O(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var he=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function se(a,u,h){for(const g in a)u.call(h,a[g],g,a)}function I(a,u){for(const h in a)u.call(void 0,a[h],h,a)}function v(a){const u={};for(const h in a)u[h]=a[h];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let h,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(h in g)a[h]=g[h];for(let R=0;R<w.length;R++)h=w[R],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function b(a){var u=1;a=a.split(":");const h=[];for(;0<u&&a.length;)h.push(a.shift()),u--;return a.length&&h.push(a.join(":")),h}function k(a){c.setTimeout(()=>{throw a},0)}function E(){var a=Ur;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Re{constructor(){this.h=this.g=null}add(u,h){const g=Je.get();g.set(u,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Je=new D(()=>new ot,a=>a.reset());class ot{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let An,Zn=!1,Ur=new Re,xn=()=>{const a=c.Promise.resolve(void 0);An=()=>{a.then(Yn)}};var Yn=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(h){k(h)}var u=Je;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Zn=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var $r=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return a})();function Xn(a,u){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(he){e:{try{q(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else h=="mouseover"?u=a.fromElement:h=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ui[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Xn.aa.h.call(this)}}C(Xn,xe);var ui={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),Kl=0;function la(a,u,h,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=h,this.capture=!!g,this.ha=S,this.key=++Kl,this.da=this.fa=!1}function Sn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pt(a){this.src=a,this.g={},this.h=0}Pt.prototype.add=function(a,u,h,g,S){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var L=vt(a,u,g,S);return-1<L?(u=a[L],h||(u.fa=!1)):(u=new la(u,this.src,R,!!g,S),u.fa=h,a.push(u)),u};function Nt(a,u){var h=u.type;if(h in a.g){var g=a.g[h],S=Array.prototype.indexOf.call(g,u,void 0),R;(R=0<=S)&&Array.prototype.splice.call(g,S,1),R&&(Sn(u),a.g[h].length==0&&(delete a.g[h],a.h--))}}function vt(a,u,h,g){for(var S=0;S<a.length;++S){var R=a[S];if(!R.da&&R.listener==u&&R.capture==!!h&&R.ha==g)return S}return-1}var Qn="closure_lm_"+(1e6*Math.random()|0),Jn={};function di(a,u,h,g,S){if(Array.isArray(u)){for(var R=0;R<u.length;R++)di(a,u[R],h,g,S);return null}return h=Xl(h),a&&a[kn]?a.K(u,h,d(g)?!!g.capture:!1,S):ua(a,u,h,!1,g,S)}function ua(a,u,h,g,S,R){if(!u)throw Error("Invalid event type");var L=d(S)?!!S.capture:!!S,fe=ha(a);if(fe||(a[Qn]=fe=new Pt(a)),h=fe.add(u,h,g,L,R),h.proxy)return h;if(g=Rg(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)$r||(S=L),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(Yl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Rg(){function a(h){return u.call(a.src,a.listener,h)}const u=Pg;return a}function Zl(a,u,h,g,S){if(Array.isArray(u))for(var R=0;R<u.length;R++)Zl(a,u[R],h,g,S);else g=d(g)?!!g.capture:!!g,h=Xl(h),a&&a[kn]?(a=a.i,u=String(u).toString(),u in a.g&&(R=a.g[u],h=vt(R,h,g,S),-1<h&&(Sn(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete a.g[u],a.h--)))):a&&(a=ha(a))&&(u=a.g[u.toString()],a=-1,u&&(a=vt(u,h,g,S)),(h=-1<a?u[a]:null)&&da(h))}function da(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[kn])Nt(u.i,a);else{var h=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(h,g,a.capture):u.detachEvent?u.detachEvent(Yl(h),g):u.addListener&&u.removeListener&&u.removeListener(g),(h=ha(u))?(Nt(h,a),h.h==0&&(h.src=null,u[Qn]=null)):Sn(a)}}}function Yl(a){return a in Jn?Jn[a]:Jn[a]="on"+a}function Pg(a,u){if(a.da)a=!0;else{u=new Xn(u,this);var h=a.listener,g=a.ha||a.src;a.fa&&da(a),a=h.call(g,u)}return a}function ha(a){return a=a[Qn],a instanceof Pt?a:null}var fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(a){return typeof a=="function"?a:(a[fa]||(a[fa]=function(u){return a.handleEvent(u)}),a[fa])}function Me(){lt.call(this),this.i=new Pt(this),this.M=this,this.F=null}C(Me,lt),Me.prototype[kn]=!0,Me.prototype.removeEventListener=function(a,u,h,g){Zl(this,a,u,h,g)};function We(a,u){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new xe(u,a);else if(u instanceof xe)u.target=u.target||a;else{var S=u;u=new xe(g,a),T(u,S)}if(S=!0,h)for(var R=h.length-1;0<=R;R--){var L=u.g=h[R];S=hi(L,g,!0,u)&&S}if(L=u.g=a,S=hi(L,g,!0,u)&&S,S=hi(L,g,!1,u)&&S,h)for(R=0;R<h.length;R++)L=u.g=h[R],S=hi(L,g,!1,u)&&S}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var h=a.g[u],g=0;g<h.length;g++)Sn(h[g]);delete a.g[u],a.h--}}this.F=null},Me.prototype.K=function(a,u,h,g){return this.i.add(String(a),u,!1,h,g)},Me.prototype.L=function(a,u,h,g){return this.i.add(String(a),u,!0,h,g)};function hi(a,u,h,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,R=0;R<u.length;++R){var L=u[R];if(L&&!L.da&&L.capture==h){var fe=L.listener,Pe=L.ha||L.src;L.fa&&Nt(a.i,L),S=fe.call(Pe,g)!==!1&&S}}return S&&!g.defaultPrevented}function Ql(a,u,h){if(typeof a=="function")h&&(a=m(a,h));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Jl(a){a.g=Ql(()=>{a.g=null,a.i&&(a.i=!1,Jl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ng extends lt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Jl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(a){lt.call(this),this.h=a,this.g={}}C(jr,lt);var eu=[];function tu(a){se(a.g,function(u,h){this.g.hasOwnProperty(h)&&da(u)},a),a.g={}}jr.prototype.N=function(){jr.aa.N.call(this),tu(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pa=c.JSON.stringify,Dg=c.JSON.parse,Og=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ma(){}ma.prototype.h=null;function nu(a){return a.h||(a.h=a.i())}function ru(){}var zr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ga(){xe.call(this,"d")}C(ga,xe);function ya(){xe.call(this,"c")}C(ya,xe);var Cn={},su=null;function fi(){return su=su||new Me}Cn.La="serverreachability";function iu(a){xe.call(this,Cn.La,a)}C(iu,xe);function qr(a){const u=fi();We(u,new iu(u))}Cn.STAT_EVENT="statevent";function ou(a,u){xe.call(this,Cn.STAT_EVENT,a),this.stat=u}C(ou,xe);function Ge(a){const u=fi();We(u,new ou(u,a))}Cn.Ma="timingevent";function au(a,u){xe.call(this,Cn.Ma,a),this.size=u}C(au,xe);function Hr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Wr(){this.g=!0}Wr.prototype.xa=function(){this.g=!1};function Vg(a,u,h,g,S,R){a.info(function(){if(a.g)if(R)for(var L="",fe=R.split("&"),Pe=0;Pe<fe.length;Pe++){var le=fe[Pe].split("=");if(1<le.length){var Fe=le[0];le=le[1];var Be=Fe.split("_");L=2<=Be.length&&Be[1]=="type"?L+(Fe+"="+le+"&"):L+(Fe+"=redacted&")}}else L=null;else L=R;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+h+`
`+L})}function Lg(a,u,h,g,S,R,L){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+h+`
`+R+" "+L})}function er(a,u,h,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Fg(a,h)+(g?" "+g:"")})}function Mg(a,u){a.info(function(){return"TIMEOUT: "+u})}Wr.prototype.info=function(){};function Fg(a,u){if(!a.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var R=S[0];if(R!="noop"&&R!="stop"&&R!="close")for(var L=1;L<S.length;L++)S[L]=""}}}}return pa(h)}catch{return u}}var pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},va;function mi(){}C(mi,ma),mi.prototype.g=function(){return new XMLHttpRequest},mi.prototype.i=function(){return{}},va=new mi;function Kt(a,u,h,g){this.j=a,this.i=u,this.l=h,this.R=g||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lu}function lu(){this.i=null,this.g="",this.h=!1}var uu={},_a={};function wa(a,u,h){a.L=1,a.v=_i(Dt(u)),a.m=h,a.P=!0,du(a,null)}function du(a,u){a.F=Date.now(),gi(a),a.A=Dt(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Au(h.i,"t",g),a.C=0,h=a.j.J,a.h=new lu,a.g=zu(a.j,h?u:null,!a.m),0<a.O&&(a.M=new Ng(m(a.Y,a,a.g),a.O)),u=a.U,h=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(eu[0]=S.toString()),S=eu);for(var R=0;R<S.length;R++){var L=di(h,S[R],g||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),qr(),Vg(a.i,a.u,a.A,a.l,a.R,a.m)}Kt.prototype.ca=function(a){a=a.target;const u=this.M;u&&Ot(a)==3?u.j():this.Y(a)},Kt.prototype.Y=function(a){try{if(a==this.g)e:{const Be=Ot(this.g);var u=this.g.Ba();const rr=this.g.Z();if(!(3>Be)&&(Be!=3||this.g&&(this.h.h||this.g.oa()||Nu(this.g)))){this.J||Be!=4||u==7||(u==8||0>=rr?qr(3):qr(2)),ba(this);var h=this.g.Z();this.X=h;t:if(hu(this)){var g=Nu(this.g);a="";var S=g.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),Gr(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(R&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,Lg(this.i,this.u,this.A,this.l,this.R,Be,h),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Pe=this.g;if((fe=Pe.g?Pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(fe)){var le=fe;break t}}le=null}if(h=le)er(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ea(this,h);else{this.o=!1,this.s=3,Ge(12),Rn(this),Gr(this);break e}}if(this.P){h=!0;let ut;for(;!this.J&&this.C<L.length;)if(ut=Bg(this,L),ut==_a){Be==4&&(this.s=4,Ge(14),h=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==uu){this.s=4,Ge(15),er(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else er(this.i,this.l,ut,null),Ea(this,ut);if(hu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||L.length!=0||this.h.h||(this.s=1,Ge(16),h=!1),this.o=this.o&&h,!h)er(this.i,this.l,L,"[Invalid Chunked Response]"),Rn(this),Gr(this);else if(0<L.length&&!this.W){this.W=!0;var Fe=this.j;Fe.g==this&&Fe.ba&&!Fe.M&&(Fe.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Sa(Fe),Fe.M=!0,Ge(11))}}else er(this.i,this.l,L,null),Ea(this,L);Be==4&&Rn(this),this.o&&!this.J&&(Be==4?Bu(this.j,this):(this.o=!1,gi(this)))}else ny(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,Ge(12)):(this.s=0,Ge(13)),Rn(this),Gr(this)}}}catch{}finally{}};function hu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Bg(a,u){var h=a.C,g=u.indexOf(`
`,h);return g==-1?_a:(h=Number(u.substring(h,g)),isNaN(h)?uu:(g+=1,g+h>u.length?_a:(u=u.slice(g,g+h),a.C=g+h,u)))}Kt.prototype.cancel=function(){this.J=!0,Rn(this)};function gi(a){a.S=Date.now()+a.I,fu(a,a.I)}function fu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hr(m(a.ba,a),u)}function ba(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Kt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Mg(this.i,this.A),this.L!=2&&(qr(),Ge(17)),Rn(this),this.s=2,Gr(this)):fu(this,this.S-a)};function Gr(a){a.j.G==0||a.J||Bu(a.j,a)}function Rn(a){ba(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,tu(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ea(a,u){try{var h=a.j;if(h.G!=0&&(h.g==a||Ia(h.h,a))){if(!a.K&&Ia(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Ai(h),Ii(h);else break e;ka(h),Ge(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=Hr(m(h.Za,h),6e3));if(1>=gu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Nn(h,11)}else if((a.K||h.g==a)&&Ai(h),!O(u))for(S=h.Da.g.parse(u),u=0;u<S.length;u++){let le=S[u];if(h.T=le[0],le=le[1],h.G==2)if(le[0]=="c"){h.K=le[1],h.ia=le[2];const Fe=le[3];Fe!=null&&(h.la=Fe,h.j.info("VER="+h.la));const Be=le[4];Be!=null&&(h.Aa=Be,h.j.info("SVER="+h.Aa));const rr=le[5];rr!=null&&typeof rr=="number"&&0<rr&&(g=1.5*rr,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const ut=a.g;if(ut){const ki=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var R=g.h;R.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ta(R,R.h),R.h=null))}if(g.D){const Ca=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Ca&&(g.ya=Ca,ge(g.I,g.D,Ca))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var L=a;if(g.qa=ju(g,g.J?g.ia:null,g.W),L.K){yu(g.h,L);var fe=L,Pe=g.L;Pe&&(fe.I=Pe),fe.B&&(ba(fe),gi(fe)),g.g=L}else Mu(g);0<h.i.length&&Ti(h)}else le[0]!="stop"&&le[0]!="close"||Nn(h,7);else h.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Nn(h,7):xa(h):le[0]!="noop"&&h.l&&h.l.ta(le),h.v=0)}}qr(4)}catch{}}var Ug=class{constructor(a,u){this.g=a,this.map=u}};function pu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gu(a){return a.h?1:a.g?a.g.size:0}function Ia(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ta(a,u){a.g?a.g.add(u):a.h=u}function yu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}pu.prototype.cancel=function(){if(this.i=vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const h of a.g.values())u=u.concat(h.D);return u}return x(a.i)}function $g(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],h=a.length,g=0;g<h;g++)u.push(a[g]);return u}u=[],h=0;for(g in a)u[h++]=a[g];return u}function jg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var h=0;h<a;h++)u.push(h);return u}u=[],h=0;for(const g in a)u[h++]=g;return u}}}function _u(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var h=jg(a),g=$g(a),S=g.length,R=0;R<S;R++)u.call(void 0,g[R],h&&h[R],a)}var wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zg(a,u){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),S=null;if(0<=g){var R=a[h].substring(0,g);S=a[h].substring(g+1)}else R=a[h];u(R,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Pn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pn){this.h=a.h,yi(this,a.j),this.o=a.o,this.g=a.g,vi(this,a.s),this.l=a.l;var u=a.i,h=new Yr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),bu(this,h),this.m=a.m}else a&&(u=String(a).match(wu))?(this.h=!1,yi(this,u[1]||"",!0),this.o=Kr(u[2]||""),this.g=Kr(u[3]||"",!0),vi(this,u[4]),this.l=Kr(u[5]||"",!0),bu(this,u[6]||"",!0),this.m=Kr(u[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Pn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Zr(u,Eu,!0),":");var h=this.g;return(h||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Zr(u,Eu,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Zr(h,h.charAt(0)=="/"?Wg:Hg,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Zr(h,Kg)),a.join("")};function Dt(a){return new Pn(a)}function yi(a,u,h){a.j=h?Kr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function vi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function bu(a,u,h){u instanceof Yr?(a.i=u,Zg(a.i,a.h)):(h||(u=Zr(u,Gg)),a.i=new Yr(u,a.h))}function ge(a,u,h){a.i.set(u,h)}function _i(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Kr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zr(a,u,h){return typeof a=="string"?(a=encodeURI(a).replace(u,qg),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Eu=/[#\/\?@]/g,Hg=/[#\?:]/g,Wg=/[#\?]/g,Gg=/[#\?@]/g,Kg=/#/g;function Yr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Zt(a){a.g||(a.g=new Map,a.h=0,a.i&&zg(a.i,function(u,h){a.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Yr.prototype,n.add=function(a,u){Zt(this),this.i=null,a=tr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(u),this.h+=1,this};function Iu(a,u){Zt(a),u=tr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Tu(a,u){return Zt(a),u=tr(a,u),a.g.has(u)}n.forEach=function(a,u){Zt(this),this.g.forEach(function(h,g){h.forEach(function(S){a.call(u,S,g,this)},this)},this)},n.na=function(){Zt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let g=0;g<u.length;g++){const S=a[g];for(let R=0;R<S.length;R++)h.push(u[g])}return h},n.V=function(a){Zt(this);let u=[];if(typeof a=="string")Tu(this,a)&&(u=u.concat(this.g.get(tr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)u=u.concat(a[h])}return u},n.set=function(a,u){return Zt(this),this.i=null,a=tr(this,a),Tu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Au(a,u,h){Iu(a,u),0<h.length&&(a.i=null,a.g.set(tr(a,u),x(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var g=u[h];const R=encodeURIComponent(String(g)),L=this.V(g);for(g=0;g<L.length;g++){var S=R;L[g]!==""&&(S+="="+encodeURIComponent(String(L[g]))),a.push(S)}}return this.i=a.join("&")};function tr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Zg(a,u){u&&!a.j&&(Zt(a),a.i=null,a.g.forEach(function(h,g){var S=g.toLowerCase();g!=S&&(Iu(this,g),Au(this,S,h))},a)),a.j=u}function Yg(a,u){const h=new Wr;if(c.Image){const g=new Image;g.onload=_(Yt,h,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Yt,h,"TestLoadImage: error",!1,u,g),g.onabort=_(Yt,h,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Yt,h,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Xg(a,u){const h=new Wr,g=new AbortController,S=setTimeout(()=>{g.abort(),Yt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(R=>{clearTimeout(S),R.ok?Yt(h,"TestPingServer: ok",!0,u):Yt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Yt(h,"TestPingServer: error",!1,u)})}function Yt(a,u,h,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(h)}catch{}}function Qg(){this.g=new Og}function Jg(a,u,h){const g=h||"";try{_u(a,function(S,R){let L=S;d(S)&&(L=pa(S)),u.push(g+R+"="+encodeURIComponent(L))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function wi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(wi,ma),wi.prototype.g=function(){return new bi(this.l,this.j)},wi.prototype.i=(function(a){return function(){return a}})({});function bi(a,u){Me.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(bi,Me),n=bi.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Qr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Xr(this):Qr(this),this.readyState==3&&xu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Xr(this))},n.Qa=function(a){this.g&&(this.response=a,Xr(this))},n.ga=function(){this.g&&Xr(this)};function Xr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qr(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=u.next();return a.join(`\r
`)};function Qr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ku(a){let u="";return se(a,function(h,g){u+=g,u+=":",u+=h,u+=`\r
`}),u}function Aa(a,u,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=ku(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ge(a,u,h))}function _e(a){Me.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(_e,Me);var ey=/^https?$/i,ty=["POST","PUT"];n=_e.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():va.g(),this.v=this.o?nu(this.o):nu(va),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(R){Su(this,R);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)h.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())h.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ty,u,void 0))||g||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,L]of h)this.g.setRequestHeader(R,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pu(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){Su(this,R)}};function Su(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Cu(a),Ei(a)}function Cu(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,We(this,"complete"),We(this,"abort"),Ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),_e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ru(this):this.bb())},n.bb=function(){Ru(this)};function Ru(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ot(a)!=4||a.Z()!=2)){if(a.u&&Ot(a)==4)Ql(a.Ea,0,a);else if(We(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var g;if(g=L===0){var S=String(a.D).match(wu)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!ey.test(S?S.toLowerCase():"")}h=g}if(h)We(a,"complete"),We(a,"success");else{a.m=6;try{var R=2<Ot(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",Cu(a)}}finally{Ei(a)}}}}function Ei(a,u){if(a.g){Pu(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||We(a,"ready");try{h.onreadystatechange=g}catch{}}}function Pu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Dg(u)}};function Nu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ny(a){const u={};a=(a.g&&2<=Ot(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(O(a[g]))continue;var h=b(a[g]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=u[S]||[];u[S]=R,R.push(h)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(a,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||u}function Du(a){this.Aa=0,this.i=[],this.j=new Wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,a),this.cb=Jr("retryDelaySeedMs",1e4,a),this.Wa=Jr("forwardChannelMaxRetries",2,a),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new pu(a&&a.concurrentRequestLimit),this.Da=new Qg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Du.prototype,n.la=8,n.G=1,n.connect=function(a,u,h,g){Ge(0),this.W=a,this.H=u||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=ju(this,null,this.W),Ti(this)};function xa(a){if(Ou(a),a.G==3){var u=a.U++,h=Dt(a.I);if(ge(h,"SID",a.K),ge(h,"RID",u),ge(h,"TYPE","terminate"),es(a,h),u=new Kt(a,a.j,u),u.L=2,u.v=_i(Dt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=zu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),gi(u)}$u(a)}function Ii(a){a.g&&(Sa(a),a.g.cancel(),a.g=null)}function Ou(a){Ii(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ai(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ti(a){if(!mu(a.h)&&!a.s){a.s=!0;var u=a.Ga;An||xn(),Zn||(An(),Zn=!0),Ur.add(u,a),a.B=0}}function ry(a,u){return gu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hr(m(a.Ga,a,u),Uu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Kt(this,this.j,a);let R=this.o;if(this.S&&(R?(R=v(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(S.H=R,R=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Lu(this,S,u),h=Dt(this.I),ge(h,"RID",a),ge(h,"CVER",22),this.D&&ge(h,"X-HTTP-Session-Id",this.D),es(this,h),R&&(this.O?u="headers="+encodeURIComponent(String(ku(R)))+"&"+u:this.m&&Aa(h,this.m,R)),Ta(this.h,S),this.Ua&&ge(h,"TYPE","init"),this.P?(ge(h,"$req",u),ge(h,"SID","null"),S.T=!0,wa(S,h,null)):wa(S,h,u),this.G=2}}else this.G==3&&(a?Vu(this,a):this.i.length==0||mu(this.h)||Vu(this))};function Vu(a,u){var h;u?h=u.l:h=a.U++;const g=Dt(a.I);ge(g,"SID",a.K),ge(g,"RID",h),ge(g,"AID",a.T),es(a,g),a.m&&a.o&&Aa(g,a.m,a.o),h=new Kt(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Lu(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ta(a.h,h),wa(h,g,u)}function es(a,u){a.H&&se(a.H,function(h,g){ge(u,g,h)}),a.l&&_u({},function(h,g){ge(u,g,h)})}function Lu(a,u,h){h=Math.min(a.i.length,h);var g=a.l?m(a.l.Na,a.l,a):null;e:{var S=a.i;let R=-1;for(;;){const L=["count="+h];R==-1?0<h?(R=S[0].g,L.push("ofs="+R)):R=0:L.push("ofs="+R);let fe=!0;for(let Pe=0;Pe<h;Pe++){let le=S[Pe].g;const Fe=S[Pe].map;if(le-=R,0>le)R=Math.max(0,S[Pe].g-100),fe=!1;else try{Jg(Fe,L,"req"+le+"_")}catch{g&&g(Fe)}}if(fe){g=L.join("&");break e}}}return a=a.i.splice(0,h),u.D=a,g}function Mu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;An||xn(),Zn||(An(),Zn=!0),Ur.add(u,a),a.v=0}}function ka(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hr(m(a.Fa,a),Uu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hr(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ge(10),Ii(this),Fu(this))};function Sa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Fu(a){a.g=new Kt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Dt(a.qa);ge(u,"RID","rpc"),ge(u,"SID",a.K),ge(u,"AID",a.T),ge(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(u,"TO",a.ja),ge(u,"TYPE","xmlhttp"),es(a,u),a.m&&a.o&&Aa(u,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=_i(Dt(u)),h.m=null,h.P=!0,du(h,a)}n.Za=function(){this.C!=null&&(this.C=null,Ii(this),ka(this),Ge(19))};function Ai(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Bu(a,u){var h=null;if(a.g==u){Ai(a),Sa(a),a.g=null;var g=2}else if(Ia(a.h,u))h=u.D,yu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=fi(),We(g,new au(g,h)),Ti(a)}else Mu(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&ry(a,u)||g==2&&ka(a)))switch(h&&0<h.length&&(u=a.h,u.i=u.i.concat(h)),S){case 1:Nn(a,5);break;case 4:Nn(a,10);break;case 3:Nn(a,6);break;default:Nn(a,2)}}}function Uu(a,u){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*u}function Nn(a,u){if(a.j.info("Error code "+u),u==2){var h=m(a.fb,a),g=a.Xa;const S=!g;g=new Pn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||yi(g,"https"),_i(g),S?Yg(g.toString(),h):Xg(g.toString(),h)}else Ge(2);a.G=0,a.l&&a.l.sa(u),$u(a),Ou(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function $u(a){if(a.G=0,a.ka=[],a.l){const u=vu(a.h);(u.length!=0||a.i.length!=0)&&(A(a.ka,u),A(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function ju(a,u,h){var g=h instanceof Pn?Dt(h):new Pn(h);if(g.g!="")u&&(g.g=u+"."+g.g),vi(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var R=new Pn(null);g&&yi(R,g),u&&(R.g=u),S&&vi(R,S),h&&(R.l=h),g=R}return h=a.D,u=a.ya,h&&u&&ge(g,h,u),ge(g,"VER",a.la),es(a,g),g}function zu(a,u,h){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new _e(new wi({eb:h})):new _e(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qu(){}n=qu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xi(){}xi.prototype.g=function(a,u){return new st(a,u)};function st(a,u){Me.call(this),this.g=new Du(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!O(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!O(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new nr(this)}C(st,Me),st.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},st.prototype.close=function(){xa(this.g)},st.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=pa(a),a=h);u.i.push(new Ug(u.Ya++,a)),u.G==3&&Ti(u)},st.prototype.N=function(){this.g.l=null,delete this.j,xa(this.g),delete this.g,st.aa.N.call(this)};function Hu(a){ga.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const h in u){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Hu,ga);function Wu(){ya.call(this),this.status=1}C(Wu,ya);function nr(a){this.g=a}C(nr,qu),nr.prototype.ua=function(){We(this.g,"a")},nr.prototype.ta=function(a){We(this.g,new Hu(a))},nr.prototype.sa=function(a){We(this.g,new Wu)},nr.prototype.ra=function(){We(this.g,"b")},xi.prototype.createWebChannel=xi.prototype.g,st.prototype.send=st.prototype.o,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,ff=function(){return new xi},hf=function(){return fi()},df=Cn,nc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Li=pi,cu.COMPLETE="complete",uf=cu,ru.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",Me.prototype.listen=Me.prototype.K,rs=ru,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,lf=_e}).apply(typeof Si<"u"?Si:typeof self<"u"?self:typeof window<"u"?window:{});const id="@firebase/firestore",od="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Mc("@firebase/firestore");function ir(){return $n.logLevel}function j(n,...e){if($n.logLevel<=ie.DEBUG){const t=e.map(Uc);$n.debug(`Firestore (${Rr}): ${n}`,...t)}}function jt(n,...e){if($n.logLevel<=ie.ERROR){const t=e.map(Uc);$n.error(`Firestore (${Rr}): ${n}`,...t)}}function dn(n,...e){if($n.logLevel<=ie.WARN){const t=e.map(Uc);$n.warn(`Firestore (${Rr}): ${n}`,...t)}}function Uc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,pf(n,r,t)}function pf(n,e,t){let r=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw jt(r),new Error(r)}function ue(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||pf(e,s,r)}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(je.UNAUTHENTICATED)))}shutdown(){}}class qv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Hv{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ut,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ut)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new mf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new je(e)}}class Wv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Gv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Wv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(je.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ad{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ht(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ue(this.o===void 0,3512);const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ad(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ad(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function rc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return re(r,s);{const i=gf(),o=Yv(i.encode(cd(n,t)),i.encode(cd(e,t)));return o!==0?o:re(r,s)}}t+=r>65535?2:1}return re(n.length,e.length)}function cd(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Yv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return re(n[t],e[t]);return re(n.length,e.length)}function vr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="__name__";class _t{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return _t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _t?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=_t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return re(e.length,t.length)}static compareSegments(e,t){const r=_t.isNumericId(e),s=_t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?_t.extractNumericId(e).compare(_t.extractNumericId(t)):rc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class me extends _t{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new me(t)}static emptyPath(){return new me([])}}const Xv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends _t{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return Xv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ld}static keyField(){return new Ve([ld])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new F(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(me.fromString(e))}static fromName(e){return new H(me.fromString(e).popFirst(5))}static empty(){return new H(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n,e,t){if(!t)throw new F(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qv(n,e,t,r){if(e===!0&&r===!0)throw new F(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ud(n){if(!H.isDocumentKey(n))throw new F(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function dd(n){if(H.isDocumentKey(n))throw new F(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function So(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function Ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=So(n);throw new F(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ys(n,e){if(!vf(n))throw new F(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new F(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=-62135596800,fd=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*fd);return new ye(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hd)throw new F(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fd}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ys(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Ae("string",ye._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ye(0,0))}static max(){return new Q(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=-1;function Jv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new hn(s,H.empty(),e)}function e_(n){return new hn(n.readTime,n.key,bs)}class hn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hn(Q.min(),H.empty(),bs)}static max(){return new hn(Q.max(),H.empty(),bs)}}function t_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class r_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==n_)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):N.reject(t)}static resolve(e){return new N(((t,r)=>{t(e)}))}static reject(e){return new N(((t,r)=>{r(e)}))}static waitFor(e){return new N(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next((s=>s?N.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new N(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next((f=>{o[d]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new N(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function s_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Co.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=-1;function Ro(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}function i_(n){return typeof n=="number"&&Number.isInteger(n)&&!Xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="";function o_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=pd(e)),e=a_(n.get(t),e);return pd(e)}function a_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case _f:t+="";break;default:t+=i}}return t}function pd(n){return n+_f+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ci(this.root,e,this.comparator,!0)}}class Ci{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Oe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gd(this.data.getIterator())}getIteratorFrom(e){return new gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new it([])}unionWith(e){let t=new ke(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bf("Invalid base64 string: "+i):i}})(e);return new Le(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const c_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(ue(!!n,39018),typeof n=="string"){let e=0;const t=c_.exec(n);if(ue(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(n.seconds),nanos:be(n.nanos)}}function be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pn(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="server_timestamp",If="__type__",Tf="__previous_value__",Af="__local_write_time__";function zc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[If])===null||t===void 0?void 0:t.stringValue)===Ef}function Po(n){const e=n.mapValue.fields[Tf];return zc(e)?Po(e):e}function Es(n){const e=fn(n.mapValue.fields[Af].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,r,s,i,o,c,l,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=f}}const Qi="(default)";class Is{constructor(e,t){this.projectId=e,this.database=t||Qi}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database===Qi}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="__type__",u_="__max__",Ri={mapValue:{}},kf="__vector__",Ji="value";function mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zc(n)?4:h_(n)?9007199254740991:d_(n)?10:11:K(28295,{value:n})}function St(n,e){if(n===e)return!0;const t=mn(n);if(t!==mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Es(n).isEqual(Es(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fn(s.timestampValue),c=fn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return pn(s.bytesValue).isEqual(pn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),c=be(i.doubleValue);return o===c?Xi(o)===Xi(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return vr(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(md(o)!==md(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!St(o[l],c[l])))return!1;return!0})(n,e);default:return K(52216,{left:n})}}function Ts(n,e){return(n.values||[]).find((t=>St(t,e)))!==void 0}function _r(n,e){if(n===e)return 0;const t=mn(n),r=mn(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=be(i.integerValue||i.doubleValue),l=be(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return yd(n.timestampValue,e.timestampValue);case 4:return yd(Es(n),Es(e));case 5:return rc(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=pn(i),l=pn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=re(c[d],l[d]);if(f!==0)return f}return re(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=re(be(i.latitude),be(o.latitude));return c!==0?c:re(be(i.longitude),be(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return vd(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var c,l,d,f;const p=i.fields||{},m=o.fields||{},_=(c=p[Ji])===null||c===void 0?void 0:c.arrayValue,C=(l=m[Ji])===null||l===void 0?void 0:l.arrayValue,x=re(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:vd(_,C)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ri.mapValue&&o===Ri.mapValue)return 0;if(i===Ri.mapValue)return 1;if(o===Ri.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=o.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=rc(l[p],f[p]);if(m!==0)return m;const _=_r(c[l[p]],d[f[p]]);if(_!==0)return _}return re(l.length,f.length)})(n.mapValue,e.mapValue);default:throw K(23264,{le:t})}}function yd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=fn(n),r=fn(e),s=re(t.seconds,r.seconds);return s!==0?s:re(t.nanos,r.nanos)}function vd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=_r(t[s],r[s]);if(i)return i}return re(t.length,r.length)}function wr(n){return sc(n)}function sc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=fn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return pn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return H.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=sc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sc(t.fields[o])}`;return s+"}"})(n.mapValue):K(61005,{value:n})}function Mi(n){switch(mn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Po(n);return e?16+Mi(e):16;case 5:return 2*n.stringValue.length;case 6:return pn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Mi(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return bn(r.fields,((i,o)=>{s+=i.length+Mi(o)})),s})(n.mapValue);default:throw K(13486,{value:n})}}function _d(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ic(n){return!!n&&"integerValue"in n}function qc(n){return!!n&&"arrayValue"in n}function wd(n){return!!n&&"nullValue"in n}function bd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fi(n){return!!n&&"mapValue"in n}function d_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[xf])===null||t===void 0?void 0:t.stringValue)===kf}function fs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=fs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function h_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===u_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fs(t)}setAll(e){let t=Ve.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=fs(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Fi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Fi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){bn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new tt(fs(this.value))}}function Sf(n){const e=[];return bn(n.fields,((t,r)=>{const s=new Ve([t]);if(Fi(r)){const i=Sf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new it(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ze(e,0,Q.min(),Q.min(),Q.min(),tt.empty(),0)}static newFoundDocument(e,t,r,s){return new ze(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new ze(e,2,t,Q.min(),Q.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new ze(e,3,t,Q.min(),Q.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.position=e,this.inclusive=t}}function Ed(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),t.key):r=_r(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Id(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t="asc"){this.field=e,this.dir=t}}function f_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{}class Te extends Cf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new m_(e,t,r):t==="array-contains"?new v_(e,r):t==="in"?new __(e,r):t==="not-in"?new w_(e,r):t==="array-contains-any"?new b_(e,r):new Te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new g_(e,r):new y_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_r(t,this.value)):t!==null&&mn(this.value)===mn(t)&&this.matchesComparison(_r(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends Cf{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new gt(e,t)}matches(e){return Rf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Rf(n){return n.op==="and"}function Pf(n){return p_(n)&&Rf(n)}function p_(n){for(const e of n.filters)if(e instanceof gt)return!1;return!0}function oc(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+wr(n.value);if(Pf(n))return n.filters.map((e=>oc(e))).join(",");{const e=n.filters.map((t=>oc(t))).join(",");return`${n.op}(${e})`}}function Nf(n,e){return n instanceof Te?(function(r,s){return s instanceof Te&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)})(n,e):n instanceof gt?(function(r,s){return s instanceof gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Nf(o,s.filters[c])),!0):!1})(n,e):void K(19439)}function Df(n){return n instanceof Te?(function(t){return`${t.field.canonicalString()} ${t.op} ${wr(t.value)}`})(n):n instanceof gt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Df).join(" ,")+"}"})(n):"Filter"}class m_ extends Te{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class g_ extends Te{constructor(e,t){super(e,"in",t),this.keys=Of("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class y_ extends Te{constructor(e,t){super(e,"not-in",t),this.keys=Of("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Of(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>H.fromName(r.referenceValue)))}class v_ extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qc(t)&&Ts(t.arrayValue,this.value)}}class __ extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ts(this.value.arrayValue,t)}}class w_ extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ts(this.value.arrayValue,t)}}class b_ extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Ts(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function Td(n,e=null,t=[],r=[],s=null,i=null,o=null){return new E_(n,e,t,r,s,i,o)}function Hc(n){const e=J(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>oc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ro(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>wr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>wr(r))).join(",")),e.Pe=t}return e.Pe}function Wc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!f_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Nf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Id(n.startAt,e.startAt)&&Id(n.endAt,e.endAt)}function ac(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function I_(n,e,t,r,s,i,o,c){return new Dr(n,e,t,r,s,i,o,c)}function No(n){return new Dr(n)}function Ad(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vf(n){return n.collectionGroup!==null}function ps(n){const e=J(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ke(Ve.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new As(i,r))})),t.has(Ve.keyField().canonicalString())||e.Te.push(new As(Ve.keyField(),r))}return e.Te}function bt(n){const e=J(n);return e.Ie||(e.Ie=T_(e,ps(n))),e.Ie}function T_(n,e){if(n.limitType==="F")return Td(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new As(s.field,i)}));const t=n.endAt?new eo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new eo(n.startAt.position,n.startAt.inclusive):null;return Td(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cc(n,e){const t=n.filters.concat([e]);return new Dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lc(n,e,t){return new Dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Do(n,e){return Wc(bt(n),bt(e))&&n.limitType===e.limitType}function Lf(n){return`${Hc(bt(n))}|lt:${n.limitType}`}function or(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Df(s))).join(", ")}]`),Ro(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>wr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>wr(s))).join(",")),`Target(${r})`})(bt(n))}; limitType=${n.limitType})`}function Oo(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const d=Ed(o,c,l);return o.inclusive?d<=0:d<0})(r.startAt,ps(r),s)||r.endAt&&!(function(o,c,l){const d=Ed(o,c,l);return o.inclusive?d>=0:d>0})(r.endAt,ps(r),s))})(n,e)}function A_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Mf(n){return(e,t)=>{let r=!1;for(const s of ps(n)){const i=x_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function x_(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),d=c.data.field(i);return l!==null&&d!==null?_r(l,d):K(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return wf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new ve(H.comparator);function zt(){return k_}const Ff=new ve(H.comparator);function ss(...n){let e=Ff;for(const t of n)e=e.insert(t.key,t);return e}function Bf(n){let e=Ff;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function On(){return ms()}function Uf(){return ms()}function ms(){return new Wn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const S_=new ve(H.comparator),C_=new ke(H.comparator);function oe(...n){let e=C_;for(const t of n)e=e.add(t);return e}const R_=new ke(re);function P_(){return R_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function $f(n){return{integerValue:""+n}}function N_(n,e){return i_(e)?$f(e):Gc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this._=void 0}}function D_(n,e,t){return n instanceof xs?(function(s,i){const o={fields:{[If]:{stringValue:Ef},[Af]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zc(i)&&(i=Po(i)),i&&(o.fields[Tf]=i),{mapValue:o}})(t,e):n instanceof ks?zf(n,e):n instanceof Ss?qf(n,e):(function(s,i){const o=jf(s,i),c=xd(o)+xd(s.Ee);return ic(o)&&ic(s.Ee)?$f(c):Gc(s.serializer,c)})(n,e)}function O_(n,e,t){return n instanceof ks?zf(n,e):n instanceof Ss?qf(n,e):t}function jf(n,e){return n instanceof to?(function(r){return ic(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class xs extends Vo{}class ks extends Vo{constructor(e){super(),this.elements=e}}function zf(n,e){const t=Hf(e);for(const r of n.elements)t.some((s=>St(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Ss extends Vo{constructor(e){super(),this.elements=e}}function qf(n,e){let t=Hf(e);for(const r of n.elements)t=t.filter((s=>!St(s,r)));return{arrayValue:{values:t}}}class to extends Vo{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function xd(n){return be(n.integerValue||n.doubleValue)}function Hf(n){return qc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t){this.field=e,this.transform=t}}function L_(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof ks&&s instanceof ks||r instanceof Ss&&s instanceof Ss?vr(r.elements,s.elements,St):r instanceof to&&s instanceof to?St(r.Ee,s.Ee):r instanceof xs&&s instanceof xs})(n.transform,e.transform)}class M_{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Lo{}function Wf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mo(n.key,Xe.none()):new Xs(n.key,n.data,Xe.none());{const t=n.data,r=tt.empty();let s=new ke(Ve.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new En(n.key,r,new it(s.toArray()),Xe.none())}}function F_(n,e,t){n instanceof Xs?(function(s,i,o){const c=s.value.clone(),l=Sd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof En?(function(s,i,o){if(!Bi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Sd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Gf(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function gs(n,e,t,r){return n instanceof Xs?(function(i,o,c,l){if(!Bi(i.precondition,o))return c;const d=i.value.clone(),f=Cd(i.fieldTransforms,l,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof En?(function(i,o,c,l){if(!Bi(i.precondition,o))return c;const d=Cd(i.fieldTransforms,l,o),f=o.data;return f.setAll(Gf(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return Bi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function B_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=jf(r.transform,s||null);i!=null&&(t===null&&(t=tt.empty()),t.set(r.field,i))}return t||null}function kd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vr(r,s,((i,o)=>L_(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xs extends Lo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class En extends Lo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Sd(n,e,t){const r=new Map;ue(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,O_(o,c,t[s]))}return r}function Cd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,D_(i,o,e))}return r}class Mo extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class U_ extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&F_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Uf();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Wf(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),oe())}isEqual(e){return this.batchId===e.batchId&&vr(this.mutations,e.mutations,((t,r)=>kd(t,r)))&&vr(this.baseMutations,e.baseMutations,((t,r)=>kd(t,r)))}}class Kc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ue(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return S_})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Kc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,ae;function q_(n){switch(n){case P.OK:return K(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Kf(n){if(n===void 0)return jt("GRPC error has no .code"),P.UNKNOWN;switch(n){case Ee.OK:return P.OK;case Ee.CANCELLED:return P.CANCELLED;case Ee.UNKNOWN:return P.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return P.INTERNAL;case Ee.UNAVAILABLE:return P.UNAVAILABLE;case Ee.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ee.NOT_FOUND:return P.NOT_FOUND;case Ee.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ee.ABORTED:return P.ABORTED;case Ee.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ee.DATA_LOSS:return P.DATA_LOSS;default:return K(39323,{code:n})}}(ae=Ee||(Ee={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=new cn([4294967295,4294967295],0);function Rd(n){const e=gf().encode(n),t=new cf;return t.update(e),new Uint8Array(t.digest())}function Pd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cn([t,r],0),new cn([s,i],0)]}class Zc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new is(`Invalid padding: ${t}`);if(r<0)throw new is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new is(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new is(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=cn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(cn.fromNumber(r)));return s.compare(H_)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Rd(e),[r,s]=Pd(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zc(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const t=Rd(e),[r,s]=Pd(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Qs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Fo(Q.min(),s,new ve(re),zt(),oe())}}class Qs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Qs(r,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Zf{constructor(e,t){this.targetId=e,this.De=t}}class Yf{constructor(e,t,r=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nd{constructor(){this.ve=0,this.Ce=Dd(),this.Fe=Le.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=oe(),t=oe(),r=oe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}})),new Qs(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Dd()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class W_{constructor(e){this.We=e,this.Ge=new Map,this.ze=zt(),this.je=Pi(),this.Je=Pi(),this.He=new ve(re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:K(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(ac(i))if(r===0){const o=new H(i.path);this.Xe(t,o,ze.newNoDocument(o,Q.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=pn(r).toUint8Array()}catch(l){if(l instanceof bf)return dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Zc(o,s,i)}catch(l){return dn(l instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&ac(c.target)){const l=new H(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,ze.newNoDocument(l,e))}i.Ne&&(t.set(o,i.Le()),i.ke())}}));let r=oe();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Fo(e,t,this.He,this.ze,r);return this.ze=zt(),this.je=Pi(),this.Je=Pi(),this.He=new ve(re),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Nd,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ke(re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ke(re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Nd),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Pi(){return new ve(H.comparator)}function Dd(){return new ve(H.comparator)}const G_={asc:"ASCENDING",desc:"DESCENDING"},K_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Z_={and:"AND",or:"OR"};class Y_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uc(n,e){return n.useProto3Json||Ro(e)?e:{value:e}}function no(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function X_(n,e){return no(n,e.toTimestamp())}function Et(n){return ue(!!n,49232),Q.fromTimestamp((function(t){const r=fn(t);return new ye(r.seconds,r.nanos)})(n))}function Yc(n,e){return dc(n,e).canonicalString()}function dc(n,e){const t=(function(s){return new me(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Qf(n){const e=me.fromString(n);return ue(rp(e),10190,{key:e.toString()}),e}function hc(n,e){return Yc(n.databaseId,e.path)}function Va(n,e){const t=Qf(e);if(t.get(1)!==n.databaseId.projectId)throw new F(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(ep(t))}function Jf(n,e){return Yc(n.databaseId,e)}function Q_(n){const e=Qf(n);return e.length===4?me.emptyPath():ep(e)}function fc(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ep(n){return ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Od(n,e,t){return{name:hc(n,e),fields:t.value.mapValue.fields}}function J_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(ue(f===void 0||typeof f=="string",58123),Le.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Le.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const f=d.code===void 0?P.UNKNOWN:Kf(d.code);return new F(f,d.message||"")})(o);t=new Yf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Va(n,r.document.name),i=Et(r.document.updateTime),o=r.document.createTime?Et(r.document.createTime):Q.min(),c=new tt({mapValue:{fields:r.document.fields}}),l=ze.newFoundDocument(s,i,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Ui(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Va(n,r.document),i=r.readTime?Et(r.readTime):Q.min(),o=ze.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ui([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Va(n,r.document),i=r.removedTargetIds||[];t=new Ui([],i,s,null)}else{if(!("filter"in e))return K(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new z_(s,i),c=r.targetId;t=new Zf(c,o)}}return t}function ew(n,e){let t;if(e instanceof Xs)t={update:Od(n,e.key,e.value)};else if(e instanceof Mo)t={delete:hc(n,e.key)};else if(e instanceof En)t={update:Od(n,e.key,e.data),updateMask:lw(e.fieldMask)};else{if(!(e instanceof U_))return K(16599,{Rt:e.type});t={verify:hc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof xs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ss)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof to)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw K(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:X_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)})(n,e.precondition)),t}function tw(n,e){return n&&n.length>0?(ue(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Et(s.updateTime):Et(i);return o.isEqual(Q.min())&&(o=Et(i)),new M_(o,s.transformResults||[])})(t,e)))):[]}function nw(n,e){return{documents:[Jf(n,e.path)]}}function rw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Jf(n,s);const i=(function(d){if(d.length!==0)return np(gt.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(d){if(d.length!==0)return d.map((f=>(function(m){return{field:ar(m.field),direction:ow(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=uc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function sw(n){let e=Q_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ue(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const m=tp(p);return m instanceof gt&&Pf(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new As(cr(C.field),(function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Ro(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new eo(_,m)})(t.startAt));let d=null;return t.endAt&&(d=(function(p){const m=!p.before,_=p.values||[];return new eo(_,m)})(t.endAt)),I_(e,s,o,i,c,"F",l,d)}function iw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=cr(t.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cr(t.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cr(t.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cr(t.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Te.create(cr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return gt.create(t.compositeFilter.filters.map((r=>tp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(t.compositeFilter.op))})(n):K(30097,{filter:n})}function ow(n){return G_[n]}function aw(n){return K_[n]}function cw(n){return Z_[n]}function ar(n){return{fieldPath:n.canonicalString()}}function cr(n){return Ve.fromServerFormat(n.fieldPath)}function np(n){return n instanceof Te?(function(t){if(t.op==="=="){if(bd(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NAN"}};if(wd(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bd(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NAN"}};if(wd(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(t.field),op:aw(t.op),value:t.value}}})(n):n instanceof gt?(function(t){const r=t.getFilters().map((s=>np(s)));return r.length===1?r[0]:{compositeFilter:{op:cw(t.op),filters:r}}})(n):K(54877,{filter:n})}function lw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function rp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,r,s,i=Q.min(),o=Q.min(),c=Le.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.gt=e}}function dw(n){const e=sw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.Dn=new fw}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(hn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class fw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ke(me.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ke(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sp=41943040;class et{static withCacheSize(e){return new et(e,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et.DEFAULT_COLLECTION_PERCENTILE=10,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,et.DEFAULT=new et(sp,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),et.DISABLED=new et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new br(0)}static ur(){return new br(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="LruGarbageCollector",pw=1048576;function Md([n,e],[t,r]){const s=re(n,t);return s===0?re(e,r):s}class mw{constructor(e){this.Tr=e,this.buffer=new ke(Md),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Md(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class gw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){j(Ld,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nr(t)?j(Ld,"Ignoring IndexedDB error during garbage collection: ",t):await Pr(t)}await this.Rr(3e5)}))}}class yw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Co.ue);const r=new mw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Vd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vd):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,o,c,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(d=Date.now(),ir()<=ie.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function vw(n,e){return new yw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.changes=new Wn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&gs(r.mutation,s,it.empty(),ye.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,oe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=oe()){const s=On();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=ss();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=On();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,oe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=zt();const o=ms(),c=(function(){return ms()})();return t.forEach(((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof En)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),gs(f.mutation,d,f.mutation.getFieldMask(),ye.now())):o.set(d.key,it.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((d,f)=>o.set(d,f))),t.forEach(((d,f)=>{var p;return c.set(d,new ww(f,(p=o.get(d))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=ms();let s=new ve(((o,c)=>o-c)),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||it.empty();f=c.applyToLocalView(d,f),r.set(l,f);const p=(s.get(c.batchId)||oe()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,p=Uf();f.forEach((m=>{if(!i.has(m)){const _=Wf(t.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return N.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(On());let c=bs,l=i;return o.next((d=>N.forEach(d,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,l,d,oe()))).next((f=>({batchId:c,changes:Bf(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next((r=>{let s=ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=ss();return this.indexManager.getCollectionParents(e,i).next((c=>N.forEach(c,(l=>{const d=(function(p,m){return new Dr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,ze.newInvalidDocument(f)))}));let c=ss();return o.forEach(((l,d)=>{const f=i.get(l);f!==void 0&&gs(f.mutation,d,it.empty(),ye.now()),Oo(t,d)&&(c=c.insert(l,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Et(s.createTime)}})(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:dw(s.bundledQuery),readTime:Et(s.readTime)}})(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.overlays=new ve(H.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=On();return N.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=On(),i=t.length+1,o=new H(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ve(((d,f)=>d-f));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=On(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=On(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,f)=>c.set(d,f))),!(c.size()>=s)););return N.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new j_(t,r));let i=this.kr.get(t);i===void 0&&(i=oe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.qr=new ke(Ce.Qr),this.$r=new ke(Ce.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ce(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new H(new me([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new H(new me([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=oe();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ce(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return H.comparator(e.key,t.key)||re(e.Hr,t.Hr)}static Ur(e,t){return re(e.Hr,t.Hr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ke(Ce.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $_(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new Ce(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?jc:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ke(re);return t.forEach((s=>{const i=new Ce(s,0),o=new Ce(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),N.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Ce(new H(i),0);let c=new ke(re);return this.Yr.forEachWhile((l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Hr)),!0)}),o),N.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return N.forEach(t.mutations,(s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ce(t,0),s=this.Yr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.ni=e,this.docs=(function(){return new ve(H.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(t))}getEntries(e,t){let r=zt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ze.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=zt();const o=t.path,c=new H(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||t_(e_(f),r)<=0||(s.has(f.key)||Oo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){K(9500)}ri(e,t){return N.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new kw(this)}getSize(e){return N.resolve(this.size)}}class kw extends _w{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.persistence=e,this.ii=new Wn((t=>Hc(t)),Wc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.si=0,this.oi=new Xc,this.targetCount=0,this._i=br.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new br(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t){this.ai={},this.overlays={},this.ui=new Co(0),this.ci=!1,this.ci=!0,this.li=new Tw,this.referenceDelegate=e(this),this.hi=new Sw(this),this.indexManager=new hw,this.remoteDocumentCache=(function(s){return new xw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new uw(t),this.Ti=new Ew(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Iw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Aw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new Cw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return N.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Cw extends r_{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.Ai=new Xc,this.Ri=null}static Vi(e){return new Qc(e)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,(r=>{const s=H.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,Q.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ro{constructor(e,t){this.persistence=e,this.gi=new Wn((r=>o_(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=vw(this,t)}static Vi(e,t){return new ro(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return N.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?N.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,Q.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mi(e.data.value)),t}Sr(e,t,r){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=oe(),s=oe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Iy()?8:s_(qe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Rw;return this.ws(e,t,o).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,o,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(ir()<=ie.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(ir()<=ie.DEBUG&&j("QueryEngine","Query:",or(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ir()<=ie.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(t))):N.resolve())}ps(e,t){if(Ad(t))return N.resolve(null);let r=bt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=lc(t,null,"F"),r=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=oe(...i);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const d=this.bs(t,c);return this.Ds(t,d,o,l.readTime)?this.ps(e,lc(t,null,"F")):this.vs(e,d,t,l)}))))})))))}ys(e,t,r,s){return Ad(t)||s.isEqual(Q.min())?N.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(t,i);return this.Ds(t,o,r,s)?N.resolve(null):(ir()<=ie.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),or(t)),this.vs(e,o,t,Jv(s,bs)).next((c=>c)))}))}bs(e,t){let r=new ke(Mf(e));return t.forEach(((s,i)=>{Oo(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return ir()<=ie.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",or(t)),this.gs.getDocumentsMatchingQuery(e,t,hn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="LocalStore",Nw=3e8;class Dw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ve(re),this.Ms=new Wn((i=>Hc(i)),Wc),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Ow(n,e,t,r){return new Dw(n,e,t,r)}async function op(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=oe();for(const d of s){o.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next((d=>({Bs:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function Vw(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,d,f){const p=d.batch,m=p.keys();let _=N.resolve();return m.forEach((C=>{_=_.next((()=>f.getEntry(l,C))).next((x=>{const A=d.docVersions.get(C);ue(A!==null,48541),x.version.compareTo(A)<0&&(p.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=oe();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function ap(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Lw(n,e){const t=J(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Le.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(x,A,D){return x.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Nw?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(m,_,f)&&c.push(t.hi.updateTargetData(i,_))}));let l=zt(),d=oe();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(Mw(i,o,e.documentUpdates).next((f=>{l=f.Ls,d=f.ks}))),!r.isEqual(Q.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return N.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,d))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function Mw(n,e,t){let r=oe(),s=oe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=zt();return t.forEach(((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):j(el,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function Fw(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=jc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Bw(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):t.hi.allocateTargetId(r).next((o=>(s=new rn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function pc(n,e,t){const r=J(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Nr(o))throw o;j(el,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Fd(n,e,t){const r=J(n);let s=Q.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,d,f){const p=J(l),m=p.Ms.get(f);return m!==void 0?N.resolve(p.Fs.get(m)):p.hi.getTargetData(d,f)})(r,o,bt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?i:oe()))).next((c=>(Uw(r,A_(e),c),{documents:c,qs:i})))))}function Uw(n,e,t){let r=n.xs.get(e)||Q.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Bd{constructor(){this.activeTargetIds=P_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $w{constructor(){this.Fo=new Bd,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Bd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="ConnectivityMonitor";class $d{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){j(Ud,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){j(Ud,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni=null;function mc(){return Ni===null?Ni=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ni++,"0x"+Ni.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="RestConnection",zw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Qi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=mc(),c=this.Go(e,t.toUriEncodedString());j(La,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:d}=new URL(c),f=Sr(d);return this.jo(e,c,l,r,f).then((p=>(j(La,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw dn(La,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=zw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection";class Ww extends qw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const o=mc();return new Promise(((c,l)=>{const d=new lf;d.setWithCredentials(!0),d.listenOnce(uf.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Li.NO_ERROR:const p=d.getResponseJson();j(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Li.TIMEOUT:j(Ue,`RPC '${e}' ${o} timed out`),l(new F(P.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const m=d.getStatus();if(j(Ue,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let _=d.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const x=(function(D){const O=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(O)>=0?O:P.UNKNOWN})(C.status);l(new F(x,C.message))}else l(new F(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new F(P.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:e,streamId:o,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{j(Ue,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);j(Ue,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",f,r,15)}))}P_(e,t,r){const s=mc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ff(),c=hf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");j(Ue,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.T_(p);let m=!1,_=!1;const C=new Hw({Ho:A=>{_?j(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(m||(j(Ue,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),j(Ue,`RPC '${e}' stream ${s} sending:`,A),p.send(A))},Yo:()=>p.close()}),x=(A,D,O)=>{A.listen(D,(B=>{try{O(B)}catch(q){setTimeout((()=>{throw q}),0)}}))};return x(p,rs.EventType.OPEN,(()=>{_||(j(Ue,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),x(p,rs.EventType.CLOSE,(()=>{_||(_=!0,j(Ue,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(p))})),x(p,rs.EventType.ERROR,(A=>{_||(_=!0,dn(Ue,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),C.__(new F(P.UNAVAILABLE,"The operation could not be completed")))})),x(p,rs.EventType.MESSAGE,(A=>{var D;if(!_){const O=A.data[0];ue(!!O,16349);const B=O,q=(B==null?void 0:B.error)||((D=B[0])===null||D===void 0?void 0:D.error);if(q){j(Ue,`RPC '${e}' stream ${s} received error:`,q);const he=q.status;let se=(function(w){const T=Ee[w];if(T!==void 0)return Kf(T)})(he),I=q.message;se===void 0&&(se=P.INTERNAL,I="Unknown error status: "+he+" with message "+q.message),_=!0,C.__(new F(se,I)),p.close()}else j(Ue,`RPC '${e}' stream ${s} received:`,O),C.a_(O)}})),x(c,df.STAT_EVENT,(A=>{A.stat===nc.PROXY?j(Ue,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===nc.NOPROXY&&j(Ue,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ma(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n){return new Y_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="PersistentStream";class lp{constructor(e,t,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new cp(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(jt(t.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new F(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return j(jd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(j(jd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gw extends lp{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=J_(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Et(o.readTime):Q.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=fc(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=ac(l)?{documents:nw(i,l)}:{query:rw(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Xf(i,o.resumeToken);const d=uc(i,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=no(i,o.snapshotVersion.toTimestamp());const d=uc(i,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=iw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=fc(this.serializer),t.removeTarget=e,this.k_(t)}}class Kw extends lp{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=tw(e.writeResults,e.commitTime),r=Et(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=fc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>ew(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{}class Yw extends Zw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new F(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,dc(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(P.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,dc(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(P.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Xw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(jt(t),this._a=!1):j("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="RemoteStore";class Qw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Gn(this)&&(j(jn,"Restarting streams for network reachability change."),await(async function(l){const d=J(l);d.Ia.add(4),await Js(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Uo(d)})(this))}))})),this.Aa=new Xw(r,s)}}async function Uo(n){if(Gn(n))for(const e of n.da)await e(!0)}async function Js(n){for(const e of n.da)await e(!1)}function up(n,e){const t=J(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),sl(t)?rl(t):Or(t).x_()&&nl(t,e))}function tl(n,e){const t=J(n),r=Or(t);t.Ta.delete(e),r.x_()&&dp(t,e),t.Ta.size===0&&(r.x_()?r.B_():Gn(t)&&t.Aa.set("Unknown"))}function nl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Or(n).H_(e)}function dp(n,e){n.Ra.$e(e),Or(n).Y_(e)}function rl(n){n.Ra=new W_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Or(n).start(),n.Aa.aa()}function sl(n){return Gn(n)&&!Or(n).M_()&&n.Ta.size>0}function Gn(n){return J(n).Ia.size===0}function hp(n){n.Ra=void 0}async function Jw(n){n.Aa.set("Online")}async function e0(n){n.Ta.forEach(((e,t)=>{nl(n,e)}))}async function t0(n,e){hp(n),sl(n)?(n.Aa.la(e),rl(n)):n.Aa.set("Unknown")}async function n0(n,e,t){if(n.Aa.set("Online"),e instanceof Yf&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){j(jn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await so(n,r)}else if(e instanceof Ui?n.Ra.Ye(e):e instanceof Zf?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Q.min()))try{const r=await ap(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ta.get(d);f&&i.Ta.set(d,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,d)=>{const f=i.Ta.get(l);if(!f)return;i.Ta.set(l,f.withResumeToken(Le.EMPTY_BYTE_STRING,f.snapshotVersion)),dp(i,l);const p=new rn(f.target,l,d,f.sequenceNumber);nl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){j(jn,"Failed to raise snapshot:",r),await so(n,r)}}async function so(n,e,t){if(!Nr(e))throw e;n.Ia.add(1),await Js(n),n.Aa.set("Offline"),t||(t=()=>ap(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{j(jn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Uo(n)}))}function fp(n,e){return e().catch((t=>so(n,t,e)))}async function $o(n){const e=J(n),t=gn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:jc;for(;r0(e);)try{const s=await Fw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,s0(e,s)}catch(s){await so(e,s)}pp(e)&&mp(e)}function r0(n){return Gn(n)&&n.Pa.length<10}function s0(n,e){n.Pa.push(e);const t=gn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function pp(n){return Gn(n)&&!gn(n).M_()&&n.Pa.length>0}function mp(n){gn(n).start()}async function i0(n){gn(n).na()}async function o0(n){const e=gn(n);for(const t of n.Pa)e.X_(t.mutations)}async function a0(n,e,t){const r=n.Pa.shift(),s=Kc.from(r,e,t);await fp(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await $o(n)}async function c0(n,e){e&&gn(n).Z_&&await(async function(r,s){if((function(o){return q_(o)&&o!==P.ABORTED})(s.code)){const i=r.Pa.shift();gn(r).N_(),await fp(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await $o(r)}})(n,e),pp(n)&&mp(n)}async function zd(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),j(jn,"RemoteStore received new credentials");const r=Gn(t);t.Ia.add(3),await Js(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Uo(t)}async function l0(n,e){const t=J(n);e?(t.Ia.delete(2),await Uo(t)):e||(t.Ia.add(2),await Js(t),t.Aa.set("Unknown"))}function Or(n){return n.Va||(n.Va=(function(t,r,s){const i=J(t);return i.ia(),new Gw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Jw.bind(null,n),e_:e0.bind(null,n),n_:t0.bind(null,n),J_:n0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),sl(n)?rl(n):n.Aa.set("Unknown")):(await n.Va.stop(),hp(n))}))),n.Va}function gn(n){return n.ma||(n.ma=(function(t,r,s){const i=J(t);return i.ia(),new Kw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:i0.bind(null,n),n_:c0.bind(null,n),ea:o0.bind(null,n),ta:a0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await $o(n)):(await n.ma.stop(),n.Pa.length>0&&(j(jn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new il(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(n,e){if(jt("AsyncQueue",`${e}: ${n}`),Nr(n))return new F(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{static emptySet(e){return new fr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=ss(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.fa=new ve(H.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):K(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Er{constructor(e,t,r,s,i,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Er(e,t,fr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Do(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class d0{constructor(){this.queries=Hd(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=J(t),i=s.queries;s.queries=Hd(),i.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new F(P.ABORTED,"Firestore shutting down"))}}function Hd(){return new Wn((n=>Lf(n)),Do)}async function al(n,e){const t=J(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new u0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=ol(o,`Initialization of query '${or(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&ll(t)}async function cl(n,e){const t=J(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function h0(n,e){const t=J(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&ll(t)}function f0(n,e,t){const r=J(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function ll(n){n.Da.forEach((e=>{e.next()}))}var gc,Wd;(Wd=gc||(gc={})).Fa="default",Wd.Cache="cache";class ul{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==gc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.key=e}}class yp{constructor(e){this.key=e}}class p0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=oe(),this.mutatedKeys=oe(),this.Xa=Mf(e),this.eu=new fr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new qd,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=Oo(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),x=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let A=!1;m&&_?m.data.isEqual(_.data)?C!==x&&(r.track({type:3,doc:_}),A=!0):this.iu(m,_)||(r.track({type:2,doc:_}),A=!0,(l&&this.Xa(_,l)>0||d&&this.Xa(_,d)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),A=!0):m&&!_&&(r.track({type:1,doc:m}),A=!0,(l||d)&&(c=!0)),A&&(_?(o=o.add(_),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(_,C){const x=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:A})}};return x(_)-x(C)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,d=l!==this.Ya;return this.Ya=l,o.length!==0||d?{snapshot:new Er(this.query,e.eu,i,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new qd,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=oe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new yp(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new gp(r))})),t}uu(e){this.Ha=e.qs,this.Za=oe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Er.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const dl="SyncEngine";class m0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class g0{constructor(e){this.key=e,this.lu=!1}}class y0{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Wn((c=>Lf(c)),Do),this.Tu=new Map,this.Iu=new Set,this.du=new ve(H.comparator),this.Eu=new Map,this.Au=new Xc,this.Ru={},this.Vu=new Map,this.mu=br.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function v0(n,e,t=!0){const r=Ip(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await vp(r,e,t,!0),s}async function _0(n,e){const t=Ip(n);await vp(t,e,!0,!1)}async function vp(n,e,t,r){const s=await Bw(n.localStore,bt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await w0(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&up(n.remoteStore,s),c}async function w0(n,e,t,r,s){n.gu=(p,m,_)=>(async function(x,A,D,O){let B=A.view.nu(D);B.Ds&&(B=await Fd(x.localStore,A.query,!1).then((({documents:I})=>A.view.nu(I,B))));const q=O&&O.targetChanges.get(A.targetId),he=O&&O.targetMismatches.get(A.targetId)!=null,se=A.view.applyChanges(B,x.isPrimaryClient,q,he);return Kd(x,A.targetId,se._u),se.snapshot})(n,p,m,_);const i=await Fd(n.localStore,e,!0),o=new p0(e,i.qs),c=o.nu(i.documents),l=Qs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,l);Kd(n,t,d._u);const f=new m0(e,t,o);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function b0(n,e,t){const r=J(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Do(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&tl(r.remoteStore,s.targetId),yc(r,s.targetId)})).catch(Pr)):(yc(r,s.targetId),await pc(r.localStore,s.targetId,!0))}async function E0(n,e){const t=J(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),tl(t.remoteStore,r.targetId))}async function I0(n,e,t){const r=R0(n);try{const s=await(function(o,c){const l=J(o),d=ye.now(),f=c.reduce(((_,C)=>_.add(C.key)),oe());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let C=zt(),x=oe();return l.Os.getEntries(_,f).next((A=>{C=A,C.forEach(((D,O)=>{O.isValidDocument()||(x=x.add(D))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,C))).next((A=>{p=A;const D=[];for(const O of c){const B=B_(O,p.get(O.key).overlayedDocument);B!=null&&D.push(new En(O.key,B,Sf(B.value.mapValue),Xe.exists(!0)))}return l.mutationQueue.addMutationBatch(_,d,D,c)})).next((A=>{m=A;const D=A.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(_,A.batchId,D)}))})).then((()=>({batchId:m.batchId,changes:Bf(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let d=o.Ru[o.currentUser.toKey()];d||(d=new ve(re)),d=d.insert(c,l),o.Ru[o.currentUser.toKey()]=d})(r,s.batchId,t),await ei(r,s.changes),await $o(r.remoteStore)}catch(s){const i=ol(s,"Failed to persist write");t.reject(i)}}async function _p(n,e){const t=J(n);try{const r=await Lw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Eu.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ue(o.lu,14607):s.removedDocuments.size>0&&(ue(o.lu,42227),o.lu=!1))})),await ei(t,r,e)}catch(r){await Pr(r)}}function Gd(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=J(o);l.onlineState=c;let d=!1;l.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(c)&&(d=!0)})),d&&ll(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function T0(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new ve(H.comparator);o=o.insert(i,ze.newNoDocument(i,Q.min()));const c=oe().add(i),l=new Fo(Q.min(),new Map,new ve(re),o,c);await _p(r,l),r.du=r.du.remove(i),r.Eu.delete(e),hl(r)}else await pc(r.localStore,e,!1).then((()=>yc(r,e,t))).catch(Pr)}async function A0(n,e){const t=J(n),r=e.batch.batchId;try{const s=await Vw(t.localStore,e);bp(t,r,null),wp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ei(t,s)}catch(s){await Pr(s)}}async function x0(n,e,t){const r=J(n);try{const s=await(function(o,c){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next((p=>(ue(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>l.localDocuments.getDocuments(d,f)))}))})(r.localStore,e);bp(r,e,t),wp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ei(r,s)}catch(s){await Pr(s)}}function wp(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function bp(n,e,t){const r=J(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function yc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Ep(n,r)}))}function Ep(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(tl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),hl(n))}function Kd(n,e,t){for(const r of t)r instanceof gp?(n.Au.addReference(r.key,e),k0(n,r)):r instanceof yp?(j(dl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Ep(n,r.key)):K(19791,{yu:r})}function k0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(j(dl,"New document in limbo: "+t),n.Iu.add(r),hl(n))}function hl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new H(me.fromString(e)),r=n.mu.next();n.Eu.set(r,new g0(t)),n.du=n.du.insert(t,r),up(n.remoteStore,new rn(bt(No(t.path)),r,"TargetPurposeLimboResolution",Co.ue))}}async function ei(n,e,t){const r=J(n),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,t).then((d=>{var f;if((d||t)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=Jc.Es(l.targetId,d);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,d){const f=J(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>N.forEach(d,(m=>N.forEach(m.Is,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>N.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Nr(p))throw p;j(el,"Failed to update sequence numbers: "+p)}for(const p of d){const m=p.targetId;if(!p.fromCache){const _=f.Fs.get(m),C=_.snapshotVersion,x=_.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(m,x)}}})(r.localStore,i))}async function S0(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){j(dl,"User change. New user:",e.toKey());const r=await op(t.localStore,e);t.currentUser=e,(function(i,o){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new F(P.CANCELLED,o))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ei(t,r.Bs)}}function C0(n,e){const t=J(n),r=t.Eu.get(e);if(r&&r.lu)return oe().add(r.key);{let s=oe();const i=t.Tu.get(e);if(!i)return s;for(const o of i){const c=t.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function Ip(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=_p.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T0.bind(null,e),e.hu.J_=h0.bind(null,e.eventManager),e.hu.pu=f0.bind(null,e.eventManager),e}function R0(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x0.bind(null,e),e}class io{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Ow(this.persistence,new Pw,e.initialUser,this.serializer)}Du(e){return new ip(Qc.Vi,this.serializer)}bu(e){return new $w}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}io.provider={build:()=>new io};class P0 extends io{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ue(this.persistence.referenceDelegate instanceof ro,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new gw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?et.withCacheSize(this.cacheSizeBytes):et.DEFAULT;return new ip((r=>ro.Vi(r,t)),this.serializer)}}class vc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=S0.bind(null,this.syncEngine),await l0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new d0})()}createDatastore(e){const t=Bo(e.databaseInfo.databaseId),r=(function(i){return new Ww(i)})(e.databaseInfo);return(function(i,o,c,l){return new Yw(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new Qw(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gd(this.syncEngine,t,0)),(function(){return $d.C()?new $d:new jw})())}createSyncEngine(e,t){return(function(s,i,o,c,l,d,f){const p=new y0(s,i,o,c,l,d);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=J(s);j(jn,"RemoteStore shutting down."),i.Ia.add(5),await Js(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vc.provider={build:()=>new vc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):jt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="FirestoreClient";class N0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=je.UNAUTHENTICATED,this.clientId=$c.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{j(yn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(j(yn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ol(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Fa(n,e){n.asyncQueue.verifyOperationInProgress(),j(yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await op(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{dn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{j("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{dn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Zd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await D0(n);j(yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>zd(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>zd(e.remoteStore,s))),n._onlineComponents=e}async function D0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(yn,"Using user provided OfflineComponentProvider");try{await Fa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;dn("Error using user provided cache. Falling back to memory cache: "+t),await Fa(n,new io)}}else j(yn,"Using default OfflineComponentProvider"),await Fa(n,new P0(void 0));return n._offlineComponents}async function Tp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(yn,"Using user provided OnlineComponentProvider"),await Zd(n,n._uninitializedComponentsProvider._online)):(j(yn,"Using default OnlineComponentProvider"),await Zd(n,new vc))),n._onlineComponents}function O0(n){return Tp(n).then((e=>e.syncEngine))}async function oo(n){const e=await Tp(n),t=e.eventManager;return t.onListen=v0.bind(null,e.syncEngine),t.onUnlisten=b0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=E0.bind(null,e.syncEngine),t}function V0(n,e,t={}){const r=new Ut;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,d){const f=new fl({next:m=>{f.Ou(),o.enqueueAndForget((()=>cl(i,p)));const _=m.docs.has(c);!_&&m.fromCache?d.reject(new F(P.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?d.reject(new F(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),p=new ul(No(c.path),f,{includeMetadataChanges:!0,ka:!0});return al(i,p)})(await oo(n),n.asyncQueue,e,t,r))),r.promise}function L0(n,e,t={}){const r=new Ut;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,d){const f=new fl({next:m=>{f.Ou(),o.enqueueAndForget((()=>cl(i,p))),m.fromCache&&l.source==="server"?d.reject(new F(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),p=new ul(c,f,{includeMetadataChanges:!0,ka:!0});return al(i,p)})(await oo(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="firestore.googleapis.com",Xd=!0;class Qd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xp,this.ssl=Xd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Xd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pw)throw new F(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ap((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new zv;switch(r.type){case"firstParty":return new Gv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Yd.get(t);r&&(j("ComponentProvider","Removing Datastore"),Yd.delete(t),r.terminate())})(this),Promise.resolve()}}function M0(n,e,t,r={}){var s;n=Ye(n,jo);const i=Sr(e),o=n._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Jh(`https://${l}`),ef("Firestore",!0)),o.host!==xp&&o.host!==l&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Bn(d,c)&&(n._setSettings(d),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=je.MOCK_USER;else{f=py(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new F(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new je(m)}n._authCredentials=new qv(new mf(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new In(this.firestore,e,this._query)}}class we{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ys(t,we._jsonSchema))return new we(e,r||null,new H(me.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:Ae("string",we._jsonSchemaVersion),referencePath:Ae("string")};class ln extends In{constructor(e,t,r){super(e,t,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new H(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function Tn(n,e,...t){if(n=Se(n),yf("collection","path",e),n instanceof jo){const r=me.fromString(e,...t);return dd(r),new ln(n,null,r)}{if(!(n instanceof we||n instanceof ln))throw new F(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return dd(r),new ln(n.firestore,null,r)}}function Kn(n,e,...t){if(n=Se(n),arguments.length===1&&(e=$c.newId()),yf("doc","path",e),n instanceof jo){const r=me.fromString(e,...t);return ud(r),new we(n,null,new H(r))}{if(!(n instanceof we||n instanceof ln))throw new F(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return ud(r),new we(n.firestore,n instanceof ln?n.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="AsyncQueue";class eh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new cp(this,"async_queue_retry"),this.oc=()=>{const r=Ma();r&&j(Jd,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ma();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ma();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ut;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Nr(e))throw e;j(Jd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,jt("INTERNAL UNHANDLED ERROR: ",th(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=il.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&K(47125,{hc:th(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function th(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Ct extends jo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new eh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eh(e),this._firestoreClient=void 0,await e}}}function F0(n,e){const t=typeof n=="object"?n:sf(),r=typeof n=="string"?n:Qi,s=Bc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hy("firestore");i&&M0(s,...i)}return s}function ti(n){if(n._terminated)throw new F(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||B0(n),n._firestoreClient}function B0(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,d,f){return new l_(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ap(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new N0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this._byteString=e}static fromBase64String(e){try{return new at(Le.fromBase64String(e))}catch(t){throw new F(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new at(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:at._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ys(e,at._jsonSchema))return at.fromBase64String(e.bytes)}}at._jsonSchemaVersion="firestore/bytes/1.0",at._jsonSchema={type:Ae("string",at._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:It._jsonSchemaVersion}}static fromJSON(e){if(Ys(e,It._jsonSchema))return new It(e.latitude,e.longitude)}}It._jsonSchemaVersion="firestore/geoPoint/1.0",It._jsonSchema={type:Ae("string",It._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ys(e,Tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Tt(e.vectorValues);throw new F(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tt._jsonSchemaVersion="firestore/vectorValue/1.0",Tt._jsonSchema={type:Ae("string",Tt._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=/^__.*__$/;class $0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xs(e,this.data,t,this.fieldTransforms)}}class kp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new En(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:n})}}class pl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new pl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ao(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Sp(this.Ec)&&U0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class j0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Bo(e)}Dc(e,t,r,s=!1){return new pl({Ec:e,methodName:t,bc:r,path:Ve.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ri(n){const e=n._freezeSettings(),t=Bo(n._databaseId);return new j0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ml(n,e,t,r,s,i={}){const o=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);yl("Data must be an object, but it was:",o,r);const c=Pp(r,o);let l,d;if(i.merge)l=new it(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=_c(e,p,t);if(!o.contains(m))throw new F(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Dp(f,m)||f.push(m)}l=new it(f),d=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,d=o.fieldTransforms;return new $0(new tt(c),l,d)}class qo extends zo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qo}}class gl extends zo{_toFieldTransform(e){return new V_(e.path,new xs)}isEqual(e){return e instanceof gl}}function Cp(n,e,t,r){const s=n.Dc(1,e,t);yl("Data must be an object, but it was:",s,r);const i=[],o=tt.empty();bn(r,((l,d)=>{const f=vl(e,l,t);d=Se(d);const p=s.gc(f);if(d instanceof qo)i.push(f);else{const m=si(d,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new it(i);return new kp(o,c,s.fieldTransforms)}function Rp(n,e,t,r,s,i){const o=n.Dc(1,e,t),c=[_c(e,r,t)],l=[s];if(i.length%2!=0)throw new F(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(_c(e,i[m])),l.push(i[m+1]);const d=[],f=tt.empty();for(let m=c.length-1;m>=0;--m)if(!Dp(d,c[m])){const _=c[m];let C=l[m];C=Se(C);const x=o.gc(_);if(C instanceof qo)d.push(_);else{const A=si(C,x);A!=null&&(d.push(_),f.set(_,A))}}const p=new it(d);return new kp(f,p,o.fieldTransforms)}function z0(n,e,t,r=!1){return si(t,n.Dc(r?4:3,e))}function si(n,e){if(Np(n=Se(n)))return yl("Unsupported field value:",e,n),Pp(n,e);if(n instanceof zo)return(function(r,s){if(!Sp(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=si(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return N_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ye.fromDate(r);return{timestampValue:no(s.serializer,i)}}if(r instanceof ye){const i=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:no(s.serializer,i)}}if(r instanceof It)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof at)return{bytesValue:Xf(s.serializer,r._byteString)};if(r instanceof we){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tt)return(function(o,c){return{mapValue:{fields:{[xf]:{stringValue:kf},[Ji]:{arrayValue:{values:o.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Gc(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${So(r)}`)})(n,e)}function Pp(n,e){const t={};return wf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(n,((r,s)=>{const i=si(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Np(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof It||n instanceof at||n instanceof we||n instanceof zo||n instanceof Tt)}function yl(n,e,t){if(!Np(t)||!vf(t)){const r=So(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function _c(n,e,t){if((e=Se(e))instanceof ni)return e._internalPath;if(typeof e=="string")return vl(n,e);throw ao("Field path arguments must be of type string or ",n,!1,void 0,t)}const q0=new RegExp("[~\\*/\\[\\]]");function vl(n,e,t){if(e.search(q0)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ni(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ao(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new F(P.INVALID_ARGUMENT,c+n+l)}function Dp(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_l("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class H0 extends Op{data(){return super.data()}}function _l(n,e){return typeof e=="string"?vl(n,e):e instanceof ni?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wl{}class Lp extends wl{}function Ho(n,e,...t){let r=[];e instanceof wl&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof El)).length,c=i.filter((l=>l instanceof bl)).length;if(o>1||o>0&&c>0)throw new F(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class bl extends Lp{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new bl(e,t,r)}_apply(e){const t=this._parse(e);return Mp(e._query,t),new In(e.firestore,e.converter,cc(e._query,t))}_parse(e){const t=ri(e.firestore);return(function(i,o,c,l,d,f,p){let m;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){sh(p,f);const C=[];for(const x of p)C.push(rh(l,i,x));m={arrayValue:{values:C}}}else m=rh(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||sh(p,f),m=z0(c,o,p,f==="in"||f==="not-in");return Te.create(d,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class El extends wl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new El(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Mp(o,l),o=cc(o,l)})(e._query,t),new In(e.firestore,e.converter,cc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Il extends Lp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Il(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new F(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new As(i,o)})(e._query,this._field,this._direction);return new In(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Dr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Wo(n,e="asc"){const t=e,r=_l("orderBy",n);return Il._create(r,t)}function rh(n,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new F(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vf(e)&&t.indexOf("/")!==-1)throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!H.isDocumentKey(r))throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _d(n,new H(r))}if(t instanceof we)return _d(n,t._key);throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${So(t)}.`)}function sh(n,e){if(!Array.isArray(n)||n.length===0)throw new F(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mp(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new F(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class W0{convertValue(e,t="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ji].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>be(o.doubleValue)));return new Tt(i)}convertGeoPoint(e){return new It(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Po(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const t=fn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);ue(rp(r),9688,{name:e});const s=new Is(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(t)||jt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class os{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vn extends Op{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(_l("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vn._jsonSchema={type:Ae("string",Vn._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class $i extends Vn{data(e={}){return super.data(e)}}class Ln{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new os(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new $i(this._firestore,this._userDataWriter,r.key,r,new os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new $i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new os(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new $i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new os(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:G0(c.type),doc:l,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ln._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$c.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function G0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n){n=Ye(n,we);const e=Ye(n.firestore,Ct);return V0(ti(e),n._key).then((t=>Up(e,n,t)))}Ln._jsonSchemaVersion="firestore/querySnapshot/1.0",Ln._jsonSchema={type:Ae("string",Ln._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Al extends W0{constructor(e){super(),this.firestore=e}convertBytes(e){return new at(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}function Go(n){n=Ye(n,In);const e=Ye(n.firestore,Ct),t=ti(e),r=new Al(e);return Vp(n._query),L0(t,n._query).then((s=>new Ln(e,r,n,s)))}function Bp(n,e,t){n=Ye(n,we);const r=Ye(n.firestore,Ct),s=Tl(n.converter,e,t);return ii(r,[ml(ri(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Xe.none())])}function Ko(n,e,t,...r){n=Ye(n,we);const s=Ye(n.firestore,Ct),i=ri(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof ni?Rp(i,"updateDoc",n._key,e,t,r):Cp(i,"updateDoc",n._key,e),ii(s,[o.toMutation(n._key,Xe.exists(!0))])}function xl(n){return ii(Ye(n.firestore,Ct),[new Mo(n._key,Xe.none())])}function Zo(n,e){const t=Ye(n.firestore,Ct),r=Kn(n),s=Tl(n.converter,e);return ii(t,[ml(ri(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Xe.exists(!1))]).then((()=>r))}function Vr(n,...e){var t,r,s;n=Se(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||nh(e[o])||(i=e[o++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(nh(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,d,f;if(n instanceof we)d=Ye(n.firestore,Ct),f=No(n._key.path),l={next:p=>{e[o]&&e[o](Up(d,n,p))},error:e[o+1],complete:e[o+2]};else{const p=Ye(n,In);d=Ye(p.firestore,Ct),f=p._query;const m=new Al(d);l={next:_=>{e[o]&&e[o](new Ln(d,m,p,_))},error:e[o+1],complete:e[o+2]},Vp(n._query)}return(function(m,_,C,x){const A=new fl(x),D=new ul(_,A,C);return m.asyncQueue.enqueueAndForget((async()=>al(await oo(m),D))),()=>{A.Ou(),m.asyncQueue.enqueueAndForget((async()=>cl(await oo(m),D)))}})(ti(d),f,c,l)}function ii(n,e){return(function(r,s){const i=new Ut;return r.asyncQueue.enqueueAndForget((async()=>I0(await O0(r),s,i))),i.promise})(ti(n),e)}function Up(n,e,t){const r=t.docs.get(e._key),s=new Al(n);return new Vn(n,s,e._key,r,new os(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ri(e)}set(e,t,r){this._verifyNotCommitted();const s=Ba(e,this._firestore),i=Tl(s.converter,t,r),o=ml(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Xe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ba(e,this._firestore);let o;return o=typeof(t=Se(t))=="string"||t instanceof ni?Rp(this._dataReader,"WriteBatch.update",i._key,t,r,s):Cp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ba(e,this._firestore);return this._mutations=this._mutations.concat(new Mo(t._key,Xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ba(n,e){if((n=Se(n)).firestore!==e)throw new F(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function nt(){return new gl("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n){return ti(n=Ye(n,Ct)),new K0(n,(e=>ii(n,e)))}(function(e,t=!0){(function(s){Rr=s})(Cr),yr(new Un("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Ct(new Hv(r.getProvider("auth-internal")),new Kv(o,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(d.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),an(id,od,e),an(id,od,"esm2017")})();function kl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function jp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z0=jp,zp=new Ks("auth","Firebase",jp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Mc("@firebase/auth");function Y0(n,...e){co.logLevel<=ie.WARN&&co.warn(`Auth (${Cr}): ${n}`,...e)}function ji(n,...e){co.logLevel<=ie.ERROR&&co.error(`Auth (${Cr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,...e){throw Sl(n,...e)}function At(n,...e){return Sl(n,...e)}function qp(n,e,t){const r=Object.assign(Object.assign({},Z0()),{[e]:t});return new Ks("auth","Firebase",r).create(e,{appName:n.name})}function un(n){return qp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return zp.create(n,...e)}function X(n,e,...t){if(!n)throw Sl(e,...t)}function Ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ji(e),new Error(e)}function Ht(n,e){n||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function X0(){return ih()==="http:"||ih()==="https:"}function ih(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(X0()||wy()||"connection"in navigator)?navigator.onLine:!0}function J0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ht(t>e,"Short delay should be less than long delay!"),this.isMobile=yy()||by()}get(){return Q0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n,e){Ht(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nb=new oi(3e4,6e4);function Yo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Lr(n,e,t,r,s={}){return Wp(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Zs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return _y()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Sr(n.emulatorConfig.host)&&(d.credentials="include"),Hp.fetch()(await Kp(n,n.config.apiHost,t,c),d)})}async function Wp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},eb),e);try{const s=new rb(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Di(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Di(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Di(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qp(n,f,d);qt(n,f)}}catch(s){if(s instanceof Gt)throw s;qt(n,"network-request-failed",{message:String(s)})}}async function Gp(n,e,t,r,s={}){const i=await Lr(n,e,t,r,s);return"mfaPendingCredential"in i&&qt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Cl(n.config,s):`${n.config.apiScheme}://${s}`;return tb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class rb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),nb.get())})}}function Di(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=At(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(n,e){return Lr(n,"POST","/v1/accounts:delete",e)}async function lo(n,e){return Lr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ib(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=Rl(r);X(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ys(Ua(s.auth_time)),issuedAtTime:ys(Ua(s.iat)),expirationTime:ys(Ua(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ua(n){return Number(n)*1e3}function Rl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ji("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zh(t);return s?JSON.parse(s):(ji("Failed to decode base64 JWT payload"),null)}catch(s){return ji("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function oh(n){const e=Rl(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Gt&&ob(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ob({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Cs(n,lo(t,{idToken:r}));X(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zp(i.providerUserInfo):[],c=lb(n.providerData,o),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new bc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function cb(n){const e=Se(n);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lb(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zp(n){return n.map(e=>{var{providerId:t}=e,r=kl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(n,e){const t=await Wp(n,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Kp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Sr(n.emulatorConfig.host)&&(l.credentials="include"),Hp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function db(n,e){return Lr(n,"POST","/v2/accounts:revokeToken",Yo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=oh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ub(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new pr;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ib(this,e)}reload(){return cb(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await Cs(this,sb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,d,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,_=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,A=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,D=(d=t.createdAt)!==null&&d!==void 0?d:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:q,isAnonymous:he,providerData:se,stsTokenManager:I}=t;X(B&&I,e,"internal-error");const v=pr.fromJSON(this.name,I);X(typeof B=="string",e,"internal-error"),Xt(p,e.name),Xt(m,e.name),X(typeof q=="boolean",e,"internal-error"),X(typeof he=="boolean",e,"internal-error"),Xt(_,e.name),Xt(C,e.name),Xt(x,e.name),Xt(A,e.name),Xt(D,e.name),Xt(O,e.name);const w=new ft({uid:B,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:he,photoURL:C,phoneNumber:_,tenantId:x,stsTokenManager:v,createdAt:D,lastLoginAt:O});return se&&Array.isArray(se)&&(w.providerData=se.map(T=>Object.assign({},T))),A&&(w._redirectEventId=A),w}static async _fromIdTokenResponse(e,t,r=!1){const s=new pr;s.updateFromServerResponse(t);const i=new ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new pr;c.updateFromIdToken(r);const l=new ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Map;function Bt(n){Ht(n instanceof Function,"Expected a class definition");let e=ah.get(n);return e?(Ht(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ah.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yp.type="NONE";const ch=Yp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class mr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=zi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lo(this.auth,{idToken:e}).catch(()=>{});return t?ft._fromGetAccountInfoResponse(this.auth,t,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mr(Bt(ch),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Bt(ch);const o=zi(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(o);if(f){let p;if(typeof f=="string"){const m=await lo(e,{idToken:f}).catch(()=>{});if(!m)break;p=await ft._fromGetAccountInfoResponse(e,m,f)}else p=ft._fromJSON(e,f);d!==i&&(c=p),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new mr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new mr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(em(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nm(e))return"Blackberry";if(rm(e))return"Webos";if(Qp(e))return"Safari";if((e.includes("chrome/")||Jp(e))&&!e.includes("edge/"))return"Chrome";if(tm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xp(n=qe()){return/firefox\//i.test(n)}function Qp(n=qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jp(n=qe()){return/crios\//i.test(n)}function em(n=qe()){return/iemobile/i.test(n)}function tm(n=qe()){return/android/i.test(n)}function nm(n=qe()){return/blackberry/i.test(n)}function rm(n=qe()){return/webos/i.test(n)}function Pl(n=qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hb(n=qe()){var e;return Pl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fb(){return Ey()&&document.documentMode===10}function sm(n=qe()){return Pl(n)||tm(n)||rm(n)||nm(n)||/windows phone/i.test(n)||em(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n,e=[]){let t;switch(n){case"Browser":t=lh(qe());break;case"Worker":t=`${lh(qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(n,e={}){return Lr(n,"GET","/v2/passwordPolicy",Yo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=6;class yb{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:gb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uh(this),this.idTokenSubscription=new uh(this),this.beforeStateQueue=new pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lo(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(un(this));const t=e?Se(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mb(this),t=new yb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await db(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bt(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[Bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=im(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Y0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xo(n){return Se(n)}class uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ry(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _b(n){Nl=n}function wb(n){return Nl.loadJS(n)}function bb(){return Nl.gapiScript}function Eb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(n,e){const t=Bc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Bn(i,e??{}))return s;qt(s,"already-initialized")}return t.initialize({options:e})}function Tb(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ab(n,e,t){const r=Xo(n);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=om(e),{host:o,port:c}=xb(e),l=c===null?"":`:${c}`,d={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Bn(d,r.config.emulator)&&Bn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Sr(o)?(Jh(`${i}//${o}${l}`),ef("Auth",!0)):kb()}function om(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xb(n){const e=om(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:dh(o)}}}function dh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function kb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,t){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n,e){return Gp(n,"POST","/v1/accounts:signInWithIdp",Yo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="http://localhost";class zn extends am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=kl(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return gr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gr(e,t)}buildRequest(){const e={requestUri:Sb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends cm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ai{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Jt.credential(t,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends ai{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends ai{constructor(){super("twitter.com")}static credential(e,t){return zn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(n,e){return Gp(n,"POST","/v1/accounts:signUp",Yo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ft._fromIdTokenResponse(e,r,s),o=hh(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hh(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(n){var e;if(ht(n.app))return Promise.reject(un(n));const t=Xo(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Cb(t,{returnSecureToken:!0}),s=await vn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Gt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ho(e,t,r,s)}}function lm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(n,i,e,r):i})}async function Pb(n,e,t=!1){const r=await Cs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(n,e,t=!1){const{auth:r}=n;if(ht(r.app))return Promise.reject(un(r));const s="reauthenticate";try{const i=await Cs(n,lm(r,s,e,n),t);X(i.idToken,r,"internal-error");const o=Rl(i.idToken);X(o,r,"internal-error");const{sub:c}=o;return X(n.uid===c,r,"user-mismatch"),vn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(n,e,t=!1){if(ht(n.app))return Promise.reject(un(n));const r="signIn",s=await lm(n,r,e),i=await vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Ob(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function Vb(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function Lb(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}const fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=1e3,Fb=10;class dm extends um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dm.type="LOCAL";const Bb=dm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm extends um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hm.type="SESSION";const fm=hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,i)),l=await Ub(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const d=Dl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function jb(n){xt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function zb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Hb(){return pm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="firebaseLocalStorageDb",Wb=1,po="firebaseLocalStorage",gm="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jo(n,e){return n.transaction([po],e?"readwrite":"readonly").objectStore(po)}function Gb(){const n=indexedDB.deleteDatabase(mm);return new ci(n).toPromise()}function Ec(){const n=indexedDB.open(mm,Wb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(po,{keyPath:gm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(po)?e(r):(r.close(),await Gb(),e(await Ec()))})})}async function fh(n,e,t){const r=Jo(n,!0).put({[gm]:e,value:t});return new ci(r).toPromise()}async function Kb(n,e){const t=Jo(n,!1).get(e),r=await new ci(t).toPromise();return r===void 0?null:r.value}function ph(n,e){const t=Jo(n,!0).delete(e);return new ci(t).toPromise()}const Zb=800,Yb=3;class ym{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(Hb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zb(),!this.activeServiceWorker)return;this.sender=new $b(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ec();return await fh(e,fo,"1"),await ph(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Kb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ph(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jo(s,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ym.type="LOCAL";const Xb=ym;new oi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(n,e){return e?Bt(e):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Jb(n){return Db(n.auth,new Ol(n),n.bypassAuthState)}function eE(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),Nb(t,new Ol(n),n.bypassAuthState)}async function tE(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),Pb(t,new Ol(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jb;case"linkViaPopup":case"linkViaRedirect":return tE;case"reauthViaPopup":case"reauthViaRedirect":return eE;default:qt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new oi(2e3,1e4);class dr extends vm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=Dl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nE.get())};e()}}dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="pendingRedirect",qi=new Map;class sE extends vm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=qi.get(this.auth._key());if(!e){try{const r=await iE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}qi.set(this.auth._key(),e)}return this.bypassAuthState||qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iE(n,e){const t=cE(e),r=aE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function oE(n,e){qi.set(n._key(),e)}function aE(n){return Bt(n._redirectPersistence)}function cE(n){return zi(rE,n.config.apiKey,n.name)}async function lE(n,e,t=!1){if(ht(n.app))return Promise.reject(un(n));const r=Xo(n),s=Qb(r,e),o=await new sE(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=600*1e3;class dE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_m(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(At(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uE&&this.cachedEventUids.clear(),this.cachedEventUids.has(mh(e))}saveEventToCache(e){this.cachedEventUids.add(mh(e)),this.lastProcessedEventTime=Date.now()}}function mh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _m({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _m(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(n,e={}){return Lr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mE=/^https?/;async function gE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fE(n);for(const t of e)try{if(yE(t))return}catch{}qt(n,"unauthorized-domain")}function yE(n){const e=wc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!mE.test(t))return!1;if(pE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new oi(3e4,6e4);function gh(){const n=xt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _E(n){return new Promise((e,t)=>{var r,s,i;function o(){gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gh(),t(At(n,"network-request-failed"))},timeout:vE.get()})}if(!((s=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const c=Eb("iframefcb");return xt()[c]=()=>{gapi.load?o():t(At(n,"network-request-failed"))},wb(`${bb()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Hi=null,e})}let Hi=null;function wE(n){return Hi=Hi||_E(n),Hi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=new oi(5e3,15e3),EE="__/auth/iframe",IE="emulator/auth/iframe",TE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xE(n){const e=n.config;X(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cl(e,IE):`https://${n.config.authDomain}/${EE}`,r={apiKey:e.apiKey,appName:n.name,v:Cr},s=AE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Zs(r).slice(1)}`}async function kE(n){const e=await wE(n),t=xt().gapi;return X(t,n,"internal-error"),e.open({where:document.body,url:xE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=At(n,"network-request-failed"),c=xt().setTimeout(()=>{i(o)},bE.get());function l(){xt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CE=500,RE=600,PE="_blank",NE="http://localhost";class yh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DE(n,e,t,r=CE,s=RE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},SE),{width:r.toString(),height:s.toString(),top:i,left:o}),d=qe().toLowerCase();t&&(c=Jp(d)?PE:t),Xp(d)&&(e=e||NE,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(hb(d)&&c!=="_self")return OE(e||"",c),new yh(null);const p=window.open(e||"",c,f);X(p,n,"popup-blocked");try{p.focus()}catch{}return new yh(p)}function OE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="__/auth/handler",LE="emulator/auth/handler",ME=encodeURIComponent("fac");async function vh(n,e,t,r,s,i){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Cr,eventId:s};if(e instanceof cm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Cy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ai){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${ME}=${encodeURIComponent(l)}`:"";return`${FE(n)}?${Zs(c).slice(1)}${d}`}function FE({config:n}){return n.emulator?Cl(n,LE):`https://${n.authDomain}/${VE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="webStorageSupport";class BE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fm,this._completeRedirectFn=lE,this._overrideRedirectResult=oE}async _openPopup(e,t,r,s){var i;Ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vh(e,t,r,wc(),s);return DE(e,o,Dl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await vh(e,t,r,wc(),s);return jb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ht(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kE(e),r=new dE(e);return t.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($a,{type:$a},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$a];o!==void 0&&t(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sm()||Qp()||Pl()}}const UE=BE;var _h="@firebase/auth",wh="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zE(n){yr(new Un("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:im(n)},d=new vb(r,s,i,l);return Tb(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),yr(new Un("auth-internal",e=>{const t=Xo(e.getProvider("auth").getImmediate());return(r=>new $E(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(_h,wh,jE(n)),an(_h,wh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=300,HE=Qh("authIdTokenMaxAge")||qE;let bh=null;const WE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>HE)return;const s=t==null?void 0:t.token;bh!==s&&(bh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GE(n=sf()){const e=Bc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ib(n,{popupRedirectResolver:UE,persistence:[Xb,Bb,fm]}),r=Qh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=WE(i.toString());Vb(t,o,()=>o(t.currentUser)),Ob(t,c=>o(c))}}const s=Yh("auth");return s&&Ab(t,`http://${s}`),t}function KE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_b({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=At("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",KE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zE("Browser");const ZE={apiKey:"AIzaSyD03esMvfg48m1NWxj3ASzt_5CoIa5reYk",authDomain:"board-9c96e.firebaseapp.com",projectId:"board-9c96e",storageBucket:"board-9c96e.firebasestorage.app",messagingSenderId:"174092612165",appId:"1:174092612165:web:1ae2584a1f3e00bb24692c",measurementId:"G-4LVEFF5CHM"},wm=rf(ZE),He=F0(wm),Eh=GE(wm);let de=null;const Ih=["#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6","#8b5cf6","#ec4899"];function bm(){return Ih[Math.floor(Math.random()*Ih.length)]}function Em(){const n=["Happy","Swift","Bright","Cool","Bold","Calm","Deft","Keen"],e=["Fox","Owl","Bear","Wolf","Hawk","Lion","Deer","Hare"];return`${n[Math.floor(Math.random()*n.length)]} ${e[Math.floor(Math.random()*e.length)]}`}function Im(){return new Promise(n=>{const e=setTimeout(()=>{console.warn("Auth timeout, continuing in offline mode"),de||(de=Th(),n(de))},5e3);Lb(Eh,async t=>{if(clearTimeout(e),t)de={uid:t.uid,name:localStorage.getItem("cb_username")||Em(),color:localStorage.getItem("cb_usercolor")||bm()},localStorage.setItem("cb_username",de.name),localStorage.setItem("cb_usercolor",de.color),n(de);else try{await Rb(Eh)}catch(r){console.error("Auth error:",r),de=Th(),n(de)}})})}function Th(){const n=localStorage.getItem("cb_username")||Em(),e=localStorage.getItem("cb_usercolor")||bm();return localStorage.setItem("cb_username",n),localStorage.setItem("cb_usercolor",e),{uid:"offline_"+Date.now(),name:n,color:e}}function ea(){return de}const Tm=()=>Tn(He,"boards"),Vl=n=>Kn(He,"boards",n);async function Am(n){const e=await Fp(Vl(n));return e.exists()?{id:e.id,...e.data()}:null}async function YE(){const n=Ho(Tm(),Wo("updatedAt","desc"));return(await Go(n)).docs.map(t=>({id:t.id,...t.data()}))}function xm(n){const e=Ho(Tm(),Wo("updatedAt","desc"));return Vr(e,t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n(r)},t=>{console.error("Board list subscription error:",t)})}async function ta(n,e){await Ko(Vl(n),{...e,updatedAt:nt()})}async function km(n){const e=await Go(Tn(He,"boards",n,"elements")),t=$p(He);e.docs.forEach(r=>t.delete(r.ref)),t.delete(Vl(n)),await t.commit()}const Sm=n=>Tn(He,"boards",n,"elements"),Cm=(n,e)=>Kn(He,"boards",n,"elements",e);async function W(n,e){const t=await Zo(Sm(n),{...e,createdAt:nt(),createdBy:(de==null?void 0:de.uid)||"guest",updatedAt:nt()});return ta(n,{}).catch(()=>{}),t.id}async function Ie(n,e,t){await Ko(Cm(n,e),{...t,updatedAt:nt()})}async function Rs(n,e){await xl(Cm(n,e))}function Rm(n,e){return console.log("[Firebase] subscribing to elements for board:",n),Vr(Sm(n),t=>{console.log("[Firebase] snapshot received, changes:",t.docChanges().length),t.docChanges().forEach(r=>{var i,o,c;const s={id:r.doc.id,...r.doc.data()};console.log("[Firebase] change:",r.type,s.id,s.type),r.type==="added"&&((i=e.onAdd)==null||i.call(e,s)),r.type==="modified"&&((o=e.onModify)==null||o.call(e,s)),r.type==="removed"&&((c=e.onRemove)==null||c.call(e,s))})},t=>{console.error("[Firebase] Elements subscription ERROR:",t)})}const XE=n=>Tn(He,"boards",n,"presence"),Pm=(n,e)=>Kn(He,"boards",n,"presence",e);async function Nm(n,e,t){de&&await Bp(Pm(n,de.uid),{name:de.name,color:de.color,cursorX:e,cursorY:t,lastSeen:nt()},{merge:!0})}async function Ll(n){if(de)try{await xl(Pm(n,de.uid))}catch{}}function Dm(n,e){return Vr(XE(n),t=>{const r={};t.docs.forEach(s=>{s.id!==(de==null?void 0:de.uid)&&(r[s.id]={id:s.id,...s.data()})}),e(r)})}function QE(n,e=1024,t=.8){return new Promise(r=>{const s=new FileReader;s.onload=i=>{const o=new Image;o.onload=()=>{const c=document.createElement("canvas");let l=o.width,d=o.height;if(l>e||d>e){const _=Math.min(e/l,e/d);l*=_,d*=_}c.width=l,c.height=d;const f=c.getContext("2d");f.clearRect(0,0,l,d),f.drawImage(o,0,0,l,d);let p="image/webp";n.type==="image/png"&&(p="image/png");let m=c.toDataURL(p,t);m.length>1e6&&(m=c.toDataURL(p,.5)),r(m)},o.src=i.target.result},s.readAsDataURL(n)})}async function Ml(n,e,t=null){const r=ea();return(await Zo(Tn(He,"boards"),{name:n,emoji:e,templateId:t,ownerId:(r==null?void 0:r.uid)||"guest",ownerName:(r==null?void 0:r.name)||"Guest User",createdAt:nt(),updatedAt:nt(),collaborators:[]})).id}async function Ir(n,e){return{url:await QE(n),path:null}}async function JE(n){}const Fl=()=>Tn(He,"editorProjects"),Bl=n=>Kn(He,"editorProjects",n),Ul=n=>Tn(He,"editorProjects",n,"elements"),Om=(n,e)=>Kn(He,"editorProjects",n,"elements",e);async function eI(n,e=null){const t=ea();return(await Zo(Fl(),{name:n,thumbnail:e,ownerId:(t==null?void 0:t.uid)||"guest",ownerName:(t==null?void 0:t.name)||"Guest User",createdAt:nt(),updatedAt:nt(),background:"#ffffff",width:1080,height:1080})).id}async function tI(){const n=Ho(Fl(),Wo("updatedAt","desc"));return(await Go(n)).docs.map(t=>({id:t.id,...t.data()}))}function nI(n){const e=Ho(Fl(),Wo("updatedAt","desc"));return Vr(e,t=>{n(t.docs.map(r=>({id:r.id,...r.data()})))})}async function Vm(n){const e=await Fp(Bl(n));return e.exists()?{id:e.id,...e.data()}:null}async function na(n,e){await Ko(Bl(n),{...e,updatedAt:nt()})}async function rI(n){const e=await Go(Ul(n)),t=$p(He);e.docs.forEach(r=>t.delete(r.ref)),t.delete(Bl(n)),await t.commit()}async function Mn(n,e){const t=await Zo(Ul(n),{...e,createdAt:nt(),updatedAt:nt()});return na(n,{}).catch(()=>{}),t.id}async function ra(n,e,t){await Ko(Om(n,e),{...t,updatedAt:nt()})}async function sa(n,e){await xl(Om(n,e))}function Lm(n,e){return Vr(Ul(n),t=>{t.docChanges().forEach(r=>{var i,o,c;const s={id:r.doc.id,...r.doc.data()};r.type==="added"&&((i=e.onAdd)==null||i.call(e,s)),r.type==="modified"&&((o=e.onModify)==null||o.call(e,s)),r.type==="removed"&&((c=e.onRemove)==null||c.call(e,s))})})}async function sI(n,e){de&&await Bp(Kn(He,"editorProjects",n,"presence",de.uid),{...e,name:de.name,color:de.color,lastSeen:nt()},{merge:!0})}function iI(n,e){return Vr(Tn(He,"editorProjects",n,"presence"),t=>{const r={};t.docs.forEach(s=>{s.id!==(de==null?void 0:de.uid)&&(r[s.id]={id:s.id,...s.data()})}),e(r)})}const Mm=Object.freeze(Object.defineProperty({__proto__:null,addEditorElement:Mn,addElement:W,createBoard:Ml,createEditorProject:eI,deleteBoard:km,deleteEditorElement:sa,deleteEditorProject:rI,deleteElement:Rs,deleteFile:JE,getBoard:Am,getCurrentUser:ea,getEditorProject:Vm,initAuth:Im,listBoards:YE,listEditorProjects:tI,removePresence:Ll,subscribeBoardList:xm,subscribeEditorElements:Lm,subscribeEditorPresence:iI,subscribeEditorProjects:nI,subscribeElements:Rm,subscribePresence:Dm,updateBoard:ta,updateEditorElement:ra,updateEditorPresence:sI,updateEditorProject:na,updateElement:Ie,updatePresence:Nm,uploadFile:Ir},Symbol.toStringTag,{value:"Module"})),oI="modulepreload",aI=function(n,e){return new URL(n,e).href},Ah={},mo=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let o=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(t.map(f=>{if(f=aI(f,r),f in Ah)return;Ah[f]=!0;const p=f.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let x=c.length-1;x>=0;x--){const A=c[x];if(A.href===f&&(!p||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${m}`))return;const C=document.createElement("link");if(C.rel=p?"stylesheet":oI,p||(C.as="script"),C.crossOrigin="",C.href=f,d&&C.setAttribute("nonce",d),document.head.appendChild(C),p)return new Promise((x,A)=>{C.addEventListener("load",x),C.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};let vs=null,Ps=[],Fm=[],wt="boards";const xh=["📋","📌","🎨","🖼️","📦","🚀","💡","🎯","📝","⭐","🔥","💎","🌟","📸","🎬","✨"];function Bm(n){if(!n)return"";const e=n.toDate?n.toDate():new Date(n),r=Math.floor((new Date-e)/1e3);return r<60?"Just now":r<3600?`${Math.floor(r/60)}m ago`:r<86400?`${Math.floor(r/3600)}h ago`:r<2592e3?`${Math.floor(r/86400)}d ago`:e.toLocaleDateString()}function kh(n,e="info"){const t=document.getElementById("toast-container");if(!t){alert(n);return}const r=document.createElement("div");r.className=`toast ${e}`,r.textContent=n,t.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),300)},3e3)}async function cI(n){let e="Transformation Journal",t="🔄";n==="pro_food"?(e="Gourmet Food Shots",t="🍔"):n==="redesign_room"?(e="Interior Design Board",t="🏠"):n==="instagram_pro"&&(e="Instagram Content Strategist",t="📸"),kh("Creating board from template...");try{const r=await Ml(e,t,n);window.location.hash=`#/board/${r}?template=${n}`}catch(r){console.error("Template create error:",r),kh("Failed to create board.","error")}}const Um=[{id:"before_after",title:"Before & After Transformations",type:"Marketing Portfolio",desc:"Create compelling comparisons from a single image. Restorations, renovations, and cleanups.",imgs:["/templates/car_after.png","/templates/car_before.png","/templates/desk_after.png"]},{id:"pro_food",title:"Make it Professional: Food",type:"E-Commerce Branding",desc:"Turn messy food shots into studio-quality marketing assets. Expert lighting and plating.",imgs:["/templates/pro_burger.png","/templates/messy_burger.png","/templates/car_after.png"]},{id:"redesign_room",title:"Redesign Any Room",type:"Interior Design",desc:"Upload a space and explore new styles instantly. From Minimalist to Cyberpunk.",imgs:["/templates/desk_after.png","/templates/desk_before.png","/templates/car_before.png"]},{id:"instagram_pro",title:"Instagram Content Strategist",type:"Social Media Growth",desc:"Audit your grid, refine your hooks, and get actionable advice to 10x your engagement.",imgs:["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80","https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&q=80","https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80"]}];function lI(){const n=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",n)}function uI(){const e=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),$m()}function $m(){const n=document.getElementById("theme-toggle-icon");if(!n)return;const e=document.documentElement.getAttribute("data-theme")||"light";n.innerHTML=e==="light"?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'}function dI(){var t,r;const n=ea();return`
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-avatar">${((r=(t=n==null?void 0:n.name)==null?void 0:t[0])==null?void 0:r.toUpperCase())||"U"}</div>
        <div style="flex:1">
          <span class="sidebar-username">${(n==null?void 0:n.name)||"User"}</span>
        </div>
        <button class="theme-toggle" id="theme-toggle-btn" title="Toggle Theme">
          <div id="theme-toggle-icon"></div>
        </button>
      </div>
      
      <div class="sidebar-shared">
        <button class="sidebar-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Shared With You
        </button>
      </div>
      
      <div class="sidebar-divider"></div>
      
      <div class="sidebar-section">
        <div class="sidebar-section-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><polyline points="6 9 12 15 18 9"/></svg>
          ${(n==null?void 0:n.name)||"User"}'s team
        </div>
        <button class="sidebar-item ${wt==="boards"?"active":""}" id="nav-boards">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          Boards
        </button>
        <button class="sidebar-item ${wt==="discover"?"active":""}" id="nav-discover">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          Discover
        </button>
        <button class="sidebar-item ${wt==="edit"?"active":""}" id="nav-edit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit
        </button>
      </div>
    </aside>
  `}function hI(n){return`
    <div class="board-card" data-board-id="${n.id}">
      <div class="board-card-thumbnail">
        ${n.thumbnail?`<img src="${n.thumbnail}" alt="${n.name}">`:`<span style="font-size:36px;opacity:0.3">${n.emoji||"📋"}</span>`}
      </div>
      <div class="board-card-info">
        <div class="board-card-name">${n.emoji||""} ${n.name}</div>
        <div class="board-card-date">${Bm(n.updatedAt)}</div>
      </div>
      <div class="board-card-actions">
        <button class="board-card-action" data-action="rename" data-board-id="${n.id}" title="Rename">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="board-card-action" data-action="delete" data-board-id="${n.id}" title="Delete">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `}function jm(){return`
    <div class="dashboard-header">
      <h1 class="dashboard-title">What do you want to create today?</h1>
    </div>
    <div class="board-section">
      <div class="board-section-header">
        <div class="board-tabs">
          <button class="board-tab active" data-tab="all">All</button>
          <button class="board-tab" data-tab="shared">Shared</button>
          <button class="board-tab" data-tab="mine">Mine</button>
        </div>
        <div class="board-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Search boards..." id="board-search-input">
        </div>
      </div>
      <div class="board-grid" id="board-grid">
        <div class="create-card" id="create-board-btn">
          <div class="create-card-icon">+</div>
          <span class="create-card-label">New Board</span>
        </div>
      </div>
    </div>
  `}function zm(){return`
    <div class="dashboard-header" style="text-align:left;padding-bottom:16px;">
      <h1 class="dashboard-title">Visual Discovery</h1>
      <p style="color:var(--text-secondary);margin-top:4px;">Elevate your projects with professional starter kits.</p>
    </div>
    <div class="board-section">
      <div class="discover-grid" id="discover-grid">
        ${Um.map(n=>`
          <div class="discover-card" id="tpl-${n.id}">
            <div class="discover-card-header">
              <span class="discover-card-type">${n.type}</span>
              <div class="discover-card-title">${n.title}</div>
            </div>
            <div class="discover-bento">
              <div class="bento-large"><img src="${n.imgs[0]}" alt="${n.title}"></div>
              <div class="bento-small"><img src="${n.imgs[1]||n.imgs[0]}" alt="${n.title}"></div>
              <div class="bento-small"><img src="${n.imgs[2]||n.imgs[0]}" alt="${n.title}"></div>
            </div>
            <div class="discover-card-desc">${n.desc}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function qm(){return`
    <div class="dashboard-header" style="text-align:left;padding-bottom:16px;">
      <h1 class="dashboard-title">Professional Editor</h1>
      <p style="color:var(--text-secondary);margin-top:4px;">Create professional content with ease.</p>
    </div>
    <div class="board-section">
      <div class="board-grid" id="edit-grid">
        <div class="create-card" id="create-edit-btn">
          <div class="create-card-icon">+</div>
          <span class="create-card-label">New Edit</span>
        </div>
        ${Fm.map(n=>`
          <div class="board-card" data-proj-id="${n.id}">
            <div class="board-card-thumbnail">
              ${n.thumbnail?`<img src="${n.thumbnail}" alt="${n.name}">`:'<div style="font-size:36px;opacity:0.3;display:flex;align-items:center;justify-content:center;height:100%;background:rgba(0,0,0,0.05)">✨</div>'}
            </div>
            <div class="board-card-info">
              <div class="board-card-name">${n.name}</div>
              <div class="board-card-date">${n.updatedAt?Bm(n.updatedAt):"Just now"}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Hm(){const n=xh[Math.floor(Math.random()*xh.length)],e=document.createElement("div");e.className="modal-overlay",e.id="create-modal",e.innerHTML=`
    <div class="modal">
      <h2 class="modal-title">Create New Board</h2>
      <input type="text" class="modal-input" id="board-name-input" placeholder="Board name..." autofocus>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary" id="modal-cancel">Cancel</button>
        <button class="modal-btn modal-btn-primary" id="modal-create">Create</button>
      </div>
    </div>
  `,document.body.appendChild(e);const t=document.getElementById("board-name-input");t.focus();const r=()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)};document.getElementById("modal-cancel").addEventListener("click",r),e.addEventListener("click",i=>{i.target===e&&r()});const s=async()=>{const i=t.value.trim();if(i)try{const o=await Ml(i,n);r(),window.location.hash=`#/board/${o}`}catch{alert("Failed to create board. Check Firebase setup.")}};document.getElementById("modal-create").addEventListener("click",s),t.addEventListener("keydown",i=>{i.key==="Enter"&&s()})}function fI(n,e){const t=document.createElement("div");t.className="modal-overlay",t.innerHTML=`
    <div class="modal">
      <h2 class="modal-title">Rename Board</h2>
      <input type="text" class="modal-input" id="rename-input" value="${e}" autofocus>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary" id="rename-cancel">Cancel</button>
        <button class="modal-btn modal-btn-primary" id="rename-save">Save</button>
      </div>
    </div>
  `,document.body.appendChild(t);const r=document.getElementById("rename-input");r.focus(),r.select();const s=()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)};document.getElementById("rename-cancel").addEventListener("click",s),t.addEventListener("click",o=>{o.target===t&&s()});const i=async()=>{const o=r.value.trim();o&&(await ta(n,{name:o}),s())};document.getElementById("rename-save").addEventListener("click",i),r.addEventListener("keydown",o=>{o.key==="Enter"&&i()})}function Ic(n){var t;const e=document.getElementById("board-grid");e&&(e.innerHTML=`
    <div class="create-card" id="create-board-btn">
      <div class="create-card-icon">+</div>
      <span class="create-card-label">New Board</span>
    </div>
  `+(n||Ps).map(hI).join(""),(t=document.getElementById("create-board-btn"))==null||t.addEventListener("click",Hm),document.querySelectorAll(".board-card").forEach(r=>{r.addEventListener("click",s=>{s.target.closest(".board-card-action")||(window.location.hash=`#/board/${r.dataset.boardId}`)})}),document.querySelectorAll(".board-card-action").forEach(r=>{r.addEventListener("click",async s=>{s.stopPropagation();const i=r.dataset.boardId,o=r.dataset.action,c=Ps.find(l=>l.id===i);o==="delete"?confirm(`Delete "${c==null?void 0:c.name}"? This cannot be undone.`)&&await km(i):o==="rename"&&fI(i,(c==null?void 0:c.name)||"")})}))}function ja(n){if(n===wt)return;wt=n;const e=document.querySelector(".main-content");e&&(n==="boards"?e.innerHTML=jm():n==="discover"?e.innerHTML=zm():n==="edit"&&(e.innerHTML=qm()),n==="boards"?Wm():n==="discover"?Gm():n==="edit"&&Tc())}function Tc(){var n;(n=document.getElementById("create-edit-btn"))==null||n.addEventListener("click",pI),document.querySelectorAll("#edit-grid .board-card").forEach(e=>{e.addEventListener("click",()=>{window.location.hash=`#/edit/${e.dataset.projId}`})})}function pI(){const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
    <div class="modal">
      <h2 class="modal-title">New Edit Project</h2>
      <input type="text" class="modal-input" id="edit-name-input" placeholder="Project name..." autofocus>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary" id="edit-modal-cancel">Cancel</button>
        <button class="modal-btn modal-btn-primary" id="edit-modal-create">Create</button>
      </div>
    </div>
  `,document.body.appendChild(n);const e=document.getElementById("edit-name-input");e.focus();const t=()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)};document.getElementById("edit-modal-cancel").addEventListener("click",t);const r=async()=>{const s=e.value.trim();if(s)try{const{createEditorProject:i}=await mo(async()=>{const{createEditorProject:c}=await Promise.resolve().then(()=>Mm);return{createEditorProject:c}},void 0,import.meta.url),o=await i(s);t(),window.location.hash=`#/edit/${o}`}catch{alert("Failed to create edit project.")}};document.getElementById("edit-modal-create").addEventListener("click",r),e.addEventListener("keydown",s=>{s.key==="Enter"&&r()})}function Wm(){var n;(n=document.getElementById("board-search-input"))==null||n.addEventListener("input",e=>{const t=e.target.value.toLowerCase().trim();Ic(t?Ps.filter(r=>r.name.toLowerCase().includes(t)):Ps)}),Ic()}function Gm(){Um.forEach(n=>{const e=document.getElementById(`tpl-${n.id}`);e&&e.addEventListener("click",()=>cI(n.id))})}function mI(n){var t,r,s,i;n.innerHTML=`
    <div class="dashboard">
      ${dI()}
      <div class="main-content">
        ${wt==="boards"?jm():zm()}
      </div>
    </div>
  `,(t=document.getElementById("nav-boards"))==null||t.addEventListener("click",()=>ja("boards")),(r=document.getElementById("nav-discover"))==null||r.addEventListener("click",()=>ja("discover")),(s=document.getElementById("nav-edit"))==null||s.addEventListener("click",()=>ja("edit")),lI(),$m(),(i=document.getElementById("theme-toggle-btn"))==null||i.addEventListener("click",uI);const e=o=>{o.key==="n"&&(o.ctrlKey||o.metaKey)&&(o.preventDefault(),Hm())};if(document.addEventListener("keydown",e),n._keyHandler=e,wt==="boards"){Wm();try{vs=xm(o=>{Ps=o,wt==="boards"&&Ic()})}catch{}}else if(wt==="edit"){Tc();try{mo(async()=>{const{subscribeEditorProjects:o}=await Promise.resolve().then(()=>Mm);return{subscribeEditorProjects:o}},void 0,import.meta.url).then(({subscribeEditorProjects:o})=>{vs=o(c=>{if(Fm=c,wt==="edit"){const l=document.querySelector(".main-content");l&&(l.innerHTML=qm()),Tc()}})})}catch{}}else Gm()}function gI(){vs&&(vs(),vs=null);const n=document.getElementById("app");n!=null&&n._keyHandler&&document.removeEventListener("keydown",n._keyHandler)}var yI=Object.create,Km=Object.defineProperty,vI=Object.getOwnPropertyDescriptor,Zm=Object.getOwnPropertyNames,_I=Object.getPrototypeOf,wI=Object.prototype.hasOwnProperty,$l=(n,e)=>function(){return e||(0,n[Zm(n)[0]])((e={exports:{}}).exports,e),e.exports},bI=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Zm(e))!wI.call(n,s)&&s!==t&&Km(n,s,{get:()=>e[s],enumerable:!(r=vI(e,s))||r.enumerable});return n},ia=(n,e,t)=>(t=n!=null?yI(_I(n)):{},bI(!n||!n.__esModule?Km(t,"default",{value:n,enumerable:!0}):t,n)),EI=$l({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(n,e){function t(r){for(var s=new Array(r),i=0;i<r;++i)s[i]=i;return s}e.exports=t}}),II=$l({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(n,e){e.exports=function(s){return s!=null&&(t(s)||r(s)||!!s._isBuffer)};function t(s){return!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function r(s){return typeof s.readFloatLE=="function"&&typeof s.slice=="function"&&t(s.slice(0,0))}}}),oa=$l({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(n,e){var t=EI(),r=II(),s=typeof Float64Array<"u";function i(p,m){return p[0]-m[0]}function o(){var p=this.stride,m=new Array(p.length),_;for(_=0;_<m.length;++_)m[_]=[Math.abs(p[_]),_];m.sort(i);var C=new Array(m.length);for(_=0;_<C.length;++_)C[_]=m[_][1];return C}function c(p,m){var _=["View",m,"d",p].join("");m<0&&(_="View_Nil"+p);var C=p==="generic";if(m===-1){var x="function "+_+"(a){this.data=a;};var proto="+_+".prototype;proto.dtype='"+p+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+_+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+_+"(a){return new "+_+"(a);}",T=new Function(x);return T()}else if(m===0){var x="function "+_+"(a,d) {this.data = a;this.offset = d};var proto="+_+".prototype;proto.dtype='"+p+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+_+"_copy() {return new "+_+"(this.data,this.offset)};proto.pick=function "+_+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+_+"_get(){return "+(C?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+_+"_set(v){return "+(C?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+_+"(a,b,c,d){return new "+_+"(a,d)}",T=new Function("TrivialArray",x);return T(d[p][0])}var x=["'use strict'"],A=t(m),D=A.map(function(b){return"i"+b}),O="this.offset+"+A.map(function(b){return"this.stride["+b+"]*i"+b}).join("+"),B=A.map(function(b){return"b"+b}).join(","),q=A.map(function(b){return"c"+b}).join(",");x.push("function "+_+"(a,"+B+","+q+",d){this.data=a","this.shape=["+B+"]","this.stride=["+q+"]","this.offset=d|0}","var proto="+_+".prototype","proto.dtype='"+p+"'","proto.dimension="+m),x.push("Object.defineProperty(proto,'size',{get:function "+_+"_size(){return "+A.map(function(b){return"this.shape["+b+"]"}).join("*"),"}})"),m===1?x.push("proto.order=[0]"):(x.push("Object.defineProperty(proto,'order',{get:"),m<4?(x.push("function "+_+"_order(){"),m===2?x.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):m===3&&x.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):x.push("ORDER})")),x.push("proto.set=function "+_+"_set("+D.join(",")+",v){"),C?x.push("return this.data.set("+O+",v)}"):x.push("return this.data["+O+"]=v}"),x.push("proto.get=function "+_+"_get("+D.join(",")+"){"),C?x.push("return this.data.get("+O+")}"):x.push("return this.data["+O+"]}"),x.push("proto.index=function "+_+"_index(",D.join(),"){return "+O+"}"),x.push("proto.hi=function "+_+"_hi("+D.join(",")+"){return new "+_+"(this.data,"+A.map(function(b){return["(typeof i",b,"!=='number'||i",b,"<0)?this.shape[",b,"]:i",b,"|0"].join("")}).join(",")+","+A.map(function(b){return"this.stride["+b+"]"}).join(",")+",this.offset)}");var he=A.map(function(b){return"a"+b+"=this.shape["+b+"]"}),se=A.map(function(b){return"c"+b+"=this.stride["+b+"]"});x.push("proto.lo=function "+_+"_lo("+D.join(",")+"){var b=this.offset,d=0,"+he.join(",")+","+se.join(","));for(var I=0;I<m;++I)x.push("if(typeof i"+I+"==='number'&&i"+I+">=0){d=i"+I+"|0;b+=c"+I+"*d;a"+I+"-=d}");x.push("return new "+_+"(this.data,"+A.map(function(b){return"a"+b}).join(",")+","+A.map(function(b){return"c"+b}).join(",")+",b)}"),x.push("proto.step=function "+_+"_step("+D.join(",")+"){var "+A.map(function(b){return"a"+b+"=this.shape["+b+"]"}).join(",")+","+A.map(function(b){return"b"+b+"=this.stride["+b+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var I=0;I<m;++I)x.push("if(typeof i"+I+"==='number'){d=i"+I+"|0;if(d<0){c+=b"+I+"*(a"+I+"-1);a"+I+"=ceil(-a"+I+"/d)}else{a"+I+"=ceil(a"+I+"/d)}b"+I+"*=d}");x.push("return new "+_+"(this.data,"+A.map(function(b){return"a"+b}).join(",")+","+A.map(function(b){return"b"+b}).join(",")+",c)}");for(var v=new Array(m),w=new Array(m),I=0;I<m;++I)v[I]="a[i"+I+"]",w[I]="b[i"+I+"]";x.push("proto.transpose=function "+_+"_transpose("+D+"){"+D.map(function(b,k){return b+"=("+b+"===undefined?"+k+":"+b+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+_+"(this.data,"+v.join(",")+","+w.join(",")+",this.offset)}"),x.push("proto.pick=function "+_+"_pick("+D+"){var a=[],b=[],c=this.offset");for(var I=0;I<m;++I)x.push("if(typeof i"+I+"==='number'&&i"+I+">=0){c=(c+this.stride["+I+"]*i"+I+")|0}else{a.push(this.shape["+I+"]);b.push(this.stride["+I+"])}");x.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),x.push("return function construct_"+_+"(data,shape,stride,offset){return new "+_+"(data,"+A.map(function(b){return"shape["+b+"]"}).join(",")+","+A.map(function(b){return"stride["+b+"]"}).join(",")+",offset)}");var T=new Function("CTOR_LIST","ORDER",x.join(`
`));return T(d[p],o)}function l(p){if(r(p))return"buffer";if(s)switch(Object.prototype.toString.call(p)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(p)?"array":"generic"}var d={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function f(p,m,_,C){if(p===void 0){var q=d.array[0];return q([])}else typeof p=="number"&&(p=[p]);m===void 0&&(m=[p.length]);var x=m.length;if(_===void 0){_=new Array(x);for(var A=x-1,D=1;A>=0;--A)_[A]=D,D*=m[A]}if(C===void 0){C=0;for(var A=0;A<x;++A)_[A]<0&&(C-=(m[A]-1)*_[A])}for(var O=l(p),B=d[O];B.length<=x+1;)B.push(c(O,B.length-1));var q=B[x+1];return q(p,m,_,C)}e.exports=f}}),TI=typeof global=="object"&&global&&global.Object===Object&&global,AI=TI,xI=typeof self=="object"&&self&&self.Object===Object&&self,kI=AI||xI||Function("return this")(),jl=kI,SI=jl.Symbol,go=SI,Ym=Object.prototype,CI=Ym.hasOwnProperty,RI=Ym.toString,ts=go?go.toStringTag:void 0;function PI(n){var e=CI.call(n,ts),t=n[ts];try{n[ts]=void 0;var r=!0}catch{}var s=RI.call(n);return r&&(e?n[ts]=t:delete n[ts]),s}var NI=PI,DI=Object.prototype,OI=DI.toString;function VI(n){return OI.call(n)}var LI=VI,MI="[object Null]",FI="[object Undefined]",Sh=go?go.toStringTag:void 0;function BI(n){return n==null?n===void 0?FI:MI:Sh&&Sh in Object(n)?NI(n):LI(n)}var UI=BI;function $I(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Xm=$I,jI="[object AsyncFunction]",zI="[object Function]",qI="[object GeneratorFunction]",HI="[object Proxy]";function WI(n){if(!Xm(n))return!1;var e=UI(n);return e==zI||e==qI||e==jI||e==HI}var GI=WI,KI=jl["__core-js_shared__"],za=KI,Ch=(function(){var n=/[^.]+$/.exec(za&&za.keys&&za.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})();function ZI(n){return!!Ch&&Ch in n}var YI=ZI,XI=Function.prototype,QI=XI.toString;function JI(n){if(n!=null){try{return QI.call(n)}catch{}try{return n+""}catch{}}return""}var eT=JI,tT=/[\\^$.*+?()[\]{}|]/g,nT=/^\[object .+?Constructor\]$/,rT=Function.prototype,sT=Object.prototype,iT=rT.toString,oT=sT.hasOwnProperty,aT=RegExp("^"+iT.call(oT).replace(tT,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function cT(n){if(!Xm(n)||YI(n))return!1;var e=GI(n)?aT:nT;return e.test(eT(n))}var lT=cT;function uT(n,e){return n==null?void 0:n[e]}var dT=uT;function hT(n,e){var t=dT(n,e);return lT(t)?t:void 0}var Qm=hT,fT=Qm(Object,"create"),Ns=fT;function pT(){this.__data__=Ns?Ns(null):{},this.size=0}var mT=pT;function gT(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var yT=gT,vT="__lodash_hash_undefined__",_T=Object.prototype,wT=_T.hasOwnProperty;function bT(n){var e=this.__data__;if(Ns){var t=e[n];return t===vT?void 0:t}return wT.call(e,n)?e[n]:void 0}var ET=bT,IT=Object.prototype,TT=IT.hasOwnProperty;function AT(n){var e=this.__data__;return Ns?e[n]!==void 0:TT.call(e,n)}var xT=AT,kT="__lodash_hash_undefined__";function ST(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Ns&&e===void 0?kT:e,this}var CT=ST;function Mr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Mr.prototype.clear=mT;Mr.prototype.delete=yT;Mr.prototype.get=ET;Mr.prototype.has=xT;Mr.prototype.set=CT;var Rh=Mr;function RT(){this.__data__=[],this.size=0}var PT=RT;function NT(n,e){return n===e||n!==n&&e!==e}var DT=NT;function OT(n,e){for(var t=n.length;t--;)if(DT(n[t][0],e))return t;return-1}var aa=OT,VT=Array.prototype,LT=VT.splice;function MT(n){var e=this.__data__,t=aa(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():LT.call(e,t,1),--this.size,!0}var FT=MT;function BT(n){var e=this.__data__,t=aa(e,n);return t<0?void 0:e[t][1]}var UT=BT;function $T(n){return aa(this.__data__,n)>-1}var jT=$T;function zT(n,e){var t=this.__data__,r=aa(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}var qT=zT;function Fr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Fr.prototype.clear=PT;Fr.prototype.delete=FT;Fr.prototype.get=UT;Fr.prototype.has=jT;Fr.prototype.set=qT;var HT=Fr,WT=Qm(jl,"Map"),GT=WT;function KT(){this.size=0,this.__data__={hash:new Rh,map:new(GT||HT),string:new Rh}}var ZT=KT;function YT(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}var XT=YT;function QT(n,e){var t=n.__data__;return XT(e)?t[typeof e=="string"?"string":"hash"]:t.map}var ca=QT;function JT(n){var e=ca(this,n).delete(n);return this.size-=e?1:0,e}var e1=JT;function t1(n){return ca(this,n).get(n)}var n1=t1;function r1(n){return ca(this,n).has(n)}var s1=r1;function i1(n,e){var t=ca(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}var o1=i1;function Br(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Br.prototype.clear=ZT;Br.prototype.delete=e1;Br.prototype.get=n1;Br.prototype.has=s1;Br.prototype.set=o1;var Jm=Br,a1="Expected a function";function zl(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(a1);var t=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=t.cache;if(i.has(s))return i.get(s);var o=n.apply(this,r);return t.cache=i.set(s,o)||i,o};return t.cache=new(zl.Cache||Jm),t}zl.Cache=Jm;var c1=zl,ql=ia(oa()),eg=class Ac{constructor(e,t){this.type="application/octet-stream",this.params={},this.type=e,this.params=t}toString(){const e=[];for(const t in this.params){const r=this.params[t];e.push(`${t}=${r}`)}return[this.type,...e].join(";")}static create(e,t){return new Ac(e,t)}isIdentical(e){return this.type===e.type&&this.params===e.params}isEqual(e){return this.type===e.type}static fromString(e){const[t,...r]=e.split(";"),s={};for(const i of r){const[o,c]=i.split("=");s[o.trim()]=c.trim()}return new Ac(t,s)}},qa=ia(oa());async function l1(n){const e=eg.fromString(n.type);switch(e.type){case"image/x-alpha8":{const t=parseInt(e.params.width),r=parseInt(e.params.height);return(0,qa.default)(new Uint8Array(await n.arrayBuffer()),[r,t,1])}case"image/x-rgba8":{const t=parseInt(e.params.width),r=parseInt(e.params.height);return(0,qa.default)(new Uint8Array(await n.arrayBuffer()),[r,t,4])}case"application/octet-stream":case"image/png":case"image/jpeg":case"image/jpg":case"image/webp":{const t=await createImageBitmap(n),r=f1(t);return(0,qa.default)(new Uint8Array(r.data),[r.height,r.width,4])}default:throw new Error(`Invalid format: ${e.type} with params: ${e.params}`)}}async function u1(n,e=.8,t="image/png"){const[r,s,i]=n.shape;switch(t){case"image/x-alpha8":case"image/x-rgba8":{const l=eg.create(t,{width:s.toString(),height:r.toString()});return new Blob([n.data],{type:l.toString()})}case"image/png":case"image/jpeg":case"image/webp":{const l=new ImageData(new Uint8ClampedArray(n.data),s,r);var o=tg(l.width,l.height),c=o.getContext("2d");return c.putImageData(l,0,0),o.convertToBlob({quality:e,type:t})}default:throw new Error(`Invalid format: ${t}`)}}function d1(n){return new RegExp("^(?:[a-z+]+:)?//","i").test(n)}function h1(n,e){return d1(n)?n:new URL(n,e).href}function f1(n){var e=tg(n.width,n.height),t=e.getContext("2d");return t.drawImage(n,0,0),t.getImageData(0,0,e.width,e.height)}function p1(n){if(typeof Uint8Array<"u")return new Uint8Array(n);if(typeof Uint8ClampedArray<"u")return new Uint8ClampedArray(n);if(typeof Uint16Array<"u")return new Uint16Array(n);if(typeof Uint32Array<"u")return new Uint32Array(n);if(typeof Float32Array<"u")return new Float32Array(n);if(typeof Float64Array<"u")return new Float64Array(n);throw new Error("TypedArray not supported")}function Ph(n,e,t,r=!1){const[s,i,o]=n.shape;let c=i/e,l=s/t;r&&(c=l=Math.max(c,l)>1?Math.max(c,l):Math.min(c,l));const d=(0,ql.default)(p1(o*e*t),[t,e,o]);for(let f=0;f<t;f++)for(let p=0;p<e;p++){const m=p*c,_=f*l,C=Math.max(Math.floor(m),0),x=Math.min(Math.ceil(m),i-1),A=Math.max(Math.floor(_),0),D=Math.min(Math.ceil(_),s-1),O=m-C,B=_-A;for(let q=0;q<o;q++){const he=n.get(A,C,q),se=n.get(A,x,q),I=n.get(D,C,q),v=n.get(D,x,q),w=(1-O)*(1-B)*he+O*(1-B)*se+(1-O)*B*I+O*B*v;d.set(f,p,q,w)}}return d}function m1(n,e=[128,128,128],t=[256,256,256]){var r=n.data;const[s,i,o]=n.shape,c=s*i,l=new Float32Array(3*c);for(let d=0,f=0;d<r.length;d+=4,f+=1)l[f]=(r[d]-e[0])/t[0],l[f+c]=(r[d+1]-e[1])/t[1],l[f+c+c]=(r[d+2]-e[2])/t[2];return(0,ql.default)(l,[1,3,s,i])}async function g1(n,e){return typeof n=="string"&&(n=h1(n,e.publicPath),n=new URL(n)),n instanceof URL&&(n=await(await fetch(n,{})).blob()),(n instanceof ArrayBuffer||ArrayBuffer.isView(n))&&(n=new Blob([n])),n instanceof Blob&&(n=await l1(n)),n}function y1(n){const e=new Uint8Array(n.data.length);for(let t=0;t<n.data.length;t++)e[t]=n.data[t]*255;return(0,ql.default)(e,n.shape)}function tg(n,e){let t;if(typeof OffscreenCanvas<"u"?t=new OffscreenCanvas(n,e):t=document.createElement("canvas"),!t)throw new Error("Canvas nor OffscreenCanvas are available in the current context.");return t}var v1=ia(oa()),ng=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,_1=()=>navigator.hardwareConcurrency??4;async function Nh(n,e){return URL.createObjectURL(await rg(n,e))}async function rg(n,e){const t=new URL("resources.json",e.publicPath),r=await fetch(t);if(!r.ok)throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");const i=(await r.json())[n];if(!i)throw new Error(`Resource ${n} not found. Ensure that the config.publicPath is configured correctly.`);const o=i.chunks;let c=0;const l=o.map(async p=>{const m=p.offsets[1]-p.offsets[0],_=e.publicPath?new URL(p.name,e.publicPath).toString():p.name,x=await(await fetch(_,e.fetchArgs)).blob();if(m!==x.size)throw new Error(`Failed to fetch ${n} with size ${m} but got ${x.size}`);return e.progress&&(c+=m,e.progress(`fetch:${n}`,c,i.size)),x}),d=await Promise.all(l),f=new Blob(d,{type:i.mime});if(f.size!==i.size)throw new Error(`Failed to fetch ${n} with size ${i.size} but got ${f.size}`);return f}var ns=null,sg=async n=>(ns!==null||(n?ns=(await mo(async()=>{const{default:e}=await import("./ort.webgpu.bundle.min-D0yNlx_N.js");return{default:e}},[],import.meta.url)).default:ns=(await mo(async()=>{const{default:e}=await import("./ort.bundle.min-Cf_a8C4E.js");return{default:e}},[],import.meta.url)).default),ns);async function w1(n,e){const t=e.device==="gpu"&&await ng(),r=t&&e.proxyToWorker,s=[t?"webgpu":"wasm"],i=await sg(t);e.debug&&(console.debug("	Using WebGPU:",t),console.debug("	Proxy to Worker:",r),i.env.debug=!0,i.env.logLevel="verbose"),i.env.wasm.numThreads=_1(),i.env.wasm.proxy=r;const o=t?"/onnxruntime-web/ort-wasm-simd-threaded.jsep":"/onnxruntime-web/ort-wasm-simd-threaded",c=await Nh(`${o}.wasm`,e),l=await Nh(`${o}.mjs`,e);i.env.wasm.wasmPaths={mjs:l,wasm:c},e.debug&&console.debug("ort.env.wasm:",i.env.wasm);const d={executionProviders:s,graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0};return await i.InferenceSession.create(n,d).catch(p=>{throw new Error(`Failed to create session: "${p}". Please check if the publicPath is set correctly.`)})}async function b1(n,e,t,r){const s=r.device==="gpu"&&await ng(),i=await sg(s),o={};for(const[d,f]of e)o[d]=new i.Tensor("float32",new Float32Array(f.data),f.shape);const c=await n.run(o,{}),l=[];for(const d of t){const f=c[d],p=f.dims,m=f.data,_=(0,v1.default)(m,p);l.push(_)}return l}var ce;(function(n){n.assertEqual=s=>s;function e(s){}n.assertIs=e;function t(s){throw new Error}n.assertNever=t,n.arrayToEnum=s=>{const i={};for(const o of s)i[o]=o;return i},n.getValidEnumValues=s=>{const i=n.objectKeys(s).filter(c=>typeof s[s[c]]!="number"),o={};for(const c of i)o[c]=s[c];return n.objectValues(o)},n.objectValues=s=>n.objectKeys(s).map(function(i){return s[i]}),n.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&i.push(o);return i},n.find=(s,i)=>{for(const o of s)if(i(o))return o},n.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}n.joinValues=r,n.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(ce||(ce={}));var xc;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(xc||(xc={}));var $=ce.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Lt=n=>{switch(typeof n){case"undefined":return $.undefined;case"string":return $.string;case"number":return isNaN(n)?$.nan:$.number;case"boolean":return $.boolean;case"function":return $.function;case"bigint":return $.bigint;case"symbol":return $.symbol;case"object":return Array.isArray(n)?$.array:n===null?$.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?$.promise:typeof Map<"u"&&n instanceof Map?$.map:typeof Set<"u"&&n instanceof Set?$.set:typeof Date<"u"&&n instanceof Date?$.date:$.object;default:return $.unknown}},V=ce.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),E1=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:"),pt=class ig extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(i){return i.message},r={_errors:[]},s=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)r._errors.push(t(o));else{let c=r,l=0;for(;l<o.path.length;){const d=o.path[l];l===o.path.length-1?(c[d]=c[d]||{_errors:[]},c[d]._errors.push(t(o))):c[d]=c[d]||{_errors:[]},c=c[d],l++}}};return s(this),r}static assert(e){if(!(e instanceof ig))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ce.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const s of this.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}};pt.create=n=>new pt(n);var Tr=(n,e)=>{let t;switch(n.code){case V.invalid_type:n.received===$.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case V.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,ce.jsonStringifyReplacer)}`;break;case V.unrecognized_keys:t=`Unrecognized key(s) in object: ${ce.joinValues(n.keys,", ")}`;break;case V.invalid_union:t="Invalid input";break;case V.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${ce.joinValues(n.options)}`;break;case V.invalid_enum_value:t=`Invalid enum value. Expected ${ce.joinValues(n.options)}, received '${n.received}'`;break;case V.invalid_arguments:t="Invalid function arguments";break;case V.invalid_return_type:t="Invalid function return type";break;case V.invalid_date:t="Invalid date";break;case V.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:ce.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case V.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case V.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case V.custom:t="Invalid input";break;case V.invalid_intersection_types:t="Intersection results could not be merged";break;case V.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case V.not_finite:t="Number must be finite";break;default:t=e.defaultError,ce.assertNever(n)}return{message:t}},og=Tr;function I1(n){og=n}function yo(){return og}var vo=n=>{const{data:e,path:t,errorMaps:r,issueData:s}=n,i=[...t,...s.path||[]],o={...s,path:i};if(s.message!==void 0)return{...s,path:i,message:s.message};let c="";const l=r.filter(d=>!!d).slice().reverse();for(const d of l)c=d(o,{data:e,defaultError:c}).message;return{...s,path:i,message:c}},T1=[];function M(n,e){const t=yo(),r=vo({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===Tr?void 0:Tr].filter(s=>!!s)});n.common.issues.push(r)}var rt=class ag{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const s of t){if(s.status==="aborted")return Y;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const s of t){const i=await s.key,o=await s.value;r.push({key:i,value:o})}return ag.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const s of t){const{key:i,value:o}=s;if(i.status==="aborted"||o.status==="aborted")return Y;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}},Y=Object.freeze({status:"aborted"}),hr=n=>({status:"dirty",value:n}),Qe=n=>({status:"valid",value:n}),kc=n=>n.status==="aborted",Sc=n=>n.status==="dirty",qn=n=>n.status==="valid",Ds=n=>typeof Promise<"u"&&n instanceof Promise;function _o(n,e,t,r){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function cg(n,e,t,r,s){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var z;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(z||(z={}));var as,cs,Rt=class{constructor(n,e,t,r){this._cachedPath=[],this.parent=n,this.data=e,this._path=t,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Dh=(n,e)=>{if(qn(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new pt(n.common.issues);return this._error=t,this._error}}};function te(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:s}=n;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,c)=>{var l,d;const{message:f}=n;return o.code==="invalid_enum_value"?{message:f??c.defaultError}:typeof c.data>"u"?{message:(l=f??r)!==null&&l!==void 0?l:c.defaultError}:o.code!=="invalid_type"?{message:c.defaultError}:{message:(d=f??t)!==null&&d!==void 0?d:c.defaultError}},description:s}}var ne=class{get description(){return this._def.description}_getType(n){return Lt(n.data)}_getOrReturnCtx(n,e){return e||{common:n.parent.common,data:n.data,parsedType:Lt(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}_processInputParams(n){return{status:new rt,ctx:{common:n.parent.common,data:n.data,parsedType:Lt(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}}_parseSync(n){const e=this._parse(n);if(Ds(e))throw new Error("Synchronous parse encountered promise.");return e}_parseAsync(n){const e=this._parse(n);return Promise.resolve(e)}parse(n,e){const t=this.safeParse(n,e);if(t.success)return t.data;throw t.error}safeParse(n,e){var t;const r={common:{issues:[],async:(t=e==null?void 0:e.async)!==null&&t!==void 0?t:!1,contextualErrorMap:e==null?void 0:e.errorMap},path:(e==null?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)},s=this._parseSync({data:n,path:r.path,parent:r});return Dh(r,s)}"~validate"(n){var e,t;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)};if(!this["~standard"].async)try{const s=this._parseSync({data:n,path:[],parent:r});return qn(s)?{value:s.value}:{issues:r.common.issues}}catch(s){!((t=(e=s==null?void 0:s.message)===null||e===void 0?void 0:e.toLowerCase())===null||t===void 0)&&t.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:n,path:[],parent:r}).then(s=>qn(s)?{value:s.value}:{issues:r.common.issues})}async parseAsync(n,e){const t=await this.safeParseAsync(n,e);if(t.success)return t.data;throw t.error}async safeParseAsync(n,e){const t={common:{issues:[],contextualErrorMap:e==null?void 0:e.errorMap,async:!0},path:(e==null?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)},r=this._parse({data:n,path:t.path,parent:t}),s=await(Ds(r)?r:Promise.resolve(r));return Dh(t,s)}refine(n,e){const t=r=>typeof e=="string"||typeof e>"u"?{message:e}:typeof e=="function"?e(r):e;return this._refinement((r,s)=>{const i=n(r),o=()=>s.addIssue({code:V.custom,...t(r)});return typeof Promise<"u"&&i instanceof Promise?i.then(c=>c?!0:(o(),!1)):i?!0:(o(),!1)})}refinement(n,e){return this._refinement((t,r)=>n(t)?!0:(r.addIssue(typeof e=="function"?e(t,r):e),!1))}_refinement(n){return new yt({schema:this,typeName:Z.ZodEffects,effect:{type:"refinement",refinement:n}})}superRefine(n){return this._refinement(n)}constructor(n){this.spa=this.safeParseAsync,this._def=n,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:e=>this["~validate"](e)}}optional(){return kt.create(this,this._def)}nullable(){return wn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Hn.create(this)}promise(){return kr.create(this,this._def)}or(n){return Us.create([this,n],this._def)}and(n){return $s.create(this,n,this._def)}transform(n){return new yt({...te(this._def),schema:this,typeName:Z.ZodEffects,effect:{type:"transform",transform:n}})}default(n){const e=typeof n=="function"?n:()=>n;return new Hs({...te(this._def),innerType:this,defaultValue:e,typeName:Z.ZodDefault})}brand(){return new Hl({typeName:Z.ZodBranded,type:this,...te(this._def)})}catch(n){const e=typeof n=="function"?n:()=>n;return new Ws({...te(this._def),innerType:this,catchValue:e,typeName:Z.ZodCatch})}describe(n){const e=this.constructor;return new e({...this._def,description:n})}pipe(n){return Wl.create(this,n)}readonly(){return Gs.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},A1=/^c[^\s-]{8,}$/i,x1=/^[0-9a-z]+$/,k1=/^[0-9A-HJKMNP-TV-Z]{26}$/i,S1=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,C1=/^[a-z0-9_-]{21}$/i,R1=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,P1=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,N1=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,D1="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Ha,O1=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,V1=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,L1=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,M1=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,F1=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,B1=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,lg="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",U1=new RegExp(`^${lg}$`);function ug(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function $1(n){return new RegExp(`^${ug(n)}$`)}function dg(n){let e=`${lg}T${ug(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function j1(n,e){return!!((e==="v4"||!e)&&O1.test(n)||(e==="v6"||!e)&&L1.test(n))}function z1(n,e){if(!R1.test(n))return!1;try{const[t]=n.split("."),r=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),s=JSON.parse(atob(r));return!(typeof s!="object"||s===null||!s.typ||!s.alg||e&&s.alg!==e)}catch{return!1}}function q1(n,e){return!!((e==="v4"||!e)&&V1.test(n)||(e==="v6"||!e)&&M1.test(n))}var Ar=class ls extends ne{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==$.string){const i=this._getOrReturnCtx(e);return M(i,{code:V.invalid_type,expected:$.string,received:i.parsedType}),Y}const r=new rt;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),M(s,{code:V.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),M(s,{code:V.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,c=e.data.length<i.value;(o||c)&&(s=this._getOrReturnCtx(e,s),o?M(s,{code:V.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):c&&M(s,{code:V.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")N1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"email",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Ha||(Ha=new RegExp(D1,"u")),Ha.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"emoji",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")S1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"uuid",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")C1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"nanoid",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")A1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"cuid",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")x1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"cuid2",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")k1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"ulid",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),M(s,{validation:"url",code:V.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"regex",code:V.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),M(s,{code:V.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),M(s,{code:V.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),M(s,{code:V.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?dg(i).test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{code:V.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?U1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{code:V.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?$1(i).test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{code:V.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?P1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"duration",code:V.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?j1(e.data,i.version)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"ip",code:V.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?z1(e.data,i.alg)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"jwt",code:V.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?q1(e.data,i.version)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"cidr",code:V.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?F1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"base64",code:V.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?B1.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"base64url",code:V.invalid_string,message:i.message}),r.dirty()):ce.assertNever(i);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(s=>e.test(s),{validation:t,code:V.invalid_string,...z.errToObj(r)})}_addCheck(e){return new ls({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...z.errToObj(e)})}url(e){return this._addCheck({kind:"url",...z.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...z.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...z.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...z.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...z.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...z.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...z.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...z.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...z.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...z.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...z.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...z.errToObj(e)})}datetime(e){var t,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...z.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...z.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...z.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...z.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...z.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...z.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...z.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...z.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...z.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...z.errToObj(t)})}nonempty(e){return this.min(1,z.errToObj(e))}trim(){return new ls({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ls({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ls({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};Ar.create=n=>{var e;return new Ar({checks:[],typeName:Z.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...te(n)})};function H1(n,e){const t=(n.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=t>r?t:r,i=parseInt(n.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return i%o/Math.pow(10,s)}var Os=class Cc extends ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==$.number){const i=this._getOrReturnCtx(e);return M(i,{code:V.invalid_type,expected:$.number,received:i.parsedType}),Y}let r;const s=new rt;for(const i of this._def.checks)i.kind==="int"?ce.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:V.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?H1(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:V.not_finite,message:i.message}),s.dirty()):ce.assertNever(i);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,z.toString(t))}gt(e,t){return this.setLimit("min",e,!1,z.toString(t))}lte(e,t){return this.setLimit("max",e,!0,z.toString(t))}lt(e,t){return this.setLimit("max",e,!1,z.toString(t))}setLimit(e,t,r,s){return new Cc({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:z.toString(s)}]})}_addCheck(e){return new Cc({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:z.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:z.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:z.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:z.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:z.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:z.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ce.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}};Os.create=n=>new Os({checks:[],typeName:Z.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...te(n)});var Vs=class Rc extends ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==$.bigint)return this._getInvalidInput(e);let r;const s=new rt;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):ce.assertNever(i);return{status:s.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return M(t,{code:V.invalid_type,expected:$.bigint,received:t.parsedType}),Y}gte(e,t){return this.setLimit("min",e,!0,z.toString(t))}gt(e,t){return this.setLimit("min",e,!1,z.toString(t))}lte(e,t){return this.setLimit("max",e,!0,z.toString(t))}lt(e,t){return this.setLimit("max",e,!1,z.toString(t))}setLimit(e,t,r,s){return new Rc({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:z.toString(s)}]})}_addCheck(e){return new Rc({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:z.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:z.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};Vs.create=n=>{var e;return new Vs({checks:[],typeName:Z.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...te(n)})};var Ls=class extends ne{_parse(n){if(this._def.coerce&&(n.data=!!n.data),this._getType(n)!==$.boolean){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.boolean,received:t.parsedType}),Y}return Qe(n.data)}};Ls.create=n=>new Ls({typeName:Z.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...te(n)});var Ms=class hg extends ne{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==$.date){const i=this._getOrReturnCtx(e);return M(i,{code:V.invalid_type,expected:$.date,received:i.parsedType}),Y}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return M(i,{code:V.invalid_date}),Y}const r=new rt;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),M(s,{code:V.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),M(s,{code:V.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):ce.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new hg({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:z.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:z.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}};Ms.create=n=>new Ms({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:Z.ZodDate,...te(n)});var wo=class extends ne{_parse(n){if(this._getType(n)!==$.symbol){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.symbol,received:t.parsedType}),Y}return Qe(n.data)}};wo.create=n=>new wo({typeName:Z.ZodSymbol,...te(n)});var Fs=class extends ne{_parse(n){if(this._getType(n)!==$.undefined){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.undefined,received:t.parsedType}),Y}return Qe(n.data)}};Fs.create=n=>new Fs({typeName:Z.ZodUndefined,...te(n)});var Bs=class extends ne{_parse(n){if(this._getType(n)!==$.null){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.null,received:t.parsedType}),Y}return Qe(n.data)}};Bs.create=n=>new Bs({typeName:Z.ZodNull,...te(n)});var xr=class extends ne{constructor(){super(...arguments),this._any=!0}_parse(n){return Qe(n.data)}};xr.create=n=>new xr({typeName:Z.ZodAny,...te(n)});var Fn=class extends ne{constructor(){super(...arguments),this._unknown=!0}_parse(n){return Qe(n.data)}};Fn.create=n=>new Fn({typeName:Z.ZodUnknown,...te(n)});var Wt=class extends ne{_parse(n){const e=this._getOrReturnCtx(n);return M(e,{code:V.invalid_type,expected:$.never,received:e.parsedType}),Y}};Wt.create=n=>new Wt({typeName:Z.ZodNever,...te(n)});var bo=class extends ne{_parse(n){if(this._getType(n)!==$.undefined){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.void,received:t.parsedType}),Y}return Qe(n.data)}};bo.create=n=>new bo({typeName:Z.ZodVoid,...te(n)});var Hn=class Wi extends ne{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),s=this._def;if(t.parsedType!==$.array)return M(t,{code:V.invalid_type,expected:$.array,received:t.parsedType}),Y;if(s.exactLength!==null){const o=t.data.length>s.exactLength.value,c=t.data.length<s.exactLength.value;(o||c)&&(M(t,{code:o?V.too_big:V.too_small,minimum:c?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(M(t,{code:V.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(M(t,{code:V.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((o,c)=>s.type._parseAsync(new Rt(t,o,t.path,c)))).then(o=>rt.mergeArray(r,o));const i=[...t.data].map((o,c)=>s.type._parseSync(new Rt(t,o,t.path,c)));return rt.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new Wi({...this._def,minLength:{value:e,message:z.toString(t)}})}max(e,t){return new Wi({...this._def,maxLength:{value:e,message:z.toString(t)}})}length(e,t){return new Wi({...this._def,exactLength:{value:e,message:z.toString(t)}})}nonempty(e){return this.min(1,e)}};Hn.create=(n,e)=>new Hn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Z.ZodArray,...te(e)});function lr(n){if(n instanceof ct){const e={};for(const t in n.shape){const r=n.shape[t];e[t]=kt.create(lr(r))}return new ct({...n._def,shape:()=>e})}else return n instanceof Hn?new Hn({...n._def,type:lr(n.element)}):n instanceof kt?kt.create(lr(n.unwrap())):n instanceof wn?wn.create(lr(n.unwrap())):n instanceof _n?_n.create(n.items.map(e=>lr(e))):n}var ct=class dt extends ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=ce.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==$.object){const d=this._getOrReturnCtx(e);return M(d,{code:V.invalid_type,expected:$.object,received:d.parsedType}),Y}const{status:r,ctx:s}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),c=[];if(!(this._def.catchall instanceof Wt&&this._def.unknownKeys==="strip"))for(const d in s.data)o.includes(d)||c.push(d);const l=[];for(const d of o){const f=i[d],p=s.data[d];l.push({key:{status:"valid",value:d},value:f._parse(new Rt(s,p,s.path,d)),alwaysSet:d in s.data})}if(this._def.catchall instanceof Wt){const d=this._def.unknownKeys;if(d==="passthrough")for(const f of c)l.push({key:{status:"valid",value:f},value:{status:"valid",value:s.data[f]}});else if(d==="strict")c.length>0&&(M(s,{code:V.unrecognized_keys,keys:c}),r.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const f of c){const p=s.data[f];l.push({key:{status:"valid",value:f},value:d._parse(new Rt(s,p,s.path,f)),alwaysSet:f in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const d=[];for(const f of l){const p=await f.key,m=await f.value;d.push({key:p,value:m,alwaysSet:f.alwaysSet})}return d}).then(d=>rt.mergeObjectSync(r,d)):rt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return z.errToObj,new dt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var s,i,o,c;const l=(o=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,t,r).message)!==null&&o!==void 0?o:r.defaultError;return t.code==="unrecognized_keys"?{message:(c=z.errToObj(e).message)!==null&&c!==void 0?c:l}:{message:l}}}:{}})}strip(){return new dt({...this._def,unknownKeys:"strip"})}passthrough(){return new dt({...this._def,unknownKeys:"passthrough"})}extend(e){return new dt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new dt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Z.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new dt({...this._def,catchall:e})}pick(e){const t={};return ce.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new dt({...this._def,shape:()=>t})}omit(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new dt({...this._def,shape:()=>t})}deepPartial(){return lr(this)}partial(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{const s=this.shape[r];e&&!e[r]?t[r]=s:t[r]=s.optional()}),new dt({...this._def,shape:()=>t})}required(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof kt;)i=i._def.innerType;t[r]=i}}),new dt({...this._def,shape:()=>t})}keyof(){return vg(ce.objectKeys(this.shape))}};ct.create=(n,e)=>new ct({shape:()=>n,unknownKeys:"strip",catchall:Wt.create(),typeName:Z.ZodObject,...te(e)});ct.strictCreate=(n,e)=>new ct({shape:()=>n,unknownKeys:"strict",catchall:Wt.create(),typeName:Z.ZodObject,...te(e)});ct.lazycreate=(n,e)=>new ct({shape:n,unknownKeys:"strip",catchall:Wt.create(),typeName:Z.ZodObject,...te(e)});var Us=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return e.common.issues.push(...o.ctx.common.issues),o.result;const i=s.map(o=>new pt(o.ctx.common.issues));return M(e,{code:V.invalid_union,unionErrors:i}),Y}if(e.common.async)return Promise.all(t.map(async s=>{const i={...e,common:{...e.common,issues:[]},parent:null};return{result:await s._parseAsync({data:e.data,path:e.path,parent:i}),ctx:i}})).then(r);{let s;const i=[];for(const c of t){const l={...e,common:{...e.common,issues:[]},parent:null},d=c._parseSync({data:e.data,path:e.path,parent:l});if(d.status==="valid")return d;d.status==="dirty"&&!s&&(s={result:d,ctx:l}),l.common.issues.length&&i.push(l.common.issues)}if(s)return e.common.issues.push(...s.ctx.common.issues),s.result;const o=i.map(c=>new pt(c));return M(e,{code:V.invalid_union,unionErrors:o}),Y}}get options(){return this._def.options}};Us.create=(n,e)=>new Us({options:n,typeName:Z.ZodUnion,...te(e)});var Vt=n=>n instanceof js?Vt(n.schema):n instanceof yt?Vt(n.innerType()):n instanceof zs?[n.value]:n instanceof li?n.options:n instanceof qs?ce.objectValues(n.enum):n instanceof Hs?Vt(n._def.innerType):n instanceof Fs?[void 0]:n instanceof Bs?[null]:n instanceof kt?[void 0,...Vt(n.unwrap())]:n instanceof wn?[null,...Vt(n.unwrap())]:n instanceof Hl||n instanceof Gs?Vt(n.unwrap()):n instanceof Ws?Vt(n._def.innerType):[],fg=class pg extends ne{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==$.object)return M(t,{code:V.invalid_type,expected:$.object,received:t.parsedType}),Y;const r=this.discriminator,s=t.data[r],i=this.optionsMap.get(s);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(M(t,{code:V.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Y)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const s=new Map;for(const i of t){const o=Vt(i.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const c of o){if(s.has(c))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(c)}`);s.set(c,i)}}return new pg({typeName:Z.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s,...te(r)})}};function Pc(n,e){const t=Lt(n),r=Lt(e);if(n===e)return{valid:!0,data:n};if(t===$.object&&r===$.object){const s=ce.objectKeys(e),i=ce.objectKeys(n).filter(c=>s.indexOf(c)!==-1),o={...n,...e};for(const c of i){const l=Pc(n[c],e[c]);if(!l.valid)return{valid:!1};o[c]=l.data}return{valid:!0,data:o}}else if(t===$.array&&r===$.array){if(n.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<n.length;i++){const o=n[i],c=e[i],l=Pc(o,c);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return t===$.date&&r===$.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}var $s=class extends ne{_parse(n){const{status:e,ctx:t}=this._processInputParams(n),r=(s,i)=>{if(kc(s)||kc(i))return Y;const o=Pc(s.value,i.value);return o.valid?((Sc(s)||Sc(i))&&e.dirty(),{status:e.value,value:o.data}):(M(t,{code:V.invalid_intersection_types}),Y)};return t.common.async?Promise.all([this._def.left._parseAsync({data:t.data,path:t.path,parent:t}),this._def.right._parseAsync({data:t.data,path:t.path,parent:t})]).then(([s,i])=>r(s,i)):r(this._def.left._parseSync({data:t.data,path:t.path,parent:t}),this._def.right._parseSync({data:t.data,path:t.path,parent:t}))}};$s.create=(n,e,t)=>new $s({left:n,right:e,typeName:Z.ZodIntersection,...te(t)});var _n=class mg extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.array)return M(r,{code:V.invalid_type,expected:$.array,received:r.parsedType}),Y;if(r.data.length<this._def.items.length)return M(r,{code:V.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Y;!this._def.rest&&r.data.length>this._def.items.length&&(M(r,{code:V.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...r.data].map((o,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new Rt(r,o,r.path,c)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>rt.mergeArray(t,o)):rt.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new mg({...this._def,rest:e})}};_n.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new _n({items:n,typeName:Z.ZodTuple,rest:null,...te(e)})};var gg=class Nc extends ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.object)return M(r,{code:V.invalid_type,expected:$.object,received:r.parsedType}),Y;const s=[],i=this._def.keyType,o=this._def.valueType;for(const c in r.data)s.push({key:i._parse(new Rt(r,c,r.path,c)),value:o._parse(new Rt(r,r.data[c],r.path,c)),alwaysSet:c in r.data});return r.common.async?rt.mergeObjectAsync(t,s):rt.mergeObjectSync(t,s)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof ne?new Nc({keyType:e,valueType:t,typeName:Z.ZodRecord,...te(r)}):new Nc({keyType:Ar.create(),valueType:e,typeName:Z.ZodRecord,...te(t)})}},Eo=class extends ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(n){const{status:e,ctx:t}=this._processInputParams(n);if(t.parsedType!==$.map)return M(t,{code:V.invalid_type,expected:$.map,received:t.parsedType}),Y;const r=this._def.keyType,s=this._def.valueType,i=[...t.data.entries()].map(([o,c],l)=>({key:r._parse(new Rt(t,o,t.path,[l,"key"])),value:s._parse(new Rt(t,c,t.path,[l,"value"]))}));if(t.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of i){const l=await c.key,d=await c.value;if(l.status==="aborted"||d.status==="aborted")return Y;(l.status==="dirty"||d.status==="dirty")&&e.dirty(),o.set(l.value,d.value)}return{status:e.value,value:o}})}else{const o=new Map;for(const c of i){const l=c.key,d=c.value;if(l.status==="aborted"||d.status==="aborted")return Y;(l.status==="dirty"||d.status==="dirty")&&e.dirty(),o.set(l.value,d.value)}return{status:e.value,value:o}}}};Eo.create=(n,e,t)=>new Eo({valueType:e,keyType:n,typeName:Z.ZodMap,...te(t)});var Io=class Dc extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.set)return M(r,{code:V.invalid_type,expected:$.set,received:r.parsedType}),Y;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(M(r,{code:V.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(M(r,{code:V.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const i=this._def.valueType;function o(l){const d=new Set;for(const f of l){if(f.status==="aborted")return Y;f.status==="dirty"&&t.dirty(),d.add(f.value)}return{status:t.value,value:d}}const c=[...r.data.values()].map((l,d)=>i._parse(new Rt(r,l,r.path,d)));return r.common.async?Promise.all(c).then(l=>o(l)):o(c)}min(e,t){return new Dc({...this._def,minSize:{value:e,message:z.toString(t)}})}max(e,t){return new Dc({...this._def,maxSize:{value:e,message:z.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Io.create=(n,e)=>new Io({valueType:n,minSize:null,maxSize:null,typeName:Z.ZodSet,...te(e)});var yg=class Gi extends ne{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==$.function)return M(t,{code:V.invalid_type,expected:$.function,received:t.parsedType}),Y;function r(c,l){return vo({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,yo(),Tr].filter(d=>!!d),issueData:{code:V.invalid_arguments,argumentsError:l}})}function s(c,l){return vo({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,yo(),Tr].filter(d=>!!d),issueData:{code:V.invalid_return_type,returnTypeError:l}})}const i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof kr){const c=this;return Qe(async function(...l){const d=new pt([]),f=await c._def.args.parseAsync(l,i).catch(_=>{throw d.addIssue(r(l,_)),d}),p=await Reflect.apply(o,this,f);return await c._def.returns._def.type.parseAsync(p,i).catch(_=>{throw d.addIssue(s(p,_)),d})})}else{const c=this;return Qe(function(...l){const d=c._def.args.safeParse(l,i);if(!d.success)throw new pt([r(l,d.error)]);const f=Reflect.apply(o,this,d.data),p=c._def.returns.safeParse(f,i);if(!p.success)throw new pt([s(f,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Gi({...this._def,args:_n.create(e).rest(Fn.create())})}returns(e){return new Gi({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new Gi({args:e||_n.create([]).rest(Fn.create()),returns:t||Fn.create(),typeName:Z.ZodFunction,...te(r)})}},js=class extends ne{get schema(){return this._def.getter()}_parse(n){const{ctx:e}=this._processInputParams(n);return this._def.getter()._parse({data:e.data,path:e.path,parent:e})}};js.create=(n,e)=>new js({getter:n,typeName:Z.ZodLazy,...te(e)});var zs=class extends ne{_parse(n){if(n.data!==this._def.value){const e=this._getOrReturnCtx(n);return M(e,{received:e.data,code:V.invalid_literal,expected:this._def.value}),Y}return{status:"valid",value:n.data}}get value(){return this._def.value}};zs.create=(n,e)=>new zs({value:n,typeName:Z.ZodLiteral,...te(e)});function vg(n,e){return new li({values:n,typeName:Z.ZodEnum,...te(e)})}var li=class Oc extends ne{constructor(){super(...arguments),as.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return M(t,{expected:ce.joinValues(r),received:t.parsedType,code:V.invalid_type}),Y}if(_o(this,as)||cg(this,as,new Set(this._def.values)),!_o(this,as).has(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return M(t,{received:t.data,code:V.invalid_enum_value,options:r}),Y}return Qe(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Oc.create(e,{...this._def,...t})}exclude(e,t=this._def){return Oc.create(this.options.filter(r=>!e.includes(r)),{...this._def,...t})}};as=new WeakMap;li.create=vg;var qs=class extends ne{constructor(){super(...arguments),cs.set(this,void 0)}_parse(n){const e=ce.getValidEnumValues(this._def.values),t=this._getOrReturnCtx(n);if(t.parsedType!==$.string&&t.parsedType!==$.number){const r=ce.objectValues(e);return M(t,{expected:ce.joinValues(r),received:t.parsedType,code:V.invalid_type}),Y}if(_o(this,cs)||cg(this,cs,new Set(ce.getValidEnumValues(this._def.values))),!_o(this,cs).has(n.data)){const r=ce.objectValues(e);return M(t,{received:t.data,code:V.invalid_enum_value,options:r}),Y}return Qe(n.data)}get enum(){return this._def.values}};cs=new WeakMap;qs.create=(n,e)=>new qs({values:n,typeName:Z.ZodNativeEnum,...te(e)});var kr=class extends ne{unwrap(){return this._def.type}_parse(n){const{ctx:e}=this._processInputParams(n);if(e.parsedType!==$.promise&&e.common.async===!1)return M(e,{code:V.invalid_type,expected:$.promise,received:e.parsedType}),Y;const t=e.parsedType===$.promise?e.data:Promise.resolve(e.data);return Qe(t.then(r=>this._def.type.parseAsync(r,{path:e.path,errorMap:e.common.contextualErrorMap})))}};kr.create=(n,e)=>new kr({type:n,typeName:Z.ZodPromise,...te(e)});var yt=class extends ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Z.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(n){const{status:e,ctx:t}=this._processInputParams(n),r=this._def.effect||null,s={addIssue:i=>{M(t,i),i.fatal?e.abort():e.dirty()},get path(){return t.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const i=r.transform(t.data,s);if(t.common.async)return Promise.resolve(i).then(async o=>{if(e.value==="aborted")return Y;const c=await this._def.schema._parseAsync({data:o,path:t.path,parent:t});return c.status==="aborted"?Y:c.status==="dirty"||e.value==="dirty"?hr(c.value):c});{if(e.value==="aborted")return Y;const o=this._def.schema._parseSync({data:i,path:t.path,parent:t});return o.status==="aborted"?Y:o.status==="dirty"||e.value==="dirty"?hr(o.value):o}}if(r.type==="refinement"){const i=o=>{const c=r.refinement(o,s);if(t.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(t.common.async===!1){const o=this._def.schema._parseSync({data:t.data,path:t.path,parent:t});return o.status==="aborted"?Y:(o.status==="dirty"&&e.dirty(),i(o.value),{status:e.value,value:o.value})}else return this._def.schema._parseAsync({data:t.data,path:t.path,parent:t}).then(o=>o.status==="aborted"?Y:(o.status==="dirty"&&e.dirty(),i(o.value).then(()=>({status:e.value,value:o.value}))))}if(r.type==="transform")if(t.common.async===!1){const i=this._def.schema._parseSync({data:t.data,path:t.path,parent:t});if(!qn(i))return i;const o=r.transform(i.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:e.value,value:o}}else return this._def.schema._parseAsync({data:t.data,path:t.path,parent:t}).then(i=>qn(i)?Promise.resolve(r.transform(i.value,s)).then(o=>({status:e.value,value:o})):i);ce.assertNever(r)}};yt.create=(n,e,t)=>new yt({schema:n,typeName:Z.ZodEffects,effect:e,...te(t)});yt.createWithPreprocess=(n,e,t)=>new yt({schema:e,effect:{type:"preprocess",transform:n},typeName:Z.ZodEffects,...te(t)});var kt=class extends ne{_parse(n){return this._getType(n)===$.undefined?Qe(void 0):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}};kt.create=(n,e)=>new kt({innerType:n,typeName:Z.ZodOptional,...te(e)});var wn=class extends ne{_parse(n){return this._getType(n)===$.null?Qe(null):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}};wn.create=(n,e)=>new wn({innerType:n,typeName:Z.ZodNullable,...te(e)});var Hs=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n);let t=e.data;return e.parsedType===$.undefined&&(t=this._def.defaultValue()),this._def.innerType._parse({data:t,path:e.path,parent:e})}removeDefault(){return this._def.innerType}};Hs.create=(n,e)=>new Hs({innerType:n,typeName:Z.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...te(e)});var Ws=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t={...e,common:{...e.common,issues:[]}},r=this._def.innerType._parse({data:t.data,path:t.path,parent:{...t}});return Ds(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new pt(t.common.issues)},input:t.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new pt(t.common.issues)},input:t.data})}}removeCatch(){return this._def.innerType}};Ws.create=(n,e)=>new Ws({innerType:n,typeName:Z.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...te(e)});var To=class extends ne{_parse(n){if(this._getType(n)!==$.nan){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.nan,received:t.parsedType}),Y}return{status:"valid",value:n.data}}};To.create=n=>new To({typeName:Z.ZodNaN,...te(n)});var W1=Symbol("zod_brand"),Hl=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t=e.data;return this._def.type._parse({data:t,path:e.path,parent:e})}unwrap(){return this._def.type}},Wl=class _g extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Y:i.status==="dirty"?(t.dirty(),hr(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?Y:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,t){return new _g({in:e,out:t,typeName:Z.ZodPipeline})}},Gs=class extends ne{_parse(n){const e=this._def.innerType._parse(n),t=r=>(qn(r)&&(r.value=Object.freeze(r.value)),r);return Ds(e)?e.then(r=>t(r)):t(e)}unwrap(){return this._def.innerType}};Gs.create=(n,e)=>new Gs({innerType:n,typeName:Z.ZodReadonly,...te(e)});function Oh(n,e){const t=typeof n=="function"?n(e):typeof n=="string"?{message:n}:n;return typeof t=="string"?{message:t}:t}function wg(n,e={},t){return n?xr.create().superRefine((r,s)=>{var i,o;const c=n(r);if(c instanceof Promise)return c.then(l=>{var d,f;if(!l){const p=Oh(e,r),m=(f=(d=p.fatal)!==null&&d!==void 0?d:t)!==null&&f!==void 0?f:!0;s.addIssue({code:"custom",...p,fatal:m})}});if(!c){const l=Oh(e,r),d=(o=(i=l.fatal)!==null&&i!==void 0?i:t)!==null&&o!==void 0?o:!0;s.addIssue({code:"custom",...l,fatal:d})}}):xr.create()}var G1={object:ct.lazycreate},Z;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Z||(Z={}));var K1=(n,e={message:`Input not instance of ${n.name}`})=>wg(t=>t instanceof n,e),bg=Ar.create,Eg=Os.create,Z1=To.create,Y1=Vs.create,Ig=Ls.create,X1=Ms.create,Q1=wo.create,J1=Fs.create,eA=Bs.create,tA=xr.create,nA=Fn.create,rA=Wt.create,sA=bo.create,iA=Hn.create,oA=ct.create,aA=ct.strictCreate,cA=Us.create,lA=fg.create,uA=$s.create,dA=_n.create,hA=gg.create,fA=Eo.create,pA=Io.create,mA=yg.create,gA=js.create,yA=zs.create,vA=li.create,_A=qs.create,wA=kr.create,Vh=yt.create,bA=kt.create,EA=wn.create,IA=yt.createWithPreprocess,TA=Wl.create,AA=()=>bg().optional(),xA=()=>Eg().optional(),kA=()=>Ig().optional(),SA={string:n=>Ar.create({...n,coerce:!0}),number:n=>Os.create({...n,coerce:!0}),boolean:n=>Ls.create({...n,coerce:!0}),bigint:n=>Vs.create({...n,coerce:!0}),date:n=>Ms.create({...n,coerce:!0})},CA=Y,Ne=Object.freeze({__proto__:null,defaultErrorMap:Tr,setErrorMap:I1,getErrorMap:yo,makeIssue:vo,EMPTY_PATH:T1,addIssueToContext:M,ParseStatus:rt,INVALID:Y,DIRTY:hr,OK:Qe,isAborted:kc,isDirty:Sc,isValid:qn,isAsync:Ds,get util(){return ce},get objectUtil(){return xc},ZodParsedType:$,getParsedType:Lt,ZodType:ne,datetimeRegex:dg,ZodString:Ar,ZodNumber:Os,ZodBigInt:Vs,ZodBoolean:Ls,ZodDate:Ms,ZodSymbol:wo,ZodUndefined:Fs,ZodNull:Bs,ZodAny:xr,ZodUnknown:Fn,ZodNever:Wt,ZodVoid:bo,ZodArray:Hn,ZodObject:ct,ZodUnion:Us,ZodDiscriminatedUnion:fg,ZodIntersection:$s,ZodTuple:_n,ZodRecord:gg,ZodMap:Eo,ZodSet:Io,ZodFunction:yg,ZodLazy:js,ZodLiteral:zs,ZodEnum:li,ZodNativeEnum:qs,ZodPromise:kr,ZodEffects:yt,ZodTransformer:yt,ZodOptional:kt,ZodNullable:wn,ZodDefault:Hs,ZodCatch:Ws,ZodNaN:To,BRAND:W1,ZodBranded:Hl,ZodPipeline:Wl,ZodReadonly:Gs,custom:wg,Schema:ne,ZodSchema:ne,late:G1,get ZodFirstPartyTypeKind(){return Z},coerce:SA,any:tA,array:iA,bigint:Y1,boolean:Ig,date:X1,discriminatedUnion:lA,effect:Vh,enum:vA,function:mA,instanceof:K1,intersection:uA,lazy:gA,literal:yA,map:fA,nan:Z1,nativeEnum:_A,never:rA,null:eA,nullable:EA,number:Eg,object:oA,oboolean:kA,onumber:xA,optional:bA,ostring:AA,pipeline:TA,preprocess:IA,promise:wA,record:hA,set:pA,strictObject:aA,string:bg,symbol:Q1,transformer:Vh,tuple:dA,undefined:J1,union:cA,unknown:nA,void:sA,NEVER:CA,ZodIssueCode:V,quotelessJson:E1,ZodError:pt}),Lh={name:"@imgly/background-removal",version:"1.7.0"},RA=Ne.object({publicPath:Ne.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(n=>n.replace("${PACKAGE_NAME}",Lh.name).replace("${PACKAGE_VERSION}",Lh.version)),debug:Ne.boolean().default(!1).describe("Whether to enable debug logging."),rescale:Ne.boolean().default(!0).describe("Whether to rescale the image."),device:Ne.enum(["cpu","gpu"]).default("cpu").describe("The device to run the model on."),proxyToWorker:Ne.boolean().default(!1).describe("Whether to proxy inference to a web worker."),fetchArgs:Ne.any().default({}).describe("Arguments to pass to fetch when loading the model."),progress:Ne.function().args(Ne.string(),Ne.number(),Ne.number()).returns(Ne.void()).describe("Progress callback.").optional(),model:Ne.preprocess(n=>{switch(n){case"large":return"isnet";case"small":return"isnet_quint8";case"medium":return"isnet_fp16";default:return n}},Ne.enum(["isnet","isnet_fp16","isnet_quint8"])).default("medium"),output:Ne.object({format:Ne.enum(["image/png","image/jpeg","image/webp","image/x-rgba8","image/x-alpha8"]).default("image/png"),quality:Ne.number().default(.8)}).default({})}).default({}).transform(n=>(n.debug&&console.log("Config:",n),n.debug&&!n.progress&&(n.progress=n.progress??((e,t,r)=>{console.debug(`Downloading ${e}: ${t} of ${r}`)}),crossOriginIsolated||n.debug&&console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")),n));function PA(n){return RA.parse(n??{})}var NA=ia(oa());async function DA(n){n.debug&&console.debug("Loading model...",n.model);const e=n.model,r=await(await rg(`/models/${e}`,n)).arrayBuffer();return await w1(r,n)}async function OA(n){n=PA(n);const e=await DA(n);return{config:n,session:{base:e}}}async function VA(n,e,t){const[s,i,o]=n.shape,c=!1;let l=Ph(n,1024,1024,c);const d=m1(l);let f=await b1(t.base,[["input",d]],["output"],e),p=(0,NA.default)(f[0].data,[1024,1024,1]),m=y1(p);return e.rescale?(m=Ph(m,i,s,c),[m,n]):[m,l]}var LA=c1(OA,n=>JSON.stringify(n));async function MA(n,e){var m,_,C,x;const{config:t,session:r}=await LA(e);t.progress&&t.progress("compute:decode",0,4);const s=await g1(n,t);(m=t.progress)==null||m.call(t,"compute:inference",1,4);const[i,o]=await VA(s,t,r);(_=t.progress)==null||_.call(t,"compute:mask",2,4);const c=o,[l,d]=c.shape,f=l*d;for(let A=0;A<f;A+=1)c.data[4*A+3]=i.data[A];(C=t.progress)==null||C.call(t,"compute:encode",3,4);const p=await u1(c,t.output.quality,t.output.format);return(x=t.progress)==null||x.call(t,"compute:encode",4,4),p}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/async function FA(n,e){try{return await MA(n,{progress:(s,i,o)=>{if(e){const c=Math.round(i*100);e(`${s}: ${c}%`)}},output:{type:"image/png",quality:.8}})}catch(t){throw console.error("Background removal failed:",t),t}}function Mh(n,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>n(...r),e)}}let y={boardId:null,board:null,tool:"select",viewport:{x:0,y:0,zoom:1},elements:new Map,selectedIds:[],isPanning:!1,isDragging:!1,isResizing:!1,isDrawing:!1,drawColor:"#111111",drawWidth:3,noteColor:"yellow",panStart:{x:0,y:0},dragStart:{x:0,y:0},dragOffset:{x:0,y:0},resizeStart:null,drawingPoints:[],lastPresenceUpdate:0,isConnecting:!1,connectionStartId:null,tempConnectionLine:null,connections:[],replyElementId:null,currentTemplate:null,isWaitingForGen:!1},us=null,ds=null,Ki=null,ee={};const G={sparkles:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/></svg>',arrow_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="9 5 19 5 19 15"/></svg>',ellipse_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',rectangle_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>',diamond_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 12 12 22 2 12 12 2"/></svg>',triangle_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4L4 20H20L12 4Z"/></svg>',line_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="20" x2="20" y2="4"/></svg>',cursor:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3l6.5 18 2.5-6.5L21.5 12z"/></svg>',image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><polygon points="10 9 15 12 10 15 10 9"/></svg>',audio:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 4v16M8 8v8M16 8v8M4 11v2M20 11v2"/></svg>',frame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"/></svg>',pan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V5a2 2 0 0 0-4 0v9"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.76 0-5.26-1.12-7.07-2.93l-3.43-3.43a2 2 0 0 1 2.83-2.83L8 15"/></svg>',draw_scribble:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1.1 0-2 .9-2 2v2H8c-1.1 0-2 .9-2 2v2h4V7h4v2h4V7h-4V5c0-1.1-.9-2-2-2zM4 11c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm16 0c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2z"/></svg>',pencil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',text_aa:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-weight="700" font-size="18">Aa</text></svg>',pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3zM12 19l-7-7 3-3 7 7-3 3z"/></svg>',text:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-weight="700" font-size="18">Aa</text></svg>',eraser:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20H7L3 16l8-8 9 9-4 3z"/><path d="M6.5 13.5L15 5l4 4"/></svg>',note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3z"/><polyline points="14 3 14 8 21 8"/></svg>',color:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>',plus_circle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',bot:'<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',heartFill:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',zoomIn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoomOut:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',wand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 4 5 2"/><path d="m15 11 3 3"/><path d="m20 11 3-3"/><path d="m9 15 3 3"/><path d="M2.5 17.5 16 4"/><path d="m16 4 4 4L6.5 21.5 2.5 17.5Z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',bold:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>',italic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',underline:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0 0 12 0V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>',strike:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" y1="12" x2="20" y2="12"/></svg>',list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',chevron_down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>'};function Ze(n,e){return{x:(n-y.viewport.x)/y.viewport.zoom,y:(e-y.viewport.y)/y.viewport.zoom}}function Wa(n,e){return{x:n*y.viewport.zoom+y.viewport.x,y:e*y.viewport.zoom+y.viewport.y}}function _s(){if(!ee.container)return;const{x:n,y:e,zoom:t}=y.viewport;if(ee.container.style.transform=`translate(${n}px, ${e}px) scale(${t})`,ee.wrapper){const r=24*t,s=n%r,i=e%r;ee.wrapper.style.backgroundSize=`${r}px ${r}px`,ee.wrapper.style.backgroundPosition=`${s}px ${i}px`}ee.zoomIndicator&&(ee.zoomIndicator.textContent=`${Math.round(t*100)}%`),ee.redrawStrokes&&ee.redrawStrokes()}function BA(n){return`
    <div class="board-page" id="board-page">
      <!-- Top Bar -->
      <div class="board-topbar">
        <div class="topbar-left">
          <button class="topbar-back" id="topbar-back">${G.back}</button>
          <div class="topbar-name">
            <span class="topbar-name-emoji" id="board-emoji">${(n==null?void 0:n.emoji)||"📋"}</span>
            <span class="topbar-name-text" contenteditable="true" id="board-name-editable">${(n==null?void 0:n.name)||"Untitled"}</span>
          </div>
        </div>
        <div class="topbar-right">
          <button class="topbar-btn" id="topbar-settings">${G.settings}</button>
          <button class="topbar-btn topbar-btn-primary" id="topbar-share">${G.share} Share</button>
        </div>
      </div>

      <!-- AI Chat Sidebar -->
      <div class="chat-sidebar" id="chat-sidebar">
        <div class="chat-header">
          <span>Gemini AI</span>
          <button class="chat-close" id="chat-close">×</button>
        </div>
        <div class="chat-content" id="chat-content">
          <div class="chat-bubble ai">Hi! I am Gemini. Feel free to ask me anything about your board, ideas, or to generate images!</div>
        </div>
        <div class="chat-input-area">
          <div class="chat-reply-context" id="chat-reply-context" style="display: none;">
            <div class="reply-thumb" id="reply-thumb"></div>
            <div class="reply-info">
              <span>Replying to Image</span>
              <small>Gemini will modify this image</small>
            </div>
            <button class="reply-close" id="reply-clear">×</button>
          </div>
          <div class="chat-input-box">
            <input type="text" id="chat-input" placeholder="Ask Gemini..." autocomplete="off">
            <button class="chat-send" id="chat-send">↑</button>
          </div>
        </div>
      </div>

      <!-- Canvas Wrapper (grid bg applied via CSS) -->
      <div class="canvas-wrapper" id="canvas-wrapper">
        <div class="canvas-container" id="canvas-container">
          <svg id="connection-layer" style="position:absolute; top:0; left:0; width:10000px; height:10000px; pointer-events:none; z-index:0;"></svg>
        </div>
      </div>

      <!-- Drawing Canvas Overlay -->
      <canvas class="drawing-canvas" id="drawing-canvas"></canvas>

      <!-- Bottom Toolbar -->
      <div class="board-toolbar" id="board-toolbar">
        <button class="toolbar-btn active" data-tool="select" title="Select">${G.cursor}</button>
        <button class="toolbar-btn" data-tool="image-gen" id="tool-image-gen" title="Image Gen">${G.sparkles}</button>
        <button class="toolbar-btn" data-tool="frame" title="Frame">${G.frame}</button>
        <div class="toolbar-group wrap-draw" style="position: relative;">
          <button class="toolbar-btn" data-tool="draw" id="btn-draw" data-shape="doodle" title="Shapes / Draw">${G.draw_scribble}</button>
          <div class="draw-submenu" id="draw-submenu">
            <button class="submenu-item active" data-shape="doodle" title="Doodle">
              <span class="sm-icon">${G.pencil}</span>
              <span class="sm-label">Doodle</span>
              <span class="sm-key">D</span>
            </button>
            <button class="submenu-item" data-shape="rectangle" title="Rectangle">
              <span class="sm-icon">${G.rectangle_tool}</span>
              <span class="sm-label">Rectangle</span>
              <span class="sm-key">R</span>
            </button>
            <button class="submenu-item" data-shape="arrow" title="Arrow">
              <span class="sm-icon">${G.arrow_tool}</span>
              <span class="sm-label">Arrow</span>
              <span class="sm-key">A</span>
            </button>
            <button class="submenu-item" data-shape="line" title="Line">
              <span class="sm-icon">${G.line_tool}</span>
              <span class="sm-label">Line</span>
              <span class="sm-key">L</span>
            </button>
            <button class="submenu-item" data-shape="ellipse" title="Ellipse">
              <span class="sm-icon">${G.ellipse_tool}</span>
              <span class="sm-label">Ellipse</span>
              <span class="sm-key">O</span>
            </button>
            <button class="submenu-item" data-shape="triangle" title="Triangle">
              <span class="sm-icon">${G.triangle_tool}</span>
              <span class="sm-label">Triangle</span>
            </button>
            <button class="submenu-item" data-shape="diamond" title="Diamond">
              <span class="sm-icon">${G.diamond_tool}</span>
              <span class="sm-label">Diamond</span>
            </button>
            <div class="submenu-divider"></div>
            <button class="submenu-item eraser-btn" data-shape="eraser" data-tool="eraser" title="Eraser">
              <span class="sm-icon">${G.eraser}</span>
              <span class="sm-label">Eraser</span>
              <span class="sm-key">E</span>
            </button>
            
            <div class="submenu-controls">
              <div class="draw-size-wrapper">
                <input type="range" id="draw-size-slider" min="1" max="50" value="3" class="draw-size-slider">
                <span id="draw-size-val">3px</span>
              </div>
              <input type="color" id="draw-color-picker" title="Stroke Color" value="#111111" class="native-color-picker">
            </div>
          </div>
        </div>
        <button class="toolbar-btn" data-tool="text" title="Text Aa">${G.text_aa}</button>
        <button class="toolbar-btn" data-tool="note" title="Note">${G.note}</button>
        <button class="toolbar-btn" data-tool="image" title="Add Image (PC)">${G.image}</button>
        <div style="width:1px; height:24px; background:rgba(0,0,0,0.1); margin:0 4px;"></div>
        <button class="toolbar-btn" id="btn-auto-layout" title="AI Auto-Layout">${G.grid}</button>
      </div>

      <!-- Bottom Right Chat FAB -->
      <div class="chat-fab" id="toolbar-chatbot-btn">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
      </div>

      <!-- Image Context Menu -->
      <div class="image-context-menu" id="img-ctx-menu" style="display: none;">
        <button class="img-ctx-btn" id="img-ctx-full">${G.image} Full Size</button>
        <button class="img-ctx-btn" id="img-ctx-download">${G.download} Download</button>
        <button class="img-ctx-btn" id="img-ctx-crop">${G.frame} Crop</button>
      </div>

      <!-- Zoom Indicator -->
      <div class="zoom-indicator" id="zoom-indicator">100%</div>

      <!-- Toast Container -->
      <div class="toast-container" id="toast-container"></div>
      
      <!-- Hidden File Input -->
      <input type="file" id="file-input" accept="image/*,video/*" multiple style="display:none">
      
      <!-- Image Gen Popup (Exact Clone) -->
      <div class="image-gen-popup" id="image-gen-popup">
        <div class="ig-header">
          <div>
            <div class="ig-title">Create Image</div>
            <div class="ig-subtitle">Nano Banana</div>
          </div>
          <div class="ig-close-icons">
            <svg id="ig-help" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <svg id="ig-close" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
        </div>

        <div class="ig-section">
          <div class="ig-section-title">References</div>
          <div class="ig-ref-box">
            <div class="ig-ref-add" id="ig-ref-add">+</div>
          </div>
        </div>

        <div class="ig-section">
          <div class="ig-section-title">Instruction</div>
          <textarea class="ig-instruction-box" id="ig-prompt" placeholder="Describe the image..."></textarea>
        </div>

        <div class="ig-bottom-row">
          <div style="display: flex; gap: 8px; width: 100%; margin-bottom: 8px;">
            <select class="ig-select" id="ig-camera" style="flex: 1; padding: 10px; border-radius: 12px; border: 1px solid #ccc; background: #ebebeb; cursor: pointer; font-size: 13px;">
              <option value="">Any Camera</option>
              <option value="shot on 35mm lens, wide angle, highly realistic">35mm Lens (Wide Angle)</option>
              <option value="shot on 85mm lens, professional portrait photography, beautiful bokeh blur">85mm Lens (Portrait Blur)</option>
              <option value="macro photography, extreme close up, highly detailed textures">Macro (Extreme Close-up)</option>
              <option value="drone flying shot, aerial view, bird's eye perspective">Drone (Aerial View)</option>
            </select>
            <select class="ig-select" id="ig-style" style="flex: 1; padding: 10px; border-radius: 12px; border: 1px solid #ccc; background: #ebebeb; cursor: pointer; font-size: 13px;">
              <option value="">Any Style</option>
              <option value="dark cinematic lighting, moody, dramatic shadows, moody colors">Dark Cinematic (Moody)</option>
              <option value="cyberpunk aesthetic, vibrant neon lights, dystopian">Cyberpunk (Neon)</option>
              <option value="soft studio lighting, bright and airy, clean background">Studio Light (Bright)</option>
              <option value="breathtaking 3d render, unreal engine 5, octane render, insanely detailed">3D Render (Unreal Engine)</option>
            </select>
          </div>
          <div style="display: flex; gap: 8px; width: 100%;">
            <select class="ig-select" id="ig-size" style="flex: 1; padding: 10px; border-radius: 12px; border: 1px solid #ccc; background: #ebebeb; cursor: pointer; font-size: 13px;">
              <option value="1024x1024">1:1 Square (1024x1024)</option>
              <option value="1920x1080" selected>16:9 Landscape (1920x1080)</option>
              <option value="1080x1920">9:16 Portrait (1080x1920)</option>
            </select>
            <select class="ig-select" id="ig-quality" style="flex: 1; padding: 10px; border-radius: 12px; border: 1px solid #ccc; background: #ebebeb; cursor: pointer; font-size: 13px;">
              <option value="standard">Standard Quality</option>
              <option value="4k">4K High-Res</option>
              <option value="8k">8K Ultra</option>
            </select>
          </div>
        </div>
        
        <button class="ig-generate-btn" id="ig-generate-btn">Create</button>
      </div>
      
      <!-- Text Format Popover -->
      <div class="text-format-popover" id="text-format-popover" style="display: none;">
        <div class="tf-dropdown" id="tf-size-dropdown">
          <span id="tf-current-size">Medium</span>
          ${G.chevron_down}
          <div class="tf-dropdown-menu">
            <button data-size="14">Small</button>
            <button data-size="18">Medium</button>
            <button data-size="24">Large</button>
            <button data-size="32">Extra Large</button>
          </div>
        </div>
        <div class="tf-divider"></div>
        <button class="tf-btn" id="tf-bold" title="Bold">${G.bold}</button>
        <button class="tf-btn" id="tf-italic" title="Italic">${G.italic}</button>
        <button class="tf-btn" id="tf-underline" title="Underline">${G.underline}</button>
        <button class="tf-btn" id="tf-strike" title="Strikethrough">${G.strike}</button>
        <div class="tf-divider"></div>
        <button class="tf-btn" id="tf-list" title="List">${G.list}</button>
        <button class="tf-btn" id="tf-pen" title="Pen Style">${G.pen}</button>
        <button class="tf-btn" id="tf-code" title="Code">${G.code}</button>
        <div class="tf-divider"></div>
        <label class="tf-btn" id="tf-color-container" title="Color" style="color: #111; cursor: pointer; position: relative;">
          <div style="width:16px; height:16px; border-radius:4px; background:currentColor; border:1px solid rgba(0,0,0,0.1);"></div>
          <input type="color" id="tf-color-picker" style="opacity: 0; position: absolute; left: 0; width: 100%; height: 100%; cursor: pointer;">
        </label>
      </div>

    </div>
  `}function pe(n,e="info"){const t=document.getElementById("toast-container");if(!t)return;const r=document.createElement("div");r.className=`toast ${e}`,r.textContent=n,t.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(8px)",setTimeout(()=>r.remove(),300)},3e3)}function UA(n){const e=document.createElement("div");if(e.className="board-element",e.dataset.elementId=n.id,e.style.left=`${n.x||0}px`,e.style.top=`${n.y||0}px`,e.style.width=`${n.width||200}px`,e.style.height=n.height?`${n.height}px`:"auto",e.style.zIndex=n.zIndex||1,n.type==="image"){const t=document.createElement("div");t.className="connection-anchor connection-anchor-left",t.title="Drag to connect",t.dataset.side="left",e.appendChild(t);const r=document.createElement("div");r.className="connection-anchor connection-anchor-right",r.title="Drag to connect",r.dataset.side="right",e.appendChild(r)}switch(n.type){case"note":{const t=n.fontSize?`font-size: ${n.fontSize}px;`:"";e.innerHTML=`
        <div class="board-note color-${n.color||"yellow"}" contenteditable="false" style="${t}">${n.content||""}</div>
        <button class="note-delete">×</button>
        <div class="resize-handle se"></div>
      `;break}case"image":e.style.height=`${n.height||200}px`,e.innerHTML=`
        <div class="board-image-wrapper" style="width:100%;height:100%">
          <img src="${n.src}" alt="" loading="lazy">
          ${n.promptDesc?`<div class="image-prompt-tooltip">${n.promptDesc.replace(/"/g,"&quot;")}</div>`:""}
          <button class="image-favorite ${n.favorite?"active":""}">${n.favorite?G.heartFill:G.heart}</button>
          <div class="image-actions">
            <button class="image-action-btn" data-action="remove-bg" title="Remove Background">${G.wand}</button>
            <button class="image-action-btn" data-action="download" title="Download">${G.download}</button>
            <button class="image-action-btn" data-action="delete-img" title="Delete">${G.trash}</button>
          </div>
        </div>
        <div class="resize-handle se"></div>
      `;break;case"text":{const t=n.fontSize?`font-size: ${n.fontSize}px;`:"";e.innerHTML=`
        <div class="board-text-el" contenteditable="false" style="${t}">${n.content||"Type here..."}</div>
        <button class="note-delete">×</button>
        <div class="resize-handle se"></div>
      `,e.style.height="auto";break}case"frame":e.style.height=`${n.height||300}px`,e.innerHTML=`
        <div class="board-frame" style="width:100%;height:100%">
          <span class="board-frame-title" contenteditable="true">${n.title||"Frame"}</span>
        </div>
        <div class="resize-handle se"></div>
      `,e.style.cursor="default";break;case"carousel":e.className="board-element board-carousel-element",e.style.width="320px",e.style.height="580px",e.innerHTML=`
        <div class="phone-mockup">
          <div class="phone-frame">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <div class="instagram-header">
                <div class="ig-avatar"></div>
                <div class="ig-username">Your Story</div>
              </div>
              <div class="instagram-slider">
                <div class="ig-slides">
                  ${n.images.map(t=>`
                    <div class="ig-slide">
                      <img src="${t.src}" alt="">
                    </div>
                  `).join("")}
                </div>
                <div class="ig-pagination">
                  ${n.images.map((t,r)=>`<div class="ig-dot ${r===0?"active":""}"></div>`).join("")}
                </div>
              </div>
              <div class="instagram-footer">
                <div class="ig-actions">
                  <span class="ig-icon">❤️</span>
                  <span class="ig-icon">💬</span>
                  <span class="ig-icon">✈️</span>
                </div>
              </div>
            </div>
          </div>
          <button class="note-delete">×</button>
        </div>
      `,setTimeout(()=>{const t=e.querySelector(".ig-slides"),r=e.querySelectorAll(".ig-dot");t&&t.addEventListener("scroll",()=>{const s=Math.round(t.scrollLeft/t.offsetWidth);r.forEach((i,o)=>i.classList.toggle("active",o===s))})},100);break;case"drawing":return null}return e}function Ao(n,e=!1){e?n.forEach(s=>{if(y.selectedIds.includes(s)){y.selectedIds=y.selectedIds.filter(o=>o!==s);const i=y.elements.get(s);i!=null&&i.dom&&i.dom.classList.remove("selected")}else y.selectedIds.push(s)}):(y.selectedIds.forEach(s=>{const i=y.elements.get(s);i!=null&&i.dom&&i.dom.classList.remove("selected")}),y.selectedIds=n);const t=document.getElementById("img-ctx-menu");y.selectedIds.forEach(s=>{const i=y.elements.get(s);i!=null&&i.dom&&i.dom.classList.add("selected")});const r=y.selectedIds[y.selectedIds.length-1];if(y.selectedIds.length===1&&r){const s=y.elements.get(r);if((s==null?void 0:s.data.type)==="image"&&t){const i=s.dom.getBoundingClientRect();t.style.display="flex",t.style.left=`${i.left+i.width/2}px`,t.style.top=`${i.top-5}px`,document.getElementById("img-ctx-full").onclick=o=>{o.stopPropagation(),xg(s.data.src)},document.getElementById("img-ctx-download").onclick=o=>{o.stopPropagation();const c=document.createElement("a");c.href=s.data.src,c.download=`board-image-${Date.now()}`,document.body.appendChild(c),c.click(),document.body.removeChild(c)},document.getElementById("img-ctx-crop").onclick=o=>{o.stopPropagation(),pe("Crop feature activated"),s.dom.style.overflow="hidden"}}else t&&(t.style.display="none")}else t&&(t.style.display="none")}function $A(n,e){const t=ee.wrapper;if(!n||!t)return;n.addEventListener("dblclick",o=>{if(o.stopPropagation(),e.type==="note"||e.type==="text"){const c=n.querySelector(".board-note, .board-text-el");if(c){c.contentEditable="true",e.type==="text"&&c.innerHTML==="Type here..."&&(c.innerHTML=""),c.focus(),HA(n,e);const l=Mh(()=>{Ie(y.boardId,e.id,{content:c.innerHTML})},500);c.addEventListener("input",l),c.addEventListener("blur",()=>{c.contentEditable="false",Ie(y.boardId,e.id,{content:c.innerHTML}),setTimeout(()=>{document.activeElement.closest(".text-format-popover")||(document.getElementById("text-format-popover").style.display="none")},100)},{once:!0})}}else e.type==="image"&&xg(e.src)});const r=n.querySelector(".note-delete");r&&r.addEventListener("click",o=>{o.stopPropagation(),Rs(y.boardId,e.id)});const s=n.querySelector(".image-favorite");s&&s.addEventListener("click",o=>{o.stopPropagation();const c=!e.favorite;e.favorite=c,s.className=`image-favorite ${c?"active":""}`,s.innerHTML=c?G.heartFill:G.heart,Ie(y.boardId,e.id,{favorite:c})}),n.querySelectorAll(".connection-anchor").forEach(o=>{o.addEventListener("mousedown",c=>{c.stopPropagation(),c.preventDefault();const l=Ze(c.clientX,c.clientY);y.isConnecting=!0,y.connectionStartId=e.id;const d=document.getElementById("connection-layer");if(d){const f=document.createElementNS("http://www.w3.org/2000/svg","line"),m=o.dataset.side==="left"?e.x:e.x+(e.width||200),_=e.y+(e.height||200)/2;f.setAttribute("x1",m),f.setAttribute("y1",_),f.setAttribute("x2",l.x),f.setAttribute("y2",l.y),f.classList.add("temp-line"),d.appendChild(f),y.tempConnectionLine=f}})}),n.querySelectorAll(".image-action-btn").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation();const l=o.dataset.action;l==="remove-bg"&&Ag(e.id),l==="download"&&kg(e.src,e.fileName||"image"),l==="delete-img"&&Rs(y.boardId,e.id)})});const i=n.querySelector(".board-frame-title");if(i){const o=Mh(()=>{Ie(y.boardId,e.id,{title:i.textContent})},500);i.addEventListener("input",o),i.addEventListener("blur",()=>{Ie(y.boardId,e.id,{title:i.textContent})})}n.addEventListener("mousedown",o=>{if(y.tool!=="select"&&y.tool!=="pan"||o.target.closest('.note-delete, .image-favorite, .image-action-btn, [contenteditable="true"]'))return;if(o.target.classList.contains("resize-handle")){jA(o,e);return}o.stopPropagation(),Ao([e.id],o.shiftKey);const c=Ze(o.clientX,o.clientY);y.isDragging=!0,y.dragStart={x:c.x,y:c.y},y.dragOffset={x:c.x-(e.x||0),y:c.y-(e.y||0)};const l=f=>{if(!y.isDragging)return;const p=Ze(f.clientX,f.clientY),m=p.x-y.dragOffset.x,_=p.y-y.dragOffset.y;n.style.left=`${m}px`,n.style.top=`${_}px`,e.x=m,e.y=_},d=()=>{y.isDragging&&(y.isDragging=!1,Ie(y.boardId,e.id,{x:e.x,y:e.y})),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",d)};window.addEventListener("mousemove",l),window.addEventListener("mouseup",d)}),n.addEventListener("contextmenu",o=>{o.preventDefault(),o.stopPropagation(),Tg(o.clientX,o.clientY,e)}),n.addEventListener("click",o=>{e.type==="image"&&y.tool==="select"&&(o.stopPropagation(),Vc(e.id))})}function jA(n,e){n.stopPropagation(),n.preventDefault();const t=y.elements.get(e.id);if(!t)return;const r=t.dom;y.isResizing=!0;const s=n.clientX,i=n.clientY,o=e.width||200,c=e.height||200,l=f=>{const p=(f.clientX-s)/y.viewport.zoom,m=(f.clientY-i)/y.viewport.zoom,_=Math.max(80,o+p),C=Math.max(60,c+m);r.style.width=`${_}px`,r.style.height=`${C}px`,e.width=_,e.height=C},d=()=>{y.isResizing=!1,Ie(y.boardId,e.id,{width:e.width,height:e.height}),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",d)};window.addEventListener("mousemove",l),window.addEventListener("mouseup",d)}function Tg(n,e,t){var o;Ga();const r=document.createElement("div");r.className="context-menu",r.id="context-menu",r.style.left=`${n}px`,r.style.top=`${e}px`;let s="";t?(t.type==="note"&&(s+=`
        <button class="context-menu-item" data-action="color" data-color="yellow">🟡 Yellow</button>
        <button class="context-menu-item" data-action="color" data-color="pink">🩷 Pink</button>
        <button class="context-menu-item" data-action="color" data-color="green">🟢 Green</button>
        <button class="context-menu-item" data-action="color" data-color="blue">🔵 Blue</button>
        <button class="context-menu-item" data-action="color" data-color="purple">🟣 Purple</button>
        <div class="context-menu-divider"></div>
      `),t.type==="image"&&(s+=`
        <div class="context-menu-label">Resize Image</div>
        <button class="context-menu-item" data-action="resize" data-type="square">■ 1:1 Square (Insta)</button>
        <button class="context-menu-item" data-action="resize" data-type="reels">▯ 9:16 Reels/Story</button>
        <button class="context-menu-item" data-action="resize" data-type="landscape">▭ 16:9 Landscape</button>
        <div class="context-menu-divider"></div>
        <button class="context-menu-item" data-action="remove-bg">${G.wand} Remove Background</button>
      `,((o=y.board)==null?void 0:o.templateId)==="pro_food"&&(s+=`<button class="context-menu-item" data-action="make-pro">${G.sparkles} Make Professional</button>`),s+=`
        <button class="context-menu-item" data-action="download">${G.download} Download</button>
        <div class="context-menu-divider"></div>
      `),(t.type==="note"||t.type==="text")&&(s+=`
        <button class="context-menu-item" data-action="font-size" data-size="14">A <small>Small</small></button>
        <button class="context-menu-item" data-action="font-size" data-size="18">A <small>Medium</small></button>
        <button class="context-menu-item" data-action="font-size" data-size="24">A <small>Large</small></button>
        <button class="context-menu-item" data-action="font-size" data-size="32">A <small>X-Large</small></button>
        <div class="context-menu-divider"></div>
      `),s+=`
      <button class="context-menu-item" data-action="bring-front">↑ Bring to Front</button>
      <button class="context-menu-item" data-action="send-back">↓ Send to Back</button>
      <div class="context-menu-divider"></div>
      <button class="context-menu-item danger" data-action="delete">${G.trash} Delete</button>
    `):s+=`
      <button class="context-menu-item" data-action="add-note">${G.note} Add Note</button>
      <button class="context-menu-item" data-action="add-text">${G.text} Add Text</button>
      <button class="context-menu-item" data-action="add-frame">${G.frame} Add Frame</button>
      <div class="context-menu-divider"></div>
      <button class="context-menu-item" data-action="paste-image">${G.image} Upload Image</button>
    `,r.innerHTML=s,document.body.appendChild(r);const i=r.getBoundingClientRect();i.right>window.innerWidth&&(r.style.left=`${window.innerWidth-i.width-8}px`),i.bottom>window.innerHeight&&(r.style.top=`${window.innerHeight-i.height-8}px`),r.addEventListener("click",c=>{const l=c.target.closest(".context-menu-item");if(!l)return;const d=l.dataset.action,f=Ze(n,e);switch(d){case"color":{const p=l.dataset.color;if(t){Ie(y.boardId,t.id,{color:p});const m=y.elements.get(t.id);if(m){const _=m.dom.querySelector(".board-note");_&&(_.className=`board-note color-${p}`)}}break}case"download":t!=null&&t.src&&kg(t.src,"image");break;case"font-size":{const p=l.dataset.size;if(t){Ie(y.boardId,t.id,{fontSize:parseInt(p)}).catch(()=>{});const m=y.elements.get(t.id);if(m!=null&&m.dom){const _=m.dom.querySelector(".board-note, .board-text-el");_&&(_.style.fontSize=`${p}px`)}}break}case"bring-front":t&&Ie(y.boardId,t.id,{zIndex:mt()+1}).catch(()=>{});break;case"send-back":t&&Ie(y.boardId,t.id,{zIndex:0}).catch(()=>{});break;case"delete":if(t){const p=y.elements.get(t.id);p!=null&&p.dom&&p.dom.remove(),y.elements.delete(t.id),Rs(y.boardId,t.id).catch(()=>{})}break;case"add-note":{const p={type:"note",x:f.x,y:f.y,width:200,height:150,content:"",color:y.noteColor,zIndex:mt()+1};W(y.boardId,p).catch(()=>{});break}case"add-text":{const p={type:"text",x:f.x,y:f.y,width:200,content:"Type here...",zIndex:mt()+1};W(y.boardId,p).catch(()=>{});break}case"add-frame":{const p={type:"frame",x:f.x,y:f.y,width:400,height:300,title:"Frame",zIndex:0};W(y.boardId,p).catch(()=>{});break}case"resize":qA(t==null?void 0:t.id,l.dataset.type);break;case"make-pro":zA(t==null?void 0:t.id);break;case"remove-bg":Ag(t==null?void 0:t.id);break}Ga()}),setTimeout(()=>{document.addEventListener("click",Ga,{once:!0})},10)}async function Ag(n){const e=y.elements.get(n);if(!e||e.data.type!=="image")return;const{dom:t,data:r}=e,s=document.createElement("div");s.className="processing-overlay",s.innerHTML=`
    <div class="processing-spinner"></div>
    <div class="processing-text">Removing Background...</div>
  `,t.appendChild(s);try{pe("Starting background removal...","info");const i=await FA(r.src,l=>{s.querySelector(".processing-text").textContent=l});pe("Uploading result...","info");const o=new File([i],`removed-bg-${Date.now()}.png`,{type:"image/png"}),{url:c}=await Ir(o,y.boardId);await Ie(y.boardId,n,{src:c}),pe("Background removed successfully!","success")}catch(i){console.error(i),pe("Failed to remove background","error")}finally{s.remove()}}async function zA(n){const e=y.elements.get(n);if(!e)return;const t=document.createElement("div");t.className="processing-overlay",t.innerHTML=`
    <div class="processing-spinner"></div>
    <div class="processing-text">Transforming into Professional Gourmet Shot...</div>
  `,e.dom.appendChild(t);try{pe("AI is restyling your plate...","info"),setTimeout(async()=>{await Ie(y.boardId,n,{src:"/templates/pro_burger.png"}),pe("Masterpiece created!","success"),t.remove()},2500)}catch{t.remove(),pe("AI Transformation failed","error")}}async function qA(n,e){const t=y.elements.get(n);if(!t||t.data.type!=="image")return;let r=t.data.width||300,s=t.data.height||200;e==="square"?(r=800,s=800):e==="reels"?(r=600,s=1066):e==="landscape"&&(r=1066,s=600),pe(`Resizing to ${e}...`,"info"),Ie(y.boardId,n,{width:r,height:s})}function Ga(){var n;(n=document.getElementById("context-menu"))==null||n.remove()}function mt(){let n=0;return y.elements.forEach(e=>{var r;const t=((r=e.data)==null?void 0:r.zIndex)||0;t>n&&(n=t)}),n}function xg(n){const e=document.createElement("div");e.className="lightbox-overlay",e.innerHTML=`
    <img class="lightbox-image" src="${n}" alt="">
    <button class="lightbox-close">×</button>
  `,document.body.appendChild(e),e.addEventListener("click",t=>{(t.target===e||t.target.classList.contains("lightbox-close"))&&(e.style.opacity="0",setTimeout(()=>e.remove(),250))})}function kg(n,e){const t=document.createElement("a");t.href=n,t.download=e,t.target="_blank",document.body.appendChild(t),t.click(),t.remove()}function HA(n,e){const t=document.getElementById("text-format-popover");if(!t)return;const r=n.getBoundingClientRect();t.style.display="flex";const s=t.offsetWidth||400;t.style.left=`${r.left+r.width/2-s/2}px`,t.style.top=`${r.top-60}px`;const i=t.getBoundingClientRect();i.left<10&&(t.style.left="10px"),i.right>window.innerWidth-10&&(t.style.left=`${window.innerWidth-i.width-10}px`);const o=document.getElementById("tf-current-size");if(o){const p={14:"Small",18:"Medium",24:"Large",32:"Extra Large"};o.textContent=p[e.fontSize]||"Medium"}const c=n.querySelector(".board-note, .board-text-el"),l=(p,m=null)=>{document.execCommand(p,!1,m),c.focus(),Ie(y.boardId,e.id,{content:c.innerHTML})};document.getElementById("tf-bold").onclick=()=>l("bold"),document.getElementById("tf-italic").onclick=()=>l("italic"),document.getElementById("tf-underline").onclick=()=>l("underline"),document.getElementById("tf-strike").onclick=()=>l("strikeThrough"),document.getElementById("tf-list").onclick=()=>l("insertUnorderedList"),document.getElementById("tf-code").onclick=()=>l("formatBlock","<pre>"),document.querySelectorAll("#tf-size-dropdown .tf-dropdown-menu button").forEach(p=>{p.onclick=()=>{const m=parseInt(p.dataset.size);c.style.fontSize=`${m}px`,Ie(y.boardId,e.id,{fontSize:m}),o.textContent=p.textContent}});const d=document.getElementById("tf-color-picker"),f=document.getElementById("tf-color-container");d.oninput=p=>{const m=p.target.value;f.style.color=m,document.execCommand("foreColor",!1,m),Ie(y.boardId,e.id,{content:c.innerHTML})}}function WA(){const n=ee.wrapper,e=document.getElementById("board-page");if(!n)return;const t=s=>{if(!s.target.closest(".board-element, .board-toolbar, .board-topbar, .context-menu, .modal-overlay, .lightbox-overlay, .zoom-indicator, .toast-container")&&!(y.tool==="draw"||y.tool==="eraser")){if(y.tool==="select"&&Ao([]),y.tool==="note"){const i=Ze(s.clientX,s.clientY),o={type:"note",x:i.x,y:i.y,width:200,height:150,content:"",color:y.noteColor,zIndex:mt()+1};W(y.boardId,o).catch(c=>console.error("Note save error:",c)),De("select");return}if(y.tool==="text"){const i=Ze(s.clientX,s.clientY),o={type:"text",x:i.x,y:i.y,width:200,content:"Type here...",zIndex:mt()+1};W(y.boardId,o).catch(c=>console.error("Text save error:",c)),De("select");return}if(y.tool==="frame"){const i=Ze(s.clientX,s.clientY),o={type:"frame",x:i.x,y:i.y,width:400,height:300,title:"Frame",zIndex:0};W(y.boardId,o).catch(c=>console.error("Frame save error:",c)),De("select");return}(y.tool==="pan"||y.tool==="select"||s.button===1)&&(y.isPanning=!0,y.panStart={x:s.clientX-y.viewport.x,y:s.clientY-y.viewport.y},n.classList.add("panning"))}};e.addEventListener("mousedown",t),window.addEventListener("mousemove",s=>{const i=Ze(s.clientX,s.clientY);if(y.isConnecting&&y.tempConnectionLine){y.tempConnectionLine.setAttribute("x2",i.x),y.tempConnectionLine.setAttribute("y2",i.y);return}y.isPanning&&(y.viewport.x=s.clientX-y.panStart.x,y.viewport.y=s.clientY-y.panStart.y,_s());const o=Date.now();if(o-y.lastPresenceUpdate>200){y.lastPresenceUpdate=o;const c=Ze(s.clientX,s.clientY);Nm(y.boardId,c.x,c.y).catch(()=>{})}}),window.addEventListener("mouseup",s=>{var i;if(y.isConnecting){const o=s.target.closest(".board-element"),c=o==null?void 0:o.dataset.elementId;if(c&&c!==y.connectionStartId){const l={type:"connection",from:y.connectionStartId,to:c,zIndex:0};W(y.boardId,l).catch(()=>{})}y.isConnecting=!1,y.connectionStartId=null,(i=y.tempConnectionLine)==null||i.remove(),y.tempConnectionLine=null;return}y.isPanning&&(y.isPanning=!1,n.classList.remove("panning"))}),n.addEventListener("wheel",s=>{s.preventDefault();const i=.08,o=s.deltaY>0?-i:i,c=Math.min(5,Math.max(.1,y.viewport.zoom*(1+o))),l=s.clientX,d=s.clientY;y.viewport.x=l-(l-y.viewport.x)*(c/y.viewport.zoom),y.viewport.y=d-(d-y.viewport.y)*(c/y.viewport.zoom),y.viewport.zoom=c,_s()},{passive:!1});const r=s=>{!s.target.closest(".board-element, .board-toolbar, .board-topbar, .zoom-indicator")&&(s.preventDefault(),Tg(s.clientX,s.clientY,null))};n.addEventListener("contextmenu",r),document.addEventListener("keydown",ee.keyHandler=s=>{var i;if(!(s.target.isContentEditable||s.target.tagName==="INPUT"||s.target.tagName==="TEXTAREA")){switch(s.code==="Space"&&!y.isPanning&&(s.preventDefault(),n.style.cursor="grab",y._prevTool=y.tool,y.tool="pan"),s.key.toLowerCase()){case"v":De("select");break;case"h":De("pan");break;case"n":De("note");break;case"t":De("text");break;case"d":y.drawShape="doodle",De("draw");break;case"r":y.drawShape="rectangle",De("draw");break;case"a":y.drawShape="arrow",De("draw");break;case"l":y.drawShape="line",De("draw");break;case"o":y.drawShape="ellipse",De("draw");break;case"e":De("eraser");break;case"f":De("frame");break;case"i":(i=document.getElementById("file-input"))==null||i.click();break;case"delete":case"backspace":y.selectedIds.length>0&&!s.target.isContentEditable&&(s.preventDefault(),y.selectedIds.forEach(o=>Rs(y.boardId,o)),Ao([]));break}(s.ctrlKey||s.metaKey)&&(s.key==="="||s.key==="+")&&(s.preventDefault(),Fh(.15)),(s.ctrlKey||s.metaKey)&&s.key==="-"&&(s.preventDefault(),Fh(-.15)),(s.ctrlKey||s.metaKey)&&s.key==="0"&&(s.preventDefault(),y.viewport={x:0,y:0,zoom:1},_s())}}),document.addEventListener("keyup",ee.keyUpHandler=s=>{s.code==="Space"&&y._prevTool&&(y.tool=y._prevTool,y._prevTool=null,Sg())})}function Fh(n){const e=window.innerWidth/2,t=window.innerHeight/2,r=Math.min(5,Math.max(.1,y.viewport.zoom*(1+n)));y.viewport.x=e-(e-y.viewport.x)*(r/y.viewport.zoom),y.viewport.y=t-(t-y.viewport.y)*(r/y.viewport.zoom),y.viewport.zoom=r,_s()}function GA(){const n=ee.drawCanvas;if(!n)return;function e(){n.width=window.innerWidth,n.height=window.innerHeight,l()}window.addEventListener("resize",e),e();const t=n.getContext("2d"),r=d=>d.touches&&d.touches.length>0?{x:d.touches[0].clientX,y:d.touches[0].clientY}:d.changedTouches&&d.changedTouches.length>0?{x:d.changedTouches[0].clientX,y:d.changedTouches[0].clientY}:{x:d.clientX,y:d.clientY},s=d=>{if(y.tool!=="draw"&&y.tool!=="eraser")return;y.isDrawing=!0;const f=r(d),p=Ze(f.x,f.y);y.drawingPoints=[{x:p.x,y:p.y}]},i=d=>{if(!y.isDrawing)return;const f=r(d),p=Ze(f.x,f.y);y.drawingPoints.push({x:p.x,y:p.y}),l()},o=()=>{if(y.isDrawing){if(y.isDrawing=!1,y.drawingPoints.length>1){const f=y.drawShape!=="doodle"&&y.tool!=="eraser"?[y.drawingPoints[0],y.drawingPoints[y.drawingPoints.length-1]]:y.drawingPoints,p={type:"drawing",shape:y.tool==="eraser"?"eraser":y.drawShape,points:f.map(_=>({x:Math.round(_.x),y:Math.round(_.y)})),color:y.tool==="eraser"?"#e8e8e8":y.drawColor,lineWidth:y.tool==="eraser"?20:y.drawWidth,zIndex:mt()+1},m="temp_draw_"+Date.now();y.elements.set(m,{data:{...p,id:m},dom:null}),W(y.boardId,p).then(()=>{y.elements.delete(m),l()}).catch(_=>{console.error("Save stroke fail",_),y.elements.delete(m),l()})}y.drawingPoints=[],l()}};n.addEventListener("mousedown",s),n.addEventListener("mousemove",i),window.addEventListener("mouseup",o),n.addEventListener("touchstart",d=>{d.preventDefault(),s(d)},{passive:!1}),n.addEventListener("touchmove",d=>{d.preventDefault(),i(d)},{passive:!1}),window.addEventListener("touchend",o);const c=(d,f,p)=>{const m=O=>O.x!==void 0?O.x:O[0],_=O=>O.y!==void 0?O.y:O[1],C=f[0],x=f[f.length-1],A=Wa(m(C),_(C)),D=Wa(m(x),_(x));if(p==="rectangle")d.strokeRect(A.x,A.y,D.x-A.x,D.y-A.y);else if(p==="ellipse")d.beginPath(),d.ellipse(A.x+(D.x-A.x)/2,A.y+(D.y-A.y)/2,Math.abs((D.x-A.x)/2),Math.abs((D.y-A.y)/2),0,0,2*Math.PI),d.stroke();else if(p==="arrow"){d.beginPath(),d.moveTo(A.x,A.y),d.lineTo(D.x,D.y);const O=Math.atan2(D.y-A.y,D.x-A.x),B=15*y.viewport.zoom;d.lineTo(D.x-B*Math.cos(O-Math.PI/6),D.y-B*Math.sin(O-Math.PI/6)),d.moveTo(D.x,D.y),d.lineTo(D.x-B*Math.cos(O+Math.PI/6),D.y-B*Math.sin(O+Math.PI/6)),d.stroke()}else if(p==="line")d.beginPath(),d.moveTo(A.x,A.y),d.lineTo(D.x,D.y),d.stroke();else if(p==="triangle")d.beginPath(),d.moveTo(A.x+(D.x-A.x)/2,A.y),d.lineTo(D.x,D.y),d.lineTo(A.x,D.y),d.closePath(),d.stroke();else if(p==="diamond")d.beginPath(),d.moveTo(A.x+(D.x-A.x)/2,A.y),d.lineTo(D.x,A.y+(D.y-A.y)/2),d.lineTo(A.x+(D.x-A.x)/2,D.y),d.lineTo(A.x,A.y+(D.y-A.y)/2),d.closePath(),d.stroke();else{d.beginPath(),d.moveTo(A.x,A.y);for(let O=1;O<f.length;O++){const B=Wa(m(f[O]),_(f[O]));d.lineTo(B.x,B.y)}d.stroke()}};ee.redrawStrokes=function(){t.clearRect(0,0,n.width,n.height),y.elements.forEach(f=>{const p=f.data;p.type!=="drawing"||!p.points||p.points.length<2||(t.save(),p.shape==="eraser"?(t.globalCompositeOperation="destination-out",t.strokeStyle="rgba(0,0,0,1)"):t.strokeStyle=p.color||"#111",t.lineWidth=(p.lineWidth||3)*y.viewport.zoom,t.lineCap="round",t.lineJoin="round",c(t,p.points,p.shape||"doodle"),t.restore())}),y.drawingPoints.length>1&&(t.save(),y.tool==="eraser"?(t.globalCompositeOperation="destination-out",t.strokeStyle="rgba(0,0,0,1)"):t.strokeStyle=y.drawColor,t.lineWidth=(y.tool==="eraser"?y.drawWidth*2:y.drawWidth)*y.viewport.zoom,t.lineCap="round",t.lineJoin="round",c(t,y.drawingPoints,y.tool==="eraser"?"eraser":y.drawShape),t.restore())};function l(){ee.redrawStrokes&&ee.redrawStrokes()}ee._resizeCanvas=e}function KA(){const n=ee.wrapper;if(!n)return;let e=null;n.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="copy",e||(e=document.createElement("div"),e.className="drop-zone-overlay",e.innerHTML='<div class="drop-zone-label">📎 Drop files here</div>',document.body.appendChild(e))}),n.addEventListener("dragleave",r=>{r.relatedTarget&&n.contains(r.relatedTarget)||(e==null||e.remove(),e=null)}),n.addEventListener("drop",async r=>{r.preventDefault(),e==null||e.remove(),e=null;const s=Array.from(r.dataTransfer.files).filter(o=>o.type.startsWith("image/"));if(s.length===0){pe("Only image files are supported","error");return}const i=Ze(r.clientX,r.clientY);for(let o=0;o<s.length;o++){const c=s[o];pe(`Uploading ${c.name}...`);try{const{url:l}=await Ir(c,y.boardId),d=new Image;d.src=l,await new Promise(m=>d.onload=m);const f={type:"image",x:i.x+o*30,y:i.y+o*30,width:d.width>800?800:d.width,height:d.width>800?800/d.width*d.height:d.height,src:l,fileName:c.name,favorite:!1,zIndex:mt()+1},p="ai_up_"+Date.now();W(y.boardId,f).then(()=>{y.currentTemplate&&Vc(p)}).catch(()=>{}),pe(`${c.name} uploaded!`,"success")}catch(l){console.error("Upload error:",l),pe(`Failed to upload ${c.name}`,"error")}}});const t=document.getElementById("file-input");t&&t.addEventListener("change",async r=>{const s=Array.from(r.target.files).filter(o=>o.type.startsWith("image/")),i=Ze(window.innerWidth/2,window.innerHeight/2);for(let o=0;o<s.length;o++){const c=s[o];pe(`Uploading ${c.name}...`);try{const{url:l}=await Ir(c,y.boardId),d=new Image;d.src=l,await new Promise(m=>d.onload=m);const f={type:"image",x:i.x+o*30,y:i.y+o*30,width:d.width>800?800:d.width,height:d.width>800?800/d.width*d.height:d.height,src:l,fileName:c.name,favorite:!1,zIndex:mt()+1},p="ai_img_"+Date.now();W(y.boardId,f).then(()=>{y.currentTemplate&&Vc(p)}).catch(()=>{}),pe(`${c.name} uploaded!`,"success")}catch(l){console.error("Upload error:",l),pe(`Failed to upload ${c.name}`,"error")}}t.value=""})}function ZA(){const n=document.getElementById("board-toolbar");if(!n)return;n.addEventListener("mousedown",t=>{t.stopPropagation()}),n.addEventListener("click",t=>{var o,c;t.stopPropagation();const r=t.target.closest(".toolbar-btn"),s=t.target.closest(".submenu-item");if(s){const l=s.dataset.shape,d=s.dataset.tool||"draw";if(y.drawShape=l,De(d),document.querySelectorAll(".submenu-item").forEach(f=>{f.classList.toggle("active",f.dataset.shape===l)}),l!=="eraser"){const f=document.getElementById("btn-draw");if(f){const p=l==="doodle"?"pencil":l+"_tool";G[p]&&(f.innerHTML=G[p])}}return}if(!r||r.dataset.tool==="image-gen")return;const i=r.dataset.tool;if(i){if(i==="image"){(o=document.getElementById("file-input"))==null||o.click();return}if(i==="draw"){const l=r.closest(".wrap-draw");if(l){const d=l.classList.contains("show-submenu");document.querySelectorAll(".wrap-draw").forEach(f=>f.classList.remove("show-submenu")),d||l.classList.add("show-submenu")}}else(c=document.querySelector(".wrap-draw"))==null||c.classList.remove("show-submenu");De(i);return}if(r.id==="color-picker-btn"){const l=document.getElementById("color-picker-popup");l==null||l.classList.toggle("visible")}}),document.addEventListener("click",()=>{var t,r;(t=document.querySelector('.toolbar-btn[data-tool="draw"]'))==null||t.classList.remove("show-submenu"),(r=document.getElementById("color-picker-popup"))==null||r.classList.remove("visible")});const e=document.getElementById("color-picker-popup");e&&e.addEventListener("click",t=>{const r=t.target.closest(".color-swatch");if(!r)return;t.stopPropagation();const s=r.dataset.color;y.drawColor=s;const i={"#fef3c7":"yellow","#FEF3C7":"yellow","#fce7f3":"pink","#FCE7F3":"pink","#dcfce7":"green","#DCFCE7":"green","#dbeafe":"blue","#DBEAFE":"blue","#ede9fe":"purple","#EDE9FE":"purple"};i[s]&&(y.noteColor=i[s]),e.querySelectorAll(".color-swatch").forEach(c=>c.classList.remove("active")),r.classList.add("active");const o=document.getElementById("color-picker-btn");o&&(o.style.color=s),e.classList.remove("visible")})}function De(n){y.tool=n,document.querySelectorAll(".toolbar-btn[data-tool]").forEach(t=>{t.classList.toggle("active",t.dataset.tool===n)}),Sg();const e=ee.drawCanvas;if(e){const t=n==="draw"||n==="eraser";e.classList.toggle("active",t)}}function Sg(){const n=ee.wrapper;n&&(n.className="canvas-wrapper",y.tool==="pan"?n.style.cursor="grab":y.tool==="draw"||y.tool==="eraser"?n.classList.add("tool-draw"):y.tool==="text"?n.classList.add("tool-text"):y.tool==="note"?n.classList.add("tool-note"):n.style.cursor="default")}function YA(){var r,s,i;(r=document.getElementById("topbar-back"))==null||r.addEventListener("click",()=>{window.location.hash="#/"});const n=document.createElement("button");n.className="topbar-btn",n.id="topbar-theme-toggle",n.innerHTML='<span id="topbar-theme-icon"></span>',(s=document.querySelector(".topbar-right"))==null||s.prepend(n);const e=()=>{const o=document.getElementById("topbar-theme-icon");if(!o)return;const c=document.documentElement.getAttribute("data-theme")==="dark";o.innerHTML=c?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'};n.addEventListener("click",()=>{const c=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",c),localStorage.setItem("theme",c),e()}),e();const t=document.getElementById("board-name-editable");t&&(t.addEventListener("blur",()=>{var c;const o=t.textContent.trim();o&&o!==((c=y.board)==null?void 0:c.name)&&ta(y.boardId,{name:o})}),t.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),t.blur())})),(i=document.getElementById("topbar-share"))==null||i.addEventListener("click",()=>{const o=window.location.href;navigator.clipboard.writeText(o).then(()=>{pe("Board URL copied to clipboard!","success")}).catch(()=>{pe("Failed to copy URL","error")})})}function XA(){var e;const n=document.createElement("div");n.id="cursors-container",n.style.cssText="position:absolute;top:0;left:0;pointer-events:none;z-index:50;",(e=ee.container)==null||e.appendChild(n),ds=Dm(y.boardId,t=>{n.innerHTML="",Object.values(t).forEach(r=>{const s=document.createElement("div");s.className="user-cursor",s.style.left=`${r.cursorX||0}px`,s.style.top=`${r.cursorY||0}px`,s.innerHTML=`
        <svg class="user-cursor-arrow" viewBox="0 0 24 24" fill="${r.color}" stroke="white" stroke-width="1.5">
          <path d="M5 3l14 7-7 2-2 7L5 3z"/>
        </svg>
        <span class="user-cursor-label" style="background:${r.color}">${r.name||"User"}</span>
      `,n.appendChild(s)})})}function QA(){us=Rm(y.boardId,{onAdd:n=>{var t,r;if(console.log("[Sync] onAdd fired:",n.id,n.type),n.type==="connection"){y.elements.set(n.id,{data:n,dom:null}),Ka();return}if(n.type==="drawing"){y.elements.set(n.id,{data:n,dom:null}),(t=ee.redrawStrokes)==null||t.call(ee);return}if(y.elements.has(n.id)){console.log("[Sync] Skipping duplicate:",n.id);return}const e=UA(n);console.log("[Sync] DOM created:",!!e,"container:",!!ee.container),e&&((r=ee.container)==null||r.appendChild(e),y.elements.set(n.id,{data:n,dom:e}),$A(e,n),console.log("[Sync] Element added to DOM:",n.id,"at",n.x,n.y))},onModify:n=>{var r;const e=y.elements.get(n.id);if(!e)return;if(e.data={...e.data,...n},n.type==="drawing"){(r=ee.redrawStrokes)==null||r.call(ee);return}const t=e.dom;if(t){if(n.x!==void 0&&(t.style.left=`${n.x}px`),n.y!==void 0&&(t.style.top=`${n.y}px`),n.width!==void 0&&(t.style.width=`${n.width}px`),n.height!==void 0&&(t.style.height=`${n.height}px`),n.zIndex!==void 0&&(t.style.zIndex=n.zIndex),n.type==="note"){const s=t.querySelector(".board-note");s&&!s.matches(":focus")&&(s.innerHTML=n.content||"",s.className=`board-note color-${n.color||"yellow"}`)}if(n.type==="text"){const s=t.querySelector(".board-text-el");s&&!s.matches(":focus")&&(s.innerHTML=n.content||"")}if(n.type==="image"){const s=t.querySelector(".image-favorite");s&&(s.className=`image-favorite ${n.favorite?"active":""}`,s.innerHTML=n.favorite?G.heartFill:G.heart)}if(n.type==="frame"){const s=t.querySelector(".board-frame-title");s&&!s.matches(":focus")&&(s.textContent=n.title||"Frame")}n.type,n.type==="connection"&&Ka()}},onRemove:n=>{var t;const e=y.elements.get(n.id);e!=null&&e.dom&&e.dom.remove(),y.elements.delete(n.id),y.selectedIds.includes(n.id)&&Ao(y.selectedIds.filter(r=>r!==n.id)),n.type==="drawing"&&((t=ee.redrawStrokes)==null||t.call(ee)),n.type==="connection"&&Ka()}})}async function JA(n,e){y.boardId=e,y.elements.clear(),y.selectedIds=[];try{y.board=await Am(e)}catch(t){console.warn("Failed to load board:",t)}n.innerHTML=BA(y.board),ee.wrapper=document.getElementById("canvas-wrapper"),ee.container=document.getElementById("canvas-container"),ee.drawCanvas=document.getElementById("drawing-canvas"),ee.zoomIndicator=document.getElementById("zoom-indicator"),_s(),WA(),GA(),ZA(),YA(),KA();try{console.log("[Board] Setting up element sync for board:",e),QA(),console.log("[Board] Element sync setup complete");const t=window.location.hash.split("?")[1]||"",r=new URLSearchParams(t),s=r.get("template")||"general";y.currentTemplate=r.get("template"),setTimeout(async()=>{try{y.elements.size===0&&(console.log("[Board] Seeding template/header:",s),await tx(e,s),console.log("[Board] Seeding complete"))}catch(i){console.error("[Board] Seeding failed:",i)}},2500)}catch(t){console.error("[Board] setupElementSync FAILED:",t)}try{XA()}catch(t){console.warn("[Board] Presence setup failed:",t)}try{typeof $h=="function"&&$h(),typeof jh=="function"&&jh()}catch(t){console.error("[Board] Gemini setup failed:",t)}Ki=setInterval(()=>{},3e4),window.addEventListener("beforeunload",()=>{Ll(e).catch(()=>{})})}function ex(){us==null||us(),us=null,ds==null||ds(),ds=null,y.boardId&&Ll(y.boardId).catch(()=>{}),ee.keyHandler&&document.removeEventListener("keydown",ee.keyHandler),ee.keyUpHandler&&document.removeEventListener("keyup",ee.keyUpHandler),Ki&&clearInterval(Ki),Ki=null,y.elements.clear(),ee={}}const ur="AIzaSyCwRpjCIUStELEZz6VIlfY46g6wbjlZpPI",Bh={before_after:"Selam! Dönüşüm projende sana yardımcı olabilirim. Bana bir fotoğraf yükle, bende onun 'öncesi' veya 'sonrası' halini oluşturayım. Hangi tarzda bir değişim istersin?",pro_food:"Harika bir yemek çekimi için hazırız! Plate'i profesyonelce düzenleyebilirim. Görselini buraya sürükle, profesyonel dokunuşları ben yapayım. Hangi tarz ışık istersin?",redesign_room:"Odanı yeniden tasarlayalım mı? İstediğin tarzı söyle (Modern, Klasik vb.) ve odanın fotoğrafını at, hemen başlayalım!",instagram_pro:"Burası senin Instagram strateji merkezin! 🚀 Başlamadan önce seni tanımam lazım: Kaç takipçin var? Ana hedefin nedir (Büyüme, satış vb.)? Şu an kullandığın hook'lardan bir örnek verir misin? Ayrıca analiz etmemi istediğin postlarını buraya yükleyebilirsin!"},Uh={before_after:"Create a high-end comparison image. Transform the original into a stunning, professional version. Style: {user_input}. Ensure hyper-realistic textures and dramatic lighting.",pro_food:"Apply professional food photography styling. Enhance realism with natural lighting, steam, and vibrant colors. Context: {user_input}. Gourmet presentation.",redesign_room:"Complete interior redesign. Transform the space into a {user_input} style room. Professional architectural photography, 8k resolution, cinematic lighting.",instagram_pro:"You are a world-class Instagram Content Strategist. Analyze the provided image (post) and user data (followers: {followers}, goal: {goal}, hook: {hook}). Provide actionable device on: 1. Visual Appeal 2. Hook Strength 3. Engagement Strategy. User request: {user_input}. Reply in Turkish."};function $h(){const n=document.getElementById("chat-sidebar"),e=document.getElementById("toolbar-chatbot-btn"),t=document.getElementById("chat-close"),r=document.getElementById("chat-input"),s=document.getElementById("chat-send"),i=document.getElementById("chat-content");e&&e.addEventListener("click",()=>{n.classList.toggle("open")}),t&&t.addEventListener("click",()=>{n.classList.remove("open")});const o=`gemini_chat_${window.location.hash.split("/")[2]}`;(()=>{try{const x=JSON.parse(localStorage.getItem(o))||[];if(x.length===0){const A=window.location.hash.split("?")[1]||"",O=new URLSearchParams(A).get("template");O&&Bh[O]&&setTimeout(()=>{l(Bh[O],!1),n.classList.add("open")},1e3)}x.forEach(A=>{const D=document.createElement("div");D.className=`chat-bubble ${A.isUser?"user":"ai"}`,D.textContent=A.text,i.appendChild(D)}),i.scrollTop=i.scrollHeight}catch{}})();const l=(x,A=!1)=>{const D=document.createElement("div");D.className=`chat-bubble ${A?"user":"ai"}`,D.textContent=x,i.appendChild(D),i.scrollTop=i.scrollHeight;try{const O=JSON.parse(localStorage.getItem(o))||[];O.push({text:x,isUser:A}),localStorage.setItem(o,JSON.stringify(O))}catch{}},d=async x=>{var A,D,O,B;try{l(x,!0),r.value="";const q=y.currentTemplate,he=y.replyElementId;let se=null;if(he){const w=y.elements.get(he);if(w&&w.data.type==="image")try{const T=w.data.src;let b="",k="image/png";if(T.startsWith("data:")){const E=T.split(",");k=E[0].split(":")[1].split(";")[0],b=E[1]}else{const Re=await(await fetch(T)).blob();k=Re.type,b=await new Promise(Je=>{const ot=new FileReader;ot.onloadend=()=>Je(ot.result.split(",")[1]),ot.readAsDataURL(Re)})}se={inline_data:{mime_type:k,data:b}}}catch(T){console.error("Image process error:",T)}}if(q&&he&&Uh[q]){const w=y.elements.get(he);if(w&&w.data.type==="image"){let T=`You are a design assistant for the '${q}' template. The user uploaded an image and said: "${x}".`;q==="instagram_pro"&&(T=`You are a world-class Instagram Content Strategist for the 'instagram_pro' template. Analyze the visual elements, text, and aesthetics of the provided post. User request: "${x}". Provide strategic advice based on visual appeal and expected engagement. Reply in Turkish.`);const b=[{text:`${T} Is this enough detail to provide professional value? If YES, output exactly "READY: [detailed feedback/strategy if instagram_pro, OR detailed prompt if other templates]". If NO, output a short question to ask the user for missing details in Turkish.`}];se&&b.push(se);const Re=((D=(A=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:b}]})})).json()).candidates)==null?void 0:A[0])==null?void 0:D.content.parts[0].text)||"";if(Re.startsWith("READY:")){const Je=Re.replace("READY:","").trim();if(q==="instagram_pro")l(Je,!1);else{const ot=Uh[q].replace("{user_input}",Je);l("Tasarım detayları hazırlandı. Görsel oluşturuluyor...",!1),await zh(ot,w.data.x+(w.data.width||300)+40,w.data.y),l("Dönüşüm tamamlandı! Yeni görsel tahtaya eklendi.",!1)}Za()}else l(Re,!1);return}}if(y.replyElementId){const w=y.elements.get(y.replyElementId);if(w&&w.data.type==="image"){l("Görsel üzerinde çalışıyorum...",!1);const T=[{text:`User wants to modify this image. User request: "${x}". Create a professional, highly detailed prompt for an image generator (like Imagen) to create a new version inspired by this content. ONLY output the prompt.`}];se&&T.push(se);const E=((B=(O=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:T}]})})).json()).candidates)==null?void 0:O[0])==null?void 0:B.content.parts[0].text)||x;await zh(E,w.data.x+(w.data.width||300)+40,w.data.y),l("İşlem tamam! Yeni görsel eklendi.",!1),Za();return}}const v=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"You are a creative assistant helping the user with their design board. Reply in Turkish unless asked otherwise. Prompt: "+x}]}]})})).json();v.candidates&&v.candidates[0]?l(v.candidates[0].content.parts[0].text,!1):l("Üzgünüm, şu an yanıt veremiyorum.",!1)}catch(q){console.error(q),l("Gemini ile iletişim kurulurken hata oluştu.",!1)}};s&&(s.addEventListener("click",()=>{r.value.trim()&&d(r.value.trim())}),r.addEventListener("keypress",x=>{x.key==="Enter"&&r.value.trim()&&d(r.value.trim())}));const f=document.getElementById("btn-auto-layout");f&&f.addEventListener("click",()=>nx()),btnClearReply&&btnClearReply.addEventListener("click",x=>{x.stopPropagation(),Za()});const p=document.getElementById("tool-image-gen"),m=document.getElementById("image-gen-popup"),_=document.getElementById("ig-generate-btn"),C=document.getElementById("ig-prompt");if(m&&m.addEventListener("mousemove",x=>{const A=m.getBoundingClientRect(),D=x.clientX-A.left,O=x.clientY-A.top;m.style.setProperty("--mouse-x",`${D}px`),m.style.setProperty("--mouse-y",`${O}px`)}),p&&p.addEventListener("click",x=>{x.stopPropagation(),m.classList.toggle("active")}),m){m.addEventListener("click",A=>A.stopPropagation()),document.addEventListener("click",A=>{!A.target.closest("#image-gen-popup")&&!A.target.closest("#tool-image-gen")&&m.classList.remove("active")});const x=document.getElementById("ig-close");x&&x.addEventListener("click",()=>m.classList.remove("active"))}_&&_.addEventListener("click",async()=>{var D,O,B,q,he,se,I,v;const x=C.value.trim();if(!x)return;const A=_.textContent;_.textContent="✨ Enchanting Prompt...",_.style.opacity="0.5",_.style.pointerEvents="none";try{const w=((D=document.getElementById("ig-camera"))==null?void 0:D.value)||"",T=((O=document.getElementById("ig-style"))==null?void 0:O.value)||"",b=[w,T].filter(Boolean).join(", "),k=b?` Also, strictly apply these visual styles and camera effects to the prompt: ${b}`:"",Je=((q=(B=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"Rewrite this prompt to be extremely detailed, hyperrealistic, high-quality, and photographic, suitable for a professional image generator. Only output the enhanced prompt, nothing else. Original: "+x+k}]}]})})).json()).candidates)==null?void 0:B[0])==null?void 0:q.content.parts[0].text)||x+(b?", "+b:"");let ot=0;_.textContent="Generating Imagen 4.0 Image (0%)...";const An=((he=document.getElementById("ig-size"))==null?void 0:he.value)||"1920x1080",Ur={"1024x1024":"1:1","1920x1080":"16:9","1080x1920":"9:16"}[An]||"16:9",xn=((se=document.getElementById("ig-quality"))==null?void 0:se.value)||"standard";let Yn="imagen-4.0-fast-generate-001";xn==="4k"&&(Yn="imagen-4.0-generate-001"),xn==="8k"&&(Yn="imagen-4.0-ultra-generate-001");let lt=xn==="8k"?Je+", 8k resolution, ultra detailed, masterpiece":xn==="4k"?Je+", 4k resolution, high quality":Je;const xe=setInterval(()=>{ot+=Math.floor(Math.random()*8)+2,ot>95&&(ot=95),_.textContent=`Generating Imagen 4.0 Image (${ot}%)...`},300),$r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${Yn}:predict?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instances:[{prompt:lt}],parameters:{sampleCount:1,aspectRatio:Ur}})});if(!$r.ok)throw new Error("Imagen 4.0 API Error: "+$r.status);const ui=(v=(I=(await $r.json()).predictions)==null?void 0:I[0])==null?void 0:v.bytesBase64Encoded;if(!ui)throw new Error("No image data returned from Gemini");const kn=`data:image/png;base64,${ui}`,la=await(await fetch(kn)).blob(),Sn=new File([la],`gemini_${Date.now()}.png`,{type:"image/png"});_.textContent="Compressing High-Res Image (98%)...";let Pt="";try{const{url:vt}=await Ir(Sn,y.boardId);Pt=vt}catch(vt){console.error("Storage upload error:",vt),Pt=kn}const Nt=new Image;Nt.onload=()=>{clearInterval(xe),_.textContent="Generating Imagen 4.0 Image (100%)...",setTimeout(()=>{const vt=Nt.width||1024,Qn=Nt.height||1024,Jn=typeof Ze<"u"?Ze(window.innerWidth/2,window.innerHeight/2):{x:100,y:100},di={type:"image",x:Jn.x-vt/2,y:Jn.y-Qn/2,width:parseInt(vt),height:parseInt(Qn),src:Pt,fileName:Sn.name,favorite:!0,zIndex:typeof mt<"u"?mt()+1:100,promptDesc:lt};typeof W=="function"&&W(y.boardId,di).then(()=>{typeof pe<"u"&&pe(`Image generated via ${Yn}!`,"success")}).catch(ua=>{console.error("Failed to add AI image to DB:",ua),typeof pe<"u"&&pe("Image DB Error - Too Large?","error")}),_.textContent=A,_.style.opacity="1",_.style.pointerEvents="auto",m.classList.remove("active"),C.value=""},400)},Nt.onerror=()=>{throw clearInterval(xe),new Error("Image failed to load in DOM")},Nt.src=Pt}catch(w){console.error(w),typeof pe<"u"&&pe("Failed to generate image.","error"),_.textContent=A,_.style.opacity="1",_.style.pointerEvents="auto",m.classList.remove("active")}})}function jh(){var i,o,c,l,d,f,p;const n=document.getElementById("draw-size-slider"),e=document.getElementById("draw-size-val");n&&n.addEventListener("input",m=>{const _=parseInt(m.target.value);y.drawWidth=_,e&&(e.textContent=_+"px")});const t=document.getElementById("draw-color-picker");t&&t.addEventListener("input",m=>{y.drawColor=m.target.value});const r=document.querySelector(".eraser-btn");r&&r.addEventListener("click",()=>{De("eraser"),document.querySelector(".wrap-draw").classList.remove("show-submenu")});const s=document.getElementById("text-format-popover");if(s){s.addEventListener("mousedown",C=>{C.target.tagName!=="INPUT"&&C.preventDefault()});const m=C=>{var O,B,q;const A=window.getSelection().anchorNode,D=(B=(O=A==null?void 0:A.parentElement)==null?void 0:O.closest(".board-text-el, .board-note"))==null?void 0:B.parentElement;if(D){const he=(q=Array.from(y.elements.entries()).find(([se,I])=>I.dom===D))==null?void 0:q[0];if(he){const se=D.querySelector(".board-text-el, .board-note").innerHTML;Ie(y.boardId,he,{...C,content:se})}}},_=(C,x=null)=>{document.execCommand(C,!1,x),m({})};(i=document.getElementById("tf-bold"))==null||i.addEventListener("click",()=>_("bold")),(o=document.getElementById("tf-italic"))==null||o.addEventListener("click",()=>_("italic")),(c=document.getElementById("tf-underline"))==null||c.addEventListener("click",()=>_("underline")),(l=document.getElementById("tf-strike"))==null||l.addEventListener("click",()=>_("strikeThrough")),(d=document.getElementById("tf-list"))==null||d.addEventListener("click",()=>_("insertUnorderedList")),(f=document.getElementById("tf-code"))==null||f.addEventListener("click",()=>_("formatBlock","<pre>")),(p=document.getElementById("tf-color-picker"))==null||p.addEventListener("input",C=>{const x=C.target.value;document.execCommand("foreColor",!1,x);const A=document.getElementById("tf-color-container");A&&(A.style.color=x),m({})}),document.querySelectorAll("#tf-size-dropdown .tf-dropdown-menu button").forEach(C=>{C.addEventListener("click",()=>{var O,B;const x=parseInt(C.dataset.size),D=(B=(O=window.getSelection().anchorNode)==null?void 0:O.parentElement)==null?void 0:B.closest(".board-text-el, .board-note");if(D){D.style.fontSize=`${x}px`;const q=document.getElementById("tf-current-size");q&&(q.textContent=C.textContent),m({fontSize:x})}})})}}function Ka(){const n=document.getElementById("connection-layer");n&&(n.innerHTML="",y.elements.forEach(e=>{const t=e.data;if(t.type==="connection"&&t.from&&t.to){const r=y.elements.get(t.from),s=y.elements.get(t.to);if(r&&s){const i=document.createElementNS("http://www.w3.org/2000/svg","line"),o=r.data.x+(r.data.width||200)/2,c=r.data.y+(r.data.height||200)/2,l=s.data.x+(s.data.width||200)/2,d=s.data.y+(s.data.height||200)/2;i.setAttribute("x1",o),i.setAttribute("y1",c),i.setAttribute("x2",l),i.setAttribute("y2",d),n.appendChild(i)}}}))}async function tx(n,e){e==="before_after"?(await W(n,{type:"text",content:'<span class="seed-title">Transformation <span style="color:var(--brand-color)">Studio</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Turn single reference shots into compelling visual stories.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Seed Instructions",x:200,y:280,width:600,height:220,zIndex:0}),await W(n,{type:"text",content:'1. Upload your messy or clean subject image.<br>2. Right-click and select "Make Professional" or "Before/After".<br>3. Connect images to generate a side-by-side transition.',x:230,y:330,width:540,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Automotive Restoration</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/car_before.png",x:200,y:600,width:440,height:320,zIndex:1}),await W(n,{type:"image",src:"/templates/car_after.png",x:670,y:600,width:440,height:320,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Fitness & Body</span>',x:200,y:960,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/car_before.png",x:200,y:1010,width:400,height:280,zIndex:1}),await W(n,{type:"image",src:"/templates/car_after.png",x:630,y:1010,width:400,height:280,zIndex:1}),await W(n,{type:"note",content:"<b>Pro Tip:</b><br><br>Use the Instagram tool to export these pairs!",x:1160,y:300,width:220,height:140,color:"blue",zIndex:2})):e==="pro_food"?(await W(n,{type:"text",content:'<span class="seed-title">Gourmet <span style="color:var(--brand-color)">Plating</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"frame",title:"How it works",x:200,y:280,width:620,height:200,zIndex:0}),await W(n,{type:"text",content:"Our Food AI optimizes lighting, adds realistic steam, and enhances textures to make any meal look studio-ready. Use the tool on the right-click menu.",x:230,y:330,width:560,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Fast Food High-Res</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/messy_burger.png",x:200,y:600,width:420,height:320,zIndex:1}),await W(n,{type:"image",src:"/templates/pro_burger.png",x:650,y:600,width:420,height:320,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Plated Meals</span>',x:200,y:960,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/pro_burger.png",x:200,y:1010,width:480,height:360,zIndex:1}),await W(n,{type:"image",src:"/templates/messy_burger.png",x:710,y:1010,width:480,height:360,zIndex:1})):e==="redesign_room"?(await W(n,{type:"text",content:'<span class="seed-title">Space <span style="color:var(--brand-color)">Reimagine</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"frame",title:"Interior AI Workflow",x:200,y:280,width:600,height:180,zIndex:0}),await W(n,{type:"text",content:"Convert any raw space into a stylized masterpiece. Experiment with dark moody lighting or sunny Mediterranean layouts.",x:230,y:330,width:540,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Home Office Setup</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_before.png",x:200,y:600,width:460,height:340,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_after.png",x:690,y:600,width:460,height:340,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Studio Apartments</span>',x:200,y:980,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_before.png",x:200,y:1030,width:480,height:360,zIndex:1})):e==="general"?(await W(n,{type:"text",content:'<span class="seed-title">Creative <span style="color:var(--brand-color)">Storyboard</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Organize your thoughts, reference images, and AI explorations in one place.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Getting Started",x:200,y:280,width:600,height:180,zIndex:0}),await W(n,{type:"text",content:"• Drag images here from your PC<br>• Use the Toolbar to add notes and text<br>• Right-click any image for AI enhancements",x:230,y:330,width:540,fontSize:16,zIndex:1})):e==="instagram_pro"&&(await W(n,{type:"text",content:'<span class="seed-title">Instagram <span style="color:#E1306C">Growth Studio</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Audit your grid, refine your hooks, and get actionable advice to 10x your engagement.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Post Gallery / Grid Audit",x:200,y:280,width:1e3,height:500,zIndex:0}),await W(n,{type:"text",content:"Drag your recent posts here for Gemini to analyze.",x:600,y:500,width:400,fontSize:16,color:"var(--text-tertiary)",zIndex:1}),await W(n,{type:"note",content:'<b>Current Hook Ideas</b><br><br>1. "The secret no one tells you about..."<br>2. "This simple change doubled my sales..."',x:1250,y:280,width:250,height:200,color:"yellow",zIndex:1}),await W(n,{type:"note",content:"<b>Growth Goals</b><br><br>- 10k Followers<br>- 5% Engagement Rate",x:1250,y:500,width:250,height:200,color:"pink",zIndex:1}))}async function zh(n,e,t){var r,s;try{const l=(s=(r=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instances:[{prompt:n}],parameters:{sampleCount:1,aspectRatio:"1:1"}})})).json()).predictions)==null?void 0:r[0])==null?void 0:s.bytesBase64Encoded;if(!l)throw new Error("No image data");const d=`data:image/png;base64,${l}`,f={type:"image",x:e,y:t,width:300,height:300,src:d,fileName:`ai_edit_${Date.now()}.png`,zIndex:mt()+1,promptDesc:n};await W(y.boardId,f)}catch(i){console.error("Image Gen Error:",i),pe("Failed to generate contextual image.","error")}}function Vc(n){const e=y.elements.get(n);if(!e||e.data.type!=="image")return;y.replyElementId=n;const t=document.getElementById("chat-reply-context"),r=document.getElementById("reply-thumb"),s=document.getElementById("chat-sidebar");t&&(t.style.display="flex"),r&&(r.style.backgroundImage=`url(${e.data.src})`),s&&s.classList.add("open");const i=document.getElementById("chat-input");i&&(i.placeholder="Düzeltmek istediğin şeyi söyle...",i.focus())}function Za(){y.replyElementId=null;const n=document.getElementById("chat-reply-context");n&&(n.style.display="none");const e=document.getElementById("chat-input");e&&(e.placeholder="Ask Gemini...")}async function nx(){const n=Array.from(y.elements.values()).filter(o=>o.data.type==="image"||o.data.type==="frame").sort((o,c)=>(o.data.y||0)-(c.data.y||0));if(n.length===0){pe("No items to arrange","info");return}pe("Organizing Board Layout...","info");const e=200,t=150,r=50,s=350,i=3;n.forEach((o,c)=>{const l=c%i,d=Math.floor(c/i),f=e+l*(s+r),p=t+d*(s+r);o.dom.classList.add("smooth-move"),o.dom.style.left=`${f}px`,o.dom.style.top=`${p}px`,o.data.x=f,o.data.y=p,Ie(y.boardId,o.data.id,{x:f,y:p}),setTimeout(()=>o.dom.classList.remove("smooth-move"),800)})}let U={projectId:null,project:null,elements:new Map,selectedId:null,isDragging:!1,dragOffset:{x:0,y:0},zoom:1,propTab:"style",clipboard:null},Lc=null,Ke={};const Mt={photo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><polygon points="10 9 15 12 10 15 10 9"/></svg>',text:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',shapes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',bg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M2 6h20M2 18h20"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'},rx=["Outfit","Inter","Montserrat","Playfair Display","Poppins","Roboto","Bebas Neue","Dancing Script"],Cg=[{name:"Square",svg:'<rect x="4" y="4" width="16" height="16" rx="1" fill="currentColor"/>'},{name:"Circle",svg:'<circle cx="12" cy="12" r="8" fill="currentColor"/>'},{name:"Triangle",svg:'<path d="M12 4L4 20H20L12 4Z" fill="currentColor"/>'},{name:"Hexagon",svg:'<path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="currentColor"/>'},{name:"Arrow Right",svg:'<path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/>'},{name:"Arrow Left",svg:'<path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none"/>'},{name:"Speech Bubble",svg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor"/>'},{name:"Heart",svg:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.7 7.8l1.1 1.1 7.7 7.7 7.7-7.7 1.1-1.1a5.5 5.5 0 0 0 0-7.8z" fill="currentColor"/>'},{name:"Star",svg:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>'},{name:"Instagram",svg:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2" fill="none"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>'},{name:"Facebook",svg:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/>'},{name:"Twitter",svg:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor"/>'}];function sx(n){if(!n||typeof n!="string")return{r:0,g:0,b:0};const e=n.startsWith("#")?n.slice(1):n,t=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return{r:isNaN(t)?0:t,g:isNaN(r)?0:r,b:isNaN(s)?0:s}}function ix(n,e){const t=Array.from(U.elements.values()).sort((s,i)=>(i.zIndex||0)-(s.zIndex||0)),r=t.splice(n,1)[0];t.splice(e,0,r),t.forEach((s,i)=>{const o=t.length-i;s.zIndex!==o&&$e(s.id,{zIndex:o})}),setTimeout(()=>nn(r.id),50)}const Oi=new Map;function ox(n,e){Oi.has(n)&&clearTimeout(Oi.get(n)),Oi.set(n,setTimeout(()=>{ra(U.projectId,n,e),Oi.delete(n)},200))}function $e(n,e){const t=U.elements.get(n);t&&(Object.assign(t,e),Gl(t.dom,t)),ox(n,e)}function xo(n,e){if(!(!n||!e||isNaN(n)||isNaN(e))){if(U.project&&(U.project.width=n,U.project.height=e),Ke.canvas){Ke.canvas.style.width=`${n}px`,Ke.canvas.style.height=`${e}px`;const t=Ke.workspace.offsetWidth-100,r=Ke.workspace.offsetHeight-100;U.zoom=Math.min(t/n,r/e,1),(isNaN(U.zoom)||U.zoom<=0)&&(U.zoom=1),Ke.canvas.style.transform=`scale(${U.zoom})`}U.projectId&&na(U.projectId,{width:n,height:e})}}function ax(n,e){return new Promise(t=>{if(e){const r=document.createElement("video");r.onloadedmetadata=()=>t({w:Math.max(r.videoWidth,400),h:Math.max(r.videoHeight,400)}),r.onerror=()=>t({w:800,h:800}),r.src=n}else{const r=new Image;r.onload=()=>t({w:Math.max(r.naturalWidth,100),h:Math.max(r.naturalHeight,100)}),r.onerror=()=>t({w:800,h:800}),r.src=n}})}function cx(){return`
    <div class="editor-page theme-liquid">
      <!-- Sidebar -->
      <aside class="editor-sidebar">
        <div class="sidebar-header">
          <button id="editor-back" class="icon-btn">${Mt.back}</button>
          <span class="brand-text">Creative Editor</span>
        </div>
        
        <div class="editor-tools">
          <button class="editor-tool-btn active" data-tab="images">${Mt.photo}<span>Photos</span></button>
          <button class="editor-tool-btn" data-tab="text">${Mt.text}<span>Text</span></button>
          <button class="editor-tool-btn" data-tab="elements">${Mt.shapes}<span>Elements</span></button>
          <button class="editor-tool-btn" data-tab="background">${Mt.bg}<span>Canvas</span></button>
          <button class="editor-tool-btn" data-tab="layout"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 7h18M3 17h18"/></svg><span>Layout</span></button>
        </div>

        <div id="sidebar-tab-content" class="sidebar-scroll"></div>
      </aside>

      <!-- Main Workspace -->
      <main class="editor-main">
        <header class="editor-topbar">
          <div id="project-title" contenteditable="true" class="editable-title">Untitled Project</div>
          <div style="display:flex; gap:16px; align-items:center;">
             <div id="presence-list" class="presence-stack"></div>
             <button class="btn btn-premium" id="btn-export">${Mt.download} Export Project</button>
          </div>
        </header>

        <div class="editor-workspace" id="editor-workspace">
          <div class="editing-canvas" id="editing-canvas"></div>
        </div>
      </main>

      <!-- Property Panel -->
      <aside class="editor-properties" id="editor-properties">
        <div class="empty-state">Select an element to begin styling</div>
      </aside>
    </div>
    <input type="file" id="editor-file-input" style="display:none" accept="image/*,video/*">
    <div id="editor-context-menu" class="context-menu">
      <div class="context-item" data-action="duplicate">Duplicate (Ctrl+C/V)</div>
      <div class="context-item danger" data-action="delete">Delete Element</div>
    </div>
  `}function qh(n){const e=document.getElementById("sidebar-tab-content");if(e){if(n==="images")e.innerHTML=`
      <button class="btn btn-primary-alt" style="width:100%; margin-bottom:20px;" id="btn-upload">Upload Media</button>
      <div class="section-label">Recently Added</div>
      <div id="recent-uploads" class="media-grid"></div>
    `,document.getElementById("btn-upload").onclick=()=>document.getElementById("editor-file-input").click();else if(n==="text")e.innerHTML=`
      <button class="btn btn-primary-alt" style="width:100%; margin-bottom:12px;" id="btn-add-text">Add Heading</button>
      <button class="editor-tool-btn-wide" data-preset="sub">Add Subheading</button>
      <button class="editor-tool-btn-wide" data-preset="body">Add Body Text</button>
    `,document.getElementById("btn-add-text").onclick=()=>Ya("Heading",64,800),e.querySelector('[data-preset="sub"]').onclick=()=>Ya("Subheading",32,600),e.querySelector('[data-preset="body"]').onclick=()=>Ya("Body text...",18,400);else if(n==="elements")e.innerHTML=`
      <div class="element-grid">
        ${Cg.map(t=>`
          <div class="element-item" data-name="${t.name}">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">${t.svg}</svg>
          </div>
        `).join("")}
      </div>
    `,e.querySelectorAll(".element-item").forEach(t=>{t.onclick=r=>{r.stopPropagation(),fx(t.dataset.name)}});else if(n==="background"){e.innerHTML=`
      <div class="prop-title">Canvas Background Color</div>
      <div class="color-grid">${["#ffffff","#f5f5f0","#000000","#ff3c00","#0066cc","#34c759"].map(r=>`<div class="color-swatch" style="background:${r}" data-color="${r}"></div>`).join("")}</div>
      <div class="prop-control">
        <label>Custom Color</label>
        <input type="color" id="bg-picker" class="color-picker-full">
      </div>
    `,e.querySelectorAll(".color-swatch").forEach(r=>r.onclick=()=>Hh(r.dataset.color));const t=document.getElementById("bg-picker");t&&(t.oninput=r=>Hh(r.target.value))}else if(n==="layout"){const t=[{name:"Instagram Post",w:1080,h:1080},{name:"Instagram Story",w:1080,h:1920},{name:"Twitter/X Post",w:1200,h:675},{name:"Square Tiny",w:360,h:360}];e.innerHTML=`
      <div class="prop-title">Dimensions</div>
      ${t.map(r=>`<button class="layout-preset-btn" data-w="${r.w}" data-h="${r.h}"><span>${r.name}</span><small>${r.w}x${r.h}</small></button>`).join("")}
      <div class="custom-dim">
        <input type="number" id="custom-w" placeholder="Width">
        <input type="number" id="custom-h" placeholder="Height">
      </div>
      <button class="btn btn-primary-alt" style="width:100%; margin-top:12px;" id="btn-apply-size">Apply Custom Size</button>
    `,e.querySelectorAll("[data-w]").forEach(r=>r.onclick=()=>xo(parseInt(r.dataset.w),parseInt(r.dataset.h))),document.getElementById("btn-apply-size").onclick=()=>xo(parseInt(document.getElementById("custom-w").value),parseInt(document.getElementById("custom-h").value))}}}function nn(n){const e=document.getElementById("editor-properties");if(!e)return;const t=U.elements.get(n);if(!t){e.innerHTML='<div class="empty-state">Select an element to edit</div>';return}const r=U.propTab||"style";let s="";r==="style"?t.type==="text"?s=`
        <div class="prop-section">
          <div class="prop-title">Text Style</div>
          <select class="font-select" id="input-font">${rx.map(o=>`<option value="${o}" ${t.fontFamily===o?"selected":""}>${o}</option>`).join("")}</select>
          <div class="style-row">
            <button class="style-btn ${t.fontWeight==="bold"?"active":""}" id="btn-bold">B</button>
            <button class="style-btn ${t.fontStyle==="italic"?"active":""}" id="btn-italic">I</button>
            <button class="style-btn ${t.textDecoration==="underline"?"active":""}" id="btn-underline">U</button>
            <div class="color-wrap"><input type="color" id="input-color" value="${t.color||"#000000"}"></div>
          </div>
          <div class="prop-control">
            <div class="prop-label"><span>Font Size</span><span>${t.fontSize}px</span></div>
            <input type="range" class="prop-slider" id="input-fs" min="12" max="300" value="${t.fontSize}">
          </div>
          <div class="prop-control">
            <div class="prop-label"><span>Letter Spacing</span><span>${t.letterSpacing||0}</span></div>
            <input type="range" class="prop-slider" id="input-ls" min="-5" max="25" value="${t.letterSpacing||0}">
          </div>
        </div>
        <div class="prop-section">
          <div class="prop-title">Highlight / Block</div>
          <div class="toggle-row">
            <input type="checkbox" id="check-bg" ${t.bgEnabled?"checked":""}>
            <label for="check-bg">Highlight Text</label>
          </div>
          ${t.bgEnabled?`<input type="color" id="input-bg-color" class="color-picker-full" value="${t.bgColor||"#ff3c00"}">`:""}
        </div>
      `:s=`
        <div class="prop-section">
          <div class="prop-title">Image Adjustments</div>
          ${["brightness","contrast","blur"].map(o=>{var c;return`
            <div class="prop-control">
              <div class="prop-label"><span>${o.toUpperCase()}</span></div>
              <input type="range" class="prop-slider" data-filter="${o}" min="0" max="${o==="blur"?20:3}" step="0.1" value="${((c=t.filters)==null?void 0:c[o])||(o==="blur"?0:1)}">
            </div>
          `}).join("")}
        </div>
        <div class="prop-section">
          <div class="prop-title">Shape & Visibility</div>
          <div class="prop-control">
            <div class="prop-label"><span>Opacity</span></div>
            <input type="range" class="prop-slider" id="input-opacity" min="0" max="1" step="0.1" value="${t.opacity||1}">
          </div>
          <div class="prop-control">
            <div class="prop-label"><span>Corner Radius</span><span>${t.borderRadius||0}px</span></div>
            <input type="range" class="prop-slider" id="input-radius" min="0" max="500" value="${t.borderRadius||0}">
          </div>
        </div>
      `:r==="effects"?s=`
      <div class="prop-section">
        <div class="prop-title">Element Effects</div>
        <div class="effect-grid">
          ${[{id:"none",label:"Hiçbiri"},{id:"lift",label:"Yükselt"},{id:"glow",label:"Parlama"},{id:"shadow",label:"Gölge"}].map(o=>`<button class="effect-btn-sm ${t.effect===o.id?"active":""}" data-effect="${o.id}">${o.label}</button>`).join("")}
        </div>
      </div>
      ${t.effect==="shadow"?`
        <div class="prop-section shadow-details">
          <div class="prop-control">
            <div class="prop-label"><span>Yatay Konum (X)</span><span>${t.shadowX||0}</span></div>
            <input type="range" class="prop-slider" id="shadow-x" min="-50" max="50" value="${t.shadowX||0}">
          </div>
          <div class="prop-control">
            <div class="prop-label"><span>Dikey Konum (Y)</span><span>${t.shadowY||10}</span></div>
            <input type="range" class="prop-slider" id="shadow-y" min="-50" max="50" value="${t.shadowY||10}">
          </div>
          <div class="prop-control">
            <div class="prop-label"><span>Bulanıklık (Blur)</span><span>${t.shadowBlur||15}px</span></div>
            <input type="range" class="prop-slider" id="shadow-blur" min="0" max="100" value="${t.shadowBlur||15}">
          </div>
          <div class="prop-control">
            <div class="prop-label"><span>Opaklık (Opacity)</span></div>
            <input type="range" class="prop-slider" id="shadow-opacity" min="0" max="1" step="0.01" value="${t.shadowOpacity===void 0?.3:t.shadowOpacity}">
          </div>
          <div class="prop-control">
            <div class="prop-label"><span>Gölge Rengi</span></div>
            <input type="color" id="shadow-color" class="color-picker-full" value="${t.shadowColor||"#000000"}">
          </div>
        </div>
      `:""}
    `:r==="layers"&&(s=`
      <div class="layers-list">
        ${Array.from(U.elements.values()).sort((c,l)=>(l.zIndex||0)-(c.zIndex||0)).map((c,l)=>{let d=c.type==="text"?c.content||"Text":c.type==="image"?"Resim":c.name||c.type;d.length>20&&(d=d.substring(0,20)+"...");const f=c.type==="text"?Mt.text:c.type==="video"?Mt.video:Mt.photo;return`
            <div class="layer-item ${n===c.id?"active":""}" data-layer-id="${c.id}" data-index="${l}" style="pointer-events: auto;">
              <div class="layer-info" style="pointer-events: none;">
                <span class="layer-icon" style="pointer-events: none;">${f}</span>
                <span class="layer-name" style="pointer-events: none;">${d}</span>
              </div>
              <div class="layer-drag-indicator" style="pointer-events: none;">:::</div>
            </div>
          `}).join("")}
      </div>
    `),e.innerHTML=`
    <div class="panel-header">
      <span>Ayarlar</span>
      <button id="btn-delete-el" class="btn-text danger">Sil</button>
    </div>
    <div class="panel-tabs">
      <button class="tab-btn ${r==="style"?"active":""}" data-ptab="style">Stil</button>
      <button class="tab-btn ${r==="effects"?"active":""}" data-ptab="effects">Efektler</button>
      <button class="tab-btn ${r==="layers"?"active":""}" data-ptab="layers">Katmanlar</button>
    </div>
    <div class="panel-content">${s}</div>
  `,document.getElementById("btn-delete-el").onclick=()=>{sa(U.projectId,n),U.selectedId=null,nn(null)},e.querySelectorAll("[data-ptab]").forEach(o=>o.onclick=()=>{U.propTab=o.dataset.ptab,nn(n)}),e.querySelectorAll("[data-effect]").forEach(o=>{o.onclick=c=>{c.stopPropagation(),$e(n,{effect:o.dataset.effect}),setTimeout(()=>nn(n),50)}}),t.type==="text"&&(document.getElementById("btn-bold").onclick=()=>$e(n,{fontWeight:t.fontWeight==="bold"?"normal":"bold"}),document.getElementById("btn-italic").onclick=()=>$e(n,{fontStyle:t.fontStyle==="italic"?"normal":"italic"}),document.getElementById("btn-underline").onclick=()=>$e(n,{textDecoration:t.textDecoration==="underline"?"none":"underline"}),document.getElementById("input-fs").oninput=o=>$e(n,{fontSize:parseInt(o.target.value)}),document.getElementById("input-ls").oninput=o=>$e(n,{letterSpacing:parseInt(o.target.value)}),document.getElementById("check-bg").onchange=o=>{$e(n,{bgEnabled:o.target.checked}),nn(n)},document.getElementById("input-bg-color")&&(document.getElementById("input-bg-color").oninput=o=>$e(n,{bgColor:o.target.value})),document.getElementById("input-color").oninput=o=>$e(n,{color:o.target.value}),document.getElementById("input-font").onchange=o=>$e(n,{fontFamily:o.target.value})),[{id:"shadow-x",key:"shadowX"},{id:"shadow-y",key:"shadowY"},{id:"shadow-blur",key:"shadowBlur"},{id:"shadow-opacity",key:"shadowOpacity"},{id:"shadow-color",key:"shadowColor"}].forEach(o=>{const c=document.getElementById(o.id);c&&(c.oninput=l=>{let d=l.target.value;o.id!=="shadow-color"&&(d=parseFloat(d)),$e(n,{[o.key]:d})})}),e.querySelectorAll(".layer-item").forEach(o=>{o.onmousedown=c=>{const l=o.dataset.layerId;U.selectedId=l,document.querySelectorAll(".board-element").forEach(d=>d.classList.toggle("selected",d.dataset.id===l)),document.querySelectorAll(".layer-item").forEach(d=>d.classList.toggle("active",d.dataset.layerId===l))},o.onclick=c=>{nn(o.dataset.layerId)},o.draggable=!0,o.ondragstart=c=>{c.dataTransfer.setData("text/plain",o.dataset.index),o.classList.add("dragging")},o.ondragover=c=>{c.preventDefault(),o.classList.add("drag-over")},o.ondragleave=()=>o.classList.remove("drag-over"),o.ondrop=c=>{c.preventDefault(),o.classList.remove("drag-over");const l=parseInt(c.dataTransfer.getData("text/plain")),d=parseInt(o.dataset.index);l!==d&&ix(l,d)},o.ondragend=()=>o.classList.remove("dragging")}),e.querySelectorAll("[data-filter]").forEach(o=>o.oninput=c=>$e(n,{filters:{...t.filters||{},[c.target.dataset.filter]:parseFloat(c.target.value)}})),document.getElementById("input-opacity").oninput=o=>$e(n,{opacity:parseFloat(o.target.value)})}function Gl(n,e){if(!n)return;const t=isNaN(e.x)?0:e.x,r=isNaN(e.y)?0:e.y;n.style.left=`${t}px`,n.style.top=`${r}px`,n.style.width=e.width?`${e.width}px`:"auto",n.style.height=e.height?`${e.height}px`:"auto",n.style.zIndex=e.zIndex||1,n.style.borderRadius=`${e.borderRadius||0}px`,n.style.opacity=e.opacity===void 0||isNaN(e.opacity)?1:e.opacity;let s="";if(e.effect==="shadow"){const c=isNaN(e.shadowX)?0:e.shadowX,l=isNaN(e.shadowY)?10:e.shadowY,d=isNaN(e.shadowBlur)?15:e.shadowBlur,f=sx(e.shadowColor||"#000000"),p=e.shadowOpacity===void 0||isNaN(e.shadowOpacity)?.3:e.shadowOpacity;s=`${c}px ${l}px ${d}px rgba(${f.r},${f.g},${f.b},${p})`}else e.effect==="lift"?s="0 10px 30px rgba(0,0,0,0.3)":e.effect==="glow"&&(s=`0 0 20px ${e.color||"#fff"}`);const i=e.filters||{},o=`brightness(${i.brightness||1}) contrast(${i.contrast||1}) blur(${i.blur||0}px)`;if(e.type==="image"||e.type==="video"){const c=n.querySelector("img, video");c&&(c.style.filter=o+(s&&e.effect!=="none"?` drop-shadow(${s})`:""))}else if(e.type==="text"){const c=n.querySelector(".editor-text-content");c&&(c.style.fontFamily=e.fontFamily||"Outfit",c.style.fontSize=`${e.fontSize}px`,c.style.color=e.color||"#000000",c.style.fontWeight=e.fontWeight||600,c.style.fontStyle=e.fontStyle||"normal",c.style.textDecoration=e.textDecoration||"none",c.style.letterSpacing=`${e.letterSpacing||0}px`,c.style.lineHeight=1.2,c.style.textShadow=s,e.bgEnabled?(c.style.background=e.bgColor||"#ff3c00",c.style.padding="8px",c.style.borderRadius="4px"):c.style.background="none")}else e.type==="element"&&(n.style.color=e.color||"#1a1a1a",n.style.filter=s?`drop-shadow(${s})`:"none")}function lx(n){const e=document.createElement("div");if(e.className="board-element",e.dataset.id=n.id,n.type==="image")e.innerHTML=`<div class="board-image-wrapper"><img src="${n.src}" draggable="false" loading="eager"></div>`;else if(n.type==="video")e.innerHTML=`<div class="board-image-wrapper"><video src="${n.src}" autoplay loop muted draggable="false"></video></div>`;else if(n.type==="text")e.innerHTML=`<div class="editor-text-content" contenteditable="true" spellcheck="false" style="user-select:text">${n.content}</div>`;else if(n.type==="element"){const r=Cg.find(s=>s.name===n.name);e.innerHTML=`<div class="svg-container" draggable="false">${(r==null?void 0:r.svg)||""}</div>`}const t=document.createElement("div");return t.className="move-handle",t.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l3 3 3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg>',e.appendChild(t),["nw","ne","sw","se"].forEach(r=>{const s=document.createElement("div");s.className=`resize-handle ${r}`,e.appendChild(s),s.onmousedown=i=>{i.stopPropagation(),ux(i,n,r)}}),e.onclick=r=>{r.stopPropagation(),U.selectedId=n.id,document.querySelectorAll(".board-element").forEach(s=>s.classList.toggle("selected",s.dataset.id===n.id)),nn(n.id)},e.onmousedown=r=>{if(r.target.closest('[contenteditable="true"]')&&!r.target.closest(".move-handle"))return;U.isDragging=!0,U.selectedId=n.id;const s=e.getBoundingClientRect();U.dragOffset={x:(r.clientX-s.left)/U.zoom,y:(r.clientY-s.top)/U.zoom};const i=c=>{const l=Ke.canvas.getBoundingClientRect(),d=(c.clientX-l.left)/U.zoom-U.dragOffset.x,f=(c.clientY-l.top)/U.zoom-U.dragOffset.y;e.style.left=`${d}px`,e.style.top=`${f}px`,n.x=d,n.y=f},o=()=>{U.isDragging=!1,ra(U.projectId,n.id,{x:n.x,y:n.y}),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",o)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",o)},e.oncontextmenu=r=>{r.preventDefault(),dx(r,n.id)},Gl(e,n),e}function ux(n,e,t){n.stopPropagation();const r=n.clientX,s=n.clientY,i=e.width||100,o=e.height||100,c=e.x,l=e.y,d=p=>{const m=(p.clientX-r)/U.zoom,_=(p.clientY-s)/U.zoom;let C=i,x=o,A=c,D=l;if(t.includes("e")&&(C=Math.max(20,i+m)),t.includes("s")&&(x=Math.max(20,o+_)),t.includes("w")){const O=i-Math.max(20,i-m);C=i-O,A=c+O}if(t.includes("n")){const O=o-Math.max(20,o-_);x=o-O,D=l+O}if(e.type==="text"){const O=C/i;$e(e.id,{width:C,fontSize:Math.max(12,Math.floor((e.fontSize||32)*O))})}else $e(e.id,{width:C,height:x,x:A,y:D})},f=()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",f),ra(U.projectId,e.id,{width:e.width,height:e.height,x:e.x,y:e.y,fontSize:e.fontSize})};window.addEventListener("mousemove",d),window.addEventListener("mouseup",f)}function dx(n,e){const t=document.getElementById("editor-context-menu");t.style.display="block",t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`;const r=t.querySelectorAll(".context-item");r[0].onclick=()=>{hx(e),t.style.display="none"},r[1].onclick=()=>{sa(U.projectId,e),t.style.display="none"},window.addEventListener("mousedown",s=>{t.contains(s.target)||(t.style.display="none")},{once:!0})}async function hx(n){const e=U.elements.get(n);if(e){const{id:t,dom:r,...s}=e;s.x+=30,s.y+=30,await Mn(U.projectId,s)}}async function Ya(n,e,t){await Mn(U.projectId,{type:"text",content:n,x:200,y:200,fontSize:e,fontWeight:t,fontFamily:"Outfit",color:"#1a1a1a",zIndex:U.elements.size+1})}async function fx(n){await Mn(U.projectId,{type:"element",name:n,x:400,y:400,width:200,height:200,color:"#1a1a1a",zIndex:U.elements.size+1})}function Hh(n){Ke.canvas.style.background=n,na(U.projectId,{background:n})}async function px(n,e){U.projectId=e,n.innerHTML=cx(),Ke.canvas=document.getElementById("editing-canvas"),Ke.workspace=document.getElementById("editor-workspace");const t=await Vm(e);if(!t)return;U.project=t,t.width&&xo(t.width,t.height),Ke.canvas.style.background=t.background||"#ffffff",document.getElementById("project-title").textContent=t.name,document.querySelectorAll(".editor-tool-btn").forEach(s=>s.onclick=()=>{document.querySelectorAll(".editor-tool-btn").forEach(i=>i.classList.remove("active")),s.classList.add("active"),qh(s.dataset.tab)}),qh("images"),document.getElementById("editor-back").onclick=()=>window.location.hash="#/",document.getElementById("editor-file-input").onchange=async s=>{const i=s.target.files[0];if(!i)return;const o=i.type.startsWith("video/"),{url:c}=await Ir(i),l=await ax(c,o);U.elements.size===0?(xo(l.w,l.h),await Mn(e,{type:o?"video":"image",src:c,x:0,y:0,width:l.w,height:l.h,zIndex:1})):await Mn(e,{type:o?"video":"image",src:c,x:100,y:100,width:l.w,height:l.h,zIndex:U.elements.size+1})},Lc=Lm(e,{onAdd:s=>{if(U.elements.has(s.id))return;const i=lx(s);Ke.canvas.appendChild(i),U.elements.set(s.id,{...s,dom:i})},onModify:s=>{const i=U.elements.get(s.id);if(i){const o=U.isDragging&&U.selectedId===s.id;Object.assign(i,s),o||Gl(i.dom,i)}},onRemove:s=>{const i=U.elements.get(s.id);i&&(i.dom.remove(),U.elements.delete(s.id))}}),window.onkeydown=s=>{if(!s.target.closest('[contenteditable="true"]')){if(s.ctrlKey&&s.key==="c"&&U.selectedId&&(U.clipboard={...U.elements.get(U.selectedId)}),s.ctrlKey&&s.key==="v"&&U.clipboard){const{id:i,dom:o,...c}=U.clipboard;c.x+=30,c.y+=30,Mn(U.projectId,c)}s.key==="Delete"&&U.selectedId&&(sa(U.projectId,U.selectedId),U.selectedId=null,nn(null))}};const r=()=>{var o,c;const s=Ke.workspace.offsetWidth-100,i=Ke.workspace.offsetHeight-100;U.zoom=Math.min(s/(((o=U.project)==null?void 0:o.width)||1080),i/(((c=U.project)==null?void 0:c.height)||1080),1),Ke.canvas.style.transform=`scale(${U.zoom})`};window.addEventListener("resize",r),r()}function mx(){Lc&&Lc()}const Vi=document.getElementById("app");let sr=null;function gx(){const n=window.location.hash||"#/",[e,t]=n.slice(1).split("?");return e.startsWith("/edit/")?{page:"edit",editId:e.replace("/edit/","")}:{page:"dashboard"}}async function Wh(){sr==="dashboard"&&gI(),sr==="board"&&ex(),sr==="edit"&&mx();const n=gx();Vi.innerHTML="",n.page==="board"&&n.boardId?(sr="board",JA(Vi,n.boardId)):n.page==="edit"&&n.editId?(sr="edit",px(Vi,n.editId)):(sr="dashboard",mI(Vi))}async function yx(){try{await Im()}catch(e){console.warn("Auth init failed, continuing offline:",e)}const n=document.getElementById("loading-screen");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),300)),window.addEventListener("hashchange",Wh),Wh()}yx();
