import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  worktimeline2,
  diplomes,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> MCD | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">À propos de moi</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>

          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <pre className="about-description">{dataabout.aboutme}</pre>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Expériences Dev</h3>

          </Col>
          <Col lg="7">
            <div className="experience-list">
              {worktimeline.map((data, i) => (
                <article className="experience-card" key={i}>
                  <div className="experience-card__topline">
                    <h4>{data.jobtitle}</h4>
                    <span>{data.date}</span>
                  </div>
                  <p className="experience-card__place">{data.where}</p>
                  <p className="experience-card__details">{data.details}</p>
                </article>
              ))}
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Autres Expériences</h3>
          </Col>
          <Col lg="7">
            <div className="experience-list">
              {worktimeline2.map((data, i) => (
                <article className="experience-card" key={i}>
                  <div className="experience-card__topline">
                    <h4>{data.jobtitle}</h4>
                    <span>{data.date}</span>
                  </div>
                  <p className="experience-card__place">{data.where}</p>
                  <p className="experience-card__details">{data.details}</p>
                </article>
              ))}
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Diplomes</h3>
          </Col>
          <Col lg="7">
            <div className="table-responsive">
              <table className="table caption-top">
                <tbody>
                  {diplomes.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.title}</th>
                        <td>{data.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Qualifications</h3>
          </Col>
          <Col lg="7">
            <div className="qualifications-list">
              {skills.map((data, i) => {
                return (
                  <div className="qualification-item" key={i}>
                    <div className="qualification-header">
                      <h4 className="progress-title">{data.name}</h4>
                      <span className="progress-value">{data.value}%</span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label={`${data.name} : ${data.value}%`}
                      aria-valuenow={data.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${data.value}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
