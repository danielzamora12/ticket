<template>
    <div class="d-flex justify-content-center align-items-center ubicacion">
        <div class="d-flex justify-content-center flex-column align-items-center">
            <router-link to="/" class="router-link"><span>Inicio</span></router-link>
            <img :src="imagenError" alt="Pagina no encontrada" class="movil" />
        </div>
    </div>

</template>

<script>
 export default {
     data(){
     return{
         imageError:'error-page.png'
     }
 },
 computed:{
     imagenError(){
         return require(`@/assets/${this.imageError}`)
     },
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

span {
    color: white;
}

@media (max-width:768px) {
    .movil{
        width: 20rem;
    }
 }

 @media (min-width:769px) {
    .movil{
        width: 40rem;
    }
 }
</style>