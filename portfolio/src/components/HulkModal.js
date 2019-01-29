import React from 'react';

const HulkModal = ({ handleClose, Hulkshow, children }) => {
    const showHideClassName = Hulkshow ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
            <section className="modal-main">
            {children}
          <h1>Hulk</h1>
                
                
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
};
  
export default HulkModal;