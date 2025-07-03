import { BrowserRouter, Route, Routes, } from 'react-router'
import './App.css'
import Header from './components/Header'
import Resume from './components/Resume'
import Home from './components/Home'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <div>
            <Home />
          </div>
          <div>
              <Routes>
                <Route path = '/Resume' element= {<Resume />}> </Route>
              </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
