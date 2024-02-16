import React from 'react';
import CardTemplate from './CardTemplate';
import { Container } from 'react-bootstrap';
import mockData from '../mockData';

function Career() {
  return (
    <Container className='mt-5'>
      <div className='row mb-5'>
        {mockData.slice(3).map((detail, index) => (
          // Card Component
          <CardTemplate key={index} details={detail} />
        ))}
      </div>
    </Container>
  );
}

export default Career;
