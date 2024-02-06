import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { RecuperationListe } from '../../composants/RecuperationListe';


export const PageAdminDemandeSpeciale = (url) => {
    const demande = RecuperationListe(url);
    return (
        <div>
            <BarreNavigationAdmin />
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>
    );
};

