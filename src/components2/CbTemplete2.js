import React from 'react';
import styled from 'styled-components';

const CbTempleteBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 90vh;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 32px;
  border-radius: 16px;
  position: relative;
  background: #caf0f8;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  @media (min-width: 700px) {
    position: absolute;
    top: 20px;
    left: 205px;
    width: 70%;
    height: 100vh;
    padding: 10px;
    margin-bottom: 32px;
    border-radius: 16px;
    background: #caf0f8;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
    box-sizing: border-box;
  }
`;

function CbTemplete({ children }) {
  return <CbTempleteBlock>{children}</CbTempleteBlock>;
}

export default CbTemplete;
