import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
      opacity: 1;
    }
`

const Circle = styled.div`
  height: 300px;
  width: 300px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`
const Image = styled.img`
  z-index: 2;
  height: 75%;
  margin: 20px;
  width: 250px;
  background-color: transparent;
`
const Icon = styled.div`

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartOutlined></ShoppingCartOutlined> 
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product