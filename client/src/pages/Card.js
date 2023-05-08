import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import StarRatingComponent from "react-star-rating-component";
import { Link} from "react-router-dom";

function Cards({ name, price, photo, description, rate }) {
  

  
    
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img" variant="top" src={photo} />
        <Card.Body style={{display:"flex",flexDirection:"column"}}>
          <Card.Title>
            <h5>{name}</h5>
            <h6>{price} dt</h6>
            <StarRatingComponent name="rate1" starCount={5} value={rate} />
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to='/hotels/reserve'state={price } style={{marginTop:"auto"}}><Button  variant="primary" >reserve</Button></Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
