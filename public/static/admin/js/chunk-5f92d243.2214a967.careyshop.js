(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f92d243"],{"71f2":function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return d}));var a=e("5530"),o=e("bc07"),i="/v1/notice_tpl";function c(t){return Object(o["a"])({url:i,method:"post",data:{method:"get.notice.tpl.list",code:t}})}function u(t){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"set.notice.tpl.item"},t)})}function d(t,n){return Object(o["a"])({url:i,method:"post",data:{method:"set.notice.tpl.status",notice_tpl_id:t,status:n}})}},e496:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("cs-container",[e("page-main",{attrs:{loading:t.loading,"table-data":t.table,"tpl-code":t.tplCode},on:{"update:tplCode":function(n){t.tplCode=n},"update:tpl-code":function(n){t.tplCode=n}}})],1)},o=[],i=(e("d3b7"),e("71f2")),c={name:"setting-setting-template",components:{PageMain:function(){return e.e("chunk-08805af8").then(e.bind(null,"d908"))}},data:function(){return{table:[],loading:!1,tplCode:"sms"}},watch:{tplCode:{handler:function(t){var n=this;this.loading=!0,Object(i["a"])(t).then((function(t){n.table=t.data||[]})).finally((function(){n.loading=!1}))},immediate:!0}}},u=c,d=e("2877"),l=Object(d["a"])(u,a,o,!1,null,null,null);n["default"]=l.exports}}]);