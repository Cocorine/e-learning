"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1118],{53801:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(50029),o=t(16835),i=t(87794),a=t.n(i),s=t(67294),l=t(5152),d=t(41664),c=t(11163),u=t(31109),p=t(33606),m=t(17053),h=t(98261),f=t(689),x=t(27762),g=t(1865),y=t(84200),b=t(57054),v=t(81042),j=t(9751),w=t(97020),C=t(88134),_=t(186),Z=_.ZP.span.withConfig({displayName:"CommentStyles__StyledCommentBody",componentId:"sc-gn53o-0"})(["color:",";font-size:16px;margin:0 0 8px;"],(function(e){return e.Color||C.ZP.grayDarkest})),S=(_.ZP.div.withConfig({displayName:"CommentStyles__StyledUserReportCommentContainer",componentId:"sc-gn53o-1"})(["display:flex;flex-direction:column;margin-bottom:16px;&:last-of-type{margin-bottom:0;}a{margin-left:0;text-decoration:none;:hover{border-bottom:none;}}"]),_.ZP.div.withConfig({displayName:"CommentStyles__StyledCommentContainer",componentId:"sc-gn53o-2"})(["margin:16px 0 0;"," "," "," overflow-x:auto;padding-bottom:13px;padding-right:15px;padding-top:21px;"],(function(e){return e.align&&"left"===e.align?"padding-left: 0px;":"padding-left: 15px;"}),(function(e){return e.accepted?"\n      background-color: rgba(0, 105, 255, 0.05);\n      border: 1px solid #e1e7f1;\n      border-radius: 3px;\n      ":null}),(function(e){return e.pinned?"\n        background-color: #f3f5f9;\n        border: 1px solid ".concat(C.ZP.grayLight,";\n        border-radius: 3px;\n        "):null}))),P=_.ZP.div.withConfig({displayName:"CommentStyles__StyledCommentMetaContainer",componentId:"sc-gn53o-3"})(["align-items:center;display:flex;flex-direction:row;span{font-size:18px;}"]),k=_.ZP.a.withConfig({displayName:"CommentStyles__StyledCommentMetaDate",componentId:"sc-gn53o-4"})(["color:#333;font-size:18px;margin-left:10px;text-decoration:none;&:hover{border-bottom:1px dotted ",";}"],C.ZP.grayDarkest),O=_.ZP.a.withConfig({displayName:"CommentStyles__StyledCommentMetaName",componentId:"sc-gn53o-5"})(["color:",";cursor:pointer;font-size:18px;font-weight:500;line-height:1.6;margin-right:10px;text-decoration:none;"],C.ZP.blue2),L=_.ZP.div.withConfig({displayName:"CommentStyles__StyledCommentActions",componentId:"sc-gn53o-6"})(["align-items:center;display:flex;margin-top:12px;"]),F=_.ZP.button.withConfig({displayName:"CommentStyles__StyledCommentAction",componentId:"sc-gn53o-7"})(["background:none;border:none;color:#2291ff;cursor:pointer;display:inline-block;font-size:13px;font-weight:400;margin-right:10px;padding:0;transition:color 0.2s ease-in-out;vertical-align:top;b{font-weight:500;}"]),I=_.ZP.div.withConfig({displayName:"CommentStyles__StyledPinnedAnswerLabel",componentId:"sc-gn53o-8"})(["color:",";font-size:12px;margin-left:auto;svg{vertical-align:middle;}span{margin-left:2px;}"],C.ZP.blueLight),N=_.ZP.div.withConfig({displayName:"CommentStyles__StyledCommentChildren",componentId:"sc-gn53o-9"})(["border-left:1px solid #ccc;"]),D=_.ZP.div.withConfig({displayName:"CommentStyles__StyledCommentChildrenForm",componentId:"sc-gn53o-10"})(["padding-left:15px;"]),T=_.ZP.div.withConfig({displayName:"CommentStyles__StyledError",componentId:"sc-gn53o-11"})(["background:#faa;border-radius:3px;margin:0 0 40px;padding:20px;"]),A=t(85893),z=(0,l.default)((function(){return Promise.resolve().then(t.bind(t,7131))}),{loadableGenerated:{webpack:function(){return[7131]}}}),R=function e(n){var t,i,l=n.record,C=n.topLevelType,_=n.topLevel,R=n.parent,E=n.align,M=n.accepted,q=n.pinned,B=n.loadNested,U=n.replyable,H=n.handleUpdatedComment,W=n.urlFormatter,G=(0,b.Z)(),V=(0,c.useRouter)(),Y=(0,v.Z)(),$=(0,o.Z)(Y,2),Q=$[0],X=$[1],J=(0,s.useState)(),K=J[0],ee=J[1],ne=(0,s.useState)(!1),te=ne[0],re=ne[1],oe=G.permissions.has(g.P.flags.MANAGE_COMMENTS)||G.permissions.has(g.P.flags.ADMINISTRATOR),ie=(null===(t=G.user)||void 0===t?void 0:t.id)===l.user_id||oe,ae=(null===(i=G.user)||void 0===i?void 0:i.id)===(null===_||void 0===_?void 0:_.user_id),se=new Date-new Date(l.created_at)<36e5,le=(0,s.useState)(null),de=le[0],ce=le[1],ue=(0,s.useState)([]),pe=ue[0],me=ue[1],he=(0,s.useState)(l),fe=he[0],xe=he[1],ge=(0,s.useState)(B?0:"last"),ye=ge[0],be=ge[1],ve=(0,s.useState)(!1),je=ve[0],we=ve[1],Ce=(0,s.useState)(!1),_e=Ce[0],Ze=Ce[1],Se=function(e){console.error(e),ce(e.message)},Pe=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.uA)(G.token,l.id,n).catch(Se);case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:H(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ke=function(e){me((function(n){return n.map((function(n){return n.id===e.id?e:n}))}))},Oe=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.ZY)(G.token,_.slug,n).catch(Se);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){"last"!==ye&&(0,m.xP)("comment",l.id,{type:"comment",page:ye,per_page:f.oA.commentsPerPage}).then((function(e){me((function(n){return n.concat(e)})),e.length<f.oA.commentsPerPage?be("last"):be(ye+1)}))}),[l,ye]),(0,s.useEffect)((function(){ie&&"trashed"===l.state&&(0,p._g)(G.token,l.id).then((function(e){xe(e)})).catch((function(e){return console.error(e)}))}),[G,ie,l]),(0,s.useEffect)((function(){var e;V.isReady&&ee(parseInt(null===(e=V.query)||void 0===e?void 0:e.comment,10))}),[V]),(0,s.useEffect)((function(){X.current&&!te&&(Q(),re(!0))}),[X,Q,te]),(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(S,{align:E,accepted:M,pinned:q,ref:K===l.id?X:null,children:[(0,A.jsxs)(P,{children:[(0,A.jsx)(d.default,{href:(0,y.F7)("user",l.user.slug),passHref:!0,children:(0,A.jsx)(O,{children:(0,x.Z)(l.user)})}),(0,A.jsx)("span",{children:" \u2022 "}),(0,A.jsx)(d.default,{href:W(l.id),passHref:!0,children:(0,A.jsx)(k,{children:(0,h.Z)(l.created_at)})}),q?(0,A.jsxs)(I,{children:[(0,A.jsx)(u.Z,{height:16,width:16,color:"#0180ff"}),(0,A.jsx)("span",{children:"Pinned Answer"})]}):null,M?(0,A.jsxs)(I,{children:[(0,A.jsx)(u.Z,{height:16,width:16,color:"#0180ff"}),(0,A.jsx)("span",{children:"Accepted Answer"})]}):null]}),_e?(0,A.jsx)(w.Z,{topLevelType:C,topLevel:_,parentType:l.parent_type,parent:R||_,showHeader:!1,record:fe,type:l.type,buttonText:"Update ".concat(l.type),onSave:function(e){Ze((function(e){return!e})),xe(e)}}):(0,A.jsx)(Z,{Color:"trashed"===l.state?"red":null,children:(0,A.jsx)(z,{content:fe.content})}),(0,A.jsxs)(L,{children:[U&&C&&_&&null==l.comments_locked_at?(0,A.jsx)(F,{onClick:function(){return we((function(e){return!e}))},children:(0,A.jsx)("b",{children:"Reply"})}):null,(0,A.jsx)(F,{children:(0,A.jsx)(j.Z,{reportedType:"Comment",record:l,auth:G,text:"Report",size:"small"})}),"published"!==l.state&&oe?(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(F,{onClick:function(){return Pe({state:"published"})},children:"Publish"})}):null,oe?(0,A.jsxs)(A.Fragment,{children:[null===l.comments_locked_at?(0,A.jsx)(F,{onClick:function(){return Pe({comments_locked_at:new Date})},children:"Lock ALL Comments"}):(0,A.jsx)(F,{onClick:function(){return Pe({comments_locked_at:null})},children:"Unlock All Comments"}),(0,A.jsx)(F,{onClick:function(){return Pe({state:"spam"})},children:"Spam"})]}):null,ie&&se&&"published"===l.state||oe?(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(F,{onClick:function(){return Ze((function(e){return!e}))},children:"Edit"})}):null,(ie&&se||oe)&&"trashed"!==l.state?(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(F,{onClick:function(){return Pe({state:"trashed"})},children:"Delete"})}):null,"question"===l.top_level_type&&"answer"===l.type&&oe?(0,A.jsx)(A.Fragment,{children:q?(0,A.jsx)(F,{onClick:function(){return Oe({pinned_id:null})},children:"Unpin"}):(0,A.jsx)(F,{onClick:function(){return Oe({pinned_id:l.id})},children:"Pin"})}):null,"question"===l.top_level_type&&"answer"===l.type&&(oe||ae)?(0,A.jsx)(A.Fragment,{children:M?(0,A.jsx)(F,{onClick:function(){return Oe({accepted_id:null})},children:"Unmark as accepted"}):(0,A.jsx)(F,{onClick:function(){return Oe({accepted_id:l.id})},children:"Mark as accepted"})}):null]}),de&&(0,A.jsxs)(T,{children:[(0,A.jsx)("b",{children:"An error occurred:"})," ",de]}),(0,A.jsxs)(N,{children:[U&&je&&C&&_?(0,A.jsx)(D,{children:(0,A.jsx)(w.Z,{topLevelType:C,topLevel:_,parentType:"comment",parent:l,type:"comment",onSave:function(e){me((function(n){return n.concat(e)})),we(!1)},showHeader:!1})}):null,pe.map((function(n){return(0,A.jsx)(e,{record:n,topLevelType:C,topLevel:_,parent:l,align:"nested",loadNested:B,replyable:U,handleUpdatedComment:ke},n.id)}))]})]},l.id)})},E=R;R.defaultProps={topLevel:null,parent:null,align:null,accepted:!1,pinned:!1,loadNested:!1,replyable:!1,urlFormatter:function(){return"#"}}},68605:function(e,n,t){t.d(n,{B:function(){return o}});var r=t(88134),o=t(186).ZP.button.withConfig({displayName:"LoadMoreButtonStyles__StyledLoadMoreButton",componentId:"sc-1my1ou7-0"})(["background:",";border:1px solid ",";border-radius:10px;box-shadow:none;color:",";cursor:pointer;font-size:16px;line-height:24px;margin:1rem auto;padding:8px 20px;text-align:center;&:hover{background:",";box-shadow:0 10px 20px ",";color:",";transition:box-shadow 0.25s linear,-webkit-box-shadow 0.25s linear;}"],r.ZP.white,r.ZP.grayBorder,r.ZP.gray3,r.ZP.blueHover,(0,r.E9)(r.ZP.blueDark,.1),r.ZP.white)},21346:function(e,n,t){var r=t(186),o=t(68605),i=t(85893),a=function(e){var n=e.visible,t=e.onClick,r=e.message,o=e.styles;return n&&(0,i.jsx)(s,{type:"button",onClick:t,$_css:o,children:r})};n.Z=a,a.defaultProps={message:"Load More",styles:null};var s=(0,r.ZP)(o.B).withConfig({displayName:"LoadMoreButton___StyledStyledLoadMoreButton",componentId:"sc-1xkxrc2-0"})(["",""],(function(e){return e.$_css}))},9751:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(50029),o=t(59499),i=t(87794),a=t.n(i),s=t(67294),l=t(41664),d=t(33606),c=t(58931),u=t(84200),p=t(18254),m=t(88134),h=t(186),f=h.ZP.a.withConfig({displayName:"ReportAnIssueStyles__StyledReportText",componentId:"sc-glghqm-0"})(["align-items:center;color:#0080ff;cursor:pointer;display:flex;font-size:",";justify-content:center;margin-right:10px;max-width:fit-content;text-decoration:none;"],(function(e){return"small"===e.size?"13px":"16px"})),x=h.ZP.div.withConfig({displayName:"ReportAnIssueStyles__StyledReportModal",componentId:"sc-glghqm-1"})(["background-color:white;border-radius:6px;display:flex;flex-direction:column;justify-content:center;left:50%;max-width:870px;position:fixed;text-align:start;top:25%;transform:translate(-50%,0);width:100%;z-index:10000;h2,h3,h4{color:",";}a{color:#0080ff;text-decoration:none;}label{color:",";font-size:16px;margin-left:8px;}input{background-color:",";border:none;border-radius:3px;color:",";height:auto;line-height:1;margin-right:0;margin-top:32px;padding:18px 30px 16px;}"],m.ZP.blueDark,m.ZP.grayDarkest,m.ZP.blueLight,m.ZP.white),g=h.ZP.div.withConfig({displayName:"ReportAnIssueStyles__StyledModalBackground",componentId:"sc-glghqm-2"})(["background-color:",";display:",";height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:10000;"],(0,m.E9)(m.ZP.blueDark,.4),(function(e){return e.isReportModalOpen?"block":"none"})),y=h.ZP.div.withConfig({displayName:"ReportAnIssueStyles__StyledDialogHeader",componentId:"sc-glghqm-3"})(["background:",";border-bottom:1px solid ",";border-radius:6px 6px 0 0;color:",";font-weight:700;line-height:18px;padding:24px;"],m.ZP.grayLighter,m.ZP.grayLight,m.ZP.grayDark),b=h.ZP.div.withConfig({displayName:"ReportAnIssueStyles__StyledDialogBody",componentId:"sc-glghqm-4"})(["display:flex;flex-direction:column;margin:0 auto 0 0;padding:24px 24px 48px;input{cursor:pointer;}"]),v=h.ZP.a.withConfig({displayName:"ReportAnIssueStyles__StyledShowReportForm",componentId:"sc-glghqm-5"})(["color:#0080ff;cursor:pointer;"]),j=h.ZP.div.withConfig({displayName:"ReportAnIssueStyles__StyledReportEditError",componentId:"sc-glghqm-6"})(["background:#faa;border-radius:3px;margin:0 0 40px;padding:20px;"]),w=t(27187),C=t(29964),_=t(85893);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n=e.reportedType,t=e.record,o=e.auth,i=e.setIsReportModalOpen,u=(0,s.useState)(!1),p=u[0],m=u[1],h=(0,s.useState)("other"),f=h[0],g=h[1],Z=function(e){return g(e.target.value)},P=(0,s.useState)({reported_type:n.toLowerCase(),reported_id:t.id,reason:"other",description:""}),k=P[0],O=P[1],L=function(e){return O((function(n){return S(S({},n),e)}))},F=(0,s.useState)(!1),I=F[0],N=F[1],D=(0,s.useState)(null),T=D[0],A=D[1],z=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!I){e.next=3;break}return e.abrupt("return");case 3:return N(!0),A(null),r=S(S({},k),{},{reason:t},"other"!==t&&{description:t}),e.next=8,(0,d.vn)(o.token,r).catch((function(e){console.error(e),N(!1),A(e.message)}));case 8:if(e.sent){e.next=11;break}return e.abrupt("return");case 11:i(!1);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return"comment"===n.toLowerCase()||"question"===n.toLowerCase()?(0,_.jsxs)(x,{children:[(0,_.jsx)(y,{children:(0,_.jsxs)("h2",{children:["Report this"," ",n]})}),(0,_.jsxs)(b,{children:[(0,_.jsx)("h2",{children:"What is the reason for this report?"}),(0,_.jsxs)("form",{onSubmit:function(e){return z(e,f)},children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("input",{type:"radio",id:"spam",name:"dynamic-radio",value:"spam",onChange:Z}),(0,_.jsxs)("label",{htmlFor:"spam",children:["This"," ",n.toLowerCase()," ","is spam"]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("input",{type:"radio",id:"offensive",name:"dynamic-radio",value:"offensive",onChange:Z}),(0,_.jsxs)("label",{htmlFor:"offensive",children:["This"," ",n.toLowerCase()," ","is offensive"]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("input",{type:"radio",name:"dynamic-radio",id:"off-topic",value:"off-topic",onChange:Z}),(0,_.jsxs)("label",{htmlFor:"off-topic",children:["This"," ",n.toLowerCase()," ","is off-topic"]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("input",{type:"radio",id:"other",name:"dynamic-radio",value:"other",onChange:Z}),(0,_.jsxs)("label",{htmlFor:"other",children:["This"," ",n.toLowerCase()," ","should be removed for something else"]})]}),"other"===f&&(0,_.jsxs)(_.Fragment,{children:[T&&(0,_.jsxs)(j,{children:[(0,_.jsx)("b",{children:"An error occurred when saving the report:"}),T]}),(0,_.jsx)(w.Z,{children:(0,_.jsx)(C.Z,{value:k.description||"",onChange:function(e){return L({description:e,reason:"other"})},max:500,disabled:I})})]}),(0,_.jsx)("input",{type:"submit",value:"Submit"})]})]})]}):(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(x,{children:[!p&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(y,{children:(0,_.jsxs)("h2",{children:[n," ","Feedback"]})}),(0,_.jsxs)(b,{children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("h3",{children:[" ","We\u2019re sorry you found an issue with this"," ",n.toLowerCase(),"."]}),(0,_.jsx)("p",{children:"Is this something we can fix, or do you need to ask the community for help?"})]}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("h4",{children:["Would you like our community to help you with this"," ",n.toLowerCase(),"?"]}),(0,_.jsx)(l.default,{href:"/community/questions",children:"Ask a question on our Q&A"})]}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("h4",{children:["Found a technical issue with the",n.toLowerCase(),"?"]}),(0,_.jsx)(v,{onClick:function(){return m(!0)},children:"Report it for our team to review"})]})]})]}),p&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(y,{children:(0,_.jsxs)("h2",{children:[(0,c.Z)(n)," ","Feedback"]})}),(0,_.jsx)(b,{children:(0,_.jsxs)("div",{children:[(0,_.jsxs)("h4",{children:["Found a technical issue with this",n.toLowerCase(),"?"]}),(0,_.jsx)("p",{children:"Please provide as much detail as you can about the technical issue that you\u2019ve found in this tool."}),(0,_.jsxs)("form",{onSubmit:function(e){return z(e,k.reason)},children:[T&&(0,_.jsxs)(j,{children:[(0,_.jsx)("b",{children:"An error occurred when saving the report:"})," ",T]}),(0,_.jsx)(w.Z,{children:(0,_.jsx)(C.Z,{value:k.description||"",onChange:function(e){return L({description:e,reason:"other"})},max:500,disabled:I})}),(0,_.jsx)("input",{type:"submit",value:"Submit"})]})]})})]})]})})},k=(0,p.Z)((function(e){var n=(0,s.useState)(),t=n[0],r=n[1],o=(0,s.useState)(!1),i=o[0],a=o[1],l=(0,s.useState)(null),c=l[0],p=l[1],m=e.record,h=e.reportedType,x=e.auth,y=e.size,b=e.text;return(0,s.useEffect)((function(){null!==x&&void 0!==x&&x.user&&null!==x&&void 0!==x&&x.token&&null!==m&&void 0!==m&&m.id&&h&&!t&&(a(!0),p(null),(0,d.jF)(x.token,x.user.slug,h.toLowerCase(),m.id).then((function(e){p(e)})).catch((function(){})).finally((function(){a(!1)})))}),[null===x||void 0===x?void 0:x.token,null===x||void 0===x?void 0:x.user,null===m||void 0===m?void 0:m.id,h,t]),(0,_.jsx)(_.Fragment,{children:null!==x&&void 0!==x&&x.user&&!i?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(g,{isReportModalOpen:t,onClick:function(){return r(!1)}}),c?(0,_.jsx)(f,{size:y,href:(0,u.iD)("flagged",c.id),children:"Reported"}):(0,_.jsx)(f,{size:y,onClick:function(){return r(!0)},children:b||"Report an issue"}),t&&(0,_.jsx)(P,{auth:x,record:m,reportedType:h,setIsReportModalOpen:r})]}):null})}))},918:function(e,n,t){t.d(n,{o:function(){return r}});var r=t(186).ZP.div.withConfig({displayName:"FieldStyles__StyledField",componentId:"sc-11w25ym-0"})(['margin:0 0 40px;input[type="datetime-local"],input[type="number"],input[type="password"],input[type="text"],textarea{padding:20px;width:100%;&:disabled{background:#ddd;}}input[type="datetime-local"],input[type="number"],input[type="password"],input[type="text"],textarea,.Dropdown-root{border:1px solid #e5e5e5;border-radius:3px;color:#333;font-size:17px;font-weight:400;}.Dropdown-root{&.is-open{.Dropdown-arrow{border-width:0 8px 8px;}}.Dropdown-control{padding:20px 52px 20px 20px;}.Dropdown-arrow{border-width:8px 8px 0;right:20px;top:27px;}}'])},27187:function(e,n,t){var r=t(59499),o=t(4730),i=t(918),a=t(85893),s=["children"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=(0,o.Z)(e,s);return(0,a.jsx)(i.o,d(d({},t),{},{children:n}))}},29964:function(e,n,t){var r=t(68801),o=t(78788),i=t(85893),a=function(e){var n=e.value,t=e.onChange,a=e.max,s=e.disabled,l=e.required,d=e.label,c=e.id,u=(0,r.Z)(d,c),p=u.inputId,m=u.labelElm;return(0,i.jsxs)(i.Fragment,{children:[null!==a?(0,i.jsx)(o.Z,{value:n,max:a,children:m}):m,(0,i.jsx)("textarea",{value:n,onChange:function(e){return t(e.target.value)},maxLength:a,disabled:s,required:l,id:p})]})};n.Z=a,a.defaultProps={max:null,disabled:!1,required:!1,label:null,id:null}},97020:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(50029),o=t(59499),i=t(186),a=t(87794),s=t.n(a),l=t(67294),d=t(33606),c=t(57054),u=t(62080),p=t(34531),m=t(27187),h=t(95784),f=t(92985),x=t(88134),g=i.ZP.form.withConfig({displayName:"CommentFormTemplateStyles__StyledForm",componentId:"sc-1dqa7xz-0"})([""]),y=i.ZP.div.withConfig({displayName:"CommentFormTemplateStyles__StyledFormHeader",componentId:"sc-1dqa7xz-1"})(["color:",";font-size:24px;font-weight:600;line-height:32px;margin-bottom:16px;"],x.ZP.gray2),b=i.ZP.div.withConfig({displayName:"CommentFormTemplateStyles__StyledFormError",componentId:"sc-1dqa7xz-2"})(["background:#faa;border-radius:3px;margin:0 0 40px;padding:20px;"]),v=i.ZP.div.withConfig({displayName:"CommentFormTemplateStyles__StyledButtonBar",componentId:"sc-1dqa7xz-3"})(["margin-top:5px;"]),j=t(85893);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n=e.topLevel,t=e.topLevelType,o=e.parent,i=e.parentType,a=e.onSave,m=e.showHeader,x=e.record,w=e.buttonText,_=e.type,Z=e.count,P=(0,c.Z)(),k=(0,l.useState)({content:null===x||void 0===x?void 0:x.content}),O=k[0],L=k[1],F=(0,l.useState)("hidden"),I=F[0],N=F[1],D=(0,l.useState)(!1),T=D[0],A=D[1],z=(0,l.useState)(null),R=z[0],E=z[1],M=function(){var e=(0,r.Z)(s().mark((function e(r){var l,c,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!T){e.next=3;break}return e.abrupt("return");case 3:if(A(!0),E(null),l=C(C({},O),{},{parent_id:o.id,parent_type:i,top_level_id:n.id,top_level_type:t,type:_}),c=function(e){console.error(e),A(!1),E(e.message)},null===x||void 0===x||!x.id){e.next=13;break}return e.next=10,(0,d.uA)(P.token,x.id,l).catch(c);case 10:e.t0=e.sent,e.next=16;break;case 13:return e.next=15,(0,d.Yr)(P.token,l).catch(c);case 15:e.t0=e.sent;case 16:if(u=e.t0){e.next=19;break}return e.abrupt("return");case 19:A(!1),E(null),L({content:""}),"published"===u.state?a(u):N(u.state);case 23:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{children:[m&&(0,j.jsx)(y,{children:Z>0?"".concat(Z," Comments"):"Leave a comment"}),(0,j.jsxs)(g,{children:[R&&(0,j.jsxs)(b,{children:[(0,j.jsx)("b",{children:"An error occurred when saving the comment:"})," ",R]}),(0,j.jsx)(S,{children:(0,j.jsx)(h.Z,{value:O.content||"",onChange:function(e){return n={content:e},L((function(e){return C(C({},e),n)}));var n},disabled:null===P.user||T,required:!0,placeholder:"Leave a comment..."})})]}),(0,j.jsxs)(v,{children:[null===P.user?(0,j.jsx)(p.Z,{className:"is-community blue is-sign-in",url:P.signIn,children:"Login to Comment"}):(0,j.jsx)(u.Z,{className:"is-community blue",onClick:function(e){return M(e)},disabled:T,children:w}),"hidden"!==I&&(0,j.jsx)(f.Z,{type:"comment",state:I})]})]})})},Z=_;_.defaultProps={showHeader:!0,record:null,buttonText:"Comment",type:"",count:0};var S=(0,i.ZP)(m.Z).withConfig({displayName:"CommentFormTemplate___StyledField",componentId:"sc-er5enn-0"})(["margin:0;"])},81118:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(53801),o=t(21346),i=t(17534),a=t(88134),s=t(186),l=s.ZP.div.withConfig({displayName:"CommentsTemplateStyles__StyledCommentsContainer",componentId:"sc-k3bvlc-0"})(["display:flex;flex-direction:column;line-height:1.4;margin:0 auto;position:relative;width:100%;","{margin:0;}"],(0,i.X)(i.A.desktop)),d=s.ZP.div.withConfig({displayName:"CommentsTemplateStyles__StyledCommentHeader",componentId:"sc-k3bvlc-1"})(["border:10px ",";border-bottom:solid #e4e8ed;color:",";font-size:20px;font-weight:500;line-height:20px;padding:20px;text-align:center;text-decoration:underline solid ",";text-underline-offset:23px;"],a.ZP.grayLight,a.ZP.blueDark,a.ZP.blueLight),c=t(85893),u=function(e){var n=e.records,t=e.topLevelType,i=e.topLevel,a=e.title,s=e.align,u=e.showTitle,p=e.loadNested,m=e.replyable,h=e.urlFormatter,f=e.onLoadMore,x=e.handleUpdatedComment,g=e.hasMoreComments;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(l,{children:[a.length>0&&u?(0,c.jsxs)(d,{children:[a,"s"]}):null,n.map((function(e){return(0,c.jsx)(r.Z,{record:e,topLevelType:t,topLevel:i,loadNested:p,align:s,replyable:m,handleUpdatedComment:x,urlFormatter:h},e.id)})),g?(0,c.jsx)(o.Z,{onClick:f,visible:n.length>0,message:"Load More ".concat(a,"s")}):null]})})},p=u;u.defaultProps={align:null,title:"Comment",showTitle:!1,loadNested:!1,replyable:!1,urlFormatter:function(){return"#"},topLevel:null,onLoadMore:function(){},hasMoreComments:!1}},92985:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(186).ZP.div.withConfig({displayName:"SpamErrorTemplateStyles__StyledSpamError",componentId:"sc-a41zpz-0"})(["background:#ffeaea;border-radius:5px;box-sizing:border-box;color:#b62929;font-size:18px;margin-bottom:10px;margin-top:30px;padding:17px;position:relative;width:100%;p{font-size:17px;width:80%;&:first-child{font-weight:500;}}a{color:inherit;text-decoration:underline;word-break:keep-all;}"]),o=t(85893),i=function(e){var n=e.type,t=e.state;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r,{children:"spam"===t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("p",{children:["This"," ",n," ","has been flagged as spam by our system."," ","Please do not attempt to re-post this"," ",n,"."]}),(0,o.jsxs)("p",{children:["If you believe this was a mistake,"," ","please contact"," ",(0,o.jsx)("a",{href:"mailto:community-spam@digitalocean.com",children:"community-spam@digitalocean.com"})," ","to appeal."]})]}):(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("p",{children:["This community submission is"," ",(0,o.jsx)("b",{children:"currently under review"})," ","and must be approved by a site moderator before being publicly available."]})})})})}},57054:function(e,n,t){var r=t(67294),o=t(18254);n.Z=function(){return(0,r.useContext)(o.V)}},81042:function(e,n,t){var r=t(67294);n.Z=function(){var e=(0,r.useRef)(null);return[function(){return e.current.scrollIntoView()},e]}},98261:function(e,n){n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t={year:"numeric",month:"long",day:"numeric"};n&&(t.hour="2-digit",t.minute="2-digit");var r=new Date(e).toLocaleDateString("en-US",t);return"".concat(r)}},58931:function(e,n){n.Z=function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}},27762:function(e,n){n.Z=function(e){return e.id?e.first_name&&e.last_name?"".concat(e.first_name," ").concat(e.last_name):e.first_name||e.last_name||e.username:""}}}]);