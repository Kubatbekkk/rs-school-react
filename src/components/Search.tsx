import React, { Component } from 'react';

type SearchProps = {};

interface SearchState {
  searchTerm: string;
}

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  componentDidMount(): void {
    const searchTerm = localStorage.getItem('searchTerm');
    if (searchTerm) {
      this.setState({ searchTerm });
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchTerm', this.state.searchTerm);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <input
        type="text"
        className="search"
        placeholder="Search"
        value={this.state.searchTerm}
        onChange={this.handleChange}
      />
    );
  }
}

export default Search;
