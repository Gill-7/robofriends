import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

class App extends Component {
  state = {
    searchFields: "",
    robots: [],
  };

  onSearchChange = (event) => {
    this.setState({
      searchFields: event.target.value,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }

  render() {
    const { robots, searchFields } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchFields.toLowerCase())
    );

    return robots.length === 0 ? (
      <p className="tc">Loading...</p>
    ) : (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />

        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
