import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  handleSearch() {
    this.props.searchSpotify();
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"/>
        {/*eslint-disable-next-line*/}
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;