import styled from "styled-components";

export const PasswordVisIcon = styled.img`
    display: inline-block;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    width: ${(props) => props.width};
    min-width: initial;
    margin-right: 0.285em;
    background-size: contain;
    opacity: .60;
    top: ${(props) => props.$top};
    vertical-align: middle;
    overflow: hidden;
    text-align: left;
    text-indent: -3000px;
    position: absolute;
    left: ${(props) => props.$left};
    font-size: 1.25rem;
    cursor: ${(props) => props.cursor};
`