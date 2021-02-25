goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__62655 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62656 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62656);

try{var G__62657 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__62657);

return G__62657;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62655);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__62659 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62660 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62660);

try{var G__62661 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__62661);

return G__62661;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62659);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__62662 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62663 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62663);

try{var G__62664 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__62664);

return G__62664;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62662);
}})();
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62687 = arguments.length;
var i__4737__auto___62688 = (0);
while(true){
if((i__4737__auto___62688 < len__4736__auto___62687)){
args__4742__auto__.push((arguments[i__4737__auto___62688]));

var G__62689 = (i__4737__auto___62688 + (1));
i__4737__auto___62688 = G__62689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62668 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__62669 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62669);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62668);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq62666){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62666));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62693 = arguments.length;
var i__4737__auto___62694 = (0);
while(true){
if((i__4737__auto___62694 < len__4736__auto___62693)){
args__4742__auto__.push((arguments[i__4737__auto___62694]));

var G__62695 = (i__4737__auto___62694 + (1));
i__4737__auto___62694 = G__62695;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62674 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__62675 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62675);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62674);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq62672){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62672));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62696 = arguments.length;
var i__4737__auto___62697 = (0);
while(true){
if((i__4737__auto___62697 < len__4736__auto___62696)){
args__4742__auto__.push((arguments[i__4737__auto___62697]));

var G__62698 = (i__4737__auto___62697 + (1));
i__4737__auto___62697 = G__62698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62677 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__62678 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62678);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62677);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq62676){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62676));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62709 = arguments.length;
var i__4737__auto___62710 = (0);
while(true){
if((i__4737__auto___62710 < len__4736__auto___62709)){
args__4742__auto__.push((arguments[i__4737__auto___62710]));

var G__62711 = (i__4737__auto___62710 + (1));
i__4737__auto___62710 = G__62711;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62680 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__62681 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62681);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62680);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq62679){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62679));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62712 = arguments.length;
var i__4737__auto___62713 = (0);
while(true){
if((i__4737__auto___62713 < len__4736__auto___62712)){
args__4742__auto__.push((arguments[i__4737__auto___62713]));

var G__62714 = (i__4737__auto___62713 + (1));
i__4737__auto___62713 = G__62714;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__62682__auto__","s__62682__auto__",1651833750,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__62682__auto__","s__62682__auto__",1651833750,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__62682__auto__","s__62682__auto__",1651833750,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq62683){
var G__62684 = cljs.core.first(seq62683);
var seq62683__$1 = cljs.core.next(seq62683);
var G__62685 = cljs.core.first(seq62683__$1);
var seq62683__$2 = cljs.core.next(seq62683__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62684,G__62685,seq62683__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
