import styled from "styled-components";

export const PasswordVisIcon = styled.img`
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    width: ${(props) => props.width};
    opacity: .60;
    position: absolute;
    left: 83%;
    font-size: ${(props) => props.width};;
    cursor: ${(props) => props.cursor};
`