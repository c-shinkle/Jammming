import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.term = {};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleSearch() {
    this.props.searchSpotify();
  }

  handleTermChange(event) {
    this.setState({term: event.target.value})
  }

  search() {

  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" 
          onChange={this.handleTermChange}/>
        {/*eslint-disable-next-line*/}
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;