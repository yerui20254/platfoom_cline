import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage.tsx'
import PageDetail from "../pages/PageDetail.tsx";
import ContentIndexPage from "../pages/indexPage.tsx"
import Detail from "../pages/detail.tsx"
import AbilityContent from "../pages/abilityContent.tsx"
import AbilityConfig from "../pages/abilityConfig.tsx"
import AbConfig from '../pages/abConfig.tsx'
import KnowledgeSearch from '../pages/KnowledgeSearch.tsx'

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
      },
      {
        path: 'knowledgesearch',
        element: <KnowledgeSearch />,
      }
    ]
  },
  {
    path: '/page3',
    element: <PageDetail />,
    
  },
  {
    path: '/ability',
    element: <AbilityContent />,
  },
  {
    path: '/abilityconfig',
    element: <AbilityConfig />,
    
  },
  {
    path: '/abconfig',
    element: <AbConfig />,
    
  },
])

export default router