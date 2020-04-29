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
  render() {
    let post = "";
    if (this.state.loadedProperty) {
      if (this.state.loadedProperty.features) {
        post = (
          <div className="full-result">
            <h1>{this.state.loadedProperty.headline}</h1>
            <h3>
              <i class="fas fa-bed"></i>
              <strong>Bedrooms:</strong> {this.state.loadedProperty.bedrooms}
            </h3>
            <h3>
              <i class="fas fa-bath"></i>
              <strong>Bathrooms:</strong> {this.state.loadedProperty.bathrooms}
            </h3>
            <h3>
              <i class="fas fa-car"></i>
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
                <a href={i.url} target="_blank" rel="noopener noreferrer">
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
              <div className="full-result-preText">
                {this.state.loadedProperty.description}
              </div>
            </p>
            <h3>
              <strong>Features:</strong>
            </h3>
            <div>
              <ul>
                {this.state.loadedProperty.features.map((f) => (
                  <li>{f}</li>
                ))}
              </ul>
            </div>
            <SimpleMap
              latAdd={this.state.loadedProperty.geoLocation.latitude}
              lngAdd={this.state.loadedProperty.geoLocation.longitude}
            />
          </div>
        );
      } else {
        post = (
          <div className="full-result">
            <h1>{this.state.loadedProperty.headline}</h1>
            <h3>
              <i class="fas fa-bed"></i>
              <strong>Bedrooms:</strong> {this.state.loadedProperty.bedrooms}
            </h3>
            <h3>
              <i class="fas fa-bath"></i>
              <strong>Bathrooms:</strong> {this.state.loadedProperty.bathrooms}
            </h3>
            <h3>
              <i class="fas fa-car"></i>
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
                <a href={i.url} target="_blank" rel="noopener noreferrer">
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
              <div className="full-result-preText">
                {this.state.loadedProperty.description}
              </div>
            </p>
            <SimpleMap
              latAdd={this.state.loadedProperty.geoLocation.latitude}
              lngAdd={this.state.loadedProperty.geoLocation.longitude}
            />
          </div>
        );
      }
    }

    return <div>{post}</div>;
  }
}

export default FullResult;
