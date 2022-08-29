import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './Gallery/ImageGallery';
import 'react-toastify/dist/ReactToastify.css';
import { Serchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    inputValue: '',
    showModal: false,
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitHandler = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Serchbar onSubmit={this.formSubmitHandler} />
        <ToastContainer autoClose={3000} />
        <ImageGallery inputValue={this.state.inputValue} />
        {showModal && (
          <Modal onClose={this.togleModal}>
            <h1>Hello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              iusto fugit eos recusandae a iure quos ducimus nobis excepturi id
              nisi repellat, voluptatibus in nihil beatae et eum? Repellendus,
              iure.
            </p>
            <button type="button" onClick={this.togleModal}>
              Close modal
            </button>
          </Modal>
        )}
        <button type="button" onClick={this.togleModal}>
          Open modal
        </button>
      </div>
    );
  }
}
