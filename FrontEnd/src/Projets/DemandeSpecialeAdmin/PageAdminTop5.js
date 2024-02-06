import React from 'react';
import { useState, useEffect } from 'react';
import { ListePieces } from '../../composants/ListePieces';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { RecuperationListe } from '../../composants/RecuperationListe';
import { ListeTop5 } from '../../composants/ListeTop5'
import { ListeDemandeSpeciale } from '../../composants/ListeDemandeSpeciale';

export const PageAdminTop5 = () => {
   const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale-top5');
   console.log(demande);

   return(
       <div>
           <BarreNavigationAdmin />
           <h1>Top 5 des demandes speciales</h1>
           <ListeDemandeSpeciale demandeSpeciale={demande}/>
        </div>)
};

