import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Results from './pages/Results'
import Freelance from './pages/Freelance'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/survey/:questionNumber" element={<Survey />}></Route>
      <Route path="/freelance" element={<Freelance />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals();
 */
