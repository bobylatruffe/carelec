import { Fragment } from "react";

import { Routes, Route } from 'react-router-dom';

import Menu from "./Component/Menu/menu"
import Accueil from "./Component/Accueil/Accueil";
import GetImmat from "./Component/GetImmat/GetImmat";
import NotreGarage from "./Component/NotreGarage/NotreGarage";

function App() {
  return (
    <Fragment>
      <Menu />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path="/notre-garage" element={
          <NotreGarage />
        } />
      </Routes>
    </Fragment>
  );
}

export default App;
