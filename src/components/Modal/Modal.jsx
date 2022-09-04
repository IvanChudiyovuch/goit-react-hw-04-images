import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ modalImage, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeydown);
  });

  const hendleKeydown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const hendleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={hendleBackdropClick}>
      <ModalContent>
        <ModalImg src={modalImage} alt="" />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
