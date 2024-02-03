import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../composants/ListeDemandeSpeciale';

export const PageAdminDemandeSpecialeActive = () => {
    const [demande, setDemande] = useState([]);

    useEffect(() => {
        getListeDemandes();
    }, []);

    const getListeDemandes = async () => {
        try {
            const resultat = await fetch('/api/demandeSpeciale/active');
            const body = await resultat.json();
            setDemande(body);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    return (
        <div>
            <h1>Repertoire Page</h1>
            console.log(demande);
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>
    );
};

