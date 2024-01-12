import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/layout'
import SearchPage from './components/SearchPage'
import Payout from './components/Payout'
const App = () => {
  return (
    <Router>
      <Header/>
<Routes>
<Route path='/' element={<Layout/>} />
<Route path='/search/:searchTerm' element={<Payout/>} />

</Routes>
    </Router>
  )
}

export default App