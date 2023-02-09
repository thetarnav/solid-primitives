(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const m={},V=(e,t)=>e===t,x={equals:V};let W=R;const y=1,v=2,I={owned:null,cleanups:null,context:null,owner:null};var u=null;let g=null,f=null,c=null,w=null,_=0;function Y(e,t){const n=f,s=u,i=e.length===0,o=i?I:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>B(()=>N(o)));u=o,f=null;try{return S(r,!0)}finally{f=n,u=s}}function J(e,t){t=t?Object.assign({},x,t):x;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),P(n,i));return[M.bind(n),s]}function T(e,t,n){const s=j(e,t,!1,y);E(s)}function X(e,t,n){n=n?Object.assign({},x,n):x;const s=j(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,E(s),M.bind(s)}function B(e){const t=f;f=null;try{return e()}finally{f=t}}function Z(e){return u===null||(u.cleanups===null?u.cleanups=[e]:u.cleanups.push(e)),e}function k(){return u}function M(){const e=g;if(this.sources&&(this.state||e))if(this.state===y||e)E(this);else{const t=c;c=null,S(()=>C(this),!1),c=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function P(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=g&&g.running;r&&g.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?c.push(o):w.push(o),o.observers&&G(o)),r||(o.state=y)}if(c.length>1e6)throw c=[],new Error},!1)),t}function E(e){if(!e.fn)return;N(e);const t=u,n=f,s=_;f=u=e,z(e,e.value,s),f=n,u=t}function z(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=y,e.owned&&e.owned.forEach(N),e.owned=null),H(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?P(e,s):e.value=s,e.updatedAt=n)}function j(e,t,n,s=y,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return u===null||u!==I&&(u.owned?u.owned.push(o):u.owned=[o]),o}function D(e){const t=g;if(e.state===0||t)return;if(e.state===v||t)return C(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<_);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===y||t)E(e);else if(e.state===v||t){const i=c;c=null,S(()=>C(e,n[0]),!1),c=i}}function S(e,t){if(c)return e();let n=!1;t||(c=[]),w?n=!0:w=[],_++;try{const s=e();return ee(n),s}catch(s){c||(w=null),H(s)}}function ee(e){if(c&&(R(c),c=null),e)return;const t=w;w=null,t.length&&S(()=>W(t),!1)}function R(e){for(let t=0;t<e.length;t++)D(e[t])}function C(e,t){const n=g;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===y||n?i!==t&&D(i):(i.state===v||n)&&C(i,t))}}function G(e){const t=g;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=v,s.pure?c.push(s):w.push(s),s.observers&&G(s))}}function N(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function te(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function H(e){throw e=te(e),e}function ne(e,t){return B(()=>e(t||{}))}function se(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,a=t[i-1].nextSibling,h=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const p=o<s?l?n[l-1].nextSibling:n[o-l]:a;for(;l<o;)e.insertBefore(n[l++],p)}else if(o===l)for(;r<i;)(!h||!h.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const p=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],p),t[i]=n[o]}else{if(!h){h=new Map;let d=l;for(;d<o;)h.set(n[d],d++)}const p=h.get(t[r]);if(p!=null)if(l<p&&p<o){let d=r,L=1,U;for(;++d<i&&d<o&&!((U=h.get(t[d]))==null||U!==p+L);)L++;if(L>p-l){const Q=t[r];for(;l<p;)e.insertBefore(n[l++],Q)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}function ie(e,t,n,s={}){let i;return Y(o=>{i=o,t===document?e():K(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function $(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function K(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return A(e,t,s,n);T(i=>A(e,t(),i,n),s)}function A(e,t,n,s,i){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(m.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=b(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(m.context)return n;n=b(e,n,s)}else{if(o==="function")return T(()=>{let l=t();for(;typeof l=="function";)l=l();n=A(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(O(l,t,n,i))return T(()=>n=A(e,l,n,s,!0)),()=>n;if(m.context){if(!l.length)return n;for(let h=0;h<l.length;h++)if(l[h].parentNode)return n=l}if(l.length===0){if(n=b(e,n,s),r)return n}else a?n.length===0?q(e,l,s):se(e,n,l):(n&&b(e),q(e,l));n=l}else if(t instanceof Node){if(m.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=b(e,n,s,t);b(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function O(e,t,n,s){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],a=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=O(e,l,a)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=O(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const h=String(l);a&&a.nodeType===3&&a.data===h?e.push(a):e.push(document.createTextNode(h))}}return i}function q(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function b(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const a=l.parentNode===e;!o&&!r?a?e.replaceChild(i,l):e.insertBefore(i,n):a&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}var le=e=>k()?Z(e):e;function F(e,t,n,s){return e.addEventListener(t,n,s),le(e.removeEventListener.bind(e,t,n,s))}function oe(e){const t=F(window,"online",e.bind(void 0,!0)),n=F(window,"offline",e.bind(void 0,!1));return()=>(t(),n())}function re(){const[e,t]=J(navigator.onLine);return oe(t),e}const fe=$('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center">You are currently: <!> (try toggling your network state in dev tools!)</div>'),ue=$("<strong>online</strong>"),ce=$("<strong>offline</strong>"),ae=()=>{const e=re();return(()=>{const t=fe.cloneNode(!0),n=t.firstChild,s=n.nextSibling;return s.nextSibling,K(t,(()=>{const i=X(()=>!!e());return()=>i()?ue.cloneNode(!0):ce.cloneNode(!0)})(),s),t})()};ie(()=>ne(ae,{}),document.getElementById("root"));
