import React, { useState } from "react";
import Loading from "./Loading/Loading";

const Main = React.lazy(() => {
  return Promise.all([
    import("./Main"),
    new Promise((resolve) => setTimeout(resolve, 5000)),
  ]).then(([moduleExports]) => moduleExports);
});

function App() {
  const [onLoad, setOnLoad] = useState(false);

  window.onload = function () {
    setTimeout(() => {
      setOnLoad(true);
    }, 5000);
  };

  return (
    <div className={"app"}>
      <React.Suspense fallback={<Loading />}>
        <Main onLoad={onLoad} />
      </React.Suspense>
    </div>
  );
}

export default App;
