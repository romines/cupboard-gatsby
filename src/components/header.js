import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/jackson_cupboard.png'

const Container = styled.div`
  height: 14vh;
  background: #404E4D;
  display: flex;
  align-items: center;
  color: white;
  a {
    display: inline-block;
    height: 70%;
  }

  img {
    height: 100%;
  }
`
const MenuItem = styled.li`
  color: blue;
`

const Header = ({ activePage, menuItems }) => (
  <>
  <Container>
    <Link to="/">
      <img src={logo} />
    </Link>
  </Container>
  <ul>
    { menuItems.map(item => <MenuItem key={item.wordpress_id}>{ item.title }</MenuItem>)}
  </ul>
  </>
)

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object)
}

export default Header
