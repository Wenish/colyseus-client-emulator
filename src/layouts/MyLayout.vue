<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <img alt="Colyseus Logo" style="height: 30px;" src="~assets/icons/icon-raw.svg">
        </q-btn>

        <q-toolbar-title>
          Colyseus Emulator
        </q-toolbar-title>

        <div>v1.1.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <!--
        <q-item clickable tag="a" target="_blank" href="http://v1.quasar-framework.org">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>v1.quasar-framework.org</q-item-label>
          </q-item-section>
        </q-item>
        -->
        <q-item clickable tag="a" target="_blank" href="https://github.com/wenish/colyseus-client-emulator">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/wenish/colyseus-client-emulator</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://discord.gg/eWcxKur">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>discord.gg/eWcxKur</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://discuss.colyseus.io/">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>discuss.colyseus.io/</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style scoped>
.header {
  background: rgba(0,188,212,1);
  background: -moz-linear-gradient(left, rgba(0,188,212,1) 0%, rgba(1,74,136,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,188,212,1)), color-stop(100%, rgba(1,74,136,1)));
  background: -webkit-linear-gradient(left, rgba(0,188,212,1) 0%, rgba(1,74,136,1) 100%);
  background: -o-linear-gradient(left, rgba(0,188,212,1) 0%, rgba(1,74,136,1) 100%);
  background: -ms-linear-gradient(left, rgba(0,188,212,1) 0%, rgba(1,74,136,1) 100%);
  background: linear-gradient(to right, rgba(0,188,212,1) 0%, rgba(1,74,136,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00bcd4', endColorstr='#014a88', GradientType=1 );
}
</style>
