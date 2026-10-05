import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio } from "../../content_option";
import Seo from "../../components/Seo";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Seo
          title="Réalisations web et applications | Portfolio Codexium"
          description="Parcourez les projets web, applications métier et réalisations mobiles conçus par Rarib LAAMIMAT et Codexium."
          path="/portfolio"
        />
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={data.description} />
                <div className="content">
                  <p>{data.description}</p>
                  {data.link !== "#" && (
                    <a href={data.link}>Voir le projet</a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </HelmetProvider>
  );
};
