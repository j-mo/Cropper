import{y as i,_ as p,o as _,c as d,C as e,S as l,U as v}from"./framework.e7a370da.js";const u={name:"CropperSelectionToNativeCanvas",data(){return{src:i("picture.jpg")}},methods:{convertToCanvas(){const o=this.$refs.source,t=this.$refs.target;t.innerHTML="",o.$toCanvas().then(n=>{t.appendChild(n)})}}};const s=o=>(l("data-v-738497c6"),o=o(),v(),o),h={class:"to-canvas-demo"},C={background:""},m=["src"],f=s(()=>e("cropper-shade",{hidden:""},null,-1)),g=s(()=>e("cropper-handle",{action:"move",plain:""},null,-1)),S={ref:"source","initial-coverage":"0.5",movable:"",zoomable:""},T=s(()=>e("cropper-handle",{action:"move",plain:""},null,-1)),B=[T],b={ref:"target"};function x(o,t,n,k,c,a){return _(),d("div",h,[e("div",null,[e("cropper-canvas",C,[e("cropper-image",{src:c.src,alt:"Picture"},null,8,m),f,g,e("cropper-selection",S,B,512)])]),e("button",{type:"button",onClick:t[0]||(t[0]=(...r)=>a.convertToCanvas&&a.convertToCanvas(...r))}," Convert to canvas » "),e("div",b,null,512)])}const I=p(u,[["render",x],["__scopeId","data-v-738497c6"]]);export{I as default};
