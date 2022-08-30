import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    modalImage: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeydown);
  }

  hendleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.hendleBackdropClick}>
        <ModalContent>
          <ModalImg src={this.props.modalImage} alt="" />
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
