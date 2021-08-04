import VueRouter from 'vue-router'
import Logout from './components/pages/Logout.vue'
import Login from './components/pages/Login.vue'
import User from './components/pages/User.vue'
import UC from './components/pages/user/UC.vue'
import Admin from './components/pages/Admin.vue'
import AC from './components/pages/admin/AC.vue'


const routers = [
    {
        path: '/user', component: User,
        children: [
            {
                path: 'info', component: UC
            }
        ]
    }, {
        path: '/admin', component: Admin,
        children: [
            {
                path: 'info', component: AC
            }
        ]
    }, {
        path: '/login', component: Login
    }, {
        path: '/logout', component: Logout
    }
]

const router = new VueRouter({
    mode: 'history',
    routers: routers
})

export default router