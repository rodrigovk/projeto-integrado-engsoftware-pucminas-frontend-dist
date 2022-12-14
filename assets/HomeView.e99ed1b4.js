import{_ as z}from"./SpinLoading.3f6d8973.js";import{d as F,C as I,s as W,r as L,w as E,o as N,a as J,t as m,h as U,B as V,i as A,p as Y,b as Q,c as X,e as Z,f as ee,L as ae,_ as te,g as P,j as y,k as se,l as re,m as C,n as b,q as w,u as h,v as ne,x as oe,y as M,z as le,A as de,D as v,E as ce,F as fe,G as x,H as j,T as G}from"./index.038c8212.js";var D;(function(s){s.ChartRendered="chart:rendered",s.ChartUpdated="chart:updated",s.ChartDestroyed="chart:destroyed",s.LabelsUpdated="labels:updated"})(D||(D={}));function S(s,n,t,a){s(n,t),a!==void 0&&a.emit(D.ChartRendered)}function ie(s,n){s.update(),n!==void 0&&n.emit(D.ChartUpdated)}function q(s,n){s.destroy(),n!==void 0&&n.emit(D.ChartDestroyed)}function ue(s,n){const t={labels:typeof s.labels>"u"?[]:[...s.labels],datasets:[]};return T(t,{...s},n),t}function T(s,n,t){const a=[];s.datasets=n.datasets.map(r=>{const e=s.datasets.find(d=>d[t]===r[t]);return!e||!r.data||a.includes(e)?{...r}:(a.push(e),Object.assign(e,r),e)})}function be(s,n,t){s.data.labels=n,t!==void 0&&t.emit(D.LabelsUpdated)}function he(s,n){s.options={...n}}function ge(s,n){const t=s.datasets.map(r=>r.label),a=n.datasets.map(r=>r.label);return n.datasets.length===s.datasets.length&&t.every((r,e)=>r===a[e])}const me="Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components",ve="Update ERROR: chart instance not found",pe=(s,n,t)=>F({props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:s},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},setup(a,r){I.register(t);const e=W(null),d=L(null);function i(f,g){if(e.value!==null&&q(m(e.value),r),d.value===null)throw new Error(me);{const p=ue(f,a.datasetIdKey),k=d.value.getContext("2d");k!==null&&(e.value=new I(k,{type:n,data:A(f)?new Proxy(p,{}):p,options:g,plugins:a.plugins}))}}function o(f,g){const p=A(f)?m(f):{...f},k=A(g)?m(g):{...g};if(Object.keys(k).length>0){const _=m(e.value);ge(p,k)&&_!==null?(T(_==null?void 0:_.data,p,a.datasetIdKey),p.labels!==void 0&&be(_,p.labels,r),c()):(_!==null&&q(_,r),S(i,a.chartData,a.chartOptions,r))}else e.value!==null&&q(m(e.value),r),S(i,a.chartData,a.chartOptions,r)}function u(f){const g=m(e.value);g!==null?(he(g,f),c()):S(i,a.chartData,a.chartOptions,r)}function c(){const f=m(e.value);f!==null?ie(f,r):console.error(ve)}return E(()=>a.chartData,(f,g)=>o(f,g),{deep:!0}),E(()=>a.chartOptions,f=>u(f),{deep:!0}),N(()=>{"datasets"in a.chartData&&a.chartData.datasets.length>0&&S(i,a.chartData,a.chartOptions,r)}),J(()=>{e.value!==null&&q(m(e.value),r)}),r.expose({chart:e,updateChart:c}),()=>U("div",{style:a.styles,class:a.cssClasses},[U("canvas",{id:a.chartId,width:a.width,height:a.height,ref:d})])}}),_e=pe("bar-chart","bar",V);I.register(Y,Q,X,Z,ee,ae);const ye={name:"HomeChart",components:{Bar:_e},props:{chartId:{type:String,default:"bar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Object,default:()=>{}},chartData:{type:Object,default:()=>{}}},data(){return{chartOptions:{responsive:!0,layout:{padding:{left:0,right:0,top:30,bottom:0}},scales:{xAxis:{display:!0,grid:{display:!1}},yAxis:{display:!1,grid:{display:!1},ticks:{precision:0}}},plugins:{tooltip:{enabled:!1},legend:{display:!1},datalabels:{anchor:"end",align:"top"}}}}}};function Ce(s,n,t,a,r,e){const d=P("Bar");return y(),se(d,{"chart-options":r.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height},null,8,["chart-options","chart-data","chart-id","dataset-id-key","plugins","css-classes","styles","width","height"])}const we=te(ye,[["render",Ce]]),De={class:"mx-0 my-0 p-2"},ke={class:"text-xl font-medium leading-9 tracking-tight"},O={__name:"HomeInfo",props:{to:{type:Object,required:!0},customColor:{type:String,default:"teal"}},emits:["closeMenu"],setup(s,{emit:n}){const t=s,a=()=>{n("closeMenu")},r=re(()=>({amber:"bg-amber-500 hover:bg-amber-600 focus:bg-amber-600 active:bg-amber-700",blue:"bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700",green:"bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700",orange:"bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700",red:"bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700",teal:"bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700",slate:"bg-slate-500 hover:bg-slate-600 focus:bg-slate-600 active:bg-slate-700"})[t.customColor]);return(e,d)=>{const i=P("RouterLink");return y(),C("div",{class:oe(["block mb-3 rounded-lg shadow-lg text-slate-100",[M(r)]])},[b(i,{to:s.to,onClick:a},{default:w(()=>[h("div",De,[h("h3",ke,[ne(e.$slots,"default")])])]),_:3},8,["to"])],2)}}};var H={},$={},R={exports:{}},l=String,K=function(){return{isColorSupported:!1,reset:l,bold:l,dim:l,italic:l,underline:l,inverse:l,hidden:l,strikethrough:l,black:l,red:l,green:l,yellow:l,blue:l,magenta:l,cyan:l,white:l,gray:l,bgBlack:l,bgRed:l,bgGreen:l,bgYellow:l,bgBlue:l,bgMagenta:l,bgCyan:l,bgWhite:l}};R.exports=K();R.exports.createColors=K;(function(s){Object.defineProperty(s,"__esModule",{value:!0});function n(o,u){for(var c in u)Object.defineProperty(o,c,{enumerable:!0,get:u[c]})}n(s,{dim:()=>d,default:()=>i});const t=a(R.exports);function a(o){return o&&o.__esModule?o:{default:o}}let r=new Set;function e(o,u,c){typeof process<"u"&&process.env.JEST_WORKER_ID||c&&r.has(c)||(c&&r.add(c),console.warn(""),u.forEach(f=>console.warn(o,"-",f)))}function d(o){return t.default.dim(o)}const i={info(o,u){e(t.default.bold(t.default.cyan("info")),...Array.isArray(o)?[o]:[u,o])},warn(o,u){e(t.default.bold(t.default.yellow("warn")),...Array.isArray(o)?[o]:[u,o])},risk(o,u){e(t.default.bold(t.default.magenta("risk")),...Array.isArray(o)?[o]:[u,o])}}})($);(function(s){Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:()=>r});const n=t($);function t(e){return e&&e.__esModule?e:{default:e}}function a({version:e,from:d,to:i}){n.default.warn(`${d}-color-renamed`,[`As of Tailwind CSS ${e}, \`${d}\` has been renamed to \`${i}\`.`,"Update your configuration file to silence this warning."])}const r={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},get lightBlue(){return a({version:"v2.2",from:"lightBlue",to:"sky"}),this.sky},get warmGray(){return a({version:"v3.0",from:"warmGray",to:"stone"}),this.stone},get trueGray(){return a({version:"v3.0",from:"trueGray",to:"neutral"}),this.neutral},get coolGray(){return a({version:"v3.0",from:"coolGray",to:"gray"}),this.gray},get blueGray(){return a({version:"v3.0",from:"blueGray",to:"slate"}),this.slate}}})(H);let B=H;var xe=(B.__esModule?B:{default:B}).default;const Oe={key:0,class:"h-full flex flex-row justify-center items-center"},Se={class:"flex items-center"},qe=h("p",{class:"text-xl text-teal-600"}," Carregando... ",-1),Me={key:1,class:"h-full"},Ae={class:"mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 flex flex-col"},Be={class:"text-2xl font-extrabold leading-9 tracking-tight mb-4"},Ie={key:0},Le={class:"flex items-center"},Re={class:"flex items-center"},Ee={class:"flex items-center"},Ue={key:1},je={class:"flex items-center"},Ge={class:"flex items-center"},Ne={key:2,class:"mt-4"},Pe=h("h2",{class:"text-xl font-extrabold mb-4"},"Tickets de suporte respondidos por dia",-1),Ke={__name:"HomeView",emits:["closeMenu"],setup(s,{emit:n}){const t=le(),a=de(),r=L(!0),e=L({}),d={labels:[],datasets:[{label:"Tickets respondidos",backgroundColor:xe.teal[500],data:[]}]};N(()=>{a.getDashInfo().then(o=>{if(e.value=o.data,e.value.tickets.quantidadePorData){const u=e.value.tickets.quantidadePorData;d.labels=u.map(c=>new Date(c.data).getUTCDate()),d.datasets[0].data=u.map(c=>c.count)}r.value=!1})});const i=()=>{n("closeMenu")};return(o,u)=>{const c=z;return r.value?(y(),C("div",Oe,[h("div",Se,[b(c,{height:8,width:8,color:"text-teal-600",class:"mr-3"}),qe])])):(y(),C("div",Me,[h("div",Ae,[h("h2",Be," Ol\xE1, "+v(M(t).user.nome)+". ",1),M(t).user.idAdministrador?(y(),C("div",Ie,[b(O,{to:{name:"assinaturas"},onCloseMenu:i,customColor:e.value.assinaturas.quantidade>0?"amber":"teal"},{default:w(()=>[h("div",Le,[b(fe,{class:"w-10 h-10 fill-slate-100 mr-2"}),x(" "+v(e.value.assinaturas.quantidade)+" assinaturas aguardam gera\xE7\xE3o da mensalidade ",1)])]),_:1},8,["customColor"]),b(O,{to:{name:"contas"},onCloseMenu:i,customColor:e.value.contas.quantidade>0?"amber":"teal"},{default:w(()=>[h("div",Re,[b(j,{class:"w-10 h-10 fill-slate-100 mr-2"}),x(" "+v(e.value.contas.quantidade)+" contas a receber vencidas ("+v(o.vueNumberFormat(e.value.contas.valor,{}))+") ",1)])]),_:1},8,["customColor"]),b(O,{to:{name:"tickets"},onCloseMenu:i,customColor:e.value.tickets.quantidade>0?"amber":"teal"},{default:w(()=>[h("div",Ee,[b(G,{class:"w-10 h-10 fill-slate-100 mr-2"}),x(" "+v(e.value.tickets.quantidade)+" tickets de suporte aguardam resposta ",1)])]),_:1},8,["customColor"])])):(y(),C("div",Ue,[b(O,{to:{name:"tickets"},onCloseMenu:i,customColor:e.value.tickets.quantidade>0?"amber":"teal"},{default:w(()=>[h("div",je,[b(G,{class:"w-10 h-10 fill-slate-100 mr-2"}),x(" "+v(e.value.tickets.quantidade)+" tickets de suporte foram respondidos ",1)])]),_:1},8,["customColor"]),b(O,{to:{name:"contas"},onCloseMenu:i,customColor:e.value.contas.quantidade>0?"amber":"teal"},{default:w(()=>[h("div",Ge,[b(j,{class:"w-10 h-10 fill-slate-100 mr-2"}),x(" "+v(e.value.contas.quantidade)+" contas a receber vencidas ("+v(o.vueNumberFormat(e.value.contas.valor,{}))+") ",1)])]),_:1},8,["customColor"])])),M(t).user.idAdministrador?(y(),C("div",Ne,[Pe,b(we,{chartData:d,height:100})])):ce("",!0)])]))}}};export{Ke as default};
