import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { HomePage } from "./pages/Homepage";
import { AboutPage } from "./pages/Aboutpage";
import { BlogPage } from "./pages/Blogpage";
import { NotFoundPage } from "./pages/Notfoundpage";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/posts" element={ <BlogPage /> } />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
