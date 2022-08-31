import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { List, ListItem } from './Gallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <List>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ListItem key={id}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={onClick}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
