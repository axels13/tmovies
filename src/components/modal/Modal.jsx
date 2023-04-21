import React from "react";
import "./Modal.css";
const Modal = ({ video, onClose }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__container">
        <button className="modal__close" onClick={onClose}>
          <i className="ri-close-fill"></i>
        </button>
        <div className="modal__video">
          <iframe
            title={video.name}
            src={`https://www.youtube.com/embed/${video.key}`}
            allowFullScreen
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
