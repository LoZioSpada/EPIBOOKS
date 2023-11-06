import { useState } from "react";
import { Container, Row, Tabs, Tab, Col } from "react-bootstrap";
import history from "../books/history.json"
import fantasy from "../books/fantasy.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import SingleBook from "./SingleBook";
import ModalComment from './ModalComment';

const BooksByGenre = {
    history,
    fantasy,
    horror,
    romance,
    scifi,
}

export default function AllTheBooks({ searchQuery }) {
    const [titolo, setTitolo] = useState('')
    const [selected, setSelected] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('history')
    const books = BooksByGenre[selectedGenre];
    const BooksByQuery = (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase());

    return (
        <>
            <Container className="my-5">
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="my-3"
                    justify
                    onSelect={(genre) => setSelectedGenre(genre)}
                >
                    {Object.keys(BooksByGenre).map((genre) => (
                        <Tab eventKey={genre} title={genre} />
                    ))}
                </Tabs>

                <Row>
                    <Col xs={8}>
                        <Row>
                            {books.filter(BooksByQuery).map((book) => (
                                <SingleBook book={book} key={book.asin} setTitolo={setTitolo} title={book.title} selected={selected} setSelected={setSelected} />
                            ))}
                        </Row>
                    </Col>

                    {!!selected && <Col xs={4} className="position-sticky" style={{ height: 450, top: 70 }} >
                        <h3>Comments of:</h3>
                        <p>{titolo}</p>
                        <ModalComment selected={selected} setSelected={setSelected} />
                    </Col>}
                </Row>
            </Container>
        </>
    );
}