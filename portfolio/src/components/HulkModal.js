import React from 'react';
import './modal.css'

const HulkModal = ({ handleClose, Hulkshow, children }) => {
    const showHideClassName = Hulkshow ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
            <section className="hulk-main">
          {children}
          <div className="form">
            <h4>Form</h4>
            <button onClick={handleClose}>close</button>

          </div>


          
                
                

        </section>
      </div>
    );
};
  
export default HulkModal;