import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      {/* Check if showMap prop is true, then display the map */}
      {props.showMap && (
        <div className="modal__map">
          <iframe
            title="Google Maps"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9044087223845!2d-74.013327684944!3d40.70490797933489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2bc0d159cf%3A0xa7f118ba27067624!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1644930262043!5m2!1sen!2sus`}
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className={`modal__content ${props.contentClass}`}>
        {props.children}
      </div>
      <footer className={`modal__footer ${props.footerClass}`}>
        {props.footer}
      </footer>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
