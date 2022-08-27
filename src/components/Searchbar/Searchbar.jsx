import { toast } from 'react-toastify';
import { Component } from 'react';
import {
  Header,
  SerchForm,
  SearchFormInput,
  SearchFormButton,
  ButtonLabel,
} from './Serchbar.styled';

export class Serchbar extends Component {
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
      toast.error('Error Notification !', {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
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
