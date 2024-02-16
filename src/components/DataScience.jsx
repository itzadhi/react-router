import React from 'react';
import CardTemplate from './CardTemplate';
import { Container } from 'react-bootstrap';
import mockData from '../mockData';

function DataScience() {
  return (
    <Container className='mt-5'>
      <div className='row mb-5'>
        {mockData.slice(1).map((detail, index) => (
          <CardTemplate key={index} details={detail} />
        ))}
      </div>
    </Container>
  );
}

export default DataScience;
