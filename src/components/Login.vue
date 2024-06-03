<template>
    <div class="d-flex justify-content-center align-items-center ubicacion">
        <div class="bg-white p-5 rounded-5 text-secondary shadow movil"  >
            <div class="d-flex justify-content-center">
                <img :src="imagenLogo" alt="login-icon" style="height: 12rem" />
            </div>
            <div class="input-group mt-4">
                <div class="input-group-text bg-primary">
                    <img :src="imagenUser" alt="username-icon" style="height: 1rem" />
                </div>
                <input class="form-control bg-light" type="text" placeholder="Usuario" />
            </div>
            <div class="input-group mt-2">
                <div class="input-group-text bg-primary">
                    <img :src="imagenPassword" alt="password-icon" style="height: 1rem" />
                </div>
                <input class="form-control bg-light" type="password" placeholder="Contraseña" />
            </div>
            <div class="d-flex justify-content-start mt-2">
                <div class="d-flex align-items-center gap-1">
                    <input class="form-check-input" type="checkbox" />
                    <div class="pt-1" style="font-size: 0.9rem">Recordar contraseña</div>
                </div>
            </div>
            <div class="btn btn-primary text-white w-100 mt-3 fw-semibold shadow-sm">
                Iniciar Sesion
            </div>
            <div class="p-3">
                <div class="border-bottom text-center" style="height: 0.9rem">
                    <span class="bg-white px-3"></span>
                </div>
            </div>
            <div class="d-flex gap-1 justify-content-center mt-1">
               <router-link to="/Report" class="router-link">Generar ticket de servicio</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        imagePassword:'password-icon.svg',
        imageUser:'username-icon.svg',
        imagenLogo:'logo-unindetec.png'
    }
},
computed:{
    imagenPassword(){
        return require(`@/assets/${this.imagePassword}`)
    },
    imagenUser(){
        return require(`@/assets/${this.imageUser}`)
    },
    imagenLogo(){
        return require(`@/assets/${this.imagenLogo}`)
    }
}
}
</script>

<style scoped>

.ubicacion{
    min-height: 100vh;
}

.router-link {
    text-decoration: none; /* Elimina la línea subrayada */
}

 @media (max-width:768px) {
    .movil{
        width: 21rem;
    }
 }

 @media (min-width:769px) {
    .movil{
        width: 24rem;
    }
 }
</style>