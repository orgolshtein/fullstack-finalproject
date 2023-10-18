import styled from "styled-components";
import * as AppColor from "./Colors";

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

export const GameThumbNewTag = styled.span`
    background-color: ${AppColor.LoginBtn};
    width: 3rem;
    display: ${(props)=>props.display};
    line-height: 1.7;
    font-size: 0.9rem;
    border-radius: 0.1rem;
    text-transform: capitalize;
    font-weight: 300;
    color: ${AppColor.ButtonText};
    position: absolute;
    vertical-align: middle;
    font-style: normal;
    border: 0;
    text-align: center;
    text-decoration: none;
    top: 0.5rem;
    left: 0rem;
    z-index:3;
    opacity: .9
`