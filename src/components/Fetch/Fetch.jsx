import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const GetImages = async (search, page) => {
  const params = new URLSearchParams({
    key: '28317670-7d33057fc4b50d7a50d831995',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  });

  try {
    const {
      data: { hits, totalHits },
    } = await axios.get(`?${params}`);

    const imagesData = hits.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    }));
    return { imagesData, totalHits };
  } catch (err) {
    console.log(err);
  }
};
