import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Nav from "./nav";


const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./About"));
const  Contact = lazy(() => import("./components/Contact"));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Nav />
        </>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
