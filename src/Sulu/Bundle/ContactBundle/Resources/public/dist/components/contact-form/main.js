define([],function(){"use strict";var a={fields:["address","email","fax","phone","url"],fieldTypes:[],trigger:".contact-options-toggle"},b={fieldId:"field-select",fieldTypeId:"field-type-select",editDeleteSelector:".delete",editDeleteIcon:"icon-circle-minus",editUndoDeleteIcon:"icon-circle-plus",fadedClass:"faded"},c={add:['<div class="grid-row">','   <div id="'+b.fieldId+'" class="grid-col-6"></div>','   <div id="'+b.fieldTypeId+'" class="grid-col-6"></div>',"</div>",'<div class="grid-row m-bottom-0"></div>'].join(""),editField:['<div class="grid-row divider" data-deleted="false">','<div class="grid-col-7 pull-left">','<div id="<%= dropdownId %>"></div>',"</div>",'<div class="grid-col-2 pull-right">',"<% if (showDeleteButton == true) { %>",'<div class="delete btn gray-dark fit only-icon pull-right">','<div class="icon-circle-minus"></div>',"</div>","</div>","<% } %>","</div>"].join("")},d="sulu.contact-form",e=function(){return d+".initialized"},f=function(){return d+".changed"},g=function(){this.sandbox.on("sulu.contact-form.add-collectionfilters",m.bind(this)),this.sandbox.on("sulu.contact-form.add-required",n.bind(this)),this.sandbox.on("sulu.contact-form.is.initialized",p.bind(this)),h.call(this)},h=function(){this.sandbox.on("husky.dependent-select.add-fields.all.items.selected",function(){this.sandbox.emit("husky.overlay.add-fields.okbutton.activate")}.bind(this)),this.sandbox.on("husky.dependent-select.add-fields.all.items.deselected",function(){this.sandbox.emit("husky.overlay.add-fields.okbutton.deactivate")}.bind(this))},i=function(){null!==this.$editOverlayContent&&this.sandbox.dom.on(this.sandbox.dom.find(".grid-row",this.$editOverlayContent),"click",j.bind(this),b.editDeleteSelector)},j=function(a){var c=this.sandbox.dom.$(a.delegateTarget),d=this.sandbox.dom.find('[class^="icon"]',a.currentTarget),e=JSON.parse(this.sandbox.dom.attr(c,"data-deleted"));e===!0?(this.sandbox.dom.removeClass(c,b.fadedClass),this.sandbox.dom.removeClass(d,b.editUndoDeleteIcon),this.sandbox.dom.prependClass(d,b.editDeleteIcon),this.sandbox.dom.attr(c,"data-deleted","false")):(this.sandbox.dom.addClass(c,b.fadedClass),this.sandbox.dom.removeClass(d,b.editDeleteIcon),this.sandbox.dom.prependClass(d,b.editUndoDeleteIcon),this.sandbox.dom.attr(c,"data-deleted","true"))},k=function(){this.sandbox.dom.off(this.$editOverlayContent)},l=function(){this.sandbox.form.removeCollectionFilter(this.form,"emails"),this.sandbox.form.removeCollectionFilter(this.form,"phones"),this.sandbox.form.removeCollectionFilter(this.form,"urls"),this.sandbox.form.removeCollectionFilter(this.form,"faxes"),this.sandbox.form.removeCollectionFilter(this.form,"notes")},m=function(a){this.form=a,this.sandbox.form.addCollectionFilter(this.form,"emails",function(a){return""===a.id&&delete a.id,""!==a.email}),this.sandbox.form.addCollectionFilter(this.form,"phones",function(a){return""===a.id&&delete a.id,""!==a.phone}),this.sandbox.form.addCollectionFilter(this.form,"urls",function(a){return""===a.id&&delete a.id,""!==a.url}),this.sandbox.form.addCollectionFilter(this.form,"faxes",function(a){return""===a.id&&delete a.id,""!==a.fax}),this.sandbox.form.addCollectionFilter(this.form,"notes",function(a){return""===a.id&&delete a.id,""!==a.value})},n=function(a){var b,c={email:"email-tpl"},d='#contact-fields *[data-mapper-property-tpl="<%= selector %>"]:first';-1!==a.indexOf("email")&&(b=this.sandbox.util.template(d,{selector:c.email}),this.sandbox.form.addConstraint(this.form,b+" input.email-value","required",{required:!0}),this.sandbox.dom.addClass(b+" label span:first","required"),this.sandbox.dom.attr(b,"data-contactform-required",!0))},o=function(a,b){for(var c=-1,d=a.length;++c<d;)if(a[c].id===b)return a[c]},p=function(a){this.initialized?a.call(this):this.sandbox.on("sulu.contact-form.initialized",function(){a.call(this)}.bind(this))},q=function(){var a,c,d,e=this.sandbox.dom.children("#"+b.fieldId)[0],f=this.sandbox.dom.children("#"+b.fieldTypeId)[0],g=this.sandbox.dom.data(e,"selection"),h=this.sandbox.dom.data(f,"selection");a=this.dropdownDataArray[g],c=o(this.dropdownDataArray[g].items,h),d={},d[a.type]="",d[a.type+"Type"]={id:h,name:c.name},d.attributes={},this.sandbox.form.addToCollection(this.form,a.collection,d),this.sandbox.emit("husky.overlay.add-fields.remove")},r=function(){var a,b,c,d,e,g;for(a=-1,b=this.editFieldsData.length;++a<b;)g=JSON.parse(this.sandbox.dom.attr(this.editFieldsData[a].$element,"data-deleted")),g===!0?(this.sandbox.form.removeFromCollection(this.form,this.editFieldsData[a].mapperId),this.sandbox.emit(f.call(this))):(c=parseInt(this.sandbox.dom.attr(this.editFieldsData[a].$dropdown,"data-selection"),10),c!==this.editFieldsData[a].type.id&&(d=s.call(this,this.editFieldsData[a].types,c),null!==d&&(e={},e[this.editFieldsData[a].typeName]=d,this.sandbox.form.editInCollection(this.form,this.editFieldsData[a].mapperId,e),this.sandbox.emit(f.call(this)))));k.call(this),this.sandbox.stop(this.$editOverlayContent)},s=function(a,b){for(var c=-1,d=a.length;++c<d;)if(a[c].id===b)return a[c];return null},t=function(){var a,b,c,d=this.options.fieldTypes;for(c in d)for(a=-1,b=d[c].length;++a<b;)d[c][a].name=this.sandbox.translate(d[c][a].name);this.options.translatedFieldTypes=d},u=function(){this.editFieldsData=[],l.call(this);var a,b,d,e,f,g,h,i=this.sandbox.form.getData(this.form),j=this.sandbox.dom.createElement('<div class="edit-fields"/>');m.call(this,this.form),a={address:i.addresses,email:i.emails,fax:i.faxes,phone:i.phones,url:i.urls};for(e in a)for(b=-1,d=a[e].length;++b<d;)g=this.sandbox.dom.attr(this.sandbox.dom.$('[data-mapper-id="'+a[e][b].mapperId+'"]'),"data-contactform-required"),h=!1,a[e][b].attributes&&a[e][b].attributes.permanent&&(h=a[e][b].attributes.permanent),f=this.sandbox.dom.createElement(this.sandbox.util.template(c.editField)({dropdownId:"edit-dropdown-"+e+"-"+b,showDeleteButton:!g&&!h})),this.editFieldsData.push({id:a[e][b].id,typeName:e+"Type",type:a[e][b][e+"Type"],name:this.sandbox.translate("public."+e),$element:f,dropdownId:"edit-dropdown-"+e+"-"+b,types:this.options.fieldTypes[e],mapperId:parseInt(a[e][b].mapperId),dropdownData:null,$dropdown:null}),this.sandbox.dom.append(j,f);return j},v=function(){var a,b,c,d;for(a=-1,b=this.editFieldsData.length;++a<b;)for(this.editFieldsData[a].dropdownData=[],c=-1,d=this.editFieldsData[a].types.length;++c<d;)this.editFieldsData[a].dropdownData.push({id:this.editFieldsData[a].types[c].id,name:this.editFieldsData[a].name+" ("+this.editFieldsData[a].types[c].name+")"})},w=function(){v.call(this);for(var a=-1,b=this.editFieldsData.length;++a<b;)this.editFieldsData[a].$dropdown=this.sandbox.dom.find("#"+this.editFieldsData[a].dropdownId,this.editFieldsData[a].$element),this.sandbox.start([{name:"select@husky",options:{el:this.editFieldsData[a].$dropdown,instanceName:this.editFieldsData[a].dropdownId,data:this.editFieldsData[a].dropdownData,preSelectedElements:[this.editFieldsData[a].type.id]}}])},x=function(){this.$editOverlayContent=u.call(this),this.sandbox.start([{name:"overlay@husky",options:{title:this.sandbox.translate("public.edit-fields"),openOnStart:!0,removeOnClose:!0,instanceName:"edit-fields",data:this.$editOverlayContent,okCallback:r.bind(this),closeCallback:k.bind(this)}}]),w.call(this),i.call(this)},y=function(){var a,d={};this.dropdownDataArray=[],this.$addOverlay=this.sandbox.dom.createElement(c.add),this.sandbox.util.foreach(this.options.fields,function(b,c){if(!this.options.fieldTypes||!this.options.fieldTypes[b])throw"contact-form@sulu: fieldTypes not defined for type "+b;a={id:c,name:this.sandbox.translate("public."+b),type:b,collection:b+"s",items:this.options.translatedFieldTypes[b]},d[b]=a}.bind(this)),d.address.disabled=!0,d.fax.collection="faxes",this.dropdownDataArray=Object.keys(d).map(function(a){return d[a]}),this.sandbox.start([{name:"overlay@husky",options:{title:this.sandbox.translate("public.add-fields"),openOnStart:!0,removeOnClose:!0,instanceName:"add-fields",okInactive:!0,data:this.$addOverlay,okCallback:q.bind(this)}},{name:"dependent-select@husky",options:{el:this.$addOverlay,singleSelect:!0,data:this.dropdownDataArray,instanceName:"add-fields",container:["#"+b.fieldId,"#"+b.fieldTypeId]}}])};return{initialize:function(){this.initialized=!1,this.$editOverlayContent=null,this.form=null,this.$addOverlay=null,this.dropdownDataArray=[],this.editFieldsData=[],this.options=this.sandbox.util.extend(!0,{},a,this.options),t.call(this),this.render(),g.call(this),this.sandbox.emit(e.call(this)),this.initialized=!0},render:function(){var a=this.sandbox.dom.createElement('<div id="contact-form-options-container" />');this.sandbox.dom.append(this.$el,a),this.sandbox.start([{name:"dropdown@husky",options:{trigger:this.$el,triggerOutside:!0,el:a,alignment:"right",shadow:!0,toggleClassOn:this.$el,data:[{id:1,name:"public.edit-fields",callback:x.bind(this)},{id:2,name:"public.add-fields",callback:y.bind(this)}]}}])}}});