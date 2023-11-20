import { Button, ListGroup, } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useCallback } from "react";

export default function SingleComment({ setComments, comment, id }) {

  const getComments = useCallback(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/books/:${id}/comments/`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE3MDAzMzY1NDEsImV4cCI6MTcwMTU0NjE0MX0.K4MioEDi6vNxOFIwjRjACyIevOSwDmYUcIsG_PSScQ4',
        },
      })
      .then((response) => response.json())
      .then(setComments)
  });


  const deleteComment = (asin) => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE3MDAzMzY1NDEsImV4cCI6MTcwMTU0NjE0MX0.K4MioEDi6vNxOFIwjRjACyIevOSwDmYUcIsG_PSScQ4',
        },
      }).then((response) => {
        if (response.ok) {
          alert('Your review was deleted successfully!')
        } else {
          alert('Your review was not deleted!')
        }
      })
      .then(getComments())
      .catch(error => console.error(error))
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <h6>{comment.comment} - {comment.rate}</h6>
      <div>
        <Button
          variant="danger"
          className="ms-2 rounded-circle"
          onClick={() => deleteComment(comment._id)}
        >
          <Trash />
        </Button>
      </div>
    </ListGroup.Item>
  )
}