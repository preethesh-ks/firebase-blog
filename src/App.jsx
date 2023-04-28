import Form from "./components/Form";
import PostBlog from "./components/PostBlog";
import PostDetais from "./components/PostDetais";
import Footer from "./components/partials/Footer"
import Header from "./components/partials/Header"

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
 

  return (
    // <div>
    //   <Header />
    //   <Form/>

    //   <Footer />
    // </div>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/posts" element={<PostBlog />} />
        <Route path="/posts/:id" element={<PostDetais />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
