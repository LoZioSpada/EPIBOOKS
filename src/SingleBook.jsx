import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function SingleBook() {
    let books = require('./books/fantasy.json') //DA CAMBIARE CON I FILE .json CHE SONO PRESENTI NELLA CARTELLA 'books'

    return(
        <Container className = 'my-5' >
            <Row>
                {books.map((book) => (
                    <Col xs={6} md={3} key={book.asin}>
                        <Card className="mb-5" id={`book_${book.asin}`}>
                            <Card.Img src={book.img} variant="top" className='image' />
                            <Card.Body class="card-body p-1">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">Categoria: {book.category}</p>
                                <p className="card-text"> Prezzo: {book.price}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}