import styled from "styled-components";
import * as AppColor from "./Colors";

export const InputContainerHeader = styled.span`
    position: relative;
    font-size: 1rem;
    border: ${AppColor.InputBorder} 1px solid;
    color: ${AppColor.InputText};
    background: ${(props)=>(props.background)};

    input{
        border:none;
        width: 100%;
        padding: 0 2.5em 0 0.56em;
        height: 100%;

        &:focus{
            outline-width: 0;
        }
    }
`

export const ForgotPassInput = styled.input`
    display: block;
    max-width: 100%;
    margin-bottom: 1em;
    font-size: 1rem;
    color: ${AppColor.PopupMainText};
    border-color: ${AppColor.InputBorder};
    border-radius: 3px;
    box-shadow: none;
    border-width: 1px;
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
    color: ${AppColor.PopupMainText};
    border-color: ${AppColor.InputBorder};
    border-radius: 3px;
    box-shadow: none;
    border-width: 1px;
    height: 2.5em;
    padding: 0 .1rem 0 0.1rem;
    width: 100%;
    font-weight: 400;
    border-style: solid;
    background-color: ${(props)=>props.$background};
    transition: box-shadow 100ms,border 100ms;
    line-height: 1;

    input{
        border:none;
        width: 100%;
        padding-left: 2rem;
        height: 100%;

        &:focus{
            outline-width: 0;
        }
    }
`

export const SearchInputContainer = styled.div`
    background-color: transparent;
    width: 13rem;
    position: relative;
    top: 0.7rem;
    left: 1.6rem;
    line-height: 2.6em;
    border: 1px solid ${AppColor.InputBorder};
    height: 2rem;

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
    }

    input{
        color: ${AppColor.InputSearchText};
        position: absolute;
        font-size: 1rem;
        border: none;
        width: 12.75rem;
        height: 100%;
        padding-left: 1.5rem;

        &:focus{
            outline-width: 0;
        }
    }
`