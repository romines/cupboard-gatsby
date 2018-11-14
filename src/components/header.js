import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/jackson_cupboard.png'
import '../../node_modules/hamburgers/dist/hamburgers.css'

const atLeast = {
  desktop: '(min-width: 772px)'
}

const Container = styled.div`
  height: 14vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${atLeast.desktop} {
    justify-content: flex-start;
  }

  background: #404E4D;
  color: white;

  a {
    display: inline-block;
    height: 70%;
    img {
      height: 100%;
    }
  }
  .hamburger {
    height: auto;
    margin-right: .6em;

    .hamburger-box {
      transform: translateY(5px);
    }
    .hamburger-inner {
      &, &:before, &:after {
        background-color: white;
      }
    }
    @media ${atLeast.desktop} {
      display: none;
    }
    &, &:hover, &:focus, &:active {
      background: none !important;
    }

  }
`
const Menu = styled.ul`
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 0;
  display: none;
  list-style: none;

  &.is-active {
    display: block;
    position: fixed;
    top: 14vh;
    li {
      margin: 0;
      padding: 1em;
      background-color: rgba(0, 0, 0, 0.86);
    }
  }

  @media ${atLeast.desktop} {
    display: inline-flex;
    li {
      display: inline-flex;
      align-items: center;
    }
  }
`

const MenuItem = styled.li`
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  render() {
    const { activePage, menuItems } = this.props

    return (
      <Container>
        <Link to="/">
          <img src={logo} />
        </Link>
        <Menu className={`${this.state.menuActive ? 'is-active' : ''} `}>
          { menuItems.map(item => <MenuItem key={item.wordpress_id}>{ item.title }</MenuItem>)}
        </Menu>
        <button
          className={`hamburger hamburger--collapse${this.state.menuActive ? ' is-active' : ''} `}
          type="button"
          onClick={this.toggleMenu}>

          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Container>
    )

  }
}

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object)
}

export default Header
