import{k as C,o as t,d as f,b as D,n as z,h as d,a as n,j as i,t as b,c as g,w as c,x as p,g as M,Q as L,f as R,i as _,p as j,v as F,u as N,P as E,U as q,C as A,H as U,r as Y,V as H,R as T,S as O}from"./index.bc11280d.js";import{_ as w,a as K,b as S,u as P}from"./TextAreaInput.vue_vue_type_script_setup_true_lang.ae8450ec.js";import{_ as Q}from"./SpinLoading.db97c0f5.js";import{c as G,a as I,F as J}from"./object.ffabb18f.js";const V={__name:"Tag",props:{customColor:{type:String,default:"teal"},customTextSize:{type:String,default:"xs"},uppercase:{type:Boolean,default:!1}},setup(s){const l=s,m=C(()=>({amber:"bg-amber-600 hover:bg-amber-700",blue:"bg-blue-600 hover:bg-blue-700",green:"bg-green-600 hover:bg-green-700",purple:"bg-purple-600 hover:bg-purple-700"})[l.customColor]),e=C(()=>`text-${l.customTextSize}`),v=C(()=>l.uppercase?"uppercase":"");return(u,a)=>(t(),f("button",{disabled:"",class:z(["inline-block px-3 py-1.5 ml-2 text-white font-medium text-xs leading-tight rounded-full ease-in-out",[d(m),d(e),d(v)]])},[D(u.$slots,"default")],2))}},W={class:"block p-6 mb-3 rounded-lg shadow-lg bg-white"},X={class:"flex flex-row items-center text-gray-900 text-xl leading-tight font-medium mb-2"},Z=i(" Administrador "),ee=i(" Cliente "),te={class:"text-gray-700 text-base"},se={__name:"TicketResposta",props:{resposta:{type:Object,required:!0}},setup(s){return(l,m)=>(t(),f("div",W,[n("h5",X,[i(b(s.resposta.administrador?s.resposta.administrador.nome:s.resposta.cliente.nome)+" ",1),s.resposta.administrador?(t(),g(w,{key:0,customColor:"amber"},{default:c(()=>[Z]),_:1})):p("",!0),s.resposta.cliente?(t(),g(w,{key:1,customColor:"purple"},{default:c(()=>[ee]),_:1})):p("",!0)]),n("p",te,b(s.resposta.mensagem),1)]))}},ae={class:""},oe={class:""},re={class:"flex items-center"},ne=i(" Enviar "),ce={key:0,class:"text-red-700 mt-3 mb-0"},ie={__name:"ModalCreateResposta",props:{ticket:{type:Object,required:!0},modelValue:{type:Boolean,default:!1},idTicket:{type:Number,required:!0}},emits:["update:modelValue","scrollToResposta"],setup(s,{emit:l}){const m=s,e=G().shape({mensagem:I().required("Mensagem n\xE3o informada").min(20,"Mensagem deve ter pelo menos 20 caracteres").max(500,"Mensagem deve ter no m\xE1ximo 500 caracteres.")}),v=()=>{l("update:modelValue",!1)},u=o=>{o.key==="Escape"&&v()};M(()=>{document.addEventListener("keyup",u)}),L(()=>{document.removeEventListener("keyup",u)});let a=R(!1);async function h(o,{resetForm:x,setErrors:r}){a.value=!0;const k=N(),y=E(),B={idTicket:m.idTicket,idAdministrador:k.user.idAdministrador,idCliente:k.user.idCliente,mensagem:o.mensagem};y.postResposta(B).then($=>{m.ticket.respostas.push($.data),x()}).catch($=>r({apiError:$})).finally(()=>a.value=!1)}return(o,x)=>{const r=Q,k=S;return t(),f("div",ae,[n("div",oe,[_(d(J),{onSubmit:h,"validation-schema":d(e)},{default:c(({errors:y})=>[_(K,{name:"mensagem",type:"text",label:"Mensagem",placeholder:"Mensagem",rows:3,class:"mb-4"}),_(k,{disabled:d(a)},{default:c(()=>[n("div",re,[j(_(r,{class:"mr-3"},null,512),[[F,d(a)]]),ne])]),_:1},8,["disabled"]),y.apiError?(t(),f("div",ce,b(y.apiError),1)):p("",!0)]),_:1},8,["validation-schema"])])])}}},le={class:"block p-6 shadow-lg bg-white"},ue=i(" < Voltar "),de={class:"flex flex-row items-center text-gray-900 text-xl leading-tight font-medium mb-2"},me=i(" Encerrado "),pe=i(" Em aberto "),_e={class:"text-sm"},fe={class:"text-gray-700 text-base mb-4"},he=i(" Responder "),ge={key:0,class:"flex flex-col justify-center p-6 pb-0"},be={class:"flex flex-col justify-center p-6"},$e={__name:"TicketView",setup(s){const l=E(),m=q(),e=R({}),v=R([]);M(async()=>{l.getTicket(m.params.id).then(h=>{e.value=h.data})});const u=A(()=>e.value.dataCriacao?P(e.value.dataCriacao,"DD-MM-YYYY HH:mm").value:""),a=U({createResposta:!1});return(h,o)=>{const x=Y("RouterLink");return t(),f(T,null,[n("div",le,[_(x,{to:"/tickets"},{default:c(()=>[_(S,{class:"mb-5"},{default:c(()=>[ue]),_:1})]),_:1}),n("h5",de,[i(b(e.value.assunto)+" ",1),e.value.situacao===1?(t(),g(V,{key:0,customColor:"green"},{default:c(()=>[me]),_:1})):p("",!0),e.value.situacao===0?(t(),g(V,{key:1,customColor:"blue"},{default:c(()=>[pe]),_:1})):p("",!0)]),n("p",_e,b(d(u)),1),n("p",fe,b(e.value.descricao),1),e.value.situacao===0?(t(),g(S,{key:0,onClick:o[0]||(o[0]=H(r=>a.createResposta=!0,["prevent"])),class:"mb-2"},{default:c(()=>[he]),_:1})):p("",!0)]),a.createResposta?(t(),f("div",ge,[_(ie,{modelValue:a.createResposta,"onUpdate:modelValue":o[1]||(o[1]=r=>a.createResposta=r),onScrollToResposta:h.scrollToResposta,ticket:e.value,idTicket:e.value.idTicket},null,8,["modelValue","onScrollToResposta","ticket","idTicket"])])):p("",!0),n("div",be,[(t(!0),f(T,null,O(e.value.respostas,r=>(t(),g(se,{key:r.idResposta,resposta:r,ref_for:!0,ref_key:"respostaRefs",ref:v},null,8,["resposta"]))),128))])],64)}}};export{$e as default};
