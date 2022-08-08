import { Fragment } from "react";

import { Routes, Route } from 'react-router-dom';

import Menu from "./Component/Menu/menu"
import Accueil from "./Component/Accueil/Accueil";
import NotreGarage from "./Component/NotreGarage/NotreGarage";
import Ccm from "./Component/Ccm/Ccm";
import Estimer from "./Component/Estimer/Estimer";

function App() {
  return (
    <Fragment>
      <Menu />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path="/notre-garage" element={
          <NotreGarage />
        } />
        <Route path="/ccm" element={
          <Ccm />
        } />
        <Route path="/estimer" element={
          <Estimer />
        } />
      </Routes>
    </Fragment>
  );
}

export default App;
