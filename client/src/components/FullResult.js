import React from "react";
const keys = require("../config/keys");
class FullResult extends React.Component {
  state = { loadedProperty: null };
  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Api-Key", keys.apiKey);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(
      "https://api.domain.com.au/v1/listings/" + this.props.id,
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ loadedProperty: result });
      })
      .catch(error => console.log("error", error));
  }
  render() {
    let post = <p>haha</p>;
    if (this.state.loadedProperty) {
      post = <h1>{this.state.loadedProperty.type}</h1>;
    }

    return (
      <div>
        <h1>{this.props.id}</h1>
        {post}
      </div>
    );
  }
}

export default FullResult;
