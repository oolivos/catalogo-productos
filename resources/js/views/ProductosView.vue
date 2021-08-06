<template>
    <div>
        <v-layout >
            <h1>Productos</h1>
            <v-spacer></v-spacer>
            <v-btn color="success" class="mr-1" @click="$refs.agregarProducto.open()" >
                Agregar
                <v-icon
                    right
                    dark
                >
                    mdi-plus
                </v-icon>
            </v-btn>
            <v-btn color="warning" class="mr-1" @click="getData" >
                Refrescar
                <v-icon
                    right
                    dark
                >
                    mdi-reload
                </v-icon>
            </v-btn>
        </v-layout>
        <v-data-table
            :headers="headers"
            :items="productos"
            :options.sync="pagination"
            :loading="loading"
            :server-items-length="pageCount"
            @update:page="getData"
            @update:items-per-page="getData"
            class="elevation-1"
            item-key="nombre"
        >
            <template v-slot:item.opciones="{item}">
                <v-btn fab icon @click="$refs.agregarProducto.open(item)">
                    <v-icon color="success">mdi-pencil</v-icon>
                </v-btn><v-btn fab icon @click="borrarProducto(item.id)">
                    <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
            </template>
            <template v-slot:top >
                <v-text-field
                    v-model="search"
                    label="Buscar..."
                    class="mx-4"
                    single-line
                    @keyup.enter="getData"
                    clearable
                    @click:clear="clearSearch"
                ></v-text-field>
            </template>
        </v-data-table>
    <AgregarProductoModal ref="agregarProducto" @reload="getData" ></AgregarProductoModal>
    </div>
</template>

<script>
import AgregarProductoModal from "../components/Modals/AgregarProductoModal";
export default {
    name: "Productos",
    components: {AgregarProductoModal},
    data () {
        return {
            search: '',
            pageCount: 0,
            pagination: {
                page: 1,
                itemsPerPage: 10,
                sortBy: [],
                sortDesc: [],
                groupBy: [],
                groupDesc: [],
                multiSort: false,
                mustSort: false
            },
            loading: false,
            headers: [
                { text: 'Nombre', value: 'nombre', sortable: false},
                { text: 'Talla', value: 'talla' },
                { text: 'Marca', value: 'marca.nombre' },
                { text: 'Cantidad', value: 'cantidad_inventario' },
                { text: 'F Embarque', value: 'fecha_embarque' },
                { text: 'Observaciones', value: 'observaciones' },
                { text: 'Opciones', value: 'opciones' },
            ],
            productos: [],
        }
    },
    methods: {
        getData() {
            this.loading = true
            const  search = this.search ? this.search : ''
            this.$http.get(`/productos?filter[search]=${search}&per_page=${this.pagination.itemsPerPage}&page=${this.pagination.page}`).then(result => {
                this.productos = result.data.data
                this.pageCount = result.data.total
                this.loading = false
            }).catch(error => {
                alert(error.response.data.message )
                this.loading = false
            })
        },
        borrarProducto(id){
            this.loading = true
            const  search = this.search ? this.search : ''
            this.$http.delete(`/productos/${id}`).then(result => {
                this.getData()
                this.loading = false
            }).catch(error => {
                alert(error.response.data.message )
                this.loading = false
            })
        },
        clearSearch(){
            this.search = ''
            this.getData()
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>

</style>

