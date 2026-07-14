import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import About from "./components/About"
function App() {
  const basename =
    import.meta.env.PROD ? "/react-gh-app" : "";

  return (
    <>

      <BrowserRouter basename={basename}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/welcome">Welcome</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App