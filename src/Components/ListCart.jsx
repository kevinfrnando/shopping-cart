import { useEffect } from 'react';
import { ListGroup, Card, Container,Row, Col, Button } from 'react-bootstrap'

function ListCar( { car } ){

    useEffect( ()=>{
        
    }, [car] )
    return(
        <ListGroup as="ul">
            <Container>
                { 
                    car.map( ( e ) =>(
                        <ListGroup.Item as="li">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{e.character}</Card.Title>
                                    <Row>
                                        <Col sm={8}><Card.Img variant="top"  src={e.image} /></Col>
                                        <Col>
                                            <Card.Text>
                                                Some quick example 
                                            </Card.Text>
                                            
                                        </Col>
                                        <Container>
                                            
                                            
                                        </Container>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="d-grid gap-2">
                                            <Button variant="danger" size='sm'>-</Button>

                                            </div>
                                        </Col>
                                        <Col style={{ textAlign: 'center' }}>
                                            1
                                        </Col>
                                        <Col>
                                            <div className="d-grid gap-2">
                                                <Button size='sm'>+</Button>

                                            </div>
                                        </Col>
                                    </Row>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    ))
                }
            </Container>
        </ListGroup>
    )
}

export default ListCar;