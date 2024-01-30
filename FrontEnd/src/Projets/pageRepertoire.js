import React from 'react';
import { useState, useEffect } from 'react';

import { ListePieces } from '../composants/ListePieces';
import { pieces } from '../composants/contenu-pieces-test';

export const PageRepertoire = () => {
    const [Pieces, setPieces] = useState([]);

    useEffect(() => {
        getListePieces();
    }, []);

    const getListePieces = async () => {
        try {
            const resultat = await fetch(`/api/pieces`);
            const body = await resultat.json();
            setPieces(body);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    
    return (
        <div>
            <h1>Repertoire Page</h1>
            <ListePieces pieces={Pieces}/>
        </div>
    );
};

