<template>
    <div class="d-flex justify-content-center align-items-center pt-4">
        <div class="col-md-6 bg-white p-4 rounded-5 text-secondary shadow movil">
            <div class="d-flex justify-content-center">
                <img :src="imagenLogo" alt="login-icon" style="height: 12rem" />
            </div>
            <h3 class="text-center">Crear Usuario</h3>
            <form @submit.prevent="handleSubmitCreate">
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
                        v-model="form.matricula">
                </div>
                <div class="form-group">
                    <label for="grado" class="form-label">Grado</label>
                    <select id="grado" v-model="form.grado" class="form-select system" required>
                        <option disabled value="">Seleccione una opción</option>
                        <option v-for="option in grados" :key="option" :value="option">{{ option }}</option>
                    </select>
                </div>
                <div class="form-group pt-3">
                    <button class="btn btn-success">Crear usuario</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import Swal from 'sweetalert2';
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
                grado: '',
            },
            grados: ['MARINERO', 'CABO', 'TERCER MAESTRE', 'SEGUNDO MAESTRE',
                'PRIMER MAESTRE', 'GUARDIA MARINA', 'TENIENTE DE CORBETA', 'TENIENTE DE FRAGATA',
                'TENIENTE DE NAVÍO', 'CAPITÁN DE CORBETA', 'CAPITÁN DE FRAGATA', 'CAPITÁN DE NAVÍO',
                'CONTRALMIRANTE', 'VICEALMIRANTE', 'ALMIRANTE', 'SECRETARIO DE MARINA'],
            imagenLogo: 'logo-unindetec.png'
        }
    },
    computed: {
        imagenLogo() {
            return require(`@/assets/${this.imagenLogo}`)
        }
    },
    methods: {
        async handleSubmitCreate() {
            try {
                const response = await axios.post('http://localhost:3001/api/v1/usuarios', this.form);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Usuario Agregado Correctamente",
                    showConfirmButton: false,
                    timer: 1500
                });
                this.form.nombre = '';
                this.form.email = '';
                this.form.celular = '';
                this.form.direccion = '';
                this.form.matricula = '';
                this.form.grado = '';
            } catch (error) {
                console.error('Error guardando el formulario:', error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Guardado Sin Exito",
                });
            }
        }
    }
}
</script>

<style scoped>
@media (max-width:768px) {
    .movil {
        width: 21rem;
    }
}
</style>