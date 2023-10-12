import styled from "styled-components";
import * as AppColor from "./Colors";

export const InputHeader = styled.input`
    border:none;
    width: 100%;
    padding: 0 2.5em 0 0.56em;
    height: 100%;
`

export const InputContainerHeader = styled.span`
    font-size: 1rem;
    border-radius: 0;
    border-color: ${AppColor.InputBorder};
    box-shadow: none;
    color: ${AppColor.InputText};
    border-width: 1px;
    display: inline-block;
    width: 100%;
    font-weight: 530;
    border-style: solid;
    background: ${(props)=>(props.$background)};
    transition: box-shadow 100ms,border 100ms;
    line-height: 1;
`

export const PopupInput = styled.input`
    display: block;
    max-width: 100%;
    margin-bottom: 1em;
    font-size: 1rem;
    color: ${AppColor.PopupMainText};
    border-color: ${AppColor.PopupMainText};
    border-radius: 3px;
    box-shadow: none;
    border-width: 1px;
    height: 2.5em;
    padding: 0 2.5em 0 0.56em;
    margin: 0;
    width: 100%;
    font-weight: 400;
    border-style: solid;
    background-color: ${(props)=>(props.$background)};
    transition: box-shadow 100ms,border 100ms;
    line-height: 1;
`