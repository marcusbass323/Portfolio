import React from 'react';

const AliModal = ({ handleClose, Alishow, children }) => {
    const showHideClassName = Alishow ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
            <section className="modal-main">
            {children}
          <h1>Ali</h1>
                
                
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
};
  
export default AliModal;