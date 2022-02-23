import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Menu} from "./Menu";
import {HomePage} from "./HomePage";
import {Confirmation} from "./Confirmation";
import * as React from "react";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/confirm" element={<Confirmation />}/>
        <Route path="/shoppingcart" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}
