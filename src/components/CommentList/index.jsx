import { ListGroup } from 'react-bootstrap'
import SingleComment from '../SingleComment'

export default function CommentList ({ commentsToShow }) {
  <ListGroup style={{ color: 'black' }} className="mt-2 mb-5">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
}