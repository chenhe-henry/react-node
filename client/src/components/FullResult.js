import React from "react";
import "../assets/FullResult.scss";
const keys = require("../config/keys");
class FullResult extends React.Component {
  state = { loadedProperty: null, id: null };
  componentDidMount() {
    console.log(this.props.history.location.state.id);
    this.setState({ id: this.props.history.location.state.id });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-Api-Key", "key_358bea2380f4e7f0acb999de88b0b4e9");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      fetch(
        "https://api.domain.com.au/v1/listings/" + this.state.id,
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.setState({ loadedProperty: result });
        })
        .catch(error => console.log("error", error));
    }
  }
  render() {
    let post = "";
    if (this.state.loadedProperty) {
      post = (
        <div className="full-result">
          <h1>{this.state.loadedProperty.headline}</h1>
          <p>Bedrooms: {this.state.loadedProperty.bedrooms}</p>
          <p>Bathrooms: {this.state.loadedProperty.bathrooms}</p>
          <p>Carspaces: {this.state.loadedProperty.carspaces}</p>
          <div>
            {this.state.loadedProperty.media.map((i, index) => (
              <img
                key={index}
                src={i.url}
                height="300px"
                width="400px"
                alt="pics"
              ></img>
            ))}
          </div>
          <p>Description: {this.state.loadedProperty.description}</p>
          <p>
            Address: {this.state.loadedProperty.addressParts.displayAddress}
          </p>
          <p>Date available: {this.state.loadedProperty.dateAvailable}</p>
        </div>
      );
    }

    return <div>{post}</div>;
  }
}

export default FullResult;
