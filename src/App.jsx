import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from "./assets/images";
import Com from "./components";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950  dark:text-white duration-200">
      <BrowserRouter>
        {/* Use sticky or fixed position for Navbar */}
        <Com.navbar logo={Images.map1} />
        <Routes>
          <Route path="/" element={<Com.Home />} />
          <Route path="/about" element={<Com.About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
