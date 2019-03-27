<template>
  <v-layout align-center justify-center row fill-height>
    <div>
      <div v-if="!client || !room">
        <v-text-field label="Server Url" v-model="serverUrl"></v-text-field>
        <v-text-field label="Room Name" v-model="roomName"></v-text-field>
        <v-btn color="info" @click="joinRoom">Join Room</v-btn>
      </div>
      
      <div v-if="client && room">
        <v-btn color="warning" @click="leaveRoom">Leave Room</v-btn>
        <div>Client Hostname: {{client.hostname}}</div>
        <div>Room Name: {{room.name}}</div>
        <div>Client Id: {{client.id}}</div>
        <div>Session Id: {{room.sessionId}}</div>
        <br/>
        <v-flex xs12>
        <v-textarea
          outline
          label="Message Payload"
          no-resize
          rows="5"
          hint="needs to be a json string"
          v-model="msgPayload"
        ></v-textarea>
        <v-btn @click="sendMsg">Send Msg</v-btn>
      </v-flex>
      </div>
    </div>
  </v-layout>
</template>
<script src="./PageHome.component.js"></script>
<style src="./PageHome.component.css" lang="css" scoped></style>