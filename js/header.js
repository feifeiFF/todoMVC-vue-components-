Vue.component("todo-header",{
   template:`
   <header class="header">
     <h1>todos</h1>
     <input class="new-todo" 
      v-model="todoName"
      placeholder= "what do you to do something ?"
     autofocus @keyup.enter="addTodo">
   </header>   
   `,
   data(){
      return {
        todoName:""
      }
   },
   methods:{     
    addTodo(){
        this.$emit("add",this.todoName)
        this.todoName=""
      }
   }
})