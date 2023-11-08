import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SingleBook({ book, selected, setSelected }) {
    const navigate = useNavigate()

    return (
        <>
            <Card onClick={() => setSelected(book.asin)}
                style={{ border: selected === book.asin ? '2px solid red' : 'none' }}
                className="mb-5"
            >
                <Card.Img src={book.img} variant="top" className='image' />
                <Card.Body className="card-body p-1">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">Category: {book.category}</p>
                    <p className="card-text"> Price: {book.price}</p>
                    <Button
                        onClick={() => navigate(`/details/${book.asin}`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}