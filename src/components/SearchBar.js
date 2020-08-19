import React from "react";

class SearchBar extends React.Component {
  state = { query: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onQuerySubmit(this.state.query);
  };

  onInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <div className="searchbar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
