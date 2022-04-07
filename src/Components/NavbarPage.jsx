import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BiCart } from 'react-icons/bi'; 
function NavbarPage(){
    return(
        <Navbar bg="light" expand="lg">
            <Container className="justify-content-end">
                <Button variant="outline-dark">
                    <BiCart/>
                </Button>
            </Container>
        </Navbar>
    )
}

export default NavbarPage;