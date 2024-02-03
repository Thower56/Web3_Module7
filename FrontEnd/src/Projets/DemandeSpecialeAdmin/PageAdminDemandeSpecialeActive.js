import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { RecuperationListe } from '../../composants/RecuperationListe';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';

export const PageAdminDemandeSpecialeActive = () => {
    // const [demande, setDemande] = useState([]);

    // useEffect(() => {
    //     getListeDemandes();
    // }, []);

    // const getListeDemandes = async () => {
    //     try {
    //         const resultat = await fetch('http://localhost:8000/api/demandeSpeciale/active');
    //         if (!resultat.ok) {
    //             throw new Error('Erreur lors de la récupération des données');
    //         }
    //         const body = await resultat.json();
    //         setDemande(body);
    //     } catch (error) {
    //         console.log('Error:', error);
    //     }
    // };
    // return (
    //     <div>
    //         <h1>Liste des demandes speciales actives</h1>
    //         <ListeDemandeSpeciale demandeSpeciale={demande}/>
    //     </div>
    // );

    const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale/active');
    return(
        <div>
            <NavigationDemandeSpeciale />
            <h1>Liste des demandes speciales actives</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>
    )

};

