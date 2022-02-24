import React from 'react'
import { CbProvider2 } from './CbContext2';
import CbTemplete2 from './components2/CbTemplete2';
import CbHead2 from './components2/CbHead2';
import CbType2 from './components2/CbType2';
import CbList2 from './components2/CbList2';
import CbCreateButton2 from './components2/CbCreateButton2';
import CbDialog2 from './components2/CbDialog2';
import { createGlobalStyle } from 'styled-components';


function Plastik() {

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
       <CbProvider2>
    <GlobalStyle />
      <CbTemplete2>
        <CbHead2 />
        <CbType2 />
        <CbList2 />
        <CbCreateButton2 />
      </CbTemplete2>      
      <CbDialog2 />
    </CbProvider2>
    </>
  )
}

export default Plastik;