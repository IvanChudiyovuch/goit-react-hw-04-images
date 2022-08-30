import { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from './ImageGalleryItem';
import { List, ListItem, Title } from './Gallery.styled';

export class ImageGallery extends Component {
  static propTypes = {
    inputValue: PropTypes.string.isRequired,
  };

  state = {
    page: 1,
    images: null,
    error: null,
    status: 'idle',
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const userImageURL = 'https://pixabay.com/api/';
    const API_KEY = '28317670-7d33057fc4b50d7a50d831995';

    if (
      prevProps.inputValue !== this.props.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      fetch(
        `${userImageURL}?key=${API_KEY}&q=${this.props.inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=12`
      )
        .then(respons => {
          if (respons.ok) {
            return respons.json();
          }

          return Promise.reject(
            new Error(`The image ${this.props.inputValue} not faund !!!`)
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <Title>Enter name image!</Title>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <Title>{error.massage}</Title>;
    }

    if (images.hits.length === 0) {
      return <Title>The image {this.props.inputValue} not found!!!</Title>;
    }

    if (status === 'resolved') {
      return (
        <>
          <List>
            {images.hits.map(({ id, webformatURL, largeImageURL }) => (
              <ListItem key={id}>
                <ImageGalleryItem
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  onClick={this.props.onClick}
                />
              </ListItem>
            ))}
          </List>

          <button onClick={this.loadMore} type="button">
            Load more
          </button>
        </>
      );
    }
  }
}
