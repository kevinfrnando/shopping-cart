import axios from "axios";
import { useEffect, useState } from "react";
import { CardGroup, Card, Row, Col, Button } from "react-bootstrap";
import { addItem, removeItem } from '../store/item/action';
import { addMoney, removeMoney } from '../store/amount/action';
import { plusItem, subtractItem } from "../store/counter/action";
import { connect } from "react-redux";

const url = "https://amiiboapi.com/api/amiibo";

const Items  = ({addItem, remove, addMoney, plusItem } ) =>{

    const[ data , setData ] = useState([]);
    useEffect( ()=>{
        getItems();
    },[])
    const getItems = async () =>{
        await axios.get( url ).then(
            res => {
                setData( res.data["amiibo"] );
            }
        ) ;

    }

    const addToCart = ( e )=>{
        addItem( e );
        addMoney( e.price )
        plusItem();
    }

    return(
        <CardGroup>
            <Row xs={1} md={3} sm={2} lg={4} className="g-4" >
                { data.map(( e , i) => (                    
                    <Col >
                        <Card key={i} >
                            <Card.Img variant="top"  src={e.image} />
                            <Card.Body>
                            <Card.Title>{ e.character }</Card.Title>
                            <Card.Text>
                                Price in <b>{ e.price = (  Math.round((Math.random()*1000)+1)*10 ) }</b>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-grid gap-2">
                                <Button size="md" onClick={ ( ) => { addToCart(e)} } >Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
                </Row>
        </CardGroup>
    )

}
// export default Items;
export default connect( null, { addItem, removeItem, addMoney, removeMoney, plusItem } )( Items )


