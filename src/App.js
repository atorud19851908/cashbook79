import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import UsdDollor from './UsdDollor';
import UzbSum from './UzbSum';
import './App.css'
import NotFound from './NotFound';


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
    display: inline-block;
    padding-left:15px;
   }

   li a {
         color:#fff;
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
      </ul>
    </LinkBlock>
        <Routes>
          <Route path='/' element={<UzbSum />} />
          <Route path='/dollor' element={<UsdDollor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
</>
  );
}
export default App;
