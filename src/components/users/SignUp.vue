<template>
    <el-tab-pane label="Register" name="register">
        <el-form label-width="100px" ref="dynamicValidateForm">
            <el-form-item prop="email" label="邮箱">
                <el-input></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input type="password"></el-input>
            </el-form-item>
            <el-button type="primary">Sign in</el-button>
        </el-form>
    </el-tab-pane>
</template>
