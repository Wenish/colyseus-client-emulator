<template>
  <v-app dark>
    <!--<navigation-side v-if="$route.path != '/login'"/>-->
    <title-bar/>
    <content-container/>
  </v-app>
</template>

<script>
//import NavigationSide from "@/components/NavigationSide";
import TitleBar from "@/components/TitleBar";
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "colyseus-client-emulator",
  components: {
    //NavigationSide,
    ContentContainer,
    TitleBar
  }
};
</script>

<style>
/* CSS */
html,
body,
#app {
  min-height: 100%;
  height: 100%;
  overflow: hidden;
  background: #1f2529;
}
</style>
