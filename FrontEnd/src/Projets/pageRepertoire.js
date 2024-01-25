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
        const resultat = await fetch("/api/pieces");
        const body = await resultat.json();
        setPieces(body);
    };
    
    return (
        <div>
            <h1>Repertoire Page</h1>
            <ListePieces pieces={pieces}/>
        </div>
    );
};

