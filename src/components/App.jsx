import { Component } from 'react';
import Notiflix from 'notiflix';
import { ImageGallery } from './Gallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Serchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { GetImages } from './Fetch/Fetch';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    showModal: false,
    modalImage: '',
    page: 1,
    images: [],
    isLoading: false,
    isNotLastPage: false,
    isEmpty: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.reciveImagesData();
    }

    if (page !== 1) {
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }

  async reciveImagesData() {
    const { images, query, page } = this.state;

    this.setState({ isLoading: true });
    const { imagesData, totalHits } = await GetImages(query, page);

    if (totalHits) {
      this.setState(prevState => ({
        images: [...prevState.images, ...imagesData],
      }));
    }

    this.setState({
      isNotLastPage: images.length + imagesData.length < totalHits,
      isLoading: false,
      isEmpty: !totalHits,
    });
  }

  formSubmitHandler = query => {
    if (query) {
      this.setState({
        images: [],
        page: 1,
        query,
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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

  render() {
    const {
      query,
      images,
      showModal,
      modalImage,
      isLoading,
      isNotLastPage,
      isEmpty,
    } = this.state;
    return (
      <div>
        <Serchbar onSubmit={this.formSubmitHandler} />
        {images.length > 0 && (
          <ImageGallery onClick={this.openModalHandler} images={images} />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          isNotLastPage && <Button onClick={this.loadMore}>Load more</Button>
        )}
        {isEmpty &&
          Notiflix.Notify.warning(`Error Image with name ${query} not found!`)}
        {showModal && (
          <Modal onClose={this.togleModal} modalImage={modalImage} />
        )}
      </div>
    );
  }
}
