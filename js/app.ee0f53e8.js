(()=>{"use strict";var e={6618:(e,t,o)=>{var r=o(1957),n=o(1947),a=o(499),i=o(9835);function l(e,t,o,r,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var u=o(1639);const c=(0,u.Z)(s,[["render",l]]),d=c;var p=o(3340),f=o(3746);const h=(0,p.h)((()=>{const e=(0,f.WB)();return e}));var g=o(8339),m=o(7524);m.Z.defaults.baseURL="https://hpm.hwacheon.com/api",m.Z.defaults.headers.common.Authorization=localStorage.getItem("token"),m.Z.interceptors.request.use((function(e){return e.headers.Authorization=localStorage.getItem("token"),e}),(function(e){return Promise.reject(e)}));const v=[{path:"/",component:()=>Promise.all([o.e(736),o.e(714)]).then(o.bind(o,284)),children:[{path:"/",component:()=>Promise.all([o.e(736),o.e(735)]).then(o.bind(o,5735))}]},{path:"/login",component:()=>Promise.all([o.e(736),o.e(974)]).then(o.bind(o,4974))},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(862)]).then(o.bind(o,1862))}],b=v,y=g.r5,w=(0,g.p7)({history:y(""),routes:b,scrollBehavior:()=>({left:0,top:0})}),L=(0,p.BC)((function(){return w}));async function k(e,t){const o=e(d);o.use(n.Z,t);const r="function"===typeof h?await h({}):h;o.use(r);const i=(0,a.Xl)("function"===typeof L?await L({store:r}):L);return r.use((({store:e})=>{e.router=i})),{app:o,store:r,router:i}}var P=o(5448),S=o(6827),j=o(6950),A=o(2941);const C={config:{},iconSet:P.Z,plugins:{Notify:S.Z,Loading:j.Z,AppFullscreen:A.Z}},O="";async function N({app:e,router:t,store:o},r){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<r.length;u++)try{await r[u]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:l,publicPath:O})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&(e.use(t),e.mount("#q-app"))}k(r.ri,C).then((e=>{const[t,r]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,2351)),Promise.resolve().then(o.bind(o,1569))]).then((t=>{const o=r(t).filter((e=>"function"===typeof e));N(e,o)}))}))},1569:(e,t,o)=>{o.r(t),o.d(t,{api:()=>a,default:()=>i});var r=o(3340),n=o(7524);const a=n.Z.create({baseURL:"https://api.example.com"}),i=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=n.Z,e.config.globalProperties.$api=a}))},2351:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var r=o(3340),n=o(7712);const a={Login:{id:"ID",pw:"Password",login:"Sign in",failedLogin:"Sign in failure",failedDsc:"Check your account or password.",welcome:", Welcome.",needLogin:"Login"},Layout:{Company:"myweb",LogOutMsg:"Are you sure you want to sign out from your account?",Notice:"Notifications",LDMode:"Dark/Light Mode",Acct:"Account",Logout:"Log out",MenuName:["Dashboard","My Project","Message","Goal","My workplace"]}},i={Login:{id:"계정",pw:"비밀번호",login:"로그인",failedLogin:"로그인 실패",failedDsc:"계정 또는 비밀번호를 확인하세요.",welcome:"님 환영합니다.",needLogin:"로그인 바로가기"},Layout:{Company:"화천기공",LogOutMsg:"로그아웃 하시겠습니까?",Notice:"알림",LDMode:"Dark/Light 모드",Acct:"내 정보",Logout:"로그아웃",MenuName:["대시보드","내 작업","메세지","목표","내 작업공간"]}},l={"en-US":a,"ko-KR":i},s=(0,r.xr)((({app:e})=>{const t=(0,n.o)({locale:"en-US",globalInjection:!0,messages:l});e.use(t)}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{714:"57f0ff26",735:"52ed6a6b",862:"fee55266",974:"d08932f1"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+e+".d2dac58a.css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="myweb:";o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[n];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,o,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),n(s)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var i=o.miniCssF(r),l=o.p+i;if(t(i,l))return n();e(r,l,null,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={735:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var i=o.p+o.u(t),l=new Error,s=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};o.l(i,s,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,l,s]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(s)var c=s(o)}for(t&&t(r);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},r=globalThis["webpackChunkmyweb"]=globalThis["webpackChunkmyweb"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(6618)));r=o.O(r)})();