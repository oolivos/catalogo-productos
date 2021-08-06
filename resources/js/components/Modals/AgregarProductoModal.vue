<template>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="960"
    >
        <v-form>
            <ValidatorObserver
                ref="obs"
                v-slot="{invalid }"
                style="width: 100%"
            >
                <v-card>
                    <v-card-title class="headline text-sm-left">
                        {{ producto && producto.id ? 'Editar ' : 'Agregar' }} Producto
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <Validator
                                        v-slot="{errors}"
                                        rules="required"
                                        name="Nombre"
                                        :immediate="true"
                                    >
                                        <v-text-field
                                            v-model="producto.nombre"
                                            label="Nombre"
                                            name="Nombre"
                                            :error-messages="errors"
                                        />
                                    </Validator>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <Validator
                                        v-slot="{errors}"
                                        rules="required"
                                        name="Marca"
                                        :immediate="true"
                                    >
                                        <v-select
                                            v-model="producto.marca_id"
                                            label="Marca"
                                            name="Marca"
                                            :items="marcas"
                                            item-text="nombre"
                                            item-value="id"
                                            :error-messages="errors"
                                        />
                                    </Validator>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                >
                                    <Validator
                                        v-slot="{errors}"
                                        rules="required"
                                        name="Talla"
                                        :immediate="true"
                                    >
                                        <v-select
                                            v-model="producto.talla"
                                            label="Talla"
                                            name="Talla"
                                            :items="tipoTallas"
                                            :error-messages="errors"
                                        />
                                    </Validator>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                >
                                    <Validator
                                        v-slot="{errors}"
                                        rules="required|numeric"
                                        name="Cantidad"
                                        :immediate="true"
                                    >
                                        <v-text-field
                                            v-model="producto.cantidad_inventario"
                                            label="Cantidad"
                                            name="Cantidad"
                                            :error-messages="errors"
                                        />
                                    </Validator>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                >
                                    <Validator
                                        v-slot="{errors}"
                                        rules="required"
                                        name="Fecha Embarque"
                                        :immediate="true"
                                    >
                                        <v-menu
                                            v-model="menuPicker"
                                            :close-on-content-click="false"
                                            :nudge-right="40"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="producto.fecha_embarque"
                                                    label="Fecha Embarque"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    name="Fecha Embarque"
                                                    :error-messages="errors"
                                                    v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="producto.fecha_embarque"
                                                @input="menuPicker = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </Validator>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="12"
                                >
                                    <v-textarea
                                        v-model="producto.observaciones"
                                        label="Observaciones"
                                        name="Observaciones"
                                    />
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            color="red darken-1"
                            :loading="loading"
                            text
                            @click="close()"
                        >
                            Cancelar
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            :loading="loading"
                            :disabled="loading || invalid"
                            text
                            @click="agregarProducto"
                        >
                            Agregar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </ValidatorObserver>
        </v-form>
    </v-dialog>
</template>

<script>
export default {
    name: "AgregarProductoModal",
    data () {
        return {
            loading: false,
            dialog: false,
            producto: {},
            tipoTallas: ['S', 'M', 'L'],
            date: null,
            menuPicker: null,
            marcas: []
        }
    },
    methods: {
        agregarProducto() {
            this.loading = true
            if(this.producto.id){
                //Update
                this.$http.put(`productos/${this.producto.id}`, this.producto)
                .then(response => {
                    this.loading = false
                    this.$emit('reload')
                    this.close()
                }).catch(error => {
                    alert(error.response.data.message )
                    this.loading = false
                })
            }else{
                //Insert
                this.$http.post(`productos`, this.producto)
                    .then(response => {
                        this.loading = false
                        this.$emit('reload')
                        this.close()
                    }).catch(error => {
                    alert(error.response.data.message )
                    this.loading = false
                })
            }
        },
        close() {
            this.producto = {}
            this.dialog = false
        },
        open(producto = {}){
            this.producto = producto
            this.dialog = true
        },
        complementos(){
            this.$http.get('complementos/marcas').then(({data}) => {
                this.marcas = data
            }).catch(error => {
                alert(error.response.data.message )
            })
        }
    },
    mounted() {
        this.complementos()
    }
}
</script>

<style scoped>

</style>
