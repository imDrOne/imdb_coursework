(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e5c9142"],{4344:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"film-page"}},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"pa-1",attrs:{color:"white"}},[a("v-card-title",{staticClass:"pa-1"},[a("v-img",{attrs:{src:t.film.img}}),t._v(" "+t._s(t.film.film_name)+" ")],1),a("v-card-subtitle",{staticClass:"pl-1 py-1",domProps:{textContent:t._s(t.genre)}}),a("v-card-actions",t._l(t.film.tags,(function(e,i){return a("v-chip",{key:i,staticClass:"ma-1",attrs:{color:"pink",label:"","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-label")]),t._v(" "+t._s(e)+" ")],1)})),1)],1)],1),a("v-col",[a("v-row",{attrs:{justify:"center"}},t._l(t.acters,(function(e){return a("v-card",{key:e.id,staticClass:"white mx-2 mb-2 pa-2",attrs:{"max-width":"220","max-height":"300"}},[a("v-card-title",{staticClass:"pa-1"},[t._v(t._s(e.acter))]),a("v-img",{attrs:{src:e.avatar,height:"200"}})],1)})),1)],1)],1)],1)},s=[],l=(a("a15b"),a("3835")),c=a("5530"),n=a("2f62"),o={name:"Film",data:function(){return{localData:null,film:{},acters:[]}},computed:Object(c["a"])({},Object(n["c"])({getFilmInfo:"GET_INFO_ABOUT_FILM"}),{genre:function(){var t=this.film.genres.join(", ");return"Жанры: ".concat(t)}}),created:function(){var t=this.getFilmInfo(this.$route.params.id),e=Object(l["a"])(t,2);this.film=e[0],this.acters=e[1]}},r=o,h=a("2877"),u=a("6544"),p=a.n(u),d=a("b0af"),v=a("99d9"),f=(a("4de4"),a("4160"),a("8adc"),a("58df")),b=a("0789"),g=a("9d26"),m=a("a9ad"),C=a("4e82"),_=a("7560"),k=a("f2e7"),w=a("1c87"),O=a("af2b"),j=a("d9bd"),x=Object(f["a"])(m["a"],O["a"],w["a"],_["a"],Object(C["a"])("chipGroup"),Object(k["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(c["a"])({"v-chip":!0},w["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(w["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(l["a"])(e,2),i=a[0],s=a[1];t.$attrs.hasOwnProperty(i)&&Object(j["a"])(i,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(g["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(b["a"],t)},genClose:function(){var t=this;return this.$createElement(g["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),i=a.tag,s=a.data;s.attrs=Object(c["a"])({},s.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var l=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(l,s),e)}}),B=a("62ad"),$=a("a523"),y=a("132d"),V=a("adda"),I=a("0fd9"),E=Object(h["a"])(r,i,s,!1,null,"755e691b",null);e["default"]=E.exports;p()(E,{VCard:d["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VChip:x,VCol:B["a"],VContainer:$["a"],VIcon:y["a"],VImg:V["a"],VRow:I["a"]})},"8adc":function(t,e,a){}}]);
//# sourceMappingURL=chunk-8e5c9142.a4af33e4.js.map