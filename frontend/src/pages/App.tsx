import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Menu} from "./Menu";
import {HomePage} from "./HomePage";
import * as React from "react";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/confirm" element={<HomePage />}/>
        <Route path="/shoppingcart" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}
