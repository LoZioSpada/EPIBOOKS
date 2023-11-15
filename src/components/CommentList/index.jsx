import { ListGroup } from "react-bootstrap";
import SingleComment from '../SingleComment'
import styles from "./style.module.scss"

export default function CommentList ({ allComments, getAllComments}) {
    <ListGroup style={{ color: "green" }} className="mt-4">
        {allComments.map((comment, i) => (
            <SingleComment comment={comment.comment} commentId={comment._id} key={i} getAllComments={getAllComments}/>
        ))}
    </ListGroup>
}