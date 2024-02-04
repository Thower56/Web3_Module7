import React, { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { RecuperationListe } from '../../composants/RecuperationListe';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';

export const handleClickDesactiver = async (id, demandeSpeciale, setDemandeSpeciale) => {
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