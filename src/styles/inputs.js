import styled from "styled-components";
import * as AppColor from "./colors";

export const InputContainerHeader = styled.form`
    position: relative;
    font-size: 1rem;
    border: ${(props)=>props.$inputbor} 1.7px solid;
    color: ${AppColor.InputText};
    border-radius: 0.2rem;
    `

export const InputHeader = styled.input`
    border:none;
    background-color: ${(props)=>(props.$background)};
    width: 100%;
    padding: 0 2.5em 0 0.56em;
    height: 100%;

    &:focus{
        outline-width: 0;
    }
`

export const ForgotPassInput = styled.input`
    display: block;
    max-width: 100%;
    margin-bottom: 1em;
    font-size: 1rem;
    color: ${AppColor.InputText};
    border-color: ${(props)=>props.$inputbor};
    border-radius: 3px;
    box-shadow: none;
    border-width: 1.5px;
    height: 2.5em;
    padding: 0 2.5em 0 0.56em;
    width: 100%;
    font-weight: 400;
    border-style: solid;
    background-color: ${(props)=>(props.$background)};
    transition: box-shadow 100ms,border 100ms;
    line-height: 1;

    &:focus{
            outline-width: 0;
        }
`

export const InputContainerLogin = styled.span`
    display: inline-block;
    max-width: 100%;
    position: relative;
    margin-bottom: 1em;
    font-size: 1rem;
    color: ${AppColor.InputText};
    border-color: ${(props)=>props.$inputbor};
    border-radius: 3px;
    box-shadow: none;
    border-width: 1.5px;
    height: 2.5em;
    padding: 0 .1rem 0 0.1rem;
    width: 100%;
    font-weight: 400;
    border-style: solid;
    transition: box-shadow 100ms,border 100ms;
    line-height: 1;
    
    `

export const InputLogin = styled.input`
    border:none;
    background-color: ${(props)=>props.$background};
    width: 100%;
    padding-left: 2rem;
    height: 100%;

    &:focus{
        outline-width: 0;
    }
`

export const SearchInputContainer = styled.form`
    width: 13rem;
    position: relative;
    top: 0.7rem;
    left: 1.6rem;
    line-height: 2.6em;
    border-radius: 0.5rem;
    height: 2rem;

    @media only screen and (max-width: 1024px){
        left: -4rem;
    }

    @media only screen and (max-width: 768px){
        width: 22rem;
        margin-top: 0.4rem;
        line-height: 2.6em;
        height: 3.6rem;
        left: 1.6rem;
    }

    @media only screen and (max-width: 290px){
        left: -4rem;
    }

    .searchIcon{
        background: url("src/assets/icons/gamesearch_icon.svg") 50% 50%/contain no-repeat;
        width: 1.286rem;
        min-width: initial;
        height: 1.286rem;
        margin-top: 0.357rem;
        margin-left: 0.143rem;
        min-height: auto;
        z-index: 5;
        cursor: pointer;
        position: absolute;
        font-size: 1rem;
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
        text-align: left;
        text-indent: -3000px;

        @media only screen and (max-width: 768px){
            display: none;
        }
    }
`

export const SearchInput = styled.input`
    color: ${AppColor.InputText};
    background-color: ${AppColor.InputBackground};
    position: absolute;
    font-size: 1rem;
    border: none;
    width: 12.75rem;
    height: 100%;
    padding-left: 1.5rem;

    &:focus{
        outline-width: 0;
    }

    @media only screen and (max-width: 768px){
        font-size: 1.8rem;
        width: 100%;
    }

    @media only screen and (max-width: 290px){
        width: 340%;
    }
`