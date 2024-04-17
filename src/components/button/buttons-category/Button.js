import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick }) => {
   return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
   color: #000;
   background-color: #fff;
   box-shadow: 3px 3px 7px -4px rgba(0, 0, 0, 0.5);
   border-radius: 10px;
   padding: 15px;
   font-size: 14px;
   border: none;
   font-family: Montserrat, sans-serif;
   font-size: 13px;
   font-weight: normal;
   font-style: normal;
   color: #000;
   cursor: pointer;
   -webkit-transition: all 150ms;
   &:hover,
   :active {
      padding: 15px;
      font-size: 16px;
      font-weight: bold;
      background-color: #dfdfdf;
      box-shadow: 3px 3px 7px -4px rgba(0, 0, 0, 0.5);
      text-decoration: none;
   }
`
