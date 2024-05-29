<template>
    <div class="d-flex justify-content-center align-items-center pt-3">
        <div class="movil">
            <div class="d-flex justify-content-center flex-column align-items-center">
                <img :src="imagenLogo" alt="login-icon" class="logo" />
            </div>
            <div class="d-flex justify-content-center pt-2">
                <button class="btn btn-success">Agregar</button>
            </div>
            <div class="table-responsive pt-2">
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Matricula</th>
                            <th>Correo Electronico</th>
                            <th>Celular</th>
                            <th>Direccion</th>
                            <th>Grado</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>Daniel Lopez Zamora</td>
                            <td>45858</td>
                            <td>daniellopzam@gmail.com</td>
                            <td>2295500179</td>
                            <td>Rep de cuba #161</td>
                            <td>Teniente de coberta</td>
                            <td>Editar || eliminar </td>
                        </tr>       
                        <tr>
                            <td>2</td>
                            <td>Daniel Lopez Zamora</td>
                            <td>45858</td>
                            <td>daniellopzam@gmail.com</td>
                            <td>2295500179</td>
                            <td>Rep de cuba #161</td>
                            <td>Teniente de coberta</td>
                            <td>Editar || eliminar </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagenLogo: 'logo-unindetec.png'
        }
    },
    computed: {
        imagenLogo() {
            return require(`@/assets/${this.imagenLogo}`)
        }
    }
}
</script>

<style scoped>
.router-link {
    text-decoration: none;
    /* Elimina la línea subrayada */
}

span {
    color: white;
}


@media (max-width:768px) {
    .movil {
        width: 25rem;
    }

    .logo {
        width: 10rem;
    }
}

@media (min-width:769px) {
    .movil {
        width: 85%;
    }

    .logo {
        width: 12rem;
    }
}
</style>