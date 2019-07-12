<template>
    <el-container>
        <el-menu
                default-active="2"
                class="el-menu-vertical"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                router
                background-color="#001529"
                text-color="#fff"
                active-text-color="#ffd04b"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item index="user">选项222</el-menu-item>
                <el-menu-item index="admin">选项333</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
        <el-container>
            <el-header class="el-header-custom" height="70px">
                <HeaderContent></HeaderContent>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import HeaderContent from './layout/HeaderContent'
    export default {
        components:{
            HeaderContent
        },
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
    }

    .el-menu-vertical{
        border: 0px;
        min-height: 400px;
    }

    .el-menu-vertical:not(.el-menu--collapse) {
        width: 15%;
    }

    .el-header-custom{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
</style>
