Vue.component("todo-footer", {
	template: `
    <footer class="footer" v-show="isShowfooter">
    <span class="todo-count"><strong>{{ leftcount }}</strong> item left</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" v-show="isShowClear" @click="cle">Clear completed</button>
  </footer>
   `,
	props: ["list"],
	computed: {
		leftcount() {
			return this.list.filter(item => !item.completed).length
		},
		isShowClear() {
			return this.list.some(item => item.completed)
    },
    isShowfooter(){
       return this.list.length>0
    }

	},
	methods: {
		cle() {
      console.log("删除已完成任务");
			this.$emit("clear");
		}
	}

});
