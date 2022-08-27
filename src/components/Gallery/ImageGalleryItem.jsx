export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <img src={webformatURL} alt="" loading="lazy" width="250" height="250" />
    </>
  );
};
