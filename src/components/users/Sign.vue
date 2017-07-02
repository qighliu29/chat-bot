<template>
    <div class="container">
        <el-row>
            <el-col :span="10" :offset="7">
                <el-tabs>
                    <!--<sign-in></sign-in>-->
                    <!--<sign-up></sign-up>-->
                    <el-tab-pane is="sign-in"></el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';

export default {
    components: {
        SignIn,
        SignUp
    },
    mounted() {
        console.log(this.$parent);
    }
}
</script>