import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Films } from "./views/Films";
import { Commercials } from "./views/Commercials";
import { MusicVideos } from "./views/MusicVideos";
import { Photography } from "./views/Photography";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { NotFound } from "./views/NotFound";
import { Root } from "./views/Root";

import { contentDb } from "./data/db";

function App() {
  const filmContent = contentDb.content.filter(
    (item) => item.category === "films"
  );
  const commercialsContent = contentDb.content.filter(
    (item) => item.category === "commercials"
  );
  const musicVideosContent = contentDb.content.filter(
    (item) => item.category === "music-videos"
  );
  const photographyContent = contentDb.content.filter(
    (item) => item.category === "photography"
  );

  return (
    <div>
      <div style={{ height: "5vh", marginBottom: "15px" }}>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Root className="javi-category-tab" />} />
          <Route
            path="/films"
            element={
              <Films contentData={filmContent} className="javi-category-tab" />
            }
          />
          <Route
            path="/commercials"
            element={
              <Commercials
                contentData={commercialsContent}
                className="javi-category-tab"
              />
            }
          />
          <Route
            path="/music-videos"
            element={
              <MusicVideos
                contentData={musicVideosContent}
                className="javi-category-tab"
              />
            }
          />
          <Route
            path="/photography"
            element={
              <Photography
                contentData={photographyContent}
                className="javi-category-tab"
              />
            }
          />
          <Route
            path="/about"
            element={<About className="javi-category-tab" />}
          />
          <Route
            path="/contact"
            element={<Contact className="javi-category-tab" />}
          />
          <Route
            path="*"
            element={<NotFound className="javi-category-tab" />}
          />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
