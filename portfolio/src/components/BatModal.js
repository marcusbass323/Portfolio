import React from 'react';

const BatModal = ({ handleClose, Batshow, children }) => {
    const showHideClassName = Batshow ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
            <section className="bat-main">
            {children}
            <div className="form">
            <h4>Form</h4>
            <button onClick={handleClose}>close</button>

          </div>
        </section>
      </div>
    );
};
  
export default BatModal;