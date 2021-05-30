import React from 'react';
import {
    Navbar,
    Container,
    InputGroup, FormControl, Nav
} from 'react-bootstrap';


const Header = () => (
    <>


        <Navbar>
            <Container>
                <Nav>
                    <Nav.Link href="/product-list">COTHING</Nav.Link>
                    <Nav.Link href="/product-list">DRESSES</Nav.Link>
                    <Nav.Link href="/product-list">BEACHWEAR</Nav.Link>
                    <Nav.Link href="/product-list">SHOES & ACCESSORIES</Nav.Link>
                    <Nav.Link href="/product-list">BEATY</Nav.Link>
                </Nav>
                <InputGroup className="left" size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Container>
        </Navbar>


    </>
);

export default Header;