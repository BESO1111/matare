import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Pageshome from "./pages/Pageshome";

import Shetavazeba from "./pages/Shetavazeba";
import Sastumro from "./pages/Sastumro";
import Dazgveva from "./pages/Dazgveva";
import Sachiroinfo from "./pages/Sachiroinfo";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      {/* header------------------------------------------------------------ */}
      <header>
        <h1 className="logo">matare</h1>
        <nav>
          <ul className="mainnav">
            <li>
              <Link className="link" to="/">
                ავიაბილეთები
              </Link>
            </li>
            <li>
              <Link className="link" to="shetavadedzeba">
                შეთავაზება
              </Link>
            </li>
            <li>
              <Link className="link" to="sastumro">
                სასტუმრო
              </Link>
            </li>
            <li>
              <Link className="link" to="dazgveva">
                დაზღვევა
              </Link>
            </li>
            <li>
              <Link className="link" to="sachiroinfo">
                საჭირო ინფორმაცია
              </Link>
            </li>
            {/* aq unda davamato 2 routeri */}
            <li>
              <Link className="link" to="contact">
                კონტაქტი
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Pageshome />} />
        <Route path="shetavadedzeba" element={<Shetavazeba />} />
        <Route path="sastumro" element={<Sastumro />} />
        <Route path="dazgveva" element={<Dazgveva />} />
        <Route path="sachiroinfo" element={<Sachiroinfo />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* main---------------------------------------------------------------- */}
      <main></main>

      {/* footer--------------------------------------------------------------------------------- */}
      <footer></footer>
    </>
  );
}

export default App;
