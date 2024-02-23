import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../tarifications/devis.css'

export const Devis = () => {
    return (
        <Container className="Devis mt-5">
            <Row className="sec_sp">
                <Col lang="5">
                    <h3 className="color_sec py-4">Devis</h3>
                </Col>
                <Col lang='7'>
                    <div className="service_ py-4">
                        <h5 className="service__title">Tarification</h5>

                        <p>Les tarifs des fonctionnalités d'une application SaaS peuvent varier considérablement en fonction du fournisseur, de la complexité de l'application, de la taille de l'entreprise cliente, des fonctionnalités supplémentaires requises, etc. Voici une liste des types de tarification associés à chaque fonctionnalité.</p>

                        <h3>Fonctionnalités d'une application SaaS</h3>

                        <ol>
                            <li>Accès à distance et en ligne</li>
                            <p>Les utilisateurs peuvent accéder à l'application via un navigateur web, ce qui permet un accès depuis n'importe quel appareil connecté à Internet, sans avoir besoin d'installer de logiciel spécifique.</p>
                            <li>Multiplateforme</li>
                            <p> Les applications SaaS sont généralement conçues pour fonctionner sur différentes plateformes, telles que Windows, macOS, Linux, iOS et Android.</p>
                            <li>Abonnement et paiement en ligne</li>
                            <p>Les utilisateurs paient généralement un abonnement périodique (mensuel ou annuel) pour utiliser l'application, avec des options de paiement en ligne sécurisées.</p>
                            <li>Mises à jour automatiques</li>
                            <p>Les mises à jour du logiciel sont gérées par le fournisseur de l'application et sont généralement automatiques, garantissant que les utilisateurs disposent toujours de la dernière version avec les dernières fonctionnalités et corrections de bogues.</p>
                            <li>Personnalisation</li>
                            <p> Les utilisateurs peuvent souvent personnaliser l'application en fonction de leurs besoins spécifiques, par exemple en configurant des préférences utilisateur ou en choisissant des fonctionnalités à activer ou désactiver.</p>
                            <li>Collaboration en temps réel</li>
                            <p>De nombreuses applications SaaS offrent des fonctionnalités de collaboration en temps réel, telles que la possibilité de partager des documents, de travailler simultanément sur des projets avec d'autres utilisateurs, ou de commenter et de réviser le travail en équipe.</p>
                            <li>Sécurité des données</li>
                            <p> Les fournisseurs de SaaS prennent généralement des mesures pour garantir la sécurité des données des utilisateurs, notamment en utilisant le cryptage des données, la sauvegarde régulière des données et la conformité aux normes de sécurité telles que le RGPD (Règlement général sur la protection des données).</p>
                            <li>Intégrations avec d'autres services</li>
                            <p>Les applications SaaS peuvent souvent être intégrées à d'autres services et outils, tels que des outils de gestion de projet, des systèmes de gestion de la relation client (CRM), des services de paiement en ligne, etc.</p>
                            <li>Analytique et reporting</li>
                            <p> Les applications SaaS fournissent généralement des fonctionnalités d'analyse et de reporting pour aider les utilisateurs à comprendre et à tirer des enseignements de leurs données.</p>
                            <li>Support client</li>
                            <p>Les fournisseurs de SaaS offrent généralement un support client pour aider les utilisateurs en cas de problème ou de question concernant l'application.
                            </p>
                        </ol>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

