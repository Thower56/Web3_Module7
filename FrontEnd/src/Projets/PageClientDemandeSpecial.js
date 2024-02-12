import {React, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { PiecesDemandeSpecialeClient } from "../composants/PiecesDemandeSpecialeClient";
import { Button } from "react-bootstrap";
import { ListePieces } from "../composants/ListePieces";
import {useTranslation} from "react-i18next";


export const PageClientDemandeSpecial = () => {
    const { t } = useTranslation();
    const [client, setClient] = useState('');
    const [demandePieces, setListePieces] = useState([]);
    const [Pieces, setPieces] = useState([]);
    const [filtreTitre, setfiltreTitre] = useState('');
    const [filtreArtiste, setfiltreArtiste] = useState('');
    const [filtreCategorie, setfiltreCategorie] = useState('');
    const [selectionTri, setselectionTri] = useState('trieParCategorie');
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        getListePieces();
    }, [demandePieces,selectionTri, filtreTitre,filtreArtiste,filtreCategorie]);

    const getListePieces = async () => {
        try {
            const resultat = await fetch(`http://localhost:8000/api/pieces`);
            const body = await resultat.json();
            const regexpTitre = new RegExp(filtreTitre, 'i');
            const regexpArtiste = new RegExp(filtreArtiste, 'i');
            const regexpCategorie = new RegExp(filtreCategorie, 'i');
            const liste = body.filter((piece) => regexpTitre.test(piece.titre.toLowerCase()) && regexpArtiste.test(piece.artiste.toLowerCase()) && regexpCategorie.test(piece.categorie.toLowerCase()));
            setPieces(liste);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const postDemandeSpeciales = async () => {
        try{
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({ client: client, demandePieces: demandePieces }),
                headers: { 'Content-Type': 'application/json' },
            };

            const resultat = await fetch(`http://localhost:8000/api/demandeSpeciale/ajouter`, requestOptions);
            if(resultat.status === 200){setMessage("Ajouté avec succès!");}
            else{setMessage("Erreur lors de l'ajout.");}
        } catch (e) {
            console.log('Error:', e);
        }
    }

    const DeletePiece = (id) => {
        const newListePieces = demandePieces.filter((piece) => piece._id !== id);
        setListePieces(newListePieces);
    }

    const AjouterPiece = (id) => {
        var newListePieces = demandePieces;
        const piece = Pieces.find((p) => p._id === id);
        newListePieces.push(piece);
        newListePieces = newListePieces.filter((value ,index , array)=>array.findIndex(t=>(t._id === value._id)) === index);
        setListePieces(newListePieces);
        console.log(demandePieces);
    }

    const changerfiltreTitre = (e) => {
        console.log(e.target.value);
        setfiltreTitre(e.target.value);
    }

    const changerfiltreArtiste = (e) => {
        console.log(e.target.value);
        setfiltreArtiste(e.target.value);
    }

    const changerfiltreCategorie = (e) => {
        console.log(e.target.value);
        setfiltreCategorie(e.target.value);
    }
    
    const changementDeTri = (e) => {
        if(e.target.value == null){
            setselectionTri(/%%/);
        }
        setselectionTri(e.target.value)
    };

    const changementDeNom = (e) => {
        setClient(e.target.value);
    }

    return (
        <div className="container">
            <h1>{t('demandesSpeciales')}</h1>
            <div className="row">
                <div className="col-2">
                    <input type="text" className="form-control" placeholder="Votre nom"  onChange={changementDeNom}/>
                    
                </div>
                <div className="col-2">
                    <Button variant="primary" onClick={postDemandeSpeciales}>{t('envoyer')}</Button>
                    
                </div>
                <div className="col-2"><span>{message}</span></div>
            </div>
            <h2>{t('titreDS')}</h2>
            <PiecesDemandeSpecialeClient Pieces={demandePieces} DeletePiece={DeletePiece}/>
            <h2>{t('repertoire')}</h2>
            <div>
                <span>{t('spanDS')}</span>
            </div>
            <div className='col-2'>
                    <select id='selection' className='form-control' onChange={changementDeTri}>
                        <option value="trieParCategorie">{t('categorie')}</option>
                        <option value="trieParArtiste">{t('atrtiste')}</option>
                        <option value="trieParTitre">{t('titre')}</option>
                    </select>
            </div>
            <span>{t('recherche')}</span>
            <div className="row">
                <div className='col-2'> 
                    <input className='form-control' placeholder='Titre...' onChange={changerfiltreTitre}></input>
                </div>
                <div className='col-2'> 
                <input className='form-control' placeholder='Artiste...' onChange={changerfiltreArtiste}></input>
                </div>
                <div className='col-2'> 
                    <input className='form-control' placeholder='Categorie...' onChange={changerfiltreCategorie}></input>
                </div>
            </div>
                
                <ListePieces pieces={Pieces} value={selectionTri} button={AjouterPiece}/>
        </div>
    )
};