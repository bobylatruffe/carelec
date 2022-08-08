import { Fragment } from "react";

import { Routes, Route } from 'react-router-dom';

import Menu from "./Component/Menu/menu"
import Accueil from "./Component/Accueil/Accueil";
import NotreGarage from "./Component/NotreGarage/NotreGarage";
import Ccm from "./Component/Ccm/Ccm";

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
      </Routes>
    </Fragment>
  );
}

export default App;
