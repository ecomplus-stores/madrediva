(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{252:function(t,e,a){"use strict";var i={name:"ItemCustomizations",props:{item:{type:Object,required:!0}}},r=a(43),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item.customizations&&t.item.customizations.length?a("div",{staticClass:"item-customizations small"},t._l(t.item.customizations,(function(e){var i=e._id,r=e.label,s=e.option;return a("div",{key:"cs-"+i},[a("span",{staticClass:"text-muted"},[t._v(" "+t._s(r)+": ")]),t._v(" "+t._s(s.text)+" ")])})),0):t._e()}),[],!1,null,null,null);e.a=s.exports},257:function(t,e,a){var i=a(268);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(173).default)("1c98343a",i,!0,{})},267:function(t,e,a){"use strict";a(257)},268:function(t,e,a){(e=a(172)(!0)).push([t.i,".summary__item{align-items:flex-start;display:flex;margin-bottom:.5rem;overflow-x:hidden}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;height:auto;margin-right:.5rem;width:70px}.summary__item picture img{border-radius:var(--border-radius)}.summary__item small{display:inline-block;line-height:1.3}.summary__amount{border-top:1px dotted var(--gray);margin:1rem 0 1.5rem;padding:.75rem 0}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{align-items:center;display:flex;justify-content:space-between;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{color:var(--gray);display:block;line-height:1.15}.summary__amount__row--total{font-size:1.25rem;margin-top:.5rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}","",{version:3,sources:["EcSummary.scss"],names:[],mappings:"AAAA,eAAe,sBAAsB,CAAC,YAAY,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,iBAAiB,aAAa,CAAC,uBAAuB,aAAa,CAAC,WAAW,CAAC,kBAAkB,CAAC,UAAU,CAAC,2BAA2B,kCAAkC,CAAC,qBAAqB,oBAAoB,CAAC,eAAe,CAAC,iBAAiB,iCAAiC,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,4BAA4B,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,kBAAkB,CAAC,YAAY,CAAC,6BAA6B,CAAC,iBAAiB,CAAC,2BAA2B,eAAe,CAAC,iCAAiC,iBAAiB,CAAC,aAAa,CAAC,gBAAgB,CAAC,6BAA6B,iBAAiB,CAAC,gBAAgB,CAAC,iCAAiC,eAAe,CAAC,oCAAoC,sBAAsB,CAAC,iBAAiB,gBAAgB",file:"EcSummary.scss",sourcesContent:[".summary__item{align-items:flex-start;display:flex;margin-bottom:.5rem;overflow-x:hidden}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;height:auto;margin-right:.5rem;width:70px}.summary__item picture img{border-radius:var(--border-radius)}.summary__item small{display:inline-block;line-height:1.3}.summary__amount{border-top:1px dotted var(--gray);margin:1rem 0 1.5rem;padding:.75rem 0}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{align-items:center;display:flex;justify-content:space-between;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{color:var(--gray);display:block;line-height:1.15}.summary__amount__row--total{font-size:1.25rem;margin-top:.5rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}"]}]),t.exports=e},274:function(t,e,a){"use strict";a(4);var i=a(24),r=a(34),s=a(71),n=a(36),o=a(2),l=a(26),d=a(6),c=a(51),_=a(243),u=a(275),m={name:"EcOrderInfo",components:{ShippingLine:_.a,EcSummary:u.a},props:{order:{type:Object,required:!0},isNew:Boolean,skipDataLoad:Boolean,skipFirstDataLoad:Boolean,skipCustomerUpdate:Boolean,accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"},ecomCart:{type:Object,default:()=>d.a},ecomPassport:{type:Object,default:()=>l.a},invoiceBaseLink:{type:String,default:"https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConteudo=7PhJ+gAVw2g=&tipoConsulta=resumo&nfe="}},data(){return{isLoaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order,canReopenOrder:!1,validThruTimer:null,validThruRemainingTime:null}},computed:{i19buyAgain:()=>Object(r.a)(i.A),i19cancelOrder:()=>Object(r.a)(i.G),i19codeCopied:()=>Object(r.a)(i.S),i19copyCode:()=>Object(r.a)(i.bb),i19copyErrorMsg:()=>Object(r.a)(i.cb),i19days:()=>Object(r.a)(i.gb),i19doPaymentMsg:()=>Object(r.a)(i.lb),i19expirationDate:()=>"Prazo de vencimento",i19freight:()=>Object(r.a)(i.Fb),i19login:()=>Object(r.a)(i.dc),i19loginForOrderDetailsMsg:()=>Object(r.a)(i.fc),i19myOrders:()=>Object(r.a)(i.pc),i19notes:()=>Object(r.a)(i.Ac),i19of:()=>Object(r.a)(i.Ec),i19orderConfirmationMsg:()=>Object(r.a)(i.Mc),i19orderNumber:()=>Object(r.a)(i.Oc),i19printBillet:()=>Object(r.a)(i.cd),i19redirectToPayment:()=>Object(r.a)(i.ld),i19referenceCode:()=>Object(r.a)(i.nd),i19reopenOrder:()=>Object(r.a)(i.ud),i19shippingAddress:()=>Object(r.a)(i.Qd),i19transactionCode:()=>Object(r.a)(i.fe),i19ticketCode:()=>Object(r.a)(i.ae),i19trackDelivery:()=>Object(r.a)(i.ee),i19unsubscribe:()=>Object(r.a)(i.ke),i19zipCode:()=>Object(r.a)(i.ve),i19invoice:()=>"Nota fiscal",localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},hasManyTransactions(){const{transactions:t}=this.localOrder;return t&&t.length>1},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},validThru(){const t=this.transaction.banking_billet||this.transaction.account_deposit;return t&&t.valid_thru},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},canShowShippingAddress(){const{localOrder:t,shippingAddress:e}=this;return!(!e||!e.street)&&!/(retira|pick\s?up|e-?mail)/i.test(t.shipping_method_label)},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){const e=t.transactions&&t.transactions.find((t=>"loyalty_points"!==t.payment_method.code));let a;if(t.payments_history.forEach((t=>{!t||e&&t.transaction_id&&t.transaction_id!==e._id||a&&t.date_time&&!(new Date(t.date_time).getTime()>=new Date(a.date_time).getTime())||(a=t)})),a)return a.status}const a=t.financial_status&&t.financial_status.current;return a||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null},statusEntries(){const t=[];let e=[];return["payments_history","fulfillments"].forEach((t=>{Array.isArray(this.localOrder[t])&&(e=e.concat(this.localOrder[t]))})),e.length&&(e=e=e.sort(((t,e)=>t.date_time&&e.date_time?new Date(t.date_time).getTime()>new Date(e.date_time).getTime()?-1:1:0)),e.forEach(((a,i)=>{i>0&&a.status===e[i-1].status||t.push(a)}))),t},isAuthenticated(){return this.ecomPassport.checkAuthorization()},isSubscription(){return this.localOrder.transactions&&this.localOrder.transactions.find((t=>{let{type:e}=t;return"recurrence"===e}))}},methods:{i19FinancialStatus:t=>Object(r.a)(i.a)[t],i19FulfillmentStatus:t=>Object(r.a)(i.b)[t],i19OrderStatus:t=>Object(r.a)(i.e)[t],formatMoney:s.a,formatDate:n.a,formatTime(t){const e=Date.parse(t);return new Date(e).toLocaleTimeString()},toClipboard(t){this.$copyText(t).then((()=>{this.$toast({title:this.i19codeCopied,body:t,variant:"success",delay:2e3})}),(e=>{console.error(e),this.$toast({title:"Oops",body:`${this.i19copyErrorMsg}: <i>${t}</i>`,variant:"warning",delay:3e3})}))},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&(t.transactions&&t.transactions.find((t=>"loyalty_points"===t.payment_method.code))&&e.setCustomer({loyalty_points_entries:[]}),e.requestApi("/me.json").then((a=>{let{data:i}=a;const r=i.orders?i.orders.slice(-300):[],s={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((e=>{t[e]&&(s[e]=t[e])}));const n=r.findIndex((e=>{let{_id:a,number:i}=e;return a===t._id||i===t.number}));n>-1?Object.assign(r[n],s):r.push(s),e.requestApi("/me.json","patch",{orders:r})})))},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;d.a.clear(),e.forEach(((t,a)=>{d.a.addItem(t,!1),a+1===e.length&&(d.a.save(),window.location=this.cartUrl)}))}},toggle(){this.isUpdating=!0;const t="cancelled"!==this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};l.a.requestApi(`/orders/${this.order._id}.json`,"patch",t).then((()=>{this.localOrder={...this.localOrder,...t}})).finally((()=>{this.isUpdating=!1}))}},watch:{isLoaded:{handler(t){if(t&&this.isAuthenticated&&"cancelled"===this.status){const{items:t}=this.localOrder;if(t&&t.length){const e=t.map((t=>t.product_id)),a=new c.a;a.setPageSize(e.length).setProductIds(e).fetch(!0).then((()=>{for(let e=0;e<t.length;e++){const i=t[e],r=a.getItems().find((t=>{let{_id:e}=t;return e===i.product_id}));if(r){if(i.variation_id&&r.variations){const t=r.variations.find((t=>{let{sku:e}=t;return e===i.sku}));if(t&&t.quantity>=i.quantity)continue}if(r.quantity>=i.quantity)continue}return void(this.canReopenOrder=!1)}this.canReopenOrder=!0})).catch(console.error)}}},immediate:!0}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t=`/orders/${this.order._id}.json`,e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(o.g)({url:t})).then((t=>{let{data:e}=t;this.localOrder={...this.localOrder,...e}})).catch((t=>{console.error(t)}));this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout((()=>{e().finally((()=>{this.isLoaded=!0}))}),this.isNew?1e3:3e3)}},mounted(){if(this.validThru){const t=new Date(this.validThru),e=Date.now();if(t.getTime()>e){let a;const r=864e5;Math.floor((t.getTime()-e)/r)>2?(a=new Date,a.setHours(23,59,59,999)):a=t;const s=t=>t<10?`0${t}`:t,n=()=>{const t=a.getTime()-Date.now(),e=Math.floor(t/r),n=Math.floor(t%r/36e5),o=Math.floor(t%36e5/6e4),l=Math.floor(t%6e4/1e3);return(e>0?`${s(e)} ${i.gb} - `:"")+`${s(n)}:${s(o)}:${s(l)}`};this.validThruTimer=setInterval((()=>{this.validThruRemainingTime=n()}),1e3)}}},beforeDestroy(){clearInterval(this.reloadInterval),this.validThruTimer&&clearInterval(this.validThruTimer)}},A=(a(361),a(43)),p=Object(A.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-info py-4"},[t.isNew?a("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),a("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.isLoaded?a("div",{key:"loaded"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 col-lg-3"},[a("h2",{staticClass:"order-info__number"},[a("small",[t._v(t._s(t.i19orderNumber)+":")]),t._v(" #"),a("span",[t._v(t._s(t.localOrder.number))])]),a("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast"}},[t.isUpdating||"cancelled"!==t.status?t._e():a("p",{staticClass:"order-info__cancelled h3"},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" "),a("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.canReopenOrder?a("button",{staticClass:"order-info__toggle btn",class:"cancelled"===t.status?"btn-success":"btn-secondary",on:{click:t.toggle}},[a("i",{staticClass:"i-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()])],1)]),t.statusEntries.length?a("ul",{staticClass:"order-info__timeline"},t._l(t.statusEntries,(function(e,i){return a("li",{key:"status-"+i,staticClass:"order-info__timeline-status",class:"order-info__timeline-status--"+e.status},[e.date_time?a("div",{staticClass:"order-info__timeline-date"},[t._v(" "+t._s(t.formatDate(e.date_time))+" "+t._s(t.formatTime(e.date_time))+" ")]):t._e(),t._v(" "+t._s(t.i19FinancialStatus(e.status)||t.i19FulfillmentStatus(e.status))+" ")])})),0):t._e(),t.accountOrdersUrl?a("a",{staticClass:"order-info__orders-link d-none d-md-block btn btn-light",attrs:{href:t.accountOrdersUrl}},[a("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1),a("div",{staticClass:"col-md-7 col-lg-9"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("article",[t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?a("div",{staticClass:"order-info__billet"},[a("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),t.transaction.banking_billet.code?[a("p",[t._v(" "+t._s(t.i19ticketCode)+": "),a("br"),a("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),a("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[a("i",{staticClass:"i-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?a("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[a("i",{staticClass:"i-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?a("div",{staticClass:"order-info__redirect"},[a("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),a("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[a("i",{staticClass:"i-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e(),t.validThruRemainingTime?a("div",{staticClass:"order-info__valid-thru mb-3 mt-3"},[t._v(" "+t._s(t.i19expirationDate)+" "),a("div",{staticClass:"ml-3 mb-0"},[a("strong",[t._v(t._s(t.validThruRemainingTime))])])]):t._e()]:t._e(),a("div",{staticClass:"order-info__details"},[t._t("payment",(function(){return[a("div",{staticClass:"order-info__payment card"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[a("i",{staticClass:"i-money-check mr-1"}),t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")])]),t._l(t.localOrder.transactions,(function(e){return a("div",{key:"t-"+e._id,staticClass:"card-body"},[a("p",{staticClass:"order-info__payment-value"},[e.payment_method.name?[t._v(" "+t._s(e.payment_method.name)+": ")]:t.localOrder.payment_method_label?[t._v(" "+t._s(t.localOrder.payment_method_label)+": ")]:t._e(),e.installments&&e.installments.value?a("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):a("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")]),t.hasManyTransactions&&e.status?[a("br"),a("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19FinancialStatus(e.status.current))+" ")])]:t._e()],2),e.notes?a("p",{staticClass:"order-info__payment-notes alert alert-warning",attrs:{role:"alert"},domProps:{innerHTML:t._s(e.notes)}}):t._e(),e.credit_card?a("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?a("span",[e.credit_card.company?t._e():a("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?a("div",{staticClass:"order-info__transaction-code"},[a("small",[t._v(t._s(t.i19transactionCode))]),a("br"),a("code",[t._v(t._s(e.intermediator.transaction_code))]),a("br"),a("button",{staticClass:"btn btn-sm btn-light",on:{click:function(){return t.toClipboard(e.intermediator.transaction_code)}}},[a("i",{staticClass:"i-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]):t._e(),e.intermediator.transaction_reference?a("div",{staticClass:"order-info__transaction-reference"},[a("small",[t._v(t._s(t.i19referenceCode))]),a("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)]}),null,{order:t.localOrder,transaction:t.transaction,financialStatus:t.financialStatus}),t._t("shipping",(function(){return[a("div",{staticClass:"order-info__shipping"},[t._l(t.localOrder.shipping_lines,(function(e){return a("div",{key:"s-"+e._id,staticClass:"order-info__shipping-freight card"},[a("div",{staticClass:"card-header"},[t.fulfillmentStatus?a("span",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[a("i",{staticClass:"i-truck mr-1"}),t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):[a("i",{staticClass:"i-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]],2),a("div",{staticClass:"card-body"},[e.app?a("span",[t._v(" "+t._s(e.app.label)+" ")]):t._e(),a("shipping-line",{attrs:{"shipping-line":e}}),e.tracking_codes?a("div",{staticClass:"order-info__shipping-tracking"},[a("hr"),a("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19trackDelivery)+": ")]),t._l(e.tracking_codes,(function(e,i){return a("samp",{key:"track-"+i},[e.link?a("a",{attrs:{href:""+e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):a("span",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e(),a("div",{staticClass:"order-info__shipping-nfe",attrs:{if:"shippingLine.invoices"}},[a("hr"),t._l(e.invoices,(function(e,i){return e.link||e.access_key?a("samp",{key:"invoice-"+i},[a("a",{attrs:{href:""+(e.link||""+(t.invoiceBaseLink+e.access_key)),target:"_blank"}},[t._v(" "+t._s(t.i19invoice)+" ")])]):t._e()}))],2)],1)])})),t.canShowShippingAddress?a("div",{staticClass:"order-info__shipping-address card"},[a("div",{staticClass:"card-header"},[a("i",{staticClass:"i-map-marked mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),a("address",{staticClass:"card-body mb-0"},[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t.shippingAddress.complement?[t._v(" , "+t._s(t.shippingAddress.complement)+" ")]:t._e(),t.shippingAddress.near_to?[a("br"),t._v(t._s(t.shippingAddress.near_to)+" ")]:t._e(),a("br"),t._l(["borough","city","province_code"],(function(e,i){return t.shippingAddress[e]?a("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===i?".":","))+" ")]):t._e()})),a("br"),a("span",[t._v(" "+t._s(t.i19zipCode)+": "),a("samp",[t._v(t._s(t.shippingAddress.zip))])])],2)]):t._e()],2)]}),null,{order:t.localOrder,shippingAddress:t.shippingAddress,fulfillmentStatus:t.fulfillmentStatus}),t._t("notes",(function(){return[t.localOrder.notes?a("div",{staticClass:"order-info__notes card"},[a("div",{staticClass:"card-header"},[a("span",[t._v(" "+t._s(t.i19notes)+" ")])]),a("div",{staticClass:"card-body"},[a("span",[t._v(" "+t._s(t.localOrder.notes)+" ")])])]):t._e()]}),null,{order:t.localOrder})],2),t.isAuthenticated?t._e():a("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19loginForOrderDetailsMsg)+" "),a("br"),a("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.accountOrdersUrl}},[a("i",{staticClass:"i-user mr-1"}),t._v(" "+t._s(t.i19login)+" ")])])],2)]),t.localOrder.amount?a("div",{staticClass:"col-lg-6 order-info__right"},[a("div",{staticClass:"order-info__summary card"},[a("div",{staticClass:"card-body"},[a("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0]||t.ecomPassport.getCustomer(),shippingAddress:t.shippingAddress}})],1)]),t.isSubscription&&"cancelled"!==t.status?t._t("unsubscribe",(function(){return[a("button",{staticClass:"order-info__unsubscribe btn btn-outline-danger",attrs:{type:"button"},on:{click:t.toggle}},[a("i",{staticClass:"i-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19unsubscribe)+" ")])]})):[t._t("buy",(function(){return[a("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[a("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])]})),t.isUpdating||"open"!==t.status||t.fulfillmentStatus?t._e():a("button",{staticClass:"order-info__toggle btn btn-sm btn-danger",style:t.isNew?"display: none":null,on:{click:t.toggle}},[a("i",{staticClass:"i-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")])]],2):t._e()])])])]):a("div",{key:"loading"},[a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?a("a",{staticClass:"order-info__orders-link d-md-none btn btn-light",attrs:{href:t.accountOrdersUrl}},[a("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=p.exports},275:function(t,e,a){"use strict";var i=a(24),r=a(34),s=a(88),n=a(21),o=a(27),l=a(71),d=a(86),c=a(186),_=a(189),u=a(188),m=a(252),A={name:"EcSummary",components:{ALink:c.a,APicture:_.a,APrices:u.a,ItemCustomizations:m.a},props:{amount:{type:Object,required:!0},items:Array,buyer:Object,shippingAddress:Object,canShowPriceOptions:Boolean,paidInAdvance:{type:Number,default:0}},computed:{i19balanceOrPoints:()=>Object(r.a)(i.u),i19buyer:()=>Object(r.a)(i.D),i19contactPhone:()=>Object(r.a)(i.X),i19discount:()=>Object(r.a)(i.ib),i19docNumber:()=>Object(r.a)(i.mb),i19freebie:()=>Object(r.a)(i.Eb),i19freight:()=>Object(r.a)(i.Fb),i19myAccount:()=>Object(r.a)(i.nc),i19subtotal:()=>Object(r.a)(i.Yd),i19summary:()=>Object(r.a)(i.Zd),i19toPay:()=>Object(r.a)(i.ce),i19total:()=>Object(r.a)(i.de),amountToPay(){return this.amount.total-this.paidInAdvance},buyerName(){if(!this.buyer||!this.buyer.name)return"";const{name:t}=this.buyer;return`${t.given_name} ${t.middle_name||""} ${t.family_name}`},buyerPhone(){return Object(s.a)(this.buyer)}},methods:{getName:n.a,getPrice:o.a,formatMoney:l.a,getImg:t=>Object(d.a)(t,null,"small")}},p=(a(267),a(43)),f=Object(p.a)(A,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"summary"},[a("h5",{staticClass:"summary__title"},[t._v(" "+t._s(t.i19summary)+" ")]),t._t("list",(function(){return[t.items?a("div",{staticClass:"summary__list"},t._l(t.items,(function(e){return e.quantity>0?a("div",{key:e._id,staticClass:"summary__item"},[t.getImg(e)?a("a-picture",{attrs:{src:t.getImg(e).url,alt:t.getImg(e).alt||e.name}}):t._e(),a("div",[a("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(e.quantity)+" ")]),Array.isArray(e.flags)&&e.flags.includes("freebie")?[a("s",[t._v(t._s(t.formatMoney(t.getPrice(e))))]),a("small",{staticClass:"text-muted"},[a("i",{staticClass:"i-gift ml-2 mr-1"}),t._v(" "+t._s(t.i19freebie)+" ")])]:[t._v(" "+t._s(t.formatMoney(t.getPrice(e)))+" ")],a("br"),e.slug?a("a-link",{attrs:{href:"/"+e.slug,target:"_blank"}},[a("small",[t._v(t._s(t.getName(e)))])]):a("small",[t._v(" "+t._s(t.getName(e))+" ")]),a("item-customizations",{attrs:{item:e}})],2)],1):t._e()})),0):t._e()]})),t._t("more-offers"),t._t("amount",(function(){return[a("div",{staticClass:"summary__amount"},[a("div",{staticClass:"summary__amount__row",attrs:{"data-subtotal":t.amount.subtotal.toFixed(2)}},[a("span",[t._v(t._s(t.i19subtotal))]),a("div",[t._v(t._s(t.formatMoney(t.amount.subtotal)))])]),a("div",{staticClass:"summary__amount__row",attrs:{"data-freight":t.amount.freight.toFixed(2)}},[a("span",[t._v(" "+t._s(t.i19freight)+" "),t.shippingAddress?a("small",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t._v(" "+t._s(t.shippingAddress.city)+" "+t._s(t.shippingAddress.province_code)+" ")],2):t._e()]),a("div",[t._v(t._s(t.formatMoney(t.amount.freight)))])]),t.amount.discount?a("div",{staticClass:"summary__amount__row",attrs:{"data-discount":t.amount.discount.toFixed(2)}},[a("span",[t._v(t._s(t.i19discount))]),a("div",[t._v(t._s(t.formatMoney(t.amount.discount)))])]):t._e(),t.amount.balance?a("div",{staticClass:"summary__amount__row",attrs:{"data-balance":t.amount.balance.toFixed(2)}},[a("span",[t._v(t._s(t.i19balanceOrPoints))]),a("div",[t._v(t._s(t.formatMoney(t.amount.balance)))])]):t._e(),t.paidInAdvance>0?a("div",{staticClass:"summary__amount__row"},[a("span",[t._v(t._s(t.i19total))]),a("div",[t._v(t._s(t.formatMoney(t.amount.total)))])]):t._e(),t._t("amount-custom"),a("div",{staticClass:"summary__amount__row summary__amount__row--total",attrs:{"data-total":t.amountToPay.toFixed(2)}},[a("span",[t._v(t._s(t.paidInAdvance?t.i19toPay:t.i19total))]),a("a-prices",{attrs:{product:{price:t.amountToPay},"discount-option":{value:t.amount.discount},"is-literal":!0,"is-amount-total":!0,"can-show-price-options":t.canShowPriceOptions}})],1)],2)]})),t._t("default"),t._t("buyer",(function(){return[t.buyer?a("div",{staticClass:"summary__buyer"},[a("h5",[t._v(t._s(t.i19buyer))]),a("p",[t._v(" "+t._s(t.buyerName)+" "),a("br"),a("small",[t._v(t._s(t.i19docNumber)+":")]),a("span",[t._v(t._s(t.buyer.doc_number))]),a("br"),a("small",[t._v(t._s(t.i19contactPhone)+":")]),a("span",[t._v(t._s(t.buyerPhone))]),a("br"),a("small",[t._v(t._s(t.buyer.main_email))])]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("click:account")}}},[a("i",{staticClass:"i-pencil mr-1"}),t._v(" "+t._s(t.i19myAccount)+" ")])]):t._e()]}))],2)}),[],!1,null,null,null);e.a=f.exports},299:function(t,e,a){var i=a(362);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(173).default)("4766a70e",i,!0,{})},361:function(t,e,a){"use strict";a(299)},362:function(t,e,a){(e=a(172)(!0)).push([t.i,".order-info__number{color:var(--secondary);font-weight:var(--font-light);margin-top:var(--spacer-2)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);display:block;font-size:var(--font-size-sm)}.order-info__timeline{display:flex;flex-wrap:nowrap;font-size:var(--font-size-sm);list-style:none;margin:var(--spacer-4) 0;overflow-x:auto;padding:0}@media(min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{border-color:var(--border-color);border-style:solid;border-width:0 0 5px;margin-right:var(--spacer-1);min-width:165px;padding:var(--spacer-2)}@media(min-width:768px){.order-info__timeline-status{border-bottom-width:0;border-left-width:5px;margin-bottom:var(--spacer-1);margin-right:0;min-width:0;padding-left:var(--spacer-3)}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{color:var(--text-muted);font-size:85%}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{color:var(--info);font-weight:var(--font-bold)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{font-size:var(--font-size-lg);margin-bottom:var(--spacer-5);text-align:center}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again{display:block;margin-left:auto;margin-right:auto;margin-top:var(--spacer-3)}.order-info__toggle,.order-info__unsubscribe{display:block;margin-left:auto;margin-top:var(--spacer-5)}.order-info__cancelled{color:var(--danger)}.order-info__valid-thru{background-color:var(--danger);border-radius:var(--border-radius);color:var(--danger-yiq);display:flex;line-height:1.2;max-width:310px;padding:var(--spacer-2);width:100%}","",{version:3,sources:["EcOrderInfo.scss"],names:[],mappings:"AAAA,oBAAoB,sBAAsB,CAAC,6BAA6B,CAAC,0BAA0B,CAAC,yBAAyB,4BAA4B,CAAC,0BAA0B,iBAAiB,CAAC,aAAa,CAAC,6BAA6B,CAAC,sBAAsB,YAAY,CAAC,gBAAgB,CAAC,6BAA6B,CAAC,eAAe,CAAC,wBAAwB,CAAC,eAAe,CAAC,SAAS,CAAC,wBAAwB,sBAAsB,aAAa,CAAC,CAAC,6BAA6B,gCAAgC,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,4BAA4B,CAAC,eAAe,CAAC,uBAAuB,CAAC,wBAAwB,6BAA6B,qBAAqB,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,cAAc,CAAC,WAAW,CAAC,4BAA4B,CAAC,CAAC,mFAAmF,2BAA2B,CAAC,sCAAsC,wBAAwB,CAAC,yHAAyH,0BAA0B,CAAC,2EAA2E,2BAA2B,CAAC,2BAA2B,uBAAuB,CAAC,aAAa,CAAC,uCAAuC,0BAA0B,CAAC,iFAAiF,6BAA6B,CAAC,8DAA8D,iBAAiB,CAAC,4BAA4B,CAAC,uCAAuC,oBAAoB,CAAC,8CAA8C,iBAAiB,CAAC,4HAA4H,mBAAmB,CAAC,gGAAgG,oBAAoB,CAAC,iBAAiB,6BAA6B,CAAC,6BAA6B,CAAC,iBAAiB,CAAC,yBAAyB,gBAAgB,CAAC,0BAA0B,CAAC,qBAAqB,uBAAuB,CAAC,6BAA6B,CAAC,uBAAuB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,0BAA0B,CAAC,6CAA6C,aAAa,CAAC,gBAAgB,CAAC,0BAA0B,CAAC,uBAAuB,mBAAmB,CAAC,wBAAwB,8BAA8B,CAAC,kCAAkC,CAAC,uBAAuB,CAAC,YAAY,CAAC,eAAe,CAAC,eAAe,CAAC,uBAAuB,CAAC,UAAU",file:"EcOrderInfo.scss",sourcesContent:[".order-info__number{color:var(--secondary);font-weight:var(--font-light);margin-top:var(--spacer-2)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);display:block;font-size:var(--font-size-sm)}.order-info__timeline{display:flex;flex-wrap:nowrap;font-size:var(--font-size-sm);list-style:none;margin:var(--spacer-4) 0;overflow-x:auto;padding:0}@media(min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{border-color:var(--border-color);border-style:solid;border-width:0 0 5px;margin-right:var(--spacer-1);min-width:165px;padding:var(--spacer-2)}@media(min-width:768px){.order-info__timeline-status{border-bottom-width:0;border-left-width:5px;margin-bottom:var(--spacer-1);margin-right:0;min-width:0;padding-left:var(--spacer-3)}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{color:var(--text-muted);font-size:85%}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{color:var(--info);font-weight:var(--font-bold)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{font-size:var(--font-size-lg);margin-bottom:var(--spacer-5);text-align:center}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again{display:block;margin-left:auto;margin-right:auto;margin-top:var(--spacer-3)}.order-info__toggle,.order-info__unsubscribe{display:block;margin-left:auto;margin-top:var(--spacer-5)}.order-info__cancelled{color:var(--danger)}.order-info__valid-thru{background-color:var(--danger);border-radius:var(--border-radius);color:var(--danger-yiq);display:flex;line-height:1.2;max-width:310px;padding:var(--spacer-2);width:100%}"]}]),t.exports=e}}]);