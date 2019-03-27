<template>
  <v-layout align-center justify-center row fill-height>
    <div>
      <div v-if="!client || !room">
        <v-text-field label="Server Url" v-model="serverUrl"></v-text-field>
        <v-text-field label="Room Name" v-model="roomName"></v-text-field>
        <v-btn color="info" @click="joinRoom">Join Room</v-btn>
      </div>
      
      <div v-if="client && room">
        <v-btn color="warning" @click="leaveRoom" v-if="client && room">Leave Room</v-btn>
        <div>Client Hostname: {{client.hostname}}</div>
        <div>Client Id: {{client.id}}</div>
        <div>Room Name: {{room.name}}</div>
        <div>Session Id: {{room.sessionId}}</div>
      </div>
    </div>
  </v-layout>
</template>
<script src="./PageHome.component.js"></script>
<style src="./PageHome.component.css" lang="css" scoped></style>