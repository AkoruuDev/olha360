import styled from "styled-components"

export default function Main({ children }) {
    return (
        <Container>{ children }</Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 100px;
    background-color: #8CBCEB;

    display: flex;
    justify-content: center;
    align-items: center;
`