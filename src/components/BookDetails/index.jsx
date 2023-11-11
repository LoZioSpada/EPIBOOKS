import { Col, Row, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from '../CommentArea/index'
import styles from "./style.module.scss"
import { useContext } from 'react'
import GenreContext from '../../contexts/genre'

export default function BookDetails() {
    const { id, genre } = useParams()
    const { BooksByGenre } = useContext(GenreContext)

    const foundBook = BooksByGenre[genre].find((book) => book.asin === id)

    return(
        <>
            <Row>
                <Col xs={12} md={6}>
                    <Image
                        className={styles.mainImage}
                        src={foundBook['img']}
                        fluid
                    />
                </Col>
                <Col xs={12} md={6}>
                    <h1>{foundBook['title']}</h1>
                    <p>{foundBook['category']}</p>
                    <p>{foundBook['price']}</p>
                </Col>
                <Col xs={12} md={6}>
                    <CommentArea asin={id}/>
                </Col>
            </Row>
        </>
    )
}