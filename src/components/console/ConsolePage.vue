<template>
    <div class="container console-area">
        <el-row>
            <el-col :span="6">
                <aside>
                    <el-menu class="bg-transparent">
                        <el-menu-item index="1">Side Nav Item 1</el-menu-item>
                        <el-menu-item index="2">Side Nav Item 2</el-menu-item>
                    </el-menu>
                </aside>
            </el-col>
            <el-col :span="18">
                <section>
                    <h2 class="page-title">Overview</h2>
                    <p class="title-note">Overview state of bot instances</p>
                    <el-row class="inst-row" v-for="rowIndex in instRowCnt" :key="rowIndex">
                        <el-col :span="6" v-for="(o, i) in numInRow(rowIndex)" :key="o" :offset="i > 0 ? 3 : 0">
                            <el-card>
                                <img src="http://2.bp.blogspot.com/-lRNjBVXOHUc/Vb2yN8NKyZI/AAAAAAAANfQ/13I7lRRe1LU/s1600/logo%2Bhut%2Bri%2B70-transparan.png">
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
export default {
    data: () => ({
        inst: [{
            running: false,
            account: '',
            createAt: Date.now()
        },
        {
            running: true,
            account: 'aaa',
            createAt: Date.now()
        }, {}, {}, {}, {}]
    }),
    computed: {
        instRowCnt() {
            return Math.floor((this.inst.length - 1) / 3) + 1;
        }
    },
    methods: {
        numInRow(rowIndex) {
            return Math.min(3, this.inst.length - (rowIndex - 1) * 3);
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

        .page-title {
            margin-top: 1.8rem;
        }

        .title-note {
            margin: 5.2rem 0;
        }

        .inst-row {
            margin-bottom: 3.5rem;
        }

        .el-card {
            img {
                // scale both width & height to 'card-body'
                width: 100%;
                display: block;
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

.el-card {
    .el-card__body {
        padding: 0;
    }
}
</style>
