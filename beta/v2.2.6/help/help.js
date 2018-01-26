define(["exports","jquery","windows/windows","common/rivetsExtra","text!help/help.html","text!help/content.html","css!help/help.css"],function(a,b,c,d,e,f){"use strict";function g(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.showSpecificContent=a.init_help=void 0;var h=g(b),i=g(c),j=g(d),k=g(e),l=g(f),m=null,n=[],o=function(){var a=h["default"](k["default"]),b=h["default"](l["default"]);b.find("a").each(function(a,b){-1==h["default"](b).attr("href").indexOf("contract-period")&&h["default"](b).attr("target","_blank")}),m=i["default"].createBlankWindow(h["default"]("<div class='help-dialog'/>"),{title:"Help",width:850,height:400,resizable:!0,minimizable:!0,maximizable:!0,modal:!1,ignoreTileAction:!0,close:function(){m.dialog("destroy"),m.remove(),m=null,n=[]},destroy:function(){f&&f.unbind(),n=[],f=null}});var c={current:{list:null,loading:!1,sublist:null,content_page:null,content:null,show_clear:!1},list:[{text:"About Binary.com".i18n(),sublist_id:"about_us"},{text:"Getting started".i18n(),sublist_id:"getting_started"},{text:" Types of trades".i18n(),sublist_id:"trade_types"},{text:"Indicators".i18n(),sublist_id:"indicators"},{text:"FAQ".i18n(),sublist_id:"faq"},{text:"Glossary".i18n(),sublist_id:"glossary"}],sublist:{about_us:[{text:"About us".i18n(),id:"about-us"},{text:"Group history".i18n(),id:"group-history"},{text:"Patents".i18n(),id:"patents"}],getting_started:[{text:"Why choose Binary Trading?".i18n(),id:"why-binary"},{text:"Binary options basics".i18n(),id:"binary-options-basics"},{text:"Why trade with Binary.com".i18n(),id:"why-trade-binary"},{text:"How to trade binary options?".i18n(),id:"trade-binaries"},{text:"How to trade the Volatility Indices markets?".i18n(),id:"how-trade-vol"},{text:"Smart Indices".i18n(),id:"smart-indices"},{text:"OTC indices and stocks".i18n(),id:"otc-stocks-indices"}],trade_types:[{text:"Up/Down".i18n(),id:"up-down"},{text:"Touch/No Touch".i18n(),id:"touch-no-touch"},{text:"In/Out".i18n(),id:"in-out"},{text:"Asians".i18n(),id:"asians"},{text:"Digits".i18n(),id:"digits"}],indicators:[{text:"Volatility Indicators".i18n(),id:"volatility-indicators"},{text:"Overlap Studies".i18n(),id:"overlap-studies"},{text:"Momentum Indicators".i18n(),id:"momentum-indicators"},{text:"Price Transformation".i18n(),id:"price-transformation"},{text:"Statistical Functions".i18n(),id:"statistical-functions"},{text:"Pattern Recognition".i18n(),id:"pattern-recognition"},{text:"Bill Williams".i18n(),id:"bill-williams"}],faq:[{text:"Opening an account".i18n(),id:"opening-account"},{text:"Client funds".i18n(),id:"client-funds"},{text:"Depositing and withdrawing funds".i18n(),id:"deposit-withdraw"},{text:"Learning to trade".i18n(),id:"learn-trade"}],glossary:[{text:"Barrier(s)".i18n(),id:"barriers"},{text:"Binary option".i18n(),id:"binary-option"},{text:"Commodities".i18n(),id:"commodities"},{text:"Contract period".i18n(),id:"contract-period"},{text:"Derivative".i18n(),id:"derivative"},{text:"Duration".i18n(),id:"duration"},{text:"Ends Between/Ends Outside trades".i18n(),id:"ends-between"},{text:"Entry spot price".i18n(),id:"entry-spot"},{text:"Expiry price".i18n(),id:"expiry-price"},{text:"Forex".i18n(),id:"forex"},{text:"GMT".i18n(),id:"gmt"},{text:"Higher/Lower trades".i18n(),id:"h_l-trades"},{text:"Indices".i18n(),id:"indices"},{text:"In/Out trades".i18n(),id:"i_o-trades"},{text:"Market exit price".i18n(),id:"m_exit-price"},{text:"No Touch trades".i18n(),id:"no-touch-trades"},{text:"(One) Touch trades".i18n(),id:"touch-trades"},{text:"Payout".i18n(),id:"payout"},{text:"Pip".i18n(),id:"pip"},{text:"Profit".i18n(),id:"profit"},{text:"Volatility Indices".i18n(),id:"volatility-indices"},{text:"Resale price".i18n(),id:"resale-price"},{text:"Return".i18n(),id:"return"},{text:"Rise/Fall trades".i18n(),id:"r_f-trades"},{text:"Sell option".i18n(),id:"sell-option"},{text:"Spot price".i18n(),id:"spot-price"},{text:"Stake".i18n(),id:"stake"},{text:"Stays Between/Goes Outside trades".i18n(),id:"stays-between-goes-outside-trades"},{text:"Tick".i18n(),id:"tick"},{text:"Underlying".i18n(),id:"underlying"}]}};c.updateSublist=function(a){c.current.list=a,c.current.sublist=c.sublist[a.sublist_id],c.getContent(c.current.sublist[0].id)},c.getContent=function(a){c.current.content_page=a,c.current.content=h["default"]("<div/>").append(b.filter("#"+a))[0].innerHTML,h["default"](".content").animate({scrollTop:0},0),h["default"](document).find("a[href$='#contract-period']").click(function(){return c.openSublist("contract period"),!1})},c.search=function(a){var b=h["default"](a.target).val().toLowerCase();if(b.length>0){c.current.show_clear=!0,c.current.list=null,c.current.content_page=null,c.current.sublist=n.filter(function(a){return-1!=a.text.toLowerCase().indexOf(b)});var d=e(b);c.current.content='<div class="search-text">'+d.reduce(function(a,b){var c='<a href="#'+b.title_s+'"><h3>'+b.title+"</h3></a><strong>"+(b.title_s_copy?b.title_s_copy:"")+"</strong><br/><br/>"+b.description;return a=a?a+"<hr>"+c:c},"")+"</div>",c.current.content&&h["default"](".help-dialog .content .items").find("a").each(function(a,b){b.onclick=function(a){return c.openSublist(h["default"](a.target).text(),h["default"](a.target).parent().attr("href")),!1}})}else c.current.show_clear=!1},c.openSublist=function(a,b){if(c.current.list=null,c.current.sublist=n.filter(function(b){return-1!=b.text.toLowerCase().indexOf(a.toLowerCase())}),-1!=a.toLowerCase().indexOf("The premier platform".toLowerCase())&&(c.current.sublist=[n[0]]),c.current.sublist&&c.current.sublist.length&&c.getContent(c.current.sublist[0].id),b&&b.length>1){b=b.toLowerCase().replace(/[\s\(\)\.]/g,"");var d=h["default"](".content "+b).offset().top-50;h["default"](".content").animate({scrollTop:d},500)}},c.clearSearch=function(){h["default"](".help-dialog .help-search").val(""),c.current.show_clear=!1};for(var d in c.sublist)n=n.concat(c.sublist[d]);var e=function(a){for(var c=document.createTreeWalker(h["default"]("<div/>").append(b)[0],NodeFilter.SHOW_ELEMENT),d=[],e=[],f="",g="",i="";;){var j="";if("DIV"==c.currentNode.nodeName&&c.currentNode.id)f="",g="",j="";else if("H2"==c.currentNode.nodeName)f=c.currentNode.innerText,g="";else if("H3"==c.currentNode.nodeName){if(g=c.currentNode.innerText,-1!=g.toLowerCase().indexOf(a)){for(var k=g.substr(g.toLowerCase().indexOf(a),a.length),l=g.replace(k,"<span class='highlight'>"+k+"</span>");c.nextNode()&&"DIV"!=c.currentNode.nodeName&&"H3"!=c.currentNode.nodeName;)"UL"!==c.currentNode.nodeName?"LI"!==c.currentNode.nodeName&&"STRONG"!==c.currentNode.nodeName&&(j+=c.currentNode.innerHTML):j=j+"<ul>"+c.currentNode.innerHTML+"</ul>";d.push({title:f,title_s:g,title_s_copy:l,description:j});continue}}else if("DIV"!==c.currentNode.nodeName&&"H2"!==c.currentNode.nodeName&&"H3"!==c.currentNode.nodeName&&-1!=c.currentNode.innerText.toLowerCase().indexOf(a)&&"LI"!==c.currentNode.nodeName&&"STRONG"!==c.currentNode.nodeName&&"H4"!==c.currentNode.nodeName){var m=c.currentNode.innerText.toLowerCase().indexOf(a);if("UL"===c.currentNode.nodeName&&-1!==m){m=c.currentNode.innerHTML.toLowerCase().indexOf(a);var n=c.currentNode.innerHTML.substr(m,a.length);j="<ul>"+c.currentNode.innerHTML.replace(n,"<span class='highlight'>"+n+"</span>")+"</ul>"}else{var o=c.currentNode.innerText.substr(m,a.length);j=c.currentNode.innerText.replace(o,"<span class='highlight'>"+o+"</span>")}e.push({title:f,title_s:g,title_s_copy:g,description:j})}else i=c.currentNode.innerText;if(!c.nextNode())break}return d.concat(e)};c.current.list=c.list[0],c.updateSublist(c.current.list),c.current.content_page=c.sublist[c.current.list.sublist_id][0].id,c.getContent(c.current.content_page),a.appendTo(m);var f=j["default"].bind(m[0],c);m.dialog("open")},p=a.init_help=function(a){a.click(function(){m?m.moveToTop():o()})},q=a.showSpecificContent=function(a){m?m.moveToTop():o(),h["default"](".help-search").val(a).trigger("input"),h["default"](h["default"](".sublist .items").children()[0]).click()};a["default"]={init_help:p,showSpecificContent:q}});