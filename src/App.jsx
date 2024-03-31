import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Authentication from "./components/Authentication/Authentication";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={isLogin ? <HomePage /> : <Authentication />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
