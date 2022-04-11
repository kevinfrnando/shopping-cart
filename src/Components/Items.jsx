import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Card, Row, Col, Button } from "react-bootstrap";
import { addItem, removeItem } from '../store/item/action';
import { addMoney } from '../store/amount/action';
import { plusItem } from "../store/counter/action";
import { connect } from "react-redux";
import ModalItem from "./ModalItem";
import { ToastContainer, toast } from 'react-toastify';

const url = "https://amiiboapi.com/api/amiibo";

const Items  = ({addItem, addMoney, plusItem } ) =>{

    const[ data , setData ] = useState([]);
    // const[ isLoading, setIsLoading ] = useState( false )
    useEffect( ()=>{
        getItems();

    },[  ])
    const getItems = async () =>{
        await axios.get( url ).then(
            res => {
                setData( res.data["amiibo"] );
            }
        ) ;

    }
    const notify = () => toast.success('Added!', {
        position: "top-right",
        autoClose: 200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        light : false 
    });

    const addToCart = ( e )=>{
        notify();
        addItem( e );
        addMoney( e.price )
        plusItem();
    }
    const [show, setShow] = useState(false);
    const [ item,setItem ] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const showItem = ( e ) =>{
        setItem( e )
        handleShow(); 
    }
    return(
        <div className='div-scroll'>
            <Row xs={1} md={3} sm={2} lg={4} className="g-4" >
                { data.map(( e , i) => (                    
                    <Col >
                        <Card key={i} className="cardCustom" onDoubleClick={ ()=>{ showItem( e )}}>
                            <div className="image-container">
                                <Card.Img variant="top"  src={e.image} />
                            </div>
                            <Card.Body>
                            <Card.Title>{ e.character } <Badge pill bg="light" text="dark">{ e.amiiboSeries}</Badge></Card.Title>
                            <Card.Text>
                                Price in <b>${ e.price = (  Math.round((Math.random()*1000)+1)*10 ) }</b>                        
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-grid gap-2">
                                <Button size="md" variant="outline-info" onClick={ ( ) => { addToCart(e)} } >Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
                <ModalItem show={ show } handleClose={ handleClose } item={ item }/>
            </Row>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>

    )

}
// export default Items;
export default connect( null, { addItem, removeItem, addMoney, plusItem } )( Items )


