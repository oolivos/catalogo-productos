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
                        {{ marca && marca.id ? 'Editar ' : 'Agregar' }} Marca
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
                                            v-model="marca.nombre"
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
                                        name="Referencia"
                                        :immediate="true"
                                    >
                                        <v-text-field
                                            v-model="marca.referencia"
                                            label="Referencia"
                                            name="Referencia"
                                            :error-messages="errors"
                                        />
                                    </Validator>
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
                            @click="agregarMarca"
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
    name: "AgregarMarcaModal",
    data () {
        return {
            loading: false,
            dialog: false,
            marca: {},
        }
    },
    methods: {
        agregarMarca() {
            this.loading = true
            if(this.marca.id){
                //Update
                this.$http.put(`marcas/${this.marca.id}`, this.marca)
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
                this.$http.post(`marcas`, this.marca)
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
            this.marca = {}
            this.dialog = false
        },
        open(marca = {}){
            this.marca = marca
            this.dialog = true
        },
    }
}
</script>

<style scoped>

</style>
