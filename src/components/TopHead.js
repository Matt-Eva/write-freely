import styled from "styled-components"
import { Link } from "react-router-dom"
import {useState} from "react"

function TopHead({setUser, setUserDelete}) {
    const [dropdown, setDropdown] = useState(false)


   

    return(
        <>
        <Top>
             <div className="logo">
                <Link to="/">WriteFreely</Link>
            </div>
            <div className="profile" onClick={()=> setDropdown(!dropdown)}>
                My Profile
            </div>
        </Top>
        {dropdown ? (
            <DropDown>
                <div onClick={() => setUser(null)}>Logout</div>
                <br/>
                <div onClick={() => setUserDelete(true)}>Remove Account</div>
            </DropDown>
            ) : null}
        </>
    )
}

export default TopHead

const Top = styled.div`
/* margin: 0px 0px 10px 0px; */
background: hsl(240, 80%, 15%);
height: 50px;
display: flex;
color: white;
font-size: 20px;

a{
    text-decoration: none;
}

a:visited{
    color: white
}

.logo{
    padding-top: 10px;
    margin-left: 20px;
}
.profile{
    width: 200px;
    margin-left: 85%;
    padding-top: 10px;
}
`
const DropDown = styled.div`
margin-left: 90%;
background: hsl(0, 0%, 90%);
text-align: center;
padding: 10px;
z-index: 1;
position: fixed;

div{
    background: hsl(240, 50%, 90%);
    border: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 2px;
}

div:hover{
    background: hsl(240, 100%, 90%)
}

`