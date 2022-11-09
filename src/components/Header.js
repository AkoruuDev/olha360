import styled from "styled-components"

export default function Header() {
    return (
        <Container>
            <Content>
                <img src={'Logo aqui'} alt='olhar360-logo' />
                <Nav>
                    <div><p>Home</p></div>
                    <div><p>About</p></div>
                    <div><p>Contact</p></div>
                </Nav>
            </Content>
            <Div></Div>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 86px;
    background-color: #4784C1;

    font-size: 16px;
    font-weight: 700;
    color: #D8EAFB;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 1;
    top: 0;
`

const Content = styled.div`
    width: 80vw;
    padding: 15px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Div = styled.div`
    width: 65vw;
    border: 1px solid #D8EAFB;
`

const Nav = styled.nav`
    width: 50%;
    height: 25px;
    margin: 15px 0;

    display: flex;
    justify-content: space-between;

    & div {
        width: 30%;
        display: flex;
        justify-content: center;
    }

    & p {
        transition: all 0.05s linear;
    }

    & p:hover {
        cursor: pointer;
        font-size: 18px;
        color: #EA9EE4;
    }
`