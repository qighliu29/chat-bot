<template>
    <div class="container console-area">
        <el-row>
            <el-col :xs="4" :sm="6">
                <aside>
                    <el-menu class="bg-transparent">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span>Overview</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-date"></i>
                            <span>Renew</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-message"></i>
                            <span>Ticket</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span>Settings</span>
                        </el-menu-item>
                    </el-menu>
                </aside>
            </el-col>
            <el-col :xs="20" :sm="18">
                <section>
                    <h2 class="page-title">Overview</h2>
                    <p class="title-note">Overview state of bot instances</p>
                    <el-row>
                        <el-col class="inst-elem" :span="6" v-for="(elem, index) in inst" :key="index" :offset="(index % 3) != 0 ? 3 : 0">
                            <el-card>
                                <div :class="stateToInstanceClass(elem.state)">
                                    <img :class="elem.state == 3 ? '' : 'gray-img'" :src="elem.showIcon"></img>
                                    <div>
                                        <el-button :type="elem.state == 3 ? 'danger' : 'success'" :loading="elem.state == 1" @click="actionHandler(index)">{{ elem.state == 3 ? 'Stop' : 'Launch' }}</el-button>
                                    </div>
                                </div>
                                <div class="card-note">
                                    <span>Logo Title</span>
                                    <div class="bottom clearfix">
                                        <time class="time">2017-06-28 22:42</time>
                                        <el-button type="text" class="button">Operation</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </section>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '../../axios.js';
import _ from 'lodash';

export default {
    data: () => ({
        // inst: [{
        //     running: false,
        //     account: '',
        //     createAt: Date.now()
        // },
        // {
        //     running: true,
        //     account: 'aaa',
        //     createAt: Date.now()
        // }, {}, {}, {}, {}]
        wechatIcon: 'http://2.bp.blogspot.com/-lRNjBVXOHUc/Vb2yN8NKyZI/AAAAAAAANfQ/13I7lRRe1LU/s1600/logo%2Bhut%2Bri%2B70-transparan.png',
        inst: []
    }),
    created() {
        api.getInstances({ name: 'LQ' }).then((res) => {
            let cnt = res.data.responses[0].total;
            let insts = res.data.responses[0].instances;
            for (var i = 0; i < cnt; i++) {
                if (i < insts.length) {
                    this.inst.push({ state: 3, account: insts[i].uin.toString(), createAt: Date.now(), showIcon: this.wechatIcon, sid: insts[i].sid });
                }
                else {
                    this.inst.push({ state: 0, account: '', createAt: Date.now(), showIcon: this.wechatIcon, sid: '' });
                }
            }
        })
    },
    methods: {
        actionHandler(index) {
            if (this.inst[index].state == 0) {
                this.launchHandler(index);
            }
            else if (this.inst[index].state == 3) {
                this.stopHandler(index);
            }
        },
        launchHandler(index) {
            this.inst[index].state = 1;
            api.newInstance().then((res) => {
                let qrCode64 = res.data.responses[0].qrCode;
                this.inst[index].showIcon = 'data:image/png;base64,' + qrCode64;
                let sid = res.data.responses[0].sid;
                this.inst[index].sid = sid;

                this.inst[index].state = 2;
                // per second in one minute
                let i = 0, n = 60, interval = 1000;
                _.delay(function checkInstStatus() {
                    api.statusInstance({ sid: sid }).then((res) => {
                        let statusString = res.data.responses[0].statusString;
                        if (statusString != 'running') {
                            if (i++ < n) {
                                _.delay(checkInstStatus.bind(this), interval);
                            }
                            else {
                                // wait for scan qrcode timeout
                                this.$message({ message: 'Wait timeout, reload to refresh instance status', type: 'warning', showClose: true });
                            }
                        }
                        else {
                            // login success
                            this.$message({ message: statusString, type: 'success', showClose: true });
                            this.inst[index].state = 3;
                            this.inst[index].showIcon = this.wechatIcon;
                        }
                    }).catch((err) => {
                        console.log(err);
                        this.$message({ message: 'Failed connect to server', type: 'error', showClose: true });
                    });
                }.bind(this), interval);
            }).catch((err) => {
                this.$message({ message: err.message, type: 'error', showClose: true });
            });
        },
        stopHandler(index) {
            api.stopInstance({ sid: this.inst[index].sid }).then((res) => {
                if (res.data.responses[0].result == 0) {
                    this.inst[index].state = 0;
                }
                else {
                    this.$message({ message: 'Stop failed, please reload or try again later', type: 'info', showClose: true });
                }
            }).catch((err) => {
                this.$message({ message: err.message, type: 'error', showClose: true });
            });
        },
        stateToInstanceClass(state) {
            if (state == 0) {
                return 'normal-inst';
            }
            if (state == 1) {
                return 'loading-inst';
            }
            if (state == 2) {
                return 'qrcode-inst';
            }
            if (state == 3) {
                return 'normal-inst';
            }
        }
    }
};
</script>

<style lang="scss">
.container {
    &.console-area {
        padding-top: 2.5rem;

        .bg-transparent {
            .el-menu-item {
                &:hover {
                    background-color: transparent;
                    color: #20a0ff;
                }
            }
        }

        .el-menu {
            .el-menu-item {
                span {
                    display: none;

                    @include media(">=768px") {
                        display: inline;
                    }
                }
            }
        }

        .page-title {
            margin-top: 1.8rem;
        }

        .title-note {
            margin: 5.2rem 0;
        }

        .inst-elem {
            margin-bottom: 3.5rem;

            .el-card {
                .normal-inst {
                    // useful when child set their metrics in percentage
                    position: relative;

                    >img {
                        // scale both width & height to 'card-body'
                        width: 100%;
                        display: block;
                        opacity: 1;
                        transition: all .2s ease-in-out;

                        &.gray-img {
                            -webkit-filter: grayscale(100%);
                            filter: grayscale(100%);
                        }
                    }

                    >div {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        transition: all .2s ease-in-out;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    &:hover {
                        >img {
                            opacity: 0.4;
                            transition: all .2s ease-in-out;
                        }

                        >div {
                            opacity: 1;
                            transition: all .2s ease-in-out;
                            cursor: pointer;
                        }
                    }
                }

                .loading-inst {
                    // useful when child set their metrics in percentage
                    position: relative;

                    >img {
                        // scale both width & height to 'card-body'
                        width: 100%;
                        display: block;
                        opacity: 0.4;
                        transition: all .2s ease-in-out;

                        &.gray-img {
                            -webkit-filter: grayscale(100%);
                            filter: grayscale(100%);
                        }
                    }

                    >div {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        opacity: 1;
                        transition: all .2s ease-in-out;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .qrcode-inst {
                    // useful when child set their metrics in percentage
                    position: relative;

                    >img {
                        // scale both width & height to 'card-body'
                        width: 100%;
                        display: block;
                        opacity: 1;
                        transition: all .2s ease-in-out;

                        &.gray-img {
                            -webkit-filter: grayscale(100%);
                            filter: grayscale(100%);
                        }
                    }

                    >div {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        transition: all .2s ease-in-out;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .card-note {
                    padding: 20px 14px 14px 14px;

                    .bottom {
                        margin-top: 13px;
                        line-height: 12px;

                        .time {
                            font-size: 13px;
                            color: #999;
                        }

                        .button {
                            padding: 0;
                            float: right;
                        }
                    }

                    .clearfix:before,
                    .clearfix:after {
                        display: table;
                        content: "";
                    }

                    .clearfix:after {
                        clear: both
                    }
                }
            }
        }
    }
}

.el-card {
    .el-card__body {
        padding: 0;
    }
}
</style>
