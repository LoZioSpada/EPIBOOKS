import { useState, useEffect, useCallBack } from 'react';
import { Modal, Container, Row, CloseButton } from 'react-bootstrap';
import AddComment from './AddComment';
import CommentList from './CommentList';
import Loading from './Loading';

export default function ModalComment({ selected, setSelected }) {
    const [allComments, setAllComments] = useState([]);
    const [loading, setLoading] = useState();

    const getAllComments = useCallBack(() => {
        setLoading(true);
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${selected}`, {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE2OTg1MDYyMzIsImV4cCI6MTY5OTcxNTgzMn0.NQFKfUGhtKfOR_ohq1noYrZP6rwpvUN_wLplddnPFmU',
            },
        })
            .then((response) => response.json())
            .then(setAllComments)
            .catch((error) => alert(error.message))
            .finally(() => setLoading(false));
    }, [selected]);

    useEffect(() => {
        getAllComments();
    }, [getAllComments]);

    return (
        <>
            <div
                className='modal show'
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            Comments
                        </Modal.Title>
                        <CloseButton onClick={() => { setSelected("") }} />
                    </Modal.Header>

                    <Modal.Body>
                        <Container style={{ border: '3px solid gray' }}>
                            <Row style={{ height : 350, overflow: 'auto' }}>
                                {loading && (
                                    <Loading 
                                    as='span'
                                    animation='border'
                                    size='md'
                                    role='status'
                                    aria-hidden='true'
                                    />
                                    )}
                                {loading && (
                                    <CommentList 
                                    getAllComments={getAllComments}
                                    allComments={allComments}/>
                                )}
                            </Row>
                        </Container>
                        <Container>
                            <AddComment selected={selected} getAllComments={getAllComments}/>
                        </Container>
                    </Modal.Body>
                </Modal.Dialog>

            </div>
        </>
    )
}