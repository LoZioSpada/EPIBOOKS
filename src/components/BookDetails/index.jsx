import { Col, Row, Image, Container } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import CommentArea from '../CommentArea'
import styles from "./style.module.scss"
import { useCallback, useContext, useEffect } from 'react'
import GenreContext from '../../contexts/genre'



export default function BookDetails(getComments) {
    const { id, genre } = useParams()
    const { BooksByGenre } = useContext(GenreContext)

    const navigate = useNavigate()

    const foundBook = BooksByGenre[genre].find((book) => book.asin === id)

    const getAllComments = useCallback(() => {
        fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments`, {
            method: 'GET',
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE3MDAzMzY1NDEsImV4cCI6MTcwMTU0NjE0MX0.K4MioEDi6vNxOFIwjRjACyIevOSwDmYUcIsG_PSScQ4",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                }
            })
            .catch(() => alert("Something went wrong!"))              
    }, [id]);

    useEffect(() => {
        getAllComments()
    }, [getAllComments])

    if (!foundBook) {
        navigate('/404')
    }
    else {
        return (
            <Container className='book-details'>
                <Row className='justify-content-center'>
                    <Col className='justify-content-center'>
                        <Image
                            className={styles.mainImage}
                            src={foundBook['img']}
                            fluid
                        />
                    </Col>
                    <Col xs={12} md={6} className='text-center'>
                        <div className='mb-5'>
                            <h1>{foundBook['title']}</h1>
                            <h3>Category: {foundBook['category']}</h3>
                            <h5>Price: {foundBook['price']} €</h5>
                        </div>
                        <CommentArea asin={id} getComments={getComments}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}