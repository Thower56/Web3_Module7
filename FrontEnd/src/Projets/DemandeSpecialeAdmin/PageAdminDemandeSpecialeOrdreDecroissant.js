import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';
import { RecuperationListe } from '../../composants/RecuperationListe';

export const PageAdminDemandeSpecialeOrdreDecroissant = () => {
    // const [demande, setDemande] = useState([]);

    // useEffect(() => {
    //     getListeDemandes();
    // }, []);

    // const getListeDemandes = async () => {
    //     try{
    //         const resultat = await fetch ('http://localhost:8000/api/demandeSpeciale/dateOrdreDeCroissant');
    //         if (!resultat.ok) {
    //             throw new Error('Erreur lors de la récupération des données');
    //         }
    //         const listeDemande = await resultat.json();
    //         setDemande(listeDemande);
    //     }
    //     catch (error) {
    //         console.log('Error:', error);
    //     }
    // };
    // return(
    //     <div>
    //         <NavigationDemandeSpeciale />
    //         <h1>Demandes classees par ordre antechronologique</h1>
    //         <ListeDemandeSpeciale demandeSpeciale={demande}/>
    //     </div>)

    const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale/dateOrdreDeCroissant');
    return (
        <div>
            <NavigationDemandeSpeciale />
            <h1>Demandes classees par ordre antechronologique</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>)
};