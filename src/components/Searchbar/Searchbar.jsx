import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
// import { toast } from 'react-toastify';
import { Component } from 'react';
import {
  Header,
  SerchForm,
  SearchFormInput,
  SearchFormButton,
  ButtonLabel,
} from './Serchbar.styled';

export class Serchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  hendalInputChange = event => {
    this.setState({
      inputValue: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.inputValue.trim() === '') {
      return Notiflix.Notify.warning(
        `Error Image with name ${this.state.inputValue} not found!`
      );
    }

    this.props.onSubmit(this.state.inputValue);

    this.reset();
  };

  reset = () => {
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <div>
        <Header>
          <SerchForm onSubmit={this.handleSubmit}>
            <SearchFormButton
              type="submit"
              img={`https://img.icons8.com/windows/72/search-more.png`}
            >
              <ButtonLabel>Search</ButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              value={this.state.inputValue}
              onChange={this.hendalInputChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SerchForm>
        </Header>
      </div>
    );
  }
}
