import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import UsdDollor from './UsdDollor';
import UzbSum from './UzbSum';
import Plastik from './Plastik'
import NotFound from './NotFound'
import './App.css'



function App() {
 

  const LinkBlock = styled.div`
    padding: 0;
    margin-left: -50px;
    
   ul {
   display: inline-block;
   font-size: 25px;
   }

   li  {
    list-style: none;
    display:block;
    padding-left:15px;
   }

   li a {
         color:#333;
         font-wieght: bold;
         letter-spacing: 2px;
         font-family: Nunito,sans-serif;
         transition: 0.5s all ease-in;

        
         &:focus {
          color:red;
         }
        
      }

      @media(max-width:700px){
        ul {
          display: inline-block;
          font-size: 18px;
          }

          li  {
            list-style: none;
            display:inline-block;
           
           } 
      }   
`;
  

  return (
    <>
    <LinkBlock>
    <ul >
        <li><Link to="/">
          UZS
        </Link>
        </li> 
        <li>
          <Link to="/dollor">
          USD
          </Link>
          </li>
          <li>
          <Link to="/plastik">
          PLASTIK
          </Link>
          </li>
      </ul>
    </LinkBlock>
        <Routes>
          <Route path='/' element={<UzbSum />} />
          <Route path='/dollor' element={<UsdDollor />} />
          <Route path='/plastik' element={<Plastik/>} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      
</>
  );
}
export default App;
