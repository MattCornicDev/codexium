import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { articles } from '../../content_articles';
import Seo from "../../components/Seo";


export const Articles = () => {
    return (
        <Container className='Articles mt-5'>
            <Seo
                title="Articles sur le développement web | Codexium"
                description="Articles et ressources sur le développement web, React, JavaScript, les applications SaaS, les API et les technologies numériques."
                path="/articles"
            />
            <Row className="sec_sp">
                <Col lg="5">
                    <h1 className="color_sec py-4 h3">Articles</h1>
                </Col>
                <Col lg="7">
                    {articles.map((data, i) => {
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
    )
}

export default Articles