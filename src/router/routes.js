/**
 * Created by athena on 2017/9/14.
 */

const Home = () => import('../views/home')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {title: '主页'}
  }
]

export default routes
