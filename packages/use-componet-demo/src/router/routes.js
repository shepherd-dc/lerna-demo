function load (component) {
  return () => import(`../views/${component}`)
}

const routes = [
  {
    path: '/',
    name: 'demo',
    component: load('demo'),
    meta: {
      title: '例子'
    }
  },
  {
    path: '*',
    redirect: {
      path: '/'
    }
  }
]
export default routes
