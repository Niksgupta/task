import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';



function Third(){
    return(
        
<div className="head">
<div className="new">
<h4 className="two"><b>Rental Services</b></h4><br />
    
<CardDeck className="card-deck">
  <Card>
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/64fe8829/Preview/nnn.jpg?v=08866099-98df-4385-9e82-3ae282581161" />
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
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/93653bbc/Preview/n.jpg?v=5f3e0c52-ae1c-43cd-adc9-cb507fc49b3c" />
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
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/d7c6332c/Preview/nn.jpg?v=cfcd67f8-c204-4ef8-8bbd-7750d40410cb" />
    <Card.Body>
      <Card.Title>REFRIGERETERS</Card.Title>
      <Card.Text>
      Solar Service is availabe
                Best Customer Support
            Easy pick up and drop
                Best maintaining of cars.
      </Card.Text>
    </Card.Body>

  </Card>

  <Card>
    <Card.Img variant="top" src="https://www.resizepixel.com/Image/9fd5ecbe/Preview/nnnnn.jpg?v=c38e5778-9d80-496e-9d76-6be7e7275aa9" />
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
