<template>
    <el-menu class="nav-menu" theme="dark" mode="horizontal">
        <el-submenu index="1">
            <template slot="title">Hi, {{ user }}</template>
            <el-menu-item index="1-1">
                <a href="">
                    Sign Out
                </a>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState({
        user: 'user'
    })
};
</script>

<style lang="scss">
.nav-menu {
    float: right;
    line-height: 80px;
    font-weight: normal;
    background-color: transparent;
    display: flex;
    align-items: center;
}
</style>