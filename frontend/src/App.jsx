import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RandomArticle from "./components/RandomArticle";
import { PostForm } from "./pages/PostForm";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newPost" element={<PostForm />} />
        <Route path="/randomArticle" element={<RandomArticle />} />
      </Routes>
    </>
  );
}

export default App;
