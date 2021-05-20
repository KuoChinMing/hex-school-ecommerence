(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15532934"],{"0940":function(t,e,r){t.exports=r.p+"img/credit-card1.77df3f5a.svg"},"2bfc":function(t,e,r){"use strict";var a=r("8ab4"),i=r.n(a);i.a},"4bd4":function(t,e,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b");var a=r("5530"),i=r("58df"),n=r("7e2b"),s=r("3206");e["a"]=Object(i["a"])(n["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=r(t)))})):a.valid=r(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"8ab4":function(t,e,r){},"8b3f":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{style:t.vuetifyVariables,attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"5"}},[a("validation-observer",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[a("v-card",{staticClass:"mb-5"},[a("v-card-title",[t._v("個人資料")]),a("v-card-text",[a("v-form",[a("v-container",[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("validation-provider",{attrs:{name:"E-mail",mode:"lazy",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("v-text-field",{attrs:{dense:"",outlined:"",disabled:t.creatingOrder,label:t.$t("email"),"error-messages":r},model:{value:t.customerInfo.email,callback:function(e){t.$set(t.customerInfo,"email",e)},expression:"customerInfo.email"}})]}}],null,!0)})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-text-field-with-validation",{attrs:{disabled:t.creatingOrder,rules:"required|numeric|min:10|max:13",label:"手機號碼",dense:"",outlined:""},model:{value:t.customerInfo.tel,callback:function(e){t.$set(t.customerInfo,"tel",e)},expression:"customerInfo.tel"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[a("v-text-field-with-validation",{attrs:{disabled:t.creatingOrder,rules:"required",label:"姓",dense:"",outlined:""},model:{value:t.customerFirstName,callback:function(e){t.customerFirstName=e},expression:"customerFirstName"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[a("v-text-field-with-validation",{attrs:{disabled:t.creatingOrder,rules:"required",label:"名",dense:"",outlined:""},model:{value:t.customerLastName,callback:function(e){t.customerLastName=e},expression:"customerLastName"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-text-field-with-validation",{attrs:{disabled:t.creatingOrder,rules:"required",label:"寄送地址",dense:"",outlined:""},model:{value:t.customerInfo.address,callback:function(e){t.$set(t.customerInfo,"address",e)},expression:"customerInfo.address"}})],1)],1)],1)],1)],1)],1),a("v-card",{staticClass:"mb-5"},[a("v-card-title",[t._v("付款方式")]),a("v-card-text",[a("v-form",[a("v-container",{staticClass:"py-0"},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{class:{"primary-border":"cash"===t.paymentMethod},attrs:{outlined:""},on:{click:function(e){return t.selectPaymentMethod("cash")}}},[a("v-card-text",[a("v-row",{staticClass:"my-2 flex-nowrap",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{staticClass:"mx-1",attrs:{width:"30",src:r("bcbc")}})],1)],1),a("p",{staticClass:"ma-0 text-center"},[t._v("貨到戶款")])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{class:{"primary-border":"creditCard"===t.paymentMethod},attrs:{outlined:""},on:{click:function(e){return t.selectPaymentMethod("creditCard")}}},[a("v-card-text",[a("v-row",{staticClass:"my-2 flex-nowrap",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{staticClass:"mx-1",attrs:{width:"30",src:r("0940")}})],1),a("v-col",{attrs:{cols:"auto"}},[a("v-img",{staticClass:"mx-1",attrs:{width:"30",src:r("a5df")}})],1),a("v-col",{attrs:{cols:"auto"}},[a("v-img",{staticClass:"mx-1",attrs:{width:"30",src:r("a49b")}})],1)],1),a("p",{staticClass:"ma-0 text-center"},[t._v("信用卡")])],1)],1)],1)],1),a("div",{staticClass:"mb-6"},["cash"===t.paymentMethod?a("div",[a("p",[t._v("貨到付款")]),a("p",[t._v("當司機抵達時請直接付款給司機")])]):"creditCard"===t.paymentMethod?a("v-row",[a("v-col",{staticClass:"py-0"},[a("p",[t._v("信用卡")])]),a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-text-field-with-validation",{attrs:{disabled:t.creatingOrder,rules:"required",label:"持卡人姓名",dense:"",outlined:""}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-text-field-with-validation",{attrs:{disabled:t.creatingOrder,rules:"required|numeric|min:16|max:19",label:"信用卡號碼",dense:"",outlined:""}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[a("v-text-field-with-validation",{attrs:{disabled:t.creatingOrder,rules:"required|MM/DD",label:"到期日",dense:"",outlined:""}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[a("v-text-field-with-validation",{attrs:{disabled:t.creatingOrder,rules:"required|digits:3",label:"CVC",dense:"",outlined:""}})],1)],1):t._e()],1),a("p",{staticClass:"font-weight-medium cursor-pointer d-inline-block mb-0",class:{"primary--text":!t.messageOfappliedCouponSuccessful},on:{click:t.openApplyCouponDialog}},[t._v(" 您有優惠券嗎？ ")]),a("span",{staticClass:"d-block",class:{"primary--text":t.messageOfAppliedCoupon}},[t._v(" "+t._s(t.messageOfappliedCouponSuccessful)+" ")])],1)],1)],1)],1),a("v-btn",{attrs:{large:"",color:"primary",width:"100%",disabled:t.creatingOrder||t.productAmount<=0,loading:t.creatingOrder},on:{click:function(e){return i(t.createOrder)}}},[t._v("完成並付款")])]}}])})],1),a("v-col",{attrs:{cols:"7"}},[a("v-card",[a("v-data-table",{attrs:{headers:t.headers,loading:t.cartLoading,items:t.shoppingCartProducts,"hide-default-footer":"","items-per-page":t.productAmount},scopedSlots:t._u([{key:"item.qty",fn:function(e){var r=e.item;return[a("span",{staticClass:"text-end d-block"},[t._v(t._s(r.qty))])]}},{key:"item.product.price",fn:function(e){var r=e.item;return[a("span",{staticClass:"text-end d-block"},[t._v(" "+t._s(t.$n(r.product.price,"currency"))+" ")])]}},{key:"item.total",fn:function(e){var r=e.item;return[a("span",{staticClass:"text-end d-block"},[t._v(" "+t._s(t.$n(r.total,"currency"))+" ")])]}},{key:"item.actions",fn:function(e){var r=e.item;return[a("v-icon",{attrs:{color:"error"},on:{click:function(e){return e.stopPropagation(),t.openDeleteDialog(r)}}},[t._v(" mdi-trash-can-outline ")])]}},{key:"footer",fn:function(){return[a("v-divider"),a("v-container",[a("v-row",[a("v-col",{staticClass:"pa-4 text-right"},[a("p",{staticClass:"mb-0"},[a("span",{staticClass:"d-inline-block",staticStyle:{width:"60px"}},[t._v("小計:")]),a("span",{staticClass:"d-inline-block text-right",staticStyle:{"min-width":"80px"}},[t._v(" "+t._s(t.$n(t.totalPrice,"currency"))+" ")])]),t.finalPrice!==t.totalPrice?a("p",{staticClass:"mb-0"},[a("span",{staticClass:"d-inline-block",staticStyle:{width:"60px"}},[t._v("折扣:")]),a("span",{staticClass:"d-inline-block text-right",staticStyle:{"min-width":"80px"}},[t._v(" "+t._s(t.$n(t.finalPrice-t.totalPrice,"currency"))+" ")])]):t._e(),t.finalPrice!==t.totalPrice?a("p",{staticClass:"mb-0"},[a("span",{staticClass:"d-inline-block",staticStyle:{width:"60px"}},[t._v("總計:")]),a("span",{staticClass:"d-inline-block text-right",staticStyle:{"min-width":"80px"}},[t._v(" "+t._s(t.$n(Math.floor(t.finalPrice),"currency"))+" ")])]):t._e()])],1)],1)]},proxy:!0}])})],1)],1)],1),a("v-dialog",{attrs:{width:"300",persistent:t.applyingCoupon},model:{value:t.isApplyCouponDialogOpen,callback:function(e){t.isApplyCouponDialogOpen=e},expression:"isApplyCouponDialogOpen"}},[a("v-card",[a("validation-observer",{ref:"couponCodeForm",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[a("v-toolbar",{attrs:{dense:"",flat:"",color:"primary",dark:""}},[a("v-card-title",[t._v("輸入優惠券")]),a("v-spacer"),a("v-icon",{attrs:{disabled:t.applyingCoupon},on:{click:t.closeApplyCouponDialog}},[t._v("mdi-close")])],1),a("v-card-text",{staticClass:"pt-6 pb-0"},[a("validation-provider",{attrs:{vid:"couponCode",name:"couponCode"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("v-text-field",{attrs:{dense:"",outlined:"",label:"優惠券代碼","error-messages":r,disabled:t.creatingOrder},model:{value:t.couponCode,callback:function(e){t.couponCode=e},expression:"couponCode"}})]}}],null,!0)})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{outlined:"",disabled:t.applyingCoupon},on:{click:t.closeApplyCouponDialog}},[t._v("取消")]),a("v-btn",{attrs:{depressed:"",color:"primary",disabled:t.creatingOrder||t.applyingCoupon||t.productAmount<=0||!t.couponCode,loading:t.applyingCoupon},on:{click:function(e){return r(t.applyCoupon)}}},[t._v("提交")])],1)]}}])})],1)],1),a("v-dialog",{attrs:{width:"280",persistent:t.deletingShoppingCartItem},model:{value:t.isDeleteOrderDialogOpen,callback:function(e){t.isDeleteOrderDialogOpen=e},expression:"isDeleteOrderDialogOpen"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",flat:"",color:"error",dark:""}},[a("v-spacer"),a("v-icon",{attrs:{disabled:t.deletingShoppingCartItem},on:{click:t.closeDeleteDialog}},[t._v("mdi-close")])],1),a("v-card-text",{staticClass:"py-6"},[a("span",{staticClass:"subtitle-1"},[t._v(" 確定要刪除品項 "),a("span",{staticClass:"error--text"},[t._v(t._s(t.focusedOrder.product.title))]),t._v(" 嗎? ")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{outlined:"",disabled:t.deletingShoppingCartItem},on:{click:t.closeDeleteDialog}},[t._v("否")]),a("v-btn",{attrs:{depressed:"",color:"error",disabled:t.deletingShoppingCartItem,loading:t.deletingShoppingCartItem},on:{click:t.deleteShoppingCartItem}},[t._v("是")])],1)],1)],1)],1)},i=[],n=(r("99af"),r("5530")),s=(r("96cf"),r("1da1")),o={data:function(){return{focusedOrder:{product:{}},paymentMethod:"creditCard",cartLoading:!1,isDeleteOrderDialogOpen:!1,isApplyCouponDialogOpen:!1,deletingShoppingCartItem:!1,messageOfappliedCouponSuccessful:"",applyingCoupon:!1,creatingOrder:!1,couponCode:"",customerFirstName:"",customerLastName:"",customerInfo:{}}},computed:{vuetifyVariables:function(){return{"--primary-color":this.$vuetify.theme.themes.light.primary}},headers:function(){return[{text:"品名",value:"product.title",width:60},{text:"數量",value:"qty",width:30},{text:"單價",value:"product.price",width:30},{text:"小計",value:"total",width:30},{text:"",value:"actions",width:20,align:"center"}]},productAmount:function(){var t;return(null===(t=this.$store.state.cart.carts)||void 0===t?void 0:t.length)||0},appliedCoupon:function(){var t;return null===(t=this.$store.state.cart.carts)||void 0===t?void 0:t[0].coupon},shoppingCartProducts:function(){return this.$store.state.cart.carts},totalPrice:function(){return this.$store.state.cart.total||0},finalPrice:function(){return this.$store.state.cart.final_total||0},messageOfAppliedCoupon:function(){return this.$store.state.messageOfAppliedCoupon},isAppliedCouponSuccessful:function(){return this.$store.state.isAppliedCouponSuccessful}},methods:{applyCoupon:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.applyingCoupon=!0,e.next=3,t.$store.dispatch("applyCoupon",t.couponCode);case 3:if(t.applyingCoupon=!1,console.log(t.isAppliedCouponSuccessful),t.isAppliedCouponSuccessful){e.next=9;break}t.$refs.couponCodeForm.setErrors({couponCode:t.messageOfAppliedCoupon}),e.next=13;break;case 9:return t.messageOfappliedCouponSuccessful=t.messageOfAppliedCoupon,e.next=12,t.getCart();case 12:t.closeApplyCouponDialog();case 13:case"end":return e.stop()}}),e)})))()},openApplyCouponDialog:function(){this.couponCode="",this.isApplyCouponDialogOpen=!0},closeApplyCouponDialog:function(){this.isApplyCouponDialogOpen=!1},selectPaymentMethod:function(t){this.paymentMethod=t},resetUI:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCart();case 2:t.customerInfo={},t.customerFirstName="",t.customerLastName="",t.couponCode="",t.paymentMethod="",t.$refs.form.reset();case 8:case"end":return e.stop()}}),e)})))()},createOrder:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={user:Object(n["a"])({name:"".concat(t.customerFirstName," ").concat(t.customerLastName)},t.customerInfo)},e.prev=1,t.creatingOrder=!0,e.next=5,t.$store.dispatch("createOrder",r);case 5:return e.next=7,t.resetUI();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log("付款失敗, Error: ",e.t0);case 12:return e.prev=12,t.creatingOrder=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))()},openDeleteDialog:function(t){this.focusedOrder=t,this.isDeleteOrderDialogOpen=!0},closeDeleteDialog:function(){this.isDeleteOrderDialogOpen=!1},deleteShoppingCartItem:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.deletingShoppingCartItem=!0,e.next=3,t.$store.dispatch("deleteShoppingCartItem",t.focusedOrder.id);case 3:t.deletingShoppingCartItem=!1,t.closeDeleteDialog(),t.getCart();case 6:case"end":return e.stop()}}),e)})))()},getCart:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cartLoading=!0,e.next=3,t.$store.dispatch("getCart");case 3:t.cartLoading=!1;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCart();case 2:console.log(t.$store.state.cart);case 3:case"end":return e.stop()}}),e)})))()}},c=o,l=(r("2bfc"),r("2877")),u=r("6544"),d=r.n(u),p=r("8336"),f=r("b0af"),v=r("99d9"),m=r("62ad"),h=r("a523"),g=r("8fea"),C=r("169a"),b=r("ce7e"),y=r("4bd4"),x=r("132d"),w=r("adda"),_=r("0fd9"),O=r("2fa4"),k=r("8654"),D=r("71d9"),S=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=S.exports;d()(S,{VBtn:p["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:m["a"],VContainer:h["a"],VDataTable:g["a"],VDialog:C["a"],VDivider:b["a"],VForm:y["a"],VIcon:x["a"],VImg:w["a"],VRow:_["a"],VSpacer:O["a"],VTextField:k["a"],VToolbar:D["a"]})},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c}));var a=r("b0af"),i=r("80d2"),n=Object(i["i"])("v-card__actions"),s=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),c=Object(i["i"])("v-card__title");a["a"]},a49b:function(t,e,r){t.exports=r.p+"img/credit-card3.fb8fad07.svg"},a5df:function(t,e,r){t.exports=r.p+"img/credit-card2.f36b09ef.svg"},bcbc:function(t,e,r){t.exports=r.p+"img/cash.3b379e27.svg"}}]);
//# sourceMappingURL=chunk-15532934.c4febc6a.js.map