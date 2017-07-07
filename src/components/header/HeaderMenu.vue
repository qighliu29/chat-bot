<template>
    <el-menu class="nav-menu" theme="dark" mode="horizontal">
        <el-menu-item v-for="(tab, index) in tabs" :key="index" :item="'nav-menu-item__'+(index+1)" index="index+1">
            <a href="">{{ tab }}</a>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data: () => ({
        tabs: ['Sign In', 'Create an account']
    })
};
</script>

<style lang="scss">
.nav-menu {
    float: right;
    height: 80px;
    line-height: 80px;
    font-weight: normal;
    background-color: transparent;
    display: flex;
    align-items: center;

    .el-menu-item[item^="nav-menu-item"] {
        height: 80px;
        line-height: 80px;
        font-size: inherit;
        color: white;

        &:hover {
            background-color: transparent;
            border-bottom-color: lighten(rgb(32, 160, 255), 20%);
        }

        a {
            text-decoration: none;
        }
    }
}
</style>

