(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ny=()=>{};var Gu={};/**
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
 */const Yh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ry=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,f=s>>2,p=(s&3)<<4|c>>4;let m=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(t[f],t[p],t[m],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ry(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||u==null||p==null)throw new iy;const m=s<<2|c>>4;if(r.push(m),u!==64){const v=c<<4&240|u>>2;if(r.push(v),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sy=function(n){const e=Yh(n);return Xh.encodeByteArray(e,!0)},Zs=function(n){return sy(n).replace(/\./g,"")},Qh=function(n){try{return Xh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ay=()=>oy().__FIREBASE_DEFAULTS__,cy=()=>{if(typeof process>"u"||typeof Gu>"u")return;const n=Gu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ly=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},xo=()=>{try{return ny()||ay()||cy()||ly()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jh=n=>{var e,t;return(t=(e=xo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},uy=n=>{const e=Jh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ef=()=>{var n;return(n=xo())===null||n===void 0?void 0:n.config},tf=n=>{var e;return(e=xo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class dy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Sr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nf(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function hy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zs(JSON.stringify(t)),Zs(JSON.stringify(o)),""].join(".")}const hi={};function fy(){const n={prod:[],emulator:[]};for(const e of Object.keys(hi))hi[e]?n.emulator.push(e):n.prod.push(e);return n}function py(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ku=!1;function rf(n,e){if(typeof window>"u"||typeof document>"u"||!Sr(window.location.host)||hi[n]===e||hi[n]||Ku)return;hi[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=fy().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ku=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=py(r),v=t("text"),k=document.getElementById(v)||document.createElement("span"),x=t("learnmore"),A=document.getElementById(x)||document.createElement("a"),N=t("preprendIcon"),O=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;c(B),f(A,x);const q=u();l(O,N),B.append(O,k,A,q),document.body.appendChild(B)}s?(k.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function my(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function gy(){var n;const e=(n=xo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _y(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wy(){const n=He();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function by(){return!gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ey(){try{return typeof indexedDB=="object"}catch{return!1}}function Iy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ty="FirebaseError";class Wt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ty,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ay(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,c,r)}}function Ay(n,e){return n.replace(xy,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xy=/\{\$([^}]+)}/g;function ky(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ln(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Zu(s)&&Zu(o)){if(!Ln(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Zu(n){return n!==null&&typeof n=="object"}/**
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
 */function Ki(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sy(n,e){const t=new Cy(n,e);return t.subscribe.bind(t)}class Cy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ry(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ry(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ca(){}/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class Py{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new dy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ny(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dy(n){return n===Pn?void 0:n}function Ny(n){return n.instantiationMode==="EAGER"}/**
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
 */class Oy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Py(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const Vy={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Ly=se.INFO,My={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Fy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=My[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=Ly,this._logHandler=Fy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const By=(n,e)=>e.some(t=>n instanceof t);let Yu,Xu;function $y(){return Yu||(Yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uy(){return Xu||(Xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sf=new WeakMap,Xa=new WeakMap,of=new WeakMap,Ra=new WeakMap,Fc=new WeakMap;function jy(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(nn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sf.set(t,n)}).catch(()=>{}),Fc.set(e,n),e}function zy(n){if(Xa.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Xa.set(n,e)}let Qa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||of.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qy(n){Qa=n(Qa)}function Hy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pa(this),e,...t);return of.set(r,e.sort?e.sort():[e]),nn(r)}:Uy().includes(n)?function(...e){return n.apply(Pa(this),e),nn(sf.get(this))}:function(...e){return nn(n.apply(Pa(this),e))}}function Wy(n){return typeof n=="function"?Hy(n):(n instanceof IDBTransaction&&zy(n),By(n,$y())?new Proxy(n,Qa):n)}function nn(n){if(n instanceof IDBRequest)return jy(n);if(Ra.has(n))return Ra.get(n);const e=Wy(n);return e!==n&&(Ra.set(n,e),Fc.set(e,n)),e}const Pa=n=>Fc.get(n);function Gy(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Ky=["get","getKey","getAll","getAllKeys","count"],Zy=["put","add","delete","clear"],Da=new Map;function Qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Zy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ky.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),i&&l.done]))[0]};return Da.set(e,s),s}qy(n=>({...n,get:(e,t,r)=>Qu(e,t)||n.get(e,t,r),has:(e,t)=>!!Qu(e,t)||n.has(e,t)}));/**
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
 */class Yy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Xy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ja="@firebase/app",Ju="0.13.2";/**
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
 */const $t=new Mc("@firebase/app"),Qy="@firebase/app-compat",Jy="@firebase/analytics-compat",ev="@firebase/analytics",tv="@firebase/app-check-compat",nv="@firebase/app-check",rv="@firebase/auth",iv="@firebase/auth-compat",sv="@firebase/database",ov="@firebase/data-connect",av="@firebase/database-compat",cv="@firebase/functions",lv="@firebase/functions-compat",uv="@firebase/installations",dv="@firebase/installations-compat",hv="@firebase/messaging",fv="@firebase/messaging-compat",pv="@firebase/performance",mv="@firebase/performance-compat",gv="@firebase/remote-config",yv="@firebase/remote-config-compat",vv="@firebase/storage",_v="@firebase/storage-compat",wv="@firebase/firestore",bv="@firebase/ai",Ev="@firebase/firestore-compat",Iv="firebase",Tv="11.10.0";/**
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
 */const ec="[DEFAULT]",Av={[Ja]:"fire-core",[Qy]:"fire-core-compat",[ev]:"fire-analytics",[Jy]:"fire-analytics-compat",[nv]:"fire-app-check",[tv]:"fire-app-check-compat",[rv]:"fire-auth",[iv]:"fire-auth-compat",[sv]:"fire-rtdb",[ov]:"fire-data-connect",[av]:"fire-rtdb-compat",[cv]:"fire-fn",[lv]:"fire-fn-compat",[uv]:"fire-iid",[dv]:"fire-iid-compat",[hv]:"fire-fcm",[fv]:"fire-fcm-compat",[pv]:"fire-perf",[mv]:"fire-perf-compat",[gv]:"fire-rc",[yv]:"fire-rc-compat",[vv]:"fire-gcs",[_v]:"fire-gcs-compat",[wv]:"fire-fst",[Ev]:"fire-fst-compat",[bv]:"fire-vertex","fire-js":"fire-js",[Iv]:"fire-js-all"};/**
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
 */const Ys=new Map,xv=new Map,tc=new Map;function ed(n,e){try{n.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gr(n){const e=n.name;if(tc.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,n);for(const t of Ys.values())ed(t,n);for(const t of xv.values())ed(t,n);return!0}function Bc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const kv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rn=new Gi("app","Firebase",kv);/**
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
 */class Sv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
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
 */const Cr=Tv;function af(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ec,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(t||(t=ef()),!t)throw rn.create("no-options");const s=Ys.get(i);if(s){if(Ln(t,s.options)&&Ln(r,s.config))return s;throw rn.create("duplicate-app",{appName:i})}const o=new Oy(i);for(const l of tc.values())o.addComponent(l);const c=new Sv(t,r,o);return Ys.set(i,c),c}function cf(n=ec){const e=Ys.get(n);if(!e&&n===ec&&ef())return af();if(!e)throw rn.create("no-app",{appName:n});return e}function sn(n,e,t){var r;let i=(r=Av[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(c.join(" "));return}gr(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Cv="firebase-heartbeat-database",Rv=1,_i="firebase-heartbeat-store";let Na=null;function lf(){return Na||(Na=Gy(Cv,Rv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_i)}catch(t){console.warn(t)}}}}).catch(n=>{throw rn.create("idb-open",{originalErrorMessage:n.message})})),Na}async function Pv(n){try{const t=(await lf()).transaction(_i),r=await t.objectStore(_i).get(uf(n));return await t.done,r}catch(e){if(e instanceof Wt)$t.warn(e.message);else{const t=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(t.message)}}}async function td(n,e){try{const r=(await lf()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,uf(n)),await r.done}catch(t){if(t instanceof Wt)$t.warn(t.message);else{const r=rn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$t.warn(r.message)}}}function uf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Dv=1024,Nv=30;class Ov{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Nv){const o=Mv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nd(),{heartbeatsToSend:r,unsentEntries:i}=Vv(this._heartbeatsCache.heartbeats),s=Zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return $t.warn(t),""}}}function nd(){return new Date().toISOString().substring(0,10)}function Vv(n,e=Dv){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Lv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ey()?Iy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rd(n){return Zs(JSON.stringify({version:2,heartbeats:n})).length}function Mv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Fv(n){gr(new Mn("platform-logger",e=>new Yy(e),"PRIVATE")),gr(new Mn("heartbeat",e=>new Ov(e),"PRIVATE")),sn(Ja,Ju,n),sn(Ja,Ju,"esm2017"),sn("fire-js","")}Fv("");var Bv="firebase",$v="11.10.0";/**
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
 */sn(Bv,$v,"app");var id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var on,df;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(T,b,S){for(var E=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)E[Re-2]=arguments[Re];return _.prototype[b].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,w){w||(w=0);var T=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)T[b]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(b=0;16>b;++b)T[b]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],b=I.g[2];var S=I.g[3],E=_+(S^w&(b^S))+T[0]+3614090360&4294967295;_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+T[1]+3905402710&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+T[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+T[3]+3250441966&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+T[4]+4118548399&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+T[5]+1200080426&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+T[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+T[7]+4249261313&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+T[8]+1770035416&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+T[9]+2336552879&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+T[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+T[11]+2304563134&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+T[12]+1804603682&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+T[13]+4254626195&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+T[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+T[15]+1236535329&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(b^S&(w^b))+T[1]+4129170786&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+T[6]+3225465664&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+T[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+T[0]+3921069994&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+T[5]+3593408605&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+T[10]+38016083&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+T[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+T[4]+3889429448&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+T[9]+568446438&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+T[14]+3275163606&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+T[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+T[8]+1163531501&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+T[13]+2850285829&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+T[2]+4243563512&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+T[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+T[12]+2368359562&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(w^b^S)+T[5]+4294588738&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+T[8]+2272392833&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+T[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+T[14]+4259657740&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+T[1]+2763975236&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+T[4]+1272893353&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+T[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+T[10]+3200236656&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+T[13]+681279174&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+T[0]+3936430074&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+T[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+T[6]+76029189&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+T[9]+3654602809&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+T[12]+3873151461&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+T[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+T[2]+3299628645&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(b^(w|~S))+T[0]+4096336452&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+T[7]+1126891415&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+T[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+T[5]+4237533241&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+T[12]+1700485571&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+T[3]+2399980690&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+T[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+T[1]+2240044497&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+T[8]+1873313359&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+T[15]+4264355552&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+T[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+T[13]+1309151649&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+T[4]+4149444226&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+T[11]+3174756917&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+T[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,T=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=w;)i(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<_;)if(T[b++]=I.charCodeAt(S++),b==this.blockSize){i(this,T),b=0;break}}else for(;S<_;)if(T[b++]=I[S++],b==this.blockSize){i(this,T),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var T=0;32>T;T+=8)I[w++]=this.g[_]>>>T&255;return I};function s(I,_){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function o(I,_){this.h=_;for(var w=[],T=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;T&&S==_||(w[b]=S,T=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return A(u(-I));for(var _=[],w=1,T=0;I>=w;T++)_[T]=I/w|0,w*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return A(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(_,8)),T=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),E=parseInt(I.substring(b,b+S),_);8>S?(S=u(Math.pow(_,S)),T=T.j(S).add(u(E))):(T=T.j(w),T=T.add(u(E)))}return T}var p=l(0),m=l(1),v=l(16777216);n=o.prototype,n.m=function(){if(x(this))return-A(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var T=this.i(w);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(x(this))return"-"+A(this).toString(I);for(var _=u(Math.pow(I,6)),w=this,T="";;){var b=q(w,_).g;w=N(w,b.j(_));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,k(w))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function x(I){return I.h==-1}n.l=function(I){return I=N(this,I),x(I)?-1:k(I)?0:1};function A(I){for(var _=I.g.length,w=[],T=0;T<_;T++)w[T]=~I.g[T];return new o(w,~I.h).add(m)}n.abs=function(){return x(this)?A(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0,b=0;b<=_;b++){var S=T+(this.i(b)&65535)+(I.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);T=E>>>16,S&=65535,E&=65535,w[b]=E<<16|S}return new o(w,w[w.length-1]&-2147483648?-1:0)};function N(I,_){return I.add(A(_))}n.j=function(I){if(k(this)||k(I))return p;if(x(this))return x(I)?A(this).j(A(I)):A(A(this).j(I));if(x(I))return A(this.j(A(I)));if(0>this.l(v)&&0>I.l(v))return u(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],T=0;T<2*_;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<I.g.length;b++){var S=this.i(T)>>>16,E=this.i(T)&65535,Re=I.i(b)>>>16,Qe=I.i(b)&65535;w[2*T+2*b]+=E*Qe,O(w,2*T+2*b),w[2*T+2*b+1]+=S*Qe,O(w,2*T+2*b+1),w[2*T+2*b+1]+=E*Re,O(w,2*T+2*b+1),w[2*T+2*b+2]+=S*Re,O(w,2*T+2*b+2)}for(T=0;T<_;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=_;T<2*_;T++)w[T]=0;return new o(w,0)};function O(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function B(I,_){this.g=I,this.h=_}function q(I,_){if(k(_))throw Error("division by zero");if(k(I))return new B(p,p);if(x(I))return _=q(A(I),_),new B(A(_.g),A(_.h));if(x(_))return _=q(I,A(_)),new B(A(_.g),_.h);if(30<I.g.length){if(x(I)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=_;0>=T.l(I);)w=fe(w),T=fe(T);var b=ie(w,1),S=ie(T,1);for(T=ie(T,2),w=ie(w,2);!k(T);){var E=S.add(T);0>=E.l(I)&&(b=b.add(w),S=E),T=ie(T,1),w=ie(w,1)}return _=N(I,b.j(_)),new B(b,_)}for(b=p;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=u(w),E=S.j(_);x(E)||0<E.l(I);)w-=T,S=u(w),E=S.j(_);k(S)&&(S=m),b=b.add(S),I=N(I,E)}return new B(b,I)}n.A=function(I){return q(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)&I.i(T);return new o(w,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)|I.i(T);return new o(w,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)^I.i(T);return new o(w,this.h^I.h)};function fe(I){for(var _=I.g.length+1,w=[],T=0;T<_;T++)w[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(w,I.h)}function ie(I,_){var w=_>>5;_%=32;for(var T=I.g.length-w,b=[],S=0;S<T;S++)b[S]=0<_?I.i(S+w)>>>_|I.i(S+w+1)<<32-_:I.i(S+w);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,df=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,on=o}).apply(typeof id<"u"?id:typeof self<"u"?self:typeof window<"u"?window:{});var ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hf,ri,ff,Os,nc,pf,mf,gf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,h){return a==Array.prototype||a==Object.prototype||(a[d]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ks=="object"&&ks];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(a,d){if(d)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in h))break e;h=h[C]}a=a[a.length-1],g=h[a],d=d(g),d!=g&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var h=0,g=!1,C={next:function(){if(!g&&h<a.length){var R=h++;return{value:d(R,a[R]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,h){return a.call.apply(a.bind,arguments)}function p(a,d,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(d,C)}}return function(){return a.apply(d,arguments)}}function m(a,d,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function v(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,d){function h(){}h.prototype=d.prototype,a.aa=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,C,R){for(var L=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)L[pe-2]=arguments[pe];return d.prototype[C].apply(g,L)}}function x(a){const d=a.length;if(0<d){const h=Array(d);for(let g=0;g<d;g++)h[g]=a[g];return h}return[]}function A(a,d){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(l(g)){const C=a.length||0,R=g.length||0;a.length=C+R;for(let L=0;L<R;L++)a[C+L]=g[L]}else a.push(g)}}class N{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var fe=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ie(a,d,h){for(const g in a)d.call(h,a[g],g,a)}function I(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function _(a){const d={};for(const h in a)d[h]=a[h];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,d){let h,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(h in g)a[h]=g[h];for(let R=0;R<w.length;R++)h=w[R],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function b(a){var d=1;a=a.split(":");const h=[];for(;0<d&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function S(a){c.setTimeout(()=>{throw a},0)}function E(){var a=$r;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Re{constructor(){this.h=this.g=null}add(d,h){const g=Qe.get();g.set(d,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Qe=new N(()=>new ct,a=>a.reset());class ct{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let In,Wn=!1,$r=new Re,Tn=()=>{const a=c.Promise.resolve(void 0);In=()=>{a.then(Gn)}};var Gn=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(h){S(h)}var d=Qe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Wn=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Ur=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};c.addEventListener("test",h,d),c.removeEventListener("test",h,d)}catch{}return a})();function Kn(a,d){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(fe){e:{try{q(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ls[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Kn.aa.h.call(this)}}k(Kn,xe);var ls={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var An="closure_listenable_"+(1e6*Math.random()|0),Kl=0;function ca(a,d,h,g,C){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!g,this.ha=C,this.key=++Kl,this.da=this.fa=!1}function xn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pt(a){this.src=a,this.g={},this.h=0}Pt.prototype.add=function(a,d,h,g,C){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var L=_t(a,d,g,C);return-1<L?(d=a[L],h||(d.fa=!1)):(d=new ca(d,this.src,R,!!g,C),d.fa=h,a.push(d)),d};function Dt(a,d){var h=d.type;if(h in a.g){var g=a.g[h],C=Array.prototype.indexOf.call(g,d,void 0),R;(R=0<=C)&&Array.prototype.splice.call(g,C,1),R&&(xn(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function _t(a,d,h,g){for(var C=0;C<a.length;++C){var R=a[C];if(!R.da&&R.listener==d&&R.capture==!!h&&R.ha==g)return C}return-1}var Zn="closure_lm_"+(1e6*Math.random()|0),Yn={};function us(a,d,h,g,C){if(Array.isArray(d)){for(var R=0;R<d.length;R++)us(a,d[R],h,g,C);return null}return h=Xl(h),a&&a[An]?a.K(d,h,u(g)?!!g.capture:!1,C):la(a,d,h,!1,g,C)}function la(a,d,h,g,C,R){if(!d)throw Error("Invalid event type");var L=u(C)?!!C.capture:!!C,pe=da(a);if(pe||(a[Zn]=pe=new Pt(a)),h=pe.add(d,h,g,L,R),h.proxy)return h;if(g=Sg(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)Ur||(C=L),C===void 0&&(C=!1),a.addEventListener(d.toString(),g,C);else if(a.attachEvent)a.attachEvent(Yl(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Sg(){function a(h){return d.call(a.src,a.listener,h)}const d=Cg;return a}function Zl(a,d,h,g,C){if(Array.isArray(d))for(var R=0;R<d.length;R++)Zl(a,d[R],h,g,C);else g=u(g)?!!g.capture:!!g,h=Xl(h),a&&a[An]?(a=a.i,d=String(d).toString(),d in a.g&&(R=a.g[d],h=_t(R,h,g,C),-1<h&&(xn(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete a.g[d],a.h--)))):a&&(a=da(a))&&(d=a.g[d.toString()],a=-1,d&&(a=_t(d,h,g,C)),(h=-1<a?d[a]:null)&&ua(h))}function ua(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[An])Dt(d.i,a);else{var h=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(h,g,a.capture):d.detachEvent?d.detachEvent(Yl(h),g):d.addListener&&d.removeListener&&d.removeListener(g),(h=da(d))?(Dt(h,a),h.h==0&&(h.src=null,d[Zn]=null)):xn(a)}}}function Yl(a){return a in Yn?Yn[a]:Yn[a]="on"+a}function Cg(a,d){if(a.da)a=!0;else{d=new Kn(d,this);var h=a.listener,g=a.ha||a.src;a.fa&&ua(a),a=h.call(g,d)}return a}function da(a){return a=a[Zn],a instanceof Pt?a:null}var ha="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(a){return typeof a=="function"?a:(a[ha]||(a[ha]=function(d){return a.handleEvent(d)}),a[ha])}function Fe(){dt.call(this),this.i=new Pt(this),this.M=this,this.F=null}k(Fe,dt),Fe.prototype[An]=!0,Fe.prototype.removeEventListener=function(a,d,h,g){Zl(this,a,d,h,g)};function Ge(a,d){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new xe(d,a);else if(d instanceof xe)d.target=d.target||a;else{var C=d;d=new xe(g,a),T(d,C)}if(C=!0,h)for(var R=h.length-1;0<=R;R--){var L=d.g=h[R];C=ds(L,g,!0,d)&&C}if(L=d.g=a,C=ds(L,g,!0,d)&&C,C=ds(L,g,!1,d)&&C,h)for(R=0;R<h.length;R++)L=d.g=h[R],C=ds(L,g,!1,d)&&C}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var h=a.g[d],g=0;g<h.length;g++)xn(h[g]);delete a.g[d],a.h--}}this.F=null},Fe.prototype.K=function(a,d,h,g){return this.i.add(String(a),d,!1,h,g)},Fe.prototype.L=function(a,d,h,g){return this.i.add(String(a),d,!0,h,g)};function ds(a,d,h,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,R=0;R<d.length;++R){var L=d[R];if(L&&!L.da&&L.capture==h){var pe=L.listener,Pe=L.ha||L.src;L.fa&&Dt(a.i,L),C=pe.call(Pe,g)!==!1&&C}}return C&&!g.defaultPrevented}function Ql(a,d,h){if(typeof a=="function")h&&(a=m(a,h));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Jl(a){a.g=Ql(()=>{a.g=null,a.i&&(a.i=!1,Jl(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Rg extends dt{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Jl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(a){dt.call(this),this.h=a,this.g={}}k(jr,dt);var eu=[];function tu(a){ie(a.g,function(d,h){this.g.hasOwnProperty(h)&&ua(d)},a),a.g={}}jr.prototype.N=function(){jr.aa.N.call(this),tu(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fa=c.JSON.stringify,Pg=c.JSON.parse,Dg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function pa(){}pa.prototype.h=null;function nu(a){return a.h||(a.h=a.i())}function ru(){}var zr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ma(){xe.call(this,"d")}k(ma,xe);function ga(){xe.call(this,"c")}k(ga,xe);var kn={},iu=null;function hs(){return iu=iu||new Fe}kn.La="serverreachability";function su(a){xe.call(this,kn.La,a)}k(su,xe);function qr(a){const d=hs();Ge(d,new su(d))}kn.STAT_EVENT="statevent";function ou(a,d){xe.call(this,kn.STAT_EVENT,a),this.stat=d}k(ou,xe);function Ke(a){const d=hs();Ge(d,new ou(d,a))}kn.Ma="timingevent";function au(a,d){xe.call(this,kn.Ma,a),this.size=d}k(au,xe);function Hr(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function Wr(){this.g=!0}Wr.prototype.xa=function(){this.g=!1};function Ng(a,d,h,g,C,R){a.info(function(){if(a.g)if(R)for(var L="",pe=R.split("&"),Pe=0;Pe<pe.length;Pe++){var le=pe[Pe].split("=");if(1<le.length){var Be=le[0];le=le[1];var $e=Be.split("_");L=2<=$e.length&&$e[1]=="type"?L+(Be+"="+le+"&"):L+(Be+"=redacted&")}}else L=null;else L=R;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+d+`
`+h+`
`+L})}function Og(a,d,h,g,C,R,L){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+d+`
`+h+`
`+R+" "+L})}function Xn(a,d,h,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Lg(a,h)+(g?" "+g:"")})}function Vg(a,d){a.info(function(){return"TIMEOUT: "+d})}Wr.prototype.info=function(){};function Lg(a,d){if(!a.g)return d;if(!d)return null;try{var h=JSON.parse(d);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var R=C[0];if(R!="noop"&&R!="stop"&&R!="close")for(var L=1;L<C.length;L++)C[L]=""}}}}return fa(h)}catch{return d}}var fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ya;function ps(){}k(ps,pa),ps.prototype.g=function(){return new XMLHttpRequest},ps.prototype.i=function(){return{}},ya=new ps;function Gt(a,d,h,g){this.j=a,this.i=d,this.l=h,this.R=g||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lu}function lu(){this.i=null,this.g="",this.h=!1}var uu={},va={};function _a(a,d,h){a.L=1,a.v=vs(Nt(d)),a.m=h,a.P=!0,du(a,null)}function du(a,d){a.F=Date.now(),ms(a),a.A=Nt(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Au(h.i,"t",g),a.C=0,h=a.j.J,a.h=new lu,a.g=zu(a.j,h?d:null,!a.m),0<a.O&&(a.M=new Rg(m(a.Y,a,a.g),a.O)),d=a.U,h=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(eu[0]=C.toString()),C=eu);for(var R=0;R<C.length;R++){var L=us(h,C[R],g||d.handleEvent,!1,d.h||d);if(!L)break;d.g[L.key]=L}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),qr(),Ng(a.i,a.u,a.A,a.l,a.R,a.m)}Gt.prototype.ca=function(a){a=a.target;const d=this.M;d&&Ot(a)==3?d.j():this.Y(a)},Gt.prototype.Y=function(a){try{if(a==this.g)e:{const $e=Ot(this.g);var d=this.g.Ba();const er=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||Du(this.g)))){this.J||$e!=4||d==7||(d==8||0>=er?qr(3):qr(2)),wa(this);var h=this.g.Z();this.X=h;t:if(hu(this)){var g=Du(this.g);a="";var C=g.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sn(this),Gr(this);var L="";break t}this.h.i=new c.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(R&&d==C-1)});g.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,Og(this.i,this.u,this.A,this.l,this.R,$e,h),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Pe=this.g;if((pe=Pe.g?Pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(pe)){var le=pe;break t}}le=null}if(h=le)Xn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,h);else{this.o=!1,this.s=3,Ke(12),Sn(this),Gr(this);break e}}if(this.P){h=!0;let ht;for(;!this.J&&this.C<L.length;)if(ht=Mg(this,L),ht==va){$e==4&&(this.s=4,Ke(14),h=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==uu){this.s=4,Ke(15),Xn(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else Xn(this.i,this.l,ht,null),ba(this,ht);if(hu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||L.length!=0||this.h.h||(this.s=1,Ke(16),h=!1),this.o=this.o&&h,!h)Xn(this.i,this.l,L,"[Invalid Chunked Response]"),Sn(this),Gr(this);else if(0<L.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),ka(Be),Be.M=!0,Ke(11))}}else Xn(this.i,this.l,L,null),ba(this,L);$e==4&&Sn(this),this.o&&!this.J&&($e==4?Bu(this.j,this):(this.o=!1,ms(this)))}else ey(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),Sn(this),Gr(this)}}}catch{}finally{}};function hu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Mg(a,d){var h=a.C,g=d.indexOf(`
`,h);return g==-1?va:(h=Number(d.substring(h,g)),isNaN(h)?uu:(g+=1,g+h>d.length?va:(d=d.slice(g,g+h),a.C=g+h,d)))}Gt.prototype.cancel=function(){this.J=!0,Sn(this)};function ms(a){a.S=Date.now()+a.I,fu(a,a.I)}function fu(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hr(m(a.ba,a),d)}function wa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Gt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Vg(this.i,this.A),this.L!=2&&(qr(),Ke(17)),Sn(this),this.s=2,Gr(this)):fu(this,this.S-a)};function Gr(a){a.j.G==0||a.J||Bu(a.j,a)}function Sn(a){wa(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,tu(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ba(a,d){try{var h=a.j;if(h.G!=0&&(h.g==a||Ea(h.h,a))){if(!a.K&&Ea(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Ts(h),Es(h);else break e;xa(h),Ke(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=Hr(m(h.Za,h),6e3));if(1>=gu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Rn(h,11)}else if((a.K||h.g==a)&&Ts(h),!O(d))for(C=h.Da.g.parse(d),d=0;d<C.length;d++){let le=C[d];if(h.T=le[0],le=le[1],h.G==2)if(le[0]=="c"){h.K=le[1],h.ia=le[2];const Be=le[3];Be!=null&&(h.la=Be,h.j.info("VER="+h.la));const $e=le[4];$e!=null&&(h.Aa=$e,h.j.info("SVER="+h.Aa));const er=le[5];er!=null&&typeof er=="number"&&0<er&&(g=1.5*er,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const ht=a.g;if(ht){const xs=ht.g?ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xs){var R=g.h;R.g||xs.indexOf("spdy")==-1&&xs.indexOf("quic")==-1&&xs.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ia(R,R.h),R.h=null))}if(g.D){const Sa=ht.g?ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Sa&&(g.ya=Sa,ge(g.I,g.D,Sa))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var L=a;if(g.qa=ju(g,g.J?g.ia:null,g.W),L.K){yu(g.h,L);var pe=L,Pe=g.L;Pe&&(pe.I=Pe),pe.B&&(wa(pe),ms(pe)),g.g=L}else Mu(g);0<h.i.length&&Is(h)}else le[0]!="stop"&&le[0]!="close"||Rn(h,7);else h.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Rn(h,7):Aa(h):le[0]!="noop"&&h.l&&h.l.ta(le),h.v=0)}}qr(4)}catch{}}var Fg=class{constructor(a,d){this.g=a,this.map=d}};function pu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gu(a){return a.h?1:a.g?a.g.size:0}function Ea(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Ia(a,d){a.g?a.g.add(d):a.h=d}function yu(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}pu.prototype.cancel=function(){if(this.i=vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.D);return d}return x(a.i)}function Bg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],h=a.length,g=0;g<h;g++)d.push(a[g]);return d}d=[],h=0;for(g in a)d[h++]=a[g];return d}function $g(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var h=0;h<a;h++)d.push(h);return d}d=[],h=0;for(const g in a)d[h++]=g;return d}}}function _u(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var h=$g(a),g=Bg(a),C=g.length,R=0;R<C;R++)d.call(void 0,g[R],h&&h[R],a)}var wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ug(a,d){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),C=null;if(0<=g){var R=a[h].substring(0,g);C=a[h].substring(g+1)}else R=a[h];d(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Cn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cn){this.h=a.h,gs(this,a.j),this.o=a.o,this.g=a.g,ys(this,a.s),this.l=a.l;var d=a.i,h=new Yr;h.i=d.i,d.g&&(h.g=new Map(d.g),h.h=d.h),bu(this,h),this.m=a.m}else a&&(d=String(a).match(wu))?(this.h=!1,gs(this,d[1]||"",!0),this.o=Kr(d[2]||""),this.g=Kr(d[3]||"",!0),ys(this,d[4]),this.l=Kr(d[5]||"",!0),bu(this,d[6]||"",!0),this.m=Kr(d[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Cn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Zr(d,Eu,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Zr(d,Eu,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Zr(h,h.charAt(0)=="/"?qg:zg,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Zr(h,Wg)),a.join("")};function Nt(a){return new Cn(a)}function gs(a,d,h){a.j=h?Kr(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ys(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function bu(a,d,h){d instanceof Yr?(a.i=d,Gg(a.i,a.h)):(h||(d=Zr(d,Hg)),a.i=new Yr(d,a.h))}function ge(a,d,h){a.i.set(d,h)}function vs(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Kr(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zr(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,jg),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Eu=/[#\/\?@]/g,zg=/[#\?:]/g,qg=/[#\?]/g,Hg=/[#\?@]/g,Wg=/#/g;function Yr(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Kt(a){a.g||(a.g=new Map,a.h=0,a.i&&Ug(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}n=Yr.prototype,n.add=function(a,d){Kt(this),this.i=null,a=Qn(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function Iu(a,d){Kt(a),d=Qn(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Tu(a,d){return Kt(a),d=Qn(a,d),a.g.has(d)}n.forEach=function(a,d){Kt(this),this.g.forEach(function(h,g){h.forEach(function(C){a.call(d,C,g,this)},this)},this)},n.na=function(){Kt(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),h=[];for(let g=0;g<d.length;g++){const C=a[g];for(let R=0;R<C.length;R++)h.push(d[g])}return h},n.V=function(a){Kt(this);let d=[];if(typeof a=="string")Tu(this,a)&&(d=d.concat(this.g.get(Qn(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)d=d.concat(a[h])}return d},n.set=function(a,d){return Kt(this),this.i=null,a=Qn(this,a),Tu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Au(a,d,h){Iu(a,d),0<h.length&&(a.i=null,a.g.set(Qn(a,d),x(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var h=0;h<d.length;h++){var g=d[h];const R=encodeURIComponent(String(g)),L=this.V(g);for(g=0;g<L.length;g++){var C=R;L[g]!==""&&(C+="="+encodeURIComponent(String(L[g]))),a.push(C)}}return this.i=a.join("&")};function Qn(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Gg(a,d){d&&!a.j&&(Kt(a),a.i=null,a.g.forEach(function(h,g){var C=g.toLowerCase();g!=C&&(Iu(this,g),Au(this,C,h))},a)),a.j=d}function Kg(a,d){const h=new Wr;if(c.Image){const g=new Image;g.onload=v(Zt,h,"TestLoadImage: loaded",!0,d,g),g.onerror=v(Zt,h,"TestLoadImage: error",!1,d,g),g.onabort=v(Zt,h,"TestLoadImage: abort",!1,d,g),g.ontimeout=v(Zt,h,"TestLoadImage: timeout",!1,d,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function Zg(a,d){const h=new Wr,g=new AbortController,C=setTimeout(()=>{g.abort(),Zt(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(R=>{clearTimeout(C),R.ok?Zt(h,"TestPingServer: ok",!0,d):Zt(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),Zt(h,"TestPingServer: error",!1,d)})}function Zt(a,d,h,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(h)}catch{}}function Yg(){this.g=new Dg}function Xg(a,d,h){const g=h||"";try{_u(a,function(C,R){let L=C;u(C)&&(L=fa(C)),d.push(g+R+"="+encodeURIComponent(L))})}catch(C){throw d.push(g+"type="+encodeURIComponent("_badmap")),C}}function _s(a){this.l=a.Ub||null,this.j=a.eb||!1}k(_s,pa),_s.prototype.g=function(){return new ws(this.l,this.j)},_s.prototype.i=(function(a){return function(){return a}})({});function ws(a,d){Fe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ws,Fe),n=ws.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Qr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Xr(this):Qr(this),this.readyState==3&&xu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Xr(this))},n.Qa=function(a){this.g&&(this.response=a,Xr(this))},n.ga=function(){this.g&&Xr(this)};function Xr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qr(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function Qr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ku(a){let d="";return ie(a,function(h,g){d+=g,d+=":",d+=h,d+=`\r
`}),d}function Ta(a,d,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=ku(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ge(a,d,h))}function we(a){Fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(we,Fe);var Qg=/^https?$/i,Jg=["POST","PUT"];n=we.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ya.g(),this.v=this.o?nu(this.o):nu(ya),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(R){Su(this,R);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)h.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())h.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Jg,d,void 0))||g||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,L]of h)this.g.setRequestHeader(R,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pu(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){Su(this,R)}};function Su(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Cu(a),bs(a)}function Cu(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ge(this,"complete"),Ge(this,"abort"),bs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bs(this,!0)),we.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ru(this):this.bb())},n.bb=function(){Ru(this)};function Ru(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ot(a)!=4||a.Z()!=2)){if(a.u&&Ot(a)==4)Ql(a.Ea,0,a);else if(Ge(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var g;if(g=L===0){var C=String(a.D).match(wu)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Qg.test(C?C.toLowerCase():"")}h=g}if(h)Ge(a,"complete"),Ge(a,"success");else{a.m=6;try{var R=2<Ot(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",Cu(a)}}finally{bs(a)}}}}function bs(a,d){if(a.g){Pu(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ge(a,"ready");try{h.onreadystatechange=g}catch{}}}function Pu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Pg(d)}};function Du(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ey(a){const d={};a=(a.g&&2<=Ot(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(O(a[g]))continue;var h=b(a[g]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=d[C]||[];d[C]=R,R.push(h)}I(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function Nu(a){this.Aa=0,this.i=[],this.j=new Wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,a),this.cb=Jr("retryDelaySeedMs",1e4,a),this.Wa=Jr("forwardChannelMaxRetries",2,a),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new pu(a&&a.concurrentRequestLimit),this.Da=new Yg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Nu.prototype,n.la=8,n.G=1,n.connect=function(a,d,h,g){Ke(0),this.W=a,this.H=d||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=ju(this,null,this.W),Is(this)};function Aa(a){if(Ou(a),a.G==3){var d=a.U++,h=Nt(a.I);if(ge(h,"SID",a.K),ge(h,"RID",d),ge(h,"TYPE","terminate"),ei(a,h),d=new Gt(a,a.j,d),d.L=2,d.v=vs(Nt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=d.v,h=!0),h||(d.g=zu(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ms(d)}Uu(a)}function Es(a){a.g&&(ka(a),a.g.cancel(),a.g=null)}function Ou(a){Es(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ts(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Is(a){if(!mu(a.h)&&!a.s){a.s=!0;var d=a.Ga;In||Tn(),Wn||(In(),Wn=!0),$r.add(d,a),a.B=0}}function ty(a,d){return gu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hr(m(a.Ga,a,d),$u(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Gt(this,this.j,a);let R=this.o;if(this.S&&(R?(R=_(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(C.H=R,R=null),this.P)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=Lu(this,C,d),h=Nt(this.I),ge(h,"RID",a),ge(h,"CVER",22),this.D&&ge(h,"X-HTTP-Session-Id",this.D),ei(this,h),R&&(this.O?d="headers="+encodeURIComponent(String(ku(R)))+"&"+d:this.m&&Ta(h,this.m,R)),Ia(this.h,C),this.Ua&&ge(h,"TYPE","init"),this.P?(ge(h,"$req",d),ge(h,"SID","null"),C.T=!0,_a(C,h,null)):_a(C,h,d),this.G=2}}else this.G==3&&(a?Vu(this,a):this.i.length==0||mu(this.h)||Vu(this))};function Vu(a,d){var h;d?h=d.l:h=a.U++;const g=Nt(a.I);ge(g,"SID",a.K),ge(g,"RID",h),ge(g,"AID",a.T),ei(a,g),a.m&&a.o&&Ta(g,a.m,a.o),h=new Gt(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Lu(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ia(a.h,h),_a(h,g,d)}function ei(a,d){a.H&&ie(a.H,function(h,g){ge(d,g,h)}),a.l&&_u({},function(h,g){ge(d,g,h)})}function Lu(a,d,h){h=Math.min(a.i.length,h);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let R=-1;for(;;){const L=["count="+h];R==-1?0<h?(R=C[0].g,L.push("ofs="+R)):R=0:L.push("ofs="+R);let pe=!0;for(let Pe=0;Pe<h;Pe++){let le=C[Pe].g;const Be=C[Pe].map;if(le-=R,0>le)R=Math.max(0,C[Pe].g-100),pe=!1;else try{Xg(Be,L,"req"+le+"_")}catch{g&&g(Be)}}if(pe){g=L.join("&");break e}}}return a=a.i.splice(0,h),d.D=a,g}function Mu(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;In||Tn(),Wn||(In(),Wn=!0),$r.add(d,a),a.v=0}}function xa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hr(m(a.Fa,a),$u(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hr(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Es(this),Fu(this))};function ka(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Fu(a){a.g=new Gt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Nt(a.qa);ge(d,"RID","rpc"),ge(d,"SID",a.K),ge(d,"AID",a.T),ge(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(d,"TO",a.ja),ge(d,"TYPE","xmlhttp"),ei(a,d),a.m&&a.o&&Ta(d,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=vs(Nt(d)),h.m=null,h.P=!0,du(h,a)}n.Za=function(){this.C!=null&&(this.C=null,Es(this),xa(this),Ke(19))};function Ts(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Bu(a,d){var h=null;if(a.g==d){Ts(a),ka(a),a.g=null;var g=2}else if(Ea(a.h,d))h=d.D,yu(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){h=d.m?d.m.length:0,d=Date.now()-d.F;var C=a.B;g=hs(),Ge(g,new au(g,h)),Is(a)}else Mu(a);else if(C=d.s,C==3||C==0&&0<d.X||!(g==1&&ty(a,d)||g==2&&xa(a)))switch(h&&0<h.length&&(d=a.h,d.i=d.i.concat(h)),C){case 1:Rn(a,5);break;case 4:Rn(a,10);break;case 3:Rn(a,6);break;default:Rn(a,2)}}}function $u(a,d){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*d}function Rn(a,d){if(a.j.info("Error code "+d),d==2){var h=m(a.fb,a),g=a.Xa;const C=!g;g=new Cn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||gs(g,"https"),vs(g),C?Kg(g.toString(),h):Zg(g.toString(),h)}else Ke(2);a.G=0,a.l&&a.l.sa(d),Uu(a),Ou(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Uu(a){if(a.G=0,a.ka=[],a.l){const d=vu(a.h);(d.length!=0||a.i.length!=0)&&(A(a.ka,d),A(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function ju(a,d,h){var g=h instanceof Cn?Nt(h):new Cn(h);if(g.g!="")d&&(g.g=d+"."+g.g),ys(g,g.s);else{var C=c.location;g=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var R=new Cn(null);g&&gs(R,g),d&&(R.g=d),C&&ys(R,C),h&&(R.l=h),g=R}return h=a.D,d=a.ya,h&&d&&ge(g,h,d),ge(g,"VER",a.la),ei(a,g),g}function zu(a,d,h){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new we(new _s({eb:h})):new we(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qu(){}n=qu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function As(){}As.prototype.g=function(a,d){return new it(a,d)};function it(a,d){Fe.call(this),this.g=new Nu(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!O(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Jn(this)}k(it,Fe),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){Aa(this.g)},it.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=fa(a),a=h);d.i.push(new Fg(d.Ya++,a)),d.G==3&&Is(d)},it.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,it.aa.N.call(this)};function Hu(a){ma.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}k(Hu,ma);function Wu(){ga.call(this),this.status=1}k(Wu,ga);function Jn(a){this.g=a}k(Jn,qu),Jn.prototype.ua=function(){Ge(this.g,"a")},Jn.prototype.ta=function(a){Ge(this.g,new Hu(a))},Jn.prototype.sa=function(a){Ge(this.g,new Wu)},Jn.prototype.ra=function(){Ge(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,gf=function(){return new As},mf=function(){return hs()},pf=kn,nc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fs.NO_ERROR=0,fs.TIMEOUT=8,fs.HTTP_ERROR=6,Os=fs,cu.COMPLETE="complete",ff=cu,ru.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,ri=ru,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,hf=we}).apply(typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{});const sd="@firebase/firestore",od="4.8.0";/**
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
 */const Fn=new Mc("@firebase/firestore");function rr(){return Fn.logLevel}function U(n,...e){if(Fn.logLevel<=se.DEBUG){const t=e.map($c);Fn.debug(`Firestore (${Rr}): ${n}`,...t)}}function Ut(n,...e){if(Fn.logLevel<=se.ERROR){const t=e.map($c);Fn.error(`Firestore (${Rr}): ${n}`,...t)}}function ln(n,...e){if(Fn.logLevel<=se.WARN){const t=e.map($c);Fn.warn(`Firestore (${Rr}): ${n}`,...t)}}function $c(n){if(typeof n=="string")return n;try{/**
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
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yf(n,r,t)}function yf(n,e,t){let r=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ut(r),new Error(r)}function de(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||yf(e,i,r)}function J(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class vf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(je.UNAUTHENTICATED)))}shutdown(){}}class jv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zv{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bt,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const l=s;e.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},c=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new vf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new je(e)}}class qv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Hv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new qv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(je.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ad{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ad(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ad(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Gv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function _f(){return new TextEncoder}/**
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
 */class Uc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Gv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function rc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return re(r,i);{const s=_f(),o=Kv(s.encode(cd(n,t)),s.encode(cd(e,t)));return o!==0?o:re(r,i)}}t+=r>65535?2:1}return re(n.length,e.length)}function cd(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Kv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return re(n[t],e[t]);return re(n.length,e.length)}function yr(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const ld="__name__";class wt{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=wt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return re(e.length,t.length)}static compareSegments(e,t){const r=wt.isNumericId(e),i=wt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?wt.extractNumericId(e).compare(wt.extractNumericId(t)):rc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return on.fromString(e.substring(4,e.length-2))}}class me extends wt{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new me(t)}static emptyPath(){return new me([])}}const Zv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends wt{construct(e,t,r){return new Le(e,t,r)}static isValidIdentifier(e){return Zv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ld}static keyField(){return new Le([ld])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new F(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new F(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(t)}static emptyPath(){return new Le([])}}/**
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
 */function wf(n,e,t){if(!t)throw new F(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Yv(n,e,t,r){if(e===!0&&r===!0)throw new F(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ud(n){if(!H.isDocumentKey(n))throw new F(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function dd(n){if(H.isDocumentKey(n))throw new F(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ko(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ko(n);throw new F(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zi(n,e){if(!bf(n))throw new F(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new F(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const hd=-62135596800,fd=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*fd);return new ye(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hd)throw new F(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fd}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zi(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Ae("string",ye._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
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
 */const wi=-1;function Xv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new un(i,H.empty(),e)}function Qv(n){return new un(n.readTime,n.key,wi)}class un{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new un(Q.min(),H.empty(),wi)}static max(){return new un(Q.max(),H.empty(),wi)}}function Jv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
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
 */const e_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class t_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Pr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==e_)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let i=0,s=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++s,o&&s===i&&t()}),(l=>r(l)))})),o=!0,s===i&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((i=>i?D.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next((f=>{o[u]=f,++c,c===s&&r(o)}),(f=>i(f)))}}))}static doWhile(e,t){return new D(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function n_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class So{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}So.ue=-1;/**
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
 */const jc=-1;function Co(n){return n==null}function Xs(n){return n===0&&1/n==-1/0}function r_(n){return typeof n=="number"&&Number.isInteger(n)&&!Xs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ef="";function i_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=pd(e)),e=s_(n.get(t),e);return pd(e)}function s_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Ef:t+="";break;default:t+=s}}return t}function pd(n){return n+Ef+""}/**
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
 */function md(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _n(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function If(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class _e{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ss(this.root,e,this.comparator,!0)}}class Ss{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gd(this.data.getIterator())}getIteratorFrom(e){return new gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ot{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new ot([])}unionWith(e){let t=new ke(Le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Tf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tf("Invalid base64 string: "+s):s}})(e);return new Me(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const o_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dn(n){if(de(!!n,39018),typeof n=="string"){let e=0;const t=o_.exec(n);if(de(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hn(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
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
 */const Af="server_timestamp",xf="__type__",kf="__previous_value__",Sf="__local_write_time__";function zc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[xf])===null||t===void 0?void 0:t.stringValue)===Af}function Ro(n){const e=n.mapValue.fields[kf];return zc(e)?Ro(e):e}function bi(n){const e=dn(n.mapValue.fields[Sf].timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */class a_{constructor(e,t,r,i,s,o,c,l,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Qs="(default)";class Ei{constructor(e,t){this.projectId=e,this.database=t||Qs}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database===Qs}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cf="__type__",c_="__max__",Cs={mapValue:{}},Rf="__vector__",Js="value";function fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zc(n)?4:u_(n)?9007199254740991:l_(n)?10:11:K(28295,{value:n})}function St(n,e){if(n===e)return!0;const t=fn(n);if(t!==fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bi(n).isEqual(bi(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=dn(i.timestampValue),c=dn(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return hn(i.bytesValue).isEqual(hn(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ee(i.doubleValue),c=Ee(s.doubleValue);return o===c?Xs(o)===Xs(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return yr(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(md(o)!==md(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!St(o[l],c[l])))return!1;return!0})(n,e);default:return K(52216,{left:n})}}function Ii(n,e){return(n.values||[]).find((t=>St(t,e)))!==void 0}function vr(n,e){if(n===e)return 0;const t=fn(n),r=fn(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return(function(s,o){const c=Ee(s.integerValue||s.doubleValue),l=Ee(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return yd(n.timestampValue,e.timestampValue);case 4:return yd(bi(n),bi(e));case 5:return rc(n.stringValue,e.stringValue);case 6:return(function(s,o){const c=hn(s),l=hn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(s,o){const c=s.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=re(c[u],l[u]);if(f!==0)return f}return re(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,o){const c=re(Ee(s.latitude),Ee(o.latitude));return c!==0?c:re(Ee(s.longitude),Ee(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return vd(n.arrayValue,e.arrayValue);case 10:return(function(s,o){var c,l,u,f;const p=s.fields||{},m=o.fields||{},v=(c=p[Js])===null||c===void 0?void 0:c.arrayValue,k=(l=m[Js])===null||l===void 0?void 0:l.arrayValue,x=re(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:vd(v,k)})(n.mapValue,e.mapValue);case 11:return(function(s,o){if(s===Cs.mapValue&&o===Cs.mapValue)return 0;if(s===Cs.mapValue)return 1;if(o===Cs.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=rc(l[p],f[p]);if(m!==0)return m;const v=vr(c[l[p]],u[f[p]]);if(v!==0)return v}return re(l.length,f.length)})(n.mapValue,e.mapValue);default:throw K(23264,{le:t})}}function yd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=dn(n),r=dn(e),i=re(t.seconds,r.seconds);return i!==0?i:re(t.nanos,r.nanos)}function vd(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=vr(t[i],r[i]);if(s)return s}return re(t.length,r.length)}function _r(n){return ic(n)}function ic(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=dn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return hn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return H.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ic(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ic(t.fields[o])}`;return i+"}"})(n.mapValue):K(61005,{value:n})}function Vs(n){switch(fn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ro(n);return e?16+Vs(e):16;case 5:return 2*n.stringValue.length;case 6:return hn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+Vs(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return _n(r.fields,((s,o)=>{i+=s.length+Vs(o)})),i})(n.mapValue);default:throw K(13486,{value:n})}}function _d(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sc(n){return!!n&&"integerValue"in n}function qc(n){return!!n&&"arrayValue"in n}function wd(n){return!!n&&"nullValue"in n}function bd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ls(n){return!!n&&"mapValue"in n}function l_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cf])===null||t===void 0?void 0:t.stringValue)===Rf}function fi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _n(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=fi(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function u_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===c_}/**
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
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ls(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(t)}setAll(e){let t=Le.emptyPath(),r={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=fi(o):i.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ls(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ls(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){_n(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new tt(fi(this.value))}}function Pf(n){const e=[];return _n(n.fields,((t,r)=>{const i=new Le([t]);if(Ls(r)){const s=Pf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new ot(e)}/**
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
 */class ze{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ze(e,0,Q.min(),Q.min(),Q.min(),tt.empty(),0)}static newFoundDocument(e,t,r,i){return new ze(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new ze(e,2,t,Q.min(),Q.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new ze(e,3,t,Q.min(),Q.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eo{constructor(e,t){this.position=e,this.inclusive=t}}function Ed(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),t.key):r=vr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Id(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ti{constructor(e,t="asc"){this.field=e,this.dir=t}}function d_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Df{}class Te extends Df{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new f_(e,t,r):t==="array-contains"?new g_(e,r):t==="in"?new y_(e,r):t==="not-in"?new v_(e,r):t==="array-contains-any"?new __(e,r):new Te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new p_(e,r):new m_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vr(t,this.value)):t!==null&&fn(this.value)===fn(t)&&this.matchesComparison(vr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yt extends Df{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new yt(e,t)}matches(e){return Nf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Nf(n){return n.op==="and"}function Of(n){return h_(n)&&Nf(n)}function h_(n){for(const e of n.filters)if(e instanceof yt)return!1;return!0}function oc(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+_r(n.value);if(Of(n))return n.filters.map((e=>oc(e))).join(",");{const e=n.filters.map((t=>oc(t))).join(",");return`${n.op}(${e})`}}function Vf(n,e){return n instanceof Te?(function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&St(r.value,i.value)})(n,e):n instanceof yt?(function(r,i){return i instanceof yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,o,c)=>s&&Vf(o,i.filters[c])),!0):!1})(n,e):void K(19439)}function Lf(n){return n instanceof Te?(function(t){return`${t.field.canonicalString()} ${t.op} ${_r(t.value)}`})(n):n instanceof yt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Lf).join(" ,")+"}"})(n):"Filter"}class f_ extends Te{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class p_ extends Te{constructor(e,t){super(e,"in",t),this.keys=Mf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class m_ extends Te{constructor(e,t){super(e,"not-in",t),this.keys=Mf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Mf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>H.fromName(r.referenceValue)))}class g_ extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qc(t)&&Ii(t.arrayValue,this.value)}}class y_ extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ii(this.value.arrayValue,t)}}class v_ extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ii(this.value.arrayValue,t)}}class __ extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Ii(this.value.arrayValue,r)))}}/**
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
 */class w_{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}}function Td(n,e=null,t=[],r=[],i=null,s=null,o=null){return new w_(n,e,t,r,i,s,o)}function Hc(n){const e=J(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>oc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Co(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>_r(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>_r(r))).join(",")),e.Pe=t}return e.Pe}function Wc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!d_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Id(n.startAt,e.startAt)&&Id(n.endAt,e.endAt)}function ac(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Nr{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function b_(n,e,t,r,i,s,o,c){return new Nr(n,e,t,r,i,s,o,c)}function Po(n){return new Nr(n)}function Ad(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ff(n){return n.collectionGroup!==null}function pi(n){const e=J(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ke(Le.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Ti(s,r))})),t.has(Le.keyField().canonicalString())||e.Te.push(new Ti(Le.keyField(),r))}return e.Te}function bt(n){const e=J(n);return e.Ie||(e.Ie=E_(e,pi(n))),e.Ie}function E_(n,e){if(n.limitType==="F")return Td(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new Ti(i.field,s)}));const t=n.endAt?new eo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new eo(n.startAt.position,n.startAt.inclusive):null;return Td(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cc(n,e){const t=n.filters.concat([e]);return new Nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lc(n,e,t){return new Nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Do(n,e){return Wc(bt(n),bt(e))&&n.limitType===e.limitType}function Bf(n){return`${Hc(bt(n))}|lt:${n.limitType}`}function ir(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Lf(i))).join(", ")}]`),Co(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>_r(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>_r(i))).join(",")),`Target(${r})`})(bt(n))}; limitType=${n.limitType})`}function No(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of pi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(o,c,l){const u=Ed(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,pi(r),i)||r.endAt&&!(function(o,c,l){const u=Ed(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,pi(r),i))})(n,e)}function I_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $f(n){return(e,t)=>{let r=!1;for(const i of pi(n)){const s=T_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function T_(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):(function(s,o,c){const l=o.data.field(s),u=c.data.field(s);return l!==null&&u!==null?vr(l,u):K(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
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
 */class zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return If(this.inner)}size(){return this.innerSize}}/**
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
 */const A_=new _e(H.comparator);function jt(){return A_}const Uf=new _e(H.comparator);function ii(...n){let e=Uf;for(const t of n)e=e.insert(t.key,t);return e}function jf(n){let e=Uf;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Dn(){return mi()}function zf(){return mi()}function mi(){return new zn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const x_=new _e(H.comparator),k_=new ke(H.comparator);function oe(...n){let e=k_;for(const t of n)e=e.add(t);return e}const S_=new ke(re);function C_(){return S_}/**
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
 */function Gc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xs(e)?"-0":e}}function qf(n){return{integerValue:""+n}}function R_(n,e){return r_(e)?qf(e):Gc(n,e)}/**
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
 */class Oo{constructor(){this._=void 0}}function P_(n,e,t){return n instanceof Ai?(function(i,s){const o={fields:{[xf]:{stringValue:Af},[Sf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zc(s)&&(s=Ro(s)),s&&(o.fields[kf]=s),{mapValue:o}})(t,e):n instanceof xi?Wf(n,e):n instanceof ki?Gf(n,e):(function(i,s){const o=Hf(i,s),c=xd(o)+xd(i.Ee);return sc(o)&&sc(i.Ee)?qf(c):Gc(i.serializer,c)})(n,e)}function D_(n,e,t){return n instanceof xi?Wf(n,e):n instanceof ki?Gf(n,e):t}function Hf(n,e){return n instanceof to?(function(r){return sc(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class Ai extends Oo{}class xi extends Oo{constructor(e){super(),this.elements=e}}function Wf(n,e){const t=Kf(e);for(const r of n.elements)t.some((i=>St(i,r)))||t.push(r);return{arrayValue:{values:t}}}class ki extends Oo{constructor(e){super(),this.elements=e}}function Gf(n,e){let t=Kf(e);for(const r of n.elements)t=t.filter((i=>!St(i,r)));return{arrayValue:{values:t}}}class to extends Oo{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function xd(n){return Ee(n.integerValue||n.doubleValue)}function Kf(n){return qc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class N_{constructor(e,t){this.field=e,this.transform=t}}function O_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof xi&&i instanceof xi||r instanceof ki&&i instanceof ki?yr(r.elements,i.elements,St):r instanceof to&&i instanceof to?St(r.Ee,i.Ee):r instanceof Ai&&i instanceof Ai})(n.transform,e.transform)}class V_{constructor(e,t){this.version=e,this.transformResults=t}}class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ms(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vo{}function Zf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lo(n.key,Ye.none()):new Yi(n.key,n.data,Ye.none());{const t=n.data,r=tt.empty();let i=new ke(Le.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wn(n.key,r,new ot(i.toArray()),Ye.none())}}function L_(n,e,t){n instanceof Yi?(function(i,s,o){const c=i.value.clone(),l=Sd(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof wn?(function(i,s,o){if(!Ms(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Sd(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Yf(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function gi(n,e,t,r){return n instanceof Yi?(function(s,o,c,l){if(!Ms(s.precondition,o))return c;const u=s.value.clone(),f=Cd(s.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof wn?(function(s,o,c,l){if(!Ms(s.precondition,o))return c;const u=Cd(s.fieldTransforms,l,o),f=o.data;return f.setAll(Yf(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(s,o,c){return Ms(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function M_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Hf(r.transform,i||null);s!=null&&(t===null&&(t=tt.empty()),t.set(r.field,s))}return t||null}function kd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yr(r,i,((s,o)=>O_(s,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yi extends Vo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wn extends Vo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Yf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Sd(n,e,t){const r=new Map;de(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,D_(o,c,t[i]))}return r}function Cd(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,P_(s,o,e))}return r}class Lo extends Vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class F_ extends Vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class B_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&L_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=zf();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const l=Zf(o,c);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),oe())}isEqual(e){return this.batchId===e.batchId&&yr(this.mutations,e.mutations,((t,r)=>kd(t,r)))&&yr(this.baseMutations,e.baseMutations,((t,r)=>kd(t,r)))}}class Kc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){de(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=(function(){return x_})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kc(e,t,r,i)}}/**
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
 */class $_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class U_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ie,ae;function j_(n){switch(n){case P.OK:return K(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Xf(n){if(n===void 0)return Ut("GRPC error has no .code"),P.UNKNOWN;switch(n){case Ie.OK:return P.OK;case Ie.CANCELLED:return P.CANCELLED;case Ie.UNKNOWN:return P.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return P.INTERNAL;case Ie.UNAVAILABLE:return P.UNAVAILABLE;case Ie.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ie.NOT_FOUND:return P.NOT_FOUND;case Ie.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ie.ABORTED:return P.ABORTED;case Ie.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ie.DATA_LOSS:return P.DATA_LOSS;default:return K(39323,{code:n})}}(ae=Ie||(Ie={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const z_=new on([4294967295,4294967295],0);function Rd(n){const e=_f().encode(n),t=new df;return t.update(e),new Uint8Array(t.digest())}function Pd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new on([t,r],0),new on([i,s],0)]}class Zc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new si(`Invalid padding: ${t}`);if(r<0)throw new si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new si(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=on.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(on.fromNumber(r)));return i.compare(z_)===1&&(i=new on([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Rd(e),[r,i]=Pd(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zc(s,i,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const t=Rd(e),[r,i]=Pd(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mo{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Mo(Q.min(),i,new _e(re),jt(),oe())}}class Xi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xi(r,t,oe(),oe(),oe())}}/**
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
 */class Fs{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Qf{constructor(e,t){this.targetId=e,this.De=t}}class Jf{constructor(e,t,r=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Dd{constructor(){this.ve=0,this.Ce=Nd(),this.Fe=Me.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=oe(),t=oe(),r=oe();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}})),new Xi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Nd()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class q_{constructor(e){this.We=e,this.Ge=new Map,this.ze=jt(),this.je=Rs(),this.Je=Rs(),this.He=new _e(re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:K(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(ac(s))if(r===0){const o=new H(s.path);this.Xe(t,o,ze.newNoDocument(o,Q.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,u)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=hn(r).toUint8Array()}catch(l){if(l instanceof Tf)return ln("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Zc(o,i,s)}catch(l){return ln(l instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,o)=>{const c=this.st(o);if(c){if(s.current&&ac(c.target)){const l=new H(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,ze.newNoDocument(l,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}}));let r=oe();this.Je.forEach(((s,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(s))})),this.ze.forEach(((s,o)=>o.setReadTime(e)));const i=new Mo(e,t,this.He,this.ze,r);return this.ze=jt(),this.je=Rs(),this.Je=Rs(),this.He=new _e(re),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Dd,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ke(re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ke(re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Dd),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Rs(){return new _e(H.comparator)}function Nd(){return new _e(H.comparator)}const H_={asc:"ASCENDING",desc:"DESCENDING"},W_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},G_={and:"AND",or:"OR"};class K_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uc(n,e){return n.useProto3Json||Co(e)?e:{value:e}}function no(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ep(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Z_(n,e){return no(n,e.toTimestamp())}function Et(n){return de(!!n,49232),Q.fromTimestamp((function(t){const r=dn(t);return new ye(r.seconds,r.nanos)})(n))}function Yc(n,e){return dc(n,e).canonicalString()}function dc(n,e){const t=(function(i){return new me(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function tp(n){const e=me.fromString(n);return de(op(e),10190,{key:e.toString()}),e}function hc(n,e){return Yc(n.databaseId,e.path)}function Oa(n,e){const t=tp(e);if(t.get(1)!==n.databaseId.projectId)throw new F(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(rp(t))}function np(n,e){return Yc(n.databaseId,e)}function Y_(n){const e=tp(n);return e.length===4?me.emptyPath():rp(e)}function fc(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rp(n){return de(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Od(n,e,t){return{name:hc(n,e),fields:t.value.mapValue.fields}}function X_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(u,f){return u.useProto3Json?(de(f===void 0||typeof f=="string",58123),Me.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Me.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?P.UNKNOWN:Xf(u.code);return new F(f,u.message||"")})(o);t=new Jf(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oa(n,r.document.name),s=Et(r.document.updateTime),o=r.document.createTime?Et(r.document.createTime):Q.min(),c=new tt({mapValue:{fields:r.document.fields}}),l=ze.newFoundDocument(i,s,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];t=new Fs(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oa(n,r.document),s=r.readTime?Et(r.readTime):Q.min(),o=ze.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Fs([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oa(n,r.document),s=r.removedTargetIds||[];t=new Fs([],s,i,null)}else{if(!("filter"in e))return K(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new U_(i,s),c=r.targetId;t=new Qf(c,o)}}return t}function Q_(n,e){let t;if(e instanceof Yi)t={update:Od(n,e.key,e.value)};else if(e instanceof Lo)t={delete:hc(n,e.key)};else if(e instanceof wn)t={update:Od(n,e.key,e.data),updateMask:aw(e.fieldMask)};else{if(!(e instanceof F_))return K(16599,{Rt:e.type});t={verify:hc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,o){const c=o.transform;if(c instanceof Ai)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof to)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw K(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Z_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)})(n,e.precondition)),t}function J_(n,e){return n&&n.length>0?(de(e!==void 0,14353),n.map((t=>(function(i,s){let o=i.updateTime?Et(i.updateTime):Et(s);return o.isEqual(Q.min())&&(o=Et(s)),new V_(o,i.transformResults||[])})(t,e)))):[]}function ew(n,e){return{documents:[np(n,e.path)]}}function tw(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=np(n,i);const s=(function(u){if(u.length!==0)return sp(yt.create(u,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:sr(m.field),direction:iw(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=uc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:t,parent:i}}function nw(n){let e=Y_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){de(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(p){const m=ip(p);return m instanceof yt&&Of(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(k){return new Ti(or(k.field),(function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Co(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,v=p.values||[];return new eo(v,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const m=!p.before,v=p.values||[];return new eo(v,m)})(t.endAt)),b_(e,i,o,s,c,"F",l,u)}function rw(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ip(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=or(t.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=or(t.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=or(t.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=or(t.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Te.create(or(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return yt.create(t.compositeFilter.filters.map((r=>ip(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(t.compositeFilter.op))})(n):K(30097,{filter:n})}function iw(n){return H_[n]}function sw(n){return W_[n]}function ow(n){return G_[n]}function sr(n){return{fieldPath:n.canonicalString()}}function or(n){return Le.fromServerFormat(n.fieldPath)}function sp(n){return n instanceof Te?(function(t){if(t.op==="=="){if(bd(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NAN"}};if(wd(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bd(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NAN"}};if(wd(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(t.field),op:sw(t.op),value:t.value}}})(n):n instanceof yt?(function(t){const r=t.getFilters().map((i=>sp(i)));return r.length===1?r[0]:{compositeFilter:{op:ow(t.op),filters:r}}})(n):K(54877,{filter:n})}function aw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function op(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class tn{constructor(e,t,r,i,s=Q.min(),o=Q.min(),c=Me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cw{constructor(e){this.gt=e}}function lw(n){const e=nw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lc(e,e.limit,"L"):e}/**
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
 */class uw{constructor(){this.Dn=new dw}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(un.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(un.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class dw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ke(me.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ke(me.comparator)).toArray()}}/**
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
 */const Vd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ap=41943040;class Je{static withCacheSize(e){return new Je(e,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Je.DEFAULT_COLLECTION_PERCENTILE=10,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Je.DEFAULT=new Je(ap,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Je.DISABLED=new Je(-1,0,0);/**
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
 */class wr{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new wr(0)}static ur(){return new wr(-1)}}/**
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
 */const Ld="LruGarbageCollector",hw=1048576;function Md([n,e],[t,r]){const i=re(n,t);return i===0?re(e,r):i}class fw{constructor(e){this.Tr=e,this.buffer=new ke(Md),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Md(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){U(Ld,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dr(t)?U(Ld,"Ignoring IndexedDB error during garbage collection: ",t):await Pr(t)}await this.Rr(3e5)}))}}class mw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(So.ue);const r=new fw(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Vd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vd):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),rr()<=se.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p}))))}}function gw(n,e){return new mw(n,e)}/**
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
 */class yw{constructor(){this.changes=new zn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _w{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&gi(r.mutation,i,ot.empty(),ye.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,oe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=oe()){const i=Dn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let o=ii();return s.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Dn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,oe())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,i){let s=jt();const o=mi(),c=(function(){return mi()})();return t.forEach(((l,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof wn)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),gi(f.mutation,u,f.mutation.getFieldMask(),ye.now())):o.set(u.key,ot.empty())})),this.recalculateAndSaveOverlays(e,s).next((l=>(l.forEach(((u,f)=>o.set(u,f))),t.forEach(((u,f)=>{var p;return c.set(u,new vw(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=mi();let i=new _e(((o,c)=>o-c)),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let f=r.get(l)||ot.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(i.get(c.batchId)||oe()).add(l);i=i.insert(c.batchId,p)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=zf();f.forEach((m=>{if(!s.has(m)){const v=Zf(t.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return D.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ff(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Dn());let c=wi,l=s;return o.next((u=>D.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,s))).next((()=>this.computeViews(e,l,u,oe()))).next((f=>({batchId:c,changes:jf(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next((r=>{let i=ii();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ii();return this.indexManager.getCollectionParents(e,s).next((c=>D.forEach(c,(l=>{const u=(function(p,m){return new Nr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((o=>{s.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ze.newInvalidDocument(f)))}));let c=ii();return o.forEach(((l,u)=>{const f=s.get(l);f!==void 0&&gi(f.mutation,u,ot.empty(),ye.now()),No(t,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class ww{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Et(i.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:lw(i.bundledQuery),readTime:Et(i.readTime)}})(t)),D.resolve()}}/**
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
 */class bw{constructor(){this.overlays=new _e(H.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dn();return D.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.wt(e,t,s)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Dn(),s=t.length+1,o=new H(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new _e(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=Dn(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Dn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=i)););return D.resolve(c)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $_(t,r));let s=this.kr.get(t);s===void 0&&(s=oe(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
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
 */class Ew{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Xc{constructor(){this.qr=new ke(Ce.Qr),this.$r=new ke(Ce.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ce(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new H(new me([])),r=new Ce(t,e),i=new Ce(t,e+1),s=[];return this.$r.forEachInRange([r,i],(o=>{this.Wr(o),s.push(o.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new H(new me([])),r=new Ce(t,e),i=new Ce(t,e+1);let s=oe();return this.$r.forEachInRange([r,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new Ce(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return H.comparator(e.key,t.key)||re(e.Hr,t.Hr)}static Ur(e,t){return re(e.Hr,t.Hr)||H.comparator(e.key,t.key)}}/**
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
 */class Iw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ke(Ce.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new B_(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Yr=this.Yr.add(new Ce(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?jc:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),i=new Ce(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],(o=>{const c=this.Zr(o.Hr);s.push(c)})),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ke(re);return t.forEach((i=>{const s=new Ce(i,0),o=new Ce(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ce(new H(s),0);let c=new ke(re);return this.Yr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(c=c.add(l.Hr)),!0)}),o),D.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){de(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(i=>{const s=new Ce(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ce(t,0),i=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Tw{constructor(e){this.ni=e,this.docs=(function(){return new _e(H.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(t))}getEntries(e,t){let r=jt();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=jt();const o=t.path,c=new H(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jv(Qv(f),r)<=0||(i.has(f.key)||No(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Aw(this)}getSize(e){return D.resolve(this.size)}}class Aw extends yw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class xw{constructor(e){this.persistence=e,this.ii=new zn((t=>Hc(t)),Wc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.si=0,this.oi=new Xc,this.targetCount=0,this._i=wr.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new wr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),D.waitFor(s).next((()=>i))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
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
 */class cp{constructor(e,t){this.ai={},this.overlays={},this.ui=new So(0),this.ci=!1,this.ci=!0,this.li=new Ew,this.referenceDelegate=e(this),this.hi=new xw(this),this.indexManager=new uw,this.remoteDocumentCache=(function(i){return new Tw(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new cw(t),this.Ti=new ww(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Iw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const i=new kw(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class kw extends t_{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.Ai=new Xc,this.Ri=null}static Vi(e){return new Qc(e)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const i=H.fromPath(r);return this.fi(e,i).next((s=>{s||t.removeEntry(i,Q.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ro{constructor(e,t){this.persistence=e,this.gi=new zn((r=>i_(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=gw(this,t)}static Vi(e,t){return new ro(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((s=>s?D.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(o=>this.Sr(e,o,t).next((c=>{c||(r++,s.removeEntry(o,Q.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vs(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return D.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Jc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=oe(),i=oe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jc(e,t.fromCache,r,i)}}/**
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
 */class Sw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return by()?8:n_(He())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ys(e,t,i,r).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new Sw;return this.ws(e,t,o).next((c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)}))})).next((()=>s.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(rr()<=se.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",ir(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(rr()<=se.DEBUG&&U("QueryEngine","Query:",ir(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(rr()<=se.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",ir(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(t))):D.resolve())}ps(e,t){if(Ad(t))return D.resolve(null);let r=bt(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=lc(t,null,"F"),r=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const o=oe(...s);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(t,c);return this.Ds(t,u,o,l.readTime)?this.ps(e,lc(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ys(e,t,r,i){return Ad(t)||i.isEqual(Q.min())?D.resolve(null):this.gs.getDocuments(e,r).next((s=>{const o=this.bs(t,s);return this.Ds(t,o,r,i)?D.resolve(null):(rr()<=se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ir(t)),this.vs(e,o,t,Xv(i,wi)).next((c=>c)))}))}bs(e,t){let r=new ke($f(e));return t.forEach(((i,s)=>{No(e,s)&&(r=r.add(s))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return rr()<=se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",ir(t)),this.gs.getDocumentsMatchingQuery(e,t,un.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
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
 */const el="LocalStore",Rw=3e8;class Pw{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new _e(re),this.Ms=new zn((s=>Hc(s)),Wc),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _w(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Dw(n,e,t,r){return new Pw(n,e,t,r)}async function lp(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const o=[],c=[];let l=oe();for(const u of i){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of s){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function Nw(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let v=D.resolve();return m.forEach((k=>{v=v.next((()=>f.getEntry(l,k))).next((x=>{const A=u.docVersions.get(k);de(A!==null,48541),x.version.compareTo(A)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),f.addEntry(x)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,s).next((()=>s.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=oe();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function up(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Ow(n,e){const t=J(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=i.get(p);if(!m)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,p).next((()=>t.hi.addMatchingKeys(s,f.addedDocuments,p))));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Me.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),(function(x,A,N){return x.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Rw?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(m,v,f)&&c.push(t.hi.updateTargetData(s,v))}));let l=jt(),u=oe();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),c.push(Vw(s,o,e.documentUpdates).next((f=>{l=f.Ls,u=f.ks}))),!r.isEqual(Q.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next((p=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r)));c.push(f)}return D.waitFor(c).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,l,u))).next((()=>l))})).then((s=>(t.Fs=i,s)))}function Vw(n,e,t){let r=oe(),i=oe();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let o=jt();return t.forEach(((c,l)=>{const u=s.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):U(el,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Ls:o,ks:i}}))}function Lw(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=jc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Mw(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((s=>s?(i=s,D.resolve(i)):t.hi.allocateTargetId(r).next((o=>(i=new tn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function pc(n,e,t){const r=J(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Dr(o))throw o;U(el,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Fd(n,e,t){const r=J(n);let i=Q.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=J(l),m=p.Ms.get(f);return m!==void 0?D.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,bt(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{s=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:Q.min(),t?s:oe()))).next((c=>(Fw(r,I_(e),c),{documents:c,qs:s})))))}function Fw(n,e,t){let r=n.xs.get(e)||Q.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.xs.set(e,r)}class Bd{constructor(){this.activeTargetIds=C_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bw{constructor(){this.Fo=new Bd,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Bd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $w{xo(e){}shutdown(){}}/**
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
 */const $d="ConnectivityMonitor";class Ud{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){U($d,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){U($d,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ps=null;function mc(){return Ps===null?Ps=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ps++,"0x"+Ps.toString(16)}/**
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
 */const Va="RestConnection",Uw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Qs?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=mc(),c=this.Go(e,t.toUriEncodedString());U(Va,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);const{host:u}=new URL(c),f=Sr(u);return this.jo(e,c,l,r,f).then((p=>(U(Va,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw ln(Va,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const r=Uw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class zw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ue="WebChannelConnection";class qw extends jw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const o=mc();return new Promise(((c,l)=>{const u=new hf;u.setWithCredentials(!0),u.listenOnce(ff.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Os.NO_ERROR:const p=u.getResponseJson();U(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Os.TIMEOUT:U(Ue,`RPC '${e}' ${o} timed out`),l(new F(P.DEADLINE_EXCEEDED,"Request time out"));break;case Os.HTTP_ERROR:const m=u.getStatus();if(U(Ue,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const x=(function(N){const O=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(O)>=0?O:P.UNKNOWN})(k.status);l(new F(x,k.message))}else l(new F(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new F(P.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{U(Ue,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(i);U(Ue,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",f,r,15)}))}P_(e,t,r){const i=mc(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gf(),c=mf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=s.join("");U(Ue,`Creating RPC '${e}' stream ${i}: ${f}`,l);const p=o.createWebChannel(f,l);this.T_(p);let m=!1,v=!1;const k=new zw({Ho:A=>{v?U(Ue,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(m||(U(Ue,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),U(Ue,`RPC '${e}' stream ${i} sending:`,A),p.send(A))},Yo:()=>p.close()}),x=(A,N,O)=>{A.listen(N,(B=>{try{O(B)}catch(q){setTimeout((()=>{throw q}),0)}}))};return x(p,ri.EventType.OPEN,(()=>{v||(U(Ue,`RPC '${e}' stream ${i} transport opened.`),k.s_())})),x(p,ri.EventType.CLOSE,(()=>{v||(v=!0,U(Ue,`RPC '${e}' stream ${i} transport closed`),k.__(),this.I_(p))})),x(p,ri.EventType.ERROR,(A=>{v||(v=!0,ln(Ue,`RPC '${e}' stream ${i} transport errored. Name:`,A.name,"Message:",A.message),k.__(new F(P.UNAVAILABLE,"The operation could not be completed")))})),x(p,ri.EventType.MESSAGE,(A=>{var N;if(!v){const O=A.data[0];de(!!O,16349);const B=O,q=(B==null?void 0:B.error)||((N=B[0])===null||N===void 0?void 0:N.error);if(q){U(Ue,`RPC '${e}' stream ${i} received error:`,q);const fe=q.status;let ie=(function(w){const T=Ie[w];if(T!==void 0)return Xf(T)})(fe),I=q.message;ie===void 0&&(ie=P.INTERNAL,I="Unknown error status: "+fe+" with message "+q.message),v=!0,k.__(new F(ie,I)),p.close()}else U(Ue,`RPC '${e}' stream ${i} received:`,O),k.a_(O)}})),x(c,pf.STAT_EVENT,(A=>{A.stat===nc.PROXY?U(Ue,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===nc.NOPROXY&&U(Ue,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function La(){return typeof document<"u"?document:null}/**
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
 */function Fo(n){return new K_(n,!0)}/**
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
 */class dp{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const jd="PersistentStream";class hp{constructor(e,t,r,i,s,o,c,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new dp(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Ut(t.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new F(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return U(jd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(U(jd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hw extends hp{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=X_(this.serializer,e),r=(function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Et(o.readTime):Q.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=fc(this.serializer),t.addTarget=(function(s,o){let c;const l=o.target;if(c=ac(l)?{documents:ew(s,l)}:{query:tw(s,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ep(s,o.resumeToken);const u=uc(s,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=no(s,o.snapshotVersion.toTimestamp());const u=uc(s,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=rw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=fc(this.serializer),t.removeTarget=e,this.k_(t)}}class Ww extends hp{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=J_(e.writeResults,e.commitTime),r=Et(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=fc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Q_(this.serializer,r)))};this.k_(t)}}/**
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
 */class Gw{}class Kw extends Gw{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new F(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,dc(t,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(P.UNKNOWN,s.toString())}))}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,dc(t,r),i,o,c,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(P.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Zw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ut(t),this._a=!1):U("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Bn="RemoteStore";class Yw{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{qn(this)&&(U(Bn,"Restarting streams for network reachability change."),await(async function(l){const u=J(l);u.Ia.add(4),await Qi(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Bo(u)})(this))}))})),this.Aa=new Zw(r,i)}}async function Bo(n){if(qn(n))for(const e of n.da)await e(!0)}async function Qi(n){for(const e of n.da)await e(!1)}function fp(n,e){const t=J(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),il(t)?rl(t):Or(t).x_()&&nl(t,e))}function tl(n,e){const t=J(n),r=Or(t);t.Ta.delete(e),r.x_()&&pp(t,e),t.Ta.size===0&&(r.x_()?r.B_():qn(t)&&t.Aa.set("Unknown"))}function nl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Or(n).H_(e)}function pp(n,e){n.Ra.$e(e),Or(n).Y_(e)}function rl(n){n.Ra=new q_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Or(n).start(),n.Aa.aa()}function il(n){return qn(n)&&!Or(n).M_()&&n.Ta.size>0}function qn(n){return J(n).Ia.size===0}function mp(n){n.Ra=void 0}async function Xw(n){n.Aa.set("Online")}async function Qw(n){n.Ta.forEach(((e,t)=>{nl(n,e)}))}async function Jw(n,e){mp(n),il(n)?(n.Aa.la(e),rl(n)):n.Aa.set("Unknown")}async function e0(n,e,t){if(n.Aa.set("Online"),e instanceof Jf&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))})(n,e)}catch(r){U(Bn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await io(n,r)}else if(e instanceof Fs?n.Ra.Ye(e):e instanceof Qf?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Q.min()))try{const r=await up(n.localStore);t.compareTo(r)>=0&&await(function(s,o){const c=s.Ra.Pt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.Ta.get(u);f&&s.Ta.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=s.Ta.get(l);if(!f)return;s.Ta.set(l,f.withResumeToken(Me.EMPTY_BYTE_STRING,f.snapshotVersion)),pp(s,l);const p=new tn(f.target,l,u,f.sequenceNumber);nl(s,p)})),s.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){U(Bn,"Failed to raise snapshot:",r),await io(n,r)}}async function io(n,e,t){if(!Dr(e))throw e;n.Ia.add(1),await Qi(n),n.Aa.set("Offline"),t||(t=()=>up(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{U(Bn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Bo(n)}))}function gp(n,e){return e().catch((t=>io(n,t,e)))}async function $o(n){const e=J(n),t=pn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:jc;for(;t0(e);)try{const i=await Lw(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,n0(e,i)}catch(i){await io(e,i)}yp(e)&&vp(e)}function t0(n){return qn(n)&&n.Pa.length<10}function n0(n,e){n.Pa.push(e);const t=pn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function yp(n){return qn(n)&&!pn(n).M_()&&n.Pa.length>0}function vp(n){pn(n).start()}async function r0(n){pn(n).na()}async function i0(n){const e=pn(n);for(const t of n.Pa)e.X_(t.mutations)}async function s0(n,e,t){const r=n.Pa.shift(),i=Kc.from(r,e,t);await gp(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await $o(n)}async function o0(n,e){e&&pn(n).Z_&&await(async function(r,i){if((function(o){return j_(o)&&o!==P.ABORTED})(i.code)){const s=r.Pa.shift();pn(r).N_(),await gp(r,(()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i))),await $o(r)}})(n,e),yp(n)&&vp(n)}async function zd(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),U(Bn,"RemoteStore received new credentials");const r=qn(t);t.Ia.add(3),await Qi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Bo(t)}async function a0(n,e){const t=J(n);e?(t.Ia.delete(2),await Bo(t)):e||(t.Ia.add(2),await Qi(t),t.Aa.set("Unknown"))}function Or(n){return n.Va||(n.Va=(function(t,r,i){const s=J(t);return s.ia(),new Hw(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:Xw.bind(null,n),e_:Qw.bind(null,n),n_:Jw.bind(null,n),J_:e0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),il(n)?rl(n):n.Aa.set("Unknown")):(await n.Va.stop(),mp(n))}))),n.Va}function pn(n){return n.ma||(n.ma=(function(t,r,i){const s=J(t);return s.ia(),new Ww(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:r0.bind(null,n),n_:o0.bind(null,n),ea:i0.bind(null,n),ta:s0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await $o(n)):(await n.ma.stop(),n.Pa.length>0&&(U(Bn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class sl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new sl(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(n,e){if(Ut("AsyncQueue",`${e}: ${n}`),Dr(n))return new F(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class hr{static emptySet(e){return new hr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=ii(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class qd{constructor(){this.fa=new _e(H.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):K(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class br{constructor(e,t,r,i,s,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new br(e,t,hr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Do(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class c0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class l0{constructor(){this.queries=Hd(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=Hd(),s.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new F(P.ABORTED,"Firestore shutting down"))}}function Hd(){return new zn((n=>Bf(n)),Do)}async function al(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new c0,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=ol(o,`Initialization of query '${ir(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&ll(t)}async function cl(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function u0(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.wa)c.Ca(i)&&(r=!0);o.ya=i}}r&&ll(t)}function d0(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function ll(n){n.Da.forEach((e=>{e.next()}))}var gc,Wd;(Wd=gc||(gc={})).Fa="default",Wd.Cache="cache";class ul{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==gc.Cache}}/**
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
 */class _p{constructor(e){this.key=e}}class wp{constructor(e){this.key=e}}class h0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=oe(),this.mutatedKeys=oe(),this.Xa=$f(e),this.eu=new hr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new qd,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,p)=>{const m=i.get(f),v=No(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),x=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let A=!1;m&&v?m.data.isEqual(v.data)?k!==x&&(r.track({type:3,doc:v}),A=!0):this.iu(m,v)||(r.track({type:2,doc:v}),A=!0,(l&&this.Xa(v,l)>0||u&&this.Xa(v,u)<0)&&(c=!0)):!m&&v?(r.track({type:0,doc:v}),A=!0):m&&!v&&(r.track({type:1,doc:m}),A=!0,(l||u)&&(c=!0)),A&&(v?(o=o.add(v),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(v,k){const x=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:A})}};return x(v)-x(k)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),i=i!=null&&i;const c=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new br(this.query,e.eu,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new qd,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=oe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new wp(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new _p(r))})),t}uu(e){this.Ha=e.qs,this.Za=oe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return br.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const dl="SyncEngine";class f0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class p0{constructor(e){this.key=e,this.lu=!1}}class m0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new zn((c=>Bf(c)),Do),this.Tu=new Map,this.Iu=new Set,this.du=new _e(H.comparator),this.Eu=new Map,this.Au=new Xc,this.Ru={},this.Vu=new Map,this.mu=wr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function g0(n,e,t=!0){const r=xp(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await bp(r,e,t,!0),i}async function y0(n,e){const t=xp(n);await bp(t,e,!0,!1)}async function bp(n,e,t,r){const i=await Mw(n.localStore,bt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await v0(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&fp(n.remoteStore,i),c}async function v0(n,e,t,r,i){n.gu=(p,m,v)=>(async function(x,A,N,O){let B=A.view.nu(N);B.Ds&&(B=await Fd(x.localStore,A.query,!1).then((({documents:I})=>A.view.nu(I,B))));const q=O&&O.targetChanges.get(A.targetId),fe=O&&O.targetMismatches.get(A.targetId)!=null,ie=A.view.applyChanges(B,x.isPrimaryClient,q,fe);return Kd(x,A.targetId,ie._u),ie.snapshot})(n,p,m,v);const s=await Fd(n.localStore,e,!0),o=new h0(e,s.qs),c=o.nu(s.documents),l=Xi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(c,n.isPrimaryClient,l);Kd(n,t,u._u);const f=new f0(e,t,o);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),u.snapshot}async function _0(n,e,t){const r=J(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter((o=>!Do(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&tl(r.remoteStore,i.targetId),yc(r,i.targetId)})).catch(Pr)):(yc(r,i.targetId),await pc(r.localStore,i.targetId,!0))}async function w0(n,e){const t=J(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),tl(t.remoteStore,r.targetId))}async function b0(n,e,t){const r=S0(n);try{const i=await(function(o,c){const l=J(o),u=ye.now(),f=c.reduce(((v,k)=>v.add(k.key)),oe());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let k=jt(),x=oe();return l.Os.getEntries(v,f).next((A=>{k=A,k.forEach(((N,O)=>{O.isValidDocument()||(x=x.add(N))}))})).next((()=>l.localDocuments.getOverlayedDocuments(v,k))).next((A=>{p=A;const N=[];for(const O of c){const B=M_(O,p.get(O.key).overlayedDocument);B!=null&&N.push(new wn(O.key,B,Pf(B.value.mapValue),Ye.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,N,c)})).next((A=>{m=A;const N=A.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(v,A.batchId,N)}))})).then((()=>({batchId:m.batchId,changes:jf(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new _e(re)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u})(r,i.batchId,t),await Ji(r,i.changes),await $o(r.remoteStore)}catch(i){const s=ol(i,"Failed to persist write");t.reject(s)}}async function Ep(n,e){const t=J(n);try{const r=await Ow(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Eu.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?de(o.lu,14607):i.removedDocuments.size>0&&(de(o.lu,42227),o.lu=!1))})),await Ji(t,r,e)}catch(r){await Pr(r)}}function Gd(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const l=J(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(c)&&(u=!0)})),u&&ll(l)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function E0(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new _e(H.comparator);o=o.insert(s,ze.newNoDocument(s,Q.min()));const c=oe().add(s),l=new Mo(Q.min(),new Map,new _e(re),o,c);await Ep(r,l),r.du=r.du.remove(s),r.Eu.delete(e),hl(r)}else await pc(r.localStore,e,!1).then((()=>yc(r,e,t))).catch(Pr)}async function I0(n,e){const t=J(n),r=e.batch.batchId;try{const i=await Nw(t.localStore,e);Tp(t,r,null),Ip(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ji(t,i)}catch(i){await Pr(i)}}async function T0(n,e,t){const r=J(n);try{const i=await(function(o,c){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(de(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Tp(r,e,t),Ip(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ji(r,i)}catch(i){await Pr(i)}}function Ip(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Tp(n,e,t){const r=J(n);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function yc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Ap(n,r)}))}function Ap(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(tl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),hl(n))}function Kd(n,e,t){for(const r of t)r instanceof _p?(n.Au.addReference(r.key,e),A0(n,r)):r instanceof wp?(U(dl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Ap(n,r.key)):K(19791,{yu:r})}function A0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(U(dl,"New document in limbo: "+t),n.Iu.add(r),hl(n))}function hl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new H(me.fromString(e)),r=n.mu.next();n.Eu.set(r,new p0(t)),n.du=n.du.insert(t,r),fp(n.remoteStore,new tn(bt(Po(t.path)),r,"TargetPurposeLimboResolution",So.ue))}}async function Ji(n,e,t){const r=J(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,t).then((u=>{var f;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Jc.Es(l.targetId,u);s.push(p)}})))})),await Promise.all(o),r.hu.J_(i),await(async function(l,u){const f=J(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(u,(m=>D.forEach(m.Is,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>D.forEach(m.ds,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!Dr(p))throw p;U(el,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.Fs.get(m),k=v.snapshotVersion,x=v.withLastLimboFreeSnapshotVersion(k);f.Fs=f.Fs.insert(m,x)}}})(r.localStore,s))}async function x0(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){U(dl,"User change. New user:",e.toKey());const r=await lp(t.localStore,e);t.currentUser=e,(function(s,o){s.Vu.forEach((c=>{c.forEach((l=>{l.reject(new F(P.CANCELLED,o))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ji(t,r.Bs)}}function k0(n,e){const t=J(n),r=t.Eu.get(e);if(r&&r.lu)return oe().add(r.key);{let i=oe();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}function xp(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ep.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=k0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E0.bind(null,e),e.hu.J_=u0.bind(null,e.eventManager),e.hu.pu=d0.bind(null,e.eventManager),e}function S0(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T0.bind(null,e),e}class so{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Dw(this.persistence,new Cw,e.initialUser,this.serializer)}Du(e){return new cp(Qc.Vi,this.serializer)}bu(e){return new Bw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}so.provider={build:()=>new so};class C0 extends so{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){de(this.persistence.referenceDelegate instanceof ro,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Je.withCacheSize(this.cacheSizeBytes):Je.DEFAULT;return new cp((r=>ro.Vi(r,t)),this.serializer)}}class vc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x0.bind(null,this.syncEngine),await a0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new l0})()}createDatastore(e){const t=Fo(e.databaseInfo.databaseId),r=(function(s){return new qw(s)})(e.databaseInfo);return(function(s,o,c,l){return new Kw(s,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,o,c){return new Yw(r,i,s,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gd(this.syncEngine,t,0)),(function(){return Ud.C()?new Ud:new $w})())}createSyncEngine(e,t){return(function(i,s,o,c,l,u,f){const p=new m0(i,s,o,c,l,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=J(i);U(Bn,"RemoteStore shutting down."),s.Ia.add(5),await Qi(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vc.provider={build:()=>new vc};/**
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
 */class fl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ut("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const mn="FirestoreClient";class R0{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=je.UNAUTHENTICATED,this.clientId=Uc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async o=>{U(mn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(U(mn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ol(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ma(n,e){n.asyncQueue.verifyOperationInProgress(),U(mn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await lp(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{ln("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{U("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{ln("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function Zd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await P0(n);U(mn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>zd(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>zd(e.remoteStore,i))),n._onlineComponents=e}async function P0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(mn,"Using user provided OfflineComponentProvider");try{await Ma(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;ln("Error using user provided cache. Falling back to memory cache: "+t),await Ma(n,new so)}}else U(mn,"Using default OfflineComponentProvider"),await Ma(n,new C0(void 0));return n._offlineComponents}async function kp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(mn,"Using user provided OnlineComponentProvider"),await Zd(n,n._uninitializedComponentsProvider._online)):(U(mn,"Using default OnlineComponentProvider"),await Zd(n,new vc))),n._onlineComponents}function D0(n){return kp(n).then((e=>e.syncEngine))}async function oo(n){const e=await kp(n),t=e.eventManager;return t.onListen=g0.bind(null,e.syncEngine),t.onUnlisten=_0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=y0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=w0.bind(null,e.syncEngine),t}function N0(n,e,t={}){const r=new Bt;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,l,u){const f=new fl({next:m=>{f.Ou(),o.enqueueAndForget((()=>cl(s,p)));const v=m.docs.has(c);!v&&m.fromCache?u.reject(new F(P.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?u.reject(new F(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ul(Po(c.path),f,{includeMetadataChanges:!0,ka:!0});return al(s,p)})(await oo(n),n.asyncQueue,e,t,r))),r.promise}function O0(n,e,t={}){const r=new Bt;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,l,u){const f=new fl({next:m=>{f.Ou(),o.enqueueAndForget((()=>cl(s,p))),m.fromCache&&l.source==="server"?u.reject(new F(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ul(c,f,{includeMetadataChanges:!0,ka:!0});return al(s,p)})(await oo(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Sp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Cp="firestore.googleapis.com",Xd=!0;class Qd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cp,this.ssl=Xd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Xd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ap;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hw)throw new F(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Uv;switch(r.type){case"firstParty":return new Hv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Yd.get(t);r&&(U("ComponentProvider","Removing Datastore"),Yd.delete(t),r.terminate())})(this),Promise.resolve()}}function V0(n,e,t,r={}){var i;n=Ze(n,Uo);const s=Sr(e),o=n._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;s&&(nf(`https://${l}`),rf("Firestore",!0)),o.host!==Cp&&o.host!==l&&ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:s,emulatorOptions:r});if(!Ln(u,c)&&(n._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=je.MOCK_USER;else{f=hy(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new F(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new je(m)}n._authCredentials=new jv(new vf(f,p))}}/**
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
 */class bn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bn(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zi(t,be._jsonSchema))return new be(e,r||null,new H(me.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Ae("string",be._jsonSchemaVersion),referencePath:Ae("string")};class an extends bn{constructor(e,t,r){super(e,t,Po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new H(e))}withConverter(e){return new an(this.firestore,e,this._path)}}function En(n,e,...t){if(n=Se(n),wf("collection","path",e),n instanceof Uo){const r=me.fromString(e,...t);return dd(r),new an(n,null,r)}{if(!(n instanceof be||n instanceof an))throw new F(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return dd(r),new an(n.firestore,null,r)}}function Hn(n,e,...t){if(n=Se(n),arguments.length===1&&(e=Uc.newId()),wf("doc","path",e),n instanceof Uo){const r=me.fromString(e,...t);return ud(r),new be(n,null,new H(r))}{if(!(n instanceof be||n instanceof an))throw new F(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return ud(r),new be(n.firestore,n instanceof an?n.converter:null,new H(r))}}/**
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
 */const Jd="AsyncQueue";class eh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new dp(this,"async_queue_retry"),this.oc=()=>{const r=La();r&&U(Jd,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=La();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=La();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Bt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Dr(e))throw e;U(Jd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ut("INTERNAL UNHANDLED ERROR: ",th(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=sl.createAndSchedule(this,e,t,r,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&K(47125,{hc:th(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function th(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function nh(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1})(n,["next","error","complete"])}class Ct extends Uo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new eh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eh(e),this._firestoreClient=void 0,await e}}}function L0(n,e){const t=typeof n=="object"?n:cf(),r=typeof n=="string"?n:Qs,i=Bc(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uy("firestore");s&&V0(i,...s)}return i}function es(n){if(n._terminated)throw new F(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||M0(n),n._firestoreClient}function M0(n){var e,t,r;const i=n._freezeSettings(),s=(function(c,l,u,f){return new a_(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Sp(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new R0(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lt(Me.fromBase64String(e))}catch(t){throw new F(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lt(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zi(e,lt._jsonSchema))return lt.fromBase64String(e.bytes)}}lt._jsonSchemaVersion="firestore/bytes/1.0",lt._jsonSchema={type:Ae("string",lt._jsonSchemaVersion),bytes:Ae("string")};/**
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
 */class ts{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jo{constructor(e){this._methodName=e}}/**
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
 */class It{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:It._jsonSchemaVersion}}static fromJSON(e){if(Zi(e,It._jsonSchema))return new It(e.latitude,e.longitude)}}It._jsonSchemaVersion="firestore/geoPoint/1.0",It._jsonSchema={type:Ae("string",It._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class Tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zi(e,Tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Tt(e.vectorValues);throw new F(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tt._jsonSchemaVersion="firestore/vectorValue/1.0",Tt._jsonSchema={type:Ae("string",Tt._jsonSchemaVersion),vectorValues:Ae("object")};/**
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
 */const F0=/^__.*__$/;class B0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yi(e,this.data,t,this.fieldTransforms)}}class Rp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Pp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:n})}}class pl{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new pl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ao(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Pp(this.Ec)&&F0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class $0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fo(e)}Dc(e,t,r,i=!1){return new pl({Ec:e,methodName:t,bc:r,path:Le.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ns(n){const e=n._freezeSettings(),t=Fo(n._databaseId);return new $0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ml(n,e,t,r,i,s={}){const o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);yl("Data must be an object, but it was:",o,r);const c=Op(r,o);let l,u;if(s.merge)l=new ot(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=_c(e,p,t);if(!o.contains(m))throw new F(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Lp(f,m)||f.push(m)}l=new ot(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new B0(new tt(c),l,u)}class zo extends jo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zo}}class gl extends jo{_toFieldTransform(e){return new N_(e.path,new Ai)}isEqual(e){return e instanceof gl}}function Dp(n,e,t,r){const i=n.Dc(1,e,t);yl("Data must be an object, but it was:",i,r);const s=[],o=tt.empty();_n(r,((l,u)=>{const f=vl(e,l,t);u=Se(u);const p=i.gc(f);if(u instanceof zo)s.push(f);else{const m=rs(u,p);m!=null&&(s.push(f),o.set(f,m))}}));const c=new ot(s);return new Rp(o,c,i.fieldTransforms)}function Np(n,e,t,r,i,s){const o=n.Dc(1,e,t),c=[_c(e,r,t)],l=[i];if(s.length%2!=0)throw new F(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)c.push(_c(e,s[m])),l.push(s[m+1]);const u=[],f=tt.empty();for(let m=c.length-1;m>=0;--m)if(!Lp(u,c[m])){const v=c[m];let k=l[m];k=Se(k);const x=o.gc(v);if(k instanceof zo)u.push(v);else{const A=rs(k,x);A!=null&&(u.push(v),f.set(v,A))}}const p=new ot(u);return new Rp(f,p,o.fieldTransforms)}function U0(n,e,t,r=!1){return rs(t,n.Dc(r?4:3,e))}function rs(n,e){if(Vp(n=Se(n)))return yl("Unsupported field value:",e,n),Op(n,e);if(n instanceof jo)return(function(r,i){if(!Pp(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const s=[];let o=0;for(const c of r){let l=rs(c,i.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return R_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:no(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:no(i.serializer,s)}}if(r instanceof It)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lt)return{bytesValue:ep(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Tt)return(function(o,c){return{mapValue:{fields:{[Cf]:{stringValue:Rf},[Js]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return Gc(c.serializer,u)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${ko(r)}`)})(n,e)}function Op(n,e){const t={};return If(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(n,((r,i)=>{const s=rs(i,e.Vc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function Vp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof It||n instanceof lt||n instanceof be||n instanceof jo||n instanceof Tt)}function yl(n,e,t){if(!Vp(t)||!bf(t)){const r=ko(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function _c(n,e,t){if((e=Se(e))instanceof ts)return e._internalPath;if(typeof e=="string")return vl(n,e);throw ao("Field path arguments must be of type string or ",n,!1,void 0,t)}const j0=new RegExp("[~\\*/\\[\\]]");function vl(n,e,t){if(e.search(j0)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ts(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ao(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(P.INVALID_ARGUMENT,c+n+l)}function Lp(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Mp{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_l("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class z0 extends Mp{data(){return super.data()}}function _l(n,e){return typeof e=="string"?vl(n,e):e instanceof ts?e._internalPath:e._delegate._internalPath}/**
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
 */function Fp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wl{}class Bp extends wl{}function qo(n,e,...t){let r=[];e instanceof wl&&r.push(e),r=r.concat(t),(function(s){const o=s.filter((l=>l instanceof El)).length,c=s.filter((l=>l instanceof bl)).length;if(o>1||o>0&&c>0)throw new F(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class bl extends Bp{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new bl(e,t,r)}_apply(e){const t=this._parse(e);return $p(e._query,t),new bn(e.firestore,e.converter,cc(e._query,t))}_parse(e){const t=ns(e.firestore);return(function(s,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ih(p,f);const k=[];for(const x of p)k.push(rh(l,s,x));m={arrayValue:{values:k}}}else m=rh(l,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ih(p,f),m=U0(c,o,p,f==="in"||f==="not-in");return Te.create(u,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class El extends wl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new El(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:yt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const c=s.getFlattenedFilters();for(const l of c)$p(o,l),o=cc(o,l)})(e._query,t),new bn(e.firestore,e.converter,cc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Il extends Bp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Il(e,t)}_apply(e){const t=(function(i,s,o){if(i.startAt!==null)throw new F(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ti(s,o)})(e._query,this._field,this._direction);return new bn(e.firestore,e.converter,(function(i,s){const o=i.explicitOrderBy.concat([s]);return new Nr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function Ho(n,e="asc"){const t=e,r=_l("orderBy",n);return Il._create(r,t)}function rh(n,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new F(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ff(e)&&t.indexOf("/")!==-1)throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!H.isDocumentKey(r))throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _d(n,new H(r))}if(t instanceof be)return _d(n,t._key);throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ko(t)}.`)}function ih(n,e){if(!Array.isArray(n)||n.length===0)throw new F(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $p(n,e){const t=(function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new F(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class q0{convertValue(e,t="none"){switch(fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _n(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Js].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((o=>Ee(o.doubleValue)));return new Tt(s)}convertGeoPoint(e){return new It(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ro(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const t=dn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);de(op(r),9688,{name:e});const i=new Ei(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||Ut(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Tl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class oi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nn extends Mp{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(_l("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Nn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Nn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nn._jsonSchema={type:Ae("string",Nn._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Bs extends Nn{data(e={}){return super.data(e)}}class On{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Bs(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const l=new Bs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new oi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const l=new Bs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new oi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:H0(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=On._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function H0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
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
 */function Up(n){n=Ze(n,be);const e=Ze(n.firestore,Ct);return N0(es(e),n._key).then((t=>zp(e,n,t)))}On._jsonSchemaVersion="firestore/querySnapshot/1.0",On._jsonSchema={type:Ae("string",On._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Al extends q0{constructor(e){super(),this.firestore=e}convertBytes(e){return new lt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function Wo(n){n=Ze(n,bn);const e=Ze(n.firestore,Ct),t=es(e),r=new Al(e);return Fp(n._query),O0(t,n._query).then((i=>new On(e,r,n,i)))}function jp(n,e,t){n=Ze(n,be);const r=Ze(n.firestore,Ct),i=Tl(n.converter,e,t);return is(r,[ml(ns(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ye.none())])}function Go(n,e,t,...r){n=Ze(n,be);const i=Ze(n.firestore,Ct),s=ns(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof ts?Np(s,"updateDoc",n._key,e,t,r):Dp(s,"updateDoc",n._key,e),is(i,[o.toMutation(n._key,Ye.exists(!0))])}function xl(n){return is(Ze(n.firestore,Ct),[new Lo(n._key,Ye.none())])}function Ko(n,e){const t=Ze(n.firestore,Ct),r=Hn(n),i=Tl(n.converter,e);return is(t,[ml(ns(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ye.exists(!1))]).then((()=>r))}function Vr(n,...e){var t,r,i;n=Se(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||nh(e[o])||(s=e[o++]);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(nh(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,u,f;if(n instanceof be)u=Ze(n.firestore,Ct),f=Po(n._key.path),l={next:p=>{e[o]&&e[o](zp(u,n,p))},error:e[o+1],complete:e[o+2]};else{const p=Ze(n,bn);u=Ze(p.firestore,Ct),f=p._query;const m=new Al(u);l={next:v=>{e[o]&&e[o](new On(u,m,p,v))},error:e[o+1],complete:e[o+2]},Fp(n._query)}return(function(m,v,k,x){const A=new fl(x),N=new ul(v,A,k);return m.asyncQueue.enqueueAndForget((async()=>al(await oo(m),N))),()=>{A.Ou(),m.asyncQueue.enqueueAndForget((async()=>cl(await oo(m),N)))}})(es(u),f,c,l)}function is(n,e){return(function(r,i){const s=new Bt;return r.asyncQueue.enqueueAndForget((async()=>b0(await D0(r),i,s))),s.promise})(es(n),e)}function zp(n,e,t){const r=t.docs.get(e._key),i=new Al(n);return new Nn(n,i,e._key,r,new oi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class W0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ns(e)}set(e,t,r){this._verifyNotCommitted();const i=Fa(e,this._firestore),s=Tl(i.converter,t,r),o=ml(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ye.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Fa(e,this._firestore);let o;return o=typeof(t=Se(t))=="string"||t instanceof ts?Np(this._dataReader,"WriteBatch.update",s._key,t,r,i):Dp(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ye.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Fa(e,this._firestore);return this._mutations=this._mutations.concat(new Lo(t._key,Ye.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fa(n,e){if((n=Se(n)).firestore!==e)throw new F(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function nt(){return new gl("serverTimestamp")}/**
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
 */function qp(n){return es(n=Ze(n,Ct)),new W0(n,(e=>is(n,e)))}(function(e,t=!0){(function(i){Rr=i})(Cr),gr(new Mn("firestore",((r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new Ct(new zv(r.getProvider("auth-internal")),new Wv(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(u.options.projectId,f)})(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),sn(sd,od,e),sn(sd,od,"esm2017")})();function kl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Hp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G0=Hp,Wp=new Gi("auth","Firebase",Hp());/**
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
 */const co=new Mc("@firebase/auth");function K0(n,...e){co.logLevel<=se.WARN&&co.warn(`Auth (${Cr}): ${n}`,...e)}function $s(n,...e){co.logLevel<=se.ERROR&&co.error(`Auth (${Cr}): ${n}`,...e)}/**
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
 */function zt(n,...e){throw Sl(n,...e)}function At(n,...e){return Sl(n,...e)}function Gp(n,e,t){const r=Object.assign(Object.assign({},G0()),{[e]:t});return new Gi("auth","Firebase",r).create(e,{appName:n.name})}function cn(n){return Gp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Wp.create(n,...e)}function X(n,e,...t){if(!n)throw Sl(e,...t)}function Mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $s(e),new Error(e)}function qt(n,e){n||Mt(e)}/**
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
 */function wc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Z0(){return sh()==="http:"||sh()==="https:"}function sh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Y0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z0()||vy()||"connection"in navigator)?navigator.onLine:!0}function X0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,qt(t>e,"Short delay should be less than long delay!"),this.isMobile=my()||_y()}get(){return Y0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cl(n,e){qt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Kp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Q0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const J0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eb=new ss(3e4,6e4);function Zo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Lr(n,e,t,r,i={}){return Zp(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=Ki(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},s);return yy()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Sr(n.emulatorConfig.host)&&(u.credentials="include"),Kp.fetch()(await Xp(n,n.config.apiHost,t,c),u)})}async function Zp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q0),e);try{const i=new tb(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ds(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ds(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ds(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ds(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Gp(n,f,u);zt(n,f)}}catch(i){if(i instanceof Wt)throw i;zt(n,"network-request-failed",{message:String(i)})}}async function Yp(n,e,t,r,i={}){const s=await Lr(n,e,t,r,i);return"mfaPendingCredential"in s&&zt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Xp(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Cl(n.config,i):`${n.config.apiScheme}://${i}`;return J0.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class tb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),eb.get())})}}function Ds(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=At(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function nb(n,e){return Lr(n,"POST","/v1/accounts:delete",e)}async function lo(n,e){return Lr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function yi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rb(n,e=!1){const t=Se(n),r=await t.getIdToken(e),i=Rl(r);X(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yi(Ba(i.auth_time)),issuedAtTime:yi(Ba(i.iat)),expirationTime:yi(Ba(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ba(n){return Number(n)*1e3}function Rl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return $s("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qh(t);return i?JSON.parse(i):($s("Failed to decode base64 JWT payload"),null)}catch(i){return $s("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oh(n){const e=Rl(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Si(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Wt&&ib(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ib({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class sb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uo(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Si(n,lo(t,{idToken:r}));X(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qp(s.providerUserInfo):[],c=ab(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new bc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function ob(n){const e=Se(n);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ab(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qp(n){return n.map(e=>{var{providerId:t}=e,r=kl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cb(n,e){const t=await Zp(n,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await Xp(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Sr(n.emulatorConfig.host)&&(l.credentials="include"),Kp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lb(n,e){return Lr(n,"POST","/v2/accounts:revokeToken",Zo(n,e))}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=oh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await cb(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new fr;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Yt(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Si(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rb(this,e)}reload(){return ob(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await Si(this,nb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,l,u,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,v=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,A=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=t.createdAt)!==null&&u!==void 0?u:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:q,isAnonymous:fe,providerData:ie,stsTokenManager:I}=t;X(B&&I,e,"internal-error");const _=fr.fromJSON(this.name,I);X(typeof B=="string",e,"internal-error"),Yt(p,e.name),Yt(m,e.name),X(typeof q=="boolean",e,"internal-error"),X(typeof fe=="boolean",e,"internal-error"),Yt(v,e.name),Yt(k,e.name),Yt(x,e.name),Yt(A,e.name),Yt(N,e.name),Yt(O,e.name);const w=new mt({uid:B,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:fe,photoURL:k,phoneNumber:v,tenantId:x,stsTokenManager:_,createdAt:N,lastLoginAt:O});return ie&&Array.isArray(ie)&&(w.providerData=ie.map(T=>Object.assign({},T))),A&&(w._redirectEventId=A),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new fr;i.updateFromServerResponse(t);const s=new mt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uo(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new fr;c.updateFromIdToken(r);const l=new mt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const ah=new Map;function Ft(n){qt(n instanceof Function,"Expected a class definition");let e=ah.get(n);return e?(qt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ah.set(n,e),e)}/**
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
 */class Jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jp.type="NONE";const ch=Jp;/**
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
 */function Us(n,e,t){return`firebase:${n}:${e}:${t}`}class pr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Us(this.userKey,i.apiKey,s),this.fullPersistenceKey=Us("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lo(this.auth,{idToken:e}).catch(()=>{});return t?mt._fromGetAccountInfoResponse(this.auth,t,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pr(Ft(ch),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(ch);const o=Us(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await lo(e,{idToken:f}).catch(()=>{});if(!m)break;p=await mt._fromGetAccountInfoResponse(e,m,f)}else p=mt._fromJSON(e,f);u!==s&&(c=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new pr(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new pr(s,e,r))}}/**
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
 */function lh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(em(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sm(e))return"Blackberry";if(om(e))return"Webos";if(tm(e))return"Safari";if((e.includes("chrome/")||nm(e))&&!e.includes("edge/"))return"Chrome";if(im(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function em(n=He()){return/firefox\//i.test(n)}function tm(n=He()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nm(n=He()){return/crios\//i.test(n)}function rm(n=He()){return/iemobile/i.test(n)}function im(n=He()){return/android/i.test(n)}function sm(n=He()){return/blackberry/i.test(n)}function om(n=He()){return/webos/i.test(n)}function Pl(n=He()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ub(n=He()){var e;return Pl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function db(){return wy()&&document.documentMode===10}function am(n=He()){return Pl(n)||im(n)||om(n)||sm(n)||/windows phone/i.test(n)||rm(n)}/**
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
 */function cm(n,e=[]){let t;switch(n){case"Browser":t=lh(He());break;case"Worker":t=`${lh(He())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cr}/${r}`}/**
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
 */class hb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fb(n,e={}){return Lr(n,"GET","/v2/passwordPolicy",Zo(n,e))}/**
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
 */const pb=6;class mb{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:pb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class gb{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uh(this),this.idTokenSubscription=new uh(this),this.beforeStateQueue=new hb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ft(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await pr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lo(this,{idToken:e}),r=await mt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(cn(this));const t=e?Se(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fb(this),t=new mb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await lb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ft(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[Ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&K0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Yo(n){return Se(n)}class uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sy(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yb(n){Dl=n}function vb(n){return Dl.loadJS(n)}function _b(){return Dl.gapiScript}function wb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function bb(n,e){const t=Bc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ln(s,e??{}))return i;zt(i,"already-initialized")}return t.initialize({options:e})}function Eb(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ft);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ib(n,e,t){const r=Yo(n);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lm(e),{host:o,port:c}=Tb(e),l=c===null?"":`:${c}`,u={url:`${s}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Ln(u,r.config.emulator)&&Ln(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Sr(o)?(nf(`${s}//${o}${l}`),rf("Auth",!0)):Ab()}function lm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Tb(n){const e=lm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dh(o)}}}function dh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ab(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class um{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,t){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
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
 */async function mr(n,e){return Yp(n,"POST","/v1/accounts:signInWithIdp",Zo(n,e))}/**
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
 */const xb="http://localhost";class $n extends um{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=kl(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mr(e,t)}buildRequest(){const e={requestUri:xb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ki(t)}return e}}/**
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
 */class dm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class os extends dm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xt extends os{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
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
 */class Qt extends os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $n._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qt.credential(t,r)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
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
 */class Jt extends os{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
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
 */class en extends os{constructor(){super("twitter.com")}static credential(e,t){return $n._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return en.credential(t,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
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
 */async function kb(n,e){return Yp(n,"POST","/v1/accounts:signUp",Zo(n,e))}/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await mt._fromIdTokenResponse(e,r,i),o=hh(r);return new gn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=hh(r);return new gn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function hh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Sb(n){var e;if(pt(n.app))return Promise.reject(cn(n));const t=Yo(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new gn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await kb(t,{returnSecureToken:!0}),i=await gn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class ho extends Wt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ho(e,t,r,i)}}function hm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(n,s,e,r):s})}async function Cb(n,e,t=!1){const r=await Si(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gn._forOperation(n,"link",r)}/**
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
 */async function Rb(n,e,t=!1){const{auth:r}=n;if(pt(r.app))return Promise.reject(cn(r));const i="reauthenticate";try{const s=await Si(n,hm(r,i,e,n),t);X(s.idToken,r,"internal-error");const o=Rl(s.idToken);X(o,r,"internal-error");const{sub:c}=o;return X(n.uid===c,r,"user-mismatch"),gn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
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
 */async function Pb(n,e,t=!1){if(pt(n.app))return Promise.reject(cn(n));const r="signIn",i=await hm(n,r,e),s=await gn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Db(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function Nb(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function Ob(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}const fo="__sak";/**
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
 */class fm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Vb=1e3,Lb=10;class pm extends fm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);db()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lb):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pm.type="LOCAL";const Mb=pm;/**
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
 */class mm extends fm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mm.type="SESSION";const gm=mm;/**
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
 */function Fb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async u=>u(t.origin,s)),l=await Fb(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
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
 */function Nl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Bb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const u=Nl("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(m.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function $b(n){xt().location.href=n}/**
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
 */function ym(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function Ub(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zb(){return ym()?self:null}/**
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
 */const vm="firebaseLocalStorageDb",qb=1,po="firebaseLocalStorage",_m="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qo(n,e){return n.transaction([po],e?"readwrite":"readonly").objectStore(po)}function Hb(){const n=indexedDB.deleteDatabase(vm);return new as(n).toPromise()}function Ec(){const n=indexedDB.open(vm,qb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(po,{keyPath:_m})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(po)?e(r):(r.close(),await Hb(),e(await Ec()))})})}async function fh(n,e,t){const r=Qo(n,!0).put({[_m]:e,value:t});return new as(r).toPromise()}async function Wb(n,e){const t=Qo(n,!1).get(e),r=await new as(t).toPromise();return r===void 0?null:r.value}function ph(n,e){const t=Qo(n,!0).delete(e);return new as(t).toPromise()}const Gb=800,Kb=3;class wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Kb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ym()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(zb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ub(),!this.activeServiceWorker)return;this.sender=new Bb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ec();return await fh(e,fo,"1"),await ph(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Wb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ph(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qo(i,!1).getAll();return new as(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wm.type="LOCAL";const Zb=wm;new ss(3e4,6e4);/**
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
 */function Yb(n,e){return e?Ft(e):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ol extends um{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xb(n){return Pb(n.auth,new Ol(n),n.bypassAuthState)}function Qb(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),Rb(t,new Ol(n),n.bypassAuthState)}async function Jb(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),Cb(t,new Ol(n),n.bypassAuthState)}/**
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
 */class bm{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xb;case"linkViaPopup":case"linkViaRedirect":return Jb;case"reauthViaPopup":case"reauthViaRedirect":return Qb;default:zt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eE=new ss(2e3,1e4);class lr extends bm{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eE.get())};e()}}lr.currentPopupAction=null;/**
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
 */const tE="pendingRedirect",js=new Map;class nE extends bm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=js.get(this.auth._key());if(!e){try{const r=await rE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}js.set(this.auth._key(),e)}return this.bypassAuthState||js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rE(n,e){const t=oE(e),r=sE(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function iE(n,e){js.set(n._key(),e)}function sE(n){return Ft(n._redirectPersistence)}function oE(n){return Us(tE,n.config.apiKey,n.name)}async function aE(n,e,t=!1){if(pt(n.app))return Promise.reject(cn(n));const r=Yo(n),i=Yb(r,e),o=await new nE(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cE=600*1e3;class lE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Em(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(At(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cE&&this.cachedEventUids.clear(),this.cachedEventUids.has(mh(e))}saveEventToCache(e){this.cachedEventUids.add(mh(e)),this.lastProcessedEventTime=Date.now()}}function mh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Em({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Em(n);default:return!1}}/**
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
 */async function dE(n,e={}){return Lr(n,"GET","/v1/projects",e)}/**
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
 */const hE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fE=/^https?/;async function pE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dE(n);for(const t of e)try{if(mE(t))return}catch{}zt(n,"unauthorized-domain")}function mE(n){const e=wc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!fE.test(t))return!1;if(hE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gE=new ss(3e4,6e4);function gh(){const n=xt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yE(n){return new Promise((e,t)=>{var r,i,s;function o(){gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gh(),t(At(n,"network-request-failed"))},timeout:gE.get()})}if(!((i=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xt().gapi)===null||s===void 0)&&s.load)o();else{const c=wb("iframefcb");return xt()[c]=()=>{gapi.load?o():t(At(n,"network-request-failed"))},vb(`${_b()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw zs=null,e})}let zs=null;function vE(n){return zs=zs||yE(n),zs}/**
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
 */const _E=new ss(5e3,15e3),wE="__/auth/iframe",bE="emulator/auth/iframe",EE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TE(n){const e=n.config;X(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cl(e,bE):`https://${n.config.authDomain}/${wE}`,r={apiKey:e.apiKey,appName:n.name,v:Cr},i=IE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ki(r).slice(1)}`}async function AE(n){const e=await vE(n),t=xt().gapi;return X(t,n,"internal-error"),e.open({where:document.body,url:TE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(n,"network-request-failed"),c=xt().setTimeout(()=>{s(o)},_E.get());function l(){xt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const xE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kE=500,SE=600,CE="_blank",RE="http://localhost";class yh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PE(n,e,t,r=kE,i=SE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},xE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();t&&(c=nm(u)?CE:t),em(u)&&(e=e||RE,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,k])=>`${m}${v}=${k},`,"");if(ub(u)&&c!=="_self")return DE(e||"",c),new yh(null);const p=window.open(e||"",c,f);X(p,n,"popup-blocked");try{p.focus()}catch{}return new yh(p)}function DE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const NE="__/auth/handler",OE="emulator/auth/handler",VE=encodeURIComponent("fac");async function vh(n,e,t,r,i,s){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Cr,eventId:i};if(e instanceof dm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ky(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof os){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),u=l?`#${VE}=${encodeURIComponent(l)}`:"";return`${LE(n)}?${Ki(c).slice(1)}${u}`}function LE({config:n}){return n.emulator?Cl(n,OE):`https://${n.authDomain}/${NE}`}/**
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
 */const $a="webStorageSupport";class ME{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gm,this._completeRedirectFn=aE,this._overrideRedirectResult=iE}async _openPopup(e,t,r,i){var s;qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vh(e,t,r,wc(),i);return PE(e,o,Nl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await vh(e,t,r,wc(),i);return $b(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await AE(e),r=new lE(e);return t.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($a,{type:$a},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$a];o!==void 0&&t(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return am()||tm()||Pl()}}const FE=ME;var _h="@firebase/auth",wh="1.10.8";/**
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
 */class BE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $E(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UE(n){gr(new Mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cm(n)},u=new gb(r,i,s,l);return Eb(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gr(new Mn("auth-internal",e=>{const t=Yo(e.getProvider("auth").getImmediate());return(r=>new BE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(_h,wh,$E(n)),sn(_h,wh,"esm2017")}/**
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
 */const jE=300,zE=tf("authIdTokenMaxAge")||jE;let bh=null;const qE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zE)return;const i=t==null?void 0:t.token;bh!==i&&(bh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HE(n=cf()){const e=Bc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bb(n,{popupRedirectResolver:FE,persistence:[Zb,Mb,gm]}),r=tf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=qE(s.toString());Nb(t,o,()=>o(t.currentUser)),Db(t,c=>o(c))}}const i=Jh("auth");return i&&Ib(t,`http://${i}`),t}function WE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}yb({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",WE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UE("Browser");const GE={apiKey:"AIzaSyD03esMvfg48m1NWxj3ASzt_5CoIa5reYk",authDomain:"board-9c96e.firebaseapp.com",projectId:"board-9c96e",storageBucket:"board-9c96e.firebasestorage.app",messagingSenderId:"174092612165",appId:"1:174092612165:web:1ae2584a1f3e00bb24692c",measurementId:"G-4LVEFF5CHM"},Im=af(GE),We=L0(Im),Eh=HE(Im);let he=null;const Ih=["#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6","#8b5cf6","#ec4899"];function Tm(){return Ih[Math.floor(Math.random()*Ih.length)]}function Am(){const n=["Happy","Swift","Bright","Cool","Bold","Calm","Deft","Keen"],e=["Fox","Owl","Bear","Wolf","Hawk","Lion","Deer","Hare"];return`${n[Math.floor(Math.random()*n.length)]} ${e[Math.floor(Math.random()*e.length)]}`}function xm(){return new Promise(n=>{const e=setTimeout(()=>{console.warn("Auth timeout, continuing in offline mode"),he||(he=Th(),n(he))},5e3);Ob(Eh,async t=>{if(clearTimeout(e),t)he={uid:t.uid,name:localStorage.getItem("cb_username")||Am(),color:localStorage.getItem("cb_usercolor")||Tm()},localStorage.setItem("cb_username",he.name),localStorage.setItem("cb_usercolor",he.color),n(he);else try{await Sb(Eh)}catch(r){console.error("Auth error:",r),he=Th(),n(he)}})})}function Th(){const n=localStorage.getItem("cb_username")||Am(),e=localStorage.getItem("cb_usercolor")||Tm();return localStorage.setItem("cb_username",n),localStorage.setItem("cb_usercolor",e),{uid:"offline_"+Date.now(),name:n,color:e}}function Jo(){return he}const km=()=>En(We,"boards"),Vl=n=>Hn(We,"boards",n);async function Sm(n){const e=await Up(Vl(n));return e.exists()?{id:e.id,...e.data()}:null}async function KE(){const n=qo(km(),Ho("updatedAt","desc"));return(await Wo(n)).docs.map(t=>({id:t.id,...t.data()}))}function Cm(n){const e=qo(km(),Ho("updatedAt","desc"));return Vr(e,t=>{const r=t.docs.map(i=>({id:i.id,...i.data()}));n(r)},t=>{console.error("Board list subscription error:",t)})}async function ea(n,e){await Go(Vl(n),{...e,updatedAt:nt()})}async function Rm(n){const e=await Wo(En(We,"boards",n,"elements")),t=qp(We);e.docs.forEach(r=>t.delete(r.ref)),t.delete(Vl(n)),await t.commit()}const Pm=n=>En(We,"boards",n,"elements"),Dm=(n,e)=>Hn(We,"boards",n,"elements",e);async function W(n,e){const t=await Ko(Pm(n),{...e,createdAt:nt(),createdBy:(he==null?void 0:he.uid)||"guest",updatedAt:nt()});return ea(n,{}).catch(()=>{}),t.id}async function ve(n,e,t){await Go(Dm(n,e),{...t,updatedAt:nt()})}async function Ci(n,e){await xl(Dm(n,e))}function Nm(n,e){return console.log("[Firebase] subscribing to elements for board:",n),Vr(Pm(n),t=>{console.log("[Firebase] snapshot received, changes:",t.docChanges().length),t.docChanges().forEach(r=>{var s,o,c;const i={id:r.doc.id,...r.doc.data()};console.log("[Firebase] change:",r.type,i.id,i.type),r.type==="added"&&((s=e.onAdd)==null||s.call(e,i)),r.type==="modified"&&((o=e.onModify)==null||o.call(e,i)),r.type==="removed"&&((c=e.onRemove)==null||c.call(e,i))})},t=>{console.error("[Firebase] Elements subscription ERROR:",t)})}const ZE=n=>En(We,"boards",n,"presence"),Om=(n,e)=>Hn(We,"boards",n,"presence",e);async function Vm(n,e,t){he&&await jp(Om(n,he.uid),{name:he.name,color:he.color,cursorX:e,cursorY:t,lastSeen:nt()},{merge:!0})}async function Ll(n){if(he)try{await xl(Om(n,he.uid))}catch{}}function Lm(n,e){return Vr(ZE(n),t=>{const r={};t.docs.forEach(i=>{i.id!==(he==null?void 0:he.uid)&&(r[i.id]={id:i.id,...i.data()})}),e(r)})}function YE(n,e=1024,t=.8){return new Promise(r=>{const i=new FileReader;i.onload=s=>{const o=new Image;o.onload=()=>{const c=document.createElement("canvas");let l=o.width,u=o.height;if(l>e||u>e){const v=Math.min(e/l,e/u);l*=v,u*=v}c.width=l,c.height=u;const f=c.getContext("2d");f.clearRect(0,0,l,u),f.drawImage(o,0,0,l,u);let p="image/webp";n.type==="image/png"&&(p="image/png");let m=c.toDataURL(p,t);m.length>1e6&&(m=c.toDataURL(p,.5)),r(m)},o.src=s.target.result},i.readAsDataURL(n)})}async function Ml(n,e,t=null){const r=Jo();return(await Ko(En(We,"boards"),{name:n,emoji:e,templateId:t,ownerId:(r==null?void 0:r.uid)||"guest",ownerName:(r==null?void 0:r.name)||"Guest User",createdAt:nt(),updatedAt:nt(),collaborators:[]})).id}async function Er(n,e){return{url:await YE(n),path:null}}async function XE(n){}const Fl=()=>En(We,"editorProjects"),Bl=n=>Hn(We,"editorProjects",n),$l=n=>En(We,"editorProjects",n,"elements"),Mm=(n,e)=>Hn(We,"editorProjects",n,"elements",e);async function QE(n,e=null){const t=Jo();return(await Ko(Fl(),{name:n,thumbnail:e,ownerId:(t==null?void 0:t.uid)||"guest",ownerName:(t==null?void 0:t.name)||"Guest User",createdAt:nt(),updatedAt:nt(),background:"#ffffff",width:1080,height:1080})).id}async function JE(){const n=qo(Fl(),Ho("updatedAt","desc"));return(await Wo(n)).docs.map(t=>({id:t.id,...t.data()}))}function eI(n){const e=qo(Fl(),Ho("updatedAt","desc"));return Vr(e,t=>{n(t.docs.map(r=>({id:r.id,...r.data()})))})}async function Fm(n){const e=await Up(Bl(n));return e.exists()?{id:e.id,...e.data()}:null}async function ta(n,e){await Go(Bl(n),{...e,updatedAt:nt()})}async function tI(n){const e=await Wo($l(n)),t=qp(We);e.docs.forEach(r=>t.delete(r.ref)),t.delete(Bl(n)),await t.commit()}async function Ir(n,e){const t=await Ko($l(n),{...e,createdAt:nt(),updatedAt:nt()});return ta(n,{}).catch(()=>{}),t.id}async function na(n,e,t){await Go(Mm(n,e),{...t,updatedAt:nt()})}async function ra(n,e){await xl(Mm(n,e))}function Bm(n,e){return Vr($l(n),t=>{t.docChanges().forEach(r=>{var s,o,c;const i={id:r.doc.id,...r.doc.data()};r.type==="added"&&((s=e.onAdd)==null||s.call(e,i)),r.type==="modified"&&((o=e.onModify)==null||o.call(e,i)),r.type==="removed"&&((c=e.onRemove)==null||c.call(e,i))})})}async function nI(n,e){he&&await jp(Hn(We,"editorProjects",n,"presence",he.uid),{...e,name:he.name,color:he.color,lastSeen:nt()},{merge:!0})}function rI(n,e){return Vr(En(We,"editorProjects",n,"presence"),t=>{const r={};t.docs.forEach(i=>{i.id!==(he==null?void 0:he.uid)&&(r[i.id]={id:i.id,...i.data()})}),e(r)})}const $m=Object.freeze(Object.defineProperty({__proto__:null,addEditorElement:Ir,addElement:W,createBoard:Ml,createEditorProject:QE,deleteBoard:Rm,deleteEditorElement:ra,deleteEditorProject:tI,deleteElement:Ci,deleteFile:XE,getBoard:Sm,getCurrentUser:Jo,getEditorProject:Fm,initAuth:xm,listBoards:KE,listEditorProjects:JE,removePresence:Ll,subscribeBoardList:Cm,subscribeEditorElements:Bm,subscribeEditorPresence:rI,subscribeEditorProjects:eI,subscribeElements:Nm,subscribePresence:Lm,updateBoard:ea,updateEditorElement:na,updateEditorPresence:nI,updateEditorProject:ta,updateElement:ve,updatePresence:Vm,uploadFile:Er},Symbol.toStringTag,{value:"Module"})),iI="modulepreload",sI=function(n,e){return new URL(n,e).href},Ah={},mo=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let o=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=o(t.map(f=>{if(f=sI(f,r),f in Ah)return;Ah[f]=!0;const p=f.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let x=c.length-1;x>=0;x--){const A=c[x];if(A.href===f&&(!p||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${m}`))return;const k=document.createElement("link");if(k.rel=p?"stylesheet":iI,p||(k.as="script"),k.crossOrigin="",k.href=f,u&&k.setAttribute("nonce",u),document.head.appendChild(k),p)return new Promise((x,A)=>{k.addEventListener("load",x),k.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};let qs=null,Ri=[],Um=[],st="boards";const xh=["📋","📌","🎨","🖼️","📦","🚀","💡","🎯","📝","⭐","🔥","💎","🌟","📸","🎬","✨"];function jm(n){if(!n)return"";const e=n.toDate?n.toDate():new Date(n),r=Math.floor((new Date-e)/1e3);return r<60?"Just now":r<3600?`${Math.floor(r/60)}m ago`:r<86400?`${Math.floor(r/3600)}h ago`:r<2592e3?`${Math.floor(r/86400)}d ago`:e.toLocaleDateString()}function kh(n,e="info"){const t=document.getElementById("toast-container");if(!t){alert(n);return}const r=document.createElement("div");r.className=`toast ${e}`,r.textContent=n,t.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),300)},3e3)}async function oI(n){let e="Transformation Journal",t="🔄";n==="pro_food"?(e="Gourmet Food Shots",t="🍔"):n==="redesign_room"?(e="Interior Design Board",t="🏠"):n==="instagram_pro"&&(e="Instagram Content Strategist",t="📸"),kh("Creating board from template...");try{const r=await Ml(e,t,n);window.location.hash=`#/board/${r}?template=${n}`}catch(r){console.error("Template create error:",r),kh("Failed to create board.","error")}}const zm=[{id:"before_after",title:"Before & After Transformations",type:"Marketing Portfolio",desc:"Create compelling comparisons from a single image. Restorations, renovations, and cleanups.",imgs:["./templates/car_after.png","./templates/car_before.png","./templates/desk_after.png"]},{id:"pro_food",title:"Make it Professional: Food",type:"E-Commerce Branding",desc:"Turn messy food shots into studio-quality marketing assets. Expert lighting and plating.",imgs:["./templates/pro_burger.png","./templates/messy_burger.png","./templates/car_after.png"]},{id:"redesign_room",title:"Redesign Any Room",type:"Interior Design",desc:"Upload a space and explore new styles instantly. From Minimalist to Cyberpunk.",imgs:["./templates/desk_after.png","./templates/desk_before.png","./templates/car_before.png"]},{id:"instagram_pro",title:"Instagram Content Strategist",type:"Social Media Growth",desc:"Audit your grid, refine your hooks, and get actionable advice to 10x your engagement.",imgs:["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80","https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&q=80","https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80"]}];function aI(){const n=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",n)}function cI(){const e=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),qm()}function qm(){const n=document.getElementById("theme-toggle-icon");if(!n)return;const e=document.documentElement.getAttribute("data-theme")||"light";n.innerHTML=e==="light"?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'}function lI(){var t,r;const n=Jo();return`
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
        <button class="sidebar-item ${st==="boards"?"active":""}" id="nav-boards">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          Boards
        </button>
        <button class="sidebar-item ${st==="discover"?"active":""}" id="nav-discover">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          Discover
        </button>
        <button class="sidebar-item ${st==="edit"?"active":""}" id="nav-edit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit
        </button>
      </div>
    </aside>
  `}function uI(n){return`
    <div class="board-card" data-board-id="${n.id}">
      <div class="board-card-thumbnail">
        ${n.thumbnail?`<img src="${n.thumbnail}" alt="${n.name}">`:`<span style="font-size:36px;opacity:0.3">${n.emoji||"📋"}</span>`}
      </div>
      <div class="board-card-info">
        <div class="board-card-name">${n.emoji||""} ${n.name}</div>
        <div class="board-card-date">${jm(n.updatedAt)}</div>
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
  `}function Sh(){return`
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
  `}function Ch(){return`
    <div class="dashboard-header" style="text-align:left;padding-bottom:16px;">
      <h1 class="dashboard-title">Visual Discovery</h1>
      <p style="color:var(--text-secondary);margin-top:4px;">Elevate your projects with professional starter kits.</p>
    </div>
    <div class="board-section">
      <div class="discover-grid" id="discover-grid">
        ${zm.map(n=>`
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
  `}function Ua(){return`
    <div class="dashboard-header" style="text-align:left;padding-bottom:16px;">
      <h1 class="dashboard-title">Professional Editor</h1>
      <p style="color:var(--text-secondary);margin-top:4px;">Create 1080x1080 professional content with ease.</p>
    </div>
    <div class="board-section">
      <div class="board-grid" id="edit-grid">
        <div class="create-card" id="create-edit-btn">
          <div class="create-card-icon">+</div>
          <span class="create-card-label">New Edit</span>
        </div>
        ${Um.map(n=>`
          <div class="board-card" data-proj-id="${n.id}">
            <div class="board-card-thumbnail">
              ${n.thumbnail?`<img src="${n.thumbnail}" alt="${n.name}">`:'<div style="font-size:36px;opacity:0.3;display:flex;align-items:center;justify-content:center;height:100%;background:rgba(0,0,0,0.05)">✨</div>'}
            </div>
            <div class="board-card-info">
              <div class="board-card-name">${n.name}</div>
              <div class="board-card-date">${n.updatedAt?jm(n.updatedAt):"Just now"}</div>
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
  `,document.body.appendChild(e);const t=document.getElementById("board-name-input");t.focus();const r=()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)};document.getElementById("modal-cancel").addEventListener("click",r),e.addEventListener("click",s=>{s.target===e&&r()});const i=async()=>{const s=t.value.trim();if(s)try{const o=await Ml(s,n);r(),window.location.hash=`#/board/${o}`}catch{alert("Failed to create board. Check Firebase setup.")}};document.getElementById("modal-create").addEventListener("click",i),t.addEventListener("keydown",s=>{s.key==="Enter"&&i()})}function dI(n,e){const t=document.createElement("div");t.className="modal-overlay",t.innerHTML=`
    <div class="modal">
      <h2 class="modal-title">Rename Board</h2>
      <input type="text" class="modal-input" id="rename-input" value="${e}" autofocus>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary" id="rename-cancel">Cancel</button>
        <button class="modal-btn modal-btn-primary" id="rename-save">Save</button>
      </div>
    </div>
  `,document.body.appendChild(t);const r=document.getElementById("rename-input");r.focus(),r.select();const i=()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)};document.getElementById("rename-cancel").addEventListener("click",i),t.addEventListener("click",o=>{o.target===t&&i()});const s=async()=>{const o=r.value.trim();o&&(await ea(n,{name:o}),i())};document.getElementById("rename-save").addEventListener("click",s),r.addEventListener("keydown",o=>{o.key==="Enter"&&s()})}function Ic(n){var t;const e=document.getElementById("board-grid");e&&(e.innerHTML=`
    <div class="create-card" id="create-board-btn">
      <div class="create-card-icon">+</div>
      <span class="create-card-label">New Board</span>
    </div>
  `+(n||Ri).map(uI).join(""),(t=document.getElementById("create-board-btn"))==null||t.addEventListener("click",Hm),document.querySelectorAll(".board-card").forEach(r=>{r.addEventListener("click",i=>{i.target.closest(".board-card-action")||(window.location.hash=`#/board/${r.dataset.boardId}`)})}),document.querySelectorAll(".board-card-action").forEach(r=>{r.addEventListener("click",async i=>{i.stopPropagation();const s=r.dataset.boardId,o=r.dataset.action,c=Ri.find(l=>l.id===s);o==="delete"?confirm(`Delete "${c==null?void 0:c.name}"? This cannot be undone.`)&&await Rm(s):o==="rename"&&dI(s,(c==null?void 0:c.name)||"")})}))}function ja(){var n;(n=document.getElementById("create-edit-btn"))==null||n.addEventListener("click",hI),document.querySelectorAll("#edit-grid .board-card").forEach(e=>{e.addEventListener("click",()=>{window.location.hash=`#/edit/${e.dataset.projId}`})})}function hI(){const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
    <div class="modal">
      <h2 class="modal-title">New Edit Project</h2>
      <input type="text" class="modal-input" id="edit-name-input" placeholder="Project name..." autofocus>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-secondary" id="edit-modal-cancel">Cancel</button>
        <button class="modal-btn modal-btn-primary" id="edit-modal-create">Create</button>
      </div>
    </div>
  `,document.body.appendChild(n);const e=document.getElementById("edit-name-input");e.focus();const t=()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)};document.getElementById("edit-modal-cancel").addEventListener("click",t);const r=async()=>{const i=e.value.trim();if(i)try{const{createEditorProject:s}=await mo(async()=>{const{createEditorProject:c}=await Promise.resolve().then(()=>$m);return{createEditorProject:c}},void 0,import.meta.url),o=await s(i);t(),window.location.hash=`#/edit/${o}`}catch{alert("Failed to create edit project.")}};document.getElementById("edit-modal-create").addEventListener("click",r),e.addEventListener("keydown",i=>{i.key==="Enter"&&r()})}function Rh(){var n;(n=document.getElementById("board-search-input"))==null||n.addEventListener("input",e=>{const t=e.target.value.toLowerCase().trim();Ic(t?Ri.filter(r=>r.name.toLowerCase().includes(t)):Ri)}),Ic()}function Ph(){zm.forEach(n=>{const e=document.getElementById(`tpl-${n.id}`);e&&e.addEventListener("click",()=>oI(n.id))})}function fI(n){var i,s,o,c;n.innerHTML=`
    <div class="dashboard">
      ${lI()}
      <div class="main-content">
        ${st==="boards"?Sh():st==="discover"?Ch():Ua()}
      </div>
    </div>
  `;const e=()=>{var l;document.querySelectorAll(".sidebar-item").forEach(u=>u.classList.remove("active")),(l=document.getElementById(`nav-${st}`))==null||l.classList.add("active")},t=l=>{if(l===st)return;st=l,e();const u=document.querySelector(".main-content");u&&(l==="boards"?u.innerHTML=Sh():l==="discover"?u.innerHTML=Ch():l==="edit"&&(u.innerHTML=Ua()),l==="boards"?Rh():l==="discover"?Ph():l==="edit"&&ja())};(i=document.getElementById("nav-boards"))==null||i.addEventListener("click",()=>t("boards")),(s=document.getElementById("nav-discover"))==null||s.addEventListener("click",()=>t("discover")),(o=document.getElementById("nav-edit"))==null||o.addEventListener("click",()=>t("edit")),aI(),qm(),(c=document.getElementById("theme-toggle-btn"))==null||c.addEventListener("click",cI);const r=l=>{l.key==="n"&&(l.ctrlKey||l.metaKey)&&(l.preventDefault(),Hm())};document.addEventListener("keydown",r),n._keyHandler=r;try{qs=Cm(l=>{Ri=l,st==="boards"&&Ic()})}catch{}try{mo(async()=>{const{subscribeEditorProjects:l}=await Promise.resolve().then(()=>$m);return{subscribeEditorProjects:l}},void 0,import.meta.url).then(({subscribeEditorProjects:l})=>{const u=l(f=>{if(Um=f,st==="edit"){const p=document.querySelector(".main-content");p&&(p.innerHTML=Ua()),ja()}});n._unsubEdit=u})}catch{}st==="boards"?Rh():st==="discover"?Ph():st==="edit"&&ja(),e()}function pI(){qs&&(qs(),qs=null);const n=document.getElementById("app");n!=null&&n._unsubEdit&&(n._unsubEdit(),n._unsubEdit=null),n!=null&&n._keyHandler&&document.removeEventListener("keydown",n._keyHandler)}var mI=Object.create,Wm=Object.defineProperty,gI=Object.getOwnPropertyDescriptor,Gm=Object.getOwnPropertyNames,yI=Object.getPrototypeOf,vI=Object.prototype.hasOwnProperty,Ul=(n,e)=>function(){return e||(0,n[Gm(n)[0]])((e={exports:{}}).exports,e),e.exports},_I=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Gm(e))!vI.call(n,i)&&i!==t&&Wm(n,i,{get:()=>e[i],enumerable:!(r=gI(e,i))||r.enumerable});return n},ia=(n,e,t)=>(t=n!=null?mI(yI(n)):{},_I(!n||!n.__esModule?Wm(t,"default",{value:n,enumerable:!0}):t,n)),wI=Ul({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(n,e){function t(r){for(var i=new Array(r),s=0;s<r;++s)i[s]=s;return i}e.exports=t}}),bI=Ul({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(n,e){e.exports=function(i){return i!=null&&(t(i)||r(i)||!!i._isBuffer)};function t(i){return!!i.constructor&&typeof i.constructor.isBuffer=="function"&&i.constructor.isBuffer(i)}function r(i){return typeof i.readFloatLE=="function"&&typeof i.slice=="function"&&t(i.slice(0,0))}}}),sa=Ul({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(n,e){var t=wI(),r=bI(),i=typeof Float64Array<"u";function s(p,m){return p[0]-m[0]}function o(){var p=this.stride,m=new Array(p.length),v;for(v=0;v<m.length;++v)m[v]=[Math.abs(p[v]),v];m.sort(s);var k=new Array(m.length);for(v=0;v<k.length;++v)k[v]=m[v][1];return k}function c(p,m){var v=["View",m,"d",p].join("");m<0&&(v="View_Nil"+p);var k=p==="generic";if(m===-1){var x="function "+v+"(a){this.data=a;};var proto="+v+".prototype;proto.dtype='"+p+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+v+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+v+"(a){return new "+v+"(a);}",T=new Function(x);return T()}else if(m===0){var x="function "+v+"(a,d) {this.data = a;this.offset = d};var proto="+v+".prototype;proto.dtype='"+p+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+v+"_copy() {return new "+v+"(this.data,this.offset)};proto.pick=function "+v+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+v+"_get(){return "+(k?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+v+"_set(v){return "+(k?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+v+"(a,b,c,d){return new "+v+"(a,d)}",T=new Function("TrivialArray",x);return T(u[p][0])}var x=["'use strict'"],A=t(m),N=A.map(function(b){return"i"+b}),O="this.offset+"+A.map(function(b){return"this.stride["+b+"]*i"+b}).join("+"),B=A.map(function(b){return"b"+b}).join(","),q=A.map(function(b){return"c"+b}).join(",");x.push("function "+v+"(a,"+B+","+q+",d){this.data=a","this.shape=["+B+"]","this.stride=["+q+"]","this.offset=d|0}","var proto="+v+".prototype","proto.dtype='"+p+"'","proto.dimension="+m),x.push("Object.defineProperty(proto,'size',{get:function "+v+"_size(){return "+A.map(function(b){return"this.shape["+b+"]"}).join("*"),"}})"),m===1?x.push("proto.order=[0]"):(x.push("Object.defineProperty(proto,'order',{get:"),m<4?(x.push("function "+v+"_order(){"),m===2?x.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):m===3&&x.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):x.push("ORDER})")),x.push("proto.set=function "+v+"_set("+N.join(",")+",v){"),k?x.push("return this.data.set("+O+",v)}"):x.push("return this.data["+O+"]=v}"),x.push("proto.get=function "+v+"_get("+N.join(",")+"){"),k?x.push("return this.data.get("+O+")}"):x.push("return this.data["+O+"]}"),x.push("proto.index=function "+v+"_index(",N.join(),"){return "+O+"}"),x.push("proto.hi=function "+v+"_hi("+N.join(",")+"){return new "+v+"(this.data,"+A.map(function(b){return["(typeof i",b,"!=='number'||i",b,"<0)?this.shape[",b,"]:i",b,"|0"].join("")}).join(",")+","+A.map(function(b){return"this.stride["+b+"]"}).join(",")+",this.offset)}");var fe=A.map(function(b){return"a"+b+"=this.shape["+b+"]"}),ie=A.map(function(b){return"c"+b+"=this.stride["+b+"]"});x.push("proto.lo=function "+v+"_lo("+N.join(",")+"){var b=this.offset,d=0,"+fe.join(",")+","+ie.join(","));for(var I=0;I<m;++I)x.push("if(typeof i"+I+"==='number'&&i"+I+">=0){d=i"+I+"|0;b+=c"+I+"*d;a"+I+"-=d}");x.push("return new "+v+"(this.data,"+A.map(function(b){return"a"+b}).join(",")+","+A.map(function(b){return"c"+b}).join(",")+",b)}"),x.push("proto.step=function "+v+"_step("+N.join(",")+"){var "+A.map(function(b){return"a"+b+"=this.shape["+b+"]"}).join(",")+","+A.map(function(b){return"b"+b+"=this.stride["+b+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var I=0;I<m;++I)x.push("if(typeof i"+I+"==='number'){d=i"+I+"|0;if(d<0){c+=b"+I+"*(a"+I+"-1);a"+I+"=ceil(-a"+I+"/d)}else{a"+I+"=ceil(a"+I+"/d)}b"+I+"*=d}");x.push("return new "+v+"(this.data,"+A.map(function(b){return"a"+b}).join(",")+","+A.map(function(b){return"b"+b}).join(",")+",c)}");for(var _=new Array(m),w=new Array(m),I=0;I<m;++I)_[I]="a[i"+I+"]",w[I]="b[i"+I+"]";x.push("proto.transpose=function "+v+"_transpose("+N+"){"+N.map(function(b,S){return b+"=("+b+"===undefined?"+S+":"+b+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+v+"(this.data,"+_.join(",")+","+w.join(",")+",this.offset)}"),x.push("proto.pick=function "+v+"_pick("+N+"){var a=[],b=[],c=this.offset");for(var I=0;I<m;++I)x.push("if(typeof i"+I+"==='number'&&i"+I+">=0){c=(c+this.stride["+I+"]*i"+I+")|0}else{a.push(this.shape["+I+"]);b.push(this.stride["+I+"])}");x.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),x.push("return function construct_"+v+"(data,shape,stride,offset){return new "+v+"(data,"+A.map(function(b){return"shape["+b+"]"}).join(",")+","+A.map(function(b){return"stride["+b+"]"}).join(",")+",offset)}");var T=new Function("CTOR_LIST","ORDER",x.join(`
`));return T(u[p],o)}function l(p){if(r(p))return"buffer";if(i)switch(Object.prototype.toString.call(p)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(p)?"array":"generic"}var u={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function f(p,m,v,k){if(p===void 0){var q=u.array[0];return q([])}else typeof p=="number"&&(p=[p]);m===void 0&&(m=[p.length]);var x=m.length;if(v===void 0){v=new Array(x);for(var A=x-1,N=1;A>=0;--A)v[A]=N,N*=m[A]}if(k===void 0){k=0;for(var A=0;A<x;++A)v[A]<0&&(k-=(m[A]-1)*v[A])}for(var O=l(p),B=u[O];B.length<=x+1;)B.push(c(O,B.length-1));var q=B[x+1];return q(p,m,v,k)}e.exports=f}}),EI=typeof global=="object"&&global&&global.Object===Object&&global,II=EI,TI=typeof self=="object"&&self&&self.Object===Object&&self,AI=II||TI||Function("return this")(),jl=AI,xI=jl.Symbol,go=xI,Km=Object.prototype,kI=Km.hasOwnProperty,SI=Km.toString,ti=go?go.toStringTag:void 0;function CI(n){var e=kI.call(n,ti),t=n[ti];try{n[ti]=void 0;var r=!0}catch{}var i=SI.call(n);return r&&(e?n[ti]=t:delete n[ti]),i}var RI=CI,PI=Object.prototype,DI=PI.toString;function NI(n){return DI.call(n)}var OI=NI,VI="[object Null]",LI="[object Undefined]",Dh=go?go.toStringTag:void 0;function MI(n){return n==null?n===void 0?LI:VI:Dh&&Dh in Object(n)?RI(n):OI(n)}var FI=MI;function BI(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Zm=BI,$I="[object AsyncFunction]",UI="[object Function]",jI="[object GeneratorFunction]",zI="[object Proxy]";function qI(n){if(!Zm(n))return!1;var e=FI(n);return e==UI||e==jI||e==$I||e==zI}var HI=qI,WI=jl["__core-js_shared__"],za=WI,Nh=(function(){var n=/[^.]+$/.exec(za&&za.keys&&za.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})();function GI(n){return!!Nh&&Nh in n}var KI=GI,ZI=Function.prototype,YI=ZI.toString;function XI(n){if(n!=null){try{return YI.call(n)}catch{}try{return n+""}catch{}}return""}var QI=XI,JI=/[\\^$.*+?()[\]{}|]/g,eT=/^\[object .+?Constructor\]$/,tT=Function.prototype,nT=Object.prototype,rT=tT.toString,iT=nT.hasOwnProperty,sT=RegExp("^"+rT.call(iT).replace(JI,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function oT(n){if(!Zm(n)||KI(n))return!1;var e=HI(n)?sT:eT;return e.test(QI(n))}var aT=oT;function cT(n,e){return n==null?void 0:n[e]}var lT=cT;function uT(n,e){var t=lT(n,e);return aT(t)?t:void 0}var Ym=uT,dT=Ym(Object,"create"),Pi=dT;function hT(){this.__data__=Pi?Pi(null):{},this.size=0}var fT=hT;function pT(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var mT=pT,gT="__lodash_hash_undefined__",yT=Object.prototype,vT=yT.hasOwnProperty;function _T(n){var e=this.__data__;if(Pi){var t=e[n];return t===gT?void 0:t}return vT.call(e,n)?e[n]:void 0}var wT=_T,bT=Object.prototype,ET=bT.hasOwnProperty;function IT(n){var e=this.__data__;return Pi?e[n]!==void 0:ET.call(e,n)}var TT=IT,AT="__lodash_hash_undefined__";function xT(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Pi&&e===void 0?AT:e,this}var kT=xT;function Mr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Mr.prototype.clear=fT;Mr.prototype.delete=mT;Mr.prototype.get=wT;Mr.prototype.has=TT;Mr.prototype.set=kT;var Oh=Mr;function ST(){this.__data__=[],this.size=0}var CT=ST;function RT(n,e){return n===e||n!==n&&e!==e}var PT=RT;function DT(n,e){for(var t=n.length;t--;)if(PT(n[t][0],e))return t;return-1}var oa=DT,NT=Array.prototype,OT=NT.splice;function VT(n){var e=this.__data__,t=oa(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():OT.call(e,t,1),--this.size,!0}var LT=VT;function MT(n){var e=this.__data__,t=oa(e,n);return t<0?void 0:e[t][1]}var FT=MT;function BT(n){return oa(this.__data__,n)>-1}var $T=BT;function UT(n,e){var t=this.__data__,r=oa(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}var jT=UT;function Fr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Fr.prototype.clear=CT;Fr.prototype.delete=LT;Fr.prototype.get=FT;Fr.prototype.has=$T;Fr.prototype.set=jT;var zT=Fr,qT=Ym(jl,"Map"),HT=qT;function WT(){this.size=0,this.__data__={hash:new Oh,map:new(HT||zT),string:new Oh}}var GT=WT;function KT(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}var ZT=KT;function YT(n,e){var t=n.__data__;return ZT(e)?t[typeof e=="string"?"string":"hash"]:t.map}var aa=YT;function XT(n){var e=aa(this,n).delete(n);return this.size-=e?1:0,e}var QT=XT;function JT(n){return aa(this,n).get(n)}var e1=JT;function t1(n){return aa(this,n).has(n)}var n1=t1;function r1(n,e){var t=aa(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}var i1=r1;function Br(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Br.prototype.clear=GT;Br.prototype.delete=QT;Br.prototype.get=e1;Br.prototype.has=n1;Br.prototype.set=i1;var Xm=Br,s1="Expected a function";function zl(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(s1);var t=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=t.cache;if(s.has(i))return s.get(i);var o=n.apply(this,r);return t.cache=s.set(i,o)||s,o};return t.cache=new(zl.Cache||Xm),t}zl.Cache=Xm;var o1=zl,ql=ia(sa()),Qm=class Tc{constructor(e,t){this.type="application/octet-stream",this.params={},this.type=e,this.params=t}toString(){const e=[];for(const t in this.params){const r=this.params[t];e.push(`${t}=${r}`)}return[this.type,...e].join(";")}static create(e,t){return new Tc(e,t)}isIdentical(e){return this.type===e.type&&this.params===e.params}isEqual(e){return this.type===e.type}static fromString(e){const[t,...r]=e.split(";"),i={};for(const s of r){const[o,c]=s.split("=");i[o.trim()]=c.trim()}return new Tc(t,i)}},qa=ia(sa());async function a1(n){const e=Qm.fromString(n.type);switch(e.type){case"image/x-alpha8":{const t=parseInt(e.params.width),r=parseInt(e.params.height);return(0,qa.default)(new Uint8Array(await n.arrayBuffer()),[r,t,1])}case"image/x-rgba8":{const t=parseInt(e.params.width),r=parseInt(e.params.height);return(0,qa.default)(new Uint8Array(await n.arrayBuffer()),[r,t,4])}case"application/octet-stream":case"image/png":case"image/jpeg":case"image/jpg":case"image/webp":{const t=await createImageBitmap(n),r=d1(t);return(0,qa.default)(new Uint8Array(r.data),[r.height,r.width,4])}default:throw new Error(`Invalid format: ${e.type} with params: ${e.params}`)}}async function c1(n,e=.8,t="image/png"){const[r,i,s]=n.shape;switch(t){case"image/x-alpha8":case"image/x-rgba8":{const l=Qm.create(t,{width:i.toString(),height:r.toString()});return new Blob([n.data],{type:l.toString()})}case"image/png":case"image/jpeg":case"image/webp":{const l=new ImageData(new Uint8ClampedArray(n.data),i,r);var o=Jm(l.width,l.height),c=o.getContext("2d");return c.putImageData(l,0,0),o.convertToBlob({quality:e,type:t})}default:throw new Error(`Invalid format: ${t}`)}}function l1(n){return new RegExp("^(?:[a-z+]+:)?//","i").test(n)}function u1(n,e){return l1(n)?n:new URL(n,e).href}function d1(n){var e=Jm(n.width,n.height),t=e.getContext("2d");return t.drawImage(n,0,0),t.getImageData(0,0,e.width,e.height)}function h1(n){if(typeof Uint8Array<"u")return new Uint8Array(n);if(typeof Uint8ClampedArray<"u")return new Uint8ClampedArray(n);if(typeof Uint16Array<"u")return new Uint16Array(n);if(typeof Uint32Array<"u")return new Uint32Array(n);if(typeof Float32Array<"u")return new Float32Array(n);if(typeof Float64Array<"u")return new Float64Array(n);throw new Error("TypedArray not supported")}function Vh(n,e,t,r=!1){const[i,s,o]=n.shape;let c=s/e,l=i/t;r&&(c=l=Math.max(c,l)>1?Math.max(c,l):Math.min(c,l));const u=(0,ql.default)(h1(o*e*t),[t,e,o]);for(let f=0;f<t;f++)for(let p=0;p<e;p++){const m=p*c,v=f*l,k=Math.max(Math.floor(m),0),x=Math.min(Math.ceil(m),s-1),A=Math.max(Math.floor(v),0),N=Math.min(Math.ceil(v),i-1),O=m-k,B=v-A;for(let q=0;q<o;q++){const fe=n.get(A,k,q),ie=n.get(A,x,q),I=n.get(N,k,q),_=n.get(N,x,q),w=(1-O)*(1-B)*fe+O*(1-B)*ie+(1-O)*B*I+O*B*_;u.set(f,p,q,w)}}return u}function f1(n,e=[128,128,128],t=[256,256,256]){var r=n.data;const[i,s,o]=n.shape,c=i*s,l=new Float32Array(3*c);for(let u=0,f=0;u<r.length;u+=4,f+=1)l[f]=(r[u]-e[0])/t[0],l[f+c]=(r[u+1]-e[1])/t[1],l[f+c+c]=(r[u+2]-e[2])/t[2];return(0,ql.default)(l,[1,3,i,s])}async function p1(n,e){return typeof n=="string"&&(n=u1(n,e.publicPath),n=new URL(n)),n instanceof URL&&(n=await(await fetch(n,{})).blob()),(n instanceof ArrayBuffer||ArrayBuffer.isView(n))&&(n=new Blob([n])),n instanceof Blob&&(n=await a1(n)),n}function m1(n){const e=new Uint8Array(n.data.length);for(let t=0;t<n.data.length;t++)e[t]=n.data[t]*255;return(0,ql.default)(e,n.shape)}function Jm(n,e){let t;if(typeof OffscreenCanvas<"u"?t=new OffscreenCanvas(n,e):t=document.createElement("canvas"),!t)throw new Error("Canvas nor OffscreenCanvas are available in the current context.");return t}var g1=ia(sa()),eg=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,y1=()=>navigator.hardwareConcurrency??4;async function Lh(n,e){return URL.createObjectURL(await tg(n,e))}async function tg(n,e){const t=new URL("resources.json",e.publicPath),r=await fetch(t);if(!r.ok)throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");const s=(await r.json())[n];if(!s)throw new Error(`Resource ${n} not found. Ensure that the config.publicPath is configured correctly.`);const o=s.chunks;let c=0;const l=o.map(async p=>{const m=p.offsets[1]-p.offsets[0],v=e.publicPath?new URL(p.name,e.publicPath).toString():p.name,x=await(await fetch(v,e.fetchArgs)).blob();if(m!==x.size)throw new Error(`Failed to fetch ${n} with size ${m} but got ${x.size}`);return e.progress&&(c+=m,e.progress(`fetch:${n}`,c,s.size)),x}),u=await Promise.all(l),f=new Blob(u,{type:s.mime});if(f.size!==s.size)throw new Error(`Failed to fetch ${n} with size ${s.size} but got ${f.size}`);return f}var ni=null,ng=async n=>(ni!==null||(n?ni=(await mo(async()=>{const{default:e}=await import("./ort.webgpu.bundle.min-D0yNlx_N.js");return{default:e}},[],import.meta.url)).default:ni=(await mo(async()=>{const{default:e}=await import("./ort.bundle.min-Cf_a8C4E.js");return{default:e}},[],import.meta.url)).default),ni);async function v1(n,e){const t=e.device==="gpu"&&await eg(),r=t&&e.proxyToWorker,i=[t?"webgpu":"wasm"],s=await ng(t);e.debug&&(console.debug("	Using WebGPU:",t),console.debug("	Proxy to Worker:",r),s.env.debug=!0,s.env.logLevel="verbose"),s.env.wasm.numThreads=y1(),s.env.wasm.proxy=r;const o=t?"/onnxruntime-web/ort-wasm-simd-threaded.jsep":"/onnxruntime-web/ort-wasm-simd-threaded",c=await Lh(`${o}.wasm`,e),l=await Lh(`${o}.mjs`,e);s.env.wasm.wasmPaths={mjs:l,wasm:c},e.debug&&console.debug("ort.env.wasm:",s.env.wasm);const u={executionProviders:i,graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0};return await s.InferenceSession.create(n,u).catch(p=>{throw new Error(`Failed to create session: "${p}". Please check if the publicPath is set correctly.`)})}async function _1(n,e,t,r){const i=r.device==="gpu"&&await eg(),s=await ng(i),o={};for(const[u,f]of e)o[u]=new s.Tensor("float32",new Float32Array(f.data),f.shape);const c=await n.run(o,{}),l=[];for(const u of t){const f=c[u],p=f.dims,m=f.data,v=(0,g1.default)(m,p);l.push(v)}return l}var ce;(function(n){n.assertEqual=i=>i;function e(i){}n.assertIs=e;function t(i){throw new Error}n.assertNever=t,n.arrayToEnum=i=>{const s={};for(const o of i)s[o]=o;return s},n.getValidEnumValues=i=>{const s=n.objectKeys(i).filter(c=>typeof i[i[c]]!="number"),o={};for(const c of s)o[c]=i[c];return n.objectValues(o)},n.objectValues=i=>n.objectKeys(i).map(function(s){return i[s]}),n.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&s.push(o);return s},n.find=(i,s)=>{for(const o of i)if(s(o))return o},n.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,s=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}n.joinValues=r,n.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(ce||(ce={}));var Ac;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Ac||(Ac={}));var $=ce.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Lt=n=>{switch(typeof n){case"undefined":return $.undefined;case"string":return $.string;case"number":return isNaN(n)?$.nan:$.number;case"boolean":return $.boolean;case"function":return $.function;case"bigint":return $.bigint;case"symbol":return $.symbol;case"object":return Array.isArray(n)?$.array:n===null?$.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?$.promise:typeof Map<"u"&&n instanceof Map?$.map:typeof Set<"u"&&n instanceof Set?$.set:typeof Date<"u"&&n instanceof Date?$.date:$.object;default:return $.unknown}},V=ce.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),w1=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:"),gt=class rg extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(s){return s.message},r={_errors:[]},i=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)r._errors.push(t(o));else{let c=r,l=0;for(;l<o.path.length;){const u=o.path[l];l===o.path.length-1?(c[u]=c[u]||{_errors:[]},c[u]._errors.push(t(o))):c[u]=c[u]||{_errors:[]},c=c[u],l++}}};return i(this),r}static assert(e){if(!(e instanceof rg))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ce.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}};gt.create=n=>new gt(n);var Tr=(n,e)=>{let t;switch(n.code){case V.invalid_type:n.received===$.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case V.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,ce.jsonStringifyReplacer)}`;break;case V.unrecognized_keys:t=`Unrecognized key(s) in object: ${ce.joinValues(n.keys,", ")}`;break;case V.invalid_union:t="Invalid input";break;case V.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${ce.joinValues(n.options)}`;break;case V.invalid_enum_value:t=`Invalid enum value. Expected ${ce.joinValues(n.options)}, received '${n.received}'`;break;case V.invalid_arguments:t="Invalid function arguments";break;case V.invalid_return_type:t="Invalid function return type";break;case V.invalid_date:t="Invalid date";break;case V.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:ce.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case V.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case V.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case V.custom:t="Invalid input";break;case V.invalid_intersection_types:t="Intersection results could not be merged";break;case V.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case V.not_finite:t="Number must be finite";break;default:t=e.defaultError,ce.assertNever(n)}return{message:t}},ig=Tr;function b1(n){ig=n}function yo(){return ig}var vo=n=>{const{data:e,path:t,errorMaps:r,issueData:i}=n,s=[...t,...i.path||[]],o={...i,path:s};if(i.message!==void 0)return{...i,path:s,message:i.message};let c="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)c=u(o,{data:e,defaultError:c}).message;return{...i,path:s,message:c}},E1=[];function M(n,e){const t=yo(),r=vo({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===Tr?void 0:Tr].filter(i=>!!i)});n.common.issues.push(r)}var rt=class sg{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const i of t){if(i.status==="aborted")return Y;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const i of t){const s=await i.key,o=await i.value;r.push({key:s,value:o})}return sg.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const i of t){const{key:s,value:o}=i;if(s.status==="aborted"||o.status==="aborted")return Y;s.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof o.value<"u"||i.alwaysSet)&&(r[s.value]=o.value)}return{status:e.value,value:r}}},Y=Object.freeze({status:"aborted"}),ur=n=>({status:"dirty",value:n}),Xe=n=>({status:"valid",value:n}),xc=n=>n.status==="aborted",kc=n=>n.status==="dirty",Un=n=>n.status==="valid",Di=n=>typeof Promise<"u"&&n instanceof Promise;function _o(n,e,t,r){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function og(n,e,t,r,i){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var j;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(j||(j={}));var ai,ci,Rt=class{constructor(n,e,t,r){this._cachedPath=[],this.parent=n,this.data=e,this._path=t,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Mh=(n,e)=>{if(Un(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new gt(n.common.issues);return this._error=t,this._error}}};function te(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:i}=n;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(o,c)=>{var l,u;const{message:f}=n;return o.code==="invalid_enum_value"?{message:f??c.defaultError}:typeof c.data>"u"?{message:(l=f??r)!==null&&l!==void 0?l:c.defaultError}:o.code!=="invalid_type"?{message:c.defaultError}:{message:(u=f??t)!==null&&u!==void 0?u:c.defaultError}},description:i}}var ne=class{get description(){return this._def.description}_getType(n){return Lt(n.data)}_getOrReturnCtx(n,e){return e||{common:n.parent.common,data:n.data,parsedType:Lt(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}_processInputParams(n){return{status:new rt,ctx:{common:n.parent.common,data:n.data,parsedType:Lt(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}}_parseSync(n){const e=this._parse(n);if(Di(e))throw new Error("Synchronous parse encountered promise.");return e}_parseAsync(n){const e=this._parse(n);return Promise.resolve(e)}parse(n,e){const t=this.safeParse(n,e);if(t.success)return t.data;throw t.error}safeParse(n,e){var t;const r={common:{issues:[],async:(t=e==null?void 0:e.async)!==null&&t!==void 0?t:!1,contextualErrorMap:e==null?void 0:e.errorMap},path:(e==null?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)},i=this._parseSync({data:n,path:r.path,parent:r});return Mh(r,i)}"~validate"(n){var e,t;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)};if(!this["~standard"].async)try{const i=this._parseSync({data:n,path:[],parent:r});return Un(i)?{value:i.value}:{issues:r.common.issues}}catch(i){!((t=(e=i==null?void 0:i.message)===null||e===void 0?void 0:e.toLowerCase())===null||t===void 0)&&t.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:n,path:[],parent:r}).then(i=>Un(i)?{value:i.value}:{issues:r.common.issues})}async parseAsync(n,e){const t=await this.safeParseAsync(n,e);if(t.success)return t.data;throw t.error}async safeParseAsync(n,e){const t={common:{issues:[],contextualErrorMap:e==null?void 0:e.errorMap,async:!0},path:(e==null?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Lt(n)},r=this._parse({data:n,path:t.path,parent:t}),i=await(Di(r)?r:Promise.resolve(r));return Mh(t,i)}refine(n,e){const t=r=>typeof e=="string"||typeof e>"u"?{message:e}:typeof e=="function"?e(r):e;return this._refinement((r,i)=>{const s=n(r),o=()=>i.addIssue({code:V.custom,...t(r)});return typeof Promise<"u"&&s instanceof Promise?s.then(c=>c?!0:(o(),!1)):s?!0:(o(),!1)})}refinement(n,e){return this._refinement((t,r)=>n(t)?!0:(r.addIssue(typeof e=="function"?e(t,r):e),!1))}_refinement(n){return new vt({schema:this,typeName:Z.ZodEffects,effect:{type:"refinement",refinement:n}})}superRefine(n){return this._refinement(n)}constructor(n){this.spa=this.safeParseAsync,this._def=n,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:e=>this["~validate"](e)}}optional(){return kt.create(this,this._def)}nullable(){return vn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return jn.create(this)}promise(){return kr.create(this,this._def)}or(n){return Bi.create([this,n],this._def)}and(n){return $i.create(this,n,this._def)}transform(n){return new vt({...te(this._def),schema:this,typeName:Z.ZodEffects,effect:{type:"transform",transform:n}})}default(n){const e=typeof n=="function"?n:()=>n;return new qi({...te(this._def),innerType:this,defaultValue:e,typeName:Z.ZodDefault})}brand(){return new Hl({typeName:Z.ZodBranded,type:this,...te(this._def)})}catch(n){const e=typeof n=="function"?n:()=>n;return new Hi({...te(this._def),innerType:this,catchValue:e,typeName:Z.ZodCatch})}describe(n){const e=this.constructor;return new e({...this._def,description:n})}pipe(n){return Wl.create(this,n)}readonly(){return Wi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},I1=/^c[^\s-]{8,}$/i,T1=/^[0-9a-z]+$/,A1=/^[0-9A-HJKMNP-TV-Z]{26}$/i,x1=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,k1=/^[a-z0-9_-]{21}$/i,S1=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,C1=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,R1=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,P1="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Ha,D1=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,N1=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,O1=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,V1=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,L1=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,M1=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ag="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",F1=new RegExp(`^${ag}$`);function cg(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function B1(n){return new RegExp(`^${cg(n)}$`)}function lg(n){let e=`${ag}T${cg(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function $1(n,e){return!!((e==="v4"||!e)&&D1.test(n)||(e==="v6"||!e)&&O1.test(n))}function U1(n,e){if(!S1.test(n))return!1;try{const[t]=n.split("."),r=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),i=JSON.parse(atob(r));return!(typeof i!="object"||i===null||!i.typ||!i.alg||e&&i.alg!==e)}catch{return!1}}function j1(n,e){return!!((e==="v4"||!e)&&N1.test(n)||(e==="v6"||!e)&&V1.test(n))}var Ar=class li extends ne{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==$.string){const s=this._getOrReturnCtx(e);return M(s,{code:V.invalid_type,expected:$.string,received:s.parsedType}),Y}const r=new rt;let i;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(i=this._getOrReturnCtx(e,i),M(i,{code:V.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="max")e.data.length>s.value&&(i=this._getOrReturnCtx(e,i),M(i,{code:V.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="length"){const o=e.data.length>s.value,c=e.data.length<s.value;(o||c)&&(i=this._getOrReturnCtx(e,i),o?M(i,{code:V.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):c&&M(i,{code:V.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),r.dirty())}else if(s.kind==="email")R1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"email",code:V.invalid_string,message:s.message}),r.dirty());else if(s.kind==="emoji")Ha||(Ha=new RegExp(P1,"u")),Ha.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"emoji",code:V.invalid_string,message:s.message}),r.dirty());else if(s.kind==="uuid")x1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"uuid",code:V.invalid_string,message:s.message}),r.dirty());else if(s.kind==="nanoid")k1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"nanoid",code:V.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid")I1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"cuid",code:V.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid2")T1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"cuid2",code:V.invalid_string,message:s.message}),r.dirty());else if(s.kind==="ulid")A1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"ulid",code:V.invalid_string,message:s.message}),r.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),M(i,{validation:"url",code:V.invalid_string,message:s.message}),r.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"regex",code:V.invalid_string,message:s.message}),r.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(e,i),M(i,{code:V.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),r.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(i=this._getOrReturnCtx(e,i),M(i,{code:V.invalid_string,validation:{startsWith:s.value},message:s.message}),r.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(i=this._getOrReturnCtx(e,i),M(i,{code:V.invalid_string,validation:{endsWith:s.value},message:s.message}),r.dirty()):s.kind==="datetime"?lg(s).test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{code:V.invalid_string,validation:"datetime",message:s.message}),r.dirty()):s.kind==="date"?F1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{code:V.invalid_string,validation:"date",message:s.message}),r.dirty()):s.kind==="time"?B1(s).test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{code:V.invalid_string,validation:"time",message:s.message}),r.dirty()):s.kind==="duration"?C1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"duration",code:V.invalid_string,message:s.message}),r.dirty()):s.kind==="ip"?$1(e.data,s.version)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"ip",code:V.invalid_string,message:s.message}),r.dirty()):s.kind==="jwt"?U1(e.data,s.alg)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"jwt",code:V.invalid_string,message:s.message}),r.dirty()):s.kind==="cidr"?j1(e.data,s.version)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"cidr",code:V.invalid_string,message:s.message}),r.dirty()):s.kind==="base64"?L1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"base64",code:V.invalid_string,message:s.message}),r.dirty()):s.kind==="base64url"?M1.test(e.data)||(i=this._getOrReturnCtx(e,i),M(i,{validation:"base64url",code:V.invalid_string,message:s.message}),r.dirty()):ce.assertNever(s);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(i=>e.test(i),{validation:t,code:V.invalid_string,...j.errToObj(r)})}_addCheck(e){return new li({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...j.errToObj(e)})}url(e){return this._addCheck({kind:"url",...j.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...j.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...j.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...j.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...j.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...j.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...j.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...j.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...j.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...j.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...j.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...j.errToObj(e)})}datetime(e){var t,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...j.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...j.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...j.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...j.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...j.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...j.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...j.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...j.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...j.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...j.errToObj(t)})}nonempty(e){return this.min(1,j.errToObj(e))}trim(){return new li({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new li({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new li({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};Ar.create=n=>{var e;return new Ar({checks:[],typeName:Z.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...te(n)})};function z1(n,e){const t=(n.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=t>r?t:r,s=parseInt(n.toFixed(i).replace(".","")),o=parseInt(e.toFixed(i).replace(".",""));return s%o/Math.pow(10,i)}var Ni=class Sc extends ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==$.number){const s=this._getOrReturnCtx(e);return M(s,{code:V.invalid_type,expected:$.number,received:s.parsedType}),Y}let r;const i=new rt;for(const s of this._def.checks)s.kind==="int"?ce.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:V.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?z1(e.data,s.value)!==0&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:V.not_finite,message:s.message}),i.dirty()):ce.assertNever(s);return{status:i.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,j.toString(t))}gt(e,t){return this.setLimit("min",e,!1,j.toString(t))}lte(e,t){return this.setLimit("max",e,!0,j.toString(t))}lt(e,t){return this.setLimit("max",e,!1,j.toString(t))}setLimit(e,t,r,i){return new Sc({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:j.toString(i)}]})}_addCheck(e){return new Sc({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:j.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:j.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:j.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:j.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:j.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:j.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ce.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}};Ni.create=n=>new Ni({checks:[],typeName:Z.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...te(n)});var Oi=class Cc extends ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==$.bigint)return this._getInvalidInput(e);let r;const i=new rt;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),M(r,{code:V.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):ce.assertNever(s);return{status:i.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return M(t,{code:V.invalid_type,expected:$.bigint,received:t.parsedType}),Y}gte(e,t){return this.setLimit("min",e,!0,j.toString(t))}gt(e,t){return this.setLimit("min",e,!1,j.toString(t))}lte(e,t){return this.setLimit("max",e,!0,j.toString(t))}lt(e,t){return this.setLimit("max",e,!1,j.toString(t))}setLimit(e,t,r,i){return new Cc({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:j.toString(i)}]})}_addCheck(e){return new Cc({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:j.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:j.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};Oi.create=n=>{var e;return new Oi({checks:[],typeName:Z.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...te(n)})};var Vi=class extends ne{_parse(n){if(this._def.coerce&&(n.data=!!n.data),this._getType(n)!==$.boolean){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.boolean,received:t.parsedType}),Y}return Xe(n.data)}};Vi.create=n=>new Vi({typeName:Z.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...te(n)});var Li=class ug extends ne{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==$.date){const s=this._getOrReturnCtx(e);return M(s,{code:V.invalid_type,expected:$.date,received:s.parsedType}),Y}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return M(s,{code:V.invalid_date}),Y}const r=new rt;let i;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(i=this._getOrReturnCtx(e,i),M(i,{code:V.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),r.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(i=this._getOrReturnCtx(e,i),M(i,{code:V.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),r.dirty()):ce.assertNever(s);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ug({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:j.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:j.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}};Li.create=n=>new Li({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:Z.ZodDate,...te(n)});var wo=class extends ne{_parse(n){if(this._getType(n)!==$.symbol){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.symbol,received:t.parsedType}),Y}return Xe(n.data)}};wo.create=n=>new wo({typeName:Z.ZodSymbol,...te(n)});var Mi=class extends ne{_parse(n){if(this._getType(n)!==$.undefined){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.undefined,received:t.parsedType}),Y}return Xe(n.data)}};Mi.create=n=>new Mi({typeName:Z.ZodUndefined,...te(n)});var Fi=class extends ne{_parse(n){if(this._getType(n)!==$.null){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.null,received:t.parsedType}),Y}return Xe(n.data)}};Fi.create=n=>new Fi({typeName:Z.ZodNull,...te(n)});var xr=class extends ne{constructor(){super(...arguments),this._any=!0}_parse(n){return Xe(n.data)}};xr.create=n=>new xr({typeName:Z.ZodAny,...te(n)});var Vn=class extends ne{constructor(){super(...arguments),this._unknown=!0}_parse(n){return Xe(n.data)}};Vn.create=n=>new Vn({typeName:Z.ZodUnknown,...te(n)});var Ht=class extends ne{_parse(n){const e=this._getOrReturnCtx(n);return M(e,{code:V.invalid_type,expected:$.never,received:e.parsedType}),Y}};Ht.create=n=>new Ht({typeName:Z.ZodNever,...te(n)});var bo=class extends ne{_parse(n){if(this._getType(n)!==$.undefined){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.void,received:t.parsedType}),Y}return Xe(n.data)}};bo.create=n=>new bo({typeName:Z.ZodVoid,...te(n)});var jn=class Hs extends ne{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==$.array)return M(t,{code:V.invalid_type,expected:$.array,received:t.parsedType}),Y;if(i.exactLength!==null){const o=t.data.length>i.exactLength.value,c=t.data.length<i.exactLength.value;(o||c)&&(M(t,{code:o?V.too_big:V.too_small,minimum:c?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&t.data.length<i.minLength.value&&(M(t,{code:V.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&t.data.length>i.maxLength.value&&(M(t,{code:V.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((o,c)=>i.type._parseAsync(new Rt(t,o,t.path,c)))).then(o=>rt.mergeArray(r,o));const s=[...t.data].map((o,c)=>i.type._parseSync(new Rt(t,o,t.path,c)));return rt.mergeArray(r,s)}get element(){return this._def.type}min(e,t){return new Hs({...this._def,minLength:{value:e,message:j.toString(t)}})}max(e,t){return new Hs({...this._def,maxLength:{value:e,message:j.toString(t)}})}length(e,t){return new Hs({...this._def,exactLength:{value:e,message:j.toString(t)}})}nonempty(e){return this.min(1,e)}};jn.create=(n,e)=>new jn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Z.ZodArray,...te(e)});function ar(n){if(n instanceof ut){const e={};for(const t in n.shape){const r=n.shape[t];e[t]=kt.create(ar(r))}return new ut({...n._def,shape:()=>e})}else return n instanceof jn?new jn({...n._def,type:ar(n.element)}):n instanceof kt?kt.create(ar(n.unwrap())):n instanceof vn?vn.create(ar(n.unwrap())):n instanceof yn?yn.create(n.items.map(e=>ar(e))):n}var ut=class ft extends ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=ce.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==$.object){const u=this._getOrReturnCtx(e);return M(u,{code:V.invalid_type,expected:$.object,received:u.parsedType}),Y}const{status:r,ctx:i}=this._processInputParams(e),{shape:s,keys:o}=this._getCached(),c=[];if(!(this._def.catchall instanceof Ht&&this._def.unknownKeys==="strip"))for(const u in i.data)o.includes(u)||c.push(u);const l=[];for(const u of o){const f=s[u],p=i.data[u];l.push({key:{status:"valid",value:u},value:f._parse(new Rt(i,p,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof Ht){const u=this._def.unknownKeys;if(u==="passthrough")for(const f of c)l.push({key:{status:"valid",value:f},value:{status:"valid",value:i.data[f]}});else if(u==="strict")c.length>0&&(M(i,{code:V.unrecognized_keys,keys:c}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const f of c){const p=i.data[f];l.push({key:{status:"valid",value:f},value:u._parse(new Rt(i,p,i.path,f)),alwaysSet:f in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const f of l){const p=await f.key,m=await f.value;u.push({key:p,value:m,alwaysSet:f.alwaysSet})}return u}).then(u=>rt.mergeObjectSync(r,u)):rt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return j.errToObj,new ft({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var i,s,o,c;const l=(o=(s=(i=this._def).errorMap)===null||s===void 0?void 0:s.call(i,t,r).message)!==null&&o!==void 0?o:r.defaultError;return t.code==="unrecognized_keys"?{message:(c=j.errToObj(e).message)!==null&&c!==void 0?c:l}:{message:l}}}:{}})}strip(){return new ft({...this._def,unknownKeys:"strip"})}passthrough(){return new ft({...this._def,unknownKeys:"passthrough"})}extend(e){return new ft({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ft({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Z.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new ft({...this._def,catchall:e})}pick(e){const t={};return ce.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new ft({...this._def,shape:()=>t})}omit(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new ft({...this._def,shape:()=>t})}deepPartial(){return ar(this)}partial(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}),new ft({...this._def,shape:()=>t})}required(e){const t={};return ce.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let s=this.shape[r];for(;s instanceof kt;)s=s._def.innerType;t[r]=s}}),new ft({...this._def,shape:()=>t})}keyof(){return gg(ce.objectKeys(this.shape))}};ut.create=(n,e)=>new ut({shape:()=>n,unknownKeys:"strip",catchall:Ht.create(),typeName:Z.ZodObject,...te(e)});ut.strictCreate=(n,e)=>new ut({shape:()=>n,unknownKeys:"strict",catchall:Ht.create(),typeName:Z.ZodObject,...te(e)});ut.lazycreate=(n,e)=>new ut({shape:n,unknownKeys:"strip",catchall:Ht.create(),typeName:Z.ZodObject,...te(e)});var Bi=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t=this._def.options;function r(i){for(const o of i)if(o.result.status==="valid")return o.result;for(const o of i)if(o.result.status==="dirty")return e.common.issues.push(...o.ctx.common.issues),o.result;const s=i.map(o=>new gt(o.ctx.common.issues));return M(e,{code:V.invalid_union,unionErrors:s}),Y}if(e.common.async)return Promise.all(t.map(async i=>{const s={...e,common:{...e.common,issues:[]},parent:null};return{result:await i._parseAsync({data:e.data,path:e.path,parent:s}),ctx:s}})).then(r);{let i;const s=[];for(const c of t){const l={...e,common:{...e.common,issues:[]},parent:null},u=c._parseSync({data:e.data,path:e.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:l}),l.common.issues.length&&s.push(l.common.issues)}if(i)return e.common.issues.push(...i.ctx.common.issues),i.result;const o=s.map(c=>new gt(c));return M(e,{code:V.invalid_union,unionErrors:o}),Y}}get options(){return this._def.options}};Bi.create=(n,e)=>new Bi({options:n,typeName:Z.ZodUnion,...te(e)});var Vt=n=>n instanceof Ui?Vt(n.schema):n instanceof vt?Vt(n.innerType()):n instanceof ji?[n.value]:n instanceof cs?n.options:n instanceof zi?ce.objectValues(n.enum):n instanceof qi?Vt(n._def.innerType):n instanceof Mi?[void 0]:n instanceof Fi?[null]:n instanceof kt?[void 0,...Vt(n.unwrap())]:n instanceof vn?[null,...Vt(n.unwrap())]:n instanceof Hl||n instanceof Wi?Vt(n.unwrap()):n instanceof Hi?Vt(n._def.innerType):[],dg=class hg extends ne{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==$.object)return M(t,{code:V.invalid_type,expected:$.object,received:t.parsedType}),Y;const r=this.discriminator,i=t.data[r],s=this.optionsMap.get(i);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(M(t,{code:V.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Y)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const i=new Map;for(const s of t){const o=Vt(s.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const c of o){if(i.has(c))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(c)}`);i.set(c,s)}}return new hg({typeName:Z.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...te(r)})}};function Rc(n,e){const t=Lt(n),r=Lt(e);if(n===e)return{valid:!0,data:n};if(t===$.object&&r===$.object){const i=ce.objectKeys(e),s=ce.objectKeys(n).filter(c=>i.indexOf(c)!==-1),o={...n,...e};for(const c of s){const l=Rc(n[c],e[c]);if(!l.valid)return{valid:!1};o[c]=l.data}return{valid:!0,data:o}}else if(t===$.array&&r===$.array){if(n.length!==e.length)return{valid:!1};const i=[];for(let s=0;s<n.length;s++){const o=n[s],c=e[s],l=Rc(o,c);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return t===$.date&&r===$.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}var $i=class extends ne{_parse(n){const{status:e,ctx:t}=this._processInputParams(n),r=(i,s)=>{if(xc(i)||xc(s))return Y;const o=Rc(i.value,s.value);return o.valid?((kc(i)||kc(s))&&e.dirty(),{status:e.value,value:o.data}):(M(t,{code:V.invalid_intersection_types}),Y)};return t.common.async?Promise.all([this._def.left._parseAsync({data:t.data,path:t.path,parent:t}),this._def.right._parseAsync({data:t.data,path:t.path,parent:t})]).then(([i,s])=>r(i,s)):r(this._def.left._parseSync({data:t.data,path:t.path,parent:t}),this._def.right._parseSync({data:t.data,path:t.path,parent:t}))}};$i.create=(n,e,t)=>new $i({left:n,right:e,typeName:Z.ZodIntersection,...te(t)});var yn=class fg extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.array)return M(r,{code:V.invalid_type,expected:$.array,received:r.parsedType}),Y;if(r.data.length<this._def.items.length)return M(r,{code:V.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Y;!this._def.rest&&r.data.length>this._def.items.length&&(M(r,{code:V.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...r.data].map((o,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new Rt(r,o,r.path,c)):null}).filter(o=>!!o);return r.common.async?Promise.all(s).then(o=>rt.mergeArray(t,o)):rt.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new fg({...this._def,rest:e})}};yn.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new yn({items:n,typeName:Z.ZodTuple,rest:null,...te(e)})};var pg=class Pc extends ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.object)return M(r,{code:V.invalid_type,expected:$.object,received:r.parsedType}),Y;const i=[],s=this._def.keyType,o=this._def.valueType;for(const c in r.data)i.push({key:s._parse(new Rt(r,c,r.path,c)),value:o._parse(new Rt(r,r.data[c],r.path,c)),alwaysSet:c in r.data});return r.common.async?rt.mergeObjectAsync(t,i):rt.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof ne?new Pc({keyType:e,valueType:t,typeName:Z.ZodRecord,...te(r)}):new Pc({keyType:Ar.create(),valueType:e,typeName:Z.ZodRecord,...te(t)})}},Eo=class extends ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(n){const{status:e,ctx:t}=this._processInputParams(n);if(t.parsedType!==$.map)return M(t,{code:V.invalid_type,expected:$.map,received:t.parsedType}),Y;const r=this._def.keyType,i=this._def.valueType,s=[...t.data.entries()].map(([o,c],l)=>({key:r._parse(new Rt(t,o,t.path,[l,"key"])),value:i._parse(new Rt(t,c,t.path,[l,"value"]))}));if(t.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of s){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return Y;(l.status==="dirty"||u.status==="dirty")&&e.dirty(),o.set(l.value,u.value)}return{status:e.value,value:o}})}else{const o=new Map;for(const c of s){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return Y;(l.status==="dirty"||u.status==="dirty")&&e.dirty(),o.set(l.value,u.value)}return{status:e.value,value:o}}}};Eo.create=(n,e,t)=>new Eo({valueType:e,keyType:n,typeName:Z.ZodMap,...te(t)});var Io=class Dc extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==$.set)return M(r,{code:V.invalid_type,expected:$.set,received:r.parsedType}),Y;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(M(r,{code:V.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(M(r,{code:V.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());const s=this._def.valueType;function o(l){const u=new Set;for(const f of l){if(f.status==="aborted")return Y;f.status==="dirty"&&t.dirty(),u.add(f.value)}return{status:t.value,value:u}}const c=[...r.data.values()].map((l,u)=>s._parse(new Rt(r,l,r.path,u)));return r.common.async?Promise.all(c).then(l=>o(l)):o(c)}min(e,t){return new Dc({...this._def,minSize:{value:e,message:j.toString(t)}})}max(e,t){return new Dc({...this._def,maxSize:{value:e,message:j.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Io.create=(n,e)=>new Io({valueType:n,minSize:null,maxSize:null,typeName:Z.ZodSet,...te(e)});var mg=class Ws extends ne{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==$.function)return M(t,{code:V.invalid_type,expected:$.function,received:t.parsedType}),Y;function r(c,l){return vo({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,yo(),Tr].filter(u=>!!u),issueData:{code:V.invalid_arguments,argumentsError:l}})}function i(c,l){return vo({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,yo(),Tr].filter(u=>!!u),issueData:{code:V.invalid_return_type,returnTypeError:l}})}const s={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof kr){const c=this;return Xe(async function(...l){const u=new gt([]),f=await c._def.args.parseAsync(l,s).catch(v=>{throw u.addIssue(r(l,v)),u}),p=await Reflect.apply(o,this,f);return await c._def.returns._def.type.parseAsync(p,s).catch(v=>{throw u.addIssue(i(p,v)),u})})}else{const c=this;return Xe(function(...l){const u=c._def.args.safeParse(l,s);if(!u.success)throw new gt([r(l,u.error)]);const f=Reflect.apply(o,this,u.data),p=c._def.returns.safeParse(f,s);if(!p.success)throw new gt([i(f,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ws({...this._def,args:yn.create(e).rest(Vn.create())})}returns(e){return new Ws({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new Ws({args:e||yn.create([]).rest(Vn.create()),returns:t||Vn.create(),typeName:Z.ZodFunction,...te(r)})}},Ui=class extends ne{get schema(){return this._def.getter()}_parse(n){const{ctx:e}=this._processInputParams(n);return this._def.getter()._parse({data:e.data,path:e.path,parent:e})}};Ui.create=(n,e)=>new Ui({getter:n,typeName:Z.ZodLazy,...te(e)});var ji=class extends ne{_parse(n){if(n.data!==this._def.value){const e=this._getOrReturnCtx(n);return M(e,{received:e.data,code:V.invalid_literal,expected:this._def.value}),Y}return{status:"valid",value:n.data}}get value(){return this._def.value}};ji.create=(n,e)=>new ji({value:n,typeName:Z.ZodLiteral,...te(e)});function gg(n,e){return new cs({values:n,typeName:Z.ZodEnum,...te(e)})}var cs=class Nc extends ne{constructor(){super(...arguments),ai.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return M(t,{expected:ce.joinValues(r),received:t.parsedType,code:V.invalid_type}),Y}if(_o(this,ai)||og(this,ai,new Set(this._def.values)),!_o(this,ai).has(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return M(t,{received:t.data,code:V.invalid_enum_value,options:r}),Y}return Xe(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Nc.create(e,{...this._def,...t})}exclude(e,t=this._def){return Nc.create(this.options.filter(r=>!e.includes(r)),{...this._def,...t})}};ai=new WeakMap;cs.create=gg;var zi=class extends ne{constructor(){super(...arguments),ci.set(this,void 0)}_parse(n){const e=ce.getValidEnumValues(this._def.values),t=this._getOrReturnCtx(n);if(t.parsedType!==$.string&&t.parsedType!==$.number){const r=ce.objectValues(e);return M(t,{expected:ce.joinValues(r),received:t.parsedType,code:V.invalid_type}),Y}if(_o(this,ci)||og(this,ci,new Set(ce.getValidEnumValues(this._def.values))),!_o(this,ci).has(n.data)){const r=ce.objectValues(e);return M(t,{received:t.data,code:V.invalid_enum_value,options:r}),Y}return Xe(n.data)}get enum(){return this._def.values}};ci=new WeakMap;zi.create=(n,e)=>new zi({values:n,typeName:Z.ZodNativeEnum,...te(e)});var kr=class extends ne{unwrap(){return this._def.type}_parse(n){const{ctx:e}=this._processInputParams(n);if(e.parsedType!==$.promise&&e.common.async===!1)return M(e,{code:V.invalid_type,expected:$.promise,received:e.parsedType}),Y;const t=e.parsedType===$.promise?e.data:Promise.resolve(e.data);return Xe(t.then(r=>this._def.type.parseAsync(r,{path:e.path,errorMap:e.common.contextualErrorMap})))}};kr.create=(n,e)=>new kr({type:n,typeName:Z.ZodPromise,...te(e)});var vt=class extends ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Z.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(n){const{status:e,ctx:t}=this._processInputParams(n),r=this._def.effect||null,i={addIssue:s=>{M(t,s),s.fatal?e.abort():e.dirty()},get path(){return t.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="preprocess"){const s=r.transform(t.data,i);if(t.common.async)return Promise.resolve(s).then(async o=>{if(e.value==="aborted")return Y;const c=await this._def.schema._parseAsync({data:o,path:t.path,parent:t});return c.status==="aborted"?Y:c.status==="dirty"||e.value==="dirty"?ur(c.value):c});{if(e.value==="aborted")return Y;const o=this._def.schema._parseSync({data:s,path:t.path,parent:t});return o.status==="aborted"?Y:o.status==="dirty"||e.value==="dirty"?ur(o.value):o}}if(r.type==="refinement"){const s=o=>{const c=r.refinement(o,i);if(t.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(t.common.async===!1){const o=this._def.schema._parseSync({data:t.data,path:t.path,parent:t});return o.status==="aborted"?Y:(o.status==="dirty"&&e.dirty(),s(o.value),{status:e.value,value:o.value})}else return this._def.schema._parseAsync({data:t.data,path:t.path,parent:t}).then(o=>o.status==="aborted"?Y:(o.status==="dirty"&&e.dirty(),s(o.value).then(()=>({status:e.value,value:o.value}))))}if(r.type==="transform")if(t.common.async===!1){const s=this._def.schema._parseSync({data:t.data,path:t.path,parent:t});if(!Un(s))return s;const o=r.transform(s.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:e.value,value:o}}else return this._def.schema._parseAsync({data:t.data,path:t.path,parent:t}).then(s=>Un(s)?Promise.resolve(r.transform(s.value,i)).then(o=>({status:e.value,value:o})):s);ce.assertNever(r)}};vt.create=(n,e,t)=>new vt({schema:n,typeName:Z.ZodEffects,effect:e,...te(t)});vt.createWithPreprocess=(n,e,t)=>new vt({schema:e,effect:{type:"preprocess",transform:n},typeName:Z.ZodEffects,...te(t)});var kt=class extends ne{_parse(n){return this._getType(n)===$.undefined?Xe(void 0):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}};kt.create=(n,e)=>new kt({innerType:n,typeName:Z.ZodOptional,...te(e)});var vn=class extends ne{_parse(n){return this._getType(n)===$.null?Xe(null):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}};vn.create=(n,e)=>new vn({innerType:n,typeName:Z.ZodNullable,...te(e)});var qi=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n);let t=e.data;return e.parsedType===$.undefined&&(t=this._def.defaultValue()),this._def.innerType._parse({data:t,path:e.path,parent:e})}removeDefault(){return this._def.innerType}};qi.create=(n,e)=>new qi({innerType:n,typeName:Z.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...te(e)});var Hi=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t={...e,common:{...e.common,issues:[]}},r=this._def.innerType._parse({data:t.data,path:t.path,parent:{...t}});return Di(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new gt(t.common.issues)},input:t.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new gt(t.common.issues)},input:t.data})}}removeCatch(){return this._def.innerType}};Hi.create=(n,e)=>new Hi({innerType:n,typeName:Z.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...te(e)});var To=class extends ne{_parse(n){if(this._getType(n)!==$.nan){const t=this._getOrReturnCtx(n);return M(t,{code:V.invalid_type,expected:$.nan,received:t.parsedType}),Y}return{status:"valid",value:n.data}}};To.create=n=>new To({typeName:Z.ZodNaN,...te(n)});var q1=Symbol("zod_brand"),Hl=class extends ne{_parse(n){const{ctx:e}=this._processInputParams(n),t=e.data;return this._def.type._parse({data:t,path:e.path,parent:e})}unwrap(){return this._def.type}},Wl=class yg extends ne{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?Y:s.status==="dirty"?(t.dirty(),ur(s.value)):this._def.out._parseAsync({data:s.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Y:i.status==="dirty"?(t.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,t){return new yg({in:e,out:t,typeName:Z.ZodPipeline})}},Wi=class extends ne{_parse(n){const e=this._def.innerType._parse(n),t=r=>(Un(r)&&(r.value=Object.freeze(r.value)),r);return Di(e)?e.then(r=>t(r)):t(e)}unwrap(){return this._def.innerType}};Wi.create=(n,e)=>new Wi({innerType:n,typeName:Z.ZodReadonly,...te(e)});function Fh(n,e){const t=typeof n=="function"?n(e):typeof n=="string"?{message:n}:n;return typeof t=="string"?{message:t}:t}function vg(n,e={},t){return n?xr.create().superRefine((r,i)=>{var s,o;const c=n(r);if(c instanceof Promise)return c.then(l=>{var u,f;if(!l){const p=Fh(e,r),m=(f=(u=p.fatal)!==null&&u!==void 0?u:t)!==null&&f!==void 0?f:!0;i.addIssue({code:"custom",...p,fatal:m})}});if(!c){const l=Fh(e,r),u=(o=(s=l.fatal)!==null&&s!==void 0?s:t)!==null&&o!==void 0?o:!0;i.addIssue({code:"custom",...l,fatal:u})}}):xr.create()}var H1={object:ut.lazycreate},Z;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Z||(Z={}));var W1=(n,e={message:`Input not instance of ${n.name}`})=>vg(t=>t instanceof n,e),_g=Ar.create,wg=Ni.create,G1=To.create,K1=Oi.create,bg=Vi.create,Z1=Li.create,Y1=wo.create,X1=Mi.create,Q1=Fi.create,J1=xr.create,eA=Vn.create,tA=Ht.create,nA=bo.create,rA=jn.create,iA=ut.create,sA=ut.strictCreate,oA=Bi.create,aA=dg.create,cA=$i.create,lA=yn.create,uA=pg.create,dA=Eo.create,hA=Io.create,fA=mg.create,pA=Ui.create,mA=ji.create,gA=cs.create,yA=zi.create,vA=kr.create,Bh=vt.create,_A=kt.create,wA=vn.create,bA=vt.createWithPreprocess,EA=Wl.create,IA=()=>_g().optional(),TA=()=>wg().optional(),AA=()=>bg().optional(),xA={string:n=>Ar.create({...n,coerce:!0}),number:n=>Ni.create({...n,coerce:!0}),boolean:n=>Vi.create({...n,coerce:!0}),bigint:n=>Oi.create({...n,coerce:!0}),date:n=>Li.create({...n,coerce:!0})},kA=Y,De=Object.freeze({__proto__:null,defaultErrorMap:Tr,setErrorMap:b1,getErrorMap:yo,makeIssue:vo,EMPTY_PATH:E1,addIssueToContext:M,ParseStatus:rt,INVALID:Y,DIRTY:ur,OK:Xe,isAborted:xc,isDirty:kc,isValid:Un,isAsync:Di,get util(){return ce},get objectUtil(){return Ac},ZodParsedType:$,getParsedType:Lt,ZodType:ne,datetimeRegex:lg,ZodString:Ar,ZodNumber:Ni,ZodBigInt:Oi,ZodBoolean:Vi,ZodDate:Li,ZodSymbol:wo,ZodUndefined:Mi,ZodNull:Fi,ZodAny:xr,ZodUnknown:Vn,ZodNever:Ht,ZodVoid:bo,ZodArray:jn,ZodObject:ut,ZodUnion:Bi,ZodDiscriminatedUnion:dg,ZodIntersection:$i,ZodTuple:yn,ZodRecord:pg,ZodMap:Eo,ZodSet:Io,ZodFunction:mg,ZodLazy:Ui,ZodLiteral:ji,ZodEnum:cs,ZodNativeEnum:zi,ZodPromise:kr,ZodEffects:vt,ZodTransformer:vt,ZodOptional:kt,ZodNullable:vn,ZodDefault:qi,ZodCatch:Hi,ZodNaN:To,BRAND:q1,ZodBranded:Hl,ZodPipeline:Wl,ZodReadonly:Wi,custom:vg,Schema:ne,ZodSchema:ne,late:H1,get ZodFirstPartyTypeKind(){return Z},coerce:xA,any:J1,array:rA,bigint:K1,boolean:bg,date:Z1,discriminatedUnion:aA,effect:Bh,enum:gA,function:fA,instanceof:W1,intersection:cA,lazy:pA,literal:mA,map:dA,nan:G1,nativeEnum:yA,never:tA,null:Q1,nullable:wA,number:wg,object:iA,oboolean:AA,onumber:TA,optional:_A,ostring:IA,pipeline:EA,preprocess:bA,promise:vA,record:uA,set:hA,strictObject:sA,string:_g,symbol:Y1,transformer:Bh,tuple:lA,undefined:X1,union:oA,unknown:eA,void:nA,NEVER:kA,ZodIssueCode:V,quotelessJson:w1,ZodError:gt}),$h={name:"@imgly/background-removal",version:"1.7.0"},SA=De.object({publicPath:De.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(n=>n.replace("${PACKAGE_NAME}",$h.name).replace("${PACKAGE_VERSION}",$h.version)),debug:De.boolean().default(!1).describe("Whether to enable debug logging."),rescale:De.boolean().default(!0).describe("Whether to rescale the image."),device:De.enum(["cpu","gpu"]).default("cpu").describe("The device to run the model on."),proxyToWorker:De.boolean().default(!1).describe("Whether to proxy inference to a web worker."),fetchArgs:De.any().default({}).describe("Arguments to pass to fetch when loading the model."),progress:De.function().args(De.string(),De.number(),De.number()).returns(De.void()).describe("Progress callback.").optional(),model:De.preprocess(n=>{switch(n){case"large":return"isnet";case"small":return"isnet_quint8";case"medium":return"isnet_fp16";default:return n}},De.enum(["isnet","isnet_fp16","isnet_quint8"])).default("medium"),output:De.object({format:De.enum(["image/png","image/jpeg","image/webp","image/x-rgba8","image/x-alpha8"]).default("image/png"),quality:De.number().default(.8)}).default({})}).default({}).transform(n=>(n.debug&&console.log("Config:",n),n.debug&&!n.progress&&(n.progress=n.progress??((e,t,r)=>{console.debug(`Downloading ${e}: ${t} of ${r}`)}),crossOriginIsolated||n.debug&&console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")),n));function CA(n){return SA.parse(n??{})}var RA=ia(sa());async function PA(n){n.debug&&console.debug("Loading model...",n.model);const e=n.model,r=await(await tg(`/models/${e}`,n)).arrayBuffer();return await v1(r,n)}async function DA(n){n=CA(n);const e=await PA(n);return{config:n,session:{base:e}}}async function NA(n,e,t){const[i,s,o]=n.shape,c=!1;let l=Vh(n,1024,1024,c);const u=f1(l);let f=await _1(t.base,[["input",u]],["output"],e),p=(0,RA.default)(f[0].data,[1024,1024,1]),m=m1(p);return e.rescale?(m=Vh(m,s,i,c),[m,n]):[m,l]}var OA=o1(DA,n=>JSON.stringify(n));async function VA(n,e){var m,v,k,x;const{config:t,session:r}=await OA(e);t.progress&&t.progress("compute:decode",0,4);const i=await p1(n,t);(m=t.progress)==null||m.call(t,"compute:inference",1,4);const[s,o]=await NA(i,t,r);(v=t.progress)==null||v.call(t,"compute:mask",2,4);const c=o,[l,u]=c.shape,f=l*u;for(let A=0;A<f;A+=1)c.data[4*A+3]=s.data[A];(k=t.progress)==null||k.call(t,"compute:encode",3,4);const p=await c1(c,t.output.quality,t.output.format);return(x=t.progress)==null||x.call(t,"compute:encode",4,4),p}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/async function LA(n,e){try{return await VA(n,{progress:(i,s,o)=>{if(e){const c=Math.round(s*100);e(`${i}: ${c}%`)}},output:{type:"image/png",quality:.8}})}catch(t){throw console.error("Background removal failed:",t),t}}function Wa(n,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>n(...r),e)}}let y={boardId:null,board:null,tool:"select",viewport:{x:0,y:0,zoom:1},elements:new Map,selectedIds:[],isPanning:!1,isDragging:!1,isResizing:!1,isDrawing:!1,drawColor:"#111111",drawWidth:3,noteColor:"yellow",panStart:{x:0,y:0},dragStart:{x:0,y:0},dragOffset:{x:0,y:0},resizeStart:null,drawingPoints:[],lastPresenceUpdate:0,isConnecting:!1,connectionStartId:null,tempConnectionLine:null,connections:[],replyElementId:null,currentTemplate:null,isWaitingForGen:!1},ui=null,di=null,Gs=null,ee={};const G={sparkles:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/></svg>',arrow_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="9 5 19 5 19 15"/></svg>',ellipse_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',rectangle_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>',diamond_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 12 12 22 2 12 12 2"/></svg>',triangle_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4L4 20H20L12 4Z"/></svg>',line_tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="20" x2="20" y2="4"/></svg>',cursor:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3l6.5 18 2.5-6.5L21.5 12z"/></svg>',image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><polygon points="10 9 15 12 10 15 10 9"/></svg>',audio:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 4v16M8 8v8M16 8v8M4 11v2M20 11v2"/></svg>',frame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"/></svg>',pan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V5a2 2 0 0 0-4 0v9"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.76 0-5.26-1.12-7.07-2.93l-3.43-3.43a2 2 0 0 1 2.83-2.83L8 15"/></svg>',draw_scribble:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1.1 0-2 .9-2 2v2H8c-1.1 0-2 .9-2 2v2h4V7h4v2h4V7h-4V5c0-1.1-.9-2-2-2zM4 11c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm16 0c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2z"/></svg>',pencil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',text_aa:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-weight="700" font-size="18">Aa</text></svg>',pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3zM12 19l-7-7 3-3 7 7-3 3z"/></svg>',text:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-weight="700" font-size="18">Aa</text></svg>',eraser:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20H7L3 16l8-8 9 9-4 3z"/><path d="M6.5 13.5L15 5l4 4"/></svg>',note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3z"/><polyline points="14 3 14 8 21 8"/></svg>',color:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>',plus_circle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',bot:'<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',heartFill:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',zoomIn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoomOut:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',wand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 4 5 2"/><path d="m15 11 3 3"/><path d="m20 11 3-3"/><path d="m9 15 3 3"/><path d="M2.5 17.5 16 4"/><path d="m16 4 4 4L6.5 21.5 2.5 17.5Z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',bold:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>',italic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',underline:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0 0 12 0V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>',strike:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" y1="12" x2="20" y2="12"/></svg>',list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',chevron_down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>'};function qe(n,e){return{x:(n-y.viewport.x)/y.viewport.zoom,y:(e-y.viewport.y)/y.viewport.zoom}}function Ga(n,e){return{x:n*y.viewport.zoom+y.viewport.x,y:e*y.viewport.zoom+y.viewport.y}}function vi(){if(!ee.container)return;const{x:n,y:e,zoom:t}=y.viewport;if(ee.container.style.transform=`translate(${n}px, ${e}px) scale(${t})`,ee.wrapper){const r=24*t,i=n%r,s=e%r;ee.wrapper.style.backgroundSize=`${r}px ${r}px`,ee.wrapper.style.backgroundPosition=`${i}px ${s}px`}ee.zoomIndicator&&(ee.zoomIndicator.textContent=`${Math.round(t*100)}%`),ee.redrawStrokes&&ee.redrawStrokes()}function MA(n){return`
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
  `}function ue(n,e="info"){const t=document.getElementById("toast-container");if(!t)return;const r=document.createElement("div");r.className=`toast ${e}`,r.textContent=n,t.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(8px)",setTimeout(()=>r.remove(),300)},3e3)}function FA(n){const e=document.createElement("div");if(e.className="board-element",e.dataset.elementId=n.id,e.style.left=`${n.x||0}px`,e.style.top=`${n.y||0}px`,e.style.width=`${n.width||200}px`,e.style.height=n.height?`${n.height}px`:"auto",e.style.zIndex=n.zIndex||1,n.type==="image"){const t=document.createElement("div");t.className="connection-anchor connection-anchor-left",t.title="Drag to connect",t.dataset.side="left",e.appendChild(t);const r=document.createElement("div");r.className="connection-anchor connection-anchor-right",r.title="Drag to connect",r.dataset.side="right",e.appendChild(r)}switch(n.type){case"node-prompt":e.style.width="300px",e.innerHTML=`
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
                  ${n.images.map((r,i)=>`<div class="ig-dot ${i===0?"active":""}"></div>`).join("")}
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
      `,setTimeout(()=>{const r=e.querySelector(".ig-slides"),i=e.querySelectorAll(".ig-dot");r&&r.addEventListener("scroll",()=>{const s=Math.round(r.scrollLeft/r.offsetWidth);i.forEach((o,c)=>o.classList.toggle("active",c===s))})},100);break;case"drawing":return null}return e}function Ao(n,e=!1){e?n.forEach(i=>{if(y.selectedIds.includes(i)){y.selectedIds=y.selectedIds.filter(o=>o!==i);const s=y.elements.get(i);s!=null&&s.dom&&s.dom.classList.remove("selected")}else y.selectedIds.push(i)}):(y.selectedIds.forEach(i=>{const s=y.elements.get(i);s!=null&&s.dom&&s.dom.classList.remove("selected")}),y.selectedIds=n);const t=document.getElementById("img-ctx-menu");y.selectedIds.forEach(i=>{const s=y.elements.get(i);s!=null&&s.dom&&s.dom.classList.add("selected")});const r=y.selectedIds[y.selectedIds.length-1];if(y.selectedIds.length===1&&r){const i=y.elements.get(r);if((i==null?void 0:i.data.type)==="image"&&t){const s=i.dom.getBoundingClientRect();t.style.display="flex",t.style.left=`${s.left+s.width/2}px`,t.style.top=`${s.top-5}px`,document.getElementById("img-ctx-full").onclick=o=>{o.stopPropagation(),Tg(i.data.src)},document.getElementById("img-ctx-download").onclick=o=>{o.stopPropagation();const c=document.createElement("a");c.href=i.data.src,c.download=`board-image-${Date.now()}`,document.body.appendChild(c),c.click(),document.body.removeChild(c)},document.getElementById("img-ctx-crop").onclick=o=>{o.stopPropagation(),ue("Crop feature activated"),i.dom.style.overflow="hidden"}}else t&&(t.style.display="none")}else t&&(t.style.display="none")}function BA(n,e){const t=ee.wrapper;if(!n||!t)return;n.addEventListener("dblclick",o=>{if(o.stopPropagation(),e.type==="note"||e.type==="text"){const c=n.querySelector(".board-note, .board-text-el");if(c){c.contentEditable="true",e.type==="text"&&c.innerHTML==="Type here..."&&(c.innerHTML=""),c.focus(),zA(n,e);const l=Wa(()=>{ve(y.boardId,e.id,{content:c.innerHTML})},500);c.addEventListener("input",l),c.addEventListener("blur",()=>{c.contentEditable="false",ve(y.boardId,e.id,{content:c.innerHTML}),setTimeout(()=>{document.activeElement.closest(".text-format-popover")||(document.getElementById("text-format-popover").style.display="none")},100)},{once:!0})}}else e.type==="image"&&Tg(e.src)});const r=n.querySelector(".note-delete");r&&r.addEventListener("click",o=>{o.stopPropagation(),Ci(y.boardId,e.id)});const i=n.querySelector(".image-favorite");i&&i.addEventListener("click",o=>{o.stopPropagation();const c=!e.favorite;e.favorite=c,i.className=`image-favorite ${c?"active":""}`,i.innerHTML=c?G.heartFill:G.heart,ve(y.boardId,e.id,{favorite:c})}),n.querySelectorAll(".connection-anchor").forEach(o=>{o.addEventListener("mousedown",c=>{var f;c.stopPropagation(),c.preventDefault();const l=qe(c.clientX,c.clientY);y.isConnecting=!0,y.connectionStartId=e.id;const u=document.getElementById("connection-layer");if(u){const p=o.dataset.side,m=p==="left"?e.x:e.x+(e.width||300),v=e.y+(e.height||200)/2;if((f=e.type)!=null&&f.startsWith("node-")){const k=document.createElementNS("http://www.w3.org/2000/svg","path");k.classList.add("node-connection-path"),k.classList.add("temp-line"),k.dataset.startX=m,k.dataset.startY=v,k.dataset.side=p,u.appendChild(k),y.tempConnectionLine=k}else{const k=document.createElementNS("http://www.w3.org/2000/svg","line");k.setAttribute("x1",m),k.setAttribute("y1",v),k.setAttribute("x2",l.x),k.setAttribute("y2",l.y),k.classList.add("temp-line"),u.appendChild(k),y.tempConnectionLine=k}}})}),n.querySelectorAll(".image-action-btn").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation();const l=o.dataset.action;l==="remove-bg"&&Ig(e.id),l==="download"&&Ag(e.src,e.fileName||"image"),l==="delete-img"&&Ci(y.boardId,e.id)})});const s=n.querySelector(".board-frame-title");if(s){const o=Wa(()=>{ve(y.boardId,e.id,{title:s.textContent})},500);s.addEventListener("input",o),s.addEventListener("blur",()=>{ve(y.boardId,e.id,{title:s.textContent})})}if(n.addEventListener("mousedown",o=>{if(y.tool!=="select"&&y.tool!=="pan"||o.target.closest('.note-delete, .image-favorite, .image-action-btn, [contenteditable="true"]'))return;if(o.target.classList.contains("resize-handle")){$A(o,e);return}o.stopPropagation(),Ao([e.id],o.shiftKey);const c=qe(o.clientX,o.clientY);y.isDragging=!0,y.dragStart={x:c.x,y:c.y},y.dragOffset={x:c.x-(e.x||0),y:c.y-(e.y||0)};const l=f=>{if(!y.isDragging)return;const p=qe(f.clientX,f.clientY),m=p.x-y.dragOffset.x,v=p.y-y.dragOffset.y;n.style.left=`${m}px`,n.style.top=`${v}px`,e.x=m,e.y=v},u=()=>{y.isDragging&&(y.isDragging=!1,ve(y.boardId,e.id,{x:e.x,y:e.y})),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)}),n.addEventListener("contextmenu",o=>{o.preventDefault(),o.stopPropagation(),Eg(o.clientX,o.clientY,e)}),n.addEventListener("click",o=>{e.type==="image"&&y.tool==="select"&&(o.stopPropagation(),Oc(e.id))}),e.type==="node-prompt"||e.type==="node-enhancer"){const o=n.querySelector("textarea");if(o&&e.type==="node-prompt"){const l=Wa(()=>{ve(y.boardId,e.id,{content:o.value})},500);o.addEventListener("input",l),o.addEventListener("mousedown",u=>u.stopPropagation())}const c=n.querySelector(".run-model-btn");c&&c.addEventListener("click",async l=>{l.stopPropagation(),ex(e.id)})}}function $A(n,e){n.stopPropagation(),n.preventDefault();const t=y.elements.get(e.id);if(!t)return;const r=t.dom;y.isResizing=!0;const i=n.clientX,s=n.clientY,o=e.width||200,c=e.height||200,l=f=>{const p=(f.clientX-i)/y.viewport.zoom,m=(f.clientY-s)/y.viewport.zoom,v=Math.max(80,o+p),k=Math.max(60,c+m);r.style.width=`${v}px`,r.style.height=`${k}px`,e.width=v,e.height=k},u=()=>{y.isResizing=!1,ve(y.boardId,e.id,{width:e.width,height:e.height}),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)}function Eg(n,e,t){var o;Ka();const r=document.createElement("div");r.className="context-menu",r.id="context-menu",r.style.left=`${n}px`,r.style.top=`${e}px`;let i="";t?(t.type==="note"&&(i+=`
        <button class="context-menu-item" data-action="color" data-color="yellow">🟡 Yellow</button>
        <button class="context-menu-item" data-action="color" data-color="pink">🩷 Pink</button>
        <button class="context-menu-item" data-action="color" data-color="green">🟢 Green</button>
        <button class="context-menu-item" data-action="color" data-color="blue">🔵 Blue</button>
        <button class="context-menu-item" data-action="color" data-color="purple">🟣 Purple</button>
        <div class="context-menu-divider"></div>
      `),t.type==="image"&&(i+=`
        <div class="context-menu-label">Resize Image</div>
        <button class="context-menu-item" data-action="resize" data-type="square">■ 1:1 Square (Insta)</button>
        <button class="context-menu-item" data-action="resize" data-type="reels">▯ 9:16 Reels/Story</button>
        <button class="context-menu-item" data-action="resize" data-type="landscape">▭ 16:9 Landscape</button>
        <div class="context-menu-divider"></div>
        <button class="context-menu-item" data-action="remove-bg">${G.wand} Remove Background</button>
      `,((o=y.board)==null?void 0:o.templateId)==="pro_food"&&(i+=`<button class="context-menu-item" data-action="make-pro">${G.sparkles} Make Professional</button>`),i+=`
        <button class="context-menu-item" data-action="download">${G.download} Download</button>
        <div class="context-menu-divider"></div>
      `),(t.type==="note"||t.type==="text")&&(i+=`
        <button class="context-menu-item" data-action="font-size" data-size="14">A <small>Small</small></button>
        <button class="context-menu-item" data-action="font-size" data-size="18">A <small>Medium</small></button>
        <button class="context-menu-item" data-action="font-size" data-size="24">A <small>Large</small></button>
        <button class="context-menu-item" data-action="font-size" data-size="32">A <small>X-Large</small></button>
        <div class="context-menu-divider"></div>
      `),i+=`
      <button class="context-menu-item" data-action="bring-front">↑ Bring to Front</button>
      <button class="context-menu-item" data-action="send-back">↓ Send to Back</button>
      <div class="context-menu-divider"></div>
      <button class="context-menu-item danger" data-action="delete">${G.trash} Delete</button>
    `):i+=`
      <button class="context-menu-item" data-action="add-note">${G.note} Add Note</button>
      <button class="context-menu-item" data-action="add-text">${G.text} Add Text</button>
      <button class="context-menu-item" data-action="add-frame">${G.frame} Add Frame</button>
      <div class="context-menu-divider"></div>
      <button class="context-menu-item" data-action="paste-image">${G.image} Upload Image</button>
    `,r.innerHTML=i,document.body.appendChild(r);const s=r.getBoundingClientRect();s.right>window.innerWidth&&(r.style.left=`${window.innerWidth-s.width-8}px`),s.bottom>window.innerHeight&&(r.style.top=`${window.innerHeight-s.height-8}px`),r.addEventListener("click",c=>{const l=c.target.closest(".context-menu-item");if(!l)return;const u=l.dataset.action,f=qe(n,e);switch(u){case"color":{const p=l.dataset.color;if(t){ve(y.boardId,t.id,{color:p});const m=y.elements.get(t.id);if(m){const v=m.dom.querySelector(".board-note");v&&(v.className=`board-note color-${p}`)}}break}case"download":t!=null&&t.src&&Ag(t.src,"image");break;case"font-size":{const p=l.dataset.size;if(t){ve(y.boardId,t.id,{fontSize:parseInt(p)}).catch(()=>{});const m=y.elements.get(t.id);if(m!=null&&m.dom){const v=m.dom.querySelector(".board-note, .board-text-el");v&&(v.style.fontSize=`${p}px`)}}break}case"bring-front":t&&ve(y.boardId,t.id,{zIndex:at()+1}).catch(()=>{});break;case"send-back":t&&ve(y.boardId,t.id,{zIndex:0}).catch(()=>{});break;case"delete":if(t){const p=y.elements.get(t.id);p!=null&&p.dom&&p.dom.remove(),y.elements.delete(t.id),Ci(y.boardId,t.id).catch(()=>{})}break;case"add-note":{const p={type:"note",x:f.x,y:f.y,width:200,height:150,content:"",color:y.noteColor,zIndex:at()+1};W(y.boardId,p).catch(()=>{});break}case"add-text":{const p={type:"text",x:f.x,y:f.y,width:200,content:"Type here...",zIndex:at()+1};W(y.boardId,p).catch(()=>{});break}case"add-frame":{const p={type:"frame",x:f.x,y:f.y,width:400,height:300,title:"Frame",zIndex:0};W(y.boardId,p).catch(()=>{});break}case"resize":jA(t==null?void 0:t.id,l.dataset.type);break;case"make-pro":UA(t==null?void 0:t.id);break;case"remove-bg":Ig(t==null?void 0:t.id);break}Ka()}),setTimeout(()=>{document.addEventListener("click",Ka,{once:!0})},10)}async function Ig(n){const e=y.elements.get(n);if(!e||e.data.type!=="image")return;const{dom:t,data:r}=e,i=document.createElement("div");i.className="processing-overlay",i.innerHTML=`
    <div class="processing-spinner"></div>
    <div class="processing-text">Removing Background...</div>
  `,t.appendChild(i);try{ue("Starting background removal...","info");const s=await LA(r.src,l=>{i.querySelector(".processing-text").textContent=l});ue("Uploading result...","info");const o=new File([s],`removed-bg-${Date.now()}.png`,{type:"image/png"}),{url:c}=await Er(o,y.boardId);await ve(y.boardId,n,{src:c}),ue("Background removed successfully!","success")}catch(s){console.error(s),ue("Failed to remove background","error")}finally{i.remove()}}async function UA(n){const e=y.elements.get(n);if(!e)return;const t=document.createElement("div");t.className="processing-overlay",t.innerHTML=`
    <div class="processing-spinner"></div>
    <div class="processing-text">Transforming into Professional Gourmet Shot...</div>
  `,e.dom.appendChild(t);try{ue("AI is restyling your plate...","info"),setTimeout(async()=>{await ve(y.boardId,n,{src:"/templates/pro_burger.png"}),ue("Masterpiece created!","success"),t.remove()},2500)}catch{t.remove(),ue("AI Transformation failed","error")}}async function jA(n,e){const t=y.elements.get(n);if(!t||t.data.type!=="image")return;let r=t.data.width||300,i=t.data.height||200;e==="square"?(r=800,i=800):e==="reels"?(r=600,i=1066):e==="landscape"&&(r=1066,i=600),ue(`Resizing to ${e}...`,"info"),ve(y.boardId,n,{width:r,height:i})}function Ka(){var n;(n=document.getElementById("context-menu"))==null||n.remove()}function at(){let n=0;return y.elements.forEach(e=>{var r;const t=((r=e.data)==null?void 0:r.zIndex)||0;t>n&&(n=t)}),n}function Tg(n){const e=document.createElement("div");e.className="lightbox-overlay",e.innerHTML=`
    <img class="lightbox-image" src="${n}" alt="">
    <button class="lightbox-close">×</button>
  `,document.body.appendChild(e),e.addEventListener("click",t=>{(t.target===e||t.target.classList.contains("lightbox-close"))&&(e.style.opacity="0",setTimeout(()=>e.remove(),250))})}function Ag(n,e){const t=document.createElement("a");t.href=n,t.download=e,t.target="_blank",document.body.appendChild(t),t.click(),t.remove()}function zA(n,e){const t=document.getElementById("text-format-popover");if(!t)return;const r=n.getBoundingClientRect();t.style.display="flex";const i=t.offsetWidth||400;t.style.left=`${r.left+r.width/2-i/2}px`,t.style.top=`${r.top-60}px`;const s=t.getBoundingClientRect();s.left<10&&(t.style.left="10px"),s.right>window.innerWidth-10&&(t.style.left=`${window.innerWidth-s.width-10}px`);const o=document.getElementById("tf-current-size");if(o){const p={14:"Small",18:"Medium",24:"Large",32:"Extra Large"};o.textContent=p[e.fontSize]||"Medium"}const c=n.querySelector(".board-note, .board-text-el"),l=(p,m=null)=>{document.execCommand(p,!1,m),c.focus(),ve(y.boardId,e.id,{content:c.innerHTML})};document.getElementById("tf-bold").onclick=()=>l("bold"),document.getElementById("tf-italic").onclick=()=>l("italic"),document.getElementById("tf-underline").onclick=()=>l("underline"),document.getElementById("tf-strike").onclick=()=>l("strikeThrough"),document.getElementById("tf-list").onclick=()=>l("insertUnorderedList"),document.getElementById("tf-code").onclick=()=>l("formatBlock","<pre>"),document.querySelectorAll("#tf-size-dropdown .tf-dropdown-menu button").forEach(p=>{p.onclick=()=>{const m=parseInt(p.dataset.size);c.style.fontSize=`${m}px`,ve(y.boardId,e.id,{fontSize:m}),o.textContent=p.textContent}});const u=document.getElementById("tf-color-picker"),f=document.getElementById("tf-color-container");u.oninput=p=>{const m=p.target.value;f.style.color=m,document.execCommand("foreColor",!1,m),ve(y.boardId,e.id,{content:c.innerHTML})}}function qA(){const n=ee.wrapper,e=document.getElementById("board-page");if(!n)return;const t=i=>{if(!i.target.closest(".board-element, .board-toolbar, .board-topbar, .context-menu, .modal-overlay, .lightbox-overlay, .zoom-indicator, .toast-container")&&!(y.tool==="draw"||y.tool==="eraser")){if(y.tool==="select"&&Ao([]),y.tool==="note"){const s=qe(i.clientX,i.clientY),o={type:"note",x:s.x,y:s.y,width:200,height:150,content:"",color:y.noteColor,zIndex:at()+1};W(y.boardId,o).catch(c=>console.error("Note save error:",c)),Oe("select");return}if(y.tool==="text"){const s=qe(i.clientX,i.clientY),o={type:"text",x:s.x,y:s.y,width:200,content:"Type here...",zIndex:at()+1};W(y.boardId,o).catch(c=>console.error("Text save error:",c)),Oe("select");return}if(y.tool==="frame"){const s=qe(i.clientX,i.clientY),o={type:"frame",x:s.x,y:s.y,width:400,height:300,title:"Frame",zIndex:0};W(y.boardId,o).catch(c=>console.error("Frame save error:",c)),Oe("select");return}(y.tool==="pan"||y.tool==="select"||i.button===1)&&(y.isPanning=!0,y.panStart={x:i.clientX-y.viewport.x,y:i.clientY-y.viewport.y},n.classList.add("panning"))}};e.addEventListener("mousedown",t),window.addEventListener("mousemove",i=>{const s=qe(i.clientX,i.clientY);if(y.isConnecting&&y.tempConnectionLine){if(y.tempConnectionLine.tagName.toLowerCase()==="path"){const c=parseFloat(y.tempConnectionLine.dataset.startX),l=parseFloat(y.tempConnectionLine.dataset.startY),u=y.tempConnectionLine.dataset.side;let f=c,p=l,m=s.x,v=s.y;if(u==="right"){const k=Math.abs(m-f)*.5,x=`M ${f} ${p} C ${f+k} ${p}, ${m-k} ${v}, ${m} ${v}`;y.tempConnectionLine.setAttribute("d",x)}else{const k=Math.abs(f-m)*.5,x=`M ${m} ${v} C ${m+k} ${v}, ${f-k} ${p}, ${f} ${p}`;y.tempConnectionLine.setAttribute("d",x)}}else y.tempConnectionLine.setAttribute("x2",s.x),y.tempConnectionLine.setAttribute("y2",s.y);return}y.isPanning&&(y.viewport.x=i.clientX-y.panStart.x,y.viewport.y=i.clientY-y.panStart.y,vi());const o=Date.now();if(o-y.lastPresenceUpdate>200){y.lastPresenceUpdate=o;const c=qe(i.clientX,i.clientY);Vm(y.boardId,c.x,c.y).catch(()=>{})}}),window.addEventListener("mouseup",i=>{var s;if(y.isConnecting){const o=i.target.closest(".board-element"),c=o==null?void 0:o.dataset.elementId;if(console.log("[Connection] Dropped on:",c,"from:",y.connectionStartId),c&&c!==y.connectionStartId){const l={type:"connection",from:y.connectionStartId,to:c,zIndex:0};W(y.boardId,l).then(()=>{console.log("[Connection] Saved to Firebase"),Ks()}).catch(u=>console.error("Connection fail:",u))}y.isConnecting=!1,y.connectionStartId=null,(s=y.tempConnectionLine)==null||s.remove(),y.tempConnectionLine=null;return}y.isPanning&&(y.isPanning=!1,n.classList.remove("panning"))}),n.addEventListener("wheel",i=>{i.preventDefault();const s=.08,o=i.deltaY>0?-s:s,c=Math.min(5,Math.max(.1,y.viewport.zoom*(1+o))),l=i.clientX,u=i.clientY;y.viewport.x=l-(l-y.viewport.x)*(c/y.viewport.zoom),y.viewport.y=u-(u-y.viewport.y)*(c/y.viewport.zoom),y.viewport.zoom=c,vi()},{passive:!1});const r=i=>{!i.target.closest(".board-element, .board-toolbar, .board-topbar, .zoom-indicator")&&(i.preventDefault(),Eg(i.clientX,i.clientY,null))};n.addEventListener("contextmenu",r),document.addEventListener("keydown",ee.keyHandler=i=>{var s;if(!(i.target.isContentEditable||i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA")){switch(i.code==="Space"&&!y.isPanning&&(i.preventDefault(),n.style.cursor="grab",y._prevTool=y.tool,y.tool="pan"),i.key.toLowerCase()){case"v":Oe("select");break;case"h":Oe("pan");break;case"n":Oe("note");break;case"t":Oe("text");break;case"d":y.drawShape="doodle",Oe("draw");break;case"r":y.drawShape="rectangle",Oe("draw");break;case"a":y.drawShape="arrow",Oe("draw");break;case"l":y.drawShape="line",Oe("draw");break;case"o":y.drawShape="ellipse",Oe("draw");break;case"e":Oe("eraser");break;case"f":Oe("frame");break;case"i":(s=document.getElementById("file-input"))==null||s.click();break;case"delete":case"backspace":y.selectedIds.length>0&&!i.target.isContentEditable&&(i.preventDefault(),y.selectedIds.forEach(o=>Ci(y.boardId,o)),Ao([]));break}(i.ctrlKey||i.metaKey)&&(i.key==="="||i.key==="+")&&(i.preventDefault(),Uh(.15)),(i.ctrlKey||i.metaKey)&&i.key==="-"&&(i.preventDefault(),Uh(-.15)),(i.ctrlKey||i.metaKey)&&i.key==="0"&&(i.preventDefault(),y.viewport={x:0,y:0,zoom:1},vi())}}),document.addEventListener("keyup",ee.keyUpHandler=i=>{i.code==="Space"&&y._prevTool&&(y.tool=y._prevTool,y._prevTool=null,xg())})}function Uh(n){const e=window.innerWidth/2,t=window.innerHeight/2,r=Math.min(5,Math.max(.1,y.viewport.zoom*(1+n)));y.viewport.x=e-(e-y.viewport.x)*(r/y.viewport.zoom),y.viewport.y=t-(t-y.viewport.y)*(r/y.viewport.zoom),y.viewport.zoom=r,vi()}function HA(){const n=ee.drawCanvas;if(!n)return;function e(){n.width=window.innerWidth,n.height=window.innerHeight,l()}window.addEventListener("resize",e),e();const t=n.getContext("2d"),r=u=>u.touches&&u.touches.length>0?{x:u.touches[0].clientX,y:u.touches[0].clientY}:u.changedTouches&&u.changedTouches.length>0?{x:u.changedTouches[0].clientX,y:u.changedTouches[0].clientY}:{x:u.clientX,y:u.clientY},i=u=>{if(y.tool!=="draw"&&y.tool!=="eraser")return;y.isDrawing=!0;const f=r(u),p=qe(f.x,f.y);y.drawingPoints=[{x:p.x,y:p.y}]},s=u=>{if(!y.isDrawing)return;const f=r(u),p=qe(f.x,f.y);y.drawingPoints.push({x:p.x,y:p.y}),l()},o=()=>{if(y.isDrawing){if(y.isDrawing=!1,y.drawingPoints.length>1){const f=y.drawShape!=="doodle"&&y.tool!=="eraser"?[y.drawingPoints[0],y.drawingPoints[y.drawingPoints.length-1]]:y.drawingPoints,p={type:"drawing",shape:y.tool==="eraser"?"eraser":y.drawShape,points:f.map(v=>({x:Math.round(v.x),y:Math.round(v.y)})),color:y.tool==="eraser"?"#e8e8e8":y.drawColor,lineWidth:y.tool==="eraser"?20:y.drawWidth,zIndex:at()+1},m="temp_draw_"+Date.now();y.elements.set(m,{data:{...p,id:m},dom:null}),W(y.boardId,p).then(()=>{y.elements.delete(m),l()}).catch(v=>{console.error("Save stroke fail",v),y.elements.delete(m),l()})}y.drawingPoints=[],l()}};n.addEventListener("mousedown",i),n.addEventListener("mousemove",s),window.addEventListener("mouseup",o),n.addEventListener("touchstart",u=>{u.preventDefault(),i(u)},{passive:!1}),n.addEventListener("touchmove",u=>{u.preventDefault(),s(u)},{passive:!1}),window.addEventListener("touchend",o);const c=(u,f,p)=>{const m=O=>O.x!==void 0?O.x:O[0],v=O=>O.y!==void 0?O.y:O[1],k=f[0],x=f[f.length-1],A=Ga(m(k),v(k)),N=Ga(m(x),v(x));if(p==="rectangle")u.strokeRect(A.x,A.y,N.x-A.x,N.y-A.y);else if(p==="ellipse")u.beginPath(),u.ellipse(A.x+(N.x-A.x)/2,A.y+(N.y-A.y)/2,Math.abs((N.x-A.x)/2),Math.abs((N.y-A.y)/2),0,0,2*Math.PI),u.stroke();else if(p==="arrow"){u.beginPath(),u.moveTo(A.x,A.y),u.lineTo(N.x,N.y);const O=Math.atan2(N.y-A.y,N.x-A.x),B=15*y.viewport.zoom;u.lineTo(N.x-B*Math.cos(O-Math.PI/6),N.y-B*Math.sin(O-Math.PI/6)),u.moveTo(N.x,N.y),u.lineTo(N.x-B*Math.cos(O+Math.PI/6),N.y-B*Math.sin(O+Math.PI/6)),u.stroke()}else if(p==="line")u.beginPath(),u.moveTo(A.x,A.y),u.lineTo(N.x,N.y),u.stroke();else if(p==="triangle")u.beginPath(),u.moveTo(A.x+(N.x-A.x)/2,A.y),u.lineTo(N.x,N.y),u.lineTo(A.x,N.y),u.closePath(),u.stroke();else if(p==="diamond")u.beginPath(),u.moveTo(A.x+(N.x-A.x)/2,A.y),u.lineTo(N.x,A.y+(N.y-A.y)/2),u.lineTo(A.x+(N.x-A.x)/2,N.y),u.lineTo(A.x,A.y+(N.y-A.y)/2),u.closePath(),u.stroke();else{u.beginPath(),u.moveTo(A.x,A.y);for(let O=1;O<f.length;O++){const B=Ga(m(f[O]),v(f[O]));u.lineTo(B.x,B.y)}u.stroke()}};ee.redrawStrokes=function(){t.clearRect(0,0,n.width,n.height),y.elements.forEach(f=>{const p=f.data;p.type!=="drawing"||!p.points||p.points.length<2||(t.save(),p.shape==="eraser"?(t.globalCompositeOperation="destination-out",t.strokeStyle="rgba(0,0,0,1)"):t.strokeStyle=p.color||"#111",t.lineWidth=(p.lineWidth||3)*y.viewport.zoom,t.lineCap="round",t.lineJoin="round",c(t,p.points,p.shape||"doodle"),t.restore())}),y.drawingPoints.length>1&&(t.save(),y.tool==="eraser"?(t.globalCompositeOperation="destination-out",t.strokeStyle="rgba(0,0,0,1)"):t.strokeStyle=y.drawColor,t.lineWidth=(y.tool==="eraser"?y.drawWidth*2:y.drawWidth)*y.viewport.zoom,t.lineCap="round",t.lineJoin="round",c(t,y.drawingPoints,y.tool==="eraser"?"eraser":y.drawShape),t.restore())};function l(){ee.redrawStrokes&&ee.redrawStrokes()}ee._resizeCanvas=e}function WA(){const n=ee.wrapper;if(!n)return;let e=null;n.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="copy",e||(e=document.createElement("div"),e.className="drop-zone-overlay",e.innerHTML='<div class="drop-zone-label">📎 Drop files here</div>',document.body.appendChild(e))}),n.addEventListener("dragleave",r=>{r.relatedTarget&&n.contains(r.relatedTarget)||(e==null||e.remove(),e=null)}),n.addEventListener("drop",async r=>{if(r.preventDefault(),e==null||e.remove(),e=null,r.dataTransfer.types.includes("application/x-node-type"))return;const i=Array.from(r.dataTransfer.files).filter(o=>o.type.startsWith("image/"));if(i.length===0){if(r.dataTransfer.items&&r.dataTransfer.items.length>0)return;ue("Only image files are supported","error");return}const s=qe(r.clientX,r.clientY);for(let o=0;o<i.length;o++){const c=i[o];ue(`Uploading ${c.name}...`);try{const{url:l}=await Er(c,y.boardId),u=new Image;u.src=l,await new Promise(m=>u.onload=m);const f={type:"image",x:s.x+o*30,y:s.y+o*30,width:u.width>800?800:u.width,height:u.width>800?800/u.width*u.height:u.height,src:l,fileName:c.name,favorite:!1,zIndex:at()+1},p="ai_up_"+Date.now();W(y.boardId,f).then(()=>{y.currentTemplate&&Oc(p)}).catch(()=>{}),ue(`${c.name} uploaded!`,"success")}catch(l){console.error("Upload error:",l),ue(`Failed to upload ${c.name}`,"error")}}});const t=document.getElementById("file-input");t&&t.addEventListener("change",async r=>{const i=Array.from(r.target.files).filter(o=>o.type.startsWith("image/")),s=qe(window.innerWidth/2,window.innerHeight/2);for(let o=0;o<i.length;o++){const c=i[o];ue(`Uploading ${c.name}...`);try{const{url:l}=await Er(c,y.boardId),u=new Image;u.src=l,await new Promise(m=>u.onload=m);const f={type:"image",x:s.x+o*30,y:s.y+o*30,width:u.width>800?800:u.width,height:u.width>800?800/u.width*u.height:u.height,src:l,fileName:c.name,favorite:!1,zIndex:at()+1},p="ai_img_"+Date.now();W(y.boardId,f).then(()=>{y.currentTemplate&&Oc(p)}).catch(()=>{}),ue(`${c.name} uploaded!`,"success")}catch(l){console.error("Upload error:",l),ue(`Failed to upload ${c.name}`,"error")}}t.value=""})}function GA(){const n=document.querySelectorAll(".node-palette-item"),e=ee.wrapper;n.forEach(t=>{t.addEventListener("dragstart",r=>{r.dataTransfer.setData("application/x-node-type",t.dataset.nodeType),r.dataTransfer.effectAllowed="copy"})}),e.addEventListener("dragover",t=>{t.dataTransfer.types.includes("application/x-node-type")&&(t.preventDefault(),t.dataTransfer.dropEffect="copy")}),e.addEventListener("drop",t=>{const r=t.dataTransfer.getData("application/x-node-type");if(!r)return;t.preventDefault();const i=qe(t.clientX,t.clientY);let s=null;r==="prompt"?s={type:"node-prompt",x:i.x,y:i.y,width:300,height:180,content:"",zIndex:at()+1}:r.startsWith("enhancer-")&&(s={type:"node-enhancer",subtype:r,x:i.x,y:i.y,width:300,height:220,content:"",zIndex:at()+1}),s&&W(y.boardId,s)})}function KA(){const n=document.getElementById("board-toolbar");if(!n)return;n.addEventListener("mousedown",t=>{t.stopPropagation()}),n.addEventListener("click",t=>{var o,c;t.stopPropagation();const r=t.target.closest(".toolbar-btn"),i=t.target.closest(".submenu-item");if(i){const l=i.dataset.shape,u=i.dataset.tool||"draw";if(y.drawShape=l,Oe(u),document.querySelectorAll(".submenu-item").forEach(f=>{f.classList.toggle("active",f.dataset.shape===l)}),l!=="eraser"){const f=document.getElementById("btn-draw");if(f){const p=l==="doodle"?"pencil":l+"_tool";G[p]&&(f.innerHTML=G[p])}}return}if(!r||r.dataset.tool==="image-gen")return;const s=r.dataset.tool;if(s){if(s==="image"){(o=document.getElementById("file-input"))==null||o.click();return}if(s==="draw"){const l=r.closest(".wrap-draw");if(l){const u=l.classList.contains("show-submenu");document.querySelectorAll(".wrap-draw").forEach(f=>f.classList.remove("show-submenu")),u||l.classList.add("show-submenu")}}else(c=document.querySelector(".wrap-draw"))==null||c.classList.remove("show-submenu");Oe(s);return}if(r.id==="color-picker-btn"){const l=document.getElementById("color-picker-popup");l==null||l.classList.toggle("visible")}}),document.addEventListener("click",()=>{var t,r;(t=document.querySelector('.toolbar-btn[data-tool="draw"]'))==null||t.classList.remove("show-submenu"),(r=document.getElementById("color-picker-popup"))==null||r.classList.remove("visible")});const e=document.getElementById("color-picker-popup");e&&e.addEventListener("click",t=>{const r=t.target.closest(".color-swatch");if(!r)return;t.stopPropagation();const i=r.dataset.color;y.drawColor=i;const s={"#fef3c7":"yellow","#FEF3C7":"yellow","#fce7f3":"pink","#FCE7F3":"pink","#dcfce7":"green","#DCFCE7":"green","#dbeafe":"blue","#DBEAFE":"blue","#ede9fe":"purple","#EDE9FE":"purple"};s[i]&&(y.noteColor=s[i]),e.querySelectorAll(".color-swatch").forEach(c=>c.classList.remove("active")),r.classList.add("active");const o=document.getElementById("color-picker-btn");o&&(o.style.color=i),e.classList.remove("visible")})}function Oe(n){y.tool=n,document.querySelectorAll(".toolbar-btn[data-tool]").forEach(t=>{t.classList.toggle("active",t.dataset.tool===n)}),xg();const e=ee.drawCanvas;if(e){const t=n==="draw"||n==="eraser";e.classList.toggle("active",t)}}function xg(){const n=ee.wrapper;n&&(n.className="canvas-wrapper",y.tool==="pan"?n.style.cursor="grab":y.tool==="draw"||y.tool==="eraser"?n.classList.add("tool-draw"):y.tool==="text"?n.classList.add("tool-text"):y.tool==="note"?n.classList.add("tool-note"):n.style.cursor="default")}function ZA(){var r,i,s;(r=document.getElementById("topbar-back"))==null||r.addEventListener("click",()=>{window.location.hash="#/"});const n=document.createElement("button");n.className="topbar-btn",n.id="topbar-theme-toggle",n.innerHTML='<span id="topbar-theme-icon"></span>',(i=document.querySelector(".topbar-right"))==null||i.prepend(n);const e=()=>{const o=document.getElementById("topbar-theme-icon");if(!o)return;const c=document.documentElement.getAttribute("data-theme")==="dark";o.innerHTML=c?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'};n.addEventListener("click",()=>{const c=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",c),localStorage.setItem("theme",c),e()}),e();const t=document.getElementById("board-name-editable");t&&(t.addEventListener("blur",()=>{var c;const o=t.textContent.trim();o&&o!==((c=y.board)==null?void 0:c.name)&&ea(y.boardId,{name:o})}),t.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),t.blur())})),(s=document.getElementById("topbar-share"))==null||s.addEventListener("click",()=>{const o=window.location.href;navigator.clipboard.writeText(o).then(()=>{ue("Board URL copied to clipboard!","success")}).catch(()=>{ue("Failed to copy URL","error")})})}function YA(){var e;const n=document.createElement("div");n.id="cursors-container",n.style.cssText="position:absolute;top:0;left:0;pointer-events:none;z-index:50;",(e=ee.container)==null||e.appendChild(n),di=Lm(y.boardId,t=>{n.innerHTML="",Object.values(t).forEach(r=>{const i=document.createElement("div");i.className="user-cursor",i.style.left=`${r.cursorX||0}px`,i.style.top=`${r.cursorY||0}px`,i.innerHTML=`
        <svg class="user-cursor-arrow" viewBox="0 0 24 24" fill="${r.color}" stroke="white" stroke-width="1.5">
          <path d="M5 3l14 7-7 2-2 7L5 3z"/>
        </svg>
        <span class="user-cursor-label" style="background:${r.color}">${r.name||"User"}</span>
      `,n.appendChild(i)})})}function XA(){ui=Nm(y.boardId,{onAdd:n=>{var t,r;if(console.log("[Sync] onAdd fired:",n.id,n.type),n.type==="connection"){y.elements.set(n.id,{data:n,dom:null}),Ks();return}if(n.type==="drawing"){y.elements.set(n.id,{data:n,dom:null}),(t=ee.redrawStrokes)==null||t.call(ee);return}if(y.elements.has(n.id)){console.log("[Sync] Skipping duplicate:",n.id);return}const e=FA(n);console.log("[Sync] DOM created:",!!e,"container:",!!ee.container),e&&((r=ee.container)==null||r.appendChild(e),y.elements.set(n.id,{data:n,dom:e}),BA(e,n),console.log("[Sync] Element added to DOM:",n.id,"at",n.x,n.y))},onModify:n=>{var r;const e=y.elements.get(n.id);if(!e)return;if(e.data={...e.data,...n},n.type==="drawing"){(r=ee.redrawStrokes)==null||r.call(ee);return}const t=e.dom;if(t){if(n.x!==void 0&&(t.style.left=`${n.x}px`),n.y!==void 0&&(t.style.top=`${n.y}px`),n.width!==void 0&&(t.style.width=`${n.width}px`),n.height!==void 0&&(t.style.height=`${n.height}px`),n.zIndex!==void 0&&(t.style.zIndex=n.zIndex),n.type==="note"){const i=t.querySelector(".board-note");i&&!i.matches(":focus")&&(i.innerHTML=n.content||"",i.className=`board-note color-${n.color||"yellow"}`)}if(n.type==="text"){const i=t.querySelector(".board-text-el");i&&!i.matches(":focus")&&(i.innerHTML=n.content||"")}if(n.type==="image"){const i=t.querySelector(".image-favorite");i&&(i.className=`image-favorite ${n.favorite?"active":""}`,i.innerHTML=n.favorite?G.heartFill:G.heart)}if(n.type==="frame"){const i=t.querySelector(".board-frame-title");i&&!i.matches(":focus")&&(i.textContent=n.title||"Frame")}n.type,n.type==="connection"&&Ks()}},onRemove:n=>{var t;const e=y.elements.get(n.id);e!=null&&e.dom&&e.dom.remove(),y.elements.delete(n.id),y.selectedIds.includes(n.id)&&Ao(y.selectedIds.filter(r=>r!==n.id)),n.type==="drawing"&&((t=ee.redrawStrokes)==null||t.call(ee)),n.type==="connection"&&Ks()}})}async function QA(n,e){y.boardId=e,y.elements.clear(),y.selectedIds=[];try{y.board=await Sm(e)}catch(t){console.warn("Failed to load board:",t)}n.innerHTML=MA(y.board),ee.wrapper=document.getElementById("canvas-wrapper"),ee.container=document.getElementById("canvas-container"),ee.drawCanvas=document.getElementById("drawing-canvas"),ee.zoomIndicator=document.getElementById("zoom-indicator"),vi(),qA(),HA(),KA(),ZA(),WA(),GA();try{console.log("[Board] Setting up element sync for board:",e),XA(),console.log("[Board] Element sync setup complete");const t=window.location.hash.split("?")[1]||"",r=new URLSearchParams(t),i=r.get("template")||"general";y.currentTemplate=r.get("template"),setTimeout(async()=>{try{y.elements.size===0&&(console.log("[Board] Seeding template/header:",i),await tx(e,i),console.log("[Board] Seeding complete"))}catch(s){console.error("[Board] Seeding failed:",s)}},2500)}catch(t){console.error("[Board] setupElementSync FAILED:",t)}try{YA()}catch(t){console.warn("[Board] Presence setup failed:",t)}try{typeof qh=="function"&&qh(),typeof Hh=="function"&&Hh()}catch(t){console.error("[Board] Gemini setup failed:",t)}Gs=setInterval(()=>{},3e4),window.addEventListener("beforeunload",()=>{Ll(e).catch(()=>{})})}function JA(){ui==null||ui(),ui=null,di==null||di(),di=null,y.boardId&&Ll(y.boardId).catch(()=>{}),ee.keyHandler&&document.removeEventListener("keydown",ee.keyHandler),ee.keyUpHandler&&document.removeEventListener("keyup",ee.keyUpHandler),Gs&&clearInterval(Gs),Gs=null,y.elements.clear(),ee={}}const cr="AIzaSyCwRpjCIUStELEZz6VIlfY46g6wbjlZpPI",jh={before_after:"Selam! Dönüşüm projende sana yardımcı olabilirim. Bana bir fotoğraf yükle, bende onun 'öncesi' veya 'sonrası' halini oluşturayım. Hangi tarzda bir değişim istersin?",pro_food:"Harika bir yemek çekimi için hazırız! Plate'i profesyonelce düzenleyebilirim. Görselini buraya sürükle, profesyonel dokunuşları ben yapayım. Hangi tarz ışık istersin?",redesign_room:"Odanı yeniden tasarlayalım mı? İstediğin tarzı söyle (Modern, Klasik vb.) ve odanın fotoğrafını at, hemen başlayalım!",instagram_pro:"Burası senin Instagram strateji merkezin! 🚀 Başlamadan önce seni tanımam lazım: Kaç takipçin var? Ana hedefin nedir (Büyüme, satış vb.)? Şu an kullandığın hook'lardan bir örnek verir misin? Ayrıca analiz etmemi istediğin postlarını buraya yükleyebilirsin!"},zh={before_after:"Create a high-end comparison image. Transform the original into a stunning, professional version. Style: {user_input}. Ensure hyper-realistic textures and dramatic lighting.",pro_food:"Apply professional food photography styling. Enhance realism with natural lighting, steam, and vibrant colors. Context: {user_input}. Gourmet presentation.",redesign_room:"Complete interior redesign. Transform the space into a {user_input} style room. Professional architectural photography, 8k resolution, cinematic lighting.",instagram_pro:"You are a world-class Instagram Content Strategist. Analyze the provided image (post) and user data (followers: {followers}, goal: {goal}, hook: {hook}). Provide actionable device on: 1. Visual Appeal 2. Hook Strength 3. Engagement Strategy. User request: {user_input}. Reply in Turkish."};function qh(){const n=document.getElementById("chat-sidebar"),e=document.getElementById("toolbar-chatbot-btn"),t=document.getElementById("chat-close"),r=document.getElementById("chat-input"),i=document.getElementById("chat-send"),s=document.getElementById("chat-content");e&&e.addEventListener("click",()=>{n.classList.toggle("open")}),t&&t.addEventListener("click",()=>{n.classList.remove("open")});const o=`gemini_chat_${window.location.hash.split("/")[2]}`;(()=>{try{const x=JSON.parse(localStorage.getItem(o))||[];if(x.length===0){const A=window.location.hash.split("?")[1]||"",O=new URLSearchParams(A).get("template");O&&jh[O]&&setTimeout(()=>{l(jh[O],!1),n.classList.add("open")},1e3)}x.forEach(A=>{const N=document.createElement("div");N.className=`chat-bubble ${A.isUser?"user":"ai"}`,N.textContent=A.text,s.appendChild(N)}),s.scrollTop=s.scrollHeight}catch{}})();const l=(x,A=!1)=>{const N=document.createElement("div");N.className=`chat-bubble ${A?"user":"ai"}`,N.textContent=x,s.appendChild(N),s.scrollTop=s.scrollHeight;try{const O=JSON.parse(localStorage.getItem(o))||[];O.push({text:x,isUser:A}),localStorage.setItem(o,JSON.stringify(O))}catch{}},u=async x=>{var A,N,O,B;try{l(x,!0),r.value="";const q=y.currentTemplate,fe=y.replyElementId;let ie=null;if(fe){const w=y.elements.get(fe);if(w&&w.data.type==="image")try{const T=w.data.src;let b="",S="image/png";if(T.startsWith("data:")){const E=T.split(",");S=E[0].split(":")[1].split(";")[0],b=E[1]}else{const Re=await(await fetch(T)).blob();S=Re.type,b=await new Promise(Qe=>{const ct=new FileReader;ct.onloadend=()=>Qe(ct.result.split(",")[1]),ct.readAsDataURL(Re)})}ie={inline_data:{mime_type:S,data:b}}}catch(T){console.error("Image process error:",T)}}if(q&&fe&&zh[q]){const w=y.elements.get(fe);if(w&&w.data.type==="image"){let T=`You are a design assistant for the '${q}' template. The user uploaded an image and said: "${x}".`;q==="instagram_pro"&&(T=`You are a world-class Instagram Content Strategist for the 'instagram_pro' template. Analyze the visual elements, text, and aesthetics of the provided post. User request: "${x}". Provide strategic advice based on visual appeal and expected engagement. Reply in Turkish.`);const b=[{text:`${T} Is this enough detail to provide professional value? If YES, output exactly "READY: [detailed feedback/strategy if instagram_pro, OR detailed prompt if other templates]". If NO, output a short question to ask the user for missing details in Turkish.`}];ie&&b.push(ie);const Re=((N=(A=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${cr}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:b}]})})).json()).candidates)==null?void 0:A[0])==null?void 0:N.content.parts[0].text)||"";if(Re.startsWith("READY:")){const Qe=Re.replace("READY:","").trim();if(q==="instagram_pro")l(Qe,!1);else{const ct=zh[q].replace("{user_input}",Qe);l("Tasarım detayları hazırlandı. Görsel oluşturuluyor...",!1),await Wh(ct,w.data.x+(w.data.width||300)+40,w.data.y),l("Dönüşüm tamamlandı! Yeni görsel tahtaya eklendi.",!1)}Za()}else l(Re,!1);return}}if(y.replyElementId){const w=y.elements.get(y.replyElementId);if(w&&w.data.type==="image"){l("Görsel üzerinde çalışıyorum...",!1);const T=[{text:`User wants to modify this image. User request: "${x}". Create a professional, highly detailed prompt for an image generator (like Imagen) to create a new version inspired by this content. ONLY output the prompt.`}];ie&&T.push(ie);const E=((B=(O=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${cr}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:T}]})})).json()).candidates)==null?void 0:O[0])==null?void 0:B.content.parts[0].text)||x;await Wh(E,w.data.x+(w.data.width||300)+40,w.data.y),l("İşlem tamam! Yeni görsel eklendi.",!1),Za();return}}const _=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${cr}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"You are a creative assistant helping the user with their design board. Reply in Turkish unless asked otherwise. Prompt: "+x}]}]})})).json();_.candidates&&_.candidates[0]?l(_.candidates[0].content.parts[0].text,!1):l("Üzgünüm, şu an yanıt veremiyorum.",!1)}catch(q){console.error(q),l("Gemini ile iletişim kurulurken hata oluştu.",!1)}};i&&(i.addEventListener("click",()=>{r.value.trim()&&u(r.value.trim())}),r.addEventListener("keypress",x=>{x.key==="Enter"&&r.value.trim()&&u(r.value.trim())}));const f=document.getElementById("btn-auto-layout");f&&f.addEventListener("click",()=>nx()),btnClearReply&&btnClearReply.addEventListener("click",x=>{x.stopPropagation(),Za()});const p=document.getElementById("tool-image-gen"),m=document.getElementById("image-gen-popup"),v=document.getElementById("ig-generate-btn"),k=document.getElementById("ig-prompt");if(m&&m.addEventListener("mousemove",x=>{const A=m.getBoundingClientRect(),N=x.clientX-A.left,O=x.clientY-A.top;m.style.setProperty("--mouse-x",`${N}px`),m.style.setProperty("--mouse-y",`${O}px`)}),p&&p.addEventListener("click",x=>{x.stopPropagation(),m.classList.toggle("active")}),m){m.addEventListener("click",A=>A.stopPropagation()),document.addEventListener("click",A=>{!A.target.closest("#image-gen-popup")&&!A.target.closest("#tool-image-gen")&&m.classList.remove("active")});const x=document.getElementById("ig-close");x&&x.addEventListener("click",()=>m.classList.remove("active"))}v&&v.addEventListener("click",async()=>{var N,O,B,q,fe,ie,I,_;const x=k.value.trim();if(!x)return;const A=v.textContent;v.textContent="✨ Enchanting Prompt...",v.style.opacity="0.5",v.style.pointerEvents="none";try{const w=((N=document.getElementById("ig-camera"))==null?void 0:N.value)||"",T=((O=document.getElementById("ig-style"))==null?void 0:O.value)||"",b=[w,T].filter(Boolean).join(", "),S=b?` Also, strictly apply these visual styles and camera effects to the prompt: ${b}`:"",Qe=((q=(B=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${cr}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"Rewrite this prompt to be extremely detailed, hyperrealistic, high-quality, and photographic, suitable for a professional image generator. Only output the enhanced prompt, nothing else. Original: "+x+S}]}]})})).json()).candidates)==null?void 0:B[0])==null?void 0:q.content.parts[0].text)||x+(b?", "+b:"");let ct=0;v.textContent="Generating Imagen 4.0 Image (0%)...";const In=((fe=document.getElementById("ig-size"))==null?void 0:fe.value)||"1920x1080",$r={"1024x1024":"1:1","1920x1080":"16:9","1080x1920":"9:16"}[In]||"16:9",Tn=((ie=document.getElementById("ig-quality"))==null?void 0:ie.value)||"standard";let Gn="imagen-4.0-fast-generate-001";Tn==="4k"&&(Gn="imagen-4.0-generate-001"),Tn==="8k"&&(Gn="imagen-4.0-ultra-generate-001");let dt=Tn==="8k"?Qe+", 8k resolution, ultra detailed, masterpiece":Tn==="4k"?Qe+", 4k resolution, high quality":Qe;const xe=setInterval(()=>{ct+=Math.floor(Math.random()*8)+2,ct>95&&(ct=95),v.textContent=`Generating Imagen 4.0 Image (${ct}%)...`},300),Ur=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${Gn}:predict?key=${cr}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instances:[{prompt:dt}],parameters:{sampleCount:1,aspectRatio:$r}})});if(!Ur.ok)throw new Error("Imagen 4.0 API Error: "+Ur.status);const ls=(_=(I=(await Ur.json()).predictions)==null?void 0:I[0])==null?void 0:_.bytesBase64Encoded;if(!ls)throw new Error("No image data returned from Gemini");const An=`data:image/png;base64,${ls}`,ca=await(await fetch(An)).blob(),xn=new File([ca],`gemini_${Date.now()}.png`,{type:"image/png"});v.textContent="Compressing High-Res Image (98%)...";let Pt="";try{const{url:_t}=await Er(xn,y.boardId);Pt=_t}catch(_t){console.error("Storage upload error:",_t),Pt=An}const Dt=new Image;Dt.onload=()=>{clearInterval(xe),v.textContent="Generating Imagen 4.0 Image (100%)...",setTimeout(()=>{const _t=Dt.width||1024,Zn=Dt.height||1024,Yn=typeof qe<"u"?qe(window.innerWidth/2,window.innerHeight/2):{x:100,y:100},us={type:"image",x:Yn.x-_t/2,y:Yn.y-Zn/2,width:parseInt(_t),height:parseInt(Zn),src:Pt,fileName:xn.name,favorite:!0,zIndex:typeof at<"u"?at()+1:100,promptDesc:dt};typeof W=="function"&&W(y.boardId,us).then(()=>{typeof ue<"u"&&ue(`Image generated via ${Gn}!`,"success")}).catch(la=>{console.error("Failed to add AI image to DB:",la),typeof ue<"u"&&ue("Image DB Error - Too Large?","error")}),v.textContent=A,v.style.opacity="1",v.style.pointerEvents="auto",m.classList.remove("active"),k.value=""},400)},Dt.onerror=()=>{throw clearInterval(xe),new Error("Image failed to load in DOM")},Dt.src=Pt}catch(w){console.error(w),typeof ue<"u"&&ue("Failed to generate image.","error"),v.textContent=A,v.style.opacity="1",v.style.pointerEvents="auto",m.classList.remove("active")}})}function Hh(){var s,o,c,l,u,f,p;const n=document.getElementById("draw-size-slider"),e=document.getElementById("draw-size-val");n&&n.addEventListener("input",m=>{const v=parseInt(m.target.value);y.drawWidth=v,e&&(e.textContent=v+"px")});const t=document.getElementById("draw-color-picker");t&&t.addEventListener("input",m=>{y.drawColor=m.target.value});const r=document.querySelector(".eraser-btn");r&&r.addEventListener("click",()=>{Oe("eraser"),document.querySelector(".wrap-draw").classList.remove("show-submenu")});const i=document.getElementById("text-format-popover");if(i){i.addEventListener("mousedown",k=>{k.target.tagName!=="INPUT"&&k.preventDefault()});const m=k=>{var O,B,q;const A=window.getSelection().anchorNode,N=(B=(O=A==null?void 0:A.parentElement)==null?void 0:O.closest(".board-text-el, .board-note"))==null?void 0:B.parentElement;if(N){const fe=(q=Array.from(y.elements.entries()).find(([ie,I])=>I.dom===N))==null?void 0:q[0];if(fe){const ie=N.querySelector(".board-text-el, .board-note").innerHTML;ve(y.boardId,fe,{...k,content:ie})}}},v=(k,x=null)=>{document.execCommand(k,!1,x),m({})};(s=document.getElementById("tf-bold"))==null||s.addEventListener("click",()=>v("bold")),(o=document.getElementById("tf-italic"))==null||o.addEventListener("click",()=>v("italic")),(c=document.getElementById("tf-underline"))==null||c.addEventListener("click",()=>v("underline")),(l=document.getElementById("tf-strike"))==null||l.addEventListener("click",()=>v("strikeThrough")),(u=document.getElementById("tf-list"))==null||u.addEventListener("click",()=>v("insertUnorderedList")),(f=document.getElementById("tf-code"))==null||f.addEventListener("click",()=>v("formatBlock","<pre>")),(p=document.getElementById("tf-color-picker"))==null||p.addEventListener("input",k=>{const x=k.target.value;document.execCommand("foreColor",!1,x);const A=document.getElementById("tf-color-container");A&&(A.style.color=x),m({})}),document.querySelectorAll("#tf-size-dropdown .tf-dropdown-menu button").forEach(k=>{k.addEventListener("click",()=>{var O,B;const x=parseInt(k.dataset.size),N=(B=(O=window.getSelection().anchorNode)==null?void 0:O.parentElement)==null?void 0:B.closest(".board-text-el, .board-note");if(N){N.style.fontSize=`${x}px`;const q=document.getElementById("tf-current-size");q&&(q.textContent=k.textContent),m({fontSize:x})}})})}}function Ks(){const n=document.getElementById("connection-layer");n&&(n.innerHTML="",y.elements.forEach(e=>{var r,i;const t=e.data;if(t.type==="connection"&&t.from&&t.to){const s=y.elements.get(t.from),o=y.elements.get(t.to);if(s&&o){const c=((r=s.data.type)==null?void 0:r.startsWith("node-"))||((i=o.data.type)==null?void 0:i.startsWith("node-"));let l=s.data.x+(s.data.width||200)/2,u=s.data.y+(s.data.height||200)/2,f=o.data.x+(o.data.width||200)/2,p=o.data.y+(o.data.height||200)/2;if(c){l=s.data.x+(s.data.width||300),u=s.data.y+(s.data.height||200)/2,f=o.data.x,p=o.data.y+(o.data.height||200)/2;const m=document.createElementNS("http://www.w3.org/2000/svg","path"),v=Math.abs(f-l)*.5,k=`M ${l} ${u} C ${l+v} ${u}, ${f-v} ${p}, ${f} ${p}`;m.setAttribute("d",k),m.classList.add("node-connection-path"),n.appendChild(m)}else{const m=document.createElementNS("http://www.w3.org/2000/svg","line");m.setAttribute("x1",l),m.setAttribute("y1",u),m.setAttribute("x2",f),m.setAttribute("y2",p),n.appendChild(m)}}}}))}async function ex(n){var s;const e=y.elements.get(n);if(!e){console.error("[RunModel] Enhancer element not found in state:",n);return}console.log("[RunModel] Starting for enhancer:",n);let t="",r=!1;if(y.elements.forEach(o=>{var l;const c=o.data;if(c.type==="connection"&&c.to===n){r=!0;const u=y.elements.get(c.from);if(console.log("[RunModel] Found connection from:",c.from,"type:",u==null?void 0:u.data.type),u&&u.data.type==="node-prompt"){const f=(l=u.dom)==null?void 0:l.querySelector("textarea");t=f?f.value:u.data.content||"",console.log("[RunModel] Source prompt content:",t)}}}),!r){ue("Lütfen önce bir Prompt kartını bu karta bağlayın.","warning");return}if(!t.trim()){ue("Bağlı Prompt kartı boş. Lütfen bir metin girin.","warning");return}ve(y.boardId,n,{content:"⏳ Sihirli prompt hazırlanıyor..."});const i=e.dom.querySelector(".run-model-btn");i&&(i.textContent="İşleniyor...",i.disabled=!0);try{console.log("[RunModel] Fetching from Hugging Face...");const o=await fetch("https://api-inference.huggingface.co/models/Gustavosta/MagicPrompt-Stable-Diffusion",{method:"POST",headers:{Authorization:"Bearer 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","Content-Type":"application/json"},body:JSON.stringify({inputs:t})});if(!o.ok){const u=await o.text();throw console.error("[RunModel] API Error:",u),new Error("API isteği başarısız oldu.")}const c=await o.json();console.log("[RunModel] API Success:",c);let l=((s=c[0])==null?void 0:s.generated_text)||"";e.data.subtype==="enhancer-skin"?l+=", extremely detailed skin texture, photorealistic, 8k, highly detailed, subsurface scattering, masterwork":e.data.subtype==="enhancer-quality"&&(l+=", masterpiece, best quality, ultra-detailed, highres, cinematic lighting, 8k uhd, unreal engine 5, octane render"),ve(y.boardId,n,{content:l}),ue("Prompt başarıyla sihirli hale getirildi!","success")}catch(o){console.error("[RunModel] Error:",o),ve(y.boardId,n,{content:"❌ Hata: "+o.message}),ue("Bir hata oluştu.","error")}finally{i&&(i.textContent="→ Run Model",i.disabled=!1)}}async function tx(n,e){e==="before_after"?(await W(n,{type:"text",content:'<span class="seed-title">Transformation <span style="color:var(--brand-color)">Studio</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Turn single reference shots into compelling visual stories.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Seed Instructions",x:200,y:280,width:600,height:220,zIndex:0}),await W(n,{type:"text",content:'1. Upload your messy or clean subject image.<br>2. Right-click and select "Make Professional" or "Before/After".<br>3. Connect images to generate a side-by-side transition.',x:230,y:330,width:540,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Automotive Restoration</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/car_before.png",x:200,y:600,width:440,height:320,zIndex:1}),await W(n,{type:"image",src:"/templates/car_after.png",x:670,y:600,width:440,height:320,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Fitness & Body</span>',x:200,y:960,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/car_before.png",x:200,y:1010,width:400,height:280,zIndex:1}),await W(n,{type:"image",src:"/templates/car_after.png",x:630,y:1010,width:400,height:280,zIndex:1}),await W(n,{type:"note",content:"<b>Pro Tip:</b><br><br>Use the Instagram tool to export these pairs!",x:1160,y:300,width:220,height:140,color:"blue",zIndex:2})):e==="pro_food"?(await W(n,{type:"text",content:'<span class="seed-title">Gourmet <span style="color:var(--brand-color)">Plating</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"frame",title:"How it works",x:200,y:280,width:620,height:200,zIndex:0}),await W(n,{type:"text",content:"Our Food AI optimizes lighting, adds realistic steam, and enhances textures to make any meal look studio-ready. Use the tool on the right-click menu.",x:230,y:330,width:560,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Fast Food High-Res</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/messy_burger.png",x:200,y:600,width:420,height:320,zIndex:1}),await W(n,{type:"image",src:"/templates/pro_burger.png",x:650,y:600,width:420,height:320,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Plated Meals</span>',x:200,y:960,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/pro_burger.png",x:200,y:1010,width:480,height:360,zIndex:1}),await W(n,{type:"image",src:"/templates/messy_burger.png",x:710,y:1010,width:480,height:360,zIndex:1})):e==="redesign_room"?(await W(n,{type:"text",content:'<span class="seed-title">Space <span style="color:var(--brand-color)">Reimagine</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"frame",title:"Interior AI Workflow",x:200,y:280,width:600,height:180,zIndex:0}),await W(n,{type:"text",content:"Convert any raw space into a stylized masterpiece. Experiment with dark moody lighting or sunny Mediterranean layouts.",x:230,y:330,width:540,fontSize:16,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Home Office Setup</span>',x:200,y:550,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_before.png",x:200,y:600,width:460,height:340,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_after.png",x:690,y:600,width:460,height:340,zIndex:1}),await W(n,{type:"text",content:'<span class="seed-section-label">Studio Apartments</span>',x:200,y:980,width:800,fontSize:24,fontWeight:700,zIndex:1}),await W(n,{type:"image",src:"/templates/desk_before.png",x:200,y:1030,width:480,height:360,zIndex:1})):e==="general"?(await W(n,{type:"text",content:'<span class="seed-title">Creative <span style="color:var(--brand-color)">Storyboard</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Organize your thoughts, reference images, and AI explorations in one place.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Getting Started",x:200,y:280,width:600,height:180,zIndex:0}),await W(n,{type:"text",content:"• Drag images here from your PC<br>• Use the Toolbar to add notes and text<br>• Right-click any image for AI enhancements",x:230,y:330,width:540,fontSize:16,zIndex:1})):e==="instagram_pro"&&(await W(n,{type:"text",content:'<span class="seed-title">Instagram <span style="color:#E1306C">Growth Studio</span></span>',x:200,y:100,width:800,fontSize:64,fontWeight:800,zIndex:1}),await W(n,{type:"text",content:"Audit your grid, refine your hooks, and get actionable advice to 10x your engagement.",x:200,y:180,width:800,fontSize:20,color:"var(--text-secondary)",zIndex:1}),await W(n,{type:"frame",title:"Post Gallery / Grid Audit",x:200,y:280,width:1e3,height:500,zIndex:0}),await W(n,{type:"text",content:"Drag your recent posts here for Gemini to analyze.",x:600,y:500,width:400,fontSize:16,color:"var(--text-tertiary)",zIndex:1}),await W(n,{type:"note",content:'<b>Current Hook Ideas</b><br><br>1. "The secret no one tells you about..."<br>2. "This simple change doubled my sales..."',x:1250,y:280,width:250,height:200,color:"yellow",zIndex:1}),await W(n,{type:"note",content:"<b>Growth Goals</b><br><br>- 10k Followers<br>- 5% Engagement Rate",x:1250,y:500,width:250,height:200,color:"pink",zIndex:1}))}async function Wh(n,e,t){var r,i;try{const l=(i=(r=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${cr}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instances:[{prompt:n}],parameters:{sampleCount:1,aspectRatio:"1:1"}})})).json()).predictions)==null?void 0:r[0])==null?void 0:i.bytesBase64Encoded;if(!l)throw new Error("No image data");const u=`data:image/png;base64,${l}`,f={type:"image",x:e,y:t,width:300,height:300,src:u,fileName:`ai_edit_${Date.now()}.png`,zIndex:at()+1,promptDesc:n};await W(y.boardId,f)}catch(s){console.error("Image Gen Error:",s),ue("Failed to generate contextual image.","error")}}function Oc(n){const e=y.elements.get(n);if(!e||e.data.type!=="image")return;y.replyElementId=n;const t=document.getElementById("chat-reply-context"),r=document.getElementById("reply-thumb"),i=document.getElementById("chat-sidebar");t&&(t.style.display="flex"),r&&(r.style.backgroundImage=`url(${e.data.src})`),i&&i.classList.add("open");const s=document.getElementById("chat-input");s&&(s.placeholder="Düzeltmek istediğin şeyi söyle...",s.focus())}function Za(){y.replyElementId=null;const n=document.getElementById("chat-reply-context");n&&(n.style.display="none");const e=document.getElementById("chat-input");e&&(e.placeholder="Ask Gemini...")}async function nx(){const n=Array.from(y.elements.values()).filter(o=>o.data.type==="image"||o.data.type==="frame").sort((o,c)=>(o.data.y||0)-(c.data.y||0));if(n.length===0){ue("No items to arrange","info");return}ue("Organizing Board Layout...","info");const e=200,t=150,r=50,i=350,s=3;n.forEach((o,c)=>{const l=c%s,u=Math.floor(c/s),f=e+l*(i+r),p=t+u*(i+r);o.dom.classList.add("smooth-move"),o.dom.style.left=`${f}px`,o.dom.style.top=`${p}px`,o.data.x=f,o.data.y=p,ve(y.boardId,o.data.id,{x:f,y:p}),setTimeout(()=>o.dom.classList.remove("smooth-move"),800)})}let z={projectId:null,project:null,elements:new Map,selectedId:null,isDragging:!1,dragOffset:{x:0,y:0},zoom:1,propTab:"style",clipboard:null},Vc=null,et={};const tr={photo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',text:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',shapes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',bg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M2 6h20M2 18h20"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'},rx=["Outfit","Inter","Montserrat","Playfair Display","Poppins","Roboto","Bebas Neue","Dancing Script"],kg=[{name:"Square",svg:'<rect x="4" y="4" width="16" height="16" rx="1" fill="currentColor"/>'},{name:"Circle",svg:'<circle cx="12" cy="12" r="8" fill="currentColor"/>'},{name:"Triangle",svg:'<path d="M12 4L4 20H20L12 4Z" fill="currentColor"/>'},{name:"Hexagon",svg:'<path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="currentColor"/>'},{name:"Arrow Right",svg:'<path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/>'},{name:"Arrow Left",svg:'<path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none"/>'},{name:"Speech Bubble",svg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor"/>'},{name:"Heart",svg:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.7 7.8l1.1 1.1 7.7 7.7 7.7-7.7 1.1-1.1a5.5 5.5 0 0 0 0-7.8z" fill="currentColor"/>'},{name:"Star",svg:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>'},{name:"Instagram",svg:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2" fill="none"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>'},{name:"Facebook",svg:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/>'},{name:"Twitter",svg:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor"/>'}];function ix(n,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>n(...r),e)}}function sx(){return`
    <div class="editor-page theme-liquid">
      <!-- Sidebar -->
      <aside class="editor-sidebar">
        <div class="sidebar-header">
          <button id="editor-back" class="icon-btn">${tr.back}</button>
          <span class="brand-text">Creative Editor</span>
        </div>
        
        <div class="editor-tools">
          <button class="editor-tool-btn active" data-tab="images">${tr.photo}<span>Photos</span></button>
          <button class="editor-tool-btn" data-tab="text">${tr.text}<span>Text</span></button>
          <button class="editor-tool-btn" data-tab="elements">${tr.shapes}<span>Elements</span></button>
          <button class="editor-tool-btn" data-tab="background">${tr.bg}<span>Canvas</span></button>
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
             <button class="btn btn-premium" id="btn-export">${tr.download} Export Project</button>
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
  `}function Gh(n){const e=document.getElementById("sidebar-tab-content");if(e){if(n==="images")e.innerHTML=`
      <button class="btn btn-primary-alt" style="width:100%; margin-bottom:20px;" id="btn-upload">Upload Media</button>
      <div class="section-label">Recently Added</div>
      <div id="recent-uploads" class="media-grid"></div>
    `,document.getElementById("btn-upload").onclick=()=>document.getElementById("editor-file-input").click();else if(n==="text")e.innerHTML=`
      <button class="btn btn-primary-alt" style="width:100%; margin-bottom:12px;" id="btn-add-text">Add Heading</button>
      <button class="editor-tool-btn-wide" data-preset="sub">Add Subheading</button>
      <button class="editor-tool-btn-wide" data-preset="body">Add Body Text</button>
    `,document.getElementById("btn-add-text").onclick=()=>Ya("Heading",64,800),e.querySelector('[data-preset="sub"]').onclick=()=>Ya("Subheading",32,600),e.querySelector('[data-preset="body"]').onclick=()=>Ya("Body text...",18,400);else if(n==="elements")e.innerHTML=`
      <div class="element-grid">
        ${kg.map(t=>`
          <div class="element-item" data-name="${t.name}">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">${t.svg}</svg>
          </div>
        `).join("")}
      </div>
    `,e.querySelectorAll(".element-item").forEach(t=>{t.onclick=r=>{r.stopPropagation(),dx(t.dataset.name)}});else if(n==="background"){e.innerHTML=`
      <div class="prop-title">Canvas Background Color</div>
      <div class="color-grid">${["#ffffff","#f5f5f0","#000000","#ff3c00","#0066cc","#34c759"].map(r=>`<div class="color-swatch" style="background:${r}" data-color="${r}"></div>`).join("")}</div>
      <div class="prop-control">
        <label>Custom Color</label>
        <input type="color" id="bg-picker" class="color-picker-full">
      </div>
    `,e.querySelectorAll(".color-swatch").forEach(r=>r.onclick=()=>Kh(r.dataset.color));const t=document.getElementById("bg-picker");t&&(t.oninput=r=>Kh(r.target.value))}else if(n==="layout"){const t=[{name:"Instagram Post",w:1080,h:1080},{name:"Instagram Story",w:1080,h:1920},{name:"Twitter/X Post",w:1200,h:675},{name:"Square Tiny",w:360,h:360}];e.innerHTML=`
      <div class="prop-title">Dimensions</div>
      ${t.map(r=>`<button class="layout-preset-btn" data-w="${r.w}" data-h="${r.h}"><span>${r.name}</span><small>${r.w}x${r.h}</small></button>`).join("")}
      <div class="custom-dim">
        <input type="number" id="custom-w" placeholder="Width">
        <input type="number" id="custom-h" placeholder="Height">
      </div>
      <button class="btn btn-primary-alt" style="width:100%; margin-top:12px;" id="btn-apply-size">Apply Custom Size</button>
    `,e.querySelectorAll("[data-w]").forEach(r=>r.onclick=()=>Lc(parseInt(r.dataset.w),parseInt(r.dataset.h))),document.getElementById("btn-apply-size").onclick=()=>Lc(parseInt(document.getElementById("custom-w").value),parseInt(document.getElementById("custom-h").value))}}}function dr(n){const e=document.getElementById("editor-properties");if(!e)return;const t=z.elements.get(n);if(!t){e.innerHTML='<div class="empty-state">Select an element to edit</div>';return}const r=z.propTab||"style";let i="";if(r==="style"?t.type==="text"?i=`
        <div class="prop-section">
          <div class="prop-title">Text Style</div>
          <select class="font-select" id="input-font">${rx.map(c=>`<option value="${c}" ${t.fontFamily===c?"selected":""}>${c}</option>`).join("")}</select>
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
      `:i=`
        <div class="prop-section">
          <div class="prop-title">Image Adjustments</div>
          ${["brightness","contrast","blur"].map(c=>{var l;return`
            <div class="prop-control">
              <div class="prop-label"><span>${c.toUpperCase()}</span></div>
              <input type="range" class="prop-slider" data-filter="${c}" min="0" max="${c==="blur"?20:3}" step="0.1" value="${((l=t.filters)==null?void 0:l[c])||(c==="blur"?0:1)}">
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
      `:r==="effects"&&(i=`
      <div class="prop-section">
        <div class="prop-title">Element Effects</div>
        <div class="effect-grid">
          ${["none","lift","glow","shadow"].map(c=>`<button class="effect-btn-sm ${t.effect===c?"active":""}" data-effect="${c}">${c}</button>`).join("")}
        </div>
      </div>
      ${t.effect==="shadow"?`
        <div class="prop-section shadow-details">
          <div class="prop-control">
            <label>X / Y Offset</label>
            <div style="display:flex; gap:8px;">
               <input type="number" id="shadow-x" value="${t.shadowX||0}" style="width:50%">
               <input type="number" id="shadow-y" value="${t.shadowY||10}" style="width:50%">
            </div>
          </div>
          <div class="prop-control">
            <div class="prop-label">Blur Radius</div>
            <input type="range" id="shadow-blur" min="0" max="100" value="${t.shadowBlur||20}">
          </div>
          <div class="prop-control">
            <label>Color</label>
            <input type="color" id="shadow-color" value="${t.shadowColor||"#000000"}" class="color-picker-full">
          </div>
        </div>
      `:""}
    `),e.innerHTML=`
    <div class="panel-header">
      <span>Settings</span>
      <button id="btn-delete-el" class="btn-text danger">Delete</button>
    </div>
    <div class="panel-tabs">
      <button class="tab-btn ${r==="style"?"active":""}" data-ptab="style">Style</button>
      <button class="tab-btn ${r==="effects"?"active":""}" data-ptab="effects">Effects</button>
    </div>
    <div class="panel-content">${i}</div>
  `,e.querySelectorAll("[data-ptab]").forEach(c=>c.onclick=()=>{z.propTab=c.dataset.ptab,dr(n)}),e.querySelectorAll("[data-effect]").forEach(c=>c.onclick=()=>{Ne(n,{effect:c.dataset.effect}),dr(n)}),t.type==="text"&&(document.getElementById("btn-bold").onclick=()=>Ne(n,{fontWeight:t.fontWeight==="bold"?"normal":"bold"}),document.getElementById("btn-italic").onclick=()=>Ne(n,{fontStyle:t.fontStyle==="italic"?"normal":"italic"}),document.getElementById("btn-underline").onclick=()=>Ne(n,{textDecoration:t.textDecoration==="underline"?"none":"underline"}),document.getElementById("input-fs").oninput=c=>Ne(n,{fontSize:parseInt(c.target.value)}),document.getElementById("input-ls").oninput=c=>Ne(n,{letterSpacing:parseInt(c.target.value)}),document.getElementById("check-bg").onchange=c=>{Ne(n,{bgEnabled:c.target.checked}),dr(n)},document.getElementById("input-bg-color")&&(document.getElementById("input-bg-color").oninput=c=>Ne(n,{bgColor:c.target.value})),document.getElementById("input-color").oninput=c=>Ne(n,{color:c.target.value}),document.getElementById("input-font").onchange=c=>Ne(n,{fontFamily:c.target.value})),document.getElementById("shadow-x")){const c=(l,u,f=1)=>document.getElementById(l).oninput=p=>Ne(n,{[u]:parseFloat(p.target.value)*f});c("shadow-x","shadowX"),c("shadow-y","shadowY"),c("shadow-blur","shadowBlur"),document.getElementById("shadow-color").oninput=l=>Ne(n,{shadowColor:l.target.value})}e.querySelectorAll("[data-filter]").forEach(c=>c.oninput=l=>Ne(n,{filters:{...t.filters||{},[l.target.dataset.filter]:parseFloat(l.target.value)}}));const s=document.getElementById("input-radius");s&&(s.oninput=c=>Ne(n,{borderRadius:parseInt(c.target.value)}));const o=document.getElementById("input-opacity");o&&(o.oninput=c=>Ne(n,{opacity:parseFloat(c.target.value)})),document.getElementById("btn-delete-el").onclick=()=>{ra(z.projectId,n),z.selectedId=null,dr(null)}}function Ne(n,e){const t=z.elements.get(n);t&&(Object.assign(t,e),Gl(t.dom,t)),ox(n,e)}const ox=ix((n,e)=>na(z.projectId,n,e),200);function Gl(n,e){if(!n)return;n.style.left=`${e.x}px`,n.style.top=`${e.y}px`,n.style.width=e.width?`${e.width}px`:"auto",n.style.height=e.height?`${e.height}px`:"auto",n.style.zIndex=e.zIndex||1,n.style.borderRadius=`${e.borderRadius||0}px`,n.style.opacity=e.opacity||1;let t="none";if(e.effect==="lift"?t="0 10px 30px rgba(0,0,0,0.3)":e.effect==="glow"?t=`0 0 20px ${e.color||"#ffffff"}`:e.effect==="shadow"&&(t=`${e.shadowX||0}px ${e.shadowY||10}px ${e.shadowBlur||20}px ${e.shadowColor||"rgba(0,0,0,0.5)"}`),e.type==="image"||e.type==="video"){const r=e.filters||{},i=`brightness(${r.brightness||1}) contrast(${r.contrast||1}) blur(${r.blur||0}px)`,s=n.querySelector("img, video");s&&(s.style.filter=i,s.style.boxShadow=t)}else if(e.type==="text"){const r=n.querySelector(".editor-text-content");r&&(r.style.fontFamily=e.fontFamily||"Outfit",r.style.fontSize=`${e.fontSize}px`,r.style.color=e.color||"#000000",r.style.fontWeight=e.fontWeight||600,r.style.fontStyle=e.fontStyle||"normal",r.style.textDecoration=e.textDecoration||"none",r.style.letterSpacing=`${e.letterSpacing||0}px`,r.style.lineHeight=1.2,r.style.textShadow=t,e.bgEnabled?(r.style.background=e.bgColor||"#ff3c00",r.style.padding="8px",r.style.borderRadius="4px"):r.style.background="none")}else e.type==="element"&&(n.style.color=e.color||"#1a1a1a",n.style.filter=e.effect==="shadow"?`drop-shadow(${t})`:"none")}function ax(n){const e=document.createElement("div");if(e.className="board-element",e.dataset.id=n.id,n.type==="image")e.innerHTML=`<div class="board-image-wrapper"><img src="${n.src}"></div>`;else if(n.type==="video")e.innerHTML=`<div class="board-image-wrapper"><video src="${n.src}" autoplay loop muted></video></div>`;else if(n.type==="text")e.innerHTML=`<div class="editor-text-content" contenteditable="true" spellcheck="false">${n.content}</div>`;else if(n.type==="element"){const t=kg.find(r=>r.name===n.name);e.innerHTML=`<div class="svg-container">${(t==null?void 0:t.svg)||""}</div>`}return["nw","ne","sw","se"].forEach(t=>{const r=document.createElement("div");r.className=`resize-handle ${t}`,e.appendChild(r),r.onmousedown=i=>{i.stopPropagation(),cx(i,n,t)}}),e.onclick=t=>{t.stopPropagation(),z.selectedId=n.id,document.querySelectorAll(".board-element").forEach(r=>r.classList.toggle("selected",r.dataset.id===n.id)),dr(n.id)},e.onmousedown=t=>{if(t.target.closest('[contenteditable="true"]'))return;z.isDragging=!0,z.selectedId=n.id;const r=e.getBoundingClientRect();z.dragOffset={x:(t.clientX-r.left)/z.zoom,y:(t.clientY-r.top)/z.zoom};const i=o=>{const c=et.canvas.getBoundingClientRect(),l=(o.clientX-c.left)/z.zoom-z.dragOffset.x,u=(o.clientY-c.top)/z.zoom-z.dragOffset.y;e.style.left=`${l}px`,e.style.top=`${u}px`,n.x=l,n.y=u},s=()=>{z.isDragging=!1,na(z.projectId,n.id,{x:n.x,y:n.y}),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},e.oncontextmenu=t=>{t.preventDefault(),lx(t,n.id)},Gl(e,n),e}function cx(n,e,t){n.stopPropagation();const r=n.clientX,i=n.clientY,s=e.width||100,o=e.height||100,c=e.x,l=e.y,u=p=>{const m=(p.clientX-r)/z.zoom,v=(p.clientY-i)/z.zoom;let k=s,x=o,A=c,N=l;if(t.includes("e")&&(k=Math.max(20,s+m)),t.includes("s")&&(x=Math.max(20,o+v)),t.includes("w")){const O=s-Math.max(20,s-m);k=s-O,A=c+O}if(t.includes("n")){const O=o-Math.max(20,o-v);x=o-O,N=l+O}if(e.type==="text"){const O=k/s;Ne(e.id,{width:k,fontSize:Math.max(12,Math.floor((e.fontSize||32)*O))})}else Ne(e.id,{width:k,height:x,x:A,y:N})},f=()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",f),na(z.projectId,e.id,{width:e.width,height:e.height,x:e.x,y:e.y,fontSize:e.fontSize})};window.addEventListener("mousemove",u),window.addEventListener("mouseup",f)}function lx(n,e){const t=document.getElementById("editor-context-menu");t.style.display="block",t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`;const r=t.querySelectorAll(".context-item");r[0].onclick=()=>{ux(e),t.style.display="none"},r[1].onclick=()=>{ra(z.projectId,e),t.style.display="none"},window.addEventListener("mousedown",i=>{t.contains(i.target)||(t.style.display="none")},{once:!0})}async function ux(n){const e=z.elements.get(n);if(e){const{id:t,dom:r,...i}=e;i.x+=30,i.y+=30,await Ir(z.projectId,i)}}async function Ya(n,e,t){await Ir(z.projectId,{type:"text",content:n,x:200,y:200,fontSize:e,fontWeight:t,fontFamily:"Outfit",color:"#1a1a1a",zIndex:z.elements.size+1})}async function dx(n){await Ir(z.projectId,{type:"element",name:n,x:400,y:400,width:200,height:200,color:"#1a1a1a",zIndex:z.elements.size+1})}function Kh(n){et.canvas.style.background=n,ta(z.projectId,{background:n})}function Lc(n,e){z.project.width=n,z.project.height=e,et.canvas.style.width=`${n}px`,et.canvas.style.height=`${e}px`,ta(z.projectId,{width:n,height:e});const t=et.workspace.offsetWidth-100,r=et.workspace.offsetHeight-100;z.zoom=Math.min(t/n,r/e,1),et.canvas.style.transform=`scale(${z.zoom})`}async function hx(n,e){z.projectId=e,n.innerHTML=sx(),et.canvas=document.getElementById("editing-canvas"),et.workspace=document.getElementById("editor-workspace");const t=await Fm(e);if(!t)return;z.project=t,t.width&&Lc(t.width,t.height),et.canvas.style.background=t.background||"#ffffff",document.getElementById("project-title").textContent=t.name,document.querySelectorAll(".editor-tool-btn").forEach(i=>i.onclick=()=>{document.querySelectorAll(".editor-tool-btn").forEach(s=>s.classList.remove("active")),i.classList.add("active"),Gh(i.dataset.tab)}),Gh("images"),document.getElementById("editor-back").onclick=()=>window.location.hash="#/",document.getElementById("editor-file-input").onchange=async i=>{const s=i.target.files[0];if(!s)return;const o=s.type.startsWith("video/"),{url:c}=await Er(s);await Ir(e,{type:o?"video":"image",src:c,x:100,y:100,width:400,height:400,zIndex:z.elements.size+1})},Vc=Bm(e,{onAdd:i=>{const s=ax(i);et.canvas.appendChild(s),z.elements.set(i.id,{...i,dom:s})},onModify:i=>{const s=z.elements.get(i.id);s&&(Object.assign(s,i),Gl(s.dom,s))},onRemove:i=>{const s=z.elements.get(i.id);s&&(s.dom.remove(),z.elements.delete(i.id))}}),window.onkeydown=i=>{if(!i.target.closest('[contenteditable="true"]')){if(i.ctrlKey&&i.key==="c"&&z.selectedId&&(z.clipboard={...z.elements.get(z.selectedId)}),i.ctrlKey&&i.key==="v"&&z.clipboard){const{id:s,dom:o,...c}=z.clipboard;c.x+=30,c.y+=30,Ir(z.projectId,c)}i.key==="Delete"&&z.selectedId&&(ra(z.projectId,z.selectedId),z.selectedId=null,dr(null))}};const r=()=>{var o,c;const i=et.workspace.offsetWidth-100,s=et.workspace.offsetHeight-100;z.zoom=Math.min(i/(((o=z.project)==null?void 0:o.width)||1080),s/(((c=z.project)==null?void 0:c.height)||1080),1),et.canvas.style.transform=`scale(${z.zoom})`};window.addEventListener("resize",r),r()}function fx(){Vc&&Vc()}const Ns=document.getElementById("app");let nr=null;function px(){const n=window.location.hash||"#/",[e,t]=n.slice(1).split("?");return e.startsWith("/edit/")?{page:"edit",editId:e.replace("/edit/","")}:e.startsWith("/board/")?{page:"board",boardId:e.replace("/board/","")}:{page:"dashboard"}}async function Zh(){nr==="dashboard"&&pI(),nr==="board"&&JA(),nr==="edit"&&fx();const n=px();Ns.innerHTML="",n.page==="board"&&n.boardId?(nr="board",QA(Ns,n.boardId)):n.page==="edit"&&n.editId?(nr="edit",hx(Ns,n.editId)):(nr="dashboard",fI(Ns))}async function mx(){try{await xm()}catch(e){console.warn("Auth init failed, continuing offline:",e)}const n=document.getElementById("loading-screen");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),300)),window.addEventListener("hashchange",Zh),Zh()}mx();
