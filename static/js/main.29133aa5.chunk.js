(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(5),s=c.n(i),r=(c(11),c(4)),u=c.n(r),o=c(6),l=c(2),p=(c(13),c(0));var j=function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h4",{children:e.name}),Object(p.jsx)("p",{children:e.calories}),Object(p.jsx)("img",{src:e.image,alt:""}),Object(p.jsx)("ul",{className:"ing-list",children:e.ingredients.map((function(e){return Object(p.jsx)("li",{children:e.text})}))})]})};var b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),r=s[0],b=s[1],h=Object(n.useState)("chicken"),d=Object(l.a)(h,2),f=d[0],m=d[1];return Object(n.useEffect)((function(){var e="02e08f1e",t="92ab7b09ffd8f569501e09369046a11e";function c(){return(c=Object(o.a)(u.a.mark((function c(){var n,i;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("https://api.edamam.com/api/recipes/v2?type=public&q=".concat(f,"&app_id=").concat(e,"&app_key=").concat(t));case 2:return n=c.sent,c.next=5,n.json();case 5:i=c.sent,a(i.hits),console.log(i.hits);case 8:case"end":return c.stop()}}),c)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()}),[f]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"header",children:"Recipe Finder"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(r),b("")},className:"search-form",children:[Object(p.jsx)("input",{className:"search-bar",type:"text",value:r,onChange:function(e){b(e.target.value)}}),Object(p.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(p.jsx)("div",{className:"recipes-cards",children:c.map((function(e){return Object(p.jsx)(j,{name:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.url)}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.29133aa5.chunk.js.map