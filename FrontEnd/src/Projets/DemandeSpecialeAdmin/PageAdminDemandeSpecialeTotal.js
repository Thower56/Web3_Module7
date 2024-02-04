import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { RecuperationListe } from '../../composants/RecuperationListe';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';

export const PageAdminDemandeSpecialeTotal = () => {
    const [demandeSpeciale, setDemandeSpeciale] = useState([]);

    useEffect(() => {
        const fetchDemandesSpeciales = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/demandeSpeciale');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const demande = await response.json();
                setDemandeSpeciale(demande);
            } catch (error) {
                console.error('Erreur lors de la récupération des demandes spéciales:', error);
            }
        };

        fetchDemandesSpeciales();
    }, []);

    const handleClickDesactiver = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/demandeSpeciale/inactif/${id}`, {
                method: 'PUT',
            });
            if (response.ok) {
                const updatedDemandeSpeciale = demandeSpeciale.map(demande => {
                    if (demande._id === id) {
                        return { ...demande, statut: 'inactif' };
                    }
                    return demande;
                });
                setDemandeSpeciale(updatedDemandeSpeciale);
            } else {
                console.error('Erreur lors de la désactivation de la demande spéciale');
            }
        } catch (error) {
            console.error('Erreur lors de la désactivation de la demande spéciale:', error);
        }
    };

    return (
        <div>
            <NavigationDemandeSpeciale />
            <h1>Liste des demandes spéciales</h1>
            <ListeDemandeSpeciale demandeSpeciale={demandeSpeciale} handleClickDesactiver={handleClickDesactiver} />
        </div>
    );
};
