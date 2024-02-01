import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BarreNavigation } from "./BarreNavigation";
import { Button } from 'react-bootstrap';

export const PageAccueil = () => {
    return (
        <>
            <Container className="" style={{backgroundImage:'url(./images/pageAccueil.jpg)'}}>
                <Row>
                    <Col>
                        <h1 className="">Bienvenue dans notre magasin de musique</h1>
                        <p>Nous sommes fiers de vous proposer une large sélection d'instruments de musique, d'équipements audio et de partitions.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}