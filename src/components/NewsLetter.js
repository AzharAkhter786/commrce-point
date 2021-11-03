import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const  NewsLetter=()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-intro text-center">
                        <h2>News letter</h2>
                        <p>Just stay tune for our latest Product. Now you can subscribe</p>
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
    )
}