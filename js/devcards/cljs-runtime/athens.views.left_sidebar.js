goog.provide('athens.views.left_sidebar');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('stylefy.core');
athens.views.left_sidebar.left_sidebar_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 288px",new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"left-sidebar",new cljs.core.Keyword(null,"width","width",-384071477),"288px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"padding","padding",1660304693),"120px 32px 16px 32px",new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top-line","top-line",-1024691303),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"column",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr auto auto",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"4px"], null),new cljs.core.Keyword(null,"small-icon","small-icon",-1258883016),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null),new cljs.core.Keyword(null,"large-icon","large-icon",-1011018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"22px"], null)], null)], null);
athens.views.left_sidebar.shortcuts_list_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 32px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"inherit"], null)], null)], null);
athens.views.left_sidebar.shortcut_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 0",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null)], null);
athens.views.left_sidebar.notional_logotype_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],[athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680)),"18px",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null),"all 0.05s ease","bold","flex-start",new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),"none","-0.05em","center","IBM Plex Serif"]);
athens.views.left_sidebar.left_sidebar = (function athens$views$left_sidebar$left_sidebar(){
var open_QMARK_ = (function (){var G__61194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("left-sidebar","open","left-sidebar/open",-686633270)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__61194) : re_frame.core.subscribe.call(null,G__61194));
})();
var shortcuts = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(cljs.core.deref((function (){var G__61195 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__61196 = athens.db.dsdb;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(G__61195,G__61196) : posh.reagent.q.call(null,G__61195,G__61196));
})())));
if(cljs.core.truth_(cljs.core.deref(open_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.left_sidebar.left_sidebar_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.left_sidebar.shortcuts_list_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.shortcuts_list_style,new cljs.core.Keyword(null,"heading","heading",-1312171873)),"Shortcuts"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$left_sidebar$left_sidebar_$_iter__61197(s__61198){
return (new cljs.core.LazySeq(null,(function (){
var s__61198__$1 = s__61198;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61198__$1);
if(temp__5735__auto__){
var s__61198__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61198__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61198__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61200 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61199 = (0);
while(true){
if((i__61199 < size__4581__auto__)){
var vec__61201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61199);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61201,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61201,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61201,(2),null);
cljs.core.chunk_append(b__61200,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.shortcut_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61199,vec__61201,_order,title,uid,c__4580__auto__,size__4581__auto__,b__61200,s__61198__$2,temp__5735__auto__,open_QMARK_,shortcuts){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__61199,vec__61201,_order,title,uid,c__4580__auto__,size__4581__auto__,b__61200,s__61198__$2,temp__5735__auto__,open_QMARK_,shortcuts))
], null)),title], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__61208 = (i__61199 + (1));
i__61199 = G__61208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61200),athens$views$left_sidebar$left_sidebar_$_iter__61197(cljs.core.chunk_rest(s__61198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61200),null);
}
} else {
var vec__61204 = cljs.core.first(s__61198__$2);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61204,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61204,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61204,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.shortcut_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__61204,_order,title,uid,s__61198__$2,temp__5735__auto__,open_QMARK_,shortcuts){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__61204,_order,title,uid,s__61198__$2,temp__5735__auto__,open_QMARK_,shortcuts))
], null)),title], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$views$left_sidebar$left_sidebar_$_iter__61197(cljs.core.rest(s__61198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(shortcuts);
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.left_sidebar_style,new cljs.core.Keyword(null,"footer","footer",1606445390)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.notional_logotype_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/athensresearch/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)),"Athens"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Load Test Data",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__61207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("get-db","init","get-db/init",-642889137)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61207) : re_frame.core.dispatch.call(null,G__61207));
})], null)], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=athens.views.left_sidebar.js.map