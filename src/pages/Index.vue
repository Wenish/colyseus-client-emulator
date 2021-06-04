<template>
  <q-page class="flex flex-center bg-blue-grey-9 text-white">
    <div>
      <div v-if="!client || !room">
        <q-input outlined v-model="serverUrl" label="Server Url" dark />
        <q-input outlined v-model="roomName" label="Room Name" dark />
        <q-btn color="blue" text-color="black" label="Join Room" @click="joinRoom"/>
      </div>
      
      <div v-if="client && room">
        <q-btn color="orange" text-color="black" label="Leave Room" @click="leaveRoom"/>
        <div>Server Endpoint: <b>{{client.endpoint}}</b></div>
        <div>Room Name: <b>{{room.name}}</b></div>
        <div>Room Id: <b>{{room.id}}</b></div>
        <div>Session Id: <b>{{room.sessionId}}</b></div>
        <br/>
        <q-input
          dark
          outlined
          v-model="msgType"
          filled
          hint="needs to be string or number"
        />
        <q-input
          dark
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
      msgType: '0',
      msgPayload: "{}"
    }
  },
  methods: {
    connectClient () {
      this.client = new Colyseus.Client(this.serverUrl)
    },
    async joinRoom () {
      this.connectClient()

      this.room = await this.client.joinOrCreate(this.roomName)
      this.room.onMessage((message) => {
        console.log("message received from server");
        console.log(message);
      });
      console.log("joined", this.room.name)
      console.log(this.room.sessionId, "session")
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
      this.room.send(this.msgType, json);
      console.log('send msg: ', this.msgPayload)
    }
  },
  beforeDestroy () {
    this.leaveRoom()
  }
}
</script>
