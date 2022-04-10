import { useState } from 'react';
import { Navbar, Badge, Container, Button } from 'react-bootstrap';
import { BiCart } from 'react-icons/bi'; 
import Sidebar from './Sidebar';
import { connect } from 'react-redux';


const mapStateToProps = ( state ) =>{
    return {
        items : state.counterReducer.items
    }
} 
function NavbarPage( { items } ){


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Navbar bg="light" expand="lg">
            <Container className="justify-content-end">
                <Button variant="outline-dark" onClick={ handleShow }>
                    <BiCart/>
                    <Badge className='' bg="secondary"> { items }</Badge>
                </Button>
            </Container>
            <Sidebar show={ show } handleClose={ handleClose } />
        </Navbar>
    )
}

export default connect ( mapStateToProps, {})(NavbarPage);