import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import Error404 from './pages/Error404'
import routes from './utils/routes'

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage />} path={routes.home} />
          <Route element={<AboutPage />} path={routes.about} />
          <Route element={<ProjectPage />} path={routes.projects} />
          <Route element={<ContactPage />} path={routes.contact} />
          <Route element={<Error404 />} path={routes.error} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
