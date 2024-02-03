import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListePieces } from '../composants/ListePieces';
import { pieces } from '../composants/contenu-pieces-test';

export const PageRepertoire = () => {
    const [Pieces, setPieces] = useState([]);
    const [selectionTri, setselectionTri] = useState('trieParCategorie');
    useEffect(() => {
        getListePieces();
    }, [selectionTri]);

    const getListePieces = async () => {
        try {
            const resultat = await fetch(`http://localhost:8000/api/pieces`);
            const body = await resultat.json();
            setPieces(body);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    
    const changementDeTri = (e) => {
        setselectionTri(e.target.value)
    };

    return (
        <div className='container'>
            <div className='row'>
                <h1>Repertoire Page</h1>
                <div>
                    <span>Trier par:</span>
                </div>
                <div className='col-6'>
                    <select id='selection' onChange={changementDeTri}>
                        <option value="trieParArtiste">Artiste</option>
                        <option value="trieParCategorie">Categorie</option>
                        <option value="trieParTitre">Titre</option>
                    </select>
                </div>
            </div>
            <hr></hr>
            <div>
                <ListePieces pieces={Pieces} value={selectionTri}/>
            </div>
        </div>
    );
};

