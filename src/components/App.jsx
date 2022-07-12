import React, { useEffect, useState } from "react";
import Loading from "./Loading/Loading";
import Main from "./Main";

function App() {
  const [onLoad, setOnLoad] = useState(false);
  const [bodyLoad, setBodyLoad] = useState(false);

  useEffect(() => {
    document.body.onload = function () {
      setOnLoad(true);
      setTimeout(() => {
        setBodyLoad(true);
        document.body.style.overflowY = "scroll";
      }, 5000);
    };
  }, []);

  return (
    <div className={"app"}>
      <Loading bodyOnload={bodyLoad} onLoad={onLoad} />
      <Main onLoad={onLoad} />
    </div>
  );
}

export default App;
