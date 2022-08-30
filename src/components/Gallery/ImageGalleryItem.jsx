import PropTypes from 'prop-types';
import { ListImage } from './Gallery.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  const setModalImage = () => {
    onClick(largeImageURL);
  };
  return (
    <>
      <ListImage
        src={webformatURL}
        onClick={setModalImage}
        alt=""
        loading="lazy"
        width="240"
        height="240"
      />
    </>
  );
};

ImageGalleryItem.prototype = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
