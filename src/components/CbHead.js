import React from 'react';
import styled from 'styled-components';
import { useCbState } from '../CbContext';

const CbHeadBlock = styled.div`
  background-color: #73c6f3;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 85%) 0px 14px 28px, rgb(0 0 0 / 41%) 0px 10px 10px;
  color: #333;
  padding: 6px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  h3 {
    text-align: center;
    margin: 0;
  }

  h4 {
    font-size: 16px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0px;
    text-width: bold;
    align-items: center;
  }

  strong {
    color: blue;
    padding-left: 5px;
  }

  .minus {
    color: red;
  }

  @media (min-width: 700px) {
    background-color: #73c6f3;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 85%) 0px 14px 28px, rgb(0 0 0 / 41%) 0px 10px 10px;
    color: #333;
    padding: 10px;
    letter-spacing: 2px;

    h3 {
      font-size: 26px;
      text-align: center;
      margin: 0;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    }

    h4 {
      font-size: 28px;
      text-align: center;
      margin: 0 20px;
      padding-top: 4px;
      padding-bottom: 10px;
    }
  }
`;

function CbHead() {
  const cashbook = useCbState();

  const income = cashbook
    .filter((expense) => expense.type !== 'Chiqim')
    .map((expense) => expense.price)
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  const expense = cashbook
    .filter((expense) => expense.type === 'Chiqim')
    .map((expense) => expense.price)
    .reduce((ac, cur) => ac + parseInt(cur, 10), 0);

  const result = cashbook.filter((expense) => expense.type === 'Chiqim')
    ? income - expense
    : '';

  return (
    <>
      <CbHeadBlock>
        <div>
          <h4>
            Kirim: <strong>{income.toLocaleString()} so'm</strong>
          </h4>
          <h4>
            Chiqim:{' '}
            <strong className="minus">{expense.toLocaleString()} so'm</strong>
          </h4>
        </div>
        <h3>
          Balansingiz:
          <strong>
            {result.toLocaleString()}
            so'm
          </strong>
        </h3>
      </CbHeadBlock>
    </>
  );
}

export default CbHead;
