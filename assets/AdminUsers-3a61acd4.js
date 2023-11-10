import{n as g,r as D,a as ce,j as n,b as he,d as C,e as me,f as fe,g as xe,h as ge,o as ve,u as be}from"./index-047ca810.js";import{B as de,S as ye,c as je,I as ke,U as we}from"./AdminCabinetPage.styled-da929979.js";const Ce=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,Se=g.div`
  width: ${t=>t.width};
  padding: ${t=>t.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,Oe=g.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,Re=t=>g(t)`
  width: 24px;
  height: 24px;
`,Me=t=>D.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},D.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),Fe=document.querySelector("#modal-root"),Ee=Re(Me),Ne=({width:t,padding:s,bcgTransparent:i,showCloseButton:a,children:e,onClose:l})=>{D.useEffect(()=>{const u=p=>{p.code==="Escape"&&l()};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[l]);const o=u=>{u.currentTarget===u.target&&l()},c={display:a?"block":"none"},d={backgroundColor:i?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return ce.createPortal(n.jsx(Ce,{onClick:o,style:d,children:n.jsxs(Se,{width:t,padding:s,children:[n.jsx(Oe,{onClick:l,style:c,children:n.jsx(Ee,{})}),e]})}),Fe)},Q=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,U=/^([а-яА-ЯїЇіІєЄ'ʼ-])+$/,J=/^[0-9]+$/,X=/\d{2}\.\d{2}\.\d{4}/,ee=/^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/,Ie=he().shape({name:C().matches(U,"This is an ERROR name"),firstName:C().required("Must be filled!").matches(U,"This is an ERROR name"),lastName:C().required("Must be filled!").matches(U,"This is an ERROR name"),fatherName:C().matches(U,"This is an ERROR name"),contractNumber:C().min(6,"Must be between 6 and 16 characters!").max(16,"Must be between 6 and 16 characters!").required("Must be filled!"),taxCode:C().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(J,"This is an ERROR taxCode"),dayOfBirthday:C().required("Must be filled!").matches(X,"This is an ERROR taxCode"),telNumber:C().required("Must be filled!").matches(ee,"This is an ERROR taxCode"),email:C().required("Must be filled!").matches(Q,"This is an ERROR taxCode"),dateOfAccess:C().required("Must be filled!").matches(X,"This is an ERROR taxCode"),lastPay:C().required("Must be filled!").matches(X,"This is an ERROR taxCode"),contactFace:C().required("Must be filled!"),contactFaceTaxCode:C().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(J,"This is an ERROR taxCode"),contactFaceTelNumber:C().required("Must be filled!").matches(ee,"This is an ERROR taxCode"),contactFaceEmail:C().required("Must be filled!").matches(Q,"This is an ERROR taxCode"),comment:C()});g.input`
position: relative;
width: 200px;
margin-top: 5px;
width: 100%;


&[title]:hover::before {
  content: attr(title);
  display: block;
  background-color: #f5f5f5;
  color: #333;
  padding: 5px;
  border: 1px solid #ccc;
  position: absolute;
  z-index: 1;
  width: 200px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
}

&[title]:hover::before {
  visibility: visible;
  opacity: 1;
}
`;const Le=g.div`
display: block;
width: 100%;

`,De=g.div`
margin-bottom: 24px;
/* display: block; */
/* display: flex;
justify-content: left;
gap: 48px; */


`;g.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`;const te=g.div`
  display: flex;
  gap: 24px;
  /* flex-direction: column; */

`,Te=g.div`
  display: flex;
  flex-direction: column;
 

`,Be=g.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
 

`,j=g.div`
  display: flex;
  width: 558px;
  font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;


/* background: rgba(234, 234, 234, 0.32); */
height: 42px;
  
`,S=g.input`

background-color:  rgba(234, 234, 234, 0.32);
  width: 100%;
  padding-left: 8px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 /* border: 0.5px solid  #17161C; */
 /* stroke-width: 0.5px; */
  
`,O=g.label`
 /* border: 0.5px solid  #17161C; */
 border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  
`;g.button`
display: flex;
width: 198px;
height: 48px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
display: block;
justify-content: center;
text-align: center;
border-radius: 10px;
border: 1px solid #17161C;
background:  rgba(164, 188, 212, 0.30);
text-transform: uppercase;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;const Pe=g.textarea`

background-color:  rgba(234, 234, 234, 0.32);
  width: 100%;
  height: 220px;
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  outline: none;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 /* border: 0.5px solid  #17161C; */
 /* stroke-width: 0.5px; */
  
`,Ve=g.label`

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
color:  #17161C;
  
`,ne=g.button`
display: inline-block;
border: none;
background-color: inherit ;
justify-content: left;
margin-right: 48px;
color:  #17161C;
text-align: center;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 120%;

text-decoration: ${t=>t.isActive?"underline":"none"};


`,Ue=g.div`
 margin-top: ${t=>t.margintop};
  `;g.div`
  display: flex;
  flex-direction: column;
  `;const ae=g.div`
  display: flex;
  padding: 8px 24px 8px 10px;
  width: 558px;
  gap: 16px;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
`,Ae=g.div`
  display: flex;
  flex-direction: column;
 
  width: 100%;
  gap: 13px;
  border:none;

`,A=g.div`
  display: flex;
  flex-direction: column;
  width: 133px;

  `,q=g.label`
  display: flex;
  flex-direction: column;
  border:none;
 /* background:rgba(234, 234, 234, 0.32); */
 color:  rgba(0, 0, 0, 0.40);
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
  `,z=g.input`
 
  /* border: 0.25px solid  rgba(23, 22, 28, 0.5); */
 /* background:rgba(234, 234, 234, 0.32); */
 display: flex;
 background-color: inherit;
width: 133px;
height: 32px;
padding: 4px 8px;
align-items: center;
gap: 8px;
border-radius: 10px;
border: 1px solid  rgba(0, 0, 0, 0.40);
/* background: var(--Color-input1, rgba(234, 234, 234, 0.32)); */

  `,$=g.button`
 display: flex;
 gap: 8px;
width: 66px;
height: 23px;
padding: 2px 10px;
border-radius: 10px;
background-color: ${t=>t.isTrue?"#FFF3BF":"#8CACD7"};
 color:  rgba(23, 22, 28, 1);
 text-transform: uppercase;
font-family: Inter;
/* font-family: Hind; */
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 12px */
letter-spacing: 1px;
margin-bottom: 20px;
  `,qe=g.div`
display: flex;
flex-direction: column;
/* width: 133px; */

`;function ze(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Y=ze(D),$e=ce;function _e(t,s){for(var i=Object.getOwnPropertyNames(s),a=0;a<i.length;a++){var e=i[a],l=Object.getOwnPropertyDescriptor(s,e);l&&l.configurable&&t[e]===void 0&&Object.defineProperty(t,e,l)}return t}function H(){return(H=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}function We(t,s){t.prototype=Object.create(s.prototype),_e(t.prototype.constructor=t,s)}function Xe(t,s){if(t==null)return{};var i,a,e={},l=Object.keys(t);for(a=0;a<l.length;a++)i=l[a],0<=s.indexOf(i)||(e[i]=t[i]);return e}function B(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var Ye=function(t,s,i,a,e,l,o,c){if(!t){var d;if(s===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[i,a,e,l,o,c],p=0;(d=new Error(s.replace(/%s/g,function(){return u[p++]}))).name="Invariant Violation"}throw d.framesToPop=1,d}},se=Ye;function ie(t,s,i){if("selectionStart"in t&&"selectionEnd"in t)t.selectionStart=s,t.selectionEnd=i;else{var a=t.createTextRange();a.collapse(!0),a.moveStart("character",s),a.moveEnd("character",i-s),a.select()}}function Ze(t){var s=0,i=0;if("selectionStart"in t&&"selectionEnd"in t)s=t.selectionStart,i=t.selectionEnd;else{var a=document.selection.createRange();a.parentElement()===t&&(s=-a.moveStart("character",-t.value.length),i=-a.moveEnd("character",-t.value.length))}return{start:s,end:i,length:i-s}}var Ge={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},He="_";function oe(t,s,i){var a="",e="",l=null,o=[];if(s===void 0&&(s=He),i==null&&(i=Ge),!t||typeof t!="string")return{maskChar:s,formatChars:i,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var c=!1;return t.split("").forEach(function(d){c=!c&&d==="\\"||(c||!i[d]?(o.push(a.length),a.length===o.length-1&&(e+=d)):l=a.length+1,a+=d,!1)}),{maskChar:s,formatChars:i,prefix:e,mask:a,lastEditablePosition:l,permanents:o}}function F(t,s){return t.permanents.indexOf(s)!==-1}function _(t,s,i){var a=t.mask,e=t.formatChars;if(!i)return!1;if(F(t,s))return a[s]===i;var l=e[a[s]];return new RegExp(l).test(i)}function le(t,s){return s.split("").every(function(i,a){return F(t,a)||!_(t,a,i)})}function P(t,s){var i=t.maskChar,a=t.prefix;if(!i){for(;s.length>a.length&&F(t,s.length-1);)s=s.slice(0,s.length-1);return s.length}for(var e=a.length,l=s.length;l>=a.length;l--){var o=s[l];if(!F(t,l)&&_(t,l,o)){e=l+1;break}}return e}function ue(t,s){return P(t,s)===t.mask.length}function L(t,s){var i=t.maskChar,a=t.mask,e=t.prefix;if(!i){for((s=K(t,"",s,0)).length<e.length&&(s=e);s.length<a.length&&F(t,s.length);)s+=a[s.length];return s}if(s)return K(t,L(t,""),s,0);for(var l=0;l<a.length;l++)F(t,l)?s+=a[l]:s+=i;return s}function Ke(t,s,i,a){var e=i+a,l=t.maskChar,o=t.mask,c=t.prefix,d=s.split("");if(l)return d.map(function(p,b){return b<i||e<=b?p:F(t,b)?o[b]:l}).join("");for(var u=e;u<d.length;u++)F(t,u)&&(d[u]="");return i=Math.max(c.length,i),d.splice(i,e-i),s=d.join(""),L(t,s)}function K(t,s,i,a){var e=t.mask,l=t.maskChar,o=t.prefix,c=i.split(""),d=ue(t,s);return!l&&a>s.length&&(s+=e.slice(s.length,a)),c.every(function(u){for(;y=u,F(t,x=a)&&y!==e[x];){if(a>=s.length&&(s+=e[a]),p=u,b=a,l&&F(t,b)&&p===l)return!0;if(++a>=e.length)return!1}var p,b,x,y;return!_(t,a,u)&&u!==l||(a<s.length?s=l||d||a<o.length?s.slice(0,a)+u+s.slice(a+1):(s=s.slice(0,a)+u+s.slice(a),L(t,s)):l||(s+=u),++a<e.length)}),s}function Qe(t,s,i,a){var e=t.mask,l=t.maskChar,o=i.split(""),c=a;return o.every(function(d){for(;p=d,F(t,u=a)&&p!==e[u];)if(++a>=e.length)return!1;var u,p;return(_(t,a,d)||d===l)&&a++,a<e.length}),a-c}function Je(t,s){for(var i=s;0<=i;--i)if(!F(t,i))return i;return null}function V(t,s){for(var i=t.mask,a=s;a<i.length;++a)if(!F(t,a))return a;return null}function Z(t){return t||t===0?t+"":""}function et(t,s,i,a,e){var l=t.mask,o=t.prefix,c=t.lastEditablePosition,d=s,u="",p=0,b=0,x=Math.min(e.start,i.start);return i.end>e.start?b=(p=Qe(t,a,u=d.slice(e.start,i.end),x))?e.length:0:d.length<a.length&&(b=a.length-d.length),d=a,b&&(b===1&&!e.length&&(x=e.start===i.start?V(t,i.start):Je(t,i.start)),d=Ke(t,d,x,b)),d=K(t,d,u,x),(x+=p)>=l.length?x=l.length:x<o.length&&!p?x=o.length:x>=o.length&&x<c&&p&&(x=V(t,x)),u||(u=null),{value:d=L(t,d),enteredString:u,selection:{start:x,end:x}}}function tt(){var t=new RegExp("windows","i"),s=new RegExp("phone","i"),i=navigator.userAgent;return t.test(i)&&s.test(i)}function M(t){return typeof t=="function"}function nt(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function pe(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function re(t){return(pe()?nt():function(){return setTimeout(t,1e3/60)})(t)}function G(t){(pe()||clearTimeout)(t)}(function(t){function s(a){var e=t.call(this,a)||this;e.focused=!1,e.mounted=!1,e.previousSelection=null,e.selectionDeferId=null,e.saveSelectionLoopDeferId=null,e.saveSelectionLoop=function(){e.previousSelection=e.getSelection(),e.saveSelectionLoopDeferId=re(e.saveSelectionLoop)},e.runSaveSelectionLoop=function(){e.saveSelectionLoopDeferId===null&&e.saveSelectionLoop()},e.stopSaveSelectionLoop=function(){e.saveSelectionLoopDeferId!==null&&(G(e.saveSelectionLoopDeferId),e.saveSelectionLoopDeferId=null,e.previousSelection=null)},e.getInputDOMNode=function(){if(!e.mounted)return null;var r=$e.findDOMNode(B(B(e))),h=typeof window<"u"&&r instanceof window.Element;if(r&&!h)return null;if(r.nodeName!=="INPUT"&&(r=r.querySelector("input")),!r)throw new Error("react-input-mask: inputComponent doesn't contain input node");return r},e.getInputValue=function(){var r=e.getInputDOMNode();return r?r.value:null},e.setInputValue=function(r){var h=e.getInputDOMNode();h&&(e.value=r,h.value=r)},e.setCursorToEnd=function(){var r=P(e.maskOptions,e.value),h=V(e.maskOptions,r);h!==null&&e.setCursorPosition(h)},e.setSelection=function(r,h,m){m===void 0&&(m={});var f=e.getInputDOMNode(),v=e.isFocused();f&&v&&(m.deferred||ie(f,r,h),e.selectionDeferId!==null&&G(e.selectionDeferId),e.selectionDeferId=re(function(){e.selectionDeferId=null,ie(f,r,h)}),e.previousSelection={start:r,end:h,length:Math.abs(h-r)})},e.getSelection=function(){return Ze(e.getInputDOMNode())},e.getCursorPosition=function(){return e.getSelection().start},e.setCursorPosition=function(r){e.setSelection(r,r)},e.isFocused=function(){return e.focused},e.getBeforeMaskedValueChangeConfig=function(){var r=e.maskOptions,h=r.mask,m=r.maskChar,f=r.permanents,v=r.formatChars;return{mask:h,maskChar:m,permanents:f,alwaysShowMask:!!e.props.alwaysShowMask,formatChars:v}},e.isInputAutofilled=function(r,h,m,f){var v=e.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!e.focused||f.end<m.length&&h.end===r.length},e.onChange=function(r){var h=B(B(e)).beforePasteState,m=B(B(e)).previousSelection,f=e.props.beforeMaskedValueChange,v=e.getInputValue(),w=e.value,k=e.getSelection();e.isInputAutofilled(v,k,w,m)&&(w=L(e.maskOptions,""),m={start:0,end:0,length:0}),h&&(m=h.selection,w=h.value,k={start:m.start+v.length,end:m.start+v.length,length:0},v=w.slice(0,m.start)+v+w.slice(m.end),e.beforePasteState=null);var E=et(e.maskOptions,v,k,w,m),T=E.enteredString,R=E.selection,N=E.value;if(M(f)){var I=f({value:N,selection:R},{value:w,selection:m},T,e.getBeforeMaskedValueChangeConfig());N=I.value,R=I.selection}e.setInputValue(N),M(e.props.onChange)&&e.props.onChange(r),e.isWindowsPhoneBrowser?e.setSelection(R.start,R.end,{deferred:!0}):e.setSelection(R.start,R.end)},e.onFocus=function(r){var h=e.props.beforeMaskedValueChange,m=e.maskOptions,f=m.mask,v=m.prefix;if(e.focused=!0,e.mounted=!0,f){if(e.value)P(e.maskOptions,e.value)<e.maskOptions.mask.length&&e.setCursorToEnd();else{var w=L(e.maskOptions,v),k=L(e.maskOptions,w),E=P(e.maskOptions,k),T=V(e.maskOptions,E),R={start:T,end:T};if(M(h)){var N=h({value:k,selection:R},{value:e.value,selection:null},null,e.getBeforeMaskedValueChangeConfig());k=N.value,R=N.selection}var I=k!==e.getInputValue();I&&e.setInputValue(k),I&&M(e.props.onChange)&&e.props.onChange(r),e.setSelection(R.start,R.end)}e.runSaveSelectionLoop()}M(e.props.onFocus)&&e.props.onFocus(r)},e.onBlur=function(r){var h=e.props.beforeMaskedValueChange,m=e.maskOptions.mask;if(e.stopSaveSelectionLoop(),e.focused=!1,m&&!e.props.alwaysShowMask&&le(e.maskOptions,e.value)){var f="";M(h)&&(f=h({value:f,selection:null},{value:e.value,selection:e.previousSelection},null,e.getBeforeMaskedValueChangeConfig()).value);var v=f!==e.getInputValue();v&&e.setInputValue(f),v&&M(e.props.onChange)&&e.props.onChange(r)}M(e.props.onBlur)&&e.props.onBlur(r)},e.onMouseDown=function(r){if(!e.focused&&document.addEventListener){e.mouseDownX=r.clientX,e.mouseDownY=r.clientY,e.mouseDownTime=new Date().getTime();var h=function m(f){if(document.removeEventListener("mouseup",m),e.focused){var v=Math.abs(f.clientX-e.mouseDownX),w=Math.abs(f.clientY-e.mouseDownY),k=Math.max(v,w),E=new Date().getTime()-e.mouseDownTime;(k<=10&&E<=200||k<=5&&E<=300)&&e.setCursorToEnd()}};document.addEventListener("mouseup",h)}M(e.props.onMouseDown)&&e.props.onMouseDown(r)},e.onPaste=function(r){M(e.props.onPaste)&&e.props.onPaste(r),r.defaultPrevented||(e.beforePasteState={value:e.getInputValue(),selection:e.getSelection()},e.setInputValue(""))},e.handleRef=function(r){e.props.children==null&&M(e.props.inputRef)&&e.props.inputRef(r)};var l=a.mask,o=a.maskChar,c=a.formatChars,d=a.alwaysShowMask,u=a.beforeMaskedValueChange,p=a.defaultValue,b=a.value;e.maskOptions=oe(l,o,c),p==null&&(p=""),b==null&&(b=p);var x=Z(b);if(e.maskOptions.mask&&(d||x)&&(x=L(e.maskOptions,x),M(u))){var y=a.value;a.value==null&&(y=p),x=u({value:x,selection:null},{value:y=Z(y),selection:null},null,e.getBeforeMaskedValueChangeConfig()).value}return e.value=x,e}We(s,t);var i=s.prototype;return i.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=tt(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},i.componentDidUpdate=function(){var a=this.previousSelection,e=this.props,l=e.beforeMaskedValueChange,o=e.alwaysShowMask,c=e.mask,d=e.maskChar,u=e.formatChars,p=this.maskOptions,b=o||this.isFocused(),x=this.props.value!=null,y=x?Z(this.props.value):this.value,r=a?a.start:null;if(this.maskOptions=oe(c,d,u),this.maskOptions.mask){!p.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==p.mask;if(p.mask||x||(y=this.getInputValue()),(h||this.maskOptions.mask&&(y||b))&&(y=L(this.maskOptions,y)),h){var m=P(this.maskOptions,y);(r===null||m<r)&&(r=ue(this.maskOptions,y)?m:V(this.maskOptions,m))}!this.maskOptions.mask||!le(this.maskOptions,y)||b||x&&this.props.value||(y="");var f={start:r,end:r};if(M(l)){var v=l({value:y,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());y=v.value,f=v.selection}this.value=y;var w=this.getInputValue()!==this.value;w?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var k=!1;f.start!=null&&f.end!=null&&(k=!a||a.start!==f.start||a.end!==f.end),(k||w)&&this.setSelection(f.start,f.end)}else p.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},i.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&G(this.selectionDeferId),this.stopSaveSelectionLoop()},i.render=function(){var a,e=this.props,l=(e.mask,e.alwaysShowMask,e.maskChar,e.formatChars,e.inputRef,e.beforeMaskedValueChange,e.children),o=Xe(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(l){M(l)||se(!1);var c=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],d=H({},o);c.forEach(function(p){return delete d[p]}),a=l(d),c.filter(function(p){return a.props[p]!=null&&a.props[p]!==o[p]}).length&&se(!1)}else a=Y.createElement("input",H({ref:this.handleRef},o));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(o.disabled||o.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),o.value!=null&&(u.value=this.value)),a=Y.cloneElement(a,u)},s})(Y.Component);const at=({register:t,errors:s,margintop:i,control:a})=>n.jsxs(Ue,{margintop:i,children:[n.jsxs(j,{children:[n.jsx(O,{children:"Контактна особа* "}),n.jsx(S,{type:"text",placeholder:"Контактна особа",...t("contactFace")}),n.jsx("p",{children:s.contactFace&&s.contactFace.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Ідентифікаційний номер* "}),n.jsx(S,{type:"text",placeholder:"Ідентифікаційний номер",...t("contactFaceTaxCode")}),n.jsx("p",{children:s.contactFaceTaxCode&&s.contactFaceTaxCode.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Номер телефону* "}),n.jsx(S,{type:"text",placeholder:"Номер телефону",...t("contactFaceTelNumber")}),n.jsx("p",{children:s.contactFaceTelNumber&&s.contactFaceTelNumber.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"E-mail "}),n.jsx(S,{type:"text",placeholder:"E-mail",...t("contactFaceEmail")}),n.jsx("p",{children:s.contactFaceEmail&&s.contactFaceEmail.message})]})]}),st=({control:t,handleTypeOfStatus:s,activeSection:i,typeOfStatus:a,typeOfUser:e,isValid:l,errors:o,register:c})=>(console.log("activeSection",i),n.jsxs(qe,{children:[i==="NewUser"&&n.jsxs(te,{children:[n.jsxs(Te,{children:[n.jsx(ae,{children:e==="fop"?n.jsxs(n.Fragment,{children:[n.jsxs(A,{children:[n.jsx(q,{children:"Прізвище"}),n.jsx(z,{type:"text",placeholder:"Прізвище",...c("lastName")}),n.jsx("p",{children:o.lastName&&o.lastName.message})]}),n.jsxs(A,{children:[n.jsx(q,{children:"Ім'я"}),n.jsx(z,{type:"text",placeholder:"Ім'я",...c("firstName")}),n.jsx("p",{children:o.firstName&&o.firstName.message})]}),n.jsxs(A,{children:[n.jsx(q,{children:"По-батькові"}),n.jsx(z,{type:"text",placeholder:"По-батькові",...c("fatherName")}),n.jsx("p",{children:o.fatherName&&o.fatherName.message})]}),n.jsx($,{type:"button",isTrue:a,onClick:()=>s(),children:a?n.jsxs(n.Fragment,{children:["On",n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:n.jsx("circle",{cx:"6.5",cy:"6.5",r:"6",fill:"#8CACD7"})})]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:n.jsx("circle",{cx:"6.5",cy:"6.5",r:"6",fill:"#FFF3BF"})}),"Off"]})})]}):n.jsxs(n.Fragment,{children:[n.jsxs(A,{children:[n.jsx(q,{children:"Назва компанії"}),n.jsx(z,{type:"text",placeholder:"Назва компанії",...c("name")}),n.jsx("p",{children:o.name&&o.lastName.message})]}),n.jsx($,{type:"button",onClick:s,children:a==="true"?"On":"Off"})]})}),n.jsxs(j,{children:[n.jsx(O,{children:"№ договору"}),n.jsx(S,{type:"text",placeholder:"№ договору",...c("contractNumber")}),n.jsx("p",{children:o.contractNumber&&o.contractNumber.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Код ЄДРПОУ (ІНН)*"}),n.jsx(S,{type:"text",placeholder:"Код ЄДРПОУ (ІНН)",...c("taxCode")}),n.jsx("p",{children:o.taxCode&&o.taxCode.message})]}),e==="fop"&&n.jsxs(j,{children:[n.jsx(O,{children:"Дата народження"}),n.jsx(S,{type:"text",placeholder:"Дата народження",...c("dayOfBirthday")}),n.jsx("p",{children:o.dayOfBirthday&&o.dayOfBirthday.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Номер телефону*"}),n.jsx(S,{type:"text",placeholder:"Номер телефону",...c("telNumber")}),console.log("errors",o),n.jsx("p",{children:o.telNumber&&o.telNumber.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"E-mail*"}),n.jsx(S,{type:"text",placeholder:"E-mail",...c("email")}),n.jsx("p",{children:o.email&&o.email.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Надання доступу до*"}),n.jsx(S,{type:"text",placeholder:"Надання доступу до",...c("dateOfAccess")}),n.jsx("p",{children:o.dateOfAccess&&o.dateOfAccess.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Остання оплата* "}),n.jsx(S,{type:"text",placeholder:"Остання оплата",...c("lastPay")}),n.jsx("p",{children:o.lastPay&&o.lastPay.message})]}),n.jsx(at,{control:t,register:c,errors:o,margintop:"36px"}),n.jsx(n.Fragment,{})]}),n.jsxs(Be,{children:[n.jsxs(Ae,{children:[n.jsx(Ve,{children:"Примітка "}),n.jsx(Pe,{type:"text",placeholder:"Примітка",...c("comment")}),n.jsx("p",{children:o.comment&&o.comment.message})]}),n.jsx(de,{type:"submit",padding:"8px",text:"Додати"})]})]}),i==="MusicEditor"&&n.jsxs("div",{children:[n.jsxs(te,{children:[n.jsxs(ae,{children:[n.jsxs(j,{children:[n.jsx("label",{children:"Прізвище"}),n.jsx("input",{type:"text",placeholder:"Прізвище",...c("lastName")}),n.jsx("p",{children:o.lastName&&o.lastName.message})]}),n.jsxs(j,{children:[n.jsx("label",{children:"Ім'я"}),n.jsx("input",{type:"text",placeholder:"Ім'я",...c("firstName")}),n.jsx("p",{children:o.firstName&&o.firstName.message})]}),n.jsxs(j,{children:[n.jsx("label",{children:"По-батькові"}),n.jsx("input",{type:"text",placeholder:"По-батькові",...c("fatherName")}),n.jsx("p",{children:o.fatherName&&o.fatherName.message})]})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Ідентифікаційний номер*"}),n.jsx(S,{type:"text",placeholder:"234567891",...c("taxCode")}),n.jsx("p",{children:o.taxCode&&o.taxCode.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Дата народження"}),n.jsx(S,{type:"text",placeholder:"Дата народження",...c("dayOfBirthday")}),n.jsx("p",{children:o.dayOfBirthday&&o.dayOfBirthday.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"Номер телефону*"}),n.jsx(S,{type:"text",placeholder:"Номер телефону",...c("telNumber")}),console.log("errors",o),n.jsx("p",{children:o.telNumber&&o.telNumber.message})]}),n.jsxs(j,{children:[n.jsx(O,{children:"E-mail*"}),n.jsx(S,{type:"text",placeholder:"E-mail",...c("email")}),n.jsx("p",{children:o.email&&o.email.message})]})]}),n.jsxs(j,{children:[n.jsx("label",{children:"Примітка "}),n.jsx("textarea",{type:"text",placeholder:"Примітка",...c("comment")}),n.jsx("p",{children:o.comment&&o.comment.message})]})]})]})),it=({onCloseModal:t})=>{const[s,i]=D.useState("NewUser"),[a,e]=D.useState(!1),[l,o]=D.useState("fop"),[c,{isLoading:d}]=me(),[u,{isLoading:p}]=fe(),b=xe(),{control:x,register:y,handleSubmit:r,setError:h,clearErrors:m,formState:{errors:f,isValid:v,dirtyFields:w}}=ge({mode:"onChange",resolver:ve(Ie)}),k=()=>{e(a!==!0),m()};console.log("typeStatus",a);const E=()=>{o(l==="tov"?"fop":"tov")},T=N=>{const I={...N,status:a,userFop:l};console.log(I),l==="fop"&&c(I).unwrap().then(()=>{b("/admin/users"),t()}).catch(W=>console.log(W.data.message)),l==="tov"&&u(I).unwrap().then(()=>{b("/admin/users"),t()}).catch(W=>console.log(W.data))},R=N=>{i(N),m()};return console.log("ButtonSwitch.props",$),n.jsxs(Le,{children:[n.jsxs(De,{children:[n.jsx(ne,{isActive:s==="NewUser",onClick:()=>R("NewUser"),children:"Новий користувач"}),n.jsx(ne,{isActive:s==="MusicEditor",onClick:()=>R("MusicEditor"),children:"Музичний редактор"})]}),s==="NewUser"&&n.jsx($,{type:"button",onClick:E,children:l==="tov"?"ТОВ":"ФОП"}),n.jsx("form",{onSubmit:r(T),children:n.jsx(st,{control:x,handleTypeOfStatus:k,typeOfStatus:a,register:y,isValid:v,errors:f,activeSection:s,typeOfUser:l})})]})},rt=()=>{const{data:t,isLoading:s}=be(),[i,a]=D.useState(!1),e=()=>{a(!0)},l=()=>{a(!1)},o=[{key:"firstName",label:"Ім’я",type:"name"},{key:"contractNumber",label:"№ договору",type:"string"},{key:"status",label:"Статус",type:"boolean"},{key:"lastPay",label:"Дата оплати",type:"string"},{key:"dateOfAccess",label:"Відкрито до",type:"string"},{key:"acces",label:"Допуск",type:"string"}];return n.jsxs(n.Fragment,{children:[n.jsxs(ye,{children:[n.jsx(je,{children:"Користувачі"}),n.jsx(de,{type:"button",padding:"12px 46px",onClick:e,text:"Додати",ariaLabel:"  Додати користувача"}),n.jsx(ke,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),!s&&n.jsx(we,{users:t.allUsers,visibleColumns:o}),i&&n.jsx(Ne,{width:"898px",padding:"24px",onClose:l,children:n.jsx(it,{onCloseModal:l})})]})};export{rt as default};
