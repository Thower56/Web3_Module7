import React from 'react';
import { Route } from 'react-router-dom';
import  { BarreNavigationAdmin } from './BarreNavigationAdmin';
import ListeDemandeSpecialeActives from '../composants/ListeDemandeSpecialeActives';
import ListeDemandeSpecialeDateCroissante from '../composants/ListeDemandeSpecialeDateCroissante';
import ListeDemandeSpecialeDateDecroissante from '../composants/ListeDemandeSpecialeDateDecroissante';
import {useTranslation} from "react-i18next";


export const PageAdminGestionDemandeSpeciale = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('gestion')}</h1>
      <BarreNavigationAdmin />
      <Route path="/demandes-speciales-actives" component={ListeDemandeSpecialeActives} />
      <Route path="/demandes-speciales-date-croissante" component={ListeDemandeSpecialeDateCroissante} />
      <Route path="/demandes-speciales-date-decroissante" component={ListeDemandeSpecialeDateDecroissante} />
    </div>
  );
};