(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c.n(n),i=c(25),r=c.n(i),o=(c(60),c(15)),l=(c(61),c(62),c.p+"static/media/spotifyIcon.ccb63f93.jpg"),j="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("5190e2d57aa647238ae288cfb9885856","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dailog=true");var d=function(){return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("img",{src:l,alt:""}),Object(s.jsx)("a",{href:j,children:"Login with Spotify"})]})},b=c(34),u=c.n(b);c(63),c(64),c(65);var O=function(e){var t=e.title,c=e.Icon;return Object(s.jsxs)("div",{className:"sidebarOption",children:[c&&Object(s.jsx)(c,{className:"sidebarOption_icon"}),c?Object(s.jsx)("h4",{children:t}):Object(s.jsx)("p",{children:t})]})},x=c(35),h=c.n(x),f=c(28),m=c.n(f),v=c(40),p=c.n(v),y=Object(n.createContext)(),_=function(e){var t=e.initialState,c=e.reducer,a=e.children;return Object(s.jsx)(y.Provider,{value:Object(n.useReducer)(c,t),children:a})},g=function(){return Object(n.useContext)(y)};var N=function(){var e,t=g(),c=Object(o.a)(t,2),n=c[0].playlists;return c[1],Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("img",{className:"sidebar_logo",src:l,alt:""}),Object(s.jsx)(O,{Icon:h.a,title:"Home"}),Object(s.jsx)(O,{Icon:m.a,title:"Search"}),Object(s.jsx)(O,{Icon:p.a,title:"Your Library"}),Object(s.jsx)("br",{}),Object(s.jsx)("strong",{className:"sidebar_title",children:"PLAYLISTS"}),Object(s.jsx)("hr",{}),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(s.jsx)(O,{title:e.name})}))]})},S=(c(71),c(72),c(91));var k=function(e){e.spotify;var t=g(),c=Object(o.a)(t,2),n=c[0].user;return c[1],Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"header_left",children:[Object(s.jsx)(m.a,{}),Object(s.jsx)("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})]}),Object(s.jsxs)("div",{className:"header_right",children:[Object(s.jsx)(S.a,{src:null===n||void 0===n?void 0:n.images[0].url,alt:null===n||void 0===n?void 0:n.display_name}),Object(s.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})},E=c(41),T=c.n(E),w=c(42),I=c.n(w),L=c(43),P=c.n(L);c(73);var R=function(e){var t=e.track;return Object(s.jsxs)("div",{className:"songRow",children:[Object(s.jsx)("img",{className:"songRow_album",src:t.album.images[0].url,alt:""}),Object(s.jsxs)("div",{className:"songRow_info",children:[Object(s.jsx)("h1",{children:t.name}),Object(s.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})};var C=function(e){var t=e.spotify,c=g(),n=Object(o.a)(c,2),a=n[0].discover_weekly;return n[1],Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)(k,{spotify:t}),Object(s.jsxs)("div",{className:"body_info",children:[Object(s.jsx)("img",{class:"imgD",src:null===a||void 0===a?void 0:a.images[0].url,alt:""}),Object(s.jsxs)("div",{className:"body_infoText",children:[Object(s.jsx)("strong",{children:"PLAYLIST"}),Object(s.jsx)("h2",{children:"Discover Weekly"}),Object(s.jsx)("p",{children:null===a||void 0===a?void 0:a.description})]})]}),Object(s.jsxs)("div",{className:"body_songs",children:[Object(s.jsxs)("div",{className:"body_icons",children:[Object(s.jsx)(T.a,{className:"body_shuffle"}),Object(s.jsx)(I.a,{fontSize:"large"}),Object(s.jsx)(P.a,{})]}),null===a||void 0===a?void 0:a.tracks.items.map((function(e){return Object(s.jsx)(R,{track:e.track})}))]})]})},Y=(c(74),c(46)),A=c.n(Y),D=c(45),U=c.n(D),F=c(47),K=c.n(F),z=c(44),M=c.n(z),W=c(48),B=c.n(W),H=c(50),J=c.n(H),V=c(49),q=c.n(V),G=c(89),Q=c(90),X=c.p+"static/media/next.94750cb2.jpg";var Z=function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer_left",children:[Object(s.jsx)("img",{className:"footer_albumLogo",src:X,alt:""}),Object(s.jsxs)("div",{className:"footer_songInfo",children:[Object(s.jsx)("h4",{children:"Next to You"}),Object(s.jsx)("p",{children:"Cat Trumpet"})]})]}),Object(s.jsxs)("div",{className:"footer_center",children:[Object(s.jsx)(M.a,{className:"footer_green"}),Object(s.jsx)(U.a,{className:"footer_icon"}),Object(s.jsx)(A.a,{fontSize:"large",className:"footer_icon"}),Object(s.jsx)(K.a,{className:"footer_icon"}),Object(s.jsx)(B.a,{className:"footer_green"})]}),Object(s.jsx)("div",{className:"footer_right",children:Object(s.jsxs)(G.a,{container:!0,spacing:2,children:[Object(s.jsx)(G.a,{item:!0,children:Object(s.jsx)(q.a,{})}),Object(s.jsx)(G.a,{item:!0,children:Object(s.jsx)(J.a,{})}),Object(s.jsx)(G.a,{item:!0,xs:!0,children:Object(s.jsx)(Q.a,{})})]})})]})};var $=function(e){var t=e.spotify;return Object(s.jsxs)("div",{className:"player",children:[Object(s.jsxs)("div",{className:"player_body",children:[Object(s.jsx)(N,{}),Object(s.jsx)(C,{spotify:t})]}),Object(s.jsx)(Z,{})]})},ee=new u.a;var te=function(){var e=g(),t=Object(o.a)(e,2),c=t[0],a=(c.user,c.token),i=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(i({type:"SET_TOKEN",token:t}),ee.setAccessToken(t),ee.getMe().then((function(e){i({type:"SET_USER",user:e})})),ee.getUserPlaylists().then((function(e){i({type:"SET_PLAYLISTS",playlists:e})})),ee.getPlaylist("7liUqSi38MGQHRd8j6NSlc").then((function(e){i({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),Object(s.jsx)("div",{className:"App",children:a?Object(s.jsx)($,{spotify:ee}):Object(s.jsx)(d,{})})},ce=c(13),se=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ce.a)(Object(ce.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(ce.a)(Object(ce.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ce.a)(Object(ce.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ce.a)(Object(ce.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,93)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(_,{initialState:{user:null,playlists:[],discover_weekly:null,playing:!1,item:null},reducer:se,children:Object(s.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[75,1,2]]]);
//# sourceMappingURL=main.f536fb33.chunk.js.map