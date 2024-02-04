import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { RecuperationListe } from '../../composants/RecuperationListe';


export const PageAdminDemandeSpeciale = (titre, url) => {
    const demande = RecuperationListe(url);
    return (
        <div>
            <BarreNavigationAdmin />
            <h1>{titre}</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>
    );
};

