import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import RandomArticle from './components/randomArticle'
import { PostForm } from './pages/PostForm'
import Register from './pages/Register'

function App() {


  return (
    <>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/newPost" element={<PostForm />}/>
      <Route path="/randomArticle" element={<RandomArticle />} />
     </Routes>

    </>
  )
}

export default App
