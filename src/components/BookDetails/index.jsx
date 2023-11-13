import { Col, Row, Image } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import CommentArea from '../CommentArea/index'
import styles from "./style.module.scss"
import { useCallback, useContext, useEffect } from 'react'
import GenreContext from '../../contexts/genre'


export default function BookDetails() {
    const { id, genre } = useParams()
    const { BooksByGenre } = useContext(GenreContext)

    const navigate = useNavigate()

    const foundBook = BooksByGenre[genre].find((book) => book.asin === id)

    const getComments = useCallback(() => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
            method: 'GET',
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE2OTg1MDYyMzIsImV4cCI6MTY5OTcxNTgzMn0.NQFKfUGhtKfOR_ohq1noYrZP6rwpvUN_wLplddnPFmU",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .catch(() => alert("Something went wrong!"))
    }, [id])

    useEffect(() => {
        getComments()
    }, [getComments])

    if (!foundBook) {
        navigate('/404')
    }
    else {
        return (
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
                        <h1>{foundBook.title}</h1>
                        <p>{foundBook.category}</p>
                        <p>{foundBook.price}</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <CommentArea asin={id} />
                    </Col>
                </Row>
            </>
        )
    }
}