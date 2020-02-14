import React from "react";
import "../assets/Filter.scss";
import Results from "./Results";
import { Link } from "react-router-dom";
import FullResult from "./FullResult";
// import Results from "./Results";
const keys = require("../config/keys");
class Filter extends React.Component {
  state = {
    listing: [],
    searchData: [],
    selectedListingId: null
  };

  submitHandler = event => {
    event.preventDefault();
    const propertyType = this.propertyType.value;
    const priceMin = this.priceMin.value;
    const priceMax = this.priceMax.value;
    const bedroomMin = this.bedroomMin.value;
    const bedroomMax = this.bedroomMax.value;
    const bathroomMin = this.bathroomMin.value;
    const bathroomMax = this.bathroomMax.value;
    const parkingMin = this.parkingMin.value;
    const parkingMax = this.parkingMax.value;
    const searchData = {
      propertyType: propertyType,
      priceMin: priceMin,
      priceMax: priceMax,
      bedroomMin: bedroomMin,
      bedroomMax: bedroomMax,
      bathroomMin: bathroomMin,
      bathroomMax: bathroomMax,
      parkingMin: parkingMin,
      parkingMax: parkingMax
    };

    this.setState({ listing: [] });
    this.setState({ searchData });
    console.log(this.state.searchData);
  };
  imgSeletedHandler = id => {
    this.setState({ selectedListingId: id });
    console.log("id :", id);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchData !== this.state.searchData) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-Api-Key", "key_358bea2380f4e7f0acb999de88b0b4e9");
      var statelocate = ["NSW", "ACT", "QLD", "VIC", "SA", "WA", "NT", "TAS"];
      var raw = JSON.stringify({
        listingType: "Rent",
        propertyTypes: ["House"],
        propertyFeatures: ["AirConditioning"],
        listingAttributes: ["HasPhotos"],
        minBedrooms: this.state.searchData.bedroomMin,
        maxBedrooms: this.state.searchData.bedroomMax,
        minBathrooms: this.state.searchData.bathroomMin,
        maxBathrooms: this.state.searchData.bathroomMax,
        minCarspaces: this.state.searchData.parkingMin,
        maxCarspaces: this.state.searchData.parkingMax,
        minPrice: this.state.searchData.priceMin,
        maxPrice: this.state.searchData.priceMax,
        minLandArea: this.state.searchData.minLandArea,
        maxLandArea: this.state.searchData.maxLandArea,
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
      console.log(raw);
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
    const listings = this.state.listing.map((l, index) => {
      return (
        <div key={index} className="section-filter__results">
          <Results
            key={l.listing.id}
            list={l.listing}
            img={l.listing.media}
            clicked={() => this.imgSeletedHandler(l.listing.id)}
          />
        </div>
      );
    });

    return (
      <div className="section-filter">
        <form
          onSubmit={this.submitHandler}
          className="section-filter__search-box"
        >
          <select>
            <option value="NSW">NSW</option>
            <option value="VIC">VIC</option>
            <option value="QLD">QLD</option>
            <option value="SA">SA</option>
            <option value="WA">WA</option>
            <option value="ACT">ACT</option>
            <option value="NT">NT</option>
            <option value="TAS">TAS</option>
          </select>
          <input
            type="text"
            onChange={this.propertyTypeHandler}
            placeholder="propertyType"
            ref={input => (this.propertyType = input)}
          ></input>
          <input
            type="text"
            onChange={this.priceMinHandler}
            placeholder="priceMin"
            ref={input => (this.priceMin = input)}
          ></input>
          <input
            type="text"
            onChange={this.priceMaxHandler}
            placeholder="priceMax"
            ref={input => (this.priceMax = input)}
          ></input>
          <form>
            <label for="bedroomMin">Bedroom Min</label>
            <input
              id="bedroomMinInput"
              type="range"
              min="0"
              max="5"
              onChange={this.bedroomMinHandler}
              placeholder="bedroomMin"
              ref={input => (this.bedroomMin = input)}
            ></input>
          </form>
          <input
            type="range"
            min="1"
            max="7"
            onChange={this.bedroomMaxHandler}
            placeholder="bedroomMax"
            ref={input => (this.bedroomMax = input)}
          ></input>
          <input
            type="text"
            onChange={this.bathroomMinHandler}
            placeholder="bathroomMin"
            ref={input => (this.bathroomMin = input)}
          ></input>
          <input
            type="text"
            onChange={this.bathroomMaxHandler}
            placeholder="bathroomMax"
            ref={input => (this.bathroomMax = input)}
          ></input>
          <input
            type="text"
            onChange={this.parkingMinHandler}
            placeholder="parkingMin"
            ref={input => (this.parkingMin = input)}
          ></input>
          <input
            type="text"
            onChange={this.parkingMaxHandler}
            placeholder="parkingMax"
            ref={input => (this.parkingMax = input)}
          ></input>

          <input type="submit"></input>
        </form>
        <div>{listings}</div>
      </div>
    );
  }
}

export default Filter;
