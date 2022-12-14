import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import Notiflix from 'notiflix';
import { ImageGallery } from './Gallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Serchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { GetImages } from './Fetch/Fetch';
import { Button } from './Button/Button';

export const App = () => {
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotLastPage, setIsNotLastPage] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    (async () => {
      setIsLoading(true);
      const { imagesData, totalHits, lastPage } = await GetImages(query, page);

      if (totalHits) {
        setImages(prevState => [...prevState, ...imagesData]);
      }

      setIsNotLastPage(!lastPage);
      setIsLoading(false);
      setIsEmpty(!totalHits);

      if (page !== 1) {
        animateScroll.scrollToBottom();
      }
    })();
  }, [page, query]);

  const formSubmitHandler = query => {
    if (query) {
      setImages([]);
      setPage(1);
      setQuery(query);
    }
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const togleModal = () => {
    setShowModal(!showModal);
  };

  const openModalHandler = largeImageURL => {
    setModalImage(largeImageURL);
    setShowModal(true);
  };

  return (
    <div>
      <Serchbar onSubmit={formSubmitHandler} />
      {images.length > 0 && (
        <ImageGallery onClick={openModalHandler} images={images} />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        isNotLastPage && <Button onClick={loadMore}>Load more</Button>
      )}
      {isEmpty &&
        Notiflix.Notify.warning(`Error Image with name ${query} not found!`)}
      {showModal && <Modal onClose={togleModal} modalImage={modalImage} />}
    </div>
  );
};
