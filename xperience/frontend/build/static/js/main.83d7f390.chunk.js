(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{250:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(46),c=n.n(r),s=(n(247),n(248),n(249),n(250),n(15)),o=n(30),i=n(389),l=n(7),u=n.n(l),d=n(13),j=n(180),b=n(399),p=n(388),h=n(156),O=n(232),v=n(9),x=n(18),f=n(10),m="SIGN_IN_USER",g="SIGN_OUT_USER",y="SIGN_UP_USER",w=n(222),S=n.n(w).a.create({baseURL:"https://xperince-project.herokuapp.com/"});S.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var C=function(){return S.get("/posts")},k=function(e,t){return S.patch("/posts/".concat(e),t)},I=function(e,t){return S.patch("/posts/".concat(e,"/addAttendee"),t)},N=function(e,t){return S.patch("/posts/".concat(e,"/cancelAttendee"),t)},P=function(e,t){return S.patch("/posts/".concat(e,"/addComment"),t)},E=function(e,t){return S.patch("/posts/".concat(e,"/toggleEvent"),t)},_=function(e,t){return S.patch("/posts/".concat(e,"/updatePhoto"),t)},R=function(e){return S.post("/user/signin",e)},A=function(e){return S.post("/user/signup",e)},U=function(e,t){return S.patch("/user/".concat(e,"/addPhoto"),t)},T=function(e,t){return S.patch("/user/".concat(e,"/updatePassword"),t)};var F=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:a=t.sent,r=a.data,n({type:y,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e);case 3:a=t.sent,r=a.data,n({type:y,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},D=function(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T(e,t);case 3:r=n.sent,c=r.data,a({type:y,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},z=n(1);function G(){var e=Object(f.b)(),t=Object(s.e)();return Object(z.jsxs)(j.a,{children:[Object(z.jsx)(b.a,{dividing:!0,size:"large",content:"Account"}),Object(z.jsx)(b.a,{color:"teal",sub:!0,content:"Change Password"}),Object(z.jsx)(v.d,{initialValues:{newPassword1:"",newPassword2:""},validationSchema:x.a({newPassword1:x.c().required("Password is required"),newPassword2:x.c().oneOf([x.b("newPassword1"),null],"Passwords do not match")}),onSubmit:function(){var n=Object(d.a)(u.a.mark((function n(a,r){var c,s,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=r.setSubmitting,s=r.setErrors;try{o=JSON.parse(localStorage.getItem("profile")),console.log(o.result._id),console.log(a.newPassword2),e(D(o.result._id,a.newPassword2)),c(!1),t.push("/events")}catch(i){s({auth:i.message}),c(!1)}case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),children:function(e){var t=e.errors,n=e.isSubmitting,a=e.isValid,r=e.dirty;return Object(z.jsxs)(v.c,{className:"ui form",children:[Object(z.jsx)(v.b,{name:"newPassword1",type:"password",placeholder:"New Password"}),Object(z.jsx)(v.a,{name:"newPassword1"}),Object(z.jsx)(p.a,{hidden:!0}),Object(z.jsx)(v.b,{name:"newPassword2",type:"password",placeholder:"Confirm Password"}),Object(z.jsx)(v.a,{name:"newPassword2"}),Object(z.jsx)(p.a,{hidden:!0}),t.auth&&Object(z.jsx)(h.a,{basic:!0,color:"red",style:{marginBottom:10},content:t.auth}),Object(z.jsx)(O.a,{style:{display:"block"},type:"submit",disabled:!a||n||!r,loading:n,size:"large",positive:!0,content:"Update password"})]})}})]})}var q=n(230),M=n(76);function B(e){var t=e.history;return Object(z.jsx)(j.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(z.jsxs)(i.a,{children:[Object(z.jsx)("div",{children:Object(z.jsx)(q.a,{src:"/assets/evento.jpg",style:{marginLeft:190}})}),Object(z.jsxs)(b.a,{as:"h1",inverted:!0,children:[Object(z.jsx)(q.a,{size:"massive",src:"/assets/logo.png",style:{marginBottom:12}}),"Xperince"]}),Object(z.jsxs)(O.a,{onClick:function(){return t.push("/events")},size:"huge",inverted:!0,children:["Get Started",Object(z.jsx)(M.a,{name:"right arrow",inverted:!0})]})]})})}var J=n(19),V=n(231),H=n(110),X=n(28),Y=n(390),$=n(395),W=n(396),Z="CREATE_EVENT",K="UPDATE_EVENT",Q="DELETE_EVENT",ee="FETCH_EVENTS";function te(){return function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,r,c,s,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:n=e.sent,(a=n.data).sort((function(e,t){return new Date(e.date)-new Date(t.date)})),r=a.filter((function(e){return new Date(e.date)>=new Date})),c=localStorage.getItem("eventFilter"),s=JSON.parse(localStorage.getItem("profile")),e.t0=c,e.next="isGoing"===e.t0?12:"isHosting"===e.t0?16:19;break;case 12:return o=a.filter((function(e){return e.attendees.includes(s.result.displayName)})),console.log(o),t({type:ee,payload:o}),e.abrupt("break",20);case 16:return i=a.filter((function(e){return e.hostedBy===s.result.displayName})),t({type:ee,payload:i}),e.abrupt("break",20);case 19:t({type:ee,payload:r});case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(0),console.log(e.t1.message);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}()}function ne(e){return function(){var t=Object(d.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,S.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:Z,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}function ae(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(a){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e),console.log(t),n.next=5,k(e,t);case 5:r=n.sent,r.data,a({type:K,payload:t}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}function re(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I(e,t);case 3:r=n.sent,c=r.data,console.log(c),a({type:K,payload:c}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}function ce(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N(e,t);case 3:r=n.sent,c=r.data,a({type:K,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}function se(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P(e,t);case 3:r=n.sent,c=r.data,console.log(c),a({type:K,payload:c}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}function oe(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(t),n.next=4,E(e,t);case 4:r=n.sent,c=r.data,a({type:K,payload:c}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}function ie(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e),n.next=4,_(e,{photoURL:t});case 4:r=n.sent,c=r.data,a({type:K,payload:c}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}function le(e){var t=e.event,n=e.loading;Object(f.b)();if(n||!t)return Object(z.jsx)(Y.a,{content:"Loading your event..."});var a=JSON.parse(localStorage.getItem("profile")),r=JSON.parse(localStorage.getItem("Counter"));return console.log(r),(null===t||void 0===t?void 0:t.count)&&(null===a||void 0===a?void 0:a.result._id)===(null===t||void 0===t?void 0:t.hostUid)&&null===r&&(o.b.error("".concat(t.count," users commented on your event")),localStorage.setItem("Counter",1)),Object(z.jsxs)(j.a.Group,{children:[Object(z.jsx)(j.a,{children:Object(z.jsx)($.a.Group,{children:Object(z.jsxs)($.a,{children:[Object(z.jsx)($.a.Image,{size:"tiny",circular:!0,src:(null===t||void 0===t?void 0:t.hostPhotoURL)||"https://randomuser.me/api/portraits/women/22.jpg"}),Object(z.jsxs)($.a.Content,{children:[Object(z.jsx)($.a.Header,{content:t.title}),Object(z.jsxs)($.a.Description,{children:["Hosted by ",t.hostedBy]}),(null===t||void 0===t?void 0:t.isCancelled)&&Object(z.jsx)(h.a,{style:{top:"-40px"},ribbon:"right",color:"red",content:"This event has been cancelled"})]})]})})}),Object(z.jsx)(j.a,{clearing:!0,children:Object(z.jsxs)("span",{children:[Object(z.jsx)(M.a,{name:"clock"})," ",t.date,"  ",Object(z.jsx)(M.a,{name:"marker"})," ",t.venue]})}),Object(z.jsx)(j.a,{secondary:!0,clearing:!0,children:Object(z.jsx)(W.a,{horizontal:!0})}),Object(z.jsxs)(j.a,{clearing:!0,children:[Object(z.jsxs)("div",{children:[" ",t.description," "]}),Object(z.jsx)(O.a,{as:X.b,to:"/events/".concat(t._id),color:"teal",floated:"right",content:"View"})]})]})}function ue(e){var t=e.events,n=e.loading;return Object(z.jsx)(z.Fragment,{children:t.map((function(e){return Object(z.jsx)(le,{event:e,loading:n},e._id)}))})}var de=n(228),je=n(392);function be(e){var t=e.filterEvent,n=e.setfilterEvent,a=e.loading,r=Object(f.b)();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(de.a,{vertical:!0,size:"large",style:{width:"100%"},children:[Object(z.jsx)(b.a,{icon:"filter",attached:!0,color:"teal",content:"Filters"}),Object(z.jsx)(de.a.Item,{content:"All Events",active:"all"===t.get("filter"),onClick:function(){n("filter","all"),localStorage.setItem("eventFilter",t.get("filter")),r(te())},disabled:a}),Object(z.jsx)(de.a.Item,{content:"I'm going",active:"isGoing"===t.get("filter"),onClick:function(){n("filter","isGoing"),localStorage.setItem("eventFilter",t.get("filter")),r(te())},disabled:a}),Object(z.jsx)(de.a.Item,{content:"I'm hosting",active:"isHosting"===t.get("filter"),onClick:function(){n("filter","isHosting"),localStorage.setItem("eventFilter",t.get("filter")),r(te())},disabled:a})]}),Object(z.jsx)(b.a,{icon:"calendar",attached:!0,color:"teal",content:"Select date"}),Object(z.jsx)(je.a,{onChange:function(e){return n("startDate",e)},value:t.get("startDate")||new Date,tileDisable:function(){return a}})]})}function pe(){var e=Object(f.c)((function(e){return e.event})).events,t=Object(f.c)((function(e){return e.async})).loading,n=Object(a.useState)(new Map([["startDate",new Date],["filter","all"]])),r=Object(J.a)(n,2),c=r[0],s=r[1];return Object(z.jsxs)(V.a,{children:[Object(z.jsx)(H.a,{width:10,children:Object(z.jsx)(ue,{events:e,loading:t})}),Object(z.jsx)(H.a,{width:6,children:Object(z.jsx)(be,{filterEvent:c,setfilterEvent:function(e,t){s(new Map(c.set(e,t)))},loading:t})})]})}var he=n(394),Oe=n(397);function ve(e){var t=e.eventId,n=JSON.parse(localStorage.getItem("profile")),a=[{displayName:"",description:"",date:new Date}],r=Object(f.b)();return Object(z.jsx)(v.d,{initialValues:{comment:""},validationSchema:x.a({comment:x.c().required()}),onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(c,s){var i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=s.setSubmitting,l=s.resetForm;try{a[0].displayName=n.result.displayName,a[0].description=c.comment,console.log(a),r(se(t,a)),l()}catch(u){o.b.error(u.message)}finally{i(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting;return Object(z.jsxs)(v.c,{className:"ui form",children:[Object(z.jsxs)(Oe.a,{children:[Object(z.jsx)(v.b,{name:"comment",placeholder:"Please enter your comment here"}),Object(z.jsx)(v.a,{name:"comment"})]}),Object(z.jsx)(O.a,{loading:t,icon:"edit",primary:!0,type:"submit",content:"Add reply"})]})}})}function xe(e){var t=e.event;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(j.a,{textAlign:"center",attached:"top",inverted:!0,color:"teal",style:{border:"none"},children:Object(z.jsx)(b.a,{children:"Chat about this event"})}),Object(z.jsxs)(j.a,{attached:!0,children:[Object(z.jsx)(he.a.Group,{children:t.comments.map((function(e){return Object(z.jsxs)(he.a,{children:[Object(z.jsx)(he.a.Avatar,{src:"/assets/user.png"}),Object(z.jsxs)(he.a.Content,{children:[Object(z.jsx)(he.a.Author,{as:"a",children:null===e||void 0===e?void 0:e.displayName}),Object(z.jsx)(he.a.Metadata,{children:Object(z.jsx)("div",{children:null===e||void 0===e?void 0:e.date})}),Object(z.jsx)(he.a.Text,{children:null===e||void 0===e?void 0:e.description}),Object(z.jsx)(he.a.Actions,{children:Object(z.jsx)(he.a.Action,{children:"Reply"})})]})]},null===e||void 0===e?void 0:e._id)}))}),Object(z.jsx)(ve,{eventId:t._id})]})]})}var fe={filter:"brightness(30%)"},me={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"};function ge(e){var t=e.event,n=e.isHost,r=e.isGoing,c=Object(a.useState)(!1),s=Object(J.a)(c,2),i=s[0],l=s[1],p=Object(f.b)(),h=JSON.parse(localStorage.getItem("profile"));function v(){return(v=Object(d.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0);try{(n=Array.from([])).push(h.result.displayName),p(re(t._id,n)),l(!1)}catch(a){o.b.error(a.message),l(!1)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(d.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0);try{(n=Array.from([])).push(h.result.displayName),p(ce(t._id,n)),l(!1)}catch(a){o.b.error(a.message),l(!1)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(z.jsxs)(j.a.Group,{children:[Object(z.jsxs)(j.a,{basic:!0,attached:"top",style:{padding:"0"},children:[Object(z.jsx)(q.a,{src:"/assets/categoryImages/".concat(t.category,".jpg"),fluid:!0,style:fe}),Object(z.jsx)(j.a,{style:me,basic:!0,children:Object(z.jsx)($.a.Group,{children:Object(z.jsx)($.a,{children:Object(z.jsxs)($.a.Content,{children:[Object(z.jsx)(b.a,{size:"huge",content:t.title,style:{color:"white"}}),Object(z.jsx)("p",{children:t.date}),Object(z.jsxs)("p",{children:["Hosted by ",Object(z.jsxs)("strong",{children:[" ",t.hostedBy," "]})]})]})})})})]}),Object(z.jsxs)(j.a,{attached:"bottom",clearing:!0,children:[t.isCancelled&&Object(z.jsx)(O.a,{color:"red",content:"Event Cancelled"}),!n&&!t.isCancelled&&Object(z.jsx)(z.Fragment,{children:r?Object(z.jsx)(O.a,{onClick:function(){return x.apply(this,arguments)},loading:i,children:"Cancel My Place"}):Object(z.jsx)(O.a,{onClick:function(){return v.apply(this,arguments)},loading:i,color:"teal",children:"JOIN THIS EVENT"})}),n&&Object(z.jsx)(O.a,{as:X.b,to:"/manage/".concat(t._id),color:"orange",floated:"right",children:" Manage Event "})]})]})}function ye(e){var t=e.event;return Object(z.jsxs)(j.a.Group,{children:[Object(z.jsx)(j.a,{attached:"top",children:Object(z.jsxs)(V.a,{children:[Object(z.jsx)(V.a.Column,{width:1,children:Object(z.jsx)(M.a,{size:"large",color:"teal",name:"info"})}),Object(z.jsx)(V.a.Column,{width:15,children:Object(z.jsx)("p",{children:t.description})})]})}),Object(z.jsx)(j.a,{attached:!0,children:Object(z.jsxs)(V.a,{verticalAlign:"middle",children:[Object(z.jsx)(V.a.Column,{width:1,children:Object(z.jsx)(M.a,{name:"calendar",size:"large",color:"teal"})}),Object(z.jsx)(V.a.Column,{width:15,children:Object(z.jsxs)("span",{children:[" ",t.date," "]})})]})}),Object(z.jsx)(j.a,{attached:!0,children:Object(z.jsxs)(V.a,{verticalAlign:"middle",children:[Object(z.jsx)(V.a.Column,{width:1,children:Object(z.jsx)(M.a,{name:"marker",size:"large",color:"teal"})}),Object(z.jsx)(V.a.Column,{width:11,children:Object(z.jsxs)("span",{children:[" ",t.venue," "]})}),Object(z.jsx)(V.a.Column,{width:4,children:Object(z.jsx)(O.a,{color:"teal",size:"tiny",content:"Show Map"})})]})})]})}function we(e){var t=e.event;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(j.a,{textAlign:"center",style:{border:"none"},attached:"top",secondary:!0,inverted:!0,color:"teal",children:[null===t||void 0===t?void 0:t.attendees.length," ",(null===t||void 0===t?void 0:t.attendees.length)>1?"People":"Person"," Going"]}),Object(z.jsx)(j.a,{attached:!0,children:Object(z.jsx)($.a.Group,{relaxed:!0,divided:!0,children:null===t||void 0===t?void 0:t.attendees.map((function(e){return Object(z.jsxs)($.a,{style:{position:"relative"},children:[Object(z.jsx)($.a.Image,{size:"tiny",src:e.photoURL||"/assets/user.png"}),Object(z.jsx)($.a.Content,{verticalAlign:"middle",children:Object(z.jsx)($.a.Header,{as:"h3",children:Object(z.jsxs)("span",{children:[" ",e," "]})})})]},e.id)}))})})]})}function Se(e){var t,n=e.match,a=Object(f.c)((function(e){return e.event.events.find((function(e){return e._id===n.params.id}))})),r=Object(f.c)((function(e){return e.async})),c=r.loading,s=r.error,o=JSON.parse(localStorage.getItem("profile")),i=(null===a||void 0===a?void 0:a.hostUid)===(null===o||void 0===o?void 0:o.result._id),l=null===a||void 0===a||null===(t=a.attendees)||void 0===t?void 0:t.some((function(e){return e===(null===o||void 0===o?void 0:o.result.displayName)}));return c||!a?Object(z.jsx)(Y.a,{content:"Loading your event..."}):s?Object(z.jsx)(Y.a,{content:"Cannot find the document!"}):Object(z.jsxs)(V.a,{children:[Object(z.jsxs)(V.a.Column,{width:10,children:[Object(z.jsx)(ge,{event:a,isHost:i,isGoing:l}),Object(z.jsx)(ye,{event:a}),Object(z.jsx)(xe,{event:a})]}),Object(z.jsx)(V.a.Column,{width:6,children:Object(z.jsx)(we,{event:a})})]})}var Ce=n(391);function ke(e){var t,n=e.match,r=e.history,c=Object(f.b)(),s=Object(a.useState)(!1),i=Object(J.a)(s,2),l=i[0],p=i[1],h=Object(f.c)((function(e){return e.event.events.find((function(e){return e._id===n.params.id}))})),m=Object(f.c)((function(e){return e.async})),g=(m.loading,m.error,null);function y(){return(y=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,t.data.forEach((function(e){e.title===(null===h||void 0===h?void 0:h.title)&&(g=e._id)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){y.apply(this,arguments)}();var w=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),S=Object(J.a)(w,2),k=S[0],I=(S[1],null!==h&&void 0!==h?h:{title:"",category:"",description:"",city:"",venue:"",date:"",time:"",hostUid:k.result._id,hostedBy:k.result.displayName,hostPhotoURL:(null===k||void 0===k||null===(t=k.result)||void 0===t?void 0:t.photoURL)||"/assets/user.png",isCancelled:!1}),N=x.a({title:x.c().required(),category:x.c().required(),description:x.c().required(),city:x.c().required(),venue:x.c().required(),date:x.c().required()});function P(){return(P=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(!1);try{c(oe(t._id,!t.isCancelled))}catch(n){o.b.error(n.message)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(z.jsxs)(j.a,{clearing:!0,children:[Object(z.jsx)(b.a,{content:h?"Edit my event":"Create new event"}),Object(z.jsx)(v.d,{initialValues:I,validationSchema:N,onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setSubmitting;try{console.log(t),c(h?ae(g,t):ne(t)),a(!1),r.push("/events"),document.location.reload()}catch(s){o.b.error(s.message),a(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting,n=e.dirty,a=e.isValid;return Object(z.jsxs)(v.c,{className:"ui form",children:[Object(z.jsxs)(Oe.a,{children:[Object(z.jsx)(v.b,{name:"title",placeholder:"Event title"}),Object(z.jsx)(v.a,{name:"title"})]}),Object(z.jsxs)(Oe.a,{children:[Object(z.jsxs)(v.b,{name:"category",placeholder:"Category",as:"select",children:[Object(z.jsx)("option",{value:"None",children:"None"}),Object(z.jsx)("option",{value:"travel",children:"Travel"}),Object(z.jsx)("option",{value:"drinks",children:"Drinks"}),Object(z.jsx)("option",{value:"food",children:"Food"}),Object(z.jsx)("option",{value:"music",children:"Music"}),Object(z.jsx)("option",{value:"culture",children:"Culture"}),Object(z.jsx)("option",{value:"film",children:"Film"})]}),Object(z.jsx)(v.a,{name:"category"})]}),Object(z.jsxs)(Oe.a,{children:[Object(z.jsx)(v.b,{name:"description",placeholder:"Description",as:"textarea"}),Object(z.jsx)(v.a,{name:"description"})]}),Object(z.jsxs)(Oe.a,{children:[Object(z.jsx)(v.b,{name:"city",placeholder:"City",option:!0}),Object(z.jsx)(v.a,{name:"city"})]}),Object(z.jsxs)(Oe.a,{children:[Object(z.jsx)(v.b,{name:"venue",placeholder:"Venue"}),Object(z.jsx)(v.a,{name:"venue"})]}),Object(z.jsxs)(Oe.a,{children:[Object(z.jsx)(v.b,{name:"date",placeholder:"Event Date",type:"date"}),Object(z.jsx)(v.a,{name:"date"})]}),Object(z.jsx)(Oe.a,{children:Object(z.jsx)(v.b,{name:"time",placeholder:"Event Time",type:"time"})}),Object(z.jsx)(O.a,{loading:t,disabled:!a||!n||t,type:"submit",floated:"right",positive:!0,content:"Submit"}),Object(z.jsx)(O.a,{disabled:t,as:X.b,to:"/",type:"submit",floated:"right",content:"Cancel"}),h&&Object(z.jsx)(O.a,{type:"button",floated:"left",color:h.isCancelled?"green":"red",content:h.isCancelled?"Reactivate event":"Cancel Event",onClick:function(){return p(!0)}})]})}}),Object(z.jsx)(Ce.a,{content:(null===h||void 0===h?void 0:h.isCancelled)?"Do you want to reactivate the event?":"This will cancel the event - are you sure?",open:l,onCancel:function(){return p(!1)},onConfirm:function(){return function(e){return P.apply(this,arguments)}(h)}})]})}var Ie=n(393);function Ne(){Object(f.c)((function(e){return e.profile})).currentUserProfile;var e,t,n,r,c=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),i=Object(J.a)(c,2),l=i[0],j=i[1],b=localStorage.getItem("userPhoto"),p=Object(f.b)(),h=Object(s.e)();function O(){return(O=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{p({type:g}),h.push("/"),j(null)}catch(t){o.b.error(t.message)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(z.jsxs)(de.a.Item,{position:"right",children:[Object(z.jsx)(q.a,{avatar:!0,spaced:"right",src:b||(null===l||void 0===l||null===(e=l.result)||void 0===e?void 0:e.photoURL)||"/assets/user.png"}),Object(z.jsx)(Ie.a,{pointing:"top left",text:(null===l||void 0===l||null===(t=l.result)||void 0===t?void 0:t.displayName)||(null===l||void 0===l||null===(n=l.result)||void 0===n?void 0:n.name),children:Object(z.jsxs)(Ie.a.Menu,{children:[Object(z.jsx)(Ie.a.Item,{as:X.b,to:"/createEvent",text:"Create Event",icon:"plus"}),Object(z.jsx)(Ie.a.Item,{as:X.b,to:"/profile/".concat((null===l||void 0===l?void 0:l.result._id)||(null===l||void 0===l||null===(r=l.result)||void 0===r?void 0:r.googleId)),text:"My Profile",icon:"user"}),Object(z.jsx)(Ie.a.Item,{as:X.b,to:"/account",text:"My Account",icon:"settings"}),Object(z.jsx)(Ie.a.Item,{onClick:function(){return O.apply(this,arguments)},text:"Sign Out",icon:"power"})]})})]})}var Pe="OPEN_MODAL",Ee="CLOSE_MODAL";function _e(e){return{type:Pe,payload:e}}function Re(){return{type:Ee}}function Ae(e){e.setAuthenticate;var t=Object(f.b)();return Object(z.jsxs)(de.a.Item,{position:"right",children:[Object(z.jsx)(O.a,{onClick:function(){return t(_e({modalType:"LoginForm"}))},basic:!0,inverted:!0,content:"Login"}),Object(z.jsx)(O.a,{onClick:function(){return t(_e({modalType:"RegisterForm"}))},basic:!0,inverted:!0,content:"Register",style:{marginLeft:"0.5em"}})]})}function Ue(e){e.setFormOpen;var t=Object(f.c)((function(e){return e.auth})).authenticated,n=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),r=Object(J.a)(n,2),c=r[0];r[1];return Object(z.jsx)(de.a,{inverted:!0,fixed:"top",children:Object(z.jsxs)(i.a,{children:[Object(z.jsxs)(de.a.Item,{as:X.c,exact:!0,to:"/",header:!0,children:[Object(z.jsx)("img",{src:"/assets/logo.png",alt:"logo",style:{marginRight:15}}),"Xperince"]}),Object(z.jsx)(de.a.Item,{as:X.c,to:"/events",name:"Events"}),(t||c)&&Object(z.jsx)(de.a.Item,{as:X.c,to:"/createEvent",children:Object(z.jsx)(O.a,{positive:!0,inverted:!0,content:"Create Event"})}),t||c?Object(z.jsx)(Ne,{}):Object(z.jsx)(Ae,{})]})})}var Te=n(14),Fe=n(165);function Le(e){var t=e.children,n=e.size,a=e.header,r=Object(f.b)();return Object(z.jsxs)(Fe.a,{open:!0,onClose:function(){return r(Re())},size:n,children:[a&&Object(z.jsx)(Fe.a.Header,{children:a}),Object(z.jsx)(Fe.a.Content,{children:t})]})}var De=n(153),ze=n.n(De);function Ge(){var e=Object(f.b)(),t=Object(s.e)(),n=function(){var n=Object(d.a)(u.a.mark((function n(a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=null===a||void 0===a?void 0:a.profileObj,c=null===a||void 0===a?void 0:a.tokenId;try{e({type:y,payload:{result:r,token:c}}),e(Re()),t.push("/events")}catch(s){console.log(s)}case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){return alert("Google Sign In was unsuccessful")};return Object(z.jsx)(Le,{size:"mini",header:"Sign in to Xperince",children:Object(z.jsx)(v.d,{initialValues:{email:"",password:""},validationSchema:x.a({email:x.c().required().email(),password:x.c().required()}),onSubmit:function(){var t=Object(d.a)(u.a.mark((function t(n,a){var r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=a.setSubmitting,c=a.setErrors;try{e(L(n)),r(!1),e(Re())}catch(s){c({auth:"username or password does not exist!"}),r(!1)}case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting,r=e.isValid,c=e.dirty,s=e.errors;return Object(z.jsxs)(v.c,{className:"ui form",children:[Object(z.jsx)(v.b,{name:"email",placeholder:"Email Address"}),Object(z.jsx)(v.a,{name:"email",children:function(e){return Object(z.jsx)(h.a,{basic:!0,color:"red",style:{marginTop:1},children:e})}}),Object(z.jsx)(p.a,{hidden:!0}),Object(z.jsx)(v.b,{name:"password",placeholder:"Password",type:"password"}),Object(z.jsx)(v.a,{name:"password",children:function(e){return Object(z.jsx)(h.a,{basic:!0,color:"red",style:{marginTop:1},children:e})}}),Object(z.jsx)(p.a,{hidden:!0}),s.auth&&Object(z.jsx)(h.a,{basic:!0,color:"red",style:{marginBottom:10},content:s.auth}),Object(z.jsx)(O.a,{loading:t,disabled:!r||!c||t,type:"submit",fluid:!0,size:"large",color:"teal",content:"Login"}),Object(z.jsx)(p.a,{horizontal:!0,children:"Or"}),Object(z.jsx)(De.GoogleLogin,{clientId:"92980069783-5l339n1i0e1t6ecrjvinbl0uoh8quts2.apps.googleusercontent.com",render:function(e){return Object(z.jsx)(O.a,{onClick:e.onClick,icon:"google",fluid:!0,color:"google plus",content:"Login with Google"})},onSuccess:n,onFailure:a,cookiePolicy:"single_host_origin"})]})}})})}function qe(e){var t=e.history,n=Object(f.b)(),a=function(){var e=Object(d.a)(u.a.mark((function e(a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=null===a||void 0===a?void 0:a.profileObj,c=null===a||void 0===a?void 0:a.tokenId;try{n({type:y,payload:{result:r,token:c}}),n(Re()),t.push("/events")}catch(s){console.log(s)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){return alert("Google Sign In was unsuccessful")};return Object(z.jsx)(Le,{size:"mini",header:"Register to Xperience",children:Object(z.jsx)(v.d,{initialValues:{displayName:"",email:"",password:"",photoURL:""},validationSchema:x.a({displayName:x.c().required(),email:x.c().required().email(),password:x.c().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")}),onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(t,a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.setSubmitting,c=a.setErrors;try{n(F(t)),r(!1),n(Re())}catch(s){c({auth:s.message}),r(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting,n=e.isValid,c=e.dirty,s=e.errors;return Object(z.jsxs)(v.c,{className:"ui form",children:[Object(z.jsx)(v.b,{name:"displayName",placeholder:"Your Name"}),Object(z.jsx)(v.a,{name:"displayName"}),Object(z.jsx)(p.a,{hidden:!0}),Object(z.jsx)(v.b,{name:"email",placeholder:"Email Address"}),Object(z.jsx)(v.a,{name:"email"}),Object(z.jsx)(p.a,{hidden:!0}),Object(z.jsx)(v.b,{name:"password",placeholder:"Password",type:"password"}),Object(z.jsx)(v.a,{name:"password"}),Object(z.jsx)(p.a,{hidden:!0}),s.auth&&Object(z.jsx)(h.a,{basic:!0,color:"red",style:{marginBottom:10},content:s.auth}),Object(z.jsx)(O.a,{loading:t,disabled:!n||!c||t,type:"submit",fluid:!0,size:"large",color:"teal",content:"Register"}),Object(z.jsx)(p.a,{horizontal:!0,children:"Or"}),Object(z.jsx)(ze.a,{clientId:"92980069783-5l339n1i0e1t6ecrjvinbl0uoh8quts2.apps.googleusercontent.com",render:function(e){return Object(z.jsx)(O.a,{onClick:e.onClick,icon:"google",fluid:!0,color:"google plus",content:"SignUp with Google"})},onSuccess:a,onFailure:r,cookiePolicy:"single_host_origin"})]})}})})}function Me(){var e,t={LoginForm:Ge,RegisterForm:qe},n=Object(f.c)((function(e){return e.modals}));if(n){var a=n.modalType,r=n.modalProps,c=t[a];e=Object(z.jsx)(c,Object(Te.a)({},r))}return Object(z.jsxs)("span",{children:[" ",e," "]})}var Be=n(398),Je=n(402),Ve="LISTEN_TO_CURRENT_USER_PROFILE",He="UPDATE_PHOTO";function Xe(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,U(e,{photoURL:t});case 3:r=n.sent,c=r.data,console.log(c),a({type:He,payload:c}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}function Ye(e){e.match;var t,n,r=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),c=Object(J.a)(r,2),s=c[0],o=(c[1],Object(f.c)((function(e){return e.async}))),i=(o.loading,o.error,localStorage.getItem("userPhoto"));return Object(z.jsx)(j.a,{children:Object(z.jsxs)(V.a,{children:[Object(z.jsxs)(V.a.Column,{width:12,children:[Object(z.jsx)($.a.Group,{children:Object(z.jsxs)($.a,{children:[Object(z.jsx)($.a.Image,{avatar:!0,size:"small",src:i||(null===s||void 0===s||null===(t=s.result)||void 0===t?void 0:t.photoURL)||"/assets/user.png"}),Object(z.jsx)($.a.Content,{verticalAlign:"middle",children:Object(z.jsx)(b.a,{as:"h1",style:{display:"block",marginBottom:10},content:null===(n=s.result)||void 0===n?void 0:n.displayName})})]})}),Object(z.jsx)(O.a,{as:X.b,to:"/profile/photo/".concat(s.result._id),content:"Upload Photo",basic:!0,color:"red",icon:"user"})]}),Object(z.jsxs)(V.a.Column,{width:4,children:[Object(z.jsx)(p.a,{hidden:!0}),Object(z.jsxs)(Be.a.Group,{children:[Object(z.jsx)(Be.a,{label:"Followers",value:10}),Object(z.jsx)(Be.a,{label:"Following",value:5})]}),Object(z.jsx)(p.a,{}),Object(z.jsxs)(Je.a,{animated:"move",children:[Object(z.jsx)(Je.a.Content,{visible:!0,style:{width:"100%"},children:Object(z.jsx)(O.a,{fluid:!0,color:"teal",content:"Following"})}),Object(z.jsx)(Je.a.Content,{hidden:!0,style:{width:"100%"},children:Object(z.jsx)(O.a,{fluid:!0,color:"red",content:"Unfollow"})})]})]})]})})}var $e=n(403),We=n(223);n(375);function Ze(e){var t=e.setImage,n=e.imagePreview,r=Object(a.useRef)(null);return Object(z.jsx)(We.a,{ref:r,src:n,style:{height:200,width:"100%"},aspectRatio:1,preview:".img-preview",guides:!1,viewMode:1,dragMode:"move",scalable:!0,cropBoxMovable:!0,cropBoxResizable:!0,crop:function(){"undefined"!==typeof r.current.cropper.getCroppedCanvas()&&r.current.cropper.getCroppedCanvas().toBlob((function(e){t(e)}),"image/jpeg")}})}var Ke=n(229);function Qe(e){var t=e.setFiles,n={border:"dashed 3px #eee",borderRadius:"5%",paddingTop:"30px",textAlign:"center"},r=Object(a.useCallback)((function(e){t(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[t]),c=Object(Ke.a)({onDrop:r}),s=c.getRootProps,o=c.getInputProps,i=c.isDragActive;return Object(z.jsxs)("div",Object(Te.a)(Object(Te.a)({},s()),{},{style:i?Object(Te.a)(Object(Te.a)({},n),{border:"dashed 3px green"}):n,children:[Object(z.jsx)("input",Object(Te.a)({},o())),Object(z.jsx)(M.a,{name:"upload",size:"huge"}),Object(z.jsx)(b.a,{content:"Drop image here"})]}))}function et(e){var t=e.userID,n=Object(a.useState)([]),r=Object(J.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(null),l=Object(J.a)(i,2),j=l[0],h=l[1],v=Object(a.useState)(!1),x=Object(J.a)(v,2),m=x[0],g=x[1],y=Object(a.useState)(null),w=Object(J.a)(y,2),S=w[0],C=w[1],k=Object(f.b)();function I(){return(I=Object(d.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!0);try{(n=new FileReader).readAsDataURL(j),n.onloadend=function(){C(n.result),console.log(t),console.log(n.result),localStorage.setItem("userPhoto",n.result),k(Xe(t,n.result)),k(ie(t,n.result))},g(!1),N(),document.location.reload()}catch(a){o.b.error(a.message),g(!1)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){s([]),h(null)}return Object(z.jsxs)(V.a,{children:[Object(z.jsxs)(V.a.Column,{width:4,children:[Object(z.jsx)($.a.Image,{avatar:!0,size:"small",src:S||"/assets/user.png"}),Object(z.jsx)(b.a,{color:"teal",sub:!0,content:"Step 1 - Add Photo"}),Object(z.jsx)(Qe,{setFiles:s})]}),Object(z.jsx)(V.a.Column,{width:1}),Object(z.jsxs)(V.a.Column,{width:4,children:[Object(z.jsx)(b.a,{color:"teal",sub:!0,content:"Step 2 - Resize"}),c.length>0&&Object(z.jsx)(Ze,{setImage:h,imagePreview:c[0].preview})]}),Object(z.jsx)(V.a.Column,{width:1}),Object(z.jsxs)(V.a.Column,{width:4,children:[Object(z.jsx)(b.a,{color:"teal",sub:!0,content:"Step 3 - Preview & upload"}),c.length>0&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{className:"img-preview",style:{minHeight:200,minWidth:200,overflow:"hidden"}}),Object(z.jsx)(p.a,{}),Object(z.jsxs)(O.a.Group,{children:[Object(z.jsx)(O.a,{loading:m,onClick:function(){return I.apply(this,arguments)},style:{width:100},positive:!0,icon:"check"}),Object(z.jsx)(O.a,{disabled:m,onClick:N,style:{width:100},icon:"close"})]})]})]})]})}function tt(e){var t=e.match;return Object(z.jsx)($e.a.Pane,{children:Object(z.jsxs)(V.a,{children:[Object(z.jsx)(V.a.Column,{width:16,children:Object(z.jsx)(b.a,{floated:"left",icon:"user",content:"Photo"})}),Object(z.jsx)(V.a.Column,{width:16,children:Object(z.jsx)(et,{userID:t.params.id})})]})})}var nt=function(){var e=Object(s.f)().key,t=Object(f.b)();return Object(a.useEffect)((function(){t(te())}),[t]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Me,{}),Object(z.jsx)(o.a,{position:"bottom-right",hideProgressBar:!0}),Object(z.jsx)(s.a,{exact:!0,path:"/",component:B}),Object(z.jsx)(s.a,{path:"/(.+)",render:function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Ue,{}),Object(z.jsxs)(i.a,{className:"main",children:[Object(z.jsx)(s.a,{exact:!0,path:"/events",component:pe}),Object(z.jsx)(s.a,{path:"/events/:id",component:Se}),Object(z.jsx)(s.a,{path:["/createEvent","/manage/:id"],component:ke},e),Object(z.jsx)(s.a,{path:"/account",component:G}),Object(z.jsx)(s.a,{path:"/profile/:id",component:Ye}),Object(z.jsx)(s.a,{path:"/profile/photo/:id",component:tt})]})]})}})]})},at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,404)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},rt=n(66),ct={authenticated:!1,currentUser:null};var st=n(32),ot={events:[]};var it={currentUserProfile:null};var lt="ASYNC_ACTION_START",ut="ASYNC_ACTION_FINISH",dt="ASYNC_ACTION_ERROR";var jt={loading:!1,error:null};var bt=Object(rt.combineReducers)({event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Z:return Object(Te.a)(Object(Te.a)({},e),{},{events:[].concat(Object(st.a)(e.events),[a])});case K:return Object(Te.a)(Object(Te.a)({},e),{},{events:[].concat(Object(st.a)(e.events.filter((function(e){return e._id!==a._id}))),[a])});case Q:return Object(Te.a)(Object(Te.a)({},e),{},{events:Object(st.a)(e.events.filter((function(e){return e._id!==a})))});case ee:return Object(Te.a)(Object(Te.a)({},e),{},{events:a});default:return e}},modals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Pe:var r=a.modalType,c=a.modalProps;return{modalType:r,modalProps:c};case Ee:return null;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case m:return Object(Te.a)(Object(Te.a)({},e),{},{authenticated:!0,currentUser:{email:a.email,photoURL:"assets/user.png",uid:a.uid,displayName:a.displayName,providerId:a.providerData[0].providerId}});case g:return localStorage.clear(),console.log("Signed Out Successfully!"),Object(Te.a)(Object(Te.a)({},e),{},{authenticated:!1,currentUser:null});case y:return console.log(a),localStorage.setItem("profile",JSON.stringify(Object(Te.a)({},a))),Object(Te.a)(Object(Te.a)({},e),{},{authenticated:!0,currentUser:a});default:return e}},async:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case lt:return Object(Te.a)(Object(Te.a)({},e),{},{loading:!0,error:null});case ut:return Object(Te.a)(Object(Te.a)({},e),{},{loading:!1});case dt:return Object(Te.a)(Object(Te.a)({},e),{},{loading:!1,error:a});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Ve:case He:return Object(Te.a)(Object(Te.a)({},e),{},{currentUserProfile:a});default:return e}}}),pt=n(226),ht=n(227);var Ot=Object(rt.createStore)(bt,Object(pt.composeWithDevTools)(Object(rt.applyMiddleware)(ht.a))),vt=document.getElementById("root");c.a.render(Object(z.jsx)(f.a,{store:Ot,children:Object(z.jsx)(X.a,{children:Object(z.jsx)(nt,{})})}),vt),at()}},[[376,1,2]]]);
//# sourceMappingURL=main.83d7f390.chunk.js.map