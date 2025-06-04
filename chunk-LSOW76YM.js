import{A as Cn,B as An,F as ht,b as ft,c as pn,d as gn,e as yn,f as He,n as vn,u as _n,v as _e,w as bn}from"./chunk-VNHO5V6R.js";import{$ as te,Ab as q,Bb as dt,C as sn,Cb as un,Db as dn,Eb as fn,Fb as ve,Gb as Re,H as an,Hb as je,Lb as hn,Ob as mn,Pb as X,Qb as Le,Ra as ln,Sa as _,T as Oe,X as de,Xa as ie,Ya as g,Z as fe,a as C,ab as me,b as w,bb as pe,ca as Pe,cb as M,eb as z,fb as ge,hb as cn,i as Y,ka as lt,la as ke,ma as Ne,mb as S,n as tn,na as he,ob as ye,qb as y,ra as N,rb as v,s as nn,sb as ct,t as rn,va as ne,vb as ut,wa as Te,x as on,xb as V,yb as T,zb as F}from"./chunk-AAKW33XI.js";function cr(e,t,n){return(t=dr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xn(Object(n),!0).forEach(function(i){cr(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xn(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function ur(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dr(e){var t=ur(e,"string");return typeof t=="symbol"?t:t+""}var wn=()=>{},Tt={},Kn={},Zn=null,Jn={mark:wn,measure:wn};try{typeof window<"u"&&(Tt=window),typeof document<"u"&&(Kn=document),typeof MutationObserver<"u"&&(Zn=MutationObserver),typeof performance<"u"&&(Jn=performance)}catch{}var{userAgent:Dn=""}=Tt.navigator||{},U=Tt,p=Kn,Sn=Zn,ze=Jn,sa=!!U.document,L=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Qn=~Dn.indexOf("MSIE")||~Dn.indexOf("Trident/"),fr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,hr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ei={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},mr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ti=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],b="classic",Ye="duotone",pr="sharp",gr="sharp-duotone",ni=[b,Ye,pr,gr],yr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},vr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},_r=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),br={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Cr=["fak","fa-kit","fakd","fa-kit-duotone"],En={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ar=["kit"],xr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},wr=["fak","fakd"],Dr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},In={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ge={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Er=["fak","fa-kit","fakd","fa-kit-duotone"],Ir={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Mr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Vr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},_t={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Fr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],bt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Sr,...Fr],Or=["solid","regular","light","thin","duotone","brands"],ii=[1,2,3,4,5,6,7,8,9,10],Pr=ii.concat([11,12,13,14,15,16,17,18,19,20]),kr=[...Object.keys(Vr),...Or,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ge.GROUP,Ge.SWAP_OPACITY,Ge.PRIMARY,Ge.SECONDARY].concat(ii.map(e=>"".concat(e,"x"))).concat(Pr.map(e=>"w-".concat(e))),Nr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",Ct=16,ri="fa",oi="svg-inline--fa",Z="data-fa-i2svg",At="data-fa-pseudo-element",Tr="data-fa-pseudo-element-pending",Rt="data-prefix",jt="data-icon",Mn="fontawesome-i2svg",Rr="async",jr=["HTML","HEAD","STYLE","SCRIPT"],si=(()=>{try{return!0}catch{return!1}})();function De(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[b]}})}var ai=l({},ei);ai[b]=l(l(l(l({},{"fa-duotone":"duotone"}),ei[b]),En.kit),En["kit-duotone"]);var Lr=De(ai),xt=l({},br);xt[b]=l(l(l(l({},{duotone:"fad"}),xt[b]),In.kit),In["kit-duotone"]);var Vn=De(xt),wt=l({},_t);wt[b]=l(l({},wt[b]),Dr.kit);var Lt=De(wt),Dt=l({},Mr);Dt[b]=l(l({},Dt[b]),xr.kit);var aa=De(Dt),Hr=fr,li="fa-layers-text",zr=hr,Gr=l({},yr),la=De(Gr),Ur=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt=mr,Br=[...Ar,...kr],Ce=U.FontAwesomeConfig||{};function $r(e){var t=p.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,i]=t,r=Wr($r(n));r!=null&&(Ce[i]=r)});var ci={styleDefault:"solid",familyDefault:b,cssPrefix:ri,replacementClass:oi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ce.familyPrefix&&(Ce.cssPrefix=Ce.familyPrefix);var se=l(l({},ci),Ce);se.autoReplaceSvg||(se.observeMutations=!1);var c={};Object.keys(ci).forEach(e=>{Object.defineProperty(c,e,{enumerable:!0,set:function(t){se[e]=t,Ae.forEach(n=>n(c))},get:function(){return se[e]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(e){se.cssPrefix=e,Ae.forEach(t=>t(c))},get:function(){return se.cssPrefix}});U.FontAwesomeConfig=c;var Ae=[];function Yr(e){return Ae.push(e),()=>{Ae.splice(Ae.indexOf(e),1)}}var G=Ct,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qr(e){if(!e||!L)return;let t=p.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;let n=p.head.childNodes,i=null;for(let r=n.length-1;r>-1;r--){let o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=o)}return p.head.insertBefore(t,i),e}var Xr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xe(){let e=12,t="";for(;e-- >0;)t+=Xr[Math.random()*62|0];return t}function ae(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ht(e){return e.classList?ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function ui(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kr(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(ui(e[n]),'" '),"").trim()}function qe(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function zt(e){return e.size!==O.size||e.x!==O.x||e.y!==O.y||e.rotate!==O.rotate||e.flipX||e.flipY}function Zr(e){let{transform:t,containerWidth:n,iconWidth:i}=e,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:d,path:u}}function Jr(e){let{transform:t,width:n=Ct,height:i=Ct,startCentered:r=!1}=e,o="";return r&&Qn?o+="translate(".concat(t.x/G-n/2,"em, ").concat(t.y/G-i/2,"em) "):r?o+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "):o+="translate(".concat(t.x/G,"em, ").concat(t.y/G,"em) "),o+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Qr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function di(){let e=ri,t=oi,n=c.cssPrefix,i=c.replacementClass,r=Qr;if(n!==e||i!==t){let o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Fn=!1;function pt(){c.autoAddCss&&!Fn&&(qr(di()),Fn=!0)}var eo={mixout(){return{dom:{css:di,insertCss:pt}}},hooks(){return{beforeDOMElementCreation(){pt()},beforeI2svg(){pt()}}}},j=U||{};j[R]||(j[R]={});j[R].styles||(j[R].styles={});j[R].hooks||(j[R].hooks={});j[R].shims||(j[R].shims=[]);var P=j[R],fi=[],hi=function(){p.removeEventListener("DOMContentLoaded",hi),$e=1,fi.map(e=>e())},$e=!1;L&&($e=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),$e||p.addEventListener("DOMContentLoaded",hi));function to(e){L&&($e?setTimeout(e,0):fi.push(e))}function Se(e){let{tag:t,attributes:n={},children:i=[]}=e;return typeof e=="string"?ui(e):"<".concat(t," ").concat(Kr(n),">").concat(i.map(Se).join(""),"</").concat(t,">")}function On(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var no=function(t,n){return function(i,r,o,s){return t.call(n,i,r,o,s)}},gt=function(t,n,i,r){var o=Object.keys(t),s=o.length,a=r!==void 0?no(n,r):n,d,u,f;for(i===void 0?(d=1,f=t[o[0]]):(d=0,f=i);d<s;d++)u=o[d],f=a(f,t[u],u,t);return f};function io(e){let t=[],n=0,i=e.length;for(;n<i;){let r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){let o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function St(e){let t=io(e);return t.length===1?t[0].toString(16):null}function ro(e,t){let n=e.length,i=e.charCodeAt(t),r;return i>=55296&&i<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Pn(e){return Object.keys(e).reduce((t,n)=>{let i=e[n];return!!i.icon?t[i.iconName]=i.icon:t[n]=i,t},{})}function Et(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=n,r=Pn(t);typeof P.hooks.addPack=="function"&&!i?P.hooks.addPack(e,Pn(t)):P.styles[e]=l(l({},P.styles[e]||{}),r),e==="fas"&&Et("fa",t)}var{styles:we,shims:oo}=P,mi=Object.keys(Lt),so=mi.reduce((e,t)=>(e[t]=Object.keys(Lt[t]),e),{}),Gt=null,pi={},gi={},yi={},vi={},_i={};function ao(e){return~Br.indexOf(e)}function lo(e,t){let n=t.split("-"),i=n[0],r=n.slice(1).join("-");return i===e&&r!==""&&!ao(r)?r:null}var bi=()=>{let e=i=>gt(we,(r,o,s)=>(r[s]=gt(o,i,{}),r),{});pi=e((i,r,o)=>(r[3]&&(i[r[3]]=o),r[2]&&r[2].filter(a=>typeof a=="number").forEach(a=>{i[a.toString(16)]=o}),i)),gi=e((i,r,o)=>(i[o]=o,r[2]&&r[2].filter(a=>typeof a=="string").forEach(a=>{i[a]=o}),i)),_i=e((i,r,o)=>{let s=r[2];return i[o]=o,s.forEach(a=>{i[a]=o}),i});let t="far"in we||c.autoFetchSvg,n=gt(oo,(i,r)=>{let o=r[0],s=r[1],a=r[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:a}),i},{names:{},unicodes:{}});yi=n.names,vi=n.unicodes,Gt=Xe(c.styleDefault,{family:c.familyDefault})};Yr(e=>{Gt=Xe(e.styleDefault,{family:c.familyDefault})});bi();function Ut(e,t){return(pi[e]||{})[t]}function co(e,t){return(gi[e]||{})[t]}function K(e,t){return(_i[e]||{})[t]}function Ci(e){return yi[e]||{prefix:null,iconName:null}}function uo(e){let t=vi[e],n=Ut("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return Gt}var Ai=()=>({prefix:null,iconName:null,rest:[]});function fo(e){let t=b,n=mi.reduce((i,r)=>(i[r]="".concat(c.cssPrefix,"-").concat(r),i),{});return ni.forEach(i=>{(e.includes(n[i])||e.some(r=>so[i].includes(r)))&&(t=i)}),t}function Xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=b}=t,i=Lr[n][e];if(n===Ye&&!e)return"fad";let r=Vn[n][e]||Vn[n][i],o=e in P.styles?e:null;return r||o||null}function ho(e){let t=[],n=null;return e.forEach(i=>{let r=lo(c.cssPrefix,i);r?n=r:i&&t.push(i)}),{iconName:n,rest:t}}function kn(e){return e.sort().filter((t,n,i)=>i.indexOf(t)===n)}function Ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=t,i=null,r=bt.concat(Er),o=kn(e.filter(m=>r.includes(m))),s=kn(e.filter(m=>!bt.includes(m))),a=o.filter(m=>(i=m,!ti.includes(m))),[d=null]=a,u=fo(o),f=l(l({},ho(s)),{},{prefix:Xe(d,{family:u})});return l(l(l({},f),yo({values:e,family:u,styles:we,config:c,canonical:f,givenPrefix:i})),mo(n,i,f))}function mo(e,t,n){let{prefix:i,iconName:r}=n;if(e||!i||!r)return{prefix:i,iconName:r};let o=t==="fa"?Ci(r):{},s=K(i,r);return r=o.iconName||s||r,i=o.prefix||i,i==="far"&&!we.far&&we.fas&&!c.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}var po=ni.filter(e=>e!==b||e!==Ye),go=Object.keys(_t).filter(e=>e!==b).map(e=>Object.keys(_t[e])).flat();function yo(e){let{values:t,family:n,canonical:i,givenPrefix:r="",styles:o={},config:s={}}=e,a=n===Ye,d=t.includes("fa-duotone")||t.includes("fad"),u=s.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!a&&(d||u||f)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&po.includes(n)&&(Object.keys(o).find(h=>go.includes(h))||s.autoFetchSvg)){let h=_r.get(n).defaultShortPrefixId;i.prefix=h,i.iconName=K(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||r==="fa")&&(i.prefix=B()||"fas"),i}var It=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];let r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),Et(o,r[o]);let s=Lt[b][o];s&&Et(s,r[o]),bi()})}reset(){this.definitions={}}_pullDefinitions(t,n){let i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{let{prefix:o,iconName:s,icon:a}=i[r],d=a[2];t[o]||(t[o]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(t[o][u]=a)}),t[o][s]=a}),t}},Nn=[],re={},oe={},vo=Object.keys(oe);function _o(e,t){let{mixoutsTo:n}=t;return Nn=e,re={},Object.keys(oe).forEach(i=>{vo.indexOf(i)===-1&&delete oe[i]}),Nn.forEach(i=>{let r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){let o=i.hooks();Object.keys(o).forEach(s=>{re[s]||(re[s]=[]),re[s].push(o[s])})}i.provides&&i.provides(oe)}),n}function Mt(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(re[e]||[]).forEach(s=>{t=s.apply(null,[t,...i])}),t}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];(re[e]||[]).forEach(o=>{o.apply(null,n)})}function $(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return oe[e]?oe[e].apply(null,t):void 0}function Vt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e,n=e.prefix||B();if(t)return t=K(n,t)||t,On(xi.definitions,n,t)||On(P.styles,n,t)}var xi=new It,bo=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,J("noAuto")},Co={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(J("beforeI2svg",e),$("pseudoElements2svg",e),$("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,to(()=>{xo({autoReplaceSvgRoot:t}),J("watch",e)})}},Ao={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Xe(e[0]);return{prefix:n,iconName:K(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(c.cssPrefix,"-"))>-1||e.match(Hr))){let t=Ke(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||B(),iconName:K(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){let t=B();return{prefix:t,iconName:K(t,e)||e}}}},D={noAuto:bo,config:c,dom:Co,parse:Ao,library:xi,findIconDefinition:Vt,toHtml:Se},xo=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=p}=e;(Object.keys(P.styles).length>0||c.autoFetchSvg)&&L&&c.autoReplaceSvg&&D.dom.i2svg({node:t})};function Ze(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Se(n))}}),Object.defineProperty(e,"node",{get:function(){if(!L)return;let n=p.createElement("div");return n.innerHTML=e.html,n.children}}),e}function wo(e){let{children:t,main:n,mask:i,attributes:r,styles:o,transform:s}=e;if(zt(s)&&n.found&&!i.found){let{width:a,height:d}=n,u={x:a/d/2,y:.5};r.style=qe(l(l({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Do(e){let{prefix:t,iconName:n,children:i,attributes:r,symbol:o}=e,s=o===!0?"".concat(t,"-").concat(c.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:i}]}]}function Bt(e){let{icons:{main:t,mask:n},prefix:i,iconName:r,transform:o,symbol:s,title:a,maskId:d,titleId:u,extra:f,watchable:m=!1}=e,{width:h,height:A}=n.found?n:t,H=wr.includes(i),W=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(ee=>f.classes.indexOf(ee)===-1).filter(ee=>ee!==""||!!ee).concat(f.classes).join(" "),E={children:[],attributes:l(l({},f.attributes),{},{"data-prefix":i,"data-icon":r,class:W,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(A)})},k=H&&!~f.classes.indexOf("fa-fw")?{width:"".concat(h/A*16*.0625,"em")}:{};m&&(E.attributes[Z]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||xe())},children:[a]}),delete E.attributes.title);let x=l(l({},E),{},{prefix:i,iconName:r,main:t,mask:n,maskId:d,transform:o,symbol:s,styles:l(l({},k),f.styles)}),{children:I,attributes:Q}=n.found&&t.found?$("generateAbstractMask",x)||{children:[],attributes:{}}:$("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=I,x.attributes=Q,s?Do(x):wo(x)}function Tn(e){let{content:t,width:n,height:i,transform:r,title:o,extra:s,watchable:a=!1}=e,d=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});a&&(d[Z]="");let u=l({},s.styles);zt(r)&&(u.transform=Jr({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);let f=qe(u);f.length>0&&(d.style=f);let m=[];return m.push({tag:"span",attributes:d,children:[t]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function So(e){let{content:t,title:n,extra:i}=e,r=l(l(l({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),o=qe(i.styles);o.length>0&&(r.style=o);let s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var{styles:yt}=P;function Ft(e){let t=e[0],n=e[1],[i]=e.slice(4),r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:r}}var Eo={found:!1,width:512,height:512};function Io(e,t){!si&&!c.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ot(e,t){let n=t;return t==="fa"&&c.styleDefault!==null&&(t=B()),new Promise((i,r)=>{if(n==="fa"){let o=Ci(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&yt[t]&&yt[t][e]){let o=yt[t][e];return i(Ft(o))}Io(e,t),i(l(l({},Eo),{},{icon:c.showMissingIcons&&e?$("missingIconAbstract")||{}:{}}))})}var Rn=()=>{},Pt=c.measurePerformance&&ze&&ze.mark&&ze.measure?ze:{mark:Rn,measure:Rn},be='FA "6.7.2"',Mo=e=>(Pt.mark("".concat(be," ").concat(e," begins")),()=>wi(e)),wi=e=>{Pt.mark("".concat(be," ").concat(e," ends")),Pt.measure("".concat(be," ").concat(e),"".concat(be," ").concat(e," begins"),"".concat(be," ").concat(e," ends"))},$t={begin:Mo,end:wi},Ue=()=>{};function jn(e){return typeof(e.getAttribute?e.getAttribute(Z):null)=="string"}function Vo(e){let t=e.getAttribute?e.getAttribute(Rt):null,n=e.getAttribute?e.getAttribute(jt):null;return t&&n}function Fo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(c.replacementClass)}function Oo(){return c.autoReplaceSvg===!0?Be.replace:Be[c.autoReplaceSvg]||Be.replace}function Po(e){return p.createElementNS("http://www.w3.org/2000/svg",e)}function ko(e){return p.createElement(e)}function Di(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=e.tag==="svg"?Po:ko}=t;if(typeof e=="string")return p.createTextNode(e);let i=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){i.appendChild(Di(o,{ceFn:n}))}),i}function No(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Be={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Di(n),t)}),t.getAttribute(Z)===null&&c.keepOriginalSource){let n=p.createComment(No(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~Ht(t).indexOf(c.replacementClass))return Be.replace(e);let i=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===c.replacementClass||a.match(i)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}let r=n.map(o=>Se(o)).join(`
`);t.setAttribute(Z,""),t.innerHTML=r}};function Ln(e){e()}function Si(e,t){let n=typeof t=="function"?t:Ue;if(e.length===0)n();else{let i=Ln;c.mutateApproach===Rr&&(i=U.requestAnimationFrame||Ln),i(()=>{let r=Oo(),o=$t.begin("mutate");e.map(r),o(),n()})}}var Wt=!1;function Ei(){Wt=!0}function kt(){Wt=!1}var We=null;function Hn(e){if(!Sn||!c.observeMutations)return;let{treeCallback:t=Ue,nodeCallback:n=Ue,pseudoElementsCallback:i=Ue,observeMutationsRoot:r=p}=e;We=new Sn(o=>{if(Wt)return;let s=B();ae(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!jn(a.addedNodes[0])&&(c.searchPseudoElements&&i(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&c.searchPseudoElements&&i(a.target.parentNode),a.type==="attributes"&&jn(a.target)&&~Ur.indexOf(a.attributeName))if(a.attributeName==="class"&&Vo(a.target)){let{prefix:d,iconName:u}=Ke(Ht(a.target));a.target.setAttribute(Rt,d||s),u&&a.target.setAttribute(jt,u)}else Fo(a.target)&&n(a.target)})}),L&&We.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function To(){We&&We.disconnect()}function Ro(e){let t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((i,r)=>{let o=r.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(i[s]=a.join(":").trim()),i},{})),n}function jo(e){let t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",r=Ke(Ht(e));return r.prefix||(r.prefix=B()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=co(r.prefix,e.innerText)||Ut(r.prefix,St(e.innerText))),!r.iconName&&c.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Lo(e){let t=ae(e.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return c.autoA11y&&(n?t["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(i||xe()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ho(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:i,rest:r}=jo(e),o=Lo(e),s=Mt("parseNodeAttributes",{},e),a=t.styleParser?Ro(e):[];return l({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:o}},s)}var{styles:zo}=P;function Ii(e){let t=c.autoReplaceSvg==="nest"?zn(e,{styleParser:!1}):zn(e);return~t.extra.classes.indexOf(li)?$("generateLayersText",e,t):$("generateSvgReplacementMutation",e,t)}function Go(){return[...Cr,...bt]}function Gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();let n=p.documentElement.classList,i=f=>n.add("".concat(Mn,"-").concat(f)),r=f=>n.remove("".concat(Mn,"-").concat(f)),o=c.autoFetchSvg?Go():ti.concat(Object.keys(zo));o.includes("fa")||o.push("fa");let s=[".".concat(li,":not([").concat(Z,"])")].concat(o.map(f=>".".concat(f,":not([").concat(Z,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=ae(e.querySelectorAll(s))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();let d=$t.begin("onTree"),u=a.reduce((f,m)=>{try{let h=Ii(m);h&&f.push(h)}catch(h){si||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise((f,m)=>{Promise.all(u).then(h=>{Si(h,()=>{i("active"),i("complete"),r("pending"),typeof t=="function"&&t(),d(),f()})}).catch(h=>{d(),m(h)})})}function Uo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ii(e).then(n=>{n&&Si([n],t)})}function Bo(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:Vt(t||{}),{mask:r}=n;return r&&(r=(r||{}).icon?r:Vt(r||{})),e(i,l(l({},n),{},{mask:r}))}}var $o=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=O,symbol:i=!1,mask:r=null,maskId:o=null,title:s=null,titleId:a=null,classes:d=[],attributes:u={},styles:f={}}=t;if(!e)return;let{prefix:m,iconName:h,icon:A}=e;return Ze(l({type:"icon"},e),()=>(J("beforeDOMElementCreation",{iconDefinition:e,params:t}),c.autoA11y&&(s?u["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||xe()):(u["aria-hidden"]="true",u.focusable="false")),Bt({icons:{main:Ft(A),mask:r?Ft(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:h,transform:l(l({},O),n),symbol:i,title:s,maskId:o,titleId:a,extra:{attributes:u,styles:f,classes:d}})))},Wo={mixout(){return{icon:Bo($o)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Gn,e.nodeCallback=Uo,e}}},provides(e){e.i2svg=function(t){let{node:n=p,callback:i=()=>{}}=t;return Gn(n,i)},e.generateSvgReplacementMutation=function(t,n){let{iconName:i,title:r,titleId:o,prefix:s,transform:a,symbol:d,mask:u,maskId:f,extra:m}=n;return new Promise((h,A)=>{Promise.all([Ot(i,s),u.iconName?Ot(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(H=>{let[W,E]=H;h([t,Bt({icons:{main:W,mask:E},prefix:s,iconName:i,transform:a,symbol:d,maskId:f,title:r,titleId:o,extra:m,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(t){let{children:n,attributes:i,main:r,transform:o,styles:s}=t,a=qe(s);a.length>0&&(i.style=a);let d;return zt(o)&&(d=$("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(d||r.icon),{children:n,attributes:i}}}},Yo={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Ze({type:"layer"},()=>{J("beforeDOMElementCreation",{assembler:e,params:t});let i=[];return e(r=>{Array.isArray(r)?r.map(o=>{i=i.concat(o.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},qo={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:i=[],attributes:r={},styles:o={}}=t;return Ze({type:"counter",content:e},()=>(J("beforeDOMElementCreation",{content:e,params:t}),So({content:e.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(c.cssPrefix,"-layers-counter"),...i]}})))}}}},Xo={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=O,title:i=null,classes:r=[],attributes:o={},styles:s={}}=t;return Ze({type:"text",content:e},()=>(J("beforeDOMElementCreation",{content:e,params:t}),Tn({content:e,transform:l(l({},O),n),title:i,extra:{attributes:o,styles:s,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){let{title:i,transform:r,extra:o}=n,s=null,a=null;if(Qn){let d=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/d,a=u.height/d}return c.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Tn({content:t.innerHTML,width:s,height:a,transform:r,title:i,extra:o,watchable:!0})])}}},Ko=new RegExp('"',"ug"),Un=[1105920,1112319],Bn=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),vr),Nr),Ir),Nt=Object.keys(Bn).reduce((e,t)=>(e[t.toLowerCase()]=Bn[t],e),{}),Zo=Object.keys(Nt).reduce((e,t)=>{let n=Nt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Jo(e){let t=e.replace(Ko,""),n=ro(t,0),i=n>=Un[0]&&n<=Un[1],r=t.length===2?t[0]===t[1]:!1;return{value:St(r?t[0]:t),isSecondary:i||r}}function Qo(e,t){let n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),r=isNaN(i)?"normal":i;return(Nt[n]||{})[r]||Zo[n]}function $n(e,t){let n="".concat(Tr).concat(t.replace(":","-"));return new Promise((i,r)=>{if(e.getAttribute(n)!==null)return i();let s=ae(e.children).filter(h=>h.getAttribute(At)===t)[0],a=U.getComputedStyle(e,t),d=a.getPropertyValue("font-family"),u=d.match(zr),f=a.getPropertyValue("font-weight"),m=a.getPropertyValue("content");if(s&&!u)return e.removeChild(s),i();if(u&&m!=="none"&&m!==""){let h=a.getPropertyValue("content"),A=Qo(d,f),{value:H,isSecondary:W}=Jo(h),E=u[0].startsWith("FontAwesome"),k=Ut(A,H),x=k;if(E){let I=uo(H);I.iconName&&I.prefix&&(k=I.iconName,A=I.prefix)}if(k&&!W&&(!s||s.getAttribute(Rt)!==A||s.getAttribute(jt)!==x)){e.setAttribute(n,x),s&&e.removeChild(s);let I=Ho(),{extra:Q}=I;Q.attributes[At]=t,Ot(k,A).then(ee=>{let ar=Bt(l(l({},I),{},{icons:{main:ee,mask:Ai()},prefix:A,iconName:x,extra:Q,watchable:!0})),at=p.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(at,e.firstChild):e.appendChild(at),at.outerHTML=ar.map(lr=>Se(lr)).join(`
`),e.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function es(e){return Promise.all([$n(e,"::before"),$n(e,"::after")])}function ts(e){return e.parentNode!==document.head&&!~jr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(At)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wn(e){if(L)return new Promise((t,n)=>{let i=ae(e.querySelectorAll("*")).filter(ts).map(es),r=$t.begin("searchPseudoElements");Ei(),Promise.all(i).then(()=>{r(),kt(),t()}).catch(()=>{r(),kt(),n()})})}var ns={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Wn,e}}},provides(e){e.pseudoElements2svg=function(t){let{node:n=p}=t;c.searchPseudoElements&&Wn(n)}}},Yn=!1,is={mixout(){return{dom:{unwatch(){Ei(),Yn=!0}}}},hooks(){return{bootstrap(){Hn(Mt("mutationObserverCallbacks",{}))},noAuto(){To()},watch(e){let{observeMutationsRoot:t}=e;Yn?kt():Hn(Mt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},qn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,i)=>{let r=i.toLowerCase().split("-"),o=r[0],s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)},rs={mixout(){return{parse:{transform:e=>qn(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-transform");return n&&(e.transform=qn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:i,containerWidth:r,iconWidth:o}=t,s={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(a," ").concat(d," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:f,path:m};return{tag:"g",attributes:l({},h.outer),children:[{tag:"g",attributes:l({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),h.path)}]}]}}}},vt={x:0,y:0,width:"100%",height:"100%"};function Xn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function os(e){return e.tag==="g"?e.children:[e]}var ss={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-mask"),i=n?Ke(n.split(" ").map(r=>r.trim())):Ai();return i.prefix||(i.prefix=B()),e.mask=i,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:i,main:r,mask:o,maskId:s,transform:a}=t,{width:d,icon:u}=r,{width:f,icon:m}=o,h=Zr({transform:a,containerWidth:f,iconWidth:d}),A={tag:"rect",attributes:l(l({},vt),{},{fill:"white"})},H=u.children?{children:u.children.map(Xn)}:{},W={tag:"g",attributes:l({},h.inner),children:[Xn(l({tag:u.tag,attributes:l(l({},u.attributes),h.path)},H))]},E={tag:"g",attributes:l({},h.outer),children:[W]},k="mask-".concat(s||xe()),x="clip-".concat(s||xe()),I={tag:"mask",attributes:l(l({},vt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,E]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:os(m)},I]};return n.push(Q,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},vt)}),{children:n,attributes:i}}}},as={provides(e){let t=!1;U.matchMedia&&(t=U.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:l(l({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ls={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return e.symbol=i,e}}}},cs=[eo,Wo,Yo,qo,Xo,ns,is,rs,ss,as,ls];_o(cs,{mixoutsTo:D});var ca=D.noAuto,us=D.config,ua=D.library,ds=D.dom,fs=D.parse,da=D.findIconDefinition,fa=D.toHtml,hs=D.icon,ha=D.layer,ms=D.text,ps=D.counter;var Mi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=pe({type:e})}static{this.\u0275inj=fe({})}}return e})();var ji=(()=>{class e{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,i){this._renderer=n,this._elementRef=i}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(i){return new(i||e)(g(ie),g(ne))};static \u0275dir=M({type:e})}return e})(),Jt=(()=>{class e extends ji{static \u0275fac=(()=>{let n;return function(r){return(n||(n=he(e)))(r||e)}})();static \u0275dir=M({type:e,features:[z]})}return e})(),nt=new te("");var vs={provide:nt,useExisting:de(()=>it),multi:!0};function _s(){let e=ft()?ft().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var bs=new te(""),it=(()=>{class e extends ji{_compositionMode;_composing=!1;constructor(n,i,r){super(n,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!_s())}writeValue(n){let i=n??"";this.setProperty("value",i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(i){return new(i||e)(g(ie),g(ne),g(bs,8))};static \u0275dir=M({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&V("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[ve([vs]),z]})}return e})();var Cs=new te(""),As=new te("");function Li(e){return e!=null}function Hi(e){return cn(e)?tn(e):e}function zi(e){let t={};return e.forEach(n=>{t=n!=null?C(C({},t),n):t}),Object.keys(t).length===0?null:t}function Gi(e,t){return t.map(n=>n(e))}function xs(e){return!e.validate}function Ui(e){return e.map(t=>xs(t)?t:n=>t.validate(n))}function ws(e){if(!e)return null;let t=e.filter(Li);return t.length==0?null:function(n){return zi(Gi(n,t))}}function Bi(e){return e!=null?ws(Ui(e)):null}function Ds(e){if(!e)return null;let t=e.filter(Li);return t.length==0?null:function(n){let i=Gi(n,t).map(Hi);return on(i).pipe(nn(zi))}}function $i(e){return e!=null?Ds(Ui(e)):null}function Vi(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Ss(e){return e._rawValidators}function Es(e){return e._rawAsyncValidators}function qt(e){return e?Array.isArray(e)?e:[e]:[]}function Qe(e,t){return Array.isArray(e)?e.includes(t):e===t}function Fi(e,t){let n=qt(t);return qt(e).forEach(r=>{Qe(n,r)||n.push(r)}),n}function Oi(e,t){return qt(t).filter(n=>!Qe(e,n))}var et=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Bi(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=$i(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}},Xt=class extends et{name;get formDirective(){return null}get path(){return null}},Fe=class extends et{_parent=null;name=null;valueAccessor=null},Kt=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Is={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},La=w(C({},Is),{"[class.ng-submitted]":"isSubmitted"}),Wi=(()=>{class e extends Kt{constructor(n){super(n)}static \u0275fac=function(i){return new(i||e)(g(Fe,2))};static \u0275dir=M({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ye("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[z]})}return e})();var Ee="VALID",Je="INVALID",le="PENDING",Ie="DISABLED",ue=class{},tt=class extends ue{value;source;constructor(t,n){super(),this.value=t,this.source=n}},Me=class extends ue{pristine;source;constructor(t,n){super(),this.pristine=t,this.source=n}},Ve=class extends ue{touched;source;constructor(t,n){super(),this.touched=t,this.source=n}},ce=class extends ue{status;source;constructor(t,n){super(),this.status=t,this.source=n}};function Ms(e){return(rt(e)?e.validators:e)||null}function Vs(e){return Array.isArray(e)?Bi(e):e||null}function Fs(e,t){return(rt(t)?t.asyncValidators:e)||null}function Os(e){return Array.isArray(e)?$i(e):e||null}function rt(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Zt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,n){this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return X(this.statusReactive)}set status(t){X(()=>this.statusReactive.set(t))}_status=Le(()=>this.statusReactive());statusReactive=Te(void 0);get valid(){return this.status===Ee}get invalid(){return this.status===Je}get pending(){return this.status==le}get disabled(){return this.status===Ie}get enabled(){return this.status!==Ie}errors;get pristine(){return X(this.pristineReactive)}set pristine(t){X(()=>this.pristineReactive.set(t))}_pristine=Le(()=>this.pristineReactive());pristineReactive=Te(!0);get dirty(){return!this.pristine}get touched(){return X(this.touchedReactive)}set touched(t){X(()=>this.touchedReactive.set(t))}_touched=Le(()=>this.touchedReactive());touchedReactive=Te(!1);get untouched(){return!this.touched}_events=new Y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Fi(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Fi(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Oi(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Oi(t,this._rawAsyncValidators))}hasValidator(t){return Qe(this._rawValidators,t)}hasAsyncValidator(t){return Qe(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let n=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(w(C({},t),{sourceControl:i})),n&&t.emitEvent!==!1&&this._events.next(new Ve(!0,i))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(t))}markAsUntouched(t={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,i),n&&t.emitEvent!==!1&&this._events.next(new Ve(!1,i))}markAsDirty(t={}){let n=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(w(C({},t),{sourceControl:i})),n&&t.emitEvent!==!1&&this._events.next(new Me(!1,i))}markAsPristine(t={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,i),n&&t.emitEvent!==!1&&this._events.next(new Me(!0,i))}markAsPending(t={}){this.status=le;let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ce(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(w(C({},t),{sourceControl:n}))}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Ie,this.errors=null,this._forEachChild(r=>{r.disable(w(C({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new tt(this.value,i)),this._events.next(new ce(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(w(C({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Ee,this._forEachChild(i=>{i.enable(w(C({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(w(C({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,n){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ee||this.status===le)&&this._runAsyncValidator(i,t.emitEvent)}let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new tt(this.value,n)),this._events.next(new ce(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(w(C({},t),{sourceControl:n}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ie:Ee}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,n){if(this.asyncValidator){this.status=le,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=Hi(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(t,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,n,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new ce(this.status,n)),this._parent&&this._parent._updateControlsErrors(t,n,i)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Ie:this.errors?Je:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(le)?le:this._anyControlsHaveStatus(Je)?Je:Ee}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),r&&this._events.next(new Me(this.pristine,n))}_updateTouched(t={},n){this.touched=this._anyControlsTouched(),this._events.next(new Ve(this.touched,n)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){rt(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let n=this._parent&&this._parent.dirty;return!t&&!!n&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Vs(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Os(this._rawAsyncValidators)}};var Yi=new te("",{providedIn:"root",factory:()=>Qt}),Qt="always";function Ps(e,t){return[...t.path,e]}function ks(e,t,n=Qt){Ts(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),Rs(e,t),Ls(e,t),js(e,t),Ns(e,t)}function Pi(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function Ns(e,t){if(t.valueAccessor.setDisabledState){let n=i=>{t.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function Ts(e,t){let n=Ss(e);t.validator!==null?e.setValidators(Vi(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let i=Es(e);t.asyncValidator!==null?e.setAsyncValidators(Vi(i,t.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();Pi(t._rawValidators,r),Pi(t._rawAsyncValidators,r)}function Rs(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&qi(e,t)})}function js(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&qi(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function qi(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Ls(e,t){let n=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function Hs(e,t){if(!e.hasOwnProperty("model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function zs(e){return Object.getPrototypeOf(e.constructor)===Jt}function Gs(e,t){if(!t)return null;Array.isArray(t);let n,i,r;return t.forEach(o=>{o.constructor===it?n=o:zs(o)?i=o:r=o}),r||i||n||null}function ki(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Ni(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Us=class extends Zt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,n,i){super(Ms(n),Fs(i,n)),this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),rt(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ni(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ki(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ki(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ni(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Bs={provide:Fe,useExisting:de(()=>en)},Ti=Promise.resolve(),en=(()=>{class e extends Fe{_changeDetectorRef;callSetDisabledState;control=new Us;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new N;constructor(n,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=n,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Gs(this,o)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let i=n.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Hs(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ks(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Ti.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let i=n.isDisabled.currentValue,r=i!==0&&mn(i);Ti.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Ps(n,this._parent):[n]}static \u0275fac=function(i){return new(i||e)(g(Xt,9),g(Cs,10),g(As,10),g(nt,10),g(hn,8),g(Yi,8))};static \u0275dir=M({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ve([Bs]),z,lt]})}return e})();var $s={provide:nt,useExisting:de(()=>Ki),multi:!0};function Xi(e,t){return e==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${e}: ${t}`.slice(0,50))}function Ws(e){return e.split(":")[0]}var Ki=(()=>{class e extends Jt{value;_optionMap=new Map;_idCounter=0;set compareWith(n){this._compareWith=n}_compareWith=Object.is;writeValue(n){this.value=n;let i=this._getOptionId(n),r=Xi(i,n);this.setProperty("value",r)}registerOnChange(n){this.onChange=i=>{this.value=this._getOptionValue(i),n(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(n){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),n))return i;return null}_getOptionValue(n){let i=Ws(n);return this._optionMap.has(i)?this._optionMap.get(i):n}static \u0275fac=(()=>{let n;return function(r){return(n||(n=he(e)))(r||e)}})();static \u0275dir=M({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,r){i&1&&V("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[ve([$s]),z]})}return e})(),Zi=(()=>{class e{_element;_renderer;_select;id;constructor(n,i,r){this._element=n,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(n){this._select!=null&&(this._select._optionMap.set(this.id,n),this._setElementValue(Xi(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._setElementValue(n),this._select&&this._select.writeValue(this._select.value)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||e)(g(ne),g(ie),g(Ki,9))};static \u0275dir=M({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return e})(),Ys={provide:nt,useExisting:de(()=>Ji),multi:!0};function Ri(e,t){return e==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${e}: ${t}`.slice(0,50))}function qs(e){return e.split(":")[0]}var Ji=(()=>{class e extends Jt{value;_optionMap=new Map;_idCounter=0;set compareWith(n){this._compareWith=n}_compareWith=Object.is;writeValue(n){this.value=n;let i;if(Array.isArray(n)){let r=n.map(o=>this._getOptionId(o));i=(o,s)=>{o._setSelected(r.indexOf(s.toString())>-1)}}else i=(r,o)=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(n){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let s=o;for(let a=0;a<s.length;a++){let d=s[a],u=this._getOptionValue(d.value);r.push(u)}}else{let s=i.options;for(let a=0;a<s.length;a++){let d=s[a];if(d.selected){let u=this._getOptionValue(d.value);r.push(u)}}}this.value=r,n(r)}}_registerOption(n){let i=(this._idCounter++).toString();return this._optionMap.set(i,n),i}_getOptionId(n){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,n))return i;return null}_getOptionValue(n){let i=qs(n);return this._optionMap.has(i)?this._optionMap.get(i)._value:n}static \u0275fac=(()=>{let n;return function(r){return(n||(n=he(e)))(r||e)}})();static \u0275dir=M({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,r){i&1&&V("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[ve([Ys]),z]})}return e})(),Qi=(()=>{class e{_element;_renderer;_select;id;_value;constructor(n,i,r){this._element=n,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(n){this._select!=null&&(this._value=n,this._setElementValue(Ri(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._select?(this._value=n,this._setElementValue(Ri(this.id,n)),this._select.writeValue(this._select.value)):this._setElementValue(n)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}_setSelected(n){this._renderer.setProperty(this._element.nativeElement,"selected",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||e)(g(ne),g(ie),g(Ji,9))};static \u0275dir=M({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return e})();var Xs=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=pe({type:e});static \u0275inj=fe({})}return e})();var er=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:Yi,useValue:n.callSetDisabledState??Qt}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=pe({type:e});static \u0275inj=fe({imports:[Xs]})}return e})();var tr={APP_TITLE:"MuviCoop",CAT_MOVIE:"Movies",CAT_PEOPLE:"People",LOADING:"Loading...",SEARCHING:"Searching...",PLACEHOLDER:"Search movies, people..."},nr={MOVIE:"movie",MOVIES:"movies",PEOPLE:"people"};function Qs(e,t){if(e&1){let n=ut();y(0,"button",15),V("click",function(){ke(n);let r=T();return Ne(r.clearSearch())}),F(1," \xD7 "),v()}}function ea(e,t){if(e&1&&(y(0,"div",20)(1,"div",21)(2,"span",22),F(3),v()(),y(4,"span",23),F(5),v()()),e&2){let n=T(2);_(3),q(n.movieConstants.LOADING),_(2),q(n.movieConstants.SEARCHING)}}function ta(e,t){if(e&1){let n=ut();y(0,"div",25),V("mousedown",function(){let r=ke(n).$implicit,o=T(3);return Ne(o.selectItem(r))})("mouseenter",function(){let r=ke(n).index,o=T(3);return Ne(o.selectedIndex=r)}),y(1,"div",26)(2,"div",27),ct(3,"img",28),v(),y(4,"div",29)(5,"h6",30),F(6),v(),y(7,"small",31),F(8),v()()()()}if(e&2){let n=t.$implicit,i=t.index,r=T(3);ye("bg-secondary",i===r.selectedIndex),_(3),S("src",r.getItemImage(n),ln)("alt",r.getItemTitle(n)),_(3),q(r.getItemTitle(n)),_(2),dt(" ",r.getItemSubtitle(n)," ")}}function na(e,t){if(e&1&&(y(0,"div"),ge(1,ta,9,6,"div",24),v()),e&2){let n=T(2);_(),S("ngForOf",n.searchResults)}}function ia(e,t){if(e&1&&(y(0,"div",32),F(1),v()),e&2){let n=T(2);_(),dt(" ",n.getContent()," ")}}function ra(e,t){if(e&1&&(y(0,"div",16),ge(1,ea,6,2,"div",17)(2,na,2,1,"div",18)(3,ia,2,1,"div",19),v()),e&2){let n=T();_(),S("ngIf",n.loading),_(),S("ngIf",!n.loading&&n.searchResults.length>0),_(),S("ngIf",!n.loading&&n.searchResults.length===0&&n.searchText.length)}}var ot=class e{destroy$=new Y;searchSubject=new Y;movieConstants=tr;comparisionConstants=nr;searchText="";showDropdown=!1;selectedIndex=-1;searchType="movie";loading=!1;movieResults=[];actorResults=[];searchResults=[];currentSearch=new N;searchTypeUpdate=new N;onClearSearch=new N;selectedItem=new N;ngOnInit(){this.searchSubject.pipe(sn(300),an(),Oe(this.destroy$)).subscribe(t=>{this.currentSearch.emit(t)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getContent(){return`No ${this.searchType===this.comparisionConstants.MOVIE?this.comparisionConstants.MOVIES:this.comparisionConstants.PEOPLE} found for ${this.searchText}`}getPlaceholder(){return this.movieConstants.PLACEHOLDER}onSearchTypeChange(t){let i=t.target.value;this.searchTypeUpdate.emit(i)}onSearchInput(t){let n=t.target;this.searchText=n.value,this.showDropdown=!0,this.selectedIndex=-1,this.searchSubject.next(this.searchText)}clearSearch(){this.searchText="",this.showDropdown=!1,this.searchSubject.next(""),this.onClearSearch.emit()}onInputBlur(){setTimeout(()=>{this.showDropdown=!1,this.selectedIndex=-1},200)}onInputFocus(){this.searchText.length>0&&(this.showDropdown=!0)}selectItem(t){this.selectedItem.emit(t),this.showDropdown=!1,this.selectedIndex=-1}getItemImage(t){let n=t.poster_path||t.profile_path;return n?`https://image.tmdb.org/t/p/w92${n}`:"./no-image.png"}getItemTitle(t){return t.title||t.name||"Unknown"}getItemSubtitle(t){return t.type==="movie"?t.release_date?new Date(t.release_date).getFullYear().toString():"Unknown Year":"Actor/Director"}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=me({type:e,selectors:[["app-header"]],inputs:{searchType:"searchType",loading:"loading",movieResults:"movieResults",actorResults:"actorResults",searchResults:"searchResults"},outputs:{currentSearch:"currentSearch",searchTypeUpdate:"searchTypeUpdate",onClearSearch:"onClearSearch",selectedItem:"selectedItem"},decls:19,vars:8,consts:[[1,"bg-dark","text-white","p-3"],[1,"align-items-center","container-fluid","d-flex","flex-row","justify-content-between"],[1,"col-md-2","d-flex","justify-content-md-start","logo"],["src","/logo.svg","alt","Logo",1,"me-2"],[1,"mb-0","text-white"],[1,"mx-4","position-relative","search-container","col-md-8"],[1,"input-group"],["id","searchType",1,"form-select","bg-dark","text-white","border-secondary","type-dropdown",3,"change","value"],["value","movie"],["value","person"],["type","text",1,"form-control","text-muted","border-secondary",3,"ngModelChange","input","focus","blur","placeholder","ngModel"],["class","btn btn-outline-secondary","type","button",3,"click",4,"ngIf"],["class","search-dropdown position-absolute w-100 bg-dark border border-secondary rounded-bottom shadow-lg",4,"ngIf"],[1,"col-md-1","d-flex","justify-content-end","profile"],[1,"bg-primary","rounded-circle","d-flex","align-items-center","justify-content-center","user-profile"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"search-dropdown","position-absolute","w-100","bg-dark","border","border-secondary","rounded-bottom","shadow-lg"],["class","p-3 text-center",4,"ngIf"],[4,"ngIf"],["class","p-3 text-center text-white",4,"ngIf"],[1,"p-3","text-center"],["role","status",1,"spinner-border","spinner-border-sm","text-light"],[1,"visually-hidden"],[1,"ms-2"],["class","search-result-item p-2 border-bottom border-secondary",3,"bg-secondary","mousedown","mouseenter",4,"ngFor","ngForOf"],[1,"search-result-item","p-2","border-bottom","border-secondary",3,"mousedown","mouseenter"],[1,"d-flex","align-items-center"],[1,"me-3"],["onerror","this.src='./no-image.png'",1,"rounded","image-details",3,"src","alt"],[1,"flex-grow-1"],[1,"mb-1","text-white"],[1,"text-white"],[1,"p-3","text-center","text-white"]],template:function(n,i){n&1&&(y(0,"header",0)(1,"div",1)(2,"div",2),ct(3,"img",3),y(4,"h4",4),F(5),v()(),y(6,"div",5)(7,"div",6)(8,"select",7),V("change",function(o){return i.onSearchTypeChange(o)}),y(9,"option",8),F(10),v(),y(11,"option",9),F(12),v()(),y(13,"input",10),fn("ngModelChange",function(o){return dn(i.searchText,o)||(i.searchText=o),o}),V("input",function(o){return i.onSearchInput(o)})("focus",function(){return i.onInputFocus()})("blur",function(){return i.onInputBlur()}),v(),ge(14,Qs,2,0,"button",11),v(),ge(15,ra,4,3,"div",12),v(),y(16,"div",13)(17,"div",14),F(18," \u{1F464} "),v()()()()),n&2&&(_(5),q(i.movieConstants.APP_TITLE),_(3),S("value",i.searchType),_(2),q(i.movieConstants.CAT_MOVIE),_(2),q(i.movieConstants.CAT_PEOPLE),_(),S("placeholder",i.getPlaceholder()),un("ngModel",i.searchText),_(),S("ngIf",i.searchText.length),_(),S("ngIf",i.showDropdown&&i.searchText.length))},dependencies:[He,pn,gn,er,Zi,Qi,it,Wi,en],styles:[".search-dropdown[_ngcontent-%COMP%]{border-top:none!important}.search-result-item[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s}.search-result-item[_ngcontent-%COMP%]:hover{background-color:#6c757d80!important}.search-result-item[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.type-dropdown[_ngcontent-%COMP%]{max-width:120px}.search-dropdown[_ngcontent-%COMP%]{top:100%;z-index:1000;max-height:400px;overflow-y:auto}.image-details[_ngcontent-%COMP%]{width:50px;height:75px;object-fit:cover}.user-profile[_ngcontent-%COMP%]{width:40px;height:40px}"]})};var st=bn("search"),ir=_e(st,e=>e.movieResults),rr=_e(st,e=>e.actorResults),or=_e(st,e=>e.loading),tl=_e(st,e=>e.error);var sr=class e{store=Pe(_n);destroy$=new Y;router=Pe(vn);searchLoading$=this.store.select(or);movieResults$=this.store.select(ir);actorResults$=this.store.select(rr);currentSearchType="movie";currentSearchText="";searchResults=[];ngAfterViewInit(){rn([this.movieResults$,this.actorResults$]).pipe(Oe(this.destroy$)).subscribe(([t,n])=>{this.currentSearchType==="movie"?this.searchResults=t.map(i=>w(C({},i),{type:"movie"})):this.searchResults=n.map(i=>w(C({},i),{type:"person"}))})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateSearchType(t){this.currentSearchType=t,console.log("Current Search Type ->",t),this.updateSearchInput(this.currentSearchText)}updateSearchInput(t){this.currentSearchText=t,console.log("here"),t.trim().length>0?this.currentSearchType.toLowerCase()==="person"?this.store.dispatch(An({query:t})):this.store.dispatch(Cn({query:t})):this.store.dispatch(ht())}clearSearch(){this.currentSearchText="",this.store.dispatch(ht())}navigateToSelection(t){t.type==="movie"?this.router.navigate(["/movie",t.id]):console.log("Selected person:",t)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=me({type:e,selectors:[["app-home"]],decls:4,vars:11,consts:[[3,"currentSearch","searchTypeUpdate","onClearSearch","selectedItem","searchType","loading","movieResults","actorResults","searchResults"]],template:function(n,i){n&1&&(y(0,"app-header",0),Re(1,"async"),Re(2,"async"),Re(3,"async"),V("currentSearch",function(o){return i.updateSearchInput(o)})("searchTypeUpdate",function(o){return i.updateSearchType(o)})("onClearSearch",function(){return i.clearSearch()})("selectedItem",function(o){return i.navigateToSelection(o)}),v()),n&2&&S("searchType",i.currentSearchType)("loading",je(1,5,i.searchLoading$))("movieResults",je(2,7,i.movieResults$))("actorResults",je(3,9,i.actorResults$))("searchResults",i.searchResults)},dependencies:[Mi,ot,He,yn],encapsulation:2})};export{sr as HomePage};
