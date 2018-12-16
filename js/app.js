let list = JSON.parse(localStorage.getItem("list"));
let vm = new Vue({
	 el:"#app",
	 data:{
     list:list||[]		
	 },
	 watch:{
		  list:{
				 handler(value){
					  localStorage.setItem("list",JSON.stringify(value));
				 },
				 deep:true
				}
	 },
	 methods:{
	 	dellist(id){
				let idx = this.list.findIndex(item => item.id == id )
			  this.list.splice(idx,1);
			},
	  addlist(name){
				this.list.unshift({
					id:+new Date, 
					name,
					completed:false
				}
				);
		 },
		 clearTodo(){
			 this.list= this.list.filter(item=>!item.completed)			 
		 } 
	 },


});