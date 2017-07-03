<template>
    <div class="container">
        <nav>
            <h1>
                <img class="nav-logo" src="https://wordimpress.com/assets/wordpressIcon2.png" alt="">
            </h1>
            <!--menu items-->
            <component v-if="user != ''" :is="currentView">
                <!-- inactive components will be cached! -->
            </component>
        </nav>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderMenu from './HeaderMenu.vue';

export default {
    data: () => ({
        currentView: HeaderMenu
    }),
    computed: mapState({
        user: 'user'
    })
};
</script>

<style lang="scss">
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

