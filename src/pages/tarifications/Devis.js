import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tarifications from "../../content_tarifications";
import DevisCalculator from "./DevisCalculator";
import "../tarifications/devis.css";

export const Devis = () => {
    return (
        <Container className="DevisPage mt-5">
            {/* HEADER */}
            <Row>
                <Col>
                    <div className="devis-header">
                        <h1>Devis & Tarification</h1>
                        <p>
                            Obtenez une estimation claire et personnalisée pour la création de votre application web.
                            Sélectionnez les fonctionnalités souhaitées ou choisissez un pack complet.
                        </p>
                    </div>
                </Col>
            </Row>

            {/* TARIFICATION */}
            <Row className="mt-4">
                <Col>
                    <h2 className="section-title">Tarification détaillée</h2>
                </Col>
            </Row>

            <Row>
                {tarifications.items.map((section, index) => (
                    <Col lg={6} key={index} className="mb-4">
                        <div className="tarif-card">
                            <h3 className="tarif-card-title">{section.category}</h3>

                            <ul className="tarif-card-list">
                                {section.details.map((item, idx) => (
                                    <li key={idx} className="tarif-card-item">
                                        <div className="tarif-item-header">
                                            <span className="tarif-item-name">{item.name}</span>
                                            <span className="tarif-item-price">{item.price}</span>
                                        </div>
                                        <p className="tarif-item-description">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* CALCULATEUR */}
            <Row className="mt-5">
                <Col>
                    <h2 className="section-title">Calculateur de devis</h2>
                    <DevisCalculator />
                </Col>
            </Row>
        </Container>
    );
};
