import styled from "styled-components"
import { Link } from "react-router-dom"

function SideBar() {
    return(
        <SideDiv>
            <h2><Link to="/create">Create!</Link></h2>
            <h3><Link to="/my_creations">My Creations</Link></h3>
            <h3><Link to="/my_library">My Library</Link></h3>
            <h3><Link to="/liked">Liked Writing</Link></h3>

        </SideDiv>
    )
}

export default SideBar;

const SideDiv = styled.div`
    position: sticky;
    top: 260px;;
    margin: 0px 20px 0px 10px;
    float: left;
    width: 200px;
    background: hsl(50, 50%, 80%);
    border: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 5px 5px 5px 20px;   
    text-align: left;
    
    a{
        color: black;
        text-decoration: none;
    }
`