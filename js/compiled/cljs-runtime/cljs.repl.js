goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56889){
var map__56890 = p__56889;
var map__56890__$1 = (((((!((map__56890 == null))))?(((((map__56890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56890):map__56890);
var m = map__56890__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56890__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56892_57009 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56893_57010 = null;
var count__56894_57011 = (0);
var i__56895_57012 = (0);
while(true){
if((i__56895_57012 < count__56894_57011)){
var f_57013 = chunk__56893_57010.cljs$core$IIndexed$_nth$arity$2(null,i__56895_57012);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57013], 0));


var G__57014 = seq__56892_57009;
var G__57015 = chunk__56893_57010;
var G__57016 = count__56894_57011;
var G__57017 = (i__56895_57012 + (1));
seq__56892_57009 = G__57014;
chunk__56893_57010 = G__57015;
count__56894_57011 = G__57016;
i__56895_57012 = G__57017;
continue;
} else {
var temp__5735__auto___57018 = cljs.core.seq(seq__56892_57009);
if(temp__5735__auto___57018){
var seq__56892_57019__$1 = temp__5735__auto___57018;
if(cljs.core.chunked_seq_QMARK_(seq__56892_57019__$1)){
var c__4556__auto___57020 = cljs.core.chunk_first(seq__56892_57019__$1);
var G__57021 = cljs.core.chunk_rest(seq__56892_57019__$1);
var G__57022 = c__4556__auto___57020;
var G__57023 = cljs.core.count(c__4556__auto___57020);
var G__57024 = (0);
seq__56892_57009 = G__57021;
chunk__56893_57010 = G__57022;
count__56894_57011 = G__57023;
i__56895_57012 = G__57024;
continue;
} else {
var f_57025 = cljs.core.first(seq__56892_57019__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57025], 0));


var G__57026 = cljs.core.next(seq__56892_57019__$1);
var G__57027 = null;
var G__57028 = (0);
var G__57029 = (0);
seq__56892_57009 = G__57026;
chunk__56893_57010 = G__57027;
count__56894_57011 = G__57028;
i__56895_57012 = G__57029;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57030 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57030], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57030)))?cljs.core.second(arglists_57030):arglists_57030)], 0));
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
var seq__56896_57031 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56897_57032 = null;
var count__56898_57033 = (0);
var i__56899_57034 = (0);
while(true){
if((i__56899_57034 < count__56898_57033)){
var vec__56918_57035 = chunk__56897_57032.cljs$core$IIndexed$_nth$arity$2(null,i__56899_57034);
var name_57036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56918_57035,(0),null);
var map__56921_57037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56918_57035,(1),null);
var map__56921_57038__$1 = (((((!((map__56921_57037 == null))))?(((((map__56921_57037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56921_57037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56921_57037):map__56921_57037);
var doc_57039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921_57038__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921_57038__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57036], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57040], 0));

if(cljs.core.truth_(doc_57039)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57039], 0));
} else {
}


var G__57041 = seq__56896_57031;
var G__57042 = chunk__56897_57032;
var G__57043 = count__56898_57033;
var G__57044 = (i__56899_57034 + (1));
seq__56896_57031 = G__57041;
chunk__56897_57032 = G__57042;
count__56898_57033 = G__57043;
i__56899_57034 = G__57044;
continue;
} else {
var temp__5735__auto___57045 = cljs.core.seq(seq__56896_57031);
if(temp__5735__auto___57045){
var seq__56896_57046__$1 = temp__5735__auto___57045;
if(cljs.core.chunked_seq_QMARK_(seq__56896_57046__$1)){
var c__4556__auto___57047 = cljs.core.chunk_first(seq__56896_57046__$1);
var G__57048 = cljs.core.chunk_rest(seq__56896_57046__$1);
var G__57049 = c__4556__auto___57047;
var G__57050 = cljs.core.count(c__4556__auto___57047);
var G__57051 = (0);
seq__56896_57031 = G__57048;
chunk__56897_57032 = G__57049;
count__56898_57033 = G__57050;
i__56899_57034 = G__57051;
continue;
} else {
var vec__56923_57052 = cljs.core.first(seq__56896_57046__$1);
var name_57053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56923_57052,(0),null);
var map__56926_57054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56923_57052,(1),null);
var map__56926_57055__$1 = (((((!((map__56926_57054 == null))))?(((((map__56926_57054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56926_57054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56926_57054):map__56926_57054);
var doc_57056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56926_57055__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56926_57055__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57053], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57057], 0));

if(cljs.core.truth_(doc_57056)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57056], 0));
} else {
}


var G__57058 = cljs.core.next(seq__56896_57046__$1);
var G__57059 = null;
var G__57060 = (0);
var G__57061 = (0);
seq__56896_57031 = G__57058;
chunk__56897_57032 = G__57059;
count__56898_57033 = G__57060;
i__56899_57034 = G__57061;
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

var seq__56928 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56929 = null;
var count__56930 = (0);
var i__56931 = (0);
while(true){
if((i__56931 < count__56930)){
var role = chunk__56929.cljs$core$IIndexed$_nth$arity$2(null,i__56931);
var temp__5735__auto___57062__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57062__$1)){
var spec_57063 = temp__5735__auto___57062__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57063)], 0));
} else {
}


var G__57064 = seq__56928;
var G__57065 = chunk__56929;
var G__57066 = count__56930;
var G__57067 = (i__56931 + (1));
seq__56928 = G__57064;
chunk__56929 = G__57065;
count__56930 = G__57066;
i__56931 = G__57067;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56928);
if(temp__5735__auto____$1){
var seq__56928__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56928__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56928__$1);
var G__57068 = cljs.core.chunk_rest(seq__56928__$1);
var G__57069 = c__4556__auto__;
var G__57070 = cljs.core.count(c__4556__auto__);
var G__57071 = (0);
seq__56928 = G__57068;
chunk__56929 = G__57069;
count__56930 = G__57070;
i__56931 = G__57071;
continue;
} else {
var role = cljs.core.first(seq__56928__$1);
var temp__5735__auto___57072__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57072__$2)){
var spec_57073 = temp__5735__auto___57072__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57073)], 0));
} else {
}


var G__57074 = cljs.core.next(seq__56928__$1);
var G__57075 = null;
var G__57076 = (0);
var G__57077 = (0);
seq__56928 = G__57074;
chunk__56929 = G__57075;
count__56930 = G__57076;
i__56931 = G__57077;
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
var G__57078 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57079 = cljs.core.ex_cause(t);
via = G__57078;
t = G__57079;
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
var map__56934 = datafied_throwable;
var map__56934__$1 = (((((!((map__56934 == null))))?(((((map__56934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56934):map__56934);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56934__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56934__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56934__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56935 = cljs.core.last(via);
var map__56935__$1 = (((((!((map__56935 == null))))?(((((map__56935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56935):map__56935);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56935__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56935__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56935__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56936 = data;
var map__56936__$1 = (((((!((map__56936 == null))))?(((((map__56936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56936):map__56936);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56937 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56937__$1 = (((((!((map__56937 == null))))?(((((map__56937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56937):map__56937);
var top_data = map__56937__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56937__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56943 = phase;
var G__56943__$1 = (((G__56943 instanceof cljs.core.Keyword))?G__56943.fqn:null);
switch (G__56943__$1) {
case "read-source":
var map__56944 = data;
var map__56944__$1 = (((((!((map__56944 == null))))?(((((map__56944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56944):map__56944);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56946 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56946__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56946,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56946);
var G__56946__$2 = (cljs.core.truth_((function (){var fexpr__56947 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56947.cljs$core$IFn$_invoke$arity$1 ? fexpr__56947.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56947.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56946__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56946__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56946__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56946__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56948 = top_data;
var G__56948__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56948,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56948);
var G__56948__$2 = (cljs.core.truth_((function (){var fexpr__56949 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56949.cljs$core$IFn$_invoke$arity$1 ? fexpr__56949.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56949.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56948__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56948__$1);
var G__56948__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56948__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56948__$2);
var G__56948__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56948__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56948__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56948__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56948__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56951 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56951,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56951,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56951,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56951,(3),null);
var G__56954 = top_data;
var G__56954__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56954);
var G__56954__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56954__$1);
var G__56954__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56954__$2);
var G__56954__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56954__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56954__$4;
}

break;
case "execution":
var vec__56955 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56955,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56955,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56955,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56955,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56933_SHARP_){
var or__4126__auto__ = (p1__56933_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56959 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56959.cljs$core$IFn$_invoke$arity$1 ? fexpr__56959.cljs$core$IFn$_invoke$arity$1(p1__56933_SHARP_) : fexpr__56959.call(null,p1__56933_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56960 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56960__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56960);
var G__56960__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56960__$1);
var G__56960__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56960__$2);
var G__56960__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56960__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56960__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56943__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56967){
var map__56968 = p__56967;
var map__56968__$1 = (((((!((map__56968 == null))))?(((((map__56968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56968):map__56968);
var triage_data = map__56968__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__56970 = phase;
var G__56970__$1 = (((G__56970 instanceof cljs.core.Keyword))?G__56970.fqn:null);
switch (G__56970__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56971 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56972 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56973 = loc;
var G__56974 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56975_57082 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56976_57083 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56977_57084 = true;
var _STAR_print_fn_STAR__temp_val__56978_57085 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56977_57084);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56978_57085);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56963_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56963_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56976_57083);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56975_57082);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56971,G__56972,G__56973,G__56974) : format.call(null,G__56971,G__56972,G__56973,G__56974));

break;
case "macroexpansion":
var G__56979 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56980 = cause_type;
var G__56981 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56982 = loc;
var G__56983 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56979,G__56980,G__56981,G__56982,G__56983) : format.call(null,G__56979,G__56980,G__56981,G__56982,G__56983));

break;
case "compile-syntax-check":
var G__56984 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56985 = cause_type;
var G__56986 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56987 = loc;
var G__56988 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56984,G__56985,G__56986,G__56987,G__56988) : format.call(null,G__56984,G__56985,G__56986,G__56987,G__56988));

break;
case "compilation":
var G__56989 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56990 = cause_type;
var G__56991 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56992 = loc;
var G__56993 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56989,G__56990,G__56991,G__56992,G__56993) : format.call(null,G__56989,G__56990,G__56991,G__56992,G__56993));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56994 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56995 = symbol;
var G__56996 = loc;
var G__56997 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56998_57089 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56999_57090 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57000_57091 = true;
var _STAR_print_fn_STAR__temp_val__57001_57092 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57000_57091);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57001_57092);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56965_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56965_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56999_57090);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56998_57089);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56994,G__56995,G__56996,G__56997) : format.call(null,G__56994,G__56995,G__56996,G__56997));
} else {
var G__57002 = "Execution error%s at %s(%s).\n%s\n";
var G__57003 = cause_type;
var G__57004 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57005 = loc;
var G__57006 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57002,G__57003,G__57004,G__57005,G__57006) : format.call(null,G__57002,G__57003,G__57004,G__57005,G__57006));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56970__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
