<template>
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
                <h2 class="page-title">Page Title</h2>
                <p class="title-note">Page title note</p>
                <el-row>
                    <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="http://2.bp.blogspot.com/-lRNjBVXOHUc/Vb2yN8NKyZI/AAAAAAAANfQ/13I7lRRe1LU/s1600/logo%2Bhut%2Bri%2B70-transparan.png" class="image">
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
</template>
