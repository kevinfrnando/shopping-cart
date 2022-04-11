import { Offcanvas, Card, Col, Row, Button, Image} from 'react-bootstrap'
import { connect } from 'react-redux';
import { addItem, removeItem } from '../store/item/action';
import { addMoney, subtractMoney } from '../store/amount/action';
import { plusItem, subtractItem } from "../store/counter/action";
import { useNavigate } from 'react-router-dom';

const mapStateToProps = ( state ) => {
    return {
        amount: state.amountReducer.amount,
        items: state.itemsReducer.items,
        count : state.counterReducer.items

    }
}

function Sidebar( { show, handleClose , amount, items, count, addItem, removeItem, plusItem, subtractItem, addMoney, subtractMoney} ){
    const addOneMore = ( e )=>{
        addItem( e );
        addMoney( e.price )
        plusItem();
    }

    const removeOne = ( e )=>{
        removeItem( e );
        subtractMoney( e.price );
        subtractItem()
    }

    const navigate = useNavigate();

    return(
        <Offcanvas show={show} onHide={handleClose} placement='end' >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                { count > 0 ?
                    <Button variant="outline-success" onClick={ () => navigate("/payment")}>Go to pay <b>${ amount }</b></Button>
                    : <></>
                }
            </Offcanvas.Header>
            <Offcanvas.Body className='sidebar-container'>
                { 
                    count > 0 ?
                        items.map( ( e, i ) => (
                            <Row key={i} className="row-sidebar">
                                <Card key={i} className="cardCustom-car">
                                    <Col>
                                        <Card.Img className='cardImg' variant="top" src={e.image} />
                                    </Col>
                                    <Col>
                                        <Card.Body style={{ textAlign:"center" }}>
                                        <Card.Title > <b>${e.total}</b></Card.Title>
                                        <Row className="justify-content-md-center">
                                            <Col xs lg="2">
                                                <Button variant="outline-danger" onClick={ () => removeOne( e )}>-</Button>
                                            </Col>
                                            <Col md="auto">{ e.count }</Col>
                                            <Col xs lg="2">
                                                <Button variant="outline-success" onClick={ () =>  addOneMore( e ) }>+</Button>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Col>
                                </Card>
                            </Row>
                        )) 
                        :
                        <Image src='./assets/emptyCar.png'></Image>

                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default connect (  mapStateToProps, { addItem, removeItem, plusItem, subtractItem, addMoney, subtractMoney } )( Sidebar );