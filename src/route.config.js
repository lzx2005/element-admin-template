import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard'
import FullScreen from './views/FullScreen'

const User = {
    template: '<div>User</div>'
}
const Admin = {
    template: '<div>Admin</div>'
}

const router = new VueRouter({
    routes: [
        { path: '/login', component: FullScreen },
        {
            path: '/',
            redirect: {
                name: 'dashboard-user'
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: {
                title: '控制台'
            },
            component: Dashboard,
            redirect: {
                name: 'dashboard-user'
            },
            children: [
                {
                    path: 'user',
                    name: 'dashboard-user',
                    meta: {
                        title: '用户管理'
                    },
                    component: User
                },
                {
                    path: 'admin',
                    name: 'dashboard-admin',
                    meta: {
                        title: '超级管理员管理'
                    },
                    component: Admin
                }
            ]
        },
    ]
})

export default router