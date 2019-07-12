<template>
    <div class="header-custom">
        <el-row>
            <el-col :span="4">
                <i size="mini" class="el-icon-s-fold"></i>
                <span>数据校验平台2.0</span>
            </el-col>
            <el-col :span="10" :offset="10">
                <el-menu
                        :default-active="activeIndex2"
                        class="header-el-menu-custom"
                        mode="horizontal"
                        @select="handleSelect">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">{{username}}</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: 'lizhengxian'
            };
        },
        methods: {
        }
    }
</script>

<style>
    .header-custom{
        line-height: 70px;
    }
    .header-el-menu-custom{
        border-bottom: 0px !important;
        line-height: 70px;
        float: right;
    }
    .el-menu--horizontal>.el-menu-item{
        height: 69px;
        line-height: 69px;
    }

    .el-menu--horizontal>.el-submenu{
        height: 69px;
        line-height: 69px;
    }

    .el-menu--horizontal>.el-submenu .el-submenu__title{
        height: 69px;
        line-height: 69px;
    }

</style>
