import React, { Component } from "react";
import Scroll from './Scroll';
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import "./index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      Searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((Response) => Response.json())
      .then((user) => this.setState({ robots: user }));
  }

  onsearchchange = (event) => {
    this.setState({ Searchfield: event.target.value });
  };
  render() {
    const filterroboys = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.Searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchchange={this.onsearchchange} />
          <Scroll>
            <Cardlist robots={filterroboys} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;