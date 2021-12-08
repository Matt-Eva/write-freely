import { NavLink } from "react-router-dom";
import styled from "styled-components"

function SearchNav(){
    return(
        <UserSearch>
            <NavLink exact to="/fiction">Fiction</NavLink>
            <NavLink exact to="/poetry">Poetry</NavLink>
            <NavLink exact to="/nonfiction">NonFiction</NavLink>
            <NavLink exact to="/journalism">Journalism</NavLink>
            <br/>
            <br/>
            <input type="text" placeholder="Search by title or writer."/>
            <button>Search</button>
            <br/>
            <input type="text" placeholder="Filter by tag."/>
            <button>Filter</button>
        </UserSearch>
    )
}

export default SearchNav;

const UserSearch = styled.div `
margin: 0px 20% 10px 20%;
padding-top: 30px;
background: hsl(0, 0%, 90%);
text-align: center;

a{
    margin: 2px;
    color: black;
    text-decoration: none;
}
`