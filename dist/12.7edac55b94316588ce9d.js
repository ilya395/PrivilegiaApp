(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{286:function(n,t,i){"use strict";i.r(t),function(n){function e(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=function(n,t){if(!n)return;if("string"==typeof n)return s(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);"Object"===i&&n.constructor&&(i=n.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(n,t)}(n))){var t=0,i=function(){};return{s:i,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,a,r=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return r=n.done,n},e:function(n){l=!0,a=n},f:function(){try{r||null==e.return||e.return()}finally{if(l)throw a}}}}function s(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=n[i];return e}i.d(t,"tpl",(function(){return a}));var a={content:function(){return'\n    <section class="hod-str inner-block">\n        <div class="container">\n            <h1>Ход строительства</h1>\n            <div class="scale-wr">\n                <div class="top">\n                    <div class="title">Начало строительства<br>4 квартал 2018</div>\n                    <div class="title">Окончание строительства<br>4 квартал 2021</div>\n                </div>\n                <div class="scale-wh">\n                    <div class="scale-act"><span>40%</span></div>\n                </div>\n            </div>\n            <div class="hod-s-sl-wrapper">\n                <div class="hod-s-sl-over">\n                    <ul class="hod-s-sl">\n                        <li>\n                            <img data-img-src="[[+image_absolute]]" src="">\n                            <a href="#" class="mask">\n                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>\n                                <p>[[+pagetitle]]</p>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <div class="arrow left desktop"><img src="temps/img/arrow-l.png"></div>\n                <div class="arrow right desktop"><img src="temps/img/arrow-r.png"></div>\n            </div>\n        </div>\n    </section>\n    '},func:function(){console.log("контент модуля активирован!"),document.querySelector(".hod-str").classList.add("visible"),function(){function t(n){return'\n            <li>\n                <img data-img-src="'.concat(n.thumbnailUrl,'" src="').concat(n.thumbnailUrl,'">\n                <a href="').concat(n.url,'" class="mask">\n                    <div class="date">').concat(n.date,"</div>\n                    <p>").concat(n.title,"</p>\n                </a>\n            </li>            \n            ")}var i=document.querySelector(".hod-s-sl-wrapper .hod-s-sl-over");window.matchMedia("(max-width: 501px)").matches?i.classList.add("mobile"):i.classList.add("desktop");var s=i.querySelector(".hod-s-sl");fetch("https://jsonplaceholder.typicode.com/users").then((function(n){return n.json()})).then((function(n){!function(n,i,s){var a,r=[],l=e(n);try{for(l.s();!(a=l.n()).done;){var c=a.value;r.push(c)}}catch(n){l.e(n)}finally{l.f()}var o="";if(window.matchMedia("(max-width: 501px)").matches)o=t(n[0]);else{var d,f=e(r);try{for(f.s();!(d=f.n()).done;){o+=t(d.value)}}catch(n){f.e(n)}finally{f.f()}}i.innerHTML=o}(n,s)})).then((function(){new function(n){console.log("SuperSlider1 start!");var t,i,e,s,a=n.uls,r=n.lefts,l=n.rights;i=a.find("li").length,t=parseInt(a.find("li").css("width"))+parseInt(a.find("li").css("margin-right")),i<=4?(r.css("display","none"),l.css("display","none")):a.find("li:first-child").addClass("active"),l.click((function(){(e=a.find(".active").index())==i-5?(a.animate({marginLeft:0},700),a.find("li").siblings().removeClass("active"),a.find("li").eq(0).addClass("active")):(s=parseInt(a.css("margin-left")),a.animate({marginLeft:s-t},700),a.find("li").siblings().removeClass("active"),a.find("li").eq(e+1).addClass("active"))})),r.click((function(){0===(e=a.find(".active").index())?(a.animate({marginLeft:-t*(i-5)},700),a.find("li").siblings().removeClass("active"),a.find("li").eq(i-5).addClass("active")):(s=parseInt(a.css("margin-left")),a.animate({marginLeft:s+t},700),a.find("li").siblings().removeClass("active"),a.find("li").eq(e-1).addClass("active"))}))}({uls:n(".hod-s-sl-wrapper .hod-s-sl"),lefts:n(".hod-s-sl-wrapper .left"),rights:n(".hod-s-sl-wrapper .right")})}))}()}}}.call(this,i(26))}}]);