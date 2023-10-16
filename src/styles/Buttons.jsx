import styled from "styled-components";
import { darken } from "polished";
import * as AppColor from "./Colors";

export const LoginHeaderBtn = styled.button`
    background-color: ${AppColor.LoginBtn};
    color: ${AppColor.ButtonText};
    min-width: 7.5rem;
    font-size: .786rem;
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;
    text-align: center;
    cursor: pointer;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;

    &:hover {
        background-color: ${darken(0.2, AppColor.LoginBtn)};
    }
`

export const LoginHeaderBtnActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.4, AppColor.LoginBtn)};
    text-transform: uppercase;
    font-size: .786rem;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;
`

export const JoinHeaderBtn = styled.button`
    background-color: ${AppColor.JoinBtn};
    color: ${AppColor.ButtonText};
    min-width: 7.5rem;
    font-size: .786rem;
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;
    text-align: center;
    cursor: pointer;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;
    
    &:hover {
        background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`

export const JoinHeaderBtnActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.4, AppColor.JoinBtn)};
    text-transform: uppercase;
    font-size: .786rem;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
`

export const JoinGalleryBtn = styled.button`
    display: block;
    font-family: 'Gotham Bold',sans-serif;
    background-color:${AppColor.JoinBtn};
    position: absolute;
    top: 12rem;
    z-index: 1;
    width: 25rem;
    left: 13%;
    width: 21.4rem;
    max-width: 100%;
    margin-left: 2.2rem;
    margin-top: 1.1rem;
    font-size: 1.714rem;
    box-shadow: none;
    cursor: pointer;
    padding-top: 0.1em;
    line-height: 1.7;
    border-radius: 0.2rem;
    font-weight: 700;
    color: ${AppColor.MainText};
    border: none;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;

    &:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`

export const JoinGalleryBtnActive = styled.button`
      color: ${darken(0.7, AppColor.MainText)};
      background-color: ${darken(0.2, AppColor.JoinBtn)};
      display: block;
      font-family: 'Gotham Bold',sans-serif;
      position: absolute;
      top: 12rem;
      z-index: 1;
      width: 25rem;
      cursor: initial;
      left: 13%;
      width: 21.4rem;
      max-width: 100%;
      margin-left: 2.2rem;
      margin-top: 1.1rem;
      font-size: 1.714rem;
      box-shadow: none;
      padding-top: 0.1em;
      line-height: 1.7;
      border-radius: 0.2rem;
      font-weight: 700;
      border: none;
      transition: background-color .15s ease-out;
      transition: color .15s ease-out;
`
export const PopupCloseBtn = styled.span`
    background: url(${(props) => props.$url}) no-repeat 0 0/contain;
    width: 0.75em;
    height: 0.75em;
    right: 0.8em;
    top: 0.8em;
    position: absolute;
    z-index: 2;
    cursor: pointer;
    display: inline-block;
    min-height: 2.5em;
`

export const ForgotPasswordCta = styled.button`
    color: ${AppColor.ButtonText};
    background-color: ${AppColor.LoginBtn};
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: middle;
    font-family: Asap,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    transition: box-shadow 300ms;
    cursor: pointer;
    line-height: 2.25em;
    padding: 0 1em;
    border: 0;
    text-align: center;
    text-decoration: none;
    margin: 1rem auto;
    border-radius: 0;
    box-shadow: none;
    min-width: 100%;
    text-transform: uppercase;
    
    &:hover {
      background-color: ${darken(0.2, AppColor.LoginBtn)};
    }
`

export const ForgotPasswordCtaActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.4, AppColor.LoginBtn)};
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: middle;
    font-family: Asap,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    transition: box-shadow 300ms;
    cursor: initial;
    line-height: 2.25em;
    padding: 0 1em;
    border: 0;
    text-align: center;
    text-decoration: none;
    margin: 1rem auto;
    border-radius: 0;
    box-shadow: none;
    min-width: 100%;
    text-transform: uppercase;
`

export const LoginPopupBtn = styled.button`
    color: ${AppColor.ButtonText};
    background-color: ${AppColor.LoginBtn};
    height: 2.8rem;
    width: 100%;
    padding: 0;
    font-size: 1.14rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    line-height: 2.5em;
    box-shadow: none;
    min-width: 11em;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: middle;
    font-style: normal;
    border: 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      background-color: ${darken(0.2, AppColor.LoginBtn)};
    }
`

export const LoginPopupBtnActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.4, AppColor.LoginBtn)};
    height: 2.8rem;
    width: 100%;
    padding: 0;
    font-size: 1.14rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    line-height: 2.5em;
    box-shadow: none;
    min-width: 11em;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: middle;
    font-style: normal;
    border: 0;
    text-align: center;
    text-decoration: none;
    cursor: initial;
`

export const JoinPopupBtn = styled.button`
    color: ${AppColor.ButtonText};
    background-color: ${AppColor.JoinBtn};
    height: 2.8rem;
    width: 100%;
    padding: 0;
    font-size: 1.14rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    line-height: 2.5em;
    box-shadow: none;
    min-width: 11em;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: middle;
    font-style: normal;
    border: 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`

export const JoinPopupBtnActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.2, AppColor.JoinBtn)};
    height: 2.8rem;
    width: 100%;
    padding: 0;
    font-size: 1.14rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    line-height: 2.5em;
    box-shadow: none;
    min-width: 11em;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: middle;
    font-style: normal;
    border: 0;
    text-align: center;
    text-decoration: none;
    cursor: initial;
`