import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tarifications from "../../content_tarifications";
import DevisCalculator from "./DevisCalculator";



import "../tarifications/devis.css";

export const Devis = () => {
    return (
        <Container className="Devis mt-5">
            <Row className="sec_sp">
                <Col lg="5">
                    <h3 className="color_sec py-4">Devis</h3>
                </Col>

                <Col lg="7">
                    <div className="service_ py-4">
                        <h5 className="service__title">{tarifications.title}</h5>
                        <p>{tarifications.description}</p>

                        <h3 className="mt-4">Tarification détaillée</h3>

                        {tarifications.items.map((section, index) => (
                            <div key={index} className="tarif-section mt-4">
                                <h4 className="tarif-category">{section.category}</h4>

                                <ul className="tarif-list">
                                    {section.details.map((item, idx) => (
                                        <li key={idx} className="tarif-item">
                                            <strong>{item.name}</strong>
                                            <p className="tarif-description">{item.description}</p>
                                            <span className="tarif-price">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <DevisCalculator />

        </Container>
    );
};
