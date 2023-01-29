import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromBtnClick])

    const handleClick = () => {
        setIdFromBtnClick(id)
    }

    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching