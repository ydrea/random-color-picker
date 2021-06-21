import React, { Component } from "react";

class App extends Component {
  state = { items: [], isLoading: true, error: null };

  componentDidMount() {
    fetch("https://www.colr.org/json/colors/random/#")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoading: false,
          items: json.colors,
        });
      })
      .catch((error) =>
        this.setState({ error: error.message, isLoading: false })
      );
  }

  renderColors = () => {
    const { items, isLoading, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {items.map((item) => (
          <div key={item.id}>Hex: {item.hex}</div>
        ))}
      </div>
    );
  };

  render() {
    return <div>{this.renderColors()}</div>;
  }
}

export default App;
