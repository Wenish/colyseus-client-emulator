import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'navigation-side',
  data () {
    return {
      drawer: true,
      items: [
        {
          title: '',
          icon: 'menu',
          click: this.toggleIsMini
        },
        {
          title: 'Home',
          icon: 'home',
          click: () => this.$router.push('home')
        },
        { 
          title: 'Settings',
          icon: 'settings',
          click: () => this.$router.push('settings')
        }
      ]
    }
  },
  computed: {
    getIsMini: () => true,
    //...mapGetters(['getIsMini'])
  },
  methods: {
    //...mapActions(['toggleIsMini'])
  }
}