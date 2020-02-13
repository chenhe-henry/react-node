import React from "react";
import "../assets/FullResult.scss";
const keys = require("../config/keys");
class FullResult extends React.Component {
  state = { loadedProperty: null };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-Api-Key", keys.domainApiKey);

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
  }
  render() {
    let post = "";
    if (this.state.loadedProperty) {
      post = (
        <div className="full-result">
          <h1>Hi, this is property No.{this.props.id}</h1>
          <p>Bedrooms: {this.state.loadedProperty.bedrooms}</p>
          <p>Bathrooms: {this.state.loadedProperty.bathrooms}</p>
          <p>Carspaces: {this.state.loadedProperty.carspaces}</p>
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
