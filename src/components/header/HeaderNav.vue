<template>
    <div class="container">
        <nav>
            <h1>
                <img class="nav-logo" src="~image/logo.png" alt="">
            </h1>
            <component :is="currentView">
            </component>
        </nav>
    </div>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue';
import UserMenu from './UserMenu.vue';

export default {
    computed: {
        currentView() {
            return this.$store.state.user == '' ? HeaderMenu : UserMenu;
        }
    }
};
</script>

<style lang="scss">
nav {
    height: 100%;
    max-height: 100%;
    font-size: 1.8rem;
}

h1 {
    width: 80px;
    height: 80px;
}

h1,
.nav-logo {
    max-width: 80px;
    max-height: 80px;
    /*vertical-align: sub;*/
}

h1 {
    float: left;
    margin: 0;
}
</style>

