import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useState } from 'react';
import {
  Header,
  SerchForm,
  SearchFormInput,
  SearchFormButton,
  ButtonLabel,
} from './Serchbar.styled';

export const Serchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const hendalInputChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return Notiflix.Notify.warning(
        `Error Image with name ${inputValue} not found!`
      );
    }

    onSubmit(inputValue);

    reset();
  };

  const reset = () => {
    setInputValue('');
  };

  return (
    <div>
      <Header>
        <SerchForm onSubmit={handleSubmit}>
          <SearchFormButton
            type="submit"
            img={`https://img.icons8.com/windows/72/search-more.png`}
          >
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={inputValue}
            onChange={hendalInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SerchForm>
      </Header>
    </div>
  );
};

Serchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
