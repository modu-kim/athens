goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__27711 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__27712 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__27712);

try{try{var seq__27715 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27716 = null;
var count__27717 = (0);
var i__27718 = (0);
while(true){
if((i__27718 < count__27717)){
var vec__27725 = chunk__27716.cljs$core$IIndexed$_nth$arity$2(null,i__27718);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(1),null);
var temp__5733__auto___27771 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27771)){
var effect_fn_27772 = temp__5733__auto___27771;
(effect_fn_27772.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27772.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27772.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27773 = seq__27715;
var G__27774 = chunk__27716;
var G__27775 = count__27717;
var G__27776 = (i__27718 + (1));
seq__27715 = G__27773;
chunk__27716 = G__27774;
count__27717 = G__27775;
i__27718 = G__27776;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27715);
if(temp__5735__auto__){
var seq__27715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27715__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27715__$1);
var G__27779 = cljs.core.chunk_rest(seq__27715__$1);
var G__27780 = c__4556__auto__;
var G__27781 = cljs.core.count(c__4556__auto__);
var G__27782 = (0);
seq__27715 = G__27779;
chunk__27716 = G__27780;
count__27717 = G__27781;
i__27718 = G__27782;
continue;
} else {
var vec__27728 = cljs.core.first(seq__27715__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(1),null);
var temp__5733__auto___27783 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27783)){
var effect_fn_27784 = temp__5733__auto___27783;
(effect_fn_27784.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27784.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27784.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27785 = cljs.core.next(seq__27715__$1);
var G__27786 = null;
var G__27787 = (0);
var G__27788 = (0);
seq__27715 = G__27785;
chunk__27716 = G__27786;
count__27717 = G__27787;
i__27718 = G__27788;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27417__auto___27792 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__27418__auto___27793 = (end__27417__auto___27792 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27418__auto___27793,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__27417__auto___27792);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__27711);
}} else {
var seq__27732 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27733 = null;
var count__27734 = (0);
var i__27735 = (0);
while(true){
if((i__27735 < count__27734)){
var vec__27742 = chunk__27733.cljs$core$IIndexed$_nth$arity$2(null,i__27735);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27742,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27742,(1),null);
var temp__5733__auto___27795 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27795)){
var effect_fn_27796 = temp__5733__auto___27795;
(effect_fn_27796.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27796.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27796.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27797 = seq__27732;
var G__27798 = chunk__27733;
var G__27799 = count__27734;
var G__27800 = (i__27735 + (1));
seq__27732 = G__27797;
chunk__27733 = G__27798;
count__27734 = G__27799;
i__27735 = G__27800;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27732);
if(temp__5735__auto__){
var seq__27732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27732__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27732__$1);
var G__27801 = cljs.core.chunk_rest(seq__27732__$1);
var G__27802 = c__4556__auto__;
var G__27803 = cljs.core.count(c__4556__auto__);
var G__27804 = (0);
seq__27732 = G__27801;
chunk__27733 = G__27802;
count__27734 = G__27803;
i__27735 = G__27804;
continue;
} else {
var vec__27745 = cljs.core.first(seq__27732__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27745,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27745,(1),null);
var temp__5733__auto___27807 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27807)){
var effect_fn_27808 = temp__5733__auto___27807;
(effect_fn_27808.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27808.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27808.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27809 = cljs.core.next(seq__27732__$1);
var G__27810 = null;
var G__27811 = (0);
var G__27812 = (0);
seq__27732 = G__27809;
chunk__27733 = G__27810;
count__27734 = G__27811;
i__27735 = G__27812;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27748 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27749 = null;
var count__27750 = (0);
var i__27751 = (0);
while(true){
if((i__27751 < count__27750)){
var map__27756 = chunk__27749.cljs$core$IIndexed$_nth$arity$2(null,i__27751);
var map__27756__$1 = (((((!((map__27756 == null))))?(((((map__27756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27756):map__27756);
var effect = map__27756__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__27748,chunk__27749,count__27750,i__27751,map__27756,map__27756__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__27748,chunk__27749,count__27750,i__27751,map__27756,map__27756__$1,effect,ms,dispatch))
,ms);
}


var G__27817 = seq__27748;
var G__27818 = chunk__27749;
var G__27819 = count__27750;
var G__27820 = (i__27751 + (1));
seq__27748 = G__27817;
chunk__27749 = G__27818;
count__27750 = G__27819;
i__27751 = G__27820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27748);
if(temp__5735__auto__){
var seq__27748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27748__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27748__$1);
var G__27821 = cljs.core.chunk_rest(seq__27748__$1);
var G__27822 = c__4556__auto__;
var G__27823 = cljs.core.count(c__4556__auto__);
var G__27824 = (0);
seq__27748 = G__27821;
chunk__27749 = G__27822;
count__27750 = G__27823;
i__27751 = G__27824;
continue;
} else {
var map__27758 = cljs.core.first(seq__27748__$1);
var map__27758__$1 = (((((!((map__27758 == null))))?(((((map__27758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27758):map__27758);
var effect = map__27758__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27758__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27758__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__27748,chunk__27749,count__27750,i__27751,map__27758,map__27758__$1,effect,ms,dispatch,seq__27748__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__27748,chunk__27749,count__27750,i__27751,map__27758,map__27758__$1,effect,ms,dispatch,seq__27748__$1,temp__5735__auto__))
,ms);
}


var G__27827 = cljs.core.next(seq__27748__$1);
var G__27828 = null;
var G__27829 = (0);
var G__27830 = (0);
seq__27748 = G__27827;
chunk__27749 = G__27828;
count__27750 = G__27829;
i__27751 = G__27830;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__27760 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27761 = null;
var count__27762 = (0);
var i__27763 = (0);
while(true){
if((i__27763 < count__27762)){
var event = chunk__27761.cljs$core$IIndexed$_nth$arity$2(null,i__27763);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__27831 = seq__27760;
var G__27832 = chunk__27761;
var G__27833 = count__27762;
var G__27834 = (i__27763 + (1));
seq__27760 = G__27831;
chunk__27761 = G__27832;
count__27762 = G__27833;
i__27763 = G__27834;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27760);
if(temp__5735__auto__){
var seq__27760__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27760__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27760__$1);
var G__27835 = cljs.core.chunk_rest(seq__27760__$1);
var G__27836 = c__4556__auto__;
var G__27837 = cljs.core.count(c__4556__auto__);
var G__27838 = (0);
seq__27760 = G__27835;
chunk__27761 = G__27836;
count__27762 = G__27837;
i__27763 = G__27838;
continue;
} else {
var event = cljs.core.first(seq__27760__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__27840 = cljs.core.next(seq__27760__$1);
var G__27841 = null;
var G__27842 = (0);
var G__27843 = (0);
seq__27760 = G__27840;
chunk__27761 = G__27841;
count__27762 = G__27842;
i__27763 = G__27843;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27764 = cljs.core.seq(value);
var chunk__27765 = null;
var count__27766 = (0);
var i__27767 = (0);
while(true){
if((i__27767 < count__27766)){
var event = chunk__27765.cljs$core$IIndexed$_nth$arity$2(null,i__27767);
clear_event(event);


var G__27844 = seq__27764;
var G__27845 = chunk__27765;
var G__27846 = count__27766;
var G__27847 = (i__27767 + (1));
seq__27764 = G__27844;
chunk__27765 = G__27845;
count__27766 = G__27846;
i__27767 = G__27847;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27764);
if(temp__5735__auto__){
var seq__27764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27764__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27764__$1);
var G__27848 = cljs.core.chunk_rest(seq__27764__$1);
var G__27849 = c__4556__auto__;
var G__27850 = cljs.core.count(c__4556__auto__);
var G__27851 = (0);
seq__27764 = G__27848;
chunk__27765 = G__27849;
count__27766 = G__27850;
i__27767 = G__27851;
continue;
} else {
var event = cljs.core.first(seq__27764__$1);
clear_event(event);


var G__27852 = cljs.core.next(seq__27764__$1);
var G__27853 = null;
var G__27854 = (0);
var G__27855 = (0);
seq__27764 = G__27852;
chunk__27765 = G__27853;
count__27766 = G__27854;
i__27767 = G__27855;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
