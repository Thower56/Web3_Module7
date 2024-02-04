import React from 'react';
import { useState, useEffect } from 'react';
import { ListePieces } from '../../composants/ListePieces';
import { NavigationDemandeSpeciale } from './BarreNavigationAdminDemandeSpeciale';
import { RecuperationListe } from '../../composants/RecuperationListe';


export const PageAdminTop5 = () => {
   const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale/top5');

   return(
       <div>
           <NavigationDemandeSpeciale />
           <h1>Top 5 des demandes speciales</h1>
           <ListePieces demandeSpeciale={demande}/>
       </div>)
};

