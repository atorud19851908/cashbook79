import React  from 'react';
import App from './App';

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
          <App/>
    </div>
  );
});