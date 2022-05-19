import { useEffect } from 'react';
import { Modal, Button, Row, Card, Col } from 'react-bootstrap';

function ModalItem({show,handleClose, item}){
    useEffect(()=>{
        //console.log( item )
    }, [])
    return(
        <Modal 
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}        
            dialogClassName="modal-60w"  
            aria-labelledby="example-custom-modal-styling-title"   
            >
            <Modal.Header closeButton>
                <Modal.Title>
                    <h2>{item.character}</h2>
                    <h6>{item.amiiboSeries}</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Card.Img className='image-modal' variant="top" src={item.image} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <b>Game Serie: </b>{item.gameSeries}<br></br>
                            <b>Price: </b>${item.price}<br></br>
                            <b>Released Dates: </b>
                            <ul>
                                <li>Australia: { item?.release?.au}</li>
                                <li>EEUU: { item?.release?.eu}</li>
                                <li>Japón: { item?.release?.jp}</li>
                            </ul>
                        </Card.Body>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalItem;