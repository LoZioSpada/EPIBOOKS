import { Button, ListGroup, } from "react-bootstrap";
import styles from "./style.module.scss"

export default function SingleComment({ comment, getAllComments }) {
    const deleteComment = async (asin) => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE2OTg1MDYyMzIsImV4cCI6MTY5OTcxNTgzMn0.NQFKfUGhtKfOR_ohq1noYrZP6rwpvUN_wLplddnPFmU',
                    },
                })
            if(response.ok) {
                alert('Your review was deleted successfully!')
                getAllComments()
            } else {
                throw new Error('Your review was not deleted!')
            }
        } catch(error) {
            alert(error)
        }
    }

    return(
        <ListGroup.Item>
            {comment.comment}
            ,<Button
                variant="danger"
                className="ms-3"
                onClick={() => deleteComment(comment._id)}
            >Delete</Button>
        </ListGroup.Item>
    )
}