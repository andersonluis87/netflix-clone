(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),s=n(4),o=n.n(s),l=n(5),u=n(3),d=(n(26),"8d9e7111a0dae3255eb3976e8854ba05"),m="pt-BR",j=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("discover/tv?".concat("with_network=213","&language=").concat(m,"&api_key=").concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,j("trending/all/week?language=".concat(m,"&api_key=").concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,j("movie/top_rated?language=".concat(m,"&api_key=").concat(d));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,j("discover/movie?with_genres=28&language=".concat(m,"&api_key=").concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,j("discover/movie?with_genres=35&language=".concat(m,"&api_key=").concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,j("discover/movie?with_genres=27&language=".concat(m,"&api_key=").concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,j("discover/movie?with_genres=10749&language=".concat(m,"&api_key=").concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,j("discover/movie?with_genres=99&language=".concat(m,"&api_key=").concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=14;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,j("movie/".concat(t,"?language=").concat(m,"&api_key=").concat(d));case 7:return r=e.sent,e.abrupt("break",14);case 9:return e.next=11,j("tv/".concat(t,"?language=").concat(m,"&api_key=").concat(d));case 11:return r=e.sent,e.abrupt("break",14);case 13:r={};case 14:if("tv"!==n||!1!==(null===(a=r)||void 0===a?void 0:a.success)){e.next=18;break}return e.next=17,j("movie/".concat(t,"?language=").concat(m,"&api_key=").concat(d));case 17:r=e.sent;case 18:return e.abrupt("return",r);case 19:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},v=(n(27),n(1)),h=function(e){var t=e.dark;return Object(v.jsxs)("header",{className:t?"dark":"",children:[Object(v.jsx)("div",{className:"header--logo",children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"})})}),Object(v.jsx)("div",{className:"header--user",children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})})})]})},b=(n(29),n(17)),g=n.n(b),p=n(19),x=n.n(p),O=function(e){var t=e.title,n=e.items,r=e.changeFeaturedMovie,c=Object(a.useState)(0),i=Object(u.a)(c,2),s=i[0],o=i[1];return Object(v.jsxs)("div",{className:"movieRow",children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("div",{className:"movieRow--left",onClick:function(){var e=s+Math.round(window.innerWidth/2);e>0&&(e=0),o(e)},children:Object(v.jsx)(g.a,{style:{fontSize:50}})}),Object(v.jsx)("div",{className:"movieRow--right",onClick:function(){var e=s-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),o(e)},children:Object(v.jsx)(x.a,{style:{fontSize:50}})}),Object(v.jsx)("div",{className:"movieRow--listarea",children:Object(v.jsx)("div",{className:"movieRow--list",style:{marginLeft:s,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(v.jsx)("div",{className:"movieRow--item",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title,onClick:function(){return r(e)}})},t)}))})})]})},w=(n(35),function(e){var t=e.item;console.log("item",t);var n=t.first_air_date?new Date(t.first_air_date):new Date(t.release_date),a=null===t||void 0===t?void 0:t.genres.map((function(e){return e.name})).join(", ");return Object(v.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(v.jsx)("div",{className:"featured--vertical",children:Object(v.jsxs)("div",{className:"featured--horizontal",children:[Object(v.jsx)("div",{className:"featured--name",children:t.original_name}),Object(v.jsxs)("div",{className:"featured--info",children:[Object(v.jsxs)("div",{className:"featured--points",children:[t.vote_average," pontos"]}),Object(v.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(v.jsx)("div",{className:"featured--seasons",children:(null===t||void 0===t?void 0:t.number_of_seasons)?t.number_of_seasons+" temporada".concat(1!==t.number_of_seasons?"s":""):""})]}),Object(v.jsx)("div",{className:"featured--description",children:t.overview}),Object(v.jsxs)("div",{className:"featured--buttons",children:[Object(v.jsx)("a",{href:"/watch/".concat(t.id),className:"featured--watchbutton",children:"\u25ba Assistir"}),Object(v.jsx)("a",{href:"/list/add/".concat(t.id),className:"featured--mylistbutton",children:"+ Minha Lista"})]}),Object(v.jsxs)("div",{className:"featured--genres",children:[Object(v.jsx)("strong",{children:"G\xeaneros: "}),a]})]})})})}),k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),i=Object(u.a)(c,2),s=i[0],d=i[1],m=Object(a.useState)(!1),j=Object(u.a)(m,2),b=j[0],g=j[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getHomeList();case 2:t=e.sent,r(t),x(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("featuredMovie",t),n="movie"===(null===t||void 0===t?void 0:t.media_type)?"movie":"tv",e.next=4,f.getMovieInfo(t.id,n);case 4:a=e.sent,console.log("featuredMovieInfo",a),d(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.filter((function(e){return"originals"===e.slug})),n=Math.floor(Math.random()*(t[0].items.results.length-1)),a=t[0].items.results[n];p(a)};return Object(a.useEffect)((function(){var e=function(){window.scrollY>10?g(!0):g(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(v.jsxs)("div",{className:"page",children:[Object(v.jsx)(h,{dark:b}),s&&Object(v.jsx)(w,{item:s}),Object(v.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(v.jsx)(O,{title:e.title,items:e.items,changeFeaturedMovie:p},t)}))}),Object(v.jsxs)("footer",{children:["Feito com ",Object(v.jsx)("span",{role:"img","aria-label":"heart",children:"\u2764\ufe0f"}),Object(v.jsx)("br",{}),"Direitos de imagem para Netflix",Object(v.jsx)("br",{}),"Dados obtidos pela API do TMDB (themoviedb.org)"]}),n.length<=0&&Object(v.jsx)("div",{className:"loading",children:Object(v.jsx)("img",{src:"https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_500/Netflix_LoadTime.gif",alt:"loading..."})})]})};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(k,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.41eafb7b.chunk.js.map