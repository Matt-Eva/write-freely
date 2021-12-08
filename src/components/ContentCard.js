import { Link } from "react-router-dom"

import styled from "styled-components"
function ContentCard({creation, user, setViewItem}) {

    return (
        <Card>
            <h2>{creation.title}</h2>
            <h4>By: {creation.user.username}</h4>
            <Link to={`/${creation.id}`} onClick={() =>setViewItem(creation)}>View</Link>
            <br/>
            <br/>
            {creation.user.id === user ? (
            <>
            <button>Edit</button>
            <br/>
            <br/>
            <button>Delete</button>
            </> ): null}
        </Card>
    )
}

export default ContentCard;

const Card = styled.div`
 margin: 10px 2.5% 10px 2.5%;
  padding: 5px 5px 5px 5px;
  width: calc(20% - 10px);
  min-height: 300px;
  /* border: solid;
  border-width: 1px; */
  border-radius: 5px;
  border-color: black;
  background-color: hsl(0, 0%, 98%);
  transition: background-color 500ms, border-color 500ms;
  box-shadow: 3px 3px 4px hsl(0, 0%, 85%);
  text-align: center;

  a{
      text-decoration: none;
      color: black;
  }
  a:visited{
      color: black
  }
`