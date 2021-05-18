import { Suspense } from "react";
import Project1 from "./Project1";
import "./App.scss";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Project1 />
    </>
  );
}

export default App;
