import React from 'react'
import { Row, Col } from 'react-bootstrap'

function college() {
    return (
        <>
            <Row>
                <Col ><h1>id</h1></Col>
                <Col >name</Col>
                <Col >year</Col>
                <Col >city</Col>
                <Col >state</Col>
                <Col >country</Col>
                <Col> students</Col>
            </Row>
        </>
    )
}

export default college
