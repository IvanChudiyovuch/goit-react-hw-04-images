import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './Gallery/ImageGallery';
import { Serchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    inputValue: '',
  };

  formSubmitHandler = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <div>
        <Serchbar onSubmit={this.formSubmitHandler} />
        <ToastContainer autoClose={3000} />
        <ImageGallery inputValue={this.state.inputValue} />
      </div>
    );
  }
}
