import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { articles } from '../../content_articles';


export const Articles = () => {
    return (
        <Container className='Articles mt-5'>
            <Row className="sec_sp">
                <Col lang="5">
                    <h3 className="color_sec py-4">Articles</h3>
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