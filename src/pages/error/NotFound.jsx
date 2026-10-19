import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Seo from "../../components/Seo";

export const NotFound = () => (
  <Container as="main" className="py-5">
    <Seo
      title="Page introuvable | Codexium"
      description="La page demandée n’existe pas ou a été déplacée."
      noindex
    />
    <h1>Page introuvable</h1>
    <p>La page demandée n’existe pas ou a été déplacée.</p>
    <Link to="/">Retour à l’accueil</Link>
  </Container>
);
