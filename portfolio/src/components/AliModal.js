import React from 'react';

const AliModal = ({ handleClose, Alishow, children }) => {
    const showHideClassName = Alishow ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
            <section className="ali-main">
            {children}
            <div className="form">
            <h4>Form</h4>
            <button onClick={handleClose}>close</button>

          </div>
                
                
        </section>
      </div>
    );
};
  
export default AliModal;