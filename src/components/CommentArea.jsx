import { useEffect, useState } from "react"
import CommentList from './CommentList'
import Error from './Error'
import Loading from './Loading'
import AddComment from './AddComment.jsx'

export default function CommentArea ({ asin }) {
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
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjhiMDc3Y2RhYTAwMTQ2ZGYzODEiLCJpYXQiOjE2OTg1MDYyMzIsImV4cCI6MTY5OTcxNTgzMn0.NQFKfUGhtKfOR_ohq1noYrZP6rwpvUN_wLplddnPFmU',
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
        <div>
            {loading && <Loading />}
            {error && <Error />}
            <AddComment asin={asin} />
            <CommentList commentsShow={comments} />
        </div>
    )
}