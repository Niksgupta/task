import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import bb from "./assest/bb.jpg";
import b from "./assest/b.jpg";
import bbb from "./assest/bbb.jpg";
import bbbb from "./assest/bbbb.jpg";
import bbbbb from "./assest/bbbbb.jpg";



function Second (){
    return (
        <div className="head">
<div className="new">
<h4 className="two"><b>Games Services</b></h4>
    <br></br>
<CardDeck className="card-deck">
  <Card>
    <Card.Img variant="top" src={bb} />
    <Card.Body>
      <Card.Title>SUDOKU</Card.Title>
      <Card.Text>
      Sudoku is one of the most popular puzzle games of all time.
       As a logic puzzle, Sudoku is also an excellent brain game.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={b}/>
    <Card.Body>
      <Card.Title>MAHJONG SOLITAIRE</Card.Title>
      <Card.Text>
      The Mahjong game has two different versions: the traditional Asian version, which is a game for 4 players.
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src={bbb} />
    <Card.Body>
      <Card.Title>CANDY CRUSH</Card.Title>
      <Card.Text>
      In the game, players complete levels by swapping colored pieces of candy on a
       game board to make a match of three or more of the same color.
      </Card.Text>
    </Card.Body>

  </Card>

  <Card>
    <Card.Img variant="top" src={bbbb} />
    <Card.Body>
      <Card.Title>CRICKET</Card.Title>
      <Card.Text>
      Cricket is a sport which is played between two teams of eleven players each who score runs (points).
      </Card.Text>
    </Card.Body>
 
  </Card>

  <Card>
    <Card.Img variant="top" src={bbbbb} />
    <Card.Body>
      <Card.Title>BUBBLE SHOOTING</Card.Title>
      <Card.Text>
      The video game Bubble Shooter probably got this famous as it is very intuitive and easy to learn
      </Card.Text>
    </Card.Body>
 
  </Card>
</CardDeck>
</div>
</div>
    );
}

export default Second;




