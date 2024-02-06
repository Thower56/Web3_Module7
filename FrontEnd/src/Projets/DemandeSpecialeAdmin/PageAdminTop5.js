import React from 'react';
import { useState, useEffect } from 'react';
import { ListePieces } from '../../composants/ListePieces';
import { BarreNavigationAdmin } from './BarreNavigationAdmin';
import { RecuperationListe } from '../../composants/RecuperationListe';
import { ListeTop5 } from '../../composants/ListeTop5';

export const PageAdminTop5 = () => {
   const demande = RecuperationListe('http://localhost:8000/api/demandeSpeciale-top5');
   console.log(demande);
  

   return(
       <div>
           <BarreNavigationAdmin />
            <h1>Top 5 des demandes speciales</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                <ul> 
                    {demande.map((demande, index) => (
                        <div key={demande.titre} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", borderColor: "blue"}}>
                            <li>
                                <strong>Titre: </strong>{demande.titre}<br/>
                                <strong>Artiste: </strong>{demande.artiste}<br/>
                            </li>
                        </div>
                    ))}  
                </ul>
            </div> 
        </div>)
};

