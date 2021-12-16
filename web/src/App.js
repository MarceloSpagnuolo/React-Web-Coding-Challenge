import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { IndexPage } from "./pages/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
      </Routes>
    </>
  );
}

export default App;
