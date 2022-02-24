import React from 'react';
import styled from 'styled-components';
import { useCbState, useCbType } from '../CbContext';
import CbItem from './CbItem';

const CbListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 48px;

  h1 {
    color: #333333;
    text-align: center;
    font-size: 30px;
    letter-spacing: 0.3px;
    font-family: Nunito, sans-serif;
    font-wieght: bold;
  }
`;

function CbList() {
  const cashbook = useCbState();
  const type = useCbType();

  if (cashbook.length === 0) {
    return (
      <CbListBlock>
        <h1>Not Found!</h1>
      </CbListBlock>
    );
  } else if (type === 'all' || type === '') {
    return (
      <CbListBlock>
        {cashbook.map((expense) => (
          <CbItem
            key={expense.id}
            id={expense.id}
            type={expense.type}
            text={expense.text}
            price={expense.price}
            time={expense.time}
            date={expense.date}
          />
        ))}
      </CbListBlock>
    );
  } else {
    return (
      <CbListBlock>
        {cashbook
          .filter((expense) => expense.type === type)
          .map((expense) => (
            <CbItem
              key={expense.id}
              id={expense.id}
              type={expense.type}
              text={expense.text}
              price={expense.price}
              time={expense.time}
              date={expense.date}
            />
          ))}
      </CbListBlock>
    );
  }
}

export default CbList;
