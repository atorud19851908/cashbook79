import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { lighten, darken } from 'polished';
import { useCbSetMode, useCbNextId } from '../CbContext2';

const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;
  margin-bottom: 51px;
  border: none;
  border-radius: 50%;
  outline: none;

  position: absolute;
  right: -20px;
  bottom: 0;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  cursor: pointer;

  background: #0c8499;
  &:hover {
    background: ${lighten(0.1, '#0C8499')};
  }
  &:active {
    background: ${darken(0.1, '#0c8499')};
  }

  transition: 0.125s all ease-in;

  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
`;

function CbCreateButton2() {
  const setMode = useCbSetMode();
  const uuid = useCbNextId();
  const d = new Date();
  const date = d.toLocaleDateString();
  const time = d.toLocaleTimeString();

  const onCreate = () =>
    setMode({
      modeName: 'create',
      expense: {
        id: uuid,
        type: '',
        text: '',
        price: '',
        time: time,
        date: date,
      },
    });

  return (
    <CircleButton onClick={onCreate}>
      <MdAdd />
    </CircleButton>
  );
}

export default CbCreateButton2;
