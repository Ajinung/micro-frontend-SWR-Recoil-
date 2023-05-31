import styled from "styled-components"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Logo>Module Federation</Logo>

                    <NavHolder>
                        <Nav to="/" >Data Fetching</Nav>
                        <Nav to="/todo" >Todo</Nav>
                        <Nav to="/state-management" >State Management</Nav>
                    </NavHolder>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const Nav = styled(Link)`
text-decoration: none;
color: white;
margin: 0 5px;
font-weight: bold;
transition: all 300ms;

:hover{
    cursor: pointer;
    transform: translate(0px, -5px);
}
`

const NavHolder = styled.div`
display: flex;
height: 100%;
align-items: center

`

const Logo = styled.div`
font-weight: 900;
font-size: 30px;
`

const Main = styled.div`
width: 80%;
display:flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid silver;
background-color: #0258a3;
color: white;
`