<template>
    <div class="d-flex justify-content-center align-items-center ubicacion">
        <div class="bg-white p-3 rounded-5 text-secondary shadow movil">
            <div class="d-flex justify-content-center flex-column align-items-center">
                <router-link to="/" class="router-link"><span>Inicio</span></router-link>
            </div>
            <div class="d-flex justify-content-center">
                <img :src="imagenLogo" alt="login-icon" class="logo" />
            </div>
            <form class="row g-3 pt-3" @submit.prevent="submitForm" enctype="multipart/form-data">
                <div class="col-md-6">
                    <label for="fecha" class="form-label">Fecha de inicio</label>
                    <input type="date" class="form-control date" id="fecha" v-model="form.fecha" required>
                </div>
                <div class="col-md-6">
                    <label for="componente" class="form-label">Componente</label>
                    <input type="text" class="form-control" id="componente" v-model="form.componente"
                        placeholder="Componente a reportar" required>
                </div>
                <div class="col-md-6">
                    <label for="usuario" class="form-label">Usuario</label>
                    <input type="text" class="form-control" id="usuario" v-model="form.usuario"
                        placeholder="Usuario que reporta" required>
                </div>
                <div class="col-md-6">
                    <label for="mando" class="form-label">Mando</label>
                    <input type="text" class="form-control" id="mando" v-model="form.mando"
                        placeholder="Mando que reporta" required>
                </div>
                <div class="col-md-6">
                    <label for="unidad" class="form-label">Unidad</label>
                    <input type="text" class="form-control" id="unidad" v-model="form.unidad"
                        placeholder="Unidad que reporta:" required>
                </div>
                <div class="col-md-6">
                    <label for="sistema" class="form-label">Sistema</label>
                    <select id="sistema" v-model="form.sistema" class="form-select system" required>
                        <option disabled value="">Seleccione una opción</option>
                        <option v-for="option in sistemas" :key="option" :value="option">{{ option }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="problematica" class="form-label">Problematica</label>
                    <input type="text" class="form-control" id="problematica" v-model="form.problematica"
                        placeholder="Reporte su problematica que presenta" required>
                </div>
                <div class="col-md-6">
                    <label for="pdfFilePath" class="form-label">Subir su radiograma</label>
                    <input type="file" class="form-control" name="pdfFilePath" id="pdfFilePath"
                        @change="handleFileChange">
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
    data() {
        return {
            form: {
                fecha: '',
                componente: '',
                usuario: '',
                mando: '',
                unidad: '',
                sistema: '',
                problematica: '',
                pdfFilePath: '',
            },
            sistemas: ['SEDAM', 'SICAM'],
            imagenLogo: 'logo-unindetec.png'
        }
    },
    computed: {
        imagenLogo() {
            return require(`@/assets/${this.imagenLogo}`)
        }
    },
    methods: {
        handleFileChange(event) {
            this.form.pdfFilePath = event.target.files[0];
        },
        async submitForm() {
            try {
                const formData = new FormData();
                formData.append('fecha', this.form.fecha);
                formData.append('componente', this.form.componente);
                formData.append('usuario', this.form.usuario);
                formData.append('mando', this.form.mando);
                formData.append('unidad', this.form.unidad);
                formData.append('sistema', this.form.sistema);
                formData.append('problematica', this.form.problematica);
                formData.append('pdfFilePath', this.form.pdfFilePath); // Agrega el archivo adjunto

                const response = await axios.post('http://localhost:3001/api/v1/reportes', formData, {

                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (response.status === 201) {
                    Swal.fire({
                        icon: "success",
                        title: "Éxito",
                        text: "Formulario guardado correctamente",
                    });

                    // Limpiar el formulario
                    this.form.fecha = '';
                    this.form.componente = '';
                    this.form.usuario = '';
                    this.form.mando = '';
                    this.form.unidad = '';
                    this.form.sistema = '';
                    this.form.problematica = '';
                    this.form.pdfFilePath = undefined; // Reinicia el campo del archivo adjunto
                }
                // Resto del código para manejar la respuesta

            } catch (error) {
                console.error('Error guardando el formulario:', error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Guardado Sin Exito",
                });
            }
        },
    }
}
</script>

<style scoped>
.ubicacion {
    min-height: 100vh;
}

.system {
    color: #02416d !important;
}

.date {
    color: #02416d !important;
}

::placeholder {
    color: #02416d !important;
}

.form-label {
    color: black;
}

.router-link {
    text-decoration: none;
    /* Elimina la línea subrayada */
}

@media (max-width:768px) {
    .movil {
        width: 21rem;
    }

    .logo {
        width: 6rem;
    }
}

@media (min-width:769px) {
    .movil {
        width: 48rem;
    }

    .logo {
        width: 12rem;
    }
}
</style>