goog.provide('instaparse.combinators_source');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"epsilon","epsilon",-730158570)], null);
/**
 * Optional, i.e., parser?
 */
instaparse.combinators_source.opt = (function instaparse$combinators_source$opt(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * One or more, i.e., parser+
 */
instaparse.combinators_source.plus = (function instaparse$combinators_source$plus(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * Zero or more, i.e., parser*
 */
instaparse.combinators_source.star = (function instaparse$combinators_source$star(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * Between m and n repetitions
 */
instaparse.combinators_source.rep = (function instaparse$combinators_source$rep(m,n,parser){
if((m <= n)){
} else {
throw (new Error("Assert failed: (<= m n)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"min","min",444991522),m,new cljs.core.Keyword(null,"max","max",61366548),n], null);
}
});
/**
 * Alternation, i.e., parser1 | parser2 | parser3 | ...
 */
instaparse.combinators_source.alt = (function instaparse$combinators_source$alt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46782 = arguments.length;
var i__4737__auto___46783 = (0);
while(true){
if((i__4737__auto___46783 < len__4736__auto___46782)){
args__4742__auto__.push((arguments[i__4737__auto___46783]));

var G__46786 = (i__4737__auto___46783 + (1));
i__4737__auto___46783 = G__46786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
if(instaparse.reduction.singleton_QMARK_(parsers)){
return cljs.core.first(parsers);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers], null);

}
}
}));

(instaparse.combinators_source.alt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.combinators_source.alt.cljs$lang$applyTo = (function (seq46725){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46725));
}));

instaparse.combinators_source.ord2 = (function instaparse$combinators_source$ord2(parser1,parser2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),parser1,new cljs.core.Keyword(null,"parser2","parser2",1013754688),parser2], null);
});
/**
 * Ordered choice, i.e., parser1 / parser2
 */
instaparse.combinators_source.ord = (function instaparse$combinators_source$ord(var_args){
var G__46729 = arguments.length;
switch (G__46729) {
case 0:
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___46794 = arguments.length;
var i__4737__auto___46795 = (0);
while(true){
if((i__4737__auto___46795 < len__4736__auto___46794)){
args_arr__4757__auto__.push((arguments[i__4737__auto___46795]));

var G__46796 = (i__4737__auto___46795 + (1));
i__4737__auto___46795 = G__46796;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0 = (function (){
return instaparse.combinators_source.Epsilon;
}));

(instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic = (function (parser1,parsers){
var parsers__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser1,instaparse.combinators_source.Epsilon))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers):parsers);
if(cljs.core.seq(parsers__$1)){
return instaparse.combinators_source.ord2(parser1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,parsers__$1));
} else {
return parser1;
}
}));

/** @this {Function} */
(instaparse.combinators_source.ord.cljs$lang$applyTo = (function (seq46727){
var G__46728 = cljs.core.first(seq46727);
var seq46727__$1 = cljs.core.next(seq46727);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46728,seq46727__$1);
}));

(instaparse.combinators_source.ord.cljs$lang$maxFixedArity = (1));

/**
 * Concatenation, i.e., parser1 parser2 ...
 */
instaparse.combinators_source.cat = (function instaparse$combinators_source$cat(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46797 = arguments.length;
var i__4737__auto___46798 = (0);
while(true){
if((i__4737__auto___46798 < len__4736__auto___46797)){
args__4742__auto__.push((arguments[i__4737__auto___46798]));

var G__46799 = (i__4737__auto___46798 + (1));
i__4737__auto___46798 = G__46799;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
var parsers__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers);
if(instaparse.reduction.singleton_QMARK_(parsers__$1)){
return cljs.core.first(parsers__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers__$1], null);
}
}
}));

(instaparse.combinators_source.cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.combinators_source.cat.cljs$lang$applyTo = (function (seq46730){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46730));
}));

/**
 * Create a string terminal out of s
 */
instaparse.combinators_source.string = (function instaparse$combinators_source$string(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
 * Create a case-insensitive string terminal out of s
 */
instaparse.combinators_source.string_ci = (function instaparse$combinators_source$string_ci(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string-ci","string-ci",374631805),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
 * Matches a Unicode code point or a range of code points
 */
instaparse.combinators_source.unicode_char = (function instaparse$combinators_source$unicode_char(var_args){
var G__46732 = arguments.length;
switch (G__46732) {
case 1:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1 = (function (code_point){
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(code_point,code_point);
}));

(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2 = (function (lo,hi){
if((lo <= hi)){
} else {
throw (new Error(["Assert failed: ","Character range minimum must be less than or equal the maximum","\n","(<= lo hi)"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null);
}));

(instaparse.combinators_source.unicode_char.cljs$lang$maxFixedArity = 2);

/**
 * JavaScript regexes have no .lookingAt method, so in cljs we just
 *   add a '^' character to the front of the regex.
 */
instaparse.combinators_source.add_beginning_constraint = (function instaparse$combinators_source$add_beginning_constraint(r){
if(cljs.core.regexp_QMARK_(r)){
return (new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r.source)].join(''),instaparse.util.regexp_flags(r)));
} else {
return r;
}
});
/**
 * Create a regexp terminal out of regular expression r
 */
instaparse.combinators_source.regexp = (function instaparse$combinators_source$regexp(r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"regexp","regexp",-541372782),instaparse.combinators_source.add_beginning_constraint(cljs.core.re_pattern(r))], null);
}
});
/**
 * Refers to a non-terminal defined by the grammar map
 */
instaparse.combinators_source.nt = (function instaparse$combinators_source$nt(s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),s], null);
});
/**
 * Lookahead, i.e., &parser
 */
instaparse.combinators_source.look = (function instaparse$combinators_source$look(parser){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
 * Negative lookahead, i.e., !parser
 */
instaparse.combinators_source.neg = (function instaparse$combinators_source$neg(parser){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
 * Hide the result of parser, i.e., <parser>
 */
instaparse.combinators_source.hide = (function instaparse$combinators_source$hide(parser){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"hide","hide",-596913169),true);
});
/**
 * Hide the tag associated with this rule.  
 *   Wrap this combinator around the entire right-hand side.
 */
instaparse.combinators_source.hide_tag = (function instaparse$combinators_source$hide_tag(parser){
return instaparse.reduction.red(parser,instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Tests whether parser was created with hide-tag combinator
 */
instaparse.combinators_source.hidden_tag_QMARK_ = (function instaparse$combinators_source$hidden_tag_QMARK_(parser){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Recursively undoes the effect of hide on one parser
 */
instaparse.combinators_source.unhide_content = (function instaparse$combinators_source$unhide_content(parser){
var parser__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.Keyword(null,"hide","hide",-596913169)):parser);
if(cljs.core.truth_(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){var G__46733 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__46733) : instaparse.combinators_source.unhide_content.call(null,G__46733));
})());
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.unhide_content,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser__$1),new cljs.core.Keyword(null,"ord","ord",1142548323))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser__$1,new cljs.core.Keyword(null,"parser1","parser1",-439601422),(function (){var G__46734 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__46734) : instaparse.combinators_source.unhide_content.call(null,G__46734));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parser2","parser2",1013754688),(function (){var G__46735 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__46735) : instaparse.combinators_source.unhide_content.call(null,G__46735));
})()], 0));
} else {
return parser__$1;

}
}
}
});
/**
 * Recursively undoes the effect of hide on all parsers in the grammar
 */
instaparse.combinators_source.unhide_all_content = (function instaparse$combinators_source$unhide_all_content(grammar){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function instaparse$combinators_source$unhide_all_content_$_iter__46736(s__46737){
return (new cljs.core.LazySeq(null,(function (){
var s__46737__$1 = s__46737;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46737__$1);
if(temp__5735__auto__){
var s__46737__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46737__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46737__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46739 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46738 = (0);
while(true){
if((i__46738 < size__4528__auto__)){
var vec__46740 = cljs.core._nth(c__4527__auto__,i__46738);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46740,(1),null);
cljs.core.chunk_append(b__46739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null));

var G__46838 = (i__46738 + (1));
i__46738 = G__46838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46739),instaparse$combinators_source$unhide_all_content_$_iter__46736(cljs.core.chunk_rest(s__46737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46739),null);
}
} else {
var vec__46743 = cljs.core.first(s__46737__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46743,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null),instaparse$combinators_source$unhide_all_content_$_iter__46736(cljs.core.rest(s__46737__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(grammar);
})());
});
/**
 * Recursively undoes the effect of hide-tag
 */
instaparse.combinators_source.unhide_tags = (function instaparse$combinators_source$unhide_tags(reduction_type,grammar){
var temp__5733__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__5733__auto__)){
var reduction = temp__5733__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function instaparse$combinators_source$unhide_tags_$_iter__46746(s__46747){
return (new cljs.core.LazySeq(null,(function (){
var s__46747__$1 = s__46747;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46747__$1);
if(temp__5735__auto__){
var s__46747__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46747__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46747__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46749 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46748 = (0);
while(true){
if((i__46748 < size__4528__auto__)){
var vec__46750 = cljs.core._nth(c__4527__auto__,i__46748);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46750,(1),null);
cljs.core.chunk_append(b__46749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__46853 = (i__46748 + (1));
i__46748 = G__46853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46749),instaparse$combinators_source$unhide_tags_$_iter__46746(cljs.core.chunk_rest(s__46747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46749),null);
}
} else {
var vec__46753 = cljs.core.first(s__46747__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46753,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_tags_$_iter__46746(cljs.core.rest(s__46747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
});
/**
 * Recursively undoes the effect of both hide and hide-tag
 */
instaparse.combinators_source.unhide_all = (function instaparse$combinators_source$unhide_all(reduction_type,grammar){
var temp__5733__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__5733__auto__)){
var reduction = temp__5733__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function instaparse$combinators_source$unhide_all_$_iter__46756(s__46757){
return (new cljs.core.LazySeq(null,(function (){
var s__46757__$1 = s__46757;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46757__$1);
if(temp__5735__auto__){
var s__46757__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46757__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46757__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46759 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46758 = (0);
while(true){
if((i__46758 < size__4528__auto__)){
var vec__46760 = cljs.core._nth(c__4527__auto__,i__46758);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46760,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46760,(1),null);
cljs.core.chunk_append(b__46759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__46864 = (i__46758 + (1));
i__46758 = G__46864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46759),instaparse$combinators_source$unhide_all_$_iter__46756(cljs.core.chunk_rest(s__46757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46759),null);
}
} else {
var vec__46763 = cljs.core.first(s__46757__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46763,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_all_$_iter__46756(cljs.core.rest(s__46757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
});
instaparse.combinators_source.auto_whitespace_parser = (function instaparse$combinators_source$auto_whitespace_parser(parser,ws_parser){
var G__46767 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__46767__$1 = (((G__46767 instanceof cljs.core.Keyword))?G__46767.fqn:null);
switch (G__46767__$1) {
case "nt":
case "epsilon":
return parser;

break;
case "opt":
case "plus":
case "star":
case "rep":
case "look":
case "neg":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),instaparse.combinators_source.auto_whitespace_parser,ws_parser);

break;
case "alt":
case "cat":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46766_SHARP_){
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(p1__46766_SHARP_,ws_parser) : instaparse.combinators_source.auto_whitespace_parser.call(null,p1__46766_SHARP_,ws_parser));
}),new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser,new cljs.core.Keyword(null,"parser1","parser1",-439601422),(function (){var G__46768 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser);
var G__46769 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__46768,G__46769) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__46768,G__46769));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parser2","parser2",1013754688),(function (){var G__46770 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser);
var G__46771 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__46770,G__46771) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__46770,G__46771));
})()], 0));

break;
case "string":
case "string-ci":
case "regexp":
if(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.Keyword(null,"red","red",-969428204))], 0)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,parser], 0));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46767__$1)].join('')));

}
});
instaparse.combinators_source.auto_whitespace = (function instaparse$combinators_source$auto_whitespace(grammar,start,grammar_ws,start_ws){
var ws_parser = instaparse.combinators_source.hide(instaparse.combinators_source.opt(instaparse.combinators_source.nt(start_ws)));
var grammar_ws__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grammar_ws,start_ws,instaparse.combinators_source.hide_tag((grammar_ws.cljs$core$IFn$_invoke$arity$1 ? grammar_ws.cljs$core$IFn$_invoke$arity$1(start_ws) : grammar_ws.call(null,start_ws))));
var modified_grammar = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function instaparse$combinators_source$auto_whitespace_$_iter__46772(s__46773){
return (new cljs.core.LazySeq(null,(function (){
var s__46773__$1 = s__46773;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46773__$1);
if(temp__5735__auto__){
var s__46773__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46773__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46773__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46775 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46774 = (0);
while(true){
if((i__46774 < size__4528__auto__)){
var vec__46776 = cljs.core._nth(c__4527__auto__,i__46774);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(1),null);
cljs.core.chunk_append(b__46775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null));

var G__46877 = (i__46774 + (1));
i__46774 = G__46877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46775),instaparse$combinators_source$auto_whitespace_$_iter__46772(cljs.core.chunk_rest(s__46773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46775),null);
}
} else {
var vec__46779 = cljs.core.first(s__46773__$2);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46779,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46779,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null),instaparse$combinators_source$auto_whitespace_$_iter__46772(cljs.core.rest(s__46773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(grammar);
})());
var final_grammar = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modified_grammar,start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)),new cljs.core.Keyword(null,"red","red",-969428204)),ws_parser], 0)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)))));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([final_grammar,grammar_ws__$1], 0));
});

//# sourceMappingURL=instaparse.combinators_source.js.map
