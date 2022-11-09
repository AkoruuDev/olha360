import styled from "styled-components"

export default function Footer() {
    return (
        <Container>
            <Div></Div>
            <Nav>
                <div><p>Home</p></div>
                <div><p>About</p></div>
                <div><p>Contact</p></div>
            </Nav>
            <p>&copy; Olhar360 &trade; 2022</p>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    background-color: #7499BD;
    padding-bottom: 15px;

    font-size: 16px;
    font-weight: 700;
    color: #D8EAFB;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Div = styled.div`
    width: 65vw;
    border: 1px solid #D8EAFB;
`

const Nav = styled.nav`
    width: 75vw;
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