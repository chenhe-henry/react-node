import React from "react";
import "../assets/FullResult.scss";

// import Carousel from "react-bootstrap/Carousel";
// const keys = require("../config/keys");
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
          <h3>
            <strong>Bedrooms:</strong> {this.state.loadedProperty.bedrooms}
          </h3>
          <h3>
            <strong>Bathrooms:</strong> {this.state.loadedProperty.bathrooms}
          </h3>
          <h3>
            <strong>Carspaces:</strong> {this.state.loadedProperty.carspaces}
          </h3>
          <h3>
            <strong>Address:</strong>{" "}
            {this.state.loadedProperty.addressParts.displayAddress}
          </h3>
          <h3>
            <strong>Date available: </strong>
            {this.state.loadedProperty.dateAvailable}
          </h3>
          <div>
            {/* <Carousel> */}
            {this.state.loadedProperty.media.map((i, index) => (
              // <Carousel.Item id={index}>
              <a href={i.url} target="_blank">
                <img
                  key={index}
                  src={i.url}
                  height="300px"
                  width="400px"
                  alt="pics"
                  className="full-result-img"
                ></img>
              </a>
              // </Carousel.Item>
            ))}
            {/* </Carousel> */}
          </div>
          <p>
            <strong>
              <h3>Description: </h3>
            </strong>
            {this.state.loadedProperty.description}
          </p>
          <h3>
            <strong>Features:</strong>
          </h3>
          <div>
            <ul>
              {this.state.loadedProperty.features.map(f => (
                <li>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return <div>{post}</div>;
  }
}

export default FullResult;
