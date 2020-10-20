import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';





const NotFound = () => {
 
  return (
    <div>
      <center>
        <FontAwesomeIcon color='#fff' size='6x' icon={faFrown} />
    
      <div style={{color:'#fff'}}>Sorry, the specified city was not found, try Nearest City</div></center>
    </div>
  );
};

export default NotFound;