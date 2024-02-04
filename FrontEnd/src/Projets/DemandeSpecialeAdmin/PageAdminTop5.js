import React from 'react';
import { useState, useEffect } from 'react';
import { ListePieces } from '../../composants/ListePieces';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { RecuperationListe } from '../../composants/RecuperationListe';


export const PageAdminTop5 = () => {
   const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale/top5');

   return(
       <div>
           <BarreNavigationAdmin />
           <h1>Top 5 des demandes speciales</h1>
           <ListePieces demandeSpeciale={demande}/>
       </div>)
};

