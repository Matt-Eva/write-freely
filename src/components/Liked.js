import Display from "./Display"
import SideBar from "./SideBar"
import { useEffect, useState } from "react"
import styled from "styled-components"

function Liked({user, setViewItem}){
    const[likes, setLikes] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:9292/likes/${user}`)
        .then(r => r.json())
        .then(data=> {
            console.log(data)
            setLikes(data)
        })
    }, [])

if (likes === null){
    return <h1>Loading...</h1>
}
return(
    <MyLiked>
        <h1>Writing I Liked</h1>
        <SideBar />
        <Display user={user} setViewItem={setViewItem} creations={likes}/>
    </MyLiked>
    
)
}

export default Liked;

const MyLiked = styled.div`
text-align: center;
`