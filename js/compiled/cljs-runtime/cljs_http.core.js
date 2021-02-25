goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__51964 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__51964.cljs$core$IFn$_invoke$arity$1 ? fexpr__51964.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__51964.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51965){
var vec__51966 = p__51965;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51966,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__51975 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__51975)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__51975)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__51975)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__51975)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__51975)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__51975)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51975)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__51976){
var map__51977 = p__51976;
var map__51977__$1 = (((((!((map__51977 == null))))?(((((map__51977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51977):map__51977);
var request = map__51977__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__51979 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__51979,default_headers);

cljs_http.core.apply_response_type_BANG_(G__51979,response_type);

G__51979.setTimeoutInterval(timeout);

G__51979.setWithCredentials(send_credentials);

return G__51979;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__51981){
var map__51982 = p__51981;
var map__51982__$1 = (((((!((map__51982 == null))))?(((((map__51982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51982):map__51982);
var request = map__51982__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__51987 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__51987) : cljs_http.core.error_kw.call(null,G__51987));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_52088 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__51998_52090 = xhr;
G__51998_52090.setProgressEventsEnabled(true);

G__51998_52090.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_52088,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__51998_52090.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_52088,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__50418__auto___52093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_52013){
var state_val_52014 = (state_52013[(1)]);
if((state_val_52014 === (1))){
var state_52013__$1 = state_52013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52013__$1,(2),cancel);
} else {
if((state_val_52014 === (2))){
var inst_52004 = (state_52013[(2)]);
var inst_52005 = xhr.isComplete();
var inst_52006 = cljs.core.not(inst_52005);
var state_52013__$1 = (function (){var statearr_52017 = state_52013;
(statearr_52017[(7)] = inst_52004);

return statearr_52017;
})();
if(inst_52006){
var statearr_52019_52096 = state_52013__$1;
(statearr_52019_52096[(1)] = (3));

} else {
var statearr_52021_52097 = state_52013__$1;
(statearr_52021_52097[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52014 === (3))){
var inst_52008 = xhr.abort();
var state_52013__$1 = state_52013;
var statearr_52023_52098 = state_52013__$1;
(statearr_52023_52098[(2)] = inst_52008);

(statearr_52023_52098[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52014 === (4))){
var state_52013__$1 = state_52013;
var statearr_52024_52100 = state_52013__$1;
(statearr_52024_52100[(2)] = null);

(statearr_52024_52100[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52014 === (5))){
var inst_52011 = (state_52013[(2)]);
var state_52013__$1 = state_52013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52013__$1,inst_52011);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__50383__auto__ = null;
var cljs_http$core$xhr_$_state_machine__50383__auto____0 = (function (){
var statearr_52025 = [null,null,null,null,null,null,null,null];
(statearr_52025[(0)] = cljs_http$core$xhr_$_state_machine__50383__auto__);

(statearr_52025[(1)] = (1));

return statearr_52025;
});
var cljs_http$core$xhr_$_state_machine__50383__auto____1 = (function (state_52013){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_52013);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e52026){var ex__50386__auto__ = e52026;
var statearr_52028_52104 = state_52013;
(statearr_52028_52104[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_52013[(4)]))){
var statearr_52029_52105 = state_52013;
(statearr_52029_52105[(1)] = cljs.core.first((state_52013[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52106 = state_52013;
state_52013 = G__52106;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__50383__auto__ = function(state_52013){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__50383__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__50383__auto____1.call(this,state_52013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__50383__auto____0;
cljs_http$core$xhr_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__50383__auto____1;
return cljs_http$core$xhr_$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_52030 = f__50419__auto__();
(statearr_52030[(6)] = c__50418__auto___52093);

return statearr_52030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__52033){
var map__52035 = p__52033;
var map__52035__$1 = (((((!((map__52035 == null))))?(((((map__52035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52035):map__52035);
var request = map__52035__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52035__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52035__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52035__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52035__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_52112 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_52112], null));

if(cljs.core.truth_(cancel)){
var c__50418__auto___52118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_52052){
var state_val_52053 = (state_52052[(1)]);
if((state_val_52053 === (1))){
var state_52052__$1 = state_52052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52052__$1,(2),cancel);
} else {
if((state_val_52053 === (2))){
var inst_52048 = (state_52052[(2)]);
var inst_52050 = jsonp.cancel(req_52112);
var state_52052__$1 = (function (){var statearr_52055 = state_52052;
(statearr_52055[(7)] = inst_52048);

return statearr_52055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52052__$1,inst_52050);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__50383__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__50383__auto____0 = (function (){
var statearr_52058 = [null,null,null,null,null,null,null,null];
(statearr_52058[(0)] = cljs_http$core$jsonp_$_state_machine__50383__auto__);

(statearr_52058[(1)] = (1));

return statearr_52058;
});
var cljs_http$core$jsonp_$_state_machine__50383__auto____1 = (function (state_52052){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_52052);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e52060){var ex__50386__auto__ = e52060;
var statearr_52061_52122 = state_52052;
(statearr_52061_52122[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_52052[(4)]))){
var statearr_52062_52124 = state_52052;
(statearr_52062_52124[(1)] = cljs.core.first((state_52052[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52125 = state_52052;
state_52052 = G__52125;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__50383__auto__ = function(state_52052){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__50383__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__50383__auto____1.call(this,state_52052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__50383__auto____0;
cljs_http$core$jsonp_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__50383__auto____1;
return cljs_http$core$jsonp_$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_52064 = f__50419__auto__();
(statearr_52064[(6)] = c__50418__auto___52118);

return statearr_52064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__52066){
var map__52067 = p__52066;
var map__52067__$1 = (((((!((map__52067 == null))))?(((((map__52067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52067):map__52067);
var request = map__52067__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52067__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
