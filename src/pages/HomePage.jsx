import { AboutMe } from "../components/AboutMe";
import { GalleryHome } from "../components/GalleryHome";
import { PreviewVideo } from "../components/PreviewVideo";
import { Skills } from "../components/Skills";
import "../App.css";

function HomePage() {
  return (
    <>
        <AboutMe />
        <br/>
        <br/>
        <br/>
        <Skills />
    </>
  );
}

export default HomePage;
