import React from 'react'
import List from './List'
import { Container, Row, Col, Table } from 'react-bootstrap'

const Content = (props) => {
    let no = 0;
    return (
        <Container className="mt-4">
            <Row>
                <Col>
					<legend>Data Covid-19 Per Provinsi</legend>
                    <Table bordered hover>
                        <thead>
                            <tr className="text-center">
                                <th width="5%">No</th> 
                                <th>Provinsi</th> 
                                <th width="10%">Positive</th> 
                                <th width="10%">Sembuh</th> 
                                <th width="10%">Meninggal</th> 
                            </tr>
                        </thead>
                        <tbody>
                            { props.dataPerProvince.map(content => {
                                return (
									<List 
										key={no}
                                        no={no+=1} 
										provinsi={content.provinsi} 
										kasusPositive={content.kasusPosi} 
                                        kasusSembuh={content.kasusSemb}
                                        kasusMeninggal={content.kasusMeni}
                                    />
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
} 

export default Content