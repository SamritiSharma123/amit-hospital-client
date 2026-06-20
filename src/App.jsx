import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);   // test with 4 sec first

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;