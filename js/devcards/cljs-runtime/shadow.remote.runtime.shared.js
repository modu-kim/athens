goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60752,p__60753){
var map__60754 = p__60752;
var map__60754__$1 = (((((!((map__60754 == null))))?(((((map__60754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60754):map__60754);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60754__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60755 = p__60753;
var map__60755__$1 = (((((!((map__60755 == null))))?(((((map__60755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60755):map__60755);
var msg = map__60755__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60758,p__60759){
var map__60760 = p__60758;
var map__60760__$1 = (((((!((map__60760 == null))))?(((((map__60760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60760):map__60760);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60760__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60761 = p__60759;
var map__60761__$1 = (((((!((map__60761 == null))))?(((((map__60761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60761):map__60761);
var msg = map__60761__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60761__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60764 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60766 = null;
var count__60767 = (0);
var i__60768 = (0);
while(true){
if((i__60768 < count__60767)){
var map__60774 = chunk__60766.cljs$core$IIndexed$_nth$arity$2(null,i__60768);
var map__60774__$1 = (((((!((map__60774 == null))))?(((((map__60774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60774):map__60774);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60774__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60821 = seq__60764;
var G__60822 = chunk__60766;
var G__60823 = count__60767;
var G__60824 = (i__60768 + (1));
seq__60764 = G__60821;
chunk__60766 = G__60822;
count__60767 = G__60823;
i__60768 = G__60824;
continue;
} else {
var G__60825 = seq__60764;
var G__60826 = chunk__60766;
var G__60827 = count__60767;
var G__60828 = (i__60768 + (1));
seq__60764 = G__60825;
chunk__60766 = G__60826;
count__60767 = G__60827;
i__60768 = G__60828;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60764);
if(temp__5735__auto__){
var seq__60764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60764__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60764__$1);
var G__60829 = cljs.core.chunk_rest(seq__60764__$1);
var G__60830 = c__4609__auto__;
var G__60831 = cljs.core.count(c__4609__auto__);
var G__60832 = (0);
seq__60764 = G__60829;
chunk__60766 = G__60830;
count__60767 = G__60831;
i__60768 = G__60832;
continue;
} else {
var map__60776 = cljs.core.first(seq__60764__$1);
var map__60776__$1 = (((((!((map__60776 == null))))?(((((map__60776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60776):map__60776);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60833 = cljs.core.next(seq__60764__$1);
var G__60834 = null;
var G__60835 = (0);
var G__60836 = (0);
seq__60764 = G__60833;
chunk__60766 = G__60834;
count__60767 = G__60835;
i__60768 = G__60836;
continue;
} else {
var G__60837 = cljs.core.next(seq__60764__$1);
var G__60838 = null;
var G__60839 = (0);
var G__60840 = (0);
seq__60764 = G__60837;
chunk__60766 = G__60838;
count__60767 = G__60839;
i__60768 = G__60840;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60778,msg){
var map__60779 = p__60778;
var map__60779__$1 = (((((!((map__60779 == null))))?(((((map__60779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60779):map__60779);
var runtime = map__60779__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60781,key,p__60782){
var map__60783 = p__60781;
var map__60783__$1 = (((((!((map__60783 == null))))?(((((map__60783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60783):map__60783);
var state = map__60783__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60783__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60784 = p__60782;
var map__60784__$1 = (((((!((map__60784 == null))))?(((((map__60784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60784):map__60784);
var spec = map__60784__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60784__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60787,key,spec){
var map__60788 = p__60787;
var map__60788__$1 = (((((!((map__60788 == null))))?(((((map__60788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60788):map__60788);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60788__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60795){
var map__60796 = p__60795;
var map__60796__$1 = (((((!((map__60796 == null))))?(((((map__60796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60796):map__60796);
var runtime = map__60796__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60796__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60790_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60790_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60791_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60791_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60792_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60792_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60793_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60793_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60794_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60794_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60798,key){
var map__60799 = p__60798;
var map__60799__$1 = (((((!((map__60799 == null))))?(((((map__60799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60799):map__60799);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60799__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60801,p__60802){
var map__60803 = p__60801;
var map__60803__$1 = (((((!((map__60803 == null))))?(((((map__60803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60803):map__60803);
var runtime = map__60803__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60803__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60804 = p__60802;
var map__60804__$1 = (((((!((map__60804 == null))))?(((((map__60804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60804):map__60804);
var msg = map__60804__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60804__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60807 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60809 = null;
var count__60810 = (0);
var i__60811 = (0);
while(true){
if((i__60811 < count__60810)){
var map__60817 = chunk__60809.cljs$core$IIndexed$_nth$arity$2(null,i__60811);
var map__60817__$1 = (((((!((map__60817 == null))))?(((((map__60817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60817):map__60817);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60817__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60841 = seq__60807;
var G__60842 = chunk__60809;
var G__60843 = count__60810;
var G__60844 = (i__60811 + (1));
seq__60807 = G__60841;
chunk__60809 = G__60842;
count__60810 = G__60843;
i__60811 = G__60844;
continue;
} else {
var G__60845 = seq__60807;
var G__60846 = chunk__60809;
var G__60847 = count__60810;
var G__60848 = (i__60811 + (1));
seq__60807 = G__60845;
chunk__60809 = G__60846;
count__60810 = G__60847;
i__60811 = G__60848;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60807);
if(temp__5735__auto__){
var seq__60807__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60807__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60807__$1);
var G__60849 = cljs.core.chunk_rest(seq__60807__$1);
var G__60850 = c__4609__auto__;
var G__60851 = cljs.core.count(c__4609__auto__);
var G__60852 = (0);
seq__60807 = G__60849;
chunk__60809 = G__60850;
count__60810 = G__60851;
i__60811 = G__60852;
continue;
} else {
var map__60819 = cljs.core.first(seq__60807__$1);
var map__60819__$1 = (((((!((map__60819 == null))))?(((((map__60819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60819):map__60819);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60853 = cljs.core.next(seq__60807__$1);
var G__60854 = null;
var G__60855 = (0);
var G__60856 = (0);
seq__60807 = G__60853;
chunk__60809 = G__60854;
count__60810 = G__60855;
i__60811 = G__60856;
continue;
} else {
var G__60857 = cljs.core.next(seq__60807__$1);
var G__60858 = null;
var G__60859 = (0);
var G__60860 = (0);
seq__60807 = G__60857;
chunk__60809 = G__60858;
count__60810 = G__60859;
i__60811 = G__60860;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
