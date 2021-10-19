import React from "react";
import "../assets/FullResult.scss";
import SimpleMap from "./SimpleMap";

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
      myHeaders.append("X-Api-Key", "key_d247f2a2fb593f08045e175d2e8bd9b3");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://api.domain.com.au/v1/listings/" + this.state.id,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          this.setState({ loadedProperty: result });
        })
        .catch((error) => console.log("error", error));
    }
  }
  navigation = () => {
    window.open(
      `https://www.google.com/maps/?q=${this.state.loadedProperty.addressParts.displayAddress}`
    );
  };
  render() {
    let post = "";
    let result = this.state.loadedProperty;
    let feature =
      result && result.features ? (
        <div>
          <h3>
            <strong>Features:</strong>
          </h3>
          <ul>
            {result.features.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      );
    if (result) {
      post = (
        <div className="full-result">
          <h1>{result.headline}</h1>
          <h3>
            <i className="fas fa-bed icon"></i>
            <strong>Bedrooms:</strong> {result.bedrooms}
          </h3>
          <h3>
            <i className="fas fa-bath icon"></i>
            <strong>Bathrooms:</strong> {result.bathrooms}
          </h3>
          <h3>
            <i className="fas fa-car icon"></i>
            <strong>Carspaces:</strong> {result.carspaces}
          </h3>
          <h3 onClick={this.navigation}>
            <strong>Address:</strong>
            {result.addressParts.displayAddress}
          </h3>
          <h3>
            <strong>Date available: </strong>
            {result.dateAvailable}
          </h3>
          <div className="images">
            {/* <Carousel> */}
            {result.media.map((i, index) => (
              // <Carousel.Item id={index}>
              <a
                href={i.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
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
          {feature}
          <div>
            <strong>
              <h3>Description: </h3>
            </strong>
            <div className="full-result-preText">{result.description}</div>
          </div>
          <SimpleMap
            latAdd={result.geoLocation.latitude}
            lngAdd={result.geoLocation.longitude}
          />
        </div>
      );
    }

    return <div>{post}</div>;
  }
}

export default FullResult;
