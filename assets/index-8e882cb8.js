import{c as ue,a as me,b as pe,u as ge,d as be,e as R,f as T,g as fe,R as k,j as n,M as I,h as e,i as E,k as j,l as _,m as U,n as B,V as D,I as H,H as v,T as p,L as ye,o as we,F as A,A as z,p as Se,q as ne,r as w,s as ke,t as Ce,v as ve,w as Re,x as ze,y as Ae,z as Me,B as Pe,C as Le,D as Z,E as De,G as Oe,J as xe,K as Te,S as Ie,N as Ee,O as je,P as O,Q as $,U as re,W as S,X as _e,Y as G,Z as se,_ as Ue,$ as x,a0 as Be,a1 as He,a2 as ie,a3 as Y,a4 as $e,a5 as Ge,a6 as Ne,a7 as P,a8 as L,a9 as Fe,aa as We,ab as Ve,ac as qe,ad as Je,ae as Ze,af as Ye,ag as Ke,ah as Qe,ai as Xe,aj as et,ak as tt,al as at,am as K,an as Q,ao as X,ap as nt,aq as rt,ar as st,as as it,at as ot}from"./vendor-e06576d2.js";function _t(){import.meta.url,import("_").catch(()=>1);async function*l(){}}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function d(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=d(s);fetch(s.href,a)}})();const lt={gallery:{shanghai:{contributors:["3353040"],name:{en:"Shanghai","zh-Hans":"上海","zh-Hant":"上海"},lastUpdateOn:1683810518708}}},oe=ue({name:"app",initialState:lt,reducers:{setGallery:(l,i)=>{l.gallery=i.payload}}}),{setGallery:ct}=oe.actions,dt=oe.reducer,ht=me(),le=pe({reducer:{app:dt},middleware:l=>l().prepend(ht.middleware)}),ut=()=>ge(),N=be;window.rmgStore=le;var F=(l=>(l.APP_LOAD="APP_LOAD",l.UPLOAD_TEMPLATES="UPLOAD_TEMPLATES",l))(F||{});const mt="Hi RMP team! I would like to contribute to the gallery with the data below.",pt="**Do not edit lines below, they are meant for bots only!!!**";function W(){const{i18n:l}=R();return i=>{var d,t;return(t=(d=l.languages.map(s=>i[s]).find(s=>s!==void 0))!=null?d:i.en)!=null?t:"(Translation Error)"}}const gt=l=>{const{city:i,isOpen:d,onClose:t}=l,s=T(),a=fe(),{t:u}=R(),C=W();N(b=>b.app.gallery);const[o,h]=k.useState({name:{en:""},desc:{en:""},reference:"",updateHistory:[]});k.useEffect(()=>{fetch(`resources/metadata/${i}.json`).then(b=>b.json()).then(b=>h({...b,justification:""}))},[i]);const f=()=>s("/new",{state:{metadata:o}}),r=`https://${window.location.hostname}/rmp/s/${i}`,g={title:u("Link copied."),status:"success",duration:9e3,isClosable:!0};return n(I,{isOpen:d,onClose:t,size:"6xl",scrollBehavior:"inside",children:[e(E,{}),n(j,{children:[e(_,{children:u("Details")}),e(U,{}),n(B,{paddingBottom:10,children:[e(D,{children:e("a",{href:`resources/thumbnails/${i}.png`,target:"_blank",rel:"noopener noreferrer",children:e(H,{src:`resources/thumbnails/${i}.png`,alt:i,borderRadius:"lg"})})}),e(v,{as:"h5",size:"md",mt:3,mb:2,children:C(o.name)}),e(p,{children:C(o.desc)}),e(v,{as:"h5",size:"sm",mt:3,mb:2,children:u("Update History")}),e(ye,{children:o.updateHistory.map(b=>e(we,{children:n(A,{flexDirection:"row",alignItems:"center",children:[e(z,{size:"sm",mr:"2",src:`https://avatars.githubusercontent.com/u/${b.id}`,cursor:"pointer",onClick:()=>fetch(`https://api.github.com/user/${b.id}`).then(M=>M.json()).then(M=>window.open(`https://github.com/${M.login}`))}),e(Se,{mr:"auto",href:`https://github.com/railmapgen/rmp-gallery/issues/${b.issueNumber}`,isExternal:!0,children:b.reason}),e(p,{children:new Date(b.time).toLocaleString(void 0,{hour12:!1})})]})},b.id))})]}),n(ne,{children:[e(w,{"aria-label":"Like",variant:"ghost",icon:e(ke,{}),isDisabled:!0}),e(w,{"aria-label":"Favorite",variant:"ghost",icon:e(Ce,{}),isDisabled:!0}),e(ve,{label:r,children:e(w,{"aria-label":"Share",variant:"ghost",icon:e(Re,{}),onClick:()=>{navigator.clipboard.writeText(r),a(g)}})}),e(w,{"aria-label":"Edit",variant:"ghost",icon:e(ze,{}),onClick:f}),e("a",{href:`resources/real_world/${i}.json`,target:"_blank",rel:"noopener noreferrer",children:e(w,{"aria-label":"Download",variant:"ghost",icon:e(Ae,{})})}),e(w,{"aria-label":"Import",variant:"ghost",icon:e(Me,{}),isDisabled:!0})]})]})]})};function bt(){const l=T(),i=ut(),d=W(),{t}=R(),{gallery:s}=N(r=>r.app),a=()=>{l("/new",{state:{metadata:{name:{en:""},desc:{en:""},reference:"",justification:""}}}),S.event(F.UPLOAD_TEMPLATES,{})},[u,C]=k.useState("shanghai"),[o,h]=k.useState(!1),f=r=>{h(!0),C(r)};return k.useEffect(()=>{fetch("resources/real_world.json").then(r=>r.json()).then(r=>i(ct(r)))},[]),n(Pe,{isLazy:!0,isFitted:!0,children:[n(Le,{children:[e(Z,{children:t("gallery.type.realWorld")}),e(Z,{isDisabled:!0,children:t("gallery.type.fantasy")})]}),e(De,{children:n(Oe,{children:[n(A,{flexWrap:"wrap",children:[Object.keys(s).map(r=>n(xe,{variant:"elevated",minWidth:"300",m:"2",children:[n(Te,{children:[e(H,{src:`resources/thumbnails/${r}@300.png`,alt:r,borderRadius:"lg"}),e(Ie,{mt:"6",spacing:"3",children:e(v,{size:"lg",children:d(s[r].name)})})]}),n(Ee,{children:[e(je,{max:3,children:s[r].contributors.map(g=>e(z,{src:`https://avatars.githubusercontent.com/u/${g}`},g))}),e(O,{variant:"solid",colorScheme:"blue",ml:"auto",onClick:()=>f(r),children:t("Details")})]})]},r)),e($,{onClick:a,position:"fixed",bottom:"20px",right:"20px",zIndex:3,children:e(w,{"aria-label":"new",size:"lg",icon:e(re,{}),colorScheme:"blue",variant:"solid"})})]}),e(gt,{city:u,isOpen:o,onClose:()=>h(!1)})]})})]})}const ft=l=>new Promise(i=>{const d=new FileReader;d.onloadend=()=>i(d.result),d.readAsText(l)}),ee=(l,i,d)=>{if(i!==null){const t=document.createElement("details");return t.setAttribute("repo","rmp-gallery"),t.setAttribute("type",l),Object.entries(d).forEach(([s,a])=>{t.setAttribute(s,a)}),t.textContent=i,t.outerHTML}else return""},yt={"& > div:first-of-type":{flex:1}};function te(l){const{translations:i,onUpdate:d,onLangSwitch:t,onRemove:s}=l,{t:a}=R(),u=W(),C=(h,f)=>[{type:"select",label:a("Language"),value:h,options:Object.entries(x).reduce((r,g)=>({...r,[g[0]]:u(g[1])}),{}),disabledOptions:i.filter(r=>r[0]!==h).map(r=>r[0]),onChange:r=>t(h,r)},{type:"input",label:a("Name"),value:f,onChange:r=>d(h,r),validator:r=>!!r}],o=()=>{const h=Object.keys(x).filter(f=>!i.find(r=>r[0]===f))[0];d(h,"")};return e(_e,{direction:"column",children:i.map(([h,f],r,g)=>n(G,{sx:yt,children:[e(se,{fields:C(h,f),noLabel:r>0}),r===g.length-1?e(w,{size:"sm",variant:"ghost","aria-label":a("Add a name in another language"),title:a("Add a name in another language"),onClick:o,icon:e(re,{})}):e($,{minW:8}),g.length>1&&e(w,{size:"sm",variant:"ghost","aria-label":a("Remove this name"),title:a("Remove this name"),onClick:()=>s(h),icon:e(Ue,{})})]},r))})}const wt={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}};function St(){var V,q;const{state:{metadata:l}}=Be(),i=T(),d=N(c=>c.app.gallery),{t}=R(),s=()=>i("/"),a=k.useRef(null),[u,C]=k.useState(!1),[o,h]=k.useState(l),[f,r]=k.useState(""),g=(q=(V=o.name.en)==null?void 0:V.replace(/[^A-Za-z0-9]/g,"").toLowerCase())!=null?q:"",b=[mt,pt,ee("metadata",JSON.stringify(o,null,4),{}),ee("real_world",f,{compress:"zipson",city:g})].join(`

`),M=new URLSearchParams({labels:"resources",title:`Resources: ${g in d?"Update":"New"} template of ${g}`}),ce=async c=>{var y;const m=(y=c.target.files)==null?void 0:y[0];if(console.log("handleFileUpload():: received file",m),!!m){if(m.type!=="application/json"){alert("Invalid file type!"),c.target.value="";return}try{const J=await ft(m);r(Ne.stringify(JSON.parse(J.trim())).trim())}catch(J){alert("Invalid file!"),c.target.value=""}}},de=async()=>{a!=null&&a.current&&(a.current.select(),await navigator.clipboard.writeText(b)),window.open("https://github.com/railmapgen/rmp-gallery/issues/new?"+M.toString(),"_blank")},he=[{type:"custom",label:t("Project file"),component:e(He,{variant:"flushed",size:"xs",type:"file",accept:".json",onChange:ce}),minW:250},{type:"input",label:t("Reference link"),placeholder:"Enter the link where you get the valid data",value:o.reference,onChange:c=>h({...o,reference:c}),minW:250},{type:"input",label:t("Justification"),placeholder:"The reason why you make these changes",validator:c=>/^[a-zA-Z0-9. -]+$/.test(c),value:o.justification,onChange:c=>h({...o,justification:c}),minW:250}];return n(ie,{sx:wt,children:[n(A,{children:[e(se,{fields:he}),e(Y,{label:t("City Name"),children:e(te,{translations:Object.entries(o.name),onUpdate:(c,m)=>h({...o,name:{...o.name,[c]:m}}),onLangSwitch:(c,m)=>{const y=structuredClone(o);y.name[m]=y.name[c],delete y.name[c],h(y)},onRemove:c=>{const m=structuredClone(o);delete m.name[c],h(m)}})}),e(Y,{label:t("Description (Optional)"),children:e(te,{translations:Object.entries(o.desc),onUpdate:(c,m)=>h({...o,desc:{...o.desc,[c]:m}}),onLangSwitch:(c,m)=>{const y=structuredClone(o);y.desc[m]=y.desc[c],delete y.desc[c],h(y)},onRemove:c=>{const m=structuredClone(o);delete m.desc[c],h(m)}})})]}),n(A,{children:[e(O,{size:"sm",onClick:s,children:t("Back to list")}),e(G,{ml:"auto",children:e(O,{size:"sm",colorScheme:"primary",isDisabled:f===""||o.reference===""||o.justification===""||!/^[a-zA-Z0-9. -]+$/.test(o.justification)||g==="",onClick:()=>C(!0),children:t("Submit")})})]}),n(I,{isOpen:u,onClose:()=>C(!1),children:[e(E,{}),n(j,{children:[e(_,{children:t("Submit template")}),e(U,{}),n(B,{children:[e(p,{children:t("You may now copy the following text into your new issue's body.")}),e($e,{mt:"2",mb:"2"}),e(Ge,{ref:a,isReadOnly:!0,defaultValue:b,onClick:({target:c})=>c.select()})]}),e(ne,{children:e(O,{colorScheme:"primary",onClick:de,children:t("Copy issue body and open a new issue")})})]})]})]})}const kt="/rmp-gallery/assets/github-mark-7a0dd11e.svg",Ct="/rmp-gallery/assets/slack-mark-19839006.svg",vt=l=>{const{isOpen:i,onClose:d}=l,{t}=R(),s=S.getAppVersion();return n(I,{isOpen:i,onClose:d,size:"xl",scrollBehavior:"inside",children:[e(E,{}),n(j,{children:[e(_,{children:t("header.about.title")}),e(U,{}),n(B,{paddingBottom:10,children:[n(A,{direction:"row",children:[e(H,{boxSize:"128px",src:"/rmp-gallery/logo192.png"}),n(A,{direction:"column",width:"100%",alignItems:"center",justifyContent:"center",children:[e(p,{fontSize:"xl",as:"b",children:t("header.about.rmpGallery")}),e(p,{children:s}),e(p,{}),e(p,{fontSize:"sm",children:t("header.about.railmapgen")})]})]}),e($,{margin:5,children:e(p,{fontSize:"xl",children:t("header.about.desc")})}),e(v,{as:"h5",size:"sm",mt:3,mb:2,children:t("header.about.contributors")}),e(v,{as:"h6",size:"xs",my:2,children:t("header.about.coreContributors")}),e(D,{children:n(P,{size:"lg",w:"85%",onClick:()=>window.open("https://github.com/thekingofcity","_blank"),cursor:"pointer",children:[e(z,{src:"https://github.com/thekingofcity.png",size:"lg",my:2,ml:-1,mr:2}),n(L,{display:"block",width:"100%",children:[e(p,{fontSize:"lg",fontWeight:"bold",mb:1,children:"thekingofcity"}),e(p,{fontSize:"sm",children:t("header.about.content1")}),e(p,{fontSize:"sm",align:"right",mb:1,children:t("header.about.content2")})]})]})}),e(v,{as:"h6",size:"xs",my:2,children:t("header.about.templateAdministrators")}),e(D,{children:["52PD","linchen1965"].map(a=>n(P,{size:"lg",w:"85%",onClick:()=>window.open(`https://github.com/${a}`,"_blank"),cursor:"pointer",children:[e(z,{src:`https://github.com/${a}.png`,size:"lg",my:2,ml:-1,mr:2}),n(L,{display:"block",width:"100%",children:[e(p,{fontSize:"lg",fontWeight:"bold",mb:1,children:a}),e(p,{fontSize:"sm",mb:1,children:t(`header.about.${a}`)})]})]},a))}),e(v,{as:"h5",size:"sm",mt:3,mb:2,children:t("header.about.contactUs")}),n(D,{children:[n(P,{size:"lg",w:"85%",onClick:()=>window.open("https://github.com/railmapgen/rmp-gallery/issues","_blank"),cursor:"pointer",children:[e(z,{src:kt,size:"lg",my:2,ml:-1,mr:2}),n(L,{display:"block",width:"100%",children:[e(p,{fontSize:"lg",fontWeight:"bold",mb:1,children:t("header.about.github")}),e(p,{fontSize:"sm",children:t("header.about.githubContent")})]})]}),n(P,{size:"lg",w:"85%",onClick:()=>window.open("https://join.slack.com/t/railmapgenerator/shared_invite/zt-1odhhta3n-DdZF~fnVwo_q0S0RJmgV8A","_blank"),cursor:"pointer",children:[e(z,{src:Ct,size:"lg",my:2,ml:-1,mr:2}),n(L,{display:"block",width:"100%",children:[e(p,{fontSize:"lg",fontWeight:"bold",mb:1,children:t("header.about.slack")}),e(p,{fontSize:"sm",children:t("header.about.slackContent")}),e(p,{fontSize:"sm",as:"i",children:"#rmg, #rmp, #gallery, #random"})]})]})]})]})]})]})};function Rt(){const{t:l}=R(),i=S.getEnv(),d=S.getAppVersion(),[t,s]=k.useState(!1),a=u=>{S.setLanguage(u),S.getI18nInstance().changeLanguage(u)};return n(Fe,{children:[e(v,{as:"h4",size:"md",children:l("header.about.rmpGallery")}),e(We,{environment:i,version:d}),n(G,{ml:"auto",children:[n(Ve,{children:[e(qe,{as:w,icon:e(Je,{}),variant:"ghost",size:"sm"}),e(Ze,{children:Ye.map(u=>e(Ke,{onClick:()=>a(u),children:x[u][u]},u))})]}),e(w,{size:"sm",variant:"ghost","aria-label":"Help",icon:e(Qe,{}),onClick:()=>s(!0)})]}),e(vt,{isOpen:t,onClose:()=>s(!1)})]})}function zt(){return e(Xe,{basename:"/rmp-gallery/",children:e(et,{children:n(tt,{children:[e(Rt,{}),e(ie,{children:n(at,{children:[e(K,{path:"/",element:e(Q,{suspenseFallback:e(X,{isIndeterminate:!0}),children:e(bt,{})})}),e(K,{path:"/new",element:e(Q,{suspenseFallback:e(X,{isIndeterminate:!0}),children:e(St,{})})})]})})]})})})}const At={about:{rmpGallery:"RMP Gallery",title:"About",railmapgen:"A railmapgen project",desc:"Browse, set, and submit your RMP template here!",content1:"In memory of all the freedom and equality we once had.",content2:"06/01/2022 in Shanghai",contributors:"Contributors",coreContributors:"Core Contributors",templateAdministrators:"Administrators","52PD":"Special thanks for his continuous effort in maintaining templates.",linchen1965:"Special thanks for his continuous effort in maintaining templates.",contactUs:"Contact Us",github:"Project Repository",githubContent:"Face any problems? Search or raise an issue here!",slack:"Slack Group",slackContent:"Chat in these Slack channels!"}},Mt={type:{realWorld:"Real World",fantasy:"Fantasy"}},Pt={header:At,gallery:Mt},Lt={about:{rmpGallery:"RMP画廊",title:"About",railmapgen:"一个railmapgen项目",desc:"浏览、设置、提交你制作的RMP模板！",content1:"谨以此纪念我们曾拥有的自由与平等。",content2:"06/01/2022于上海",contributors:"贡献者",coreContributors:"核心贡献者",templateAdministrators:"管理员","52PD":"特别感谢他维护这些模板的持续付出。",linchen1965:"特别感谢他维护这些模板的持续付出。",contactUs:"联系我们",github:"项目仓库",githubContent:"遇到任何问题？在这里搜索或提出一个问题！",slack:"Slack群组",slackContent:"在这些Slack频道中讨论!"}},Dt={header:Lt},Ot={about:{rmpGallery:"RMP畫廊",title:"關於",railmapgen:"一個railmapgen項目",desc:"瀏覽、設置、提交你製作的RMP模板！",content1:"謹以此紀念我們曾擁有的自由與平等。",content2:"06/01/2022於上海",contributors:"貢獻者",coreContributors:"核心貢獻者",templateAdministrators:"管理員","52PD":"特別感謝他維護這些模板的持續付出。",linchen1965:"特別感謝他維護這些模板的持續付出。",contactUs:"聯繫我們",github:"項目倉庫",githubContent:"遇到任何問題？在這裡搜索或提出一個問題！",slack:"Slack群組",slackContent:"在這些Slack頻道中討論!"}},xt={header:Ot},Tt={about:{rmpGallery:"RMP 갤러리",title:"대함",railmapgen:"railmapgen 프로젝트",desc:"Browse, set, and submit your RMP template here!",content1:"우리가 가졌던 자유와 평등을 기념한다.",content2:"2022년 6월 1일 상해",contributors:"기여자",coreContributors:"핵심 기여자",templateAdministrators:"Administrators","52PD":"Special thanks for his continuous effort in maintaining templates.",linchen1965:"Special thanks for his continuous effort in maintaining templates.",contactUs:"우리에게 연락하기",github:"프로젝트 저장소",githubContent:"무슨 문제라도 있나요? 여기서 문제를 검색하거나 제기하십시오!",slack:"슬랙 그룹",slackContent:"이 슬랙 채널에서 채팅해요!"}},It={header:Tt},Et=new S.I18nBuilder().use(nt).withAppName("RMP Gallery").withLng(S.getLanguage()).withResource("en",Pt).withResource("zh-Hans",Dt).withResource("zh-Hant",xt).withResource("ko",It).build();let ae;const jt=()=>{ae=rt(document.getElementById("root")),ae.render(e(st.StrictMode,{children:e(it,{store:le,children:e(ot,{i18n:Et,children:e(zt,{})})})}))};S.ready().then(()=>{jt(),S.injectCss(),S.event(F.APP_LOAD,{})});export{_t as __vite_legacy_guard};
