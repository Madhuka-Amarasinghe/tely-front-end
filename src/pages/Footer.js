import React from 'react';
import {
    Card,
    Button
} from 'react-bootstrap';

const Footer = () => (
    <>
        <Card>
            <Card.Body>
                <Card.Title>TECTY - SYSTEM</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer className="text-center">&copy;{new Date().getFullYear()} Tely MV - All Rights Reserved</Card.Footer>
        </Card>
    </>
);

export default Footer;