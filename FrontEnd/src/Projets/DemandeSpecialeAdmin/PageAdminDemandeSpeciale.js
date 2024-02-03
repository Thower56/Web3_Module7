import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';
import { RecuperationListe } from '../../composants/RecuperationListe';


export const PageAdminDemandeSpeciale = (titre, url) => {
    const demande = RecuperationListe(url);
    // const [demande, setDemande] = useState([]);

    // useEffect(() => {
    //     getListeDemandes();
    // }, []);

    // const getListeDemandes = async () => {
    //     try {
    //         const resultat = await fetch('http://localhost:8000/api/demandeSpeciale');
    //         if (!resultat.ok) {
    //             throw new Error('Erreur lors de la récupération des données');
    //         }
    //         const body = await resultat.json();
    //         setDemande(body);
    //     } catch (error) {
    //         console.log('Error:', error);
    //     }
    // };
    return (
        <div>
            <NavigationDemandeSpeciale />
            <h1>{titre}</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>
    );
};

