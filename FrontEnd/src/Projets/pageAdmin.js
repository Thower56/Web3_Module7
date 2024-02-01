import React from 'react';
import { ListePiecesAdmin } from '../composants/ListePiecesAdmin';
import { useState, useEffect } from 'react';
import { Container, Button,  Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const PageAdmin = () => {
    return (
        <Container>
        <h1>Page d'administration</h1>
        <Link to="/repertoire">
            <Button variant="primary" className="m-2">Consulter le répertoire</Button>
        </Link>
        <Link to="/admin/creer-piece">
            <Button variant="primary" className="m-2">Créer une pièce</Button>
        </Link>
        <Link to="/admin/demandes-speciales">
            <Button variant="primary" className="m-2">Consulter les demandes spéciales</Button>
        </Link>
        <Link to="/admin/demandes-speciales-actives">
            <Button variant="primary" className="m-2">Demandes spéciales actives</Button>
        </Link>
        <Link to="/admin/top5">
            <Button variant="primary" className="m-2">Top5</Button>
        </Link>
    </Container>
    );
    // const [Pieces, setPieces] = useState([]);

    // useEffect(() => {
    //     getListePieces();
    // }, []);

    // const getListePieces = async () => {
    //     try {
    //         const resultat = await fetch(`/api/pieces`);
    //         const body = await resultat.json();
    //         setPieces(body);
    //     } catch (error) {
    //         console.log('Error:', error);
    //     }
    // };
    // return (
    //     <div>
    //         <h1>Admin Page</h1>
    //         <ListePiecesAdmin pieces={Pieces}/>
    //     </div>      
   

    // );
};

