import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./style.module.scss"
import cn from "classnames"

export default function Footer() {
    return (
        <>
        <hr />
        <Container>
            <Row>
                <Col className={cn('mt-5 mb-5 text-footer', styles.textCenter)}><p>Copyright © 2023 EPIBOOKS. Built with React Bootstrap.</p></Col>
            </Row>
        </Container>
        </>
    );
}