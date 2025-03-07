import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesList />} /> 
     </Routes>

    </>
  )
}

export default App
