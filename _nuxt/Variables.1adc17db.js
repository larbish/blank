import{d as l,v as i,B as u,b as d,c as f,t as g,C as m}from"./entry.eebbafac.js";const b=l({__name:"Variables",props:{id:{type:String,required:!0}},setup(a){const{global:{variables:r={}}}=i(),o=a,c=u(()=>{let e=r[o.id];if(e!=null&&e.includes("${")){const n=/\${(.*?)}/g,t=e.match(n);t==null||t.forEach(s=>{const p=s.replace("${","").replace("}","");e=e.replace(s,r[p])})}return e});return(e,n)=>(d(),f("span",null,g(m(c)),1))}});export{b as default};
