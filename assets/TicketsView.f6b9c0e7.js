import{j as V,o as r,c as u,b as s,n as $,h as e,u as E,N as A,f as T,B as q,r as F,i as x,t as k,O as y,w as h,s as _,a as m,q as C,m as b,v as w,k as j,l as z,P as H,g as L,Q as Y,R as U,G as I,S as D,U as O}from"./index.d0e66157.js";import{u as G,_ as B,a as K}from"./TextAreaInput.vue_vue_type_script_setup_true_lang.fd27f3e9.js";import{_ as M}from"./SpinLoading.2a597fbc.js";import{u as P,c as Q,a as N,F as W}from"./object.a2a1b9d2.js";const J={class:"flex items-center"},X={class:"-m-1"},Z=s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),ee=s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),te=[Z,ee],R={__name:"SpinLoading",props:{height:{type:Number,default:5},width:{type:Number,default:5},color:{type:String,default:"text-white"}},setup(a){const i=a,c=V(()=>({4:"h-4",5:"h-5",6:"h-6",7:"h-7",8:"h-8",9:"h-9",10:"h-10"})[i.height]),l=V(()=>({4:"w-4",5:"w-5",6:"w-6",7:"w-7",8:"w-8",9:"w-9",10:"w-10"})[i.width]);return(o,d)=>(r(),u("div",J,[s("div",X,[(r(),u("svg",{class:$(["animate-spin",[e(c),e(l),i.color]]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},te,2))])]))}},se={class:"block p-6 mb-3 rounded-lg shadow-lg bg-white"},ae={class:"flex flex-row items-center text-gray-900 text-xl leading-tight font-medium break-words mb-2"},oe=x(" Encerrado "),re=x(" Em aberto "),ie={class:"text-sm"},ce={class:"text-gray-700 text-base break-words mb-4"},ne={class:"flex"},le=x(" Visualizar "),de={class:"flex items-center"},ue=x(" Encerrar "),me={class:"flex items-center"},he=x(" Reabrir "),_e={__name:"Ticket",props:{ticket:{type:Object,required:!0}},setup(a){const i=a,c=E(),l=A();let o=T(!1),d=T(!1);const n=q(()=>G(i.ticket.dataCriacao,"DD-MM-YYYY HH:mm").value),f=()=>{o.value=!0,l.putTicketSituacao(i.ticket.idTicket,1).then(t=>i.ticket.situacao=1).catch(t=>setErrors({apiError:t})).finally(()=>o.value=!1)},v=()=>{d.value=!0,l.putTicketSituacao(i.ticket.idTicket,0).then(t=>i.ticket.situacao=0).catch(t=>setErrors({apiError:t})).finally(()=>d.value=!1)};return(t,p)=>{const g=F("RouterLink");return r(),u("div",se,[s("h5",ae,[x(k(a.ticket.assunto)+" ",1),a.ticket.situacao===1?(r(),y(B,{key:0,customColor:"green"},{default:h(()=>[oe]),_:1})):_("",!0),a.ticket.situacao===0?(r(),y(B,{key:1,customColor:"blue"},{default:h(()=>[re]),_:1})):_("",!0)]),s("p",ie,k(e(n)),1),s("p",ce,k(a.ticket.descricao),1),s("div",ne,[m(g,{to:{name:"ticket",params:{id:a.ticket.idTicket}},class:"card-footer-item"},{default:h(()=>[m(C,{class:"mr-2"},{default:h(()=>[le]),_:1})]),_:1},8,["to"]),a.ticket.situacao===0&&e(c).user.isAdministrador?(r(),y(C,{key:0,customColor:"green",onClick:f},{default:h(()=>[s("div",de,[b(m(M,{class:"mr-3"},null,512),[[w,e(o)]]),ue])]),_:1})):_("",!0),a.ticket.situacao===1&&e(c).user.isAdministrador?(r(),y(C,{key:1,customColor:"blue",onClick:v},{default:h(()=>[s("div",me,[b(m(M,{class:"mr-3"},null,512),[[w,e(d)]]),he])]),_:1})):_("",!0)])])}}},fe=["for"],pe=["name","id","type","value","placeholder"],ke=j({__name:"TextInput",props:{type:{type:String,default:"text"},value:{type:String,default:""},name:{type:String,required:!0},label:{type:String,required:!0},successMessage:{type:String,default:""},placeholder:{type:String,default:""}},setup(a){const i=a,c=z(i,"name"),{value:l,errorMessage:o,handleBlur:d,handleChange:n,meta:f}=P(c,void 0,{initialValue:i.value});return(v,t)=>(r(),u("div",{class:$(["flex flex-col",{"has-error":!!e(o),success:e(f).valid}])},[s("label",{for:e(c)},k(a.label),9,fe),s("input",{name:e(c),id:e(c),type:a.type,value:e(l),placeholder:a.placeholder,onInput:t[0]||(t[0]=(...p)=>e(n)&&e(n)(...p)),onBlur:t[1]||(t[1]=(...p)=>e(d)&&e(d)(...p)),class:$(["rounded-md border-2 border-transparent outline-none transition duration-300 ease-in-out focus:outline-none focus:ring-0 placeholder:italic",{"bg-slate-200 focus:border-teal-500":!e(o),"bg-red-200 focus:border-red-500 text-red-700 placeholder:text-red-500":!!e(o)}])},null,42,pe),b(s("p",{class:"text-red-500"},k(e(o)),513),[[w,e(o)]]),b(s("p",{class:"text-green-500"},k(a.successMessage),513),[[w,e(f).valid]])],2))}}),xe={class:"block p-6 shadow-lg bg-white"},ve={class:""},ye={class:"flex items-center"},ge=x(" Criar ticket "),be={key:0,class:"text-red-700 mt-3 mb-0"},we={__name:"ModalCreateTicket",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:i}){const c=Q().shape({assunto:N().required("Assunto n\xE3o informado").min(10,"Assunto deve ter pelo menos 10 caracteres").max(100,"Assunto deve ter no m\xE1ximo 100 caracteres."),descricao:N().required("Descri\xE7\xE3o n\xE3o informada").min(20,"Descri\xE7\xE3o deve ter pelo menos 20 caracteres").max(500,"Descri\xE7\xE3o deve ter no m\xE1ximo 500 caracteres.")});H();const l=n=>{n.key};L(()=>{document.addEventListener("keyup",l)}),Y(()=>{document.removeEventListener("keyup",l)});let o=T(!1);async function d(n,{resetForm:f,setErrors:v}){o.value=!0;try{const t=E(),p=A(),g={assunto:n.assunto,descricao:n.descricao};t.user.isAdministrador?g.idAdministrador=t.user.idAdministrador:g.idCliente=t.user.idCliente,await p.postTicket(g).then(S=>{p.tickets.unshift(S.data),f()}).catch(S=>v({apiError:S}))}finally{o.value=!1}}return(n,f)=>{const v=U;return r(),u("div",xe,[s("div",ve,[m(e(W),{onSubmit:d,"validation-schema":e(c)},{default:h(({errors:t})=>[m(ke,{name:"assunto",type:"text",label:"Assunto",placeholder:"Assunto",class:"mb-2"}),m(K,{name:"descricao",type:"text",label:"Descri\xE7\xE3o",placeholder:"Descri\xE7\xE3o",rows:3,class:"mb-4"}),m(v,{disabled:e(o)},{default:h(()=>[s("div",ye,[b(m(R,{class:"mr-3"},null,512),[[w,e(o)]]),ge])]),_:1},8,["disabled"]),t.apiError?(r(),u("div",be,k(t.apiError),1)):_("",!0)]),_:1},8,["validation-schema"])])])}}},$e={class:"h-full"},Se={key:0,class:"h-full flex flex-row justify-center items-center"},Ce={class:"flex items-center"},Te=s("p",{class:"text-xl text-teal-600"}," Carregando... ",-1),Ee={key:0,class:"mb-0"},Ae={class:"flex flex-col justify-center p-6"},Ve={key:1,class:"text-xl px-6 py-6"},Le={__name:"TicketsView",setup(a){const i=E(),c=A();L(()=>{c.init()});const l=I({createTicket:!0});return(o,d)=>(r(),u("div",$e,[e(c).ticketsLoaded?(r(),u(D,{key:1},[s("div",{class:$(["text-2xl pt-6 pl-6",{"bg-white":!e(i).user.isAdministrador}])}," Tickets de suporte ",2),e(i).user.isAdministrador?_("",!0):(r(),u("div",Ee,[l.createTicket?(r(),y(we,{key:0,modelValue:l.createTicket,"onUpdate:modelValue":d[0]||(d[0]=n=>l.createTicket=n)},null,8,["modelValue"])):_("",!0)])),s("div",Ae,[(r(!0),u(D,null,O(e(c).tickets,n=>(r(),y(_e,{key:n.idTicket,ticket:n},null,8,["ticket"]))),128))]),e(c).tickets.length?_("",!0):(r(),u("div",Ve," N\xE3o h\xE1 nenhum ticket de suporte. "))],64)):(r(),u("div",Se,[s("div",Ce,[m(R,{height:8,width:8,color:"text-teal-600",class:"mr-3"}),Te])]))]))}};export{Le as default};
