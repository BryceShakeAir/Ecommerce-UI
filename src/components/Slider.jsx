import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`

const Arrow = styled.div`
    width : 50px;
    height : 50px;
    background-color: #fff7f7;
    border-radius : 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0; 
    left: ${props=> props.direction ==="Left" && "10px"};
    right: ${props=> (props.direction ==="Right" && "10px") };
    margin: auto;
    cursor: pointer;
    z-index:2;
`

const Wrapper = styled.div`
    
    display:flex;
    height : 100%;
    transition: all 1.5s ease;
    transform : translateX(${(props)=>props.slideIndex*-100}vw);
    
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    justiy-content:center;
    height : 100vh;
    width: 100vw;
    background-color: ${props=> "#"+props.bg};
`
const ImageContainer = styled.div`
    flex: 1;
    height : 100%;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding : 50px;
`

const Title = styled.h1`
    font-size: 70px;
    `
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: transparent;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = function(direction) {
    console.log(slideIndex);
    if(direction ==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    }else {
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0 );
    }
  };  
  return (
    <Container>
        <Arrow direction="Left" onClick={()=>(handleClick("left"))}>
            <ArrowLeftOutlined>

            </ArrowLeftOutlined>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} ></Image>
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>{item.button}</Button>
                        </InfoContainer>
                    </Slide>
                ))
            }
            
        </Wrapper>
        <Arrow direction="Right" onClick={()=>(handleClick("right"))}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider