"use strict";function fixedFlexHeader(){var o=$(document).scrollTop(),a=0,r=0;if(54>=o)$("#top-bar").css({"background-color":"rgba(0,69,63,0)","padding-top":74-o,height:"73px"}),$(".navbar").css("margin-bottom","20px"),$(".header-hr").css("opacity",.25);else if(o>=55&&94>=o){var t=o-54,a=.01*t,r=.25-.00625*t,s=.025*t;$("#top-bar").css({"background-color":"rgba(0,67,63,"+s+")","padding-top":20-.5*t,height:92-t,"box-shadow":"5px 0 5px -2px rgba(0,0,0,"+a+")"}),$(".navbar").css("margin-bottom",20-.5*t),$(".header-hr").css("opacity",r)}else o>=95&&($("#top-bar").css({"background-color":"rgba(0,67,63,1)","box-shadow":"5px 0 5px -2px rgba(0,0,0,0.4)","padding-top":"0px",height:"52px"}),$(".navbar").css("margin-bottom",0),$(".header-hr").css("opacity",0))}$(document).ready(function(){$('a[href^="#"]').on("click",function(o){o.preventDefault();var a=this.hash,r=$(a);$("html, body").stop().animate({scrollTop:r.offset().top-52},300,"swing",function(){window.location.hash=a})})});