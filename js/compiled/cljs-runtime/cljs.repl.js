goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56906){
var map__56907 = p__56906;
var map__56907__$1 = (((((!((map__56907 == null))))?(((((map__56907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56907):map__56907);
var m = map__56907__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56907__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56907__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56909_57033 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56910_57034 = null;
var count__56911_57035 = (0);
var i__56912_57036 = (0);
while(true){
if((i__56912_57036 < count__56911_57035)){
var f_57041 = chunk__56910_57034.cljs$core$IIndexed$_nth$arity$2(null,i__56912_57036);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57041], 0));


var G__57042 = seq__56909_57033;
var G__57043 = chunk__56910_57034;
var G__57044 = count__56911_57035;
var G__57045 = (i__56912_57036 + (1));
seq__56909_57033 = G__57042;
chunk__56910_57034 = G__57043;
count__56911_57035 = G__57044;
i__56912_57036 = G__57045;
continue;
} else {
var temp__5735__auto___57046 = cljs.core.seq(seq__56909_57033);
if(temp__5735__auto___57046){
var seq__56909_57047__$1 = temp__5735__auto___57046;
if(cljs.core.chunked_seq_QMARK_(seq__56909_57047__$1)){
var c__4556__auto___57048 = cljs.core.chunk_first(seq__56909_57047__$1);
var G__57049 = cljs.core.chunk_rest(seq__56909_57047__$1);
var G__57050 = c__4556__auto___57048;
var G__57051 = cljs.core.count(c__4556__auto___57048);
var G__57052 = (0);
seq__56909_57033 = G__57049;
chunk__56910_57034 = G__57050;
count__56911_57035 = G__57051;
i__56912_57036 = G__57052;
continue;
} else {
var f_57053 = cljs.core.first(seq__56909_57047__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57053], 0));


var G__57054 = cljs.core.next(seq__56909_57047__$1);
var G__57055 = null;
var G__57056 = (0);
var G__57057 = (0);
seq__56909_57033 = G__57054;
chunk__56910_57034 = G__57055;
count__56911_57035 = G__57056;
i__56912_57036 = G__57057;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57058 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57058], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57058)))?cljs.core.second(arglists_57058):arglists_57058)], 0));
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
var seq__56916_57059 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56917_57060 = null;
var count__56918_57061 = (0);
var i__56919_57062 = (0);
while(true){
if((i__56919_57062 < count__56918_57061)){
var vec__56930_57063 = chunk__56917_57060.cljs$core$IIndexed$_nth$arity$2(null,i__56919_57062);
var name_57064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56930_57063,(0),null);
var map__56933_57065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56930_57063,(1),null);
var map__56933_57066__$1 = (((((!((map__56933_57065 == null))))?(((((map__56933_57065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56933_57065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56933_57065):map__56933_57065);
var doc_57067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933_57066__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933_57066__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57064], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57068], 0));

if(cljs.core.truth_(doc_57067)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57067], 0));
} else {
}


var G__57069 = seq__56916_57059;
var G__57070 = chunk__56917_57060;
var G__57071 = count__56918_57061;
var G__57072 = (i__56919_57062 + (1));
seq__56916_57059 = G__57069;
chunk__56917_57060 = G__57070;
count__56918_57061 = G__57071;
i__56919_57062 = G__57072;
continue;
} else {
var temp__5735__auto___57073 = cljs.core.seq(seq__56916_57059);
if(temp__5735__auto___57073){
var seq__56916_57074__$1 = temp__5735__auto___57073;
if(cljs.core.chunked_seq_QMARK_(seq__56916_57074__$1)){
var c__4556__auto___57075 = cljs.core.chunk_first(seq__56916_57074__$1);
var G__57076 = cljs.core.chunk_rest(seq__56916_57074__$1);
var G__57077 = c__4556__auto___57075;
var G__57078 = cljs.core.count(c__4556__auto___57075);
var G__57079 = (0);
seq__56916_57059 = G__57076;
chunk__56917_57060 = G__57077;
count__56918_57061 = G__57078;
i__56919_57062 = G__57079;
continue;
} else {
var vec__56935_57080 = cljs.core.first(seq__56916_57074__$1);
var name_57081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56935_57080,(0),null);
var map__56938_57082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56935_57080,(1),null);
var map__56938_57083__$1 = (((((!((map__56938_57082 == null))))?(((((map__56938_57082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56938_57082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56938_57082):map__56938_57082);
var doc_57084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56938_57083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56938_57083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57081], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57085], 0));

if(cljs.core.truth_(doc_57084)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57084], 0));
} else {
}


var G__57086 = cljs.core.next(seq__56916_57074__$1);
var G__57087 = null;
var G__57088 = (0);
var G__57089 = (0);
seq__56916_57059 = G__57086;
chunk__56917_57060 = G__57087;
count__56918_57061 = G__57088;
i__56919_57062 = G__57089;
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

var seq__56940 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56941 = null;
var count__56942 = (0);
var i__56943 = (0);
while(true){
if((i__56943 < count__56942)){
var role = chunk__56941.cljs$core$IIndexed$_nth$arity$2(null,i__56943);
var temp__5735__auto___57094__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57094__$1)){
var spec_57095 = temp__5735__auto___57094__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57095)], 0));
} else {
}


var G__57096 = seq__56940;
var G__57097 = chunk__56941;
var G__57098 = count__56942;
var G__57099 = (i__56943 + (1));
seq__56940 = G__57096;
chunk__56941 = G__57097;
count__56942 = G__57098;
i__56943 = G__57099;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56940);
if(temp__5735__auto____$1){
var seq__56940__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56940__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56940__$1);
var G__57104 = cljs.core.chunk_rest(seq__56940__$1);
var G__57105 = c__4556__auto__;
var G__57106 = cljs.core.count(c__4556__auto__);
var G__57107 = (0);
seq__56940 = G__57104;
chunk__56941 = G__57105;
count__56942 = G__57106;
i__56943 = G__57107;
continue;
} else {
var role = cljs.core.first(seq__56940__$1);
var temp__5735__auto___57108__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57108__$2)){
var spec_57109 = temp__5735__auto___57108__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57109)], 0));
} else {
}


var G__57110 = cljs.core.next(seq__56940__$1);
var G__57111 = null;
var G__57112 = (0);
var G__57113 = (0);
seq__56940 = G__57110;
chunk__56941 = G__57111;
count__56942 = G__57112;
i__56943 = G__57113;
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
var G__57126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57127 = cljs.core.ex_cause(t);
via = G__57126;
t = G__57127;
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
var map__56950 = datafied_throwable;
var map__56950__$1 = (((((!((map__56950 == null))))?(((((map__56950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56950):map__56950);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56950__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56951 = cljs.core.last(via);
var map__56951__$1 = (((((!((map__56951 == null))))?(((((map__56951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56951):map__56951);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56952 = data;
var map__56952__$1 = (((((!((map__56952 == null))))?(((((map__56952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56952):map__56952);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56953 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56953__$1 = (((((!((map__56953 == null))))?(((((map__56953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56953):map__56953);
var top_data = map__56953__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56958 = phase;
var G__56958__$1 = (((G__56958 instanceof cljs.core.Keyword))?G__56958.fqn:null);
switch (G__56958__$1) {
case "read-source":
var map__56959 = data;
var map__56959__$1 = (((((!((map__56959 == null))))?(((((map__56959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56959):map__56959);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56961 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56961__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56961);
var G__56961__$2 = (cljs.core.truth_((function (){var fexpr__56962 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56962.cljs$core$IFn$_invoke$arity$1 ? fexpr__56962.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56962.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56961__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56961__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56961__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56963 = top_data;
var G__56963__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56963,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56963);
var G__56963__$2 = (cljs.core.truth_((function (){var fexpr__56964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56964.cljs$core$IFn$_invoke$arity$1 ? fexpr__56964.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56964.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56963__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56963__$1);
var G__56963__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56963__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56963__$2);
var G__56963__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56963__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56963__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56963__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56963__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56965 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56965,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56965,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56965,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56965,(3),null);
var G__56968 = top_data;
var G__56968__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56968);
var G__56968__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56968__$1);
var G__56968__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56968__$2);
var G__56968__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56968__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56968__$4;
}

break;
case "execution":
var vec__56969 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56949_SHARP_){
var or__4126__auto__ = (p1__56949_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56973 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56973.cljs$core$IFn$_invoke$arity$1 ? fexpr__56973.cljs$core$IFn$_invoke$arity$1(p1__56949_SHARP_) : fexpr__56973.call(null,p1__56949_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56975 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56975__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56975,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56975);
var G__56975__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56975__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56975__$1);
var G__56975__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56975__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56975__$2);
var G__56975__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56975__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56975__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56975__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56975__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56958__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56981){
var map__56983 = p__56981;
var map__56983__$1 = (((((!((map__56983 == null))))?(((((map__56983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56983):map__56983);
var triage_data = map__56983__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56983__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56983__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56983__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56983__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56983__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56983__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56983__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56983__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__56985 = phase;
var G__56985__$1 = (((G__56985 instanceof cljs.core.Keyword))?G__56985.fqn:null);
switch (G__56985__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56986 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56987 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56988 = loc;
var G__56989 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56990_57160 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56991_57161 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56992_57162 = true;
var _STAR_print_fn_STAR__temp_val__56993_57163 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56992_57162);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56993_57163);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56976_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56976_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56991_57161);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56990_57160);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56986,G__56987,G__56988,G__56989) : format.call(null,G__56986,G__56987,G__56988,G__56989));

break;
case "macroexpansion":
var G__56994 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56995 = cause_type;
var G__56996 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56997 = loc;
var G__56998 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56994,G__56995,G__56996,G__56997,G__56998) : format.call(null,G__56994,G__56995,G__56996,G__56997,G__56998));

break;
case "compile-syntax-check":
var G__57000 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57001 = cause_type;
var G__57002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57003 = loc;
var G__57004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57000,G__57001,G__57002,G__57003,G__57004) : format.call(null,G__57000,G__57001,G__57002,G__57003,G__57004));

break;
case "compilation":
var G__57005 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57006 = cause_type;
var G__57007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57008 = loc;
var G__57009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57005,G__57006,G__57007,G__57008,G__57009) : format.call(null,G__57005,G__57006,G__57007,G__57008,G__57009));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57010 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57011 = symbol;
var G__57012 = loc;
var G__57013 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57014_57181 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57015_57182 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57016_57183 = true;
var _STAR_print_fn_STAR__temp_val__57017_57184 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57016_57183);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57017_57184);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56979_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56979_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57015_57182);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57014_57181);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57010,G__57011,G__57012,G__57013) : format.call(null,G__57010,G__57011,G__57012,G__57013));
} else {
var G__57018 = "Execution error%s at %s(%s).\n%s\n";
var G__57019 = cause_type;
var G__57020 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57021 = loc;
var G__57022 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57018,G__57019,G__57020,G__57021,G__57022) : format.call(null,G__57018,G__57019,G__57020,G__57021,G__57022));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56985__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
