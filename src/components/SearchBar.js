import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="header">Search by Email</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={e => this.setState({ searchText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
