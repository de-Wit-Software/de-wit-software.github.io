(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[354,428],{3147:function(e,t,l){Promise.resolve().then(l.bind(l,2869)),Promise.resolve().then(l.bind(l,1159))},2869:function(e,t,l){"use strict";l.d(t,{default:function(){return c}});var n=l(7437),a=l(6463),s=l(2265);function c(e){let t=(0,a.usePathname)();function l(){let t=function(e,t,l){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=t.getTime()-e.getTime(),s=Math.floor(a/31556926080.000004),c=Math.floor((a-=31556926080.000004*s)/2629743840.0000005),o=Math.floor((a-=2629743840.0000005*c)/864e5),i=Math.floor((a-=864e5*o)/36e5),r=Math.floor((a-=36e5*i)/6e4);if(a-=6e4*r,!n)return"".concat(s," ").concat(1===s?l.time.year:l.time.years,", ").concat(c," ").concat(1===c?l.time.month:l.time.months,", ").concat(o," ").concat(1===o?l.time.day:l.time.days,", ").concat(i," ").concat(1===i?l.time.hour:l.time.hours," ").concat(l.and," ").concat(r," ").concat(1===r?l.time.minute:l.time.minutes);{o>15&&(c+=1);let e=0!==s?"".concat(s," ").concat(1===s?l.time.year:l.time.years,", "):"";return"".concat(e).concat(c," ").concat(1===c?l.time.month:l.time.months)}}(new Date("Mon Jul 31 2017 22:00:00 GMT+0000"),new Date,e.appState.labels);document.getElementById("time").innerHTML=t}return(0,s.useEffect)(()=>{let e=setInterval(l,3e4);return l(),function(){let e=t.includes("/en/")?"en":"nl";document.getElementById("CTA").setAttribute("href","/".concat(e,"/projects"))}(),()=>{clearInterval(e)}}),(0,n.jsx)(n.Fragment,{})}},1159:function(e,t,l){"use strict";l.d(t,{default:function(){return i}});var n=l(7437);function a(e){let t="inline-block outline-none cursor-pointer rounded leading-8 font-medium px-4 py-0.5 h-8 min-w-0 min-h-8 border-0 text-portfolio-bg bg-portfolio-accent transition duration-150 ease-in-out hover:bg-portfolio-accent-darker ".concat(e.selected?"bg-portfolio-accent-darker underline":""," ").concat(e.className||""),l="text-portfolio-accent group-hover:font-bold ".concat(e.selected?"underline font-bold":""," ").concat(e.className||""),a=e.newTab?"_blank":"";return(0,n.jsx)("a",{id:e.id||"",href:e.href,target:a,className:"flex flex-row items-center group",children:(0,n.jsx)("div",{className:e.textStyling?l:t,children:e.text})})}var s=l(6463),c=l(6648);function o(e){let t=e.path.includes("/en/")?"en":"nl",l="flex flex-row items-center ".concat(e.className),s=e.path.replace("/en/","/nl/"),c=e.path.replace("/nl/","/en/");return(0,n.jsxs)("div",{className:l,children:[(0,n.jsx)(a,{className:"text-2xl leading-10",newTab:!1,textStyling:!0,selected:"en"===t,href:c,text:"EN"}),(0,n.jsx)("div",{className:"text-2xl font-bold mx-2",children:"/"}),(0,n.jsx)(a,{className:"text-2xl leading-10",newTab:!1,textStyling:!0,selected:"nl"===t,href:s,text:"NL"})]})}function i(e){let{children:t,appState:l}=e,i=(0,s.usePathname)(),r=i.includes("/en/")?"en":"nl",d={projects:"/".concat(r,"/projects"),about:"/".concat(r,"/about"),contact:"/".concat(r,"/contact"),skills:"/".concat(r,"/skills"),downloads:"/".concat(r,"/downloads")};return(0,n.jsxs)("div",{className:"h-full w-full border-0 sm:border-[32px] border-portfolio-bg overflow-hidden flex bg-portfolio-bg relative",lang:l.language,children:[(0,n.jsx)(c.default,{src:"/corner.svg",alt:"background image",width:"800",height:"800",className:"absolute flex opacity-50 justify-end z-0 bottom-0 flex overflow-hidden left-[670px] 2xl:left-auto right-auto 2xl:right-0"}),(0,n.jsx)("div",{className:"p-4 sm:p-8 w-full flex flex-col items-center border-portfolio-accent border relative bg-portfolio-specs overflow-y-auto scroll-smooth scrollbar scrollbar-thumb-portfolio-accent scrollbar-track-portfolio-bg",children:(0,n.jsxs)("div",{className:"max-w-7xl w-full flex flex-col 2xl:mr-16 relative z-20",children:[(0,n.jsx)(o,{className:"md:absolute mb-8 md:mb-0 right-0",path:i}),(0,n.jsxs)("div",{className:"flex flex-row items-center",children:[(0,n.jsx)("div",{className:"lg:w-44",children:(0,n.jsx)("div",{className:"max-w-28 lg:max-w-36 hidden sm:block rounded-full border-portfolio-accent border overflow-hidden",children:(0,n.jsx)(c.default,{unoptimized:!0,src:"/profile.webp",alt:"profile image",width:"200",height:"200",className:"object-contain"})})}),(0,n.jsxs)("div",{className:"flex flex-col sm:ml-16",children:[(0,n.jsx)("div",{className:"text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-nowrap",children:l.labels.header.title}),(0,n.jsx)("div",{className:"text-lg md:text-xl lg:text-3xl",children:l.labels.header.subtitle})]})]}),(0,n.jsxs)("div",{className:"mt-8 flex flex-col lg:flex-row",children:[(0,n.jsxs)("div",{className:"flex flex-col hidden lg:block w-44 min-w-44",children:[(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:i.includes("/projects"),href:d.projects,text:l.labels.menu.projects}),(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:i.includes("/about"),href:d.about,text:l.labels.menu.about}),(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:i.includes("/contact"),href:d.contact,text:l.labels.menu.contact}),(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:i.includes("/skills"),href:d.skills,text:l.labels.menu.skills}),(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10",newTab:!1,selected:i.includes("/downloads"),href:d.downloads,text:l.labels.menu.downloads})]}),(0,n.jsxs)("div",{className:"flex flex-row block lg:hidden mb-8 flex-wrap",children:[(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4 mr-6",newTab:!1,selected:i.includes("/projects"),href:d.projects,text:l.labels.menu.projects}),(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4 mr-6",newTab:!1,selected:i.includes("/about"),href:d.about,text:l.labels.menu.about}),(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4 mr-6",newTab:!1,selected:i.includes("/contact"),href:d.contact,text:l.labels.menu.contact}),(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4 mr-6",newTab:!1,selected:i.includes("/skills"),href:d.skills,text:l.labels.menu.skills}),(0,n.jsx)(a,{className:"text-2xl min-w-[170px] leading-10 mb-4",newTab:!1,selected:i.includes("/export"),href:d.downloads,text:l.labels.menu.downloads})]}),(0,n.jsx)("div",{className:"lg:ml-16 max-w-5xl w-full",children:t})]})]})})]})}}},function(e){e.O(0,[595,971,23,744],function(){return e(e.s=3147)}),_N_E=e.O()}]);