<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (Enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="red-text" v-if="feedback">{{this.feedback}}</p>
        </form>
        
    </div>
</template>

<script>
import firebase from "@/firebase/init"
export default {
    name: "new-message",
    props: ['name'],
    data(){
        return{
            newMessage:null,
            feedback:null
        }
    },
    methods:{
        addMessage(){
            if(this.newMessage){
                firebase.firestore().collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err);
                })
                this.feedback = null;
                this.newMessage = null;
            }else{
                this.feedback = "You must enter a message";
            }
        }
    }
}
</script>