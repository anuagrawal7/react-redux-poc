import React from "react";
import ReactDOM from "react-dom";
import './modal.scss';

export const Modal = ({ isOpen, header, closeModal, children }) => {
  return ReactDOM.createPortal(<div className={`modal ${isOpen ? 'opened' : ''}`} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-header">
        <h2>{header}</h2>
        <button className="btn-close closemodale cursor" onClick={closeModal}>&times;</button>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </div>
  </div>, document.getElementById('modal-root'))
}
