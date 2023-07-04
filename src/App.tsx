import React, { useLayoutEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import Error404 from './pages/Error404'
import routes from './utils/routes'
import UAParser from 'ua-parser-js'

const App: React.FC = () => {
  const [deviceType, setDeviceType] = useState('desktop')
  useLayoutEffect(() => {
    const parser = new UAParser()
    parser.setUA(navigator.userAgent)
    const result = parser.getResult()
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const deviceType = result.device?.type || 'desktop'
    setDeviceType(deviceType)
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage deviceType={deviceType} />} path={routes.home} />
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
