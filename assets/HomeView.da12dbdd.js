import{_ as H}from"./SpinLoading.b901e837.js";import{d as P,C as I,s as T,r as j,w as M,o as R,a as K,t as f,h as B,B as F,i as L,p as z,b as G,c as V,e as $,f as J,L as Q,_ as W,g as U,j as v,k as X,l as Y,m as _,n as r,q as y,u as d,v as Z,x as ee,y as S,z as te,A as ae,D as m,E as se,F as ne,G as w,H as A,T as N}from"./index.d52f0d7c.js";var C;(function(a){a.ChartRendered="chart:rendered",a.ChartUpdated="chart:updated",a.ChartDestroyed="chart:destroyed",a.LabelsUpdated="labels:updated"})(C||(C={}));function O(a,l,s,t){a(l,s),t!==void 0&&t.emit(C.ChartRendered)}function le(a,l){a.update(),l!==void 0&&l.emit(C.ChartUpdated)}function q(a,l){a.destroy(),l!==void 0&&l.emit(C.ChartDestroyed)}function oe(a,l){const s={labels:typeof a.labels>"u"?[]:[...a.labels],datasets:[]};return E(s,{...a},l),s}function E(a,l,s){const t=[];a.datasets=l.datasets.map(n=>{const e=a.datasets.find(c=>c[s]===n[s]);return!e||!n.data||t.includes(e)?{...n}:(t.push(e),Object.assign(e,n),e)})}function re(a,l,s){a.data.labels=l,s!==void 0&&s.emit(C.LabelsUpdated)}function ce(a,l){a.options={...l}}function ie(a,l){const s=a.datasets.map(n=>n.label),t=l.datasets.map(n=>n.label);return l.datasets.length===a.datasets.length&&s.every((n,e)=>n===t[e])}const de="Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components",ue="Update ERROR: chart instance not found",he=(a,l,s)=>P({props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:a},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},setup(t,n){I.register(s);const e=T(null),c=j(null);function i(o,u){if(e.value!==null&&q(f(e.value),n),c.value===null)throw new Error(de);{const g=oe(o,t.datasetIdKey),D=c.value.getContext("2d");D!==null&&(e.value=new I(D,{type:l,data:L(o)?new Proxy(g,{}):g,options:u,plugins:t.plugins}))}}function p(o,u){const g=L(o)?f(o):{...o},D=L(u)?f(u):{...u};if(Object.keys(D).length>0){const b=f(e.value);ie(g,D)&&b!==null?(E(b==null?void 0:b.data,g,t.datasetIdKey),g.labels!==void 0&&re(b,g.labels,n),h()):(b!==null&&q(b,n),O(i,t.chartData,t.chartOptions,n))}else e.value!==null&&q(f(e.value),n),O(i,t.chartData,t.chartOptions,n)}function k(o){const u=f(e.value);u!==null?(ce(u,o),h()):O(i,t.chartData,t.chartOptions,n)}function h(){const o=f(e.value);o!==null?le(o,n):console.error(ue)}return M(()=>t.chartData,(o,u)=>p(o,u),{deep:!0}),M(()=>t.chartOptions,o=>k(o),{deep:!0}),R(()=>{"datasets"in t.chartData&&t.chartData.datasets.length>0&&O(i,t.chartData,t.chartOptions,n)}),K(()=>{e.value!==null&&q(f(e.value),n)}),n.expose({chart:e,updateChart:h}),()=>B("div",{style:t.styles,class:t.cssClasses},[B("canvas",{id:t.chartId,width:t.width,height:t.height,ref:c})])}}),fe=he("bar-chart","bar",F);I.register(z,G,V,$,J,Q);const me={name:"HomeChart",components:{Bar:fe},props:{chartId:{type:String,default:"bar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Object,default:()=>{}},chartData:{type:Object,default:()=>{}}},data(){return{chartOptions:{responsive:!0,layout:{padding:{left:0,right:0,top:30,bottom:0}},scales:{xAxis:{display:!0,grid:{display:!1}},yAxis:{display:!1,grid:{display:!1},ticks:{precision:0}}},plugins:{tooltip:{enabled:!1},legend:{display:!1},datalabels:{anchor:"end",align:"top"}}}}}};function ge(a,l,s,t,n,e){const c=U("Bar");return v(),X(c,{"chart-options":n.chartOptions,"chart-data":s.chartData,"chart-id":s.chartId,"dataset-id-key":s.datasetIdKey,plugins:s.plugins,"css-classes":s.cssClasses,styles:s.styles,width:s.width,height:s.height},null,8,["chart-options","chart-data","chart-id","dataset-id-key","plugins","css-classes","styles","width","height"])}const be=W(me,[["render",ge]]),ve={class:"mx-0 my-0 p-2"},pe={class:"text-xl font-medium leading-9 tracking-tight"},x={__name:"HomeInfo",props:{to:{type:Object,required:!0},customColor:{type:String,default:"teal"}},emits:["closeMenu"],setup(a,{emit:l}){const s=a,t=()=>{l("closeMenu")},n=Y(()=>({amber:"bg-amber-500 hover:bg-amber-600 focus:bg-amber-600 active:bg-amber-700",blue:"bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700",green:"bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700",orange:"bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700",red:"bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700",teal:"bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700",slate:"bg-slate-500 hover:bg-slate-600 focus:bg-slate-600 active:bg-slate-700"})[s.customColor]);return(e,c)=>{const i=U("RouterLink");return v(),_("div",{class:ee(["block mb-3 rounded-lg shadow-lg text-slate-100",[S(n)]])},[r(i,{to:a.to,onClick:t},{default:y(()=>[d("div",ve,[d("h3",pe,[Z(e.$slots,"default")])])]),_:3},8,["to"])],2)}}},_e={key:0,class:"h-full flex flex-row justify-center items-center"},ye={class:"flex items-center"},Ce=d("p",{class:"text-xl text-teal-600"}," Carregando... ",-1),ke={key:1,class:""},De={class:"mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 flex flex-col"},we={class:"text-2xl font-extrabold leading-9 tracking-tight mb-4"},xe={key:0},Oe={class:"flex items-center"},qe={class:"flex items-center"},Se={class:"flex items-center"},Le={key:1},Ie={class:"flex items-center"},je={class:"flex items-center"},Me={key:2,class:"mt-4"},Be=d("h2",{class:"text-xl font-extrabold mb-4"},"Tickets de suporte respondidos por dia",-1),Ue={__name:"HomeView",emits:["closeMenu"],setup(a,{emit:l}){const s=te(),t=ae(),n=j(!0),e=j({}),c={labels:[],datasets:[{label:"Tickets respondidos",backgroundColor:"#0ea5e9",data:[]}]};R(()=>{t.getDashInfo().then(p=>{if(e.value=p.data,e.value.tickets.quantidadePorData){const k=e.value.tickets.quantidadePorData;c.labels=k.map(h=>new Date(h.data).getUTCDate()),c.datasets[0].data=k.map(h=>h.count)}n.value=!1})});const i=()=>{l("closeMenu")};return(p,k)=>{const h=H;return n.value?(v(),_("div",_e,[d("div",ye,[r(h,{height:8,width:8,color:"text-teal-600",class:"mr-3"}),Ce])])):(v(),_("div",ke,[d("div",De,[d("h2",we," Ol\xE1, "+m(S(s).user.nome)+". ",1),S(s).user.idAdministrador?(v(),_("div",xe,[r(x,{to:{name:"assinaturas"},onCloseMenu:i,customColor:e.value.assinaturas.quantidade>0?"amber":"teal"},{default:y(()=>[d("div",Oe,[r(ne,{class:"w-10 h-10 fill-slate-100 mr-2"}),w(" "+m(e.value.assinaturas.quantidade)+" assinaturas aguardam gera\xE7\xE3o da mensalidade ",1)])]),_:1},8,["customColor"]),r(x,{to:{name:"contas"},onCloseMenu:i,customColor:e.value.contas.quantidade>0?"amber":"teal"},{default:y(()=>[d("div",qe,[r(A,{class:"w-10 h-10 fill-slate-100 mr-2"}),w(" "+m(e.value.contas.quantidade)+" contas a receber vencidas ("+m(p.vueNumberFormat(e.value.contas.valor,{}))+") ",1)])]),_:1},8,["customColor"]),r(x,{to:{name:"tickets"},onCloseMenu:i,customColor:e.value.tickets.quantidade>0?"amber":"teal"},{default:y(()=>[d("div",Se,[r(N,{class:"w-10 h-10 fill-slate-100 mr-2"}),w(" "+m(e.value.tickets.quantidade)+" tickets de suporte aguardam resposta ",1)])]),_:1},8,["customColor"])])):(v(),_("div",Le,[r(x,{to:{name:"tickets"},onCloseMenu:i,customColor:e.value.tickets.quantidade>0?"amber":"teal"},{default:y(()=>[d("div",Ie,[r(N,{class:"w-10 h-10 fill-slate-100 mr-2"}),w(" "+m(e.value.tickets.quantidade)+" tickets de suporte foram respondidos ",1)])]),_:1},8,["customColor"]),r(x,{to:{name:"contas"},onCloseMenu:i,customColor:e.value.contas.quantidade>0?"amber":"teal"},{default:y(()=>[d("div",je,[r(A,{class:"w-10 h-10 fill-slate-100 mr-2"}),w(" "+m(e.value.contas.quantidade)+" contas a receber vencidas ("+m(p.vueNumberFormat(e.value.contas.valor,{}))+") ",1)])]),_:1},8,["customColor"])])),S(s).user.idAdministrador?(v(),_("div",Me,[Be,r(be,{chartData:c,height:100})])):se("",!0)])]))}}};export{Ue as default};
