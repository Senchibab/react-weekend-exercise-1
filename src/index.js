import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        posts: response.data.map(columns => (
          <tr>
            <td>{columns.userId}</td>
            <td>{columns.id}</td>
            <td>{columns.title}</td>
            <td>{columns.body}</td>
          </tr>
        ))
      });
    });
  }

  render() {
    return (
      <div>
        <table> {this.state.posts} </table>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
