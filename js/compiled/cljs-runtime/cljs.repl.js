goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56909){
var map__56910 = p__56909;
var map__56910__$1 = (((((!((map__56910 == null))))?(((((map__56910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56910):map__56910);
var m = map__56910__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56912_57057 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56913_57058 = null;
var count__56914_57059 = (0);
var i__56915_57060 = (0);
while(true){
if((i__56915_57060 < count__56914_57059)){
var f_57065 = chunk__56913_57058.cljs$core$IIndexed$_nth$arity$2(null,i__56915_57060);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57065], 0));


var G__57067 = seq__56912_57057;
var G__57068 = chunk__56913_57058;
var G__57069 = count__56914_57059;
var G__57070 = (i__56915_57060 + (1));
seq__56912_57057 = G__57067;
chunk__56913_57058 = G__57068;
count__56914_57059 = G__57069;
i__56915_57060 = G__57070;
continue;
} else {
var temp__5735__auto___57072 = cljs.core.seq(seq__56912_57057);
if(temp__5735__auto___57072){
var seq__56912_57078__$1 = temp__5735__auto___57072;
if(cljs.core.chunked_seq_QMARK_(seq__56912_57078__$1)){
var c__4556__auto___57079 = cljs.core.chunk_first(seq__56912_57078__$1);
var G__57080 = cljs.core.chunk_rest(seq__56912_57078__$1);
var G__57081 = c__4556__auto___57079;
var G__57082 = cljs.core.count(c__4556__auto___57079);
var G__57083 = (0);
seq__56912_57057 = G__57080;
chunk__56913_57058 = G__57081;
count__56914_57059 = G__57082;
i__56915_57060 = G__57083;
continue;
} else {
var f_57087 = cljs.core.first(seq__56912_57078__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57087], 0));


var G__57088 = cljs.core.next(seq__56912_57078__$1);
var G__57089 = null;
var G__57090 = (0);
var G__57091 = (0);
seq__56912_57057 = G__57088;
chunk__56913_57058 = G__57089;
count__56914_57059 = G__57090;
i__56915_57060 = G__57091;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57092 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57092], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57092)))?cljs.core.second(arglists_57092):arglists_57092)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56920_57097 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56921_57098 = null;
var count__56922_57099 = (0);
var i__56923_57100 = (0);
while(true){
if((i__56923_57100 < count__56922_57099)){
var vec__56934_57101 = chunk__56921_57098.cljs$core$IIndexed$_nth$arity$2(null,i__56923_57100);
var name_57102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56934_57101,(0),null);
var map__56937_57103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56934_57101,(1),null);
var map__56937_57104__$1 = (((((!((map__56937_57103 == null))))?(((((map__56937_57103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56937_57103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56937_57103):map__56937_57103);
var doc_57105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56937_57104__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56937_57104__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57102], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57106], 0));

if(cljs.core.truth_(doc_57105)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57105], 0));
} else {
}


var G__57107 = seq__56920_57097;
var G__57108 = chunk__56921_57098;
var G__57109 = count__56922_57099;
var G__57110 = (i__56923_57100 + (1));
seq__56920_57097 = G__57107;
chunk__56921_57098 = G__57108;
count__56922_57099 = G__57109;
i__56923_57100 = G__57110;
continue;
} else {
var temp__5735__auto___57111 = cljs.core.seq(seq__56920_57097);
if(temp__5735__auto___57111){
var seq__56920_57112__$1 = temp__5735__auto___57111;
if(cljs.core.chunked_seq_QMARK_(seq__56920_57112__$1)){
var c__4556__auto___57113 = cljs.core.chunk_first(seq__56920_57112__$1);
var G__57114 = cljs.core.chunk_rest(seq__56920_57112__$1);
var G__57115 = c__4556__auto___57113;
var G__57116 = cljs.core.count(c__4556__auto___57113);
var G__57117 = (0);
seq__56920_57097 = G__57114;
chunk__56921_57098 = G__57115;
count__56922_57099 = G__57116;
i__56923_57100 = G__57117;
continue;
} else {
var vec__56939_57118 = cljs.core.first(seq__56920_57112__$1);
var name_57119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56939_57118,(0),null);
var map__56942_57120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56939_57118,(1),null);
var map__56942_57121__$1 = (((((!((map__56942_57120 == null))))?(((((map__56942_57120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56942_57120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56942_57120):map__56942_57120);
var doc_57122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942_57121__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942_57121__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57119], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57123], 0));

if(cljs.core.truth_(doc_57122)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57122], 0));
} else {
}


var G__57124 = cljs.core.next(seq__56920_57112__$1);
var G__57125 = null;
var G__57126 = (0);
var G__57127 = (0);
seq__56920_57097 = G__57124;
chunk__56921_57098 = G__57125;
count__56922_57099 = G__57126;
i__56923_57100 = G__57127;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56944 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56945 = null;
var count__56946 = (0);
var i__56947 = (0);
while(true){
if((i__56947 < count__56946)){
var role = chunk__56945.cljs$core$IIndexed$_nth$arity$2(null,i__56947);
var temp__5735__auto___57128__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57128__$1)){
var spec_57129 = temp__5735__auto___57128__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57129)], 0));
} else {
}


var G__57130 = seq__56944;
var G__57131 = chunk__56945;
var G__57132 = count__56946;
var G__57133 = (i__56947 + (1));
seq__56944 = G__57130;
chunk__56945 = G__57131;
count__56946 = G__57132;
i__56947 = G__57133;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56944);
if(temp__5735__auto____$1){
var seq__56944__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56944__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56944__$1);
var G__57134 = cljs.core.chunk_rest(seq__56944__$1);
var G__57135 = c__4556__auto__;
var G__57136 = cljs.core.count(c__4556__auto__);
var G__57137 = (0);
seq__56944 = G__57134;
chunk__56945 = G__57135;
count__56946 = G__57136;
i__56947 = G__57137;
continue;
} else {
var role = cljs.core.first(seq__56944__$1);
var temp__5735__auto___57138__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57138__$2)){
var spec_57139 = temp__5735__auto___57138__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57139)], 0));
} else {
}


var G__57140 = cljs.core.next(seq__56944__$1);
var G__57141 = null;
var G__57142 = (0);
var G__57143 = (0);
seq__56944 = G__57140;
chunk__56945 = G__57141;
count__56946 = G__57142;
i__56947 = G__57143;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__57144 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57145 = cljs.core.ex_cause(t);
via = G__57144;
t = G__57145;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__56954 = datafied_throwable;
var map__56954__$1 = (((((!((map__56954 == null))))?(((((map__56954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56954):map__56954);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56954__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56954__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56954__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56956 = cljs.core.last(via);
var map__56956__$1 = (((((!((map__56956 == null))))?(((((map__56956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56956):map__56956);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56957 = data;
var map__56957__$1 = (((((!((map__56957 == null))))?(((((map__56957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56957):map__56957);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56957__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56957__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56957__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56958 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56958__$1 = (((((!((map__56958 == null))))?(((((map__56958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56958):map__56958);
var top_data = map__56958__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56958__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56963 = phase;
var G__56963__$1 = (((G__56963 instanceof cljs.core.Keyword))?G__56963.fqn:null);
switch (G__56963__$1) {
case "read-source":
var map__56964 = data;
var map__56964__$1 = (((((!((map__56964 == null))))?(((((map__56964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56964):map__56964);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56964__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56964__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56966 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56966__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56966,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56966);
var G__56966__$2 = (cljs.core.truth_((function (){var fexpr__56967 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56967.cljs$core$IFn$_invoke$arity$1 ? fexpr__56967.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56967.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56966__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56966__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56966__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56966__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56968 = top_data;
var G__56968__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56968);
var G__56968__$2 = (cljs.core.truth_((function (){var fexpr__56970 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56970.cljs$core$IFn$_invoke$arity$1 ? fexpr__56970.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56970.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56968__$1);
var G__56968__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56968__$2);
var G__56968__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56968__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56968__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56971 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(3),null);
var G__56974 = top_data;
var G__56974__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56974,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56974);
var G__56974__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56974__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56974__$1);
var G__56974__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56974__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56974__$2);
var G__56974__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56974__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56974__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56974__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56974__$4;
}

break;
case "execution":
var vec__56975 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56975,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56975,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56975,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56975,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56950_SHARP_){
var or__4126__auto__ = (p1__56950_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56980 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56980.cljs$core$IFn$_invoke$arity$1 ? fexpr__56980.cljs$core$IFn$_invoke$arity$1(p1__56950_SHARP_) : fexpr__56980.call(null,p1__56950_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56981 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56981__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56981,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56981);
var G__56981__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56981__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56981__$1);
var G__56981__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56981__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56981__$2);
var G__56981__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56981__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56981__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56981__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56981__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56963__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56997){
var map__56998 = p__56997;
var map__56998__$1 = (((((!((map__56998 == null))))?(((((map__56998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56998):map__56998);
var triage_data = map__56998__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__57000 = phase;
var G__57000__$1 = (((G__57000 instanceof cljs.core.Keyword))?G__57000.fqn:null);
switch (G__57000__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__57001 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__57002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57003 = loc;
var G__57004 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57005_57186 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57006_57187 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57007_57188 = true;
var _STAR_print_fn_STAR__temp_val__57008_57189 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57007_57188);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57008_57189);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56991_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56991_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57006_57187);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57005_57186);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57001,G__57002,G__57003,G__57004) : format.call(null,G__57001,G__57002,G__57003,G__57004));

break;
case "macroexpansion":
var G__57009 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__57010 = cause_type;
var G__57011 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57012 = loc;
var G__57013 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57009,G__57010,G__57011,G__57012,G__57013) : format.call(null,G__57009,G__57010,G__57011,G__57012,G__57013));

break;
case "compile-syntax-check":
var G__57014 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57015 = cause_type;
var G__57016 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57017 = loc;
var G__57018 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57014,G__57015,G__57016,G__57017,G__57018) : format.call(null,G__57014,G__57015,G__57016,G__57017,G__57018));

break;
case "compilation":
var G__57019 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57020 = cause_type;
var G__57021 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57022 = loc;
var G__57023 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57019,G__57020,G__57021,G__57022,G__57023) : format.call(null,G__57019,G__57020,G__57021,G__57022,G__57023));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57024 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57025 = symbol;
var G__57026 = loc;
var G__57027 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57028_57208 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57029_57209 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57030_57210 = true;
var _STAR_print_fn_STAR__temp_val__57031_57211 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57030_57210);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57031_57211);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56996_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56996_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57029_57209);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57028_57208);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57024,G__57025,G__57026,G__57027) : format.call(null,G__57024,G__57025,G__57026,G__57027));
} else {
var G__57036 = "Execution error%s at %s(%s).\n%s\n";
var G__57037 = cause_type;
var G__57038 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57039 = loc;
var G__57040 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57036,G__57037,G__57038,G__57039,G__57040) : format.call(null,G__57036,G__57037,G__57038,G__57039,G__57040));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57000__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
