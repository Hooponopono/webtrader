define(["jquery","common/rivetsExtra","jquery-ui","color-picker","lodash","ddslick"],function(a,b){function c(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function d(d,e){require(["css!charts/indicators/alma/alma.css"]),require(["text!charts/indicators/alma/alma.html","text!charts/indicators/indicators.json"],function(f,g){var h="#cd0a0a";f=a(f),f.appendTo("body"),g=JSON.parse(g);var i=g.alma,j={title:i.long_display_name,description:i.description};b.bind(f[0],j),f.find("input[type='button']").button(),f.find("#alma_stroke").colorpicker({position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#alma_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a("#alma_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}});var k="Solid";a("#alma_dashStyle").ddslick({imagePosition:"left",width:155,background:"white",onSelected:function(b){a("#alma_dashStyle .dd-selected-image").css("max-width","120px"),k=b.selectedData.value}}),a("#alma_dashStyle .dd-option-image").css("max-width","120px"),f.dialog({autoOpen:!1,resizable:!1,modal:!0,width:350,height:400,my:"center",at:"center",of:window,dialogClass:"alma-ui-dialog",buttons:[{text:"OK",click:function(){var b=!0;if(a("#alma_period,#alma_sigma").each(function(){var c=a(this);return _.isInteger(_.toNumber(c.val()))&&_.inRange(c.val(),parseInt(c.attr("min")),parseInt(c.attr("max"))+1)?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+c.attr("min")+" to "+c.attr("max")+" is allowed for "+c.closest("tr").find("td:first").text()+"!"})}),b=!1,void c.val(c.prop("defaultValue")))}),b){var d=f.find("#alma_offset");if(!_.inRange(d.val(),parseInt(d.attr("min")),parseInt(d.attr("max"))+.01))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+d.attr("min")+" to "+d.attr("max")+" is allowed for "+d.closest("tr").find("td:first").text()+"!"})}),void d.val(d.prop("defaultValue"));var e={period:parseInt(f.find("#alma_period").val()),sigma:parseInt(f.find("#alma_sigma").val()),offset:parseFloat(f.find("#alma_offset").val()),stroke:h,strokeWidth:parseInt(f.find("#alma_strokeWidth").val()),dashStyle:k,appliedTo:parseInt(f.find("#alma_appliedTo").val())};a(a(".alma").data("refererChartID")).highcharts().series[0].addIndicator("alma",e),c.call(f)}}},{text:"Cancel",click:function(){c.call(this)}}]}),f.find("select").selectmenu({width:155}),"function"==typeof e&&e(d)})}return{open:function(b){return 0==a(".alma").length?void d(b,this.open):void a(".alma").data("refererChartID",b).dialog("open")}}});