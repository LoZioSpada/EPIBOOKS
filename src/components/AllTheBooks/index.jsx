import { useState } from "react";
import { Container, Row, Tabs, Tab, Col } from "react-bootstrap";
import history from "../../books/history.json"
import fantasy from "../../books/fantasy.json"
import horror from "../../books/horror.json"
import romance from "../../books/romance.json"
import scifi from "../../books/scifi.json"
import SingleBook from "../SingleBook";
import styles from "./style.module.scss"

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
            <Container className="my-5 px-0">
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="my-3"
                    justify
                    onSelect={(genre) => setSelectedGenre(genre)}
                >
                    {Object.keys(BooksByGenre).map((genre) => (
                        <Tab eventKey={genre} titolo={genre} />
                    ))}
                </Tabs>

                <Row>
                    <Col>
                        <Row>
                            {books.filter(BooksByQuery).map((book) => (
                                <SingleBook book={book} key={book.asin} setTitolo={setTitolo} titolo={book.titolo} selected={selected} setSelected={setSelected} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}