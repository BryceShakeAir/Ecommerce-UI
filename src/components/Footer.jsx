import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;   
    display: flex;
    flex-direction: column;
    padding: 20px; 
`
const Logo = styled.h1`    
`

const Desc = styled.p` 
    margin: 20px 0px;
`

const Center = styled.div`
    flex: 1;   
    padding: 20px; 
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;    
`
const SocialIcon = styled.div`  
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-botton: 10px;
`

const Right = styled.div`
    flex: 1;    
    padding: 20px;
`
const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container> 
        <Left>
            <Logo>LAMA</Logo>
            <Desc>An exploration of clothing archetypes, this pajama-style shirt is crafted from viscose. 
                The short sleeve style boasts a diagonal logo print and pair perfectly 
                with matching pants from the Moncler Genius collection.</Desc>
                <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            
            <Title>
                Useful Links
            </Title>
            <List> 
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
        
    </Container>
  )
}

export default Footer