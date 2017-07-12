<template>
    <div class="container content-area">
        <el-row>
            <el-col :xs="{span: 20, offset: 2}" :sm="{span: 10, offset: 7}">
                <el-tabs type="border-card" class="div-round" v-model="activeName" @tab-click="onTabClick">
                    <el-tab-pane label="Sign In" name="signIn">
                        <el-form :label-position="'top'" :model="signInForm" label-width="100px" ref="signInForm">
                            <el-form-item prop="email" label="邮箱">
                                <el-input v-model="signInForm.email"></el-input>
                            </el-form-item>
                            <el-form-item prop="password" label="密码">
                                <el-input v-model="signInForm.password" type="password"></el-input>
                            </el-form-item>
                            <el-button type="primary" @click="doLogin('signInForm')">Sign In</el-button>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="Create an account" name="signUp" ref="ruleForm">
                        <el-form :label-position="'top'" label-width="100px" :model="signUpScheme" ref="signUpForm">
                            <!--divider-->
                            <div class="group-divider">
                                <span>Personal Information</span>
                            </div>
                            <el-form-item prop="name">
                                <el-input placeholder="name"></el-input>
                            </el-form-item>
                            <el-form-item prop="email">
                                <el-input placeholder="email"></el-input>
                            </el-form-item>
                            <!--divider-->
                            <div class="group-divider">
                                <span>Account Security</span>
                            </div>
                            <el-form-item prop="password">
                                <el-input type="password" placeholder="password"></el-input>
                            </el-form-item>
                            <el-form-item prop="passwordConfirm">
                                <el-input type="password" placeholder="confirm password"></el-input>
                            </el-form-item>
                            <el-button type="primary" @click="doSignUp('signUpForm')">Create An Account</el-button>
                        </el-form>
                        <div>
                            <span>Forgot your password?
                                <a>Recover it</a>
                            </span>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '../../axios.js';

export default {
    data: () => ({
        activeName: '',
        signInForm: {
            email: '',
            password: ''
        },
        signUpScheme: {

        },
        rules: {
            email: [{
                type: 'email',
                required: true,
                message: `'email' is required`,
                trigger: 'blur'
            }]
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
        },
        doSignUp(form) {
            // let loadingInstance = this.$loading({
            //     fullscreen: true,
            //     lock: true,
            //     text: 'Ah...'
            // });
            // api.signUp().then(() => {
            //     loadingInstance.close();
            //     this.$router.push({ name: 'console' });
            // })
            api.signUp();
        },
        doLogin() {
            api.login();
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

.el-form {
    .group-divider {
        box-sizing: border-box;
        height: 0;
        border-top: 1px solid #DDD;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 30px;

        span {
            display: inline-block;
            position: relative;
            padding: 0 17px;
            top: -11px; // font-size: 16px;
            color: #058;
            background-color: #fff;
        }
    }
}
</style>
