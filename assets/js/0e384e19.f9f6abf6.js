"use strict";(self.webpackChunklp_compat=self.webpackChunklp_compat||[]).push([[671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Patching an app",l={unversionedId:"intro",id:"intro",title:"Patching an app",description:"Set up Lucky Patcher",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/lp-compat/docs/intro",draft:!1,editUrl:"https://github.com/Flixbox/lp-compat/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Lucky Patcher - Important information",permalink:"/lp-compat/docs/lp-info"}},p={},c=[{value:"Set up Lucky Patcher",id:"set-up-lucky-patcher",level:2},{value:"Create the modified APK file",id:"create-the-modified-apk-file",level:2},{value:"Reinstall the app",id:"reinstall-the-app",level:2},{value:"Cleanup",id:"cleanup",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"patching-an-app"},"Patching an app"),(0,r.kt)("h2",{id:"set-up-lucky-patcher"},"Set up Lucky Patcher"),(0,r.kt)("p",null,'Follow the tutorial on the official website. Make sure to give LP the "Draw over other apps" permission in the app\'s settings.'),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"/lp-compat/docs/lp-info"},"important info about LP")," section."),(0,r.kt)("h2",{id:"create-the-modified-apk-file"},"Create the modified APK file"),(0,r.kt)("p",null,"Follow these screenshots to create your modified APK file. Read any pop-ups you may come across and try to follow their advice, but don't worry too much about them."),(0,r.kt)("p",null,"First, open Lucky Patcher and tap the app you'd like to modify."),(0,r.kt)("p",null,'On this screen, tap the "APK with multi patch" option. We\'d like to apply two patch categories: The ad-free and the IAP patches.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3027).Z,width:"540",height:"1200"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3177).Z,width:"540",height:"1200"})),(0,r.kt)("p",null,"Apply some patches."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3914).Z,width:"540",height:"1200"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6013).Z,width:"540",height:"1200"})),(0,r.kt)("h2",{id:"reinstall-the-app"},"Reinstall the app"),(0,r.kt)("p",null,"If you reinstall (uninstall the original app and install the patched one) you will no longer be able to use Google features like Google Play sign-in in that app anymore. However, some patchable apps like Merge Dragons and City Island 5 feature Facebook sign-in, which will usually work."),(0,r.kt)("p",null,"Since Android will usually prevent us from installing the patched APK as an update, we'll have to reinstall the app."),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"You'll also be able to find the patched APK files in LP under the \"Rebuild & Install\" option in the menu. If you'd like to clean up some storage, remove these APK files manually."),(0,r.kt)("p",null,"You can also clean up all of your patched APK files at once. Go to your stock file manager (it needs elevated access, the stock file manager usually has elevated access), then go to this path:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/Android/data/ru.<random letters>.<random letters>/files/LuckyPatcher/Modified")),(0,r.kt)("p",null,"You can delete everything in this ",(0,r.kt)("inlineCode",{parentName:"p"},"Modified")," folder. It only contains your patched APKs and some metadata."))}u.isMDXComponent=!0},3914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ad_patches-7868e231ca5d1d343b88e9378d9a8034.jpg"},3027:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_modified_apk-ce294b3f390b9ebc58a0e3f6ee09ca91.jpg"},6013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iap_patches-f5b772900ac0f2d6007b66ecb9627e31.jpg"},3177:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rebuild_categories_selection-3c13e0e7eaf5c3fccdd053dd85d76690.jpg"}}]);