// 引入路由组件
import Search from '@/pages/Search/Search'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'
import Detail from '@/pages/Detail/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart/ShopCart'
import Trade from '@/pages/Trade/Trade'
import Pay from '@/pages/Pay/Pay'
import PaySuccess from '@/pages/PaySuccess/PaySuccess'
import Center from '@/pages/Center/Center'

// 引入二级路由
import MyOrder from '@/pages/Center/myOrder/myOrder'
import GroupOrder from '@/pages/Center/groupOrder/groupOrder'

// 路由配置的信息
export default [{
        path: '/home',
        // 路由懒加载，不需要在上面引入路由组件Home了，这样更加高效
        component: ()=>import('@/pages/Home/Home'),
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {
            show: true
        },
        name: 'search'
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    },
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: false
        }
    },
    {
        path: '/addCartSuccess',
        name: 'addCartSuccess',
        component: AddCartSuccess,
        meta: {
            show: false
        }
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: ShopCart,
        meta: {
            show: false
        }
    },
    {
        path: '/trade',
        component: Trade,
        meta: {
            show: false
        },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/shopcart')
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        meta: {
            show: false
        },
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: {
            show: false
        }
    },
    {
        path: '/center',
        component: Center,
        meta: {
            show: false
        },
        // 二级路由组件
        children: [{
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
]