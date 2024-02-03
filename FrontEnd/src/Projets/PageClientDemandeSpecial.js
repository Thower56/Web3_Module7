import {React, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { ListeDemandeSpecialeClient } from "../composants/ListeDemandeSpecialeClient";
import { Button } from "react-bootstrap";
import { Piece } from "../composants/Piece";


export const PageClientDemandeSpecial = () => {
    const [ListePieces, setListePieces] = useState([]);
    const [repertoire, setRepertoire] = useState([]);

    
    useEffect(() => {
        getRepertoire();
    }, [ListePieces]);

    const getRepertoire = async () => {
        try {
            const resultat = await fetch(`http://localhost:8000/api/pieces`);
            const body = await resultat.json();
            setRepertoire(body);
        } catch (error) {
            console.log('Error:', error);
        }
    }

    const DeletePiece = (id) => {
        const newListePieces = ListePieces.filter((piece) => piece._id !== id);
        setListePieces(newListePieces);
    }

    const AjouterPiece = (id) => {
        var newListePieces = ListePieces;
        const piece = repertoire.find((p) => p._id === id);
        newListePieces.push(piece);
        newListePieces = newListePieces.filter((value ,index , array)=>array.findIndex(t=>(t._id === value._id)) === index);
        setListePieces(newListePieces);
        console.log(ListePieces);
    }

    return (
        <div className="container">
            <h1>Demande Spéciale</h1>
            <div className="row">
                <div className="col-2">
                    <input type="text" className="form-control" placeholder="Votre nom" />
                    
                </div>
                <div className="col-2">
                    <Button variant="primary">Envoyer</Button>
                </div>
            </div>
            <h2>Votre demande special:</h2>
            <ListeDemandeSpecialeClient Pieces={ListePieces} DeletePiece={DeletePiece}/>
            <h2>Nos pieces:</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {repertoire.map((piece) => (
                <div key={piece._id}>
                    <Piece piece={piece}/>
                    <button className="btn btn-primary" onClick={()=> AjouterPiece(piece._id)}>Ajouter</button>
                </div>
            ))}
            </div>
        </div>
    )
};