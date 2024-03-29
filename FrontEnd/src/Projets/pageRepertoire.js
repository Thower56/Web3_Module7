import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListePieces } from '../composants/ListePieces';
import { pieces } from '../composants/contenu-pieces-test';
import {useTranslation} from "react-i18next";

export const PageRepertoire = () => {
    const { t } = useTranslation();
    const [Pieces, setPieces] = useState([]);
    const [selectionTri, setselectionTri] = useState('trieParCategorie');
    const [filtre, setFiltre] = useState('');
    
    useEffect(() => {
        getListePieces();
    }, [selectionTri, filtre]);

    const getListePieces = async () => {
        try {
            const resultat = await fetch(`http://localhost:8000/api/pieces`);
            const body = await resultat.json();
            const regexp = new RegExp(filtre, 'i');
            const liste = body.filter((piece) => regexp.test(piece.titre.toLowerCase()) || regexp.test(piece.artiste.toLowerCase()) || regexp.test(piece.categorie.toLowerCase()));
            setPieces(liste);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const changerFiltre = (e) => {
        console.log(e.target.value);
        setFiltre(e.target.value);
    }
    
    const changementDeTri = (e) => {
        if(e.target.value == null){
            setselectionTri(/%%/);
        }
        setselectionTri(e.target.value)
    };

    return (
        <div className='container'>
            <div className='row'>
                <h1>{t('repertoire')}</h1>
                <div>
                    <span>{t('spanDS')}</span>
                </div>
                <div className='col-2'>
                    <select id='selection' className='form-control' onChange={changementDeTri}>
                        <option value="trieParCategorie">{t('categorie')}</option>
                        <option value="trieParArtiste">{t('artiste')}</option>
                        <option value="trieParTitre">{t('groupe')}</option>
                    </select>
                </div>
                <span>{t('recherche')}</span>
                <div className='col-4'> 
                    <input className='form-control' placeholder='Filtre...' onChange={changerFiltre}></input>
                </div>
            </div>
            <hr></hr>
            <div>
                <ListePieces pieces={Pieces} value={selectionTri}/>
            </div>
        </div>
    );
};

