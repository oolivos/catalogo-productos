<template>
    <v-navigation-drawer app clipped
        v-model="drawer"
    >
        <v-list
            nav
        >
            <v-list-item-group
                active-class="deep-purple--text text--accent-4"
            >
                <v-list-item to="/pages/productos">
                    <v-list-item-title>
                        Productos
                    </v-list-item-title>
                </v-list-item>

                <v-list-item to="/pages/marcas">
                    <v-list-item-title>
                        Marcas
                    </v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Drawer",
    data () {
        return {
            drawer: true,
        }
    },
}
</script>

<style scoped>

</style>
