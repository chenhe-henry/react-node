import React from "react";
import "../assets/Filter.scss";
import Result from "./Result";
// import Results from "./Results";
const keys = require("../config/keys");
class Filter extends React.Component {
  state = {
    listing: [],
    propertyType: "",
    priceMin: "",
    priceMax: "",
    bedroomMin: "",
    bedroomMax: "",
    bathroomMin: "",
    bathroomMax: "",
    parkingMin: "",
    parkingMax: ""
  };

  //   propertyTypeHandler = event => {
  //     this.setState({ propertyType: event.target.value });
  //   };
  //   priceMinHandler = event => {
  //     this.setState({ priceMin: event.target.value });
  //   };
  //   priceMaxHandler = event => {
  //     this.setState({ priceMax: event.target.value });
  //   };
  bedroomMinHandler = event => {
    this.setState({ bedroomMin: event.target.value });
    console.log(this.state);
  };
  //   bedroomMaxHandler = event => {
  //     this.setState({ bedroomMax: event.target.value });
  //   };
  //   bathroomMinHandler = event => {
  //     this.setState({ bathroomMin: event.target.value });
  //   };
  //   bathroomMaxHandler = event => {
  //     this.setState({ bathroomMax: event.target.value });
  //   };
  //   parkingMinHandler = event => {
  //     this.setState({ parkingMin: event.target.value });
  //   };
  //   parkingMaxHandler = event => {
  //     this.setState({ parkingMax: event.target.value });
  //   };
  submitHandler = event => {
    event.preventDefault();
    this.setState({ listing: [] });
    this.setState({ state: this.state });
    console.log(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.bedroomMin !== this.state.bedroomMin) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-Api-Key", keys.domainApiKey);
      var statelocate = ["NSW", "ACT", "QLD", "VIC", "SA", "WA", "NT", "TAS"];
      var raw = JSON.stringify({
        listingType: "Rent",
        propertyTypes: ["House"],
        propertyFeatures: ["AirConditioning"],
        listingAttributes: ["HasPhotos"],
        minBedrooms: this.state.bedroomMin,
        // maxBedrooms: this.props.maxBedrooms,
        // minBathrooms: this.props.minBathrooms,
        // maxBathrooms: this.props.maxBathrooms,
        // minCarspaces: this.props.minCarspaces,
        // maxCarspaces: this.props.maxCarspaces,
        // minPrice: this.props.minPrice,
        // maxPrice: this.props.maxPrice,
        // minLandArea: this.props.minLandArea,
        // maxLandArea: this.props.maxLandArea,
        pageSize: 3,
        locations: [
          {
            state: statelocate[Math.floor(Math.random() * 8)],
            region: "",
            area: "",
            suburb: "",
            postCode: "",
            includeSurroundingSuburbs: false
          }
        ]
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(
        "https://api.domain.com.au/v1/listings/residential/_search",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.setState({ listing: result });
        })
        .catch(error => console.log("error", error));
    }
  }

  render() {
    const listings = this.state.listing.map(l => {
      return (
        <div>
          <Result list={l.listing} key={l.listing.id} img={l.listing.media} />
        </div>
      );
    });

    return (
      <div className="section-filter">
        <form onSubmit={this.submitHandler}>
          {/* <input type="text" onChange={this.propertyTypeHandler}></input>
          <input type="text" onChange={this.priceMinHandler}></input>
          <input type="text" onChange={this.priceMaxHandler}></input> */}
          <input type="text" onChange={this.bedroomMinHandler}></input>
          {/* <input type="text" onChange={this.bedroomMaxHandler}></input>
          <input type="text" onChange={this.bathroomMinHandler}></input>
          <input type="text" onChange={this.bathroomMaxHandler}></input>
          <input type="text" onChange={this.parkingMinHandler}></input>
          <input type="text" onChange={this.parkingMaxHandler}></input> */}
          <input type="submit"></input>
        </form>
        <div>{listings}</div>
        {/* <Results
          //   propertyType={this.state.propertyType}
          //   priceMin={this.state.priceMin}
          //   priceMax={this.state.priceMax}
        //   bedroomMin={this.state.bedroomMin}
          //   bedroomMax={this.state.bedroomMax}
          //   bathroomMin={this.state.bathroomMin}
          //   bathroomMax={this.state.bathroomMax}
          //   parkingMin={this.state.parkingMin}
          //   parkingMax={this.state.parkingMax}
        /> */}
      </div>
    );
  }
}

export default Filter;
