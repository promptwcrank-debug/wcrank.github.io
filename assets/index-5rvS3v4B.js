(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const oy=()=>{};var Yu={};/**
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
 */const Kh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ay=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,p=i>>2,f=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(t[p],t[f],t[m],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ay(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||f==null)throw new cy;const m=i<<2|c>>4;if(r.push(m),u!==64){const y=c<<4&240|u>>2;if(r.push(y),f!==64){const A=u<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ly=function(n){const e=Kh(n);return Yh.encodeByteArray(e,!0)},Qi=function(n){return ly(n).replace(/\./g,"")},Zh=function(n){try{return Yh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dy=()=>uy().__FIREBASE_DEFAULTS__,hy=()=>{if(typeof process>"u"||typeof Yu>"u")return;const n=Yu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zh(n[1]);return e&&JSON.parse(e)},Po=()=>{try{return oy()||dy()||hy()||fy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xh=n=>{var e,t;return(t=(e=Po())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},py=n=>{const e=Xh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Qh=()=>{var n;return(n=Po())===null||n===void 0?void 0:n.config},Jh=n=>{var e;return(e=Po())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class my{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Sr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ef(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function gy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Qi(JSON.stringify(t)),Qi(JSON.stringify(o)),""].join(".")}const fs={};function yy(){const n={prod:[],emulator:[]};for(const e of Object.keys(fs))fs[e]?n.emulator.push(e):n.prod.push(e);return n}function vy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Zu=!1;function tf(n,e){if(typeof window>"u"||typeof document>"u"||!Sr(window.location.host)||fs[n]===e||fs[n]||Zu)return;fs[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=yy().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Zu=!0,o()},m}function p(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=vy(r),y=t("text"),A=document.getElementById(y)||document.createElement("span"),k=t("learnmore"),x=document.getElementById(k)||document.createElement("a"),N=t("preprendIcon"),O=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const F=m.element;c(F),p(x,k);const q=u();l(O,N),F.append(O,A,x,q),document.body.appendChild(F)}i?(A.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _y(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function wy(){var n;const e=(n=Po())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function by(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ey(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ty(){const n=We();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ay(){return!wy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xy(){try{return typeof indexedDB=="object"}catch{return!1}}function ky(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Sy="FirebaseError";class Kt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Sy,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Cy(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Kt(s,c,r)}}function Cy(n,e){return n.replace(Ry,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ry=/\{\$([^}]+)}/g;function Py(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Xu(i)&&Xu(o)){if(!Fn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Xu(n){return n!==null&&typeof n=="object"}/**
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
 */function Zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ny(n,e){const t=new Dy(n,e);return t.subscribe.bind(t)}class Dy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Oy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Oa),s.error===void 0&&(s.error=Oa),s.complete===void 0&&(s.complete=Oa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Oy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Oa(){}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class My{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new my;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vy(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ly(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ly(n){return n===Dn?void 0:n}function Vy(n){return n.instantiationMode==="EAGER"}/**
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
 */class By{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new My(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const Fy={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},$y=ie.INFO,Uy={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},jy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Uy[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=$y,this._logHandler=jy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const zy=(n,e)=>e.some(t=>n instanceof t);let Qu,Ju;function qy(){return Qu||(Qu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hy(){return Ju||(Ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nf=new WeakMap,ec=new WeakMap,rf=new WeakMap,Ma=new WeakMap,Uc=new WeakMap;function Wy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(sn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&nf.set(t,n)}).catch(()=>{}),Uc.set(e,n),e}function Gy(n){if(ec.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ec.set(n,e)}let tc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ec.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ky(n){tc=n(tc)}function Yy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(La(this),e,...t);return rf.set(r,e.sort?e.sort():[e]),sn(r)}:Hy().includes(n)?function(...e){return n.apply(La(this),e),sn(nf.get(this))}:function(...e){return sn(n.apply(La(this),e))}}function Zy(n){return typeof n=="function"?Yy(n):(n instanceof IDBTransaction&&Gy(n),zy(n,qy())?new Proxy(n,tc):n)}function sn(n){if(n instanceof IDBRequest)return Wy(n);if(Ma.has(n))return Ma.get(n);const e=Zy(n);return e!==n&&(Ma.set(n,e),Uc.set(e,n)),e}const La=n=>Uc.get(n);function Xy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Qy=["get","getKey","getAll","getAllKeys","count"],Jy=["put","add","delete","clear"],Va=new Map;function ed(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Va.get(e))return Va.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Jy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qy.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Va.set(e,i),i}Ky(n=>({...n,get:(e,t,r)=>ed(e,t)||n.get(e,t,r),has:(e,t)=>!!ed(e,t)||n.has(e,t)}));/**
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
 */class ev{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function tv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",td="0.13.2";/**
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
 */const jt=new $c("@firebase/app"),nv="@firebase/app-compat",rv="@firebase/analytics-compat",sv="@firebase/analytics",iv="@firebase/app-check-compat",ov="@firebase/app-check",av="@firebase/auth",cv="@firebase/auth-compat",lv="@firebase/database",uv="@firebase/data-connect",dv="@firebase/database-compat",hv="@firebase/functions",fv="@firebase/functions-compat",pv="@firebase/installations",mv="@firebase/installations-compat",gv="@firebase/messaging",yv="@firebase/messaging-compat",vv="@firebase/performance",_v="@firebase/performance-compat",wv="@firebase/remote-config",bv="@firebase/remote-config-compat",Ev="@firebase/storage",Iv="@firebase/storage-compat",Tv="@firebase/firestore",Av="@firebase/ai",xv="@firebase/firestore-compat",kv="firebase",Sv="11.10.0";/**
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
 */const rc="[DEFAULT]",Cv={[nc]:"fire-core",[nv]:"fire-core-compat",[sv]:"fire-analytics",[rv]:"fire-analytics-compat",[ov]:"fire-app-check",[iv]:"fire-app-check-compat",[av]:"fire-auth",[cv]:"fire-auth-compat",[lv]:"fire-rtdb",[uv]:"fire-data-connect",[dv]:"fire-rtdb-compat",[hv]:"fire-fn",[fv]:"fire-fn-compat",[pv]:"fire-iid",[mv]:"fire-iid-compat",[gv]:"fire-fcm",[yv]:"fire-fcm-compat",[vv]:"fire-perf",[_v]:"fire-perf-compat",[wv]:"fire-rc",[bv]:"fire-rc-compat",[Ev]:"fire-gcs",[Iv]:"fire-gcs-compat",[Tv]:"fire-fst",[xv]:"fire-fst-compat",[Av]:"fire-vertex","fire-js":"fire-js",[kv]:"fire-js-all"};/**
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
 */const Ji=new Map,Rv=new Map,sc=new Map;function nd(n,e){try{n.container.addComponent(e)}catch(t){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yr(n){const e=n.name;if(sc.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,n);for(const t of Ji.values())nd(t,n);for(const t of Rv.values())nd(t,n);return!0}function jc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ft(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Pv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new Ys("app","Firebase",Pv);/**
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
 */class Nv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const Cr=Sv;function sf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(t||(t=Qh()),!t)throw on.create("no-options");const i=Ji.get(s);if(i){if(Fn(t,i.options)&&Fn(r,i.config))return i;throw on.create("duplicate-app",{appName:s})}const o=new By(s);for(const l of sc.values())o.addComponent(l);const c=new Nv(t,r,o);return Ji.set(s,c),c}function of(n=rc){const e=Ji.get(n);if(!e&&n===rc&&Qh())return sf();if(!e)throw on.create("no-app",{appName:n});return e}function an(n,e,t){var r;let s=(r=Cv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(c.join(" "));return}yr(new $n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dv="firebase-heartbeat-database",Ov=1,bs="firebase-heartbeat-store";let Ba=null;function af(){return Ba||(Ba=Xy(Dv,Ov,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bs)}catch(t){console.warn(t)}}}}).catch(n=>{throw on.create("idb-open",{originalErrorMessage:n.message})})),Ba}async function Mv(n){try{const t=(await af()).transaction(bs),r=await t.objectStore(bs).get(cf(n));return await t.done,r}catch(e){if(e instanceof Kt)jt.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(t.message)}}}async function rd(n,e){try{const r=(await af()).transaction(bs,"readwrite");await r.objectStore(bs).put(e,cf(n)),await r.done}catch(t){if(t instanceof Kt)jt.warn(t.message);else{const r=on.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jt.warn(r.message)}}}function cf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Lv=1024,Vv=30;class Bv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $v(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Vv){const o=Uv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sd(),{heartbeatsToSend:r,unsentEntries:s}=Fv(this._heartbeatsCache.heartbeats),i=Qi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return jt.warn(t),""}}}function sd(){return new Date().toISOString().substring(0,10)}function Fv(n,e=Lv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),id(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),id(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $v{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xy()?ky().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Mv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function id(n){return Qi(JSON.stringify({version:2,heartbeats:n})).length}function Uv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function jv(n){yr(new $n("platform-logger",e=>new ev(e),"PRIVATE")),yr(new $n("heartbeat",e=>new Bv(e),"PRIVATE")),an(nc,td,n),an(nc,td,"esm2017"),an("fire-js","")}jv("");var zv="firebase",qv="11.10.0";/**
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
 */an(zv,qv,"app");var od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,lf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(T,b,S){for(var E=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)E[Ne-2]=arguments[Ne];return _.prototype[b].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,w){w||(w=0);var T=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)T[b]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(b=0;16>b;++b)T[b]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],b=I.g[2];var S=I.g[3],E=_+(S^w&(b^S))+T[0]+3614090360&4294967295;_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+T[1]+3905402710&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+T[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+T[3]+3250441966&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+T[4]+4118548399&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+T[5]+1200080426&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+T[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+T[7]+4249261313&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+T[8]+1770035416&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+T[9]+2336552879&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+T[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+T[11]+2304563134&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+T[12]+1804603682&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+T[13]+4254626195&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+T[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+T[15]+1236535329&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(b^S&(w^b))+T[1]+4129170786&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+T[6]+3225465664&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+T[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+T[0]+3921069994&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+T[5]+3593408605&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+T[10]+38016083&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+T[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+T[4]+3889429448&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+T[9]+568446438&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+T[14]+3275163606&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+T[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+T[8]+1163531501&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+T[13]+2850285829&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+T[2]+4243563512&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+T[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+T[12]+2368359562&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(w^b^S)+T[5]+4294588738&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+T[8]+2272392833&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+T[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+T[14]+4259657740&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+T[1]+2763975236&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+T[4]+1272893353&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+T[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+T[10]+3200236656&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+T[13]+681279174&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+T[0]+3936430074&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+T[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+T[6]+76029189&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+T[9]+3654602809&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+T[12]+3873151461&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+T[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+T[2]+3299628645&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(b^(w|~S))+T[0]+4096336452&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+T[7]+1126891415&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+T[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+T[5]+4237533241&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+T[12]+1700485571&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+T[3]+2399980690&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+T[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+T[1]+2240044497&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+T[8]+1873313359&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+T[15]+4264355552&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+T[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+T[13]+1309151649&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+T[4]+4149444226&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+T[11]+3174756917&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+T[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,T=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=w;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<_;)if(T[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,T),b=0;break}}else for(;S<_;)if(T[b++]=I[S++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var T=0;32>T;T+=8)I[w++]=this.g[_]>>>T&255;return I};function i(I,_){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function o(I,_){this.h=_;for(var w=[],T=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;T&&S==_||(w[b]=S,T=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return x(u(-I));for(var _=[],w=1,T=0;I>=w;T++)_[T]=I/w|0,w*=4294967296;return new o(_,0)}function p(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return x(p(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(_,8)),T=f,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),E=parseInt(I.substring(b,b+S),_);8>S?(S=u(Math.pow(_,S)),T=T.j(S).add(u(E))):(T=T.j(w),T=T.add(u(E)))}return T}var f=l(0),m=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(k(this))return-x(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var T=this.i(w);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(k(this))return"-"+x(this).toString(I);for(var _=u(Math.pow(I,6)),w=this,T="";;){var b=q(w,_).g;w=N(w,b.j(_));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,A(w))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=N(this,I),k(I)?-1:A(I)?0:1};function x(I){for(var _=I.g.length,w=[],T=0;T<_;T++)w[T]=~I.g[T];return new o(w,~I.h).add(m)}n.abs=function(){return k(this)?x(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0,b=0;b<=_;b++){var S=T+(this.i(b)&65535)+(I.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);T=E>>>16,S&=65535,E&=65535,w[b]=E<<16|S}return new o(w,w[w.length-1]&-2147483648?-1:0)};function N(I,_){return I.add(x(_))}n.j=function(I){if(A(this)||A(I))return f;if(k(this))return k(I)?x(this).j(x(I)):x(x(this).j(I));if(k(I))return x(this.j(x(I)));if(0>this.l(y)&&0>I.l(y))return u(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],T=0;T<2*_;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<I.g.length;b++){var S=this.i(T)>>>16,E=this.i(T)&65535,Ne=I.i(b)>>>16,Je=I.i(b)&65535;w[2*T+2*b]+=E*Je,O(w,2*T+2*b),w[2*T+2*b+1]+=S*Je,O(w,2*T+2*b+1),w[2*T+2*b+1]+=E*Ne,O(w,2*T+2*b+1),w[2*T+2*b+2]+=S*Ne,O(w,2*T+2*b+2)}for(T=0;T<_;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=_;T<2*_;T++)w[T]=0;return new o(w,0)};function O(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function q(I,_){if(A(_))throw Error("division by zero");if(A(I))return new F(f,f);if(k(I))return _=q(x(I),_),new F(x(_.g),x(_.h));if(k(_))return _=q(I,x(_)),new F(x(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=_;0>=T.l(I);)w=he(w),T=he(T);var b=se(w,1),S=se(T,1);for(T=se(T,2),w=se(w,2);!A(T);){var E=S.add(T);0>=E.l(I)&&(b=b.add(w),S=E),T=se(T,1),w=se(w,1)}return _=N(I,b.j(_)),new F(b,_)}for(b=f;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=u(w),E=S.j(_);k(E)||0<E.l(I);)w-=T,S=u(w),E=S.j(_);A(S)&&(S=m),b=b.add(S),I=N(I,E)}return new F(b,I)}n.A=function(I){return q(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)&I.i(T);return new o(w,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)|I.i(T);return new o(w,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)^I.i(T);return new o(w,this.h^I.h)};function he(I){for(var _=I.g.length+1,w=[],T=0;T<_;T++)w[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(w,I.h)}function se(I,_){var w=_>>5;_%=32;for(var T=I.g.length-w,b=[],S=0;S<T;S++)b[S]=0<_?I.i(S+w)>>>_|I.i(S+w+1)<<32-_:I.i(S+w);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=p,cn=o}).apply(typeof od<"u"?od:typeof self<"u"?self:typeof window<"u"?window:{});var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uf,ss,df,Vi,ic,hf,ff,pf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,h){return a==Array.prototype||a==Object.prototype||(a[d]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ci=="object"&&Ci];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in h))break e;h=h[C]}a=a[a.length-1],g=h[a],d=d(g),d!=g&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var h=0,g=!1,C={next:function(){if(!g&&h<a.length){var R=h++;return{value:d(R,a[R]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function p(a,d,h){return a.call.apply(a.bind,arguments)}function f(a,d,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(d,C)}}return function(){return a.apply(d,arguments)}}function m(a,d,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:f,m.apply(null,arguments)}function y(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,d){function h(){}h.prototype=d.prototype,a.aa=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,C,R){for(var L=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)L[pe-2]=arguments[pe];return d.prototype[C].apply(g,L)}}function k(a){const d=a.length;if(0<d){const h=Array(d);for(let g=0;g<d;g++)h[g]=a[g];return h}return[]}function x(a,d){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(l(g)){const C=a.length||0,R=g.length||0;a.length=C+R;for(let L=0;L<R;L++)a[C+L]=g[L]}else a.push(g)}}class N{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var he=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function se(a,d,h){for(const g in a)d.call(h,a[g],g,a)}function I(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function _(a){const d={};for(const h in a)d[h]=a[h];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,d){let h,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(h in g)a[h]=g[h];for(let R=0;R<w.length;R++)h=w[R],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function b(a){var d=1;a=a.split(":");const h=[];for(;0<d&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function S(a){c.setTimeout(()=>{throw a},0)}function E(){var a=$r;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ne{constructor(){this.h=this.g=null}add(d,h){const g=Je.get();g.set(d,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Je=new N(()=>new at,a=>a.reset());class at{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let An,Yn=!1,$r=new Ne,xn=()=>{const a=c.Promise.resolve(void 0);An=()=>{a.then(Zn)}};var Zn=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(h){S(h)}var d=Je;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Yn=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Ur=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};c.addEventListener("test",h,d),c.removeEventListener("test",h,d)}catch{}return a})();function Xn(a,d){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(he){e:{try{q(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:di[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Xn.aa.h.call(this)}}A(Xn,Se);var di={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),Zl=0;function fa(a,d,h,g,C){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!g,this.ha=C,this.key=++Zl,this.da=this.fa=!1}function Sn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pt(a){this.src=a,this.g={},this.h=0}Pt.prototype.add=function(a,d,h,g,C){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var L=vt(a,d,g,C);return-1<L?(d=a[L],h||(d.fa=!1)):(d=new fa(d,this.src,R,!!g,C),d.fa=h,a.push(d)),d};function Nt(a,d){var h=d.type;if(h in a.g){var g=a.g[h],C=Array.prototype.indexOf.call(g,d,void 0),R;(R=0<=C)&&Array.prototype.splice.call(g,C,1),R&&(Sn(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function vt(a,d,h,g){for(var C=0;C<a.length;++C){var R=a[C];if(!R.da&&R.listener==d&&R.capture==!!h&&R.ha==g)return C}return-1}var Qn="closure_lm_"+(1e6*Math.random()|0),Jn={};function hi(a,d,h,g,C){if(Array.isArray(d)){for(var R=0;R<d.length;R++)hi(a,d[R],h,g,C);return null}return h=Jl(h),a&&a[kn]?a.K(d,h,u(g)?!!g.capture:!1,C):pa(a,d,h,!1,g,C)}function pa(a,d,h,g,C,R){if(!d)throw Error("Invalid event type");var L=u(C)?!!C.capture:!!C,pe=ga(a);if(pe||(a[Qn]=pe=new Pt(a)),h=pe.add(d,h,g,L,R),h.proxy)return h;if(g=Ng(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)Ur||(C=L),C===void 0&&(C=!1),a.addEventListener(d.toString(),g,C);else if(a.attachEvent)a.attachEvent(Ql(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ng(){function a(h){return d.call(a.src,a.listener,h)}const d=Dg;return a}function Xl(a,d,h,g,C){if(Array.isArray(d))for(var R=0;R<d.length;R++)Xl(a,d[R],h,g,C);else g=u(g)?!!g.capture:!!g,h=Jl(h),a&&a[kn]?(a=a.i,d=String(d).toString(),d in a.g&&(R=a.g[d],h=vt(R,h,g,C),-1<h&&(Sn(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete a.g[d],a.h--)))):a&&(a=ga(a))&&(d=a.g[d.toString()],a=-1,d&&(a=vt(d,h,g,C)),(h=-1<a?d[a]:null)&&ma(h))}function ma(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[kn])Nt(d.i,a);else{var h=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(h,g,a.capture):d.detachEvent?d.detachEvent(Ql(h),g):d.addListener&&d.removeListener&&d.removeListener(g),(h=ga(d))?(Nt(h,a),h.h==0&&(h.src=null,d[Qn]=null)):Sn(a)}}}function Ql(a){return a in Jn?Jn[a]:Jn[a]="on"+a}function Dg(a,d){if(a.da)a=!0;else{d=new Xn(d,this);var h=a.listener,g=a.ha||a.src;a.fa&&ma(a),a=h.call(g,d)}return a}function ga(a){return a=a[Qn],a instanceof Pt?a:null}var ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jl(a){return typeof a=="function"?a:(a[ya]||(a[ya]=function(d){return a.handleEvent(d)}),a[ya])}function Fe(){ut.call(this),this.i=new Pt(this),this.M=this,this.F=null}A(Fe,ut),Fe.prototype[kn]=!0,Fe.prototype.removeEventListener=function(a,d,h,g){Xl(this,a,d,h,g)};function Ke(a,d){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new Se(d,a);else if(d instanceof Se)d.target=d.target||a;else{var C=d;d=new Se(g,a),T(d,C)}if(C=!0,h)for(var R=h.length-1;0<=R;R--){var L=d.g=h[R];C=fi(L,g,!0,d)&&C}if(L=d.g=a,C=fi(L,g,!0,d)&&C,C=fi(L,g,!1,d)&&C,h)for(R=0;R<h.length;R++)L=d.g=h[R],C=fi(L,g,!1,d)&&C}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var h=a.g[d],g=0;g<h.length;g++)Sn(h[g]);delete a.g[d],a.h--}}this.F=null},Fe.prototype.K=function(a,d,h,g){return this.i.add(String(a),d,!1,h,g)},Fe.prototype.L=function(a,d,h,g){return this.i.add(String(a),d,!0,h,g)};function fi(a,d,h,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,R=0;R<d.length;++R){var L=d[R];if(L&&!L.da&&L.capture==h){var pe=L.listener,De=L.ha||L.src;L.fa&&Nt(a.i,L),C=pe.call(De,g)!==!1&&C}}return C&&!g.defaultPrevented}function eu(a,d,h){if(typeof a=="function")h&&(a=m(a,h));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function tu(a){a.g=eu(()=>{a.g=null,a.i&&(a.i=!1,tu(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Og extends ut{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:tu(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(a){ut.call(this),this.h=a,this.g={}}A(jr,ut);var nu=[];function ru(a){se(a.g,function(d,h){this.g.hasOwnProperty(h)&&ma(d)},a),a.g={}}jr.prototype.N=function(){jr.aa.N.call(this),ru(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var va=c.JSON.stringify,Mg=c.JSON.parse,Lg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function _a(){}_a.prototype.h=null;function su(a){return a.h||(a.h=a.i())}function iu(){}var zr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wa(){Se.call(this,"d")}A(wa,Se);function ba(){Se.call(this,"c")}A(ba,Se);var Cn={},ou=null;function pi(){return ou=ou||new Fe}Cn.La="serverreachability";function au(a){Se.call(this,Cn.La,a)}A(au,Se);function qr(a){const d=pi();Ke(d,new au(d))}Cn.STAT_EVENT="statevent";function cu(a,d){Se.call(this,Cn.STAT_EVENT,a),this.stat=d}A(cu,Se);function Ye(a){const d=pi();Ke(d,new cu(d,a))}Cn.Ma="timingevent";function lu(a,d){Se.call(this,Cn.Ma,a),this.size=d}A(lu,Se);function Hr(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function Wr(){this.g=!0}Wr.prototype.xa=function(){this.g=!1};function Vg(a,d,h,g,C,R){a.info(function(){if(a.g)if(R)for(var L="",pe=R.split("&"),De=0;De<pe.length;De++){var le=pe[De].split("=");if(1<le.length){var $e=le[0];le=le[1];var Ue=$e.split("_");L=2<=Ue.length&&Ue[1]=="type"?L+($e+"="+le+"&"):L+($e+"=redacted&")}}else L=null;else L=R;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+d+`
`+h+`
`+L})}function Bg(a,d,h,g,C,R,L){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+d+`
`+h+`
`+R+" "+L})}function er(a,d,h,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+$g(a,h)+(g?" "+g:"")})}function Fg(a,d){a.info(function(){return"TIMEOUT: "+d})}Wr.prototype.info=function(){};function $g(a,d){if(!a.g)return d;if(!d)return null;try{var h=JSON.parse(d);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var R=C[0];if(R!="noop"&&R!="stop"&&R!="close")for(var L=1;L<C.length;L++)C[L]=""}}}}return va(h)}catch{return d}}var mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ea;function gi(){}A(gi,_a),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},Ea=new gi;function Yt(a,d,h,g){this.j=a,this.i=d,this.l=h,this.R=g||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new du}function du(){this.i=null,this.g="",this.h=!1}var hu={},Ia={};function Ta(a,d,h){a.L=1,a.v=wi(Dt(d)),a.m=h,a.P=!0,fu(a,null)}function fu(a,d){a.F=Date.now(),yi(a),a.A=Dt(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),ku(h.i,"t",g),a.C=0,h=a.j.J,a.h=new du,a.g=Hu(a.j,h?d:null,!a.m),0<a.O&&(a.M=new Og(m(a.Y,a,a.g),a.O)),d=a.U,h=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(nu[0]=C.toString()),C=nu);for(var R=0;R<C.length;R++){var L=hi(h,C[R],g||d.handleEvent,!1,d.h||d);if(!L)break;d.g[L.key]=L}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),qr(),Vg(a.i,a.u,a.A,a.l,a.R,a.m)}Yt.prototype.ca=function(a){a=a.target;const d=this.M;d&&Ot(a)==3?d.j():this.Y(a)},Yt.prototype.Y=function(a){try{if(a==this.g)e:{const Ue=Ot(this.g);var d=this.g.Ba();const rr=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Ou(this.g)))){this.J||Ue!=4||d==7||(d==8||0>=rr?qr(3):qr(2)),Aa(this);var h=this.g.Z();this.X=h;t:if(pu(this)){var g=Ou(this.g);a="";var C=g.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),Gr(this);var L="";break t}this.h.i=new c.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(R&&d==C-1)});g.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,Bg(this.i,this.u,this.A,this.l,this.R,Ue,h),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,De=this.g;if((pe=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(pe)){var le=pe;break t}}le=null}if(h=le)er(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xa(this,h);else{this.o=!1,this.s=3,Ye(12),Rn(this),Gr(this);break e}}if(this.P){h=!0;let dt;for(;!this.J&&this.C<L.length;)if(dt=Ug(this,L),dt==Ia){Ue==4&&(this.s=4,Ye(14),h=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==hu){this.s=4,Ye(15),er(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else er(this.i,this.l,dt,null),xa(this,dt);if(pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||L.length!=0||this.h.h||(this.s=1,Ye(16),h=!1),this.o=this.o&&h,!h)er(this.i,this.l,L,"[Invalid Chunked Response]"),Rn(this),Gr(this);else if(0<L.length&&!this.W){this.W=!0;var $e=this.j;$e.g==this&&$e.ba&&!$e.M&&($e.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Na($e),$e.M=!0,Ye(11))}}else er(this.i,this.l,L,null),xa(this,L);Ue==4&&Rn(this),this.o&&!this.J&&(Ue==4?Uu(this.j,this):(this.o=!1,yi(this)))}else sy(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),Rn(this),Gr(this)}}}catch{}finally{}};function pu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ug(a,d){var h=a.C,g=d.indexOf(`
`,h);return g==-1?Ia:(h=Number(d.substring(h,g)),isNaN(h)?hu:(g+=1,g+h>d.length?Ia:(d=d.slice(g,g+h),a.C=g+h,d)))}Yt.prototype.cancel=function(){this.J=!0,Rn(this)};function yi(a){a.S=Date.now()+a.I,mu(a,a.I)}function mu(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hr(m(a.ba,a),d)}function Aa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Yt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Fg(this.i,this.A),this.L!=2&&(qr(),Ye(17)),Rn(this),this.s=2,Gr(this)):mu(this,this.S-a)};function Gr(a){a.j.G==0||a.J||Uu(a.j,a)}function Rn(a){Aa(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,ru(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function xa(a,d){try{var h=a.j;if(h.G!=0&&(h.g==a||ka(h.h,a))){if(!a.K&&ka(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)xi(h),Ti(h);else break e;Pa(h),Ye(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=Hr(m(h.Za,h),6e3));if(1>=vu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Nn(h,11)}else if((a.K||h.g==a)&&xi(h),!O(d))for(C=h.Da.g.parse(d),d=0;d<C.length;d++){let le=C[d];if(h.T=le[0],le=le[1],h.G==2)if(le[0]=="c"){h.K=le[1],h.ia=le[2];const $e=le[3];$e!=null&&(h.la=$e,h.j.info("VER="+h.la));const Ue=le[4];Ue!=null&&(h.Aa=Ue,h.j.info("SVER="+h.Aa));const rr=le[5];rr!=null&&typeof rr=="number"&&0<rr&&(g=1.5*rr,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const dt=a.g;if(dt){const Si=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var R=g.h;R.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Sa(R,R.h),R.h=null))}if(g.D){const Da=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(g.ya=Da,ge(g.I,g.D,Da))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var L=a;if(g.qa=qu(g,g.J?g.ia:null,g.W),L.K){_u(g.h,L);var pe=L,De=g.L;De&&(pe.I=De),pe.B&&(Aa(pe),yi(pe)),g.g=L}else Fu(g);0<h.i.length&&Ai(h)}else le[0]!="stop"&&le[0]!="close"||Nn(h,7);else h.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Nn(h,7):Ra(h):le[0]!="noop"&&h.l&&h.l.ta(le),h.v=0)}}qr(4)}catch{}}var jg=class{constructor(a,d){this.g=a,this.map=d}};function gu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vu(a){return a.h?1:a.g?a.g.size:0}function ka(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Sa(a,d){a.g?a.g.add(d):a.h=d}function _u(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}gu.prototype.cancel=function(){if(this.i=wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.D);return d}return k(a.i)}function zg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],h=a.length,g=0;g<h;g++)d.push(a[g]);return d}d=[],h=0;for(g in a)d[h++]=a[g];return d}function qg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var h=0;h<a;h++)d.push(h);return d}d=[],h=0;for(const g in a)d[h++]=g;return d}}}function bu(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var h=qg(a),g=zg(a),C=g.length,R=0;R<C;R++)d.call(void 0,g[R],h&&h[R],a)}var Eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hg(a,d){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),C=null;if(0<=g){var R=a[h].substring(0,g);C=a[h].substring(g+1)}else R=a[h];d(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Pn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pn){this.h=a.h,vi(this,a.j),this.o=a.o,this.g=a.g,_i(this,a.s),this.l=a.l;var d=a.i,h=new Zr;h.i=d.i,d.g&&(h.g=new Map(d.g),h.h=d.h),Iu(this,h),this.m=a.m}else a&&(d=String(a).match(Eu))?(this.h=!1,vi(this,d[1]||"",!0),this.o=Kr(d[2]||""),this.g=Kr(d[3]||"",!0),_i(this,d[4]),this.l=Kr(d[5]||"",!0),Iu(this,d[6]||"",!0),this.m=Kr(d[7]||"")):(this.h=!1,this.i=new Zr(null,this.h))}Pn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Yr(d,Tu,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Yr(d,Tu,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Yr(h,h.charAt(0)=="/"?Kg:Gg,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Yr(h,Zg)),a.join("")};function Dt(a){return new Pn(a)}function vi(a,d,h){a.j=h?Kr(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function _i(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Iu(a,d,h){d instanceof Zr?(a.i=d,Xg(a.i,a.h)):(h||(d=Yr(d,Yg)),a.i=new Zr(d,a.h))}function ge(a,d,h){a.i.set(d,h)}function wi(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Kr(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Yr(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,Wg),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Wg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tu=/[#\/\?@]/g,Gg=/[#\?:]/g,Kg=/[#\?]/g,Yg=/[#\?@]/g,Zg=/#/g;function Zr(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Zt(a){a.g||(a.g=new Map,a.h=0,a.i&&Hg(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}n=Zr.prototype,n.add=function(a,d){Zt(this),this.i=null,a=tr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function Au(a,d){Zt(a),d=tr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function xu(a,d){return Zt(a),d=tr(a,d),a.g.has(d)}n.forEach=function(a,d){Zt(this),this.g.forEach(function(h,g){h.forEach(function(C){a.call(d,C,g,this)},this)},this)},n.na=function(){Zt(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),h=[];for(let g=0;g<d.length;g++){const C=a[g];for(let R=0;R<C.length;R++)h.push(d[g])}return h},n.V=function(a){Zt(this);let d=[];if(typeof a=="string")xu(this,a)&&(d=d.concat(this.g.get(tr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)d=d.concat(a[h])}return d},n.set=function(a,d){return Zt(this),this.i=null,a=tr(this,a),xu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ku(a,d,h){Au(a,d),0<h.length&&(a.i=null,a.g.set(tr(a,d),k(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var h=0;h<d.length;h++){var g=d[h];const R=encodeURIComponent(String(g)),L=this.V(g);for(g=0;g<L.length;g++){var C=R;L[g]!==""&&(C+="="+encodeURIComponent(String(L[g]))),a.push(C)}}return this.i=a.join("&")};function tr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Xg(a,d){d&&!a.j&&(Zt(a),a.i=null,a.g.forEach(function(h,g){var C=g.toLowerCase();g!=C&&(Au(this,g),ku(this,C,h))},a)),a.j=d}function Qg(a,d){const h=new Wr;if(c.Image){const g=new Image;g.onload=y(Xt,h,"TestLoadImage: loaded",!0,d,g),g.onerror=y(Xt,h,"TestLoadImage: error",!1,d,g),g.onabort=y(Xt,h,"TestLoadImage: abort",!1,d,g),g.ontimeout=y(Xt,h,"TestLoadImage: timeout",!1,d,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function Jg(a,d){const h=new Wr,g=new AbortController,C=setTimeout(()=>{g.abort(),Xt(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(R=>{clearTimeout(C),R.ok?Xt(h,"TestPingServer: ok",!0,d):Xt(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),Xt(h,"TestPingServer: error",!1,d)})}function Xt(a,d,h,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(h)}catch{}}function ey(){this.g=new Lg}function ty(a,d,h){const g=h||"";try{bu(a,function(C,R){let L=C;u(C)&&(L=va(C)),d.push(g+R+"="+encodeURIComponent(L))})}catch(C){throw d.push(g+"type="+encodeURIComponent("_badmap")),C}}function bi(a){this.l=a.Ub||null,this.j=a.eb||!1}A(bi,_a),bi.prototype.g=function(){return new Ei(this.l,this.j)},bi.prototype.i=(function(a){return function(){return a}})({});function Ei(a,d){Fe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ei,Fe),n=Ei.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Qr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Su(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Su(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Xr(this):Qr(this),this.readyState==3&&Su(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Xr(this))},n.Qa=function(a){this.g&&(this.response=a,Xr(this))},n.ga=function(){this.g&&Xr(this)};function Xr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qr(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function Qr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cu(a){let d="";return se(a,function(h,g){d+=g,d+=":",d+=h,d+=`\r
`}),d}function Ca(a,d,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Cu(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ge(a,d,h))}function be(a){Fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(be,Fe);var ny=/^https?$/i,ry=["POST","PUT"];n=be.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ea.g(),this.v=this.o?su(this.o):su(Ea),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(R){Ru(this,R);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)h.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())h.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ry,d,void 0))||g||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,L]of h)this.g.setRequestHeader(R,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Du(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){Ru(this,R)}};function Ru(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Pu(a),Ii(a)}function Pu(a){a.A||(a.A=!0,Ke(a,"complete"),Ke(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ke(this,"complete"),Ke(this,"abort"),Ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Nu(this):this.bb())},n.bb=function(){Nu(this)};function Nu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ot(a)!=4||a.Z()!=2)){if(a.u&&Ot(a)==4)eu(a.Ea,0,a);else if(Ke(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var g;if(g=L===0){var C=String(a.D).match(Eu)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!ny.test(C?C.toLowerCase():"")}h=g}if(h)Ke(a,"complete"),Ke(a,"success");else{a.m=6;try{var R=2<Ot(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",Pu(a)}}finally{Ii(a)}}}}function Ii(a,d){if(a.g){Du(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ke(a,"ready");try{h.onreadystatechange=g}catch{}}}function Du(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Mg(d)}};function Ou(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sy(a){const d={};a=(a.g&&2<=Ot(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(O(a[g]))continue;var h=b(a[g]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=d[C]||[];d[C]=R,R.push(h)}I(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function Mu(a){this.Aa=0,this.i=[],this.j=new Wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,a),this.cb=Jr("retryDelaySeedMs",1e4,a),this.Wa=Jr("forwardChannelMaxRetries",2,a),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new gu(a&&a.concurrentRequestLimit),this.Da=new ey,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mu.prototype,n.la=8,n.G=1,n.connect=function(a,d,h,g){Ye(0),this.W=a,this.H=d||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=qu(this,null,this.W),Ai(this)};function Ra(a){if(Lu(a),a.G==3){var d=a.U++,h=Dt(a.I);if(ge(h,"SID",a.K),ge(h,"RID",d),ge(h,"TYPE","terminate"),es(a,h),d=new Yt(a,a.j,d),d.L=2,d.v=wi(Dt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=d.v,h=!0),h||(d.g=Hu(d.j,null),d.g.ea(d.v)),d.F=Date.now(),yi(d)}zu(a)}function Ti(a){a.g&&(Na(a),a.g.cancel(),a.g=null)}function Lu(a){Ti(a),a.u&&(c.clearTimeout(a.u),a.u=null),xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ai(a){if(!yu(a.h)&&!a.s){a.s=!0;var d=a.Ga;An||xn(),Yn||(An(),Yn=!0),$r.add(d,a),a.B=0}}function iy(a,d){return vu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hr(m(a.Ga,a,d),ju(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Yt(this,this.j,a);let R=this.o;if(this.S&&(R?(R=_(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(C.H=R,R=null),this.P)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=Bu(this,C,d),h=Dt(this.I),ge(h,"RID",a),ge(h,"CVER",22),this.D&&ge(h,"X-HTTP-Session-Id",this.D),es(this,h),R&&(this.O?d="headers="+encodeURIComponent(String(Cu(R)))+"&"+d:this.m&&Ca(h,this.m,R)),Sa(this.h,C),this.Ua&&ge(h,"TYPE","init"),this.P?(ge(h,"$req",d),ge(h,"SID","null"),C.T=!0,Ta(C,h,null)):Ta(C,h,d),this.G=2}}else this.G==3&&(a?Vu(this,a):this.i.length==0||yu(this.h)||Vu(this))};function Vu(a,d){var h;d?h=d.l:h=a.U++;const g=Dt(a.I);ge(g,"SID",a.K),ge(g,"RID",h),ge(g,"AID",a.T),es(a,g),a.m&&a.o&&Ca(g,a.m,a.o),h=new Yt(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Bu(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Sa(a.h,h),Ta(h,g,d)}function es(a,d){a.H&&se(a.H,function(h,g){ge(d,g,h)}),a.l&&bu({},function(h,g){ge(d,g,h)})}function Bu(a,d,h){h=Math.min(a.i.length,h);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let R=-1;for(;;){const L=["count="+h];R==-1?0<h?(R=C[0].g,L.push("ofs="+R)):R=0:L.push("ofs="+R);let pe=!0;for(let De=0;De<h;De++){let le=C[De].g;const $e=C[De].map;if(le-=R,0>le)R=Math.max(0,C[De].g-100),pe=!1;else try{ty($e,L,"req"+le+"_")}catch{g&&g($e)}}if(pe){g=L.join("&");break e}}}return a=a.i.splice(0,h),d.D=a,g}function Fu(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;An||xn(),Yn||(An(),Yn=!0),$r.add(d,a),a.v=0}}function Pa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hr(m(a.Fa,a),ju(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,$u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hr(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),Ti(this),$u(this))};function Na(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function $u(a){a.g=new Yt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Dt(a.qa);ge(d,"RID","rpc"),ge(d,"SID",a.K),ge(d,"AID",a.T),ge(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(d,"TO",a.ja),ge(d,"TYPE","xmlhttp"),es(a,d),a.m&&a.o&&Ca(d,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=wi(Dt(d)),h.m=null,h.P=!0,fu(h,a)}n.Za=function(){this.C!=null&&(this.C=null,Ti(this),Pa(this),Ye(19))};function xi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Uu(a,d){var h=null;if(a.g==d){xi(a),Na(a),a.g=null;var g=2}else if(ka(a.h,d))h=d.D,_u(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){h=d.m?d.m.length:0,d=Date.now()-d.F;var C=a.B;g=pi(),Ke(g,new lu(g,h)),Ai(a)}else Fu(a);else if(C=d.s,C==3||C==0&&0<d.X||!(g==1&&iy(a,d)||g==2&&Pa(a)))switch(h&&0<h.length&&(d=a.h,d.i=d.i.concat(h)),C){case 1:Nn(a,5);break;case 4:Nn(a,10);break;case 3:Nn(a,6);break;default:Nn(a,2)}}}function ju(a,d){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*d}function Nn(a,d){if(a.j.info("Error code "+d),d==2){var h=m(a.fb,a),g=a.Xa;const C=!g;g=new Pn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vi(g,"https"),wi(g),C?Qg(g.toString(),h):Jg(g.toString(),h)}else Ye(2);a.G=0,a.l&&a.l.sa(d),zu(a),Lu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function zu(a){if(a.G=0,a.ka=[],a.l){const d=wu(a.h);(d.length!=0||a.i.length!=0)&&(x(a.ka,d),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function qu(a,d,h){var g=h instanceof Pn?Dt(h):new Pn(h);if(g.g!="")d&&(g.g=d+"."+g.g),_i(g,g.s);else{var C=c.location;g=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var R=new Pn(null);g&&vi(R,g),d&&(R.g=d),C&&_i(R,C),h&&(R.l=h),g=R}return h=a.D,d=a.ya,h&&d&&ge(g,h,d),ge(g,"VER",a.la),es(a,g),g}function Hu(a,d,h){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new be(new bi({eb:h})):new be(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wu(){}n=Wu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ki(){}ki.prototype.g=function(a,d){return new st(a,d)};function st(a,d){Fe.call(this),this.g=new Mu(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!O(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new nr(this)}A(st,Fe),st.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},st.prototype.close=function(){Ra(this.g)},st.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=va(a),a=h);d.i.push(new jg(d.Ya++,a)),d.G==3&&Ai(d)},st.prototype.N=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,st.aa.N.call(this)};function Gu(a){wa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}A(Gu,wa);function Ku(){ba.call(this),this.status=1}A(Ku,ba);function nr(a){this.g=a}A(nr,Wu),nr.prototype.ua=function(){Ke(this.g,"a")},nr.prototype.ta=function(a){Ke(this.g,new Gu(a))},nr.prototype.sa=function(a){Ke(this.g,new Ku)},nr.prototype.ra=function(){Ke(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,st.prototype.send=st.prototype.o,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,pf=function(){return new ki},ff=function(){return pi()},hf=Cn,ic={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,Vi=mi,uu.COMPLETE="complete",df=uu,iu.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,ss=iu,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,uf=be}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});const ad="@firebase/firestore",cd="4.8.0";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */const Un=new $c("@firebase/firestore");function ir(){return Un.logLevel}function j(n,...e){if(Un.logLevel<=ie.DEBUG){const t=e.map(zc);Un.debug(`Firestore (${Rr}): ${n}`,...t)}}function zt(n,...e){if(Un.logLevel<=ie.ERROR){const t=e.map(zc);Un.error(`Firestore (${Rr}): ${n}`,...t)}}function dn(n,...e){if(Un.logLevel<=ie.WARN){const t=e.map(zc);Un.warn(`Firestore (${Rr}): ${n}`,...t)}}function zc(n){if(typeof n=="string")return n;try{/**
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
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,mf(n,r,t)}function mf(n,e,t){let r=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw zt(r),new Error(r)}function de(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||mf(e,s,r)}function J(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ze.UNAUTHENTICATED)))}shutdown(){}}class Wv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Gv{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ut,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ut)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new gf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class Kv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Yv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Kv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ld{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ld(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ld(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Xv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function yf(){return new TextEncoder}/**
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
 */class qc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Xv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function oc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return re(r,s);{const i=yf(),o=Qv(i.encode(ud(n,t)),i.encode(ud(e,t)));return o!==0?o:re(r,s)}}t+=r>65535?2:1}return re(n.length,e.length)}function ud(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Qv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return re(n[t],e[t]);return re(n.length,e.length)}function vr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const dd="__name__";class _t{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return _t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _t?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=_t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return re(e.length,t.length)}static compareSegments(e,t){const r=_t.isNumericId(e),s=_t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?_t.extractNumericId(e).compare(_t.extractNumericId(t)):oc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class me extends _t{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new me(t)}static emptyPath(){return new me([])}}const Jv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends _t{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return Jv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dd}static keyField(){return new Ve([dd])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new B(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
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
 */function vf(n,e,t){if(!t)throw new B(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function e_(n,e,t,r){if(e===!0&&r===!0)throw new B(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hd(n){if(!H.isDocumentKey(n))throw new B(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fd(n){if(H.isDocumentKey(n))throw new B(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _f(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function No(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=No(n);throw new B(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function Xs(n,e){if(!_f(n))throw new B(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new B(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const pd=-62135596800,md=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*md);return new ye(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pd)throw new B(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/md}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xs(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:ke("string",ye._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
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
 */const Es=-1;function t_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new hn(s,H.empty(),e)}function n_(n){return new hn(n.readTime,n.key,Es)}class hn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hn(Q.min(),H.empty(),Es)}static max(){return new hn(Q.max(),H.empty(),Es)}}function r_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
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
 */const s_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class i_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Pr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==s_)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((p=>{o[u]=p,++c,c===i&&r(o)}),(p=>s(p)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function o_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Do{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Do.ue=-1;/**
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
 */const Hc=-1;function Oo(n){return n==null}function eo(n){return n===0&&1/n==-1/0}function a_(n){return typeof n=="number"&&Number.isInteger(n)&&!eo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const wf="";function c_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gd(e)),e=l_(n.get(t),e);return gd(e)}function l_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case wf:t+="";break;default:t+=i}}return t}function gd(n){return n+wf+""}/**
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
 */function yd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class we{constructor(e,t){this.comparator=e,this.root=t||Le.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ri(this.root,e,this.comparator,!0)}}class Ri{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Le.RED,this.left=s??Le.EMPTY,this.right=i??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Le(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vd(this.data.getIterator())}getIteratorFrom(e){return new vd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class vd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class it{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new it([])}unionWith(e){let t=new Ce(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Ef extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ef("Invalid base64 string: "+i):i}})(e);return new Be(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const u_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(de(!!n,39018),typeof n=="string"){let e=0;const t=u_.exec(n);if(de(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pn(n){return typeof n=="string"?Be.fromBase64String(n):Be.fromUint8Array(n)}/**
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
 */const If="server_timestamp",Tf="__type__",Af="__previous_value__",xf="__local_write_time__";function Wc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Tf])===null||t===void 0?void 0:t.stringValue)===If}function Mo(n){const e=n.mapValue.fields[Af];return Wc(e)?Mo(e):e}function Is(n){const e=fn(n.mapValue.fields[xf].timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */class d_{constructor(e,t,r,s,i,o,c,l,u,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=p}}const to="(default)";class Ts{constructor(e,t){this.projectId=e,this.database=t||to}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database===to}isEqual(e){return e instanceof Ts&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kf="__type__",h_="__max__",Pi={mapValue:{}},Sf="__vector__",no="value";function mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wc(n)?4:p_(n)?9007199254740991:f_(n)?10:11:K(28295,{value:n})}function St(n,e){if(n===e)return!0;const t=mn(n);if(t!==mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Is(n).isEqual(Is(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fn(s.timestampValue),c=fn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return pn(s.bytesValue).isEqual(pn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ie(s.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ie(s.integerValue)===Ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ie(s.doubleValue),c=Ie(i.doubleValue);return o===c?eo(o)===eo(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return vr(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(yd(o)!==yd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!St(o[l],c[l])))return!1;return!0})(n,e);default:return K(52216,{left:n})}}function As(n,e){return(n.values||[]).find((t=>St(t,e)))!==void 0}function _r(n,e){if(n===e)return 0;const t=mn(n),r=mn(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Ie(i.integerValue||i.doubleValue),l=Ie(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return _d(n.timestampValue,e.timestampValue);case 4:return _d(Is(n),Is(e));case 5:return oc(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=pn(i),l=pn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const p=re(c[u],l[u]);if(p!==0)return p}return re(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=re(Ie(i.latitude),Ie(o.latitude));return c!==0?c:re(Ie(i.longitude),Ie(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return wd(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var c,l,u,p;const f=i.fields||{},m=o.fields||{},y=(c=f[no])===null||c===void 0?void 0:c.arrayValue,A=(l=m[no])===null||l===void 0?void 0:l.arrayValue,k=re(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((p=A==null?void 0:A.values)===null||p===void 0?void 0:p.length)||0);return k!==0?k:wd(y,A)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Pi.mapValue&&o===Pi.mapValue)return 0;if(i===Pi.mapValue)return 1;if(o===Pi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},p=Object.keys(u);l.sort(),p.sort();for(let f=0;f<l.length&&f<p.length;++f){const m=oc(l[f],p[f]);if(m!==0)return m;const y=_r(c[l[f]],u[p[f]]);if(y!==0)return y}return re(l.length,p.length)})(n.mapValue,e.mapValue);default:throw K(23264,{le:t})}}function _d(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=fn(n),r=fn(e),s=re(t.seconds,r.seconds);return s!==0?s:re(t.nanos,r.nanos)}function wd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=_r(t[s],r[s]);if(i)return i}return re(t.length,r.length)}function wr(n){return ac(n)}function ac(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=fn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return pn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return H.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ac(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ac(t.fields[o])}`;return s+"}"})(n.mapValue):K(61005,{value:n})}function Bi(n){switch(mn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mo(n);return e?16+Bi(e):16;case 5:return 2*n.stringValue.length;case 6:return pn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Bi(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return bn(r.fields,((i,o)=>{s+=i.length+Bi(o)})),s})(n.mapValue);default:throw K(13486,{value:n})}}function bd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function cc(n){return!!n&&"integerValue"in n}function Gc(n){return!!n&&"arrayValue"in n}function Ed(n){return!!n&&"nullValue"in n}function Id(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fi(n){return!!n&&"mapValue"in n}function f_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[kf])===null||t===void 0?void 0:t.stringValue)===Sf}function ps(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ps(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ps(n.arrayValue.values[t]);return e}return Object.assign({},n)}function p_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===h_}/**
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
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(t)}setAll(e){let t=Ve.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=ps(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Fi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Fi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){bn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new tt(ps(this.value))}}function Cf(n){const e=[];return bn(n.fields,((t,r)=>{const s=new Ve([t]);if(Fi(r)){const i=Cf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new it(e)}/**
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
 */class qe{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new qe(e,0,Q.min(),Q.min(),Q.min(),tt.empty(),0)}static newFoundDocument(e,t,r,s){return new qe(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new qe(e,2,t,Q.min(),Q.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new qe(e,3,t,Q.min(),Q.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ro{constructor(e,t){this.position=e,this.inclusive=t}}function Td(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),t.key):r=_r(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ad(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function m_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Rf{}class xe extends Rf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new y_(e,t,r):t==="array-contains"?new w_(e,r):t==="in"?new b_(e,r):t==="not-in"?new E_(e,r):t==="array-contains-any"?new I_(e,r):new xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new v_(e,r):new __(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_r(t,this.value)):t!==null&&mn(this.value)===mn(t)&&this.matchesComparison(_r(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends Rf{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new gt(e,t)}matches(e){return Pf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Pf(n){return n.op==="and"}function Nf(n){return g_(n)&&Pf(n)}function g_(n){for(const e of n.filters)if(e instanceof gt)return!1;return!0}function lc(n){if(n instanceof xe)return n.field.canonicalString()+n.op.toString()+wr(n.value);if(Nf(n))return n.filters.map((e=>lc(e))).join(",");{const e=n.filters.map((t=>lc(t))).join(",");return`${n.op}(${e})`}}function Df(n,e){return n instanceof xe?(function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)})(n,e):n instanceof gt?(function(r,s){return s instanceof gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Df(o,s.filters[c])),!0):!1})(n,e):void K(19439)}function Of(n){return n instanceof xe?(function(t){return`${t.field.canonicalString()} ${t.op} ${wr(t.value)}`})(n):n instanceof gt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Of).join(" ,")+"}"})(n):"Filter"}class y_ extends xe{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class v_ extends xe{constructor(e,t){super(e,"in",t),this.keys=Mf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class __ extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Mf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Mf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>H.fromName(r.referenceValue)))}class w_ extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gc(t)&&As(t.arrayValue,this.value)}}class b_ extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&As(this.value.arrayValue,t)}}class E_ extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!As(this.value.arrayValue,t)}}class I_ extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>As(this.value.arrayValue,r)))}}/**
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
 */class T_{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function xd(n,e=null,t=[],r=[],s=null,i=null,o=null){return new T_(n,e,t,r,s,i,o)}function Kc(n){const e=J(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>lc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>wr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>wr(r))).join(",")),e.Pe=t}return e.Pe}function Yc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!m_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Df(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ad(n.startAt,e.startAt)&&Ad(n.endAt,e.endAt)}function uc(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Dr{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function A_(n,e,t,r,s,i,o,c){return new Dr(n,e,t,r,s,i,o,c)}function Lo(n){return new Dr(n)}function kd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lf(n){return n.collectionGroup!==null}function ms(n){const e=J(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ce(Ve.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new xs(i,r))})),t.has(Ve.keyField().canonicalString())||e.Te.push(new xs(Ve.keyField(),r))}return e.Te}function bt(n){const e=J(n);return e.Ie||(e.Ie=x_(e,ms(n))),e.Ie}function x_(n,e){if(n.limitType==="F")return xd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new xs(s.field,i)}));const t=n.endAt?new ro(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ro(n.startAt.position,n.startAt.inclusive):null;return xd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function dc(n,e){const t=n.filters.concat([e]);return new Dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function hc(n,e,t){return new Dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vo(n,e){return Yc(bt(n),bt(e))&&n.limitType===e.limitType}function Vf(n){return`${Kc(bt(n))}|lt:${n.limitType}`}function or(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Of(s))).join(", ")}]`),Oo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>wr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>wr(s))).join(",")),`Target(${r})`})(bt(n))}; limitType=${n.limitType})`}function Bo(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ms(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=Td(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,ms(r),s)||r.endAt&&!(function(o,c,l){const u=Td(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,ms(r),s))})(n,e)}function k_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Bf(n){return(e,t)=>{let r=!1;for(const s of ms(n)){const i=S_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function S_(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?_r(l,u):K(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
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
 */class Wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return bf(this.inner)}size(){return this.innerSize}}/**
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
 */const C_=new we(H.comparator);function qt(){return C_}const Ff=new we(H.comparator);function is(...n){let e=Ff;for(const t of n)e=e.insert(t.key,t);return e}function $f(n){let e=Ff;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function On(){return gs()}function Uf(){return gs()}function gs(){return new Wn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const R_=new we(H.comparator),P_=new Ce(H.comparator);function oe(...n){let e=P_;for(const t of n)e=e.add(t);return e}const N_=new Ce(re);function D_(){return N_}/**
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
 */function Zc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eo(e)?"-0":e}}function jf(n){return{integerValue:""+n}}function O_(n,e){return a_(e)?jf(e):Zc(n,e)}/**
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
 */class Fo{constructor(){this._=void 0}}function M_(n,e,t){return n instanceof ks?(function(s,i){const o={fields:{[Tf]:{stringValue:If},[xf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wc(i)&&(i=Mo(i)),i&&(o.fields[Af]=i),{mapValue:o}})(t,e):n instanceof Ss?qf(n,e):n instanceof Cs?Hf(n,e):(function(s,i){const o=zf(s,i),c=Sd(o)+Sd(s.Ee);return cc(o)&&cc(s.Ee)?jf(c):Zc(s.serializer,c)})(n,e)}function L_(n,e,t){return n instanceof Ss?qf(n,e):n instanceof Cs?Hf(n,e):t}function zf(n,e){return n instanceof so?(function(r){return cc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ks extends Fo{}class Ss extends Fo{constructor(e){super(),this.elements=e}}function qf(n,e){const t=Wf(e);for(const r of n.elements)t.some((s=>St(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Cs extends Fo{constructor(e){super(),this.elements=e}}function Hf(n,e){let t=Wf(e);for(const r of n.elements)t=t.filter((s=>!St(s,r)));return{arrayValue:{values:t}}}class so extends Fo{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Sd(n){return Ie(n.integerValue||n.doubleValue)}function Wf(n){return Gc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class V_{constructor(e,t){this.field=e,this.transform=t}}function B_(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Ss&&s instanceof Ss||r instanceof Cs&&s instanceof Cs?vr(r.elements,s.elements,St):r instanceof so&&s instanceof so?St(r.Ee,s.Ee):r instanceof ks&&s instanceof ks})(n.transform,e.transform)}class F_{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $i(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $o{}function Gf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Uo(n.key,Xe.none()):new Qs(n.key,n.data,Xe.none());{const t=n.data,r=tt.empty();let s=new Ce(Ve.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new En(n.key,r,new it(s.toArray()),Xe.none())}}function $_(n,e,t){n instanceof Qs?(function(s,i,o){const c=s.value.clone(),l=Rd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof En?(function(s,i,o){if(!$i(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Rd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Kf(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ys(n,e,t,r){return n instanceof Qs?(function(i,o,c,l){if(!$i(i.precondition,o))return c;const u=i.value.clone(),p=Pd(i.fieldTransforms,l,o);return u.setAll(p),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof En?(function(i,o,c,l){if(!$i(i.precondition,o))return c;const u=Pd(i.fieldTransforms,l,o),p=o.data;return p.setAll(Kf(i)),p.setAll(u),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(n,e,t,r):(function(i,o,c){return $i(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function U_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=zf(r.transform,s||null);i!=null&&(t===null&&(t=tt.empty()),t.set(r.field,i))}return t||null}function Cd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vr(r,s,((i,o)=>B_(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qs extends $o{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class En extends $o{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Rd(n,e,t){const r=new Map;de(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,L_(o,c,t[s]))}return r}function Pd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,M_(i,o,e))}return r}class Uo extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class j_ extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class z_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ys(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ys(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Uf();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Gf(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),oe())}isEqual(e){return this.batchId===e.batchId&&vr(this.mutations,e.mutations,((t,r)=>Cd(t,r)))&&vr(this.baseMutations,e.baseMutations,((t,r)=>Cd(t,r)))}}class Xc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){de(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return R_})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xc(e,t,r,s)}}/**
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
 */class q_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class H_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ae,ae;function W_(n){switch(n){case P.OK:return K(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Yf(n){if(n===void 0)return zt("GRPC error has no .code"),P.UNKNOWN;switch(n){case Ae.OK:return P.OK;case Ae.CANCELLED:return P.CANCELLED;case Ae.UNKNOWN:return P.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return P.INTERNAL;case Ae.UNAVAILABLE:return P.UNAVAILABLE;case Ae.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ae.NOT_FOUND:return P.NOT_FOUND;case Ae.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ae.ABORTED:return P.ABORTED;case Ae.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ae.DATA_LOSS:return P.DATA_LOSS;default:return K(39323,{code:n})}}(ae=Ae||(Ae={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const G_=new cn([4294967295,4294967295],0);function Nd(n){const e=yf().encode(n),t=new lf;return t.update(e),new Uint8Array(t.digest())}function Dd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cn([t,r],0),new cn([s,i],0)]}class Qc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new os(`Invalid padding: ${t}`);if(r<0)throw new os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new os(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new os(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=cn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(cn.fromNumber(r)));return s.compare(G_)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Nd(e),[r,s]=Dd(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qc(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const t=Nd(e),[r,s]=Dd(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new jo(Q.min(),s,new we(re),qt(),oe())}}class Js{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Js(r,t,oe(),oe(),oe())}}/**
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
 */class Ui{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Zf{constructor(e,t){this.targetId=e,this.De=t}}class Xf{constructor(e,t,r=Be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Od{constructor(){this.ve=0,this.Ce=Md(),this.Fe=Be.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=oe(),t=oe(),r=oe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}})),new Js(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Md()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class K_{constructor(e){this.We=e,this.Ge=new Map,this.ze=qt(),this.je=Ni(),this.Je=Ni(),this.He=new we(re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:K(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(uc(i))if(r===0){const o=new H(i.path);this.Xe(t,o,qe.newNoDocument(o,Q.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,u)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=pn(r).toUint8Array()}catch(l){if(l instanceof Ef)return dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Qc(o,s,i)}catch(l){return dn(l instanceof os?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&uc(c.target)){const l=new H(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,qe.newNoDocument(l,e))}i.Ne&&(t.set(o,i.Le()),i.ke())}}));let r=oe();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new jo(e,t,this.He,this.ze,r);return this.ze=qt(),this.je=Ni(),this.Je=Ni(),this.He=new we(re),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Od,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ce(re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ce(re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Od),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ni(){return new we(H.comparator)}function Md(){return new we(H.comparator)}const Y_={asc:"ASCENDING",desc:"DESCENDING"},Z_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X_={and:"AND",or:"OR"};class Q_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fc(n,e){return n.useProto3Json||Oo(e)?e:{value:e}}function io(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function J_(n,e){return io(n,e.toTimestamp())}function Et(n){return de(!!n,49232),Q.fromTimestamp((function(t){const r=fn(t);return new ye(r.seconds,r.nanos)})(n))}function Jc(n,e){return pc(n,e).canonicalString()}function pc(n,e){const t=(function(s){return new me(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Jf(n){const e=me.fromString(n);return de(sp(e),10190,{key:e.toString()}),e}function mc(n,e){return Jc(n.databaseId,e.path)}function Fa(n,e){const t=Jf(e);if(t.get(1)!==n.databaseId.projectId)throw new B(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(tp(t))}function ep(n,e){return Jc(n.databaseId,e)}function ew(n){const e=Jf(n);return e.length===4?me.emptyPath():tp(e)}function gc(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tp(n){return de(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ld(n,e,t){return{name:mc(n,e),fields:t.value.mapValue.fields}}function tw(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,p){return u.useProto3Json?(de(p===void 0||typeof p=="string",58123),Be.fromBase64String(p||"")):(de(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Be.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const p=u.code===void 0?P.UNKNOWN:Yf(u.code);return new B(p,u.message||"")})(o);t=new Xf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fa(n,r.document.name),i=Et(r.document.updateTime),o=r.document.createTime?Et(r.document.createTime):Q.min(),c=new tt({mapValue:{fields:r.document.fields}}),l=qe.newFoundDocument(s,i,o,c),u=r.targetIds||[],p=r.removedTargetIds||[];t=new Ui(u,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fa(n,r.document),i=r.readTime?Et(r.readTime):Q.min(),o=qe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ui([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fa(n,r.document),i=r.removedTargetIds||[];t=new Ui([],i,s,null)}else{if(!("filter"in e))return K(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new H_(s,i),c=r.targetId;t=new Zf(c,o)}}return t}function nw(n,e){let t;if(e instanceof Qs)t={update:Ld(n,e.key,e.value)};else if(e instanceof Uo)t={delete:mc(n,e.key)};else if(e instanceof En)t={update:Ld(n,e.key,e.data),updateMask:dw(e.fieldMask)};else{if(!(e instanceof j_))return K(16599,{Rt:e.type});t={verify:mc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof ks)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ss)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof so)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw K(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:J_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)})(n,e.precondition)),t}function rw(n,e){return n&&n.length>0?(de(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Et(s.updateTime):Et(i);return o.isEqual(Q.min())&&(o=Et(i)),new F_(o,s.transformResults||[])})(t,e)))):[]}function sw(n,e){return{documents:[ep(n,e.path)]}}function iw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ep(n,s);const i=(function(u){if(u.length!==0)return rp(gt.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((p=>(function(m){return{field:ar(m.field),direction:cw(m.dir)}})(p)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=fc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:t,parent:s}}function ow(n){let e=ew(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){de(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=(function(f){const m=np(f);return m instanceof gt&&Nf(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((m=>(function(A){return new xs(cr(A.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(f){let m;return m=typeof f=="object"?f.value:f,Oo(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(f){const m=!!f.before,y=f.values||[];return new ro(y,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const m=!f.before,y=f.values||[];return new ro(y,m)})(t.endAt)),A_(e,s,o,i,c,"F",l,u)}function aw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function np(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=cr(t.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cr(t.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cr(t.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cr(t.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(n):n.fieldFilter!==void 0?(function(t){return xe.create(cr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return gt.create(t.compositeFilter.filters.map((r=>np(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(t.compositeFilter.op))})(n):K(30097,{filter:n})}function cw(n){return Y_[n]}function lw(n){return Z_[n]}function uw(n){return X_[n]}function ar(n){return{fieldPath:n.canonicalString()}}function cr(n){return Ve.fromServerFormat(n.fieldPath)}function rp(n){return n instanceof xe?(function(t){if(t.op==="=="){if(Id(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NAN"}};if(Ed(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Id(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NAN"}};if(Ed(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(t.field),op:lw(t.op),value:t.value}}})(n):n instanceof gt?(function(t){const r=t.getFilters().map((s=>rp(s)));return r.length===1?r[0]:{compositeFilter:{op:uw(t.op),filters:r}}})(n):K(54877,{filter:n})}function dw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function sp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class rn{constructor(e,t,r,s,i=Q.min(),o=Q.min(),c=Be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hw{constructor(e){this.gt=e}}function fw(n){const e=ow({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hc(e,e.limit,"L"):e}/**
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
 */class pw{constructor(){this.Dn=new mw}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(hn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class mw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ce(me.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ce(me.comparator)).toArray()}}/**
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
 */const Vd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ip=41943040;class et{static withCacheSize(e){return new et(e,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */et.DEFAULT_COLLECTION_PERCENTILE=10,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,et.DEFAULT=new et(ip,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),et.DISABLED=new et(-1,0,0);/**
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
 */const Bd="LruGarbageCollector",gw=1048576;function Fd([n,e],[t,r]){const s=re(n,t);return s===0?re(e,r):s}class yw{constructor(e){this.Tr=e,this.buffer=new Ce(Fd),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Fd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){j(Bd,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nr(t)?j(Bd,"Ignoring IndexedDB error during garbage collection: ",t):await Pr(t)}await this.Rr(3e5)}))}}class _w{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Do.ue);const r=new yw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Vd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vd):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,o,c,l,u;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(r=f,c=Date.now(),this.removeTargets(e,r,t)))).next((f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((f=>(u=Date.now(),ir()<=ie.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function ww(n,e){return new _w(n,e)}/**
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
 */class bw{constructor(){this.changes=new Wn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ew{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Iw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ys(r.mutation,s,it.empty(),ye.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,oe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=oe()){const s=On();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=is();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=On();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,oe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=qt();const o=gs(),c=(function(){return gs()})();return t.forEach(((l,u)=>{const p=r.get(u.key);s.has(u.key)&&(p===void 0||p.mutation instanceof En)?i=i.insert(u.key,u):p!==void 0?(o.set(u.key,p.mutation.getFieldMask()),ys(p.mutation,u,p.mutation.getFieldMask(),ye.now())):o.set(u.key,it.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,p)=>o.set(u,p))),t.forEach(((u,p)=>{var f;return c.set(u,new Ew(p,(f=o.get(u))!==null&&f!==void 0?f:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=gs();let s=new we(((o,c)=>o-c)),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let p=r.get(l)||it.empty();p=c.applyToLocalView(u,p),r.set(l,p);const f=(s.get(c.batchId)||oe()).add(l);s=s.insert(c.batchId,f)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,p=l.value,f=Uf();p.forEach((m=>{if(!i.has(m)){const y=Gf(t.get(m),r.get(m));y!==null&&f.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return D.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(On());let c=Es,l=i;return o.next((u=>D.forEach(u,((p,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),i.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next((m=>{l=l.insert(p,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,oe()))).next((p=>({batchId:c,changes:$f(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next((r=>{let s=is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=is();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(l=>{const u=(function(f,m){return new Dr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((p=>{p.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const p=u.getKey();o.get(p)===null&&(o=o.insert(p,qe.newInvalidDocument(p)))}));let c=is();return o.forEach(((l,u)=>{const p=i.get(l);p!==void 0&&ys(p.mutation,u,it.empty(),ye.now()),Bo(t,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class Tw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Et(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:fw(s.bundledQuery),readTime:Et(s.readTime)}})(t)),D.resolve()}}/**
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
 */class Aw{constructor(){this.overlays=new we(H.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=On();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=On(),i=t.length+1,o=new H(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new we(((u,p)=>u-p));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let p=i.get(u.largestBatchId);p===null&&(p=On(),i=i.insert(u.largestBatchId,p)),p.set(u.getKey(),u)}}const c=On(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,p)=>c.set(u,p))),!(c.size()>=s)););return D.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new q_(t,r));let i=this.kr.get(t);i===void 0&&(i=oe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class xw{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class el{constructor(){this.qr=new Ce(Pe.Qr),this.$r=new Ce(Pe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Pe(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Pe(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new H(new me([])),r=new Pe(t,e),s=new Pe(t,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new H(new me([])),r=new Pe(t,e),s=new Pe(t,e+1);let i=oe();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Pe(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return H.comparator(e.key,t.key)||re(e.Hr,t.Hr)}static Ur(e,t){return re(e.Hr,t.Hr)||H.comparator(e.key,t.key)}}/**
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
 */class kw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ce(Pe.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new z_(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new Pe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Hc:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Pe(t,0),s=new Pe(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(re);return t.forEach((s=>{const i=new Pe(s,0),o=new Pe(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new H(i),0);let c=new Ce(re);return this.Yr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),D.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){de(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(s=>{const i=new Pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Pe(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Sw{constructor(e){this.ni=e,this.docs=(function(){return new we(H.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let r=qt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qe.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=qt();const o=t.path,c=new H(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:p}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||r_(n_(p),r)<=0||(s.has(p.key)||Bo(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){K(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Cw(this)}getSize(e){return D.resolve(this.size)}}class Cw extends bw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Rw{constructor(e){this.persistence=e,this.ii=new Wn((t=>Kc(t)),Yc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.si=0,this.oi=new el,this.targetCount=0,this._i=br.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new br(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
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
 */class op{constructor(e,t){this.ai={},this.overlays={},this.ui=new Do(0),this.ci=!1,this.ci=!0,this.li=new xw,this.referenceDelegate=e(this),this.hi=new Rw(this),this.indexManager=new pw,this.remoteDocumentCache=(function(s){return new Sw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new hw(t),this.Ti=new Tw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Aw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new kw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new Pw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Pw extends i_{constructor(e){super(),this.currentSequenceNumber=e}}class tl{constructor(e){this.persistence=e,this.Ai=new el,this.Ri=null}static Vi(e){return new tl(e)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=H.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,Q.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class oo{constructor(e,t){this.persistence=e,this.gi=new Wn((r=>c_(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=ww(this,t)}static Vi(e,t){return new oo(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,Q.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bi(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class nl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=oe(),s=oe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nl(e,t.fromCache,r,s)}}/**
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
 */class Nw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Dw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Ay()?8:o_(We())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Nw;return this.ws(e,t,o).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,o,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(ir()<=ie.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(ir()<=ie.DEBUG&&j("QueryEngine","Query:",or(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ir()<=ie.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(t))):D.resolve())}ps(e,t){if(kd(t))return D.resolve(null);let r=bt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=hc(t,null,"F"),r=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=oe(...i);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(t,c);return this.Ds(t,u,o,l.readTime)?this.ps(e,hc(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ys(e,t,r,s){return kd(t)||s.isEqual(Q.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(t,i);return this.Ds(t,o,r,s)?D.resolve(null):(ir()<=ie.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),or(t)),this.vs(e,o,t,t_(s,Es)).next((c=>c)))}))}bs(e,t){let r=new Ce(Bf(e));return t.forEach(((s,i)=>{Bo(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return ir()<=ie.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",or(t)),this.gs.getDocumentsMatchingQuery(e,t,hn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const rl="LocalStore",Ow=3e8;class Mw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new we(re),this.Ms=new Wn((i=>Kc(i)),Yc),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Iw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Lw(n,e,t,r){return new Mw(n,e,t,r)}async function ap(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=oe();for(const u of s){o.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}for(const u of i){c.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function Vw(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,p){const f=u.batch,m=f.keys();let y=D.resolve();return m.forEach((A=>{y=y.next((()=>p.getEntry(l,A))).next((k=>{const x=u.docVersions.get(A);de(x!==null,48541),k.version.compareTo(x)<0&&(f.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),p.addEntry(k)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,f)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=oe();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function cp(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Bw(n,e){const t=J(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((p,f)=>{const m=s.get(f);if(!m)return;c.push(t.hi.removeMatchingKeys(i,p.removedDocuments,f).next((()=>t.hi.addMatchingKeys(i,p.addedDocuments,f))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Be.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(p.resumeToken,r)),s=s.insert(f,y),(function(k,x,N){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Ow?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(m,y,p)&&c.push(t.hi.updateTargetData(i,y))}));let l=qt(),u=oe();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))})),c.push(Fw(i,o,e.documentUpdates).next((p=>{l=p.Ls,u=p.ks}))),!r.isEqual(Q.min())){const p=t.hi.getLastRemoteSnapshotVersion(i).next((f=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(p)}return D.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function Fw(n,e,t){let r=oe(),s=oe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=qt();return t.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):j(rl,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function $w(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Hc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Uw(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next((o=>(s=new rn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function yc(n,e,t){const r=J(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Nr(o))throw o;j(rl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function $d(n,e,t){const r=J(n);let s=Q.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,p){const f=J(l),m=f.Ms.get(p);return m!==void 0?D.resolve(f.Fs.get(m)):f.hi.getTargetData(u,p)})(r,o,bt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?i:oe()))).next((c=>(jw(r,k_(e),c),{documents:c,qs:i})))))}function jw(n,e,t){let r=n.xs.get(e)||Q.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Ud{constructor(){this.activeTargetIds=D_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zw{constructor(){this.Fo=new Ud,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ud,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qw{xo(e){}shutdown(){}}/**
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
 */const jd="ConnectivityMonitor";class zd{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){j(jd,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){j(jd,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Di=null;function vc(){return Di===null?Di=(function(){return 268435456+Math.round(2147483648*Math.random())})():Di++,"0x"+Di.toString(16)}/**
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
 */const $a="RestConnection",Hw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ww{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===to?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=vc(),c=this.Go(e,t.toUriEncodedString());j($a,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),p=Sr(u);return this.jo(e,c,l,r,p).then((f=>(j($a,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw dn($a,`RPC '${e}' ${o} failed with error: `,f,"url: ",c,"request:",r),f}))}Jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=Hw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Gw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const je="WebChannelConnection";class Kw extends Ww{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const o=vc();return new Promise(((c,l)=>{const u=new uf;u.setWithCredentials(!0),u.listenOnce(df.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Vi.NO_ERROR:const f=u.getResponseJson();j(je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),c(f);break;case Vi.TIMEOUT:j(je,`RPC '${e}' ${o} timed out`),l(new B(P.DEADLINE_EXCEEDED,"Request time out"));break;case Vi.HTTP_ERROR:const m=u.getStatus();if(j(je,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const k=(function(N){const O=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(O)>=0?O:P.UNKNOWN})(A.status);l(new B(k,A.message))}else l(new B(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(P.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{j(je,`RPC '${e}' ${o} completed.`)}}));const p=JSON.stringify(s);j(je,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",p,r,15)}))}P_(e,t,r){const s=vc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pf(),c=ff(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=i.join("");j(je,`Creating RPC '${e}' stream ${s}: ${p}`,l);const f=o.createWebChannel(p,l);this.T_(f);let m=!1,y=!1;const A=new Gw({Ho:x=>{y?j(je,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(j(je,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),j(je,`RPC '${e}' stream ${s} sending:`,x),f.send(x))},Yo:()=>f.close()}),k=(x,N,O)=>{x.listen(N,(F=>{try{O(F)}catch(q){setTimeout((()=>{throw q}),0)}}))};return k(f,ss.EventType.OPEN,(()=>{y||(j(je,`RPC '${e}' stream ${s} transport opened.`),A.s_())})),k(f,ss.EventType.CLOSE,(()=>{y||(y=!0,j(je,`RPC '${e}' stream ${s} transport closed`),A.__(),this.I_(f))})),k(f,ss.EventType.ERROR,(x=>{y||(y=!0,dn(je,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),A.__(new B(P.UNAVAILABLE,"The operation could not be completed")))})),k(f,ss.EventType.MESSAGE,(x=>{var N;if(!y){const O=x.data[0];de(!!O,16349);const F=O,q=(F==null?void 0:F.error)||((N=F[0])===null||N===void 0?void 0:N.error);if(q){j(je,`RPC '${e}' stream ${s} received error:`,q);const he=q.status;let se=(function(w){const T=Ae[w];if(T!==void 0)return Yf(T)})(he),I=q.message;se===void 0&&(se=P.INTERNAL,I="Unknown error status: "+he+" with message "+q.message),y=!0,A.__(new B(se,I)),f.close()}else j(je,`RPC '${e}' stream ${s} received:`,O),A.a_(O)}})),k(c,hf.STAT_EVENT,(x=>{x.stat===ic.PROXY?j(je,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===ic.NOPROXY&&j(je,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{A.o_()}),0),A}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ua(){return typeof document<"u"?document:null}/**
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
 */function zo(n){return new Q_(n,!0)}/**
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
 */class lp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const qd="PersistentStream";class up{constructor(e,t,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new lp(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(zt(t.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new B(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return j(qd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(j(qd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Yw extends up{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=tw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Et(o.readTime):Q.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=gc(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=uc(l)?{documents:sw(i,l)}:{query:iw(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Qf(i,o.resumeToken);const u=fc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=io(i,o.snapshotVersion.toTimestamp());const u=fc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=aw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=gc(this.serializer),t.removeTarget=e,this.k_(t)}}class Zw extends up{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=rw(e.writeResults,e.commitTime),r=Et(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=gc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>nw(this.serializer,r)))};this.k_(t)}}/**
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
 */class Xw{}class Qw extends Xw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new B(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,pc(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(P.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,pc(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(P.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Jw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(zt(t),this._a=!1):j("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const jn="RemoteStore";class e0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Gn(this)&&(j(jn,"Restarting streams for network reachability change."),await(async function(l){const u=J(l);u.Ia.add(4),await ei(u),u.Aa.set("Unknown"),u.Ia.delete(4),await qo(u)})(this))}))})),this.Aa=new Jw(r,s)}}async function qo(n){if(Gn(n))for(const e of n.da)await e(!0)}async function ei(n){for(const e of n.da)await e(!1)}function dp(n,e){const t=J(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),al(t)?ol(t):Or(t).x_()&&il(t,e))}function sl(n,e){const t=J(n),r=Or(t);t.Ta.delete(e),r.x_()&&hp(t,e),t.Ta.size===0&&(r.x_()?r.B_():Gn(t)&&t.Aa.set("Unknown"))}function il(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Or(n).H_(e)}function hp(n,e){n.Ra.$e(e),Or(n).Y_(e)}function ol(n){n.Ra=new K_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Or(n).start(),n.Aa.aa()}function al(n){return Gn(n)&&!Or(n).M_()&&n.Ta.size>0}function Gn(n){return J(n).Ia.size===0}function fp(n){n.Ra=void 0}async function t0(n){n.Aa.set("Online")}async function n0(n){n.Ta.forEach(((e,t)=>{il(n,e)}))}async function r0(n,e){fp(n),al(n)?(n.Aa.la(e),ol(n)):n.Aa.set("Unknown")}async function s0(n,e,t){if(n.Aa.set("Online"),e instanceof Xf&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){j(jn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ao(n,r)}else if(e instanceof Ui?n.Ra.Ye(e):e instanceof Zf?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Q.min()))try{const r=await cp(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.Ta.get(u);p&&i.Ta.set(u,p.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const p=i.Ta.get(l);if(!p)return;i.Ta.set(l,p.withResumeToken(Be.EMPTY_BYTE_STRING,p.snapshotVersion)),hp(i,l);const f=new rn(p.target,l,u,p.sequenceNumber);il(i,f)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){j(jn,"Failed to raise snapshot:",r),await ao(n,r)}}async function ao(n,e,t){if(!Nr(e))throw e;n.Ia.add(1),await ei(n),n.Aa.set("Offline"),t||(t=()=>cp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{j(jn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qo(n)}))}function pp(n,e){return e().catch((t=>ao(n,t,e)))}async function Ho(n){const e=J(n),t=gn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Hc;for(;i0(e);)try{const s=await $w(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,o0(e,s)}catch(s){await ao(e,s)}mp(e)&&gp(e)}function i0(n){return Gn(n)&&n.Pa.length<10}function o0(n,e){n.Pa.push(e);const t=gn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function mp(n){return Gn(n)&&!gn(n).M_()&&n.Pa.length>0}function gp(n){gn(n).start()}async function a0(n){gn(n).na()}async function c0(n){const e=gn(n);for(const t of n.Pa)e.X_(t.mutations)}async function l0(n,e,t){const r=n.Pa.shift(),s=Xc.from(r,e,t);await pp(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ho(n)}async function u0(n,e){e&&gn(n).Z_&&await(async function(r,s){if((function(o){return W_(o)&&o!==P.ABORTED})(s.code)){const i=r.Pa.shift();gn(r).N_(),await pp(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ho(r)}})(n,e),mp(n)&&gp(n)}async function Hd(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),j(jn,"RemoteStore received new credentials");const r=Gn(t);t.Ia.add(3),await ei(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qo(t)}async function d0(n,e){const t=J(n);e?(t.Ia.delete(2),await qo(t)):e||(t.Ia.add(2),await ei(t),t.Aa.set("Unknown"))}function Or(n){return n.Va||(n.Va=(function(t,r,s){const i=J(t);return i.ia(),new Yw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:t0.bind(null,n),e_:n0.bind(null,n),n_:r0.bind(null,n),J_:s0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),al(n)?ol(n):n.Aa.set("Unknown")):(await n.Va.stop(),fp(n))}))),n.Va}function gn(n){return n.ma||(n.ma=(function(t,r,s){const i=J(t);return i.ia(),new Zw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:a0.bind(null,n),n_:u0.bind(null,n),ea:c0.bind(null,n),ta:l0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ho(n)):(await n.ma.stop(),n.Pa.length>0&&(j(jn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class cl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new cl(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ll(n,e){if(zt("AsyncQueue",`${e}: ${n}`),Nr(n))return new B(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class fr{static emptySet(e){return new fr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=is(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Wd{constructor(){this.fa=new we(H.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):K(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Er{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Er(e,t,fr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class h0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class f0{constructor(){this.queries=Gd(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=J(t),i=s.queries;s.queries=Gd(),i.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new B(P.ABORTED,"Firestore shutting down"))}}function Gd(){return new Wn((n=>Vf(n)),Vo)}async function ul(n,e){const t=J(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new h0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=ll(o,`Initialization of query '${or(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&hl(t)}async function dl(n,e){const t=J(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function p0(n,e){const t=J(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&hl(t)}function m0(n,e,t){const r=J(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function hl(n){n.Da.forEach((e=>{e.next()}))}var _c,Kd;(Kd=_c||(_c={})).Fa="default",Kd.Cache="cache";class fl{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==_c.Cache}}/**
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
 */class yp{constructor(e){this.key=e}}class vp{constructor(e){this.key=e}}class g0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=oe(),this.mutatedKeys=oe(),this.Xa=Bf(e),this.eu=new fr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Wd,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,f)=>{const m=s.get(p),y=Bo(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let x=!1;m&&y?m.data.isEqual(y.data)?A!==k&&(r.track({type:3,doc:y}),x=!0):this.iu(m,y)||(r.track({type:2,doc:y}),x=!0,(l&&this.Xa(y,l)>0||u&&this.Xa(y,u)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),x=!0):m&&!y&&(r.track({type:1,doc:m}),x=!0,(l||u)&&(c=!0)),x&&(y?(o=o.add(y),i=k?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((p,f)=>(function(y,A){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:x})}};return k(y)-k(A)})(p.type,f.type)||this.Xa(p.doc,f.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new Er(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Wd,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=oe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new vp(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new yp(r))})),t}uu(e){this.Ha=e.qs,this.Za=oe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Er.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const pl="SyncEngine";class y0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class v0{constructor(e){this.key=e,this.lu=!1}}class _0{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Wn((c=>Vf(c)),Vo),this.Tu=new Map,this.Iu=new Set,this.du=new we(H.comparator),this.Eu=new Map,this.Au=new el,this.Ru={},this.Vu=new Map,this.mu=br.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function w0(n,e,t=!0){const r=Tp(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await _p(r,e,t,!0),s}async function b0(n,e){const t=Tp(n);await _p(t,e,!0,!1)}async function _p(n,e,t,r){const s=await Uw(n.localStore,bt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await E0(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&dp(n.remoteStore,s),c}async function E0(n,e,t,r,s){n.gu=(f,m,y)=>(async function(k,x,N,O){let F=x.view.nu(N);F.Ds&&(F=await $d(k.localStore,x.query,!1).then((({documents:I})=>x.view.nu(I,F))));const q=O&&O.targetChanges.get(x.targetId),he=O&&O.targetMismatches.get(x.targetId)!=null,se=x.view.applyChanges(F,k.isPrimaryClient,q,he);return Zd(k,x.targetId,se._u),se.snapshot})(n,f,m,y);const i=await $d(n.localStore,e,!0),o=new g0(e,i.qs),c=o.nu(i.documents),l=Js.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);Zd(n,t,u._u);const p=new y0(e,t,o);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),u.snapshot}async function I0(n,e,t){const r=J(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Vo(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await yc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&sl(r.remoteStore,s.targetId),wc(r,s.targetId)})).catch(Pr)):(wc(r,s.targetId),await yc(r.localStore,s.targetId,!0))}async function T0(n,e){const t=J(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),sl(t.remoteStore,r.targetId))}async function A0(n,e,t){const r=N0(n);try{const s=await(function(o,c){const l=J(o),u=ye.now(),p=c.reduce(((y,A)=>y.add(A.key)),oe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let A=qt(),k=oe();return l.Os.getEntries(y,p).next((x=>{A=x,A.forEach(((N,O)=>{O.isValidDocument()||(k=k.add(N))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,A))).next((x=>{f=x;const N=[];for(const O of c){const F=U_(O,f.get(O.key).overlayedDocument);F!=null&&N.push(new En(O.key,F,Cf(F.value.mapValue),Xe.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,N,c)})).next((x=>{m=x;const N=x.applyToLocalDocumentSet(f,k);return l.documentOverlayCache.saveOverlays(y,x.batchId,N)}))})).then((()=>({batchId:m.batchId,changes:$f(f)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new we(re)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,t),await ti(r,s.changes),await Ho(r.remoteStore)}catch(s){const i=ll(s,"Failed to persist write");t.reject(i)}}async function wp(n,e){const t=J(n);try{const r=await Bw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Eu.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?de(o.lu,14607):s.removedDocuments.size>0&&(de(o.lu,42227),o.lu=!1))})),await ti(t,r,e)}catch(r){await Pr(r)}}function Yd(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=J(o);l.onlineState=c;let u=!1;l.queries.forEach(((p,f)=>{for(const m of f.wa)m.va(c)&&(u=!0)})),u&&hl(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x0(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new we(H.comparator);o=o.insert(i,qe.newNoDocument(i,Q.min()));const c=oe().add(i),l=new jo(Q.min(),new Map,new we(re),o,c);await wp(r,l),r.du=r.du.remove(i),r.Eu.delete(e),ml(r)}else await yc(r.localStore,e,!1).then((()=>wc(r,e,t))).catch(Pr)}async function k0(n,e){const t=J(n),r=e.batch.batchId;try{const s=await Vw(t.localStore,e);Ep(t,r,null),bp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ti(t,s)}catch(s){await Pr(s)}}async function S0(n,e,t){const r=J(n);try{const s=await(function(o,c){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let p;return l.mutationQueue.lookupMutationBatch(u,c).next((f=>(de(f!==null,37113),p=f.keys(),l.mutationQueue.removeMutationBatch(u,f)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,p,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,p))).next((()=>l.localDocuments.getDocuments(u,p)))}))})(r.localStore,e);Ep(r,e,t),bp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ti(r,s)}catch(s){await Pr(s)}}function bp(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Ep(n,e,t){const r=J(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function wc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Ip(n,r)}))}function Ip(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(sl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),ml(n))}function Zd(n,e,t){for(const r of t)r instanceof yp?(n.Au.addReference(r.key,e),C0(n,r)):r instanceof vp?(j(pl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Ip(n,r.key)):K(19791,{yu:r})}function C0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(j(pl,"New document in limbo: "+t),n.Iu.add(r),ml(n))}function ml(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new H(me.fromString(e)),r=n.mu.next();n.Eu.set(r,new v0(t)),n.du=n.du.insert(t,r),dp(n.remoteStore,new rn(bt(Lo(t.path)),r,"TargetPurposeLimboResolution",Do.ue))}}async function ti(n,e,t){const r=J(n),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,t).then((u=>{var p;if((u||t)&&r.isPrimaryClient){const f=u?!u.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=nl.Es(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,u){const p=J(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>D.forEach(u,(m=>D.forEach(m.Is,(y=>p.persistence.referenceDelegate.addReference(f,m.targetId,y))).next((()=>D.forEach(m.ds,(y=>p.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))))))}catch(f){if(!Nr(f))throw f;j(rl,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const y=p.Fs.get(m),A=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(A);p.Fs=p.Fs.insert(m,k)}}})(r.localStore,i))}async function R0(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){j(pl,"User change. New user:",e.toKey());const r=await ap(t.localStore,e);t.currentUser=e,(function(i,o){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new B(P.CANCELLED,o))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ti(t,r.Bs)}}function P0(n,e){const t=J(n),r=t.Eu.get(e);if(r&&r.lu)return oe().add(r.key);{let s=oe();const i=t.Tu.get(e);if(!i)return s;for(const o of i){const c=t.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function Tp(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=P0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x0.bind(null,e),e.hu.J_=p0.bind(null,e.eventManager),e.hu.pu=m0.bind(null,e.eventManager),e}function N0(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=k0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S0.bind(null,e),e}class co{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Lw(this.persistence,new Dw,e.initialUser,this.serializer)}Du(e){return new op(tl.Vi,this.serializer)}bu(e){return new zw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}co.provider={build:()=>new co};class D0 extends co{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){de(this.persistence.referenceDelegate instanceof oo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new vw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?et.withCacheSize(this.cacheSizeBytes):et.DEFAULT;return new op((r=>oo.Vi(r,t)),this.serializer)}}class bc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R0.bind(null,this.syncEngine),await d0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new f0})()}createDatastore(e){const t=zo(e.databaseInfo.databaseId),r=(function(i){return new Kw(i)})(e.databaseInfo);return(function(i,o,c,l){return new Qw(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new e0(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Yd(this.syncEngine,t,0)),(function(){return zd.C()?new zd:new qw})())}createSyncEngine(e,t){return(function(s,i,o,c,l,u,p){const f=new _0(s,i,o,c,l,u);return p&&(f.fu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=J(s);j(jn,"RemoteStore shutting down."),i.Ia.add(5),await ei(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bc.provider={build:()=>new bc};/**
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
 */class gl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):zt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const yn="FirestoreClient";class O0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=qc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{j(yn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(j(yn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ll(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ja(n,e){n.asyncQueue.verifyOperationInProgress(),j(yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await ap(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{dn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{j("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{dn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Xd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await M0(n);j(yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Hd(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Hd(e.remoteStore,s))),n._onlineComponents=e}async function M0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(yn,"Using user provided OfflineComponentProvider");try{await ja(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;dn("Error using user provided cache. Falling back to memory cache: "+t),await ja(n,new co)}}else j(yn,"Using default OfflineComponentProvider"),await ja(n,new D0(void 0));return n._offlineComponents}async function Ap(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(yn,"Using user provided OnlineComponentProvider"),await Xd(n,n._uninitializedComponentsProvider._online)):(j(yn,"Using default OnlineComponentProvider"),await Xd(n,new bc))),n._onlineComponents}function L0(n){return Ap(n).then((e=>e.syncEngine))}async function lo(n){const e=await Ap(n),t=e.eventManager;return t.onListen=w0.bind(null,e.syncEngine),t.onUnlisten=I0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=b0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=T0.bind(null,e.syncEngine),t}function V0(n,e,t={}){const r=new Ut;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const p=new gl({next:m=>{p.Ou(),o.enqueueAndForget((()=>dl(i,f)));const y=m.docs.has(c);!y&&m.fromCache?u.reject(new B(P.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new B(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new fl(Lo(c.path),p,{includeMetadataChanges:!0,ka:!0});return ul(i,f)})(await lo(n),n.asyncQueue,e,t,r))),r.promise}function B0(n,e,t={}){const r=new Ut;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const p=new gl({next:m=>{p.Ou(),o.enqueueAndForget((()=>dl(i,f))),m.fromCache&&l.source==="server"?u.reject(new B(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new fl(c,p,{includeMetadataChanges:!0,ka:!0});return ul(i,f)})(await lo(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function xp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Qd=new Map;/**
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
 */const kp="firestore.googleapis.com",Jd=!0;class eh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kp,this.ssl=Jd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Jd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ip;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gw)throw new B(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}e_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Hv;switch(r.type){case"firstParty":return new Yv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Qd.get(t);r&&(j("ComponentProvider","Removing Datastore"),Qd.delete(t),r.terminate())})(this),Promise.resolve()}}function F0(n,e,t,r={}){var s;n=Ze(n,Wo);const i=Sr(e),o=n._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(ef(`https://${l}`),tf("Firestore",!0)),o.host!==kp&&o.host!==l&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Fn(u,c)&&(n._setSettings(u),r.mockUserToken)){let p,f;if(typeof r.mockUserToken=="string")p=r.mockUserToken,f=ze.MOCK_USER;else{p=gy(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ze(m)}n._authCredentials=new Wv(new gf(p,f))}}/**
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
 */class In{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new In(this.firestore,e,this._query)}}class Ee{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ee(this.firestore,e,this._key)}toJSON(){return{type:Ee._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Xs(t,Ee._jsonSchema))return new Ee(e,r||null,new H(me.fromString(t.referencePath)))}}Ee._jsonSchemaVersion="firestore/documentReference/1.0",Ee._jsonSchema={type:ke("string",Ee._jsonSchemaVersion),referencePath:ke("string")};class ln extends In{constructor(e,t,r){super(e,t,Lo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ee(this.firestore,null,new H(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function Tn(n,e,...t){if(n=Re(n),vf("collection","path",e),n instanceof Wo){const r=me.fromString(e,...t);return fd(r),new ln(n,null,r)}{if(!(n instanceof Ee||n instanceof ln))throw new B(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return fd(r),new ln(n.firestore,null,r)}}function Kn(n,e,...t){if(n=Re(n),arguments.length===1&&(e=qc.newId()),vf("doc","path",e),n instanceof Wo){const r=me.fromString(e,...t);return hd(r),new Ee(n,null,new H(r))}{if(!(n instanceof Ee||n instanceof ln))throw new B(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return hd(r),new Ee(n.firestore,n instanceof ln?n.converter:null,new H(r))}}/**
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
 */const th="AsyncQueue";class nh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new lp(this,"async_queue_retry"),this.oc=()=>{const r=Ua();r&&j(th,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ua();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ua();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ut;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Nr(e))throw e;j(th,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,zt("INTERNAL UNHANDLED ERROR: ",rh(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=cl.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&K(47125,{hc:rh(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function rh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function sh(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Ct extends Wo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new nh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nh(e),this._firestoreClient=void 0,await e}}}function $0(n,e){const t=typeof n=="object"?n:of(),r=typeof n=="string"?n:to,s=jc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=py("firestore");i&&F0(s,...i)}return s}function ni(n){if(n._terminated)throw new B(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||U0(n),n._firestoreClient}function U0(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,u,p){return new d_(c,l,u,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,xp(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new O0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(Be.fromBase64String(e))}catch(t){throw new B(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ct(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xs(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:ke("string",ct._jsonSchemaVersion),bytes:ke("string")};/**
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
 */class ri{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Go{constructor(e){this._methodName=e}}/**
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
 */class It{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:It._jsonSchemaVersion}}static fromJSON(e){if(Xs(e,It._jsonSchema))return new It(e.latitude,e.longitude)}}It._jsonSchemaVersion="firestore/geoPoint/1.0",It._jsonSchema={type:ke("string",It._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
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
 */class Tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xs(e,Tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Tt(e.vectorValues);throw new B(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tt._jsonSchemaVersion="firestore/vectorValue/1.0",Tt._jsonSchema={type:ke("string",Tt._jsonSchemaVersion),vectorValues:ke("object")};/**
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
 */const j0=/^__.*__$/;class z0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qs(e,this.data,t,this.fieldTransforms)}}class Sp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new En(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:n})}}class yl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return uo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Cp(this.Ec)&&j0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class q0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zo(e)}Dc(e,t,r,s=!1){return new yl({Ec:e,methodName:t,bc:r,path:Ve.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function si(n){const e=n._freezeSettings(),t=zo(n._databaseId);return new q0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function vl(n,e,t,r,s,i={}){const o=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);wl("Data must be an object, but it was:",o,r);const c=Np(r,o);let l,u;if(i.merge)l=new it(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const f of i.mergeFields){const m=Ec(e,f,t);if(!o.contains(m))throw new B(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Op(p,m)||p.push(m)}l=new it(p),u=o.fieldTransforms.filter((f=>l.covers(f.field)))}else l=null,u=o.fieldTransforms;return new z0(new tt(c),l,u)}class Ko extends Go{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ko}}class _l extends Go{_toFieldTransform(e){return new V_(e.path,new ks)}isEqual(e){return e instanceof _l}}function Rp(n,e,t,r){const s=n.Dc(1,e,t);wl("Data must be an object, but it was:",s,r);const i=[],o=tt.empty();bn(r,((l,u)=>{const p=bl(e,l,t);u=Re(u);const f=s.gc(p);if(u instanceof Ko)i.push(p);else{const m=ii(u,f);m!=null&&(i.push(p),o.set(p,m))}}));const c=new it(i);return new Sp(o,c,s.fieldTransforms)}function Pp(n,e,t,r,s,i){const o=n.Dc(1,e,t),c=[Ec(e,r,t)],l=[s];if(i.length%2!=0)throw new B(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Ec(e,i[m])),l.push(i[m+1]);const u=[],p=tt.empty();for(let m=c.length-1;m>=0;--m)if(!Op(u,c[m])){const y=c[m];let A=l[m];A=Re(A);const k=o.gc(y);if(A instanceof Ko)u.push(y);else{const x=ii(A,k);x!=null&&(u.push(y),p.set(y,x))}}const f=new it(u);return new Sp(p,f,o.fieldTransforms)}function H0(n,e,t,r=!1){return ii(t,n.Dc(r?4:3,e))}function ii(n,e){if(Dp(n=Re(n)))return wl("Unsupported field value:",e,n),Np(n,e);if(n instanceof Go)return(function(r,s){if(!Cp(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=ii(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return O_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ye.fromDate(r);return{timestampValue:io(s.serializer,i)}}if(r instanceof ye){const i=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:io(s.serializer,i)}}if(r instanceof It)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ct)return{bytesValue:Qf(s.serializer,r._byteString)};if(r instanceof Ee){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tt)return(function(o,c){return{mapValue:{fields:{[kf]:{stringValue:Sf},[no]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return Zc(c.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${No(r)}`)})(n,e)}function Np(n,e){const t={};return bf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(n,((r,s)=>{const i=ii(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Dp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof It||n instanceof ct||n instanceof Ee||n instanceof Go||n instanceof Tt)}function wl(n,e,t){if(!Dp(t)||!_f(t)){const r=No(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Ec(n,e,t){if((e=Re(e))instanceof ri)return e._internalPath;if(typeof e=="string")return bl(n,e);throw uo("Field path arguments must be of type string or ",n,!1,void 0,t)}const W0=new RegExp("[~\\*/\\[\\]]");function bl(n,e,t){if(e.search(W0)>=0)throw uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ri(...e.split("."))._internalPath}catch{throw uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function uo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(P.INVALID_ARGUMENT,c+n+l)}function Op(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Mp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(El("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class G0 extends Mp{data(){return super.data()}}function El(n,e){return typeof e=="string"?bl(n,e):e instanceof ri?e._internalPath:e._delegate._internalPath}/**
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
 */function Lp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Il{}class Vp extends Il{}function Yo(n,e,...t){let r=[];e instanceof Il&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof Al)).length,c=i.filter((l=>l instanceof Tl)).length;if(o>1||o>0&&c>0)throw new B(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Tl extends Vp{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Tl(e,t,r)}_apply(e){const t=this._parse(e);return Bp(e._query,t),new In(e.firestore,e.converter,dc(e._query,t))}_parse(e){const t=si(e.firestore);return(function(i,o,c,l,u,p,f){let m;if(u.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new B(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){oh(f,p);const A=[];for(const k of f)A.push(ih(l,i,k));m={arrayValue:{values:A}}}else m=ih(l,i,f)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||oh(f,p),m=H0(c,o,f,p==="in"||p==="not-in");return xe.create(u,p,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Al extends Il{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Al(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Bp(o,l),o=dc(o,l)})(e._query,t),new In(e.firestore,e.converter,dc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xl extends Vp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new xl(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new B(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xs(i,o)})(e._query,this._field,this._direction);return new In(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Dr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Zo(n,e="asc"){const t=e,r=El("orderBy",n);return xl._create(r,t)}function ih(n,e,t){if(typeof(t=Re(t))=="string"){if(t==="")throw new B(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lf(e)&&t.indexOf("/")!==-1)throw new B(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!H.isDocumentKey(r))throw new B(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bd(n,new H(r))}if(t instanceof Ee)return bd(n,t._key);throw new B(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${No(t)}.`)}function oh(n,e){if(!Array.isArray(n)||n.length===0)throw new B(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bp(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new B(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class K0{convertValue(e,t="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[no].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>Ie(o.doubleValue)));return new Tt(i)}convertGeoPoint(e){return new It(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Mo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const t=fn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);de(sp(r),9688,{name:e});const s=new Ts(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(t)||zt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function kl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class as{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mn extends Mp{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(El("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Mn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mn._jsonSchema={type:ke("string",Mn._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class ji extends Mn{data(e={}){return super.data(e)}}class Ln{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new as(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ji(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new ji(s._firestore,s._userDataWriter,c.doc.key,c.doc,new as(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new ji(s._firestore,s._userDataWriter,c.doc.key,c.doc,new as(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,p=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),p=o.indexOf(c.doc.key)),{type:Y0(c.type),doc:l,oldIndex:u,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ln._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Y0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
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
 */function Fp(n){n=Ze(n,Ee);const e=Ze(n.firestore,Ct);return V0(ni(e),n._key).then((t=>Up(e,n,t)))}Ln._jsonSchemaVersion="firestore/querySnapshot/1.0",Ln._jsonSchema={type:ke("string",Ln._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};class Sl extends K0{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,t)}}function Xo(n){n=Ze(n,In);const e=Ze(n.firestore,Ct),t=ni(e),r=new Sl(e);return Lp(n._query),B0(t,n._query).then((s=>new Ln(e,r,n,s)))}function $p(n,e,t){n=Ze(n,Ee);const r=Ze(n.firestore,Ct),s=kl(n.converter,e,t);return oi(r,[vl(si(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Xe.none())])}function Qo(n,e,t,...r){n=Ze(n,Ee);const s=Ze(n.firestore,Ct),i=si(s);let o;return o=typeof(e=Re(e))=="string"||e instanceof ri?Pp(i,"updateDoc",n._key,e,t,r):Rp(i,"updateDoc",n._key,e),oi(s,[o.toMutation(n._key,Xe.exists(!0))])}function Cl(n){return oi(Ze(n.firestore,Ct),[new Uo(n._key,Xe.none())])}function Jo(n,e){const t=Ze(n.firestore,Ct),r=Kn(n),s=kl(n.converter,e);return oi(t,[vl(si(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Xe.exists(!1))]).then((()=>r))}function Mr(n,...e){var t,r,s;n=Re(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||sh(e[o])||(i=e[o++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(sh(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let l,u,p;if(n instanceof Ee)u=Ze(n.firestore,Ct),p=Lo(n._key.path),l={next:f=>{e[o]&&e[o](Up(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=Ze(n,In);u=Ze(f.firestore,Ct),p=f._query;const m=new Sl(u);l={next:y=>{e[o]&&e[o](new Ln(u,m,f,y))},error:e[o+1],complete:e[o+2]},Lp(n._query)}return(function(m,y,A,k){const x=new gl(k),N=new fl(y,x,A);return m.asyncQueue.enqueueAndForget((async()=>ul(await lo(m),N))),()=>{x.Ou(),m.asyncQueue.enqueueAndForget((async()=>dl(await lo(m),N)))}})(ni(u),p,c,l)}function oi(n,e){return(function(r,s){const i=new Ut;return r.asyncQueue.enqueueAndForget((async()=>A0(await L0(r),s,i))),i.promise})(ni(n),e)}function Up(n,e,t){const r=t.docs.get(e._key),s=new Sl(n);return new Mn(n,s,e._key,r,new as(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class Z0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=si(e)}set(e,t,r){this._verifyNotCommitted();const s=za(e,this._firestore),i=kl(s.converter,t,r),o=vl(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Xe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=za(e,this._firestore);let o;return o=typeof(t=Re(t))=="string"||t instanceof ri?Pp(this._dataReader,"WriteBatch.update",i._key,t,r,s):Rp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=za(e,this._firestore);return this._mutations=this._mutations.concat(new Uo(t._key,Xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function za(n,e){if((n=Re(n)).firestore!==e)throw new B(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function nt(){return new _l("serverTimestamp")}/**
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
 */function jp(n){return ni(n=Ze(n,Ct)),new Z0(n,(e=>oi(n,e)))}(function(e,t=!0){(function(s){Rr=s})(Cr),yr(new $n("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Ct(new Gv(r.getProvider("auth-internal")),new Zv(o,r.getProvider("app-check-internal")),(function(u,p){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(u.options.projectId,p)})(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),an(ad,cd,e),an(ad,cd,"esm2017")})();function Rl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const X0=zp,qp=new Ys("auth","Firebase",zp());/**
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
 */const ho=new $c("@firebase/auth");function Q0(n,...e){ho.logLevel<=ie.WARN&&ho.warn(`Auth (${Cr}): ${n}`,...e)}function zi(n,...e){ho.logLevel<=ie.ERROR&&ho.error(`Auth (${Cr}): ${n}`,...e)}/**
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
 */function Ht(n,...e){throw Pl(n,...e)}function At(n,...e){return Pl(n,...e)}function Hp(n,e,t){const r=Object.assign(Object.assign({},X0()),{[e]:t});return new Ys("auth","Firebase",r).create(e,{appName:n.name})}function un(n){return Hp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return qp.create(n,...e)}function X(n,e,...t){if(!n)throw Pl(e,...t)}function Ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zi(e),new Error(e)}function Wt(n,e){n||Ft(e)}/**
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
 */function Ic(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function J0(){return ah()==="http:"||ah()==="https:"}function ah(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function eb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J0()||Ey()||"connection"in navigator)?navigator.onLine:!0}function tb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wt(t>e,"Short delay should be less than long delay!"),this.isMobile=_y()||Iy()}get(){return eb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nl(n,e){Wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sb=new ai(3e4,6e4);function ea(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Lr(n,e,t,r,s={}){return Gp(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Zs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return by()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Sr(n.emulatorConfig.host)&&(u.credentials="include"),Wp.fetch()(await Yp(n,n.config.apiHost,t,c),u)})}async function Gp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},nb),e);try{const s=new ib(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oi(n,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hp(n,p,u);Ht(n,p)}}catch(s){if(s instanceof Kt)throw s;Ht(n,"network-request-failed",{message:String(s)})}}async function Kp(n,e,t,r,s={}){const i=await Lr(n,e,t,r,s);return"mfaPendingCredential"in i&&Ht(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Nl(n.config,s):`${n.config.apiScheme}://${s}`;return rb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ib{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),sb.get())})}}function Oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=At(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function ob(n,e){return Lr(n,"POST","/v1/accounts:delete",e)}async function fo(n,e){return Lr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ab(n,e=!1){const t=Re(n),r=await t.getIdToken(e),s=Dl(r);X(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vs(qa(s.auth_time)),issuedAtTime:vs(qa(s.iat)),expirationTime:vs(qa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qa(n){return Number(n)*1e3}function Dl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zh(t);return s?JSON.parse(s):(zi("Failed to decode base64 JWT payload"),null)}catch(s){return zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ch(n){const e=Dl(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Kt&&cb(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function cb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class lb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Rs(n,fo(t,{idToken:r}));X(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zp(i.providerUserInfo):[],c=db(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Tc(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,f)}async function ub(n){const e=Re(n);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function db(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zp(n){return n.map(e=>{var{providerId:t}=e,r=Rl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hb(n,e){const t=await Gp(n,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Yp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Sr(n.emulatorConfig.host)&&(l.credentials="include"),Wp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fb(n,e){return Lr(n,"POST","/v2/accounts:revokeToken",ea(n,e))}/**
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
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ch(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=ch(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await hb(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new pr;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function Qt(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ab(this,e)}reload(){return ub(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await Rs(this,ob(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,u,p;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,y=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=t.createdAt)!==null&&u!==void 0?u:void 0,O=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:F,emailVerified:q,isAnonymous:he,providerData:se,stsTokenManager:I}=t;X(F&&I,e,"internal-error");const _=pr.fromJSON(this.name,I);X(typeof F=="string",e,"internal-error"),Qt(f,e.name),Qt(m,e.name),X(typeof q=="boolean",e,"internal-error"),X(typeof he=="boolean",e,"internal-error"),Qt(y,e.name),Qt(A,e.name),Qt(k,e.name),Qt(x,e.name),Qt(N,e.name),Qt(O,e.name);const w=new pt({uid:F,auth:e,email:m,emailVerified:q,displayName:f,isAnonymous:he,photoURL:A,phoneNumber:y,tenantId:k,stsTokenManager:_,createdAt:N,lastLoginAt:O});return se&&Array.isArray(se)&&(w.providerData=se.map(T=>Object.assign({},T))),x&&(w._redirectEventId=x),w}static async _fromIdTokenResponse(e,t,r=!1){const s=new pr;s.updateFromServerResponse(t);const i=new pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await po(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new pr;c.updateFromIdToken(r);const l=new pt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const lh=new Map;function $t(n){Wt(n instanceof Function,"Expected a class definition");let e=lh.get(n);return e?(Wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,lh.set(n,e),e)}/**
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
 */class Xp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xp.type="NONE";const uh=Xp;/**
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
 */function qi(n,e,t){return`firebase:${n}:${e}:${t}`}class mr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qi(this.userKey,s.apiKey,i),this.fullPersistenceKey=qi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fo(this.auth,{idToken:e}).catch(()=>{});return t?pt._fromGetAccountInfoResponse(this.auth,t,e):null}return pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mr($t(uh),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||$t(uh);const o=qi(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const p=await u._get(o);if(p){let f;if(typeof p=="string"){const m=await fo(e,{idToken:p}).catch(()=>{});if(!m)break;f=await pt._fromGetAccountInfoResponse(e,m,p)}else f=pt._fromJSON(e,p);u!==i&&(c=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new mr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new mr(i,e,r))}}/**
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
 */function dh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rm(e))return"Blackberry";if(sm(e))return"Webos";if(Jp(e))return"Safari";if((e.includes("chrome/")||em(e))&&!e.includes("edge/"))return"Chrome";if(nm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qp(n=We()){return/firefox\//i.test(n)}function Jp(n=We()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function em(n=We()){return/crios\//i.test(n)}function tm(n=We()){return/iemobile/i.test(n)}function nm(n=We()){return/android/i.test(n)}function rm(n=We()){return/blackberry/i.test(n)}function sm(n=We()){return/webos/i.test(n)}function Ol(n=We()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pb(n=We()){var e;return Ol(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mb(){return Ty()&&document.documentMode===10}function im(n=We()){return Ol(n)||nm(n)||sm(n)||rm(n)||/windows phone/i.test(n)||tm(n)}/**
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
 */function om(n,e=[]){let t;switch(n){case"Browser":t=dh(We());break;case"Worker":t=`${dh(We())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cr}/${r}`}/**
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
 */class gb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yb(n,e={}){return Lr(n,"GET","/v2/passwordPolicy",ea(n,e))}/**
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
 */const vb=6;class _b{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:vb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class wb{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hh(this),this.idTokenSubscription=new hh(this),this.beforeStateQueue=new gb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fo(this,{idToken:e}),r=await pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(un(this));const t=e?Re(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yb(this),t=new _b(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await fb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=om(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Q0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ta(n){return Re(n)}class hh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ny(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bb(n){Ml=n}function Eb(n){return Ml.loadJS(n)}function Ib(){return Ml.gapiScript}function Tb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ab(n,e){const t=jc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Fn(i,e??{}))return s;Ht(s,"already-initialized")}return t.initialize({options:e})}function xb(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map($t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kb(n,e,t){const r=ta(n);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=am(e),{host:o,port:c}=Sb(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},p=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Fn(u,r.config.emulator)&&Fn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Sr(o)?(ef(`${i}//${o}${l}`),tf("Auth",!0)):Cb()}function am(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Sb(n){const e=am(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fh(o)}}}function fh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class cm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,t){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}/**
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
 */async function gr(n,e){return Kp(n,"POST","/v1/accounts:signInWithIdp",ea(n,e))}/**
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
 */const Rb="http://localhost";class zn extends cm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Rl(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return gr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gr(e,t)}buildRequest(){const e={requestUri:Rb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zs(t)}return e}}/**
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
 */class lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ci extends lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jt extends ci{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
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
 */class en extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return en.credential(t,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class tn extends ci{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends ci{constructor(){super("twitter.com")}static credential(e,t){return zn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return nn.credential(t,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */async function Pb(n,e){return Kp(n,"POST","/v1/accounts:signUp",ea(n,e))}/**
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
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await pt._fromIdTokenResponse(e,r,s),o=ph(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ph(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ph(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Nb(n){var e;if(ft(n.app))return Promise.reject(un(n));const t=ta(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Pb(t,{returnSecureToken:!0}),s=await vn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class mo extends Kt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new mo(e,t,r,s)}}function um(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(n,i,e,r):i})}async function Db(n,e,t=!1){const r=await Rs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}/**
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
 */async function Ob(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(un(r));const s="reauthenticate";try{const i=await Rs(n,um(r,s,e,n),t);X(i.idToken,r,"internal-error");const o=Dl(i.idToken);X(o,r,"internal-error");const{sub:c}=o;return X(n.uid===c,r,"user-mismatch"),vn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
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
 */async function Mb(n,e,t=!1){if(ft(n.app))return Promise.reject(un(n));const r="signIn",s=await um(n,r,e),i=await vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Lb(n,e,t,r){return Re(n).onIdTokenChanged(e,t,r)}function Vb(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function Bb(n,e,t,r){return Re(n).onAuthStateChanged(e,t,r)}const go="__sak";/**
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
 */class dm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fb=1e3,$b=10;class hm extends dm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=im(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$b):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hm.type="LOCAL";const Ub=hm;/**
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
 */class fm extends dm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fm.type="SESSION";const pm=fm;/**
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
 */function jb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await jb(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
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
 */function Ll(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class zb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Ll("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function qb(n){xt().location.href=n}/**
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
 */function mm(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function Hb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gb(){return mm()?self:null}/**
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
 */const gm="firebaseLocalStorageDb",Kb=1,yo="firebaseLocalStorage",ym="fbase_key";class li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ra(n,e){return n.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function Yb(){const n=indexedDB.deleteDatabase(gm);return new li(n).toPromise()}function Ac(){const n=indexedDB.open(gm,Kb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(yo,{keyPath:ym})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(yo)?e(r):(r.close(),await Yb(),e(await Ac()))})})}async function mh(n,e,t){const r=ra(n,!0).put({[ym]:e,value:t});return new li(r).toPromise()}async function Zb(n,e){const t=ra(n,!1).get(e),r=await new li(t).toPromise();return r===void 0?null:r.value}function gh(n,e){const t=ra(n,!0).delete(e);return new li(t).toPromise()}const Xb=800,Qb=3;class vm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Qb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(Gb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hb(),!this.activeServiceWorker)return;this.sender=new zb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await mh(e,go,"1"),await gh(e,go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>mh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Zb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ra(s,!1).getAll();return new li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vm.type="LOCAL";const Jb=vm;new ai(3e4,6e4);/**
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
 */function eE(n,e){return e?$t(e):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Vl extends cm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tE(n){return Mb(n.auth,new Vl(n),n.bypassAuthState)}function nE(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),Ob(t,new Vl(n),n.bypassAuthState)}async function rE(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),Db(t,new Vl(n),n.bypassAuthState)}/**
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
 */class _m{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tE;case"linkViaPopup":case"linkViaRedirect":return rE;case"reauthViaPopup":case"reauthViaRedirect":return nE;default:Ht(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sE=new ai(2e3,1e4);class dr extends _m{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sE.get())};e()}}dr.currentPopupAction=null;/**
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
 */const iE="pendingRedirect",Hi=new Map;class oE extends _m{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const r=await aE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aE(n,e){const t=uE(e),r=lE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function cE(n,e){Hi.set(n._key(),e)}function lE(n){return $t(n._redirectPersistence)}function uE(n){return qi(iE,n.config.apiKey,n.name)}async function dE(n,e,t=!1){if(ft(n.app))return Promise.reject(un(n));const r=ta(n),s=eE(r,e),o=await new oE(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hE=600*1e3;class fE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!wm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(At(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hE&&this.cachedEventUids.clear(),this.cachedEventUids.has(yh(e))}saveEventToCache(e){this.cachedEventUids.add(yh(e)),this.lastProcessedEventTime=Date.now()}}function yh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wm(n);default:return!1}}/**
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
 */async function mE(n,e={}){return Lr(n,"GET","/v1/projects",e)}/**
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
 */const gE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yE=/^https?/;async function vE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mE(n);for(const t of e)try{if(_E(t))return}catch{}Ht(n,"unauthorized-domain")}function _E(n){const e=Ic(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!yE.test(t))return!1;if(gE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wE=new ai(3e4,6e4);function vh(){const n=xt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bE(n){return new Promise((e,t)=>{var r,s,i;function o(){vh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vh(),t(At(n,"network-request-failed"))},timeout:wE.get()})}if(!((s=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const c=Tb("iframefcb");return xt()[c]=()=>{gapi.load?o():t(At(n,"network-request-failed"))},Eb(`${Ib()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function EE(n){return Wi=Wi||bE(n),Wi}/**
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
 */const IE=new ai(5e3,15e3),TE="__/auth/iframe",AE="emulator/auth/iframe",xE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SE(n){const e=n.config;X(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nl(e,AE):`https://${n.config.authDomain}/${TE}`,r={apiKey:e.apiKey,appName:n.name,v:Cr},s=kE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Zs(r).slice(1)}`}async function CE(n){const e=await EE(n),t=xt().gapi;return X(t,n,"internal-error"),e.open({where:document.body,url:SE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=At(n,"network-request-failed"),c=xt().setTimeout(()=>{i(o)},IE.get());function l(){xt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const RE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PE=500,NE=600,DE="_blank",OE="http://localhost";class _h{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ME(n,e,t,r=PE,s=NE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},RE),{width:r.toString(),height:s.toString(),top:i,left:o}),u=We().toLowerCase();t&&(c=em(u)?DE:t),Qp(u)&&(e=e||OE,l.scrollbars="yes");const p=Object.entries(l).reduce((m,[y,A])=>`${m}${y}=${A},`,"");if(pb(u)&&c!=="_self")return LE(e||"",c),new _h(null);const f=window.open(e||"",c,p);X(f,n,"popup-blocked");try{f.focus()}catch{}return new _h(f)}function LE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const VE="__/auth/handler",BE="emulator/auth/handler",FE=encodeURIComponent("fac");async function wh(n,e,t,r,s,i){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Cr,eventId:s};if(e instanceof lm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Py(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,f]of Object.entries({}))o[p]=f}if(e instanceof ci){const p=e.getScopes().filter(f=>f!=="");p.length>0&&(o.scopes=p.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),u=l?`#${FE}=${encodeURIComponent(l)}`:"";return`${$E(n)}?${Zs(c).slice(1)}${u}`}function $E({config:n}){return n.emulator?Nl(n,BE):`https://${n.authDomain}/${VE}`}/**
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
 */const Ha="webStorageSupport";class UE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pm,this._completeRedirectFn=dE,this._overrideRedirectResult=cE}async _openPopup(e,t,r,s){var i;Wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wh(e,t,r,Ic(),s);return ME(e,o,Ll())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await wh(e,t,r,Ic(),s);return qb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await CE(e),r=new fE(e);return t.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ha,{type:Ha},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ha];o!==void 0&&t(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return im()||Jp()||Ol()}}const jE=UE;var bh="@firebase/auth",Eh="1.10.8";/**
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
 */class zE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HE(n){yr(new $n("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:om(n)},u=new wb(r,s,i,l);return xb(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),yr(new $n("auth-internal",e=>{const t=ta(e.getProvider("auth").getImmediate());return(r=>new zE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(bh,Eh,qE(n)),an(bh,Eh,"esm2017")}/**
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
 */const WE=300,GE=Jh("authIdTokenMaxAge")||WE;let Ih=null;const KE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>GE)return;const s=t==null?void 0:t.token;Ih!==s&&(Ih=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YE(n=of()){const e=jc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ab(n,{popupRedirectResolver:jE,persistence:[Jb,Ub,pm]}),r=Jh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=KE(i.toString());Vb(t,o,()=>o(t.currentUser)),Lb(t,c=>o(c))}}const s=Xh("auth");return s&&kb(t,`http://${s}`),t}function ZE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}bb({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=At("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",ZE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HE("Browser");const XE={apiKey:"AIzaSyD03esMvfg48m1NWxj3ASzt_5CoIa5reYk",authDomain:"board-9c96e.firebaseapp.com",projectId:"board-9c96e",storageBucket:"board-9c96e.firebasestorage.app",messagingSenderId:"174092612165",appId:"1:174092612165:web:1ae2584a1f3e00bb24692c",measurementId:"G-4LVEFF5CHM",hfToken:"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"},bm=sf(XE),Ge=$0(bm),Th=YE(bm);let fe=null;const Ah=["#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6","#8b5cf6","#ec4899"];function Em(){return Ah[Math.floor(Math.random()*Ah.length)]}function Im(){const n=["Happy","Swift","Bright","Cool","Bold","Calm","Deft","Keen"],e=["Fox","Owl","Bear","Wolf","Hawk","Lion","Deer","Hare"];return`${n[Math.floor(Math.random()*n.length)]} ${e[Math.floor(Math.random()*e.length)]}`}function Tm(){return new Promise(n=>{const e=setTimeout(()=>{console.warn("Auth timeout, continuing in offline mode"),fe||(fe=xh(),n(fe))},5e3);Bb(Th,async t=>{if(clearTimeout(e),t)fe={uid:t.uid,name:localStorage.getItem("cb_username")||Im(),color:localStorage.getItem("cb_usercolor")||Em()},localStorage.setItem("cb_username",fe.name),localStorage.setItem("cb_usercolor",fe.color),n(fe);else try{await Nb(Th)}catch(r){console.error("Auth error:",r),fe=xh(),n(fe)}})})}function xh(){const n=localStorage.getItem("cb_username")||Im(),e=localStorage.getItem("cb_usercolor")||Em();return localStorage.setItem("cb_username",n),localStorage.setItem("cb_usercolor",e),{uid:"offline_"+Date.now(),name:n,color:e}}function sa(){return fe}const Am=()=>Tn(Ge,"boards"),Bl=n=>Kn(Ge,"boards",n);async function xm(n){const e=await Fp(Bl(n));return e.exists()?{id:e.id,...e.data()}:null}async function QE(){const n=Yo(Am(),Zo("updatedAt","desc"));return(await Xo(n)).docs.map(t=>({id:t.id,...t.data()}))}function km(n){const e=Yo(Am(),Zo("updatedAt","desc"));return Mr(e,t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n(r)},t=>{console.error("Board list subscription error:",t)})}async function ia(n,e){await Qo(Bl(n),{...e,updatedAt:nt()})}async function Sm(n){const e=await Xo(Tn(Ge,"boards",n,"elements")),t=jp(Ge);e.docs.forEach(r=>t.delete(r.ref)),t.delete(Bl(n)),await t.commit()}const Cm=n=>Tn(Ge,"boards",n,"elements"),Rm=(n,e)=>Kn(Ge,"boards",n,"elements",e);async function W(n,e){const t=await Jo(Cm(n),{...e,createdAt:nt(),createdBy:(fe==null?void 0:fe.uid)||"guest",updatedAt:nt()});return ia(n,{}).catch(()=>{}),t.id}async function _e(n,e,t){await Qo(Rm(n,e),{...t,updatedAt:nt()})}async function Ps(n,e){await Cl(Rm(n,e))}function Pm(n,e){return console.log("[Firebase] subscribing to elements for board:",n),Mr(Cm(n),t=>{console.log("[Firebase] snapshot received, changes:",t.docChanges().length),t.docChanges().forEach(r=>{var i,o,c;const s={id:r.doc.id,...r.doc.data()};console.log("[Firebase] change:",r.type,s.id,s.type),r.type==="added"&&((i=e.onAdd)==null||i.call(e,s)),r.type==="modified"&&((o=e.onModify)==null||o.call(e,s)),r.type==="removed"&&((c=e.onRemove)==null||c.call(e,s))})},t=>{console.error("[Firebase] Elements subscription ERROR:",t)})}const JE=n=>Tn(Ge,"boards",n,"presence"),Nm=(n,e)=>Kn(Ge,"boards",n,"presence",e);async function Dm(n,e,t){fe&&await $p(Nm(n,fe.uid),{name:fe.name,color:fe.color,cursorX:e,cursorY:t,lastSeen:nt()},{merge:!0})}async function Fl(n){if(fe)try{await Cl(Nm(n,fe.uid))}catch{}}function Om(n,e){return Mr(JE(n),t=>{const r={};t.docs.forEach(s=>{s.id!==(fe==null?void 0:fe.uid)&&(r[s.id]={id:s.id,...s.data()})}),e(r)})}function eI(n,e=1024,t=.8){return new Promise(r=>{const s=new FileReader;s.onload=i=>{const o=new Image;o.onload=()=>{const c=document.createElement("canvas");let l=o.width,u=o.height;if(l>e||u>e){const y=Math.min(e/l,e/u);l*=y,u*=y}c.width=l,c.height=u;const p=c.getContext("2d");p.clearRect(0,0,l,u),p.drawImage(o,0,0,l,u);let f="image/webp";n.type==="image/png"&&(f="image/png");let m=c.toDataURL(f,t);m.length>1e6&&(m=c.toDataURL(f,.5)),r(m)},o.src=i.target.result},s.readAsDataURL(n)})}async function $l(n,e,t=null){const r=sa();return(await Jo(Tn(Ge,"boards"),{name:n,emoji:e,templateId:t,ownerId:(r==null?void 0:r.uid)||"guest",ownerName:(r==null?void 0:r.name)||"Guest User",createdAt:nt(),updatedAt:nt(),collaborators:[]})).id}async function Ir(n,e){return{url:await eI(n),path:null}}async function tI(n){}const Ul=()=>Tn(Ge,"editorProjects"),jl=n=>Kn(Ge,"editorProjects",n),zl=n=>Tn(Ge,"editorProjects",n,"elements"),Mm=(n,e)=>Kn(Ge,"editorProjects",n,"elements",e);async function nI(n,e=null){const t=sa();return(await Jo(Ul(),{name:n,thumbnail:e,ownerId:(t==null?void 0:t.uid)||"guest",ownerName:(t==null?void 0:t.name)||"Guest User",createdAt:nt(),updatedAt:nt(),background:"#ffffff",width:1080,height:1080})).id}async function rI(){const n=Yo(Ul(),Zo("updatedAt","desc"));return(await Xo(n)).docs.map(t=>({id:t.id,...t.data()}))}function sI(n){const e=Yo(Ul(),Zo("updatedAt","desc"));return Mr(e,t=>{n(t.docs.map(r=>({id:r.id,...r.data()})))})}async function Lm(n){const e=await Fp(jl(n));return e.exists()?{id:e.id,...e.data()}:null}async function oa(n,e){await Qo(jl(n),{...e,updatedAt:nt()})}async function iI(n){const e=await Xo(zl(n)),t=jp(Ge);e.docs.forEach(r=>t.delete(r.ref)),t.delete(jl(n)),await t.commit()}async function Vn(n,e){const t=await Jo(zl(n),{...e,createdAt:nt(),updatedAt:nt()});return oa(n,{}).catch(()=>{}),t.id}async function aa(n,e,t){await Qo(Mm(n,e),{...t,updatedAt:nt()})}async function ca(n,e){await Cl(Mm(n,e))}function Vm(n,e){return Mr(zl(n),t=>{t.docChanges().forEach(r=>{var i,o,c;const s={id:r.doc.id,...r.doc.data()};r.type==="added"&&((i=e.onAdd)==null||i.call(e,s)),r.type==="modified"&&((o=e.onModify)==null||o.call(e,s)),r.type==="removed"&&((c=e.onRemove)==null||c.call(e,s))})})}async function oI(n,e){fe&&await $p(Kn(Ge,"editorProjects",n,"presence",fe.uid),{...e,name:fe.name,color:fe.color,lastSeen:nt()},{merge:!0})}function aI(n,e){return Mr(Tn(Ge,"editorProjects",n,"presence"),t=>{const r={};t.docs.forEach(s=>{s.id!==(fe==null?void 0:fe.uid)&&(r[s.id]={id:s.id,...s.data()})}),e(r)})}const Bm=Object.freeze(Object.defineProperty({__proto__:null,addEditorElement:Vn,addElement:W,createBoard:$l,createEditorProject:nI,deleteBoard:Sm,deleteEditorElement:ca,deleteEditorProject:iI,deleteElement:Ps,deleteFile:tI,getBoard:xm,getCurrentUser:sa,getEditorProject:Lm,initAuth:Tm,listBoards:QE,listEditorProjects:rI,removePresence:Fl,subscribeBoardList:km,subscribeEditorElements:Vm,subscribeEditorPresence:aI,subscribeEditorProjects:sI,subscribeElements:Pm,subscribePresence:Om,updateBoard:ia,updateEditorElement:aa,updateEditorPresence:oI,updateEditorProject:oa,updateElement:_e,updatePresence:Dm,uploadFile:Ir},Symbol.toStringTag,{value:"Module"})),cI="modulepreload",lI=function(n,e){return new URL(n,e).href},kh={},vo=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let o=function(p){return Promise.all(p.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(t.map(p=>{if(p=lI(p,r),p in kh)return;kh[p]=!0;const f=p.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(!!r)for(let k=c.length-1;k>=0;k--){const x=c[k];if(x.href===p&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const A=document.createElement("link");if(A.rel=f?"stylesheet":cI,f||(A.as="script"),A.crossOrigin="",A.href=p,u&&A.setAttribute("nonce",u),document.head.appendChild(A),f)return new Promise((k,x)=>{A.addEventListener("load",k),A.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};let _s=null,Ns=[],Fm=[],wt="boards";const Sh=["📋","📌","🎨","🖼️","📦","🚀","💡","🎯","📝","⭐","🔥","💎","🌟","📸","🎬","✨"];function $m(n){if(!n)return"";const e=n.toDate?n.toDate():new Date(n),r=Math.floor((new Date-e)/1e3);return r<60?"Just now":r<3600?`${Math.floor(r/60)}m ago`:r<86400?`${Math.floor(r/3600)}h ago`:r<2592e3?`${Math.floor(r/86400)}d ago`:e.toLocaleDateString()}function Ch(n,e="info"){const t=document.getElementById("toast-container");if(!t){alert(n);return}const r=document.createElement("div");r.className=`toast ${e}`,r.textContent=n,t.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),300)},3e3)}async function uI(n){let e="Transformation Journal",t="🔄";n==="pro_food"?(e="Gourmet Food Shots",t="🍔"):n==="redesign_room"?(e="Interior Design Board",t="🏠"):n==="instagram_pro"&&(e="Instagram Content Strategist",t="📸"),Ch("Creating board from template...");try{const r=await $l(e,t,n);window.location.hash=`#/board/${r}?template=${n}`}catch(r){console.error("Template create error:",r),Ch("Failed to create board.","error")}}const Um=[{id:"before_after",title:"Before & After Transformations",type:"Marketing Portfolio",desc:"Create compelling comparisons from a single image. Restorations, renovations, and cleanups.",imgs:["templates/car_after.png","templates/car_before.png","templates/desk_after.png"]},{id:"pro_food",title:"Make it Professional: Food",type:"E-Commerce Branding",desc:"Turn messy food shots into studio-quality marketing assets. Expert lighting and plating.",imgs:["templates/pro_burger.png","templates/messy_burger.png","templates/car_after.png"]},{id:"redesign_room",title:"Redesign Any Room",type:"Interior Design",desc:"Upload a space and explore new styles instantly. From Minimalist to Cyberpunk.",imgs:["templates/desk_after.png","templates/desk_before.png","templates/car_before.png"]},{id:"instagram_pro",title:"Instagram Content Strategist",type:"Social Media Growth",desc:"Audit your grid, refine your hooks, and get actionable advice to 10x your engagement.",imgs:["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80","https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&q=80","https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80"]}];function dI(){const n=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",n)}function hI(){const e=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),jm()}function jm(){const n=document.getElementById("theme-toggle-icon");if(!n)return;const e=document.documentElement.getAttribute("data-theme")||"light";n.innerHTML=e==="light"?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'}function fI(){var t,r;const n=sa();return`
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
  `}function pI(n){return`
    <div class="board-card" data-board-id="${n.id}">
      <div class="board-card-thumbnail">
        ${n.thumbnail?`<img src="${n.thumbnail}" alt="${n.name}">`:`<span style="font-size:36px;opacity:0.3">${n.emoji||"📋"}</span>`}
      </div>
      <div class="board-card-info">
        <div class="board-card-name">${n.emoji||""} ${n.name}</div>
        <div class="board-card-date">${$m(n.updatedAt)}</div>
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
  `}function zm(){return`
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
  `}function qm(){return`
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
  `}function Hm(){return`
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
              <div class="board-card-date">${n.updatedAt?$m(n.updatedAt):"Just now"}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Wm(){const n=Sh[Math.floor(Math.random()*Sh.length)],e=document.createElement("div");e.className="modal-overlay",e.id="create-modal",e.innerHTML=`
    <div class="modal">
      <h2 class="modal-title">Create New Board</h2>
      <input type="text" class="modal-input" id="board-name-input" placeholder="Board name..." autofocus>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary" id="modal-cancel">Cancel</button>
        <button class="modal-btn modal-btn-primary" id="modal-create">Create</button>
      </div>
    </div>
  `,document.body.appendChild(e);const t=document.getElementById("board-name-input");t.focus();const r=()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)};document.getElementById("modal-cancel").addEventListener("click",r),e.addEventListener("click",i=>{i.target===e&&r()});const s=async()=>{const i=t.value.trim();if(i)try{const o=await $l(i,n);r(),window.location.hash=`#/board/${o}`}catch{alert("Failed to create board. Check Firebase setup.")}};document.getElementById("modal-create").addEventListener("click",s),t.addEventListener("keydown",i=>{i.key==="Enter"&&s()})}function mI(n,e){const t=document.createElement("div");t.className="modal-overlay",t.innerHTML=`
    <div class="modal">
      <h2 class="modal-title">Rename Board</h2>
      <input type="text" class="modal-input" id="rename-input" value="${e}" autofocus>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary" id="rename-cancel">Cancel</button>
        <button class="modal-btn modal-btn-primary" id="rename-save">Save</button>
      </div>
    </div>
  `,document.body.appendChild(t);const r=document.getElementById("rename-input");r.focus(),r.select();const s=()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)};document.getElementById("rename-cancel").addEventListener("click",s),t.addEventListener("click",o=>{o.target===t&&s()});const i=async()=>{const o=r.value.trim();o&&(await ia(n,{name:o}),s())};document.getElementById("rename-save").addEventListener("click",i),r.addEventListener("keydown",o=>{o.key==="Enter"&&i()})}function xc(n){var t;const e=document.getElementById("board-grid");e&&(e.innerHTML=`
    <div class="create-card" id="create-board-btn">
      <div class="create-card-icon">+</div>
      <span class="create-card-label">New Board</span>
    </div>
  `+(n||Ns).map(pI).join(""),(t=document.getElementById("create-board-btn"))==null||t.addEventListener("click",Wm),document.querySelectorAll(".board-card").forEach(r=>{r.addEventListener("click",s=>{s.target.closest(".board-card-action")||(window.location.hash=`#/board/${r.dataset.boardId}`)})}),document.querySelectorAll(".board-card-action").forEach(r=>{r.addEventListener("click",async s=>{s.stopPropagation();const i=r.dataset.boardId,o=r.dataset.action,c=Ns.find(l=>l.id===i);o==="delete"?confirm(`Delete "${c==null?void 0:c.name}"? This cannot be undone.`)&&await Sm(i):o==="rename"&&mI(i,(c==null?void 0:c.name)||"")})}))}function Wa(n){if(n===wt)return;wt=n;const e=document.querySelector(".main-content");e&&(n==="boards"?e.innerHTML=zm():n==="discover"?e.innerHTML=qm():n==="edit"&&(e.innerHTML=Hm()),n==="boards"?Gm():n==="discover"?Km():n==="edit"&&kc())}function kc(){var n;(n=document.getElementById("create-edit-btn"))==null||n.addEventListener("click",gI),document.querySelectorAll("#edit-grid .board-card").forEach(e=>{e.addEventListener("click",()=>{window.location.hash=`#/edit/${e.dataset.projId}`})})}function gI(){const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
    <div class="modal">
      <h2 class="modal-title">New Edit Project</h2>
      <input type="text" class="modal-input" id="edit-name-input" placeholder="Project name..." autofocus>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary" id="edit-modal-cancel">Cancel</button>
        <button class="modal-btn modal-btn-primary" id="edit-modal-create">Create</button>
      </div>
    </div>
  `,document.body.appendChild(n);const e=document.getElementById("edit-name-input");e.focus();const t=()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)};document.getElementById("edit-modal-cancel").addEventListener("click",t);const r=async()=>{const s=e.value.trim();if(s)try{const{createEditorProject:i}=await vo(async()=>{const{createEditorProject:c}=await Promise.resolve().then(()=>Bm);return{createEditorProject:c}},void 0,import.meta.url),o=await i(s);t(),window.location.hash=`#/edit/${o}`}catch{alert("Failed to create edit project.")}};document.getElementById("edit-modal-create").addEventListener("click",r),e.addEventListener("keydown",s=>{s.key==="Enter"&&r()})}function Gm(){var n;(n=document.getElementById("board-search-input"))==null||n.addEventListener("input",e=>{const t=e.target.value.toLowerCase().trim();xc(t?Ns.filter(r=>r.name.toLowerCase().includes(t)):Ns)}),xc()}function Km(){Um.forEach(n=>{const e=document.getElementById(`tpl-${n.id}`);e&&e.addEventListener("click",()=>uI(n.id))})}function yI(n){var t,r,s,i;n.innerHTML=`
    <div class="dashboard">
      ${fI()}
      <div class="main-content">
        ${wt==="boards"?zm():qm()}
      </div>
    </div>
  `,(t=document.getElementById("nav-boards"))==null||t.addEventListener("click",()=>Wa("boards")),(r=document.getElementById("nav-discover"))==null||r.addEventListener("click",()=>Wa("discover")),(s=document.getElementById("nav-edit"))==null||s.addEventListener("click",()=>Wa("edit")),dI(),jm(),(i=document.getElementById("theme-toggle-btn"))==null||i.addEventListener("click",hI);const e=o=>{o.key==="n"&&(o.ctrlKey||o.metaKey)&&(o.preventDefault(),Wm())};if(document.addEventListener("keydown",e),n._keyHandler=e,wt==="boards"){Gm();try{_s=km(o=>{Ns=o,wt==="boards"&&xc()})}catch{}}else if(wt==="edit"){kc();try{vo(async()=>{const{subscribeEditorProjects:o}=await Promise.resolve().then(()=>Bm);return{subscribeEditorProjects:o}},void 0,import.meta.url).then(({subscribeEditorProjects:o})=>{_s=o(c=>{if(Fm=c,wt==="edit"){const l=document.querySelector(".main-content");l&&(l.innerHTML=Hm()),kc()}})})}catch{}}else Km()}function vI(){_s&&(_s(),_s=null);const n=document.getElementById("app");n!=null&&n._keyHandler&&document.removeEventListener("keydown",n._keyHandler)}var _I=Object.create,Ym=Object.defineProperty,wI=Object.getOwnPropertyDescriptor,Zm=Object.getOwnPropertyNames,bI=Object.getPrototypeOf,EI=Object.prototype.hasOwnProperty,ql=(n,e)=>function(){return e||(0,n[Zm(n)[0]])((e={exports:{}}).exports,e),e.exports},II=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Zm(e))!EI.call(n,s)&&s!==t&&Ym(n,s,{get:()=>e[s],enumerable:!(r=wI(e,s))||r.enumerable});return n},la=(n,e,t)=>(t=n!=null?_I(bI(n)):{},II(!n||!n.__esModule?Ym(t,"default",{value:n,enumerable:!0}):t,n)),TI=ql({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(n,e){function t(r){for(var s=new Array(r),i=0;i<r;++i)s[i]=i;return s}e.exports=t}}),AI=ql({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(n,e){e.exports=function(s){return s!=null&&(t(s)||r(s)||!!s._isBuffer)};function t(s){return!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function r(s){return typeof s.readFloatLE=="function"&&typeof s.slice=="function"&&t(s.slice(0,0))}}}),ua=ql({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(n,e){var t=TI(),r=AI(),s=typeof Float64Array<"u";function i(f,m){return f[0]-m[0]}function o(){var f=this.stride,m=new Array(f.length),y;for(y=0;y<m.length;++y)m[y]=[Math.abs(f[y]),y];m.sort(i);var A=new Array(m.length);for(y=0;y<A.length;++y)A[y]=m[y][1];return A}function c(f,m){var y=["View",m,"d",f].join("");m<0&&(y="View_Nil"+f);var A=f==="generic";if(m===-1){var k="function "+y+"(a){this.data=a;};var proto="+y+".prototype;proto.dtype='"+f+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+y+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+y+"(a){return new "+y+"(a);}",T=new Function(k);return T()}else if(m===0){var k="function "+y+"(a,d) {this.data = a;this.offset = d};var proto="+y+".prototype;proto.dtype='"+f+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+y+"_copy() {return new "+y+"(this.data,this.offset)};proto.pick=function "+y+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+y+"_get(){return "+(A?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+y+"_set(v){return "+(A?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+y+"(a,b,c,d){return new "+y+"(a,d)}",T=new Function("TrivialArray",k);return T(u[f][0])}var k=["'use strict'"],x=t(m),N=x.map(function(b){return"i"+b}),O="this.offset+"+x.map(function(b){return"this.stride["+b+"]*i"+b}).join("+"),F=x.map(function(b){return"b"+b}).join(","),q=x.map(function(b){return"c"+b}).join(",");k.push("function "+y+"(a,"+F+","+q+",d){this.data=a","this.shape=["+F+"]","this.stride=["+q+"]","this.offset=d|0}","var proto="+y+".prototype","proto.dtype='"+f+"'","proto.dimension="+m),k.push("Object.defineProperty(proto,'size',{get:function "+y+"_size(){return "+x.map(function(b){return"this.shape["+b+"]"}).join("*"),"}})"),m===1?k.push("proto.order=[0]"):(k.push("Object.defineProperty(proto,'order',{get:"),m<4?(k.push("function "+y+"_order(){"),m===2?k.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):m===3&&k.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):k.push("ORDER})")),k.push("proto.set=function "+y+"_set("+N.join(",")+",v){"),A?k.push("return this.data.set("+O+",v)}"):k.push("return this.data["+O+"]=v}"),k.push("proto.get=function "+y+"_get("+N.join(",")+"){"),A?k.push("return this.data.get("+O+")}"):k.push("return this.data["+O+"]}"),k.push("proto.index=function "+y+"_index(",N.join(),"){return "+O+"}"),k.push("proto.hi=function "+y+"_hi("+N.join(",")+"){return new "+y+"(this.data,"+x.map(function(b){return["(typeof i",b,"!=='number'||i",b,"<0)?this.shape[",b,"]:i",b,"|0"].join("")}).join(",")+","+x.map(function(b){return"this.stride["+b+"]"}).join(",")+",this.offset)}");var he=x.map(function(b){return"a"+b+"=this.shape["+b+"]"}),se=x.map(function(b){return"c"+b+"=this.stride["+b+"]"});k.push("proto.lo=function "+y+"_lo("+N.join(",")+"){var b=this.offset,d=0,"+he.join(",")+","+se.join(","));for(var I=0;I<m;++I)k.push("if(typeof i"+I+"==='number'&&i"+I+">=0){d=i"+I+"|0;b+=c"+I+"*d;a"+I+"-=d}");k.push("return new "+y+"(this.data,"+x.map(function(b){return"a"+b}).join(",")+","+x.map(function(b){return"c"+b}).join(",")+",b)}"),k.push("proto.step=function "+y+"_step("+N.join(",")+"){var "+x.map(function(b){return"a"+b+"=this.shape["+b+"]"}).join(",")+","+x.map(function(b){return"b"+b+"=this.stride["+b+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var I=0;I<m;++I)k.push("if(typeof i"+I+"==='number'){d=i"+I+"|0;if(d<0){c+=b"+I+"*(a"+I+"-1);a"+I+"=ceil(-a"+I+"/d)}else{a"+I+"=ceil(a"+I+"/d)}b"+I+"*=d}");k.push("return new "+y+"(this.data,"+x.map(function(b){return"a"+b}).join(",")+","+x.map(function(b){return"b"+b}).join(",")+",c)}");for(var _=new Array(m),w=new Array(m),I=0;I<m;++I)_[I]="a[i"+I+"]",w[I]="b[i"+I+"]";k.push("proto.transpose=function "+y+"_transpose("+N+"){"+N.map(function(b,S){return b+"=("+b+"===undefined?"+S+":"+b+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+y+"(this.data,"+_.join(",")+","+w.join(",")+",this.offset)}"),k.push("proto.pick=function "+y+"_pick("+N+"){var a=[],b=[],c=this.offset");for(var I=0;I<m;++I)k.push("if(typeof i"+I+"==='number'&&i"+I+">=0){c=(c+this.stride["+I+"]*i"+I+")|0}else{a.push(this.shape["+I+"]);b.push(this.stride["+I+"])}");k.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),k.push("return function construct_"+y+"(data,shape,stride,offset){return new "+y+"(data,"+x.map(function(b){return"shape["+b+"]"}).join(",")+","+x.map(function(b){return"stride["+b+"]"}).join(",")+",offset)}");var T=new Function("CTOR_LIST","ORDER",k.join(`
`));return T(u[f],o)}function l(f){if(r(f))return"buffer";if(s)switch(Object.prototype.toString.call(f)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(f)?"array":"generic"}var u={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function p(f,m,y,A){if(f===void 0){var q=u.array[0];return q([])}else typeof f=="number"&&(f=[f]);m===void 0&&(m=[f.length]);var k=m.length;if(y===void 0){y=new Array(k);for(var x=k-1,N=1;x>=0;--x)y[x]=N,N*=m[x]}if(A===void 0){A=0;for(var x=0;x<k;++x)y[x]<0&&(A-=(m[x]-1)*y[x])}for(var O=l(f),F=u[O];F.length<=k+1;)F.push(c(O,F.length-1));var q=F[k+1];return q(f,m,y,A)}e.exports=p}}),xI=typeof global=="object"&&global&&global.Object===Object&&global,kI=xI,SI=typeof self=="object"&&self&&self.Object===Object&&self,CI=kI||SI||Function("return this")(),Hl=CI,RI=Hl.Symbol,_o=RI,Xm=Object.prototype,PI=Xm.hasOwnProperty,NI=Xm.toString,ts=_o?_o.toStringTag:void 0;function DI(n){var e=PI.call(n,ts),t=n[ts];try{n[ts]=void 0;var r=!0}catch{}var s=NI.call(n);return r&&(e?n[ts]=t:delete n[ts]),s}var OI=DI,MI=Object.prototype,LI=MI.toString;function VI(n){return LI.call(n)}var BI=VI,FI="[object Null]",$I="[object Undefined]",Rh=_o?_o.toStringTag:void 0;function UI(n){return n==null?n===void 0?$I:FI:Rh&&Rh in Object(n)?OI(n):BI(n)}var jI=UI;function zI(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Qm=zI,qI="[object AsyncFunction]",HI="[object Function]",WI="[object GeneratorFunction]",GI="[object Proxy]";function KI(n){if(!Qm(n))return!1;var e=jI(n);return e==HI||e==WI||e==qI||e==GI}var YI=KI,ZI=Hl["__core-js_shared__"],Ga=ZI,Ph=(function(){var n=/[^.]+$/.exec(Ga&&Ga.keys&&Ga.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})();function XI(n){return!!Ph&&Ph in n}var QI=XI,JI=Function.prototype,eT=JI.toString;function tT(n){if(n!=null){try{return eT.call(n)}catch{}try{return n+""}catch{}}return""}var nT=tT,rT=/[\\^$.*+?()[\]{}|]/g,sT=/^\[object .+?Constructor\]$/,iT=Function.prototype,oT=Object.prototype,aT=iT.toString,cT=oT.hasOwnProperty,lT=RegExp("^"+aT.call(cT).replace(rT,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function uT(n){if(!Qm(n)||QI(n))return!1;var e=YI(n)?lT:sT;return e.test(nT(n))}var dT=uT;function hT(n,e){return n==null?void 0:n[e]}var fT=hT;function pT(n,e){var t=fT(n,e);return dT(t)?t:void 0}var Jm=pT,mT=Jm(Object,"create"),Ds=mT;function gT(){this.__data__=Ds?Ds(null):{},this.size=0}var yT=gT;function vT(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var _T=vT,wT="__lodash_hash_undefined__",bT=Object.prototype,ET=bT.hasOwnProperty;function IT(n){var e=this.__data__;if(Ds){var t=e[n];return t===wT?void 0:t}return ET.call(e,n)?e[n]:void 0}var TT=IT,AT=Object.prototype,xT=AT.hasOwnProperty;function kT(n){var e=this.__data__;return Ds?e[n]!==void 0:xT.call(e,n)}var ST=kT,CT="__lodash_hash_undefined__";function RT(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Ds&&e===void 0?CT:e,this}var PT=RT;function Vr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Vr.prototype.clear=yT;Vr.prototype.delete=_T;Vr.prototype.get=TT;Vr.prototype.has=ST;Vr.prototype.set=PT;var Nh=Vr;function NT(){this.__data__=[],this.size=0}var DT=NT;function OT(n,e){return n===e||n!==n&&e!==e}var MT=OT;function LT(n,e){for(var t=n.length;t--;)if(MT(n[t][0],e))return t;return-1}var da=LT,VT=Array.prototype,BT=VT.splice;function FT(n){var e=this.__data__,t=da(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():BT.call(e,t,1),--this.size,!0}var $T=FT;function UT(n){var e=this.__data__,t=da(e,n);return t<0?void 0:e[t][1]}var jT=UT;function zT(n){return da(this.__data__,n)>-1}var qT=zT;function HT(n,e){var t=this.__data__,r=da(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}var WT=HT;function Br(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Br.prototype.clear=DT;Br.prototype.delete=$T;Br.prototype.get=jT;Br.prototype.has=qT;Br.prototype.set=WT;var GT=Br,KT=Jm(Hl,"Map"),YT=KT;function ZT(){this.size=0,this.__data__={hash:new Nh,map:new(YT||GT),string:new Nh}}var XT=ZT;function QT(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}var JT=QT;function e1(n,e){var t=n.__data__;return JT(e)?t[typeof e=="string"?"string":"hash"]:t.map}var ha=e1;function t1(n){var e=ha(this,n).delete(n);return this.size-=e?1:0,e}var n1=t1;function r1(n){return ha(this,n).get(n)}var s1=r1;function i1(n){return ha(this,n).has(n)}var o1=i1;function a1(n,e){var t=ha(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}var c1=a1;function Fr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Fr.prototype.clear=XT;Fr.prototype.delete=n1;Fr.prototype.get=s1;Fr.prototype.has=o1;Fr.prototype.set=c1;var eg=Fr,l1="Expected a function";function Wl(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(l1);var t=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=t.cache;if(i.has(s))return i.get(s);var o=n.apply(this,r);return t.cache=i.set(s,o)||i,o};return t.cache=new(Wl.Cache||eg),t}Wl.Cache=eg;var u1=Wl,Gl=la(ua()),tg=class Sc{constructor(e,t){this.type="application/octet-stream",this.params={},this.type=e,this.params=t}toString(){const e=[];for(const t in this.params){const r=this.params[t];e.push(`${t}=${r}`)}return[this.type,...e].join(";")}static create(e,t){return new Sc(e,t)}isIdentical(e){return this.type===e.type&&this.params===e.params}isEqual(e){return this.type===e.type}static fromString(e){const[t,...r]=e.split(";"),s={};for(const i of r){const[o,c]=i.split("=");s[o.trim()]=c.trim()}return new Sc(t,s)}},Ka=la(ua());async function d1(n){const e=tg.fromString(n.type);switch(e.type){case"image/x-alpha8":{const t=parseInt(e.params.width),r=parseInt(e.params.height);return(0,Ka.default)(new Uint8Array(await n.arrayBuffer()),[r,t,1])}case"image/x-rgba8":{const t=parseInt(e.params.width),r=parseInt(e.params.height);return(0,Ka.default)(new Uint8Array(await n.arrayBuffer()),[r,t,4])}case"application/octet-stream":case"image/png":case"image/jpeg":case"image/jpg":case"image/webp":{const t=await createImageBitmap(n),r=m1(t);return(0,Ka.default)(new Uint8Array(r.data),[r.height,r.width,4])}default:throw new Error(`Invalid format: ${e.type} with params: ${e.params}`)}}async function h1(n,e=.8,t="image/png"){const[r,s,i]=n.shape;switch(t){case"image/x-alpha8":case"image/x-rgba8":{const l=tg.create(t,{width:s.toString(),height:r.toString()});return new Blob([n.data],{type:l.toString()})}case"image/png":case"image/jpeg":case"image/webp":{const l=new ImageData(new Uint8ClampedArray(n.data),s,r);var o=ng(l.width,l.height),c=o.getContext("2d");return c.putImageData(l,0,0),o.convertToBlob({quality:e,type:t})}default:throw new Error(`Invalid format: ${t}`)}}function f1(n){return new RegExp("^(?:[a-z+]+:)?//","i").test(n)}function p1(n,e){return f1(n)?n:new URL(n,e).href}function m1(n){var e=ng(n.width,n.height),t=e.getContext("2d");return t.drawImage(n,0,0),t.getImageData(0,0,e.width,e.height)}function g1(n){if(typeof Uint8Array<"u")return new Uint8Array(n);if(typeof Uint8ClampedArray<"u")return new Uint8ClampedArray(n);if(typeof Uint16Array<"u")return new Uint16Array(n);if(typeof Uint32Array<"u")return new Uint32Array(n);if(typeof Float32Array<"u")return new Float32Array(n);if(typeof Float64Array<"u")return new Float64Array(n);throw new Error("TypedArray not supported")}function Dh(n,e,t,r=!1){const[s,i,o]=n.shape;let c=i/e,l=s/t;r&&(c=l=Math.max(c,l)>1?Math.max(c,l):Math.min(c,l));const u=(0,Gl.default)(g1(o*e*t),[t,e,o]);for(let p=0;p<t;p++)for(let f=0;f<e;f++){const m=f*c,y=p*l,A=Math.max(Math.floor(m),0),k=Math.min(Math.ceil(m),i-1),x=Math.max(Math.floor(y),0),N=Math.min(Math.ceil(y),s-1),O=m-A,F=y-x;for(let q=0;q<o;q++){const he=n.get(x,A,q),se=n.get(x,k,q),I=n.get(N,A,q),_=n.get(N,k,q),w=(1-O)*(1-F)*he+O*(1-F)*se+(1-O)*F*I+O*F*_;u.set(p,f,q,w)}}return u}function y1(n,e=[128,128,128],t=[256,256,256]){var r=n.data;const[s,i,o]=n.shape,c=s*i,l=new Float32Array(3*c);for(let u=0,p=0;u<r.length;u+=4,p+=1)l[p]=(r[u]-e[0])/t[0],l[p+c]=(r[u+1]-e[1])/t[1],l[p+c+c]=(r[u+2]-e[2])/t[2];return(0,Gl.default)(l,[1,3,s,i])}async function v1(n,e){return typeof n=="string"&&(n=p1(n,e.publicPath),n=new URL(n)),n instanceof URL&&(n=await(await fetch(n,{})).blob()),(n instanceof ArrayBuffer||ArrayBuffer.isView(n))&&(n=new Blob([n])),n instanceof Blob&&(n=await d1(n)),n}function _1(n){const e=new Uint8Array(n.data.length);for(let t=0;t<n.data.length;t++)e[t]=n.data[t]*255;return(0,Gl.default)(e,n.shape)}function ng(n,e){let t;if(typeof OffscreenCanvas<"u"?t=new OffscreenCanvas(n,e):t=document.createElement("canvas"),!t)throw new Error("Canvas nor OffscreenCanvas are available in the current context.");return t}var w1=la(ua()),rg=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,b1=()=>navigator.hardwareConcurrency??4;async function Oh(n,e){return URL.createObjectURL(await sg(n,e))}async function sg(n,e){const t=new URL("resources.json",e.publicPath),r=await fetch(t);if(!r.ok)throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");const i=(await r.json())[n];if(!i)throw new Error(`Resource ${n} not found. Ensure that the config.publicPath is configured correctly.`);const o=i.chunks;let c=0;const l=o.map(async f=>{const m=f.offsets[1]-f.offsets[0],y=e.publicPath?new URL(f.name,e.publicPath).toString():f.name,k=await(await fetch(y,e.fetchArgs)).blob();if(m!==k.size)throw new Error(`Failed to fetch ${n} with size ${m} but got ${k.size}`);return e.progress&&(c+=m,e.progress(`fetch:${n}`,c,i.size)),k}),u=await Promise.all(l),p=new Blob(u,{type:i.mime});if(p.size!==i.size)throw new Error(`Failed to fetch ${n} with size ${i.size} but got ${p.size}`);return p}var ns=null,ig=async n=>(ns!==null||(n?ns=(await vo(async()=>{const{default:e}=await import("./ort.webgpu.bundle.min-D0yNlx_N.js");return{default:e}},[],import.meta.url)).default:ns=(await vo(async()=>{const{default:e}=await import("./ort.bundle.min-Cf_a8C4E.js");return{default:e}},[],import.meta.url)).default),ns);async function E1(n,e){const t=e.device==="gpu"&&await rg(),r=t&&e.proxyToWorker,s=[t?"webgpu":"wasm"],i=await ig(t);e.debug&&(console.debug("	Using WebGPU:",t),console.debug("	Proxy to Worker:",r),i.env.debug=!0,i.env.logLevel="verbose"),i.env.wasm.numThreads=b1(),i.env.wasm.proxy=r;const o=t?"/onnxruntime-web/ort-wasm-simd-threaded.jsep":"/onnxruntime-web/ort-wasm-simd-threaded",c=await Oh(`${o}.wasm`,e),l=await Oh(`${o}.mjs`,e);i.env.wasm.wasmPaths={mjs:l,wasm:c},e.debug&&console.debug("ort.env.wasm:",i.env.wasm);const u={executionProviders:s,graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0};return await i.InferenceSession.create(n,u).catch(f=>{throw new Error(`Failed to create session: "${f}". Please check if the publicPath is set correctly.`)})}async function I1(n,e,t,r){const s=r.device==="gpu"&&await rg(),i=await ig(s),o={};for(const[u,p]of e)o[u]=new i.Tensor("float32",new Float32Array(p.data),p.shape);const c=await n.run(o,{}),l=[];for(const u of t){const p=c[u],f=p.dims,m=p.data,y=(0,w1.default)(m,f);l.push(y)}return l}var ce;(function(n){n.assertEqual=s=>s;function e(s){}n.assertIs=e;function t(s){throw new Error}n.assertNever=t,n.arrayToEnum=s=>{const i={};for(const o of s)i[o]=o;return i},n.getValidEnumValues=s=>{const i=n.objectKeys(s).filter(c=>typeof s[s[c]]!="number"),o={};for(const c of i)o[c]=s[c];return n.objectValues(o)},n.objectValues=s=>n.objectKeys(s).map(function(i){return s[i]}),n.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&i.push(o);return i},n.find=(s,i)=>{for(const o of s)if(i(o))return o},n.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}n.joinValues=r,n.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(ce||(ce={}));var Cc;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Cc||(Cc={}));var U=ce.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Lt=n=>{switch(typeof n){case"undefined":return U.undefined;case"string":return U.string;case"number":return isNaN(n)?U.nan:U.number;case"boolean":return U.boolean;case"function":return U.function;case"bigint":return U.bigint;case"symbol":return U.symbol;case"object":return Array.isArray(n)?U.array:n===null?U.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?U.promise:typeof Map<"u"&&n instanceof Map?U.map:typeof Set<"u"&&n instanceof Set?U.set:typeof Date<"u"&&n instanceof Date?U.date:U.object;default:return U.unknown}},M=ce.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),T1=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:"),mt=class og extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(i){return i.message},r={_errors:[]},s=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)r._errors.push(t(o));else{let c=r,l=0;for(;l<o.path.length;){const u=o.path[l];l===o.path.length-1?(c[u]=c[u]||{_errors:[]},c[u]._errors.push(t(o))):c[u]=c[u]||{_errors:[]},c=c[u],l++}}};return s(this),r}static assert(e){if(!(e instanceof og))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ce.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const s of this.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}};mt.create=n=>new mt(n);var Tr=(n,e)=>{let t;switch(n.code){case M.invalid_type:n.received===U.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case M.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,ce.jsonStringifyReplacer)}`;break;case M.unrecognized_keys:t=`Unrecognized key(s) in object: ${ce.joinValues(n.keys,", ")}`;break;case M.invalid_union:t="Invalid input";break;case M.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${ce.joinValues(n.options)}`;break;case M.invalid_enum_value:t=`Invalid enum value. Expected ${ce.joinValues(n.options)}, received '${n.received}'`;break;case M.invalid_arguments:t="Invalid function arguments";break;case M.invalid_return_type:t="Invalid function return type";break;case M.invalid_date:t="Invalid date";break;case M.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:ce.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case M.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case M.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case M.custom:t="Invalid input";break;case M.invalid_intersection_types:t="Intersection results could not be merged";break;case M.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case M.not_finite:t="Number must be finite";break;default:t=e.defaultError,ce.assertNever(n)}return{message:t}},ag=Tr;function A1(n){ag=n}function wo(){return ag}var bo=n=>{const{data:e,path:t,errorMaps:r,issueData:s}=n,i=[...t,...s.path||[]],o={...s,path:i};if(s.message!==void 0)return{...s,path:i,message:s.message};let c="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)c=u(o,{data:e,defaultError:c}).message;return{...s,path:i,message:c}},x1=[];function V(n,e){const t=wo(),r=bo({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===Tr?void 0:Tr].filter(s=>!!s)});n.common.issues.push(r)}var rt=class cg{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const s of t){if(s.status==="aborted")return Z;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const s of t){const i=await s.key,o=await s.value;r.push({key:i,value:o})}return cg.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const s of t){const{key:i,value:o}=s;if(i.status==="aborted"||o.status==="aborted")return Z;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}},Z=Object.freeze({status:"aborted"}),hr=n=>({status:"dirty",value:n}),Qe=n=>({status:"valid",value:n}),Rc=n=>n.status==="aborted",Pc=n=>n.status==="dirty",qn=n=>n.status==="valid",Os=n=>typeof Promise<"u"&&n instanceof Promise;function Eo(n,e,t,r){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function lg(n,e,t,r,s){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var z;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(z||(z={}));var cs,ls,Rt=class{constructor(n,e,t,r){this._cachedPath=[],this.parent=n,this.data=e,this._path=t,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Mh=(n,e)=>{if(qn(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new mt(n.common.issues);return this._error=t,this._error}}};function te(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:s}=n;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,c)=>{var l,u;const{message:p}=n;return o.code==="invalid_enum_value"?{message:p??c.defaultError}:typeof c.data>"u"?{message:(l=p??r)!==null&&l!==void 0?l:c.defaultError}:o.code!=="invalid_type"?{message:c.defaultError}:{message:(u=p??t)!==null&&u!==void 0?u:c.defaultError}},description:s}}var ne=class{get description(){return this._def.description}_getType(n){return Lt(n.data)}_getOrReturnCtx(n,e){return e||{common:n.parent.common,data:n.data,parsedType:Lt(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}_processInputParams(n){return{status:new rt,ctx:{common:n.parent.common,data:n.data,parsedType:Lt(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}}_parseSync(n){const e=this._parse(n);if(Os(e))throw new Error("Synchronous parse encountered promise.");return e}_parseAsync(n){const e=this._parse(n);return Promise.resolve(e)}parse(n,e){const t=this.safeParse(n,e);if(t.success)return t.data;throw t.error}safeParse(n,e){var t;const r={common:{issues:[],async:(t=e==null?void 0:e.async)!==null&&t!==void 0?t:!1,contextualErrorMap:e==null?void 0:e.errorMap},path:(e==null?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)},s=this._parseSync({data:n,path:r.path,parent:r});return Mh(r,s)}"~validate"(n){var e,t;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)};if(!this["~standard"].async)try{const s=this._parseSync({data:n,path:[],parent:r});return qn(s)?{value:s.value}:{issues:r.common.issues}}catch(s){!((t=(e=s==null?void 0:s.message)===null||e===void 0?void 0:e.toLowerCase())===null||t===void 0)&&t.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:n,path:[],parent:r}).then(s=>qn(s)?{value:s.value}:{issues:r.common.issues})}async parseAsync(n,e){const t=await this.safeParseAsync(n,e);if(t.success)return t.data;throw t.error}async safeParseAsync(n,e){const t={common:{issues:[],contextualErrorMap:e==null?void 0:e.errorMap,async:!0},path:(e==null?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)},r=this._parse({data:n,path:t.path,parent:t}),s=await(Os(r)?r:Promise.resolve(r));return Mh(t,s)}refine(n,e){const t=r=>typeof e=="string"||typeof e>"u"?{message:e}:typeof e=="function"?e(r):e;return this._refinement((r,s)=>{const i=n(r),o=()=>s.addIssue({code:M.custom,...t(r)});return typeof Promise<"u"&&i instanceof Promise?i.then(c=>c?!0:(o(),!1)):i?!0:(o(),!1)})}refinement(n,e){return this._refinement((t,r)=>n(t)?!0:(r.addIssue(typeof e=="function"?e(t,r):e),!1))}_refinement(n){return new yt({schema:this,typeName:Y.ZodEffects,effect:{type:"refinement",refinement:n}})}superRefine(n){return this._refinement(n)}constructor(n){this.spa=this.safeParseAsync,this._def=n,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:e=>this["~validate"](e)}}optional(){return kt.create(this,this._def)}nullable(){return wn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Hn.create(this)}promise(){return kr.create(this,this._def)}or(n){return Us.create([this,n],this._def)}and(n){return js.create(this,n,this._def)}transform(n){return new yt({...te(this._def),schema:this,typeName:Y.ZodEffects,effect:{type:"transform",transform:n}})}default(n){const e=typeof n=="function"?n:()=>n;return new Ws({...te(this._def),innerType:this,defaultValue:e,typeName:Y.ZodDefault})}brand(){return new Kl({typeName:Y.ZodBranded,type:this,...te(this._def)})}catch(n){const e=typeof n=="function"?n:()=>n;return new Gs({...te(this._def),innerType:this,catchValue:e,typeName:Y.ZodCatch})}describe(n){const e=this.constructor;return new e({...this._def,description:n})}pipe(n){return Yl.create(this,n)}readonly(){return Ks.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},k1=/^c[^\s-]{8,}$/i,S1=/^[0-9a-z]+$/,C1=/^[0-9A-HJKMNP-TV-Z]{26}$/i,R1=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,P1=/^[a-z0-9_-]{21}$/i,N1=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,D1=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,O1=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,M1="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Ya,L1=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,V1=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,B1=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,F1=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,$1=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,U1=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ug="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",j1=new RegExp(`^${ug}$`);function dg(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function z1(n){return new RegExp(`^${dg(n)}$`)}function hg(n){let e=`${ug}T${dg(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function q1(n,e){return!!((e==="v4"||!e)&&L1.test(n)||(e==="v6"||!e)&&B1.test(n))}function H1(n,e){if(!N1.test(n))return!1;try{const[t]=n.split("."),r=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),s=JSON.parse(atob(r));return!(typeof s!="object"||s===null||!s.typ||!s.alg||e&&s.alg!==e)}catch{return!1}}function W1(n,e){return!!((e==="v4"||!e)&&V1.test(n)||(e==="v6"||!e)&&F1.test(n))}var Ar=class us extends ne{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==U.string){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_type,expected:U.string,received:i.parsedType}),Z}const r=new rt;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:M.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:M.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,c=e.data.length<i.value;(o||c)&&(s=this._getOrReturnCtx(e,s),o?V(s,{code:M.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):c&&V(s,{code:M.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")O1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"email",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Ya||(Ya=new RegExp(M1,"u")),Ya.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"emoji",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")R1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"uuid",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")P1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"nanoid",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")k1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"cuid",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")S1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"cuid2",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")C1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"ulid",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),V(s,{validation:"url",code:M.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"regex",code:M.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?hg(i).test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?j1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?z1(i).test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?D1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"duration",code:M.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?q1(e.data,i.version)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"ip",code:M.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?H1(e.data,i.alg)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"jwt",code:M.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?W1(e.data,i.version)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"cidr",code:M.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?$1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"base64",code:M.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?U1.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"base64url",code:M.invalid_string,message:i.message}),r.dirty()):ce.assertNever(i);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(s=>e.test(s),{validation:t,code:M.invalid_string,...z.errToObj(r)})}_addCheck(e){return new us({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...z.errToObj(e)})}url(e){return this._addCheck({kind:"url",...z.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...z.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...z.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...z.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...z.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...z.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...z.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...z.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...z.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...z.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...z.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...z.errToObj(e)})}datetime(e){var t,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...z.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...z.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...z.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...z.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...z.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...z.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...z.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...z.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...z.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...z.errToObj(t)})}nonempty(e){return this.min(1,z.errToObj(e))}trim(){return new us({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new us({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new us({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};Ar.create=n=>{var e;return new Ar({checks:[],typeName:Y.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...te(n)})};function G1(n,e){const t=(n.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=t>r?t:r,i=parseInt(n.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return i%o/Math.pow(10,s)}var Ms=class Nc extends ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==U.number){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_type,expected:U.number,received:i.parsedType}),Z}let r;const s=new rt;for(const i of this._def.checks)i.kind==="int"?ce.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{code:M.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?G1(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{code:M.not_finite,message:i.message}),s.dirty()):ce.assertNever(i);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,z.toString(t))}gt(e,t){return this.setLimit("min",e,!1,z.toString(t))}lte(e,t){return this.setLimit("max",e,!0,z.toString(t))}lt(e,t){return this.setLimit("max",e,!1,z.toString(t))}setLimit(e,t,r,s){return new Nc({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:z.toString(s)}]})}_addCheck(e){return new Nc({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:z.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:z.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:z.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:z.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:z.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:z.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ce.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}};Ms.create=n=>new Ms({checks:[],typeName:Y.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...te(n)});var Ls=class Dc extends ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==U.bigint)return this._getInvalidInput(e);let r;const s=new rt;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):ce.assertNever(i);return{status:s.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return V(t,{code:M.invalid_type,expected:U.bigint,received:t.parsedType}),Z}gte(e,t){return this.setLimit("min",e,!0,z.toString(t))}gt(e,t){return this.setLimit("min",e,!1,z.toString(t))}lte(e,t){return this.setLimit("max",e,!0,z.toString(t))}lt(e,t){return this.setLimit("max",e,!1,z.toString(t))}setLimit(e,t,r,s){return new Dc({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:z.toString(s)}]})}_addCheck(e){return new Dc({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:z.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:z.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};Ls.create=n=>{var e;return new Ls({checks:[],typeName:Y.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...te(n)})};var Vs=class extends ne{_parse(n){if(this._def.coerce&&(n.data=!!n.data),this._getType(n)!==U.boolean){const t=this._getOrReturnCtx(n);return V(t,{code:M.invalid_type,expected:U.boolean,received:t.parsedType}),Z}return Qe(n.data)}};Vs.create=n=>new Vs({typeName:Y.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...te(n)});var Bs=class fg extends ne{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==U.date){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_type,expected:U.date,received:i.parsedType}),Z}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_date}),Z}const r=new rt;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:M.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:M.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):ce.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new fg({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:z.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:z.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}};Bs.create=n=>new Bs({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:Y.ZodDate,...te(n)});var Io=class extends ne{_parse(n){if(this._getType(n)!==U.symbol){const t=this._getOrReturnCtx(n);return V(t,{code:M.invalid_type,expected:U.symbol,received:t.parsedType}),Z}return Qe(n.data)}};Io.create=n=>new Io({typeName:Y.ZodSymbol,...te(n)});var Fs=class extends ne{_parse(n){if(this._getType(n)!==U.undefined){const t=this._getOrReturnCtx(n);return V(t,{code:M.invalid_type,expected:U.undefined,received:t.parsedType}),Z}return Qe(n.data)}};Fs.create=n=>new Fs({typeName:Y.ZodUndefined,...te(n)});var $s=class extends ne{_parse(n){if(this._getType(n)!==U.null){const t=this._getOrReturnCtx(n);return V(t,{code:M.invalid_type,expected:U.null,received:t.parsedType}),Z}return Qe(n.data)}};$s.create=n=>new $s({typeName:Y.ZodNull,...te(n)});var xr=class extends ne{constructor(){super(...arguments),this._any=!0}_parse(n){return Qe(n.data)}};xr.create=n=>new xr({typeName:Y.ZodAny,...te(n)});var Bn=class extends ne{constructor(){super(...arguments),this._unknown=!0}_parse(n){return Qe(n.data)}};Bn.create=n=>new Bn({typeName:Y.ZodUnknown,...te(n)});var Gt=class extends ne{_parse(n){const e=this._getOrReturnCtx(n);return V(e,{code:M.invalid_type,expected:U.never,received:e.parsedType}),Z}};Gt.create=n=>new Gt({typeName:Y.ZodNever,...te(n)});var To=class extends ne{_parse(n){if(this._getType(n)!==U.undefined){const t=this._getOrReturnCtx(n);return V(t,{code:M.invalid_type,expected:U.void,received:t.parsedType}),Z}return Qe(n.data)}};To.create=n=>new To({typeName:Y.ZodVoid,...te(n)});var Hn=class Gi extends ne{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),s=this._def;if(t.parsedType!==U.array)return V(t,{code:M.invalid_type,expected:U.array,received:t.parsedType}),Z;if(s.exactLength!==null){const o=t.data.length>s.exactLength.value,c=t.data.length<s.exactLength.value;(o||c)&&(V(t,{code:o?M.too_big:M.too_small,minimum:c?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(V(t,{code:M.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(V(t,{code:M.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((o,c)=>s.type._parseAsync(new Rt(t,o,t.path,c)))).then(o=>rt.mergeArray(r,o));const i=[...t.data].map((o,c)=>s.type._parseSync(new Rt(t,o,t.path,c)));return rt.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new Gi({...this._def,minLength:{value:e,message:z.toString(t)}})}max(e,t){return new Gi({...this._def,maxLength:{value:e,message:z.toString(t)}})}length(e,t){return new Gi({...this._def,exactLength:{value:e,message:z.toString(t)}})}nonempty(e){return this.min(1,e)}};Hn.create=(n,e)=>new Hn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Y.ZodArray,...te(e)});function lr(n){if(n instanceof lt){const e={};for(const t in n.shape){const r=n.shape[t];e[t]=kt.create(lr(r))}return new lt({...n._def,shape:()=>e})}else return n instanceof Hn?new Hn({...n._def,type:lr(n.element)}):n instanceof kt?kt.create(lr(n.unwrap())):n instanceof wn?wn.create(lr(n.unwrap())):n instanceof _n?_n.create(n.items.map(e=>lr(e))):n}var lt=class ht extends ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=ce.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==U.object){const u=this._getOrReturnCtx(e);return V(u,{code:M.invalid_type,expected:U.object,received:u.parsedType}),Z}const{status:r,ctx:s}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),c=[];if(!(this._def.catchall instanceof Gt&&this._def.unknownKeys==="strip"))for(const u in s.data)o.includes(u)||c.push(u);const l=[];for(const u of o){const p=i[u],f=s.data[u];l.push({key:{status:"valid",value:u},value:p._parse(new Rt(s,f,s.path,u)),alwaysSet:u in s.data})}if(this._def.catchall instanceof Gt){const u=this._def.unknownKeys;if(u==="passthrough")for(const p of c)l.push({key:{status:"valid",value:p},value:{status:"valid",value:s.data[p]}});else if(u==="strict")c.length>0&&(V(s,{code:M.unrecognized_keys,keys:c}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const p of c){const f=s.data[p];l.push({key:{status:"valid",value:p},value:u._parse(new Rt(s,f,s.path,p)),alwaysSet:p in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const u=[];for(const p of l){const f=await p.key,m=await p.value;u.push({key:f,value:m,alwaysSet:p.alwaysSet})}return u}).then(u=>rt.mergeObjectSync(r,u)):rt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return z.errToObj,new ht({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var s,i,o,c;const l=(o=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,t,r).message)!==null&&o!==void 0?o:r.defaultError;return t.code==="unrecognized_keys"?{message:(c=z.errToObj(e).message)!==null&&c!==void 0?c:l}:{message:l}}}:{}})}strip(){return new ht({...this._def,unknownKeys:"strip"})}passthrough(){return new ht({...this._def,unknownKeys:"passthrough"})}extend(e){return new ht({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ht({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Y.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new ht({...this._def,catchall:e})}pick(e){const t={};return ce.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new ht({...this._def,shape:()=>t})}omit(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new ht({...this._def,shape:()=>t})}deepPartial(){return lr(this)}partial(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{const s=this.shape[r];e&&!e[r]?t[r]=s:t[r]=s.optional()}),new ht({...this._def,shape:()=>t})}required(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof kt;)i=i._def.innerType;t[r]=i}}),new ht({...this._def,shape:()=>t})}keyof(){return _g(ce.objectKeys(this.shape))}};lt.create=(n,e)=>new lt({shape:()=>n,unknownKeys:"strip",catchall:Gt.create(),typeName:Y.ZodObject,...te(e)});lt.strictCreate=(n,e)=>new lt({shape:()=>n,unknownKeys:"strict",catchall:Gt.create(),typeName:Y.ZodObject,...te(e)});lt.lazycreate=(n,e)=>new lt({shape:n,unknownKeys:"strip",catchall:Gt.create(),typeName:Y.ZodObject,...te(e)});var Us=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return e.common.issues.push(...o.ctx.common.issues),o.result;const i=s.map(o=>new mt(o.ctx.common.issues));return V(e,{code:M.invalid_union,unionErrors:i}),Z}if(e.common.async)return Promise.all(t.map(async s=>{const i={...e,common:{...e.common,issues:[]},parent:null};return{result:await s._parseAsync({data:e.data,path:e.path,parent:i}),ctx:i}})).then(r);{let s;const i=[];for(const c of t){const l={...e,common:{...e.common,issues:[]},parent:null},u=c._parseSync({data:e.data,path:e.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:l}),l.common.issues.length&&i.push(l.common.issues)}if(s)return e.common.issues.push(...s.ctx.common.issues),s.result;const o=i.map(c=>new mt(c));return V(e,{code:M.invalid_union,unionErrors:o}),Z}}get options(){return this._def.options}};Us.create=(n,e)=>new Us({options:n,typeName:Y.ZodUnion,...te(e)});var Mt=n=>n instanceof zs?Mt(n.schema):n instanceof yt?Mt(n.innerType()):n instanceof qs?[n.value]:n instanceof ui?n.options:n instanceof Hs?ce.objectValues(n.enum):n instanceof Ws?Mt(n._def.innerType):n instanceof Fs?[void 0]:n instanceof $s?[null]:n instanceof kt?[void 0,...Mt(n.unwrap())]:n instanceof wn?[null,...Mt(n.unwrap())]:n instanceof Kl||n instanceof Ks?Mt(n.unwrap()):n instanceof Gs?Mt(n._def.innerType):[],pg=class mg extends ne{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==U.object)return V(t,{code:M.invalid_type,expected:U.object,received:t.parsedType}),Z;const r=this.discriminator,s=t.data[r],i=this.optionsMap.get(s);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(V(t,{code:M.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Z)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const s=new Map;for(const i of t){const o=Mt(i.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const c of o){if(s.has(c))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(c)}`);s.set(c,i)}}return new mg({typeName:Y.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s,...te(r)})}};function Oc(n,e){const t=Lt(n),r=Lt(e);if(n===e)return{valid:!0,data:n};if(t===U.object&&r===U.object){const s=ce.objectKeys(e),i=ce.objectKeys(n).filter(c=>s.indexOf(c)!==-1),o={...n,...e};for(const c of i){const l=Oc(n[c],e[c]);if(!l.valid)return{valid:!1};o[c]=l.data}return{valid:!0,data:o}}else if(t===U.array&&r===U.array){if(n.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<n.length;i++){const o=n[i],c=e[i],l=Oc(o,c);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return t===U.date&&r===U.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}var js=class extends ne{_parse(n){const{status:e,ctx:t}=this._processInputParams(n),r=(s,i)=>{if(Rc(s)||Rc(i))return Z;const o=Oc(s.value,i.value);return o.valid?((Pc(s)||Pc(i))&&e.dirty(),{status:e.value,value:o.data}):(V(t,{code:M.invalid_intersection_types}),Z)};return t.common.async?Promise.all([this._def.left._parseAsync({data:t.data,path:t.path,parent:t}),this._def.right._parseAsync({data:t.data,path:t.path,parent:t})]).then(([s,i])=>r(s,i)):r(this._def.left._parseSync({data:t.data,path:t.path,parent:t}),this._def.right._parseSync({data:t.data,path:t.path,parent:t}))}};js.create=(n,e,t)=>new js({left:n,right:e,typeName:Y.ZodIntersection,...te(t)});var _n=class gg extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==U.array)return V(r,{code:M.invalid_type,expected:U.array,received:r.parsedType}),Z;if(r.data.length<this._def.items.length)return V(r,{code:M.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Z;!this._def.rest&&r.data.length>this._def.items.length&&(V(r,{code:M.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...r.data].map((o,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new Rt(r,o,r.path,c)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>rt.mergeArray(t,o)):rt.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new gg({...this._def,rest:e})}};_n.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new _n({items:n,typeName:Y.ZodTuple,rest:null,...te(e)})};var yg=class Mc extends ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==U.object)return V(r,{code:M.invalid_type,expected:U.object,received:r.parsedType}),Z;const s=[],i=this._def.keyType,o=this._def.valueType;for(const c in r.data)s.push({key:i._parse(new Rt(r,c,r.path,c)),value:o._parse(new Rt(r,r.data[c],r.path,c)),alwaysSet:c in r.data});return r.common.async?rt.mergeObjectAsync(t,s):rt.mergeObjectSync(t,s)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof ne?new Mc({keyType:e,valueType:t,typeName:Y.ZodRecord,...te(r)}):new Mc({keyType:Ar.create(),valueType:e,typeName:Y.ZodRecord,...te(t)})}},Ao=class extends ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(n){const{status:e,ctx:t}=this._processInputParams(n);if(t.parsedType!==U.map)return V(t,{code:M.invalid_type,expected:U.map,received:t.parsedType}),Z;const r=this._def.keyType,s=this._def.valueType,i=[...t.data.entries()].map(([o,c],l)=>({key:r._parse(new Rt(t,o,t.path,[l,"key"])),value:s._parse(new Rt(t,c,t.path,[l,"value"]))}));if(t.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of i){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return Z;(l.status==="dirty"||u.status==="dirty")&&e.dirty(),o.set(l.value,u.value)}return{status:e.value,value:o}})}else{const o=new Map;for(const c of i){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return Z;(l.status==="dirty"||u.status==="dirty")&&e.dirty(),o.set(l.value,u.value)}return{status:e.value,value:o}}}};Ao.create=(n,e,t)=>new Ao({valueType:e,keyType:n,typeName:Y.ZodMap,...te(t)});var xo=class Lc extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==U.set)return V(r,{code:M.invalid_type,expected:U.set,received:r.parsedType}),Z;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(V(r,{code:M.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(V(r,{code:M.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const i=this._def.valueType;function o(l){const u=new Set;for(const p of l){if(p.status==="aborted")return Z;p.status==="dirty"&&t.dirty(),u.add(p.value)}return{status:t.value,value:u}}const c=[...r.data.values()].map((l,u)=>i._parse(new Rt(r,l,r.path,u)));return r.common.async?Promise.all(c).then(l=>o(l)):o(c)}min(e,t){return new Lc({...this._def,minSize:{value:e,message:z.toString(t)}})}max(e,t){return new Lc({...this._def,maxSize:{value:e,message:z.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};xo.create=(n,e)=>new xo({valueType:n,minSize:null,maxSize:null,typeName:Y.ZodSet,...te(e)});var vg=class Ki extends ne{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==U.function)return V(t,{code:M.invalid_type,expected:U.function,received:t.parsedType}),Z;function r(c,l){return bo({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,wo(),Tr].filter(u=>!!u),issueData:{code:M.invalid_arguments,argumentsError:l}})}function s(c,l){return bo({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,wo(),Tr].filter(u=>!!u),issueData:{code:M.invalid_return_type,returnTypeError:l}})}const i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof kr){const c=this;return Qe(async function(...l){const u=new mt([]),p=await c._def.args.parseAsync(l,i).catch(y=>{throw u.addIssue(r(l,y)),u}),f=await Reflect.apply(o,this,p);return await c._def.returns._def.type.parseAsync(f,i).catch(y=>{throw u.addIssue(s(f,y)),u})})}else{const c=this;return Qe(function(...l){const u=c._def.args.safeParse(l,i);if(!u.success)throw new mt([r(l,u.error)]);const p=Reflect.apply(o,this,u.data),f=c._def.returns.safeParse(p,i);if(!f.success)throw new mt([s(p,f.error)]);return f.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ki({...this._def,args:_n.create(e).rest(Bn.create())})}returns(e){return new Ki({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new Ki({args:e||_n.create([]).rest(Bn.create()),returns:t||Bn.create(),typeName:Y.ZodFunction,...te(r)})}},zs=class extends ne{get schema(){return this._def.getter()}_parse(n){const{ctx:e}=this._processInputParams(n);return this._def.getter()._parse({data:e.data,path:e.path,parent:e})}};zs.create=(n,e)=>new zs({getter:n,typeName:Y.ZodLazy,...te(e)});var qs=class extends ne{_parse(n){if(n.data!==this._def.value){const e=this._getOrReturnCtx(n);return V(e,{received:e.data,code:M.invalid_literal,expected:this._def.value}),Z}return{status:"valid",value:n.data}}get value(){return this._def.value}};qs.create=(n,e)=>new qs({value:n,typeName:Y.ZodLiteral,...te(e)});function _g(n,e){return new ui({values:n,typeName:Y.ZodEnum,...te(e)})}var ui=class Vc extends ne{constructor(){super(...arguments),cs.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return V(t,{expected:ce.joinValues(r),received:t.parsedType,code:M.invalid_type}),Z}if(Eo(this,cs)||lg(this,cs,new Set(this._def.values)),!Eo(this,cs).has(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return V(t,{received:t.data,code:M.invalid_enum_value,options:r}),Z}return Qe(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Vc.create(e,{...this._def,...t})}exclude(e,t=this._def){return Vc.create(this.options.filter(r=>!e.includes(r)),{...this._def,...t})}};cs=new WeakMap;ui.create=_g;var Hs=class extends ne{constructor(){super(...arguments),ls.set(this,void 0)}_parse(n){const e=ce.getValidEnumValues(this._def.values),t=this._getOrReturnCtx(n);if(t.parsedType!==U.string&&t.parsedType!==U.number){const r=ce.objectValues(e);return V(t,{expected:ce.joinValues(r),received:t.parsedType,code:M.invalid_type}),Z}if(Eo(this,ls)||lg(this,ls,new Set(ce.getValidEnumValues(this._def.values))),!Eo(this,ls).has(n.data)){const r=ce.objectValues(e);return V(t,{received:t.data,code:M.invalid_enum_value,options:r}),Z}return Qe(n.data)}get enum(){return this._def.values}};ls=new WeakMap;Hs.create=(n,e)=>new Hs({values:n,typeName:Y.ZodNativeEnum,...te(e)});var kr=class extends ne{unwrap(){return this._def.type}_parse(n){const{ctx:e}=this._processInputParams(n);if(e.parsedType!==U.promise&&e.common.async===!1)return V(e,{code:M.invalid_type,expected:U.promise,received:e.parsedType}),Z;const t=e.parsedType===U.promise?e.data:Promise.resolve(e.data);return Qe(t.then(r=>this._def.type.parseAsync(r,{path:e.path,errorMap:e.common.contextualErrorMap})))}};kr.create=(n,e)=>new kr({type:n,typeName:Y.ZodPromise,...te(e)});var yt=class extends ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Y.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(n){const{status:e,ctx:t}=this._processInputParams(n),r=this._def.effect||null,s={addIssue:i=>{V(t,i),i.fatal?e.abort():e.dirty()},get path(){return t.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const i=r.transform(t.data,s);if(t.common.async)return Promise.resolve(i).then(async o=>{if(e.value==="aborted")return Z;const c=await this._def.schema._parseAsync({data:o,path:t.path,parent:t});return c.status==="aborted"?Z:c.status==="dirty"||e.value==="dirty"?hr(c.value):c});{if(e.value==="aborted")return Z;const o=this._def.schema._parseSync({data:i,path:t.path,parent:t});return o.status==="aborted"?Z:o.status==="dirty"||e.value==="dirty"?hr(o.value):o}}if(r.type==="refinement"){const i=o=>{const c=r.refinement(o,s);if(t.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(t.common.async===!1){const o=this._def.schema._parseSync({data:t.data,path:t.path,parent:t});return o.status==="aborted"?Z:(o.status==="dirty"&&e.dirty(),i(o.value),{status:e.value,value:o.value})}else return this._def.schema._parseAsync({data:t.data,path:t.path,parent:t}).then(o=>o.status==="aborted"?Z:(o.status==="dirty"&&e.dirty(),i(o.value).then(()=>({status:e.value,value:o.value}))))}if(r.type==="transform")if(t.common.async===!1){const i=this._def.schema._parseSync({data:t.data,path:t.path,parent:t});if(!qn(i))return i;const o=r.transform(i.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:e.value,value:o}}else return this._def.schema._parseAsync({data:t.data,path:t.path,parent:t}).then(i=>qn(i)?Promise.resolve(r.transform(i.value,s)).then(o=>({status:e.value,value:o})):i);ce.assertNever(r)}};yt.create=(n,e,t)=>new yt({schema:n,typeName:Y.ZodEffects,effect:e,...te(t)});yt.createWithPreprocess=(n,e,t)=>new yt({schema:e,effect:{type:"preprocess",transform:n},typeName:Y.ZodEffects,...te(t)});var kt=class extends ne{_parse(n){return this._getType(n)===U.undefined?Qe(void 0):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}};kt.create=(n,e)=>new kt({innerType:n,typeName:Y.ZodOptional,...te(e)});var wn=class extends ne{_parse(n){return this._getType(n)===U.null?Qe(null):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}};wn.create=(n,e)=>new wn({innerType:n,typeName:Y.ZodNullable,...te(e)});var Ws=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n);let t=e.data;return e.parsedType===U.undefined&&(t=this._def.defaultValue()),this._def.innerType._parse({data:t,path:e.path,parent:e})}removeDefault(){return this._def.innerType}};Ws.create=(n,e)=>new Ws({innerType:n,typeName:Y.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...te(e)});var Gs=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t={...e,common:{...e.common,issues:[]}},r=this._def.innerType._parse({data:t.data,path:t.path,parent:{...t}});return Os(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new mt(t.common.issues)},input:t.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new mt(t.common.issues)},input:t.data})}}removeCatch(){return this._def.innerType}};Gs.create=(n,e)=>new Gs({innerType:n,typeName:Y.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...te(e)});var ko=class extends ne{_parse(n){if(this._getType(n)!==U.nan){const t=this._getOrReturnCtx(n);return V(t,{code:M.invalid_type,expected:U.nan,received:t.parsedType}),Z}return{status:"valid",value:n.data}}};ko.create=n=>new ko({typeName:Y.ZodNaN,...te(n)});var K1=Symbol("zod_brand"),Kl=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t=e.data;return this._def.type._parse({data:t,path:e.path,parent:e})}unwrap(){return this._def.type}},Yl=class wg extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Z:i.status==="dirty"?(t.dirty(),hr(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?Z:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,t){return new wg({in:e,out:t,typeName:Y.ZodPipeline})}},Ks=class extends ne{_parse(n){const e=this._def.innerType._parse(n),t=r=>(qn(r)&&(r.value=Object.freeze(r.value)),r);return Os(e)?e.then(r=>t(r)):t(e)}unwrap(){return this._def.innerType}};Ks.create=(n,e)=>new Ks({innerType:n,typeName:Y.ZodReadonly,...te(e)});function Lh(n,e){const t=typeof n=="function"?n(e):typeof n=="string"?{message:n}:n;return typeof t=="string"?{message:t}:t}function bg(n,e={},t){return n?xr.create().superRefine((r,s)=>{var i,o;const c=n(r);if(c instanceof Promise)return c.then(l=>{var u,p;if(!l){const f=Lh(e,r),m=(p=(u=f.fatal)!==null&&u!==void 0?u:t)!==null&&p!==void 0?p:!0;s.addIssue({code:"custom",...f,fatal:m})}});if(!c){const l=Lh(e,r),u=(o=(i=l.fatal)!==null&&i!==void 0?i:t)!==null&&o!==void 0?o:!0;s.addIssue({code:"custom",...l,fatal:u})}}):xr.create()}var Y1={object:lt.lazycreate},Y;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Y||(Y={}));var Z1=(n,e={message:`Input not instance of ${n.name}`})=>bg(t=>t instanceof n,e),Eg=Ar.create,Ig=Ms.create,X1=ko.create,Q1=Ls.create,Tg=Vs.create,J1=Bs.create,eA=Io.create,tA=Fs.create,nA=$s.create,rA=xr.create,sA=Bn.create,iA=Gt.create,oA=To.create,aA=Hn.create,cA=lt.create,lA=lt.strictCreate,uA=Us.create,dA=pg.create,hA=js.create,fA=_n.create,pA=yg.create,mA=Ao.create,gA=xo.create,yA=vg.create,vA=zs.create,_A=qs.create,wA=ui.create,bA=Hs.create,EA=kr.create,Vh=yt.create,IA=kt.create,TA=wn.create,AA=yt.createWithPreprocess,xA=Yl.create,kA=()=>Eg().optional(),SA=()=>Ig().optional(),CA=()=>Tg().optional(),RA={string:n=>Ar.create({...n,coerce:!0}),number:n=>Ms.create({...n,coerce:!0}),boolean:n=>Vs.create({...n,coerce:!0}),bigint:n=>Ls.create({...n,coerce:!0}),date:n=>Bs.create({...n,coerce:!0})},PA=Z,Oe=Object.freeze({__proto__:null,defaultErrorMap:Tr,setErrorMap:A1,getErrorMap:wo,makeIssue:bo,EMPTY_PATH:x1,addIssueToContext:V,ParseStatus:rt,INVALID:Z,DIRTY:hr,OK:Qe,isAborted:Rc,isDirty:Pc,isValid:qn,isAsync:Os,get util(){return ce},get objectUtil(){return Cc},ZodParsedType:U,getParsedType:Lt,ZodType:ne,datetimeRegex:hg,ZodString:Ar,ZodNumber:Ms,ZodBigInt:Ls,ZodBoolean:Vs,ZodDate:Bs,ZodSymbol:Io,ZodUndefined:Fs,ZodNull:$s,ZodAny:xr,ZodUnknown:Bn,ZodNever:Gt,ZodVoid:To,ZodArray:Hn,ZodObject:lt,ZodUnion:Us,ZodDiscriminatedUnion:pg,ZodIntersection:js,ZodTuple:_n,ZodRecord:yg,ZodMap:Ao,ZodSet:xo,ZodFunction:vg,ZodLazy:zs,ZodLiteral:qs,ZodEnum:ui,ZodNativeEnum:Hs,ZodPromise:kr,ZodEffects:yt,ZodTransformer:yt,ZodOptional:kt,ZodNullable:wn,ZodDefault:Ws,ZodCatch:Gs,ZodNaN:ko,BRAND:K1,ZodBranded:Kl,ZodPipeline:Yl,ZodReadonly:Ks,custom:bg,Schema:ne,ZodSchema:ne,late:Y1,get ZodFirstPartyTypeKind(){return Y},coerce:RA,any:rA,array:aA,bigint:Q1,boolean:Tg,date:J1,discriminatedUnion:dA,effect:Vh,enum:wA,function:yA,instanceof:Z1,intersection:hA,lazy:vA,literal:_A,map:mA,nan:X1,nativeEnum:bA,never:iA,null:nA,nullable:TA,number:Ig,object:cA,oboolean:CA,onumber:SA,optional:IA,ostring:kA,pipeline:xA,preprocess:AA,promise:EA,record:pA,set:gA,strictObject:lA,string:Eg,symbol:eA,transformer:Vh,tuple:fA,undefined:tA,union:uA,unknown:sA,void:oA,NEVER:PA,ZodIssueCode:M,quotelessJson:T1,ZodError:mt}),Bh={name:"@imgly/background-removal",version:"1.7.0"},NA=Oe.object({publicPath:Oe.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(n=>n.replace("${PACKAGE_NAME}",Bh.name).replace("${PACKAGE_VERSION}",Bh.version)),debug:Oe.boolean().default(!1).describe("Whether to enable debug logging."),rescale:Oe.boolean().default(!0).describe("Whether to rescale the image."),device:Oe.enum(["cpu","gpu"]).default("cpu").describe("The device to run the model on."),proxyToWorker:Oe.boolean().default(!1).describe("Whether to proxy inference to a web worker."),fetchArgs:Oe.any().default({}).describe("Arguments to pass to fetch when loading the model."),progress:Oe.function().args(Oe.string(),Oe.number(),Oe.number()).returns(Oe.void()).describe("Progress callback.").optional(),model:Oe.preprocess(n=>{switch(n){case"large":return"isnet";case"small":return"isnet_quint8";case"medium":return"isnet_fp16";default:return n}},Oe.enum(["isnet","isnet_fp16","isnet_quint8"])).default("medium"),output:Oe.object({format:Oe.enum(["image/png","image/jpeg","image/webp","image/x-rgba8","image/x-alpha8"]).default("image/png"),quality:Oe.number().default(.8)}).default({})}).default({}).transform(n=>(n.debug&&console.log("Config:",n),n.debug&&!n.progress&&(n.progress=n.progress??((e,t,r)=>{console.debug(`Downloading ${e}: ${t} of ${r}`)}),crossOriginIsolated||n.debug&&console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")),n));function DA(n){return NA.parse(n??{})}var OA=la(ua());async function MA(n){n.debug&&console.debug("Loading model...",n.model);const e=n.model,r=await(await sg(`/models/${e}`,n)).arrayBuffer();return await E1(r,n)}async function LA(n){n=DA(n);const e=await MA(n);return{config:n,session:{base:e}}}async function VA(n,e,t){const[s,i,o]=n.shape,c=!1;let l=Dh(n,1024,1024,c);const u=y1(l);let p=await I1(t.base,[["input",u]],["output"],e),f=(0,OA.default)(p[0].data,[1024,1024,1]),m=_1(f);return e.rescale?(m=Dh(m,i,s,c),[m,n]):[m,l]}var BA=u1(LA,n=>JSON.stringify(n));async function FA(n,e){var m,y,A,k;const{config:t,session:r}=await BA(e);t.progress&&t.progress("compute:decode",0,4);const s=await v1(n,t);(m=t.progress)==null||m.call(t,"compute:inference",1,4);const[i,o]=await VA(s,t,r);(y=t.progress)==null||y.call(t,"compute:mask",2,4);const c=o,[l,u]=c.shape,p=l*u;for(let x=0;x<p;x+=1)c.data[4*x+3]=i.data[x];(A=t.progress)==null||A.call(t,"compute:encode",3,4);const f=await h1(c,t.output.quality,t.output.format);return(k=t.progress)==null||k.call(t,"compute:encode",4,4),f}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/async function $A(n,e){try{return await FA(n,{progress:(s,i,o)=>{if(e){const c=Math.round(i*100);e(`${s}: ${c}%`)}},output:{type:"image/png",quality:.8}})}catch(t){throw console.error("Background removal failed:",t),t}}function Za(n,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>n(...r),e)}}let v={boardId:null,board:null,tool:"select",viewport:{x:0,y:0,zoom:1},elements:new Map,selectedIds:[],isPanning:!1,isDragging:!1,isResizing:!1,isDrawing:!1,drawColor:"#111111",drawWidth:3,noteColor:"yellow",panStart:{x:0,y:0},dragStart:{x:0,y:0},dragOffset:{x:0,y:0},resizeStart:null,drawingPoints:[],lastPresenceUpdate:0,isConnecting:!1,connectionStartId:null,tempConnectionLine:null,connections:[],replyElementId:null,currentTemplate:null,isWaitingForGen:!1},ds=null,hs=null,Yi=null,ee={};const G={sparkles:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/></svg>',arrow_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="9 5 19 5 19 15"/></svg>',ellipse_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',rectangle_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>',diamond_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 12 12 22 2 12 12 2"/></svg>',triangle_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4L4 20H20L12 4Z"/></svg>',line_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="20" x2="20" y2="4"/></svg>',cursor:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3l6.5 18 2.5-6.5L21.5 12z"/></svg>',image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><polygon points="10 9 15 12 10 15 10 9"/></svg>',audio:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 4v16M8 8v8M16 8v8M4 11v2M20 11v2"/></svg>',frame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"/></svg>',pan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V5a2 2 0 0 0-4 0v9"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.76 0-5.26-1.12-7.07-2.93l-3.43-3.43a2 2 0 0 1 2.83-2.83L8 15"/></svg>',draw_scribble:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1.1 0-2 .9-2 2v2H8c-1.1 0-2 .9-2 2v2h4V7h4v2h4V7h-4V5c0-1.1-.9-2-2-2zM4 11c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm16 0c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2z"/></svg>',pencil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',text_aa:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-weight="700" font-size="18">Aa</text></svg>',pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3zM12 19l-7-7 3-3 7 7-3 3z"/></svg>',text:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-weight="700" font-size="18">Aa</text></svg>',eraser:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20H7L3 16l8-8 9 9-4 3z"/><path d="M6.5 13.5L15 5l4 4"/></svg>',note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3z"/><polyline points="14 3 14 8 21 8"/></svg>',color:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>',plus_circle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',bot:'<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',heartFill:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',zoomIn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoomOut:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',wand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 4 5 2"/><path d="m15 11 3 3"/><path d="m20 11 3-3"/><path d="m9 15 3 3"/><path d="M2.5 17.5 16 4"/><path d="m16 4 4 4L6.5 21.5 2.5 17.5Z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',bold:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>',italic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',underline:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0 0 12 0V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>',strike:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" y1="12" x2="20" y2="12"/></svg>',list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',chevron_down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>'};function He(n,e){return{x:(n-v.viewport.x)/v.viewport.zoom,y:(e-v.viewport.y)/v.viewport.zoom}}function Xa(n,e){return{x:n*v.viewport.zoom+v.viewport.x,y:e*v.viewport.zoom+v.viewport.y}}function ws(){if(!ee.container)return;const{x:n,y:e,zoom:t}=v.viewport;if(ee.container.style.transform=`translate(${n}px, ${e}px) scale(${t})`,ee.wrapper){const r=24*t,s=n%r,i=e%r;ee.wrapper.style.backgroundSize=`${r}px ${r}px`,ee.wrapper.style.backgroundPosition=`${s}px ${i}px`}ee.zoomIndicator&&(ee.zoomIndicator.textContent=`${Math.round(t*100)}%`),ee.redrawStrokes&&ee.redrawStrokes()}function UA(n){return`
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

      <!-- Left Sidebar (Node Palette) -->
      <div class="node-palette" id="node-palette">
        <div class="node-palette-title">Hızlı erişimler</div>
        
        <div class="node-palette-item" draggable="true" data-node-type="prompt">
          <div class="node-palette-icon pink">T</div>
          <span>Text Prompt</span>
        </div>
        
        <div class="node-palette-item" draggable="true" data-node-type="enhancer-normal">
          <div class="node-palette-icon blue">✨</div>
          <span>Normal Enhancer</span>
        </div>

        <div class="node-palette-item" draggable="true" data-node-type="enhancer-skin">
          <div class="node-palette-icon orange">🧑</div>
          <span>Realistic Skin Enhancer</span>
        </div>

        <div class="node-palette-item" draggable="true" data-node-type="enhancer-quality">
          <div class="node-palette-icon blue">⭐</div>
          <span>Quality Upscale Enhancer</span>
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
          <svg id="connection-layer" style="position:absolute; top:0; left:0; width:10000px; height:10000px; pointer-events:none; z-index:2;"></svg>
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
  `}function ue(n,e="info"){const t=document.getElementById("toast-container");if(!t)return;const r=document.createElement("div");r.className=`toast ${e}`,r.textContent=n,t.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(8px)",setTimeout(()=>r.remove(),300)},3e3)}function jA(n){const e=document.createElement("div");if(e.className="board-element",e.dataset.elementId=n.id,e.style.left=`${n.x||0}px`,e.style.top=`${n.y||0}px`,e.style.width=`${n.width||200}px`,e.style.height=n.height?`${n.height}px`:"auto",e.style.zIndex=n.zIndex||1,n.type==="image"){const t=document.createElement("div");t.className="connection-anchor connection-anchor-left",t.title="Drag to connect",t.dataset.side="left",e.appendChild(t);const r=document.createElement("div");r.className="connection-anchor connection-anchor-right",r.title="Drag to connect",r.dataset.side="right",e.appendChild(r)}switch(n.type){case"node-prompt":e.style.width="300px",e.innerHTML=`
        <div class="node-card">
          <div class="node-card-header">
            <span>Prompt</span>
            <span style="opacity: 0.5;">...</span>
          </div>
          <textarea class="node-card-textarea prompt-input" placeholder="Type prompt here...">${n.content||""}</textarea>
          <div class="node-card-actions">
            <button class="node-btn">+ Add variable</button>
          </div>
          <div class="node-anchor node-anchor-right connection-anchor" title="Drag to connect" data-side="right"></div>
          <div class="node-anchor-label right">Prompt</div>
          <button class="note-delete">×</button>
        </div>
      `;break;case"node-enhancer":let t="Prompt Enhancer";n.subtype==="enhancer-skin"&&(t="Realistic Skin Enhancer"),n.subtype==="enhancer-quality"&&(t="Quality Upscale Enhancer"),e.style.width="300px",e.innerHTML=`
        <div class="node-card">
          <div class="node-card-header">
            <span>${t}</span>
            <span style="opacity: 0.5;">...</span>
          </div>
          <textarea class="node-card-textarea enhancer-output" readonly placeholder="The generated text will appear here">${n.content||""}</textarea>
          <div class="node-card-actions">
            <button class="node-btn">+ Add another image input</button>
            <button class="node-btn-primary run-model-btn">→ Run Model</button>
          </div>
          <div class="node-anchor node-anchor-left connection-anchor" title="Drag to connect" data-side="left"></div>
          <div class="node-anchor node-anchor-right connection-anchor" title="Drag to connect" data-side="right"></div>
          <button class="note-delete">×</button>
        </div>
      `;break;case"note":{const r=n.fontSize?`font-size: ${n.fontSize}px;`:"";e.innerHTML=`
        <div class="board-note color-${n.color||"yellow"}" contenteditable="false" style="${r}">${n.content||""}</div>
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
      `;break;case"text":{const r=n.fontSize?`font-size: ${n.fontSize}px;`:"";e.innerHTML=`
        <div class="board-text-el" contenteditable="false" style="${r}">${n.content||"Type here..."}</div>
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
                  ${n.images.map(r=>`
                    <div class="ig-slide">
                      <img src="${r.src}" alt="">
                    </div>
                  `).join("")}
                </div>
                <div class="ig-pagination">
                  ${n.images.map((r,s)=>`<div class="ig-dot ${s===0?"active":""}"></div>`).join("")}
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
      `,setTimeout(()=>{const r=e.querySelector(".ig-slides"),s=e.querySelectorAll(".ig-dot");r&&r.addEventListener("scroll",()=>{const i=Math.round(r.scrollLeft/r.offsetWidth);s.forEach((o,c)=>o.classList.toggle("active",c===i))})},100);break;case"drawing":return null}return e}function So(n,e=!1){e?n.forEach(s=>{if(v.selectedIds.includes(s)){v.selectedIds=v.selectedIds.filter(o=>o!==s);const i=v.elements.get(s);i!=null&&i.dom&&i.dom.classList.remove("selected")}else v.selectedIds.push(s)}):(v.selectedIds.forEach(s=>{const i=v.elements.get(s);i!=null&&i.dom&&i.dom.classList.remove("selected")}),v.selectedIds=n);const t=document.getElementById("img-ctx-menu");v.selectedIds.forEach(s=>{const i=v.elements.get(s);i!=null&&i.dom&&i.dom.classList.add("selected")});const r=v.selectedIds[v.selectedIds.length-1];if(v.selectedIds.length===1&&r){const s=v.elements.get(r);if((s==null?void 0:s.data.type)==="image"&&t){const i=s.dom.getBoundingClientRect();t.style.display="flex",t.style.left=`${i.left+i.width/2}px`,t.style.top=`${i.top-5}px`,document.getElementById("img-ctx-full").onclick=o=>{o.stopPropagation(),kg(s.data.src)},document.getElementById("img-ctx-download").onclick=o=>{o.stopPropagation();const c=document.createElement("a");c.href=s.data.src,c.download=`board-image-${Date.now()}`,document.body.appendChild(c),c.click(),document.body.removeChild(c)},document.getElementById("img-ctx-crop").onclick=o=>{o.stopPropagation(),ue("Crop feature activated"),s.dom.style.overflow="hidden"}}else t&&(t.style.display="none")}else t&&(t.style.display="none")}function zA(n,e){const t=ee.wrapper;if(!n||!t)return;n.addEventListener("dblclick",o=>{if(o.stopPropagation(),e.type==="note"||e.type==="text"){const c=n.querySelector(".board-note, .board-text-el");if(c){c.contentEditable="true",e.type==="text"&&c.innerHTML==="Type here..."&&(c.innerHTML=""),c.focus(),GA(n,e);const l=Za(()=>{_e(v.boardId,e.id,{content:c.innerHTML})},500);c.addEventListener("input",l),c.addEventListener("blur",()=>{c.contentEditable="false",_e(v.boardId,e.id,{content:c.innerHTML}),setTimeout(()=>{document.activeElement.closest(".text-format-popover")||(document.getElementById("text-format-popover").style.display="none")},100)},{once:!0})}}else e.type==="image"&&kg(e.src)});const r=n.querySelector(".note-delete");r&&r.addEventListener("click",o=>{o.stopPropagation(),Ps(v.boardId,e.id)});const s=n.querySelector(".image-favorite");s&&s.addEventListener("click",o=>{o.stopPropagation();const c=!e.favorite;e.favorite=c,s.className=`image-favorite ${c?"active":""}`,s.innerHTML=c?G.heartFill:G.heart,_e(v.boardId,e.id,{favorite:c})}),n.querySelectorAll(".connection-anchor").forEach(o=>{o.addEventListener("mousedown",c=>{var p;c.stopPropagation(),c.preventDefault();const l=He(c.clientX,c.clientY);v.isConnecting=!0,v.connectionStartId=e.id;const u=document.getElementById("connection-layer");if(u){const f=o.dataset.side,m=f==="left"?e.x:e.x+(e.width||300),y=e.y+(e.height||200)/2;if((p=e.type)!=null&&p.startsWith("node-")){const A=document.createElementNS("http://www.w3.org/2000/svg","path");A.classList.add("node-connection-path"),A.classList.add("temp-line"),A.dataset.startX=m,A.dataset.startY=y,A.dataset.side=f,u.appendChild(A),v.tempConnectionLine=A}else{const A=document.createElementNS("http://www.w3.org/2000/svg","line");A.setAttribute("x1",m),A.setAttribute("y1",y),A.setAttribute("x2",l.x),A.setAttribute("y2",l.y),A.classList.add("temp-line"),u.appendChild(A),v.tempConnectionLine=A}}})}),n.querySelectorAll(".image-action-btn").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation();const l=o.dataset.action;l==="remove-bg"&&xg(e.id),l==="download"&&Sg(e.src,e.fileName||"image"),l==="delete-img"&&Ps(v.boardId,e.id)})});const i=n.querySelector(".board-frame-title");if(i){const o=Za(()=>{_e(v.boardId,e.id,{title:i.textContent})},500);i.addEventListener("input",o),i.addEventListener("blur",()=>{_e(v.boardId,e.id,{title:i.textContent})})}if(n.addEventListener("mousedown",o=>{if(v.tool!=="select"&&v.tool!=="pan"||o.target.closest('.note-delete, .image-favorite, .image-action-btn, [contenteditable="true"]'))return;if(o.target.classList.contains("resize-handle")){qA(o,e);return}o.stopPropagation(),So([e.id],o.shiftKey);const c=He(o.clientX,o.clientY);v.isDragging=!0,v.dragStart={x:c.x,y:c.y},v.dragOffset={x:c.x-(e.x||0),y:c.y-(e.y||0)};const l=p=>{if(!v.isDragging)return;const f=He(p.clientX,p.clientY),m=f.x-v.dragOffset.x,y=f.y-v.dragOffset.y;n.style.left=`${m}px`,n.style.top=`${y}px`,e.x=m,e.y=y},u=()=>{v.isDragging&&(v.isDragging=!1,_e(v.boardId,e.id,{x:e.x,y:e.y})),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)}),n.addEventListener("contextmenu",o=>{o.preventDefault(),o.stopPropagation(),Ag(o.clientX,o.clientY,e)}),n.addEventListener("click",o=>{e.type==="image"&&v.tool==="select"&&(o.stopPropagation(),Bc(e.id))}),e.type==="node-prompt"||e.type==="node-enhancer"){const o=n.querySelector("textarea");if(o&&e.type==="node-prompt"){const l=Za(()=>{_e(v.boardId,e.id,{content:o.value})},500);o.addEventListener("input",l),o.addEventListener("mousedown",u=>u.stopPropagation())}const c=n.querySelector(".run-model-btn");c&&c.addEventListener("click",async l=>{l.stopPropagation(),sx(e.id)})}}function qA(n,e){n.stopPropagation(),n.preventDefault();const t=v.elements.get(e.id);if(!t)return;const r=t.dom;v.isResizing=!0;const s=n.clientX,i=n.clientY,o=e.width||200,c=e.height||200,l=p=>{const f=(p.clientX-s)/v.viewport.zoom,m=(p.clientY-i)/v.viewport.zoom,y=Math.max(80,o+f),A=Math.max(60,c+m);r.style.width=`${y}px`,r.style.height=`${A}px`,e.width=y,e.height=A},u=()=>{v.isResizing=!1,_e(v.boardId,e.id,{width:e.width,height:e.height}),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)}function Ag(n,e,t){var o;Qa();const r=document.createElement("div");r.className="context-menu",r.id="context-menu",r.style.left=`${n}px`,r.style.top=`${e}px`;let s="";t?(t.type==="note"&&(s+=`
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
      `,((o=v.board)==null?void 0:o.templateId)==="pro_food"&&(s+=`<button class="context-menu-item" data-action="make-pro">${G.sparkles} Make Professional</button>`),s+=`
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
    `,r.innerHTML=s,document.body.appendChild(r);const i=r.getBoundingClientRect();i.right>window.innerWidth&&(r.style.left=`${window.innerWidth-i.width-8}px`),i.bottom>window.innerHeight&&(r.style.top=`${window.innerHeight-i.height-8}px`),r.addEventListener("click",c=>{const l=c.target.closest(".context-menu-item");if(!l)return;const u=l.dataset.action,p=He(n,e);switch(u){case"color":{const f=l.dataset.color;if(t){_e(v.boardId,t.id,{color:f});const m=v.elements.get(t.id);if(m){const y=m.dom.querySelector(".board-note");y&&(y.className=`board-note color-${f}`)}}break}case"download":t!=null&&t.src&&Sg(t.src,"image");break;case"font-size":{const f=l.dataset.size;if(t){_e(v.boardId,t.id,{fontSize:parseInt(f)}).catch(()=>{});const m=v.elements.get(t.id);if(m!=null&&m.dom){const y=m.dom.querySelector(".board-note, .board-text-el");y&&(y.style.fontSize=`${f}px`)}}break}case"bring-front":t&&_e(v.boardId,t.id,{zIndex:ot()+1}).catch(()=>{});break;case"send-back":t&&_e(v.boardId,t.id,{zIndex:0}).catch(()=>{});break;case"delete":if(t){const f=v.elements.get(t.id);f!=null&&f.dom&&f.dom.remove(),v.elements.delete(t.id),Ps(v.boardId,t.id).catch(()=>{})}break;case"add-note":{const f={type:"note",x:p.x,y:p.y,width:200,height:150,content:"",color:v.noteColor,zIndex:ot()+1};W(v.boardId,f).catch(()=>{});break}case"add-text":{const f={type:"text",x:p.x,y:p.y,width:200,content:"Type here...",zIndex:ot()+1};W(v.boardId,f).catch(()=>{});break}case"add-frame":{const f={type:"frame",x:p.x,y:p.y,width:400,height:300,title:"Frame",zIndex:0};W(v.boardId,f).catch(()=>{});break}case"resize":WA(t==null?void 0:t.id,l.dataset.type);break;case"make-pro":HA(t==null?void 0:t.id);break;case"remove-bg":xg(t==null?void 0:t.id);break}Qa()}),setTimeout(()=>{document.addEventListener("click",Qa,{once:!0})},10)}async function xg(n){const e=v.elements.get(n);if(!e||e.data.type!=="image")return;const{dom:t,data:r}=e,s=document.createElement("div");s.className="processing-overlay",s.innerHTML=`
    <div class="processing-spinner"></div>
    <div class="processing-text">Removing Background...</div>
  `,t.appendChild(s);try{ue("Starting background removal...","info");const i=await $A(r.src,l=>{s.querySelector(".processing-text").textContent=l});ue("Uploading result...","info");const o=new File([i],`removed-bg-${Date.now()}.png`,{type:"image/png"}),{url:c}=await Ir(o,v.boardId);await _e(v.boardId,n,{src:c}),ue("Background removed successfully!","success")}catch(i){console.error(i),ue("Failed to remove background","error")}finally{s.remove()}}async function HA(n){const e=v.elements.get(n);if(!e)return;const t=document.createElement("div");t.className="processing-overlay",t.innerHTML=`
    <div class="processing-spinner"></div>
    <div class="processing-text">Transforming into Professional Gourmet Shot...</div>
  `,e.dom.appendChild(t);try{ue("AI is restyling your plate...","info"),setTimeout(async()=>{await _e(v.boardId,n,{src:"/templates/pro_burger.png"}),ue("Masterpiece created!","success"),t.remove()},2500)}catch{t.remove(),ue("AI Transformation failed","error")}}async function WA(n,e){const t=v.elements.get(n);if(!t||t.data.type!=="image")return;let r=t.data.width||300,s=t.data.height||200;e==="square"?(r=800,s=800):e==="reels"?(r=600,s=1066):e==="landscape"&&(r=1066,s=600),ue(`Resizing to ${e}...`,"info"),_e(v.boardId,n,{width:r,height:s})}function Qa(){var n;(n=document.getElementById("context-menu"))==null||n.remove()}function ot(){let n=0;return v.elements.forEach(e=>{var r;const t=((r=e.data)==null?void 0:r.zIndex)||0;t>n&&(n=t)}),n}function kg(n){const e=document.createElement("div");e.className="lightbox-overlay",e.innerHTML=`
    <img class="lightbox-image" src="${n}" alt="">
    <button class="lightbox-close">×</button>
  `,document.body.appendChild(e),e.addEventListener("click",t=>{(t.target===e||t.target.classList.contains("lightbox-close"))&&(e.style.opacity="0",setTimeout(()=>e.remove(),250))})}function Sg(n,e){const t=document.createElement("a");t.href=n,t.download=e,t.target="_blank",document.body.appendChild(t),t.click(),t.remove()}function GA(n,e){const t=document.getElementById("text-format-popover");if(!t)return;const r=n.getBoundingClientRect();t.style.display="flex";const s=t.offsetWidth||400;t.style.left=`${r.left+r.width/2-s/2}px`,t.style.top=`${r.top-60}px`;const i=t.getBoundingClientRect();i.left<10&&(t.style.left="10px"),i.right>window.innerWidth-10&&(t.style.left=`${window.innerWidth-i.width-10}px`);const o=document.getElementById("tf-current-size");if(o){const f={14:"Small",18:"Medium",24:"Large",32:"Extra Large"};o.textContent=f[e.fontSize]||"Medium"}const c=n.querySelector(".board-note, .board-text-el"),l=(f,m=null)=>{document.execCommand(f,!1,m),c.focus(),_e(v.boardId,e.id,{content:c.innerHTML})};document.getElementById("tf-bold").onclick=()=>l("bold"),document.getElementById("tf-italic").onclick=()=>l("italic"),document.getElementById("tf-underline").onclick=()=>l("underline"),document.getElementById("tf-strike").onclick=()=>l("strikeThrough"),document.getElementById("tf-list").onclick=()=>l("insertUnorderedList"),document.getElementById("tf-code").onclick=()=>l("formatBlock","<pre>"),document.querySelectorAll("#tf-size-dropdown .tf-dropdown-menu button").forEach(f=>{f.onclick=()=>{const m=parseInt(f.dataset.size);c.style.fontSize=`${m}px`,_e(v.boardId,e.id,{fontSize:m}),o.textContent=f.textContent}});const u=document.getElementById("tf-color-picker"),p=document.getElementById("tf-color-container");u.oninput=f=>{const m=f.target.value;p.style.color=m,document.execCommand("foreColor",!1,m),_e(v.boardId,e.id,{content:c.innerHTML})}}function KA(){const n=ee.wrapper,e=document.getElementById("board-page");if(!n)return;const t=s=>{if(!s.target.closest(".board-element, .board-toolbar, .board-topbar, .context-menu, .modal-overlay, .lightbox-overlay, .zoom-indicator, .toast-container")&&!(v.tool==="draw"||v.tool==="eraser")){if(v.tool==="select"&&So([]),v.tool==="note"){const i=He(s.clientX,s.clientY),o={type:"note",x:i.x,y:i.y,width:200,height:150,content:"",color:v.noteColor,zIndex:ot()+1};W(v.boardId,o).catch(c=>console.error("Note save error:",c)),Me("select");return}if(v.tool==="text"){const i=He(s.clientX,s.clientY),o={type:"text",x:i.x,y:i.y,width:200,content:"Type here...",zIndex:ot()+1};W(v.boardId,o).catch(c=>console.error("Text save error:",c)),Me("select");return}if(v.tool==="frame"){const i=He(s.clientX,s.clientY),o={type:"frame",x:i.x,y:i.y,width:400,height:300,title:"Frame",zIndex:0};W(v.boardId,o).catch(c=>console.error("Frame save error:",c)),Me("select");return}(v.tool==="pan"||v.tool==="select"||s.button===1)&&(v.isPanning=!0,v.panStart={x:s.clientX-v.viewport.x,y:s.clientY-v.viewport.y},n.classList.add("panning"))}};e.addEventListener("mousedown",t),window.addEventListener("mousemove",s=>{const i=He(s.clientX,s.clientY);if(v.isConnecting&&v.tempConnectionLine){if(v.tempConnectionLine.tagName.toLowerCase()==="path"){const c=parseFloat(v.tempConnectionLine.dataset.startX),l=parseFloat(v.tempConnectionLine.dataset.startY),u=v.tempConnectionLine.dataset.side;let p=c,f=l,m=i.x,y=i.y;if(u==="right"){const A=Math.abs(m-p)*.5,k=`M ${p} ${f} C ${p+A} ${f}, ${m-A} ${y}, ${m} ${y}`;v.tempConnectionLine.setAttribute("d",k)}else{const A=Math.abs(p-m)*.5,k=`M ${m} ${y} C ${m+A} ${y}, ${p-A} ${f}, ${p} ${f}`;v.tempConnectionLine.setAttribute("d",k)}}else v.tempConnectionLine.setAttribute("x2",i.x),v.tempConnectionLine.setAttribute("y2",i.y);return}v.isPanning&&(v.viewport.x=s.clientX-v.panStart.x,v.viewport.y=s.clientY-v.panStart.y,ws());const o=Date.now();if(o-v.lastPresenceUpdate>200){v.lastPresenceUpdate=o;const c=He(s.clientX,s.clientY);Dm(v.boardId,c.x,c.y).catch(()=>{})}}),window.addEventListener("mouseup",s=>{var i;if(v.isConnecting){const o=s.target.closest(".board-element"),c=o==null?void 0:o.dataset.elementId;if(console.log("[Connection] Dropped on:",c,"from:",v.connectionStartId),c&&c!==v.connectionStartId){const l={type:"connection",from:v.connectionStartId,to:c,zIndex:0};W(v.boardId,l).then(()=>{console.log("[Connection] Saved to Firebase"),Zi()}).catch(u=>console.error("Connection fail:",u))}v.isConnecting=!1,v.connectionStartId=null,(i=v.tempConnectionLine)==null||i.remove(),v.tempConnectionLine=null;return}v.isPanning&&(v.isPanning=!1,n.classList.remove("panning"))}),n.addEventListener("wheel",s=>{s.preventDefault();const i=.08,o=s.deltaY>0?-i:i,c=Math.min(5,Math.max(.1,v.viewport.zoom*(1+o))),l=s.clientX,u=s.clientY;v.viewport.x=l-(l-v.viewport.x)*(c/v.viewport.zoom),v.viewport.y=u-(u-v.viewport.y)*(c/v.viewport.zoom),v.viewport.zoom=c,ws()},{passive:!1});const r=s=>{!s.target.closest(".board-element, .board-toolbar, .board-topbar, .zoom-indicator")&&(s.preventDefault(),Ag(s.clientX,s.clientY,null))};n.addEventListener("contextmenu",r),document.addEventListener("keydown",ee.keyHandler=s=>{var i;if(!(s.target.isContentEditable||s.target.tagName==="INPUT"||s.target.tagName==="TEXTAREA")){switch(s.code==="Space"&&!v.isPanning&&(s.preventDefault(),n.style.cursor="grab",v._prevTool=v.tool,v.tool="pan"),s.key.toLowerCase()){case"v":Me("select");break;case"h":Me("pan");break;case"n":Me("note");break;case"t":Me("text");break;case"d":v.drawShape="doodle",Me("draw");break;case"r":v.drawShape="rectangle",Me("draw");break;case"a":v.drawShape="arrow",Me("draw");break;case"l":v.drawShape="line",Me("draw");break;case"o":v.drawShape="ellipse",Me("draw");break;case"e":Me("eraser");break;case"f":Me("frame");break;case"i":(i=document.getElementById("file-input"))==null||i.click();break;case"delete":case"backspace":v.selectedIds.length>0&&!s.target.isContentEditable&&(s.preventDefault(),v.selectedIds.forEach(o=>Ps(v.boardId,o)),So([]));break}(s.ctrlKey||s.metaKey)&&(s.key==="="||s.key==="+")&&(s.preventDefault(),Fh(.15)),(s.ctrlKey||s.metaKey)&&s.key==="-"&&(s.preventDefault(),Fh(-.15)),(s.ctrlKey||s.metaKey)&&s.key==="0"&&(s.preventDefault(),v.viewport={x:0,y:0,zoom:1},ws())}}),document.addEventListener("keyup",ee.keyUpHandler=s=>{s.code==="Space"&&v._prevTool&&(v.tool=v._prevTool,v._prevTool=null,Cg())})}function Fh(n){const e=window.innerWidth/2,t=window.innerHeight/2,r=Math.min(5,Math.max(.1,v.viewport.zoom*(1+n)));v.viewport.x=e-(e-v.viewport.x)*(r/v.viewport.zoom),v.viewport.y=t-(t-v.viewport.y)*(r/v.viewport.zoom),v.viewport.zoom=r,ws()}function YA(){const n=ee.drawCanvas;if(!n)return;function e(){n.width=window.innerWidth,n.height=window.innerHeight,l()}window.addEventListener("resize",e),e();const t=n.getContext("2d"),r=u=>u.touches&&u.touches.length>0?{x:u.touches[0].clientX,y:u.touches[0].clientY}:u.changedTouches&&u.changedTouches.length>0?{x:u.changedTouches[0].clientX,y:u.changedTouches[0].clientY}:{x:u.clientX,y:u.clientY},s=u=>{if(v.tool!=="draw"&&v.tool!=="eraser")return;v.isDrawing=!0;const p=r(u),f=He(p.x,p.y);v.drawingPoints=[{x:f.x,y:f.y}]},i=u=>{if(!v.isDrawing)return;const p=r(u),f=He(p.x,p.y);v.drawingPoints.push({x:f.x,y:f.y}),l()},o=()=>{if(v.isDrawing){if(v.isDrawing=!1,v.drawingPoints.length>1){const p=v.drawShape!=="doodle"&&v.tool!=="eraser"?[v.drawingPoints[0],v.drawingPoints[v.drawingPoints.length-1]]:v.drawingPoints,f={type:"drawing",shape:v.tool==="eraser"?"eraser":v.drawShape,points:p.map(y=>({x:Math.round(y.x),y:Math.round(y.y)})),color:v.tool==="eraser"?"#e8e8e8":v.drawColor,lineWidth:v.tool==="eraser"?20:v.drawWidth,zIndex:ot()+1},m="temp_draw_"+Date.now();v.elements.set(m,{data:{...f,id:m},dom:null}),W(v.boardId,f).then(()=>{v.elements.delete(m),l()}).catch(y=>{console.error("Save stroke fail",y),v.elements.delete(m),l()})}v.drawingPoints=[],l()}};n.addEventListener("mousedown",s),n.addEventListener("mousemove",i),window.addEventListener("mouseup",o),n.addEventListener("touchstart",u=>{u.preventDefault(),s(u)},{passive:!1}),n.addEventListener("touchmove",u=>{u.preventDefault(),i(u)},{passive:!1}),window.addEventListener("touchend",o);const c=(u,p,f)=>{const m=O=>O.x!==void 0?O.x:O[0],y=O=>O.y!==void 0?O.y:O[1],A=p[0],k=p[p.length-1],x=Xa(m(A),y(A)),N=Xa(m(k),y(k));if(f==="rectangle")u.strokeRect(x.x,x.y,N.x-x.x,N.y-x.y);else if(f==="ellipse")u.beginPath(),u.ellipse(x.x+(N.x-x.x)/2,x.y+(N.y-x.y)/2,Math.abs((N.x-x.x)/2),Math.abs((N.y-x.y)/2),0,0,2*Math.PI),u.stroke();else if(f==="arrow"){u.beginPath(),u.moveTo(x.x,x.y),u.lineTo(N.x,N.y);const O=Math.atan2(N.y-x.y,N.x-x.x),F=15*v.viewport.zoom;u.lineTo(N.x-F*Math.cos(O-Math.PI/6),N.y-F*Math.sin(O-Math.PI/6)),u.moveTo(N.x,N.y),u.lineTo(N.x-F*Math.cos(O+Math.PI/6),N.y-F*Math.sin(O+Math.PI/6)),u.stroke()}else if(f==="line")u.beginPath(),u.moveTo(x.x,x.y),u.lineTo(N.x,N.y),u.stroke();else if(f==="triangle")u.beginPath(),u.moveTo(x.x+(N.x-x.x)/2,x.y),u.lineTo(N.x,N.y),u.lineTo(x.x,N.y),u.closePath(),u.stroke();else if(f==="diamond")u.beginPath(),u.moveTo(x.x+(N.x-x.x)/2,x.y),u.lineTo(N.x,x.y+(N.y-x.y)/2),u.lineTo(x.x+(N.x-x.x)/2,N.y),u.lineTo(x.x,x.y+(N.y-x.y)/2),u.closePath(),u.stroke();else{u.beginPath(),u.moveTo(x.x,x.y);for(let O=1;O<p.length;O++){const F=Xa(m(p[O]),y(p[O]));u.lineTo(F.x,F.y)}u.stroke()}};ee.redrawStrokes=function(){t.clearRect(0,0,n.width,n.height),v.elements.forEach(p=>{const f=p.data;f.type!=="drawing"||!f.points||f.points.length<2||(t.save(),f.shape==="eraser"?(t.globalCompositeOperation="destination-out",t.strokeStyle="rgba(0,0,0,1)"):t.strokeStyle=f.color||"#111",t.lineWidth=(f.lineWidth||3)*v.viewport.zoom,t.lineCap="round",t.lineJoin="round",c(t,f.points,f.shape||"doodle"),t.restore())}),v.drawingPoints.length>1&&(t.save(),v.tool==="eraser"?(t.globalCompositeOperation="destination-out",t.strokeStyle="rgba(0,0,0,1)"):t.strokeStyle=v.drawColor,t.lineWidth=(v.tool==="eraser"?v.drawWidth*2:v.drawWidth)*v.viewport.zoom,t.lineCap="round",t.lineJoin="round",c(t,v.drawingPoints,v.tool==="eraser"?"eraser":v.drawShape),t.restore())};function l(){ee.redrawStrokes&&ee.redrawStrokes()}ee._resizeCanvas=e}function ZA(){const n=ee.wrapper;if(!n)return;let e=null;n.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="copy",e||(e=document.createElement("div"),e.className="drop-zone-overlay",e.innerHTML='<div class="drop-zone-label">📎 Drop files here</div>',document.body.appendChild(e))}),n.addEventListener("dragleave",r=>{r.relatedTarget&&n.contains(r.relatedTarget)||(e==null||e.remove(),e=null)}),n.addEventListener("drop",async r=>{if(r.preventDefault(),e==null||e.remove(),e=null,r.dataTransfer.types.includes("application/x-node-type"))return;const s=Array.from(r.dataTransfer.files).filter(o=>o.type.startsWith("image/"));if(s.length===0){if(r.dataTransfer.items&&r.dataTransfer.items.length>0)return;ue("Only image files are supported","error");return}const i=He(r.clientX,r.clientY);for(let o=0;o<s.length;o++){const c=s[o];ue(`Uploading ${c.name}...`);try{const{url:l}=await Ir(c,v.boardId),u=new Image;u.src=l,await new Promise(m=>u.onload=m);const p={type:"image",x:i.x+o*30,y:i.y+o*30,width:u.width>800?800:u.width,height:u.width>800?800/u.width*u.height:u.height,src:l,fileName:c.name,favorite:!1,zIndex:ot()+1},f="ai_up_"+Date.now();W(v.boardId,p).then(()=>{v.currentTemplate&&Bc(f)}).catch(()=>{}),ue(`${c.name} uploaded!`,"success")}catch(l){console.error("Upload error:",l),ue(`Failed to upload ${c.name}`,"error")}}});const t=document.getElementById("file-input");t&&t.addEventListener("change",async r=>{const s=Array.from(r.target.files).filter(o=>o.type.startsWith("image/")),i=He(window.innerWidth/2,window.innerHeight/2);for(let o=0;o<s.length;o++){const c=s[o];ue(`Uploading ${c.name}...`);try{const{url:l}=await Ir(c,v.boardId),u=new Image;u.src=l,await new Promise(m=>u.onload=m);const p={type:"image",x:i.x+o*30,y:i.y+o*30,width:u.width>800?800:u.width,height:u.width>800?800/u.width*u.height:u.height,src:l,fileName:c.name,favorite:!1,zIndex:ot()+1},f="ai_img_"+Date.now();W(v.boardId,p).then(()=>{v.currentTemplate&&Bc(f)}).catch(()=>{}),ue(`${c.name} uploaded!`,"success")}catch(l){console.error("Upload error:",l),ue(`Failed to upload ${c.name}`,"error")}}t.value=""})}function XA(){const n=document.querySelectorAll(".node-palette-item"),e=ee.wrapper;n.forEach(t=>{t.addEventListener("dragstart",r=>{r.dataTransfer.setData("application/x-node-type",t.dataset.nodeType),r.dataTransfer.effectAllowed="copy"})}),e.addEventListener("dragover",t=>{t.dataTransfer.types.includes("application/x-node-type")&&(t.preventDefault(),t.dataTransfer.dropEffect="copy")}),e.addEventListener("drop",t=>{const r=t.dataTransfer.getData("application/x-node-type");if(!r)return;t.preventDefault();const s=He(t.clientX,t.clientY);let i=null;r==="prompt"?i={type:"node-prompt",x:s.x,y:s.y,width:300,height:180,content:"",zIndex:ot()+1}:r.startsWith("enhancer-")&&(i={type:"node-enhancer",subtype:r,x:s.x,y:s.y,width:300,height:220,content:"",zIndex:ot()+1}),i&&W(v.boardId,i)})}function QA(){const n=document.getElementById("board-toolbar");if(!n)return;n.addEventListener("mousedown",t=>{t.stopPropagation()}),n.addEventListener("click",t=>{var o,c;t.stopPropagation();const r=t.target.closest(".toolbar-btn"),s=t.target.closest(".submenu-item");if(s){const l=s.dataset.shape,u=s.dataset.tool||"draw";if(v.drawShape=l,Me(u),document.querySelectorAll(".submenu-item").forEach(p=>{p.classList.toggle("active",p.dataset.shape===l)}),l!=="eraser"){const p=document.getElementById("btn-draw");if(p){const f=l==="doodle"?"pencil":l+"_tool";G[f]&&(p.innerHTML=G[f])}}return}if(!r||r.dataset.tool==="image-gen")return;const i=r.dataset.tool;if(i){if(i==="image"){(o=document.getElementById("file-input"))==null||o.click();return}if(i==="draw"){const l=r.closest(".wrap-draw");if(l){const u=l.classList.contains("show-submenu");document.querySelectorAll(".wrap-draw").forEach(p=>p.classList.remove("show-submenu")),u||l.classList.add("show-submenu")}}else(c=document.querySelector(".wrap-draw"))==null||c.classList.remove("show-submenu");Me(i);return}if(r.id==="color-picker-btn"){const l=document.getElementById("color-picker-popup");l==null||l.classList.toggle("visible")}}),document.addEventListener("click",()=>{var t,r;(t=document.querySelector('.toolbar-btn[data-tool="draw"]'))==null||t.classList.remove("show-submenu"),(r=document.getElementById("color-picker-popup"))==null||r.classList.remove("visible")});const e=document.getElementById("color-picker-popup");e&&e.addEventListener("click",t=>{const r=t.target.closest(".color-swatch");if(!r)return;t.stopPropagation();const s=r.dataset.color;v.drawColor=s;const i={"#fef3c7":"yellow","#FEF3C7":"yellow","#fce7f3":"pink","#FCE7F3":"pink","#dcfce7":"green","#DCFCE7":"green","#dbeafe":"blue","#DBEAFE":"blue","#ede9fe":"purple","#EDE9FE":"purple"};i[s]&&(v.noteColor=i[s]),e.querySelectorAll(".color-swatch").forEach(c=>c.classList.remove("active")),r.classList.add("active");const o=document.getElementById("color-picker-btn");o&&(o.style.color=s),e.classList.remove("visible")})}function Me(n){v.tool=n,document.querySelectorAll(".toolbar-btn[data-tool]").forEach(t=>{t.classList.toggle("active",t.dataset.tool===n)}),Cg();const e=ee.drawCanvas;if(e){const t=n==="draw"||n==="eraser";e.classList.toggle("active",t)}}function Cg(){const n=ee.wrapper;n&&(n.className="canvas-wrapper",v.tool==="pan"?n.style.cursor="grab":v.tool==="draw"||v.tool==="eraser"?n.classList.add("tool-draw"):v.tool==="text"?n.classList.add("tool-text"):v.tool==="note"?n.classList.add("tool-note"):n.style.cursor="default")}function JA(){var r,s,i;(r=document.getElementById("topbar-back"))==null||r.addEventListener("click",()=>{window.location.hash="#/"});const n=document.createElement("button");n.className="topbar-btn",n.id="topbar-theme-toggle",n.innerHTML='<span id="topbar-theme-icon"></span>',(s=document.querySelector(".topbar-right"))==null||s.prepend(n);const e=()=>{const o=document.getElementById("topbar-theme-icon");if(!o)return;const c=document.documentElement.getAttribute("data-theme")==="dark";o.innerHTML=c?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'};n.addEventListener("click",()=>{const c=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",c),localStorage.setItem("theme",c),e()}),e();const t=document.getElementById("board-name-editable");t&&(t.addEventListener("blur",()=>{var c;const o=t.textContent.trim();o&&o!==((c=v.board)==null?void 0:c.name)&&ia(v.boardId,{name:o})}),t.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),t.blur())})),(i=document.getElementById("topbar-share"))==null||i.addEventListener("click",()=>{const o=window.location.href;navigator.clipboard.writeText(o).then(()=>{ue("Board URL copied to clipboard!","success")}).catch(()=>{ue("Failed to copy URL","error")})})}function ex(){var e;const n=document.createElement("div");n.id="cursors-container",n.style.cssText="position:absolute;top:0;left:0;pointer-events:none;z-index:50;",(e=ee.container)==null||e.appendChild(n),hs=Om(v.boardId,t=>{n.innerHTML="",Object.values(t).forEach(r=>{const s=document.createElement("div");s.className="user-cursor",s.style.left=`${r.cursorX||0}px`,s.style.top=`${r.cursorY||0}px`,s.innerHTML=`
        <svg class="user-cursor-arrow" viewBox="0 0 24 24" fill="${r.color}" stroke="white" stroke-width="1.5">
          <path d="M5 3l14 7-7 2-2 7L5 3z"/>
        </svg>
        <span class="user-cursor-label" style="background:${r.color}">${r.name||"User"}</span>
      `,n.appendChild(s)})})}function tx(){ds=Pm(v.boardId,{onAdd:n=>{var t,r;if(console.log("[Sync] onAdd fired:",n.id,n.type),n.type==="connection"){v.elements.set(n.id,{data:n,dom:null}),Zi();return}if(n.type==="drawing"){v.elements.set(n.id,{data:n,dom:null}),(t=ee.redrawStrokes)==null||t.call(ee);return}if(v.elements.has(n.id)){console.log("[Sync] Skipping duplicate:",n.id);return}const e=jA(n);console.log("[Sync] DOM created:",!!e,"container:",!!ee.container),e&&((r=ee.container)==null||r.appendChild(e),v.elements.set(n.id,{data:n,dom:e}),zA(e,n),console.log("[Sync] Element added to DOM:",n.id,"at",n.x,n.y))},onModify:n=>{var r;const e=v.elements.get(n.id);if(!e)return;if(e.data={...e.data,...n},n.type==="drawing"){(r=ee.redrawStrokes)==null||r.call(ee);return}const t=e.dom;if(t){if(n.x!==void 0&&(t.style.left=`${n.x}px`),n.y!==void 0&&(t.style.top=`${n.y}px`),n.width!==void 0&&(t.style.width=`${n.width}px`),n.height!==void 0&&(t.style.height=`${n.height}px`),n.zIndex!==void 0&&(t.style.zIndex=n.zIndex),n.type==="note"){const s=t.querySelector(".board-note");s&&!s.matches(":focus")&&(s.innerHTML=n.content||"",s.className=`board-note color-${n.color||"yellow"}`)}if(n.type==="text"){const s=t.querySelector(".board-text-el");s&&!s.matches(":focus")&&(s.innerHTML=n.content||"")}if(n.type==="image"){const s=t.querySelector(".image-favorite");s&&(s.className=`image-favorite ${n.favorite?"active":""}`,s.innerHTML=n.favorite?G.heartFill:G.heart)}if(n.type==="frame"){const s=t.querySelector(".board-frame-title");s&&!s.matches(":focus")&&(s.textContent=n.title||"Frame")}if(n.type,n.type==="node-prompt"||n.type==="node-enhancer"){const s=t.querySelector("textarea");s&&!s.matches(":focus")&&(s.value=n.content||"")}n.type==="connection"&&Zi()}},onRemove:n=>{var t;const e=v.elements.get(n.id);e!=null&&e.dom&&e.dom.remove(),v.elements.delete(n.id),v.selectedIds.includes(n.id)&&So(v.selectedIds.filter(r=>r!==n.id)),n.type==="drawing"&&((t=ee.redrawStrokes)==null||t.call(ee)),n.type==="connection"&&Zi()}})}async function nx(n,e){v.boardId=e,v.elements.clear(),v.selectedIds=[];try{v.board=await xm(e)}catch(t){console.warn("Failed to load board:",t)}n.innerHTML=UA(v.board),ee.wrapper=document.getElementById("canvas-wrapper"),ee.container=document.getElementById("canvas-container"),ee.drawCanvas=document.getElementById("drawing-canvas"),ee.zoomIndicator=document.getElementById("zoom-indicator"),ws(),KA(),YA(),QA(),JA(),ZA(),XA();try{console.log("[Board] Setting up element sync for board:",e),tx(),console.log("[Board] Element sync setup complete");const t=window.location.hash.split("?")[1]||"",r=new URLSearchParams(t),s=r.get("template")||"general";v.currentTemplate=r.get("template"),setTimeout(async()=>{try{v.elements.size===0&&(console.log("[Board] Seeding template/header:",s),await ix(e,s),console.log("[Board] Seeding complete"))}catch(i){console.error("[Board] Seeding failed:",i)}},2500)}catch(t){console.error("[Board] setupElementSync FAILED:",t)}try{ex()}catch(t){console.warn("[Board] Presence setup failed:",t)}try{typeof jh=="function"&&jh(),typeof zh=="function"&&zh()}catch(t){console.error("[Board] Gemini setup failed:",t)}Yi=setInterval(()=>{},3e4),window.addEventListener("beforeunload",()=>{Fl(e).catch(()=>{})})}function rx(){ds==null||ds(),ds=null,hs==null||hs(),hs=null,v.boardId&&Fl(v.boardId).catch(()=>{}),ee.keyHandler&&document.removeEventListener("keydown",ee.keyHandler),ee.keyUpHandler&&document.removeEventListener("keyup",ee.keyUpHandler),Yi&&clearInterval(Yi),Yi=null,v.elements.clear(),ee={}}const ur="AIzaSyCwRpjCIUStELEZz6VIlfY46g6wbjlZpPI",$h={before_after:"Selam! Dönüşüm projende sana yardımcı olabilirim. Bana bir fotoğraf yükle, bende onun 'öncesi' veya 'sonrası' halini oluşturayım. Hangi tarzda bir değişim istersin?",pro_food:"Harika bir yemek çekimi için hazırız! Plate'i profesyonelce düzenleyebilirim. Görselini buraya sürükle, profesyonel dokunuşları ben yapayım. Hangi tarz ışık istersin?",redesign_room:"Odanı yeniden tasarlayalım mı? İstediğin tarzı söyle (Modern, Klasik vb.) ve odanın fotoğrafını at, hemen başlayalım!",instagram_pro:"Burası senin Instagram strateji merkezin! 🚀 Başlamadan önce seni tanımam lazım: Kaç takipçin var? Ana hedefin nedir (Büyüme, satış vb.)? Şu an kullandığın hook'lardan bir örnek verir misin? Ayrıca analiz etmemi istediğin postlarını buraya yükleyebilirsin!"},Uh={before_after:"Create a high-end comparison image. Transform the original into a stunning, professional version. Style: {user_input}. Ensure hyper-realistic textures and dramatic lighting.",pro_food:"Apply professional food photography styling. Enhance realism with natural lighting, steam, and vibrant colors. Context: {user_input}. Gourmet presentation.",redesign_room:"Complete interior redesign. Transform the space into a {user_input} style room. Professional architectural photography, 8k resolution, cinematic lighting.",instagram_pro:"You are a world-class Instagram Content Strategist. Analyze the provided image (post) and user data (followers: {followers}, goal: {goal}, hook: {hook}). Provide actionable device on: 1. Visual Appeal 2. Hook Strength 3. Engagement Strategy. User request: {user_input}. Reply in Turkish."};function jh(){const n=document.getElementById("chat-sidebar"),e=document.getElementById("toolbar-chatbot-btn"),t=document.getElementById("chat-close"),r=document.getElementById("chat-input"),s=document.getElementById("chat-send"),i=document.getElementById("chat-content");e&&e.addEventListener("click",()=>{n.classList.toggle("open")}),t&&t.addEventListener("click",()=>{n.classList.remove("open")});const o=`gemini_chat_${window.location.hash.split("/")[2]}`;(()=>{try{const k=JSON.parse(localStorage.getItem(o))||[];if(k.length===0){const x=window.location.hash.split("?")[1]||"",O=new URLSearchParams(x).get("template");O&&$h[O]&&setTimeout(()=>{l($h[O],!1),n.classList.add("open")},1e3)}k.forEach(x=>{const N=document.createElement("div");N.className=`chat-bubble ${x.isUser?"user":"ai"}`,N.textContent=x.text,i.appendChild(N)}),i.scrollTop=i.scrollHeight}catch{}})();const l=(k,x=!1)=>{const N=document.createElement("div");N.className=`chat-bubble ${x?"user":"ai"}`,N.textContent=k,i.appendChild(N),i.scrollTop=i.scrollHeight;try{const O=JSON.parse(localStorage.getItem(o))||[];O.push({text:k,isUser:x}),localStorage.setItem(o,JSON.stringify(O))}catch{}},u=async k=>{var x,N,O,F;try{l(k,!0),r.value="";const q=v.currentTemplate,he=v.replyElementId;let se=null;if(he){const w=v.elements.get(he);if(w&&w.data.type==="image")try{const T=w.data.src;let b="",S="image/png";if(T.startsWith("data:")){const E=T.split(",");S=E[0].split(":")[1].split(";")[0],b=E[1]}else{const Ne=await(await fetch(T)).blob();S=Ne.type,b=await new Promise(Je=>{const at=new FileReader;at.onloadend=()=>Je(at.result.split(",")[1]),at.readAsDataURL(Ne)})}se={inline_data:{mime_type:S,data:b}}}catch(T){console.error("Image process error:",T)}}if(q&&he&&Uh[q]){const w=v.elements.get(he);if(w&&w.data.type==="image"){let T=`You are a design assistant for the '${q}' template. The user uploaded an image and said: "${k}".`;q==="instagram_pro"&&(T=`You are a world-class Instagram Content Strategist for the 'instagram_pro' template. Analyze the visual elements, text, and aesthetics of the provided post. User request: "${k}". Provide strategic advice based on visual appeal and expected engagement. Reply in Turkish.`);const b=[{text:`${T} Is this enough detail to provide professional value? If YES, output exactly "READY: [detailed feedback/strategy if instagram_pro, OR detailed prompt if other templates]". If NO, output a short question to ask the user for missing details in Turkish.`}];se&&b.push(se);const Ne=((N=(x=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:b}]})})).json()).candidates)==null?void 0:x[0])==null?void 0:N.content.parts[0].text)||"";if(Ne.startsWith("READY:")){const Je=Ne.replace("READY:","").trim();if(q==="instagram_pro")l(Je,!1);else{const at=Uh[q].replace("{user_input}",Je);l("Tasarım detayları hazırlandı. Görsel oluşturuluyor...",!1),await qh(at,w.data.x+(w.data.width||300)+40,w.data.y),l("Dönüşüm tamamlandı! Yeni görsel tahtaya eklendi.",!1)}Ja()}else l(Ne,!1);return}}if(v.replyElementId){const w=v.elements.get(v.replyElementId);if(w&&w.data.type==="image"){l("Görsel üzerinde çalışıyorum...",!1);const T=[{text:`User wants to modify this image. User request: "${k}". Create a professional, highly detailed prompt for an image generator (like Imagen) to create a new version inspired by this content. ONLY output the prompt.`}];se&&T.push(se);const E=((F=(O=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:T}]})})).json()).candidates)==null?void 0:O[0])==null?void 0:F.content.parts[0].text)||k;await qh(E,w.data.x+(w.data.width||300)+40,w.data.y),l("İşlem tamam! Yeni görsel eklendi.",!1),Ja();return}}const _=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"You are a creative assistant helping the user with their design board. Reply in Turkish unless asked otherwise. Prompt: "+k}]}]})})).json();_.candidates&&_.candidates[0]?l(_.candidates[0].content.parts[0].text,!1):l("Üzgünüm, şu an yanıt veremiyorum.",!1)}catch(q){console.error(q),l("Gemini ile iletişim kurulurken hata oluştu.",!1)}};s&&(s.addEventListener("click",()=>{r.value.trim()&&u(r.value.trim())}),r.addEventListener("keypress",k=>{k.key==="Enter"&&r.value.trim()&&u(r.value.trim())}));const p=document.getElementById("btn-auto-layout");p&&p.addEventListener("click",()=>ox()),btnClearReply&&btnClearReply.addEventListener("click",k=>{k.stopPropagation(),Ja()});const f=document.getElementById("tool-image-gen"),m=document.getElementById("image-gen-popup"),y=document.getElementById("ig-generate-btn"),A=document.getElementById("ig-prompt");if(m&&m.addEventListener("mousemove",k=>{const x=m.getBoundingClientRect(),N=k.clientX-x.left,O=k.clientY-x.top;m.style.setProperty("--mouse-x",`${N}px`),m.style.setProperty("--mouse-y",`${O}px`)}),f&&f.addEventListener("click",k=>{k.stopPropagation(),m.classList.toggle("active")}),m){m.addEventListener("click",x=>x.stopPropagation()),document.addEventListener("click",x=>{!x.target.closest("#image-gen-popup")&&!x.target.closest("#tool-image-gen")&&m.classList.remove("active")});const k=document.getElementById("ig-close");k&&k.addEventListener("click",()=>m.classList.remove("active"))}y&&y.addEventListener("click",async()=>{var N,O,F,q,he,se,I,_;const k=A.value.trim();if(!k)return;const x=y.textContent;y.textContent="✨ Enchanting Prompt...",y.style.opacity="0.5",y.style.pointerEvents="none";try{const w=((N=document.getElementById("ig-camera"))==null?void 0:N.value)||"",T=((O=document.getElementById("ig-style"))==null?void 0:O.value)||"",b=[w,T].filter(Boolean).join(", "),S=b?` Also, strictly apply these visual styles and camera effects to the prompt: ${b}`:"",Je=((q=(F=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"Rewrite this prompt to be extremely detailed, hyperrealistic, high-quality, and photographic, suitable for a professional image generator. Only output the enhanced prompt, nothing else. Original: "+k+S}]}]})})).json()).candidates)==null?void 0:F[0])==null?void 0:q.content.parts[0].text)||k+(b?", "+b:"");let at=0;y.textContent="Generating Imagen 4.0 Image (0%)...";const An=((he=document.getElementById("ig-size"))==null?void 0:he.value)||"1920x1080",$r={"1024x1024":"1:1","1920x1080":"16:9","1080x1920":"9:16"}[An]||"16:9",xn=((se=document.getElementById("ig-quality"))==null?void 0:se.value)||"standard";let Zn="imagen-4.0-fast-generate-001";xn==="4k"&&(Zn="imagen-4.0-generate-001"),xn==="8k"&&(Zn="imagen-4.0-ultra-generate-001");let ut=xn==="8k"?Je+", 8k resolution, ultra detailed, masterpiece":xn==="4k"?Je+", 4k resolution, high quality":Je;const Se=setInterval(()=>{at+=Math.floor(Math.random()*8)+2,at>95&&(at=95),y.textContent=`Generating Imagen 4.0 Image (${at}%)...`},300),Ur=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${Zn}:predict?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instances:[{prompt:ut}],parameters:{sampleCount:1,aspectRatio:$r}})});if(!Ur.ok)throw new Error("Imagen 4.0 API Error: "+Ur.status);const di=(_=(I=(await Ur.json()).predictions)==null?void 0:I[0])==null?void 0:_.bytesBase64Encoded;if(!di)throw new Error("No image data returned from Gemini");const kn=`data:image/png;base64,${di}`,fa=await(await fetch(kn)).blob(),Sn=new File([fa],`gemini_${Date.now()}.png`,{type:"image/png"});y.textContent="Compressing High-Res Image (98%)...";let Pt="";try{const{url:vt}=await Ir(Sn,v.boardId);Pt=vt}catch(vt){console.error("Storage upload error:",vt),Pt=kn}const Nt=new Image;Nt.onload=()=>{clearInterval(Se),y.textContent="Generating Imagen 4.0 Image (100%)...",setTimeout(()=>{const vt=Nt.width||1024,Qn=Nt.height||1024,Jn=typeof He<"u"?He(window.innerWidth/2,window.innerHeight/2):{x:100,y:100},hi={type:"image",x:Jn.x-vt/2,y:Jn.y-Qn/2,width:parseInt(vt),height:parseInt(Qn),src:Pt,fileName:Sn.name,favorite:!0,zIndex:typeof ot<"u"?ot()+1:100,promptDesc:ut};typeof W=="function"&&W(v.boardId,hi).then(()=>{typeof ue<"u"&&ue(`Image generated via ${Zn}!`,"success")}).catch(pa=>{console.error("Failed to add AI image to DB:",pa),typeof ue<"u"&&ue("Image DB Error - Too Large?","error")}),y.textContent=x,y.style.opacity="1",y.style.pointerEvents="auto",m.classList.remove("active"),A.value=""},400)},Nt.onerror=()=>{throw clearInterval(Se),new Error("Image failed to load in DOM")},Nt.src=Pt}catch(w){console.error(w),typeof ue<"u"&&ue("Failed to generate image.","error"),y.textContent=x,y.style.opacity="1",y.style.pointerEvents="auto",m.classList.remove("active")}})}function zh(){var i,o,c,l,u,p,f;const n=document.getElementById("draw-size-slider"),e=document.getElementById("draw-size-val");n&&n.addEventListener("input",m=>{const y=parseInt(m.target.value);v.drawWidth=y,e&&(e.textContent=y+"px")});const t=document.getElementById("draw-color-picker");t&&t.addEventListener("input",m=>{v.drawColor=m.target.value});const r=document.querySelector(".eraser-btn");r&&r.addEventListener("click",()=>{Me("eraser"),document.querySelector(".wrap-draw").classList.remove("show-submenu")});const s=document.getElementById("text-format-popover");if(s){s.addEventListener("mousedown",A=>{A.target.tagName!=="INPUT"&&A.preventDefault()});const m=A=>{var O,F,q;const x=window.getSelection().anchorNode,N=(F=(O=x==null?void 0:x.parentElement)==null?void 0:O.closest(".board-text-el, .board-note"))==null?void 0:F.parentElement;if(N){const he=(q=Array.from(v.elements.entries()).find(([se,I])=>I.dom===N))==null?void 0:q[0];if(he){const se=N.querySelector(".board-text-el, .board-note").innerHTML;_e(v.boardId,he,{...A,content:se})}}},y=(A,k=null)=>{document.execCommand(A,!1,k),m({})};(i=document.getElementById("tf-bold"))==null||i.addEventListener("click",()=>y("bold")),(o=document.getElementById("tf-italic"))==null||o.addEventListener("click",()=>y("italic")),(c=document.getElementById("tf-underline"))==null||c.addEventListener("click",()=>y("underline")),(l=document.getElementById("tf-strike"))==null||l.addEventListener("click",()=>y("strikeThrough")),(u=document.getElementById("tf-list"))==null||u.addEventListener("click",()=>y("insertUnorderedList")),(p=document.getElementById("tf-code"))==null||p.addEventListener("click",()=>y("formatBlock","<pre>")),(f=document.getElementById("tf-color-picker"))==null||f.addEventListener("input",A=>{const k=A.target.value;document.execCommand("foreColor",!1,k);const x=document.getElementById("tf-color-container");x&&(x.style.color=k),m({})}),document.querySelectorAll("#tf-size-dropdown .tf-dropdown-menu button").forEach(A=>{A.addEventListener("click",()=>{var O,F;const k=parseInt(A.dataset.size),N=(F=(O=window.getSelection().anchorNode)==null?void 0:O.parentElement)==null?void 0:F.closest(".board-text-el, .board-note");if(N){N.style.fontSize=`${k}px`;const q=document.getElementById("tf-current-size");q&&(q.textContent=A.textContent),m({fontSize:k})}})})}}function Zi(){const n=document.getElementById("connection-layer");n&&(n.innerHTML="",v.elements.forEach(e=>{var r,s,i,o,c,l;const t=e.data;if(t.type==="connection"&&t.from&&t.to){const u=v.elements.get(t.from),p=v.elements.get(t.to);if(u&&p){const f=((r=u.data.type)==null?void 0:r.startsWith("node-"))||((s=p.data.type)==null?void 0:s.startsWith("node-"));let m=u.data.x+(u.data.width||200)/2,y=u.data.y+(u.data.height||200)/2,A=p.data.x+(p.data.width||200)/2,k=p.data.y+(p.data.height||200)/2;if(f){const x=u.data.width||((i=u.dom)==null?void 0:i.offsetWidth)||320,N=u.data.height||((o=u.dom)==null?void 0:o.offsetHeight)||200;p.data.width||(c=p.dom)!=null&&c.offsetWidth;const O=p.data.height||((l=p.dom)==null?void 0:l.offsetHeight)||200;m=u.data.x+x,y=u.data.y+N/2,A=p.data.x,k=p.data.y+O/2;const F=document.createElementNS("http://www.w3.org/2000/svg","path"),q=Math.max(50,Math.abs(A-m)*.5),he=`M ${m} ${y} C ${m+q} ${y}, ${A-q} ${k}, ${A} ${k}`;F.setAttribute("d",he),F.classList.add("node-connection-path"),F.style.pointerEvents="none",n.appendChild(F)}else{const x=document.createElementNS("http://www.w3.org/2000/svg","line");x.setAttribute("x1",m),x.setAttribute("y1",y),x.setAttribute("x2",A),x.setAttribute("y2",k),n.appendChild(x)}}}}))}async function sx(n){var i;const e=v.elements.get(n);if(!e){console.error("[RunModel] Enhancer element not found in state:",n);return}console.log("[RunModel] Starting for enhancer:",n);let t="",r=!1;if(v.elements.forEach(o=>{var l;const c=o.data;if(c.type==="connection"&&c.to===n){r=!0;const u=v.elements.get(c.from);if(console.log("[RunModel] Found connection from:",c.from,"type:",u==null?void 0:u.data.type),u&&u.data.type==="node-prompt"){const p=(l=u.dom)==null?void 0:l.querySelector("textarea");t=p?p.value:u.data.content||"",console.log("[RunModel] Source prompt content:",t)}}}),!r){ue("Lütfen önce bir Prompt kartını bu karta bağlayın.","warning");return}if(!t.trim()){ue("Bağlı Prompt kartı boş. Lütfen bir metin girin.","warning");return}_e(v.boardId,n,{content:"⏳ Sihirli prompt hazırlanıyor..."});const s=e.dom.querySelector(".run-model-btn");s&&(s.textContent="İşleniyor...",s.disabled=!0);try{console.log("[RunModel] Fetching from Hugging Face...");const o=await fetch("https://api-inference.huggingface.co/models/Gustavosta/MagicPrompt-Stable-Diffusion",{method:"POST",headers:{Authorization:"Bearer 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","Content-Type":"application/json"},body:JSON.stringify({inputs:t})});if(!o.ok){const u=await o.text();throw console.error("[RunModel] API Error:",u),new Error("API isteği başarısız oldu.")}const c=await o.json();console.log("[RunModel] API Success:",c);let l=((i=c[0])==null?void 0:i.generated_text)||"";e.data.subtype==="enhancer-skin"?l+=", extremely detailed skin texture, photorealistic, 8k, highly detailed, subsurface scattering, masterwork":e.data.subtype==="enhancer-quality"&&(l+=", masterpiece, best quality, ultra-detailed, highres, cinematic lighting, 8k uhd, unreal engine 5, octane render"),_e(v.boardId,n,{content:l}),ue("Prompt başarıyla sihirli hale getirildi!","success")}catch(o){console.error("[RunModel] Error:",o),_e(v.boardId,n,{content:"❌ Hata: "+o.message}),ue("Bir hata oluştu.","error")}finally{s&&(s.textContent="→ Run Model",s.disabled=!1)}}async function ix(n,e){e==="before_after"?(await W(n,{type:"text",content:'<span class="seed-title">Transformation <span style="color:var(--brand-color)">Studio</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Turn single reference shots into compelling visual stories.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Seed Instructions",x:200,y:280,width:600,height:220,zIndex:0}),await W(n,{type:"text",content:'1. Upload your messy or clean subject image.<br>2. Right-click and select "Make Professional" or "Before/After".<br>3. Connect images to generate a side-by-side transition.',x:230,y:330,width:540,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Automotive Restoration</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/car_before.png",x:200,y:600,width:440,height:320,zIndex:1}),await W(n,{type:"image",src:"/templates/car_after.png",x:670,y:600,width:440,height:320,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Fitness & Body</span>',x:200,y:960,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/car_before.png",x:200,y:1010,width:400,height:280,zIndex:1}),await W(n,{type:"image",src:"/templates/car_after.png",x:630,y:1010,width:400,height:280,zIndex:1}),await W(n,{type:"note",content:"<b>Pro Tip:</b><br><br>Use the Instagram tool to export these pairs!",x:1160,y:300,width:220,height:140,color:"blue",zIndex:2})):e==="pro_food"?(await W(n,{type:"text",content:'<span class="seed-title">Gourmet <span style="color:var(--brand-color)">Plating</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"frame",title:"How it works",x:200,y:280,width:620,height:200,zIndex:0}),await W(n,{type:"text",content:"Our Food AI optimizes lighting, adds realistic steam, and enhances textures to make any meal look studio-ready. Use the tool on the right-click menu.",x:230,y:330,width:560,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Fast Food High-Res</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/messy_burger.png",x:200,y:600,width:420,height:320,zIndex:1}),await W(n,{type:"image",src:"/templates/pro_burger.png",x:650,y:600,width:420,height:320,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Plated Meals</span>',x:200,y:960,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/pro_burger.png",x:200,y:1010,width:480,height:360,zIndex:1}),await W(n,{type:"image",src:"/templates/messy_burger.png",x:710,y:1010,width:480,height:360,zIndex:1})):e==="redesign_room"?(await W(n,{type:"text",content:'<span class="seed-title">Space <span style="color:var(--brand-color)">Reimagine</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"frame",title:"Interior AI Workflow",x:200,y:280,width:600,height:180,zIndex:0}),await W(n,{type:"text",content:"Convert any raw space into a stylized masterpiece. Experiment with dark moody lighting or sunny Mediterranean layouts.",x:230,y:330,width:540,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Home Office Setup</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_before.png",x:200,y:600,width:460,height:340,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_after.png",x:690,y:600,width:460,height:340,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Studio Apartments</span>',x:200,y:980,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_before.png",x:200,y:1030,width:480,height:360,zIndex:1})):e==="general"?(await W(n,{type:"text",content:'<span class="seed-title">Creative <span style="color:var(--brand-color)">Storyboard</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Organize your thoughts, reference images, and AI explorations in one place.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Getting Started",x:200,y:280,width:600,height:180,zIndex:0}),await W(n,{type:"text",content:"• Drag images here from your PC<br>• Use the Toolbar to add notes and text<br>• Right-click any image for AI enhancements",x:230,y:330,width:540,fontSize:16,zIndex:1})):e==="instagram_pro"&&(await W(n,{type:"text",content:'<span class="seed-title">Instagram <span style="color:#E1306C">Growth Studio</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Audit your grid, refine your hooks, and get actionable advice to 10x your engagement.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Post Gallery / Grid Audit",x:200,y:280,width:1e3,height:500,zIndex:0}),await W(n,{type:"text",content:"Drag your recent posts here for Gemini to analyze.",x:600,y:500,width:400,fontSize:16,color:"var(--text-tertiary)",zIndex:1}),await W(n,{type:"note",content:'<b>Current Hook Ideas</b><br><br>1. "The secret no one tells you about..."<br>2. "This simple change doubled my sales..."',x:1250,y:280,width:250,height:200,color:"yellow",zIndex:1}),await W(n,{type:"note",content:"<b>Growth Goals</b><br><br>- 10k Followers<br>- 5% Engagement Rate",x:1250,y:500,width:250,height:200,color:"pink",zIndex:1}))}async function qh(n,e,t){var r,s;try{const l=(s=(r=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${ur}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instances:[{prompt:n}],parameters:{sampleCount:1,aspectRatio:"1:1"}})})).json()).predictions)==null?void 0:r[0])==null?void 0:s.bytesBase64Encoded;if(!l)throw new Error("No image data");const u=`data:image/png;base64,${l}`,p={type:"image",x:e,y:t,width:300,height:300,src:u,fileName:`ai_edit_${Date.now()}.png`,zIndex:ot()+1,promptDesc:n};await W(v.boardId,p)}catch(i){console.error("Image Gen Error:",i),ue("Failed to generate contextual image.","error")}}function Bc(n){const e=v.elements.get(n);if(!e||e.data.type!=="image")return;v.replyElementId=n;const t=document.getElementById("chat-reply-context"),r=document.getElementById("reply-thumb"),s=document.getElementById("chat-sidebar");t&&(t.style.display="flex"),r&&(r.style.backgroundImage=`url(${e.data.src})`),s&&s.classList.add("open");const i=document.getElementById("chat-input");i&&(i.placeholder="Düzeltmek istediğin şeyi söyle...",i.focus())}function Ja(){v.replyElementId=null;const n=document.getElementById("chat-reply-context");n&&(n.style.display="none");const e=document.getElementById("chat-input");e&&(e.placeholder="Ask Gemini...")}async function ox(){const n=Array.from(v.elements.values()).filter(o=>o.data.type==="image"||o.data.type==="frame").sort((o,c)=>(o.data.y||0)-(c.data.y||0));if(n.length===0){ue("No items to arrange","info");return}ue("Organizing Board Layout...","info");const e=200,t=150,r=50,s=350,i=3;n.forEach((o,c)=>{const l=c%i,u=Math.floor(c/i),p=e+l*(s+r),f=t+u*(s+r);o.dom.classList.add("smooth-move"),o.dom.style.left=`${p}px`,o.dom.style.top=`${f}px`,o.data.x=p,o.data.y=f,_e(v.boardId,o.data.id,{x:p,y:f}),setTimeout(()=>o.dom.classList.remove("smooth-move"),800)})}let $={projectId:null,project:null,elements:new Map,selectedId:null,isDragging:!1,dragOffset:{x:0,y:0},zoom:1,propTab:"style",clipboard:null},Fc=null,Te={},rs=null;const Vt={photo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><polygon points="10 9 15 12 10 15 10 9"/></svg>',text:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',shapes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',bg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M2 6h20M2 18h20"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'},ax=["Outfit","Inter","Montserrat","Playfair Display","Poppins","Roboto","Bebas Neue","Dancing Script","Space Grotesk","Lexend","Fraunces","DM Sans","Archivo Black","Work Sans","Syne","Public Sans"],Rg=[{name:"Square",svg:'<rect x="4" y="4" width="16" height="16" rx="1" fill="currentColor"/>'},{name:"Circle",svg:'<circle cx="12" cy="12" r="8" fill="currentColor"/>'},{name:"Triangle",svg:'<path d="M12 4L4 20H20L12 4Z" fill="currentColor"/>'},{name:"Hexagon",svg:'<path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="currentColor"/>'},{name:"Arrow Right",svg:'<path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/>'},{name:"Arrow Left",svg:'<path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none"/>'},{name:"Speech Bubble",svg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor"/>'},{name:"Heart",svg:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.7 7.8l1.1 1.1 7.7 7.7 7.7-7.7 1.1-1.1a5.5 5.5 0 0 0 0-7.8z" fill="currentColor"/>'},{name:"Star",svg:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>'},{name:"Instagram",svg:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2" fill="none"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>'},{name:"Facebook",svg:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/>'},{name:"Twitter",svg:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor"/>'}];function cx(n){if(!n||typeof n!="string")return{r:0,g:0,b:0};const e=n.startsWith("#")?n.slice(1):n,t=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return{r:isNaN(t)?0:t,g:isNaN(r)?0:r,b:isNaN(s)?0:s}}function lx(n,e){const t=Array.from($.elements.values()).sort((s,i)=>(i.zIndex||0)-(s.zIndex||0)),r=t.splice(n,1)[0];t.splice(e,0,r),t.forEach((s,i)=>{const o=t.length-i;s.zIndex!==o&&ve(s.id,{zIndex:o})}),setTimeout(()=>Bt(r.id),50)}const Mi=new Map;function Pg(n,e){Mi.has(n)&&clearTimeout(Mi.get(n)),Mi.set(n,setTimeout(()=>{aa($.projectId,n,e),Mi.delete(n)},200))}function ve(n,e){const t=$.elements.get(n);t&&(Object.assign(t,e),Ro(t.dom,t)),Pg(n,e)}function Co(n,e){if(!(!n||!e||isNaN(n)||isNaN(e))){if($.project&&($.project.width=n,$.project.height=e),Te.canvas){Te.canvas.style.width=`${n}px`,Te.canvas.style.height=`${e}px`;const t=Te.workspace.offsetWidth-100,r=Te.workspace.offsetHeight-100;$.zoom=Math.min(t/n,r/e,1),(isNaN($.zoom)||$.zoom<=0)&&($.zoom=1),Te.canvas.style.transform=`scale(${$.zoom})`}$.projectId&&oa($.projectId,{width:n,height:e})}}function ux(n,e){return new Promise(t=>{if(e){const r=document.createElement("video");r.onloadedmetadata=()=>t({w:Math.max(r.videoWidth,400),h:Math.max(r.videoHeight,400)}),r.onerror=()=>t({w:800,h:800}),r.src=n}else{const r=new Image;r.onload=()=>t({w:Math.max(r.naturalWidth,100),h:Math.max(r.naturalHeight,100)}),r.onerror=()=>t({w:800,h:800}),r.src=n}})}function dx(){return`
    <div class="editor-page theme-liquid">
      <!-- Sidebar -->
      <aside class="editor-sidebar">
        <div class="sidebar-header">
          <button id="editor-back" class="icon-btn">${Vt.back}</button>
          <span class="brand-text">Creative Editor</span>
        </div>
        
        <div class="editor-tools">
          <button class="editor-tool-btn active" data-tab="images">${Vt.photo}<span>Photos</span></button>
          <button class="editor-tool-btn" data-tab="text">${Vt.text}<span>Text</span></button>
          <button class="editor-tool-btn" data-tab="elements">${Vt.shapes}<span>Elements</span></button>
          <button class="editor-tool-btn" data-tab="background">${Vt.bg}<span>Canvas</span></button>
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
             <button class="btn-neo btn-neo-default" id="btn-export">${Vt.download} Export Project</button>
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
  `}function Hh(n){const e=document.getElementById("sidebar-tab-content");if(e){if(n==="images")e.innerHTML=`
      <div style="padding: 0 4px;">
        <button class="btn-apple" style="width:100%; margin-bottom:24px; justify-content: center;" id="btn-upload">Upload Media</button>
      </div>
      <div class="section-label">Recently Added</div>
      <div id="recent-uploads" class="media-grid"></div>
    `,document.getElementById("btn-upload").onclick=()=>document.getElementById("editor-file-input").click();else if(n==="text")e.innerHTML=`
      <button class="btn btn-primary-alt" style="width:100%; margin-bottom:12px;" id="btn-add-text">Add Heading</button>
      <button class="editor-tool-btn-wide" data-preset="sub">Add Subheading</button>
      <button class="editor-tool-btn-wide" data-preset="body">Add Body Text</button>
    `,document.getElementById("btn-add-text").onclick=()=>Xi("Heading",64,800),e.querySelector('[data-preset="sub"]').onclick=()=>Xi("Subheading",32,600),e.querySelector('[data-preset="body"]').onclick=()=>Xi("Body text...",18,400);else if(n==="elements")e.innerHTML=`
      <div class="element-grid">
        ${Rg.map(t=>`
          <div class="element-item" data-name="${t.name}">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">${t.svg}</svg>
          </div>
        `).join("")}
      </div>
    `,e.querySelectorAll(".element-item").forEach(t=>{t.onclick=r=>{r.stopPropagation(),gx(t.dataset.name)}});else if(n==="background"){e.innerHTML=`
      <div class="prop-title">Canvas Background Color</div>
      <div class="color-grid">${["#ffffff","#f5f5f0","#000000","#ff3c00","#0066cc","#34c759"].map(r=>`<div class="color-swatch" style="background:${r}" data-color="${r}"></div>`).join("")}</div>
      <div class="prop-control">
        <label>Custom Color</label>
        <input type="color" id="bg-picker" class="color-picker-full">
      </div>
    `,e.querySelectorAll(".color-swatch").forEach(r=>r.onclick=()=>Wh(r.dataset.color));const t=document.getElementById("bg-picker");t&&(t.oninput=r=>Wh(r.target.value))}else if(n==="layout"){const t=[{name:"Instagram Post",w:1080,h:1080},{name:"Instagram Story",w:1080,h:1920},{name:"Twitter/X Post",w:1200,h:675},{name:"Square Tiny",w:360,h:360}];e.innerHTML=`
      <div class="prop-title">Dimensions</div>
      ${t.map(r=>`<button class="layout-preset-btn" data-w="${r.w}" data-h="${r.h}"><span>${r.name}</span><small>${r.w}x${r.h}</small></button>`).join("")}
      <div class="custom-dim">
        <input type="number" id="custom-w" placeholder="Width">
        <input type="number" id="custom-h" placeholder="Height">
      </div>
      <button class="btn btn-primary-alt" style="width:100%; margin-top:12px;" id="btn-apply-size">Apply Custom Size</button>
    `,e.querySelectorAll("[data-w]").forEach(r=>r.onclick=()=>Co(parseInt(r.dataset.w),parseInt(r.dataset.h))),document.getElementById("btn-apply-size").onclick=()=>Co(parseInt(document.getElementById("custom-w").value),parseInt(document.getElementById("custom-h").value))}}}function Bt(n){const e=document.getElementById("editor-properties");if(!e)return;const t=$.elements.get(n);if(!t){e.innerHTML='<div class="empty-state">Select an element to edit</div>';return}const r=$.propTab||"style";let s="";r==="style"?t.type==="text"?s=`
        <div class="prop-section">
          <div class="prop-title">Text Style</div>
          <select class="font-select" id="input-font">${ax.map(f=>`<option value="${f}" ${t.fontFamily===f?"selected":""}>${f}</option>`).join("")}</select>
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
          <div class="prop-control">
            <div class="prop-label"><span>Blending Mode</span></div>
            <select class="font-select" id="input-blend">
              ${["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"].map(f=>`<option value="${f}" ${t.blendMode===f?"selected":""}>${f}</option>`).join("")}
            </select>
          </div>
          <div class="prop-control">
            <div class="prop-label"><span>Curve (Kıvırma)</span><span>${t.curve||0}</span></div>
            <input type="range" class="prop-slider" id="input-curve" min="-100" max="100" value="${t.curve||0}">
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
          <div class="prop-title">Advanced Photo Studio</div>
          <button id="btn-tui-open" class="btn-neo btn-neo-default" style="width:100%; border-radius:4px; padding:12px; margin-bottom:12px; display:flex; justify-content:center;">✨ TUI Görsel Editör'ü Aç</button>
        </div>
        <div class="prop-section">
          <div class="prop-title">Image Adjustments</div>
          ${["brightness","contrast","blur","saturate","hueRotate","temp"].map(f=>{var k;const m={brightness:"Parlaklık",contrast:"Kontrast",blur:"Bulanıklık",saturate:"Doygunluk",hueRotate:"Renk Tonu",temp:"Sıcaklık"}[f],y=f==="blur"?20:f==="hueRotate"?360:f==="temp"?100:3,A=f==="hueRotate"||f==="temp"?1:.1;return`
              <div class="prop-control">
                <div class="prop-label"><span>${m}</span></div>
                <input type="range" class="prop-slider" data-filter="${f}" min="${f==="hueRotate"||f==="temp"?-y:0}" max="${y}" step="${A}" value="${((k=t.filters)==null?void 0:k[f])!==void 0?t.filters[f]:f==="blur"||f==="hueRotate"||f==="temp"?0:1}">
              </div>
            `}).join("")}
          <div class="prop-control">
            <div class="prop-label"><span>Clarity (Netlik)</span></div>
            <input type="range" class="prop-slider" id="input-clarity" min="0" max="2" step="0.1" value="${t.clarity||0}">
          </div>
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
          ${[{id:"none",label:"Hiçbiri"},{id:"lift",label:"Yükselt"},{id:"glow",label:"Parlama"},{id:"shadow",label:"Gölge"}].map(f=>`<button class="effect-btn-sm ${t.effect===f.id?"active":""}" data-effect="${f.id}">${f.label}</button>`).join("")}
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
        ${Array.from($.elements.values()).sort((m,y)=>(y.zIndex||0)-(m.zIndex||0)).map((m,y)=>{let A=m.type==="text"?m.content||"Text":m.type==="image"?"Resim":m.name||m.type;A.length>20&&(A=A.substring(0,20)+"...");const k=m.type==="text"?Vt.text:m.type==="video"?Vt.video:Vt.photo;return`
            <div class="layer-item ${n===m.id?"active":""}" data-layer-id="${m.id}" data-index="${y}" style="pointer-events: auto;">
              <div class="layer-info" style="pointer-events: none;">
                <span class="layer-icon" style="pointer-events: none;">${k}</span>
                <span class="layer-name" style="pointer-events: none;">${A}</span>
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
  `,document.getElementById("btn-delete-el").onclick=()=>{ca($.projectId,n),$.selectedId=null,Bt(null)},e.querySelectorAll("[data-ptab]").forEach(f=>f.onclick=()=>{$.propTab=f.dataset.ptab,Bt(n)}),e.querySelectorAll("[data-effect]").forEach(f=>{f.onclick=m=>{m.stopPropagation(),ve(n,{effect:f.dataset.effect}),setTimeout(()=>Bt(n),50)}}),t.type==="text"&&(document.getElementById("btn-bold").onclick=()=>ve(n,{fontWeight:t.fontWeight==="bold"?"normal":"bold"}),document.getElementById("btn-italic").onclick=()=>ve(n,{fontStyle:t.fontStyle==="italic"?"normal":"italic"}),document.getElementById("btn-underline").onclick=()=>ve(n,{textDecoration:t.textDecoration==="underline"?"none":"underline"}),document.getElementById("input-fs").oninput=f=>ve(n,{fontSize:parseInt(f.target.value)}),document.getElementById("input-ls").oninput=f=>ve(n,{letterSpacing:parseInt(f.target.value)}),document.getElementById("check-bg").onchange=f=>{ve(n,{bgEnabled:f.target.checked}),Bt(n)},document.getElementById("input-bg-color")&&(document.getElementById("input-bg-color").oninput=f=>ve(n,{bgColor:f.target.value})),document.getElementById("input-color").oninput=f=>ve(n,{color:f.target.value}),document.getElementById("input-font").onchange=f=>ve(n,{fontFamily:f.target.value}),document.getElementById("input-blend").onchange=f=>ve(n,{blendMode:f.target.value}),document.getElementById("input-curve").oninput=f=>ve(n,{curve:parseInt(f.target.value)}));const i=document.getElementById("input-clarity");i&&(i.oninput=f=>ve(n,{clarity:parseFloat(f.target.value)})),[{id:"shadow-x",key:"shadowX"},{id:"shadow-y",key:"shadowY"},{id:"shadow-blur",key:"shadowBlur"},{id:"shadow-opacity",key:"shadowOpacity"},{id:"shadow-color",key:"shadowColor"}].forEach(f=>{const m=document.getElementById(f.id);m&&(m.oninput=y=>{let A=y.target.value;f.id!=="shadow-color"&&(A=parseFloat(A)),ve(n,{[f.key]:A})})}),e.querySelectorAll(".layer-item").forEach(f=>{f.onmousedown=m=>{const y=f.dataset.layerId;$.selectedId=y,document.querySelectorAll(".board-element").forEach(A=>A.classList.toggle("selected",A.dataset.id===y)),document.querySelectorAll(".layer-item").forEach(A=>A.classList.toggle("active",A.dataset.layerId===y))},f.onclick=m=>{Bt(f.dataset.layerId)},f.draggable=!0,f.ondragstart=m=>{m.dataTransfer.setData("text/plain",f.dataset.index),f.classList.add("dragging")},f.ondragover=m=>{m.preventDefault(),f.classList.add("drag-over")},f.ondragleave=()=>f.classList.remove("drag-over"),f.ondrop=m=>{m.preventDefault(),f.classList.remove("drag-over");const y=parseInt(m.dataTransfer.getData("text/plain")),A=parseInt(f.dataset.index);y!==A&&lx(y,A)},f.ondragend=()=>f.classList.remove("dragging")}),e.querySelectorAll("[data-filter]").forEach(f=>f.oninput=m=>ve(n,{filters:{...t.filters||{},[m.target.dataset.filter]:parseFloat(m.target.value)}})),document.getElementById("input-opacity")&&(document.getElementById("input-opacity").oninput=f=>ve(n,{opacity:parseFloat(f.target.value)})),document.getElementById("input-radius")&&(document.getElementById("input-radius").oninput=f=>ve(n,{borderRadius:parseInt(f.target.value)}));const c=document.getElementById("btn-tui-open"),l=document.getElementById("tui-modal-wrapper"),u=document.getElementById("btn-tui-cancel"),p=document.getElementById("btn-tui-save");c&&(c.onclick=()=>{if(!l)return;l.style.display="block";const f={"common.bi.image":"","common.bisize.width":"0","common.bisize.height":"0","menu.normalIcon.path":"https://uicdn.toast.com/tui-image-editor/latest/svg/icon-d.svg","menu.activeIcon.path":"https://uicdn.toast.com/tui-image-editor/latest/svg/icon-b.svg","menu.disabledIcon.path":"https://uicdn.toast.com/tui-image-editor/latest/svg/icon-a.svg","menu.hoverIcon.path":"https://uicdn.toast.com/tui-image-editor/latest/svg/icon-c.svg","submenu.normalIcon.path":"https://uicdn.toast.com/tui-image-editor/latest/svg/icon-d.svg","submenu.activeIcon.path":"https://uicdn.toast.com/tui-image-editor/latest/svg/icon-c.svg"};rs?rs.loadImageFromURL(t.src,"Sample").catch(m=>console.error("TUI Error:",m)):rs=new tui.ImageEditor("#tui-image-editor-container",{includeUI:{loadImage:{path:t.src,name:"Sample"},theme:f,menu:["crop","flip","rotate","draw","shape","icon","text","mask","filter"],initMenu:"filter",menuBarPosition:"bottom"},cssMaxWidth:window.innerWidth-50,cssMaxHeight:window.innerHeight-150,usageStatistics:!1})}),u&&(u.onclick=()=>{l&&(l.style.display="none")}),p&&(p.onclick=()=>{if(!rs)return;const f=rs.toDataURL();ve(n,{src:f}),ve(n,{filters:{},opacity:1,effect:"none"}),l&&(l.style.display="none"),Bt(n)})}function Ro(n,e){if(!n)return;const t=isNaN(e.x)?0:e.x,r=isNaN(e.y)?0:e.y;n.style.left=`${t}px`,n.style.top=`${r}px`,n.style.width=e.width?`${e.width}px`:"auto",n.style.height=e.height?`${e.height}px`:"auto",n.style.zIndex=e.zIndex||1,n.style.borderRadius=`${e.borderRadius||0}px`,n.style.opacity=e.opacity===void 0||isNaN(e.opacity)?1:e.opacity;let s="";if(e.effect==="shadow"){const c=isNaN(e.shadowX)?0:e.shadowX,l=isNaN(e.shadowY)?4:e.shadowY,u=isNaN(e.shadowBlur)?8:e.shadowBlur,p=cx(e.shadowColor||"#000000"),f=e.shadowOpacity===void 0||isNaN(e.shadowOpacity)?.3:e.shadowOpacity;s=`${c}px ${l}px ${u}px rgba(${p.r},${p.g},${p.b},${f})`}else e.effect==="lift"?s="0 10px 30px rgba(0,0,0,0.3)":e.effect==="glow"&&(s=`0 0 20px ${e.color||"#fff"}`);const i=e.filters||{};let o=`brightness(${i.brightness||1}) contrast(${i.contrast||1}) blur(${i.blur||0}px) saturate(${i.saturate||1}) hue-rotate(${i.hueRotate||0}deg)`;if(i.temp&&i.temp!==0&&(i.temp>0?o+=` sepia(${i.temp/100}) saturate(${1+i.temp/200}) hue-rotate(${-i.temp/4}deg)`:o+=` saturate(${1-i.temp/200}) hue-rotate(${-i.temp/2}deg) brightness(${1-i.temp/400})`),e.clarity&&e.clarity>0&&(e.type==="image"||e.type==="video")){const c=n.querySelector("img, video");c&&(c.style.filter=(c.style.filter||"")+" url(#clarity)")}if(e.type==="image"||e.type==="video"){const c=n.querySelector("img, video");c&&(c.style.filter=o+(s&&e.effect!=="none"?` drop-shadow(${s})`:""),c.style.borderRadius=`${e.borderRadius||0}px`),n.style.borderRadius=`${e.borderRadius||0}px`,n.style.overflow="visible"}else if(e.type==="text"){const c=n.querySelector(".editor-text-content");if(c)if(c.style.fontFamily=e.fontFamily||"Outfit",c.style.fontSize=`${e.fontSize}px`,c.style.color=e.color||"#000000",c.style.fontWeight=e.fontWeight||600,c.style.fontStyle=e.fontStyle||"normal",c.style.textDecoration=e.textDecoration||"none",c.style.letterSpacing=`${e.letterSpacing||0}px`,c.style.lineHeight=1.2,c.style.textShadow=s,c.style.mixBlendMode=e.blendMode||"normal",e.bgEnabled?(c.style.background=e.bgColor||"#ff3c00",c.style.padding="8px",c.style.borderRadius="4px"):c.style.background="none",e.curve&&e.curve!==0){const l=e.content||"";c.innerHTML="",c.style.display="flex",c.style.justifyContent="center";const u=e.curve>0,p=l.length*5*(e.curve/100);for(let f=0;f<l.length;f++){const m=document.createElement("span");m.textContent=l[f]===" "?" ":l[f],m.style.position="relative",m.style.display="inline-block";const y=-p/2+f*(p/Math.max(1,l.length-1));m.style.transform=`rotate(${y}deg) translateY(${u?-Math.abs(y*y)/20:Math.abs(y*y)/20}px)`,c.appendChild(m)}}else c.style.display="block",c.innerHTML!==e.content&&(c.innerHTML=e.content||"")}else e.type==="element"&&(n.style.color=e.color||"#1a1a1a",n.style.filter=s?`drop-shadow(${s})`:"none")}function hx(n){const e=document.createElement("div");if(e.className="board-element",e.dataset.id=n.id,n.type==="text"){e.innerHTML=`
      <div class="move-handle" style="opacity:0; pointer-events:none; position:absolute;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l3 3 3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg></div>
      <div class="editor-text-content" contenteditable="false" spellcheck="false" style="width:100%; height:auto; min-width:20px; outline:none; white-space:pre-wrap; word-break:break-word; cursor:default; pointer-events:none;">${n.content||""}</div>
    `;const r=e.querySelector(".editor-text-content");e.ondblclick=s=>{s.stopPropagation(),n.curve&&ve(n.id,{curve:0}),r.style.pointerEvents="auto",r.contentEditable="true",r.style.cursor="text",r.focus(),document.execCommand("selectAll",!1,null)},r.oninput=s=>Pg(n.id,{content:s.target.innerText}),r.onblur=()=>{r.contentEditable="false",r.style.cursor="default",r.style.pointerEvents="none",Ro(e,n)}}else if(n.type==="image"||n.type==="video")e.innerHTML=`
      <div class="move-handle"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l3 3 3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg></div>
      <div class="media-container" style="width:100%; height:100%; position:relative; overflow:hidden;">
        ${n.type==="video"?`<video src="${n.src}" style="width:100%; height:100%; object-fit:cover;" autoplay loop muted></video>`:`<img src="${n.src}" style="width:100%; height:100%; object-fit:cover;" draggable="false">`}
      </div>
    `;else if(n.type==="element"){const r=Rg.find(s=>s.name===n.name);e.innerHTML=`
      <div class="move-handle"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l3 3 3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg></div>
      <div class="svg-container" draggable="false" style="width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">${(r==null?void 0:r.svg)||""}</svg>
      </div>
    `}const t=["nw","ne","sw","se"];return n.type==="text"&&t.push("e","w"),t.forEach(r=>{const s=document.createElement("div");s.className=`resize-handle ${r}`,e.appendChild(s),s.onmousedown=i=>{i.stopPropagation(),fx(i,n,r)}}),e.onmousedown=r=>{if(r.target.closest('[contenteditable="true"]')||r.button!==0)return;r.stopPropagation(),$.selectedId=n.id,$.isDragging=!0,document.querySelectorAll(".board-element").forEach(m=>m.classList.toggle("selected",m.dataset.id===n.id)),Bt(n.id);const s=e.getBoundingClientRect();$.dragOffset={x:(r.clientX-s.left)/$.zoom,y:(r.clientY-s.top)/$.zoom};const i=Te.canvas.getBoundingClientRect(),o=(r.clientX-i.left)/$.zoom,c=(r.clientY-i.top)/$.zoom,l=o-n.x,u=c-n.y,p=m=>{const y=Te.canvas.getBoundingClientRect(),A=(m.clientX-y.left)/$.zoom-l,k=(m.clientY-y.top)/$.zoom-u;e.style.left=`${A}px`,e.style.top=`${k}px`,n.x=A,n.y=k},f=()=>{$.isDragging=!1,aa($.projectId,n.id,{x:n.x,y:n.y}),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",f)};window.addEventListener("mousemove",p),window.addEventListener("mouseup",f)},e.oncontextmenu=r=>{r.preventDefault(),px(r,n.id)},Ro(e,n),e}function fx(n,e,t){n.stopPropagation();const r=n.clientX,s=n.clientY,i=e.width||100,o=e.height||100,c=e.x,l=e.y,u=f=>{const m=(f.clientX-r)/$.zoom,y=(f.clientY-s)/$.zoom;let A=i,k=o,x=c,N=l;if(t.includes("e")&&(A=Math.max(20,i+m)),t.includes("s")&&(k=Math.max(20,o+y)),t.includes("w")){const O=m;A=Math.max(20,i-O),x=c+O}if(t.includes("n")){const O=y;k=Math.max(20,o-O),N=l+O}if(e.type==="text")if(t==="e"||t==="w")t==="e"&&(A=Math.max(50,i+m)),t==="w"&&(A=Math.max(50,i-m),x=c+(i-A)),ve(e.id,{width:A,x});else{const O=A/i;ve(e.id,{width:A,x,y:N,fontSize:Math.max(8,Math.floor((e.fontSize||32)*O))})}else ve(e.id,{width:A,height:k,x,y:N})},p=()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",p),aa($.projectId,e.id,{width:e.width,height:e.height,x:e.x,y:e.y,fontSize:e.fontSize})};window.addEventListener("mousemove",u),window.addEventListener("mouseup",p)}function px(n,e){const t=document.getElementById("editor-context-menu");t.style.display="block",t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`;const r=t.querySelectorAll(".context-item");r[0].onclick=()=>{mx(e),t.style.display="none"},r[1].onclick=()=>{ca($.projectId,e),t.style.display="none"},window.addEventListener("mousedown",s=>{t.contains(s.target)||(t.style.display="none")},{once:!0})}async function mx(n){const e=$.elements.get(n);if(e){const{id:t,dom:r,...s}=e;s.x+=30,s.y+=30,await Vn($.projectId,s)}}async function Xi(n,e,t){const r=Te.canvas.offsetWidth,s=Te.canvas.offsetHeight;await Vn($.projectId,{type:"text",content:n,x:r/2-100,y:s/2-20,fontSize:e,fontWeight:t,fontFamily:"Outfit",color:"#1a1a1a",zIndex:$.elements.size+1})}async function gx(n){const e=Te.canvas.offsetWidth,t=Te.canvas.offsetHeight;await Vn($.projectId,{type:"element",name:n,x:e/2-100,y:t/2-100,width:200,height:200,color:"#1a1a1a",zIndex:$.elements.size+1})}function Wh(n){Te.canvas.style.background=n,oa($.projectId,{background:n})}async function yx(n,e){$.projectId=e,n.innerHTML=dx(),Te.canvas=document.getElementById("editing-canvas"),Te.workspace=document.getElementById("editor-workspace");const t=await Lm(e);if(!t)return;$.project=t,t.width&&Co(t.width,t.height),Te.canvas.style.background=t.background||"#ffffff",document.getElementById("project-title").textContent=t.name,document.querySelectorAll(".editor-tool-btn").forEach(s=>s.onclick=()=>{document.querySelectorAll(".editor-tool-btn").forEach(i=>i.classList.remove("active")),s.classList.add("active"),Hh(s.dataset.tab)}),Hh("images"),document.getElementById("editor-back").onclick=()=>window.location.hash="#/",document.getElementById("btn-export").onclick=async()=>{var c,l;const s=document.getElementById("btn-export"),i=s.innerHTML;s.innerHTML="Generating...",s.disabled=!0;const o=$.selectedId;$.selectedId=null,document.querySelectorAll(".board-element").forEach(u=>u.classList.remove("selected"));try{const u=await html2canvas(Te.canvas,{useCORS:!0,backgroundColor:((c=$.project)==null?void 0:c.background)||"#ffffff",scale:2}),p=document.createElement("a");p.download=`${((l=$.project)==null?void 0:l.name)||"board"}.png`,p.href=u.toDataURL("image/png"),p.click()}catch(u){console.error("Export Error:",u),alert("Export failed. Check console.")}finally{if(s.innerHTML=i,s.disabled=!1,o){$.selectedId=o;const u=$.elements.get(o);u&&u.dom.classList.add("selected")}}},document.getElementById("editor-file-input").onchange=async s=>{const i=s.target.files[0];if(!i)return;const o=i.type.startsWith("video/"),{url:c}=await Ir(i),l=await ux(c,o);$.elements.size===0?(Co(l.w,l.h),await Vn(e,{type:o?"video":"image",src:c,x:0,y:0,width:l.w,height:l.h,zIndex:1})):await Vn(e,{type:o?"video":"image",src:c,x:100,y:100,width:l.w,height:l.h,zIndex:$.elements.size+1})},Fc=Vm(e,{onAdd:s=>{if($.elements.has(s.id))return;const i=hx(s);Te.canvas.appendChild(i),$.elements.set(s.id,{...s,dom:i})},onModify:s=>{const i=$.elements.get(s.id);if(i){const o=$.isDragging&&$.selectedId===s.id;Object.assign(i,s),o||Ro(i.dom,i)}},onRemove:s=>{const i=$.elements.get(s.id);i&&(i.dom.remove(),$.elements.delete(s.id))}}),window.onkeydown=s=>{if(!s.target.closest('[contenteditable="true"]')){if(s.ctrlKey&&s.key==="c"&&$.selectedId&&($.clipboard={...$.elements.get($.selectedId)}),s.ctrlKey&&s.key==="v"&&$.clipboard){const{id:i,dom:o,...c}=$.clipboard;c.x+=30,c.y+=30,Vn($.projectId,c)}s.key==="Delete"&&$.selectedId&&(ca($.projectId,$.selectedId),$.selectedId=null,Bt(null)),s.key.toLowerCase()==="t"&&Xi("Double click to edit",48,700)}};const r=()=>{var o,c;const s=Te.workspace.offsetWidth-100,i=Te.workspace.offsetHeight-100;$.zoom=Math.min(s/(((o=$.project)==null?void 0:o.width)||1080),i/(((c=$.project)==null?void 0:c.height)||1080),1),Te.canvas.style.transform=`scale(${$.zoom})`};window.addEventListener("resize",r),r()}function vx(){Fc&&Fc()}const Li=document.getElementById("app");let sr=null;function _x(){const n=window.location.hash||"#/",[e,t]=n.slice(1).split("?");return e.startsWith("/board/")?{page:"board",boardId:e.replace("/board/","")}:e.startsWith("/edit/")?{page:"edit",editId:e.replace("/edit/","")}:{page:"dashboard"}}async function Gh(){sr==="dashboard"&&vI(),sr==="board"&&rx(),sr==="edit"&&vx();const n=_x();Li.innerHTML="",n.page==="board"&&n.boardId?(sr="board",nx(Li,n.boardId)):n.page==="edit"&&n.editId?(sr="edit",yx(Li,n.editId)):(sr="dashboard",yI(Li))}async function wx(){try{await Tm()}catch(e){console.warn("Auth init failed, continuing offline:",e)}const n=document.getElementById("loading-screen");n&&setTimeout(()=>{n.style.transition="opacity 0.8s ease",n.style.opacity="0",setTimeout(()=>n.remove(),800)},3500),window.addEventListener("hashchange",Gh),Gh()}wx();
