(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),s=n(3),l=n(4),i=n(6),d=n(5),u=function(e){return o.a.createElement("button",{type:"button",className:"clear",onClick:e.clear.bind(e.app)},"X")},p=function(e){return o.a.createElement("button",{type:"button",onClick:e.remove.bind(e.app)},"Remove")},m=function(e){return o.a.createElement("button",{type:"button",onClick:e.add.bind(e.app)},"Add")},g=function(e){return o.a.createElement("span",{className:"good"},e.good)},v=(n(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),f=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:["Jam"]},e.add=function(t){var n=t.target.previousSibling.textContent;e.setState((function(e){var t=e.selectedGoods;return t.push(n),{selectedGoods:t}}))},e.remove=function(t){var n=t.target.previousSibling.textContent;e.setState((function(e){var t=e.selectedGoods,a=t.findIndex((function(e){return e===n}));return t.splice(a,1),{selectedGoods:t}}))},e.clear=function(){e.setState({selectedGoods:[]})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,n="No goods selected";return 1===t.length?n="".concat(t[0]," is selected"):t.length>1&&(n=t.slice(0,t.length-1).join(", "),n+=" and ".concat(t[t.length-1]),n+=" are selected"),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,n,0!==t.length?o.a.createElement(u,{clear:this.clear,app:this}):""),v.map((function(n){var a=t.includes(n);return o.a.createElement("div",{key:n,className:"container ".concat(a?"selected":"")},o.a.createElement(g,{good:n}),a?o.a.createElement(p,{remove:e.remove,app:e}):o.a.createElement(m,{add:e.add,app:e}))})))}}]),n}(o.a.Component);r.a.render(o.a.createElement(f,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.871a10e9.chunk.js.map