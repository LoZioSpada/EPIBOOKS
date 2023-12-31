import { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap'

export default function AddComment({ asin, getAllComments }) {
    const [comment, setComment] = useState({ comment: '', rate: 1, elementId: null, })

    useEffect(() => {
        setComment((comment) => ({
            ...comment,
            elementId: asin
        }))
    }, [asin])

    const sendComment = async (event) => {
        event.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments',
                {
                    method: 'POST',
                    body: JSON.stringify(comment),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE3MDAzMzY1NDEsImV4cCI6MTcwMTU0NjE0MX0.K4MioEDi6vNxOFIwjRjACyIevOSwDmYUcIsG_PSScQ4',
                    },
                })
            if (response.ok) {
                alert('The review was successfully published!')
                setComment({
                    comment: '',
                    rate: 1,
                    elementId: null,
                })
                getAllComments()
            } else {
                throw new Error('The review was not successfully published!')
            }
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className="my-5 mx-1">
            <Form onSubmit={sendComment}>
                <Form.Group className="mb-3">
                    <Form.Label>Review</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Write here your review:"
                        value={comment.comment}
                        onChange={(event) =>
                            setComment({ ...comment, comment: event.target.value, })
                        }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rate</Form.Label>
                    <Form.Control 
                        as='select'
                        value={comment.rate}
                        onChange={(event) => setComment({ ...comment, rate: event.target.value, })}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button
                variant="primary"
                type="submit"
                className="mt-3"
                getAllComments={getAllComments}
                >Add Review</Button>
            </Form>
        </div>
    )
}