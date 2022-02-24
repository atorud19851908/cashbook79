import React from 'react'
import { CbProvider } from './CbContext';
import CbTemplete from './components/CbTemplete';
import CbHead from './components/CbHead';
import CbList from './components/CbList';
import CbCreateButton from './components/CbCreateButton';
import CbDialog from './components/CbDialog';
import { createGlobalStyle } from 'styled-components';
import CbType from './components/CbType';

function UzbSum() {
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
 <CbProvider>
      <GlobalStyle />
      <CbTemplete>
      <CbHead />
      <CbType />
        <CbList />
        <CbCreateButton />
      </CbTemplete>      
      <CbDialog />
    </CbProvider> 
    </>
  )
}

export default UzbSum;