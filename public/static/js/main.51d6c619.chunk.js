(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(36),o=a.n(r),s=(a(70),a(9)),c=a(10),u=a(14),l=a(11),m=a(13),h=(a(71),a(4)),d=(a(72),a(24),a(61)),b=a.n(d),f=a(30),g=a.n(f),p=a(23),v=a.n(p),E=a(60),w=a.n(E),q=a(31),j=a.n(q),y=(a(73),a(21)),k=function(e){return i.a.createElement("p",{id:"SpeechBubble",className:e.animate?"AnimatingBubble":"",onAnimationEnd:function(){e.doneAnimating()}},i.a.createElement(y.Animated,{animationIn:"heartBeat",className:"animated"},e.value.sentence))},S=(a(96),function(e){return i.a.createElement("p",{id:"SpeechBubble2",className:e.animate?"AnimatingBubble2":"",onAnimationEnd:function(){e.doneAnimating()}},e.value.sentence)}),O=(a(97),function(e){return i.a.createElement("p",{id:"SpeechBubble3",className:e.animate?"AnimatingBubble3":"",onAnimationEnd:function(){e.doneAnimating()}},e.value.sentence)}),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).animationDone=function(){a.setState({animateBubble:!1})},a.state={quotes:[],animateBubble:!0,category:null},a.getQuotes1=a.getQuotes1.bind(Object(h.a)(Object(h.a)(a))),a.getQuotes2=a.getQuotes2.bind(Object(h.a)(Object(h.a)(a))),a.getQuotes3=a.getQuotes3.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getQuotes1",value:function(){var e=this;fetch("https://hattu-server.herokuapp.com/api/ajatus",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({quotes:t,category:"ajatus",animateBubble:!0})}).catch(function(e){throw e})}},{key:"getQuotes2",value:function(){var e=this;fetch("https://hattu-server.herokuapp.com/api/tsemppi",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){return e.setState({quotes:t,category:"tsemppi",animateBubble:!0})}).catch(function(e){throw e})}},{key:"getQuotes3",value:function(){var e=this;fetch("https://hattu-server.herokuapp.com/api/kiroilu",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){return e.setState({quotes:t,category:"kiroilu",animateBubble:!0})}).catch(function(e){throw e})}},{key:"render",value:function(){var e=this,t=this.state.quotes.map(function(t,a){return"ajatus"===e.state.category?i.a.createElement(k,{key:a,value:t,animate:e.state.animateBubble,doneAnimating:e.animationDone}):"tsemppi"===e.state.category?i.a.createElement(S,{key:a,value:t,animate:e.state.animateBubble,doneAnimating:e.animationDone}):"kiroilu"===e.state.category?i.a.createElement(O,{key:a,value:t,animate:e.state.animateBubble,doneAnimating:e.animationDone}):void 0});return i.a.createElement(b.a,{className:"whole",fluid:"true"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,i.a.createElement("h1",{className:"title"},"Feministinen generaattori"))),i.a.createElement(g.a,{className:"kuvailucontainer"},i.a.createElement(v.a,{md:{span:3,offset:2},className:"btngroup"},i.a.createElement(j.a,{className:"gen",id:"ajatusbtn",onClick:this.getQuotes1},"P\xe4iv\xe4n ajatus"),i.a.createElement("br",null),i.a.createElement(j.a,{className:"gen",id:"tsemppibtn",onClick:this.getQuotes2},"Tsemppi"),i.a.createElement("br",null),i.a.createElement(j.a,{className:"gen",id:"kiroilubtn",onClick:this.getQuotes3},"K*ROILU!")),i.a.createElement(v.a,{md:4,className:"bubble"},i.a.createElement("div",null,i.a.createElement("div",null,t)))),i.a.createElement(g.a,null,i.a.createElement(v.a,{md:{span:6,offset:3}},i.a.createElement("img",{className:"kuva",src:w.a,alt:"women",style:{width:"100%",height:"auto"}}),i.a.createElement("p",{className:"copy"},"Image created by rawpixel.com - www.freepik.com"))))}}]),t}(n.Component),N=a(63),A=(a(49),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).checkIfBingo=function(){a.props.checkBingo(a.props.number)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{className:this.props.white?"whiteButton":this.props.bingoSquare?"bingoButton":"orangeButton",id:"square",onClick:this.checkIfBingo},this.props.quote)}}]),t}(i.a.Component)),C=a(125),I=a(124),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).getNewBingoTable=function(){a.setState({quotes:[],white:Array(16).fill(!0),squares:[],lines:[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]],bingoFound:!1,bingoLines:[],show:!1}),a.getData()},a.getData=function(){fetch("https://hattu-server.herokuapp.com/api/bingo",{mode:"cors",headers:{"Content-Type":"application/json; charset=LATIN6"}}).then(function(e){return e.json()}).then(function(e){return a.setState({quotes:e})}).catch(function(e){throw e})},a.handleClick=function(e){a.state.white[e]=!a.state.white[e];var t=a.state.quotes[e].id;a.state.squares.includes(t)?a.setState({squares:a.state.squares.filter(function(e){return e!==t})}):a.state.squares.push(t),a.setState({show:!1},function(){a.getBingo()})},a.getBingo=function(){for(var e=a.state.lines,t=function(t){if(a.state.bingoLines.includes(t))return"continue";var n=Object(N.a)(e[t],4),i=n[0],r=n[1],o=n[2],s=n[3];return a.state.squares.includes(a.state.quotes[i].id)&&a.state.squares.includes(a.state.quotes[r].id)&&a.state.squares.includes(a.state.quotes[o].id)&&a.state.squares.includes(a.state.quotes[s].id)?{v:a.setState({bingoFound:!0,show:!0},function(){a.state.bingoLines.push(t)})}:void 0},n=0;n<e.length;n++){var i=t(n);switch(i){case"continue":continue;default:if("object"===typeof i)return i.v}}},a.renderSquare=function(e){var t=!1;if(a.state.bingoFound){var n=!0,r=!1,o=void 0;try{for(var s,c=a.state.bingoLines[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var u=s.value;a.state.lines[u].includes(e)&&(t=!0)}}catch(l){r=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}}return e>=a.state.quotes.length?i.a.createElement(A,{quote:"Bingo latautuu..."}):i.a.createElement(A,{bingoSquare:t,quote:a.state.quotes[e].quote,number:e,checkBingo:a.handleClick,white:a.state.white[e]})},a.state={quotes:[],white:Array(16).fill(!0),squares:[],lines:[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]],bingoFound:!1,bingoLines:[],show:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(C.a,{show:this.state.show,variant:"success",id:"alert"},i.a.createElement(C.a.Heading,null,"BINGO!"),i.a.createElement("p",null,"Ohhoh, taidat olla aikamoisen set\xe4miehen seurassa!"),i.a.createElement("div",{className:"d-flex justify-content-end"},i.a.createElement(I.a,{id:"bingobutton",onClick:function(){return e.setState({show:!1})},variant:"outline-success"},"Sulje"))),i.a.createElement("div",{id:"refreshbtn"},i.a.createElement("br",null),i.a.createElement("h3",{className:"bingotitle"},"Set\xe4miesbingo"),i.a.createElement(I.a,{id:"bingobutton",variant:"outline-success",onClick:this.getNewBingoTable},"Uusi peli"),i.a.createElement("br",null)),i.a.createElement("div",{id:"bingo"},i.a.createElement("div",{id:"board-row-1",className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3)),i.a.createElement("div",{id:"board-row-2",className:"board-row"},this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7)),i.a.createElement("div",{id:"board-row-3",className:"board-row"},this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11)),i.a.createElement("div",{id:"board-row-4",className:"board-row"},this.renderSquare(12),this.renderSquare(13),this.renderSquare(14),this.renderSquare(15))))}}]),t}(i.a.Component),T=(a(53),a(62)),D=a.n(T),L=a(39),x=a.n(L),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={activeTab:e.activeTab||1},a.handleSelect=a.handleSelect.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSelect",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){return i.a.createElement(D.a,{className:"myMenu",activeKey:this.state.activeTab,onSelect:this.handleSelect},i.a.createElement(x.a,{className:"myBingo",eventKey:1,title:"Bingo"},i.a.createElement(y.Animated,{animationIn:"fadeIn",className:"animated"},i.a.createElement(Q,null))),i.a.createElement(x.a,{className:"myGenerator",eventKey:2,title:"Generaattori"},i.a.createElement(y.Animated,{animationIn:"fadeIn",className:"animated"},i.a.createElement(B,null))))}}]),t}(n.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"App"},i.a.createElement(F,{activeTab:2}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/women.c772c896.jpg"},64:function(e,t,a){e.exports=a(122)},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.51d6c619.chunk.js.map