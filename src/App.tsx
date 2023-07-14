import React, { useLayoutEffect, useState, useRef } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import Error404 from './pages/Error404'
import routes from './utils/routes'
import UAParser from 'ua-parser-js'
import Team from './pages/Team'
import useScroll from './hooks/useScroll'
import { Wrapper } from './components'
import useScrollMobile from './hooks/useScrollMobile'

const App: React.FC = () => {
  const [deviceType, setDeviceType] = useState('desktop')
  const scrollRef = useRef(null)
  const position = useScroll(scrollRef, 680)
  const positionMobile = useScrollMobile(scrollRef)
  useLayoutEffect(() => {
    const parser = new UAParser()
    parser.setUA(navigator.userAgent)
    const result = parser.getResult()
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
    const deviceType = result.device?.type || 'desktop'
    setDeviceType(deviceType)
  }, [])
  // console.log(positionMobile)
  return (
    <div ref={scrollRef}>
      <BrowserRouter>
      <Wrapper>
          <Routes>
            <Route element={<Layout position={position} positionMobile={positionMobile}/>}>
              <Route index element={<HomePage deviceType={deviceType} />} path={routes.home} />
              <Route element={<AboutPage />} path={routes.about} />
              <Route element={<Team />} path={routes.team} />
              <Route element={<ProjectPage deviceType={deviceType} />} path={routes.projects} />
              <Route element={<ContactPage />} path={routes.contact} />
              <Route element={<Error404 />} path={routes.error} />
            </Route>
          </Routes>
      </Wrapper>
      </BrowserRouter>
    </div>
  )
}

export default App
