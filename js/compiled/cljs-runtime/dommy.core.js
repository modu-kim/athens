goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__54511 = arguments.length;
switch (G__54511) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__54521 = arguments.length;
switch (G__54521) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__54525 = arguments.length;
switch (G__54525) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__54522_SHARP_){
return (!((p1__54522_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54887 = arguments.length;
var i__4737__auto___54888 = (0);
while(true){
if((i__4737__auto___54888 < len__4736__auto___54887)){
args__4742__auto__.push((arguments[i__4737__auto___54888]));

var G__54889 = (i__4737__auto___54888 + (1));
i__4737__auto___54888 = G__54889;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__54531_54890 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54532_54891 = null;
var count__54533_54892 = (0);
var i__54534_54893 = (0);
while(true){
if((i__54534_54893 < count__54533_54892)){
var vec__54541_54894 = chunk__54532_54891.cljs$core$IIndexed$_nth$arity$2(null,i__54534_54893);
var k_54895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54541_54894,(0),null);
var v_54896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54541_54894,(1),null);
style.setProperty(dommy.utils.as_str(k_54895),v_54896);


var G__54897 = seq__54531_54890;
var G__54898 = chunk__54532_54891;
var G__54899 = count__54533_54892;
var G__54900 = (i__54534_54893 + (1));
seq__54531_54890 = G__54897;
chunk__54532_54891 = G__54898;
count__54533_54892 = G__54899;
i__54534_54893 = G__54900;
continue;
} else {
var temp__5735__auto___54905 = cljs.core.seq(seq__54531_54890);
if(temp__5735__auto___54905){
var seq__54531_54906__$1 = temp__5735__auto___54905;
if(cljs.core.chunked_seq_QMARK_(seq__54531_54906__$1)){
var c__4556__auto___54907 = cljs.core.chunk_first(seq__54531_54906__$1);
var G__54908 = cljs.core.chunk_rest(seq__54531_54906__$1);
var G__54909 = c__4556__auto___54907;
var G__54910 = cljs.core.count(c__4556__auto___54907);
var G__54911 = (0);
seq__54531_54890 = G__54908;
chunk__54532_54891 = G__54909;
count__54533_54892 = G__54910;
i__54534_54893 = G__54911;
continue;
} else {
var vec__54544_54912 = cljs.core.first(seq__54531_54906__$1);
var k_54913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544_54912,(0),null);
var v_54914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544_54912,(1),null);
style.setProperty(dommy.utils.as_str(k_54913),v_54914);


var G__54915 = cljs.core.next(seq__54531_54906__$1);
var G__54916 = null;
var G__54917 = (0);
var G__54918 = (0);
seq__54531_54890 = G__54915;
chunk__54532_54891 = G__54916;
count__54533_54892 = G__54917;
i__54534_54893 = G__54918;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq54529){
var G__54530 = cljs.core.first(seq54529);
var seq54529__$1 = cljs.core.next(seq54529);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54530,seq54529__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54919 = arguments.length;
var i__4737__auto___54920 = (0);
while(true){
if((i__4737__auto___54920 < len__4736__auto___54919)){
args__4742__auto__.push((arguments[i__4737__auto___54920]));

var G__54921 = (i__4737__auto___54920 + (1));
i__4737__auto___54920 = G__54921;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__54549_54922 = cljs.core.seq(keywords);
var chunk__54550_54923 = null;
var count__54551_54924 = (0);
var i__54552_54925 = (0);
while(true){
if((i__54552_54925 < count__54551_54924)){
var kw_54926 = chunk__54550_54923.cljs$core$IIndexed$_nth$arity$2(null,i__54552_54925);
style.removeProperty(dommy.utils.as_str(kw_54926));


var G__54927 = seq__54549_54922;
var G__54928 = chunk__54550_54923;
var G__54929 = count__54551_54924;
var G__54930 = (i__54552_54925 + (1));
seq__54549_54922 = G__54927;
chunk__54550_54923 = G__54928;
count__54551_54924 = G__54929;
i__54552_54925 = G__54930;
continue;
} else {
var temp__5735__auto___54931 = cljs.core.seq(seq__54549_54922);
if(temp__5735__auto___54931){
var seq__54549_54932__$1 = temp__5735__auto___54931;
if(cljs.core.chunked_seq_QMARK_(seq__54549_54932__$1)){
var c__4556__auto___54933 = cljs.core.chunk_first(seq__54549_54932__$1);
var G__54934 = cljs.core.chunk_rest(seq__54549_54932__$1);
var G__54935 = c__4556__auto___54933;
var G__54936 = cljs.core.count(c__4556__auto___54933);
var G__54937 = (0);
seq__54549_54922 = G__54934;
chunk__54550_54923 = G__54935;
count__54551_54924 = G__54936;
i__54552_54925 = G__54937;
continue;
} else {
var kw_54938 = cljs.core.first(seq__54549_54932__$1);
style.removeProperty(dommy.utils.as_str(kw_54938));


var G__54939 = cljs.core.next(seq__54549_54932__$1);
var G__54940 = null;
var G__54941 = (0);
var G__54942 = (0);
seq__54549_54922 = G__54939;
chunk__54550_54923 = G__54940;
count__54551_54924 = G__54941;
i__54552_54925 = G__54942;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq54547){
var G__54548 = cljs.core.first(seq54547);
var seq54547__$1 = cljs.core.next(seq54547);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54548,seq54547__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54943 = arguments.length;
var i__4737__auto___54944 = (0);
while(true){
if((i__4737__auto___54944 < len__4736__auto___54943)){
args__4742__auto__.push((arguments[i__4737__auto___54944]));

var G__54945 = (i__4737__auto___54944 + (1));
i__4737__auto___54944 = G__54945;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__54555_54946 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54556_54947 = null;
var count__54557_54948 = (0);
var i__54558_54949 = (0);
while(true){
if((i__54558_54949 < count__54557_54948)){
var vec__54565_54950 = chunk__54556_54947.cljs$core$IIndexed$_nth$arity$2(null,i__54558_54949);
var k_54951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565_54950,(0),null);
var v_54952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565_54950,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54951,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54952),"px"].join('')], 0));


var G__54953 = seq__54555_54946;
var G__54954 = chunk__54556_54947;
var G__54955 = count__54557_54948;
var G__54956 = (i__54558_54949 + (1));
seq__54555_54946 = G__54953;
chunk__54556_54947 = G__54954;
count__54557_54948 = G__54955;
i__54558_54949 = G__54956;
continue;
} else {
var temp__5735__auto___54957 = cljs.core.seq(seq__54555_54946);
if(temp__5735__auto___54957){
var seq__54555_54958__$1 = temp__5735__auto___54957;
if(cljs.core.chunked_seq_QMARK_(seq__54555_54958__$1)){
var c__4556__auto___54959 = cljs.core.chunk_first(seq__54555_54958__$1);
var G__54960 = cljs.core.chunk_rest(seq__54555_54958__$1);
var G__54961 = c__4556__auto___54959;
var G__54962 = cljs.core.count(c__4556__auto___54959);
var G__54963 = (0);
seq__54555_54946 = G__54960;
chunk__54556_54947 = G__54961;
count__54557_54948 = G__54962;
i__54558_54949 = G__54963;
continue;
} else {
var vec__54568_54964 = cljs.core.first(seq__54555_54958__$1);
var k_54965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54568_54964,(0),null);
var v_54966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54568_54964,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54965,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54966),"px"].join('')], 0));


var G__54967 = cljs.core.next(seq__54555_54958__$1);
var G__54968 = null;
var G__54969 = (0);
var G__54970 = (0);
seq__54555_54946 = G__54967;
chunk__54556_54947 = G__54968;
count__54557_54948 = G__54969;
i__54558_54949 = G__54970;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq54553){
var G__54554 = cljs.core.first(seq54553);
var seq54553__$1 = cljs.core.next(seq54553);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54554,seq54553__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__54576 = arguments.length;
switch (G__54576) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54972 = arguments.length;
var i__4737__auto___54973 = (0);
while(true){
if((i__4737__auto___54973 < len__4736__auto___54972)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54973]));

var G__54974 = (i__4737__auto___54973 + (1));
i__4737__auto___54973 = G__54974;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__54577 = elem;
(G__54577[k__$1] = v);

return G__54577;
} else {
var G__54578 = elem;
G__54578.setAttribute(k__$1,v);

return G__54578;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__54579_54975 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__54580_54976 = null;
var count__54581_54977 = (0);
var i__54582_54978 = (0);
while(true){
if((i__54582_54978 < count__54581_54977)){
var vec__54589_54979 = chunk__54580_54976.cljs$core$IIndexed$_nth$arity$2(null,i__54582_54978);
var k_54980__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54589_54979,(0),null);
var v_54981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54589_54979,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54980__$1,v_54981__$1);


var G__54982 = seq__54579_54975;
var G__54983 = chunk__54580_54976;
var G__54984 = count__54581_54977;
var G__54985 = (i__54582_54978 + (1));
seq__54579_54975 = G__54982;
chunk__54580_54976 = G__54983;
count__54581_54977 = G__54984;
i__54582_54978 = G__54985;
continue;
} else {
var temp__5735__auto___54986 = cljs.core.seq(seq__54579_54975);
if(temp__5735__auto___54986){
var seq__54579_54987__$1 = temp__5735__auto___54986;
if(cljs.core.chunked_seq_QMARK_(seq__54579_54987__$1)){
var c__4556__auto___54988 = cljs.core.chunk_first(seq__54579_54987__$1);
var G__54990 = cljs.core.chunk_rest(seq__54579_54987__$1);
var G__54991 = c__4556__auto___54988;
var G__54992 = cljs.core.count(c__4556__auto___54988);
var G__54993 = (0);
seq__54579_54975 = G__54990;
chunk__54580_54976 = G__54991;
count__54581_54977 = G__54992;
i__54582_54978 = G__54993;
continue;
} else {
var vec__54592_54994 = cljs.core.first(seq__54579_54987__$1);
var k_54995__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54592_54994,(0),null);
var v_54996__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54592_54994,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54995__$1,v_54996__$1);


var G__54997 = cljs.core.next(seq__54579_54987__$1);
var G__54998 = null;
var G__54999 = (0);
var G__55000 = (0);
seq__54579_54975 = G__54997;
chunk__54580_54976 = G__54998;
count__54581_54977 = G__54999;
i__54582_54978 = G__55000;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq54572){
var G__54573 = cljs.core.first(seq54572);
var seq54572__$1 = cljs.core.next(seq54572);
var G__54574 = cljs.core.first(seq54572__$1);
var seq54572__$2 = cljs.core.next(seq54572__$1);
var G__54575 = cljs.core.first(seq54572__$2);
var seq54572__$3 = cljs.core.next(seq54572__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54573,G__54574,G__54575,seq54572__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__54599 = arguments.length;
switch (G__54599) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55002 = arguments.length;
var i__4737__auto___55003 = (0);
while(true){
if((i__4737__auto___55003 < len__4736__auto___55002)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55003]));

var G__55004 = (i__4737__auto___55003 + (1));
i__4737__auto___55003 = G__55004;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_55005__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__54600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__54600.cljs$core$IFn$_invoke$arity$1 ? fexpr__54600.cljs$core$IFn$_invoke$arity$1(k_55005__$1) : fexpr__54600.call(null,k_55005__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_55005__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__54601_55006 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__54602_55007 = null;
var count__54603_55008 = (0);
var i__54604_55009 = (0);
while(true){
if((i__54604_55009 < count__54603_55008)){
var k_55014__$1 = chunk__54602_55007.cljs$core$IIndexed$_nth$arity$2(null,i__54604_55009);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55014__$1);


var G__55015 = seq__54601_55006;
var G__55016 = chunk__54602_55007;
var G__55017 = count__54603_55008;
var G__55018 = (i__54604_55009 + (1));
seq__54601_55006 = G__55015;
chunk__54602_55007 = G__55016;
count__54603_55008 = G__55017;
i__54604_55009 = G__55018;
continue;
} else {
var temp__5735__auto___55019 = cljs.core.seq(seq__54601_55006);
if(temp__5735__auto___55019){
var seq__54601_55020__$1 = temp__5735__auto___55019;
if(cljs.core.chunked_seq_QMARK_(seq__54601_55020__$1)){
var c__4556__auto___55021 = cljs.core.chunk_first(seq__54601_55020__$1);
var G__55022 = cljs.core.chunk_rest(seq__54601_55020__$1);
var G__55023 = c__4556__auto___55021;
var G__55024 = cljs.core.count(c__4556__auto___55021);
var G__55025 = (0);
seq__54601_55006 = G__55022;
chunk__54602_55007 = G__55023;
count__54603_55008 = G__55024;
i__54604_55009 = G__55025;
continue;
} else {
var k_55026__$1 = cljs.core.first(seq__54601_55020__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55026__$1);


var G__55027 = cljs.core.next(seq__54601_55020__$1);
var G__55028 = null;
var G__55029 = (0);
var G__55030 = (0);
seq__54601_55006 = G__55027;
chunk__54602_55007 = G__55028;
count__54603_55008 = G__55029;
i__54604_55009 = G__55030;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq54596){
var G__54597 = cljs.core.first(seq54596);
var seq54596__$1 = cljs.core.next(seq54596);
var G__54598 = cljs.core.first(seq54596__$1);
var seq54596__$2 = cljs.core.next(seq54596__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54597,G__54598,seq54596__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__54606 = arguments.length;
switch (G__54606) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__54611 = arguments.length;
switch (G__54611) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55037 = arguments.length;
var i__4737__auto___55038 = (0);
while(true){
if((i__4737__auto___55038 < len__4736__auto___55037)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55038]));

var G__55039 = (i__4737__auto___55038 + (1));
i__4737__auto___55038 = G__55039;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___55040 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55040)){
var class_list_55041 = temp__5733__auto___55040;
var seq__54612_55042 = cljs.core.seq(classes__$1);
var chunk__54613_55043 = null;
var count__54614_55044 = (0);
var i__54615_55045 = (0);
while(true){
if((i__54615_55045 < count__54614_55044)){
var c_55047 = chunk__54613_55043.cljs$core$IIndexed$_nth$arity$2(null,i__54615_55045);
class_list_55041.add(c_55047);


var G__55048 = seq__54612_55042;
var G__55049 = chunk__54613_55043;
var G__55050 = count__54614_55044;
var G__55051 = (i__54615_55045 + (1));
seq__54612_55042 = G__55048;
chunk__54613_55043 = G__55049;
count__54614_55044 = G__55050;
i__54615_55045 = G__55051;
continue;
} else {
var temp__5735__auto___55052 = cljs.core.seq(seq__54612_55042);
if(temp__5735__auto___55052){
var seq__54612_55053__$1 = temp__5735__auto___55052;
if(cljs.core.chunked_seq_QMARK_(seq__54612_55053__$1)){
var c__4556__auto___55054 = cljs.core.chunk_first(seq__54612_55053__$1);
var G__55055 = cljs.core.chunk_rest(seq__54612_55053__$1);
var G__55056 = c__4556__auto___55054;
var G__55057 = cljs.core.count(c__4556__auto___55054);
var G__55058 = (0);
seq__54612_55042 = G__55055;
chunk__54613_55043 = G__55056;
count__54614_55044 = G__55057;
i__54615_55045 = G__55058;
continue;
} else {
var c_55059 = cljs.core.first(seq__54612_55053__$1);
class_list_55041.add(c_55059);


var G__55060 = cljs.core.next(seq__54612_55053__$1);
var G__55061 = null;
var G__55062 = (0);
var G__55063 = (0);
seq__54612_55042 = G__55060;
chunk__54613_55043 = G__55061;
count__54614_55044 = G__55062;
i__54615_55045 = G__55063;
continue;
}
} else {
}
}
break;
}
} else {
var seq__54616_55064 = cljs.core.seq(classes__$1);
var chunk__54617_55065 = null;
var count__54618_55066 = (0);
var i__54619_55067 = (0);
while(true){
if((i__54619_55067 < count__54618_55066)){
var c_55068 = chunk__54617_55065.cljs$core$IIndexed$_nth$arity$2(null,i__54619_55067);
var class_name_55069 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55069,c_55068))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55069 === ""))?c_55068:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55069)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55068)].join('')));
}


var G__55072 = seq__54616_55064;
var G__55073 = chunk__54617_55065;
var G__55074 = count__54618_55066;
var G__55075 = (i__54619_55067 + (1));
seq__54616_55064 = G__55072;
chunk__54617_55065 = G__55073;
count__54618_55066 = G__55074;
i__54619_55067 = G__55075;
continue;
} else {
var temp__5735__auto___55076 = cljs.core.seq(seq__54616_55064);
if(temp__5735__auto___55076){
var seq__54616_55078__$1 = temp__5735__auto___55076;
if(cljs.core.chunked_seq_QMARK_(seq__54616_55078__$1)){
var c__4556__auto___55079 = cljs.core.chunk_first(seq__54616_55078__$1);
var G__55080 = cljs.core.chunk_rest(seq__54616_55078__$1);
var G__55081 = c__4556__auto___55079;
var G__55082 = cljs.core.count(c__4556__auto___55079);
var G__55083 = (0);
seq__54616_55064 = G__55080;
chunk__54617_55065 = G__55081;
count__54618_55066 = G__55082;
i__54619_55067 = G__55083;
continue;
} else {
var c_55084 = cljs.core.first(seq__54616_55078__$1);
var class_name_55085 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55085,c_55084))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55085 === ""))?c_55084:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55085)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55084)].join('')));
}


var G__55086 = cljs.core.next(seq__54616_55078__$1);
var G__55087 = null;
var G__55088 = (0);
var G__55089 = (0);
seq__54616_55064 = G__55086;
chunk__54617_55065 = G__55087;
count__54618_55066 = G__55088;
i__54619_55067 = G__55089;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__54620_55090 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__54621_55091 = null;
var count__54622_55092 = (0);
var i__54623_55093 = (0);
while(true){
if((i__54623_55093 < count__54622_55092)){
var c_55094 = chunk__54621_55091.cljs$core$IIndexed$_nth$arity$2(null,i__54623_55093);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55094);


var G__55095 = seq__54620_55090;
var G__55096 = chunk__54621_55091;
var G__55097 = count__54622_55092;
var G__55098 = (i__54623_55093 + (1));
seq__54620_55090 = G__55095;
chunk__54621_55091 = G__55096;
count__54622_55092 = G__55097;
i__54623_55093 = G__55098;
continue;
} else {
var temp__5735__auto___55099 = cljs.core.seq(seq__54620_55090);
if(temp__5735__auto___55099){
var seq__54620_55100__$1 = temp__5735__auto___55099;
if(cljs.core.chunked_seq_QMARK_(seq__54620_55100__$1)){
var c__4556__auto___55101 = cljs.core.chunk_first(seq__54620_55100__$1);
var G__55102 = cljs.core.chunk_rest(seq__54620_55100__$1);
var G__55103 = c__4556__auto___55101;
var G__55104 = cljs.core.count(c__4556__auto___55101);
var G__55105 = (0);
seq__54620_55090 = G__55102;
chunk__54621_55091 = G__55103;
count__54622_55092 = G__55104;
i__54623_55093 = G__55105;
continue;
} else {
var c_55106 = cljs.core.first(seq__54620_55100__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55106);


var G__55107 = cljs.core.next(seq__54620_55100__$1);
var G__55108 = null;
var G__55109 = (0);
var G__55110 = (0);
seq__54620_55090 = G__55107;
chunk__54621_55091 = G__55108;
count__54622_55092 = G__55109;
i__54623_55093 = G__55110;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq54608){
var G__54609 = cljs.core.first(seq54608);
var seq54608__$1 = cljs.core.next(seq54608);
var G__54610 = cljs.core.first(seq54608__$1);
var seq54608__$2 = cljs.core.next(seq54608__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54609,G__54610,seq54608__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__54628 = arguments.length;
switch (G__54628) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55112 = arguments.length;
var i__4737__auto___55113 = (0);
while(true){
if((i__4737__auto___55113 < len__4736__auto___55112)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55113]));

var G__55115 = (i__4737__auto___55113 + (1));
i__4737__auto___55113 = G__55115;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___55116 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55116)){
var class_list_55117 = temp__5733__auto___55116;
class_list_55117.remove(c__$1);
} else {
var class_name_55118 = dommy.core.class$(elem);
var new_class_name_55119 = dommy.utils.remove_class_str(class_name_55118,c__$1);
if((class_name_55118 === new_class_name_55119)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_55119);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__54629 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__54630 = null;
var count__54631 = (0);
var i__54632 = (0);
while(true){
if((i__54632 < count__54631)){
var c = chunk__54630.cljs$core$IIndexed$_nth$arity$2(null,i__54632);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55120 = seq__54629;
var G__55121 = chunk__54630;
var G__55122 = count__54631;
var G__55123 = (i__54632 + (1));
seq__54629 = G__55120;
chunk__54630 = G__55121;
count__54631 = G__55122;
i__54632 = G__55123;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54629);
if(temp__5735__auto__){
var seq__54629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54629__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54629__$1);
var G__55124 = cljs.core.chunk_rest(seq__54629__$1);
var G__55125 = c__4556__auto__;
var G__55126 = cljs.core.count(c__4556__auto__);
var G__55127 = (0);
seq__54629 = G__55124;
chunk__54630 = G__55125;
count__54631 = G__55126;
i__54632 = G__55127;
continue;
} else {
var c = cljs.core.first(seq__54629__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55128 = cljs.core.next(seq__54629__$1);
var G__55129 = null;
var G__55130 = (0);
var G__55131 = (0);
seq__54629 = G__55128;
chunk__54630 = G__55129;
count__54631 = G__55130;
i__54632 = G__55131;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq54625){
var G__54626 = cljs.core.first(seq54625);
var seq54625__$1 = cljs.core.next(seq54625);
var G__54627 = cljs.core.first(seq54625__$1);
var seq54625__$2 = cljs.core.next(seq54625__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54626,G__54627,seq54625__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__54634 = arguments.length;
switch (G__54634) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___55133 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55133)){
var class_list_55134 = temp__5733__auto___55133;
class_list_55134.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__54636 = arguments.length;
switch (G__54636) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__54638 = arguments.length;
switch (G__54638) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__54643 = arguments.length;
switch (G__54643) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55141 = arguments.length;
var i__4737__auto___55142 = (0);
while(true){
if((i__4737__auto___55142 < len__4736__auto___55141)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55142]));

var G__55143 = (i__4737__auto___55142 + (1));
i__4737__auto___55142 = G__55143;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__54644 = parent;
G__54644.appendChild(child);

return G__54644;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54645_55144 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54646_55145 = null;
var count__54647_55146 = (0);
var i__54648_55147 = (0);
while(true){
if((i__54648_55147 < count__54647_55146)){
var c_55148 = chunk__54646_55145.cljs$core$IIndexed$_nth$arity$2(null,i__54648_55147);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55148);


var G__55149 = seq__54645_55144;
var G__55150 = chunk__54646_55145;
var G__55151 = count__54647_55146;
var G__55152 = (i__54648_55147 + (1));
seq__54645_55144 = G__55149;
chunk__54646_55145 = G__55150;
count__54647_55146 = G__55151;
i__54648_55147 = G__55152;
continue;
} else {
var temp__5735__auto___55153 = cljs.core.seq(seq__54645_55144);
if(temp__5735__auto___55153){
var seq__54645_55154__$1 = temp__5735__auto___55153;
if(cljs.core.chunked_seq_QMARK_(seq__54645_55154__$1)){
var c__4556__auto___55155 = cljs.core.chunk_first(seq__54645_55154__$1);
var G__55156 = cljs.core.chunk_rest(seq__54645_55154__$1);
var G__55157 = c__4556__auto___55155;
var G__55158 = cljs.core.count(c__4556__auto___55155);
var G__55159 = (0);
seq__54645_55144 = G__55156;
chunk__54646_55145 = G__55157;
count__54647_55146 = G__55158;
i__54648_55147 = G__55159;
continue;
} else {
var c_55160 = cljs.core.first(seq__54645_55154__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55160);


var G__55161 = cljs.core.next(seq__54645_55154__$1);
var G__55162 = null;
var G__55163 = (0);
var G__55164 = (0);
seq__54645_55144 = G__55161;
chunk__54646_55145 = G__55162;
count__54647_55146 = G__55163;
i__54648_55147 = G__55164;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq54640){
var G__54641 = cljs.core.first(seq54640);
var seq54640__$1 = cljs.core.next(seq54640);
var G__54642 = cljs.core.first(seq54640__$1);
var seq54640__$2 = cljs.core.next(seq54640__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54641,G__54642,seq54640__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__54653 = arguments.length;
switch (G__54653) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55166 = arguments.length;
var i__4737__auto___55167 = (0);
while(true){
if((i__4737__auto___55167 < len__4736__auto___55166)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55167]));

var G__55172 = (i__4737__auto___55167 + (1));
i__4737__auto___55167 = G__55172;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__54654 = parent;
G__54654.insertBefore(child,parent.firstChild);

return G__54654;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54655_55177 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54656_55178 = null;
var count__54657_55179 = (0);
var i__54658_55180 = (0);
while(true){
if((i__54658_55180 < count__54657_55179)){
var c_55185 = chunk__54656_55178.cljs$core$IIndexed$_nth$arity$2(null,i__54658_55180);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55185);


var G__55186 = seq__54655_55177;
var G__55187 = chunk__54656_55178;
var G__55188 = count__54657_55179;
var G__55189 = (i__54658_55180 + (1));
seq__54655_55177 = G__55186;
chunk__54656_55178 = G__55187;
count__54657_55179 = G__55188;
i__54658_55180 = G__55189;
continue;
} else {
var temp__5735__auto___55190 = cljs.core.seq(seq__54655_55177);
if(temp__5735__auto___55190){
var seq__54655_55191__$1 = temp__5735__auto___55190;
if(cljs.core.chunked_seq_QMARK_(seq__54655_55191__$1)){
var c__4556__auto___55192 = cljs.core.chunk_first(seq__54655_55191__$1);
var G__55193 = cljs.core.chunk_rest(seq__54655_55191__$1);
var G__55194 = c__4556__auto___55192;
var G__55195 = cljs.core.count(c__4556__auto___55192);
var G__55196 = (0);
seq__54655_55177 = G__55193;
chunk__54656_55178 = G__55194;
count__54657_55179 = G__55195;
i__54658_55180 = G__55196;
continue;
} else {
var c_55197 = cljs.core.first(seq__54655_55191__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55197);


var G__55198 = cljs.core.next(seq__54655_55191__$1);
var G__55199 = null;
var G__55200 = (0);
var G__55201 = (0);
seq__54655_55177 = G__55198;
chunk__54656_55178 = G__55199;
count__54657_55179 = G__55200;
i__54658_55180 = G__55201;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq54650){
var G__54651 = cljs.core.first(seq54650);
var seq54650__$1 = cljs.core.next(seq54650);
var G__54652 = cljs.core.first(seq54650__$1);
var seq54650__$2 = cljs.core.next(seq54650__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54651,G__54652,seq54650__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___55203 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___55203)){
var next_55204 = temp__5733__auto___55203;
dommy.core.insert_before_BANG_(elem,next_55204);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__54660 = arguments.length;
switch (G__54660) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__54661 = p;
G__54661.removeChild(elem);

return G__54661;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54662){
var vec__54663 = p__54662;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54663,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54663,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55210 = arguments.length;
var i__4737__auto___55211 = (0);
while(true){
if((i__4737__auto___55211 < len__4736__auto___55210)){
args__4742__auto__.push((arguments[i__4737__auto___55211]));

var G__55212 = (i__4737__auto___55211 + (1));
i__4737__auto___55211 = G__55212;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq54666){
var G__54667 = cljs.core.first(seq54666);
var seq54666__$1 = cljs.core.next(seq54666);
var G__54668 = cljs.core.first(seq54666__$1);
var seq54666__$2 = cljs.core.next(seq54666__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54667,G__54668,seq54666__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55213 = arguments.length;
var i__4737__auto___55214 = (0);
while(true){
if((i__4737__auto___55214 < len__4736__auto___55213)){
args__4742__auto__.push((arguments[i__4737__auto___55214]));

var G__55215 = (i__4737__auto___55214 + (1));
i__4737__auto___55214 = G__55215;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54671_55216 = dommy.core.elem_and_selector(elem_sel);
var elem_55217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54671_55216,(0),null);
var selector_55218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54671_55216,(1),null);
var seq__54674_55219 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54681_55220 = null;
var count__54682_55221 = (0);
var i__54683_55222 = (0);
while(true){
if((i__54683_55222 < count__54682_55221)){
var vec__54736_55223 = chunk__54681_55220.cljs$core$IIndexed$_nth$arity$2(null,i__54683_55222);
var orig_type_55224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54736_55223,(0),null);
var f_55225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54736_55223,(1),null);
var seq__54684_55226 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55224,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55224,cljs.core.identity])));
var chunk__54686_55227 = null;
var count__54687_55228 = (0);
var i__54688_55229 = (0);
while(true){
if((i__54688_55229 < count__54687_55228)){
var vec__54749_55230 = chunk__54686_55227.cljs$core$IIndexed$_nth$arity$2(null,i__54688_55229);
var actual_type_55231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54749_55230,(0),null);
var factory_55232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54749_55230,(1),null);
var canonical_f_55233 = (function (){var G__54753 = (factory_55232.cljs$core$IFn$_invoke$arity$1 ? factory_55232.cljs$core$IFn$_invoke$arity$1(f_55225) : factory_55232.call(null,f_55225));
var fexpr__54752 = (cljs.core.truth_(selector_55218)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55217,selector_55218):cljs.core.identity);
return (fexpr__54752.cljs$core$IFn$_invoke$arity$1 ? fexpr__54752.cljs$core$IFn$_invoke$arity$1(G__54753) : fexpr__54752.call(null,G__54753));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55217,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55218,actual_type_55231,f_55225], null),canonical_f_55233], 0));

if(cljs.core.truth_(elem_55217.addEventListener)){
elem_55217.addEventListener(cljs.core.name(actual_type_55231),canonical_f_55233);
} else {
elem_55217.attachEvent(cljs.core.name(actual_type_55231),canonical_f_55233);
}


var G__55234 = seq__54684_55226;
var G__55235 = chunk__54686_55227;
var G__55236 = count__54687_55228;
var G__55237 = (i__54688_55229 + (1));
seq__54684_55226 = G__55234;
chunk__54686_55227 = G__55235;
count__54687_55228 = G__55236;
i__54688_55229 = G__55237;
continue;
} else {
var temp__5735__auto___55238 = cljs.core.seq(seq__54684_55226);
if(temp__5735__auto___55238){
var seq__54684_55239__$1 = temp__5735__auto___55238;
if(cljs.core.chunked_seq_QMARK_(seq__54684_55239__$1)){
var c__4556__auto___55240 = cljs.core.chunk_first(seq__54684_55239__$1);
var G__55241 = cljs.core.chunk_rest(seq__54684_55239__$1);
var G__55242 = c__4556__auto___55240;
var G__55243 = cljs.core.count(c__4556__auto___55240);
var G__55244 = (0);
seq__54684_55226 = G__55241;
chunk__54686_55227 = G__55242;
count__54687_55228 = G__55243;
i__54688_55229 = G__55244;
continue;
} else {
var vec__54754_55245 = cljs.core.first(seq__54684_55239__$1);
var actual_type_55246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54754_55245,(0),null);
var factory_55247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54754_55245,(1),null);
var canonical_f_55248 = (function (){var G__54758 = (factory_55247.cljs$core$IFn$_invoke$arity$1 ? factory_55247.cljs$core$IFn$_invoke$arity$1(f_55225) : factory_55247.call(null,f_55225));
var fexpr__54757 = (cljs.core.truth_(selector_55218)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55217,selector_55218):cljs.core.identity);
return (fexpr__54757.cljs$core$IFn$_invoke$arity$1 ? fexpr__54757.cljs$core$IFn$_invoke$arity$1(G__54758) : fexpr__54757.call(null,G__54758));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55217,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55218,actual_type_55246,f_55225], null),canonical_f_55248], 0));

if(cljs.core.truth_(elem_55217.addEventListener)){
elem_55217.addEventListener(cljs.core.name(actual_type_55246),canonical_f_55248);
} else {
elem_55217.attachEvent(cljs.core.name(actual_type_55246),canonical_f_55248);
}


var G__55249 = cljs.core.next(seq__54684_55239__$1);
var G__55250 = null;
var G__55251 = (0);
var G__55252 = (0);
seq__54684_55226 = G__55249;
chunk__54686_55227 = G__55250;
count__54687_55228 = G__55251;
i__54688_55229 = G__55252;
continue;
}
} else {
}
}
break;
}

var G__55253 = seq__54674_55219;
var G__55254 = chunk__54681_55220;
var G__55255 = count__54682_55221;
var G__55256 = (i__54683_55222 + (1));
seq__54674_55219 = G__55253;
chunk__54681_55220 = G__55254;
count__54682_55221 = G__55255;
i__54683_55222 = G__55256;
continue;
} else {
var temp__5735__auto___55257 = cljs.core.seq(seq__54674_55219);
if(temp__5735__auto___55257){
var seq__54674_55258__$1 = temp__5735__auto___55257;
if(cljs.core.chunked_seq_QMARK_(seq__54674_55258__$1)){
var c__4556__auto___55259 = cljs.core.chunk_first(seq__54674_55258__$1);
var G__55260 = cljs.core.chunk_rest(seq__54674_55258__$1);
var G__55261 = c__4556__auto___55259;
var G__55262 = cljs.core.count(c__4556__auto___55259);
var G__55263 = (0);
seq__54674_55219 = G__55260;
chunk__54681_55220 = G__55261;
count__54682_55221 = G__55262;
i__54683_55222 = G__55263;
continue;
} else {
var vec__54759_55264 = cljs.core.first(seq__54674_55258__$1);
var orig_type_55265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54759_55264,(0),null);
var f_55266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54759_55264,(1),null);
var seq__54675_55267 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55265,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55265,cljs.core.identity])));
var chunk__54677_55268 = null;
var count__54678_55269 = (0);
var i__54679_55270 = (0);
while(true){
if((i__54679_55270 < count__54678_55269)){
var vec__54772_55271 = chunk__54677_55268.cljs$core$IIndexed$_nth$arity$2(null,i__54679_55270);
var actual_type_55272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54772_55271,(0),null);
var factory_55273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54772_55271,(1),null);
var canonical_f_55274 = (function (){var G__54776 = (factory_55273.cljs$core$IFn$_invoke$arity$1 ? factory_55273.cljs$core$IFn$_invoke$arity$1(f_55266) : factory_55273.call(null,f_55266));
var fexpr__54775 = (cljs.core.truth_(selector_55218)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55217,selector_55218):cljs.core.identity);
return (fexpr__54775.cljs$core$IFn$_invoke$arity$1 ? fexpr__54775.cljs$core$IFn$_invoke$arity$1(G__54776) : fexpr__54775.call(null,G__54776));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55217,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55218,actual_type_55272,f_55266], null),canonical_f_55274], 0));

if(cljs.core.truth_(elem_55217.addEventListener)){
elem_55217.addEventListener(cljs.core.name(actual_type_55272),canonical_f_55274);
} else {
elem_55217.attachEvent(cljs.core.name(actual_type_55272),canonical_f_55274);
}


var G__55275 = seq__54675_55267;
var G__55276 = chunk__54677_55268;
var G__55277 = count__54678_55269;
var G__55278 = (i__54679_55270 + (1));
seq__54675_55267 = G__55275;
chunk__54677_55268 = G__55276;
count__54678_55269 = G__55277;
i__54679_55270 = G__55278;
continue;
} else {
var temp__5735__auto___55279__$1 = cljs.core.seq(seq__54675_55267);
if(temp__5735__auto___55279__$1){
var seq__54675_55280__$1 = temp__5735__auto___55279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54675_55280__$1)){
var c__4556__auto___55281 = cljs.core.chunk_first(seq__54675_55280__$1);
var G__55282 = cljs.core.chunk_rest(seq__54675_55280__$1);
var G__55283 = c__4556__auto___55281;
var G__55284 = cljs.core.count(c__4556__auto___55281);
var G__55285 = (0);
seq__54675_55267 = G__55282;
chunk__54677_55268 = G__55283;
count__54678_55269 = G__55284;
i__54679_55270 = G__55285;
continue;
} else {
var vec__54777_55286 = cljs.core.first(seq__54675_55280__$1);
var actual_type_55287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54777_55286,(0),null);
var factory_55288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54777_55286,(1),null);
var canonical_f_55289 = (function (){var G__54781 = (factory_55288.cljs$core$IFn$_invoke$arity$1 ? factory_55288.cljs$core$IFn$_invoke$arity$1(f_55266) : factory_55288.call(null,f_55266));
var fexpr__54780 = (cljs.core.truth_(selector_55218)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55217,selector_55218):cljs.core.identity);
return (fexpr__54780.cljs$core$IFn$_invoke$arity$1 ? fexpr__54780.cljs$core$IFn$_invoke$arity$1(G__54781) : fexpr__54780.call(null,G__54781));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55217,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55218,actual_type_55287,f_55266], null),canonical_f_55289], 0));

if(cljs.core.truth_(elem_55217.addEventListener)){
elem_55217.addEventListener(cljs.core.name(actual_type_55287),canonical_f_55289);
} else {
elem_55217.attachEvent(cljs.core.name(actual_type_55287),canonical_f_55289);
}


var G__55290 = cljs.core.next(seq__54675_55280__$1);
var G__55291 = null;
var G__55292 = (0);
var G__55293 = (0);
seq__54675_55267 = G__55290;
chunk__54677_55268 = G__55291;
count__54678_55269 = G__55292;
i__54679_55270 = G__55293;
continue;
}
} else {
}
}
break;
}

var G__55294 = cljs.core.next(seq__54674_55258__$1);
var G__55295 = null;
var G__55296 = (0);
var G__55297 = (0);
seq__54674_55219 = G__55294;
chunk__54681_55220 = G__55295;
count__54682_55221 = G__55296;
i__54683_55222 = G__55297;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq54669){
var G__54670 = cljs.core.first(seq54669);
var seq54669__$1 = cljs.core.next(seq54669);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54670,seq54669__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55298 = arguments.length;
var i__4737__auto___55299 = (0);
while(true){
if((i__4737__auto___55299 < len__4736__auto___55298)){
args__4742__auto__.push((arguments[i__4737__auto___55299]));

var G__55300 = (i__4737__auto___55299 + (1));
i__4737__auto___55299 = G__55300;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54784_55301 = dommy.core.elem_and_selector(elem_sel);
var elem_55302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54784_55301,(0),null);
var selector_55303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54784_55301,(1),null);
var seq__54787_55304 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54794_55305 = null;
var count__54795_55306 = (0);
var i__54796_55307 = (0);
while(true){
if((i__54796_55307 < count__54795_55306)){
var vec__54833_55308 = chunk__54794_55305.cljs$core$IIndexed$_nth$arity$2(null,i__54796_55307);
var orig_type_55309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54833_55308,(0),null);
var f_55310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54833_55308,(1),null);
var seq__54797_55311 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55309,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55309,cljs.core.identity])));
var chunk__54799_55312 = null;
var count__54800_55313 = (0);
var i__54801_55314 = (0);
while(true){
if((i__54801_55314 < count__54800_55313)){
var vec__54842_55315 = chunk__54799_55312.cljs$core$IIndexed$_nth$arity$2(null,i__54801_55314);
var actual_type_55316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54842_55315,(0),null);
var __55317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54842_55315,(1),null);
var keys_55318 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55303,actual_type_55316,f_55310], null);
var canonical_f_55319 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55302),keys_55318);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55302,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55318], 0));

if(cljs.core.truth_(elem_55302.removeEventListener)){
elem_55302.removeEventListener(cljs.core.name(actual_type_55316),canonical_f_55319);
} else {
elem_55302.detachEvent(cljs.core.name(actual_type_55316),canonical_f_55319);
}


var G__55320 = seq__54797_55311;
var G__55321 = chunk__54799_55312;
var G__55322 = count__54800_55313;
var G__55323 = (i__54801_55314 + (1));
seq__54797_55311 = G__55320;
chunk__54799_55312 = G__55321;
count__54800_55313 = G__55322;
i__54801_55314 = G__55323;
continue;
} else {
var temp__5735__auto___55324 = cljs.core.seq(seq__54797_55311);
if(temp__5735__auto___55324){
var seq__54797_55325__$1 = temp__5735__auto___55324;
if(cljs.core.chunked_seq_QMARK_(seq__54797_55325__$1)){
var c__4556__auto___55326 = cljs.core.chunk_first(seq__54797_55325__$1);
var G__55327 = cljs.core.chunk_rest(seq__54797_55325__$1);
var G__55328 = c__4556__auto___55326;
var G__55329 = cljs.core.count(c__4556__auto___55326);
var G__55330 = (0);
seq__54797_55311 = G__55327;
chunk__54799_55312 = G__55328;
count__54800_55313 = G__55329;
i__54801_55314 = G__55330;
continue;
} else {
var vec__54845_55331 = cljs.core.first(seq__54797_55325__$1);
var actual_type_55332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54845_55331,(0),null);
var __55333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54845_55331,(1),null);
var keys_55334 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55303,actual_type_55332,f_55310], null);
var canonical_f_55335 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55302),keys_55334);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55302,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55334], 0));

if(cljs.core.truth_(elem_55302.removeEventListener)){
elem_55302.removeEventListener(cljs.core.name(actual_type_55332),canonical_f_55335);
} else {
elem_55302.detachEvent(cljs.core.name(actual_type_55332),canonical_f_55335);
}


var G__55336 = cljs.core.next(seq__54797_55325__$1);
var G__55337 = null;
var G__55338 = (0);
var G__55339 = (0);
seq__54797_55311 = G__55336;
chunk__54799_55312 = G__55337;
count__54800_55313 = G__55338;
i__54801_55314 = G__55339;
continue;
}
} else {
}
}
break;
}

var G__55340 = seq__54787_55304;
var G__55341 = chunk__54794_55305;
var G__55342 = count__54795_55306;
var G__55343 = (i__54796_55307 + (1));
seq__54787_55304 = G__55340;
chunk__54794_55305 = G__55341;
count__54795_55306 = G__55342;
i__54796_55307 = G__55343;
continue;
} else {
var temp__5735__auto___55344 = cljs.core.seq(seq__54787_55304);
if(temp__5735__auto___55344){
var seq__54787_55345__$1 = temp__5735__auto___55344;
if(cljs.core.chunked_seq_QMARK_(seq__54787_55345__$1)){
var c__4556__auto___55346 = cljs.core.chunk_first(seq__54787_55345__$1);
var G__55347 = cljs.core.chunk_rest(seq__54787_55345__$1);
var G__55348 = c__4556__auto___55346;
var G__55349 = cljs.core.count(c__4556__auto___55346);
var G__55350 = (0);
seq__54787_55304 = G__55347;
chunk__54794_55305 = G__55348;
count__54795_55306 = G__55349;
i__54796_55307 = G__55350;
continue;
} else {
var vec__54848_55351 = cljs.core.first(seq__54787_55345__$1);
var orig_type_55352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54848_55351,(0),null);
var f_55353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54848_55351,(1),null);
var seq__54788_55354 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55352,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55352,cljs.core.identity])));
var chunk__54790_55355 = null;
var count__54791_55356 = (0);
var i__54792_55357 = (0);
while(true){
if((i__54792_55357 < count__54791_55356)){
var vec__54857_55358 = chunk__54790_55355.cljs$core$IIndexed$_nth$arity$2(null,i__54792_55357);
var actual_type_55359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55358,(0),null);
var __55360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55358,(1),null);
var keys_55361 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55303,actual_type_55359,f_55353], null);
var canonical_f_55362 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55302),keys_55361);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55302,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55361], 0));

if(cljs.core.truth_(elem_55302.removeEventListener)){
elem_55302.removeEventListener(cljs.core.name(actual_type_55359),canonical_f_55362);
} else {
elem_55302.detachEvent(cljs.core.name(actual_type_55359),canonical_f_55362);
}


var G__55363 = seq__54788_55354;
var G__55364 = chunk__54790_55355;
var G__55365 = count__54791_55356;
var G__55366 = (i__54792_55357 + (1));
seq__54788_55354 = G__55363;
chunk__54790_55355 = G__55364;
count__54791_55356 = G__55365;
i__54792_55357 = G__55366;
continue;
} else {
var temp__5735__auto___55367__$1 = cljs.core.seq(seq__54788_55354);
if(temp__5735__auto___55367__$1){
var seq__54788_55368__$1 = temp__5735__auto___55367__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54788_55368__$1)){
var c__4556__auto___55369 = cljs.core.chunk_first(seq__54788_55368__$1);
var G__55370 = cljs.core.chunk_rest(seq__54788_55368__$1);
var G__55371 = c__4556__auto___55369;
var G__55372 = cljs.core.count(c__4556__auto___55369);
var G__55373 = (0);
seq__54788_55354 = G__55370;
chunk__54790_55355 = G__55371;
count__54791_55356 = G__55372;
i__54792_55357 = G__55373;
continue;
} else {
var vec__54860_55374 = cljs.core.first(seq__54788_55368__$1);
var actual_type_55375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54860_55374,(0),null);
var __55376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54860_55374,(1),null);
var keys_55377 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55303,actual_type_55375,f_55353], null);
var canonical_f_55378 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55302),keys_55377);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55302,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55377], 0));

if(cljs.core.truth_(elem_55302.removeEventListener)){
elem_55302.removeEventListener(cljs.core.name(actual_type_55375),canonical_f_55378);
} else {
elem_55302.detachEvent(cljs.core.name(actual_type_55375),canonical_f_55378);
}


var G__55379 = cljs.core.next(seq__54788_55368__$1);
var G__55380 = null;
var G__55381 = (0);
var G__55382 = (0);
seq__54788_55354 = G__55379;
chunk__54790_55355 = G__55380;
count__54791_55356 = G__55381;
i__54792_55357 = G__55382;
continue;
}
} else {
}
}
break;
}

var G__55383 = cljs.core.next(seq__54787_55345__$1);
var G__55384 = null;
var G__55385 = (0);
var G__55386 = (0);
seq__54787_55304 = G__55383;
chunk__54794_55305 = G__55384;
count__54795_55306 = G__55385;
i__54796_55307 = G__55386;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq54782){
var G__54783 = cljs.core.first(seq54782);
var seq54782__$1 = cljs.core.next(seq54782);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54783,seq54782__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55387 = arguments.length;
var i__4737__auto___55388 = (0);
while(true){
if((i__4737__auto___55388 < len__4736__auto___55387)){
args__4742__auto__.push((arguments[i__4737__auto___55388]));

var G__55389 = (i__4737__auto___55388 + (1));
i__4737__auto___55388 = G__55389;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54865_55390 = dommy.core.elem_and_selector(elem_sel);
var elem_55391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54865_55390,(0),null);
var selector_55392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54865_55390,(1),null);
var seq__54868_55393 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54869_55394 = null;
var count__54870_55395 = (0);
var i__54871_55396 = (0);
while(true){
if((i__54871_55396 < count__54870_55395)){
var vec__54878_55397 = chunk__54869_55394.cljs$core$IIndexed$_nth$arity$2(null,i__54871_55396);
var type_55398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54878_55397,(0),null);
var f_55399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54878_55397,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55398,((function (seq__54868_55393,chunk__54869_55394,count__54870_55395,i__54871_55396,vec__54878_55397,type_55398,f_55399,vec__54865_55390,elem_55391,selector_55392){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55398,dommy$core$this_fn], 0));

return (f_55399.cljs$core$IFn$_invoke$arity$1 ? f_55399.cljs$core$IFn$_invoke$arity$1(e) : f_55399.call(null,e));
});})(seq__54868_55393,chunk__54869_55394,count__54870_55395,i__54871_55396,vec__54878_55397,type_55398,f_55399,vec__54865_55390,elem_55391,selector_55392))
], 0));


var G__55400 = seq__54868_55393;
var G__55401 = chunk__54869_55394;
var G__55402 = count__54870_55395;
var G__55403 = (i__54871_55396 + (1));
seq__54868_55393 = G__55400;
chunk__54869_55394 = G__55401;
count__54870_55395 = G__55402;
i__54871_55396 = G__55403;
continue;
} else {
var temp__5735__auto___55404 = cljs.core.seq(seq__54868_55393);
if(temp__5735__auto___55404){
var seq__54868_55405__$1 = temp__5735__auto___55404;
if(cljs.core.chunked_seq_QMARK_(seq__54868_55405__$1)){
var c__4556__auto___55406 = cljs.core.chunk_first(seq__54868_55405__$1);
var G__55407 = cljs.core.chunk_rest(seq__54868_55405__$1);
var G__55408 = c__4556__auto___55406;
var G__55409 = cljs.core.count(c__4556__auto___55406);
var G__55410 = (0);
seq__54868_55393 = G__55407;
chunk__54869_55394 = G__55408;
count__54870_55395 = G__55409;
i__54871_55396 = G__55410;
continue;
} else {
var vec__54881_55411 = cljs.core.first(seq__54868_55405__$1);
var type_55412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54881_55411,(0),null);
var f_55413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54881_55411,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55412,((function (seq__54868_55393,chunk__54869_55394,count__54870_55395,i__54871_55396,vec__54881_55411,type_55412,f_55413,seq__54868_55405__$1,temp__5735__auto___55404,vec__54865_55390,elem_55391,selector_55392){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55412,dommy$core$this_fn], 0));

return (f_55413.cljs$core$IFn$_invoke$arity$1 ? f_55413.cljs$core$IFn$_invoke$arity$1(e) : f_55413.call(null,e));
});})(seq__54868_55393,chunk__54869_55394,count__54870_55395,i__54871_55396,vec__54881_55411,type_55412,f_55413,seq__54868_55405__$1,temp__5735__auto___55404,vec__54865_55390,elem_55391,selector_55392))
], 0));


var G__55414 = cljs.core.next(seq__54868_55405__$1);
var G__55415 = null;
var G__55416 = (0);
var G__55417 = (0);
seq__54868_55393 = G__55414;
chunk__54869_55394 = G__55415;
count__54870_55395 = G__55416;
i__54871_55396 = G__55417;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq54863){
var G__54864 = cljs.core.first(seq54863);
var seq54863__$1 = cljs.core.next(seq54863);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54864,seq54863__$1);
}));


//# sourceMappingURL=dommy.core.js.map
