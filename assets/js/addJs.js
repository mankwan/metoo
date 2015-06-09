$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(document).ready(function($){
  var $timeline_block = $('.cd-timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
  });

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });

});

$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
/*timeline的动态效果*/
window.Modernizr=function(e,t,n){function r(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1),r=(e+" "+C.join(n+" ")+n).split(" ");return o(r,t)}function o(e,t){for(var r in e)if(v[e[r]]!==n)return"pfx"==t?e[r]:!0;return!1}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){return typeof e===t}function s(e,t){return c(x.join(e+";")+(t||""))}function c(e){v.cssText=e}var l,u,f,d="2.0.6",p={},m=!0,h=t.documentElement,g=(t.head||t.getElementsByTagName("head")[0],"modernizr"),y=t.createElement(g),v=y.style,b=":)",x=(Object.prototype.toString," -webkit- -moz- -o- -ms- -khtml- ".split(" ")),C="Webkit Moz O ms Khtml".split(" "),E={},S=[],T=function(e,n,r,o){var i,a,s,c=t.createElement("div");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:g+(r+1),c.appendChild(s);return i=["&shy;","<style>",e,"</style>"].join(""),c.id=g,c.innerHTML+=i,h.appendChild(c),a=n(c,e),c.parentNode.removeChild(c),!!a},w={}.hasOwnProperty;f=a(w,n)||a(w.call,n)?function(e,t){return t in e&&a(e.constructor.prototype[t],n)}:function(e,t){return w.call(e,t)};!function(e,n){var r=e.join(""),o=n.length;T(r,function(e,n){for(var r=t.styleSheets[t.styleSheets.length-1],i=r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"",a=e.childNodes,s={};o--;)s[a[o].id]=a[o];p.csstransforms3d=9===s.csstransforms3d.offsetLeft,p.generatedcontent=s.generatedcontent.offsetHeight>=1,p.fontface=/src/i.test(i)&&0===i.indexOf(n.split(" ")[0])},o,n)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",x.join("transform-3d),("),g,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',b,'";visibility:hidden}'].join("")],["fontface","csstransforms3d","generatedcontent"]);E.flexbox=function(){function e(e,t,n,r){e.style.cssText=x.join(t+":"+n+";")+(r||"")}function n(e,t,n,r){t+=":",e.style.cssText=(t+x.join(n+";"+t)).slice(0,-t.length)+(r||"")}var r=t.createElement("div"),o=t.createElement("div");n(r,"display","box","width:42px;padding:0;"),e(o,"box-flex","1","width:10px;"),r.appendChild(o),h.appendChild(r);var i=42===o.offsetWidth;return r.removeChild(o),h.removeChild(r),i},E.rgba=function(){return c("background-color:rgba(150,255,150,.5)"),i(v.backgroundColor,"rgba")},E.hsla=function(){return c("background-color:hsla(120,40%,100%,.5)"),i(v.backgroundColor,"rgba")||i(v.backgroundColor,"hsla")},E.multiplebgs=function(){return c("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},E.backgroundsize=function(){return r("backgroundSize")},E.borderimage=function(){return r("borderImage")},E.borderradius=function(){return r("borderRadius")},E.boxshadow=function(){return r("boxShadow")},E.textshadow=function(){return""===t.createElement("div").style.textShadow},E.opacity=function(){return s("opacity:.55"),/^0.55$/.test(v.opacity)},E.cssanimations=function(){return r("animationName")},E.csscolumns=function(){return r("columnCount")},E.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return c((e+x.join(t+e)+x.join(n+e)).slice(0,-e.length)),i(v.backgroundImage,"gradient")},E.cssreflections=function(){return r("boxReflect")},E.csstransforms=function(){return!!o(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},E.csstransforms3d=function(){var e=!!o(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return e&&"webkitPerspective"in h.style&&(e=p.csstransforms3d),e},E.csstransitions=function(){return r("transitionProperty")},E.fontface=function(){return p.fontface},E.generatedcontent=function(){return p.generatedcontent};for(var j in E)f(E,j)&&(u=j.toLowerCase(),p[u]=E[j](),S.push((p[u]?"":"no-")+u));return c(""),y=l=null,e.attachEvent&&function(){var e=t.createElement("div");return e.innerHTML="<elem></elem>",1!==e.childNodes.length}()&&function(e,t){function r(e){for(var t=-1;++t<c;)e.createElement(s[t])}e.iepp=e.iepp||{};var o,i=e.iepp,a=i.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",s=a.split("|"),c=s.length,l=new RegExp("(^|\\s)("+a+")","gi"),u=new RegExp("<(/*)("+a+")","gi"),f=/^\s*[\{\}]\s*$/,d=new RegExp("(^|[^\\n]*?\\s)("+a+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),p=t.createDocumentFragment(),m=t.documentElement,h=m.firstChild,g=t.createElement("body"),y=t.createElement("style"),v=/print|all/;i.getCSS=function(e,t){if(e+""===n)return"";for(var r,o=-1,a=e.length,s=[];++o<a;)r=e[o],r.disabled||(t=r.media||t,v.test(t)&&s.push(i.getCSS(r.imports,t),r.cssText),t="all");return s.join("")},i.parseCSS=function(e){for(var t,n=[];null!=(t=d.exec(e));)n.push(((f.exec(t[1])?"\n":t[1])+t[2]+t[3]).replace(l,"$1.iepp_$2")+t[4]);return n.join("\n")},i.writeHTML=function(){var e=-1;for(o=o||t.body;++e<c;)for(var n=t.getElementsByTagName(s[e]),r=n.length,i=-1;++i<r;)n[i].className.indexOf("iepp_")<0&&(n[i].className+=" iepp_"+s[e]);p.appendChild(o),m.appendChild(g),g.className=o.className,g.id=o.id,g.innerHTML=o.innerHTML.replace(u,"<$1font")},i._beforePrint=function(){y.styleSheet.cssText=i.parseCSS(i.getCSS(t.styleSheets,"all")),i.writeHTML()},i.restoreHTML=function(){g.innerHTML="",m.removeChild(g),m.appendChild(o)},i._afterPrint=function(){i.restoreHTML(),y.styleSheet.cssText=""},r(t),r(p),i.disablePP||(h.insertBefore(y,h.firstChild),y.media="print",y.className="iepp-printshim",e.attachEvent("onbeforeprint",i._beforePrint),e.attachEvent("onafterprint",i._afterPrint))}(e,t),p._version=d,p._prefixes=x,p._domPrefixes=C,p.testProp=function(e){return o([e])},p.testAllProps=r,p.testStyles=T,h.className=h.className.replace(/\bno-js\b/,"")+(m?" js "+S.join(" "):""),p}(this,this.document),function(e,t,n){function r(e){return!e||"loaded"==e||"complete"==e}function o(){for(var e=1,t=-1;y.length-++t&&(!y[t].s||(e=y[t].r)););e&&s()}function i(e){var n,i=t.createElement("script");i.src=e.s,i.onreadystatechange=i.onload=function(){!n&&r(i.readyState)&&(n=1,o(),i.onload=i.onreadystatechange=null)},m(function(){n||(n=1,o())},d.errorTimeout),e.e?i.onload():h.parentNode.insertBefore(i,h)}function a(e){var n,r=t.createElement("link");if(r.href=e.s,r.rel="stylesheet",r.type="text/css",e.e||!S&&!b)r.onload=function(){n||(n=1,m(function(){o()},0))},e.e&&r.onload();else{var i=function(e){m(function(){if(!n)try{e.sheet.cssRules.length?(n=1,o()):i(e)}catch(t){1e3==t.code||"security"==t.message||"denied"==t.message?(n=1,m(function(){o()},0)):i(e)}},0)};i(r)}m(function(){n||(n=1,o())},d.errorTimeout),!e.e&&h.parentNode.insertBefore(r,h)}function s(){var e=y.shift();v=1,e?e.t?m(function(){"c"==e.t?a(e):i(e)},0):(e(),o()):v=0}function c(e,n,i,a,c,l){function u(){!p&&r(f.readyState)&&(g.r=p=1,!v&&o(),f.onload=f.onreadystatechange=null,m(function(){C.removeChild(f)},0))}var f=t.createElement(e),p=0,g={t:i,s:n,e:l};f.src=f.data=n,!x&&(f.style.display="none"),f.width=f.height="0","object"!=e&&(f.type=i),f.onload=f.onreadystatechange=u,"img"==e?f.onerror=u:"script"==e&&(f.onerror=function(){g.e=g.r=1,s()}),y.splice(a,0,g),C.insertBefore(f,x?null:h),m(function(){p||(C.removeChild(f),g.r=g.e=p=1,o())},d.errorTimeout)}function l(e,t,n){var r="c"==t?j:w;return v=0,t=t||"j",N(e)?c(r,e,t,this.i++,p,n):(y.splice(this.i++,0,e),1==y.length&&s()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,y=[],v=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,C=x?p:h.parentNode,E=e.opera&&"[object Opera]"==g.call(e.opera),S="webkitAppearance"in p.style,T=S&&"async"in t.createElement("script"),w=b?"object":E||T?"img":"script",j=S?"img":w,k=Array.isArray||function(e){return"[object Array]"==g.call(e)},P=function(e){return Object(e)===e},N=function(e){return"string"==typeof e},M=function(e){return"[object Function]"==g.call(e)},L=[],O={};d=function(e){function t(e){var t,n,r=e.split("!"),o=L.length,i=r.pop(),a=r.length,s={url:i,origUrl:i,prefixes:r};for(n=0;a>n;n++)t=O[r[n]],t&&(s=t(s));for(n=0;o>n;n++)s=L[n](s);return s}function r(e,r,o,i,a){var s=t(e),c=s.autoCallback;if(!s.bypass){if(r&&(r=M(r)?r:r[e]||r[i]||r[e.split("/").pop().split("?")[0]]),s.instead)return s.instead(e,r,o,i,a);o.load(s.url,s.forceCSS||!s.forceJS&&/css$/.test(s.url)?"c":n,s.noexec),(M(r)||M(c))&&o.load(function(){u(),r&&r(s.origUrl,a,i),c&&c(s.origUrl,a,i)})}}function o(e,t){function n(e){if(N(e))r(e,c,t,0,i);else if(P(e))for(o in e)e.hasOwnProperty(o)&&r(e[o],c,t,o,i)}var o,i=!!e.test,a=i?e.yep:e.nope,s=e.load||e.both,c=e.callback;n(a),n(s),e.complete&&t.load(e.complete)}var i,a,s=this.yepnope.loader;if(N(e))r(e,0,s,0);else if(k(e))for(i=0;i<e.length;i++)a=e[i],N(a)?r(a,0,s,0):k(a)?d(a):P(a)&&o(a,s);else P(e)&&o(e,s)},d.addPrefix=function(e,t){O[e]=t},d.addFilter=function(e){L.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*最新动态的幻灯片*/ 
$('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      },
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      lazyLoad:true,
  });
$(document).ready(function(){
  $(".carousel").carousel({
     interval: 2000
  });

});
