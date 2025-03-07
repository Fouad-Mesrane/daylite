import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import RandomArticle from './components/randomArticle'


function App() {


  return (
    <>
      <h1>a "log" from a citizen</h1>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/randomArticle" element={<RandomArticle />} />
     </Routes>

    </>
  )
}

export default App
