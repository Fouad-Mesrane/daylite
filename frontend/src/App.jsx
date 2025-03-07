import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ArticlesList from './components/ArticlesList'


function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/Articles" element={<ArticlesList />} />
     </Routes>

    </>
  )
}

export default App
