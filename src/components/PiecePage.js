import TopHead from "./TopHead"
import styled from "styled-components"

function PiecePage({viewItem}) {
    console.log(viewItem)
    const content_array = viewItem.content.split("\n")
    const display_array = content_array.map(p => <p key={p[0]}>{p}</p>)
    return (
        <>
        <TopHead/>
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