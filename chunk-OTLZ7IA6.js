import{A as In,B as Sn,F as Mt,G as En,M as Vn,N as Fn,O as On,_ as Pn,b as xt,c as Ye,d as qe,e as wn,f as Dn,g as ve,n as Xe,u as Ze,v as C,w as Ke}from"./chunk-NIZZLD6L.js";import{$ as fe,Ab as D,Bb as _,C as pn,Cb as G,Db as re,Eb as _n,Fb as bn,Gb as Cn,H as gn,Hb as Ee,Ib as ge,Jb as $e,Kb as xn,Pb as Mn,Ra as Be,Sa as g,Sb as An,T as de,Tb as oe,Ub as We,X as we,Xa as me,Ya as b,Z as De,a as w,ab as ie,b as V,bb as Se,ca as Y,cb as k,eb as q,fb as X,hb as vn,i as H,ka as Ct,la as te,lb as Ue,ma as ne,mb as M,n as dn,na as Ie,nb as yn,ob as T,qb as h,ra as N,rb as m,s as fn,sb as z,t as hn,va as he,vb as pe,wa as Ge,x as mn,zb as x}from"./chunk-OIJAN5LS.js";function Ar(e,t,n){return(t=Dr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kn(Object(n),!0).forEach(function(i){Ar(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kn(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function wr(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dr(e){var t=wr(e,"string");return typeof t=="symbol"?t:t+""}var Nn=()=>{},Wt={},si={},li=null,ci={mark:Nn,measure:Nn};try{typeof window<"u"&&(Wt=window),typeof document<"u"&&(si=document),typeof MutationObserver<"u"&&(li=MutationObserver),typeof performance<"u"&&(ci=performance)}catch{}var{userAgent:Tn=""}=Wt.navigator||{},K=Wt,y=si,Rn=li,Je=ci,xs=!!K.document,$=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",ui=~Tn.indexOf("MSIE")||~Tn.indexOf("Trident/"),Ir=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Sr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,di={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Er={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",rt="duotone",Vr="sharp",Fr="sharp-duotone",hi=[A,rt,Vr,Fr],Or={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Pr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},kr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Nr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Tr=["fak","fa-kit","fakd","fa-kit-duotone"],Ln={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Rr=["kit"],Lr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},jr=["fak","fakd"],Hr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},jn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Qe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Gr=["fak","fa-kit","fakd","fa-kit-duotone"],Br={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ur={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},$r={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Et={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Wr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Vt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...zr,...Wr],Yr=["solid","regular","light","thin","duotone","brands"],mi=[1,2,3,4,5,6,7,8,9,10],qr=mi.concat([11,12,13,14,15,16,17,18,19,20]),Xr=[...Object.keys($r),...Yr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qe.GROUP,Qe.SWAP_OPACITY,Qe.PRIMARY,Qe.SECONDARY].concat(mi.map(e=>"".concat(e,"x"))).concat(qr.map(e=>"w-".concat(e))),Zr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},B="___FONT_AWESOME___",Ft=16,pi="fa",gi="svg-inline--fa",se="data-fa-i2svg",Ot="data-fa-pseudo-element",Kr="data-fa-pseudo-element-pending",Yt="data-prefix",qt="data-icon",Hn="fontawesome-i2svg",Jr="async",Qr=["HTML","HEAD","STYLE","SCRIPT"],vi=(()=>{try{return!0}catch{return!1}})();function Ne(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[A]}})}var yi=l({},di);yi[A]=l(l(l(l({},{"fa-duotone":"duotone"}),di[A]),Ln.kit),Ln["kit-duotone"]);var eo=Ne(yi),Pt=l({},Nr);Pt[A]=l(l(l(l({},{duotone:"fad"}),Pt[A]),jn.kit),jn["kit-duotone"]);var zn=Ne(Pt),kt=l({},Et);kt[A]=l(l({},kt[A]),Hr.kit);var Xt=Ne(kt),Nt=l({},Ur);Nt[A]=l(l({},Nt[A]),Lr.kit);var Ms=Ne(Nt),to=Ir,_i="fa-layers-text",no=Sr,io=l({},Or),As=Ne(io),ro=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At=Er,oo=[...Rr,...Xr],Fe=K.FontAwesomeConfig||{};function ao(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function so(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,i]=t,r=so(ao(n));r!=null&&(Fe[i]=r)});var bi={styleDefault:"solid",familyDefault:A,cssPrefix:pi,replacementClass:gi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fe.familyPrefix&&(Fe.cssPrefix=Fe.familyPrefix);var be=l(l({},bi),Fe);be.autoReplaceSvg||(be.observeMutations=!1);var c={};Object.keys(bi).forEach(e=>{Object.defineProperty(c,e,{enumerable:!0,set:function(t){be[e]=t,Oe.forEach(n=>n(c))},get:function(){return be[e]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(e){be.cssPrefix=e,Oe.forEach(t=>t(c))},get:function(){return be.cssPrefix}});K.FontAwesomeConfig=c;var Oe=[];function lo(e){return Oe.push(e),()=>{Oe.splice(Oe.indexOf(e),1)}}var Z=Ft,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function co(e){if(!e||!$)return;let t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;let n=y.head.childNodes,i=null;for(let r=n.length-1;r>-1;r--){let o=n[r],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=o)}return y.head.insertBefore(t,i),e}var uo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pe(){let e=12,t="";for(;e-- >0;)t+=uo[Math.random()*62|0];return t}function Ce(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Zt(e){return e.classList?Ce(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Ci(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fo(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Ci(e[n]),'" '),"").trim()}function ot(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Kt(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function ho(e){let{transform:t,containerWidth:n,iconWidth:i}=e,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:d,path:u}}function mo(e){let{transform:t,width:n=Ft,height:i=Ft,startCentered:r=!1}=e,o="";return r&&ui?o+="translate(".concat(t.x/Z-n/2,"em, ").concat(t.y/Z-i/2,"em) "):r?o+="translate(calc(-50% + ".concat(t.x/Z,"em), calc(-50% + ").concat(t.y/Z,"em)) "):o+="translate(".concat(t.x/Z,"em, ").concat(t.y/Z,"em) "),o+="scale(".concat(t.size/Z*(t.flipX?-1:1),", ").concat(t.size/Z*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var po=`:root, :host {
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
}`;function xi(){let e=pi,t=gi,n=c.cssPrefix,i=c.replacementClass,r=po;if(n!==e||i!==t){let o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var Gn=!1;function wt(){c.autoAddCss&&!Gn&&(co(xi()),Gn=!0)}var go={mixout(){return{dom:{css:xi,insertCss:wt}}},hooks(){return{beforeDOMElementCreation(){wt()},beforeI2svg(){wt()}}}},U=K||{};U[B]||(U[B]={});U[B].styles||(U[B].styles={});U[B].hooks||(U[B].hooks={});U[B].shims||(U[B].shims=[]);var L=U[B],Mi=[],Ai=function(){y.removeEventListener("DOMContentLoaded",Ai),nt=1,Mi.map(e=>e())},nt=!1;$&&(nt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),nt||y.addEventListener("DOMContentLoaded",Ai));function vo(e){$&&(nt?setTimeout(e,0):Mi.push(e))}function Te(e){let{tag:t,attributes:n={},children:i=[]}=e;return typeof e=="string"?Ci(e):"<".concat(t," ").concat(fo(n),">").concat(i.map(Te).join(""),"</").concat(t,">")}function Bn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var yo=function(t,n){return function(i,r,o,a){return t.call(n,i,r,o,a)}},Dt=function(t,n,i,r){var o=Object.keys(t),a=o.length,s=r!==void 0?yo(n,r):n,d,u,f;for(i===void 0?(d=1,f=t[o[0]]):(d=0,f=i);d<a;d++)u=o[d],f=s(f,t[u],u,t);return f};function _o(e){let t=[],n=0,i=e.length;for(;n<i;){let r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){let o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Tt(e){let t=_o(e);return t.length===1?t[0].toString(16):null}function bo(e,t){let n=e.length,i=e.charCodeAt(t),r;return i>=55296&&i<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Un(e){return Object.keys(e).reduce((t,n)=>{let i=e[n];return!!i.icon?t[i.iconName]=i.icon:t[n]=i,t},{})}function Rt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=n,r=Un(t);typeof L.hooks.addPack=="function"&&!i?L.hooks.addPack(e,Un(t)):L.styles[e]=l(l({},L.styles[e]||{}),r),e==="fas"&&Rt("fa",t)}var{styles:ke,shims:Co}=L,wi=Object.keys(Xt),xo=wi.reduce((e,t)=>(e[t]=Object.keys(Xt[t]),e),{}),Jt=null,Di={},Ii={},Si={},Ei={},Vi={};function Mo(e){return~oo.indexOf(e)}function Ao(e,t){let n=t.split("-"),i=n[0],r=n.slice(1).join("-");return i===e&&r!==""&&!Mo(r)?r:null}var Fi=()=>{let e=i=>Dt(ke,(r,o,a)=>(r[a]=Dt(o,i,{}),r),{});Di=e((i,r,o)=>(r[3]&&(i[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{i[s.toString(16)]=o}),i)),Ii=e((i,r,o)=>(i[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{i[s]=o}),i)),Vi=e((i,r,o)=>{let a=r[2];return i[o]=o,a.forEach(s=>{i[s]=o}),i});let t="far"in ke||c.autoFetchSvg,n=Dt(Co,(i,r)=>{let o=r[0],a=r[1],s=r[2];return a==="far"&&!t&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:s}),i},{names:{},unicodes:{}});Si=n.names,Ei=n.unicodes,Jt=at(c.styleDefault,{family:c.familyDefault})};lo(e=>{Jt=at(e.styleDefault,{family:c.familyDefault})});Fi();function Qt(e,t){return(Di[e]||{})[t]}function wo(e,t){return(Ii[e]||{})[t]}function ae(e,t){return(Vi[e]||{})[t]}function Oi(e){return Si[e]||{prefix:null,iconName:null}}function Do(e){let t=Ei[e],n=Qt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Jt}var Pi=()=>({prefix:null,iconName:null,rest:[]});function Io(e){let t=A,n=wi.reduce((i,r)=>(i[r]="".concat(c.cssPrefix,"-").concat(r),i),{});return hi.forEach(i=>{(e.includes(n[i])||e.some(r=>xo[i].includes(r)))&&(t=i)}),t}function at(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=A}=t,i=eo[n][e];if(n===rt&&!e)return"fad";let r=zn[n][e]||zn[n][i],o=e in L.styles?e:null;return r||o||null}function So(e){let t=[],n=null;return e.forEach(i=>{let r=Ao(c.cssPrefix,i);r?n=r:i&&t.push(i)}),{iconName:n,rest:t}}function $n(e){return e.sort().filter((t,n,i)=>i.indexOf(t)===n)}function st(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=t,i=null,r=Vt.concat(Gr),o=$n(e.filter(v=>r.includes(v))),a=$n(e.filter(v=>!Vt.includes(v))),s=o.filter(v=>(i=v,!fi.includes(v))),[d=null]=s,u=Io(o),f=l(l({},So(a)),{},{prefix:at(d,{family:u})});return l(l(l({},f),Oo({values:e,family:u,styles:ke,config:c,canonical:f,givenPrefix:i})),Eo(n,i,f))}function Eo(e,t,n){let{prefix:i,iconName:r}=n;if(e||!i||!r)return{prefix:i,iconName:r};let o=t==="fa"?Oi(r):{},a=ae(i,r);return r=o.iconName||a||r,i=o.prefix||i,i==="far"&&!ke.far&&ke.fas&&!c.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}var Vo=hi.filter(e=>e!==A||e!==rt),Fo=Object.keys(Et).filter(e=>e!==A).map(e=>Object.keys(Et[e])).flat();function Oo(e){let{values:t,family:n,canonical:i,givenPrefix:r="",styles:o={},config:a={}}=e,s=n===rt,d=t.includes("fa-duotone")||t.includes("fad"),u=a.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!s&&(d||u||f)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&Vo.includes(n)&&(Object.keys(o).find(p=>Fo.includes(p))||a.autoFetchSvg)){let p=kr.get(n).defaultShortPrefixId;i.prefix=p,i.iconName=ae(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||r==="fa")&&(i.prefix=J()||"fas"),i}var Lt=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];let r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),Rt(o,r[o]);let a=Xt[A][o];a&&Rt(a,r[o]),Fi()})}reset(){this.definitions={}}_pullDefinitions(t,n){let i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{let{prefix:o,iconName:a,icon:s}=i[r],d=s[2];t[o]||(t[o]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(t[o][u]=s)}),t[o][a]=s}),t}},Wn=[],ye={},_e={},Po=Object.keys(_e);function ko(e,t){let{mixoutsTo:n}=t;return Wn=e,ye={},Object.keys(_e).forEach(i=>{Po.indexOf(i)===-1&&delete _e[i]}),Wn.forEach(i=>{let r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(a=>{n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){let o=i.hooks();Object.keys(o).forEach(a=>{ye[a]||(ye[a]=[]),ye[a].push(o[a])})}i.provides&&i.provides(_e)}),n}function jt(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(ye[e]||[]).forEach(a=>{t=a.apply(null,[t,...i])}),t}function le(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];(ye[e]||[]).forEach(o=>{o.apply(null,n)})}function Q(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return _e[e]?_e[e].apply(null,t):void 0}function Ht(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e,n=e.prefix||J();if(t)return t=ae(n,t)||t,Bn(ki.definitions,n,t)||Bn(L.styles,n,t)}var ki=new Lt,No=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,le("noAuto")},To={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(le("beforeI2svg",e),Q("pseudoElements2svg",e),Q("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,vo(()=>{Lo({autoReplaceSvgRoot:t}),le("watch",e)})}},Ro={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ae(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=at(e[0]);return{prefix:n,iconName:ae(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(c.cssPrefix,"-"))>-1||e.match(to))){let t=st(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||J(),iconName:ae(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){let t=J();return{prefix:t,iconName:ae(t,e)||e}}}},F={noAuto:No,config:c,dom:To,parse:Ro,library:ki,findIconDefinition:Ht,toHtml:Te},Lo=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=y}=e;(Object.keys(L.styles).length>0||c.autoFetchSvg)&&$&&c.autoReplaceSvg&&F.dom.i2svg({node:t})};function lt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Te(n))}}),Object.defineProperty(e,"node",{get:function(){if(!$)return;let n=y.createElement("div");return n.innerHTML=e.html,n.children}}),e}function jo(e){let{children:t,main:n,mask:i,attributes:r,styles:o,transform:a}=e;if(Kt(a)&&n.found&&!i.found){let{width:s,height:d}=n,u={x:s/d/2,y:.5};r.style=ot(l(l({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ho(e){let{prefix:t,iconName:n,children:i,attributes:r,symbol:o}=e,a=o===!0?"".concat(t,"-").concat(c.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:a}),children:i}]}]}function en(e){let{icons:{main:t,mask:n},prefix:i,iconName:r,transform:o,symbol:a,title:s,maskId:d,titleId:u,extra:f,watchable:v=!1}=e,{width:p,height:I}=n.found?n:t,W=jr.includes(i),ee=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(ue=>f.classes.indexOf(ue)===-1).filter(ue=>ue!==""||!!ue).concat(f.classes).join(" "),O={children:[],attributes:l(l({},f.attributes),{},{"data-prefix":i,"data-icon":r,class:ee,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(I)})},j=W&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/I*16*.0625,"em")}:{};v&&(O.attributes[se]=""),s&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Pe())},children:[s]}),delete O.attributes.title);let E=l(l({},O),{},{prefix:i,iconName:r,main:t,mask:n,maskId:d,transform:o,symbol:a,styles:l(l({},j),f.styles)}),{children:P,attributes:ce}=n.found&&t.found?Q("generateAbstractMask",E)||{children:[],attributes:{}}:Q("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=P,E.attributes=ce,a?Ho(E):jo(E)}function Yn(e){let{content:t,width:n,height:i,transform:r,title:o,extra:a,watchable:s=!1}=e,d=l(l(l({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(d[se]="");let u=l({},a.styles);Kt(r)&&(u.transform=mo({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);let f=ot(u);f.length>0&&(d.style=f);let v=[];return v.push({tag:"span",attributes:d,children:[t]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function zo(e){let{content:t,title:n,extra:i}=e,r=l(l(l({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),o=ot(i.styles);o.length>0&&(r.style=o);let a=[];return a.push({tag:"span",attributes:r,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var{styles:It}=L;function zt(e){let t=e[0],n=e[1],[i]=e.slice(4),r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:r}}var Go={found:!1,width:512,height:512};function Bo(e,t){!vi&&!c.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Gt(e,t){let n=t;return t==="fa"&&c.styleDefault!==null&&(t=J()),new Promise((i,r)=>{if(n==="fa"){let o=Oi(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&It[t]&&It[t][e]){let o=It[t][e];return i(zt(o))}Bo(e,t),i(l(l({},Go),{},{icon:c.showMissingIcons&&e?Q("missingIconAbstract")||{}:{}}))})}var qn=()=>{},Bt=c.measurePerformance&&Je&&Je.mark&&Je.measure?Je:{mark:qn,measure:qn},Ve='FA "6.7.2"',Uo=e=>(Bt.mark("".concat(Ve," ").concat(e," begins")),()=>Ni(e)),Ni=e=>{Bt.mark("".concat(Ve," ").concat(e," ends")),Bt.measure("".concat(Ve," ").concat(e),"".concat(Ve," ").concat(e," begins"),"".concat(Ve," ").concat(e," ends"))},tn={begin:Uo,end:Ni},et=()=>{};function Xn(e){return typeof(e.getAttribute?e.getAttribute(se):null)=="string"}function $o(e){let t=e.getAttribute?e.getAttribute(Yt):null,n=e.getAttribute?e.getAttribute(qt):null;return t&&n}function Wo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(c.replacementClass)}function Yo(){return c.autoReplaceSvg===!0?tt.replace:tt[c.autoReplaceSvg]||tt.replace}function qo(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function Xo(e){return y.createElement(e)}function Ti(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=e.tag==="svg"?qo:Xo}=t;if(typeof e=="string")return y.createTextNode(e);let i=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){i.appendChild(Ti(o,{ceFn:n}))}),i}function Zo(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var tt={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ti(n),t)}),t.getAttribute(se)===null&&c.keepOriginalSource){let n=y.createComment(Zo(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~Zt(t).indexOf(c.replacementClass))return tt.replace(e);let i=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let o=n[0].attributes.class.split(" ").reduce((a,s)=>(s===c.replacementClass||s.match(i)?a.toSvg.push(s):a.toNode.push(s),a),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}let r=n.map(o=>Te(o)).join(`
`);t.setAttribute(se,""),t.innerHTML=r}};function Zn(e){e()}function Ri(e,t){let n=typeof t=="function"?t:et;if(e.length===0)n();else{let i=Zn;c.mutateApproach===Jr&&(i=K.requestAnimationFrame||Zn),i(()=>{let r=Yo(),o=tn.begin("mutate");e.map(r),o(),n()})}}var nn=!1;function Li(){nn=!0}function Ut(){nn=!1}var it=null;function Kn(e){if(!Rn||!c.observeMutations)return;let{treeCallback:t=et,nodeCallback:n=et,pseudoElementsCallback:i=et,observeMutationsRoot:r=y}=e;it=new Rn(o=>{if(nn)return;let a=J();Ce(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Xn(s.addedNodes[0])&&(c.searchPseudoElements&&i(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&c.searchPseudoElements&&i(s.target.parentNode),s.type==="attributes"&&Xn(s.target)&&~ro.indexOf(s.attributeName))if(s.attributeName==="class"&&$o(s.target)){let{prefix:d,iconName:u}=st(Zt(s.target));s.target.setAttribute(Yt,d||a),u&&s.target.setAttribute(qt,u)}else Wo(s.target)&&n(s.target)})}),$&&it.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ko(){it&&it.disconnect()}function Jo(e){let t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((i,r)=>{let o=r.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(i[a]=s.join(":").trim()),i},{})),n}function Qo(e){let t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",r=st(Zt(e));return r.prefix||(r.prefix=J()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=wo(r.prefix,e.innerText)||Qt(r.prefix,Tt(e.innerText))),!r.iconName&&c.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ea(e){let t=Ce(e.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return c.autoA11y&&(n?t["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(i||Pe()):(t["aria-hidden"]="true",t.focusable="false")),t}function ta(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:i,rest:r}=Qo(e),o=ea(e),a=jt("parseNodeAttributes",{},e),s=t.styleParser?Jo(e):[];return l({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o}},a)}var{styles:na}=L;function ji(e){let t=c.autoReplaceSvg==="nest"?Jn(e,{styleParser:!1}):Jn(e);return~t.extra.classes.indexOf(_i)?Q("generateLayersText",e,t):Q("generateSvgReplacementMutation",e,t)}function ia(){return[...Tr,...Vt]}function Qn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();let n=y.documentElement.classList,i=f=>n.add("".concat(Hn,"-").concat(f)),r=f=>n.remove("".concat(Hn,"-").concat(f)),o=c.autoFetchSvg?ia():fi.concat(Object.keys(na));o.includes("fa")||o.push("fa");let a=[".".concat(_i,":not([").concat(se,"])")].concat(o.map(f=>".".concat(f,":not([").concat(se,"])"))).join(", ");if(a.length===0)return Promise.resolve();let s=[];try{s=Ce(e.querySelectorAll(a))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();let d=tn.begin("onTree"),u=s.reduce((f,v)=>{try{let p=ji(v);p&&f.push(p)}catch(p){vi||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,v)=>{Promise.all(u).then(p=>{Ri(p,()=>{i("active"),i("complete"),r("pending"),typeof t=="function"&&t(),d(),f()})}).catch(p=>{d(),v(p)})})}function ra(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ji(e).then(n=>{n&&Ri([n],t)})}function oa(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:Ht(t||{}),{mask:r}=n;return r&&(r=(r||{}).icon?r:Ht(r||{})),e(i,l(l({},n),{},{mask:r}))}}var aa=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=R,symbol:i=!1,mask:r=null,maskId:o=null,title:a=null,titleId:s=null,classes:d=[],attributes:u={},styles:f={}}=t;if(!e)return;let{prefix:v,iconName:p,icon:I}=e;return lt(l({type:"icon"},e),()=>(le("beforeDOMElementCreation",{iconDefinition:e,params:t}),c.autoA11y&&(a?u["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(s||Pe()):(u["aria-hidden"]="true",u.focusable="false")),en({icons:{main:zt(I),mask:r?zt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:p,transform:l(l({},R),n),symbol:i,title:a,maskId:o,titleId:s,extra:{attributes:u,styles:f,classes:d}})))},sa={mixout(){return{icon:oa(aa)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Qn,e.nodeCallback=ra,e}}},provides(e){e.i2svg=function(t){let{node:n=y,callback:i=()=>{}}=t;return Qn(n,i)},e.generateSvgReplacementMutation=function(t,n){let{iconName:i,title:r,titleId:o,prefix:a,transform:s,symbol:d,mask:u,maskId:f,extra:v}=n;return new Promise((p,I)=>{Promise.all([Gt(i,a),u.iconName?Gt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(W=>{let[ee,O]=W;p([t,en({icons:{main:ee,mask:O},prefix:a,iconName:i,transform:s,symbol:d,maskId:f,title:r,titleId:o,extra:v,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(t){let{children:n,attributes:i,main:r,transform:o,styles:a}=t,s=ot(a);s.length>0&&(i.style=s);let d;return Kt(o)&&(d=Q("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(d||r.icon),{children:n,attributes:i}}}},la={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return lt({type:"layer"},()=>{le("beforeDOMElementCreation",{assembler:e,params:t});let i=[];return e(r=>{Array.isArray(r)?r.map(o=>{i=i.concat(o.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},ca={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:i=[],attributes:r={},styles:o={}}=t;return lt({type:"counter",content:e},()=>(le("beforeDOMElementCreation",{content:e,params:t}),zo({content:e.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(c.cssPrefix,"-layers-counter"),...i]}})))}}}},ua={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=R,title:i=null,classes:r=[],attributes:o={},styles:a={}}=t;return lt({type:"text",content:e},()=>(le("beforeDOMElementCreation",{content:e,params:t}),Yn({content:e,transform:l(l({},R),n),title:i,extra:{attributes:o,styles:a,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){let{title:i,transform:r,extra:o}=n,a=null,s=null;if(ui){let d=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();a=u.width/d,s=u.height/d}return c.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Yn({content:t.innerHTML,width:a,height:s,transform:r,title:i,extra:o,watchable:!0})])}}},da=new RegExp('"',"ug"),ei=[1105920,1112319],ti=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Pr),Zr),Br),$t=Object.keys(ti).reduce((e,t)=>(e[t.toLowerCase()]=ti[t],e),{}),fa=Object.keys($t).reduce((e,t)=>{let n=$t[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ha(e){let t=e.replace(da,""),n=bo(t,0),i=n>=ei[0]&&n<=ei[1],r=t.length===2?t[0]===t[1]:!1;return{value:Tt(r?t[0]:t),isSecondary:i||r}}function ma(e,t){let n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),r=isNaN(i)?"normal":i;return($t[n]||{})[r]||fa[n]}function ni(e,t){let n="".concat(Kr).concat(t.replace(":","-"));return new Promise((i,r)=>{if(e.getAttribute(n)!==null)return i();let a=Ce(e.children).filter(p=>p.getAttribute(Ot)===t)[0],s=K.getComputedStyle(e,t),d=s.getPropertyValue("font-family"),u=d.match(no),f=s.getPropertyValue("font-weight"),v=s.getPropertyValue("content");if(a&&!u)return e.removeChild(a),i();if(u&&v!=="none"&&v!==""){let p=s.getPropertyValue("content"),I=ma(d,f),{value:W,isSecondary:ee}=ha(p),O=u[0].startsWith("FontAwesome"),j=Qt(I,W),E=j;if(O){let P=Do(W);P.iconName&&P.prefix&&(j=P.iconName,I=P.prefix)}if(j&&!ee&&(!a||a.getAttribute(Yt)!==I||a.getAttribute(qt)!==E)){e.setAttribute(n,E),a&&e.removeChild(a);let P=ta(),{extra:ce}=P;ce.attributes[Ot]=t,Gt(j,I).then(ue=>{let xr=en(l(l({},P),{},{icons:{main:ue,mask:Pi()},prefix:I,iconName:E,extra:ce,watchable:!0})),bt=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(bt,e.firstChild):e.appendChild(bt),bt.outerHTML=xr.map(Mr=>Te(Mr)).join(`
`),e.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function pa(e){return Promise.all([ni(e,"::before"),ni(e,"::after")])}function ga(e){return e.parentNode!==document.head&&!~Qr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ot)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ii(e){if($)return new Promise((t,n)=>{let i=Ce(e.querySelectorAll("*")).filter(ga).map(pa),r=tn.begin("searchPseudoElements");Li(),Promise.all(i).then(()=>{r(),Ut(),t()}).catch(()=>{r(),Ut(),n()})})}var va={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=ii,e}}},provides(e){e.pseudoElements2svg=function(t){let{node:n=y}=t;c.searchPseudoElements&&ii(n)}}},ri=!1,ya={mixout(){return{dom:{unwatch(){Li(),ri=!0}}}},hooks(){return{bootstrap(){Kn(jt("mutationObserverCallbacks",{}))},noAuto(){Ko()},watch(e){let{observeMutationsRoot:t}=e;ri?Ut():Kn(jt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},oi=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,i)=>{let r=i.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return n.flipX=!0,n;if(o&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(o){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},t)},_a={mixout(){return{parse:{transform:e=>oi(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-transform");return n&&(e.transform=oi(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:i,containerWidth:r,iconWidth:o}=t,a={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(s," ").concat(d," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:v};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}},St={x:0,y:0,width:"100%",height:"100%"};function ai(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ba(e){return e.tag==="g"?e.children:[e]}var Ca={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-mask"),i=n?st(n.split(" ").map(r=>r.trim())):Pi();return i.prefix||(i.prefix=J()),e.mask=i,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:i,main:r,mask:o,maskId:a,transform:s}=t,{width:d,icon:u}=r,{width:f,icon:v}=o,p=ho({transform:s,containerWidth:f,iconWidth:d}),I={tag:"rect",attributes:l(l({},St),{},{fill:"white"})},W=u.children?{children:u.children.map(ai)}:{},ee={tag:"g",attributes:l({},p.inner),children:[ai(l({tag:u.tag,attributes:l(l({},u.attributes),p.path)},W))]},O={tag:"g",attributes:l({},p.outer),children:[ee]},j="mask-".concat(a||Pe()),E="clip-".concat(a||Pe()),P={tag:"mask",attributes:l(l({},St),{},{id:j,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,O]},ce={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:ba(v)},P]};return n.push(ce,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(j,")")},St)}),{children:n,attributes:i}}}},xa={provides(e){let t=!1;K.matchMedia&&(t=K.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let o=l(l({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:l(l({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:l(l({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:l(l({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ma={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return e.symbol=i,e}}}},Aa=[go,sa,la,ca,ua,va,ya,_a,Ca,xa,Ma];ko(Aa,{mixoutsTo:F});var ws=F.noAuto,wa=F.config,Ds=F.library,Da=F.dom,Ia=F.parse,Is=F.findIconDefinition,Ss=F.toHtml,Sa=F.icon,Es=F.layer,Ea=F.text,Va=F.counter;var Hi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=Se({type:e})}static{this.\u0275inj=De({})}}return e})();var Xi=(()=>{class e{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,i){this._renderer=n,this._elementRef=i}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(i){return new(i||e)(b(me),b(he))};static \u0275dir=k({type:e})}return e})(),ln=(()=>{class e extends Xi{static \u0275fac=(()=>{let n;return function(r){return(n||(n=Ie(e)))(r||e)}})();static \u0275dir=k({type:e,features:[q]})}return e})(),mt=new fe("");var Oa={provide:mt,useExisting:we(()=>pt),multi:!0};function Pa(){let e=xt()?xt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var ka=new fe(""),pt=(()=>{class e extends Xi{_compositionMode;_composing=!1;constructor(n,i,r){super(n,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Pa())}writeValue(n){let i=n??"";this.setProperty("value",i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(i){return new(i||e)(b(me),b(he),b(ka,8))};static \u0275dir=k({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&x("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ee([Oa]),q]})}return e})();var Na=new fe(""),Ta=new fe("");function Zi(e){return e!=null}function Ki(e){return vn(e)?dn(e):e}function Ji(e){let t={};return e.forEach(n=>{t=n!=null?w(w({},t),n):t}),Object.keys(t).length===0?null:t}function Qi(e,t){return t.map(n=>n(e))}function Ra(e){return!e.validate}function er(e){return e.map(t=>Ra(t)?t:n=>t.validate(n))}function La(e){if(!e)return null;let t=e.filter(Zi);return t.length==0?null:function(n){return Ji(Qi(n,t))}}function tr(e){return e!=null?La(er(e)):null}function ja(e){if(!e)return null;let t=e.filter(Zi);return t.length==0?null:function(n){let i=Qi(n,t).map(Ki);return mn(i).pipe(fn(Ji))}}function nr(e){return e!=null?ja(er(e)):null}function zi(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Ha(e){return e._rawValidators}function za(e){return e._rawAsyncValidators}function rn(e){return e?Array.isArray(e)?e:[e]:[]}function dt(e,t){return Array.isArray(e)?e.includes(t):e===t}function Gi(e,t){let n=rn(t);return rn(e).forEach(r=>{dt(n,r)||n.push(r)}),n}function Bi(e,t){return rn(t).filter(n=>!dt(e,n))}var ft=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=tr(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=nr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}},on=class extends ft{name;get formDirective(){return null}get path(){return null}},ze=class extends ft{_parent=null;name=null;valueAccessor=null},an=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ga={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},tl=V(w({},Ga),{"[class.ng-submitted]":"isSubmitted"}),ir=(()=>{class e extends an{constructor(n){super(n)}static \u0275fac=function(i){return new(i||e)(b(ze,2))};static \u0275dir=k({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&T("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[q]})}return e})();var Re="VALID",ut="INVALID",xe="PENDING",Le="DISABLED",Ae=class{},ht=class extends Ae{value;source;constructor(t,n){super(),this.value=t,this.source=n}},je=class extends Ae{pristine;source;constructor(t,n){super(),this.pristine=t,this.source=n}},He=class extends Ae{touched;source;constructor(t,n){super(),this.touched=t,this.source=n}},Me=class extends Ae{status;source;constructor(t,n){super(),this.status=t,this.source=n}};function Ba(e){return(gt(e)?e.validators:e)||null}function Ua(e){return Array.isArray(e)?tr(e):e||null}function $a(e,t){return(gt(t)?t.asyncValidators:e)||null}function Wa(e){return Array.isArray(e)?nr(e):e||null}function gt(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var sn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,n){this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return oe(this.statusReactive)}set status(t){oe(()=>this.statusReactive.set(t))}_status=We(()=>this.statusReactive());statusReactive=Ge(void 0);get valid(){return this.status===Re}get invalid(){return this.status===ut}get pending(){return this.status==xe}get disabled(){return this.status===Le}get enabled(){return this.status!==Le}errors;get pristine(){return oe(this.pristineReactive)}set pristine(t){oe(()=>this.pristineReactive.set(t))}_pristine=We(()=>this.pristineReactive());pristineReactive=Ge(!0);get dirty(){return!this.pristine}get touched(){return oe(this.touchedReactive)}set touched(t){oe(()=>this.touchedReactive.set(t))}_touched=We(()=>this.touchedReactive());touchedReactive=Ge(!1);get untouched(){return!this.touched}_events=new H;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Gi(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Gi(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Bi(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Bi(t,this._rawAsyncValidators))}hasValidator(t){return dt(this._rawValidators,t)}hasAsyncValidator(t){return dt(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let n=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(V(w({},t),{sourceControl:i})),n&&t.emitEvent!==!1&&this._events.next(new He(!0,i))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(t))}markAsUntouched(t={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,i),n&&t.emitEvent!==!1&&this._events.next(new He(!1,i))}markAsDirty(t={}){let n=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(V(w({},t),{sourceControl:i})),n&&t.emitEvent!==!1&&this._events.next(new je(!1,i))}markAsPristine(t={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,i),n&&t.emitEvent!==!1&&this._events.next(new je(!0,i))}markAsPending(t={}){this.status=xe;let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Me(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(V(w({},t),{sourceControl:n}))}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Le,this.errors=null,this._forEachChild(r=>{r.disable(V(w({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ht(this.value,i)),this._events.next(new Me(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(w({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Re,this._forEachChild(i=>{i.enable(V(w({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(V(w({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,n){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Re||this.status===xe)&&this._runAsyncValidator(i,t.emitEvent)}let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ht(this.value,n)),this._events.next(new Me(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(V(w({},t),{sourceControl:n}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Le:Re}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,n){if(this.asyncValidator){this.status=xe,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=Ki(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(t,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,n,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new Me(this.status,n)),this._parent&&this._parent._updateControlsErrors(t,n,i)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Le:this.errors?ut:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xe)?xe:this._anyControlsHaveStatus(ut)?ut:Re}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),r&&this._events.next(new je(this.pristine,n))}_updateTouched(t={},n){this.touched=this._anyControlsTouched(),this._events.next(new He(this.touched,n)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){gt(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let n=this._parent&&this._parent.dirty;return!t&&!!n&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Ua(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Wa(this._rawAsyncValidators)}};var rr=new fe("",{providedIn:"root",factory:()=>cn}),cn="always";function Ya(e,t){return[...t.path,e]}function qa(e,t,n=cn){Za(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),Ka(e,t),Qa(e,t),Ja(e,t),Xa(e,t)}function Ui(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function Xa(e,t){if(t.valueAccessor.setDisabledState){let n=i=>{t.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function Za(e,t){let n=Ha(e);t.validator!==null?e.setValidators(zi(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let i=za(e);t.asyncValidator!==null?e.setAsyncValidators(zi(i,t.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();Ui(t._rawValidators,r),Ui(t._rawAsyncValidators,r)}function Ka(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&or(e,t)})}function Ja(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&or(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function or(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Qa(e,t){let n=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function es(e,t){if(!e.hasOwnProperty("model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function ts(e){return Object.getPrototypeOf(e.constructor)===ln}function ns(e,t){if(!t)return null;Array.isArray(t);let n,i,r;return t.forEach(o=>{o.constructor===pt?n=o:ts(o)?i=o:r=o}),r||i||n||null}function $i(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Wi(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var is=class extends sn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,n,i){super(Ba(n),$a(i,n)),this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),gt(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Wi(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){$i(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){$i(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Wi(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var rs={provide:ze,useExisting:we(()=>un)},Yi=Promise.resolve(),un=(()=>{class e extends ze{_changeDetectorRef;callSetDisabledState;control=new is;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new N;constructor(n,i,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=n,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=ns(this,o)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let i=n.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),es(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){qa(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Yi.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let i=n.isDisabled.currentValue,r=i!==0&&An(i);Yi.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Ya(n,this._parent):[n]}static \u0275fac=function(i){return new(i||e)(b(on,9),b(Na,10),b(Ta,10),b(mt,10),b(Mn,8),b(rr,8))};static \u0275dir=k({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ee([rs]),q,Ct]})}return e})();var os={provide:mt,useExisting:we(()=>sr),multi:!0};function ar(e,t){return e==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${e}: ${t}`.slice(0,50))}function as(e){return e.split(":")[0]}var sr=(()=>{class e extends ln{value;_optionMap=new Map;_idCounter=0;set compareWith(n){this._compareWith=n}_compareWith=Object.is;writeValue(n){this.value=n;let i=this._getOptionId(n),r=ar(i,n);this.setProperty("value",r)}registerOnChange(n){this.onChange=i=>{this.value=this._getOptionValue(i),n(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(n){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),n))return i;return null}_getOptionValue(n){let i=as(n);return this._optionMap.has(i)?this._optionMap.get(i):n}static \u0275fac=(()=>{let n;return function(r){return(n||(n=Ie(e)))(r||e)}})();static \u0275dir=k({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,r){i&1&&x("change",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[Ee([os]),q]})}return e})(),lr=(()=>{class e{_element;_renderer;_select;id;constructor(n,i,r){this._element=n,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(n){this._select!=null&&(this._select._optionMap.set(this.id,n),this._setElementValue(ar(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._setElementValue(n),this._select&&this._select.writeValue(this._select.value)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||e)(b(he),b(me),b(sr,9))};static \u0275dir=k({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return e})(),ss={provide:mt,useExisting:we(()=>cr),multi:!0};function qi(e,t){return e==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${e}: ${t}`.slice(0,50))}function ls(e){return e.split(":")[0]}var cr=(()=>{class e extends ln{value;_optionMap=new Map;_idCounter=0;set compareWith(n){this._compareWith=n}_compareWith=Object.is;writeValue(n){this.value=n;let i;if(Array.isArray(n)){let r=n.map(o=>this._getOptionId(o));i=(o,a)=>{o._setSelected(r.indexOf(a.toString())>-1)}}else i=(r,o)=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(n){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let a=o;for(let s=0;s<a.length;s++){let d=a[s],u=this._getOptionValue(d.value);r.push(u)}}else{let a=i.options;for(let s=0;s<a.length;s++){let d=a[s];if(d.selected){let u=this._getOptionValue(d.value);r.push(u)}}}this.value=r,n(r)}}_registerOption(n){let i=(this._idCounter++).toString();return this._optionMap.set(i,n),i}_getOptionId(n){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,n))return i;return null}_getOptionValue(n){let i=ls(n);return this._optionMap.has(i)?this._optionMap.get(i)._value:n}static \u0275fac=(()=>{let n;return function(r){return(n||(n=Ie(e)))(r||e)}})();static \u0275dir=k({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,r){i&1&&x("change",function(a){return r.onChange(a.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[Ee([ss]),q]})}return e})(),ur=(()=>{class e{_element;_renderer;_select;id;_value;constructor(n,i,r){this._element=n,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(n){this._select!=null&&(this._value=n,this._setElementValue(qi(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._select?(this._value=n,this._setElementValue(qi(this.id,n)),this._select.writeValue(this._select.value)):this._setElementValue(n)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}_setSelected(n){this._renderer.setProperty(this._element.nativeElement,"selected",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||e)(b(he),b(me),b(cr,9))};static \u0275dir=k({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return e})();var cs=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Se({type:e});static \u0275inj=De({})}return e})();var dr=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:rr,useValue:n.callSetDisabledState??cn}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=Se({type:e});static \u0275inj=De({imports:[cs]})}return e})();var fr={APP_TITLE:"MuviCoop",CAT_MOVIE:"Movies",CAT_PEOPLE:"People",LOADING:"Loading...",SEARCHING:"Searching...",PLACEHOLDER:"Search movies, people..."},hr={MOVIE:"movie",MOVIES:"movies",PEOPLE:"people"};function ds(e,t){if(e&1){let n=pe();h(0,"button",15),x("click",function(){te(n);let r=D();return ne(r.clearSearch())}),_(1," \xD7 "),m()}}function fs(e,t){if(e&1&&(h(0,"div",20)(1,"div",21)(2,"span",22),_(3),m()(),h(4,"span",23),_(5),m()()),e&2){let n=D(2);g(3),G(n.movieConstants.LOADING),g(2),G(n.movieConstants.SEARCHING)}}function hs(e,t){if(e&1){let n=pe();h(0,"div",25),x("mousedown",function(){let r=te(n).$implicit,o=D(3);return ne(o.selectItem(r))})("mouseenter",function(){let r=te(n).index,o=D(3);return ne(o.selectedIndex=r)}),h(1,"div",26)(2,"div",27),z(3,"img",28),m(),h(4,"div",29)(5,"h6",30),_(6),m(),h(7,"small",31),_(8),m()()()()}if(e&2){let n=t.$implicit,i=t.index,r=D(3);T("bg-secondary",i===r.selectedIndex),g(3),M("src",r.getItemImage(n),Be)("alt",r.getItemTitle(n)),g(3),G(r.getItemTitle(n)),g(2),re(" ",r.getItemSubtitle(n)," ")}}function ms(e,t){if(e&1&&(h(0,"div"),X(1,hs,9,6,"div",24),m()),e&2){let n=D(2);g(),M("ngForOf",n.searchResults)}}function ps(e,t){if(e&1&&(h(0,"div",32),_(1),m()),e&2){let n=D(2);g(),re(" ",n.getContent()," ")}}function gs(e,t){if(e&1&&(h(0,"div",16),X(1,fs,6,2,"div",17)(2,ms,2,1,"div",18)(3,ps,2,1,"div",19),m()),e&2){let n=D();g(),M("ngIf",n.loading),g(),M("ngIf",!n.loading&&n.searchResults.length>0),g(),M("ngIf",!n.loading&&n.searchResults.length===0&&n.searchText.length)}}var vt=class e{destroy$=new H;searchSubject=new H;movieConstants=fr;comparisionConstants=hr;searchText="";showDropdown=!1;selectedIndex=-1;searchType="movie";loading=!1;movieResults=[];actorResults=[];searchResults=[];currentSearch=new N;searchTypeUpdate=new N;onClearSearch=new N;selectedItem=new N;redirectHome=new N;ngOnInit(){this.searchSubject.pipe(pn(300),gn(),de(this.destroy$)).subscribe(t=>{this.currentSearch.emit(t)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getContent(){return`No ${this.searchType===this.comparisionConstants.MOVIE?this.comparisionConstants.MOVIES:this.comparisionConstants.PEOPLE} found for ${this.searchText}`}getPlaceholder(){return this.movieConstants.PLACEHOLDER}onSearchTypeChange(t){let i=t.target.value;this.searchTypeUpdate.emit(i)}onSearchInput(t){let n=t.target;this.searchText=n.value,this.showDropdown=!0,this.selectedIndex=-1,this.searchSubject.next(this.searchText)}clearSearch(){this.searchText="",this.showDropdown=!1,this.searchSubject.next(""),this.onClearSearch.emit()}onInputBlur(){setTimeout(()=>{this.showDropdown=!1,this.selectedIndex=-1},200)}onInputFocus(){this.searchText.length>0&&(this.showDropdown=!0)}selectItem(t){this.selectedItem.emit(t),this.showDropdown=!1,this.selectedIndex=-1}getItemImage(t){let n=t.poster_path||t.profile_path;return n?`https://image.tmdb.org/t/p/w92${n}`:"/movie-discover-app/no-image.png"}getItemTitle(t){return t.title||t.name||"Unknown"}getItemSubtitle(t){return t.type==="movie"?t.release_date?new Date(t.release_date).getFullYear().toString():"Unknown Year":"Actor/Director"}redirectToHome(){}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=ie({type:e,selectors:[["app-header"]],inputs:{searchType:"searchType",loading:"loading",movieResults:"movieResults",actorResults:"actorResults",searchResults:"searchResults"},outputs:{currentSearch:"currentSearch",searchTypeUpdate:"searchTypeUpdate",onClearSearch:"onClearSearch",selectedItem:"selectedItem",redirectHome:"redirectHome"},decls:19,vars:8,consts:[[1,"bg-dark","text-white","p-3"],[1,"align-items-center","container-fluid","d-flex","flex-row","justify-content-between"],[1,"col-md-2","d-flex","justify-content-md-start","logo",3,"click"],["src","/movie-discover-app/logo.svg","alt","Logo",1,"me-2"],[1,"mb-0","text-white"],[1,"mx-4","position-relative","search-container","col-md-8"],[1,"input-group"],["id","searchType",1,"form-select","bg-dark","text-white","border-secondary","type-dropdown",3,"change","value"],["value","movie"],["value","person"],["type","text",1,"form-control","text-muted","border-secondary",3,"ngModelChange","input","focus","blur","placeholder","ngModel"],["class","btn btn-outline-secondary","type","button",3,"click",4,"ngIf"],["class","search-dropdown position-absolute w-100 bg-dark border border-secondary rounded-bottom shadow-lg",4,"ngIf"],[1,"col-md-1","d-flex","justify-content-end","profile"],[1,"bg-primary","rounded-circle","d-flex","align-items-center","justify-content-center","user-profile"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"search-dropdown","position-absolute","w-100","bg-dark","border","border-secondary","rounded-bottom","shadow-lg"],["class","p-3 text-center",4,"ngIf"],[4,"ngIf"],["class","p-3 text-center text-white",4,"ngIf"],[1,"p-3","text-center"],["role","status",1,"spinner-border","spinner-border-sm","text-light"],[1,"visually-hidden"],[1,"ms-2"],["class","search-result-item p-2 border-bottom border-secondary",3,"bg-secondary","mousedown","mouseenter",4,"ngFor","ngForOf"],[1,"search-result-item","p-2","border-bottom","border-secondary",3,"mousedown","mouseenter"],[1,"d-flex","align-items-center"],[1,"me-3"],["onerror","this.src='/movie-discover-app/no-image.png'",1,"rounded","image-details",3,"src","alt"],[1,"flex-grow-1"],[1,"mb-1","text-white"],[1,"text-white"],[1,"p-3","text-center","text-white"]],template:function(n,i){n&1&&(h(0,"header",0)(1,"div",1)(2,"div",2),x("click",function(){return i.redirectToHome()}),z(3,"img",3),h(4,"h4",4),_(5),m()(),h(6,"div",5)(7,"div",6)(8,"select",7),x("change",function(o){return i.onSearchTypeChange(o)}),h(9,"option",8),_(10),m(),h(11,"option",9),_(12),m()(),h(13,"input",10),Cn("ngModelChange",function(o){return bn(i.searchText,o)||(i.searchText=o),o}),x("input",function(o){return i.onSearchInput(o)})("focus",function(){return i.onInputFocus()})("blur",function(){return i.onInputBlur()}),m(),X(14,ds,2,0,"button",11),m(),X(15,gs,4,3,"div",12),m(),h(16,"div",13)(17,"div",14),_(18," \u{1F464} "),m()()()()),n&2&&(g(5),G(i.movieConstants.APP_TITLE),g(3),M("value",i.searchType),g(2),G(i.movieConstants.CAT_MOVIE),g(2),G(i.movieConstants.CAT_PEOPLE),g(),M("placeholder",i.getPlaceholder()),_n("ngModel",i.searchText),g(),M("ngIf",i.searchText.length),g(),M("ngIf",i.showDropdown&&i.searchText.length))},dependencies:[ve,Ye,qe,dr,lr,ur,pt,ir,un],styles:[".search-dropdown[_ngcontent-%COMP%]{border-top:none!important}.search-result-item[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s}.search-result-item[_ngcontent-%COMP%]:hover{background-color:#6c757d80!important}.search-result-item[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.type-dropdown[_ngcontent-%COMP%]{max-width:120px}.search-dropdown[_ngcontent-%COMP%]{top:100%;z-index:1000;max-height:400px;overflow-y:auto}.image-details[_ngcontent-%COMP%]{width:50px;height:75px;object-fit:cover}.user-profile[_ngcontent-%COMP%]{width:40px;height:40px}.logo[_ngcontent-%COMP%]:hover{cursor:pointer}"]})};var yt=Ke("search"),gr=C(yt,e=>e.movieResults),vr=C(yt,e=>e.actorResults),yr=C(yt,e=>e.loading),vl=C(yt,e=>e.error);var S=Ke("movies"),_r=C(S,e=>e.popularMovies),br=C(S,e=>e.popularMoviesLoading),_l=C(S,e=>e.popularMoviesError),bl=C(S,e=>e.trendingMovies),Cl=C(S,e=>e.trendingMoviesLoading),xl=C(S,e=>e.feelGoodMovies),Ml=C(S,e=>e.actionMovies),Al=C(S,e=>e.mindBenderMovies),wl=C(S,e=>e.categoryMoviesLoading),Dl=C(S,e=>e.selectedMovie),Il=C(S,e=>e.selectedMovieLoading),Sl=C(S,e=>e.selectedMovieError),El=C(S,e=>e.similarMovies),Vl=C(S,e=>e.similarMoviesLoading);function _s(e,t){if(e&1){let n=pe();h(0,"div",13)(1,"div",14),z(2,"img",15)(3,"div",16),h(4,"div",17)(5,"h5",18),_(6),m(),h(7,"div",19)(8,"span",20),_(9),ge(10,"number"),m(),h(11,"small",21),_(12),m()(),h(13,"p",22),_(14),m(),h(15,"button",23),x("click",function(){te(n);let r=D();return ne(r.viewMovieDetails(r.currentFeaturedMovie.id))}),_(16," View Details "),m()()()()}if(e&2){let n=D();g(2),M("src",n.movieService.getBackdropUrl(n.currentFeaturedMovie.backdrop_path),Be)("alt",n.currentFeaturedMovie.title),g(2),yn("opacity",n.currentImageLoaded?1:0),g(2),G(n.currentFeaturedMovie.title),g(3),re(" \u2B50 ",xn(10,8,n.currentFeaturedMovie.vote_average,"1.1-1")," "),g(3),re(" ",n.getMovieYear(n.currentFeaturedMovie.release_date)," "),g(2),re(" ",n.getTruncatedOverview(n.currentFeaturedMovie.overview)," ")}}function bs(e,t){if(e&1){let n=pe();h(0,"button",26),x("click",function(){let r=te(n).index,o=D(2);return ne(o.goToSlide(r))}),m()}if(e&2){let n=t.index,i=D(2);T("active",n===i.currentMovieIndex),Ue("aria-label","Go to slide "+(n+1))}}function Cs(e,t){if(e&1&&(h(0,"div",24),X(1,bs,1,3,"button",25),m()),e&2){let n=D();g(),M("ngForOf",n.featuredMovies)}}var _t=class e{store=Y(Ze);router=Y(Xe);destroy$=new H;movieService=Y(Pn);featuredMovies=[];currentMovieIndex=0;currentFeaturedMovie;currentImageLoaded=!1;selectedCategory=null;autoRotateInterval;popularMovies$=this.store.select(_r);popularMoviesLoading$=this.store.select(br);ngOnInit(){this.store.dispatch(En()),this.popularMovies$.pipe(de(this.destroy$)).subscribe(t=>{t.length>0&&(this.featuredMovies=t.slice(0,5),this.currentFeaturedMovie=this.featuredMovies[0],this.currentImageLoaded=!1,this.preloadImage(this.currentFeaturedMovie.backdrop_path),this.preloadNextImages(),this.startAutoRotation())})}selectCategory(t){switch(this.selectedCategory=t,t){case"feelGood":this.store.dispatch(Vn());break;case"action":this.store.dispatch(Fn());break;case"mindBender":this.store.dispatch(On());break}setTimeout(()=>{let n=document.querySelector(".category-results");n&&n.scrollIntoView({behavior:"smooth"})},100)}goToSlide(t){this.currentMovieIndex=t,this.currentFeaturedMovie=this.featuredMovies[t],this.currentImageLoaded=!1,this.preloadImage(this.currentFeaturedMovie.backdrop_path),this.restartAutoRotation()}preloadImage(t){if(t){let n=new Image;n.onload=()=>{this.currentImageLoaded=!0},n.onerror=()=>{this.currentImageLoaded=!0},n.src=this.movieService.getBackdropUrl(t)}else this.currentImageLoaded=!0}onImageLoad(){this.currentImageLoaded=!0}onImageError(t){this.currentImageLoaded=!0}preloadNextImages(){for(let t=1;t<Math.min(4,this.featuredMovies.length);t++){let n=this.featuredMovies[t];if(n.backdrop_path){let i=new Image;i.src=this.movieService.getBackdropUrl(n.backdrop_path)}}}startAutoRotation(){this.featuredMovies.length>1&&(this.autoRotateInterval=setInterval(()=>{this.nextSlide()},5e3))}restartAutoRotation(){this.stopAutoRotation(),this.startAutoRotation()}stopAutoRotation(){this.autoRotateInterval&&(clearInterval(this.autoRotateInterval),this.autoRotateInterval=null)}nextSlide(){this.currentMovieIndex=(this.currentMovieIndex+1)%this.featuredMovies.length,this.currentFeaturedMovie=this.featuredMovies[this.currentMovieIndex],this.currentImageLoaded=!1,this.preloadImage(this.currentFeaturedMovie.backdrop_path)}viewMovieDetails(t){this.router.navigate(["/movie",t])}getMovieYear(t){return t?new Date(t).getFullYear().toString():"Unknown"}getTruncatedOverview(t){return t?t.length>150?t.substring(0,150)+"...":t:"No description available."}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.stopAutoRotation()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=ie({type:e,selectors:[["app-hero"]],decls:25,vars:14,consts:[[1,"hero-section","bg-dark","text-white"],[1,"container","py-5"],[1,"row"],[1,"col-lg-6"],[1,"display-4","fw-bold","mb-3"],[1,"lead","mb-4","text-light"],[1,"featured-movie-container","position-relative"],["class","featured-movie-card rounded overflow-hidden shadow-lg",4,"ngIf"],["class","carousel-dots d-flex justify-content-center mt-3",4,"ngIf"],[1,"row","mt-5"],[1,"col-12"],[1,"d-flex","justify-content-center","gap-3","flex-wrap"],[1,"btn","btn-outline-light","btn-lg","category-btn",3,"click"],[1,"featured-movie-card","rounded","overflow-hidden","shadow-lg"],[1,"position-relative"],["onerror","this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMzQTNBM0EiLz48cmVjdCB4PSIyNTAiIHk9IjEyNSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzY2NjY2NiIvPjwvc3ZnPg=='",1,"w-100",2,"height","300px","object-fit","cover",3,"src","alt"],[1,"position-absolute","bottom-0","start-0","w-100","h-100",2,"background","linear-gradient(transparent, rgba(0, 0, 0, 0.8))"],[1,"position-absolute","bottom-0","start-0","p-3","text-white",2,"transition","opacity 0.3s ease"],[1,"mb-2"],[1,"d-flex","align-items-center","mb-2"],[1,"badge","bg-warning","text-dark","me-2"],[1,"text-light"],[1,"mb-3","small","text-light",2,"max-width","400px"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"carousel-dots","d-flex","justify-content-center","mt-3"],["class","dot me-2",3,"active","click",4,"ngFor","ngForOf"],[1,"dot","me-2",3,"click"]],template:function(n,i){n&1&&(h(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),_(5," What "),z(6,"br"),_(7," Should I Watch "),z(8,"br"),_(9,"Tonight? "),m(),h(10,"p",5),_(11,"Discover your next favorite movie"),m()(),h(12,"div",3)(13,"div",6),X(14,_s,17,11,"div",7)(15,Cs,2,1,"div",8),m()()(),h(16,"div",9)(17,"div",10)(18,"div",11)(19,"button",12),x("click",function(){return i.selectCategory("feelGood")}),_(20," \u{1F60A} Feel Good "),m(),h(21,"button",12),x("click",function(){return i.selectCategory("action")}),_(22," \u{1F4A5} Action "),m(),h(23,"button",12),x("click",function(){return i.selectCategory("mindBender")}),_(24," \u{1F9E0} Mind Benders "),m()()()()()()),n&2&&(g(14),M("ngIf",i.featuredMovies.length>0),g(),M("ngIf",i.featuredMovies.length>1),g(4),T("btn-primary",i.selectedCategory==="feelGood")("btn-outline-light",i.selectedCategory!=="feelGood"),g(2),T("btn-primary",i.selectedCategory==="action")("btn-outline-light",i.selectedCategory!=="action"),g(2),T("btn-primary",i.selectedCategory==="mindBender")("btn-outline-light",i.selectedCategory!=="mindBender"))},dependencies:[ve,Ye,qe,Dn],styles:[".hero-section[_ngcontent-%COMP%]{min-height:60vh;background:linear-gradient(135deg,#1a1a1a,#2d2d2d)}.featured-movie-card[_ngcontent-%COMP%]{transition:transform .3s ease;min-height:300px}.featured-movie-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.loading-placeholder[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s ease-in-out infinite alternate}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:.6}to{opacity:1}}.category-btn[_ngcontent-%COMP%]{min-width:160px;transition:all .3s ease;border-radius:25px}.category-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 5px 15px #0000004d}.dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;border:none;background-color:#fff6;transition:background-color .3s ease;cursor:pointer}.dot.active[_ngcontent-%COMP%]{background-color:#0d6efd}.dot[_ngcontent-%COMP%]:hover{background-color:#ffffffb3}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]{min-height:auto}.display-4[_ngcontent-%COMP%]{font-size:2rem}.category-btn[_ngcontent-%COMP%]{min-width:140px;font-size:.9rem}}"]})};var Cr=class e{store=Y(Ze);destroy$=new H;router=Y(Xe);searchLoading$=this.store.select(yr);movieResults$=this.store.select(gr);actorResults$=this.store.select(vr);currentSearchType="movie";currentSearchText="";searchResults=[];ngAfterViewInit(){hn([this.movieResults$,this.actorResults$]).pipe(de(this.destroy$)).subscribe(([t,n])=>{this.currentSearchType==="movie"?this.searchResults=t.map(i=>V(w({},i),{type:"movie"})):this.searchResults=n.map(i=>V(w({},i),{type:"person"}))})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateSearchType(t){this.currentSearchType=t,console.log("Current Search Type ->",t),this.updateSearchInput(this.currentSearchText)}updateSearchInput(t){this.currentSearchText=t,t.trim().length>0?this.currentSearchType.toLowerCase()==="person"?this.store.dispatch(Sn({query:t})):this.store.dispatch(In({query:t})):this.store.dispatch(Mt())}clearSearch(){this.currentSearchText="",this.store.dispatch(Mt())}navigateToSelection(t){t.type==="movie"?this.router.navigate(["/movie",t.id]):console.log("Selected person:",t)}redirectToHome(){this.router.navigate(["/home"])}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=ie({type:e,selectors:[["app-home"]],decls:5,vars:11,consts:[[3,"currentSearch","searchTypeUpdate","onClearSearch","selectedItem","redirectHome","searchType","loading","movieResults","actorResults","searchResults"]],template:function(n,i){n&1&&(h(0,"app-header",0),ge(1,"async"),ge(2,"async"),ge(3,"async"),x("currentSearch",function(o){return i.updateSearchInput(o)})("searchTypeUpdate",function(o){return i.updateSearchType(o)})("onClearSearch",function(){return i.clearSearch()})("selectedItem",function(o){return i.navigateToSelection(o)})("redirectHome",function(){return i.redirectToHome()}),m(),z(4,"app-hero")),n&2&&M("searchType",i.currentSearchType)("loading",$e(1,5,i.searchLoading$))("movieResults",$e(2,7,i.movieResults$))("actorResults",$e(3,9,i.actorResults$))("searchResults",i.searchResults)},dependencies:[Hi,vt,ve,wn,_t],encapsulation:2})};export{Cr as HomePage};
