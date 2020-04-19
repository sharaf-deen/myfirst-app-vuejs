<template>
    <div class="navbar">
        <nav class="nav-extended indigo darken-2">
            <div class="nav-content">
                <router-link to="/">
                    <span class="nav-title white-text">Quiz Application</span>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {

        }
    }
}
</script>

<style>
.navbar nav{
    padding: 0, 20px;
    font-size: 2.5em;
    text-align: center
}
</style>