import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import nnn from "./assest/nnn.jpg";
import n from "./assest/n.jpg";
import nn from "./assest/nn.jpg";
import nnnnn from "./assest/nnnnn.jpg";



function Third(){
    return(
        
<div className="head">
<div className="new">
<h4 className="two"><b>Rental Services</b></h4><br />
    
<CardDeck className="card-deck">
  <Card>
    <Card.Img variant="top" src={nnn} />
    <Card.Body>
      <Card.Title>CAR SERVICING</Card.Title>
      <Card.Text>
      Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
        
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={n} />
    <Card.Body>
      <Card.Title>AIR CONDIONERS</Card.Title>
      <Card.Text>
      Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={nn} />
    <Card.Body>
      <Card.Title>REFRIGERATORS</Card.Title>
      <Card.Text>
      Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
      </Card.Text>
    </Card.Body>

  </Card>

  <Card>
    <Card.Img variant="top" src={nnnnn} />
    <Card.Body>
      <Card.Title>BIKES</Card.Title>
      <Card.Text>
      Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
      </Card.Text>
    </Card.Body>

  </Card>


</CardDeck>
</div>
</div>
    )
};

export default Third;
