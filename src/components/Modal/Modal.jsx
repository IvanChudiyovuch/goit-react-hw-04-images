import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeydown);
  }

  componentWillUnmount() {
    console.log('modal unmount');

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
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
