<template>
    <v-navigation-drawer
        :mini-variant.sync="getIsMini"
        v-model="drawer"
        hide-overlay
        stateless
        app
        clipped
        width="200"
        class="navigation-side"
    >
        <v-list>
            <v-list-tile
                v-for="item in items"
                :key="item.title"
                @click.stop="item.click"
                ripple
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script src="./NavigationSide.component.js"></script>
<style src="./NavigationSide.component.css" lang="css" scoped></style>