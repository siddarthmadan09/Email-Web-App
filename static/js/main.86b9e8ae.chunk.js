(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){e.exports=a(312)},183:function(e,t,a){},184:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(43),i=a.n(c),r=(a(183),a(19)),m=a(20),s=a(22),o=a(21),u=a(23),p=a(45),d=(a(184),a(321)),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={email:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a="https://5c5a21f9af3ff700140de477.mockapi.io/api/email/".concat(t);fetch(a).then(function(e){return e.json()}).then(function(t){e.setState({email:t})}).catch(function(){console.log("Something wrong occured. Please try again")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"emailView"},l.a.createElement("div",{className:"ui segments"},l.a.createElement("div",{className:"ui segment"},l.a.createElement("p",null,"To : ",this.state.email.to," ")),l.a.createElement("div",{className:"ui segment"},l.a.createElement("p",null,"Subject : ",this.state.email.subject)),l.a.createElement("div",{className:"ui segment"},l.a.createElement("p",null,this.state.email.text))),l.a.createElement(d.a,{className:"formButton",positive:!0,type:"submit"},"Next"),l.a.createElement(d.a,{className:"formButton",negative:!0,type:"submit"},"Prev"))}}]),t}(n.Component),E=a(322),b=a(323),v=a(320),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={emailList:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(E.a.Column,{width:16},l.a.createElement(b.a,null,l.a.createElement(v.a,null,l.a.createElement("div",{class:"field"},l.a.createElement("label",null,"To"),l.a.createElement("input",{placeholder:"First Name"})),l.a.createElement("div",{class:"field"},l.a.createElement("label",null,"Subject"),l.a.createElement("input",{placeholder:"Last Name"})),l.a.createElement("textarea",{placeholder:"type your message here",onChange:this.handleChange}),l.a.createElement(d.a,{className:"formButton",positive:!0,type:"submit"},"Send")))))}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){var t="/email/".concat(e);this.props.history.push({pathname:t,state:{emailId:e}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{onClick:function(){return e.handleClick(e.props.email.id)}},l.a.createElement("div",{class:"ui segment"},l.a.createElement("div",{class:"ui inverted relaxed divided list"},l.a.createElement("ul",{className:"item"},l.a.createElement("li",null,l.a.createElement("span",{className:"listContent"},l.a.createElement("input",{type:"checkbox",className:"check1",readOnly:!1})),l.a.createElement("span",{className:"listContent1"},this.props.email.from),l.a.createElement("span",{className:"listContent2"},this.props.email.text.substring(0,70),"..."))))))}}]),t}(n.Component),O=Object(p.f)(j),y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={emailList:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://5c5a21f9af3ff700140de477.mockapi.io/api/email/").then(function(e){return e.json()}).then(function(t){e.setState({emailList:t.slice(0,10)})}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}},{key:"render",value:function(){var e=this.state.emailList.map(function(e){return l.a.createElement(O,{email:e,key:e.id})});return l.a.createElement("div",null,e)}}]),t}(n.Component),N=a(36),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"main ui secondary pointing menu"},l.a.createElement(N.b,{to:"".concat("/Email-Web-App","/email"),className:" waves-effect center active item"},"List"),l.a.createElement(N.b,{to:"".concat("/Email-Web-App","/email/new"),className:"center active item"},"Create")),l.a.createElement(p.b,{path:"/(.+)",render:function(){return l.a.createElement("div",null,l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"".concat("/Email-Web-App","/email/new"),component:f}),l.a.createElement(p.b,{path:"".concat("/Email-Web-App","/email/:id"),component:h}),l.a.createElement(p.b,{path:"".concat("/Email-Web-App","/email"),component:y})))}}))}}]),t}(n.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"col m3 l3"},l.a.createElement("div",{className:"ui navbar vertical menu"},l.a.createElement("a",{className:"active item"},l.a.createElement("div",{className:"ui teal label z-depth-4"},"1"),"Inbox"),l.a.createElement("a",{className:"item "},l.a.createElement("div",{className:"ui label"},"51"),"Spam"),l.a.createElement("a",{className:"item"},l.a.createElement("div",{className:"ui label"},"1"),"Updates"),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"ui icon input"},l.a.createElement("input",{type:"text",placeholder:"Search mail..."}),l.a.createElement("i",{"aria-hidden":"true",className:"search icon"}))))),l.a.createElement("div",{className:"col m9 l9"},l.a.createElement(g,null)))}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("nav",null,l.a.createElement("div",{class:"nav-wrapper red darken-1"},l.a.createElement("a",{href:"#",class:"brand-logo"},"Email Client"),l.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",null,"Contact")),l.a.createElement("li",null,l.a.createElement("a",null,"Login")),l.a.createElement("li",null,l.a.createElement("a",null,"Register"))))),l.a.createElement(w,null),l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/",render:function(){return l.a.createElement(p.a,{to:"/email"})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(311);i.a.render(l.a.createElement(N.a,{basename:"/email"},l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[178,1,2]]]);
//# sourceMappingURL=main.86b9e8ae.chunk.js.map