import styled from 'styled-components'
import Header from '../static/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default Layout

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top:50px
`