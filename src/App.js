import React from 'react';
// import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Container } from 'react-bootstrap';
// import CardColumns from 'react-bootstrap/CardColumns';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';

import Footer from "./components/Footer";
import Third from "./components/Third";
import Second from "./components/Second";
import First from "./components/First";
import Headnav from "./components/Headnav";



function App() {
  return (
    <div className="App">
      <Headnav />

{/* FIRST DIV  */}

<First />

{/* SECOND DIV */}

<Second />

{/* THIRD DIV */}

<Third />


{/* FOOTER PART  */}

<Footer />



</div>


  
  );
}

export default App;
