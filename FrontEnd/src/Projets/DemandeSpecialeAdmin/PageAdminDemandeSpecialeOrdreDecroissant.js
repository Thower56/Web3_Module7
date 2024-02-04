import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { RecuperationListe } from '../../composants/RecuperationListe';

export const PageAdminDemandeSpecialeOrdreDecroissant = () => {
    const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale/dateOrdreDeCroissant');
    return (
        <div>
            <BarreNavigationAdmin />
            <h1>Demandes classees par ordre antechronologique</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>)
};