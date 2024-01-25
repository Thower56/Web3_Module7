import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export const PageAjouter = () => {
    const [titre, setTitle] = useState('');
    const [artiste, setArtist] = useState('');
    const [catégorie, setCategory] = useState('');

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
                <button type="submit" className="btn btn-primary">Ajouter</button>
                <button type="button" className="btn btn-secondary" onClick={Cancel}>Annuler</button>
            </form>
        </div>
    );
}

