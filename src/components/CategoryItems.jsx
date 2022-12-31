import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  position: relative;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 3px;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  color: white;
  font-size: 300;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`

const CategoryItems = (prop) => {
  return (
    <Container>
        <Image src={prop.item.img}></Image>
        <Info>
          <Title>
            {prop.item.title}
          </Title>
          <Button>
            Shop Now
          </Button>
        </Info>
    </Container>
  )
}

export default CategoryItems