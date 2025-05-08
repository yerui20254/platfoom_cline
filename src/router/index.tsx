import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage.tsx'
import PageDetail from "../pages/PageDetail.tsx";
import ContentIndexPage from "../pages/indexPage.tsx"
import Detail from "../pages/detail.tsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/page2',
    element: <ContentIndexPage />,
    children: [
      {
        path: 'details',
        element: <Detail />,
      }
    ]
  },
  {
    path: '/page3',
    element: <PageDetail />,
    
  },

])

export default router