(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{292:function(t,e,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(68).default)("7b89b854",content,!0,{sourceMap:!1})},312:function(t,e,o){"use strict";o(292)},313:function(t,e,o){var n=o(67)(!1);n.push([t.i,".yesIcon[data-v-78788da6]{padding:8px 16px;font-size:28px;border-radius:50%;background-color:green;color:#fff}.deskLink[data-v-78788da6]{text-decoration:none;color:#9a2cfb}.success[data-v-78788da6]{font-size:20px;color:#fff;margin-top:20px;margin-bottom:15px}.successDiv[data-v-78788da6]{text-align:center;position:relative;top:50%;left:50%;transform:translate(-50%,-50%)}.heading[data-v-78788da6]{text-align:center;color:#fff;font-size:18px;font-weight:600;margin-bottom:12px}.container[data-v-78788da6]{padding:10px 20px;height:220px;width:100%;border:1px solid #fff;border-radius:10px;margin-bottom:10px;position:relative}.container>button[data-v-78788da6]{color:#26261e;background-color:#fff;border:1px solid #fff;font-weight:600;cursor:pointer;display:block;margin:20px auto 0}.duration[data-v-78788da6]{display:flex}.duration[data-v-78788da6],.p[data-v-78788da6]{color:#fff;font-size:13px;margin-bottom:12px}",""]),t.exports=n},333:function(t,e,o){"use strict";o.r(e);o(110),o(137),o(85);var n={data:function(){return{selectedDuration:"1",deskRented:!1}},computed:{desk:function(){return this.$store.state.desks.selectedDeskToRent},location:function(){return console.log(this.desk),"Room ".concat(this.$route.params.roomId," -> Desk ").concat(this.desk._id)},amount:function(){return Number(this.desk.price)*Number(this.selectedDuration)},currentUser:function(){return this.$store.state.currentUser}},methods:{click:function(t){this.amountT=Number(this.desk.price)*Number(t.target.value)},rentDeskHandler:function(t){var e=this;this.$store.commit("desks/rentDesk",[this.desk._id,this.currentUser.email,this.selectedDuration]),this.$store.commit("rooms/rentDesk",[this.desk.roomId,this.desk._id]),this.$store.commit("addRentedDesk",this.desk._id),this.deskRented=!0,setInterval((function(){e.deskRented=!1}),300)}}},r=(o(312),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t.deskRented||t.desk.isTaken?o("div",{staticClass:"successDiv"},[t._m(0),t._v(" "),o("p",{staticClass:"success"},[t._v("Desk rented successfully!")]),t._v(" "),o("NuxtLink",{staticClass:"deskLink",attrs:{to:"desks/"+t.desk._id}},[t._v("See desk")])],1):o("div",[o("h3",{staticClass:"heading"},[t._v("Rent Desk")]),t._v(" "),o("p",{staticClass:"p"},[t._v("Location: "+t._s(t.location))]),t._v(" "),o("p",{staticClass:"p"},[t._v("Size: "+t._s(t.desk.size))]),t._v(" "),o("p",{staticClass:"p"},[t._v("Position: "+t._s(t.desk.position))]),t._v(" "),o("div",{staticClass:"duration"},[o("p",[t._v("Duration:")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDuration,expression:"selectedDuration"}],attrs:{name:"",id:""},on:{click:t.click,change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedDuration=e.target.multiple?o:o[0]}}},[o("option",{attrs:{selected:"",disabled:"",value:"0"}},[t._v("Select duration")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("1 week")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("2 weeks")]),t._v(" "),o("option",{attrs:{value:"3"}},[t._v("3 weeks")]),t._v(" "),o("option",{attrs:{value:"4"}},[t._v("4 weeks")])])]),t._v(" "),o("p",{staticClass:"p"},[t._v("Amount to pay: $"+t._s(t.amount))]),t._v(" "),o("button",{on:{click:t.rentDeskHandler}},[t._v("Rent Desk")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"yesIcon"},[e("i",{staticClass:"fa-solid fa-check"})])}],!1,null,"78788da6",null);e.default=component.exports}}]);