import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 60000);   // 60000 ms = 60 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;