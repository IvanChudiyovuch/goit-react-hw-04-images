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
    modalImage: '',
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModalHandler = largeImageURL => {
    this.setState({
      modalImage: largeImageURL,
      showModal: true,
    });
  };

  formSubmitHandler = inputValue => {
    this.setState({ inputValue });

    // this.setState(prevState => {
    //   return {
    //     inputValue: [...prevState.inputValue, ...data.inputValue],
    //   };
    // });
  };

  render() {
    const { showModal, modalImage } = this.state;
    return (
      <div>
        <Serchbar onSubmit={this.formSubmitHandler} />
        <ToastContainer autoClose={3000} />
        <ImageGallery
          inputValue={this.state.inputValue}
          onClick={this.openModalHandler}
        />
        {showModal && (
          <Modal onClose={this.togleModal} modalImage={modalImage} />
        )}
      </div>
    );
  }
}
