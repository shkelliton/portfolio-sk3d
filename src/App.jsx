//component imports
//react imports

import "./App.css";
import "./scss/styles.scss"
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectPage from "./pages/ProjectPage";

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
