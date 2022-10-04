"use strict";(self.webpackChunklp_compat=self.webpackChunklp_compat||[]).push([[237],{6917:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Le});var l=a(7294),n=a(6010),o=a(9960),r=a(2263),i=a(1962),c=a(7462);const s="features_DHSf";var p=a(4623),d=a(4159),m=a(1927),u=a(9762),f=a(120),h=a(9630),g=a(9072),E=a(5084),b=a(3678),y=a(8763),Z=a(6866),w=a(3265),I=a(1448),v=a(562),x=a(2097),P=a(9837),k=a(1359),A=a(918),S=a(4731),C=a(7814),D=a(3024),L=a(9417),N=a(6486),T=a(9758);const M=function(e){return void 0===e&&(e=(0,u.Z)()),{iap:{label:"IAP patch works!",color:e.palette.success.main},"partial-iap":{label:"IAP partially compatible",color:e.palette.warning.main},"unclear-iap":{label:"IAP need verification - Try it out and post in Discord!",color:e.palette.warning.main},"no-iap":{label:"IAP incompatible",color:e.palette.error.main},subscription:{label:"Subscription redeemable!",color:e.palette.success.main},"no-subscription":{label:"Subscription cannot be redeemed",color:e.palette.warning.main},repurchase:{label:"Some IAPs need to be redeemed after every restart",color:e.palette.warning.main},"account-login":{label:"Account login works!",color:e.palette.info.main},"facebook-login":{label:"Facebook login works!",color:e.palette.info.main},"facebook-login-broken":{label:"Facebook login broken",color:e.palette.warning.main},"facebook-login-no-app-installed":{label:"Facebook app must not be installed to login",color:e.palette.warning.main},transfer:{label:"App data can be transferred to another account",color:e.palette.info.main},"transfer-steam":{label:"App data can be transferred to Steam",color:e.palette.info.main},"transfer-ios":{label:"App data can be transferred to iOS",color:e.palette.info.main},multiplayer:{label:"Full Multiplayer; IAP compatible",color:e.palette.primary.main},"partial-multiplayer":{label:"App has some multiplayer features; IAP compatible",color:e.palette.primary.main},"no-multiplayer":{label:"Singleplayer only",color:e.palette.warning.main},"no-multiplayer-iap":{label:"Multiplayer IAP broken",color:e.palette.warning.main},"slightly-broken":{label:"Slightly broken, but playable",color:e.palette.warning.main},"too-many-iap-break":{label:"Buying too many IAP will break the app!",color:e.palette.warning.main},"disable-data-on-lp-popup":{label:"Disable data connection when the LP purchase popup shows to get IAP",color:e.palette.info.main},"restore-purchase":{label:"IAP can be redeemed by restoring purchase and restarting the app",color:e.palette.info.main},"iap-before-load":{label:"Purchase IAP before the app is fully loaded. Play anonymously.",color:e.palette.info.main},"subscription-restore-purchase":{label:"Subscription can be redeemed by restoring purchase",color:e.palette.info.main},"dont-bother":{label:"Don't bother. This game is either grindy or uninteresting.",color:e.palette.warning.main},"region-locked":{label:"If region locked, use Google Account from another region",color:e.palette.warning.main},"patch-before-first-launch":{label:"Patch this game before launching it for the first time!",color:e.palette.warning.main},"special-patch-full-offline":{label:"Select patch option: Make fully offline",color:e.palette.info.main},"special-patch-signature":{label:"Select patch option: Signature verification killer",color:e.palette.info.main},"special-patch-lvl":{label:"Select patch option: Support patch for LVL and Inapp emulation",color:e.palette.info.main},"may-require-root":{label:"This app may require a root-level patch to work.",color:e.palette.info.main},"root-iap":{label:"IAP patch works with rooted device",color:e.palette.info.main},"root-patch":{label:"Root patch available",color:e.palette.info.main},"root-patch-iap":{label:"App requires root to make IAP patch work!",color:e.palette.info.main},"no-root-patch-iap":{label:"Root patch doesn't make IAP available",color:e.palette.info.main},"apk-platinmods":{label:"Patched APK download at PlatinMods",color:e.palette.info.main},"apk-apkpure":{label:"Download APK from APKPure, then patch",color:e.palette.info.main}}},F=function(e,t){void 0===t&&(t=(0,u.Z)());const a=M(t)[e.toLowerCase()]||{};if(e.indexOf("::")>-1){var l;const n=e.split("::");a.color=(null==(l=t.palette[n[0]])?void 0:l.main)||t.palette.info.main,a.label=n[1]}return a};var G=a(2949),R=a(9473);const O=R.I0,U=R.v9;var _=a(9498),q=a(9669);const z=a.n(q)().create({baseURL:"https://luck.up.railway.app/",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Max-Age":600},withCredentials:!0}),$={appsListUpdated:Date.now(),appsListPage:0,discordUser:void 0,discordGuilds:[],dialogs:{EDIT_APP:{open:!1}}},j=(0,_.PH)("clear"),H=(0,_.hg)("/discord/get",(async e=>{let{code:t}=e;return(await z.get(`discord/get/${t}`)).data})),Y=(0,_.oM)({name:"system",initialState:$,reducers:{setAppsListUpdated(e,t){e.appsListUpdated=t.payload},setAppsListPage(e,t){e.appsListPage=t.payload},openDialog(e,t){e.dialogs[t.payload.dialog]={open:!0,...t.payload.data}},closeDialog(e,t){e.dialogs[t.payload.dialog]={open:!1}}},extraReducers:e=>{e.addCase(j,((e,t)=>$)),e.addCase(H.fulfilled,((e,t)=>{e.discordUser=t.payload.user,e.discordGuilds=t.payload.guilds}))}}),{setAppsListUpdated:B,setAppsListPage:W,openDialog:K,closeDialog:V}=Y.actions,J=Y.reducer,Q=(0,_.hg)("apps/all",(async()=>(await z.get("/apps/all")).data)),X=(0,_.hg)("apps/get",(async e=>{let{appId:t}=e;return(await z.get(`apps/get/${t}`)).data})),ee=(0,_.hg)("apps/page",(async(e,t)=>{let{page:a}=e;const l=(await z.get(`apps/page/${a}/50`)).data;return t.dispatch(W(a+1)),l})),te=(0,_.hg)("apps/count",(async()=>(await z.get("apps/count")).data)),ae=(0,_.hg)("apps/add",(async e=>{let{app:t}=e;return(await z.post("apps/add/",t)).data})),le=(0,_.hg)("apps/edit",(async e=>{let{app:t}=e;return(await z.post("apps/edit/",t)).data})),ne=(0,_.hg)("playstore/get",(async e=>{let{appId:t}=e;return(await z.get(`/playstore/get/${t}`)).data})),oe=(0,_.hg)("playstore/search",(async e=>{let{query:t}=e;return(await z.get(`/playstore/search/${t}`)).data})),re=[],ie=(0,_.oM)({name:"apps",initialState:re,reducers:{},extraReducers:e=>{e.addCase(j,((e,t)=>re)),e.addCase(Q.fulfilled,((e,t)=>t.payload)),e.addCase(X.fulfilled,((e,t)=>{const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(ae.fulfilled,((e,t)=>{console.log("addapp result",t.payload);const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(le.fulfilled,((e,t)=>{console.log("editApp result",t.payload);const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(ee.fulfilled,((e,t)=>[...e,...t.payload]))}}).reducer;var ce=a(2595);const se={namespace:"flixbox",states:["apps","system.appsListPage","system.appsListUpdated","system.dialogs"]},pe=(0,_.xC)({reducer:{apps:ie,system:J},middleware:e=>e().concat((0,ce.a1)(se)),preloadedState:(0,ce.zD)(se)});var de=a(412),me=a(7971),ue=a(1470),fe=a(5050),he=a(784),ge=a(9604),Ee=a(3997),be=a(8377);const ye=e=>{let{editState:t,field:a,handleChange:n}=e;return l.createElement(me.Z,{label:a,value:t[a],onChange:e=>n(a,e.target.value)})},Ze=e=>{let{result:t,handleChange:a}=e;return l.createElement(l.Fragment,null,l.createElement(be.Z,{display:"flex"},l.createElement("img",{src:t.icon,width:"100",height:"100"}),l.createElement(E.Z,{onClick:()=>{a("appId",t.appId),a("title",t.title)}},"Use this app")),l.createElement(h.Z,null,"ID: ",t.appId," "),l.createElement(h.Z,null,"Title: ",t.title),+t.price&&l.createElement(h.Z,null,"Price: ",t.price),l.createElement(be.Z,{m:1}))},we=e=>{let{open:t,appId:a=""}=e;const n=O(),o=U((e=>e.apps.find((e=>e.appId===a))))||{appId:a};console.log("initialAppData",o);const[r,i]=(0,l.useState)({...o}),[s,p]=(0,l.useState)(!1),[d,m]=(0,l.useState)({}),[u,f]=(0,l.useState)([]),[g,b]=(0,l.useState)([]),y=(0,x.Z)(),Z=M(y);console.log("editState",r);const w=(e,t)=>{i((a=>({...a,[e]:t})))},P=()=>{i({}),n(V({dialog:"EDIT_APP"}))};(0,l.useEffect)((()=>{t&&i({...o})}),[t]),(0,l.useEffect)((()=>{n(ne({appId:r.appId})).then((e=>m(e.payload))),n(oe({query:r.title})).then((e=>f(e.payload))),n(oe({query:r.appId})).then((e=>b(e.payload)))}),[r.appId,r.title]);return l.createElement(ue.Z,{fullScreen:!0,open:t,onClose:P},t&&0!==Object.keys(r).length&&l.createElement(l.Fragment,null,l.createElement(fe.Z,{sx:{position:"relative"}},l.createElement(he.Z,null,l.createElement(v.Z,{edge:"start",color:"inherit",onClick:P,"aria-label":"close"},l.createElement(C.G,{icon:L.NBC})),l.createElement(h.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},"Add or edit app"),l.createElement(E.Z,{autoFocus:!0,color:"inherit",onClick:async()=>{let e=await n(ae({app:r}));"fulfilled"===e.meta.requestStatus?(console.log("addApp fulfilled"),P()):(e=await n(le({app:r})),"fulfilled"===e.meta.requestStatus?(console.log("editApp fulfilled"),P()):p(!0))}},"save"))),l.createElement(be.Z,{m:1}),l.createElement(h.Z,null,"After patching you may have to refresh the data (hit the refresh button under the filter section)."),s&&l.createElement(ge.Z,{severity:"error",onClose:()=>{p(!1)}},"That didn't work. Make sure you prefix any custom features with ::",l.createElement("br",null),"Does the app ",r.appId," exist on the Play Store?"),!(null!=d&&d.title)&&l.createElement(ge.Z,{severity:"info"},"Could not find an app with this ID.",l.createElement("br",null),"Does the app ",r.appId," exist on the Play Store?"),l.createElement(be.Z,{m:1}),l.createElement(ye,{field:"appId",editState:r,handleChange:w}),l.createElement(be.Z,{m:1}),(null==d?void 0:d.title)&&l.createElement(h.Z,null,`Searched app ID ${r.appId} and found app in play store with title ${d.title}`),l.createElement(be.Z,{m:1}),l.createElement(ye,{field:"title",editState:r,handleChange:w}),l.createElement(h.Z,null,"You can also use this title field to search for apps."),l.createElement(be.Z,{m:1}),l.createElement(h.Z,null,"You can select various pre-defined features from the list or add your own. ",l.createElement("br",null)," Please try to always at least choose one of iap, unclear-iap or no-iap so that users can filter the list. ",l.createElement("br",null),"You can add custom features by prefixing them with :: ",l.createElement("br",null),"Examples: ",l.createElement("br",null),"::Works with version 1.2.3 from APKPure ",l.createElement("br",null),"warning::Does not work with Android 12"),l.createElement(be.Z,{m:1}),l.createElement(Ee.Z,{multiple:!0,id:"tags-filled",options:Object.keys(Z).map((e=>e)),freeSolo:!0,value:r.features,onChange:(e,t)=>{console.log("onChange",t),w("features",t)},renderTags:(e,t)=>e.map(((e,a)=>l.createElement(I.Z,(0,c.Z)({variant:"outlined",label:e},t({index:a}))))),renderInput:e=>l.createElement(me.Z,(0,c.Z)({},e,{variant:"filled",label:"Features",placeholder:"Features"})),renderOption:(e,t)=>l.createElement(be.Z,(0,c.Z)({component:"li",flexDirection:"column"},e),l.createElement(h.Z,null,Z[t].label),l.createElement(h.Z,{variant:"caption"},t))}),l.createElement(be.Z,{m:1}),(null==u?void 0:u.length)>0&&l.createElement(l.Fragment,null,l.createElement(h.Z,null,"Search results by title:"),l.createElement(be.Z,{display:"flex",flexDirection:"column"},u.map((e=>l.createElement(Ze,{result:e,handleChange:w}))))),l.createElement(be.Z,{m:1}),(null==g?void 0:g.length)>0&&l.createElement(l.Fragment,null,l.createElement(h.Z,null,"Search results by ID:"),l.createElement(be.Z,{display:"flex",flexDirection:"column"},g.map((e=>l.createElement(Ze,{result:e,handleChange:w})))))))},Ie=()=>{const{dialogs:e}=U((e=>e.system));return l.createElement(l.Fragment,null,(null==e?void 0:e.EDIT_APP.open)&&l.createElement(we,null==e?void 0:e.EDIT_APP))},ve=[{icon:l.createElement(f.Z,{flex:"1"},l.createElement(f.Z,{className:"fa-layers fa-fw"},l.createElement(h.Z,{className:"fa-layers-text fa-inverse",color:"#607d8b",fontWeight:900,fontSize:30},"ROOT"),l.createElement(C.G,{icon:L.gPx,color:"#e51c23",size:"lg",opacity:.9}))),description:l.createElement(h.Z,null,'No root access is required for these patches, except for apps in the "Root" category.')},{icon:l.createElement(f.Z,{flex:"1"},l.createElement(f.Z,{className:"fa-layers fa-fw",mr:4},l.createElement(C.G,{icon:L.HCh,color:"#607d8b"}),l.createElement(C.G,{icon:L.gPx,color:"#e51c23",size:"lg",opacity:.9})),l.createElement(f.Z,{className:"fa-layers fa-fw",ml:4},l.createElement(C.G,{icon:L.vJI,color:"#607d8b"}),l.createElement(C.G,{icon:L.Vkm,color:"#e51c23",size:"xs",opacity:.9,transform:"down-4 right-8"}))),description:l.createElement(h.Z,null,"Apps are patched using"," ",l.createElement(o.Z,{href:"/docs/intro"},"the default IAP and Adblock patches"),".")},{icon:l.createElement(C.G,{icon:L.jMV,color:"#607d8b"}),description:l.createElement(h.Z,null,"Many apps work with LP, even if they're not on the list.",l.createElement("br",null),"Please try them yourself and report back!")},{icon:l.createElement(C.G,{icon:D.omb,color:"#607d8b"}),description:l.createElement(h.Z,null,"Found something? Create an"," ",l.createElement(o.Z,{href:"https://github.com/Flixbox/lp-compat/issues"},"issue")," or post on the ",l.createElement(o.Z,{href:"https://discord.gg/RS5ddYf7mw"},"Discord"),"!")},{icon:l.createElement(C.G,{icon:L.kWN,color:"#607d8b"}),description:l.createElement(h.Z,null,"Check out the"," ",l.createElement(o.Z,{href:"/docs/honorable-mentions"},"honorable mentions")," too!")}];function xe(e){let{icon:t,description:a}=e;return l.createElement("div",{className:(0,n.Z)("col col--4")},l.createElement(f.Z,{className:"text--center",height:"70px",mt:3},t),l.createElement("div",{className:"text--center padding-horiz--md"},a))}const Pe=()=>{const e=O(),[t,a]=(0,T.Yw)("","appsTitleFilter"),[n,o]=(0,T.Yw)("installs-asc","apps-sorting"),[r,i]=(0,l.useState)(!1),[p,d]=(0,l.useState)(0),m=U((e=>e.apps)),{appsListUpdated:u,appsListPage:x,discordUser:P}=U((e=>e.system));let k;if(de.Z.canUseDOM&&(k=new URLSearchParams(window.location.search).get("code")),P){document.getElementById("discord-login").innerHTML=P.username}(0,l.useEffect)((()=>{e(te()).then((e=>{d(e.payload)})),e(H({code:k}))}),[]);const A=[{id:"compatible",title:"Compatible apps",onlyRenderIf:e=>e&&e.features.indexOf("iap")>-1},{id:"unclear-iap",title:"Uncategorized",onlyRenderIf:e=>e&&-1===e.features.indexOf("iap")&&-1===e.features.indexOf("no-iap")},{id:"incompatible",title:"Incompatible apps",onlyRenderIf:e=>e&&e.features.indexOf("no-iap")>-1}],[S,D]=(0,T.Yw)(A.map((e=>e.id)),"onlyShowTheseVisibilitySettings");n||o("installs-asc");const M={"name-asc":{title:"Sort by name",getSortedApps:()=>[...m].sort(((e,t)=>e&&t&&e.title.localeCompare(t.title)))},"installs-asc":{title:"Sort by downloads",getSortedApps:()=>[...m].sort(((e,t)=>e&&t&&t.minInstalls-e.minInstalls))},"date-modified":{title:"Sort by last modified",getSortedApps:()=>[...m].sort(((e,t)=>e&&t&&t.dateModified-e.dateModified))}},F=M[n].getSortedApps(),G=50*x>=p||m.length>=p;return(0,l.useEffect)((()=>{r||(G?r&&i(!1):(!r&&i(!0),console.log("appsListPage",x),e(ee({page:x})).then((()=>{i(!1)}))))}),[m,r,p]),l.createElement("section",{className:s},l.createElement("div",{className:"container"},l.createElement("div",{className:"row fa-3x"},ve.map(((e,t)=>l.createElement(xe,(0,c.Z)({key:t},e))))),l.createElement(f.Z,{m:8}),l.createElement(f.Z,{className:"row",display:"flex",flexDirection:"column"},l.createElement(g.ZP,{container:!0},(null==P?void 0:P.username)&&l.createElement(E.Z,{onClick:()=>{e(K({dialog:"EDIT_APP",data:{}}))}},l.createElement(C.G,{icon:L.XSk})," New app"),l.createElement(h.Z,{variant:"h3"},"Filter apps"),l.createElement(f.Z,{flexGrow:1}),l.createElement(b.Z,{value:n,onChange:e=>o(e.target.value)},Object.entries(M).map((e=>l.createElement(y.Z,{value:e[0],key:e[0]},e[1].title))))),l.createElement(Z.Z,{placeholder:"Filter app title or ID",value:t,onChange:e=>a(e.currentTarget.value.toLowerCase())}),A.map((e=>{let{id:t,title:a}=e;return l.createElement(w.ZP,{key:t},l.createElement(I.Z,{label:a,onClick:()=>D((0,N.xor)(S,[t])),icon:l.createElement(C.G,{icon:-1!==S.indexOf(t)?L.Mdf:L.Aq,color:"#e51c23",size:"lg",opacity:.9})}))}))),l.createElement("div",{id:"apps"}),l.createElement(h.Z,null,`Loaded ${m.length} out of ${p} apps!`,r&&" Loading more...",l.createElement("br",null),!r&&G&&l.createElement(v.Z,{onClick:()=>(e(j()),void(0,ce.ZH)())},l.createElement(C.G,{icon:L.QDM})),`Last refreshed: ${new Date(u).toLocaleString()}`),F.map((e=>{if(!e||!e.appId)return;if(-1===e.title.toLowerCase().indexOf(t)&&-1===e.appId.toLowerCase().indexOf(t))return;let a=!1;return S.forEach((t=>{A.find((e=>e.id===t)).onlyRenderIf(e)&&(a=!0)})),a?l.createElement(ke,{app:e,key:e.appId}):void 0}))))},ke=e=>{let{app:t}=e;const a=(0,x.Z)();if(!t||!t.appId)return;const{appId:n,features:o,dateModified:r,title:i,icon:c,installs:s,scoreText:m,url:u,genre:E,screenshots:b,free:y,priceText:Z,editedBy:w}=t,{discordUser:I}=U((e=>e.system)),D=O();(0,R.oR)();return l.createElement(g.ZP,{item:!0,xs:12,m:1},l.createElement(d.Z,{defaultHeight:800,stayRendered:!0},l.createElement(P.Z,{style:{maxWidth:"100%"}},l.createElement("a",{href:u},l.createElement(k.Z,{sx:{padding:"8px"}},l.createElement(p.Z,{hideScrollbar:!1,style:{height:"200px"}},b.map((e=>l.createElement("img",{src:e,alt:"App screenshot",loading:"lazy",key:e})))),o&&o.map((e=>l.createElement(A.Z,{component:f.Z,elevation:0,padding:.5,sx:{backgroundColor:F(e,a).color},key:e,mt:.5},l.createElement(h.Z,{color:a.palette.getContrastText(F(e,a).color)},F(e,a).label)))),l.createElement(f.Z,{display:"flex",mt:1},l.createElement(S.Z,{src:c,variant:"square",sx:{marginRight:1}}),l.createElement(f.Z,{display:"flex",flexDirection:"column"},l.createElement(h.Z,null,i),l.createElement(h.Z,{variant:"subtitle2"},n))),l.createElement(f.Z,{display:"flex",justifyContent:"space-between"},l.createElement(h.Z,{variant:"subtitle2"},"\u2b50",m),l.createElement(h.Z,{variant:"subtitle2"},"\ud83d\udce9 ",s)),l.createElement(f.Z,{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},l.createElement(h.Z,{variant:"subtitle2"},E),r&&l.createElement(h.Z,{variant:"subtitle2",whiteSpace:"nowrap"},"Entry last edited: ",new Date(r).toLocaleString()),w&&l.createElement(h.Z,{variant:"subtitle2",whiteSpace:"nowrap"},"Modified by: ",w.userName," (",w.userId,")")),!y&&l.createElement(h.Z,{variant:"subtitle2"},Z))),(null==I?void 0:I.username)&&l.createElement(v.Z,{onClick:()=>{D(K({dialog:"EDIT_APP",data:{appId:n}}))}},l.createElement(C.G,{icon:L.IwR})))))},Ae=()=>{const{colorMode:e}=(0,G.I)();return l.createElement(l.Fragment,null,l.createElement(R.zt,{store:pe},l.createElement(m.Z,{theme:(0,u.Z)({palette:{mode:e}})},l.createElement(Pe,null),l.createElement(Ie,null))))},Se="heroBanner_jHI5",Ce="buttons_Pntg";a(8440);function De(){const{siteConfig:e}=(0,r.Z)();return l.createElement("header",{className:(0,n.Z)("hero hero--primary",Se)},l.createElement("div",{className:"container"},l.createElement(C.G,{icon:L.eSc,size:"4x"}),l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement(f.Z,{className:Ce,flex:"1",flexDirection:"column"},l.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/lp-info"},"Important info about LP \ud83d\udca1"),l.createElement(f.Z,{m:1}),l.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"How to install & patch an app \ud83d\udcd6"),l.createElement(f.Z,{m:1}),l.createElement(o.Z,{className:"button button--secondary button--lg",to:"#apps"},"To the list \ud83d\ude80"))))}function Le(){const{siteConfig:e}=(0,r.Z)();return l.createElement(i.Z,{title:`${e.title}`,description:"A full overview of Lucky Patcher Compatibility with various apps."},l.createElement(De,null),l.createElement("main",null,l.createElement(Ae,null)))}a(3636).vc.autoAddCss=!1}}]);