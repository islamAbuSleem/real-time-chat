<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name" >Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
 data(){
   return{
     name:null,
     feedback:null
   }
 },
 methods:{
   enterChat(){
     if(this.name){
       this.feedback = null;
      this.$router.push({name:"chat", params:{name:this.name}})
     }else{
       this.feedback = "you must enter a name"
     }
   }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .welcome{
   max-width:400px;
   margin-top:100px;
   h2{
     font-size:3em;
   }
   form{
     .btn{
       margin:30px auto;
     }
   }
 }
</style>
