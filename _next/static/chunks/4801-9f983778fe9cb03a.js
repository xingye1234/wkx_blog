"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4801],{32785:function(e,t,r){var a=r(42123);let s=(0,r(36933).A)(function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C8.41015 2 5.5 4.91015 5.5 8.5V10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10H18.5V8.5C18.5 4.91015 15.5899 2 12 2ZM15.5 10V8.5C15.5 6.567 13.933 5 12 5C10.067 5 8.5 6.567 8.5 8.5V10H15.5Z",fill:"currentColor"}))},"lock");t.Z=s},90832:function(e,t,r){var a=r(42123);let s=(0,r(36933).A)(function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),a.createElement("path",{d:"M12 16C13.9818 16 15.7453 14.3394 16.7142 11.8589C17.3163 11.6122 17.8892 10.8644 18.1508 9.88823C18.4909 8.61881 18.4234 7.48536 17.4964 7.13266C17.4064 2.7111 15.6617 1 12 1C8.33858 1 6.59387 2.71088 6.50372 7.13179C5.57454 7.48354 5.50668 8.61777 5.84709 9.8882C6.10904 10.8658 6.68318 11.6143 7.28626 11.8599C8.2552 14.3398 10.0186 16 12 16Z",fill:"currentColor"}),a.createElement("path",{d:"M19.6049 22C20.8385 22 21.7171 20.8487 20.867 19.9547C19.1971 18.1985 15.853 17 12 17C8.14699 17 4.80292 18.1985 3.133 19.9547C2.2829 20.8487 3.16148 22 4.39513 22H19.6049Z",fill:"currentColor"}))},"user");t.Z=s},74587:function(e,t,r){var a=r(3942);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},78867:function(e,t,r){r.d(t,{cI:function(){return eh}});var a=r(42123),s=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let u=e=>"object"==typeof e;var n=e=>!l(e)&&!Array.isArray(e)&&u(e)&&!i(e),o=e=>n(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||n(e))))return e;else if(t=r?[]:{},r||c(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e;return t}var h=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,g=(e,t,r)=>{if(!t||!n(e))return r;let a=h(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return v(a)||a===e?v(e[t])?r:e[t]:a},p=e=>"boolean"==typeof e;let b={BLUR:"blur",FOCUS_OUT:"focusout"},_={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},V={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};a.createContext(null);var w=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(s,i,{get:()=>(t._proxyFormState[i]!==_.all&&(t._proxyFormState[i]=!a||_.all),r&&(r[i]=!0),e[i])});return s},A=e=>n(e)&&!Object.keys(e).length,F=(e,t,r,a)=>{r(e);let{name:s,...i}=e;return A(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!a||_.all))},x=e=>Array.isArray(e)?e:[e],S=e=>"string"==typeof e,k=(e,t,r,a,s)=>S(e)?(a&&t.watch.add(e),g(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),g(r,e))):(a&&(t.watchAll=!0),r),D=e=>/^\w*$/.test(e),C=e=>h(e.replace(/["|']|\]/g,"").split(/\.|\[/)),E=(e,t,r)=>{let a=-1,s=D(t)?[t]:C(t),i=s.length,l=i-1;for(;++a<i;){let t=s[a],i=r;if(a!==l){let r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+s[a+1])?{}:[]}e[t]=i,e=e[t]}return e},O=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{},T=e=>({isOnSubmit:!e||e===_.onSubmit,isOnBlur:e===_.onBlur,isOnChange:e===_.onChange,isOnAll:e===_.all,isOnTouch:e===_.onTouched}),L=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let U=(e,t,r,a)=>{for(let s of r||Object.keys(e)){let r=g(e,s);if(r){let{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],s)&&!a||e.ref&&t(e.ref,e.name)&&!a)break;U(i,t)}else n(i)&&U(i,t)}}};var j=(e,t,r)=>{let a=h(g(e,r));return E(a,"root",t[r]),E(e,r,a),e},B=e=>"file"===e.type,M=e=>"function"==typeof e,N=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},R=e=>S(e),q=e=>"radio"===e.type,P=e=>e instanceof RegExp;let H={value:!1,isValid:!1},I={value:!0,isValid:!0};var Z=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?I:{value:e[0].value,isValid:!0}:I:H}return H};let $={isValid:!1,value:null};var W=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,$):$;function z(e,t,r="validate"){if(R(e)||Array.isArray(e)&&e.every(R)||p(e)&&!e)return{type:r,message:R(e)?e:"",ref:t}}var G=e=>n(e)&&!P(e)?e:{value:e,message:""},J=async(e,t,r,a,i)=>{let{ref:u,refs:o,required:d,maxLength:f,minLength:c,min:y,max:m,pattern:h,validate:b,name:_,valueAsNumber:w,mount:F,disabled:x}=e._f,k=g(t,_);if(!F||x)return{};let D=o?o[0]:u,C=e=>{a&&D.reportValidity&&(D.setCustomValidity(p(e)?"":e||""),D.reportValidity())},E={},T=q(u),L=s(u),U=(w||B(u))&&v(u.value)&&v(k)||N(u)&&""===u.value||""===k||Array.isArray(k)&&!k.length,j=O.bind(null,_,r,E),H=(e,t,r,a=V.maxLength,s=V.minLength)=>{let i=e?t:r;E[_]={type:e?a:s,message:i,ref:u,...j(e?a:s,i)}};if(i?!Array.isArray(k)||!k.length:d&&(!(T||L)&&(U||l(k))||p(k)&&!k||L&&!Z(o).isValid||T&&!W(o).isValid)){let{value:e,message:t}=R(d)?{value:!!d,message:d}:G(d);if(e&&(E[_]={type:V.required,message:t,ref:D,...j(V.required,t)},!r))return C(t),E}if(!U&&(!l(y)||!l(m))){let e,t;let a=G(m),s=G(y);if(l(k)||isNaN(k)){let r=u.valueAsDate||new Date(k),i=e=>new Date(new Date().toDateString()+" "+e),l="time"==u.type,n="week"==u.type;S(a.value)&&k&&(e=l?i(k)>i(a.value):n?k>a.value:r>new Date(a.value)),S(s.value)&&k&&(t=l?i(k)<i(s.value):n?k<s.value:r<new Date(s.value))}else{let r=u.valueAsNumber||(k?+k:k);l(a.value)||(e=r>a.value),l(s.value)||(t=r<s.value)}if((e||t)&&(H(!!e,a.message,s.message,V.max,V.min),!r))return C(E[_].message),E}if((f||c)&&!U&&(S(k)||i&&Array.isArray(k))){let e=G(f),t=G(c),a=!l(e.value)&&k.length>+e.value,s=!l(t.value)&&k.length<+t.value;if((a||s)&&(H(a,e.message,t.message),!r))return C(E[_].message),E}if(h&&!U&&S(k)){let{value:e,message:t}=G(h);if(P(e)&&!k.match(e)&&(E[_]={type:V.pattern,message:t,ref:u,...j(V.pattern,t)},!r))return C(t),E}if(b){if(M(b)){let e=z(await b(k,t),D);if(e&&(E[_]={...e,...j(V.validate,e.message)},!r))return C(e.message),E}else if(n(b)){let e={};for(let a in b){if(!A(e)&&!r)break;let s=z(await b[a](k,t),D,a);s&&(e={...s,...j(a,s.message)},C(s.message),r&&(E[_]=e))}if(!A(e)&&(E[_]={ref:D,...e},!r))return E}}return C(!0),E};function K(e,t){let r=Array.isArray(t)?t:D(t)?[t]:C(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=v(e)?a++:e[t[a++]];return e}(e,r),s=r.length-1,i=r[s];return a&&delete a[i],0!==s&&(n(a)&&A(a)||Array.isArray(a)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!v(e[t]))return!1;return!0}(a))&&K(e,r.slice(0,-1)),e}var Q=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},X=e=>l(e)||!u(e);function Y(e,t){if(X(e)||X(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let r=e[s];if(!a.includes(s))return!1;if("ref"!==s){let e=t[s];if(i(r)&&i(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!Y(r,e):r!==e)return!1}}return!0}var ee=e=>"select-multiple"===e.type,et=e=>q(e)||s(e),er=e=>N(e)&&e.isConnected,ea=e=>{for(let t in e)if(M(e[t]))return!0;return!1};function es(e,t={}){let r=Array.isArray(e);if(n(e)||r)for(let r in e)Array.isArray(e[r])||n(e[r])&&!ea(e[r])?(t[r]=Array.isArray(e[r])?[]:{},es(e[r],t[r])):l(e[r])||(t[r]=!0);return t}var ei=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(n(t)||s)for(let s in t)Array.isArray(t[s])||n(t[s])&&!ea(t[s])?v(r)||X(a[s])?a[s]=Array.isArray(t[s])?es(t[s],[]):{...es(t[s])}:e(t[s],l(r)?{}:r[s],a[s]):a[s]=!Y(t[s],r[s]);return a})(e,t,es(t)),el=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>v(e)?e:t?""===e?NaN:e?+e:e:r&&S(e)?new Date(e):a?a(e):e;function eu(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:B(t)?t.files:q(t)?W(e.refs).value:ee(t)?[...t.selectedOptions].map(({value:e})=>e):s(t)?Z(e.refs).value:el(v(t.value)?e.ref.value:t.value,e)}var en=(e,t,r,a)=>{let s={};for(let r of e){let e=g(t,r);e&&E(s,r,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},eo=e=>v(e)?e:P(e)?e.source:n(e)?P(e.value)?e.value.source:e.value:e,ed=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ef(e,t,r){let a=g(e,r);if(a||D(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let a=s.join("."),i=g(t,a),l=g(e,a);if(i&&!Array.isArray(i)&&r!==a)break;if(l&&l.type)return{name:a,error:l};s.pop()}return{name:r}}var ec=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),ey=(e,t)=>!h(g(e,t)).length&&K(e,t);let em={mode:_.onSubmit,reValidateMode:_.onChange,shouldFocusError:!0};function eh(e={}){let t=a.useRef(),r=a.useRef(),[u,d]=a.useState({isDirty:!1,isValidating:!1,isLoading:M(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:M(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...em,...e},a={submitCount:0,isDirty:!1,isLoading:M(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},u={},d=(n(r.defaultValues)||n(r.values))&&m(r.defaultValues||r.values)||{},c=r.shouldUnregister?{}:m(d),V={action:!1,mount:!1,watch:!1},w={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F=0,D={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},C={values:Q(),array:Q(),state:Q()},O=T(r.mode),R=T(r.reValidateMode),q=r.criteriaMode===_.all,P=e=>t=>{clearTimeout(F),F=setTimeout(e,t)},H=async e=>{if(D.isValid||e){let e=r.resolver?A((await G()).errors):await es(u,!0);e!==a.isValid&&C.state.next({isValid:e})}},I=(e,t)=>{(D.isValidating||D.validatingFields)&&((e||Array.from(w.mount)).forEach(e=>{e&&(t?E(a.validatingFields,e,t):K(a.validatingFields,e))}),C.state.next({validatingFields:a.validatingFields,isValidating:!A(a.validatingFields)}))},Z=(e,t)=>{E(a.errors,e,t),C.state.next({errors:a.errors})},$=(e,t,r,a)=>{let s=g(u,e);if(s){let i=g(c,e,v(r)?g(d,e):r);v(i)||a&&a.defaultChecked||t?E(c,e,t?i:eu(s._f)):eg(e,i),V.mount&&H()}},W=(e,t,r,s,i)=>{let l=!1,n=!1,o={name:e},f=!!(g(u,e)&&g(u,e)._f.disabled);if(!r||s){D.isDirty&&(n=a.isDirty,a.isDirty=o.isDirty=eh(),l=n!==o.isDirty);let r=f||Y(g(d,e),t);n=!!(!f&&g(a.dirtyFields,e)),r||f?K(a.dirtyFields,e):E(a.dirtyFields,e,!0),o.dirtyFields=a.dirtyFields,l=l||D.dirtyFields&&!r!==n}if(r){let t=g(a.touchedFields,e);t||(E(a.touchedFields,e,r),o.touchedFields=a.touchedFields,l=l||D.touchedFields&&t!==r)}return l&&i&&C.state.next(o),l?o:{}},z=(r,s,i,l)=>{let u=g(a.errors,r),n=D.isValid&&p(s)&&a.isValid!==s;if(e.delayError&&i?(t=P(()=>Z(r,i)))(e.delayError):(clearTimeout(F),t=null,i?E(a.errors,r,i):K(a.errors,r)),(i?!Y(u,i):u)||!A(l)||n){let e={...l,...n&&p(s)?{isValid:s}:{},errors:a.errors,name:r};a={...a,...e},C.state.next(e)}},G=async e=>{I(e,!0);let t=await r.resolver(c,r.context,en(e||w.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return I(e),t},ea=async e=>{let{errors:t}=await G(e);if(e)for(let r of e){let e=g(t,r);e?E(a.errors,r,e):K(a.errors,r)}else a.errors=t;return t},es=async(e,t,s={valid:!0})=>{for(let i in e){let l=e[i];if(l){let{_f:e,...u}=l;if(e){let u=w.array.has(e.name);I([i],!0);let n=await J(l,c,q,r.shouldUseNativeValidation&&!t,u);if(I([i]),n[e.name]&&(s.valid=!1,t))break;t||(g(n,e.name)?u?j(a.errors,n,e.name):E(a.errors,e.name,n[e.name]):K(a.errors,e.name))}u&&await es(u,t,s)}}return s.valid},eh=(e,t)=>(e&&t&&E(c,e,t),!Y(eA(),d)),ev=(e,t,r)=>k(e,w,{...V.mount?c:v(t)?d:S(e)?{[e]:t}:t},r,t),eg=(e,t,r={})=>{let a=g(u,e),i=t;if(a){let r=a._f;r&&(r.disabled||E(c,e,el(t,r)),i=N(r.ref)&&l(t)?"":t,ee(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?s(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):B(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||C.values.next({name:e,values:{...c}})))}(r.shouldDirty||r.shouldTouch)&&W(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ew(e)},ep=(e,t,r)=>{for(let a in t){let s=t[a],l=`${e}.${a}`,n=g(u,l);!w.array.has(e)&&X(s)&&(!n||n._f)||i(s)?eg(l,s,r):ep(l,s,r)}},eb=(e,t,r={})=>{let s=g(u,e),i=w.array.has(e),n=m(t);E(c,e,n),i?(C.array.next({name:e,values:{...c}}),(D.isDirty||D.dirtyFields)&&r.shouldDirty&&C.state.next({name:e,dirtyFields:ei(d,c),isDirty:eh(e,n)})):!s||s._f||l(n)?eg(e,n,r):ep(e,n,r),L(e,w)&&C.state.next({...a}),C.values.next({name:V.mount?e:void 0,values:{...c}})},e_=async e=>{let s=e.target,i=s.name,l=!0,n=g(u,i),d=e=>{l=Number.isNaN(e)||e===g(c,i,e)};if(n){let f,y;let m=s.type?eu(n._f):o(e),h=e.type===b.BLUR||e.type===b.FOCUS_OUT,v=!ed(n._f)&&!r.resolver&&!g(a.errors,i)&&!n._f.deps||ec(h,g(a.touchedFields,i),a.isSubmitted,R,O),p=L(i,w,h);E(c,i,m),h?(n._f.onBlur&&n._f.onBlur(e),t&&t(0)):n._f.onChange&&n._f.onChange(e);let _=W(i,m,h,!1),V=!A(_)||p;if(h||C.values.next({name:i,type:e.type,values:{...c}}),v)return D.isValid&&H(),V&&C.state.next({name:i,...p?{}:_});if(!h&&p&&C.state.next({...a}),r.resolver){let{errors:e}=await G([i]);if(d(m),l){let t=ef(a.errors,u,i),r=ef(e,u,t.name||i);f=r.error,i=r.name,y=A(e)}}else I([i],!0),f=(await J(n,c,q,r.shouldUseNativeValidation))[i],I([i]),d(m),l&&(f?y=!1:D.isValid&&(y=await es(u,!0)));l&&(n._f.deps&&ew(n._f.deps),z(i,y,f,_))}},eV=(e,t)=>{if(g(a.errors,t)&&e.focus)return e.focus(),1},ew=async(e,t={})=>{let s,i;let l=x(e);if(r.resolver){let t=await ea(v(e)?e:l);s=A(t),i=e?!l.some(e=>g(t,e)):s}else e?((i=(await Promise.all(l.map(async e=>{let t=g(u,e);return await es(t&&t._f?{[e]:t}:t)}))).every(Boolean))||a.isValid)&&H():i=s=await es(u);return C.state.next({...!S(e)||D.isValid&&s!==a.isValid?{}:{name:e},...r.resolver||!e?{isValid:s}:{},errors:a.errors}),t.shouldFocus&&!i&&U(u,eV,e?l:w.mount),i},eA=e=>{let t={...d,...V.mount?c:{}};return v(e)?t:S(e)?g(t,e):e.map(e=>g(t,e))},eF=(e,t)=>({invalid:!!g((t||a).errors,e),isDirty:!!g((t||a).dirtyFields,e),isTouched:!!g((t||a).touchedFields,e),isValidating:!!g((t||a).validatingFields,e),error:g((t||a).errors,e)}),ex=(e,t,r)=>{let s=(g(u,e,{_f:{}})._f||{}).ref;E(a.errors,e,{...t,ref:s}),C.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},eS=(e,t={})=>{for(let s of e?x(e):w.mount)w.mount.delete(s),w.array.delete(s),t.keepValue||(K(u,s),K(c,s)),t.keepError||K(a.errors,s),t.keepDirty||K(a.dirtyFields,s),t.keepTouched||K(a.touchedFields,s),t.keepIsValidating||K(a.validatingFields,s),r.shouldUnregister||t.keepDefaultValue||K(d,s);C.values.next({values:{...c}}),C.state.next({...a,...t.keepDirty?{isDirty:eh()}:{}}),t.keepIsValid||H()},ek=({disabled:e,name:t,field:r,fields:a,value:s})=>{if(p(e)){let i=e?void 0:v(s)?eu(r?r._f:g(a,t)._f):s;E(c,t,i),W(t,i,!1,!1,!0)}},eD=(e,t={})=>{let a=g(u,e),s=p(t.disabled);return E(u,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...t}}),w.mount.add(e),a?ek({field:a,disabled:t.disabled,name:e,value:t.value}):$(e,!0,t.value),{...s?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:eo(t.min),max:eo(t.max),minLength:eo(t.minLength),maxLength:eo(t.maxLength),pattern:eo(t.pattern)}:{},name:e,onChange:e_,onBlur:e_,ref:s=>{if(s){eD(e,t),a=g(u,e);let r=v(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,i=et(r),l=a._f.refs||[];(i?l.find(e=>e===r):r===a._f.ref)||(E(u,e,{_f:{...a._f,...i?{refs:[...l.filter(er),r,...Array.isArray(g(d,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),$(e,!1,void 0,r))}else(a=g(u,e,{}))._f&&(a._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(f(w.array,e)&&V.action)&&w.unMount.add(e)}}},eC=()=>r.shouldFocusError&&U(u,eV,w.mount),eE=(e,t)=>async s=>{let i;s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let l=m(c);if(C.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await G();a.errors=e,l=t}else await es(u);if(K(a.errors,"root"),A(a.errors)){C.state.next({errors:{}});try{await e(l,s)}catch(e){i=e}}else t&&await t({...a.errors},s),eC(),setTimeout(eC);if(C.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:A(a.errors)&&!i,submitCount:a.submitCount+1,errors:a.errors}),i)throw i},eO=(t,r={})=>{let s=t?m(t):d,i=m(s),l=A(t),n=l?d:i;if(r.keepDefaultValues||(d=s),!r.keepValues){if(r.keepDirtyValues)for(let e of w.mount)g(a.dirtyFields,e)?E(n,e,g(c,e)):eb(e,g(n,e));else{if(y&&v(t))for(let e of w.mount){let t=g(u,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(N(e)){let t=e.closest("form");if(t){t.reset();break}}}}u={}}c=e.shouldUnregister?r.keepDefaultValues?m(d):{}:m(n),C.array.next({values:{...n}}),C.values.next({values:{...n}})}w={mount:r.keepDirtyValues?w.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},V.mount=!D.isValid||!!r.keepIsValid||!!r.keepDirtyValues,V.watch=!!e.shouldUnregister,C.state.next({submitCount:r.keepSubmitCount?a.submitCount:0,isDirty:!l&&(r.keepDirty?a.isDirty:!!(r.keepDefaultValues&&!Y(t,d))),isSubmitted:!!r.keepIsSubmitted&&a.isSubmitted,dirtyFields:l?[]:r.keepDirtyValues?r.keepDefaultValues&&c?ei(d,c):a.dirtyFields:r.keepDefaultValues&&t?ei(d,t):{},touchedFields:r.keepTouched?a.touchedFields:{},errors:r.keepErrors?a.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1})},eT=(e,t)=>eO(M(e)?e(c):e,t);return{control:{register:eD,unregister:eS,getFieldState:eF,handleSubmit:eE,setError:ex,_executeSchema:G,_getWatch:ev,_getDirty:eh,_updateValid:H,_removeUnmounted:()=>{for(let e of w.unMount){let t=g(u,e);t&&(t._f.refs?t._f.refs.every(e=>!er(e)):!er(t._f.ref))&&eS(e)}w.unMount=new Set},_updateFieldArray:(e,t=[],r,s,i=!0,l=!0)=>{if(s&&r){if(V.action=!0,l&&Array.isArray(g(u,e))){let t=r(g(u,e),s.argA,s.argB);i&&E(u,e,t)}if(l&&Array.isArray(g(a.errors,e))){let t=r(g(a.errors,e),s.argA,s.argB);i&&E(a.errors,e,t),ey(a.errors,e)}if(D.touchedFields&&l&&Array.isArray(g(a.touchedFields,e))){let t=r(g(a.touchedFields,e),s.argA,s.argB);i&&E(a.touchedFields,e,t)}D.dirtyFields&&(a.dirtyFields=ei(d,c)),C.state.next({name:e,isDirty:eh(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else E(c,e,t)},_updateDisabledField:ek,_getFieldArray:t=>h(g(V.mount?c:d,t,e.shouldUnregister?g(d,t,[]):[])),_reset:eO,_resetDefaultValues:()=>M(r.defaultValues)&&r.defaultValues().then(e=>{eT(e,r.resetOptions),C.state.next({isLoading:!1})}),_updateFormState:e=>{a={...a,...e}},_disableForm:e=>{p(e)&&(C.state.next({disabled:e}),U(u,(t,r)=>{let a=e,s=g(u,r);s&&p(s._f.disabled)&&(a||(a=s._f.disabled)),t.disabled=a},0,!1))},_subjects:C,_proxyFormState:D,_setErrors:e=>{a.errors=e,C.state.next({errors:a.errors,isValid:!1})},get _fields(){return u},get _formValues(){return c},get _state(){return V},set _state(value){V=value},get _defaultValues(){return d},get _names(){return w},set _names(value){w=value},get _formState(){return a},set _formState(value){a=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:ew,register:eD,handleSubmit:eE,watch:(e,t)=>M(e)?C.values.subscribe({next:r=>e(ev(void 0,t),r)}):ev(e,t,!0),setValue:eb,getValues:eA,reset:eT,resetField:(e,t={})=>{g(u,e)&&(v(t.defaultValue)?eb(e,m(g(d,e))):(eb(e,t.defaultValue),E(d,e,m(t.defaultValue))),t.keepTouched||K(a.touchedFields,e),t.keepDirty||(K(a.dirtyFields,e),a.isDirty=t.defaultValue?eh(e,m(g(d,e))):eh()),!t.keepError&&(K(a.errors,e),D.isValid&&H()),C.state.next({...a}))},clearErrors:e=>{e&&x(e).forEach(e=>K(a.errors,e)),C.state.next({errors:e?a.errors:{}})},unregister:eS,setError:ex,setFocus:(e,t={})=>{let r=g(u,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:eF}}(e),formState:u});let c=t.current.control;return c._options=e,!function(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:c._subjects.state,next:e=>{F(e,c._proxyFormState,c._updateFormState,!0)&&d({...c._formState})}}),a.useEffect(()=>c._disableForm(e.disabled),[c,e.disabled]),a.useEffect(()=>{if(c._proxyFormState.isDirty){let e=c._getDirty();e!==u.isDirty&&c._subjects.state.next({isDirty:e})}},[c,u.isDirty]),a.useEffect(()=>{e.values&&!Y(e.values,r.current)?(c._reset(e.values,c._options.resetOptions),r.current=e.values,d(e=>({...e}))):c._resetDefaultValues()},[e.values,c]),a.useEffect(()=>{e.errors&&c._setErrors(e.errors)},[e.errors,c]),a.useEffect(()=>{c._state.mount||(c._updateValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),a.useEffect(()=>{e.shouldUnregister&&c._subjects.values.next({values:c._getWatch()})},[e.shouldUnregister,c]),t.current.formState=w(u,c),t.current}}}]);