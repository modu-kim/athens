goog.provide('athens.views.settings_page');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
athens.views.settings_page.opt_out = (function athens$views$settings_page$opt_out(opted_out_QMARK_){
posthog.capture("opt-out");

window.posthog.opt_out_capturing();

localStorage.setItem("sentry","off");

return cljs.core.reset_BANG_(opted_out_QMARK_,true);
});
athens.views.settings_page.opt_in = (function athens$views$settings_page$opt_in(opted_out_QMARK_){
window.posthog.opt_in_capturing();

posthog.capture("opt-in");

localStorage.setItem("sentry","on");

return cljs.core.reset_BANG_(opted_out_QMARK_,false);
});
athens.views.settings_page.handle_click = (function athens$views$settings_page$handle_click(opted_out_QMARK_){
if(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))){
return athens.views.settings_page.opt_in(opted_out_QMARK_);
} else {
return athens.views.settings_page.opt_out(opted_out_QMARK_);
}
});
athens.views.settings_page.handle_debounce_save_input = (function athens$views$settings_page$handle_debounce_save_input(value,debounce_time){
if(((((0) <= value)) && ((value <= (1000))))){
cljs.core.reset_BANG_(debounce_time,value);

(athens.electron.debounce_write_db = goog.functions.debounce(athens.electron.write_db,((1000) * value)));

return localStorage.setItem("debounce-save-time",value);
} else {
return null;
}
});
athens.views.settings_page.handle_change_email = (function athens$views$settings_page$handle_change_email(email,value){
return cljs.core.reset_BANG_(email,value);
});
athens.views.settings_page.handle_click_email = (function athens$views$settings_page$handle_click_email(email,authed_QMARK_,sending_request){
var api = "https://dhx9n94ty5.execute-api.us-east-1.amazonaws.com/Prod/hello";
var email_qs = "?email=";
var query_url = [api,email_qs,cljs.core.str.cljs$core$IFn$_invoke$arity$1(email)].join('');
cljs.core.reset_BANG_(sending_request,true);

var c__50417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_64198){
var state_val_64199 = (state_64198[(1)]);
if((state_val_64199 === (1))){
var inst_64173 = cljs_http.client.get(query_url);
var state_64198__$1 = state_64198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64198__$1,(2),inst_64173);
} else {
if((state_val_64199 === (2))){
var inst_64175 = (state_64198[(7)]);
var inst_64176 = (state_64198[(8)]);
var inst_64175__$1 = (state_64198[(2)]);
var inst_64176__$1 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_64175__$1);
var state_64198__$1 = (function (){var statearr_64200 = state_64198;
(statearr_64200[(7)] = inst_64175__$1);

(statearr_64200[(8)] = inst_64176__$1);

return statearr_64200;
})();
if(cljs.core.truth_(inst_64176__$1)){
var statearr_64201_64220 = state_64198__$1;
(statearr_64201_64220[(1)] = (3));

} else {
var statearr_64202_64221 = state_64198__$1;
(statearr_64202_64221[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64199 === (3))){
var inst_64175 = (state_64198[(7)]);
var inst_64178 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_64175);
var inst_64179 = new cljs.core.Keyword(null,"email_exists","email_exists",-1713774167).cljs$core$IFn$_invoke$arity$1(inst_64178);
var state_64198__$1 = state_64198;
var statearr_64203_64222 = state_64198__$1;
(statearr_64203_64222[(2)] = inst_64179);

(statearr_64203_64222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64199 === (4))){
var inst_64176 = (state_64198[(8)]);
var state_64198__$1 = state_64198;
var statearr_64204_64223 = state_64198__$1;
(statearr_64204_64223[(2)] = inst_64176);

(statearr_64204_64223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64199 === (5))){
var inst_64182 = (state_64198[(2)]);
var state_64198__$1 = state_64198;
if(cljs.core.truth_(inst_64182)){
var statearr_64205_64224 = state_64198__$1;
(statearr_64205_64224[(1)] = (6));

} else {
var statearr_64206_64225 = state_64198__$1;
(statearr_64206_64225[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64199 === (6))){
var inst_64184 = localStorage.setItem("auth/email",email);
var inst_64185 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(true);
var inst_64186 = localStorage.setItem("auth/authed?",inst_64185);
var inst_64187 = cljs.core.reset_BANG_(authed_QMARK_,true);
var state_64198__$1 = (function (){var statearr_64207 = state_64198;
(statearr_64207[(9)] = inst_64186);

(statearr_64207[(10)] = inst_64184);

return statearr_64207;
})();
var statearr_64208_64226 = state_64198__$1;
(statearr_64208_64226[(2)] = inst_64187);

(statearr_64208_64226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64199 === (7))){
var inst_64189 = localStorage.setItem("auth/email",null);
var inst_64190 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(false);
var inst_64191 = localStorage.setItem("auth/authed?",inst_64190);
var inst_64192 = cljs.core.reset_BANG_(authed_QMARK_,false);
var inst_64193 = alert("No OpenCollective account was found with this email address.");
var state_64198__$1 = (function (){var statearr_64209 = state_64198;
(statearr_64209[(11)] = inst_64191);

(statearr_64209[(12)] = inst_64189);

(statearr_64209[(13)] = inst_64192);

return statearr_64209;
})();
var statearr_64210_64227 = state_64198__$1;
(statearr_64210_64227[(2)] = inst_64193);

(statearr_64210_64227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64199 === (8))){
var inst_64195 = (state_64198[(2)]);
var inst_64196 = cljs.core.reset_BANG_(sending_request,false);
var state_64198__$1 = (function (){var statearr_64211 = state_64198;
(statearr_64211[(14)] = inst_64195);

return statearr_64211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64198__$1,inst_64196);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var athens$views$settings_page$handle_click_email_$_state_machine__50382__auto__ = null;
var athens$views$settings_page$handle_click_email_$_state_machine__50382__auto____0 = (function (){
var statearr_64212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64212[(0)] = athens$views$settings_page$handle_click_email_$_state_machine__50382__auto__);

(statearr_64212[(1)] = (1));

return statearr_64212;
});
var athens$views$settings_page$handle_click_email_$_state_machine__50382__auto____1 = (function (state_64198){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_64198);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e64213){var ex__50385__auto__ = e64213;
var statearr_64214_64228 = state_64198;
(statearr_64214_64228[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_64198[(4)]))){
var statearr_64215_64229 = state_64198;
(statearr_64215_64229[(1)] = cljs.core.first((state_64198[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64230 = state_64198;
state_64198 = G__64230;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
athens$views$settings_page$handle_click_email_$_state_machine__50382__auto__ = function(state_64198){
switch(arguments.length){
case 0:
return athens$views$settings_page$handle_click_email_$_state_machine__50382__auto____0.call(this);
case 1:
return athens$views$settings_page$handle_click_email_$_state_machine__50382__auto____1.call(this,state_64198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$views$settings_page$handle_click_email_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = athens$views$settings_page$handle_click_email_$_state_machine__50382__auto____0;
athens$views$settings_page$handle_click_email_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = athens$views$settings_page$handle_click_email_$_state_machine__50382__auto____1;
return athens$views$settings_page$handle_click_email_$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_64216 = f__50418__auto__();
(statearr_64216[(6)] = c__50417__auto__);

return statearr_64216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));

return c__50417__auto__;
});
athens.views.settings_page.init_email = (function athens$views$settings_page$init_email(){
var email = localStorage.getItem("auth/email");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(email,"null")){
return "";
} else {
return email;
}
});
athens.views.settings_page.settings_page = (function athens$views$settings_page$settings_page(){
var opted_out_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.posthog.has_opted_out_capturing());
var authed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(localStorage.getItem("auth/authed?"),"true"));
var email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.views.settings_page.init_email());
var sending_request = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var debounce_save_time_BANG_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(Number(localStorage.getItem("debounce-save-time")));
return (function (){
var submit_disabled = (function (){var or__4126__auto__ = cljs.core.deref(sending_request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(authed_QMARK_);
}
})();
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin","margin",-995903681),"0vh 5vw",new cljs.core.Keyword(null,"width","width",-384071477),"90vw",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Settings"], null),(cljs.core.truth_(cljs.core.deref(authed_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Thank you for using and backing us, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(email))," \u2764\uFE0F"].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You are using the free version of Athens. You are hosting your own data. Please be careful!"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Email"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"15em"], null),new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(email),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Open Collective Email",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64217_SHARP_){
return athens.views.settings_page.handle_change_email(email,p1__64217_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.settings_page.handle_click_email(cljs.core.deref(email),authed_QMARK_,sending_request);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),submit_disabled,new cljs.core.Keyword(null,"primary","primary",817773892),true], null),"Submit"], null)], null)], null),(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Opted Out of Analytics"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Opted Into Analytics"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),cljs.core.deref(opted_out_QMARK_) === false,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.deref(authed_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.settings_page.handle_click(opted_out_QMARK_);
})], null),(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ToggleOn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDE41 We understand."], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ToggleOff], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDE00 Thanks for helping make Athens better!"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Analytics are delivered by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://posthog.com",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Posthog"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://sentry.io",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Sentry"], null),".",((cljs.core.deref(authed_QMARK_) === false)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," In order to opt-out of analytics, please become a User or Sponsor through ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://opencollective.com/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"OpenCollective."], null)], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Remote Backups"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Backup my DB to the cloud"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Coming soon to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://opencollective.com/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"paid Users and Sponsors"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Auto-save"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"4em"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(debounce_save_time_BANG_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64218_SHARP_){
return athens.views.settings_page.handle_debounce_save_input(Number(p1__64218_SHARP_.target.value),debounce_save_time_BANG_);
})], null)], null),(function (){var G__64219 = cljs.core.deref(debounce_save_time_BANG_);
switch (G__64219) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Athens will save and create a local backup after each edit."], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Athens will save and create a local backup ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(debounce_save_time_BANG_))," second after your last edit."].join('')], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Athens will save and create a local backup ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(debounce_save_time_BANG_))," seconds after your last edit."].join('')], null);

}
})()], null)], null)], null);
});
});

//# sourceMappingURL=athens.views.settings_page.js.map
