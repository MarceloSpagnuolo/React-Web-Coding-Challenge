import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { IndexPage } from "./pages/index";
import { Detail } from "./pages/detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
