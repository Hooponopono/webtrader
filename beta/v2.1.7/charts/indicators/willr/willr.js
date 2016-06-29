define(["jquery","common/rivetsExtra","jquery-ui","color-picker","ddslick"],function(a,b){function c(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function d(d,e){require(["css!charts/indicators/willr/willr.css"]);var f=[];require(["text!charts/indicators/willr/willr.html","text!charts/indicators/indicators.json"],function(g,h){var i="#cd0a0a";g=a(g),g.appendTo("body"),h=JSON.parse(h);var j=h.willr,k={title:j.long_display_name,description:j.description};b.bind(g[0],k),g.find("input[type='button']").button(),g.find("#willr_stroke").colorpicker({position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#willr_stroke").css({background:"#"+c.formatted}).val(""),i="#"+c.formatted},ok:function(b,c){a("#willr_stroke").css({background:"#"+c.formatted}).val(""),i="#"+c.formatted}});var l="Solid";a("#willr_dashStyle").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#willr_dashStyle .dd-selected-image").css("max-width","115px"),l=b.selectedData.value}}),a("#willr_dashStyle .dd-option-image").css("max-width","115px");var m=g.find("#willr_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});a.each(f,function(b,c){a(m.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),g.find("#willr_level_delete").click(function(){m.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select level(s) to delete!"})}):m.rows(".selected").remove().draw()}),g.find("#willr_level_add").click(function(){require(["indicator_levels"],function(b){b.open(d,function(b){a.each(b,function(b,c){a(m.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),g.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"willr-ui-dialog",buttons:[{text:"OK",click:function(){var b=a(".willr_input_width_for_period");if(!_.isInteger(_.toNumber(b.val()))||!_.inRange(b.val(),parseInt(b.attr("min")),parseInt(b.attr("max"))+1))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void b.val(b.prop("defaultValue"));var d=[];a.each(m.rows().nodes(),function(){var b=a(this).data("level");b&&d.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var e={period:parseInt(g.find(".willr_input_width_for_period").val()),stroke:i,strokeWidth:parseInt(g.find("#willr_strokeWidth").val()),dashStyle:l,appliedTo:parseInt(g.find("#willr_appliedTo").val()),levels:d};a(a(".willr").data("refererChartID")).highcharts().series[0].addIndicator("willr",e),c.call(g)}},{text:"Cancel",click:function(){c.call(this)}}]}),g.find("select").selectmenu({width:150}),"function"==typeof e&&e(d)})}return{open:function(b){return 0==a(".willr").length?void d(b,this.open):void a(".willr").data("refererChartID",b).dialog("open")}}});