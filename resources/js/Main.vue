<template>
    <v-app>
        <NavBar ></NavBar>
        <Drawer></Drawer>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <v-footer app>
        </v-footer>
    </v-app>
</template>

<script>
import NavBar from "./components/navigation/NavBar";
import Drawer from "./components/navigation/Drawer";
export default {
    name: "Main",
    components: {Drawer, NavBar}
}
</script>

<style scoped>

</style>
