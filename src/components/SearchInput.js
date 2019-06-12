import React from "react";
import { Input } from "semantic-ui-react";

class SearchInput extends React.Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  onBtnClick = () => {
    console.log(this.state.term);
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field" />
            <label>Image Search</label>
            <Input
              fluid
              icon="search"
              placeholder="Search photos..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchInput;
