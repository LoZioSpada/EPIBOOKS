import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from '../CommentArea/index'
import history from "../../books/history.json"
import fantasy from "../../books/fantasy.json"
import horror from "../../books/horror.json"
import romance from "../../books/romance.json"
import scifi from "../../books/scifi.json"
import styles from "./style.module.scss"

const BooksByGenre = [
    history,
    fantasy,
    horror,
    romance,
    scifi,
]

export default function BookDetails() {
    
    const params = useParams()
    const books = BooksByGenre[params]
    const foundBook = books.find((book) => book.asin === params.asin)

    return(
        <>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <Card>
                        <Card.Img variant='top' src={foundBook.img} />
                        <Card.Body>
                            <Card.Title style={{ color: 'red' }}>
                                {foundBook.title}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <CommentArea asin={params.asin}/>
                </Col>
            </Row>
        </>
    )
}