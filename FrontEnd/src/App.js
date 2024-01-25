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
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
