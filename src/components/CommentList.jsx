import { ListGroup } from "react-bootstrap";
import SingleComment from './SingleComment'

export default function CommentList ({ commentsShow }) {
    <ListGroup style={{ color: "green" }} className="mt-4">
        {commentsShow.map((comment) => (
            <SingleComment comment={comment} key={comment._id} />
        ))}
    </ListGroup>
}