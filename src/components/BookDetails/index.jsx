import { Col, Row, Image } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import CommentArea from '../CommentArea/index'
import styles from "./style.module.scss"
import { useCallback, useContext, useEffect, useState } from 'react'
import GenreContext from '../../contexts/genre'
import CommentList from '../CommentList'
import cn from 'classnames'


export default function BookDetails() {
    const { id, genre } = useParams()
    const { BooksByGenre } = useContext(GenreContext)
    const [allComments, setAllComments] = useState([])

    const navigate = useNavigate()

    const foundBook = BooksByGenre[genre].find((book) => book.asin === id)

    const getAllComments = useCallback(() => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
            method: 'GET',
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE2OTg1MDYyMzIsImV4cCI6MTY5OTcxNTgzMn0.NQFKfUGhtKfOR_ohq1noYrZP6rwpvUN_wLplddnPFmU",
            },
        })
            .then((response) => response.json())
            .then(setAllComments)
            .catch(() => alert("Something went wrong!"))
    }, [id])

    useEffect(() => {
        getAllComments()
    }, [getAllComments])

    if (!foundBook) {
        navigate('/404')
    }
    else {
        return (
            <>
                <Row className='justify-content-center'>
                    <Col className='justify-content-center'>
                        <Image
                            className={styles.mainImage}
                            src={foundBook['img']}
                            fluid
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='mb-5'>
                            <h1>{foundBook['title']}</h1>
                            <h3>Category: {foundBook['category']}</h3>
                            <h5>Price: {foundBook['price']} €</h5>
                        </div>
                            <CommentArea asin={id} />
                    </Col>
                    <CommentList getAllComments={getAllComments} allComments={allComments}/>
                </Row>
            </>
        )
    }
}