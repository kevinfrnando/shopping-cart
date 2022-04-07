import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BiCart } from 'react-icons/bi'; 
import Sidebar from './Sidebar';
function NavbarPage(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Navbar bg="light" expand="lg">
            <Container className="justify-content-end">
                <Button variant="outline-dark" onClick={ handleShow }>
                    <BiCart/>
                </Button>
            </Container>
            <Sidebar show={ show } handleClose={ handleClose }/>
        </Navbar>
    )
}

export default NavbarPage;