import '../styles/App.css';
import {Route, Routes} from 'react-router-dom'
import {homepage} from "./homepage";
import * as React from "react";

export const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={homepage}/>
        <Route path="/home"element={homepage}/>
        <Route path="/menu" element={homepage}/>
        <Route path="/confirm" element={homepage}/>
        <Route path="/shoppingcart" element={homepage}/>
      </Routes>
  );
}
