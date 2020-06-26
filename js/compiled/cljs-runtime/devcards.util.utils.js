goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50442_50458 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50443_50459 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50444_50460 = true;
var _STAR_print_fn_STAR__temp_val__50445_50461 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50444_50460);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50445_50461);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50443_50459);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50442_50458);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}catch (e50436){if((e50436 instanceof Error)){
var e1 = e50436;
try{return obj.toString();
}catch (e50437){if((e50437 instanceof Error)){
var e2 = e50437;
return "<<Un-printable Type>>";
} else {
throw e50437;

}
}} else {
throw e50436;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__50447 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__50448 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__50448);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__50447);
}});

//# sourceMappingURL=devcards.util.utils.js.map