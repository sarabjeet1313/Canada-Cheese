(this.webpackJsonpcheese_factory=this.webpackJsonpcheese_factory||[]).push([[0],{46:function(e,a,t){e.exports=t(60)},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(12),i=t.n(r),l=(t(51),t(52),t(22)),c=t(23),o=t(17),h=t(33),p=t(32),u=t(68),g=t(69),m=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={cheeseId:n.props.cheeseId,cheeseName:n.props.cheeseName,langauge:n.props.language},n}return Object(c.a)(t,[{key:"render",value:function(){var e="English"===this.props.language?this.props.cheese.CheeseNameEn:this.props.cheese.CheeseNameFr;e=""===e?"Not Available/ indisponible":e;var a="English"===this.props.language?this.props.cheese.ManufacturerNameEn:this.props.cheese.ManufacturerNameFr;a=""===a?"Not Available/ indisponible":a;var t="English"===this.props.language?this.props.cheese.ManufacturingTypeEn:this.props.cheese.ManufacturingTypeFr,n="English"===this.props.language?this.props.cheese.WebSiteEn:this.props.cheese.WebSiteFr;n=""===n?"Not Available/ indisponible":n;var r="English"===this.props.language?this.props.cheese.ParticularitiesEn:this.props.cheese.ParticularitiesFr;r=""===r?"Not Available/ indisponible":r;var i="English"===this.props.language?this.props.cheese.FlavourEn:this.props.cheese.FlavourFr;i=""===i?"Not Available/ indisponible":i;var l="English"===this.props.language?this.props.cheese.CharacteristicsEn:this.props.cheese.CharacteristicsFr;l=""===l?"Not Available/ indisponible":l;var c="English"===this.props.language?this.props.cheese.RipeningEn:this.props.cheese.RipeningFr;c=""===c?"Not Available/ indisponible":c;var o="English"===this.props.language?this.props.cheese.CategoryTypeEn:this.props.cheese.CategoryTypeFr;o=""===o?"Not Available/ indisponible":o;var h="English"===this.props.language?this.props.cheese.MilkTypeEn:this.props.cheese.MilkTypeFr;h=""===h?"Not Available/ indisponible":h;var p="English"===this.props.language?this.props.cheese.MilkTreatmentTypeEn:this.props.cheese.MilkTreatmentTypeFr;p=""===p?"Not Available/ indisponible":p;var m="English"===this.props.language?this.props.cheese.RindTypeEn:this.props.cheese.RindTypeFr;return m=""===m?"Not Available/ indisponible":m,s.a.createElement(u.a,{border:"primary",style:{width:"100%"},className:"text-center"},s.a.createElement(u.a.Header,null,this.props.cheese.CheeseId),s.a.createElement(u.a.Body,null,s.a.createElement(u.a.Title,null,e),s.a.createElement(g.a,{variant:"Details"},s.a.createElement(g.a.Item,null,"Manufacturer Name - ",a),s.a.createElement(g.a.Item,null,"Manufacturer Provincial Code -"," ",this.props.cheese.ManufacturerProvCode),s.a.createElement(g.a.Item,null,"Manufacturing Type - ",t),s.a.createElement(g.a.Item,null,"Website - ",n),s.a.createElement(g.a.Item,null,"Fat Content Percentage - ",this.props.cheese.FatContentPercent),s.a.createElement(g.a.Item,null,"Moisture Percentage - ",this.props.cheese.MoisturePercent),s.a.createElement(g.a.Item,null,"Particularities - ",r),s.a.createElement(g.a.Item,null,"Flavours - ",i),s.a.createElement(g.a.Item,null,"Characteristics - ",l),s.a.createElement(g.a.Item,null,"Ripening - ",c),s.a.createElement(g.a.Item,null,"Organic - ",this.props.cheese.Organic),s.a.createElement(g.a.Item,null,"Category Type - ",o),s.a.createElement(g.a.Item,null,"Milk Type - ",h),s.a.createElement(g.a.Item,null,"Milk Treatment Type - ",p),s.a.createElement(g.a.Item,null,"Rind Type - ",m),s.a.createElement(g.a.Item,null,"Last Updated On - ",this.props.cheese.LastUpdateDate))),s.a.createElement(u.a.Footer,null,this.props.language))}}]),t}(n.Component),E=t(67),d=t(65),v=t(66),b=(t(53),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).setEnglishLanguage=function(){console.log("English"),n.setState({language:"English"})},n.setFrenchLanguage=function(){console.log("French"),n.setState({language:"French"})},n.fetchData=n.fetchData.bind(Object(o.a)(n)),n.setEnglishLanguage=n.setEnglishLanguage.bind(Object(o.a)(n)),n.setFrenchLanguage=n.setFrenchLanguage.bind(Object(o.a)(n)),n.state={cheeseList:[],language:"English"},n}return Object(c.a)(t,[{key:"componentWillMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;fetch("canadianCheeseDirectory.json",{headers:{"Content-Type":"application/json"},crossDomain:!0}).then((function(e){return e.json()})).then((function(a){e.setState({cheeseList:a.CheeseDirectory})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(E.a,{expand:"lg",bg:"dark",variant:"dark",className:"navStyle"},s.a.createElement(E.a.Brand,{href:"/"}," Canada Cheese "),s.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(d.a,{className:"ml-auto"},s.a.createElement(d.a.Link,{active:!0,href:"/"},"Home"),s.a.createElement(v.a,{active:!0,title:"Language",id:"nav-dropdown"},s.a.createElement(v.a.Item,{onClick:function(){return e.setEnglishLanguage()}},"English"),s.a.createElement(v.a.Item,{onClick:function(){return e.setFrenchLanguage()}},"French"))))),s.a.createElement("div",{className:"row"},this.state.cheeseList.length>0?this.state.cheeseList.map((function(a){return s.a.createElement("div",{className:"col-md-4 crd cardStyle",key:a.CheeseId},s.a.createElement(m,{cheese:a,language:e.state.language}))})):s.a.createElement("section",{className:"container alert alert-info",role:"alert"},"Loading ...")))}}]),t}(n.Component));t(59);var f=function(){return s.a.createElement("div",null,s.a.createElement(b,null),";")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.be2c9df6.chunk.js.map