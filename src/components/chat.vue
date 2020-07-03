<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text chat-name">{{message.name}}</span>
            <span class="grey-text text-darken-3 chat-message">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <newMessage :name="name"></newMessage>
      </div>
    </div>
  </div>
</template>

<script>
import newMessage from "@/components/newMessage";
import firebase from "@/firebase/init";
import moment from "moment";

export default {
  name: "chat",
  props: ["name"],
  components: {
    newMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll")
          });
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.chat {
  h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  .card {
    .card-content {
      .messages {
        max-height: 300px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          width: 3px;
        }
        &::-webkit-scrollbar-track {
          background-color: #bbb;
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgb(145, 145, 145);
        }
        li {
          .chat-name,
          .chat-message {
            margin-right: 10px;
            font-size: 1.4em;
          }
          .time {
            display: block;
            font-size: 0.8em;
          }
        }
      }
    }
  }
}
</style>