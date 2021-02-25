goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32443 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32444 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32444);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___32518 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___32518)){
var new_db_32519 = temp__5735__auto___32518;
var fexpr__32447_32520 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32447_32520.cljs$core$IFn$_invoke$arity$1 ? fexpr__32447_32520.cljs$core$IFn$_invoke$arity$1(new_db_32519) : fexpr__32447_32520.call(null,new_db_32519));
} else {
}

var seq__32448 = cljs.core.seq(effects_without_db);
var chunk__32449 = null;
var count__32450 = (0);
var i__32451 = (0);
while(true){
if((i__32451 < count__32450)){
var vec__32458 = chunk__32449.cljs$core$IIndexed$_nth$arity$2(null,i__32451);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458,(1),null);
var temp__5733__auto___32525 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32525)){
var effect_fn_32526 = temp__5733__auto___32525;
(effect_fn_32526.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32526.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32526.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32527 = seq__32448;
var G__32528 = chunk__32449;
var G__32529 = count__32450;
var G__32530 = (i__32451 + (1));
seq__32448 = G__32527;
chunk__32449 = G__32528;
count__32450 = G__32529;
i__32451 = G__32530;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32448);
if(temp__5735__auto__){
var seq__32448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32448__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32448__$1);
var G__32534 = cljs.core.chunk_rest(seq__32448__$1);
var G__32535 = c__4556__auto__;
var G__32536 = cljs.core.count(c__4556__auto__);
var G__32537 = (0);
seq__32448 = G__32534;
chunk__32449 = G__32535;
count__32450 = G__32536;
i__32451 = G__32537;
continue;
} else {
var vec__32462 = cljs.core.first(seq__32448__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32462,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32462,(1),null);
var temp__5733__auto___32538 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32538)){
var effect_fn_32542 = temp__5733__auto___32538;
(effect_fn_32542.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32542.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32542.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32543 = cljs.core.next(seq__32448__$1);
var G__32544 = null;
var G__32545 = (0);
var G__32546 = (0);
seq__32448 = G__32543;
chunk__32449 = G__32544;
count__32450 = G__32545;
i__32451 = G__32546;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__32149__auto___32547 = re_frame.interop.now();
var duration__32150__auto___32548 = (end__32149__auto___32547 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32150__auto___32548,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__32149__auto___32547);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32443);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___32553 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___32553)){
var new_db_32554 = temp__5735__auto___32553;
var fexpr__32465_32555 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32465_32555.cljs$core$IFn$_invoke$arity$1 ? fexpr__32465_32555.cljs$core$IFn$_invoke$arity$1(new_db_32554) : fexpr__32465_32555.call(null,new_db_32554));
} else {
}

var seq__32466 = cljs.core.seq(effects_without_db);
var chunk__32467 = null;
var count__32468 = (0);
var i__32469 = (0);
while(true){
if((i__32469 < count__32468)){
var vec__32476 = chunk__32467.cljs$core$IIndexed$_nth$arity$2(null,i__32469);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(1),null);
var temp__5733__auto___32556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32556)){
var effect_fn_32560 = temp__5733__auto___32556;
(effect_fn_32560.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32560.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32560.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32561 = seq__32466;
var G__32562 = chunk__32467;
var G__32563 = count__32468;
var G__32564 = (i__32469 + (1));
seq__32466 = G__32561;
chunk__32467 = G__32562;
count__32468 = G__32563;
i__32469 = G__32564;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32466);
if(temp__5735__auto__){
var seq__32466__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32466__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32466__$1);
var G__32568 = cljs.core.chunk_rest(seq__32466__$1);
var G__32569 = c__4556__auto__;
var G__32570 = cljs.core.count(c__4556__auto__);
var G__32571 = (0);
seq__32466 = G__32568;
chunk__32467 = G__32569;
count__32468 = G__32570;
i__32469 = G__32571;
continue;
} else {
var vec__32479 = cljs.core.first(seq__32466__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32479,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32479,(1),null);
var temp__5733__auto___32572 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32572)){
var effect_fn_32573 = temp__5733__auto___32572;
(effect_fn_32573.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32573.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32573.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32574 = cljs.core.next(seq__32466__$1);
var G__32575 = null;
var G__32576 = (0);
var G__32577 = (0);
seq__32466 = G__32574;
chunk__32467 = G__32575;
count__32468 = G__32576;
i__32469 = G__32577;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__32482 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32483 = null;
var count__32484 = (0);
var i__32485 = (0);
while(true){
if((i__32485 < count__32484)){
var map__32490 = chunk__32483.cljs$core$IIndexed$_nth$arity$2(null,i__32485);
var map__32490__$1 = (((((!((map__32490 == null))))?(((((map__32490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32490):map__32490);
var effect = map__32490__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32490__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32490__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__32482,chunk__32483,count__32484,i__32485,map__32490,map__32490__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__32482,chunk__32483,count__32484,i__32485,map__32490,map__32490__$1,effect,ms,dispatch))
,ms);
}


var G__32578 = seq__32482;
var G__32579 = chunk__32483;
var G__32580 = count__32484;
var G__32581 = (i__32485 + (1));
seq__32482 = G__32578;
chunk__32483 = G__32579;
count__32484 = G__32580;
i__32485 = G__32581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32482);
if(temp__5735__auto__){
var seq__32482__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32482__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32482__$1);
var G__32583 = cljs.core.chunk_rest(seq__32482__$1);
var G__32584 = c__4556__auto__;
var G__32585 = cljs.core.count(c__4556__auto__);
var G__32586 = (0);
seq__32482 = G__32583;
chunk__32483 = G__32584;
count__32484 = G__32585;
i__32485 = G__32586;
continue;
} else {
var map__32492 = cljs.core.first(seq__32482__$1);
var map__32492__$1 = (((((!((map__32492 == null))))?(((((map__32492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32492):map__32492);
var effect = map__32492__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32492__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32492__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__32482,chunk__32483,count__32484,i__32485,map__32492,map__32492__$1,effect,ms,dispatch,seq__32482__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__32482,chunk__32483,count__32484,i__32485,map__32492,map__32492__$1,effect,ms,dispatch,seq__32482__$1,temp__5735__auto__))
,ms);
}


var G__32587 = cljs.core.next(seq__32482__$1);
var G__32588 = null;
var G__32589 = (0);
var G__32590 = (0);
seq__32482 = G__32587;
chunk__32483 = G__32588;
count__32484 = G__32589;
i__32485 = G__32590;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32494 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32495 = null;
var count__32496 = (0);
var i__32497 = (0);
while(true){
if((i__32497 < count__32496)){
var vec__32504 = chunk__32495.cljs$core$IIndexed$_nth$arity$2(null,i__32497);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___32591 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32591)){
var effect_fn_32593 = temp__5733__auto___32591;
(effect_fn_32593.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32593.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32593.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32594 = seq__32494;
var G__32595 = chunk__32495;
var G__32596 = count__32496;
var G__32597 = (i__32497 + (1));
seq__32494 = G__32594;
chunk__32495 = G__32595;
count__32496 = G__32596;
i__32497 = G__32597;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32494);
if(temp__5735__auto__){
var seq__32494__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32494__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32494__$1);
var G__32598 = cljs.core.chunk_rest(seq__32494__$1);
var G__32599 = c__4556__auto__;
var G__32600 = cljs.core.count(c__4556__auto__);
var G__32601 = (0);
seq__32494 = G__32598;
chunk__32495 = G__32599;
count__32496 = G__32600;
i__32497 = G__32601;
continue;
} else {
var vec__32507 = cljs.core.first(seq__32494__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___32602 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32602)){
var effect_fn_32603 = temp__5733__auto___32602;
(effect_fn_32603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32603.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32604 = cljs.core.next(seq__32494__$1);
var G__32605 = null;
var G__32606 = (0);
var G__32607 = (0);
seq__32494 = G__32604;
chunk__32495 = G__32605;
count__32496 = G__32606;
i__32497 = G__32607;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32510 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32511 = null;
var count__32512 = (0);
var i__32513 = (0);
while(true){
if((i__32513 < count__32512)){
var event = chunk__32511.cljs$core$IIndexed$_nth$arity$2(null,i__32513);
re_frame.router.dispatch(event);


var G__32608 = seq__32510;
var G__32609 = chunk__32511;
var G__32610 = count__32512;
var G__32611 = (i__32513 + (1));
seq__32510 = G__32608;
chunk__32511 = G__32609;
count__32512 = G__32610;
i__32513 = G__32611;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32510);
if(temp__5735__auto__){
var seq__32510__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32510__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32510__$1);
var G__32612 = cljs.core.chunk_rest(seq__32510__$1);
var G__32613 = c__4556__auto__;
var G__32614 = cljs.core.count(c__4556__auto__);
var G__32615 = (0);
seq__32510 = G__32612;
chunk__32511 = G__32613;
count__32512 = G__32614;
i__32513 = G__32615;
continue;
} else {
var event = cljs.core.first(seq__32510__$1);
re_frame.router.dispatch(event);


var G__32616 = cljs.core.next(seq__32510__$1);
var G__32617 = null;
var G__32618 = (0);
var G__32619 = (0);
seq__32510 = G__32616;
chunk__32511 = G__32617;
count__32512 = G__32618;
i__32513 = G__32619;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32514 = cljs.core.seq(value);
var chunk__32515 = null;
var count__32516 = (0);
var i__32517 = (0);
while(true){
if((i__32517 < count__32516)){
var event = chunk__32515.cljs$core$IIndexed$_nth$arity$2(null,i__32517);
clear_event(event);


var G__32620 = seq__32514;
var G__32621 = chunk__32515;
var G__32622 = count__32516;
var G__32623 = (i__32517 + (1));
seq__32514 = G__32620;
chunk__32515 = G__32621;
count__32516 = G__32622;
i__32517 = G__32623;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32514);
if(temp__5735__auto__){
var seq__32514__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32514__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32514__$1);
var G__32624 = cljs.core.chunk_rest(seq__32514__$1);
var G__32625 = c__4556__auto__;
var G__32626 = cljs.core.count(c__4556__auto__);
var G__32627 = (0);
seq__32514 = G__32624;
chunk__32515 = G__32625;
count__32516 = G__32626;
i__32517 = G__32627;
continue;
} else {
var event = cljs.core.first(seq__32514__$1);
clear_event(event);


var G__32628 = cljs.core.next(seq__32514__$1);
var G__32629 = null;
var G__32630 = (0);
var G__32631 = (0);
seq__32514 = G__32628;
chunk__32515 = G__32629;
count__32516 = G__32630;
i__32517 = G__32631;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
