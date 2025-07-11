import { BrowserRouter, Route, Routes, } from 'react-router'
import './App.css'
import Header from './components/page components/Header'
import Resume from './components/page components/Resume'
import Home from './components/page components/Home'
import Contact from './components/page components/Contact'
import Projects from './components/profile components/Projects'
import Profile from './components/profile components/Profile'


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
                <Route path = '/Projects' element= {<Projects />}> </Route>
                <Route path="/Profile" element={<Profile />} />
              </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
