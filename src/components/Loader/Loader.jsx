import { TailSpin } from 'react-loader-spinner';
import { Load } from './Loader.styled';

export const Loader = () => {
  return (
    <Load>
      <TailSpin />
    </Load>
  );
};
