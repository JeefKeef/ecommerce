import * as React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Container = styled.div`
  height: 60px;
  background-color: black;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
`

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`

const SearchContainer = styled.div`
  align-items: center;
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 1rem;
  padding: 0.3em;
`

const Input = styled.input`
  background: none;
  border: none;
`

const Logo = styled.h1`
  font-weight: bold;
`
const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 2rem;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecommerce</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
