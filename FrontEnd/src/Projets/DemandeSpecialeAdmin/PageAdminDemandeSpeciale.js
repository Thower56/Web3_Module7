import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';
import { RecuperationListe } from '../../composants/RecuperationListe';


export const PageAdminDemandeSpeciale = (titre, url) => {
    const demande = RecuperationListe(url);
    return (
        <div>
            <NavigationDemandeSpeciale />
            <h1>{titre}</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>
    );
};

