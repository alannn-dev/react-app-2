import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Error from './components/Error'
import GlobalStyle from './utils/styles/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider>
    <SurveyProvider>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/survey/:questionNumber" element={<Survey />}></Route>
          <Route path="/freelances" element={<Freelances />}></Route>
          <Route path="/results" element={<Results />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
      <Footer />
    </SurveyProvider>
  </ThemeProvider>
)
