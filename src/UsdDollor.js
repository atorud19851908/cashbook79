import React from 'react'
import { CbProvider1 } from './CbContext1';
import CbTemplete1 from './components1/CbTemplete1';
import CbHead1 from './components1/CbHead1';
import CbType1 from './components1/CbType1';
import CbList1 from './components1/CbList1';
import CbCreateButton1 from './components1/CbCreateButton1';
import CbDialog1 from './components1/CbDialog1';
import { createGlobalStyle } from 'styled-components';


function UsdDollor() {

   const GlobalStyle = createGlobalStyle`
   body {
     width:100%;
     height:100%;
     background: #c0d5e0;
     font-family: 'Oswald', sans-serif;
     font-weight: 900;
     margin-top:0;
   }
 `;

  return (
    <>
       <CbProvider1>
    <GlobalStyle />
      <CbTemplete1>
        <CbHead1 />
        <CbType1 />
        <CbList1 />
        <CbCreateButton1 />
      </CbTemplete1>      
      <CbDialog1 />
    </CbProvider1>
    </>
  )
}

export default UsdDollor;