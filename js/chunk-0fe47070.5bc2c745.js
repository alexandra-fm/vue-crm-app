(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fe47070"],{6859:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v(e._s(e._f("localize")("PlanningTitle")))]),r("h4",[e._v(e._s(e._f("currency")(e.info.bill,"RUB")))])]),e.loading?r("Loader"):e.categories.length?r("section",e._l(e.categories,(function(t){return r("div",{key:t.id},[r("p",[r("strong",[e._v(e._s(t.title)+":")]),e._v(" "+e._s(e._f("currency")(t.spend))+" "+e._s(e._f("localize")("Of"))+" "+e._s(e._f("currency")(t.limit))+" ")]),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"cat.tooltip"}],staticClass:"progress",attrs:{"data-position":"top"}},[r("div",{staticClass:"determinate",class:[t.progressColor],style:{width:t.progressPercent+"%"}})])])})),0):r("p",{staticClass:"center"},[e._v(" "+e._s(e._f("localize")("NoData"))+" "),r("router-link",{attrs:{to:"/Categories"}},[e._v(e._s(e._f("localize")("AddFirstCategory")))])],1)],1)},a=[],o=r("1da1"),i=r("5530"),c=(r("96cf"),r("d81d"),r("4de4"),r("99af"),r("2f62")),s=r("5bb3"),l=r("e977"),u={name:"planning",data:function(){return{loading:!0,categories:[]}},metaInfo:function(){return{title:Object(l["a"])("PlanningTitle")}},computed:Object(i["a"])({},Object(c["c"])(["info"])),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchRecords");case 2:return r=t.sent,t.next=5,e.$store.dispatch("fetchCategories");case 5:return n=t.sent,t.next=8,n.map((function(e){var t=r.filter((function(t){return t.categoryId===e.id})).filter((function(e){return"outcome"===e.type})).reduce((function(e,t){return e+t.amount}),0),n=100*t/e.limit,a=n>100?100:n,o=n<60?"green":n<100?"yellow":"red",c=e.limit-t,u="".concat(c<0?Object(l["a"])("MoreThan"):Object(l["a"])("Stayed"),"  ").concat(Object(s["a"])(Math.abs(c)));return Object(i["a"])(Object(i["a"])({},e),{},{progressPercent:a,progressColor:o,spend:t,tooltip:u})}));case 8:e.categories=t.sent,e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()}},d=u,f=r("2877"),p=Object(f["a"])(d,n,a,!1,null,null,null);t["default"]=p.exports},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),i=r("861d"),c=r("7b0b"),s=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),g=f("isConcatSpreadable"),v=9007199254740991,_="Maximum allowed index exceeded",h=p>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),b=d("concat"),m=function(e){if(!i(e))return!1;var t=e[g];return void 0!==t?!!t:o(e)},w=!h||!b;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,a,o,i=c(this),d=u(i,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?i:arguments[t],m(o)){if(a=s(o.length),f+a>v)throw TypeError(_);for(r=0;r<a;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=v)throw TypeError(_);l(d,f++,o)}return d.length=f,d}})}}]);
//# sourceMappingURL=chunk-0fe47070.5bc2c745.js.map