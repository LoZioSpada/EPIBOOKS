import { useContext, useState } from "react";
import { Container, Row, Tabs, Tab, Col } from "react-bootstrap";
import GenreContext from "../../contexts/genre";
import SingleBook from "../SingleBook";
import styles from "./style.module.scss"
import { useNavigate, useParams } from "react-router-dom";


export default function AllTheBooks({ searchQuery }) {
    const [selected, setSelected] = useState(false)
    const { genre } = useParams()
    const navigate = useNavigate()
    const { BooksByGenre } = useContext(GenreContext)
    const allTheBooks = BooksByGenre[genre]


    return (
        <>
            <Container className="my-5 px-0">
                <Tabs
                    activeKey={genre ? genre : ""}
                    id="books"
                    className="my-3"
                    justify
                    onSelect={(genre) => { navigate(`/${genre}`) }}
                >
                    {Object.keys(BooksByGenre).map((genre, i) => (
                        <Tab eventKey={genre} title={genre} key={i} />
                    ))}
                </Tabs>

                <Row className="mt-5">
                    <Col>
                        <Row>
                            {allTheBooks ? (allTheBooks.filter((b) => b.title.toLowerCase().includes(searchQuery)).map((book) => (
                                <SingleBook
                                    selected={selected}
                                    setSelected={setSelected}
                                    img={book.img}
                                    title={book.title}
                                    category={book.category}
                                    key={book.asin}
                                    asin={book.asin}
                                    price={book.price} />
                            )
                            )) : (
                                <h1 className="text-center">CHOOSE A GENRE</h1>
                            )}
                            </Row>
                            </Col>
                        </Row>
                    </Container>
                </>
                );
}