import Header from './components/Header';
import React from 'react';
import './App.css';

type AppState = Readonly<{ count: number }>;

class App extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return <Header />;
  }
}

export default App;
