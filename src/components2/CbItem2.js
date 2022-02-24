import React from 'react';
import styled from 'styled-components';
import { useCbSetMode } from '../CbContext2';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { lighten } from 'polished';

const handleTypeColor = (type) => {
  switch (type) {
    case 'Chiqim':
      return '#f70f0f';
    case 'Kirim':
      return '#0818A1';
    default:
      return '#000000';
  }
};

const TypeTag = styled.div`
  margin-right: 20px;
  padding: 8px;
  font-size: 14px;
  color: ${({ type }) => handleTypeColor(type)};

  @media (min-width: 700px) {
    margin-right: 20px;
    padding: 8px;
    font-size: 18px;
    color: ${({ type }) => handleTypeColor(type)};
    font-weight: 700;
    letter-spacing: 2px;
  }

  ,
  strong {
    font-family: 'Oswald', sans-serif;
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 18px;
  color: #333;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 2px;

  @media (min-width: 700px) {
    font-size: 28px;
    text-align: left;
    letter-spacing: 2px;
  }
`;

const Price = styled.div`
  margin-right: 10px;
  margin-left: 20px;
  font-size: 14px;
  color: #333;
  text-align: center;

  @media (min-width: 700px) {
    margin-right: 20px;
    margin-left: 20px;
    font-size: 24px;
    color: #333;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: red;
  font-size: 24px;
  cursor: pointer;

  opacity: 1;
  &:hover {
    color: ${lighten(0.4, '#000')};
  }

  transition: 0.125s all ease-in;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  color: #000;
  cursor: pointer;

  opacity: 1;
  &:hover {
    color: ${lighten(0.4, '#000')};
  }

  transition: 0.125s all ease-in;
`;

const CbItemBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #fff;
  height: 50px;

  &:hover {
    background-color: #0aefff;
    transition: 0.125s all ease-in;
  }
`;

function CbItem2({ id, type, text, price, time, date }) {
  const setMode = useCbSetMode();

  const onEdit = () =>
    setMode({
      modeName: 'edit',
      expense: {
        id,
        type,
        text,
        price,
        time,
        date,
      },
    });

  const onRemove = () =>
    setMode({
      modeName: 'remove',
      expense: {
        id,
      },
    });

  let sum = parseInt(price);
  return (
    <CbItemBlock id={id}>
      <TypeTag type={type}>
        {date}
        <br />
        <strong>{type}</strong>
      </TypeTag>

      <Text text={text} type={type}>
        {' '}
        {text ? text : '--'}{' '}
      </Text>
      <Price sum={sum}>
        <span>{sum ? sum.toLocaleString() : 0} So'm</span>
      </Price>
      <Edit onClick={onEdit}>
        <FaPen />
      </Edit>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </CbItemBlock>
  );
}

export default CbItem2;
