import{j as e}from"./jsx-runtime.6940b965.js";import{r as n}from"./index.070054a4.js";import{a as h,b as u}from"./http.3e3d4bea.js";import{p as g}from"./page.2efb91d4.js";import{u as j}from"./use-toast.dbd347db.js";import{X as N}from"./x.c33f2cf5.js";import"./jwt.5556697d.js";import"./index.4b590221.js";import"./toast.5b8c89b6.js";import"./createLucideIcon.3c9fdece.js";function v(a){const{className:r}=a;return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#000",className:r,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}function P(){const a=j(),[r,o]=n.useState(!1),[i,c]=n.useState([]),[w,l]=n.useState(""),x=async()=>{const{error:t,response:s}=await h("https://api.roadmap.sh/v1-get-invitation-list");if(t||!s){a.error(t?.message||"Something went wrong");return}c(s)};async function d(t,s){o(!0),l("");const{response:m,error:p}=await u(`https://api.roadmap.sh/v1-respond-invite/${s}`,{status:t});if(p||!m){l(p?.message||"Something went wrong"),o(!1);return}t==="accept"?window.location.href=`/team/progress?t=${m.teamId}`:(window.dispatchEvent(new CustomEvent("refresh-notification",{detail:{count:i.length-1}})),c(i.filter(f=>f._id!==s)),o(!1))}return n.useEffect(()=>{x().finally(()=>{g.set("")})},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 hidden md:block",children:[e.jsx("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Notification"}),e.jsx("p",{className:"mt-2 text-gray-400",children:"Manage your notifications"})]}),i.length===0&&e.jsx("div",{className:"mt-6 flex items-center justify-center",children:e.jsxs("p",{className:"text-gray-400",children:["No notifications, you can"," ",e.jsx("a",{href:"/team/new",className:"text-blue-500 underline hover:no-underline",children:"create a team"})," ","and invite your friends to join."]})}),e.jsx("div",{className:"space-y-4",children:i.map(t=>e.jsxs("div",{className:"flex items-center justify-between rounded-md border p-2",children:[e.jsx("div",{className:"flex items-center space-x-4",children:e.jsx("div",{className:"min-w-0 flex-1",children:e.jsx("p",{className:"truncate text-sm font-medium text-gray-900",children:t.name})})}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{type:"button",disabled:r,className:"inline-flex rounded border p-1 hover:bg-gray-50 disabled:opacity-75",onClick:()=>d("accept",t?._id),children:e.jsx(v,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",disabled:r,className:"inline-flex rounded border p-1 hover:bg-gray-50 disabled:opacity-75",onClick:()=>d("reject",t?._id),children:e.jsx(N,{className:"h-4 w-4"})})]})]}))})]})}export{P as NotificationPage};
