Vue.component("todo-main",{
   template:`
   <section class="main">
   <input id="toggle-all" class="toggle-all" type="checkbox">
   <label for="toggle-all">Mark all as complete</label>
   <ul class="todo-list">   
     <li :class="{completed:item.completed , editing:clickId==item.id }" 
     v-for="item in list" :key="item.id" @dblclick="showEdit(item.id)">
       <div class="view">
         <input class="toggle" type="checkbox" v-model="item.completed">
         <label>{{ item.name }}</label>
         <button class="destroy" @click="dellist(item.id)"></button>
       </div>
       <input class="edit" v-model="item.name" @keyup.enter="updateList">
     </li>   
   </ul>
 </section>   
   `,
   props:["list"],
   data(){
      return {
        clickId:-1
      }
   },
   methods:{
      dellist(id){    
         this.$emit("del",id)  // 由子元素触发，把 id 传给父元素的 id 
      },
      showEdit(id){
         this.clickId=id;
      },
      updateList(){
         this.clickId =-1;
      }
   }

   
})