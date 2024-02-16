import React from 'react';
import { Card } from 'react-bootstrap';

function CardTemplate({ details }) {
  const { title, image, desp, time, comments } = details;
  return (
    <div className='col-md-4 col-12 mb-3 d-flex align-items-stretch justify-content-center'>
      <Card className='shadow' style={{ width: '23rem' }}>
        <Card.Img variant='top' src={image} className='card-image' />
        <Card.Body className='card-body'>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='card-desp text-muted'>{desp}</Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between card-footer'>
          <small className='text-muted text-wrap'>{time}</small>
          <small className='text-muted text-wrap'>{comments}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardTemplate;
