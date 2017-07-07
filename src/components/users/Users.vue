<template>
    <div class="container content-area">
        <el-row>
            <el-col :span="10" :offset="7">
                <el-tabs type="border-card" class="div-round" v-model="activeName" @tab-click="onTabClick">
                    <el-tab-pane label="Sign In" name="signIn">
                        <el-form :model="signInForm" label-width="100px" ref="signInForm">
                            <el-form-item prop="email" label="邮箱">
                                <el-input v-model="signInForm.email"></el-input>
                            </el-form-item>
                            <el-form-item prop="password" label="密码">
                                <el-input v-model="signInForm.password" type="password"></el-input>
                            </el-form-item>
                            <el-button type="primary" @click="onSignInClick('signInForm')">Sign In</el-button>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="Create an account" name="signUp">
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
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data: () => ({
        activeName: '',
        signInForm: {
            email: '',
            password: ''
        }
    }),
    methods: {
        onTabClick(tab) {
            switch (tab.name) {
                case 'signIn':
                    this.$router.replace({ name: 'signIn' });
                    break;
                case 'signUp':
                    this.$router.replace({ name: 'signUp' });
                    break;
                default:
                    console.error(`Unexpected tab: ${tab.name}`);
                    break;
            }
        },
        onSignInClick(ref) {
            this.$store.dispatch('SignIn', this.signInForm.email);
            this.$router.push({ name: 'console' });
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            switch (to.name) {
                case 'signIn':
                    vm.activeName = 'signIn';
                    break;
                case 'signUp':
                    vm.activeName = 'signUp';
                    break;
                default:
                    console.error(`Unexpected path: ${to.path}`);
                    break;
            }
        });
    }
};
</script>

<style lang="scss">
.container {
    &.content-area {
        padding-top: 5.5rem;
        padding-bottom: 9.5rem;
    }
}

.div-round {
    border-radius: 0.5rem;
    overflow: hidden;
}
</style>
