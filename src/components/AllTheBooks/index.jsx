import { useContext, useState } from "react";
import { Container, Row, Tabs, Tab, Col } from "react-bootstrap";
import GenreContext from "../../contexts/genre";
import SingleBook from "../SingleBook";
import styles from "./style.module.scss"


export default function AllTheBooks({ searchQuery }) {
    const [selected, setSelected] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('history')
    const { BooksByGenre } = useContext(GenreContext)
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
                        <Tab eventKey={genre} title={genre} />
                    ))}
                </Tabs>

                <Row>
                    <Col>
                        <Row>
                            {books.filter(BooksByQuery).map((book) => (
                                <SingleBook book={book} key={book.asin} selected={selected} setSelected={setSelected} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}