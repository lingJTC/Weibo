!function(i){var t={};function a(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return i[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=i,a.c=t,a.d=function(n,e,i){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(i,t,function(n){return e[n]}.bind(null,t));return i},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,i){"use strict";i.r(e);i(1);var t=document.getElementsByClassName("input1")[0],a=document.getElementsByClassName("btn-dropdownlist")[0],s=document.getElementsByClassName("btn-setting")[0],l=!1,c=null,r=!1,o=document.getElementsByTagName("video")[0];function d(n){var e=n.getBoundingClientRect();return 0<=e.top&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)?1:0}t.addEventListener("focus",function(n){n.target.nextElementSibling.style.display="block",t.setAttribute("placeholder","人民币大涨")}),t.addEventListener("blur",function(n){n.target.nextElementSibling.style.display="none",t.setAttribute("placeholder","大家正在热搜:人民币大涨")}),a.addEventListener("click",function(n){var e=this.nextElementSibling;e.style.display="flex",l=!0,c=e}),s.addEventListener("mouseover",function(n){var e=this.nextElementSibling;e.style.display="block",l=!0,c=e}),window.addEventListener("click",function(){l&&(c.style.display="none",c=null,l=!1)},!0),window.addEventListener("scroll",function(){if(!r){var i=document.getElementById("loadmore");1==d(i)&&(r=!0,setTimeout(function(){for(var n=0;n<2;n++){var e=document.createElement("div");e.setAttribute("class","mainpage-dynamic-normal mainpage"),e.innerHTML='<div class="mainpage-dynamic-content"><div class="mainpage-dynamic-title-pic"><img src="img/main-dynamic-title.jpg"><i class="iconfont icon-xiala"></i></div><div class="mainpage-dynamic-avatar"><img src="img/banner-avatar.jpg" width="50px"></div><div class="mainpage-dynamic-content-detail"><div class="mainpage-dynamic-content-detail-username">Dear-迪丽热巴<img class="main-V"src="img/main-V.jpg"><img  class="main-level" src="img/main-level.jpg"></div><div class="mainpage-dynamic-content-detail-time"><span>2018-10-10 13:30 来自 OPPO随光而变R17Pro</span></div><div class="mainpage-dynamic-content-detail-userwrite"><span>162天的拍摄，每一天都开心并创造着关于凤九的一切,</span></div><div class="mainpage-dynamic-content-detail-userwrite"><span>爱着才行啊 </span><span class="font-color4">&nbsp;#电视剧三生三世枕上书#</span></div><ul><li class="mainpage-dynamic-content-detail-userpic"><img src="img/main-dynamic-pic3.jpg"></li><li class="mainpage-dynamic-content-detail-userpic"><img src="img/main-dynamic-pic4.jpg"></li></ul></div></div><div class="mainpage-dynamic-bar"><ul><li class="mainpage-dynamic-barlist"><span class="dynamic-barlist-content"><i class="iconfont icon-shoucang1"></i><span>收藏</span></span></li><li class="mainpage-dynamic-barlist"><span class="dynamic-barlist-content"><i class="iconfont icon-zhuanfa"></i><span>1234567</span></span></li><li class="mainpage-dynamic-barlist"><span class="dynamic-barlist-content"><i class="iconfont icon-pinglun"></i><span>1234567</span></span></li><li class="mainpage-dynamic-barlist"><span class="dynamic-barlist-content cancel-right-border"><i class="iconfont icon-dianzan"></i><span>1234567</span></span></li></ul></div>',document.getElementsByClassName("rightbody")[0].insertBefore(e,i)}r=!1},1e3)),1==d(o)&&o.play()}})},function(n,e,i){}]);