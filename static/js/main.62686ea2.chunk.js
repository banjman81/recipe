(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(5),s=c.n(i),r=(c(11),c(4)),u=c.n(r),o=c(6),p=c(2),l=(c(13),c(0));var j=function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h4",{children:e.name}),Object(l.jsx)("p",{children:e.calories}),Object(l.jsx)("img",{src:e.image,alt:""}),Object(l.jsx)("ul",{className:"ing-list",children:e.ingredients.map((function(e){return Object(l.jsx)("li",{children:e.text})}))})]})};var b=function(){var e="02e08f1e",t="92ab7b09ffd8f569501e09369046a11e",c=Object(n.useState)([]),a=Object(p.a)(c,2),i=a[0],s=a[1],r=Object(n.useState)(""),b=Object(p.a)(r,2),h=b[0],f=b[1],d=Object(n.useState)("chicken"),m=Object(p.a)(d,2),O=m[0],x=m[1];function g(){return(g=Object(o.a)(u.a.mark((function c(){var n,a;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("https://api.edamam.com/api/recipes/v2?type=public&q=".concat(O,"&app_id=").concat(e,"&app_key=").concat(t));case 2:return n=c.sent,c.next=5,n.json();case 5:a=c.sent,s(a.hits),console.log(a.hits);case 8:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[O]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(h),f("")},className:"search-form",children:[Object(l.jsx)("input",{className:"search-bar",type:"text",value:h,onChange:function(e){f(e.target.value)}}),Object(l.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(l.jsx)("div",{className:"recipes-cards",children:i.map((function(e){return Object(l.jsx)(j,{name:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.url)}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.62686ea2.chunk.js.map