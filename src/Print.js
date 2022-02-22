import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import  {ComponentToPrint}  from './ComponentToPrint';
import {GrDocumentPdf} from 'react-icons/gr'
import './App.css'


const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button className='btn' onClick={handlePrint}><GrDocumentPdf/> </button>
    </div>
  );
};

export default Print;