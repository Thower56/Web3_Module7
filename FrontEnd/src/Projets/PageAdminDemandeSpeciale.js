import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../composants/ListeDemandeSpeciale';

export const PageAdminDemandeSpeciale = () => {
    const [demande, setDemande] = useState([]);

    useEffect(() => {
        getListeDemandes();
    }, []);

    const getListeDemandes = async () => {
        try {
            const resultat = await fetch('/api/demandeSpeciale');
            const body = await resultat.json();
            setDemande(body);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    return (
        <div>
            <h1>Liste des demandes speciales</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>
    );
};

