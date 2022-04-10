import { useEffect } from 'react';
import { Offcanvas, Card, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
    return {
        amount: state.amountReducer.amount,
        items: state.itemsReducer.items
    }
}

function Sidebar( { show, handleClose , amount, items } ){
    
    return(
        <Offcanvas show={show} onHide={handleClose} placement='end' >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h2>{ amount }</h2>

                { items.map( ( e, i ) => (
                    <Row key={i}>
                        <Card key={i}>
                            <Col>
                                <Card.Img variant="top" src={e.image} />
                            </Col>
                            <Col>
                                <Card.Body>
                                <Card.Title>{ e.count } - {e.total}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Col>
                        </Card>
                    </Row>
                )) }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default connect (  mapStateToProps, {} )( Sidebar );