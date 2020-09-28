import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {

  // Instead of being a direct child of the parent component , its renders into the div of modal
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        Dfasdfdsafasfbkasdjfjadshflskf
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
