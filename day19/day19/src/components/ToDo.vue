<script>
import axios from "axios";
export default {
  data() {
    return {
      infos: [],
      input: ""
    };
  },
  //mounted = $(document).ready()
  mounted() {
    //used axios for REST call
    axios.get("http://localhost:8080/todos").then((response) => {
      console.log(response);
      this.infos = response.data.data.todos;
    });
  },
  methods: {
    addToDo(event) {
      // console.log(this.input);
      axios.post("http://localhost:8080/todos", {message: this.input})
    .then(response => {
     this.infos.push({
       id: response.data.data.id,
       message: response.data.data.message
     })
     

    });
    },
    removeToDo(index,id){
      axios.delete("http://localhost:8080/todos/" + id).then((response) => {  
          this.infos.splice(index,1);   
    });
    }
  },
};
</script>


<template>
  <div class="todo">
    <h4>This is my vue test for kareadsadasdasdasdsadasdasdas</h4>
    <input type="text" v-model="input"/>
    <button @click="addToDo">Button</button>
    <ul>
      <li v-for="(info, index) in infos" :key="info.id">
        {{ info.message }}
        <button @click="removeToDo(index,info.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
