<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Direccion</th>
                        <th>Matricula</th>
                        <th>Grado</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in Usuarios" :key="usuario.usuarios_id">
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.email }}</td>
                        <td>{{ usuario.celular }}</td>
                        <td>{{ usuario.direccion }}</td>
                        <td>{{ usuario.matricula }}</td>
                        <td>{{ usuario.grado }}</td>
                        <td>
                            <router-link :to="{ name: 'Editar', params: { usuarios_id: usuario.usuarios_id } }"
                                class="btn btn-success">Editar
                            </router-link>
                            <button @click.prevent="deleteUser(usuario.usuarios_id)" class="btn btn-danger">
                                Eliminar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>

import axios from 'axios';

export default {
    data() {
        return {
            Usuarios: [],
        };
    },
    created() {
        console.log("El método created() ha sido llamado.");
        let apiURL = "http://localhost:3001/api/v1/usuarios";
        axios
            .get(apiURL)
            .then((res) => {
                console.log("Datos recibidos del backend:", res.data);
                if (res.data.ok && Array.isArray(res.data.body)) {
                    this.Usuarios = res.data.body;
                } else {
                    console.error("Los datos recibidos no son válidos:", res.data);
                }
            })
            .catch((error) => {
                console.log("Error al obtener los datos:", error);
            });
    },
    methods: {
        deleteUser(usuarios_id) {
            let apiURL = `http://localhost:3001/api/v1/usuarios/${usuarios_id}`;
            let indexOfArrayItem = this.Usuarios.findIndex((i) => i._id === usuarios_id);
            if (window.confirm("Do you really want to delete?")) {
                axios
                    .delete(apiURL)
                    .then(() => {
                        console.log("Usuario eliminado con éxito");
                        this.Usuarios.splice(indexOfArrayItem, 1);
                        window.location.reload(); // Recarga la página después de eliminar el usuario
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
}
</script>

<style>
.btn-success {
 margin-right: 10px;
}
</style>
