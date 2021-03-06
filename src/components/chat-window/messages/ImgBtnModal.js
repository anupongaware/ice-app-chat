import React from 'react';
import { Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hook';

const ImgBtnModal = ({ src, fileName }) => {
  const { isOpen, open, close } = useModalState();

  return (
    <div>
      <input
        type="image"
        alt="file"
        src={src}
        onClick={open}
        className="mw-100 mh-100 w-auto"
      />
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{fileName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={src} height="100%" alt="file" />
        </Modal.Body>

        <Modal.Footer>
          <a href={src} target="_blank" rel="noopener noreferrer">
            View original
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImgBtnModal;
