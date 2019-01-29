import React from 'react';

const BallmerModal = ({ handleClose, Ballmershow, children }) => {
    const showHideClassName = Ballmershow ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
            <section className="modal-main">
            {children}
            <h1>Ballmer</h1>
                
                
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
};
  
export default BallmerModal;