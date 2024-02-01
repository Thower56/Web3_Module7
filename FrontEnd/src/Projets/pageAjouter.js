import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export const PageAjouter = () => {
    const [titre, setTitle] = useState('');
    const [artiste, setArtist] = useState('');
    const [catégorie, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const TitleChange = (e) => {
        setTitle(e.target.value);
    };

    const ArtistChange = (e) => {
        setArtist(e.target.value);
    };

    const CategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const Cancel = () => {
        window.location.href = '/admin';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const ajouterPiece = async () => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ titre: titre, artiste: artiste, categorie: catégorie }),
            headers: { 'Content-Type': 'application/json' },
        };
        const reponse = await fetch(`http://localhost:8000/api/pieces/ajouter`, requestOptions);
        if(reponse.status === 200){setMessage("Ajouté avec succès!");}
        else{setMessage("Erreur lors de l'ajout.");}
    }

    return (
        <div className="container">
            <h1>Ajouter Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titre</label>
                    <input type="text" className="form-control" value={titre} onChange={TitleChange} />
                </div>
                <div>
                    <label >Artiste</label>
                    <input type="text" className="form-control" value={artiste} onChange={ArtistChange} />
                </div>
                <div>
                    <label >Catégorie</label>
                    <input type="text" className="form-control" value={catégorie} onChange={CategoryChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={ajouterPiece}>Ajouter</button>
                <button type="button" className="btn btn-secondary" onClick={Cancel}>Annuler</button>
            </form>
            <div><h3>{message}</h3></div>
        </div>
    );
}

