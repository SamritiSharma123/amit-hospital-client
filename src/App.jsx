import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;