import { BrowserRouter, Route, Routes, } from 'react-router'
import './App.css'
import Header from './components/Header'
import Resume from './components/Resume'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <div>
              <Routes>
                <Route path = '/' element= {<Home />}> </Route>
                <Route path = '/Resume' element= {<Resume />}> </Route>
                <Route path = '/Contact' element= {<Contact />}> </Route>
                <Route path = '/Home' element= {<Home />}> </Route>
              </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
