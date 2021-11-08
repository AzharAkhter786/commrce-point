import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Heading } from '../components/Heading';

export const NewsLetter = () => {
    return (
        <section className="new-letter-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-intro text-center">
                            <Heading />

                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}