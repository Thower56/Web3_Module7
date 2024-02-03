import React from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { RecuperationListe } from '../../composants/RecuperationListe';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';

export const PageAdminDemandeSpecialeTotal = () => {


    const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale');
    return(
        <div>
            <NavigationDemandeSpeciale />
            <h1>Liste des demandes speciales actives</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>
    )

};
