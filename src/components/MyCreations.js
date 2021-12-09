import Display from "./Display";
import SideBar from "./SideBar"
import { useEffect, useState } from "react"
import styled from "styled-components"

function MyCreations({user, path, setViewItem}){
    const [myCreations, setMyCreations] = useState(null)
    console.log(myCreations)
    console.log(user)


    useEffect(() => {
        fetch(`http://localhost:9292/my_creations/${user}`)
        .then(r => r.json())
        .then(data=> setMyCreations(data))
    }, [])


    if (myCreations === null){
        return<h1>Loading...</h1>
    }

    return(
        <MyWriting>
            <h1>Your Creations</h1>
            <SideBar />
            <Display creations={myCreations} user={user} path={path} setViewItem={setViewItem}/>
        </MyWriting>
    )
}

export default MyCreations;

const MyWriting = styled.div`
text-align: center;
`