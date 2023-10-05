import styled from "styled-components";

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const GameListDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.7rem 0.769em 1.15rem;
    width: 88rem;
    left: 1%;
`

export { CenteredDiv, GameListDiv };