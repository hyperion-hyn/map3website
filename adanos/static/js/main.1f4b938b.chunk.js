(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{327:function(e,t){},348:function(e,t,a){e.exports=a(815)},353:function(e,t,a){},365:function(e,t){},371:function(e,t){},815:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a(40),o=a(51),i=a(49),s=a(52),c=a(1),l=a.n(c),u=a(46),m=a.n(u);a(353),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(152),g=a.n(p),d=a(101),h=a(97),f=a(151),v=a(338),b=a.n(v),y=a(339),O=a.n(y),S=a(150),E=a.n(S),x=a(329),j=a.n(x),T=a(330),w=a.n(T),N=a(331),C=a.n(N),I=a(38),k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={selectedSampleId:0},a._handleChange=function(e){return function(e){a.setState({selectedSampleId:parseInt(e.target.value)})}},a._launcher=function(){var e=a.state.selectedSampleId;0===e&&(e=a.props.sampleCoords[0].id),a.props.launch(parseInt(e))},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.sampleCoords,n=e.intl;return l.a.createElement("div",{className:t.root},l.a.createElement(E.a,{className:t.formControl},l.a.createElement(j.a,{className:t.selectLabel,component:"div"},l.a.createElement(I.a,{id:"selectLocationLabel"})),l.a.createElement(w.a,{value:this.state.selectedSampleId,onChange:this._handleChange(),name:"sampleCoordinate",className:t.selectEmpty},a.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},"".concat(n.formatMessage({id:e.intlId})))}))),l.a.createElement(C.a,{onClick:this._launcher,color:"secondary","aria-label":"Add",className:t.launcher},l.a.createElement(I.a,{id:"start"})))}}]),t}(c.Component),_=Object(f.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},formControl:{display:"flex",flexDirection:"row",alignItems:"center",minWidth:200,marginTop:"50px"},selectLabel:{marginRight:"20px",fontSize:"16px",color:"#666"},selectEmpty:{},launcher:{margin:e.spacing.unit,width:"100px",height:"100px",color:"white",marginTop:"60px",fontSize:"20px",fontWeight:400}}})(Object(I.d)(k)),M=a(208),R=a.n(M),L=a(332),B=a.n(L),A=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).scrollTop=0,a.scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"smooth"})},a.onScroll=function(e){a.scrollTop=e.currentTarget.scrollTop},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){this.messagesBox.scrollHeight-this.messagesBox.clientHeight-70<=this.scrollTop&&this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.testingItems,r=t.testingSample,o=t.requestNum,i=t.intl,s=(n.length/o*100).toFixed(1);return l.a.createElement("div",{className:a.root},l.a.createElement("div",{className:a.tipTitle},l.a.createElement(I.a,{id:"testRunningLabel",values:{where:l.a.createElement("font",{color:"#232323"}," [","".concat(i.formatMessage({id:r.intlId})," ").concat(r.coordinate.latitude,",").concat(r.coordinate.longitude),"] ")}})),l.a.createElement("div",{className:a.progressBox},l.a.createElement(R.a,{className:a.progressBarBg,size:100,variant:"static",value:100,color:"inherit"}),l.a.createElement(R.a,{className:a.progressBar,size:100,variant:s>99?"indeterminate":"static",value:parseInt(s)}),l.a.createElement("div",{className:a.progressLabel},s,"%")),l.a.createElement("div",{className:a.detailBox,onScroll:this.onScroll,ref:function(t){e.messagesBox=t}},n.map(function(e){var t=e.duration<100?a.green:a.warn,n="finish"===e.state?l.a.createElement("div",{className:t}," ",parseInt(e.duration),"ms"):"error"===e.state?l.a.createElement("div",{className:a.error},"error"):l.a.createElement("div",{className:a.gray},"running...");return l.a.createElement("div",{className:a.testItem,key:e.id},l.a.createElement(B.a,{className:a.fromType,label:e.type,color:"map3"===e.type?"primary":"secondary"}),l.a.createElement("div",{style:{fontSize:"14px",color:"#999"}},e.url," "),n)}),l.a.createElement("div",{ref:function(t){e.messagesEnd=t}})))}}]),t}(c.Component),P=Object(f.withStyles)(function(e){return{root:{},tipTitle:{margin:"16px",color:"#666"},progressBox:{position:"relative",marginTop:"24px",display:"flex",alignItems:"center",justifyContent:"center"},progressBar:{},progressBarBg:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%) !important",color:"#ccc"},progressLabel:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",fontWeight:400,color:"#666"},detailBox:{marginTop:"32px",marginLeft:"16px",marginRight:"16px",padding:"8px",color:"#666",height:"300px",overflow:"auto",backgroundColor:"white"},testItem:{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"8px"},fromType:{color:"white",height:"20px",marginRight:"16px",fontSize:"12px"},green:{color:"#47a23a",marginLeft:"16px",fontSize:"14px"},warn:{color:"#f98300",marginLeft:"16px",fontSize:"14px"},error:{color:"#ce3733",marginLeft:"16px",fontSize:"14px"},gray:{color:"#666",marginLeft:"16px",fontSize:"14px"}}})(Object(I.d)(A)),z=a(333),q=a.n(z),U=a(334),F=a.n(U),G=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).getOption=function(){var e=a.props,t=e.intl,n=e.testResult;return{title:{text:t.formatMessage({id:"compareResult"})},tooltip:{trigger:"axis",formatter:function(e){var a="<strong>Zoom Level ".concat(e[0].name.split("-")[1],"</strong><br/><br/>");return e[0]&&(a+="map3 ".concat(t.formatMessage({id:"avgTime"}),": ").concat(e[0].value.toFixed(1)," ms<br/>")),e[1]&&(a+="map3 ".concat(t.formatMessage({id:"minTime"}),": ").concat(e[1].value.toFixed(1)," ms<br/>")),e[2]&&(a+="map3 ".concat(t.formatMessage({id:"maxTime"}),": ").concat((e[2].value+e[1].value).toFixed(1)," ms<br/><br/>")),e[3]&&(a+="osm ".concat(t.formatMessage({id:"avgTime"}),": ").concat(e[3].value.toFixed(1)," ms<br/>")),e[4]&&(a+="osm ".concat(t.formatMessage({id:"minTime"}),": ").concat(e[4].value.toFixed(1)," ms<br/>")),e[5]&&(a+="osm ".concat(t.formatMessage({id:"maxTime"}),": ").concat((e[5].value+e[4].value).toFixed(1)," ms<br/>")),a}},legend:{data:["map3","osm"]},grid:{left:"4%",right:"4%",bottom:"10%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,name:t.formatMessage({id:"fineness"}),nameLocation:"center",nameTextStyle:{fontWeight:"bold",fontSize:"14"},nameGap:30,splitLine:{show:!1},data:function(){for(var e=[],t=1;t<=14;t++)e.push("L-".concat(t));return e}()}],yAxis:[{type:"value",name:t.formatMessage({id:"loadTime"}),nameLocation:"center",nameTextStyle:{fontWeight:"bold",fontSize:"14"},nameGap:78,axisLabel:{formatter:"{value} ms"}}],series:[{name:"map3Avg",type:"line",itemStyle:{color:"#47a23a",borderColor:"#47a23a"},smooth:!0,symbolOffset:["-50%",0],data:function(){for(var e=n.map3,t=[],a=0;a<e.length;a++)t.push(e[a][2]);return t}()},{name:"map3Min",type:"bar",stack:"map3",itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:function(){for(var e=n.map3,t=[],a=0;a<e.length;a++)t.push(e[a][0]);return t}()},{name:"map3",type:"bar",stack:"map3",barWidth:2,itemStyle:{color:"#47a23a",borderColor:"#47a23a"},data:function(){for(var e=n.map3,t=[],a=0;a<e.length;a++)t.push(e[a][1]-e[a][0]);return t}()},{name:"osmAvg",type:"line",itemStyle:{color:"#e90046",borderColor:"#e90046"},smooth:!0,symbolOffset:["50%",0],data:function(){for(var e=n.osm,t=[],a=0;a<e.length;a++)t.push(e[a][2]);return t}()},{name:"osmMin",type:"bar",stack:"osm",itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:function(){for(var e=n.osm,t=[],a=0;a<e.length;a++)t.push(e[a][0]);return t}()},{name:"osm",type:"bar",stack:"osm",barWidth:2,barGap:"100%",itemStyle:{color:"#e90046",borderColor:"#e90046"},data:function(){for(var e=n.osm,t=[],a=0;a<e.length;a++)t.push(e[a][1]-e[a][0]);return t}()}]}},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.testAgain;return l.a.createElement("div",{className:t.root},l.a.createElement(q.a,{option:this.getOption(),style:{height:"350px",width:"90%"},notMerge:!1,className:"react_for_echarts"}),l.a.createElement(F.a,{onClick:a,variant:"contained",size:"large",color:"primary",className:t.btnTestAgain},l.a.createElement(I.a,{id:"testAgain"})))}}]),t}(c.Component),D=Object(f.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"40px"},btnTestAgain:{marginTop:"40px"}}})(Object(I.d)(G)),J="requestChangeUserName",W="receivedUserName",H="requestUserNameFail",K="cancelRequestUserName",V="addUserLocationCoordinate",X="benchmark",Z="preStart",$="tickRunningItem",Q="calculateItemResult",Y="tickErrorItem",ee="tickFinishItem",te="finishBenchmark",ae="testAgain",ne="changeLanguage";function re(e){return{type:ee,item:e}}function oe(e){return{type:te,maxLevel:e}}var ie={PROCESS_STATE_START:1,PROCESS_STATE_RUNNING:2,PROCESS_STATE_FINISH:3},se=[{lang:"en",desc:"English",messages:{title:"Benchmark of map service quality",selectLocationLabel:"Select targeted map data",start:"Start",testRunningLabel:"Running test {where}",testAgain:"Test again",compareResult:"Test result",avgTime:"avg time",minTime:"min time",maxTime:"max time",myPosition:"My location",loadTime:"load time",fineness:"graininess",BandungCityPark:"Bandung City Plaza",BandungShoppingCenter:"Bandung Shopping Center",JakartaMilitaryMuseum:"Jakarta Military Museum",JakartaGBKS:"Jakarta Gloria Bung Karno Stadium"}},{lang:"zh",desc:"\u7b80\u4f53\u4e2d\u6587",messages:{title:"\u5730\u56fe\u670d\u52a1\u8d28\u91cf\u6d4b\u8bd5",selectLocationLabel:"\u9009\u62e9\u6d4b\u8bd5\u4f4d\u7f6e\uff1a",start:"\u542f\u52a8",testRunningLabel:"\u6b63\u5728\u6d4b\u8bd5 {where}",testAgain:"\u518d\u6d4b\u4e00\u6b21",compareResult:"\u6d4b\u901f\u7ed3\u679c",avgTime:"\u5e73\u5747\u65f6\u95f4",minTime:"\u6700\u5c0f\u65f6\u95f4",maxTime:"\u6700\u5927\u65f6\u95f4",myPosition:"\u6211\u7684\u4f4d\u7f6e",loadTime:"\u52a0\u8f7d\u65f6\u95f4",fineness:"\u7cbe\u7ec6\u5ea6",BandungCityPark:"\u4e07\u9686\u57ce\u5e02\u5e7f\u573a",BandungShoppingCenter:"\u4e07\u9686\u8d2d\u7269\u4e2d\u5fc3",JakartaMilitaryMuseum:"\u96c5\u52a0\u8fbe\u519b\u4e8b\u535a\u7269\u9986",JakartaGBKS:"\u96c5\u52a0\u8fbe\u683c\u7f57\u62c9\u84ec\u5361\u8bfa\u4f53\u80b2\u573a"}}],ce=a(335),le=a.n(ce),ue=a(336),me=a.n(ue),pe=a(337),ge=a.n(pe),de=a(341),he=a.n(de),fe=a(340),ve=a.n(fe),be=a(206),ye=a.n(be);Object(I.c)([].concat(Object(d.a)(le.a),Object(d.a)(me.a),Object(d.a)(ge.a)));var Oe=Object(f.withStyles)(function(e){return{root:{},input:{color:"white",position:"relative",fontSize:16,width:"auto",minWidth:"70px",textAlign:"right"}}})(ye.a),Se=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={open:!1},a._launch=function(e){var t=a.props.process.sampleCoords.filter(function(t){return t.id===e});if(t&&t.length>0){var n=t[0];a.props.benchmark(n)}},a._testAgain=function(){a.props.testAgain()},a._getLocation=function(){navigator.geolocation.getCurrentPosition(function(e){var t={id:1,intlId:"myPosition",coordinate:{longitude:e.coords.longitude,latitude:e.coords.latitude}};a.props.addUserLocationSample(t)},function(e){console.log(e)})},a.handleLanguageChange=function(e){a.props.changeLanguage(e.target.value)},a.handleClose=function(){a.setState({open:!1})},a.handleOpen=function(){a.setState({open:!0})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e._getLocation()},200)}},{key:"render",value:function(){var e,t=this.props,a=t.classes,n=t.process,r=t.locales;switch(n.state){case ie.PROCESS_STATE_START:e=l.a.createElement(_,{launch:this._launch,sampleCoords:n.sampleCoords});break;case ie.PROCESS_STATE_RUNNING:e=l.a.createElement(P,{testingItems:n.testingItems,testingSample:n.testingSample,requestNum:n.requestNum});break;case ie.PROCESS_STATE_FINISH:e=l.a.createElement(D,{testAgain:this._testAgain,testingItems:n.testingItems,testResult:n.testResult});break;default:e=l.a.createElement("div",null)}return l.a.createElement("div",{className:a.root},l.a.createElement(b.a,{position:"static"},l.a.createElement(O.a,null,l.a.createElement("img",{src:"img/logo.svg",alt:"logo",className:a.logoImg}),l.a.createElement(g.a,{variant:"h6",color:"inherit",className:a.grow},l.a.createElement(I.a,{id:"title",description:"title of website"})),l.a.createElement("div",null,l.a.createElement(E.a,{className:a.languageFormControl},l.a.createElement(ve.a,{open:this.state.open,onClose:this.handleClose,onOpen:this.handleOpen,value:r.lang,onChange:this.handleLanguageChange,IconComponent:function(){return l.a.createElement("div",null)},input:l.a.createElement(Oe,{name:"age",id:"age-customized-select"})},se.map(function(e){return l.a.createElement(he.a,{key:e.lang,value:e.lang},e.desc)})))))),l.a.createElement("div",{className:a.content},e))}}]),t}(c.Component),Ee=Object(h.b)(function(e,t){return{userName:e.user.userName,userNameState:e.user.userNameState,process:e.process,locales:e.locales}},{addUserLocationSample:function(e){return{type:V,userSample:e}},benchmark:function(e){return{type:X,sample:e}},testAgain:function(){return{type:ae}},tickFinishItem:re,finishBenchmark:oe,changeLanguage:function(e){return{type:ne,lang:e}}})(Object(f.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column",flexGrow:1,height:"100vh",width:"100%"},content:{},grow:{flexGrow:1,color:"#fff"},logoImg:{width:"40px",height:"40px",marginLeft:-12,marginRight:20},languageFormControl:{color:"white"}}})(Object(I.d)(Se))),xe=a(823),je=a(826),Te=a(827),we=a(342),Ne=a.n(we),Ce=Object(f.createMuiTheme)({typography:{useNextVariants:!0}});var Ie=function(e){return function(t){return l.a.createElement(f.MuiThemeProvider,{theme:Ce},l.a.createElement(Ne.a,null),l.a.createElement(e,t))}},ke=a(65),_e=a(822),Me=a(36),Re={userName:"LiLei",userNameState:{loading:!1,errorMsg:"",canceled:!1}};var Le={state:ie.PROCESS_STATE_START,sampleCoords:[{id:2,intlId:"BandungCityPark",coordinate:{longitude:107.60719,latitude:-6.921487}},{id:3,intlId:"BandungShoppingCenter",coordinate:{longitude:107.605327,latitude:-6.893337}},{id:5,intlId:"JakartaGBKS",coordinate:{longitude:106.802769,latitude:-6.218696}}],testingSample:{},testResult:{},requestNum:0,testingItems:[]};var Be=sessionStorage.getItem("lang");Be||(Be=navigator.language.split("-")[0],console.log(Be));var Ae=ze(Be),Pe=Object(Me.a)({},Ae);function ze(e){for(var t=se[0],a=0;a<se.length;a++)if(se[a].lang===e){t=se[a];break}return t}var qe=Object(ke.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(Me.a)({},e,{userNameState:{loading:!0,errorMsg:""}});case W:return Object(Me.a)({},e,{userName:t.payload,userNameState:{loading:!1,errorMsg:""}});case H:return Object(Me.a)({},e,{userNameState:{loading:!1,errorMsg:t.payload}});case K:return Object(Me.a)({},e,{userNameState:{canceled:!0}});default:return e}},process:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:for(var a=e.sampleCoords,n=t.userSample,r=0;r<a.length;r++){if(a[r].id===n.id){a.splice(r,1);break}r++}return a.unshift(n),Object(Me.a)({},e,{sampleCoords:a});case X:return Object(Me.a)({},e,{state:ie.PROCESS_STATE_RUNNING,testingSample:t.sample,testResult:{},testingItems:[]});case Z:return Object(Me.a)({},e,{requestNum:t.requestNum});case Q:return e.testingItems.push(t.item),Object(Me.a)({},e);case ee:var o=e.testingItems,i=function(e,t){for(var a=e.length-1;a>=0;a--)if(e[a].id===t.id)return a;return-1}(o,t.item);return-1!==i?(o[i]=Object(Me.a)({},o[i],t.item),Object(Me.a)({},e)):e;case Y:return e.testingItems.push(t.item),Object(Me.a)({},e);case te:var s=function(e,t){var a={},n=["osm","map3"],r={};return n.forEach(function(e){for(var a=1;a<=t;a++)r[e]||(r[e]={}),r[e][a]||(r[e][a]={}),r[e][a].min=0,r[e][a].max=0,r[e][a].avg=0,r[e][a].sum=0,r[e][a].count=0,r[e][a].hadSet=!1}),e.forEach(function(e){var t=parseInt(e.z);"finish"===e.state&&(0===r[e.type][t].min&&0===r[e.type][t].max?(r[e.type][t].min=e.duration,r[e.type][t].max=e.duration):(e.duration>r[e.type][t].max&&(r[e.type][t].max=e.duration),e.duration<r[e.type][t].min&&(r[e.type][t].min=e.duration)),r[e.type][t].sum+=e.duration,r[e.type][t].count+=1,r[e.type][t].hadSet=!0)}),n.forEach(function(e){a[e]=[];for(var n=1;n<=t;n++)if(r[e][n].hadSet){var o=r[e][n].sum/r[e][n].count;a[e].push([r[e][n].min,r[e][n].max,o])}else a[e].push([0,0,0])}),a}(e.testingItems,t.maxLevel);return Object(Me.a)({},e,{state:ie.PROCESS_STATE_FINISH,testResult:s});case ae:return Object(Me.a)({},e,{testResult:{},state:ie.PROCESS_STATE_START});default:return e}},locales:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:var a=ze(t.lang);return Object(Me.a)({},a);default:return e}}}),Ue=a(824),Fe=a(344),Ge=a(164),De=a(343),Je=a(818),We=a(816),He=a(819),Ke=a(346),Ve=a(825),Xe=function(){return Ke.a(fetch("https://www.baidu.com/",{mode:"no-cors"})).pipe(Object(Ve.a)(1e3),Object(De.a)(function(e){var t=Math.random()>=.495;if(t)return"Moo"+t;throw new Error("my error")}))},Ze=a(347),$e=a(821),Qe=a(11);var Ye=function(){function e(t,a,r,o,i){Object(n.a)(this,e),this.z=t,this.x=a,this.y=r,this.lat=o,this.long=i}return Object(r.a)(e,[{key:"deg2num",value:function(){var e,t;this.x=(e=this.long,t=this.z,Math.floor((e+180)/360*Math.pow(2,t))),this.y=function(e,t){return Math.floor((1-Math.log(Math.tan(e*Math.PI/180)+1/Math.cos(e*Math.PI/180))/Math.PI)/2*Math.pow(2,t))}(this.lat,this.z)}},{key:"num2deg",value:function(){var e,t;this.long=(e=this.x,t=this.z,e/Math.pow(2,t)*360-180),this.lat=function(e,t){var a=Math.PI-2*Math.PI*e/Math.pow(2,t);return 180/Math.PI*Math.atan(.5*(Math.exp(a)-Math.exp(-a)))}(this.y,this.z)}},{key:"osmTileUrl",value:function(){return"https://c.tile.openstreetmap.org/".concat(this.z,"/").concat(this.x,"/").concat(this.y,".png")}},{key:"map3TileUrl",value:function(){return"https://tile.map3.network/v1/api/tile/".concat(this.z,"/").concat(this.x,"/").concat(this.y,".pbf")}}]),e}();function et(e,t,a){var n=new Ye(a,0,0,e,t);return n.deg2num(),n}var tt=a(820),at=function(e){var t=0,a=e.length,n=0;if(a>0)for(;n<a;)t=(t<<5)-t+e.charCodeAt(n++)|0;return t};function nt(e,t){return Object(Ke.a)(function(e,t){var a=null,n=new Promise(function(e,t){a=function(){t("abort promise")}}),r=Promise.race([e,n]);return setTimeout(function(){a()},t),r}(fetch("".concat(e,"&t=").concat((new Date).getTime()),{mode:"no-cors",cache:"no-cache"}),5e3).then(function(a){return{what:"requestFinish",item:it(e,t)||{id:at(e),url:e}}},function(a){console.log(a);var n=it(e,t);return n&&(n.state="error"),{what:"requestError",item:n||{id:at(e),url:e,state:"error"}}}))}var rt=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;Object(n.a)(this,e),this.tile=t,this.requestTimes=a}return Object(r.a)(e,[{key:"start",value:function(){var e=this;return Object(tt.a)(1,this.requestTimes).pipe(Object($e.a)(function(t){return Object(Ze.a)("".concat(e.tile.osmTileUrl(),"?osm_tile_t=").concat(t),"".concat(e.tile.map3TileUrl(),"?map3_tile_t=").concat(t))}),Object($e.a)(function(t){return Object(Ke.a)(nt(t,e.tile.z))}))}}]),e}();function ot(e){return e.responseEnd-e.startTime}function it(e,t){var a=st(e);return a&&(a.z=t),a}function st(e){if(e&&"string"==typeof e)for(var t=[{type:"osm",t:"?osm_tile_t="},{type:"map3",t:"?map3_tile_t="}],a=0;a<t.length;a++){var n=t[a],r=e.split(n.t);if(r.length>1)return{id:at(e),url:r[0],tick:r[1],type:n.type,state:"running",duration:0}}return null}var ct=Object(Ue.a)(function(e){return e.pipe(Object(Fe.a)(J),Object(Ge.a)(function(t){return Xe().pipe(Object(De.a)(function(e){return{type:W,payload:e.toUpperCase()}}),Object(Je.a)(e.pipe(Object(We.a)(function(e){return e.type===K}))),Object(He.a)(function(e){return Object(Ze.a)({type:H,payload:e.message})}))}))},function(e,t){return e.pipe(Object(Fe.a)(X),Object(Ge.a)(function(e){performance.clearResourceTimings(),performance.setResourceTimingBufferSize(5e3);var t=e.sample,a=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,n=[],r=1;r<=a;r++){var o=et(e,t,r);n.push(o)}return n}(t.coordinate.latitude,t.coordinate.longitude,14),n=2*a.length*6;return Ze.a.apply(void 0,[{what:"setRequestNum",num:n}].concat(Object(d.a)(a),[{what:"finish"}]))}),Object($e.a)(function(e){return"finish"===e.what?Object(Ze.a)(e).pipe(Object(Ve.a)(3e3)):"setRequestNum"===e.what?Object(Ze.a)(e):new rt(e,6).start()}),Object(De.a)(function(e){return"finish"===e.what?(function(e){var t={ip:"",coordinates:[],map3:[],osm:[]};t.coordinates.push(e.testingSample.coordinate.longitude),t.coordinates.push(e.testingSample.coordinate.latitude),e.testingItems.forEach(function(e){"finish"===e.state&&t[e.type]&&t[e.type].push({url:e.url,response_time:e.duration})}),fetch("https://adanos-analytics.map3.network/tile/adanos/record",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"data=".concat(JSON.stringify(t))}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}(t.value.process),oe(14)):"setRequestNum"===e.what?(n=e.num,{type:Z,requestNum:n}):"preRequest"===e.what?(a=e.item,{type:$,item:a}):"requestFinish"===e.what?function(e){return{type:Q,item:e}}(e.item):"requestError"===e.what?function(e,t){return{type:Y,item:e,error:t}}(e.item,e.error):void 0;var a,n}))},function(e){return e.pipe(Object(Fe.a)(Q),Object(Ve.a)(500),Object(Ge.a)(function(e){return new Qe.a(function(t){var a=10;!function n(){var r=e.item,o=function(e){for(var t="".concat(e.url,"?").concat(e.type,"_tile_t=").concat(e.tick),a=performance.getEntriesByType("resource"),n=a.length-1;n>=0;n--){var r=a[n];if(r.name.includes(t))return ot(r)}return-1}(r);-1===o?a>0?setTimeout(function(){n(),a--},500):(r.state="error",t.next(r),t.complete()):(r.duration=o,r.state="finish",t.next(r),t.complete())}()})}),Object(De.a)(function(e){return re(e)}))}),lt=(a(813),Object(_e.a)()),ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.d;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/adanos"}));var mt=[lt];var pt=Object(h.b)(function(e){var t=e.locales,a=t.lang;return{locale:a,key:a,messages:t.messages}})(I.b),gt=function(){var e=Object(ke.e)(qe,ut(ke.a.apply(void 0,mt)));return lt.run(ct),e}(),dt=Ie(function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{store:gt},l.a.createElement(pt,null,l.a.createElement(xe.a,{basename:"/adanos"},l.a.createElement(je.a,null,l.a.createElement(Te.a,{exact:!0,path:"/",component:Ee}),l.a.createElement(Te.a,{component:ht})))))}}]),t}(c.Component));function ht(e){e.location;return l.a.createElement("div",null,l.a.createElement(g.a,{variant:"h6"},"Sorry, the page does not exist!"))}m.a.render(l.a.createElement(dt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[348,1,2]]]);
//# sourceMappingURL=main.1f4b938b.chunk.js.map