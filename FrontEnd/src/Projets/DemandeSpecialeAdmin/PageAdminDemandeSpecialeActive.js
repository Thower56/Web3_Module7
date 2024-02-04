import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';
import { handleClickDesactiver } from './handleClickDesactiver';

export const PageAdminDemandeSpecialeActive = () => {
    const [demandeSpeciale, setDemandeSpeciale] = useState([]);

    useEffect(() => {
        const listeDemandesActives = async () => {
            try {
                const resultat = await fetch('http://localhost:8000/api/demandeSpeciale/active');
                if (!resultat.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const listeDemande = await resultat.json();
                setDemandeSpeciale(listeDemande);
            } catch (error) {
                console.log('Error:', error);
            }
        };
        listeDemandesActives();
    }, [])

    return(
        <div>
            <NavigationDemandeSpeciale />
            <h1>Liste des demandes speciales actives</h1>
            <ListeDemandeSpeciale demandeSpeciale={demandeSpeciale} handleClickDesactiver={handleClickDesactiver} setDemandeSpeciale={setDemandeSpeciale}/>
        </div>
    )

};

