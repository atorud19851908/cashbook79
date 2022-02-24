import React from 'react';
import styled from 'styled-components';
import { useCbSetType } from '../CbContext';

const CbTypeBlock = styled.div`
  top: 100px;
  right: 204px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #aeb5bd;
  margin-bottom: 12px;

  text-align: right;

  span {
    margin: 0;
    font-size: 20px;
    color: #343a40;
  }

  select {
    padding: 5px;
    &:focus {
      outline: none;
    }
  }

  @media (min-width: 700px) {
    select {
      font-size: 20px;
    }
  }
`;

function CbType() {
  const setType = useCbSetType();
  const onSort = (e) => setType(e.target.value);
  return (
    <CbTypeBlock>
      <span>Tanlang: </span>
      <select onChange={onSort}>
        <option value="all">Hammasi</option>
        <option value="Kirim">Kirim</option>
        <option value="Chiqim">Chiqim</option>
      </select>
    </CbTypeBlock>
  );
}

export default CbType;
