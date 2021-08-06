<template>
    <div>
        <v-layout >
            <h1>Marcas</h1>
            <v-spacer></v-spacer>
            <v-btn color="success" class="mr-1" @click="$refs.agregarMarca.open()" >
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
            :items="marcas"
            :options.sync="pagination"
            :loading="loading"
            :server-items-length="pageCount"
            @update:page="getData"
            @update:items-per-page="getData"
            class="elevation-1"
            item-key="nombre"
        >
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
            <template v-slot:item.opciones="{item}">
                <v-btn fab icon @click="$refs.agregarMarca.open(item)">
                    <v-icon color="success">mdi-pencil</v-icon>
                </v-btn><v-btn fab icon @click="borrarMarca(item.id)">
                <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
            </template>
        </v-data-table>
    <AgregarMarcaModal ref="agregarMarca" @relaod="getData"></AgregarMarcaModal>
    </div>
</template>

<script>
import AgregarMarcaModal from "../components/Modals/AgregarMarcaModal";
export default {
    name: "Marcas",
    components: {AgregarMarcaModal},
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
                { text: 'Nombre', value: 'nombre', sortable: false, width: '70%'},
                { text: 'Referencia', value: 'referencia' },
                { text: 'Opciones', value: 'opciones' },
            ],
            marcas: []
        }
    },
    methods: {
        getData() {
            this.loading = true
            const  search = this.search ? this.search : ''
            this.$http.get(`/marcas?filter[search]=${search}&per_page=${this.pagination.itemsPerPage}&page=${this.pagination.page}`).then(result => {
                this.marcas = result.data.data
                this.pageCount = result.data.total
                this.loading = false
            }).catch(error => {
                alert(error.response.data.message )
                this.loading = false
            })
        },
        borrarMarca(id){
            this.loading = true
            const  search = this.search ? this.search : ''
            this.$http.delete(`/marcas/${id}`).then(result => {
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
    },

}
</script>

<style scoped>

</style>
