import React, { useState, useEffect } from 'react';

export const RecuperationListe = (url) => {
    const [demande, setDemande] = useState([]);

    useEffect(() => {
        const getListeDemandes = async () => {
            try {
                const resultat = await fetch(url);
                if (!resultat.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const body = await resultat.json();
                setDemande(body);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        getListeDemandes();
    }, [url]);

    return demande;
}