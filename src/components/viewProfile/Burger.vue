<template>
    <div id="burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
         <slot>
            <button type="button" class="burger-button" title="Profile">
                <i class="material-icons">account_circle</i>
            </button>
         </slot>
    </div>
</template>

<script>
import { store, mutations } from '@/store.js'
    
export default {
    computed: {
        isBurgerActive() {
            return store.isNavOpen
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
}
</script>

<style scoped>

button {
    cursor: pointer;
}
button:focus {
    background-color: transparent;
}
.burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
}
</style>