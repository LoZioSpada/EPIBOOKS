import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
    return (
        <>
            <Navbar className='px-5' bg="dark" data-bs-theme="dark">
                <Navbar.Collapse>
                    <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default BasicExample;