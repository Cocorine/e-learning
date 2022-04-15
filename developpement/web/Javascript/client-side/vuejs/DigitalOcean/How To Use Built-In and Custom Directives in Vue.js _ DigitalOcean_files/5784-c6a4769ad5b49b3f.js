"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5784,7131],{7131:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var o=n(67294),r=n(27812),i=n(50029),a=n(87794),l=n.n(a),c=function(e,t,n){var o=document.createElement("textarea");o.value=e,o.style.top="0",o.style.left="0",o.style.position="fixed",document.body.appendChild(o),o.focus({preventScroll:!0}),o.select();try{return document.execCommand("copy")?t():n()}catch(r){return n(r)}finally{document.body.removeChild(o)}},d=function(){var e=(0,i.Z)(l().mark((function e(t,n,o){var r,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(r=navigator)||void 0===r||null===(i=r.clipboard)||void 0===i||!i.writeText){e.next=6;break}return e.next=3,navigator.clipboard.writeText(t).then((function(){return!0}),(function(){return!1}));case 3:if(!e.sent){e.next=6;break}return e.abrupt("return",n());case 6:return e.abrupt("return",c(t,n,o));case 7:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),s=function(e,t){e.textContent=t,setTimeout((function(){e.textContent="Copy"}),5e3)},u=[function(e){var t=e.code,n=e.element,o=document.createElement("button");return o.textContent="Copy",o.addEventListener("click",(function(){d(t,(function(){s(o,"Copied!")}),(function(){var e,t;s(o,"Press ".concat((null===(e=navigator)||void 0===e||null===(t=e.platform)||void 0===t?void 0:t.includes("Mac"))?"Cmd":"Ctrl","+C to copy")),window.getSelection().selectAllChildren(n)}))})),o},function(e){var t=e.code,n=e.language;if("bash"!==n&&"shell"!==n)return null;var o=document&&document.querySelector('button[data-js="terminal"]');if(!o)return null;var r=document.createElement("button");return r.textContent="Run",r.addEventListener("click",(function(){o.dispatchEvent(new CustomEvent("run",{detail:"".concat(t,"\n")}))})),r}],p=function(e){var t=e.parentElement;if(!t.parentElement.classList.contains("code-toolbar")){var n=document.createElement("div");n.classList.add("code-toolbar"),t.parentElement.insertBefore(n,t),n.appendChild(t);var o=document.createElement("div");o.classList.add("toolbar"),n.appendChild(o);var i=Object.freeze({code:e.textContent.trim(),language:((0,r.Z)(t.classList).find((function(e){return e.startsWith("language-")}))||"language-none").slice(9),element:e});u.forEach((function(e){var t=e(i);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),o.appendChild(n)}}))}},g=n(22578),m=n(17534),f=n(88134),b=n(87288),h=n(186),x=f.ZP.white,y=f.ZP.grayDarker,v=f.ZP.gray2,k=f.ZP.gray8,w=f.ZP.grayLighter,Z=f.ZP.blue2,P=f.ZP.blueRaspberry,j=function(e,t){return(0,h.iv)(["background:",";color:",";code{color:",";}&.prefixed{code{ol{li{&::before{color:",";}}}}&.line_numbers{code{ol{li{&::before{border-right-color:",";}}}}}}"],e,t,t,t,(0,f.E9)(t,.5))},S=function(e){return(0,h.iv)(["&.language-css,&.style{.token{&.string{color:",";}}}.token{&.punctuation{color:",";}&.operator,&.entity,&.url{color:",";}}"],e,e,e)},C=function(e){return(0,h.iv)([".token{&.comment,&.prolog,&.doctype,&.cdata{color:",";}}"],e)},_=function(e){return(0,h.iv)([".token{&.atrule,&.property,&.tag,&.constant,&.symbol,&.deleted,&.selector,&.char,&.builtin,&.keyword,&.inserted,&.delimiter{color:",";}}"],e)},E=function(e){return(0,h.iv)([".token{&.boolean,&.attr-name,&.color,&.string,&.variable{color:",";}}"],e)},z=function(e){return(0,h.iv)([".token{&.attr-value,&.function,&.class-name{color:",";}}"],e)},L=function(e){return(0,h.iv)([".token{&.regex,&.number,&.important{color:",";}}"],e)},I=h.ZP.div.withConfig({displayName:"MarkdownStyles__StyledMarkdown",componentId:"sc-bjjo5d-0"})(["color:",";font-size:16px;h1,h2,h3,h4,h5,h6,p{margin:1em 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}p{line-height:1.5;","{code{word-break:break-all;}}}ol,ul{list-style:disc;margin-bottom:1.7em;padding-left:2.5em;","{padding-left:0;}}ol{list-style:decimal;}a{border-bottom:1px solid ",";color:",";text-decoration:none;transition:color 0.25s,border-bottom-color 0.25s;&:hover,&:focus{border-bottom-color:",";color:",";}code{position:relative;z-index:-1;}}blockquote{border-left:4px solid ",";color:",";display:block;font-size:18px;margin:0 0 1.25em 1.25em;padding:0 0 0 1.5em;a{border-bottom:1px dotted ",";color:",";}}mark{background:",";border-radius:8px;color:inherit;display:inline;line-height:calc(1.4em + 1px);padding:0 2px;mark{background:none;border-radius:initial;line-height:1.4em;padding:initial;}}.code-label{background-color:",";border-radius:16px 16px 0 0;color:",";display:block;font-size:14px;margin:1em 0 0;padding:0.5em 1em;position:relative;text-align:center;z-index:2;+ pre{border-radius:0 0 16px 16px;margin:0 0 1em;}+ .code-toolbar{margin:0 0 1em;pre{border-radius:0 0 16px 16px;}}}pre,code{background-color:",";border-radius:8px;color:",";font-family:",";font-size:14px;line-height:1.4em;padding:3px;}pre{background-color:",";border-radius:16px;color:",";display:block;margin:1em 0;overflow:auto;overflow-wrap:normal;padding:1em;white-space:normal;word-wrap:normal;code{background:0;border-radius:0;color:inherit;padding:0;white-space:pre;.secondary-code-label{color:",";margin:0 0 4px;}}&.prefixed{code{white-space:normal;ol{list-style:none;margin:0;padding:0;li{margin:0;padding:0;white-space:pre;&::before{content:attr(data-prefix);display:inline-block;margin:0 10px 0 5px;text-align:right;user-select:none;}}}}&.line_numbers{code{ol{li{margin:0 0 0 -5px;&::before{border-right:1px solid ",";padding-right:5px;}}}}}}&[class*='language-']{"," > code{background:transparent;"," "," "," "," "," "," &,.token{text-shadow:none;}&.language-css,&.style{.token{&.string{background:none;}}}.token{background:none;border-radius:0;display:inline;font-weight:normal;margin:0;padding:0;&.namespace{opacity:0.7;}&.operator,&.entity,&.url{background:none;}&.important,&.bold{font-weight:bold;}&.italic{font-style:italic;}}}}&.environment-local,&.environment-second,&.environment-third,&.environment-fourth,&.environment-fifth{> code{"," "," "," "," "," ","}.secondary-code-label{color:",";}}&.environment-local{","}&.environment-second{","}&.environment-third{","}&.environment-fourth{","}&.environment-fifth{","}}.code-toolbar{margin:1em 0;position:relative;> pre{margin:0;}> .toolbar{position:absolute;right:0.2em;top:0.3em;> .toolbar-item{display:inline-block;> a{text-decoration:none;}> button{background:none;border:0;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;user-select:none;}> a,> button{background:",";border-radius:8px;cursor:pointer;height:24px;padding:0 8px;transition:color 0.25s,background 0.25s;width:auto;&:hover,&:focus{background:",";color:",";span{color:",";}}}> a,> button,> span{color:",";font-size:0.9em;margin:0.5em;padding:0.1em 8px;}}}}.note,.warning,.info,.draft{border-radius:16px;display:block;font-size:15px;line-height:1.5em;margin:0 0 1.5em;padding:1em 1.25em;>:first-child{margin-top:0;}>:last-child{margin-bottom:0;}.callout-label{background:",";border-radius:16px 16px 0 0;font-size:15px;margin:-1em -1.25em 0;padding:0.75em 1.25em;text-align:center;}}.note{background-color:",";color:",";}.warning{background-color:#fedee1;}.info{background-color:#f3f5f9;color:",";}.draft{background-color:#14c07b;color:",";}.youtube{display:block;margin:1em auto;}img{border:solid 2px ",";display:block;margin:1em auto;max-width:100%;}"],f.ZP.gray4,(0,m.X)(m.A.phone),(0,m.X)(m.A.tablet),f.ZP.blue2,f.ZP.blue2,f.ZP.blue,f.ZP.blue,(0,f.E9)(f.ZP.black,.1),(0,f.E9)(f.ZP.black,.5),(0,f.E9)(f.ZP.black,.5),(0,f.E9)(f.ZP.black,.5),(0,f.E9)(f.ZP.yellow,.35),f.ZP.grayLight,f.ZP.grayDarkest,f.ZP.grayLighter,f.ZP.grayDarker,(0,b.Z)("code"),f.ZP.gray2,f.ZP.white,f.ZP.blueRaspberry,(0,f.E9)(x,.5),j(v,x),S(w),C("#bdbdbd"),_("#3a8bff"),E("#29e3ab"),z("#ff4084"),L(P),S("#666a71"),C("#808591"),_(Z),E("#08966b"),z("#e0276a"),L("#225196"),f.ZP.gray2,j(k,y),j("#d7f5ff","#00546f"),j("#fff2f5","#86003f"),j("#e4fff5","#00530a"),j("#f9f1ff","#003e3b"),f.ZP.white,f.ZP.blue3,f.ZP.blueDarker,f.ZP.white,f.ZP.gray3,(0,f.E9)(f.ZP.black,.1),f.ZP.green5,f.ZP.black,f.ZP.blueDark,f.ZP.grayDarkest,f.ZP.grayLight),H=n(85893),O=function(e){var t=e.content,n=e.allowHtml,r=e.allowRsvp,i=e.allowTerminal,a=e.onRender,l=e.initial,c=(0,o.useMemo)((function(){return(0,g.Z)(t,n,r,i)}),[t,n,r,i]),d=(0,o.useState)(null!==l&&void 0!==l?l:c.result)[0],s=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e=document.createRange().createContextualFragment(c.result);s.current.innerHTML="",s.current.appendChild(e),window.requestAnimationFrame((function(){var e;null===s||void 0===s||null===(e=s.current)||void 0===e||e.querySelectorAll('[class*="language-"] code').forEach(p)})),"function"===typeof a&&a(c,s.current)}),[c,a]),(0,H.jsx)(I,{ref:s,dangerouslySetInnerHTML:{__html:d}})},M=O;O.defaultProps={allowHtml:!1,allowRsvp:!1,allowTerminal:!1,onRender:null,initial:null}},77726:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(59499),r=n(4730),i=n(25935),a=n(186).ZP.label.withConfig({displayName:"LabelStyles__StyledLabel",componentId:"sc-1f08lap-0"})(["color:#031b4e;display:block;font-size:18px;font-weight:500;margin:0 0 8px;> sup{color:#031b48;font-size:0.7em;font-weight:300;left:0.25em;position:relative;top:0.1em;vertical-align:super;}> span{color:#5b6987;display:block;font-size:0.9em;font-weight:400;}"]),l=n(85893),c=["label","sup","desc"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.label,n=e.sup,o=e.desc,d=(0,r.Z)(e,c);return(0,l.jsxs)(a,s(s({},d),{},{children:[t,n&&(0,l.jsx)("sup",{children:n}),o&&(0,l.jsx)("span",{children:"string"===typeof o?(0,i.ZP)(o):o})]}))},p=u;u.defaultProps={sup:"",desc:""}},78788:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(186),r=o.ZP.div.withConfig({displayName:"LengthCounterStyles__StyledLengthCounterBadge",componentId:"sc-oneaxh-0"})(["align-self:flex-end;background:#0069ff;border-radius:3px;color:#fff;font-size:13px;font-variant-numeric:tabular-nums;font-weight:700;margin:auto 0 auto auto;padding:4px 8px;transition:background-color 0.2s;&.is-warning{background:#ff8940;}&.is-danger{background:#f84040;}"]),i=o.ZP.div.withConfig({displayName:"LengthCounterStyles__StyledLengthCounterWrapper",componentId:"sc-oneaxh-1"})(["display:flex;>:not(","){flex-grow:1;&:last-of-type{margin-right:8px;}}"],r),a=n(85893),l=function(e){var t=e.value,n=e.max,o=e.min,l=e.children,c=t.length>=n||t.length<o?"is-danger":t.length>=.8*n?"is-warning":"";return(0,a.jsxs)(i,{children:[l,(0,a.jsx)(r,{className:c,children:"".concat(t.length.toLocaleString(),"/").concat(n.toLocaleString())})]})},c=l;l.defaultProps={children:null,max:1/0,min:0}},95784:function(e,t,n){n.d(t,{Z:function(){return F}});var o=n(67294),r=n(46433),i=n(87335),a=n(54712),l=n(59572),c=n(39130),d=n(34588),s=n(60357),u=n(73973),p=n(25471),g=n(52006),m=n(32655),f=n(12590),b=n(36103),h=n(93463),x=n(68801),y=n(78788),v=n(7131),k=n(17534),w=n(88134),Z=n(87288),P=n(186),j=n(90352),S=P.ZP.div.withConfig({displayName:"MarkdownStyles__StyledContainer",componentId:"sc-1ece7am-0"})(["border:1px solid ",";border-radius:24px;margin:8px 0;"],w.ZP.grayLight),C=(0,P.iv)(["display:flex;flex-wrap:wrap;> *{margin:auto 0.1em;padding:0.25em;}"]),_=P.ZP.div.withConfig({displayName:"MarkdownStyles__StyledActions",componentId:"sc-1ece7am-1"})(["background:",";border-bottom:1px solid ",";border-radius:24px 24px 0 0 !important;",";padding:10px;"],w.ZP.white,w.ZP.grayLight,C),E=P.ZP.div.withConfig({displayName:"MarkdownStyles__StyledActionsRight",componentId:"sc-1ece7am-2"})(["margin:0 0 0 auto;",";> *{margin:auto 0.25em;}"],C),z=(0,P.iv)(["background:none;border:none;color:",";cursor:pointer;line-height:1;transition:color 0.3s ease;&:hover{color:",";}"],w.ZP.gray4,w.ZP.blueLight),L=P.ZP.button.withConfig({displayName:"MarkdownStyles__StyledActionButton",componentId:"sc-1ece7am-3"})(["",";"],z),I=(0,P.ZP)(j.Z).withConfig({displayName:"MarkdownStyles__StyledActionLink",componentId:"sc-1ece7am-4"})(["",";"],z),H=P.ZP.span.withConfig({displayName:"MarkdownStyles__StyledActionIconHeading",componentId:"sc-1ece7am-5"})(["display:inline-block;font-weight:500;height:20px;letter-spacing:-0.05em;width:20px;&::before{content:'H';font-size:1.1em;}&::after{content:'","';font-size:0.9em;position:relative;top:0.15em;}"],(function(e){return e.level})),O=P.ZP.span.withConfig({displayName:"MarkdownStyles__StyledActionIconQuote",componentId:"sc-1ece7am-6"})(["display:inline-block;font-size:2em;font-weight:300;height:20px;letter-spacing:-0.075em;line-height:0;width:20px;&::before{content:'\\201C';left:-0.05em;position:relative;top:0.45em;}&::after{content:'\\201D';left:-0.05em;position:relative;top:0.65em;}"]),M=P.ZP.span.withConfig({displayName:"MarkdownStyles__StyledActionIconOrderedList",componentId:"sc-1ece7am-7"})(["display:inline-block;height:20px;width:20px;&::before{content:'1.';font-size:1.1em;font-weight:400;}"]),N=(0,P.iv)(["> *{","{flex:0 0 50%;max-width:calc(50% - 16px);}&:not(:last-child){border-right:1px solid "," !important;","{border-bottom:1px solid "," !important;border-right:none !important;}}}"],(0,k.X)(k.A.tablet-1,"min"),w.ZP.grayLight,(0,k.X)(k.A.tablet),w.ZP.grayLight),A=P.ZP.div.withConfig({displayName:"MarkdownStyles__StyledPreview",componentId:"sc-1ece7am-8"})([""]),R=P.ZP.textarea.withConfig({displayName:"MarkdownStyles__StyledTextarea",componentId:"sc-1ece7am-9"})(["border-radius:0 0 24px 24px!important;font-family:",";padding:16px !important;&:disabled{background:",";}"],(0,Z.Z)("code"),w.ZP.gray9),B=P.ZP.div.withConfig({displayName:"MarkdownStyles__StyledWrapper",componentId:"sc-1ece7am-10"})(["display:flex;margin:-8px;","{flex-direction:column;}> *{flex:0 0 100%;margin:8px;max-width:calc(100% - 16px);}"," ","{","}"],(0,k.X)(k.A.tablet),(function(e){return e.sideBySide&&N||""}),A,(function(e){return e.sideBySide?"":"padding: 16px;"})),D=n(85893),T=[{icon:(0,D.jsx)(r.Z,{size:20}),title:"Bold",action:function(e){return{text:"**".concat(e,"**"),cursor:{start:2,end:e.length+2}}}},{icon:(0,D.jsx)(i.Z,{size:20}),title:"Italic",action:function(e){return{text:"_".concat(e,"_"),cursor:{start:1,end:e.length+1}}}},{icon:(0,D.jsx)(a.Z,{size:20}),title:"Underline",action:function(e){return{text:"__".concat(e,"__"),cursor:{start:2,end:e.length+2}}}},{icon:(0,D.jsx)(l.Z,{size:20}),title:"Strikethrough",action:function(e){return{text:"~~".concat(e,"~~"),cursor:{start:2,end:e.length+2}}}},{icon:(0,D.jsx)(c.Z,{size:20}),title:"Link",action:function(e){return{text:"[".concat(e,"](https://example.com)"),cursor:{start:1,end:e.length+1}}}},{icon:(0,D.jsx)(d.Z,{size:20}),title:"Highlight",action:function(e){return{text:"<^>".concat(e,"<^>"),cursor:{start:3,end:e.length+3}}}},{icon:(0,D.jsx)(H,{level:"1"}),title:"Heading 1",action:function(e){return{text:"# ".concat(e),cursor:{start:2,end:e.length+2},block:!0}}},{icon:(0,D.jsx)(H,{level:"2"}),title:"Heading 2",action:function(e){return{text:"## ".concat(e),cursor:{start:5,end:e.length+5},block:!0}}},{icon:(0,D.jsx)(H,{level:"3"}),title:"Heading 3",action:function(e){return{text:"### ".concat(e),cursor:{start:6,end:e.length+6},block:!0}}},{icon:(0,D.jsx)(s.Z,{size:20}),title:"Unordered list",action:function(e){return{text:"* ".concat(e||"Item\n* Item"),cursor:{start:2,end:e.length+2},block:!0}}},{icon:(0,D.jsx)(M,{}),title:"Ordered list",action:function(e){return{text:"1. ".concat(e||"Item\n2. Item"),cursor:{start:3,end:e.length+3},block:!0}}},{icon:(0,D.jsx)(O,{}),title:"Quote",action:function(e){return{text:e.split("\n").map((function(e){return"> ".concat(e)})).join("\n"),cursor:{start:2,end:e.length+2},block:!0}}},{icon:(0,D.jsx)(u.Z,{size:20}),title:"Callout",action:function(e){var t=e||"Important information!";return{text:"<$>[note]\n".concat(t,"\n<$>"),cursor:{start:10,end:t.length+10},block:!0}}},{icon:(0,D.jsx)(p.Z,{size:20}),title:"Table",action:function(e){var t=e.split("\n").filter((function(e){return""!==e}));for(0===t.length&&t.push("Header 1");t.length<3;)t.push("Cell ".concat(t.length));var n=t.map((function(e,t){return[e,0===t?"Header 2":"Cell ".concat(t)]})),o=n.reduce((function(e,t){return t.forEach((function(t,n){t.length>e[n]&&(e[n]=t.length)})),e}),Array(n[0].length).fill(0)),r=n.map((function(e){return"| ".concat(e.map((function(e,t){return"".concat(e).concat(" ".repeat(o[t]-e.length))})).join(" | ")," |")}));return r.splice(1,0,"|-".concat(o.map((function(e){return"-".repeat(e)})).join("-|-"),"-|")),{text:r.join("\n"),cursor:{start:2,end:t[0].length+2},block:!0}}},{icon:(0,D.jsx)(g.Z,{size:20}),title:"Code",action:function(e,t){var n=t.currentValue,o=t.selectionStart,r=t.selectionEnd,i=e||'console.log("Hello, world!");';return 0!==o&&"\n"!==n[o-1]||r!==n.length&&"\n"!==n[r]?{text:"`".concat(i,"`"),cursor:{start:1,end:i.length+1}}:{text:"```\n".concat(i,"\n```"),cursor:{start:4,end:i.length+4},block:!0}}}],q=function(e){var t=e.name,n=e.value,r=e.onChange,i=e.max,a=e.disabled,l=e.required,c=e.label,d=e.id,s=e.placeholder,u=e.allowHtml,p=e.allowRsvp,g=e.sideBySide,k=e.autoSize,w=e.hideHelp,Z=(0,o.useState)(!1),P=Z[0],j=Z[1],C=(0,x.Z)(c,d),z=C.inputId,H=C.labelElm,O=(0,o.useRef)(),M=(0,o.useCallback)((function(e){if(!a&&O.current){var t=O.current,n=t.value,o=t.selectionStart,i=t.selectionEnd,l=e(n.slice(o,i),{currentValue:n,selectionStart:o,selectionEnd:i}),c=l.text,d=l.cursor;l.block&&(o>0&&"\n"!==n[o-1]&&(c="\n\n".concat(c),d.start+=2,d.end+=2),o>1&&"\n"!==n[o-2]&&"\n"===n[o-1]&&(c="\n".concat(c),d.start+=1,d.end+=1),i<n.length&&"\n"!==n[i]&&(c="".concat(c,"\n\n")),i<n.length-1&&"\n"!==n[i+1]&&"\n"===n[i]&&(c="".concat(c,"\n")));var s="".concat(n.slice(0,o)).concat(c).concat(n.slice(i));r(s),O.current.value=s,O.current.focus({preventScroll:!0}),O.current.setSelectionRange(o+d.start,o+d.end)}}),[a,r]);return(0,D.jsxs)(D.Fragment,{children:[null!==i?(0,D.jsx)(y.Z,{value:n,max:i,children:H}):H,(0,D.jsxs)(S,{children:[(0,D.jsxs)(_,{children:[T.map((function(e){var t=e.icon,n=e.title,o=e.action;return(0,D.jsx)(L,{type:"button",title:n,"aria-label":n,disabled:a,onClick:function(){return M(o)},children:t},n)})),(0,D.jsxs)(E,{children:[!g&&(0,D.jsx)(L,{type:"button",onClick:function(){a||j((function(e){return!e}))},disabled:a,title:P?"Edit":"Preview","aria-label":P?"Edit":"Preview",children:P?(0,D.jsx)(m.Z,{size:20}):(0,D.jsx)(f.Z,{size:20})}),!w&&(0,D.jsx)(I,{title:"Help","aria-label":"Help",url:"/community/markdown",target:"_blank",children:(0,D.jsx)(b.Z,{size:20})})]})]}),(0,D.jsxs)(B,{sideBySide:g,children:[(g||!P)&&(0,D.jsx)(R,{name:t,value:n,onChange:function(e){return r(e.target.value)},maxLength:i,disabled:a,required:l,placeholder:s,id:z,minRows:5,ref:O,as:k?h.Z:"textarea"}),(g||P)&&(0,D.jsx)(A,{children:(0,D.jsx)(v.default,{content:n,allowHtml:u,allowRsvp:p})})]})]})]})},F=q;q.defaultProps={max:null,disabled:!1,required:!1,label:null,id:null,placeholder:null,allowHtml:!1,allowRsvp:!1,sideBySide:!1,autoSize:!0,hideHelp:!1}},68801:function(e,t,n){var o=n(67294),r=n(87933),i=n(77726),a=n(85893);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=(0,o.useState)(null===t?(0,r.Z)():t),l=n[0],c=null!==e&&("string"===typeof e?(0,a.jsx)(i.Z,{htmlFor:l,label:e}):(0,o.cloneElement)(e,{htmlFor:l}));return{inputId:l,labelElm:c}}},87288:function(e,t){var n="'JetBrains Mono', sans-serif",o="JetBrains Mono', sans-serif",r="'Epilogue', sans-serif";t.Z=function(e){switch(e){case"code":return n;case"codeSecondary":return o;default:return r}}}}]);