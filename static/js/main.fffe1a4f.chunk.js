(this["webpackJsonpgql-frontend-template"]=this["webpackJsonpgql-frontend-template"]||[]).push([[0],{157:function(e,n,t){},158:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),a=t.n(c),i=t(53),o=t.n(i),u=t(52),s=t(10),l=t(45),j=t(13),d=t(8),b=t(3),f=t(11),O=t(79),h=t(5),p=t.n(h),x=t(163),m=t(164),v=t(113),g=t(161),y=t(162),k=t(19),z=t(61),w=t(41),C=t(42);function S(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return e},e}var T=s.c.div(S()),q=function(e){Object(w.a)(t,e);var n=Object(C.a)(t);function t(e){var r;return Object(k.a)(this,t),(r=n.call(this,e)).state={err:null},r}return Object(z.a)(t,[{key:"restart",value:function(){localStorage.clear(),this.setState({err:null}),location.reload()}},{key:"componentDidCatch",value:function(e){this.setState({err:e})}},{key:"render",value:function(){return this.state.err?Object(r.jsxs)(T,{children:["V aplik\xe1ci\xed do\u0161lo k chybe je nutn\xfd re\u0161tart",Object(r.jsx)(v.a,{type:"primary",size:"large",onClick:this.restart.bind(this),children:"Re\u0161tart"})]}):this.props.children}}]),t}(c.Component);function N(e){return Object(u.b)(Object(d.a)(Object(d.a)({},e),{},{default:JSON.parse(localStorage.getItem(e.key))||e.default}))}var _=N({key:"setupState",default:{quizType:"all",questionCount:5}}),P=N({key:"quizState",default:[]}),$=N({key:"inTestState",default:!1});function E(e){var n=Object(u.c)(e),t=Object(b.a)(n,2),r=t[0],c=t[1];return[r,function(n){c(n),localStorage.setItem(e.key,JSON.stringify(n))}]}function A(){var e=Object(f.a)(["\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  align-self: flex-end;\n  margin-top: auto;\n"]);return A=function(){return e},e}function H(){var e=Object(f.a)(["\n  &:not(.ant-steps-item-disabled) {\n    cursor: pointer;\n  }\n"]);return H=function(){return e},e}function F(){var e=Object(f.a)(["\n  margin-bottom: 24px;\n"]);return F=function(){return e},e}function I(){var e=Object(f.a)(["\n  padding: 36px;\n  height: 100%;\n"]);return I=function(){return e},e}var J=s.c.div(I()),M=Object(s.c)(y.a)(F()),V=Object(s.c)(y.a.Step)(H()),Z=Object(s.c)(v.a)(A()),G=function(e){var n=e.step,t=e.children,c=Object(j.f)(),a=E($),i=Object(b.a)(a,1)[0],o=E(P),u=Object(b.a)(o,1)[0],s=function(e){return function(){return c.push(e)}};return Object(r.jsx)(q,{children:Object(r.jsxs)(J,{children:[Object(r.jsxs)(M,{current:n,size:"small",children:[Object(r.jsx)(V,{disabled:i,onClick:!i&&s("/")||void 0,title:"Nastavenie testu"}),Object(r.jsx)(V,{disabled:!i,onClick:i&&s("/quiz/1")||void 0,title:"Test"}),Object(r.jsx)(V,{disabled:!i,onClick:i&&s("/prehlad")||void 0,title:"Preh\u013ead ot\xe1zok"}),Object(r.jsx)(V,{disabled:i||!p.a.size(u),onClick:!i&&p.a.size(u)&&s("/hodnotenie")||void 0,title:"Hodnotenie"})]}),t,Object(r.jsx)(Z,{onClick:function(){localStorage.clear(),location.reload()},children:"Resetova\u0165 aplik\xe1ciu"})]})})},K=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduce((function(n,t){return n||t(e)}),void 0)}},D=function(){return function(e){return p.a.isNil(e)?"Povinn\xe9":void 0}},R=t(89),B={_0:"\u2080",_1:"\u2081",_2:"\u2082",_3:"\u2083",_4:"\u2084",_5:"\u2085",_6:"\u2086",_7:"\u2087",_8:"\u2088",_9:"\u2089"};function L(e,n,t){switch(e){case"latin":return"Ak\xfd je latinsk\xfd n\xe1zov pre '".concat(t[n],"'");case"slovak":return"Ak\xfd je slovensk\xfd n\xe1zov pre '".concat(t[n],"'");case"formula":return"Ak\xfd je vzorec pre '".concat(t[n],"'");default:throw alert("Invalid chem prop type"),new Error("Invalid chem prop type")}}function Q(e){var n=e.quizType,t=e.questionCount,r=p.a.map(R,(function(e){return Object(d.a)(Object(d.a)({},e),{},{formula:(n=e.formula,p.a.reduce(p.a.toPairs(B),(function(e,n){return e.replace(n[0],n[1])}),n))});var n})),c=p.a.shuffle(r),a=p.a.range(0,t);return p.a.map(a,(function(e){var t,r,a,i,o=c[e],u=p.a.map((t=3,r=0,a=c.length,i=[e],p.a.take(p.a.shuffle(p.a.difference(p.a.range(r,a),i)),t)),(function(e){return c[e]}));return function(e,n,t){var r=["latin","slovak","formula"],c="all"==e?r:[e],a=p.a.sample(c);return{sentence:L(a,p.a.sample(p.a.difference(r,[a])),n),targetType:a,chem:n,falseChems:t,options:p.a.shuffle(p.a.concat(t,[n]))}}(n,o,u)}))}function U(){var e=Object(f.a)(["\n  font-weight: bold;\n  color: red;\n"]);return U=function(){return e},e}function W(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return W=function(){return e},e}function X(){var e=Object(f.a)(["\n  font-weight: bold;\n"]);return X=function(){return e},e}function Y(){var e=Object(f.a)(["\n  margin: 16px 0;\n"]);return Y=function(){return e},e}function ee(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return ee=function(){return e},e}var ne=s.c.form(ee()),te=s.c.div(Y()),re=s.c.label(X()),ce=Object(s.c)(x.a.Group)(W()),ae=s.c.div(U()),ie=function(){var e=Object(u.c)(_),n=Object(b.a)(e,2),t=n[0],a=n[1],i=E(P),o=Object(b.a)(i,2),s=o[0],l=o[1],f=E($),h=Object(b.a)(f,2),y=h[0],k=h[1],z=Object(j.f)();return Object(c.useEffect)((function(){y&&z.push("/quiz/1")}),[y,z]),Object(r.jsxs)(G,{step:0,children:[Object(r.jsx)(O.b,{initialValues:t,onSubmit:function(e){a(e),k(!0);var n=Q(e);l(n),p.a.defer((function(){return z.push("/quiz/1")}))},render:function(e){var n,t=e.handleSubmit;return Object(r.jsxs)(ne,{onSubmit:t,children:[Object(r.jsxs)(te,{children:[Object(r.jsx)(re,{children:"Typ testu"}),Object(r.jsx)(O.a,{name:"quizType",type:"string",validate:D(),render:function(e){var n=e.input,t=e.meta;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(ce,Object(d.a)(Object(d.a)({},n),{},{children:[Object(r.jsx)(x.a,{value:"all",children:"V\u0161etko"}),Object(r.jsx)(x.a,{value:"slovak",children:"Slovensk\xe9 n\xe1zvoslovie"}),Object(r.jsx)(x.a,{value:"latin",children:"Latinsk\xe9 n\xe1zvoslovie"}),Object(r.jsx)(x.a,{value:"formula",children:"Zna\u010dky"})]})),Object(r.jsx)(ae,{children:t.error})]})}})]}),Object(r.jsxs)(te,{children:[Object(r.jsx)(re,{children:"Po\u010det ot\xe1zok"}),Object(r.jsx)(O.a,{name:"questionCount",validate:K(D(),(function(e){return p.a.isFinite(Number(e))?void 0:"Nie je \u010d\xedslo"}),(n=1,function(e){return p.a.toNumber(e)<n?"Mus\xed by\u0165 aspo\u0148 ".concat(n):void 0})),render:function(e){var n=e.input,t=e.meta;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,Object(d.a)({},n)),Object(r.jsx)(ae,{children:t.error})]})}})]}),Object(r.jsx)(v.a,{htmlType:"submit",children:"Za\u010da\u0165 test"})]})}}),Object(r.jsx)(g.a,{}),!!p.a.size(s)&&Object(r.jsx)(v.a,{onClick:function(){return z.push("/hodnotenie")},children:"Pozrie\u0165 posledn\xfd test"})]})},oe=t(65);function ue(){var e=Object(f.a)(["\n  margin-top: 16px;\n"]);return ue=function(){return e},e}function se(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return se=function(){return e},e}function le(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return le=function(){return e},e}var je=s.c.div(le()),de=Object(s.c)(x.a.Group)(se()),be=Object(s.c)(x.a)(ue()),fe=function(e){var n=e.match.params.order,t=Number(n-1),a=E(P),i=Object(b.a)(a,2),o=i[0],u=i[1],s=E($),l=Object(b.a)(s,1)[0],f=Object(j.f)(),O=o[t];Object(c.useEffect)((function(){l||f.push("/hodnotenie")}),[l,f]),Object(c.useEffect)((function(){o.length&&!O&&f.push("/prehlad")}),[O,f,o]);return Object(r.jsxs)(G,{step:1,children:[Object(r.jsxs)("h1",{children:["Ot\xe1zka ",n,"/",o.length]}),O&&Object(r.jsxs)(je,{children:[Object(r.jsx)(g.a,{}),Object(r.jsx)("strong",{children:O.sentence}),Object(r.jsx)(de,{value:O.answer,onChange:function(e){return function(e){return u([].concat(Object(oe.a)(p.a.slice(o,0,t)),[Object(d.a)(Object(d.a)({},O),{},{answer:e})],Object(oe.a)(p.a.slice(o,t+1,o.length))))}(e.target.value)},children:p.a.map(O.options,(function(e,n){return Object(r.jsx)(be,{value:e[O.targetType],children:e[O.targetType]},n)}))}),Object(r.jsx)(g.a,{}),Object(r.jsx)(v.a,{onClick:function(){t<o.length?f.push("/quiz/".concat(t+2)):f.push("/prehlad")},children:"\u010ealej"})]})]})},Oe=t(165),he=t(166),pe=t(167);function xe(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n"]);return xe=function(){return e},e}function me(){var e=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -10px;\n"]);return me=function(){return e},e}function ve(){var e=Object(f.a)(["\n  font-size: 14px;\n"]);return ve=function(){return e},e}function ge(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px;\n  font-size: 24px;\n  border: 1px solid ",";\n  color: ",";\n  border-radius: 8px;\n  width: calc(20% - 10px);\n  margin-top: 10px;\n  margin-left: 10px;\n\n  &:hover {\n    color: ",";\n  }\n"]);return ge=function(){return e},e}var ye=Object(s.c)(l.b)(ge(),(function(e){return e.$error?"#e10000":"#28b900"}),(function(e){return e.$error?"#e10000":"#28b900"}),(function(e){return e.$error?"#e10000":"#28b900"})),ke=s.c.div(ve()),ze=s.c.div(me()),we=s.c.div(xe());function Ce(){var e=E(P),n=Object(b.a)(e,2),t=n[0],a=n[1],i=E($),o=Object(b.a)(i,2),u=o[0],s=o[1],l=Object(j.f)();Object(c.useEffect)((function(){u||l.push("/hodnotenie")}),[u,l]);return Object(r.jsxs)(G,{step:2,children:[Object(r.jsx)("p",{children:"Preh\u013ead zodpovedan\xfdch a nezodpovedan\xfdch ot\xe1zok. Kliknut\xedm na ot\xe1zku sa m\xf4\u017eete vr\xe1ti\u0165 do testu a zmeni\u0165 svoju odpove\u010f."}),Object(r.jsx)(ze,{children:p.a.map(t,(function(e,n){return Object(r.jsxs)(ye,{to:"/quiz/".concat(n+1),$error:!e.answer,children:["Ot\xe1zka \u010d. ",n+1,Object(r.jsx)(ke,{children:e.answer?Object(r.jsxs)(r.Fragment,{children:["Odpove\u010f zaznamenan\xe1\xa0",Object(r.jsx)(Oe.a,{})]}):Object(r.jsxs)(r.Fragment,{children:["Odpove\u010f ch\xfdba\xa0",Object(r.jsx)(he.a,{})]})})]},n)}))}),Object(r.jsx)(we,{children:Object(r.jsxs)(v.a,{type:"primary",size:"large",onClick:function(){confirm("Naozaj chcete ohodnoti\u0165 test ? Po hodnoten\xed u\u017e nie je mo\u017en\xe9 test zmeni\u0165.")&&(a(p.a.map(t,(function(e){return Object(d.a)(Object(d.a)({},e),{},{correct:e.answer===e.chem[e.targetType]})}))),s(!1),p.a.defer((function(){return l.push("/hodnotenie")})))},children:["Ohodnoti\u0165 Test ",Object(r.jsx)(pe.a,{})]})})]})}var Se=t(168);function Te(){var e=Object(f.a)(["\n  th {\n    font-weight: normal;\n  }\n  td {\n    font-weight: bold;\n    padding-left: 2em;\n  }\n"]);return Te=function(){return e},e}function qe(){var e=Object(f.a)(["\n  font-size: 3em;\n"]);return qe=function(){return e},e}function Ne(){var e=Object(f.a)(["\n  display: flex;\n  align-items: baseline;\n  border-bottom: 2px solid black;\n  > * {\n    margin-right: 8px;\n  }\n"]);return Ne=function(){return e},e}function _e(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  > * {\n    margin-right: 24px;\n  }\n"]);return _e=function(){return e},e}function Pe(){var e=Object(f.a)(["\n  margin-top: 16px;\n  color: ",";\n"]);return Pe=function(){return e},e}function $e(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return $e=function(){return e},e}function Ee(){var e=Object(f.a)(["\n  color: ",";\n"]);return Ee=function(){return e},e}var Ae=s.c.strong(Ee(),(function(e){return e.$correct?"#28b900":"#e10000"})),He=Object(s.c)(x.a.Group)($e()),Fe=Object(s.c)(x.a)(Pe(),(function(e){return e.$correct?"#28b900":"#e10000"})),Ie=s.c.div(_e()),Je=s.c.div(Ne()),Me=s.c.span(qe()),Ve=s.c.table(Te());function Ze(){var e=E(P),n=Object(b.a)(e,1)[0],t=E($),a=Object(b.a)(t,1)[0],i=Object(j.f)();return Object(c.useEffect)((function(){p.a.size(n)&&!a||i.push("/")}),[n,a,i]),Object(r.jsxs)(G,{step:3,children:[Object(r.jsxs)(Ie,{children:[Object(r.jsxs)(Je,{children:[Object(r.jsx)(Me,{children:p.a.size(p.a.filter(n,(function(e){return e.correct})))}),Object(r.jsx)("span",{children:"/"}),Object(r.jsx)("span",{children:p.a.size(n)})]}),Object(r.jsx)(Ve,{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Spr\xe1vne:"}),Object(r.jsx)("td",{children:p.a.size(p.a.filter(n,(function(e){return e.correct})))})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Nespr\xe1vne:"}),Object(r.jsx)("td",{children:p.a.size(p.a.filter(n,(function(e){return!e.correct})))})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Zodpovedan\xfdch:"}),Object(r.jsx)("td",{children:p.a.size(p.a.filter(n,(function(e){return!!e.answer})))})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Nezodpovedan\xfdch:"}),Object(r.jsx)("td",{children:p.a.size(p.a.filter(n,(function(e){return!e.answer})))})]})]})})]}),p.a.map(n,(function(e,n){return Object(r.jsxs)("div",{children:[Object(r.jsx)(g.a,{}),Object(r.jsxs)(Ae,{$correct:e.correct,children:[e.correct?Object(r.jsx)(Oe.a,{}):Object(r.jsx)(Se.a,{}),e.sentence]}),Object(r.jsx)(He,{value:e.answer,children:p.a.map(e.options,(function(n,t){return Object(r.jsx)(Fe,{value:n[e.targetType],$correct:e.chem[e.targetType]===n[e.targetType],children:n[e.targetType]},t)}))}),Object(r.jsx)(g.a,{})]},n)}))]})}function Ge(){return Object(r.jsx)(l.a,{basename:"/chem-tester",children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",component:ie}),Object(r.jsx)(j.a,{exact:!0,path:"/quiz/:order",component:fe}),Object(r.jsx)(j.a,{exact:!0,path:"/prehlad",component:Ce}),Object(r.jsx)(j.a,{exact:!0,path:"/hodnotenie",component:Ze}),Object(r.jsx)(j.a,{component:ie})]})})}t(157);function Ke(){var e=Object(f.a)(["\n  html, body, #root {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]);return Ke=function(){return e},e}var De=Object(s.b)(Ke());o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(s.a,{theme:{colors:{primary:"#007bff",secondary:"#6c757d",info:"#17a2b8",success:"#28a745",warning:"#ffc107",danger:"#dc3545",text:"#343a40"},fontSizes:{tiny:".2rem",small:".5rem",normal:"1rem",big:"2rem",mega:"5rem"},breakpoints:{xs:1,sm:576,md:768,lg:992,xl:1200}},children:[Object(r.jsx)(De,{}),Object(r.jsx)(Ge,{})]})})}),document.getElementById("root"))},89:function(e){e.exports=JSON.parse('[{"slovak":"Me\u010f","latin":"Cuprum","formula":"Cu"},{"slovak":"Voda","latin":"Dihydrogen Monoxid","formula":"H_2O"},{"slovak":"Hydroxid Sodn\xfd","latin":"Natrii hydroxidum","formula":"NaOH"},{"slovak":"Zlato","latin":"Aurum","formula":"Au"},{"slovak":"Oz\xf3n","latin":"Ozone","formula":"O_3"},{"slovak":"Chr\xf3m","latin":"Chromium","formula":"Ch"},{"slovak":"Kysl\xedk","latin":"Oxxygen","formula":"O"},{"slovak":"Kyanid","latin":"Hydrogen Cyanide","formula":"HCN"},{"slovak":"Pol\xf3nium","latin":"Pollonium","formula":"Po"}]')}},[[158,1,2]]]);
//# sourceMappingURL=main.fffe1a4f.chunk.js.map