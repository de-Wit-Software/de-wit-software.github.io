(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753,36,187,134,213,706],{7061:function(e,l,t){Promise.resolve().then(t.bind(t,6862))},6463:function(e,l,t){"use strict";var s=t(1169);t.o(s,"usePathname")&&t.d(l,{usePathname:function(){return s.usePathname}})},5601:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(e,l){for(var t in l)Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}(l,{default:function(){return i},getImageProps:function(){return c}});let s=t(9920),n=t(497),a=t(8173),o=s._(t(1241));function c(e){let{props:l}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(l))void 0===t&&delete l[e];return{props:l}}let i=a.Image},6862:function(e,l,t){"use strict";t.d(l,{default:function(){return r}});var s=t(7437);function n(e){let l="inline-block outline-none cursor-pointer rounded leading-8 font-medium px-4 py-0.5 h-8 min-w-0 min-h-8 border-0 text-portfolio-bg bg-portfolio-accent transition duration-150 ease-in-out hover:bg-portfolio-accent-darker ".concat(e.selected?"bg-portfolio-accent-darker underline":""," ").concat(e.className||""),t="text-portfolio-accent group-hover:font-bold ".concat(e.selected?"underline font-bold":""," ").concat(e.className||""),n=e.newTab?"_blank":"";return(0,s.jsx)("a",{id:e.id||"",href:e.href,target:n,className:"flex flex-row items-center group",children:(0,s.jsx)("div",{className:e.textStyling?t:l,children:e.text})})}var a=t(6463),o=t(5601),c=t.n(o);function i(e){let l=e.path.includes("/en/")?"en":"nl",t="flex flex-row items-center ".concat(e.className),a=e.path.replace("/en/","/nl/"),o=e.path.replace("/nl/","/en/");return(0,s.jsxs)("div",{className:t,children:[(0,s.jsx)(n,{className:"text-2xl leading-10",newTab:!1,textStyling:!0,selected:"en"===l,href:o,text:"EN"}),(0,s.jsx)("div",{className:"text-2xl font-bold mx-2",children:"/"}),(0,s.jsx)(n,{className:"text-2xl leading-10",newTab:!1,textStyling:!0,selected:"nl"===l,href:a,text:"NL"})]})}function r(e){let{children:l,appState:t}=e,o=(0,a.usePathname)(),r=o.includes("/en/")?"en":"nl",d={projects:"/".concat(r,"/projects"),about:"/".concat(r,"/about"),contact:"/".concat(r,"/contact"),skills:"/".concat(r,"/skills"),downloads:"/".concat(r,"/downloads"),termsAndConditions:"/".concat(r,"/terms-and-conditions")},x=new Date().getFullYear();return(0,s.jsxs)("div",{className:"h-full w-full",children:[(0,s.jsxs)("div",{className:"h-full w-full border-0 sm:border-[32px] border-portfolio-bg overflow-hidden flex bg-portfolio-bg relative",lang:t.language,children:[(0,s.jsx)(c(),{src:"/corner.svg",alt:"background image",width:"800",height:"800",className:"absolute flex opacity-50 justify-end z-0 bottom-0 flex overflow-hidden left-[670px] 2xl:left-auto right-auto 2xl:right-0"}),(0,s.jsx)("div",{className:"p-4 sm:p-8 w-full flex flex-col items-center border-portfolio-accent border relative bg-portfolio-specs overflow-y-auto scroll-smooth scrollbar scrollbar-thumb-portfolio-accent scrollbar-track-portfolio-bg",children:(0,s.jsxs)("div",{className:"max-w-7xl w-full flex flex-col 2xl:mr-16 relative z-20",children:[(0,s.jsx)(i,{className:"md:absolute mb-8 md:mb-0 right-0",path:o}),(0,s.jsxs)("div",{className:"flex flex-row items-center",children:[(0,s.jsx)("div",{className:"lg:w-44",children:(0,s.jsx)("div",{className:"max-w-28 lg:max-w-36 hidden sm:block rounded-full border-portfolio-accent border overflow-hidden",children:(0,s.jsx)(c(),{unoptimized:!0,src:"/profile.webp",alt:"profile image",width:"200",height:"200",className:"object-contain"})})}),(0,s.jsxs)("div",{className:"flex flex-col sm:ml-16",children:[(0,s.jsx)("div",{className:"text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-nowrap",children:t.labels.header.title}),(0,s.jsx)("div",{className:"text-lg md:text-xl lg:text-3xl",children:t.labels.header.subtitle})]})]}),(0,s.jsxs)("div",{className:"mt-8 flex flex-col lg:flex-row",children:[(0,s.jsxs)("div",{className:"flex flex-col hidden lg:block w-44 min-w-44",children:[(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:o.includes("/projects"),href:d.projects,text:t.labels.menu.projects}),(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:o.includes("/about"),href:d.about,text:t.labels.menu.about}),(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:o.includes("/contact"),href:d.contact,text:t.labels.menu.contact}),(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:o.includes("/skills"),href:d.skills,text:t.labels.menu.skills}),(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10",newTab:!1,selected:o.includes("/downloads"),href:d.downloads,text:t.labels.menu.downloads})]}),(0,s.jsxs)("div",{className:"flex flex-row block lg:hidden mb-8 flex-wrap",children:[(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4 mr-6",newTab:!1,selected:o.includes("/projects"),href:d.projects,text:t.labels.menu.projects}),(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4 mr-6",newTab:!1,selected:o.includes("/about"),href:d.about,text:t.labels.menu.about}),(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4 mr-6",newTab:!1,selected:o.includes("/contact"),href:d.contact,text:t.labels.menu.contact}),(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4 mr-6",newTab:!1,selected:o.includes("/skills"),href:d.skills,text:t.labels.menu.skills}),(0,s.jsx)(n,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:o.includes("/export"),href:d.downloads,text:t.labels.menu.downloads})]}),(0,s.jsx)("div",{className:"lg:ml-16 max-w-5xl w-full",children:l})]})]})})]}),(0,s.jsxs)("div",{className:"hidden sm:flex text-sm absolute bottom-0 left-0 w-full h-[32px] text-center justify-center items-center",children:[(0,s.jsx)("div",{children:t.labels.footer.text.replace("~YEAR~","".concat(x))}),(0,s.jsx)("div",{className:"hidden md:flex ml-2",children:t.labels.footer.textAdditional}),(0,s.jsx)(n,{className:"ml-2 text-sm",newTab:!1,textStyling:!0,selected:!1,href:d.termsAndConditions,text:t.labels.footer.termsAndConditions})]})]})}}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=7061)}),_N_E=e.O()}]);