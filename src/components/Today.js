import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Today = (props) => {
    const number_format = (x = 0) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return (    
        <Container className="mt-5 pt-2">
            <Row>
                <Col>
                    <Card className="border-0 shadow">
                        <Card.Body>
                            <h2>Data Covid-19 Sampai Hari Ini</h2>
                            <h4>Kasus: <b>{number_format(props.dataToday.jumlahKasus)}</b></h4>
                            <h4 className="text-success">Sembuh: <b>{number_format(props.dataToday.sembuh)}</b></h4>
                            <h4 className="text-danger">Meninggal: <b>{number_format(props.dataToday.meninggal)}</b></h4>
                            <h4 className="text-muted">Perawatan: <b>{number_format(props.dataToday.perawatan)}</b></h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Today 