import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function SingleBook({ book }) {
   
    const [selected, setSelected] = useState(false)

    return (
        <>
            <Card onClick={() => setSelected(!selected)}
                style={{ border: selected ? '2px solid red' : 'none' }}
                className="mb-5" id={`book_${book.asin}`}
                >
                <Card.Img src={book.img} variant="top" className='image' />
                <Card.Body class="card-body p-1">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">Categoria: {book.category}</p>
                    <p className="card-text"> Prezzo: {book.price}</p>
                </Card.Body>
            </Card>
        </>
    );
}