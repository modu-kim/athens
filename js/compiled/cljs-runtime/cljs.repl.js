goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56907){
var map__56908 = p__56907;
var map__56908__$1 = (((((!((map__56908 == null))))?(((((map__56908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56908):map__56908);
var m = map__56908__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56908__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56908__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56913_57038 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56914_57039 = null;
var count__56915_57040 = (0);
var i__56916_57041 = (0);
while(true){
if((i__56916_57041 < count__56915_57040)){
var f_57042 = chunk__56914_57039.cljs$core$IIndexed$_nth$arity$2(null,i__56916_57041);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57042], 0));


var G__57043 = seq__56913_57038;
var G__57044 = chunk__56914_57039;
var G__57045 = count__56915_57040;
var G__57046 = (i__56916_57041 + (1));
seq__56913_57038 = G__57043;
chunk__56914_57039 = G__57044;
count__56915_57040 = G__57045;
i__56916_57041 = G__57046;
continue;
} else {
var temp__5735__auto___57047 = cljs.core.seq(seq__56913_57038);
if(temp__5735__auto___57047){
var seq__56913_57048__$1 = temp__5735__auto___57047;
if(cljs.core.chunked_seq_QMARK_(seq__56913_57048__$1)){
var c__4556__auto___57049 = cljs.core.chunk_first(seq__56913_57048__$1);
var G__57050 = cljs.core.chunk_rest(seq__56913_57048__$1);
var G__57051 = c__4556__auto___57049;
var G__57052 = cljs.core.count(c__4556__auto___57049);
var G__57053 = (0);
seq__56913_57038 = G__57050;
chunk__56914_57039 = G__57051;
count__56915_57040 = G__57052;
i__56916_57041 = G__57053;
continue;
} else {
var f_57054 = cljs.core.first(seq__56913_57048__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57054], 0));


var G__57055 = cljs.core.next(seq__56913_57048__$1);
var G__57056 = null;
var G__57057 = (0);
var G__57058 = (0);
seq__56913_57038 = G__57055;
chunk__56914_57039 = G__57056;
count__56915_57040 = G__57057;
i__56916_57041 = G__57058;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57059 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57059], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57059)))?cljs.core.second(arglists_57059):arglists_57059)], 0));
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
var seq__56917_57060 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56918_57061 = null;
var count__56919_57062 = (0);
var i__56920_57063 = (0);
while(true){
if((i__56920_57063 < count__56919_57062)){
var vec__56935_57064 = chunk__56918_57061.cljs$core$IIndexed$_nth$arity$2(null,i__56920_57063);
var name_57065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56935_57064,(0),null);
var map__56938_57066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56935_57064,(1),null);
var map__56938_57067__$1 = (((((!((map__56938_57066 == null))))?(((((map__56938_57066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56938_57066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56938_57066):map__56938_57066);
var doc_57068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56938_57067__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56938_57067__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57065], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57069], 0));

if(cljs.core.truth_(doc_57068)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57068], 0));
} else {
}


var G__57078 = seq__56917_57060;
var G__57079 = chunk__56918_57061;
var G__57080 = count__56919_57062;
var G__57081 = (i__56920_57063 + (1));
seq__56917_57060 = G__57078;
chunk__56918_57061 = G__57079;
count__56919_57062 = G__57080;
i__56920_57063 = G__57081;
continue;
} else {
var temp__5735__auto___57082 = cljs.core.seq(seq__56917_57060);
if(temp__5735__auto___57082){
var seq__56917_57083__$1 = temp__5735__auto___57082;
if(cljs.core.chunked_seq_QMARK_(seq__56917_57083__$1)){
var c__4556__auto___57084 = cljs.core.chunk_first(seq__56917_57083__$1);
var G__57085 = cljs.core.chunk_rest(seq__56917_57083__$1);
var G__57086 = c__4556__auto___57084;
var G__57087 = cljs.core.count(c__4556__auto___57084);
var G__57088 = (0);
seq__56917_57060 = G__57085;
chunk__56918_57061 = G__57086;
count__56919_57062 = G__57087;
i__56920_57063 = G__57088;
continue;
} else {
var vec__56940_57093 = cljs.core.first(seq__56917_57083__$1);
var name_57094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56940_57093,(0),null);
var map__56943_57095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56940_57093,(1),null);
var map__56943_57096__$1 = (((((!((map__56943_57095 == null))))?(((((map__56943_57095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56943_57095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56943_57095):map__56943_57095);
var doc_57097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943_57096__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943_57096__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57094], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57098], 0));

if(cljs.core.truth_(doc_57097)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57097], 0));
} else {
}


var G__57125 = cljs.core.next(seq__56917_57083__$1);
var G__57126 = null;
var G__57127 = (0);
var G__57128 = (0);
seq__56917_57060 = G__57125;
chunk__56918_57061 = G__57126;
count__56919_57062 = G__57127;
i__56920_57063 = G__57128;
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

var seq__56945 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56946 = null;
var count__56947 = (0);
var i__56948 = (0);
while(true){
if((i__56948 < count__56947)){
var role = chunk__56946.cljs$core$IIndexed$_nth$arity$2(null,i__56948);
var temp__5735__auto___57129__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57129__$1)){
var spec_57130 = temp__5735__auto___57129__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57130)], 0));
} else {
}


var G__57131 = seq__56945;
var G__57132 = chunk__56946;
var G__57133 = count__56947;
var G__57134 = (i__56948 + (1));
seq__56945 = G__57131;
chunk__56946 = G__57132;
count__56947 = G__57133;
i__56948 = G__57134;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56945);
if(temp__5735__auto____$1){
var seq__56945__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56945__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56945__$1);
var G__57135 = cljs.core.chunk_rest(seq__56945__$1);
var G__57136 = c__4556__auto__;
var G__57137 = cljs.core.count(c__4556__auto__);
var G__57138 = (0);
seq__56945 = G__57135;
chunk__56946 = G__57136;
count__56947 = G__57137;
i__56948 = G__57138;
continue;
} else {
var role = cljs.core.first(seq__56945__$1);
var temp__5735__auto___57139__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57139__$2)){
var spec_57140 = temp__5735__auto___57139__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57140)], 0));
} else {
}


var G__57141 = cljs.core.next(seq__56945__$1);
var G__57142 = null;
var G__57143 = (0);
var G__57144 = (0);
seq__56945 = G__57141;
chunk__56946 = G__57142;
count__56947 = G__57143;
i__56948 = G__57144;
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
var G__57145 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57146 = cljs.core.ex_cause(t);
via = G__57145;
t = G__57146;
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
var map__56951 = datafied_throwable;
var map__56951__$1 = (((((!((map__56951 == null))))?(((((map__56951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56951):map__56951);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56951__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56952 = cljs.core.last(via);
var map__56952__$1 = (((((!((map__56952 == null))))?(((((map__56952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56952):map__56952);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56953 = data;
var map__56953__$1 = (((((!((map__56953 == null))))?(((((map__56953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56953):map__56953);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56953__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56953__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56953__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56954 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56954__$1 = (((((!((map__56954 == null))))?(((((map__56954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56954):map__56954);
var top_data = map__56954__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56959 = phase;
var G__56959__$1 = (((G__56959 instanceof cljs.core.Keyword))?G__56959.fqn:null);
switch (G__56959__$1) {
case "read-source":
var map__56960 = data;
var map__56960__$1 = (((((!((map__56960 == null))))?(((((map__56960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56960):map__56960);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56960__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56960__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56962 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56962__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56962,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56962);
var G__56962__$2 = (cljs.core.truth_((function (){var fexpr__56964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56964.cljs$core$IFn$_invoke$arity$1 ? fexpr__56964.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56964.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56962__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56962__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56962__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56962__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56965 = top_data;
var G__56965__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56965);
var G__56965__$2 = (cljs.core.truth_((function (){var fexpr__56966 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56966.cljs$core$IFn$_invoke$arity$1 ? fexpr__56966.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56966.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56965__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56965__$1);
var G__56965__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56965__$2);
var G__56965__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56965__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56965__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56967 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(3),null);
var G__56970 = top_data;
var G__56970__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56970);
var G__56970__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56970__$1);
var G__56970__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56970__$2);
var G__56970__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56970__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56970__$4;
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
var fexpr__56979 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56979.cljs$core$IFn$_invoke$arity$1 ? fexpr__56979.cljs$core$IFn$_invoke$arity$1(p1__56950_SHARP_) : fexpr__56979.call(null,p1__56950_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56980 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56980__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56980,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56980);
var G__56980__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56980__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56980__$1);
var G__56980__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56980__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56980__$2);
var G__56980__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56980__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56980__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56980__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56980__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56959__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56983){
var map__56984 = p__56983;
var map__56984__$1 = (((((!((map__56984 == null))))?(((((map__56984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56984):map__56984);
var triage_data = map__56984__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56984__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__56987 = phase;
var G__56987__$1 = (((G__56987 instanceof cljs.core.Keyword))?G__56987.fqn:null);
switch (G__56987__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56988 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56989 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56990 = loc;
var G__56991 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56992_57198 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56993_57199 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56994_57200 = true;
var _STAR_print_fn_STAR__temp_val__56995_57201 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56994_57200);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56995_57201);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56981_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56981_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56993_57199);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56992_57198);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56988,G__56989,G__56990,G__56991) : format.call(null,G__56988,G__56989,G__56990,G__56991));

break;
case "macroexpansion":
var G__56997 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56998 = cause_type;
var G__56999 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57000 = loc;
var G__57001 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56997,G__56998,G__56999,G__57000,G__57001) : format.call(null,G__56997,G__56998,G__56999,G__57000,G__57001));

break;
case "compile-syntax-check":
var G__57006 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57007 = cause_type;
var G__57008 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57009 = loc;
var G__57010 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57006,G__57007,G__57008,G__57009,G__57010) : format.call(null,G__57006,G__57007,G__57008,G__57009,G__57010));

break;
case "compilation":
var G__57011 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57012 = cause_type;
var G__57013 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57014 = loc;
var G__57015 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57011,G__57012,G__57013,G__57014,G__57015) : format.call(null,G__57011,G__57012,G__57013,G__57014,G__57015));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57020 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57021 = symbol;
var G__57022 = loc;
var G__57023 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57024_57209 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57025_57210 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57026_57211 = true;
var _STAR_print_fn_STAR__temp_val__57027_57212 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57026_57211);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57027_57212);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56982_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56982_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57025_57210);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57024_57209);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57020,G__57021,G__57022,G__57023) : format.call(null,G__57020,G__57021,G__57022,G__57023));
} else {
var G__57033 = "Execution error%s at %s(%s).\n%s\n";
var G__57034 = cause_type;
var G__57035 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57036 = loc;
var G__57037 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57033,G__57034,G__57035,G__57036,G__57037) : format.call(null,G__57033,G__57034,G__57035,G__57036,G__57037));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56987__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
