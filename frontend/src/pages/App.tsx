import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Menu} from "./Menu";
import {HomePage} from "./HomePage";
import {Status} from "./Status";
import * as React from "react";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/confirm" element={<HomePage />}/>
        <Route path="/status" element={<Status />}/>
        <Route path="/shoppingcart" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}
