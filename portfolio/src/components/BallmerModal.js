import React from 'react';

const BallmerModal = ({ handleClose, Ballmershow, children }) => {
    const showHideClassName = Ballmershow ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
            <section className="ballmer-main">
            {children}
            <div className="form">
            <h4>Form</h4>
            <button onClick={handleClose}>close</button>

          </div>
        </section>
      </div>
    );
};
  
export default BallmerModal;