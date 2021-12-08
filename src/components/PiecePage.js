import styled from "styled-components"

function PiecePage({user, viewItem}) {

    const content_array = viewItem.content.split("/n")
    let count = 0;
    const display_array = content_array.map(p => {
        count +=1
        return <p key={count}>{p}</p>
    })


    

    return (
        <>
        <PositiveInput>
            <button className="flag">Flag</button>
            <button>Like</button>
            <button>Add to Library</button>
            <button>Donate</button>
        </PositiveInput>
        <Reader>
            <h1>{viewItem.title}</h1>
            <h3>By: {viewItem.user.username}</h3>
            <div>{display_array}</div>
        </Reader>
        </>
    )
}

export default PiecePage

const Reader = styled.div`
text-align: center;
`
const PositiveInput = styled.div`
margin-top: 20px;
text-align: center;

button{
    margin: 0px 10px 0px 10px;
}
.flag{
    margin-right: 200px;
}
`

