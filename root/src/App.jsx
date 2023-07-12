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

function App() {
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
            element={<Films className="javi-category-tab" />}
          />
          <Route
            path="/commercials"
            element={<Commercials className="javi-category-tab" />}
          />
          <Route
            path="/music-videos"
            element={<MusicVideos className="javi-category-tab" />}
          />
          <Route
            path="/photography"
            element={<Photography className="javi-category-tab" />}
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
