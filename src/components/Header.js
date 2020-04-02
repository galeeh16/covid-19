import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Banner from '../svg/Banner.svg'

const Header = (props) => {
    return (
        <Row className="d-flex align-items-stretch">
            <Col md={7} className="d-flex justify-content-center align-items-center">
                <div style={{marginRight: '140px', marginLeft: '40px'}}>
                    <h1 className="font-weight-bold text-dark">Covid-19 in Indonesia</h1>
                </div>
            </Col>
            <Col md={5} className="bg">
                <img src={Banner} className="img"/>
            </Col>
        </Row>
    )
}

export default Header 