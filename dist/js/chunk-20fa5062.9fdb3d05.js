(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20fa5062"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),o=(a("4b85"),a("2b0e")),s=a("d9f7"),r=a("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(a,n){return a[t+Object(r["D"])(n)]=e(),a}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(h),justify:Object.keys(f),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var n=b[t];if(null!=a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var w=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:v}},f),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var a=e.props,i=e.data,o=e.children,r="";for(var l in a)r+=String(a[l]);var c=w.get(r);return c||function(){var t,e;for(e in c=[],m)m[e].forEach((function(t){var n=a[t],i=y(e,t,n);i&&c.push(i)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),w.set(r,c)}(),t(a.tag,Object(s["a"])(i,{staticClass:"row",class:c}),o)}})},"3a2f":function(t,e,a){"use strict";a("a9e3");var n=a("ade3"),i=(a("9734"),a("4ad4")),o=a("a9ad"),s=a("16b7"),r=a("b848"),l=a("75eb"),c=a("f573"),u=a("f2e7"),d=a("80d2"),h=a("d9bd"),v=a("58df");e["a"]=Object(v["a"])(o["a"],s["a"],r["a"],l["a"],c["a"],u["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=i+e.width/2-a.width/2:(this.left||this.right)&&(o=i+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!1!==this.attach?e.offsetTop:e.top,i=0;return this.top||this.bottom?i=n+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=n+e.height/2-a.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(i+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(d["g"])(this.maxWidth),minWidth:Object(d["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(d["s"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=i["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===d["w"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"5c3a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"dashboard",fluid:"",tag:"section"}},[t._v(" dashboard "),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4"}},[t.loaded?a("base-material-chart-card",{attrs:{data:t.emailsSubscriptionChart.data,options:t.emailsSubscriptionChart.options,"responsive-options":t.emailsSubscriptionChart.responsiveOptions,color:"#E91E63","hover-reveal":"",type:"Bar"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,i=e.on;return[a("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",n,!1),i),[a("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}],null,!1,3068127266)},[a("span",[t._v("Refresh")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,i=e.on;return[a("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",n,!1),i),[a("v-icon",[t._v("mdi-pencil")])],1)]}}],null,!1,2017014384)},[a("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("updated 1 minutes ago")])]},proxy:!0}],null,!1,2223173936)},[a("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v("Parking Views")]),a("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" Parking visits During year ")])]):t._e()],1),a("v-col",{attrs:{cols:"12",lg:"4"}},[t.loaded?a("base-material-chart-card",{attrs:{data:t.dailySalesChart.data,options:t.dailySalesChart.options,color:"success","hover-reveal":"",type:"Line"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,i=e.on;return[a("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",n,!1),i),[a("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}],null,!1,3068127266)},[a("span",[t._v("Refresh")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,i=e.on;return[a("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",n,!1),i),[a("v-icon",[t._v("mdi-pencil")])],1)]}}],null,!1,2017014384)},[a("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("updated Just now")])]},proxy:!0}],null,!1,761239963)},[a("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v("Weekly revenue")]),a("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[a("v-icon",{attrs:{color:"green",small:""}},[t._v(" mdi-arrow-up ")]),a("span",{staticClass:"green--text"},[t._v(" Week ")]),t._v(" parking visits average ")],1)]):t._e()],1),a("v-col",{attrs:{cols:"12",lg:"4"}},[t.loaded?a("base-material-chart-card",{attrs:{data:t.dataCompletedTasksChart.data,options:t.dataCompletedTasksChart.options,"hover-reveal":"",color:"info",type:"Line"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,i=e.on;return[a("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",n,!1),i),[a("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}],null,!1,3068127266)},[a("span",[t._v("Refresh")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,i=e.on;return[a("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",n,!1),i),[a("v-icon",[t._v("mdi-pencil")])],1)]}}],null,!1,2017014384)},[a("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("average based on 3 hours division")])]},proxy:!0}],null,!1,2306838394)},[a("h3",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" Parking Visits Average ")]),a("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" daily Visits Average ")])]):t._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[a("base-material-stats-card",{attrs:{color:"info",icon:"mdi-truck",title:"Registerd Cars",value:t.carNo,"sub-icon":"mdi-clock","sub-text":"Just Updated"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[a("base-material-stats-card",{attrs:{color:"primary",icon:"mdi-poll",title:"Parking Today Visits",value:t.visits,"sub-icon":"mdi-tag","sub-text":"Tracked from IUG Analytics"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[a("base-material-stats-card",{attrs:{color:"success",icon:"mdi-store",title:"Revenue",value:"$"+t.revenue,"sub-icon":"mdi-calendar","sub-text":"This year"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[a("base-material-stats-card",{attrs:{color:"orange",icon:"mdi-sofa",title:"Existing Cars",value:t.existingcars,"sub-icon":"mdi-alert","sub-icon-color":"yellow","sub-text":"Get More Space..."}})],1),1==t.user.role?a("v-col",{attrs:{cols:"12",md:"12"}},[a("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"warning"},scopedSlots:t._u([{key:"heading",fn:function(){return[a("div",{staticClass:"display-2 font-weight-light"},[t._v("Employees Stats")]),a("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" New employees since last Update ")])]},proxy:!0}],null,!1,221116024)},[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.users}})],1)],1)],1):t._e()],1)],1)},i=[],o=a("5530"),s=a("2f62"),r={name:"DashboardDashboard",data:function(){return{dataCompletedTasksChart:{data:{labels:["12am","3pm","6pm","9pm","12pm","3am","6am","9am"],series:[[230,750,450,300,280,240,200,190]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}},headers:[{sortable:!1,text:"ID",value:"id"},{sortable:!1,text:"Name",value:"empName"},{sortable:!1,text:"Address",value:"empAddress",align:"left"},{sortable:!1,text:"Email",value:"empUserName",align:"left"},{sortable:!0,text:"revenue this month",value:"Invoices[0].sumInvoiceAmount",align:"right"}],items:[{id:1,name:"Dakota Rice",country:"Niger",city:"Oud-Tunrhout",salary:"$35,738"},{id:2,name:"Minerva Hooper",country:"Curaçao",city:"Sinaai-Waas",salary:"$23,738"},{id:3,name:"Sage Rodriguez",country:"Netherlands",city:"Overland Park",salary:"$56,142"},{id:4,name:"Philip Chanley",country:"Korea, South",city:"Gloucester",salary:"$38,735"},{id:5,name:"Doris Greene",country:"Malawi",city:"Feldkirchen in Kārnten",salary:"$63,542"}],tabs:0,tasks:{0:[{text:'Sign contract for "What are conference organizers afraid of?"',value:!0},{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!1},{text:"Create 4 Invisible User Experiences you Never Knew About",value:!0}],1:[{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!1}],2:[{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!0}]},list:{0:!1,1:!1,2:!1}}},computed:Object(o["a"])(Object(o["a"])({},Object(s["d"])("statistics",{myseries:function(t){return t.transactions},invoices:function(t){return t.invoices},carNo:function(t){return t.carsNo},visits:function(t){return t.parking_visits},revenue:function(t){return t.total_revenue},existingcars:function(t){return t.existingCars},users:function(t){return t.users},loaded:function(t){return t.loaded},dailySalesChart:function(t){return{data:{labels:["M","T","W","T","F","S","S"],series:[t.invoices]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}}}},emailsSubscriptionChart:function(t){return{data:{labels:["Ja","Fe","Ma","Ap","Mai","Ju","Jul","Au","Se","Oc","No","De"],series:[t.transactions]},options:{axisX:{showGrid:!1},low:0,high:100,chartPadding:{top:0,right:5,bottom:0,left:0}},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]}}})),Object(s["d"])("auth",{user:function(t){return t.user}})),mounted:function(){this.$store.dispatch("statistics/index")},watch:{loaded:{handler:function(t){t&&(this.$router.push("/"),this.loaded=!1)},deep:!0}},methods:{complete:function(t){this.list[t]=!this.list[t]}},beforeCreate:function(){console.log(this.$store.state.auth.logged),this.$store.state.auth.logged||(console.log("ليش بتخش هان يا حيوان "),this.$router.push("/login"))}},l=r,c=a("2877"),u=a("6544"),d=a.n(u),h=a("8336"),v=a("99d9"),f=a("62ad"),p=a("a523"),g=a("8fea"),m=a("132d"),b=a("0fd9"),y=a("3a2f"),w=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:h["a"],VCardText:v["b"],VCol:f["a"],VContainer:p["a"],VDataTable:g["a"],VIcon:m["a"],VRow:b["a"],VTooltip:y["a"]})},9734:function(t,e,a){}}]);
//# sourceMappingURL=chunk-20fa5062.9fdb3d05.js.map