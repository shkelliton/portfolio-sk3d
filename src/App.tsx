//component imports

//react imports

import "react-image-gallery/styles/css/image-gallery.css";
import HomePage from "./scripts/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectPage from "./scripts/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ProjectPage" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
