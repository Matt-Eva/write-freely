import { NavLink } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components"

function SearchNav({path, setFilterSearch}){
const [searchForm, setSearchForm] = useState({
    title: ""
})
const [tagForm, setTagForm] = useState({
    tag: ""
})

function search(){

}

function filter(){
    
}

    return(
        <UserSearch>
            <NavLink exact to="/fiction">Fiction</NavLink>
            <NavLink exact to="/poetry">Poetry</NavLink>
            <NavLink exact to="/nonfiction">NonFiction</NavLink>
            <NavLink exact to="/journalism">Journalism</NavLink>
            <br/>
            <br/>
            <form onChange={(e) => setSearchForm(e.target.value)}>
                <input type="text" placeholder="Search by title." value={searchForm.title}/>
                <button type="submit">Search</button>
            </form>
            <br/>
            <form onChange={(e) => setTagForm(e.target.value)}>
                <input type="text" placeholder="Filter by tag." value={tagForm.tag}/>
                <button type="submit">Filter</button>
            </form>
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