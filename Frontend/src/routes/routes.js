import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Dashboard from 'src/pages/Dashboard.vue'
import Current from 'src/pages/Current.vue'
import History from 'src/pages/History.vue'
import Forecasting from 'src/pages/Forecasting.vue'
import AboutUs from 'src/pages/AboutUs'

const routes = [
  // {
  //   path: '/',
  //   component: DashboardLayout,
  //   redirect: '/admin/'
  // },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'current',
        name: 'Current',
        component: Current
      },
      {
        path: 'history',
        name: 'History',
        component: History
      },
      {
        path: 'forecasting',
        name: 'Forecasting',
        component: Forecasting
      },
      {
        path: 'about-us',
        name: 'AboutUs',
        component: AboutUs
      }
    ]
  },
  { path: '*', component: NotFound }
]


export default routes
