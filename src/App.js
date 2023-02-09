
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Pageshome from "./pages/Pageshome";

import Shetavazeba from "./pages/Shetavazeba";
import Sastumro from "./pages/Sastumro";
import Dazgveva from "./pages/Dazgveva";
import Faq from "./pages/Faq";


import Contact from "./pages/Contact";
import Comfpolit from "./pages/Comfpolit";
function App() {
  return (
    <>


    
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
           <div className="dropdown">
              <span className="sachirodropdown">საჭირო ინფორმაცია</span>
              </div>
              <div className="dropdowncontent">
                
<Link to="faq" className="drop1">ხშირად დასმული კითხვები </Link>
<Link/>

<Link to="Comfpolit" className="drop2">კომფიდენციალურობის პოლიტიკა</Link> 
              </div>
            </li>
            
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
     <Route path="faq" element={<Faq/>}/>
     <Route path="Comfpolit" element={<Comfpolit/>}/>
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
