import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';
import { PageAccueil } from "./Projets/PageAccueil";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BarreNavigation } from './Projets/BarreNavigation.js';
import { PageRepertoire } from './Projets/pageRepertoire.js';
import { PageAjouter } from './Projets/pageAjouter.js';
import { PageAdmin } from './Projets/pageAdmin.js';
import { PageRepertoireAdmin } from './Projets/PageRepertoireAdmin.js';
import { PageModifier } from './Projets/PageModifier.js';
import { PageClientDemandeSpecial } from './Projets/PageClientDemandeSpecial.js';
import { PageAdminDemandeSpecialeTotal } from './Projets/DemandeSpecialeAdmin/PageAdminDemandeSpecialeTotal.js';
import { PageAdminDemandeSpecialeActive } from './Projets/DemandeSpecialeAdmin/PageAdminDemandeSpecialeActive.js';
import { PageAdminDemandeSpecialeOrdreCroissant } from './Projets/DemandeSpecialeAdmin/PageAdminDemandeSpecialeOrdreCroissant.js';
import { PageAdminDemandeSpecialeOrdreDecroissant } from './Projets/DemandeSpecialeAdmin/PageAdminDemandeSpecialeOrdreDecroissant.js';
import { PageAdminDemandeSpecialeParClient } from './Projets/DemandeSpecialeAdmin/PageAdminDemandeSpecialeParClient.js';
import { PageAdminTop5 } from './Projets/DemandeSpecialeAdmin/PageAdminTop5.js';
import {PageSupprimer} from './Projets/PageSupprimer.js';

function App() {
  return (
    <BrowserRouter>
    <Container>
    <BarreNavigation />
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/repertoire" element={<PageRepertoire />} />
        <Route path="/ajouter" element={<PageAjouter />} />
        <Route path="/admin" element={<PageAdmin />} />
        <Route path="/repertoireAdmin" element={<PageRepertoireAdmin />} />
        <Route path="/demandeSpecial" element={<PageClientDemandeSpecial />} />
        <Route path="/modifier/:id" element={<PageModifier />} />
        <Route path="/supprimer/:id" element={<PageSupprimer />} />
        <Route path="/creer-piece" element={<PageAjouter />} />
        <Route path="/demandes-speciales-total" element={<PageAdminDemandeSpecialeTotal />} />
        <Route path="/demandes-speciales-actives" element={<PageAdminDemandeSpecialeActive />} />
        <Route path="/demandes-speciales-date-croissante" element={<PageAdminDemandeSpecialeOrdreCroissant />} />
        <Route path="/demandes-speciales-date-decroissante" element={<PageAdminDemandeSpecialeOrdreDecroissant />} />
        <Route path="/demandes-speciales-par-client" element={<PageAdminDemandeSpecialeParClient />} />
        <Route path="/top5" element={<PageAdminTop5 />} />
        <Route path="/supprimer/:id" element={<PageSupprimer />} />
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
