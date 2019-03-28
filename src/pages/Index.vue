<template>
  <q-page class="flex flex-center">
    <div>
      <div v-if="!client || !room">
        <q-input outlined v-model="serverUrl" label="Server Url" />
        <q-input outlined v-model="roomName" label="Room Name" />
        <q-btn color="blue" text-color="black" label="Join Room" @click="joinRoom"/>
      </div>
      
      <div v-if="client && room">
        <q-btn color="orange" text-color="black" label="Leave Room" @click="leaveRoom"/>
        <div>Client Hostname: {{client.hostname}}</div>
        <div>Room Name: {{room.name}}</div>
        <div>Client Id: {{client.id}}</div>
        <div>Session Id: {{room.sessionId}}</div>
        <br/>
        <q-input
          outlined
          v-model="msgPayload"
          filled
          rows="5"
          autogrow
          hint="needs to be a json string"
          type="textarea"
        />

        <q-btn color="green" text-color="black" label="Send Msg" @click="sendMsg"/>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import * as Colyseus from 'colyseus.js';
export default {
  name: 'PageIndex',
  data() {
    return {
      serverUrl: 'ws://localhost:8080',
      roomName: 'match',
      client: null,
      room: null,
      msgPayload: "{}"
    }
  },
  computed: {
    selectedClient: function () {
      return this.clients[this.selectedClientIndex]
    }
  },
  methods: {
    connectClient () {
      this.client = new Colyseus.Client(this.serverUrl)
      this.client.onOpen.add(function () {
        console.log("client connection open")
      });
    },
    joinRoom () {
      this.connectClient()

      this.room = this.client.join(this.roomName)

      this.room.onJoin.add(() => {
        console.log("joined", this.room.name)
        console.log(this.room.sessionId, "session")
      })
    },
    leaveRoom () {
      this.room.leave()
      this.client = null
      this.room = null
      console.log('leave room')
    },
    sendMsg () {
      var json = JSON.parse(this.msgPayload)
      console.log(json)
      this.room.send(json);
      console.log('send msg: ', this.msgPayload)
    }
  },
  beforeDestroy () {
    this.leaveRoom()
  }
}
</script>
