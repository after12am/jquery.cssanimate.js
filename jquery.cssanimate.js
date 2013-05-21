/*
 * jquery.cssanimate
 *
 * https://github.com/after12am/cssanimate.js
 *
 * Copyright 2013 Satoshi Okami
 * Released under the MIT license
 */
(function(e){void 0==String.prototype.format&&(String.prototype.format=function(a){if("object"==typeof a)return this.replace(/\{(\w+)\}/g,function(b,c){return a[c]});a=Array.prototype.slice.apply(arguments);return ss=a.reduce(function(b,c,d){return b.replace("{i}".replace("i",d),a[d])},this.toString())});e.fn.translateX=function(a,b,c,d,f){this.smoosy({x:a},b,c,d,f)};e.fn.translateY=function(a,b,c,d,f){this.smoosy({y:a},b,c,d,f)};e.fn.translateZ=function(a,b,c,d,f,e){this.smoosy({z:a,perspective:b},
c,d,f,e)};e.fn.translate=function(a,b,c,d,f,e){this.smoosy({x:a,y:b},c,d,f,e)};e.fn.translate3d=function(a,b,c,d,f,e,g,i){this.smoosy({x:a,y:b,z:c,perspective:d},f,e,g,i)};e.fn.scaleX=function(a,b,c,d,f){this.smoosy({scalex:a},b,c,d,f)};e.fn.scaleY=function(a,b,c,d,f){this.smoosy({scaley:a},b,c,d,f)};e.fn.scaleZ=function(){throw Error("not implemented");};e.fn.scale=function(a,b,c,d,f,e){this.smoosy({scalex:a,scaley:b},c,d,f,e)};e.fn.scale3d=function(){throw Error("not implemented");};e.fn.rotateX=
function(a,b,c,d,f){this.smoosy({rotatex:a},b,c,d,f)};e.fn.rotateY=function(a,b,c,d,f,e){this.smoosy({rotatey:a,perspective:b},c,d,f,e)};e.fn.rotateZ=function(a,b,c,d,f){this.smoosy({rotatez:a},b,c,d,f)};e.fn.rotate=function(a,b,c,d,f){this.smoosy({rotate:a},b,c,d,f)};e.fn.rotate3d=function(a,b,c,d,f,e,g,i,j){this.smoosy({rotate:[a,b,c,d],perspective:f},e,g,i,j)};e.fn.skewX=function(a,b,c,d,f){this.smoosy({skewx:a},b,c,d,f)};e.fn.skewY=function(a,b,c,d,f){this.smoosy({skewy:a},b,c,d,f)};e.fn.skew=
function(a,b,c,d,f,e){this.smoosy({skew:[a,b]},c,d,f,e)};e.fn.cssanimate=function(a,b,c,d,f){var h=void 0;if(typeof b==="function"){f=b;b=void 0}if(typeof c==="function"){f=c;c=void 0}if(typeof d==="function"){f=d;d=void 0}if(a.duration){b=a.duration;delete a.duration}if(a.delay){c=a.delay;delete a.delay}if(a.easing){d=a.easing;delete a.easing}if(a.origin){h=a.origin;delete a.origin}if(a.style){h=a.style;delete a.style}delete a.perspective;e.proxy(function(){(new g(this,b,c,d,h,void 0,f)).parse(a).adopt()},
this)();return this};var g=function(a,b,c,d,f,e,g){this.elem=a;this.callback=g;this.css={};this.transform=[];this.transition={properties:["all"],duration:b||0,delay:c||0,easing:d||"ease-in-out",origin:f||"50% 50%",style:e||"flat"}};g.prefix=function(){var a=e("<div>")[0],b="",c={WebkitTransition:"-webkit-",MozTransition:"-moz-",MSTransition:"-ms-",OTransition:"-o-",transition:""},d;for(d in c)if(a.style[d]!==void 0){b=c[d];break}return b}();g.onTransitionEvent=function(){var a=e("<div>")[0],b="transitionEnd",
c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",MSTransition:"msTransitionEnd",OTransition:"oTransitionEnd",transition:"transitionEnd"},d;for(d in c)if(a.style[d]!==void 0){b=c[d];break}return b}();g.prototype.parse=function(a){if(a.x!=void 0&&a.y!=void 0&&a.z!=void 0){this.transform.push("translate3d({0}px,{1}px,{2}px)".format(a.x,a.y,a.z));delete a.x;delete a.y;delete a.z}if(a.x!=void 0&&a.y!=void 0){this.transform.push("translate({0}px,{1}px)".format(a.x,a.y));delete a.x;
delete a.y}if(a.x!=void 0){this.transform.push("translateX({0}px)".format(a.x));delete a.x}if(a.y!=void 0){this.transform.push("translateY({0}px)".format(a.y));delete a.y}if(a.z!=void 0){this.transform.push("translateZ({0}px)".format(a.z));delete a.z}if(typeof a.rotate=="object"){a.rotate.x!=void 0&&this.transform.push("rotate3d({0},{1},{2},{3}deg)".format(a.rotate.x,a.rotate.y,a.rotate.z,a.rotate.rotate));a.rotate[0]!=void 0&&this.transform.push("rotate3d({0},{1},{2},{3}deg)".format(a.rotate[0],
a.rotate[1],a.rotate[2],a.rotate[3]));delete a.rotate;delete a.rotatex;delete a.rotatey;delete a.rotatez}if(a.rotate!=void 0){this.transform.push("rotate({0}deg)".format(a.rotate));delete a.rotate}if(a.rotatex!=void 0){this.transform.push("rotateX({0}deg)".format(a.rotatex));delete a.rotatex}if(a.rotatey!=void 0){this.transform.push("rotateY({0}deg)".format(a.rotatey));delete a.rotatey}if(a.rotatez!=void 0){this.transform.push("rotateZ({0}deg)".format(a.rotatez));delete a.rotatez}if(typeof a.scale==
"object"){a.scale.x!=void 0&&this.transform.push("scale3d({0},{1},{2})".format(a.scale.x,a.scale.y,a.scale.z));a.scale[0]!=void 0&&this.transform.push("scale3d({0},{1},{2})".format(a.scale[0],a.scale[1],a.scale[2]));delete a.scale;delete a.scalex;delete a.scaley;delete a.scalez}if(a.scale!=void 0){this.transform.push("scale({0},{1})".format(a.scale,a.scale));delete a.scale}if(a.scalex!=void 0){this.transform.push("scaleX({0})".format(a.scalex));delete a.scalex}if(a.scaley!=void 0){this.transform.push("scaleY({0})".format(a.scaley));
delete a.scaley}if(a.scalez!=void 0){this.transform.push("scaleZ({0})".format(a.scalez));delete a.scalez}if(typeof a.skew=="object"){a.skew.x!=void 0&&this.transform.push("skew({0}deg,{1}deg)".format(a.skew.x,a.skew.y));a.skew[0]!=void 0&&this.transform.push("skew({0}deg,{1}deg)".format(a.skew[0],a.skew[1]));delete a.skew;delete a.skewx;delete a.skewy}if(a.skewx!=void 0){this.transform.push("skewX({0}deg)".format(a.skewx));delete a.skewx}if(a.skewy!=void 0){this.transform.push("skewY({0}deg)".format(a.skewy));
delete a.skewy}if(typeof a.property=="object"){this.transition.properties=a.property;delete a.property}if(typeof a.property=="string"){this.transition.properties.push(a.property);delete a.property}this.css=a;return this};g.prototype.adopt=function(){var a=this,b={},c=function(){typeof a.callback==="function"&&a.callback();a.elem.unbind(g.onTransitionEvent);a.elem.dequeue()};b["{0}transition-property".format(g.prefix)]=this.transition.properties.join(",");b["{0}transition-duration".format(g.prefix)]=
this.transition.duration+"ms";b["{0}transition-timing-function".format(g.prefix)]=this.transition.easing;b["{0}transition-delay".format(g.prefix)]=this.transition.delay+"ms";b["{0}transform".format(g.prefix)]=this.transform.join(" ");b["{0}transform-origin".format(g.prefix)]=this.transition.origin;b["{0}transform-style".format(g.prefix)]=this.transition.style;this.elem.queue(function(){a.elem.bind(g.onTransitionEvent,c).css(e.extend(b,a.css));if(a.transition.duration===0){for(;;)if(a.elem.css("{0}transition-delay".format(g.prefix))===
"0s")break;c()}})}})(jQuery);
