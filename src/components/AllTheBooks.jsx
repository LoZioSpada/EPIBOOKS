import { useState } from "react";
import { Container, Row, Form, Tabs, Tab } from "react-bootstrap";
import history from "../books/history.json"
import fantasy from "../books/fantasy.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import SingleBook from "./SingleBook";

const BooksByGenre = {
    history,
    fantasy,
    horror,
    romance,
    scifi,
}

export default function AllTheBooks() {
    const [searchQuery, setSearchQuery] = useState('')
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
                <Row className="my-5">
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Row xs={6} md={3}>
                        {books.filter(BooksByQuery).map((book) => (
                            <SingleBook book={book} key={book.asin} />
                        ))}
                </Row>
            </Container>
        </>
    );
}