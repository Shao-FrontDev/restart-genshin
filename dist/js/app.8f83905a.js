(function(t){function e(e){for(var r,u,i=e[0],o=e[1],s=e[2],p=0,l=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&l.push(c[u][0]),c[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);b&&b(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var b=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0472":function(t,e,n){},"0513":function(t,e,n){},"2cef":function(t,e,n){"use strict";n("d66e")},"31d6":function(t,e,n){},"3e71":function(t,e,n){"use strict";n("31d6")},4177:function(t,e,n){},"44e0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(t,e){var n=Object(r["J"])("router-view");return Object(r["A"])(),Object(r["h"])(n)}n("fa4e");const a={};a.render=c;var u=a,i=n("6c02"),o=Object(r["j"])("div",{id:"title"},"原神重开模拟器",-1),s=Object(r["j"])("div",{id:"subtitle"},"垃圾游戏 毁我青春",-1);function b(t,e,n,c,a,u){return Object(r["A"])(),Object(r["i"])("div",null,[o,s,Object(r["j"])("button",{id:"mainbtn",onClick:e[0]||(e[0]=function(){return c.next&&c.next.apply(c,arguments)})},"立即重开")])}var p={name:"Home",setup:function(){var t=Object(i["d"])(),e=function(){t.push({path:"/selected"})};return{next:e}}};n("c59e");p.render=b;var l=p;Object(r["D"])("data-v-58ed5ca8");var f={class:"wrapper"},j={class:"btn-wrapper"},O={class:"btn-wrapper"};function d(t,e,n,c,a,u){return Object(r["A"])(),Object(r["i"])("div",f,[Object(r["j"])("div",j,[Object(r["j"])("button",{id:"btn1",onClick:e[0]||(e[0]=function(){return c.luckOfKing&&c.luckOfKing.apply(c,arguments)})},"欧皇")]),Object(r["j"])("div",O,[Object(r["j"])("button",{id:"btn2",onClick:e[1]||(e[1]=function(){return c.next&&c.next.apply(c,arguments)})},"非尊")])])}Object(r["B"])();var h=n("5502"),v={setup:function(){var t=Object(i["d"])(),e=Object(h["b"])(),n=function(){t.push({path:"/addrich"})},r=function(){e.commit("luck",2),t.push({path:"/addrich"})};return{next:n,luckOfKing:r}}};n("f0e8");v.render=d,v.__scopeId="data-v-58ed5ca8";var g=v;Object(r["D"])("data-v-6b8f55b0");var m={class:"wrapper"},k=Object(r["k"])(" 每天160原石 "),y=Object(r["k"])(" 每天60原石 ");function z(t,e,n,c,a,u){var i=Object(r["J"])("n-tooltip");return Object(r["A"])(),Object(r["i"])("div",m,[Object(r["l"])(i,{trigger:"hover"},{trigger:Object(r["Q"])((function(){return[Object(r["j"])("button",{id:"btn1",onClick:e[0]||(e[0]=function(){return c.mahuateng&&c.mahuateng.apply(c,arguments)})},"只要充钱，你就能变强")]})),default:Object(r["Q"])((function(){return[k]})),_:1}),Object(r["l"])(i,{trigger:"hover"},{trigger:Object(r["Q"])((function(){return[Object(r["j"])("button",{id:"btn2",onClick:e[1]||(e[1]=function(){return c.next&&c.next.apply(c,arguments)})},"没钱NPC")]})),default:Object(r["Q"])((function(){return[y]})),_:1})])}Object(r["B"])();var x=n("17f7"),A={components:{NTooltip:x["a"]},setup:function(){var t=Object(i["d"])(),e=Object(h["b"])(),n=function(){t.push({path:"/start"})},r=function(){e.commit("addMoney"),t.push({path:"/start"})};return{NTooltip:x["a"],next:n,mahuateng:r}}};n("e1ae");A.render=z,A.__scopeId="data-v-6b8f55b0";var P=A;Object(r["D"])("data-v-6bb1942c");var S={class:"info"};function _(t,e,n,c,a,u){return Object(r["A"])(),Object(r["i"])(r["a"],null,[Object(r["j"])("div",S,[Object(r["j"])("p",null,"游戏天数："+Object(r["L"])(c.days),1),Object(r["j"])("p",null,"原石："+Object(r["L"])(c.stone),1)]),Object(r["j"])("button",{id:"btn3",onClick:e[0]||(e[0]=function(){return c.bag&&c.bag.apply(c,arguments)})},"背包"),Object(r["j"])("button",{id:"btn1",onClick:e[1]||(e[1]=function(){return c.nextOne&&c.nextOne.apply(c,arguments)})},"单抽"),Object(r["j"])("button",{id:"btn2",onClick:e[2]||(e[2]=function(){return c.nextTen&&c.nextTen.apply(c,arguments)})},"十连抽"),Object(r["j"])("button",{id:"btn4",onClick:e[3]||(e[3]=function(){return c.nextDay&&c.nextDay.apply(c,arguments)})},"下一天")],64)}Object(r["B"])();var w={setup:function(){var t=Object(i["d"])(),e=Object(h["b"])(),n=Object(r["f"])((function(){return e.state.days})),c=Object(r["f"])((function(){return e.state.stone})),a=function(){t.push({path:"/prize/1"})},u=function(){t.push({path:"/prize/10"})},o=function(){t.push({path:"/bag"})},s=function(){e.commit("nextDay")};return{nextOne:a,nextTen:u,days:n,nextDay:s,stone:c,bag:o}}};n("3e71");w.render=_,w.__scopeId="data-v-6bb1942c";var I=w;Object(r["D"])("data-v-8ac17476");var D={id:"talents",class:"selectlist"};function H(t,e,n,c,a,u){return Object(r["A"])(),Object(r["i"])(r["a"],null,[Object(r["j"])("ul",D,[Object(r["l"])(r["d"],{name:"list"},{default:Object(r["Q"])((function(){return[(Object(r["A"])(!0),Object(r["i"])(r["a"],null,Object(r["H"])(c.prizeArr,(function(t,e){return Object(r["A"])(),Object(r["i"])("li",{key:e,class:Object(r["t"])(t.star)},Object(r["L"])(t.prize),3)})),128))]})),_:1})]),Object(r["j"])("button",{id:"btn2",onClick:e[0]||(e[0]=function(){return c.close&&c.close.apply(c,arguments)})},"关闭")],64)}Object(r["B"])();var C=n("a1e9"),R=n("5c40"),W={setup:function(){var t,e,n=Object(i["d"])(),r=Object(i["c"])(),c=Object(h["b"])(),a=Object(C["k"])([]),u=function(){c.dispatch("clearGifts"),n.push({path:"/start"})},o=r.params;return Object(R["D"])((function(){c.dispatch("changeGifts",o);var n=c.getters["prizeResult"];e=n.length,t=setInterval((function(){0===e?clearInterval(t):(a.push(n.pop()),e--)}),400)})),{close:u,prizeArr:a}}};n("2cef");W.render=H,W.__scopeId="data-v-8ac17476";var F=W;Object(r["D"])("data-v-6cb480d2");var T={id:"talents",class:"selectlist"};function G(t,e,n,c,a,u){return Object(r["A"])(),Object(r["i"])(r["a"],null,[Object(r["j"])("button",{id:"btn1",onClick:e[0]||(e[0]=function(t){return c.change(!1)})},"角色"),Object(r["j"])("button",{id:"btn2",onClick:e[1]||(e[1]=function(t){return c.change(!0)})},"武器"),Object(r["j"])("ul",T,[Object(r["l"])(r["d"],{name:"list"},{default:Object(r["Q"])((function(){return[c.flag?(Object(r["A"])(!0),Object(r["i"])(r["a"],{key:0},Object(r["H"])(c.weaponsArr,(function(t,e){return Object(r["A"])(),Object(r["i"])("li",{key:e,class:Object(r["t"])(t.star)},Object(r["L"])(t.prize),3)})),128)):(Object(r["A"])(!0),Object(r["i"])(r["a"],{key:1},Object(r["H"])(c.herosArr,(function(t,e){return Object(r["A"])(),Object(r["i"])("li",{key:e,class:Object(r["t"])(t.star)},Object(r["L"])(t.prize),3)})),128))]})),_:1})]),Object(r["j"])("button",{id:"btn3",onClick:e[2]||(e[2]=function(){return c.goback&&c.goback.apply(c,arguments)})},"返回")],64)}Object(r["B"])();var M={components:{},setup:function(){var t=Object(h["b"])(),e=Object(i["d"])(),n=Object(C["m"])(!1),r=Object(C["c"])((function(){return t.getters["backpackWeapons"]})),c=Object(C["c"])((function(){return t.getters["backpackHeros"]}));Object(R["D"])((function(){}));var a=function(){e.push({path:"/start"})},u=function(t){n.value=t};return{weaponsArr:r,herosArr:c,goback:a,flag:n,change:u}}};n("a2e3");M.render=G,M.__scopeId="data-v-6cb480d2";var J=M,Q=n("2909");n("99af"),n("caad"),n("2532");function V(t,e){return Math.floor(Math.random()*(e-t))+t}function B(t){if(0===t.length)return!1;for(var e=0;e<t.length;e++)if(t[e]<5)return!1;return!0}function L(t){if(0===t.length)return!1;for(var e=0;e<t.length;e++)if(1===t[e])return!1;return!0}var N={days:1,stone:8e3,userInfo:{luckValue:1,tuhao:!1},prize:{FiveStarHeros:["琴","迪卢克","温迪","可莉","莫娜","阿贝多","优菈","埃洛伊","魈","刻晴","七七","达达利亚","钟离","甘雨","胡桃","烟菲","神里菱华","枫原万叶","宵宫","雷电将军"],FourStarHeros:["安柏","莉莎","凯亚","芭芭拉","罗莎莉亚","雷泽","班尼特","诺艾尔","菲谢尔","砂糖","迪奥娜","北斗","凝光","香菱","行秋","重云","辛焱","早柚"],FiveStarWeapons:["狼的末路","天空之傲","无工之剑","松籁响起之时","风鹰剑","天空之刃","斫峰之刃","磐岩结绿","天空之翼","阿莫斯之弓","终末嗟叹之诗","天空之卷","四风原典","尘世之锁 ","和璞鸢","昆吾断虹","贯虹之槊","护摩之杖"],FourStarWeapons:["宗室大剑","西风大剑","祭礼大剑","试作古华","螭骨剑","钟剑","白影剑","雨栽","黑岩斩刀","千岩古剑","雪葬的星银","铁蜂刺","匣里龙吟","宗室长剑","试作斩岩","西风剑","祭礼剑","黑剑","黑岩长剑","暗巷闪光","笛剑","腐殖之剑","钢轮弓","祭礼弓","试作澹月","黑岩战弓","暗巷猎手","绝弦","弓藏","宗室长弓","苍翠猎弓","西风猎弓","风花之颂","暗巷的酒与诗","西风秘典","昭心","匣里日月","黑岩绯玉","试作金珀","万国诸海图","宗室秘法录","流浪乐章","忍冬之果","祭礼残章","千岩长枪","试作星镰","决斗之枪","匣里灭辰","流月针","宗室猎枪","黑岩刺枪","龙脊长枪","西风长枪"],ThreeStarWeapons:["铁影阔剑","飞天大御剑","石英大剑","以理服人","沐浴龙血","黎明神剑","冷刃","旅行剑","吃鱼虎刀","飞天御剑","反曲弓","信使","黑檀弓","鸦羽弓","弹弓","讨龙英杰谭","魔导绪论","琥珀玥","异世界行记","翡玉法球","甲级宝珏","白缨枪","黑缨枪","钺矛"]},prizeResult:[],backpackHeros:[],backpackWeapons:[],smallPrize:0,bigPrize:0,bigPrizeArr:[],lastResult:[]},K=Object(h["a"])({state:localStorage.getItem("stateData")?JSON.parse(localStorage.getItem("stateData")):N,mutations:{nextDay:function(t){t.days++,t.stone=t.stone+=t.userInfo.tuhao?160:60,this.commit("save")},addMoney:function(t){t.userInfo.tuhao=!0,this.commit("save")},luck:function(t,e){t.userInfo.luckValue=t.userInfo.luckValue*e,this.commit("save")},lotteryDraw:function(t,e){var n=e.count;t.stone-=160*n;for(var r=[],c=0;c<n;c++){t.smallPrize++,t.bigPrize++;var a=V(1,100);a<=5&&(t.smallPrize=0),1===a&&(t.bigPrize=0,t.bigPrizeArr=[],t.smallPrize=0),90===t.bigPrize&&L(t.bigPrize)?(t.bigPrize=0,r.push(1)):9===t.smallPrize&&B(r)?(t.smallPrize=0,r.push(4),t.bigPrizeArr.push(4)):(r.push(a),t.bigPrizeArr.push(a))}r.forEach((function(e){e<=1*t.userInfo.luckValue?t.lastResult.push("五星"):e>2*t.userInfo.luckValue&&e<=5*t.userInfo.luckValue?t.lastResult.push("四星"):t.lastResult.push("三星")})),this.commit("save")},clearGifts:function(t){t.prizeResult=[],this.commit("save")},changeGifts:function(t,e){for(var n=0;n<e.length;n++)if("三星"===e[n]){var r=t.prize.ThreeStarWeapons.length,c=V(1,r),a=t.prize.ThreeStarWeapons[c],u={prize:a,star:"three"};t.backpackWeapons.push(u),t.prizeResult.push(u)}else if("四星"===e[n]){var i=[].concat(Object(Q["a"])(t.prize.FourStarHeros),Object(Q["a"])(t.prize.FourStarWeapons)),o=i.length,s=V(1,o),b=i[s],p={prize:b,star:"four"};t.prize.FourStarHeros.includes(b)?t.backpackHeros.push(p):t.backpackWeapons.push(p),t.prizeResult.push(p)}else if("五星"===e[n]){var l=[].concat(Object(Q["a"])(t.prize.FiveStarHeros),Object(Q["a"])(t.prize.FiveStarWeapons)),f=l.length,j=V(1,f),O=l[j],d={prize:O,star:"five"};t.prize.FiveStarHeros.includes(O)?t.backpackHeros.push(d):t.backpackWeapons.push(d),t.prizeResult.push(d)}this.commit("save")},save:function(t){localStorage.setItem("stateData",JSON.stringify(t))}},actions:{changeGifts:function(t,e){var n=t.commit,r=t.state;n("lotteryDraw",e),n("changeGifts",r.lastResult),r.lastResult=[]},clearGifts:function(t){var e=t.commit;e("clearGifts")}},getters:{prizeResult:function(t){return t.prizeResult},backpackHeros:function(t){return t.backpackHeros},backpackWeapons:function(t){return t.backpackWeapons}}}),E=[{path:"/",name:"Home",component:l},{path:"/selected",name:"About",component:g},{path:"/addrich",name:"addrich",component:P},{path:"/bag",name:"bag",component:J},{path:"/start",name:"start",component:I},{path:"/prize/:count",name:"prize",component:F,beforeEnter:function(t){var e=t.params.count,n=K.state.stone;return n>=160*e}}],q=Object(i["a"])({history:Object(i["b"])(),routes:E}),U=q;Object(r["g"])(u).use(K).use(U).mount("#app")},a2e3:function(t,e,n){"use strict";n("44e0")},c1b1:function(t,e,n){},c59e:function(t,e,n){"use strict";n("c1b1")},d66e:function(t,e,n){},e1ae:function(t,e,n){"use strict";n("0472")},f0e8:function(t,e,n){"use strict";n("4177")},fa4e:function(t,e,n){"use strict";n("0513")}});
//# sourceMappingURL=app.8f83905a.js.map