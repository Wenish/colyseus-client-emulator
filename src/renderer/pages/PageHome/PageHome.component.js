 import * as Colyseus from 'colyseus.js';

export default {
  name: 'page-home',
  components: {},
  props: [],
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
  mounted() {

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