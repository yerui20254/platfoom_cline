import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Page2 from '../pages/page2'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/page2',
    element: <Page2 />,
  },
])

export default router