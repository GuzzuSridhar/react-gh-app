import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>

      <BrowserRouter basename="/react-gh-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/about" element={<Welcome />} />

        </Routes>
      </BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/about">About</Link>
      </nav>

    </>
  )
}

export default App