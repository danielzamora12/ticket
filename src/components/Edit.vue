<template>
    <div class="d-flex justify-content-center align-items-center pt-4" v-if="loaded">
        <div class="col-md-6 bg-white p-4 rounded-5 text-secondary shadow movil">
            <div class="d-flex justify-content-center">
                <img :src="imagenLogo" alt="login-icon" style="height: 12rem" />
            </div>
            <h3 class="text-center">Actualizar Usuario</h3>
            <form @submit.prevent="handleSubmitEdit">
                <div class="form-group">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" placeholder="Ingrese su nombre completo" required
                        v-model="form.nombre">
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="Ingrese su correo electronico" required
                        v-model="form.email">
                </div>
                <div class="form-group">
                    <label for="celular" class="form-label">Celular</label>
                    <input type="number" class="form-control" placeholder="Ingrese su celular" required
                        v-model="form.celular">
                </div>
                <div class="form-group">
                    <label for="direccion" class="form-label">Direccion</label>
                    <input type="text" class="form-control" placeholder="Ingrese su direccion" required
                        v-model="form.direccion">
                </div>
                <div class="form-group">
                    <label for="matricula" class="form-label">Matricula</label>
                    <input type="text" class="form-control" placeholder="Ingrese su matricula" required
                        v-model="form.matricula" >
                </div>
                <div class="form-group">
                    <label for="grado" class="form-label">Grado</label>
                    <select id="grado" v-model="form.grado" class="form-select system" required>
                        <option disabled value="">Seleccione una opción</option>
                        <option v-for="option in grados" :key="option" :value="option">{{ option }}</option>
                    </select>
                </div>
                <div class="form-group pt-3">
                    <button class="btn btn-success">Actualizar usuario</button>
                </div>
            </form>
        </div>
    </div>
    <div v-else>
        <p>Cargando...</p>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                nombre: '',
                email: '',
                celular: '',
                direccion: '',
                matricula: '',
                grado: ''
            },
            imagenLogo: 'logo-unindetec.png',
            grados: ['MARINERO', 'CABO', 'TERCER MAESTRE', 'SEGUNDO MAESTRE',
                'PRIMER MAESTRE', 'GUARDIA MARINA', 'TENIENTE DE CORBETA', 'TENIENTE DE FRAGATA',
                'TENIENTE DE NAVÍO', 'CAPITÁN DE CORBETA', 'CAPITÁN DE FRAGATA', 'CAPITÁN DE NAVÍO',
                'CONTRALMIRANTE', 'VICEALMIRANTE', 'ALMIRANTE', 'SECRETARIO DE MARINA'],
            loaded: false,
            error: false
        };
    },
    computed: {
        imagenLogo() {
            return require(`@/assets/${this.imagenLogo}`)
        }
    },
    created() {
        const usuarios_id = this.$route.params.usuarios_id;
        if (!usuarios_id) {
            console.error("usuarios_id no definido");
            return;
        }

        const apiURL = `http://localhost:3001/api/v1/usuarios/${usuarios_id}`;
        axios.get(apiURL)
            .then((res) => {
                console.log("Datos del usuario:", res.data.body);
                this.form = res.data.body; // Asigna los datos del usuario al formulario
                this.loaded = true; // Marcar que los datos están cargados
            })
            .catch((error) => {
                console.error("Error al obtener los datos del usuario:", error);
                this.error = true; // Marcar error como verdadero
            });
    },
    methods: {
        handleSubmitEdit() {
            const usuarios_id = this.$route.params.usuarios_id;
            const apiURL = `http://localhost:3001/api/v1/usuarios/${usuarios_id}`;
            axios
                .put(apiURL, this.form)
                .then((res) => {
                    console.log("Usuario actualizado:", res);
                    this.$router.push("/list");
                })
                .catch((error) => {
                    console.error("Error al actualizar el usuario:", error);
                });
        },
    },
  
}

</script>