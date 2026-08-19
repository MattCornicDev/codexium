import React, { useState } from "react";
import "./styles.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Form } from "react-bootstrap";

export const PackAuditCyber = () => {
    // -----------------------------
    // CALCULATEUR D'AUDIT CYBER
    // -----------------------------

    const [postes, setPostes] = useState(0);
    const [logiciels, setLogiciels] = useState(0);
    const [batiments, setBatiments] = useState(1); // mairie incluse

    // Tarif par poste selon la taille
    const tarifPoste = postes <= 10 ? 10 : postes <= 30 ? 8 : postes <= 80 ? 6 : postes <= 150 ? 4 : 0;

    const base = 300;
    const totalPostes = postes * tarifPoste;
    const totalLogiciels = logiciels * 20;
    const totalBatiments = (batiments - 1) * 40; // mairie incluse

    const total = base + totalPostes + totalLogiciels + totalBatiments;

    return (
        <HelmetProvider>
            <Container className="audit-pack-page">

                {/* SEO */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Pack Audit Cyber | Audit Cybersécurité</title>
                    <meta name="description" content="Audit cybersécurité pour TPE et collectivités." />
                </Helmet>

                {/* HERO */}
                <Row className="mb-5 mt-3 pt-md-3 text-center">
                    <Col lg="12">
                        <h1 className="display-4 mb-4">Pack Audit Cybersécurité</h1>
                        <p className="lead">
                            Une offre claire, adaptée aux petites entreprises et collectivités,
                            pour sécuriser vos services numériques et réduire les risques d’attaque..
                        </p>

                        <div className="mt-4 d-flex justify-content-center gap-3">
                            <a href="#calcul" className="btn btn-primary">Calculer mon audit</a>
                            <a href="#packs" className="btn btn-outline-secondary">Voir les packs</a>
                        </div>

                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>

                {/* PACKS */}
                <Row id="packs" className="gy-4 mb-5">
                    <Col lg="4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title">Pack Essentiel — 300 €</h3>
                                <ul className="mt-3">
                                    <li>Analyse du site web</li>
                                    <li>Vérification messagerie</li>
                                    <li>Contrôle des mots de passe</li>
                                    <li>Vérification des sauvegardes</li>
                                    <li>Rapport synthétique</li>
                                </ul>
                                <p className="fw-semibold mt-3">Durée : variable selon le nombre de postes</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title">Pack Standard — 500 €</h3>
                                <ul className="mt-3">
                                    <li>Analyse des postes</li>
                                    <li>Accès internes</li>
                                    <li>Analyse des risques</li>
                                    <li>Rapport complet</li>
                                </ul>
                                <p className="fw-semibold mt-3">Durée : dépend du volume de postes</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="4">
                        <div className="card h-100 shadow-sm border-primary">
                            <div className="card-body">
                                <h3 className="card-title text-primary">Pack Collectivités — 650 €</h3>
                                <ul className="mt-3">
                                    <li>Audit site communal</li>
                                    <li>Audit messagerie mairie / CCAS</li>
                                    <li>Audit postes mairie + école</li>
                                    <li>Plan d’action priorisé</li>
                                </ul>
                                <p className="fw-semibold mt-3">Durée : dépend du nombre de bâtiments</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* CALCULATEUR */}
                <Row id="calcul" className="mb-5">
                    <Col lg="12">
                        <h2 className="mb-4">Calculer mon audit cybersécurité</h2>

                        <Form>
                            <Row className="mb-3">
                                <Col lg="4">
                                    <Form.Group>
                                        <Form.Label>Nombre de postes</Form.Label>
                                        <Form.Control
                                            type="number"
                                            min="0"
                                            value={postes}
                                            onChange={(e) => setPostes(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col lg="4">
                                    <Form.Group>
                                        <Form.Label>Logiciels métiers</Form.Label>
                                        <Form.Control
                                            type="number"
                                            min="0"
                                            value={logiciels}
                                            onChange={(e) => setLogiciels(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col lg="4">
                                    <Form.Group>
                                        <Form.Label>Bâtiments (mairie incluse)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            min="1"
                                            value={batiments}
                                            onChange={(e) => setBatiments(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>

                        <div className="p-4 bg-light rounded shadow-sm mt-4">
                            <h4 className="mb-3">Résultat du calcul</h4>
                            <p><strong>Forfait de base :</strong> 300 €</p>
                            <p><strong>Postes :</strong> {postes} × {tarifPoste} € = {totalPostes} €</p>
                            <p><strong>Logiciels métiers :</strong> {logiciels} × 20 € = {totalLogiciels} €</p>
                            <p><strong>Bâtiments :</strong> {batiments} site(s) = {totalBatiments} €</p>

                            <hr />

                            <h3 className="text-primary">Total : {total} €</h3>
                        </div>
                    </Col>
                </Row>

                {/* CTA FINAL */}
                <Row className="text-center py-5 bg-light rounded">
                    <Col lg="12">
                        <h2>Prêt à sécuriser votre organisation ?</h2>
                        <p className="mt-3">
                            Contactez-nous pour un échange gratuit de 20 minutes afin d’évaluer vos besoins.
                        </p>

                        <div className="mt-4 d-flex justify-content-center gap-3">
                            <a href="mailto:contact@tonsite.fr" className="btn btn-primary">
                                Demander un audit
                            </a>
                            <a href="#packs" className="btn btn-outline-secondary">
                                Voir les packs
                            </a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </HelmetProvider>
    );
};
