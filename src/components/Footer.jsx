import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <>
        <hr />
        <Container>
            <Row>
                <Col className='mt-5 textFooter'>Copyright © 2023 React Bootstrap. Built with Docusaurus.</Col>
            </Row>
        </Container>
        </>
    );
}