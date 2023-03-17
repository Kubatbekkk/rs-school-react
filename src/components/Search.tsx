import React, { Component } from 'react';
import type { SearchPropsType, SearchStateType } from 'types/types';

export class Search extends Component<SearchPropsType, SearchStateType> {
  constructor(props: SearchPropsType) {
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

  render(): JSX.Element {
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
