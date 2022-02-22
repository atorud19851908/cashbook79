import React from 'react';
import styled from 'styled-components';
import { useCbState} from '../CbContext';



const CbHeadBlock = styled.div`
background-color:#0077b6;
border-radius:15px;
box-shadow: rgb(0 0 0 / 85%) 0px 14px 28px, rgb(0 0 0 / 41%) 0px 10px 10px;
color: #fff;
padding:6px;

    h4 {
        font-size: 16px;
        text-align:center;
        margin-top:0;
        margin-bottom:0;
        padding-top: 4px;
        letter-spacing: 2px;
    }

    strong {
        color: red;
    }

    @media(min-width: 700px){
       
        display: flex;
        justify-content: space-between;
        align-items: center;
       background-color:#0077b6;
        border-radius:15px;
        box-shadow: rgb(0 0 0 / 85%) 0px 14px 28px, rgb(0 0 0 / 41%) 0px 10px 10px;
       color: #fff;
       padding:10px;
       letter-spacing: 2px;
       
        h4 {
            font-size: 28px;
            text-align:center;
            margin:0 20px;
            padding-top: 4px;
            padding-bottom:10px;
            
        }

    }
`;

function CbHead() {
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
        <>
        <CbHeadBlock>
            <h4>Kirim: <strong>{income.toLocaleString()} so'm</strong></h4>
            <h4>Chiqim: <strong>{expense.toLocaleString()} so'm</strong></h4>
        </CbHeadBlock>
         
        </>
    )

    }



export default CbHead;