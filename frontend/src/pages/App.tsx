import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Menu} from "./Menu";
import {HomePage} from "./HomePage";
import {Confirmation} from "./Confirmation";
import {Employee} from "./Employee";
import {Status} from "./Status";
import * as React from "react";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/confirm" element={<Confirmation />}/>
        <Route path="/status" element={<Status />}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/shoppingcart" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}
