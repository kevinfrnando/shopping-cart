import { Card, Button, Row, Col,Form, Spinner } from 'react-bootstrap';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const mapStateToProps = ( state ) =>{
    return {
        amount: state.amountReducer.amount,
        count : state.counterReducer.items

    }
} 


function PaymentForm( { amount, count }){

    const navigate = useNavigate();
    const { handleSubmit, formState } = useForm()
    const [ isSubmitting, setIsSubmiting ] = useState( !formState );
    const notify = () => toast.success('Done!', {
        position: "top-right",
        autoClose: 1300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        light : false 
    });

    useEffect( ()=>{
        if( count < 1){
            navigate("/");
        }
    })
    function pay() {
        setIsSubmiting( true )

        return new Promise(() => {
            notify();

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
    }
    return(
        <Form className='div-container' onSubmit={ handleSubmit( pay )}>
            <Row className="justify-content-md-center" style={{ marginTop : "100px" }}>
                <Card style={{ width: '30rem' }} className="card-payment" >
                    <Card.Header>Payment Details</Card.Header>
                    <Card.Body>
                        <Card.Title style={{ textAlign: "right" }}><b>Total ${amount}</b></Card.Title>
                            <Form.Group className="mb-3" controlId="cardText">
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control required type="text" placeholder="Valid Card Number" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="cardExpiry">
                                        <Form.Label>Expiry Date</Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Control required type="number" max="12" min="1" placeholder="MM" />
                                            </Col>
                                            /
                                            <Col>
                                                <Form.Control required type="number" max="2050" min="2000" placeholder="YYYY" />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="cardCv">
                                        <Form.Label>CV Code</Form.Label>
                                        <Form.Control  maxLength="3" type="text" placeholder="CV" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-grid gap-2">
                                <Button variant="outline-info" size="lg" type='submit'>
                                    {
                                        isSubmitting ? 
                                        <Spinner animation="border" />
                                        :
                                        <>
                                            <span>Pay </span> 
                                            <BsFillCreditCard2BackFill/>
                                        </>
                                    }                                        
                                </Button>
                            </div>
                    </Card.Body>
                </Card>
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
        </Form>
    )
}

export default connect ( mapStateToProps, { }) (PaymentForm)