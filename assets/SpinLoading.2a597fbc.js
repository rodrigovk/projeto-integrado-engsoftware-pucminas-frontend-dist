import{j as o,o as c,c as n,b as e,n as l,h as i}from"./index.d0e66157.js";const d={class:"flex items-center"},p={class:"-m-1"},w=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),_=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),u=[w,_],f={__name:"SpinLoading",props:{height:{type:Number,default:5},width:{type:Number,default:5},color:{type:String,default:"text-white"}},setup(r){const t=r,h=o(()=>({4:"h-4",5:"h-5",6:"h-6",7:"h-7",8:"h-8",9:"h-9",10:"h-10"})[t.height]),a=o(()=>({4:"w-4",5:"w-5",6:"w-6",7:"w-7",8:"w-8",9:"w-9",10:"w-10"})[t.width]);return(s,m)=>(c(),n("div",d,[e("div",p,[(c(),n("svg",{class:l(["animate-spin",[i(h),i(a),t.color]]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},u,2))])]))}};export{f as _};
