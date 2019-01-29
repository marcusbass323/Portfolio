import React from 'react';

const BatModal = ({ handleClose, Batshow, children }) => {
    const showHideClassName = Batshow ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
            <section className="modal-main">
            {children}
          <h1>The Bat</h1>
                
                
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
};
  
export default BatModal;