_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"9VTN":function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coin-info",function(){return c("flQ1")}])},flQ1:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return p}));var s=c("nKUr"),n=c("KQm4"),r=c("y5kw"),l=c("q1tI"),o=c("0PHq"),i=c("JtkA"),a=c("ktpT"),j=c("LcVh"),d=c("vU+/"),u=c("HEOa"),b=c("40OB"),O=c("20a2"),x=c("gbgE"),h=c("vlZu"),f=c("kGCO");function p(){Object(u.c)();var e=Object(O.useRouter)().query.coin,t=Object(u.d)(),c=t.user,p=(t.isFollowingCoin,Object(b.b)(null,"coin_stats",{type:e},[e,c],(function(){return null!=e})).result),m=Object(l.useState)([]),v=m[0],g=m[1],w=Object(l.useState)("interaction"),_=w[0],N=w[1],y=Object(l.useState)("descending"),T=y[0],U=y[1];return Object(l.useEffect)((function(){p&&g(p.top_sources.map((function(e){return e.source})))}),[p]),e?Object(s.jsxs)("div",{className:"animate-fade-in-down grid grid-cols-12 mt-2 gap-2",children:[Object(s.jsxs)("div",{className:"col-start-2 col-span-2",children:[Object(s.jsxs)(r.a,{collapsable:!1,children:[Object(s.jsx)(r.a.Header,{children:Object(s.jsxs)("div",{className:"grid grid-cols-1 mt-2 place-items-center",children:[Object(s.jsx)("span",{className:"text-4xl",children:Object(j.d)(e)}),Object(s.jsx)("span",{className:"mt-2",children:e.toUpperCase()}),Object(s.jsxs)("span",{className:"mt-2 font-light",children:[(null===p||void 0===p?void 0:p.num_followers)&&p.num_followers," Followers"]}),Object(s.jsx)("div",{className:"mt-2",children:Object(s.jsx)(d.a,{followType:"coin",followTarget:e})})]})}),Object(s.jsx)(r.a.Body,{})]}),Object(s.jsxs)(r.a,{collapsable:!1,children:[Object(s.jsx)(r.a.Header,{children:"Top Relevant Sources"}),Object(s.jsx)(r.a.Body,{children:null!==p&&void 0!==p&&p.top_sources&&p.top_sources.length>0?p.top_sources.map((function(e){return Object(s.jsx)("div",{className:"mt-2",children:Object(s.jsx)(i.a,{source:e.source,isSelected:function(){return v.includes(e.source)},onToggle:function(){v.includes(e.source)?g(v.filter((function(t){return t!==e.source}))):g([].concat(Object(n.a)(v),[e.source]))}})})})):"There are no sources."}),Object(s.jsx)(r.a.Footer,{children:Object(s.jsxs)("div",{className:"flex flex-row",children:[Object(s.jsx)(o.a,{onClick:function(){var e;return g(null===p||void 0===p||null===(e=p.top_sources)||void 0===e?void 0:e.map((function(e){return e.source})))},disabled:function(){return null==(null===p||void 0===p?void 0:p.top_sources)||v.length===p.top_sources.length},children:"Select all"}),Object(s.jsx)("span",{className:"flex-grow"}),Object(s.jsx)(o.a,{onClick:function(){return g([])},disabled:function(){return 0===v.length},children:"Unselect all"}),Object(s.jsx)("span",{className:"flex-grow"})]})})]})]}),Object(s.jsxs)("div",{className:"col-start-4 col-span-6",children:[Object(s.jsx)("div",{className:"h-48 bg-gray-900 rounded-md overflow-hidden mb-2",children:(null===p||void 0===p?void 0:p.last_price)&&p&&Object(s.jsx)(f.a,{coinType:e,timeWindow:0,showPostVolume:!0,autoUpdateSetting:!0})}),Object(s.jsxs)(r.a,{restrictedHeight:!1,collapsable:!1,children:[Object(s.jsx)(r.a.Header,{children:Object(s.jsxs)("div",{className:"flex items-center flex-justify-between font-normal",children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{children:["Showing posts about"," "]}),Object(s.jsx)("span",{className:"font-semibold",children:e.toUpperCase()})]}),Object(s.jsx)("span",{class:"flex-grow"}),Object(s.jsx)(h.a,{minimal:!0,sortByState:[_,N],sortOrderState:[T,U]})]})}),Object(s.jsx)(r.a.Body,{children:Object(s.jsx)(x.a,{selectedRange:"all",coinType:e,selectedSources:v,sortBy:_,sortOrder:T,disabled:0===v.length})})]})]}),Object(s.jsxs)("div",{className:"col-start-10 col-span-2",children:[Object(s.jsxs)(r.a,{collapsable:!1,children:[Object(s.jsx)(r.a.Header,{children:"Top Active Users"}),Object(s.jsx)(r.a.Body,{children:null!==p&&void 0!==p&&p.top_active_users&&p.top_active_users.length>0?p.top_active_users.map((function(e){return Object(s.jsx)("div",{className:"mt-2",children:Object(s.jsx)(a.a,{source:e.source,button:Object(s.jsx)(s.Fragment,{children:e.total_msg}),singleLine:!0})})})):"There are no sources."})]}),Object(s.jsxs)(r.a,{collapsable:!1,children:[Object(s.jsx)(r.a.Header,{children:"Top Interacted Users"}),Object(s.jsx)(r.a.Body,{children:null!==p&&void 0!==p&&p.top_interacted_users&&p.top_interacted_users.length>0?p.top_interacted_users.map((function(e){return Object(s.jsx)("div",{className:"mt-2",children:Object(s.jsx)(a.a,{source:e.source,button:Object(s.jsx)(s.Fragment,{children:e.total_interaction}),singleLine:!0})})})):"There are no sources."})]})]})]}):"..."}},ktpT:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var s=c("nKUr"),n=c("LcVh"),r=c("6lE0"),l=c("rCLJ"),o=c("YFqc"),i=c.n(o),a=function(e){var t=e.source,c=e.button,o=e.singleLine,a=void 0!==o&&o,j=function(){return!t.startsWith("*@")},d=function(){return Object(n.i)(t)[1]};return t&&Object(s.jsxs)(r.a,{badgeColor:Object(n.g)(t),colorizer:function(){return"gray-850"},children:[Object(s.jsx)(r.a.Left,{children:Object(s.jsx)("div",{className:"text-4xl text-".concat(Object(n.g)(t)," ").concat(a?"p-2":"p-4"),children:j()?Object(s.jsx)(l.a,{}):Object(n.h)(t)})}),Object(s.jsx)(r.a.Middle,{children:Object(s.jsxs)("div",{className:"flex flex-col",children:[Object(s.jsx)("div",{className:"flex flex-row items-center",children:Object(s.jsx)("span",{className:"hover:underline",children:j()?Object(s.jsx)(i.a,{href:"/user-info?user=".concat(t),children:"*"===Object(n.i)(t)[0]?null:Object(n.i)(t)[0]}):Object(s.jsx)(i.a,{href:"/source-info?source=".concat(t),children:d()})})}),!a&&j()&&Object(s.jsxs)("div",{className:"flex flex-row items-center text-xs text-".concat("gray-500"),children:[Object(s.jsx)("span",{children:Object(n.h)(t)}),Object(s.jsx)("span",{className:"ml-1 hover:underline",children:Object(s.jsx)(i.a,{href:"/source-info?source=".concat(t),children:d()})})]})]})}),Object(s.jsx)(r.a.Right,{children:Object(s.jsx)("div",{className:"px-3",children:c})})]})}},"vU+/":function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var s=c("nKUr"),n=c("q1tI"),r=c("HEOa"),l=c("0PHq"),o=function(e){var t=e.followType,c=e.followTarget,o=Object(r.d)(),i=o.user,a=o.updateUser,j=o.isFollowing,d=Object(n.useState)(!1),u=d[0],b=d[1];return Object(n.useEffect)((function(){b(!1)}),[i]),Object(s.jsx)(l.a,{onClick:function(){return function(){b(!0);var e=j(t,c)?"follow/delete":"follow/create";a(e,{type:t,target:c,notify:!1})}()},textColor:j(t,c)?"yellow-400":"green-400",fullWidth:!0,isDisabled:function(){return u},width:24,children:j(t,c)?"Unfollow":"Follow"})}}},[["9VTN",0,2,4,6,3,7,8,9,11,12,16,1,5,10,13,15]]]);