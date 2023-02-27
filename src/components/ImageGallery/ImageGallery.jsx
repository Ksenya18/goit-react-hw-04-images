import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images }) {
  return (
    <ul className={css.gallery}>
      {images !== null &&
        images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          );
        })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
