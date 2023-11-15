import { Button, ListGroup, } from "react-bootstrap";
import styles from "./style.module.scss"

export default function SingleComment({ getAllComments, ...comment }) {
    const deleteComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment.commentId}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE2OTg1MDYyMzIsImV4cCI6MTY5OTcxNTgzMn0.NQFKfUGhtKfOR_ohq1noYrZP6rwpvUN_wLplddnPFmU',
                },
            }).then((response) => {
                if (response.ok) {
                    alert('Your review was deleted successfully!')
                    getAllComments()
                } else {
                    alert('Your review was not deleted!')
                }
            })
    }

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {comment.commentText}
            <Button
                variant="danger"
                className="ms-3"
                onClick={deleteComment}
            >Delete</Button>
        </ListGroup.Item>
    )
}