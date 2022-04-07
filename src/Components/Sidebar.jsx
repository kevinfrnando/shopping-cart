import { Offcanvas } from 'react-bootstrap'
function Sidebar( { show, handleClose } ){
    return(
        <Offcanvas show={show} onHide={handleClose} placement='end' >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidebar;