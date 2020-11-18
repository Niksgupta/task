import React from "react";

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import home1 from "./assest/home1.jpg";
import home2 from "./assest/home2.jpg";
import home3 from "./assest/home3.jpg";
import home4 from "./assest/home4.jpg";
import home5 from "./assest/home5.jpg";

import down1 from "./assest/down1.jpg";
import down2 from "./assest/down2.jpg";
import down3 from "./assest/down3.jpg";
import down4 from "./assest/down4.jpg";
import down5 from "./assest/down5.jpg";



function First (){
    return (
        <div className="head">
  <div className="new"><h1>Services</h1>
    <h4 className="two"><b>Home Services</b></h4><br />
  
  
<CardDeck className="card-deck">
  <Card>
    <Card.Img variant="top" src={home1} />
    <Card.Body>
      <Card.Title>SOLAR DEALERS</Card.Title>
       
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        <Button variant="primary"><b>Get Details</b></Button>

<IconButton aria-label="share">
  <ShareIcon />
</IconButton>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={home2} />
    <Card.Body>
      <Card.Title>DESIGNING INTERIORS</Card.Title>
       
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={home3} />
    <Card.Body>
      <Card.Title>CARPENTERS</Card.Title>
       
        
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
   
  </Card>

  <Card>
    <Card.Img variant="top" src={home4} />
    <Card.Body>
      <Card.Title>PLUMBER CONTRACTS</Card.Title>
       
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
   
  </Card>

  <Card>
    <Card.Img variant="top" src={home5} />
    <Card.Body>
      <Card.Title>WALL PAINTINGS</Card.Title>
       
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
    
  </Card>
</CardDeck>

<h4 className="two"><b>Business Services</b></h4>
    <br></br>
<CardDeck className="card-deck">
  <Card>
    <Card.Img variant="top" src={down1} />
    <Card.Body>
      <Card.Title>NETWORK MARKET</Card.Title>
       
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
 
  </Card>
  <Card>
    <Card.Img variant="top" src={down2}/>
    <Card.Body>
      <Card.Title>SOCIAL MEDIA</Card.Title>
       
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={down3} />
    <Card.Body>
      <Card.Title>AI/ML SERVICES</Card.Title>
      
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
    
  </Card>

  <Card>
    <Card.Img variant="top" src={down4} />
    <Card.Body>
      <Card.Title>DELIVERY SERVICES</Card.Title>
      
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
   
  </Card>

  <Card>
    <Card.Img variant="top" src={down5} />
    <Card.Body>
      <Card.Title>TRADING MARKET</Card.Title>
       
        <Card.Text>
        Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        </Card.Text>
        
        <Button variant="primary"><b>Get Details</b></Button>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    </Card.Body>
  
  </Card>
</CardDeck>
</div>
</div>


    );
}

export default First;