import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BarreNavigation } from "./BarreNavigation";
import { Button } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

export const PageAccueil = () => {
    const { t } = useTranslation();
    return (
        <>
            <Container className="" >
                <Row>
                    <Col>
                        <h1 className="">{t('message')}</h1>
                        <p>{t('texteAccueil')}</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

// style={{backgroundImage:'url(./images/pageAccueil.jpg)'}}