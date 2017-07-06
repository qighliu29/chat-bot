<template>
    <el-menu class="nav-menu" theme="dark" mode="horizontal">
        <el-menu-item item="nav-menu-item__1" index="1">
            <a href="">Sign In</a>
        </el-menu-item>
        <el-menu-item item="nav-menu-item__2" index="2">
            <a href="">Create an account</a>
        </el-menu-item>
    </el-menu>
</template>

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
            font-weight: 600;
        }

        a {
            text-decoration: none;
        }
    }
}
</style>

