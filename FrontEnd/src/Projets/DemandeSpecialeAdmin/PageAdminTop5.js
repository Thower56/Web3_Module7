import React from 'react';
import { useState, useEffect } from 'react';
import { ListePieces } from '../../composants/ListePieces';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { RecuperationListe } from '../../composants/RecuperationListe';
import { ListeTop5 } from '../../composants/ListeTop5';
import {useTranslation} from "react-i18next";

export const PageAdminTop5 = () => {
    const { t } = useTranslation();
   const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale-top5');
   console.log(demande);
  

   return(
       <div>
           <BarreNavigationAdmin />
            <h1>{t('titreTop5')}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                <ul> 
                    {demande.map((demande, index) => (
                        <div key={demande.titre} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", borderColor: "blue"}}>
                            <li>
                                <strong>{t('titre')}</strong>{demande.titre}<br/>
                                <strong>{t('artiste')}</strong>{demande.artiste}<br/>
                            </li>
                        </div>
                    ))}  
                </ul>
            </div> 
        </div>)
};

