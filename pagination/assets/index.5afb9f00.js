(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const $={},Ee=(e,t)=>e===t,$e=Symbol("solid-track"),G={equals:Ee};let Le=me;const v=1,X=2,de={owned:null,cleanups:null,context:null,owner:null},ee={};var A=null;let M=null,m=null,S=null,I=null,se=0;function R(e,t){const n=m,s=A,i=e.length===0,l=i?de:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>j(()=>W(l)));A=l,m=null;try{return T(r,!0)}finally{m=n,A=s}}function _(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),pe(n,i));return[ge.bind(n),s]}function te(e,t,n){const s=ie(e,t,!0,v);F(s)}function K(e,t,n){const s=ie(e,t,!1,v);F(s)}function N(e,t,n){n=n?Object.assign({},G,n):G;const s=ie(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,F(s),ge.bind(s)}function Pe(e,t,n){let s,i,l;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,l=t||{}):(s=e,i=t,l=n||{});let r=null,o=ee,u=null,f=!1,c="initialValue"in l,y=typeof s=="function"&&N(s);const h=new Set,[b,C]=(l.storage||_)(l.initialValue),[E,O]=_(void 0),[a,g]=_(void 0,{equals:!1}),[d,L]=_(c?"ready":"unresolved");if($.context){u=`${$.context.id}${$.context.count++}`;let p;l.ssrLoadFrom==="initial"?o=l.initialValue:$.load&&(p=$.load(u))&&(o=p[0])}function P(p,w,x,D){return r===p&&(r=null,c=!0,(p===o||w===o)&&l.onHydrated&&queueMicrotask(()=>l.onHydrated(D,{value:w})),o=ee,Y(w,x)),w}function Y(p,w){T(()=>{w||C(()=>p),L(w?"errored":"ready"),O(w);for(const x of h.keys())x.decrement();h.clear()},!1)}function Z(){const p=ke,w=b(),x=E();if(x&&!r)throw x;return m&&!m.user&&p&&te(()=>{a(),r&&(p.resolved||h.has(p)||(p.increment(),h.add(p)))}),w}function z(p=!0){if(p!==!1&&f)return;f=!1;const w=y?y():s;if(w==null||w===!1){P(r,j(b));return}const x=o!==ee?o:j(()=>i(w,{value:b(),refetching:p}));return typeof x!="object"||!(x&&"then"in x)?(P(r,x,void 0,w),x):(r=x,f=!0,queueMicrotask(()=>f=!1),T(()=>{L(c?"refreshing":"pending"),g()},!1),x.then(D=>P(x,D,void 0,w),D=>P(x,void 0,we(D),w)))}return Object.defineProperties(Z,{state:{get:()=>d()},error:{get:()=>E()},loading:{get(){const p=d();return p==="pending"||p==="refreshing"}},latest:{get(){if(!c)return Z();const p=E();if(p&&!r)throw p;return b()}}}),y?te(()=>z(!1)):z(!1),[Z,{refetch:z,mutate:C}]}function Ne(e){return T(e,!1)}function j(e){const t=m;m=null;try{return e()}finally{m=t}}function he(e){return A===null||(A.cleanups===null?A.cleanups=[e]:A.cleanups.push(e)),e}let ke;function ge(){const e=M;if(this.sources&&(this.state||e))if(this.state===v||e)F(this);else{const t=S;S=null,T(()=>Q(this),!1),S=t}if(m){const t=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(t)):(m.sources=[this],m.sourceSlots=[t]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function pe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=M&&M.running;r&&M.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?S.push(l):I.push(l),l.observers&&be(l)),r||(l.state=v)}if(S.length>1e6)throw S=[],new Error},!1)),t}function F(e){if(!e.fn)return;W(e);const t=A,n=m,s=se;m=A=e,Oe(e,e.value,s),m=n,A=t}function Oe(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=v,e.owned&&e.owned.forEach(W),e.owned=null),xe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?pe(e,s):e.value=s,e.updatedAt=n)}function ie(e,t,n,s=v,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:A,context:null,pure:n};return A===null||A!==de&&(A.owned?A.owned.push(l):A.owned=[l]),l}function ye(e){const t=M;if(e.state===0||t)return;if(e.state===X||t)return Q(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===v||t)F(e);else if(e.state===X||t){const i=S;S=null,T(()=>Q(e,n[0]),!1),S=i}}function T(e,t){if(S)return e();let n=!1;t||(S=[]),I?n=!0:I=[],se++;try{const s=e();return _e(n),s}catch(s){S||(I=null),xe(s)}}function _e(e){if(S&&(me(S),S=null),e)return;const t=I;I=null,t.length&&T(()=>Le(t),!1)}function me(e){for(let t=0;t<e.length;t++)ye(e[t])}function Q(e,t){const n=M;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===v||n?i!==t&&ye(i):(i.state===X||n)&&Q(i,t))}}function be(e){const t=M;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=X,s.pure?S.push(s):I.push(s),s.observers&&be(s))}}function W(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)W(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function we(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function xe(e){throw e=we(e),e}const je=Symbol("fallback");function le(e){for(let t=0;t<e.length;t++)e[t]()}function Te(e,t,n={}){let s=[],i=[],l=[],r=0,o=t.length>1?[]:null;return he(()=>le(l)),()=>{let u=e()||[],f,c;return u[$e],j(()=>{let h=u.length,b,C,E,O,a,g,d,L,P;if(h===0)r!==0&&(le(l),l=[],s=[],i=[],r=0,o&&(o=[])),n.fallback&&(s=[je],i[0]=R(Y=>(l[0]=Y,n.fallback())),r=1);else if(r===0){for(i=new Array(h),c=0;c<h;c++)s[c]=u[c],i[c]=R(y);r=h}else{for(E=new Array(h),O=new Array(h),o&&(a=new Array(h)),g=0,d=Math.min(r,h);g<d&&s[g]===u[g];g++);for(d=r-1,L=h-1;d>=g&&L>=g&&s[d]===u[L];d--,L--)E[L]=i[d],O[L]=l[d],o&&(a[L]=o[d]);for(b=new Map,C=new Array(L+1),c=L;c>=g;c--)P=u[c],f=b.get(P),C[c]=f===void 0?-1:f,b.set(P,c);for(f=g;f<=d;f++)P=s[f],c=b.get(P),c!==void 0&&c!==-1?(E[c]=i[f],O[c]=l[f],o&&(a[c]=o[f]),c=C[c],b.set(P,c)):l[f]();for(c=g;c<h;c++)c in E?(i[c]=E[c],l[c]=O[c],o&&(o[c]=a[c],o[c](c))):i[c]=R(y);i=i.slice(0,r=h),s=u.slice(0)}return i});function y(h){if(l[c]=h,o){const[b,C]=_(c);return o[c]=C,t(u[c],b)}return t(u[c])}}}function H(e,t){return j(()=>e(t||{}))}function oe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(Te(()=>e.each,e.children,t||void 0))}function ve(e){let t=!1;const n=e.keyed,s=N(()=>e.when,void 0,{equals:(i,l)=>t?i===l:!i==!l});return N(()=>{const i=s();if(i){const l=e.children,r=typeof l=="function"&&l.length>0;return t=n||r,r?j(()=>l(i)):l}return e.fallback},void 0,void 0)}const Me=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ie=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Me]),Ue=new Set(["innerHTML","textContent","innerText","children"]),qe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),re=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Ke=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Be={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function De(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,u=t[i-1].nextSibling,f=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const c=l<s?o?n[o-1].nextSibling:n[l-o]:u;for(;o<l;)e.insertBefore(n[o++],c)}else if(l===o)for(;r<i;)(!f||!f.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],c),t[i]=n[l]}else{if(!f){f=new Map;let y=o;for(;y<l;)f.set(n[y],y++)}const c=f.get(t[r]);if(c!=null)if(o<c&&c<l){let y=r,h=1,b;for(;++y<i&&y<l&&!((b=f.get(t[y]))==null||b!==c+h);)h++;if(h>c-o){const C=t[r];for(;o<c;)e.insertBefore(n[o++],C)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const ce="_$DX_DELEGATE";function Fe(e,t,n,s={}){let i;return R(l=>{i=l,t===document?e():q(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function J(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ae(e,t=window.document){const n=t[ce]||(t[ce]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Ze))}}function Se(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ve(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Re(e,t){t==null?e.removeAttribute("class"):e.className=t}function He(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function Ge(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,r;for(l=0,r=i.length;l<r;l++){const o=i[l];!o||o==="undefined"||t[o]||(fe(e,o,!1),delete n[o])}for(l=0,r=s.length;l<r;l++){const o=s[l],u=!!t[o];!o||o==="undefined"||n[o]===u||!u||(fe(e,o,!0),n[o]=u)}return n}function Xe(e,t,n){if(!t)return n?Se(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(s.setProperty(l,i),n[l]=i);return n}function Qe(e,t={},n,s){const i={};return s||K(()=>i.children=B(e,t.children,i.children)),K(()=>t.ref&&t.ref(e)),K(()=>Je(e,t,n,!0,i,!0)),i}function We(e,t,n){return j(()=>e(t,n))}function q(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return B(e,t,s,n);K(i=>B(e,t(),i,n),s)}function Je(e,t,n,s,i={},l=!1){t||(t={});for(const r in i)if(!(r in t)){if(r==="children")continue;i[r]=ue(e,r,null,i[r],n,l)}for(const r in t){if(r==="children"){s||B(e,t.children);continue}const o=t[r];i[r]=ue(e,r,o,i[r],n,l)}}function Ye(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function fe(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function ue(e,t,n,s,i,l){let r,o,u;if(t==="style")return Xe(e,n,s);if(t==="classList")return Ge(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);s&&e.removeEventListener(f,s),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);s&&e.removeEventListener(f,s,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),c=Ke.has(f);if(!c&&s){const y=Array.isArray(s)?s[0]:s;e.removeEventListener(f,y)}(c||n)&&(He(e,f,n,c),c&&Ae([f]))}else if((u=Ue.has(t))||!i&&(re[t]||(o=Ie.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?Re(e,n):r&&!o&&!u?e[Ye(t)]=n:e[re[t]||t]=n;else{const f=i&&t.indexOf(":")>-1&&Be[t.split(":")[0]];f?Ve(e,f,t,n):Se(e,qe[t]||t,n)}return n}function Ze(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),$.registry&&!$.done&&($.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function B(e,t,n,s,i){for($.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if($.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=U(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if($.context)return n;n=U(e,n,s)}else{if(l==="function")return K(()=>{let o=t();for(;typeof o=="function";)o=o();n=B(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(ne(o,t,n,i))return K(()=>n=B(e,o,n,s,!0)),()=>n;if($.context){if(!o.length)return n;for(let f=0;f<o.length;f++)if(o[f].parentNode)return n=o}if(o.length===0){if(n=U(e,n,s),r)return n}else u?n.length===0?ae(e,o,s):De(e,n,o):(n&&U(e),ae(e,o));n=o}else if(t instanceof Node){if($.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=U(e,n,s,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ne(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],u=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=ne(e,o,u)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=ne(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||i}else e.push(o),i=!0;else{const f=String(o);u&&u.nodeType===3&&u.data===f?e.push(u):e.push(document.createTextNode(f))}}return i}function ae(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function U(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(i,o):e.insertBefore(i,n):u&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}var k=()=>{},ze=e=>typeof e=="function"&&!e.length?e():e;function et(e,t,n){const s=new IntersectionObserver(t,n),i=f=>{s.observe(f)},l=f=>s.unobserve(f),r=()=>e.forEach(i),o=()=>s.disconnect(),u=()=>s.takeRecords().forEach(f=>l(f.target));return r(),he(o),{add:i,remove:l,start:r,stop:o,reset:u,instance:s}}const Ce={pages:1,maxPages:10,showDisabled:!0,showFirst:!0,showPrev:!0,showNext:!0,showLast:!0,firstContent:"|<",prevContent:"<",nextContent:">",lastContent:">|"},V=(e,t,n,s)=>typeof t=="boolean"?t:typeof t=="function"?t(n,s):Ce[e],tt=e=>{const t=N(()=>Object.assign({},Ce,ze(e))),[n,s]=_(t().initialPage||1),i=a=>(typeof a=="function"&&(a=a(n())),a>=1&&a<=t().pages?s(a):n()),l=(a,g)=>({ArrowLeft:()=>i(d=>d-1),ArrowRight:()=>i(d=>d+1),Home:()=>i(1),End:()=>i(t().pages),Space:()=>i(a),Return:()=>i(a)}[g.key]||k)(),r=[...Array(t().pages)].map((a,g)=>(d=>Object.defineProperties({children:d.toString(),onClick:[i,d],onKeyUp:[l,d]},{"aria-current":{get:()=>n()===d?"true":void 0,set:k,enumerable:!0},page:{value:d,enumerable:!1}}))(g+1)),o=Object.defineProperties({onClick:[i,1],onKeyUp:[l,1]},{disabled:{get:()=>n()<=1,set:k,enumerable:!0},children:{get:()=>t().firstContent,set:k,enumerable:!0},page:{value:1,enumerable:!1}}),u=Object.defineProperties({onClick:()=>i(a=>a>1?a-1:a),onKeyUp:a=>l(n()-1,a)},{disabled:{get:()=>n()<=1,set:k,enumerable:!0},children:{get:()=>t().prevContent,set:k,enumerable:!0},page:{get:()=>Math.min(1,n()-1),enumerable:!1}}),f=Object.defineProperties({onClick:()=>i(a=>a<t().pages?a+1:a),onKeyUp:a=>l(n()-1,a)},{disabled:{get:()=>n()>=t().pages,set:k,enumerable:!0},children:{get:()=>t().nextContent,set:k,enumerable:!0},page:{get:()=>Math.max(t().pages,n()+1),enumerable:!1}}),c=Object.defineProperties({onClick:()=>i(t().pages),onKeyUp:a=>l(t().pages,a)},{disabled:{get:()=>n()>=t().pages,set:k,enumerable:!0},children:{get:()=>t().lastContent,set:k,enumerable:!0},page:{get:()=>t().pages,enumerable:!1}}),y=N(()=>Math.min(t().pages-t().maxPages,Math.max(1,n()-(t().maxPages>>1))-1)),h=N(()=>V("showFirst",t().showFirst,n(),t().pages)),b=N(()=>V("showPrev",t().showPrev,n(),t().pages)),C=N(()=>V("showNext",t().showNext,n(),t().pages)),E=N(()=>V("showLast",t().showLast,n(),t().pages));return[N(()=>{const a=[];return h()&&a.push(o),b()&&a.push(u),a.push(...r.slice(y(),y()+t().maxPages)),C()&&a.push(f),E()&&a.push(c),a}),n,i]};function nt(e){const[t,n]=_([]),[s,i]=_(0),[l,r]=_(!1),{add:o}=et([],f=>{f.length>0&&f[0].isIntersecting&&!l()&&!u.loading&&i(c=>c+1)}),[u]=Pe(s,e);return te(()=>{const f=u();!f||Ne(()=>{f.length===0&&r(!0),n(c=>[...c,...f])})}),[t,o,{page:s,setPage:i,setPages:n,end:l,setEnd:r}]}const st=J("<h1>Loading...</h1>"),it=J('<div class="w-full min-h-screen flex"><div class="p-24 box-border w-1/2 flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v"><h4>Pagination component</h4><p>Current page: <!> / 100</p><nav class="flex flex-row"></nav><button>jump to random page</button></div></div><div class="bg-gray-800 w-1/2 text-white max-h-screen flex flex-col"><div class="h-[10%] overflow-scroll flex items-center justify-center"><h1>Infinite Scrolling:</h1></div><div class="h-[90%] overflow-scroll"></div></div></div>'),lt=J("<button></button>"),ot=J("<p></p>");async function rt(e){let t=[],n=await fetch(`https://openlibrary.org/search.json?q=hello%20world&page=${e+1}`,{method:"GET"});return n.ok&&(await n.json()).docs.forEach(i=>t.push(i.title)),t}const ct=()=>{const[e,t,n]=tt({pages:100}),[s,i,{end:l}]=nt(rt);return(()=>{const r=it.cloneNode(!0),o=r.firstChild,u=o.firstChild,f=u.firstChild,c=f.nextSibling,y=c.firstChild,h=y.nextSibling;h.nextSibling;const b=c.nextSibling,C=b.nextSibling,E=o.nextSibling,O=E.firstChild,a=O.nextSibling;return q(c,t,h),q(b,H(oe,{get each(){return e()},children:g=>(()=>{const d=lt.cloneNode(!0);return Qe(d,g,!1,!1),d})()})),C.$$click=()=>n(Math.round(Math.random()*100+1)),q(a,H(oe,{get each(){return s()},children:g=>(()=>{const d=ot.cloneNode(!0);return q(d,g),d})()}),null),q(a,H(ve,{get when(){return!l()},get children(){const g=st.cloneNode(!0);return We(i,g,()=>!0),g}}),null),r})()};Fe(()=>H(ct,{}),document.getElementById("root"));Ae(["click"]);
