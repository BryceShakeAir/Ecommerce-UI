import { Search, ShoppingCartOutlined  } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px",padding: "0px 0px 5px 0px"})};
`
const Wrapper = styled.div`
  margin : 10px 20px;
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : space-between;
  ${mobile({padding: "0px 0px 0px 0px"})};
`
const Left = styled.div`
  flex : 1;
  display : flex;
  align-items: center;
`
const Language = styled.div`
  font-size : 14px;
  cursor : pointer;
  ${mobile({display: "none"})};
`
const SearchContainer = styled.div`
  border : 0.5px solid lightgrey;
  display : flex;
  align-items : center;
  margin-left : 25px;
  padding : 5px
`
const Input = styled.input`
  border : none;
  placeholder : ${(props)=>props.placeholder};
  ${mobile({width: "50px"})};
  `

const Center = styled.div`
  flex : 1;
  text-align : center;
`
const Logo = styled.h1`
  font-weight : bold;
  ${mobile({fontSize: "24px"})};
`
const Right = styled.div`
  flex : 1;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center", flex:2})};
`

const MenuItem = styled.div`
  font-size : 14px;
  cursor : pointer;
  margin-left: 20px;
  ${mobile({fontSize:"12px", marginLeft:"10px"})};
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search style={{"color":"grey", "fontSize":"14px"}} ></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Lama.
          </Logo>
        </Center>
        <Right>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined></ShoppingCartOutlined>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar