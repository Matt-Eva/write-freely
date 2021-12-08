import styled from "styled-components"
import { Link } from "react-router-dom"

function SideBar() {
    return(
        <SideDiv>
            <button><Link to="/create">Create!</Link></button>
            <h3><Link to="/my_creations">My Creations</Link></h3>
            <h3>My Library</h3>
            <ul>
                <li>Fiction</li>
                <li>Poetry</li>
                <li>NonFiction</li>
                <li>Journalism</li>
            </ul>
            <h3>Liked Writing</h3>

        </SideDiv>
    )
}

export default SideBar;

const SideDiv = styled.div`
    position: sticky;
    top: 5px;
    margin: 0px 20px 0px 10px;
    float: left;
    width: 200px;
    background: hsl(0, 0%, 90%);
    border: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 5px;   
    text-align: left;
`