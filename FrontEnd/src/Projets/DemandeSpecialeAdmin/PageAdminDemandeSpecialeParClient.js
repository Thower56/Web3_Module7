import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { handleClickDesactiver } from './handleClickDesactiver';
import {useTranslation} from "react-i18next";

export const PageAdminDemandeSpecialeParClient = () => {
    const { t } = useTranslation();
    const [demandeSpeciale, setDemandeSpeciale] = useState([]);
    const [nomClient, setNomClient] = useState('');


    useEffect(() => {

        const listeDemandesParClient = async () => {
            try {
                if(nomClient !== '') {
                    const resultat = await fetch(`http://localhost:8000/api/demandeSpeciale/${nomClient}`);
                    if (!resultat.ok) {
                        throw new Error('Erreur lors de la récupération des données');
                    }
                    const listeDemande = await resultat.json();
                    setDemandeSpeciale(listeDemande);                    
                }
                else{
                    setDemandeSpeciale([]);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };
        listeDemandesParClient();
    }, [nomClient])

    return(
        <div>
            <BarreNavigationAdmin />
            <h1>{t('listeDemandesSpeciales')}</h1>
            <p>{t('nom')}</p>
            <input type="text" id="nomClient" onChange={(e) => setNomClient(e.target.value)}></input>
            <ListeDemandeSpeciale demandeSpeciale={demandeSpeciale} handleClickDesactiver={handleClickDesactiver} setDemandeSpeciale={setDemandeSpeciale}/>
        </div>
    )

};
