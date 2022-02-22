import React from 'react';
import styled from 'styled-components';
import { useCbState } from '../CbContext1';
import logo from './dollor.png'

const CbHeadBlock = styled.div`
background-color:#278664;
border-radius:15px;
box-shadow: rgb(0 0 0 / 85%) 0px 14px 28px, rgb(0 0 0 / 41%) 0px 10px 10px;
color: #fff;
padding:6px;


h4 {
    display: flex;
    justify-content:center;
    font-size: 16px;
    text-align:center;
    margin-top:0;
    margin-bottom:0;
    padding-top: 0px;
    text-width:bold;
    align-items: center;
}

strong {
    color: red;
    padding-left:5px;
}

}

img {
    width:22px;
    height:22px; 
}

@media(min-width: 700px){
    display: flex;
    justify-content: space-between;
     align-items: center;
    align-content:center;
   background-color:#278664;
   border-radius:15px;
   box-shadow: rgb(0 0 0 / 85%) 0px 14px 28px, rgb(0 0 0 / 41%) 0px 10px 10px;
   color: #fff;
   padding:10px;
   letter-spacing: 2px;
  
   
    h4 {
        display: flex;
        font-size: 25px;
        text-align:center;
        margin:0 20px;
        padding-top: 4px;
        padding-bottom:10px;
       
    }

    img {
        width:30px;
        height:30px; 
    }


}
`;

function CbHead1() {
    const cashbook = useCbState();

       const income = cashbook
       .filter(expense => expense.type !== 'Chiqim')
        .map(expense => expense.price)
        .reduce((acc, curr) => acc + parseInt(curr, 10), 0) 
        
       

        const expense =  cashbook
        .filter(expense => expense.type === 'Chiqim')
        .map( expense => expense.price)
        .reduce((ac, cur) => ac + parseInt(cur, 10), 0) 

       
            return (
                <CbHeadBlock>
                   
                    <h4>Kirim:
                    <img src={logo} alt = "logo" />
                    <strong>
                       {income.toLocaleString()} 
                     </strong>
                    </h4>
                    <h4>Chiqim:
                    <img src={logo} alt = "logo" />
                    <strong>
                       {expense.toLocaleString()} 
                     </strong>
                    </h4>
                  
                </CbHeadBlock>
            );
            }
    
        
    

    

export default CbHead1;