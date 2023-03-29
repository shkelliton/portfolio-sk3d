import { AboutMe } from "../components/AboutMe";
import { PreviewVideo } from "../components/PreviewVideo";
import { Skills } from "../components/Skills";

function HomePage() {
  return (
    <div>
      <div className="container">
        <div>
          <PreviewVideo></PreviewVideo>
        </div>
        <div className="container">
          <AboutMe></AboutMe>
        </div>
        <div className="container-sm" id="gallery">
          gallery broke
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default HomePage;
