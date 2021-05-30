import React from 'react';
import {
    Button,
    ButtonGroup,
    Container, Navbar, Nav
} from 'react-bootstrap';

const SocialHeader = () => (
    <>
        <Navbar>
            <Container>
                {/* <Navbar.Brand href="/">TELY-CORE</Navbar.Brand>
                <Navbar.Brand href="/">Tely Core</Navbar.Brand> */}

                <Nav>
                    <Nav.Link href="/">WOMEN</Nav.Link>
                    <Nav.Link href="/">MEN</Nav.Link>
                    <Nav.Link href="/">KIDS</Nav.Link>
                </Nav>
                <ButtonGroup className="left" size="sm">
                    <Button>B1</Button>
                    <Button>B2</Button>
                    <Button>B3</Button>
                    <Button>B4</Button>
                    <Button>B4</Button>
                </ButtonGroup>
            </Container>
        </Navbar>
    </>
)

export default SocialHeader;