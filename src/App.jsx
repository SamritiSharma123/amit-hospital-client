import { useState, useEffect } from "react";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/amit-hospital-client/" element={<Home />} />

      <Route path="/amit-hospital-client/about" element={<About />} />
    </Routes>
  );
}

export default App;