import React from 'react';
import { useState, useEffect } from 'react';
import { ListePieces } from '../composants/ListePieces';

export const PageAdminTop5 = () => {
    console.log("PageAdminTop5");
    const [pieces, setPieces] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        getTop5();
    }, []);

    const getTop5 = async () => {
        console.log("getTop5");
        try {
            const resultat = await fetch('/api/demandeSpeciale/top');
            console.log("resultat: ", resultat);
            const body = await resultat.json();
            setPieces(body);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    return (
        <div>
            <h1>Repertoire Page</h1>
            <ListePieces pieces={pieces}/>
        </div>
    );
};

