import { Component } from 'react';
import { Serchbar } from './Searchbar/Searchbar';

export class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Serchbar onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
