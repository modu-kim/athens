goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__60945,match){
var map__60946 = p__60945;
var map__60946__$1 = (((((!((map__60946 == null))))?(((((map__60946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60946):map__60946);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60946__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60946__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60946__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__60948(s__60949){
return (new cljs.core.LazySeq(null,(function (){
var s__60949__$1 = s__60949;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60949__$1);
if(temp__5735__auto__){
var s__60949__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60949__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60949__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60951 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60950 = (0);
while(true){
if((i__60950 < size__4528__auto__)){
var vec__60952 = cljs.core._nth(c__4527__auto__,i__60950);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60952,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60952,(1),null);
cljs.core.chunk_append(b__60951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__60970 = (i__60950 + (1));
i__60950 = G__60970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60951),reitit$frontend$controllers$get_identity_$_iter__60948(cljs.core.chunk_rest(s__60949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60951),null);
}
} else {
var vec__60955 = cljs.core.first(s__60949__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60955,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60955,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__60948(cljs.core.rest(s__60949__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__60958 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60958) : f.call(null,G__60958));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__60959_60971 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__60960_60972 = null;
var count__60961_60973 = (0);
var i__60962_60974 = (0);
while(true){
if((i__60962_60974 < count__60961_60973)){
var controller_60975 = chunk__60960_60972.cljs$core$IIndexed$_nth$arity$2(null,i__60962_60974);
reitit.frontend.controllers.apply_controller(controller_60975,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60976 = seq__60959_60971;
var G__60977 = chunk__60960_60972;
var G__60978 = count__60961_60973;
var G__60979 = (i__60962_60974 + (1));
seq__60959_60971 = G__60976;
chunk__60960_60972 = G__60977;
count__60961_60973 = G__60978;
i__60962_60974 = G__60979;
continue;
} else {
var temp__5735__auto___60980 = cljs.core.seq(seq__60959_60971);
if(temp__5735__auto___60980){
var seq__60959_60981__$1 = temp__5735__auto___60980;
if(cljs.core.chunked_seq_QMARK_(seq__60959_60981__$1)){
var c__4556__auto___60982 = cljs.core.chunk_first(seq__60959_60981__$1);
var G__60983 = cljs.core.chunk_rest(seq__60959_60981__$1);
var G__60984 = c__4556__auto___60982;
var G__60985 = cljs.core.count(c__4556__auto___60982);
var G__60986 = (0);
seq__60959_60971 = G__60983;
chunk__60960_60972 = G__60984;
count__60961_60973 = G__60985;
i__60962_60974 = G__60986;
continue;
} else {
var controller_60987 = cljs.core.first(seq__60959_60981__$1);
reitit.frontend.controllers.apply_controller(controller_60987,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60988 = cljs.core.next(seq__60959_60981__$1);
var G__60989 = null;
var G__60990 = (0);
var G__60991 = (0);
seq__60959_60971 = G__60988;
chunk__60960_60972 = G__60989;
count__60961_60973 = G__60990;
i__60962_60974 = G__60991;
continue;
}
} else {
}
}
break;
}

var seq__60965_60992 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__60966_60993 = null;
var count__60967_60994 = (0);
var i__60968_60995 = (0);
while(true){
if((i__60968_60995 < count__60967_60994)){
var controller_60997 = chunk__60966_60993.cljs$core$IIndexed$_nth$arity$2(null,i__60968_60995);
reitit.frontend.controllers.apply_controller(controller_60997,new cljs.core.Keyword(null,"start","start",-355208981));


var G__60998 = seq__60965_60992;
var G__60999 = chunk__60966_60993;
var G__61000 = count__60967_60994;
var G__61001 = (i__60968_60995 + (1));
seq__60965_60992 = G__60998;
chunk__60966_60993 = G__60999;
count__60967_60994 = G__61000;
i__60968_60995 = G__61001;
continue;
} else {
var temp__5735__auto___61003 = cljs.core.seq(seq__60965_60992);
if(temp__5735__auto___61003){
var seq__60965_61004__$1 = temp__5735__auto___61003;
if(cljs.core.chunked_seq_QMARK_(seq__60965_61004__$1)){
var c__4556__auto___61006 = cljs.core.chunk_first(seq__60965_61004__$1);
var G__61007 = cljs.core.chunk_rest(seq__60965_61004__$1);
var G__61008 = c__4556__auto___61006;
var G__61009 = cljs.core.count(c__4556__auto___61006);
var G__61010 = (0);
seq__60965_60992 = G__61007;
chunk__60966_60993 = G__61008;
count__60967_60994 = G__61009;
i__60968_60995 = G__61010;
continue;
} else {
var controller_61011 = cljs.core.first(seq__60965_61004__$1);
reitit.frontend.controllers.apply_controller(controller_61011,new cljs.core.Keyword(null,"start","start",-355208981));


var G__61012 = cljs.core.next(seq__60965_61004__$1);
var G__61013 = null;
var G__61014 = (0);
var G__61015 = (0);
seq__60965_60992 = G__61012;
chunk__60966_60993 = G__61013;
count__60967_60994 = G__61014;
i__60968_60995 = G__61015;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
