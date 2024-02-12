import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function Langages() {
    const { i18n } = useTranslation();

    useEffect(() => i18n.changeLanguage("en"), [i18n]);

    function changerLangue(langue) {
        i18n.changerLangue(langue); 
    }   
    return (
        <Row className="mt-3">
            <Col xs={{span: 6, offset: 6}} sm={{span: 3, offset: 9}} lg={{span: 2, offset: 10}}>
                <Form.Group as="select" onChange={(event) => changerLangue(event.target.value)}>
                    <option value="fr>">Français</option>
                    <option value="en">English</option>
                </Form.Group>
            </Col>
        </Row>
    );
    }