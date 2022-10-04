import{af as N,r as g,g as S,j as i,m as f,u as t,F as o,D as p,k as v,q as a,N as x,n as e,J as _,K as A,M as y,a2 as w,a3 as C,o as j,y as b,a8 as I,a9 as D}from"./index.565e4036.js";import{_ as q}from"./SpinLoading.a71ee24f.js";import{_ as F}from"./BaseModal.ce45282d.js";import{_ as B}from"./Tag.92d9dc0e.js";import{_ as $}from"./SpinLoading.9cbb0707.js";const z={class:"block p-6 mb-3 rounded-lg shadow-lg bg-white"},J={class:"flex flex-row items-center text-gray-900 text-xl leading-tight font-medium break-words mb-2"},K=o(" Ativo "),O=o(" Inativo "),T={class:"text-gray-700 text-base break-words mb-4"},G={class:"flex"},H=o(" Visualizar "),P={class:"flex items-center"},Q=o(" Ativar "),U={class:"flex items-center"},W=o(" Inativar "),X={class:"flex items-center"},Y=o(" Excluir "),Z=t("h2",{class:"text-2xl mb-1"},"Exclus\xE3o do administrador",-1),tt={class:"mb-4"},st=o(" Confirma a exclus\xE3o do administrador "),at=o("? "),et={class:"mt-4"},ot=o(" Excluir "),it=o(" N\xE3o "),rt={__name:"Administrador",props:{administrador:{type:Object,required:!0}},emits:["removerAdministrador"],setup(r,{emit:n}){const d=r,m=N(),u=g(!1),c=g(!1),h=g(null),l=()=>{h.value=!h.value},V=()=>{u.value=!0,m.putAdministradorSituacao(d.administrador.idAdministrador,1).then(s=>d.administrador.situacao=1).catch(s=>C({group:"error",title:s.message||s})).finally(()=>u.value=!1)},L=()=>{c.value=!0,m.putAdministradorSituacao(d.administrador.idAdministrador,0).then(s=>d.administrador.situacao=0).catch(s=>C({group:"error",title:s.message||s})).finally(()=>c.value=!1)},k=g(!1),E=()=>{k.value=!0,m.deleteAdministrador(d.administrador.idAdministrador).then(s=>n("removerAdministrador",d.administrador.idAdministrador)).catch(s=>C({group:"error",title:s.message||s})).finally(()=>{k.value=!1,l.value&&(l.value=!1)})};return(s,ht)=>{const M=S("RouterLink"),R=F;return i(),f(w,null,[t("div",z,[t("h5",J,[o(p(r.administrador.nome)+" ",1),r.administrador.situacao===1?(i(),v(B,{key:0,customColor:"green",class:"ml-2"},{default:a(()=>[K]),_:1})):x("",!0),r.administrador.situacao===0?(i(),v(B,{key:1,customColor:"orange",class:"ml-2"},{default:a(()=>[O]),_:1})):x("",!0)]),t("p",T,p(r.administrador.usuario.email),1),t("div",G,[e(M,{to:{name:"administrador",params:{id:r.administrador.idAdministrador}},class:"card-footer-item"},{default:a(()=>[e(_,{class:"mr-2"},{default:a(()=>[H]),_:1})]),_:1},8,["to"]),r.administrador.situacao===0?(i(),v(_,{key:0,customColor:"green",onClick:V,class:"mr-2"},{default:a(()=>[t("div",P,[A(e($,{class:"mr-3"},null,512),[[y,u.value]]),Q])]),_:1})):x("",!0),r.administrador.situacao===1?(i(),v(_,{key:1,customColor:"orange",onClick:L,class:"mr-2"},{default:a(()=>[t("div",U,[A(e($,{class:"mr-3"},null,512),[[y,c.value]]),W])]),_:1})):x("",!0),e(_,{customColor:"red",onClick:l,class:"ml-auto"},{default:a(()=>[t("div",X,[A(e($,{class:"mr-3"},null,512),[[y,k.value]]),Y])]),_:1})])]),e(R,{modalActive:h.value,closeButtonVisible:!1,onCloseModal:l},{default:a(()=>[t("div",null,[Z,t("p",tt,[st,t("b",null,p(r.administrador.nome),1),at])]),t("div",et,[e(_,{onClick:E,customColor:"red",class:"mr-2"},{default:a(()=>[ot]),_:1}),e(_,{onClick:l},{default:a(()=>[it]),_:1})])]),_:1},8,["modalActive"])],64)}}},nt={class:"h-full"},dt=t("div",{class:"text-2xl font-semibold pt-6 pl-6"}," Administradores ",-1),lt={key:0,class:"h-full flex flex-row justify-center items-center"},ct={class:"flex items-center"},mt=t("p",{class:"text-xl text-teal-600"}," Carregando... ",-1),ut=o(" Criar administrador "),_t={class:"flex flex-col justify-center p-6"},ft={key:0,class:"text-xl px-6 py-6"},At={__name:"AdministradoresView",setup(r){const n=N();j(()=>{n.init()});function d(m){const u=n.administradores.findIndex(c=>c.idAdministrador===m);n.administradores.splice(u,1)}return(m,u)=>{const c=D,h=S("RouterLink");return i(),f("div",nt,[dt,b(n).administradoresLoaded?(i(),f(w,{key:1},[e(h,{to:{name:"administrador_novo"}},{default:a(()=>[e(c,{class:"mt-2 ml-6"},{default:a(()=>[ut]),_:1})]),_:1}),t("div",_t,[(i(!0),f(w,null,I(b(n).administradores,l=>(i(),v(rt,{key:l.idAdministrador,administrador:l,onRemoverAdministrador:d},null,8,["administrador"]))),128))]),b(n).administradores.length?x("",!0):(i(),f("div",ft," N\xE3o h\xE1 nenhum administrador. "))],64)):(i(),f("div",lt,[t("div",ct,[e(q,{height:8,width:8,color:"text-teal-600",class:"mr-3"}),mt])]))])}}};export{At as default};
