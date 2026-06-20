import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000); // change to 60000 if you really want 60 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? <Loader /> : <Home />}
    </>
  );
}

export default App;