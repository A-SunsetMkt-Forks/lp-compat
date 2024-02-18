"use strict";(self.webpackChunklp_compat=self.webpackChunklp_compat||[]).push([[237],{7172:(e,t,a)=>{a.d(t,{F:()=>n,Z:()=>o});var l=a(9762);const n=function(e){return void 0===e&&(e=(0,l.Z)()),{iap:{label:"In App Purchases patch works!",color:e.palette.success.main},ads:{label:"Remove ads patch works",color:e.palette.success.main},"no-ads":{label:"Remove ads patch does not work",color:e.palette.error.main},"partial-iap":{label:"In App Purchases partially compatible",color:e.palette.warning.main},"unclear-iap":{label:"In App Purchases need verification - Try it out and post in Discord!",color:e.palette.warning.main},"no-iap":{label:"In App Purchases incompatible",color:e.palette.error.main},"anti-cheat":{label:"Anti-cheat in app",color:e.palette.error.main},"custom-patch":{label:"Custom patch required",color:e.palette.success.main},"dont-custom-patch":{label:"Custom patch is not working",color:e.palette.error.main},subscription:{label:"Subscription redeemable!",color:e.palette.success.main},"no-subscription":{label:"Subscription cannot be redeemed",color:e.palette.warning.main},repurchase:{label:"Some In App Purchasess need to be redeemed after every restart",color:e.palette.warning.main},"account-login":{label:"Account login works!",color:e.palette.info.main},"facebook-login":{label:"Facebook login works!",color:e.palette.info.main},"facebook-login-broken":{label:"Facebook login broken",color:e.palette.warning.main},"facebook-login-no-app-installed":{label:"Facebook app must not be installed to login",color:e.palette.warning.main},transfer:{label:"App data can be transferred to another account",color:e.palette.info.main},"transfer-steam":{label:"App data can be transferred to Steam",color:e.palette.info.main},"transfer-ios":{label:"App data can be transferred to iOS",color:e.palette.info.main},multiplayer:{label:"Full Multiplayer; In App Purchases compatible",color:e.palette.primary.main},"partial-multiplayer":{label:"App has some multiplayer features; In App Purchases compatible",color:e.palette.primary.main},"no-multiplayer":{label:"Singleplayer only",color:e.palette.warning.main},"no-multiplayer-iap":{label:"Multiplayer In App Purchases broken",color:e.palette.warning.main},"slightly-broken":{label:"Slightly broken, but playable",color:e.palette.warning.main},"too-many-iap-break":{label:"Buying too many In App Purchases will break the app!",color:e.palette.warning.main},"disable-data-on-lp-popup":{label:"Disable data connection when the LP purchase popup shows to get In App Purchases",color:e.palette.info.main},"restore-purchase":{label:"In App Purchases can be redeemed by restoring purchase and restarting the app",color:e.palette.info.main},"iap-before-load":{label:"Purchase In App Purchases before the app is fully loaded. Play anonymously.",color:e.palette.info.main},"subscription-restore-purchase":{label:"Subscription can be redeemed by restoring purchase",color:e.palette.info.main},"dont-bother":{label:"Don't bother. This game is either grindy or uninteresting.",color:e.palette.warning.main},"region-locked":{label:"If region locked, use Google Account from another region",color:e.palette.warning.main},"patch-before-first-launch":{label:"Patch this game before launching it for the first time!",color:e.palette.warning.main},"special-patch-full-offline":{label:"Select patch option: Make fully offline",color:e.palette.info.main},"special-patch-signature":{label:"Select patch option: Signature verification killer",color:e.palette.info.main},"special-patch-lvl":{label:"Select patch option: Support patch for LVL and Inapp emulation",color:e.palette.info.main},"may-require-root":{label:"This app may require a root-level patch to work.",color:e.palette.info.main},"root-iap":{label:"In App Purchases patch works only with rooted device",color:e.palette.info.main},"root-patch":{label:"Root patch available",color:e.palette.info.main},"root-patch-iap":{label:"App requires root to make In App Purchases patch work!",color:e.palette.info.main},"no-root-patch-iap":{label:"Root patch doesn't make In App Purchases available",color:e.palette.info.main},"apk-platinmods":{label:"Patched APK download available on Platinmods",color:e.palette.info.main},"apk-mobilism":{label:"Patched APK download available on Mobilism",color:e.palette.info.main},"apk-iosgods":{label:"Patched APK download available on iOSGods",color:e.palette.info.main},"appstore-happymod":{label:"Modded version on Happymod works",color:e.palette.info.main},"apk-apkpure":{label:"Download APK from APKPure, then patch",color:e.palette.info.main}}},o=function(e,t){void 0===t&&(t=(0,l.Z)());const a=n(t)[e.toLowerCase()]||{};if(e.indexOf("::")>-1){var o;const l=e.split("::");a.color=(null==(o=t.palette[l[0]])?void 0:o.main)||t.palette.info.main,a.label=l[1]}return a}},6922:(e,t,a)=>{a.r(t),a.d(t,{default:()=>De});var l=a(7294),n=a(6010),o=a(9960),r=a(2263),i=a(2164),c=a(7462);const s="features_DHSf";var p=a(7236),d=a(9569),m=a(9669);const u=a.n(m)().create({baseURL:"https://luck.up.railway.app/",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Max-Age":600},withCredentials:!0}),h={appsListUpdated:Date.now(),appsListPage:0,discordUser:void 0,discordGuilds:[],dialogs:{EDIT_APP:{open:!1}}},f=(0,p.PH)("clear"),g=(0,p.hg)("/discord/get",(async e=>{let{code:t}=e;return(await u.get(`discord/get/${t}`)).data})),b=(0,p.oM)({name:"system",initialState:h,reducers:{setAppsListUpdated(e,t){e.appsListUpdated=t.payload},setAppsListPage(e,t){e.appsListPage=t.payload},openDialog(e,t){e.dialogs[t.payload.dialog]={open:!0,...t.payload.data}},closeDialog(e,t){e.dialogs[t.payload.dialog]={open:!1}}},extraReducers:e=>{e.addCase(f,((e,t)=>h)),e.addCase(g.fulfilled,((e,t)=>{e.discordUser=t.payload.user,e.discordGuilds=t.payload.guilds}))}}),{setAppsListUpdated:E,setAppsListPage:y,openDialog:Z,closeDialog:w}=b.actions,v=b.reducer,k=(0,p.hg)("apps/all",(async()=>(await u.get("/apps/all")).data)),I=(0,p.hg)("apps/get",(async e=>{let{appId:t}=e;return(await u.get(`apps/get/${t}`)).data})),x=(0,p.hg)("apps/page",(async(e,t)=>{let{page:a}=e;const l=(await u.get(`apps/page/${a}/200`)).data;return t.dispatch(y(a+1)),l})),P=(0,p.hg)("apps/count",(async()=>(await u.get("apps/count")).data)),C=(0,p.hg)("apps/add",(async e=>{let{app:t}=e;return(await u.post("apps/add/",t)).data})),A=(0,p.hg)("apps/edit",(async e=>{let{app:t}=e;return(await u.post("apps/edit/",t)).data})),S=(0,p.hg)("playstore/get",(async e=>{let{appId:t}=e;return(await u.get(`/playstore/get/${t}`)).data})),D=(0,p.hg)("playstore/search",(async e=>{let{query:t}=e;return(await u.get(`/playstore/search/${t}`)).data})),L=[],N=(0,p.oM)({name:"apps",initialState:L,reducers:{},extraReducers:e=>{e.addCase(f,((e,t)=>L)),e.addCase(k.fulfilled,((e,t)=>t.payload)),e.addCase(I.fulfilled,((e,t)=>{const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(C.fulfilled,((e,t)=>{console.log("addapp result",t.payload);const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(A.fulfilled,((e,t)=>{console.log("editApp result",t.payload);const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(x.fulfilled,((e,t)=>[...e,...t.payload]))}}).reducer,T=(0,p.xC)({reducer:(0,d.UY)({apps:N,system:v})});var R=a(1719),F=a(1927),G=a(9762),M=a(120),O=a(9630),U=a(2097),_=a(9072),j=a(5084),q=a(3678),$=a(8763),z=a(6866),H=a(3265),Y=a(1448),B=a(562),K=a(9837),V=a(1359),W=a(4731),J=a(918),Q=a(7814),X=a(3024),ee=a(9417),te=a(6486),ae=a(9758),le=a(7172),ne=a(2949),oe=a(9473);const re=oe.I0,ie=oe.v9;var ce=a(412),se=a(7971),pe=a(1470),de=a(5050),me=a(784),ue=a(9604),he=a(3997),fe=a(8377);const ge=e=>{let{editState:t,field:a,handleChange:n}=e;return l.createElement(se.Z,{label:a,value:t[a],onChange:e=>n(a,e.target.value)})},be=e=>{let{result:t,handleChange:a}=e;return l.createElement(l.Fragment,null,l.createElement(fe.Z,{display:"flex"},l.createElement("img",{src:t.icon,width:"100",height:"100"}),l.createElement(j.Z,{onClick:()=>{a("appId",t.appId),a("title",t.title)}},"Use this app")),l.createElement(O.Z,null,"ID: ",t.appId," "),l.createElement(O.Z,null,"Title: ",t.title),+t.price&&l.createElement(O.Z,null,"Price: ",t.price),l.createElement(fe.Z,{m:1}))},Ee=e=>{let{open:t,appId:a=""}=e;const n=re(),o=ie((e=>e.apps.find((e=>e.appId===a))))||{appId:a};console.log("initialAppData",o);const[r,i]=(0,l.useState)({...o}),[s,p]=(0,l.useState)(!1),[d,m]=(0,l.useState)({}),[u,h]=(0,l.useState)([]),[f,g]=(0,l.useState)([]),b=(0,U.Z)(),E=(0,le.F)(b);console.log("editState",r);const y=(e,t)=>{i((a=>({...a,[e]:t})))},Z=()=>{i({}),n(w({dialog:"EDIT_APP"}))};(0,l.useEffect)((()=>{t&&i({...o})}),[t]),(0,l.useEffect)((()=>{n(S({appId:r.appId})).then((e=>m(e.payload))),n(D({query:r.title})).then((e=>h(e.payload))),n(D({query:r.appId})).then((e=>g(e.payload)))}),[r.appId,r.title]);return l.createElement(pe.Z,{fullScreen:!0,open:t,onClose:Z},t&&0!==Object.keys(r).length&&l.createElement(l.Fragment,null,l.createElement(de.Z,{sx:{position:"relative"}},l.createElement(me.Z,null,l.createElement(B.Z,{edge:"start",color:"inherit",onClick:Z,"aria-label":"close"},l.createElement(Q.G,{icon:ee.NBC})),l.createElement(O.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},"Add or edit app"),l.createElement(j.Z,{autoFocus:!0,color:"inherit",onClick:async()=>{let e=await n(C({app:r}));"fulfilled"===e.meta.requestStatus?(console.log("addApp fulfilled"),Z()):(e=await n(A({app:r})),"fulfilled"===e.meta.requestStatus?(console.log("editApp fulfilled"),Z()):p(!0))}},"save"))),l.createElement(fe.Z,{m:1}),l.createElement(O.Z,null,"After patching you may have to refresh the data (hit the refresh button under the filter section)."),s&&l.createElement(ue.Z,{severity:"error",onClose:()=>{p(!1)}},"That didn't work. Make sure you prefix any custom features with ::",l.createElement("br",null),"Does the app ",r.appId," exist on the Play Store?"),!(null!=d&&d.title)&&l.createElement(ue.Z,{severity:"info"},"Could not find an app with this ID.",l.createElement("br",null),"Does the app ",r.appId," exist on the Play Store?"),l.createElement(fe.Z,{m:1}),l.createElement(ge,{field:"appId",editState:r,handleChange:y}),l.createElement(fe.Z,{m:1}),(null==d?void 0:d.title)&&l.createElement(O.Z,null,`Searched app ID ${r.appId} and found app in play store with title ${d.title}`),l.createElement(fe.Z,{m:1}),l.createElement(ge,{field:"title",editState:r,handleChange:y}),l.createElement(O.Z,null,"You can also use this title field to search for apps."),l.createElement(fe.Z,{m:1}),l.createElement(O.Z,null,"You can select various pre-defined features from the list or add your own. ",l.createElement("br",null)," Please try to always at least choose one of iap, unclear-iap or no-iap so that users can filter the list. ",l.createElement("br",null),"You can add custom features by prefixing them with :: ",l.createElement("br",null),"However, it must be added after a pre-defined feature is added first. ",l.createElement("br",null),"If you did it right, the result should look like this:"),l.createElement(fe.Z,{m:1}),l.createElement("img",{src:"/lp-compat/img/Custom_features_Example.png"}),l.createElement(fe.Z,{m:1}),l.createElement(he.Z,{multiple:!0,id:"tags-filled",options:Object.keys(E).map((e=>e)),freeSolo:!0,value:r.features,onChange:(e,t)=>{console.log("onChange",t),y("features",t)},renderTags:(e,t)=>e.map(((e,a)=>l.createElement(Y.Z,(0,c.Z)({variant:"outlined",label:e},t({index:a}))))),renderInput:e=>l.createElement(se.Z,(0,c.Z)({},e,{variant:"filled",label:"Features",placeholder:"Features"})),renderOption:(e,t)=>l.createElement(fe.Z,(0,c.Z)({component:"li",flexDirection:"column"},e),l.createElement(O.Z,null,E[t].label),l.createElement(O.Z,{variant:"caption"},t))}),l.createElement(fe.Z,{m:1}),(null==u?void 0:u.length)>0&&l.createElement(l.Fragment,null,l.createElement(O.Z,null,"Search results by title:"),l.createElement(fe.Z,{display:"flex",flexDirection:"column"},u.map((e=>l.createElement(be,{result:e,handleChange:y}))))),l.createElement(fe.Z,{m:1}),(null==f?void 0:f.length)>0&&l.createElement(l.Fragment,null,l.createElement(O.Z,null,"Search results by ID:"),l.createElement(fe.Z,{display:"flex",flexDirection:"column"},f.map((e=>l.createElement(be,{result:e,handleChange:y})))))))},ye=()=>{const{dialogs:e}=ie((e=>e.system));return l.createElement(l.Fragment,null,(null==e?void 0:e.EDIT_APP.open)&&l.createElement(Ee,null==e?void 0:e.EDIT_APP))};var Ze=a(9171);const we=(0,R.ZP)(Ze.Z)((e=>{let{theme:t,backgroundColor:a}=e;return`\n  && {\n    background-color: transparent;\n    color: ${t.palette.getContrastText(a)};\n    && a {\n      color: ${t.palette.getContrastText(a)};\n      &::after {\n        content: "";\n        display: inline-block;\n        width: 13px;\n        height: 13px;\n        opacity: 0.6;\n        margin: 4px 4px 0px 4px;\n        background: url(/lp-compat/img/link-solid.svg) center no-repeat;\n      }\n    }\n  }\n`})),ve=[{icon:l.createElement(M.Z,{flex:"1"},l.createElement(M.Z,{className:"fa-layers fa-fw"},l.createElement(O.Z,{className:"fa-layers-text fa-inverse",color:"#607d8b",fontWeight:900,fontSize:30},"ROOT"),l.createElement(Q.G,{icon:ee.gPx,color:"#e51c23",size:"lg",opacity:.9}))),description:l.createElement(O.Z,null,'No root access is required for these patches, except for apps in the "Root" category.')},{icon:l.createElement(M.Z,{flex:"1"},l.createElement(M.Z,{className:"fa-layers fa-fw",mr:4},l.createElement(Q.G,{icon:ee.HCh,color:"#607d8b"}),l.createElement(Q.G,{icon:ee.gPx,color:"#e51c23",size:"lg",opacity:.9})),l.createElement(M.Z,{className:"fa-layers fa-fw",ml:4},l.createElement(Q.G,{icon:ee.vJI,color:"#607d8b"}),l.createElement(Q.G,{icon:ee.Vkm,color:"#e51c23",size:"xs",opacity:.9,transform:"down-4 right-8"}))),description:l.createElement(O.Z,null,"Apps are patched using"," ",l.createElement(o.Z,{href:"/docs/intro"},"the default IAP and Adblock patches"),".")},{icon:l.createElement(Q.G,{icon:ee.jMV,color:"#607d8b"}),description:l.createElement(O.Z,null,"Many apps work with LP, even if they're not on the list.",l.createElement("br",null),"Please try them yourself and report back!")},{icon:l.createElement(Q.G,{icon:X.omb,color:"#607d8b"}),description:l.createElement(O.Z,null,"Found something? Create an"," ",l.createElement(o.Z,{href:"https://github.com/Flixbox/lp-compat/issues"},"issue")," or post on the ",l.createElement(o.Z,{href:"https://discord.gg/RS5ddYf7mw"},"Discord"),"!")},{icon:l.createElement(Q.G,{icon:ee.kWN,color:"#607d8b"}),description:l.createElement(O.Z,null,"Check out the"," ",l.createElement(o.Z,{href:"/docs/honorable-mentions"},"honorable mentions")," too!")}];function ke(e){let{icon:t,description:a}=e;return l.createElement("div",{className:(0,n.Z)("col col--4")},l.createElement(M.Z,{className:"text--center",height:"70px",mt:3},t),l.createElement("div",{className:"text--center padding-horiz--md"},a))}const Ie=()=>{const e=re(),[t,a]=(0,ae.Yw)("","appsTitleFilter"),[n,o]=(0,ae.Yw)("installs-asc","apps-sorting"),[r,i]=((0,U.Z)(),(0,l.useState)(!1)),[p,d]=(0,l.useState)(0),m=ie((e=>e.apps)),{appsListUpdated:u,appsListPage:h,discordUser:b}=ie((e=>e.system));let E;if(ce.Z.canUseDOM&&(E=new URLSearchParams(window.location.search).get("code")),b){document.getElementById("discord-login").innerHTML=b.username}(0,l.useEffect)((()=>{e(P()).then((e=>{d(e.payload)})),E&&e(g({code:E}))}),[]);const y=[{id:"compatible",title:"Compatible apps",onlyRenderIf:e=>{var t;return e&&(null==(t=e.features)?void 0:t.indexOf("iap"))>-1}},{id:"unclear-iap",title:"Uncategorized",onlyRenderIf:e=>{var t,a;return e&&-1===(null==(t=e.features)?void 0:t.indexOf("iap"))&&-1===(null==(a=e.features)?void 0:a.indexOf("no-iap"))}},{id:"incompatible",title:"Incompatible apps",onlyRenderIf:e=>{var t;return e&&(null==(t=e.features)?void 0:t.indexOf("no-iap"))>-1}}],[w,v]=(0,ae.Yw)(y.map((e=>e.id)),"onlyShowTheseVisibilitySettings");n||o("installs-asc");const k={"name-asc":{title:"Sort by name",getSortedApps:()=>[...m].sort(((e,t)=>e&&t&&e.title.localeCompare(t.title)))},"installs-asc":{title:"Sort by downloads",getSortedApps:()=>[...m].sort(((e,t)=>e&&t&&t.minInstalls-e.minInstalls))},"date-modified":{title:"Sort by last modified",getSortedApps:()=>[...m].sort(((e,t)=>e&&t&&t.dateModified-e.dateModified))}},I=k[n].getSortedApps(),C=200*h>=p||m.length>=p;(0,l.useEffect)((()=>{r||(C?r&&i(!1):(!r&&i(!0),console.log("appsListPage",h),e(x({page:h})).then((()=>{i(!1)}))))}),[m,r,p]);const A=I.filter((e=>{if(!e||!e.appId)return;if(-1===e.title.toLowerCase().indexOf(t)&&-1===e.appId.toLowerCase().indexOf(t))return;let a=!1;return w.forEach((t=>{y.find((e=>e.id===t)).onlyRenderIf(e)&&(a=!0)})),a?e:void 0}));return l.createElement("section",{className:s},l.createElement("div",{className:"container"},l.createElement("div",{className:"row fa-3x"},ve.map(((e,t)=>l.createElement(ke,(0,c.Z)({key:t},e))))),l.createElement(M.Z,{m:8}),l.createElement(M.Z,{className:"row",display:"flex",flexDirection:"column"},l.createElement(_.ZP,{container:!0},(null==b?void 0:b.username)&&l.createElement(j.Z,{onClick:()=>{e(Z({dialog:"EDIT_APP",data:{}}))}},l.createElement(Q.G,{icon:ee.XSk})," New app"),l.createElement(O.Z,{variant:"h3"},"Filter apps"),l.createElement(M.Z,{flexGrow:1}),l.createElement(j.Z,{variant:"outlined",onClick:async()=>{const e=await fetch("https://luck.up.railway.app/apps/all"),t=await e.json(),a=JSON.stringify(t,null,2),l=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(l),o=document.createElement("a");o.href=n,o.download="lucky-patcher-app-compatibility.json",document.body.appendChild(o),o.click(),document.body.removeChild(o)},style:{marginRight:4}},l.createElement(Q.G,{icon:ee.q7m,size:"lg",opacity:.9,style:{marginRight:8}}),"JSON"),l.createElement(q.Z,{value:n,onChange:e=>o(e.target.value)},Object.entries(k).map((e=>l.createElement($.Z,{value:e[0],key:e[0]},e[1].title))))),l.createElement(z.Z,{placeholder:"Filter app title or ID",value:t,onChange:e=>a(e.currentTarget.value.toLowerCase())}),y.map((e=>{let{id:t,title:a}=e;return l.createElement(H.ZP,{key:t},l.createElement(Y.Z,{label:a,onClick:()=>v((0,te.xor)(w,[t])),icon:l.createElement(Q.G,{icon:-1!==w.indexOf(t)?ee.Mdf:ee.Aq,color:"#e51c23",size:"lg",opacity:.9})}))}))),l.createElement("div",{id:"apps"}),l.createElement(O.Z,null,`Loaded ${m.length} out of ${p} apps!`,r&&" Loading more...",l.createElement("br",null),l.createElement(B.Z,{onClick:()=>(e(f()),void clear())},l.createElement(Q.G,{icon:ee.QDM})),`Last refreshed: ${new Date(u).toLocaleString()}`),A.map((e=>l.createElement(xe,{app:e,key:e.appId})))))},xe=e=>{let{app:t}=e;const a=(0,U.Z)();if(!t||!t.appId)return;const{appId:n,features:o,dateModified:r,title:i,icon:c,installs:s,scoreText:p,url:d,genre:m,screenshots:u,free:h,priceText:f,editedBy:g}=t,{discordUser:b}=ie((e=>e.system)),E=re();(0,oe.oR)();return l.createElement(_.ZP,{item:!0,xs:12,m:1},l.createElement(K.Z,{style:{maxWidth:"100%"}},l.createElement(V.Z,{sx:{padding:"8px"}},l.createElement("a",{href:d},l.createElement(M.Z,{display:"flex",mt:1},l.createElement(W.Z,{src:c,variant:"square",sx:{marginRight:1}}),l.createElement(M.Z,{display:"flex",flexDirection:"column"},l.createElement(O.Z,null,i),l.createElement(O.Z,{variant:"subtitle2"},n)))),l.createElement(M.Z,{display:"flex",justifyContent:"space-between"},l.createElement(O.Z,{variant:"subtitle2"},"\u2b50",p),l.createElement(O.Z,{variant:"subtitle2"},"\ud83d\udce9 ",s)),l.createElement(M.Z,{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},l.createElement(O.Z,{variant:"subtitle2"},m),r&&l.createElement(O.Z,{variant:"subtitle2",whiteSpace:"nowrap"},"Entry last edited: ",new Date(r).toLocaleString()),g&&l.createElement(O.Z,{variant:"subtitle2",whiteSpace:"nowrap"},"Modified by: ",g.userName," (",g.userId,")")),!h&&l.createElement(O.Z,{variant:"subtitle2"},f),o&&o.map((e=>l.createElement(J.Z,{component:M.Z,elevation:0,padding:.5,sx:{backgroundColor:(0,le.Z)(e,a).color},key:e,mt:.5},l.createElement(O.Z,null,l.createElement(we,{skipHtml:!0,backgroundColor:(0,le.Z)(e,a).color,wrapperElement:{"data-color-mode":"light"},source:(0,le.Z)(e,a).label})))))),(null==b?void 0:b.username)&&l.createElement(B.Z,{onClick:()=>{E(Z({dialog:"EDIT_APP",data:{appId:n}}))}},l.createElement(Q.G,{icon:ee.IwR}))))},Pe=()=>{const{colorMode:e}=(0,ne.I)();return l.createElement(l.Fragment,null,l.createElement(oe.zt,{store:T},l.createElement(F.Z,{theme:(0,G.Z)({palette:{mode:e}})},l.createElement(Ie,null),l.createElement(ye,null))))},Ce="heroBanner_jHI5",Ae="buttons_Pntg";a(1332);function Se(){const{siteConfig:e}=(0,r.Z)();return l.createElement("header",{className:(0,n.Z)("hero hero--primary",Ce)},l.createElement("div",{className:"container"},l.createElement(Q.G,{icon:ee.eSc,size:"4x"}),l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement(M.Z,{className:Ae,flex:"1",flexDirection:"column"},l.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/lp-info"},"Important info about LP \ud83d\udca1"),l.createElement(M.Z,{m:1}),l.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"How to install & patch an app \ud83d\udcd6"),l.createElement(M.Z,{m:1}),l.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/favourites"},"Community Favourites \u2b50"),l.createElement(M.Z,{m:1}),l.createElement(o.Z,{className:"button button--secondary button--lg",to:"#apps"},"To the list \ud83d\ude80"))))}function De(){const{siteConfig:e}=(0,r.Z)();return l.createElement(i.Z,{title:`${e.title}`,description:"A full overview of Lucky Patcher Compatibility with various apps."},l.createElement(Se,null),l.createElement("main",null,l.createElement(Pe,null)))}a(3636).vc.autoAddCss=!1}}]);