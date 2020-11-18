import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function Second (){
    return (
        <div className="head">
<div className="new">
<h4 className="two"><b>Games Services</b></h4>
    <br></br>
<CardDeck className="card-deck">
  <Card>
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/feabc90e/Preview/bb.jpg?v=d5316b3f-ce11-4538-98f7-4f077eabb545" />
    <Card.Body>
      <Card.Title>SUDOKU</Card.Title>
      <Card.Text>
      Sudoku is one of the most popular puzzle games of all time.
       As a logic puzzle, Sudoku is also an excellent brain game.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/6791af59/Preview/b.jpg?v=58ffee5f-6239-4e8d-8c09-bed4bc86ceb4" />
    <Card.Body>
      <Card.Title>MAHJONG SOLITAIRE</Card.Title>
      <Card.Text>
      The Mahjong game has two different versions: the traditional Asian version, which is a game for 4 players.
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/8e91d8c5/Preview/bbb.jpg?v=ad76e2dd-632f-45ca-80c1-14c7aa6dae16" />
    <Card.Body>
      <Card.Title>CANDY CRUSH</Card.Title>
      <Card.Text>
      In the game, players complete levels by swapping colored pieces of candy on a
       game board to make a match of three or more of the same color.
      </Card.Text>
    </Card.Body>

  </Card>

  <Card>
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/c5f7ae36/Preview/bbbb.jpg?v=032a3fd9-2a15-4d02-85d4-10bc80ebebbf" />
    <Card.Body>
      <Card.Title>CRICKET</Card.Title>
      <Card.Text>
      Cricket is a sport which is played between two teams of eleven players each who score runs (points).
      </Card.Text>
    </Card.Body>
 
  </Card>

  <Card>
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/776b7864/Preview/bbbbb.jpg?v=9512f5ea-651b-4a95-b9f0-9e272ce94211" />
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




