import React from 'react';
import CardTemplate from './CardTemplate';
import { Container } from 'react-bootstrap';
import mockData from '../mockData';

function CyberSecurity() {
  return (
    <Container className='mt-5'>
      <div className='row mb-5'>
        {mockData.slice(2).map((detail, index) => (
          <CardTemplate key={index} details={detail} />
        ))}
      </div>
    </Container>
  );
}

export default CyberSecurity;
