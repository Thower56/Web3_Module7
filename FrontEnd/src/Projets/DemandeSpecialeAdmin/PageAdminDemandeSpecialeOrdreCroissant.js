import React from 'react';
import { useState, useEffect } from 'react';
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { RecuperationListe } from '../../composants/RecuperationListe';
import {useTranslation} from "react-i18next";


export const PageAdminDemandeSpecialeOrdreCroissant = () => {

    const { t } = useTranslation();

    const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale/dateOrdreCroissant');
    return (
        <div>
            <BarreNavigationAdmin />
            <h1>{t('classement')}</h1>
            <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>)
};

