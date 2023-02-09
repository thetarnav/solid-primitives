(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const p={},Q=(e,n)=>e===n,U={equals:Q};let W=M;const b=1,S=2,I={owned:null,cleanups:null,context:null,owner:null};var h=null;let w=null,u=null,f=null,y=null,D=0;function X(e,n){const t=u,s=h,l=e.length===0,i=l?I:{owned:null,cleanups:null,context:null,owner:n||s},r=l?e:()=>e(()=>L(()=>A(i)));h=i,u=null;try{return v(r,!0)}finally{u=t,h=s}}function J(e,n){n=n?Object.assign({},U,n):U;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=l=>(typeof l=="function"&&(l=l(t.value)),R(t,l));return[Z.bind(t),s]}function N(e,n,t){const s=ee(e,n,!1,b);O(s)}function L(e){const n=u;u=null;try{return e()}finally{u=n}}function Z(){const e=w;if(this.sources&&(this.state||e))if(this.state===b||e)O(this);else{const n=f;f=null,v(()=>C(this),!1),f=n}if(u){const n=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(n)):(u.sources=[this],u.sourceSlots=[n]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function R(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&v(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=w&&w.running;r&&w.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?f.push(i):y.push(i),i.observers&&k(i)),r||(i.state=b)}if(f.length>1e6)throw f=[],new Error},!1)),n}function O(e){if(!e.fn)return;A(e);const n=h,t=u,s=D;u=h=e,z(e,e.value,s),u=t,h=n}function z(e,n,t){let s;try{s=e.fn(n)}catch(l){e.pure&&(e.state=b,e.owned&&e.owned.forEach(A),e.owned=null),G(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?R(e,s):e.value=s,e.updatedAt=t)}function ee(e,n,t,s=b,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==I&&(h.owned?h.owned.push(i):h.owned=[i]),i}function V(e){const n=w;if(e.state===0||n)return;if(e.state===S||n)return C(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===b||n)O(e);else if(e.state===S||n){const l=f;f=null,v(()=>C(e,t[0]),!1),f=l}}function v(e,n){if(f)return e();let t=!1;n||(f=[]),y?t=!0:y=[],D++;try{const s=e();return te(t),s}catch(s){f||(y=null),G(s)}}function te(e){if(f&&(M(f),f=null),e)return;const n=y;y=null,n.length&&v(()=>W(n),!1)}function M(e){for(let n=0;n<e.length;n++)V(e[n])}function C(e,n){const t=w;e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];l.sources&&(l.state===b||t?l!==n&&V(l):(l.state===S||t)&&C(l,n))}}function k(e){const n=w;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=S,s.pure?f.push(s):y.push(s),s.observers&&k(s))}}function A(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const i=l.pop(),r=t.observerSlots.pop();s<l.length&&(i.sourceSlots[r]=s,l[s]=i,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)A(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ne(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function G(e){throw e=ne(e),e}function E(e,n){return L(()=>e(n||{}))}function se(e,n,t){let s=t.length,l=n.length,i=s,r=0,o=0,c=n[l-1].nextSibling,a=null;for(;r<l||o<i;){if(n[r]===t[o]){r++,o++;continue}for(;n[l-1]===t[i-1];)l--,i--;if(l===r){const d=i<s?o?t[o-1].nextSibling:t[i-o]:c;for(;o<i;)e.insertBefore(t[o++],d)}else if(i===o)for(;r<l;)(!a||!a.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[i-1]&&t[o]===n[l-1]){const d=n[--l].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--i],d),n[l]=t[i]}else{if(!a){a=new Map;let g=o;for(;g<i;)a.set(t[g],g++)}const d=a.get(n[r]);if(d!=null)if(o<d&&d<i){let g=r,T=1,B;for(;++g<l&&g<i&&!((B=a.get(n[g]))==null||B!==d+T);)T++;if(T>d-o){const K=n[r];for(;o<d;)e.insertBefore(t[o++],K)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const F="_$DX_DELEGATE";function le(e,n,t,s={}){let l;return X(i=>{l=i,n===document?e():x(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{l(),n.textContent=""}}function P(e,n,t){const s=document.createElement("template");s.innerHTML=e;let l=s.content.firstChild;return t&&(l=l.firstChild),l}function ie(e,n=window.document){const t=n[F]||(n[F]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,oe))}}function x(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return $(e,n,s,t);N(l=>$(e,n(),l,t),s)}function oe(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let l=s.nextSibling;s.remove(),s=l}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?s.call(t,l,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function $(e,n,t,s,l){for(p.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(p.context)return t;if(i==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=m(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(p.context)return t;t=m(e,t,s)}else{if(i==="function")return N(()=>{let o=n();for(;typeof o=="function";)o=o();t=$(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],c=t&&Array.isArray(t);if(_(o,n,t,l))return N(()=>t=$(e,o,t,s,!0)),()=>t;if(p.context){if(!o.length)return t;for(let a=0;a<o.length;a++)if(o[a].parentNode)return t=o}if(o.length===0){if(t=m(e,t,s),r)return t}else c?t.length===0?j(e,o,s):se(e,t,o):(t&&m(e),j(e,o));t=o}else if(n instanceof Node){if(p.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=m(e,t,s,n);m(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function _(e,n,t,s){let l=!1;for(let i=0,r=n.length;i<r;i++){let o=n[i],c=t&&t[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))l=_(e,o,c)||l;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();l=_(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||l}else e.push(o),l=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return l}function j(e,n,t=null){for(let s=0,l=n.length;s<l;s++)e.insertBefore(n[s],t)}function m(e,n,t,s){if(t===void 0)return e.textContent="";const l=s||document.createTextNode("");if(n.length){let i=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(l!==o){const c=o.parentNode===e;!i&&!r?c?e.replaceChild(l,o):e.insertBefore(l,t):c&&o.remove()}else i=!0}}else e.insertBefore(l,t);return[l]}function H(e){return new Promise(n=>setTimeout(()=>n(!0),e??500))}function re(e){return H().then(()=>`Your email was sent to ${e.get("to")||"no one"} with your default provider`)}function ue(e){return H().then(()=>`Your email was sent to ${e.get("to")||"no one"} with an alternative provider`)}function Y(e){return function(...n){const[t,s,{cancelable:l=!1}={}]=n,i=`on${t[0].toUpperCase()}${t.slice(1)}`,r=e[i];if(typeof r!="function")return!0;const o=new CustomEvent(t,{detail:s,cancelable:l});return r(o),!o.defaultPrevented}}const fe=P('<div class="p-2 box-border w-full min-h-screen grid grid-rows-3 justify-center space-y-4 bg-gray-800 text-white"></div>'),ce=P('<div class="wrapper-v w-3xl"><h2 class="text-5xl"></h2><div class="flex"><button class="btn w-25 text-4xl"> + </button><button class="btn w-25 text-4xl"> - </button></div><button class="btn w-xs text-4xl">Clear</button></div>'),ae=P('<form action="POST" class="wrapper-v w-3xl"><h4></h4><input class="input w-full" name="to" type="email" placeholder="test@email.com"><input class="input w-full" name="subject" type="text" placeholder="RE: the answer"><textarea class="input w-full" name="body" placeholder="42"></textarea><button class="btn w-xs">Send Email</button></form>'),he=()=>{const[e,n]=J(0);return(()=>{const t=fe.cloneNode(!0);return x(t,E(de,{onCleanCounter:()=>n(0),onValueChange:s=>n(e()+(s?.detail??1)),get value(){return e()}}),null),x(t,E(q,{formTitle:"uncontrolled form"}),null),x(t,E(q,{formTitle:"controlled form",onSend:s=>{s.preventDefault(),ue(s.detail).then(console.log)}}),null),t})()},de=e=>{const n=Y(e);return(()=>{const t=ce.cloneNode(!0),s=t.firstChild,l=s.nextSibling,i=l.firstChild,r=i.nextSibling,o=l.nextSibling;return x(s,()=>e.value),i.$$click=()=>n("valueChange"),r.$$click=()=>n("valueChange",-1),o.$$click=()=>n("cleanCounter"),t})()},q=e=>{const n=Y(e),t=s=>{s.preventDefault();const l=new FormData(s.target);!n("send",l,{cancelable:!0})||re(l).then(console.log)};return(()=>{const s=ae.cloneNode(!0),l=s.firstChild;return s.addEventListener("submit",t),x(l,()=>e.formTitle),s})()};le(()=>E(he,{}),document.getElementById("root"));ie(["click"]);
