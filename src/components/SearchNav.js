import { NavLink } from "react-router-dom";
import styled from "styled-components"

function SearchNav(){
    return(
        <UserSearch>
            <NavLink exact to="/fiction">Fiction</NavLink>
            <NavLink exact to="/fiction">Poetry</NavLink>
            <NavLink exact to="/fiction">NonFiction</NavLink>
            <NavLink exact to="/fiction">Journalism</NavLink>
            <br/>
            <input type="text" placeholder="Search by title or writer."/>
            <button>Search</button>
            <br/>
            <input type="text" paceholder="Filter by tag."/>
            <button>Filter</button>
        </UserSearch>
    )
}

export default SearchNav;

const UserSearch = styled.div `
padding-top: 30px;
background: hsl(0, 0%, 90%);
text-align: center;
`