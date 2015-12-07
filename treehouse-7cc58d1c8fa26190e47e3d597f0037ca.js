function loadScores(){$("#loader-wrapper").show(),newTopics=$("#topics"),topics=[],totalScore=0,$.getJSON("https://teamtreehouse.com/taylorham.json",function(t){var e=t.points,a="#000",r={};r.Android="#5cb860",r.Business="#f9845b",r.CSS="#3079ab",r.Design="#e59a13",r["Development Tools"]="#637a91",r.HTML="#39add1",r.iOS="#53bbb4",r.Java="#2c9676",r.JavaScript="#c25975",r.PHP="#7d669e",r.Python="#f092b0",r.Ruby="#e15258",r.WordPress="#838cc7",r["Digital Literacy"]="#c38cd4";var o=[];$.each(e,function(t,e){0!==e&&("total"===t.toLowerCase()?$("strong.total").text(e):e>=100&&o.push([t,e]))});var n=[];for(n=0===o.length?o:[o.shift()];o.length>0;)for(i=0;i<n.length;i++){if(o[0][1]>n[i][1]){n.splice(i,0,o.shift());break}if(i===n.length-1){n.push(o.shift());break}}for(i=0;i<n.length;i++){var s=n[i][0],c=n[i][1];r[s]&&(a=r[s]),topics.push('<li style="border-color: '+a+'"><em>'+s+"</em><span>"+c+"</span></li>")}newTopics.append(topics),createPie(".legend"),$("#loader-wrapper").fadeOut(),$(".treehouse-widget").fadeIn()})}function createPie(t){var e=280,a=280,i=Math.min(e,a)/2,r=[],o=[];$(t+" li").each(function(){var t={};t.topic=$(this).children("em").text(),t.color=$(this).css("border-color"),r.push($(this).css("border-color")),t.points=$(this).children("span").text(),o.push(t)});var n=d3.scale.ordinal().range(r),s=d3.svg.arc().outerRadius(i-20).innerRadius(i-70),c=d3.layout.pie().value(function(t){return t.points}),p=d3.select(".pie").append("svg").attr("width",e).attr("height",a).append("g").attr("transform","translate("+e/2+","+a/2+")"),l=p.selectAll(".arc").data(c(o)).enter().append("g").attr("class","arc");l.append("path").attr("d",s).style("fill",function(t){return n(t.data.topic)}),l.append("title").text(function(t){return t.data.topic})}$(document).ready(function(){loadScores()});