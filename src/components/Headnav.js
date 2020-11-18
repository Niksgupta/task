import React from "react";

import Badge from '@material-ui/core/Badge';
import Nav from 'react-bootstrap/Nav';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Navbar from 'react-bootstrap/Navbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';


function Headnav (){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><b>SuperNebr</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"><b>Community 1</b></Nav.Link>
      <Nav.Link href="#pricing"><b>Register as a seller</b></Nav.Link>
      <Nav.Link href="#features"><b>Shop</b></Nav.Link>

      <Nav.Link href="#features"><b>Chit-Chat</b></Nav.Link>
      <Nav.Link href="#features"><b>Create Activity</b></Nav.Link>

    
    </Nav>
    
    <Nav>

        <IconButton aria-label="show 11 new notifications" color="primary">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
    </Nav>
    <Nav>

        <IconButton aria-label="show 11 new notifications" color="primary">
          <Badge badgeContent={11} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
    </Nav>
    <Nav>

        <IconButton aria-label="show 11 new notifications" color="primary">
          <Badge badgeContent={11} color="secondary">
            <SearchIcon />
          </Badge>
        </IconButton>
    </Nav>
    <Nav>

        <IconButton aria-label="show 11 new notifications" color="primary">
          <Badge badgeContent={11} color="secondary">
            <SportsEsportsIcon />
          </Badge>
        </IconButton>
    </Nav>

    <Nav>
      <Nav.Link href="#deets">Login or Register</Nav.Link>
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    );
}

export default Headnav;