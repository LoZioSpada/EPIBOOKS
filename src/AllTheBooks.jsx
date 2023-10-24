import { useState } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import fantasy from "./books/fantasy.json" // DA CAMBIARE CON I FILE .json CHE SONO PRESENTI NELLA CARTELLA 'books'
import SingleBook from "./SingleBook";

export default function AllTheBooks() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <>
            <Container className="my-5">
                <Row className="my-5">
                    <Form.Group>
                        <Form.Control
                            type="search"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Row>
                    {fantasy
                        .filter((b) => b.title.toLowerCase().includes(searchQuery))
                        .map((book) => {
                            return (
                                <Col xs={6} md={3} key={book.asin}>
                                    <SingleBook book={book} />
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </>
    );
}