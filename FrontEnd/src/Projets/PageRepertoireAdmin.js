import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListePiecesAdmin } from '../composants/ListePiecesAdmin';

export const PageRepertoireAdmin = () => {
    const [Pieces, setPieces] = useState([]);

    useEffect(() => {
        getListePieces();
    }, []);

    const getListePieces = async () => {
        try {
            const resultat = await fetch(`http://localhost:8000/api/pieces`);
            const body = await resultat.json();
            setPieces(body);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    
    return (
        <div>
            <h1>Repertoire Page</h1>
            <ListePiecesAdmin pieces={Pieces}/>
        </div>
    );
};

