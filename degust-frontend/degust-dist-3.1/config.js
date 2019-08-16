!function(a,b,c){function d(c,f){if(!b[c]){if(!a[c]){var g="function"==typeof require&&require;if(!f&&g)return g(c,!0);if(e)return e(c,!0);throw new Error("Cannot find module '"+c+"'")}var h=b[c]={exports:{}};a[c][0](function(b){var e=a[c][1][b];return d(e||b)},h,h.exports)}return b[c].exports}for(var e="function"==typeof require&&require,f=0;f<c.length;f++)d(c[f])}({1:[function(a,b,c){(function(){a("./lib/jquery.multiselect.js"),a("./config.coffee")}).call(this)},{"./lib/jquery.multiselect.js":2,"./config.coffee":3}],3:[function(a,b,c){(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},E=[].slice;t=function(a){return window.my_code+"/"+a},B=function(){return"compare.html?code="+window.my_code},o=null,r=function(){return o=$.extend(!0,{},settings)},i=null,k=null,a=null,d=null,n=function(){var a;return a={enableCellNavigation:!1,enableColumnReorder:!1,multiColumnSort:!1,forceFitColumns:!0},k=new Slick.Grid("#grid",[],[],a),x()},h=function(){return $(".fmt:checked").val()},C=function(){var a;if(a=$("#fdr-column").siblings(".text-error"),a.text(""),o.analyze_server_side||o.fdr_column||$(a).text("You must specify the False Discovery Rate column"),a=$("#avg-column").siblings(".text-error"),a.text(""),!o.analyze_server_side&&!o.avg_column)return $(a).text("You must specify the Average Expression column")},A=function(a){return""!==a&&parseInt(a).toString()===a},z=function(a){return!isNaN(parseFloat(a))},q=function(a,b,c){return A(c)?a[b]=parseInt(c):delete a[b]},p=function(a,b,c){return z(c)?a[b]=parseFloat(c):delete a[b]},b=function(a){var b,c,e,f,g,h,i;for(b=[],h=a.replicates,f=0,g=h.length;f<g;f++)e=h[f],i=e[0],D.call(d,i)>=0&&b.push(e[0]);return 0!==b.length&&(c=b.map(function(a){return"ERROR : Cannot use condition name '"+a+"', it is column name"}),c.join("<br/>"))},s=function(a){var c;return a.preventDefault(),o.name=$("input.name").val(),o.primary_name=$("input.primary").val(),o.link_url=$("input.link-url").val(),0===o.link_url.length&&delete o.link_url,f(),o.csv_format="CSV"===h(),(c=b(o))?($("#saving-modal .modal-body").html('<div class="alert alert-danger">'+c+"</div>"),$("#saving-modal").modal({backdrop:!0,keyboard:!0}),$("#saving-modal .view").hide(),$("#saving-modal .modal-footer").show(),void $("#saving-modal #close-modal").click(function(){return $("#saving-modal").modal("hide")})):(q(o,"min_counts",$("input.min-counts").val()),p(o,"min_cpm",$("input.min-cpm").val()),q(o,"min_cpm_samples",$("input.min-cpm-samples").val()),$("#saving-modal").modal({backdrop:"static",keyboard:!1}),$("#saving-modal .modal-body").html("Saving..."),$("#saving-modal .modal-footer").hide(),$.ajax({type:"POST",url:t("settings"),data:{settings:JSON.stringify(o)},dataType:"json"}).done(function(a){return $("#saving-modal .modal-body").html("<div class='alert alert-success'>Save successful.</div>"),$("#saving-modal .view").show()}).fail(function(a){return log_error("ERROR",a),$("#saving-modal .modal-body").html("Failed : "+a.responseText),$("#saving-modal .view").hide()}).always(function(){return $("#saving-modal").modal({backdrop:!0,keyboard:!0}),$("#saving-modal .modal-footer").show(),$("#saving-modal #close-modal").click(function(){return window.location=window.location})}))},c=function(a){return d.indexOf(a)},v=function(a,b,d){return d||(d=[]),$(a).html(b),$.each(d,function(b,d){return $("option[value='"+c(d)+"']",a).attr("selected","selected")}),$(a).multiselect("refresh")},x=function(){var b,e,f,j,k,l,m,n,p;if(i){switch(o.extra_menu_html&&$("#right-navbar-collapse").append(o.extra_menu_html),full_settings.degust_name&&$(".degust-name").text(full_settings.degust_name),k=o.name||"Unnamed",$(".exp-name").text(k),document.title=k,$("input.name").val(o.name||""),$("input.primary").val(o.primary_name||""),$("input.link-url").val(o.link_url||""),o.hasOwnProperty("min_counts")&&$("input.min-counts").val(o.min_counts),o.hasOwnProperty("min_cpm")&&$("input.min-cpm").val(o.min_cpm),o.hasOwnProperty("min_cpm_samples")&&$("input.min-cpm-samples").val(o.min_cpm_samples),a=null,h()){case"TAB":a=d3.tsv.parseRows(i);break;case"CSV":a=d3.csv.parseRows(i);break;default:a=[]}for(n=a,d=n[0],a=2<=n.length?E.call(n,1):[],f="",$.each(d,function(a,b){return f+="<option value='"+a+"'>"+b+"</option>"}),$("select.ec-column").html("<option value='-1'>--- Optional ---</option>"+f),o.hasOwnProperty("ec_column")&&$("select.ec-column option[value='"+c(o.ec_column)+"']").attr("selected","selected"),$("select.link-column").html("<option value='-1'>--- Optional ---</option>"+f),o.hasOwnProperty("link_column")&&$("select.link-column option[value='"+c(o.link_column)+"']").attr("selected","selected"),$("select#fdr-column").html(f),$("select#fdr-column").html("<option value='-1'>--- Required ---</option>"+f),o.fdr_column&&$("select#fdr-column option[value='"+c(o.fdr_column)+"']").attr("selected","selected"),$("select#avg-column").html(f),$("select#avg-column").html("<option value='-1'>--- Required ---</option>"+f),o.avg_column&&$("select#avg-column option[value='"+c(o.avg_column)+"']").attr("selected","selected"),v($("select.info-columns"),f,o.info_columns),v($("select.fc-columns"),f,o.fc_columns),y(),$(".condition:not(.template)").remove(),p=o.replicates,l=0,m=p.length;l<m;l++)j=p[l],e=j[0],b=j[1],g(e||"Unknown",b,D.call(o.init_select||[],e)>=0,D.call(o.hidden_factor||[],e)>=0);return $("#analyze-server-side").prop("checked",o.analyze_server_side),w(),$("#config-locked").prop("checked",o.config_locked),$("#config-locked").prop("disabled",!full_settings.is_owner)}},y=function(){var b;return b=d.map(function(a,b){return{id:a,name:a,field:b,sortable:!1}}),$("#grid-info").text("Number of columns = "+b.length),k.setColumns(b),k.setData(a),k.updateRowCount(),k.render(),C()},u=function(){return i.split("\t").length>20?$("#fmt-tab").attr("checked","checked"):$("#fmt-csv").attr("checked","checked")},g=function(a,b,c,f){var g,h;return g=$(".condition.template").clone(!0),g.removeClass("template"),a?($("input.col-name",g).val(a),$("input.col-name",g).data("edited",!0)):$("input.col-name",g).data("edited",!1),h="",$.each(d,function(a,c){var d;return d=D.call(b,c)>=0?'selected="selected"':"",h+="<option value='"+a+"' "+d+">"+c+"</option>"}),$("select.columns",g).html(h),$("select.columns",g).multiselect({noneSelectedText:"-- None selected --",selectedList:4}),$(".init-select input",g).prop("checked",c),$(".hidden-factor input",g).prop("checked",f),$(".condition-group").append(g),$("select",g).change(function(){var a,b;if(a=$("input.col-name",g),""===a.val()||!a.data("edited"))return b=[],$("select.columns option:selected",g).each(function(a,c){var e;return e=d[$(c).val()],b.push(e)}),a.val(e(b))}),$("input.col-name",g).change(function(){var a;return a=$("input.col-name",g),a.data("edited",""!==a.val())}),g},e=function(a){var b,c,d;for(a=a.slice(0).sort(),c=a[0],b=c.length,d=a.pop();b&&-1===d.indexOf(c);)c=c.substring(0,--b);return c},j=function(a){return $(a.target).parents(".condition").remove()},f=function(){var a,b,c;return a=[],c=[],b=[],$(".condition:not(.template)").each(function(e,f){var g,h;if(g=[],$("select.columns option:selected",f).each(function(a,b){return g.push(d[+$(b).val()])}),h=$(".col-name",f).val()||"Cond "+(e+1),a.push([h,g]),$(".init-select input",f).is(":checked")&&c.push(h),$(".hidden-factor input",f).is(":checked"))return b.push(h)}),o.replicates=a,o.init_select=c,o.hidden_factor=b},w=function(){var a;return a=$("#analyze-server-side").is(":checked"),$(".server-side-analysis-fields").toggle(a),$(".user-analysed-fields").toggle(!a),o.analyze_server_side=a},m=function(){return r(),d3.text(t("partial_csv"),"text/csv",function(a,b){return a?void $("div.container").text("ERROR : "+a):(i=b,u(),n())}),"undefined"!=typeof full_settings&&null!==full_settings&&full_settings.extra_menu_html&&$("#right-navbar-collapse").append(full_settings.extra_menu_html),$("input.fmt").click(x),$("#save").click(s),$("#cancel").click(function(){return r(),x()}),$(".view").attr("href",B()),$("select.ec-column").change(function(){return o.ec_column=+$("select.ec-column option:selected").val(),-1===o.ec_column?delete o.ec_column:o.ec_column=d[o.ec_column],C()}),$("select.link-column").change(function(){return o.link_column=+$("select.link-column option:selected").val(),-1===o.link_column?delete o.link_column:o.link_column=d[o.link_column],C()}),$("select.info-columns").change(function(){var a;return a=[],$("select.info-columns option:selected").each(function(b,c){return a.push(d[+$(c).val()])}),o.info_columns=a}),$("select.info-columns").multiselect({noneSelectedText:"-- None selected --",selectedList:4}),$("#add-condition").click(function(){var a;if(a=g("",[]),$(".condition:not(.template)").length<=2)return $(".init-select input",a).prop("checked",!0),$(".hidden-factor input",a).prop("checked",!1)}),$(".del-condition").click(j),$("#analyze-server-side").change(w),$("#config-locked").change(function(){return o.config_locked=$("#config-locked").is(":checked")}),$("select#fdr-column").change(function(){var a;return a=+$("select#fdr-column option:selected").val(),o.fdr_column=-1===a?"":d[a],C()}),$("select#avg-column").change(function(){var a;return a=+$("select#avg-column option:selected").val(),o.avg_column=-1===a?"":d[a],C()}),$("select.fc-columns").change(function(){var a;return a=[],$("select.fc-columns option:selected").each(function(b,c){return a.push(d[+$(c).val()])}),o.fc_columns=a}),$("select.fc-columns").multiselect({noneSelectedText:"-- None selected --",selectedList:4})},l=function(){var a;return a=get_url_vars().code,null==a?log_error("No code defined"):(window.my_code=a,$.ajax({type:"GET",url:t("settings"),dataType:"json"}).done(function(a){return window.full_settings=a,window.settings=a.settings,m()}).fail(function(a){return log_error("Failed to get settings!",a)}))},$(document).ready(function(){return setup_nav_bar()}),$(document).ready(function(){return l()}),$(document).ready(function(){return $("[title]").tooltip()})}).call(this)},{}],2:[function(a,b,c){!function(a){var b=0;a.widget("ech.multiselect",{options:{header:!0,height:175,minWidth:225,classes:"",checkAllText:"Check all",uncheckAllText:"Uncheck all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:null,hide:null,autoOpen:!1,multiple:!0,position:{}},_create:function(){var b=this.element.hide(),c=this.options;this.speed=a.fx.speeds._default,this._isOpen=!1,b=(this.button=a('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(c.classes).attr({title:b.attr("title"),"aria-haspopup":!0,tabIndex:b.attr("tabIndex")}).insertAfter(b),(this.buttonlabel=a("<span />")).html(c.noneSelectedText).appendTo(b);var b=(this.menu=a("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(c.classes).appendTo(document.body),d=(this.header=a("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(b);(this.headerLinkContainer=a("<ul />")).addClass("ui-helper-reset").html(function(){return!0===c.header?'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+c.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+c.uncheckAllText+"</span></a></li>":"string"==typeof c.header?"<li>"+c.header+"</li>":""}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(d),(this.checkboxContainer=a("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(b),this._bindEvents(),this.refresh(!0),c.multiple||b.addClass("ui-multiselect-single")},_init:function(){!1===this.options.header&&this.header.hide(),this.options.multiple||this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide(),this.options.autoOpen&&this.open(),this.element.is(":disabled")&&this.disable()},refresh:function(c){var d=this.element,e=this.options,f=this.menu,g=this.checkboxContainer,h=[],i="",j=d.attr("id")||b++;d.find("option").each(function(b){a(this);var c,d=this.parentNode,f=this.innerHTML,g=this.title,k=this.value,b="ui-multiselect-"+(this.id||j+"-option-"+b),l=this.disabled,m=this.selected,n=["ui-corner-all"],o=(l?"ui-multiselect-disabled ":" ")+this.className;"OPTGROUP"===d.tagName&&(c=d.getAttribute("label"),-1===a.inArray(c,h)&&(i+='<li class="ui-multiselect-optgroup-label '+d.className+'"><a href="#">'+c+"</a></li>",h.push(c))),l&&n.push("ui-state-disabled"),m&&!e.multiple&&n.push("ui-state-active"),i+='<li class="'+o+'">',i+='<label for="'+b+'" title="'+g+'" class="'+n.join(" ")+'">',i+='<input id="'+b+'" name="multiselect_'+j+'" type="'+(e.multiple?"checkbox":"radio")+'" value="'+k+'" title="'+f+'"',m&&(i+=' checked="checked"',i+=' aria-selected="true"'),l&&(i+=' disabled="disabled"',i+=' aria-disabled="true"'),i+=" /><span>"+f+"</span></label></li>"}),g.html(i),this.labels=f.find("label"),this.inputs=this.labels.children("input"),this._setButtonWidth(),this._setMenuWidth(),this.button[0].defaultValue=this.update(),c||this._trigger("refresh")},update:function(){var b=this.options,c=this.inputs,d=c.filter(":checked"),e=d.length,b=0===e?b.noneSelectedText:a.isFunction(b.selectedText)?b.selectedText.call(this,e,c.length,d.get()):/\d/.test(b.selectedList)&&0<b.selectedList&&e<=b.selectedList?d.map(function(){return a(this).next().html()}).get().join(", "):b.selectedText.replace("#",e).replace("#",c.length);return this.buttonlabel.html(b),b},_bindEvents:function(){function b(){return c[c._isOpen?"close":"open"](),!1}var c=this,d=this.button;d.find("span").bind("click.multiselect",b),d.bind({click:b,keypress:function(a){switch(a.which){case 27:case 38:case 37:c.close();break;case 39:case 40:c.open()}},mouseenter:function(){d.hasClass("ui-state-disabled")||a(this).addClass("ui-state-hover")},mouseleave:function(){a(this).removeClass("ui-state-hover")},focus:function(){d.hasClass("ui-state-disabled")||a(this).addClass("ui-state-focus")},blur:function(){a(this).removeClass("ui-state-focus")}}),this.header.delegate("a","click.multiselect",function(b){a(this).hasClass("ui-multiselect-close")?c.close():c[a(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"](),b.preventDefault()}),this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(b){b.preventDefault();var d=a(this),e=d.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)"),f=e.get(),d=d.parent().text();!1!==c._trigger("beforeoptgrouptoggle",b,{inputs:f,label:d})&&(c._toggleChecked(e.filter(":checked").length!==e.length,e),c._trigger("optgrouptoggle",b,{inputs:f,label:d,checked:f[0].checked}))}).delegate("label","mouseenter.multiselect",function(){a(this).hasClass("ui-state-disabled")||(c.labels.removeClass("ui-state-hover"),a(this).addClass("ui-state-hover").find("input").focus())}).delegate("label","keydown.multiselect",function(b){switch(b.preventDefault(),b.which){case 9:case 27:c.close();break;case 38:case 40:case 37:case 39:c._traverse(b.which,this);break;case 13:a(this).find("input")[0].click()}}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(b){var d=a(this),e=this.value,f=this.checked,g=c.element.find("option");this.disabled||!1===c._trigger("click",b,{value:e,text:this.title,checked:f})?b.preventDefault():(d.focus(),d.attr("aria-selected",f),g.each(function(){this.value===e?this.selected=f:c.options.multiple||(this.selected=!1)}),c.options.multiple||(c.labels.removeClass("ui-state-active"),d.closest("label").toggleClass("ui-state-active",f),c.close()),c.element.trigger("change"),setTimeout(a.proxy(c.update,c),10))}),a(document).bind("mousedown.multiselect",function(b){c._isOpen&&!a.contains(c.menu[0],b.target)&&!a.contains(c.button[0],b.target)&&b.target!==c.button[0]&&c.close()}),a(this.element[0].form).bind("reset.multiselect",function(){setTimeout(a.proxy(c.refresh,c),10)})},_setButtonWidth:function(){var a=this.element.outerWidth(),b=this.options;/\d/.test(b.minWidth)&&a<b.minWidth&&(a=b.minWidth),this.button.width(a)},_setMenuWidth:function(){var a=this.menu,b=this.button.outerWidth()-parseInt(a.css("padding-left"),10)-parseInt(a.css("padding-right"),10)-parseInt(a.css("border-right-width"),10)-parseInt(a.css("border-left-width"),10);a.width(b||this.button.outerWidth())},_traverse:function(b,c){var d=a(c),e=38===b||37===b,d=d.parent()[e?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[e?"last":"first"]();d.length?d.find("label").trigger("mouseover"):(d=this.menu.find("ul").last(),this.menu.find("label")[e?"last":"first"]().trigger("mouseover"),d.scrollTop(e?d.height():0))},_toggleState:function(a,b){return function(){this.disabled||(this[a]=b),b?this.setAttribute("aria-selected",!0):this.removeAttribute("aria-selected")}},_toggleChecked:function(b,c){var d=c&&c.length?c:this.inputs,e=this;d.each(this._toggleState("checked",b)),d.eq(0).focus(),this.update();var f=d.map(function(){return this.value}).get();this.element.find("option").each(function(){!this.disabled&&-1<a.inArray(this.value,f)&&e._toggleState("selected",b).call(this)}),d.length&&this.element.trigger("change")},_toggleDisabled:function(b){this.button.attr({disabled:b,"aria-disabled":b})[b?"addClass":"removeClass"]("ui-state-disabled");var c=this.menu.find("input"),c=b?c.filter(":enabled").data("ech-multiselect-disabled",!0):c.filter(function(){return!0===a.data(this,"ech-multiselect-disabled")}).removeData("ech-multiselect-disabled");c.attr({disabled:b,"arial-disabled":b}).parent()[b?"addClass":"removeClass"]("ui-state-disabled"),this.element.attr({disabled:b,"aria-disabled":b})},open:function(){var b=this.button,c=this.menu,d=this.speed,e=this.options,f=[];if(!1!==this._trigger("beforeopen")&&!b.hasClass("ui-state-disabled")&&!this._isOpen){var g=c.find("ul").last(),h=e.show,i=b.offset();a.isArray(e.show)&&(h=e.show[0],d=e.show[1]||this.speed),h&&(f=[h,d]),g.scrollTop(0).height(e.height),a.ui.position&&!a.isEmptyObject(e.position)?(e.position.of=e.position.of||b,c.show().position(e.position).hide()):c.css({top:i.top+b.outerHeight(),left:i.left}),a.fn.show.apply(c,f),this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus"),b.addClass("ui-state-active"),this._isOpen=!0,this._trigger("open")}},close:function(){if(!1!==this._trigger("beforeclose")){var b=this.options,c=b.hide,d=this.speed,e=[];a.isArray(b.hide)&&(c=b.hide[0],d=b.hide[1]||this.speed),c&&(e=[c,d]),a.fn.hide.apply(this.menu,e),this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave"),this._isOpen=!1,this._trigger("close")}},enable:function(){this._toggleDisabled(!1)},disable:function(){this._toggleDisabled(!0)},checkAll:function(){this._toggleChecked(!0),this._trigger("checkAll")},uncheckAll:function(){this._toggleChecked(!1),this._trigger("uncheckAll")},getChecked:function(){return this.menu.find("input").filter(":checked")},destroy:function(){return a.Widget.prototype.destroy.call(this),this.button.remove(),this.menu.remove(),this.element.show(),this},isOpen:function(){return this._isOpen},widget:function(){return this.menu},getButton:function(){return this.button},_setOption:function(b,c){var d=this.menu;switch(b){case"header":d.find("div.ui-multiselect-header")[c?"show":"hide"]();break;case"checkAllText":d.find("a.ui-multiselect-all span").eq(-1).text(c);break;case"uncheckAllText":d.find("a.ui-multiselect-none span").eq(-1).text(c);break;case"height":d.find("ul").last().height(parseInt(c,10));break;case"minWidth":this.options[b]=parseInt(c,10),this._setButtonWidth(),this._setMenuWidth();break;case"selectedText":case"selectedList":case"noneSelectedText":this.options[b]=c,this.update();break;case"classes":d.add(this.button).removeClass(this.options.classes).addClass(c);break;case"multiple":d.toggleClass("ui-multiselect-single",!c),this.options.multiple=c,this.element[0].multiple=c,this.refresh()}a.Widget.prototype._setOption.apply(this,arguments)}})}(jQuery)},{}]},{},[1]);