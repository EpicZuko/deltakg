import React from 'react'
import styled from 'styled-components'
import korzinaicons from '../../assets/img/cart.png'
import likeicons from '../../assets/img/like-heart.png'
import searchicons from '../../assets/img/search (1).png'

const Header = () => {
   return (
      <HeaderContainer>
         <UlStyled>
            <li>
               <H1Styled>ДЕЛЬТА</H1Styled>
            </li>
            <ContactListItem>контакты</ContactListItem>
            <li>
               <InputStyled />
               <SearchImgStyled src={searchicons} alt="" />
            </li>
            <li>
               <img src={likeicons} alt="" />
            </li>
            <li>
               <img src={korzinaicons} alt="" />
            </li>
            <li>
               <img src="" alt="" />
               <select id="flag">
                  <option value="kg">KG</option>
                  <option value="ru">RU</option>
               </select>
            </li>
         </UlStyled>
      </HeaderContainer>
   )
}

export default Header

const HeaderContainer = styled.header`
   top: 0px;
`

const UlStyled = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   list-style: none;
   background: rgba(255, 255, 255, 1);
   gap: 0px;
   box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.12);
   padding: 20px;
   margin: 0;
`

const H1Styled = styled.h1`
   font-size: 16px;
   font-weight: 600;
   font-family: 'Roboto Serif', serif;
   font-optical-sizing: auto;
   font-style: normal;
`

const ContactListItem = styled.li`
   font-size: 14px;
   font-weight: 400;
   line-height: 16.41px;
   text-align: left;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const InputStyled = styled.input`
   width: 624px;
   height: 46px;
   gap: 0px;
   border: 2px solid;
   outline: none;
   opacity: 0px;
   background: linear-gradient(211.73deg, #e8e8e8 -46.71%, #e8e8e8 121.33%);
   border: none;
   border-radius: 10px;
   padding: 4px;
   font-family: Roboto;
   font-size: 14px;
   font-weight: 400;
   line-height: 16.41px;
   text-align: left;
`

const SearchImgStyled = styled.img`
   position: relative;
   right: 40px;
   top: 10px;
   cursor: pointer;
`
