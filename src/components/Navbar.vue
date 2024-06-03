<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between flexnowrap flex-row">
        <div class="container">
            <a class="navbar-brand float-left">MEVN Stack Example</a>
            <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                    <router-link class="nav-link pr-3" to="/">Crear</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/view">Listar</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style></style>