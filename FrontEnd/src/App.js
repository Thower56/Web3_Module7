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
import { PageModifier } from './Projets/PageModifier.js';
import { PageClientDemandeSpecial } from './Projets/PageClientDemandeSpecial.js';
import { PageAdminDemandeSpeciale } from './Projets/PageAdminDemandeSpeciale.js';
import { PageAdminDemandeSpecialeActive } from './Projets/PageAdminDemandeSpecialeActive.js';
import { PageAdminTop5 } from './Projets/PageAdminTop5.js';
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
        <Route path="/demandeSpecial" element={<PageClientDemandeSpecial />} />
        <Route path="/modifier/:id" element={<PageModifier />} />
        <Route path="/supprimer/:id" element={<PageAdmin />} />
        <Route path="/admin/creer-piece" element={<PageAjouter />} />
        <Route path="/admin/demandes-speciales" element={<PageAdminDemandeSpeciale />} />
        <Route path="/admin/demandes-speciales-actives" element={<PageAdminDemandeSpecialeActive />} />
        <Route path="/admin/top5" element={<PageAdminTop5 />} />
        <Route path="/supprimer/:id" element={<PageSupprimer />} />
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
