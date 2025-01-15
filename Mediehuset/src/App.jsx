import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/navigation/Nav";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { Login } from "./pages/Login";
import { Camps } from "./pages/Camps";
import { Billet } from "./pages/Billeleter";
import { Praktisk } from "./pages/Praktisk";
import DetailsPage from "./pages/Details";
import { Footer } from "./components/footer/Footer";

function App() {

  return (
    <>
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Events" element={<Events />} />
          <Route path="/pages/Camps" element={<Camps />} />
          <Route path="/pages/Billeleter" element={<Billet />} />
          <Route path="/pages/praktisk" element={<Praktisk />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Details/:id" element={<DetailsPage />} />
          {/* <Route path="*" element={<Errorpage />} /> */}
        </Routes>
        < Footer />
    </Router>
     
    </>
  )
}

export default App
