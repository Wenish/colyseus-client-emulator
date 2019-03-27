<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs12>
        <p>Hello World</p>
        <v-list class="list">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="()=>{}"
          >
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="pink">star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
    </v-flex>
  </v-layout>
</template>
<script src="./PageHome.component.js"></script>
<style src="./PageHome.component.css" lang="css" scoped></style>