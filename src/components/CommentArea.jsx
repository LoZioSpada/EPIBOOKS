import { useEffect, useState } from "react"
import CommentList from './CommentList/index.jsx'
import AddComment from './AddComment.jsx'
import Error from './Error.jsx'
import Loading from './Loading.jsx'

export default function CommentArea ({ asin, getAllComments }) {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getComments = async () => {
            setLoading(true)
            try{
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE3MDAzMzY1NDEsImV4cCI6MTcwMTU0NjE0MX0.K4MioEDi6vNxOFIwjRjACyIevOSwDmYUcIsG_PSScQ4',
                    },
                })
                if(response.ok){
                    let comments = await response.json()
                    setComments(comments)
                    setLoading(false)
                    setError(false)
                } else {
                    console.log('ERROR')
                    setLoading(false)
                    setError(true)
                }
            } catch (error){
                console.log('ERROR')
                setLoading(false)
                setError(true)
            }
        }
        if(asin) {
            getComments()
        }
    }, [asin])

    return(
        <div className="mt-3 text-center">
            {loading && <Loading />}
            {error && <Error />}
            <h2>Add a comment:</h2>
            <AddComment asin={asin} />
            <h2>Comments:</h2>
            <CommentList commentsToShow={comments} />
        </div>
    )
}