import { ListImage } from './Gallery.styled';

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <ListImage
        src={webformatURL}
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
};
