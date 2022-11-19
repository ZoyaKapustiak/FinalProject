new Vue({el:"#app",data:{products:[],filtered:[],searchText:"",showCart:!1},components:{cart,products,filter_search},methods:{getJson(t){return fetch(t).then((t=>t.json())).catch((t=>{this.$refs.error.text=t}))},putJson(t,e){return fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).catch((t=>{this.$refs.error.text=t}))},postJson(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).catch((t=>{this.$refs.error.text=t}))},delJson(t,e){return fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).catch((t=>{this.$refs.error.text=t}))}},mounted(){}});