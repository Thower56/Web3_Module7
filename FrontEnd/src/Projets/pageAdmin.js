import React from 'react';
import { ListePiecesAdmin } from '../composants/ListePiecesAdmin';
import { useState, useEffect } from 'react';

export const PageAdmin = () => {
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
            <h1>Admin Page</h1>
            <ListePiecesAdmin pieces={Pieces}/>
        </div>
    );
};

