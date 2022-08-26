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
      inputValue: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

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
            <SearchFormButton type="submit" className="button">
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
