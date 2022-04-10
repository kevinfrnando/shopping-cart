import { useState } from 'react';
import { Container } from 'react-bootstrap'
import Items from '../Components/Items';
import NavbarPage from '../Components/NavbarPage';

function Home(){

    const [ car, setCar ] = useState([]);
    return (
        <Container>
            <NavbarPage car={ car }/>
            <Items setCar={setCar} car={ car }/>
        </Container>
    )
}

export default Home;