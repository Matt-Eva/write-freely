import styled from "styled-components"

function TopHead() {
    return(
        <Top>
             <div className="logo">
                WriteFreely
            </div>
            <div className="profile">
                My Profile
            </div>
        </Top>
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