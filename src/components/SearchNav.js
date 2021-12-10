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

console.log(tagForm)

function search(form, path){
    if(path === ""){
        const query = form.title
        fetch(`http://localhost:9292/search/${query}`)
        .then(r => r.json())
        .then(data => setFilterSearch(data))
    } else{
        console.log(form)
        const query = {
            title: form.title,
            category: path
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(query)
        }
        fetch("http://localhost:9292/creations/search", configObj)
        .then(r => r.json())
        .then(data => setFilterSearch(data))
    }
}

function filter(form, path){
    if(path === ""){
        const query = form.tag
        console.log(query)
        fetch(`http://localhost:9292/tag/${query}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setFilterSearch(data)
        })
    } else {
        console.log(path)
        const query = {
            tag: form.tag,
            category: path
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(query)
        }
        fetch("http://localhost:9292/creations/tag", configObj)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setFilterSearch(data)})
    }
}

    return(
        <UserSearch>
            <NavLink exact to="/fiction">Fiction</NavLink>
            <NavLink exact to="/poetry">Poetry</NavLink>
            <NavLink exact to="/nonfiction">NonFiction</NavLink>
            <NavLink exact to="/journalism">Journalism</NavLink>
            <br/>
            <br/>
            <form onChange={(e) => setSearchForm({title: e.target.value})} onSubmit={(e) => {
                    e.preventDefault()
                    search(searchForm, path)
                    setSearchForm({title: ""})
                    }}>
                <input type="text" placeholder="Search by title." value={searchForm.title} />
                {searchForm.title !== "" ? <button type="submit">Search</button> : <button disabled>Search</button>}
            </form>
            <br/>
            <form onChange={(e) => setTagForm({tag: e.target.value})} onSubmit={(e) => {
                e.preventDefault()
                filter(tagForm, path)
                setTagForm({tag: ""})
                }}>
                <input type="text" placeholder="Filter by tag." value={tagForm.tag}/>
                {tagForm.tag !== "" ? <button type="submit">Filter</button> : <button disabled>Filter</button>}
            </form>
            <br/>
            <button onClick={() => setFilterSearch("")}>Reset</button>
        </UserSearch>
    )
}

export default SearchNav;

const UserSearch = styled.div `
margin: 0px 0% 10px 0%;
padding: 30px 20% 10px 20%;
background: hsl(0, 0%, 90%);
text-align: center;
position: sticky;
top: 0px;
height: 150px;

a{
    margin: 2px;
    color: black;
    text-decoration: none;
}
`