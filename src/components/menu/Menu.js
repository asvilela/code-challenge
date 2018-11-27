import React from 'react'

import { Link } from 'react-router-dom'

import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

import './Menu.css'

class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              PragmaBrewery
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {/* <NavItem eventKey={1} componentClass={Link} href='/journey' to='/journey'>
                <FontAwesomeIcon icon={faPlusCircle} size='lg' /> Journey
              </NavItem> */}
              <NavItem eventKey={2} componentClass={Link} href='/monitoring' to='/monitoring'>
                <FontAwesomeIcon icon={faTachometerAlt} size='lg' /> Monitoring
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu